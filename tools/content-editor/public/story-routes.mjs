// Routes join editor-authored continuation scenes. Scheduled events are entry points.
export function inspectRoutes(scenes){
  const byId=new Map(scenes.map(scene=>[scene.id,scene]));
  const issues=[];
  const reachable=new Set();
  function visit(id){
    if(reachable.has(id))return;
    reachable.add(id);
    for(const choice of byId.get(id)?.choices??[]){
      if(byId.get(choice[5]?.next)?.linked)visit(choice[5].next);
    }
  }
  for(const scene of scenes)if(!scene.linked)visit(scene.id);
  const visiting=new Set(),done=new Set();
  function check(scene){
    if(done.has(scene.id))return;
    visiting.add(scene.id);
    scene.choices.forEach((choice,index)=>{
      const next=choice[5]?.next;
      if(!next)return;
      const target=byId.get(next);
      let message;
      if(!target?.linked)message="연결 대상이 없거나 월말에 독립 실행되는 장면입니다.";
      else if(visiting.has(next))message="연결을 따라가면 앞 장면으로 되돌아옵니다.";
      else check(target);
      if(message)issues.push({level:"error",id:scene.id,index,message});
    });
    visiting.delete(scene.id);
    done.add(scene.id);
  }
  for(const scene of scenes){
    check(scene);
    if(scene.linked&&!reachable.has(scene.id))issues.push({level:"warning",id:scene.id,message:"이 장면으로 이어지는 시작 이벤트가 없습니다."});
  }
  return issues;
}
