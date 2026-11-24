const opened=new Promise((resolve,reject)=>{
  const request=indexedDB.open("phantomhive-web-editor",1);
  request.onupgradeneeded=()=>request.result.createObjectStore("workspace");
  request.onsuccess=()=>resolve(request.result);
  request.onerror=()=>reject(request.error);
});

export async function read(key) {
  const db=await opened;
  return new Promise((resolve,reject)=>{
    const request=db.transaction("workspace").objectStore("workspace").get(key);
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
  });
}

export async function write(key,value,expectedRevision) {
  const db=await opened;
  return new Promise((resolve,reject)=>{
    const transaction=db.transaction("workspace","readwrite");
    const store=transaction.objectStore("workspace");
    let conflict=false;
    function update(){
      if(value===undefined) store.delete(key);
      else store.put(value,key);
    }
    if(expectedRevision===undefined)update();
    else {
      const request=store.get(key);
      request.onsuccess=()=>{
        if((request.result?.revision??"initial")!==expectedRevision){
          conflict=true;
          transaction.abort();
        }else update();
      };
    }
    transaction.oncomplete=()=>resolve();
    transaction.onabort=()=>reject(conflict?new Error("다른 탭에서 저장했습니다. 변경을 복사한 뒤 새로고침해 주세요."):transaction.error);
  });
}

export async function releaseKeys(){
  const db=await opened;
  return new Promise((resolve,reject)=>{
    const req=db.transaction("workspace").objectStore("workspace").getAllKeys(IDBKeyRange.bound("release:","release:\uffff"));
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
