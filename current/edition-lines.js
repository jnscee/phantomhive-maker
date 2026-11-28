// Display text indexed by the original Korean. Columns: English, Japanese.
const editionLines = {"{slot}에는 「{activity}」 일정이 있습니다. 이번에는 저택에서 쉬시겠습니까?":
["You have “{activity}” scheduled for {slot}. Would you care to rest at the manor instead?","{slot}には「{activity}」のご予定がございます。今回はお屋敷でお休みになりますか？"],"저택에서 쉰다":
["Rest at the manor","屋敷で休む"],"예정대로 진행한다":
["Keep the scheduled activity","予定どおりにする"],"이번 일정을 저택 휴식으로 변경":
["Replaced this activity with rest at the manor","今回の予定を屋敷での休養に変更"],"예정된 일정 유지":
["Kept the scheduled activity","予定どおりに実施"],"도련님, 오늘은 같은 줄을 세 번이나 읽으셨습니다. 다음 일정에는 쉴 시간도 조금 남겨 두시지요.":
["Young master, you have read that line three times today. Might I suggest leaving a little time to rest in your next schedule?","坊ちゃん、今日は同じ行を三度もお読みですよ。次のご予定には、お休みになる時間も少しお取りください。"],"가족":
["Family","家族"],"개":
["units","個"],"건":
["cases","件"],"건강":
["Health","健康"],"계약":
["Contract","契約"],"교육":
["Education","教育"],"구매":
["Buy","購入"],"끝":
["The End","終"],"년":
["year","年"],"다음":
["Next","次へ"],"명":
["people","人"],"사건":
["Event","事件"],"상태":
["Status","ステータス"],"설정":
["Settings","設定"],"세":
["years old","歳"],"아이":
["Child","子供"],"어린이":
["Child","子ども"],"예정":
[" planned","の予定"],"월":
["month","月"],"이상":
[" or higher","以上"],"이전":
["Previous","前へ"],"점":
["points","点"],"증가":
["Increase","上昇"],"지난":
["past","過去"],"참가":
["Enter","参加"],"현재":
["Current","現在"],"확인":
["Confirm","決定"],"회":
["times","回"],"가난":
["Poverty","困窮"],"감소":
["Decrease","低下"],"강평":
["Assessment","講評"],"개 ·":
[" units · ","個 · "],"개 기록":
[" recorded","件記録"],"개당":
["Per unit","1個あたり"],"개발 ·":
["Develop · ","開発 · "],"개발실":
["Development room","開発室"],"개월":
["months","か月"],"게임 시작":
["New game","はじめから"],"결과 확인":
["View results","結果を確認"],"결산":
["Monthly accounts","月次決算"],"경비":
["Guard duty","警備"],"경영":
["Management","経営"],"계약 계속":
["Continue the contract","契約を進める"],"교류":
["Social visits","交流"],"귀빈":
["Distinguished guest","来賓"],"금상":
["Gold Award","金賞"],"기품":
["Refinement","気品"],"꼬":
["꼬","꼬"],"네!":
["Yes!","はい！"],"다시 보기":
["Replay","もう一度見る"],"다음 달":
["Next month","来月"],"다음에":
["Another time","また今度"],"다크":
["Dark","ダーク"],"단계":
["levels","段階"],"담당":
["Person in charge","担当"],"대기":
["On standby","待機"],"대폭":
["Large","大幅"],"대화":
["Talk","会話"],"독백":
["Monologue","独白"],"동점":
["Tie","同点"],"뒤로":
["Back","戻る"],"또쥐":
["또쥐","또쥐"],"라우":
["Lau","劉"],"마지막 기록":
["Final record","最後の記録"],"마침":
["Finish","終了"],"매각":
["Sell","売却"],"매력":
["Charm","魅力"],"매출":
["Sales revenue","売上高"],"메뉴":
["Menu","メニュー"],"몸 상태":
["Physical condition","体調"],"뭐?":
["What?","何だって？"],"방문 가능":
[" available to visit","を訪問可能"],"방문 계속":
["Continue the visit","訪問を続ける"],"벨":
["Bell","ベル"],"변동":
["Change","変動"],"병중":
["Ill","療養中"],"보관":
["Storage","保管"],"보상":
["Rewards","報酬"],"보안":
["Security","防犯"],"보충":
[" · further practice"," 補習"],"부담":
[" charge","を負担"],"사건 결과":
["Event outcome","事件の結果"],"사건 기록":
["Case records","事件記録"],"사건 조사":
["Investigate a case","事件調査"],"사건 확인":
["View event","出来事を確認"],"사교":
["Social graces","社交"],"사내":
["Man","男"],"사업가":
["Businessman","実業家"],"사탕":
["Sweets","キャンディ"],"상금":
["Prize money","賞金"],"상대":
["Opponent","対戦相手"],"상순":
["Early","上旬"],"상승":
[" increase","上昇"],"상점":
["Shop","店"],"상품 개발":
["Product development","商品開発"],"상품 구매":
["Buy goods","商品購入"],"생산량":
["Production quantity","生産数"],"생산비":
["Production cost","生産費"],"서재":
["Library","書斎"],"선물":
["Gift","贈り物"],"선택 결과":
["Choice outcome","選択の結果"],"선택 시설":
["Selected facility","選択中の施設"],"성과":
["Results","成果"],"소년":
["Boy","少年"],"소마":
["Soma","ソーマ"],"소식":
["News","ニュース"],"소폭":
["Slight","小幅"],"수선":
["Repairs","修繕"],"수요":
["Demand","需要"],"수첩":
["Notebook","手帳"],"스트레스":
["Stress","ストレス"],"슬롯":
["Slot ","スロット "],"승리":
["Victory","勝利"],"승마":
["Riding","乗馬"],"승패":
["How the winner is decided","勝敗の決め方"],"시설 상태":
["Facility condition","施設の状態"],"시설 선택":
["Select a facility","施設を選択"],"시설 효과":
["Facility effects","施設の効果"],"시엘":
["Ciel","シエル"],"신뢰":
["Trust","信頼"],"실적":
["Track record","実績"],"실패":
["Failure","失敗"],"실행":
["Begin","開始"],"심사":
["Judging","審査"],"악마":
["Demon","悪魔"],"안내 계속":
["Continue the guide","案内を続ける"],"어?":
["Huh?","えっ？"],"업무 효과":
["Duty effect","業務効果"],"에서":
["in","で"],"연구소":
["Laboratory","研究所"],"연구원":
["Researcher","研究員"],"완납":
["Delivered in full","完納"],"완료":
["Complete","完了"],"왕실":
["The Crown","王室"],"왕자":
["Prince","王子"],"요양":
["Recuperation","療養"],"우유":
["우유","우유"],"운송":
["Freight","運送費"],"원가":
["Unit cost","原価"],"월말":
["Month-end","月末"],"으로":
["to","へ"],"은상":
["Silver Award","銀賞"],"음량":
["Volume","音量"],"음악실":
["Music room","音楽室"],"의사":
["Doctor","医師"],"의욕":
["Motivation","意欲"],"의지":
["Resolve","意志"],"이달":
["This month","今月"],"이어하기":
["Continue","つづきから"],"일정 사건":
["Scheduled event","日程中の出来事"],"일정 시작":
["Start schedule","日程開始"],"일정 진행":
["Schedule in progress","日程進行中"],"일정표":
["Schedule","予定表"],"입금":
[" received","を入金"],"입니다.":
[".","です。"],"장면":
["Narration","地の文"],"재고":
["Stock","在庫"],"재료":
["Materials","材料"],"저는—":
["I am—","私は――"],"저장":
["Save","セーブ"],"저택":
["Manor","屋敷"],"절감":
[" saved","削減"],"점 차":
["-point margin","点差"],"정보상":
["Information Broker","情報屋"],"정원":
["Garden","庭園"],"제작 참고":
["Creative influences","参考作品"],"제작실":
["Workshop","製作室"],"주방":
["Kitchen","厨房"],"주요 고객":
["Principal customers","主な顧客"],"준비 중":
["Coming soon","準備中"],"준비비":
["Preparation costs","準備費"],"중간":
["Moderate","中程度"],"중순":
["Mid","中旬"],"증감":
["Change","増減"],"증빙":
["Documentation","証拠書類"],"지성":
["Intellect","知性"],"지출":
["Expenses","支出"],"집사":
["Butler","執事"],"창밖":
["Outside the Window","窓の外"],"채무":
["Debt","負債"],"처음부터":
["Start over","最初から"],"첫 안내":
["Getting started","はじめての手引き"],"청결":
["Cleanliness","清潔さ"],"청소":
["Cleaning","掃除"],"체력":
["Stamina","体力"],"초과":
["Excess","超過"],"추적":
["Pursuit","追跡"],"충족":
["Met","達成"],"취소":
["Cancel","キャンセル"],"침실":
["Bedroom","寝室"],"타운":
["Town","タウン"],"탕":
["Bang!","パンッ！"],"통과":
[" passed"," 合格"],"통찰":
["Insight","洞察"],"판매 가능":
[" available for sale","を販売可能"],"판매 상품":
["Goods for sale","販売商品"],"판매가":
["Retail price","販売価格"],"판매점":
["Shop","販売店"],"패배":
["Defeat","敗北"],"평판":
["Reputation","評判"],"폭염":
["Heatwave","猛暑"],"품격":
["Prestige","品格"],"하.":
["Hah.","ふん。"],"하락":
[" decrease","低下"],"하순":
["Late","下旬"],"하우스":
["House","ハウス"],"하지만,":
["But…","だが、"],"학술":
["Academics","学問"],"한국어":
["Korean","韓国語"],"한파":
["Cold snap","寒波"],"합류":
[" joined","が加入"],"항목":
["Item","項目"],"협상":
["Negotiation","交渉"],"호평":
["Well received","好評"],"화이트":
["Light","ライト"],"활동 목록":
[" activities","の活動一覧"],"회 /":
[" wins / ","回優勝 / "],"회 참가":
[" entries","回出場"],"회사 기반":
["Company foundations","会社の基盤"],"효과음":
["Sound effects","効果音"],"휴식":
["Rest","休息"],"+2개":
["+2 units","＋2個"],"/ 생산비":
[" / Production costs "," / 製造費 "],"/ 재고":
[" / Stock "," / 在庫 "],"· 교류":
[" · Social visit"," · 交流"],"· 마지막 기록":
[" · Final record"," · 最後の記録"],"· 상금":
["· Prize money","· 賞金"],"· 휴식":
[" · Rest"," · 休息"],"……뭐?":
["…What?","……何だって？"],"……어?":
["…What?","……え？"],"가정용":
["For the home","家庭用"],"강평 보기":
["Read assessment","講評を読む"],"개까지 무료":
[" units free","個まで無料"],"개량 ·":
["Improve · ","改良 · "],"게임 메뉴":
["Game menu","ゲームメニュー"],"게임 언어":
["Game language","ゲームの言語"],"게임 표지":
["Title screen","タイトル画面"],"겨울 아침":
["A Winter Morning","冬の朝"],"견본":
["Sample","見本"],"결과 대사":
["Results dialogue","結果発表の台詞"],"결산 확인":
["View monthly accounts","月次決算を見る"],"경비실":
["Guardroom","警備室"],"경연 결과":
["Competition results","競技会の結果"],"경영 22":
["Management 22","経営 22"],"고급 ·":
["Advanced ·","上級 ·"],"고급·":
["Advanced ·","上級 ·"],"고급품":
["Premium","高級品"],"공동 금상":
["Joint Gold Award","同点金賞"],"공동 우승":
["Joint winners","同点優勝"],"관리 열기":
["Open management","管理画面を開く"],"관리 유예":
["Defer upkeep","管理を延期"],"교육·활동":
["Tuition & activities","教育・活動"],"구매 목적":
["Intended use","購入目的"],"구매 수요":
["Customer demand","購入需要"],"귀족 교육":
["Noble education","貴族教育"],"그 다음에":
["and then","次に"],"그건…….":
["I…","それは……。"],"기록한 사건":
["Cases recorded","記録した事件"],"기본 원가":
["Base unit cost","基本原価"],"기존 일정 유지":
["Keep the present schedule","今の日程を維持する"],"기타 운영비":
["Other operating expenses","その他の運営費"],"기품 24":
["Refinement 24","気品 24"],"기품 380":
["Refinement 380","気品 380"],"기획 중":
["In planning","企画中"],"깨진 창":
["The Shattered Window","割れた窓"],"꺼짐":
["Off","オフ"],"나가기":
["Exit","終了"],"납기":
["Delivery deadline","納期"],"납품":
[" · Delivered "," · 納品 "],"네가?":
["You?","お前が？"],"누적 판매":
["Total units sold","累計販売数"],"능력 변화":
["Attribute changes","能力の変化"],"능력치":
["Attributes","能力値"],"다과회":
["Tea party","お茶会"],"다른 연구원":
["Another Researcher","別の研究員"],"다른 종목":
["Other events","ほかの種目"],"다음 단계":
["Next level","次の段階"],"다음 달로":
["Next month","翌月へ"],"다음 대사":
["Next line","次の台詞"],"다음 장면":
["Next scene","次の場面へ"],"닫기":
["Close","閉じる"],"달빛 아래":
["Under the Moon","月明かりの下で"],"담당 업무":
["Duties","担当業務"],"담당자":
["Assigned to","担当者"],"대성공":
["Great success","大成功"],"대신!!":
["On one condition!","ただし！"],"도원향":
["Tao Yuan Xiang","桃源郷"],"동작 설정":
["Animation","演出設定"],"라틴어":
["Latin","ラテン語"],"런던":
["London","ロンドン"],"로, 변화":
["by, change","へ、変化"],"마지막 대사":
["Last line","最後の台詞"],"마지막 명령":
["The Final Order","最後の命令"],"마지막 심의":
["Final review","最終審議"],"마치기":
["Finish","終了"],"메이린":
["Mey-Rin","メイリン"],"명 배치":
[" assigned","人を配置"],"명입니다.":
[" new staff.","人です。"],"미배치":
["Unassigned","未配置"],"미수집":
["Not collected","未収集"],"미충족":
["Unmet","未達成"],"바르도":
["Baldo","バルド"],"발주처":
["Customer","発注元"],"방문 생략":
["Skip visit","訪問を見送る"],"방문지 선택":
["Choose a destination","訪問先を選ぶ"],"배치 효과":
["Assignment effects","配置効果"],"변화 그래프":
["Attribute history","能力値の推移"],"병환 ·":
["Illness · ","病気 · "],"보드게임":
["Board game","ボードゲーム"],"보유 중":
["Owned","所有済み"],"보유금":
["Funds on hand","所持金"],"부속 시설":
["Outbuildings","付属施設"],"비스킷":
["Biscuits","ビスケット"],"사건 단서":
["Case evidence","事件の手掛かり"],"사교 행사":
["Social engagement","社交行事"],"사업 확장":
["Business expansion","事業拡張"],"상순 ·":
["Early month · ","上旬 · "],"상순으로":
["To the first period","上旬へ"],"상품 장부":
["Product ledger","商品台帳"],"상품 평판":
["Product reputation","商品評判"],"새 회차":
["New playthrough","新しく始める"],"서신실":
["Correspondence room","書簡室"],"서재.":
["The study.","書斎だ。"],"서훈식":
["The Investiture","叙勲式"],"선물용":
["As a gift","贈答用"],"선생님":
["Teacher","先生"],"설비 운영":
["Facility running costs","設備運営費"],"소인 기록":
["Postmark record","消印の記録"],"수요 +":
["Demand +","需要＋"],"수첩 선택":
["Choose a notebook","手帳を選ぶ"],"수첩으로":
["To notebook","手帳へ"],"수치가":
[" must be at least ","が"],"숙련도":
["Proficiency","熟練度"],"스네이크":
["Snake","スネーク"],"스트레스 -8":
["Stress −8","ストレス −8"],"승마장":
["Riding grounds","馬場"],"시설상태":
["Facility condition","施設の状態"],"시엘 상태":
["Ciel's status","シエルの状態"],"식기 전에":
["Before It Gets Cold","冷めないうちに"],"실행 확인":
["Confirm schedule","実行の確認"],"심사 ·":
["Judging ·","審査 ·"],"심사 결과":
["Judging Results","審査結果"],"심사 기준":
["Judging criteria","審査基準"],"심사 중":
["Under review","審査中"],"심의 확인":
["View review","審議を確認"],"아그니":
["Agni","アグニ"],"아아.":
["Ah…","ああ。"],"아침 시중":
["The Morning Routine","朝のお支度"],"악마!":
["Demon!","悪魔！"],"안내 종료":
["End tutorial","案内を終える"],"알겠습니다.":
["Understood, my lord.","かしこまりました。"],"알현복":
["Court Dress","謁見の礼服"],"앨범":
["Album","アルバム"],"어려운 일":
["difficult work.","難しい仕事"],"역무원":
["Station porter","駅員"],"온실 앞":
["Outside the Glasshouse","温室の前で"],"올빼미":
["Owl","梟"],"왕실 평가":
["Royal assessment","王室の評価"],"원가 최대":
["Cut unit cost by up to ","原価を最大"],"월 비용":
["Monthly cost","月額費用"],"월 운영비":
["Monthly operating costs","月間運営費"],"월 유지비":
["Monthly upkeep","月間維持費"],"월간 일정":
["Monthly schedule","月間日程"],"월말 사건":
["Month-end event","月末イベント"],"월말로":
["To month-end","月末へ"],"응접실":
["Drawing room","応接室"],"의 신뢰":
["'s trust","の信頼"],"의지함":
["Relying on him","頼りにしている"],"이거…":
["Well, now…","これは……。"],"이번 달에는":
["This month","今月は"],"이전 기록 ·":
["Previous record ·","過去の記録 ·"],"이전 대사":
["Previous line","前の台詞"],"이튿날":
["The following day","翌日"],"익숙함":
["Growing accustomed to him","なじんでいる"],"인물 관계":
["Relationships","人間関係"],"일반 재료":
["Standard materials","一般材料"],"일정 장면":
["Activity scene","日程の場面"],"일정 재개":
["Resume schedule","日程を再開"],"입금 £":
["Received £","入金 £"],"자동 재생":
["Auto-play","オート"],"자동 저장":
["Autosave","オートセーブ"],"자유 독서":
["Reading for pleasure","自由読書"],"자유행동":
["Free time","自由行動"],"장부 보기":
["View ledger","帳簿を見る"],"재생 ×":
["Speed ×","再生 ×"],"저장 기록":
["Saved games","セーブデータ"],"저택 관리":
["Estate management","屋敷の管理"],"저택 운영":
["Estate operations","屋敷の運営"],"저택 유지":
["Estate upkeep","屋敷維持費"],"저택 지도":
["Manor map","屋敷の見取り図"],"저택 지원":
["Estate support","屋敷の支援"],"제작 담당":
["Production lead","製作担当"],"주요 편성":
["Main activities　","主な活動　"],"준비 완료":
["Ready","準備完了"],"준비비 중":
["Of the preparation costs, ","準備費のうち、"],"증설 ·":
["Expand · ","増設 · "],"증설비":
["Expansion cost","増設費"],"지구력":
["Endurance","持久力"],"지출 £":
["Spent £","支出 £"],"진행한 달":
["Months completed","経過月数"],"집달리":
["Bailiff","執行官"],"참가 조건":
["Entry requirements","参加条件"],"참가 종목":
["Event to enter","参加種目"],"참가 취소":
["Cancel entry","参加を取り消す"],"참가 확정":
["Confirm entry","参加を確定"],"참고작품":
["Inspirations","参考作品"],"처리 완료":
["Resolved","対応済み"],"첫 수업":
["The First Lesson","最初の授業"],"최대 규모":
["Fully expanded","最大規模"],"출시 승인":
["Release approved","発売承認"],"컨디션":
["Condition","体調"],"켜짐":
["On","オン"],"타나카":
["Tanaka","タナカ"],"통상 관리":
["Routine upkeep","通常管理"],"통찰 +":
["Insight +","洞察＋"],"통찰 24":
["Insight 24","洞察 24"],"통찰 33":
["Insight 33","洞察 33"],"특별 수업":
["Special lessons","特別授業"],"판매 담당":
["Sales lead","販売担当"],"팬텀 사":
["Funtom","ファントム社"],"팬텀사":
["Funtom","ファントム社"],"편성 중":
["Planning","編成中"],"평가 항목":
["Judging criteria","評価項目"],"표준품":
["Standard","標準品"],"표지로":
["Title screen","タイトルへ"],"풋맨":
["Footman","従僕"],"프롤로그":
["Prologue","序章"],"피니안":
["Finnian","フィニアン"],"항상 재생":
["Always animate","常に再生"],"호감도":
["Affection","好感度"],"후훗.":
["Heh.","ふふっ。"],"흥.":
["Hmph.","ふん。"],"· 숙련도":
["· Proficiency","· 熟練度"],"· 처리 완료":
[" · Resolved"," · 対応済み"],"✓ 참가 확정":
["✓ Entry confirmed","✓ 参加確定"],"가문 기록 조사":
["Research the family archives","一族の記録調査"],"가문 명성":
["Family reputation","家の名声"],"가문 수첩":
["Family notebook","家の手帳"],"가문 자금":
["Family funds","家の資金"],"가문 장부":
["Family Ledger","家の帳簿"],"가문 회계":
["Household accounts","家計簿"],"가문의 반지":
["The Family Ring","一族の指輪"],"가용 자금":
["Available funds","手元資金"],"개 · 판매가":
[" units · Retail price ","個 · 販売価格 "],"개당 단가":
["Unit price","単価"],"개량 완료":
["Improved","改良済み"],"개발비 할인":
["Development cost discount","開発費の割引"],"개수 완료":
["Renovation complete","改修完了"],"거래처 방문":
["Visit a business partner","取引先訪問"],"건너뛰기":
["Skip","スキップ"],"경연 상금":
["Competition prize money","大会賞金"],"경연 우승":
["Competition victories","競技会の優勝回数"],"경영 +8":
["Management +8","経営 +8"],"계약의 인장":
["Contract Seal","契約の印"],"고용 조건":
["Terms of Employment","雇用の条件"],"관리 · 경영":
["Estate & Company","屋敷・会社経営"],"교류 시 가능":
["Possible when you interact","交流すると可能性あり"],"교육 일정 완화":
["Ease the lesson schedule","授業の予定にゆとりを持たせる"],"교육·활동비":
["Tuition and activity fees","授業料・活動費"],"귀족 예법":
["Noble etiquette","貴族の礼法"],"그 눈동자":
["Those Eyes","その瞳"],"그럭저럭":
["Fair","まずまず"],"그렇군요.":
["I see.","そうですか。"],"근무 1개월":
["One month of service","勤務1か月"],"기록을 확인한다":
["Review the record","記録を確かめる"],"기본 시설 대비":
["Compared with basic facilities","初期設備との差額"],"기초 수업":
["Basic lessons","基礎授業"],"끊어진 현":
["A Broken String","切れた弦"],"남은 채무":
["Outstanding debt","残債"],"높은 가격 수용":
["Customers will pay more","高めの価格でも売れる"],"닐기리":
["Nilgiri","ニルギリ"],"다과 접대":
["Serving Tea","お茶のもてなし"],"다시보기 종료":
["End replay","回想を終了"],"단서 다시 보기":
["Review evidence","手掛かりを見直す"],"대기 배치":
["Assign to standby","待機に回す"],"대사 재생":
["Dialogue playback","台詞の再生"],"대연회장":
["Grand ballroom","大広間"],"대출 입금":
["Loan proceeds","借入金"],"대화 선택지":
["Dialogue choices","会話の選択肢"],"대화와 상태":
["Conversation and status","会話と状態"],"대화창 표시":
["Show dialogue box","会話ウィンドウを表示"],"돌아오는 길":
["The Way Back","帰り道"],"돌아온 일행":
["The Party Returns","一行の帰宅"],"돌아온 집사":
["The Butler Returns","帰ってきた執事"],"동트기 전":
["Before Dawn","夜明け前"],"됐어.":
["No.","いい。"],"두 번째 잔":
["The Second Cup","二杯目の紅茶"],"마담 레드":
["Madam Red","マダム・レッド"],"마지막 한 바퀴":
["One Last Lap","最後の一周"],"망보기 기록":
["Lookout's record","見張りの記録"],"매각 대금":
["Sale proceeds","売却代金"],"먹지 두 장":
["Two Carbon Copies","二枚の複写伝票"],"먼저 연 온실":
["First to the Greenhouse","ひと足早く温室へ"],"목제 완구":
["Wooden toys","木製玩具"],"무도 수업":
["Dance lessons","舞踏の授業"],"무도 실기":
["Dance Practical","ダンスの実技"],"미납 부담":
["Shortfall penalty","未納分の負担金"],"미리 볼 일정":
["Activity to preview","下見する日程"],"바이올린":
["Violin","ヴァイオリン"],"밖이었다.":
["He was outside.","外だった。"],"받은 발주서":
["Orders received","受注した発注書"],"발주 수락":
["Accept order","受注する"],"발주 수량":
["Quantity ordered","発注数"],"배경음악":
["Background music","BGM"],"배치 인원":
["Staff assigned","配置人数"],"버터 스콘":
["Butter scone","バタースコーン"],"변동 없음":
["No change","変化なし"],"보내라니까.":
["I said let him go.","帰せと言った。"],"보폭 시험":
["Stride Test","歩幅の試験"],"봉인의 판독":
["Reading a Seal","封印を読み解く"],"봉제인형":
["Plush toy","ぬいぐるみ"],"부족합니다.":
[" short.","不足します。"],"불러오기":
["Load","ロード"],"빅토리아":
["Victoria","ヴィクトリア"],"빈 가격란":
["The Blank Price Line","空欄の値段"],"빈 등자":
["An Empty Stirrup","空の鐙"],"빈 슬롯":
["Empty slot","空きスロット"],"사교 수업":
["Social etiquette","社交の授業"],"사교와 조사":
["Society and investigation","社交と調査"],"사수자리":
["Sagittarius","射手座"],"사업과 결단":
["Business & resolve","事業と決断"],"사용인 배치":
["Assign staff","使用人の配置"],"사용인 숙소":
["Servants’ quarters","使用人宿舎"],"산책 스트레스":
["Stress on walks","散歩時のストレス"],"살피는 중":
["Getting the measure of him","様子を見ている"],"상품 개발 실습":
["Product development practice","商品開発実習"],"새 회차 시작":
["New playthrough started.","新しい周回を開始しました。"],"생강 당과":
["Candied ginger","生姜の砂糖漬け"],"생산비 절감":
["Production cost savings","生産費の節約"],"서재 면담":
["An Interview in the Study","書斎での面談"],"서재 수업":
["Study in the library","書斎での授業"],"서재 인수":
["Taking Charge of the Study","書斎の引き継ぎ"],"설마 나?":
["Me, of all people?","まさか、僕が？"],"세바스찬":
["Sebastian","セバスチャン"],"세의 시엘":
["-year-old Ciel","歳のシエル"],"소년의 책":
["The Boy's Book","少年の本"],"소매 수요":
["Retail demand","小売需要"],"소매 판매 ·":
["Retail sales · ","小売販売 · "],"손 제과점":
["Son, Confectioners","サン菓子店"],"수령 서명":
["recipient’s signature","受取人の署名"],"수집한 CG":
["Illustrations collected","収集したCG"],"수집한 엔딩":
["Endings collected","収集したエンディング"],"스트레스 -12":
["Stress −12","ストレス −12"],"스트레스 −12":
["Stress −12","ストレス −12"],"스트레스 −6":
["Stress −6","ストレス −6"],"스트레스 −7":
["Stress −7","ストレス −7"],"스트레스 완화":
["Relieve stress","ストレス緩和"],"승리 보상":
["Victory rewards","優勝報酬"],"시내 외출":
["Go into town","街へ外出"],"시설 개수 ·":
["Facility renovation · ","施設改修 · "],"시엘 신뢰":
["Ciel’s trust","シエルからの信頼"],"시엘 통찰":
["Ciel's insight","シエルの洞察"],"시엘의 상태":
["Ciel’s condition","シエルの状態"],"시장 거래 기록":
["Market transaction record","市場の取引記録"],"식장의 문턱":
["On the Threshold of the Hall","式場の敷居"],"신년 축사":
["New Year's Address","新年の祝辞"],"실행 전 확인":
["Review Before Starting","実行前の確認"],"심사 결과 보기":
["View judging results","審査結果を見る"],"심사 점수":
["Judges' score","審査得点"],"아침 장갑 기록":
["Morning glove record","朝の手袋の記録"],"애완동물":
["Pet","ペット"],"앨범 기록":
["Album","アルバム"],"앨범으로":
["Back to album","アルバムへ"],"어디까지나,":
["after all,","あくまで、"],"엄선 재료":
["Select materials","厳選材料"],"에드워드":
["Edward","エドワード"],"엔딩 다시 보기":
["Replay ending","エンディングをもう一度見る"],"엔딩 도감":
["Ending collection","エンディング一覧"],"역전 매점":
["Station kiosk","駅前の売店"],"열어 둘 문":
["A Door Left Open","開けておく扉"],"영수증 공유":
["Receipt shared","領収書を共有"],"영수증 확인":
["Receipt checked","領収書を確認"],"영업 수입":
["Operating income","営業収入"],"영입 완료":
["Recruited","加入済み"],"영입 확정":
["Confirm recruitment","雇用を確定"],"예상 매출":
["Projected revenue","予想売上"],"예상 지출":
["Expected expenses","予想支出"],"예상 판매량":
["Projected unit sales","販売見込み数"],"오후의 홍차":
["Afternoon tea","午後の紅茶"],"왕실 서신":
["Royal correspondence","王室の書状"],"왕실 신임":
["The Crown’s trust","王室の信任"],"왕실 인증":
["Royal warrant","王室御用達認定"],"원본 보관":
["Keep the original safe","原本を保管する"],"월 순절감":
["Net monthly savings","毎月の純節約額"],"월 시설 유지비":
["Monthly facility upkeep","施設の月間維持費"],"월간 결산":
["Monthly accounts","月次決算"],"월말 보관":
["Month-end storage","月末保管料"],"으음…….":
["Mmm…","ううん……。"],"음량 조절":
["Audio volume","音量調整"],"응용 실기":
["Applied Practical","応用実技"],"의욕 +9":
["Motivation +9","意欲 +9"],"의욕 회복":
["Restore motivation","意欲回復"],"의지 +15":
["Resolve +15","意志 +15"],"의지 +5":
["Resolve +5","意志 +5"],"이달 생산품":
["This month's product","今月の生産品"],"이름……요?":
["A name… for me?","名前……ですか？"],"이번 달 배치":
["This month's assignments","今月の配置"],"이번 달 변동":
["This month’s changes","今月の変化"],"이번 심사의 기록":
["A Record of the Inspection","今回の審査記録"],"이상 필요합니다.":
[".","以上必要です。"],"이튿날―":
["The next day—","翌日――"],"인증 요건":
["Warrant requirement","認定条件"],"일반 견본":
["Standard sample","通常見本"],"일상 수요":
["Everyday demand","日常の需要"],"일시정지":
["Pause","一時停止"],"일정 과부하":
["An Overfull Schedule","詰め込みすぎた日程"],"입상 보상":
["Prizes","入賞報酬"],"자금 부족":
["Insufficient funds","資金不足"],"자동 멈춤":
["Stop auto-play","オート解除"],"자유행동 ·":
["Free time · ","自由行動 · "],"자유행동 결과":
["Free-time results","自由行動の結果"],"자유행동으로":
["Continue to free time","自由行動へ"],"작위 승인":
["Title approved","爵位承認"],"작위 회복":
["Title restored","爵位回復"],"작은 진열창":
["A Little Shop Window","小さな飾り窓"],"장미 정원":
["Rose garden","薔薇園"],"장부 복원":
["Restore the ledger","帳簿を修復する"],"재검수 예정":
["Awaiting reinspection","再検品予定"],"재고 실사":
["Taking Stock","在庫の棚卸し"],"재정 안정":
["Financial stability","財政の安定"],"저장 · 설정":
["Save & Settings","セーブ・設定"],"저장 완료":
["Saved","保存しました"],"저장 칸":
["Save slot ","セーブ枠 "],"저택 → 상태":
["Manor → Status","屋敷 → 状態"],"저택 메뉴":
["Manor menu","屋敷メニュー"],"저택 사무":
["Estate paperwork","屋敷の事務"],"저택 서재":
["Manor study","屋敷の書斎"],"저택 재건":
["Estate restoration","屋敷の再建"],"저택 휴식":
["Rest at the manor","屋敷で休む"],"정원 산책":
["Garden walk","庭の散歩"],"조사 기록 확보":
["Investigation records obtained","調査記録を入手"],"조작 안내로":
["Go to the controls guide","操作案内へ"],"종합 실기":
["Comprehensive practical","総合実技"],"중인 시엘":
[" in progress","中のシエル"],"증빙 자료 요청":
["Request supporting documents","証拠書類を取り寄せる"],"지역 호텔 조합":
["Local Hoteliers' Association","地元のホテル組合"],"진열 중’":
["on display’","陳列中』"],"집사의 독백":
["The Butler's Monologue","執事の独白"],"쨍그랑":
["Crash!","ガシャン！"],"차 배합 기록":
["Tea blend notes","紅茶の配合記録"],"차례 대기":
["Awaiting turn","出番待ち"],"참가 접수 중":
["Entries open","参加受付中"],"창고지기":
["Warehouse keeper","倉庫番"],"채무 상환":
["Debt repayment","借金返済"],"첫 개수 시":
["On first renovation","初回改修時"],"체력 단련":
["Physical training","体力づくり"],"체스 클럽":
["Chess Club","チェスクラブ"],"총생산비":
["Total production costs","総製造費"],"최종 실기":
["Final practical exam","最終実技試験"],"추천 수업:":
["Recommended lessons:","おすすめの授業："],"출품 심사":
["Product judging","出品審査"],"출품할 제품":
["Product to enter","出品する商品"],"컨디션 +":
["Condition +","体調＋"],"타운하우스":
["Townhouse","タウンハウス"],"탕―!":
["Bang!","ズドン！"],"통찰 +6":
["Insight +6","洞察 +6"],"판매·납품":
["Sales & deliveries","販売・納品"],"팬텀 사(":
["Funtom (","ファントム社（"],"팬텀사 운영":
["Funtom operations","ファントム社の経営"],"팬텀사에서는":
["At Funtom","ファントム社では"],"편성한 일정":
["Scheduled activities","組んだ予定"],"편집할 기간":
["Period to edit","編集する期間"],"포장 수익":
["Packaging premium","包装による増収"],"표지 메뉴":
["Title menu","タイトルメニュー"],"필요 조건 ·":
["Requirements · ","必要条件 · "],"함께한 사람들":
["The people who stood by Ciel","シエルと共に過ごした人々"],"함께한 사용인":
["Servants who stood by Ciel","共に過ごした使用人"],"행사 달의 일정":
["Schedule for the event month","行事のある月の日程"],"행사 마치기":
["Finish event","行事を終える"],"현장 수행":
["Field experience","現場での実績"],"현장 실습":
["Fieldwork","実地訓練"],"협상 실기":
["Negotiation Practical","交渉の実技"],"환불 집게":
["refund punch","返金用の鋏"],"황송합니다.":
["You do me honour.","恐れ入ります。"],"회계 감사 기록":
["Audit record","会計監査の記録"],"회계 실습":
["Accounting practice","会計実習"],"회송 봉투":
["The Return Envelope","返信用封筒"],"회차 종료":
["Playthrough complete","周回終了"],"BGM 꺼짐":
["BGM off","BGM オフ"],"BGM 켜짐":
["BGM on","BGM オン"],"CG 앨범":
["CG album","CGアルバム"],"· 매각 대금":
[" · Sale proceeds "," · 売却額 "],"· 추천 수업:":
[" · Recommended lesson: "," · おすすめの授業： "],"‘진열 중’":
["‘On display’","「展示中」"],"……늦었어.":
["…You’re late.","……遅い。"],"……설마 나?":
["…Don’t tell me it was me.","……まさか僕か？"],"가문 명성 +":
["Family reputation +","家の名声 ＋"],"가문 명성 +1":
["Family reputation +1","家の名声 ＋1"],"가문 문서고":
["Family archives","家の文書庫"],"가문 장부 확인":
["Examine the family ledger","家の帳簿を確かめる"],"가문 책무 보고":
["Report on the family’s duties","家の務めについて報告する"],"같은 날 만든 상자":
["A box made on the same day","同じ日に作られた箱"],"같은 대표의 서명":
["the same representative’s signature","同じ代表の署名"],"같은 창고 번호":
["the same stockroom number","同じ倉庫番号"],"같은 판에서 구운":
["baked on the same tray","同じ天板で焼いた"],"개 중 예상 판매":
[" units · Expected sales: ","個中の予想販売数："],"개당 생산 원가":
["Production cost per unit","1個あたりの製造原価"],"개당 재료비":
["Material cost per unit ","1個あたりの材料費 "],"개수할 때마다":
["Per renovation","改修ごと"],"거래 보증료":
["Guarantee fee","取引保証料"],"거래처 협상":
["Negotiations with a New Customer","新たな取引先との交渉"],"걸어서 마친다":
["Walk the rest of the way","残りは歩く"],"게임을 종료했습니다":
["Game closed","ゲームを終了しました"],"견본 출품":
["Sample submitted","見本出品"],"결과창 닫기":
["Close results","結果を閉じる"],"경연 미리보기":
["Competition preview","競技会プレビュー"],"경연 초대장":
["Competition invitation","競技会の招待状"],"계수부터 다시 한다":
["Start by counting again","まず数え直す"],"고급 견본":
["Premium sample","高級品の見本"],"고급 과정 이수":
["Advanced courses completed","上級課程の修了"],"고용인 명단":
["Staff roster","使用人名簿"],"관리 권한 인수":
["Take charge of the study","書斎の管理を引き受ける"],"교구 원예회":
["Parish Horticultural Society","教区園芸協会"],"교류 시 확정":
["Guaranteed when you interact","交流すると確定"],"그게 나아.":
["All the better.","その方がいい。"],"금발의 영웅":
["The Fair-Haired Hero","金髪の英雄"],"기념 선물 세트":
["Commemorative gift set","記念ギフトセット"],"기록 시작 잔액":
["Balance at start of record","記録開始時の残高"],"기록을 덮는다":
["Close the casebook","事件簿を閉じる"],"나에게 승리를!":
["And bring me victory!","僕に勝利を！"],"남겨진 명함":
["The Calling Card Left Behind","残された名刺"],"납품 선금":
["Advance payment on an order","受注時の前受金"],"느슨한 고삐":
["Loose Reins","緩んだ手綱"],"능력 · 500점":
["Attributes · maximum 500","能力値 · 上限500"],"늦었어.":
["You’re late.","遅かったな。"],"다과회 실기":
["Tea Party Practical","お茶会の実技"],"다과회 예약 증가":
["More tea party bookings","お茶会の予約増加"],"다시 찾은 서재":
["Back in the Study","再び書斎へ"],"다실의 자리 그림":
["A Plan of the Tearoom","茶房の見取り図"],"다음 인사를 위한 준비":
["Preparing for the Next Address","次の挨拶に向けて"],"답신의 마지막 줄":
["The Last Line of the Reply","返書の最後の一行"],"대화 → 저택":
["Talk → Manor","会話 → 屋敷"],"대화를 마친다":
["End conversation","会話を終える"],"대화창 테마":
["Dialogue box theme","会話ウィンドウのテーマ"],"덮어쓰기":
["Overwrite","上書き"],"도련님의 침실":
["The young master’s bedroom","坊ちゃんの寝室"],"도안 웃돈":
["Design premium","意匠の割増額"],"돌발 사건 지출":
["Unexpected expenses","突発的な支出"],"동작 줄이기":
["Reduce motion","動きを抑える"],"두 개의 봉랍":
["Two Wax Seals","二つの封蝋"],"두 번째 체스판":
["A Second Chessboard","二つ目のチェス盤"],"두 상회의 증서":
["Warrants for Both Firms","二社の認定証"],"뒤집힌 약도":
["A Sketch Map in Reverse","裏返しの見取り図"],"뒤집힌 차륜":
["The Overturned Wheel","ひっくり返った車輪"],"라우 상점 구매":
["Purchases at Lau's shop","劉の店での購入"],"라우의 대사":
["Lau’s dialogue","劉の台詞"],"라틴어 구술":
["Latin Oral Examination","ラテン語の口述試験"],"런던 거리":
["London streets","ロンドンの街"],"를 판매했습니다.":
[" sold.","個を販売しました。"],"리본 달린 가지":
["A Branch Tied with Ribbon","リボンを結んだ枝"],"마지막 장까지 읽는다":
["Read to the last page","最後のページまで読む"],"매대 추가 매출":
["Extra sales from display stands","売り場の拡張による増収"],"먼저 핀 장미":
["The First Rose to Bloom","ひと足早く咲いた薔薇"],"메이린 영입":
["Recruit Mey-Rin","メイリンを雇う"],"모레티 공방":
["Moretti Workshop","モレッティ工房"],"무슨 일이지?":
["What is it?","何の用だ？"],"문장 없는 마차":
["The Unmarked Carriage","紋章のない馬車"],"미납 1개당":
["Per unit undelivered: ","未納1個につき"],"미납 부담금":
["Shortfall penalty","未納分の負担金"],"미리보기 예시":
["Preview example","プレビュー例"],"미완성 악보":
["The Unfinished Score","未完成の楽譜"],"바르도 영입":
["Recruit Baldo","バルドを雇う"],"발자국 수첩":
["Tracker’s notebook","足跡の手帳"],"방문지를 선택하세요.":
["Choose a destination.","訪問先を選んでください。"],"번역자의 여백":
["In the Translator’s Margin","翻訳者の余白"],"번진 잉크":
["A Blot of Ink","にじんだインク"],"병중으로 불참":
["Absent due to illness","病気のため欠場"],"봉인된 장부":
["The Sealed Ledger","封じられた帳簿"],"부활절 연주":
["Easter Recital","復活祭の演奏"],"불타는 저택":
["The Burning Manor","燃え盛る屋敷"],"비어 있는 장부":
["The Empty Ledger","白紙の帳簿"],"비어 있는 천막":
["The Empty Tent","空の天幕"],"빅토리아.":
["Victoria.","ヴィクトリア。"],"사건 기록과 저장":
["Event records and saving","出来事の記録とセーブ"],"상점 → 저택":
["Shop → Manor","店 → 屋敷"],"상점 진열장":
["The Shop Window","店の陳列窓"],"상태창 닫기":
["Close status window","ステータス画面を閉じる"],"새벽의 일정표":
["The Schedule at Dawn","夜明けの日程表"],"생산 또는 재고 필요":
["Production or stock required","生産品または在庫が必要"],"생산량 (개)":
["Production (units)","生産数（個）"],"서명을 대조한다":
["Compare the signatures","署名を照合する"],"서재의 열쇠":
["The Study Key","書斎の鍵"],"선생님……?":
["Doctor…?","先生……？"],"선원의 매듭줄":
["Sailor’s knotting cord","船乗りの結び縄"],"설비 매각 ·":
["Sell equipment · ","設備売却 · "],"설비·기획":
["Facilities and planning","設備・企画"],"속을 터놓음":
["Speaking openly with him","心を許している"],"손 내밀어.":
["Hold out your hand.","手を出せ。"],"손님의 영수증":
["The Customer’s Receipt","客の領収書"],"수업별 성장치":
["Growth per lesson","授業ごとの成長値"],"수익 분담금":
["Profit contribution","利益分担金"],"숙련도 10마다":
["Per 10 proficiency points","熟練度10ごと"],"시설 기여 이익":
["Profit contributed by facilities","設備による利益増"],"시엘 컨디션":
["Ciel's condition","シエルの体調"],"시엘의 경영":
["Ciel’s management skill","シエルの経営能力"],"시엘의 성장 기록":
["Ciel’s growth record","シエルの成長記録"],"시제품 기획":
["Prototype planning","試作品の企画"],"시제품 착수":
[" · Prototype started","の試作を開始"],"식사가 식기 전에":
["Before Breakfast Gets Cold","朝食が冷める前に"],"신년 다과회":
["New Year’s Tea Party","新年の茶会"],"아이의 나무패":
["The Child’s Letter Tiles","子供の木札"],"아침의 올빼미":
["An Owl in the Morning","朝の梟"],"안 보십니까?":
["Won’t you look?","ご覧にならないのですか？"],"앞 수업 응용":
["Previous lesson applied","前の授業を応用"],"어떻습니까?":
["What do you say?","いかがです？"],"에, 진짜?":
["Eh? Really?","えっ、本当か？"],"여왕의 번견":
["The Queen’s Watchdog","女王の番犬"],"여왕의 봉서":
["The Queen's Sealed Letter","女王の封書"],"연대의 배열":
["Putting Dates in Order","年代順に並べる"],"연도별 성장 기록":
["Growth by year","年ごとの成長記録"],"연말 수요 증가":
["Increased year-end demand","年末の需要増"],"연회 주문 취소":
["Banquet order cancelled","宴会の注文取り消し"],"열두 번째 생일":
["A Twelfth Birthday","十二歳の誕生日"],"열두 번째 선물":
["The Twelfth Gift","十二番目の贈り物"],"열리지 않는 성문":
["The Gate That Wouldn’t Open","開かずの城門"],"열한 번째 생일":
["An Eleventh Birthday","十一歳の誕生日"],"예상 납품":
["Projected delivery","納品見込み"],"예상 판매 비중":
["Projected sell-through rate","予想販売率"],"완납 시 대금":
["Payment on full delivery","完納時の代金"],"왕자의 첫 명령":
["The Prince's First Order","王子の最初の命令"],"왕진 · £55":
["Doctor’s visit · £55","往診・£55"],"외교 서한집":
["Diplomatic correspondence","外交書簡集"],"요리와 출신":
["A Chef’s Country of Origin","料理とお国柄"],"요양으로 불참":
["Absent while recuperating","療養のため欠席"],"월 손실 절감":
["Monthly losses avoided","毎月の損失軽減額"],"월말 검수 예정":
["Month-end inspection due","月末に検品予定"],"월말 결산으로":
["To the month-end accounts","月末決算へ"],"월말 잔액":
["Closing balance","月末残高"],"월초 잔액":
["Opening balance","月初残高"],"응접실 실기":
["Drawing Room Practical","応接の実技"],"의 호감도 ↑":
["'s affection ↑","の好感度 ↑"],"이 순 마치기":
["Finish activity","この予定を終える"],"이달 일정 실행":
["Begin the month","今月の予定を開始"],"이달의 수요":
["This month's demand","今月の需要"],"이번 달 중점 업무":
["This month’s priority","今月の重点業務"],"이번 심의 유보":
["Decision deferred","今回の裁定は保留"],"일반 견본 가능":
["Standard sample available","通常品の見本を出品可能"],"일정표 → 상순":
["Schedule → Early Month","予定表 → 上旬"],"일정표 → 저택":
["Schedule → Manor","予定表 → 屋敷"],"일정표 → 중순":
["Schedule → Mid-Month","予定表 → 中旬"],"일정표 → 하순":
["Schedule → Late Month","予定表 → 下旬"],"읽어 봐.":
["Read it.","読め。"],"입상권 밖":
["Unplaced","入賞圏外"],"입출금 내역":
["Transactions","入出金明細"],"자, 어디에?":
["Well, where shall it be?","さて、どちらになさいますか？"],"자유행동 결과 보기":
["View free-time results","自由行動の結果を見る"],"작위 심의 기준":
["Criteria for restoring the title","爵位回復の審査基準"],"작위 심의 확인":
["View title review","爵位審査を確認"],"장면 마치기":
["End scene","場面を終える"],"장미의 표찰":
["The Rose Label","バラの名札"],"저장 기록 없음":
["No saved game","セーブデータなし"],"저택 → 대화":
["Manor → Talk","屋敷 → 会話"],"저택 → 상점":
["Manor → Shop","屋敷 → 店"],"저택 → 일정표":
["Manor → Schedule","屋敷 → 予定表"],"저택 근무지":
["Manor assignments","屋敷の配属先"],"저택 메뉴 위치":
["Manor menu location","屋敷メニューの位置"],"저택 지시 변경":
["Estate instructions updated","屋敷への指示を変更"],"저택 체조실":
["Manor exercise room","屋敷の体操室"],"전 품목 합산":
["Across all products","全商品合計"],"정오의 왕진":
["A House Call at Noon","正午の往診"],"정원 연주회":
["Garden Recital","庭園演奏会"],"주방의 명령":
["Kitchen Orders","厨房での命令"],"준비비 부족 ·":
["Preparation funds short by ","準備資金の不足額："],"진열병 두 개":
["Two Sweet Jars","売り場の二つの瓶"],"집사니까요.":
["his butler.","執事ですから。"],"창가의 대답":
["The Answer by the Window","窓辺の返事"],"천의 뒷면":
["The Reverse of the Cloth","布の裏側"],"체리 타르트":
["Cherry tart","チェリータルト"],"초대장 답신":
["Answer invitations","招待状の返事"],"취득 · £250":
["Acquire · £250","取得 · £250"],"컨디션 회복":
["Restore condition","体調回復"],"클라라 벨":
["Clara Bell","クララ・ベル"],"타운하우스 ·":
["Townhouse ·","タウンハウス ·"],"토끼 두 마리":
["Two Rabbits","二匹のウサギ"],"토머스 리드":
["Thomas Reed","トマス・リード"],"투자·사업 지출":
["Investment and business expenses","投資・事業支出"],"판매가 (£)":
["Retail price (£)","販売価格（£）"],"팬텀 사 경영":
["Manage Funtom","ファントム社の経営"],"팬텀사 제작소":
["Funtom workshop","ファントム社の製作所"],"팬텀사 회계":
["Funtom accounting","ファントム社の会計"],"팬텀사의 이름으로":
["In Funtom's Name","ファントム社の名において"],"편지의 다른 뜻":
["Another Meaning in the Letter","手紙に隠れたもう一つの意味"],"평소대로 따른다":
["Pour it as usual","いつもどおりに注ぐ"],"프롤로그 다시 보기":
["Replay prologue","序章を振り返る"],"피니안 영입":
["Recruit Finnian","フィニアンを雇う"],"하순 · 경연":
["Late month · Competition","下旬 · 競技会"],"하순 경연으로":
["To the late-month competition","下旬の競技会へ"],"한 달 일정 편성":
["Planning the month","月間日程の編成"],"한 자리의 거리":
["One Seat Away","椅子一つ分の距離"],"핫초콜릿":
["Hot chocolate","ホットチョコレート"],"현장을 직접 찾는다":
["Inspect the site in person","現場へ足を運ぶ"],"현재 가용 자금":
["Available funds","利用可能な資金"],"현재 물량으로 판매":
["Sales at current volume","現在の数量での販売"],"현재 상태 · 100점":
["Current condition · maximum 100","現在の状態 · 上限100"],"홍차 한 잔":
["Cup of tea","紅茶一杯"],"활동을 선택하세요.":
[" · Choose an activity.","の活動を選んでください。"],"회상 마치기":
["End replay","回想を終える"],"힘을 원해.":
["I want power.","力が欲しい。"],", 시엘의 경영":
[", and Ciel's Management","、シエルの経営能力"],"· 가문 명성 +":
[" · Family reputation +"," · 家の名声 +"],"· 가문 명성 +1":
["· Family reputation +1","· 家の名声＋1"],"· 미납 부담금":
[" · Shortfall penalty "," · 未納分の負担金 "],"· 앞 수업 응용":
[" · Applied the previous lesson"," · 前の授業を応用"],"― 빅토리아.":
["—Victoria","――ヴィクトリア"],"가 둘이고 D가 없다":
[" appears twice and D is missing","が二つあり、Dがない"],"가 둘인 알파벳":
[" appears twice in the alphabet","が二つあるアルファベット"],"가문 명성 +2":
["Family reputation +2","家の名声 +2"],"가문 명성 상승":
["Family reputation increases","家の名声が上がる"],"가문 장부 복원":
["Restoring the Family Ledger","家の帳簿の修復"],"가문 증빙 확보":
["Family records secured","家の記録を確保"],"가장 많이 편성한 일정":
["Most frequently scheduled activities","最も多く組んだ活動"],"개 소매 · 매출":
[" sold at retail · Revenue ","個を小売 · 売上 "],"개발비 할인 별도":
["Development discount calculated separately","開発費の割引は別計算"],"거래처 재주문":
["Repeat customer order","取引先からの再注文"],"건강 악화로 종료":
["Ending · Ill Health","病による結末"],"결과 대사 넘기기":
["Advance results dialogue","結果発表の台詞を送る"],"경영 행운 수입":
["Business windfalls","臨時収入"],"고급 견본 가능":
["Premium sample available","高級品の見本を出品可能"],"골목에서 고른 편":
["Taking Sides in an Alley","路地裏で誰に味方するか"],"공들인 인사의 끝":
["The Close of a Well-Rehearsed Address","心を込めた挨拶の結び"],"과정을 먼저 짚는다":
["Trace the reasoning first","まず推理の筋道をたどる"],"교육을 맡기다":
["Entrusted with His Training","教育を任せる"],"구동 구조를 기록한다":
["Document the mechanism","動く仕組みを書き留める"],"규칙서의 첫 장":
["The First Page of the Rulebook","説明書の最初のページ"],"근무 일지를 본다":
["Check the work log","作業日誌を見る"],"기계 완구 상인":
["Mechanical Toy Merchant","機械仕掛けの玩具商"],"기계 인형 제작소":
["Automaton Makers","からくり人形製作所"],"기기 설정 따르기":
["Use device settings","端末設定に従う"],"날짜와 보유금":
["Date and funds","日付と所持金"],"날짜판과 명패":
["Calendar and nameplate","日付板と名札"],"남은 과자를 권한다":
["Offer him the last biscuit","残った菓子を勧める"],"남은 교육·활동비":
["Remaining lesson and activity costs","残りの授業・活動費"],"남은 지출 합계":
["Remaining expenses","残りの支出合計"],"납기부터 확인한다":
["Confirm the delivery date first","先に納期を確かめる"],"낮잠을 연장한다":
["Let him nap a little longer","もう少し昼寝をさせる"],"네 이름은 뭐지?":
["What’s your name?","お前、名は？"],"네, 도련님.":
["Yes, my lord.","はい、坊ちゃん。"],"능력치 변화 없음":
["No attribute changes","能力値の変化なし"],"닐기리 홍차":
["Nilgiri tea","ニルギリ紅茶"],"다른 목격자를 찾는다":
["Look for another witness","ほかの目撃者を探す"],"다음 방문을 약속한다":
["Promise another visit","次の訪問を約束する"],"다음 봄의 약속":
["A Promise for Next Spring","来春の約束"],"다음 손님을 맞는다":
["Welcome the next guest","次の客を迎える"],"답례 방문을 잡는다":
["Arrange a return visit","答礼の訪問を取り決める"],"답방을 약속한다":
["Promise a return visit","答礼の訪問を約束する"],"답장이 오는 초대장":
["An Invitation That Draws a Reply","返事の届く招待状"],"대출 · £144":
["Borrow £144","借入・£144"],"돌려받은 박수":
["Applause Returned","返ってきた拍手"],"돌아오지 않은 마차":
["The Wagon That Didn’t Return","戻らなかった荷馬車"],"두 번 울리는 노크":
["Two Knocks at the Door","扉を二度たたくと"],"따뜻한 콘소메":
["Warm consommé","温かいコンソメ"],"뜯긴 모서리":
["The Torn Corner","ちぎられた角"],"뜻밖의 일자리":
["An Unexpected Offer","思いがけない働き口"],"라벤더 향주머니":
["Lavender sachet","ラベンダーの香り袋"],"런던 상점가":
["London shopping district","ロンドンの商店街"],"런던 운영 일지":
["London operations log","ロンドン運営日誌"],"런던의 번지":
["A London Address","ロンドンの番地"],"리버티 완구점":
["Liberty Toy Shop","リバティ玩具店"],"마지막 명령 · 백작":
["The Final Order · Earl","最後の命令・伯爵"],"마차를 빌리다":
["A Carriage on Loan","馬車を借りて"],"만날 수 있는 사람:":
["Possible encounters: ","会える人物："],"만남은 방문 때 확인":
["Discover whom you'll meet on arrival","誰に会えるかは訪問時に判明"],"맡아 둔다":
["Take the key for safekeeping","鍵を預かる"],"매점 주인의 시식":
["The Kiosk Owner’s Tasting","売店の主人の味見"],"먼저 다과를 함께한다":
["Have tea together first","まずは一緒にお茶を飲む"],"먼저 한 수 둔다":
["Make the first move","先に一手指す"],"목재 하역 지연":
["Timber unloading delayed","木材の荷下ろしが遅延"],"몸 상태를 묻는다":
["Ask how he’s feeling","お加減を伺う"],"문맥을 다시 읽는다":
["Reread the surrounding passage","前後の文を読み返す"],"바이올린 실기":
["Violin Practical","ヴァイオリンの実技"],"반달 모양 구멍":
["crescent-shaped hole","半月形の穴"],"발밑부터 다시 본다":
["Check the footwork first","まず足運びを見直す"],"백 자리 전부 유료":
["All one hundred seats paid","百席すべて有料"],"백작에게 묻다":
["A Question for the Earl","伯爵への問い"],"번, 전액 반환":
[", refunded in full","番、全額返金"],"번호 대신 이름을":
["A Name of His Own","番号の代わりに、名前を"],"병환 시 방문 취소":
["Visits are cancelled during illness","病気の際は訪問中止"],"봄꽃 정원제":
["Spring Flower Festival","春の花まつり"],"봉랍 확인을 요청함":
["Asked Tanaka to examine the seal","タナカに封蝋の確認を依頼"],"봉투에 적힌 이름":
["The Name on the Envelope","封筒に書かれた名"],"불러오기 완료":
["Save loaded","読み込み完了"],"불을 지키는 사람":
["The Keeper of the Fire","火を守る者"],"비단 견본장":
["Silk swatch book","絹の見本帳"],"빅토리아 다실":
["Victoria Tea Rooms","ヴィクトリア茶房"],"빅토리아.」":
["Victoria.”","ヴィクトリア。」"],"빈 상자의 값":
["The Price of Empty Crates","空き箱の値段"],"빈자리는 메이드":
["A Maid's Position","空いているのはメイドの職"],"삐걱거리는 축":
["A Squeaking Axle","きしむ車軸"],"상자에 남은 이름":
["The Name on the Box","箱に残った名前"],"상장은 내 것이지만!":
["But the certificate is mine!","でも、賞状は私のものよ！"],"상태 → 가문 장부":
["Status → Family Ledger","状態 → 家の帳簿"],"새 판에서는 다른 물품":
["In the new edition a different article","新版では別の品"],"새벽 두 시의 종":
["The Two O’Clock Bell","午前二時の鐘"],"새소리 악보집":
["A Book of Birdsong Scores","鳥のさえずりの楽譜集"],"생산·소매 등급":
["Production and retail grade","生産・小売等級"],"서로에게 보낸 박수":
["Applause for Each Other","互いに送った拍手"],"선물 리본 주문서":
["The Order for Gift Ribbons","贈り物のリボンの注文書"],"설비 매각 대금":
["Equipment sale proceeds","設備売却代金"],"설탕을 하나 줄인다":
["Use one less lump of sugar","砂糖をひとかけ減らす"],"소마·아그니":
["Soma and Agni","ソーマとアグニ"],"손님 접견 계속하기":
["Continue receiving the guest","客との面会を続ける"],"손님이 돌아간 뒤":
["After the Guests Have Gone","客が帰ったあと"],"손으로 전할 편지":
["A Letter to Deliver in Person","手渡したい手紙"],"수레를 시연한다":
["Demonstrate the cart","荷車を動かして見せる"],"수첩 {number}":
["Notebook {number}","手帳 {number}"],"수치 변동 없음":
["No attribute changes","能力値の変化なし"],"수확 감사 바구니":
["Harvest Thanksgiving Basket","収穫感謝の籠"],"숙련 보너스 +":
["Proficiency bonus +","熟練ボーナス＋"],"스토리’ 시리즈":
["Story series","ストーリー』シリーズ"],"시설별 유지비와 상태":
["Facility upkeep and condition","施設ごとの維持費と状態"],"시엘에게 말 걸기":
["Talk to Ciel","シエルに話しかける"],"신상품 개발비 할인":
["New product development discount","新商品の開発費割引"],"아래층의 쪽지":
["A Note from Downstairs","階下からの伝言"],"아직 봉한 견본":
["A Sample Still Sealed","封を切っていない見本"],"아직 안 불렀는데?":
["I haven’t called for you yet.","まだ呼んでいないぞ？"],"엘리자베스":
["Elizabeth","エリザベス"],"여왕의 초청장":
["An Invitation from the Queen","女王からの招待状"],"연락망을 정리한다":
["Organise the list of contacts","連絡網を整理する"],"연회 좌석표":
["The Banquet Seating Plan","晩餐会の席次表"],"연회가 끝난 뒤":
["After the Banquet","晩餐会が終わって"],"영수증을 찾는다":
["Find the receipt","領収書を探す"],"영입 장면 다시 보기":
["Replay recruitment scene","加入場面をもう一度見る"],"영지 소작농 대표":
["Estate Tenants' Representative","領地の小作農代表"],"예상 월말 자금":
["Projected month-end funds","月末資金の見込み"],"왕실 납품 후보":
["Candidate for a Royal Warrant","王室御用達候補"],"왕실 신뢰 상승":
["The Crown’s trust increases","王室からの信頼が上がる"],"왕실 신임 상승":
["You gain the Crown’s confidence","王室の信任が厚くなる"],"왕실 심의와 교육":
["Royal review and education","王室の審議と教育"],"왕실 인증 보류":
["Royal warrant deferred","王室御用達認定を保留"],"왕실 작위 심의":
["Royal title review","王室の爵位審査"],"왕자의 두 번째 명령":
["The Prince's Second Order","王子の二つ目の命令"],"우리의 행선지를 확인한다":
["Check where we are headed","自分たちの行き先を確かめる"],"운영·물류비 변화":
["Change in operating and freight costs","運営費・物流費の増減"],"운임을 다시 본다":
["Check the freight charge again","運賃を見直す"],"원장의 마지막 한 닢":
["The Last Penny in the Ledger","元帳の最後の一ペニー"],"월별 영업 장부":
["Monthly business ledger","月別営業帳簿"],"으아아……!":
["Aah…!","うわあっ……！"],"은인은 손님으로":
["Benefactors Become Guests","恩人を客に迎えて"],"은제 달걀 장식":
["Silver Egg Ornament","銀の卵飾り"],"은제 찻숟가락":
["Silver Teaspoon","銀のティースプーン"],"이 순 마치기 ›":
["Finish activity ›","この予定を終える ›"],"이달 소매 수요":
["Retail demand this month:","今月の小売需要："],"이달 영업이익":
["This month’s operating profit","今月の営業利益"],"이달 자금 예상":
["Monthly forecast","今月の資金予測"],"이달의 발주서":
["This month's purchase order","今月の発注書"],"이달의 초대장":
["This month's invitation","今月の招待状"],"이전 회차의 선택 ·":
["Previous playthrough's choice · ","以前の周回での選択 · "],"인쇄소의 주문서":
["The Printer’s Order","印刷所の注文書"],"인수증의 서명":
["The Signature on the Receipt","受領証の署名"],"인증 요건 미달":
["Warrant requirements unmet","認定要件未達"],"일곱 과목 만점":
["Full marks in all seven subjects","七科目すべて満点"],"일정표 → 실행 확인":
["Schedule → Review Plan","予定表 → 実行前の確認"],"일정표 → 자유행동":
["Schedule → Free Time","予定表 → 自由行動"],"자유행동 → 서재":
["Free Time → Study","自由行動 → 書斎"],"자유행동 성과 ·":
["Free-time results · ","自由行動の成果 · "],"장부 원본 보관":
["Original ledger kept safe","帳簿の原本を保管した"],"재작업 · £12":
["Rework · £12","手直し · £12"],"저택 개수·지원":
["Estate improvements and assistance","屋敷の改修・援助"],"저택 운영 · 시설 유지":
["Estate upkeep and facility maintenance","屋敷運営費・設備維持費"],"저택 지도 → 주방":
["Manor Map → Kitchen","屋敷の見取り図 → 厨房"],"저택의 새 사용인":
["The Manor's New Servant","屋敷の新しい使用人"],"저택이 찾는 사람":
["What the Household Needs","屋敷が求める人材"],"절을 다시 시킨다":
["Have him repeat the bow","もう一度お辞儀をさせる"],"정중하게 끝맺는다":
["Close the letter courteously","丁重に結ぶ"],"주빌리 기념품상":
["Jubilee souvenir shop","ジュビリー記念品店"],"지난겨울 도안첩":
["Last Winter’s Book of Designs","昨冬の図案帳"],"직원 대표를 만난다":
["Meet the workers’ representative","労働者の代表に会う"],"직접 가문을 소개한다":
["Introduce the family in person","自ら一族を紹介する"],"쨍그랑 ―!":
["Crash!","ガシャーン！"],"차를 더 따를 시간":
["Time for Another Cup","お代わりを注ぐ時間"],"참가 경연별 우승":
["Wins by competition entered","出場した競技会ごとの優勝回数"],"창가에서 한 호흡":
["A Breath by the Window","窓辺でひと息"],"창가의 올빼미":
["The Owl at the Window","窓辺の梟"],"책 가장자리의 연필":
["A Name Pencilled in the Margin","余白の鉛筆書き"],"천천히 다시 돈다":
["Ride another slow circuit","ゆっくりともう一周する"],"최종 보유 자금":
["Final funds","最終所持金"],"축을 바꿔 본다":
["Try a different axle","車軸を替えてみる"],"카모카테 시리즈":
["Kamokate series","かもかてシリーズ"],"카이로소프트 ‘":
["Kairosoft’s ‘","カイロソフトの『"],"커튼을 닫는다":
["Draw the curtains","カーテンを閉める"],"팬텀 사 → 제작실":
["Funtom → Workshop","ファントム社 → 製作室"],"팬텀 사(社)":
["Funtom","ファントム社"],"팬텀사 사무실":
["Funtom office","ファントム社の事務所"],"팬텀사 지시 변경":
["Funtom instructions updated","ファントム社への指示を変更"],"편성 기록이 없습니다.":
["No activities recorded.","編成記録がありません。"],"평판 4부터 개량":
["Improvements unlock at reputation 4","評判4から改良可能"],"표지로 돌아가기":
["Return to title","タイトルへ戻る"],"풋맨으로 맞는다":
["Take him on as a footman","フットマンとして迎える"],"하트웰 완구점":
["Hartwell's Toy Shop","ハートウェル玩具店"],"한 줄 밀린 가격표":
["Prices One Line Out","一行ずれた値札"],"함께 온실을 돈다":
["Walk round the greenhouse together","一緒に温室を回る"],"함께 차를 든다":
["Have tea together","一緒にお茶を飲む"],"항로 측량 노트":
["Route survey notebook","航路測量ノート"],"황금빛 초대장":
["A Golden Invitation","金色の招待状"],"회수한 입장권":
["The Collected Tickets","回収した入場券"],"휘트컴 상회":
["Whitcomb & Co.","ウィットコム商会"],"휴식 뒤 이어 간다":
["Rest, then carry on","ひと休みしてから続ける"],"흰 표 쉰 장":
["Fifty White Tickets","白い切符五十枚"],"27번, 전액 반환":
["No. 27, refunded in full","二十七番、全額返金"],"B가 둘이고 D가 없다":
["Two Bs, no D","Bが二枚でDがない"],"B가 둘인 알파벳":
["An Alphabet with Two Bs","Bが二つのアルファベット"],"· 개발비 할인 별도":
[" · Development discount calculated separately"," · 開発費の割引は別計算"],"· 이달 소매 수요":
[" · Retail demand this month: "," · 今月の小売需要："],"… 네 이름은 뭐지?":
["…What's your name?","……お前、名前は？"],"… 아직 안 불렀는데?":
["…I haven’t called for you yet.","……まだ呼んでないぞ？"],"가 두 개이고 D가 없다":
[" appears twice and D is missing","が二つあり、Dがない"],"가문 장부와 수첩":
["Ledger and notebooks","家の帳簿と手帳"],"가문의 올해 계획을 전한다":
["Share the family’s plans for the year","一家の今年の計画を伝える"],"가장 단련된 능력은":
["Ciel's strongest attribute was ","最も鍛えられた能力は"],"각각 반대로 적혀 있다":
["the labels are the wrong way round","紙札とは中身があべこべ"],"개당 도안 웃돈":
["Design premium per unit","1個あたりの意匠上乗せ額"],"검은 배경 · 암전":
["Black screen · fade to black","黒い画面・暗転"],"견적을 다시 읽는다":
["Reread the quotations","見積書を読み直す"],"경연에 참가한 시엘":
["Ciel taking part in the competition","競技に出場するシエル"],"곡물 나눔 장부":
["Grain Distribution Ledger","穀物の配給台帳"],"관을 가진 신의 손」":
["Kanmuri o Motsu Kami no Te","冠を持つ神の手」"],"교본으로 기를 수 있는":
["You've reached the training manual limit for ","教本で伸ばせる"],"글씨를 베껴 비교한다":
["Copy and compare the handwriting","筆跡を書き写して比べる"],"기초·고급 수업":
["Basic and advanced lessons","基礎・上級授業"],"깨울 시각을 확인한다":
["Confirm when to wake him","起こす時刻を確かめる"],"꼭 닫히지 않는다":
["the lid will not close properly","蓋がきちんと閉まらない"],"나란히 불린 두 이름":
["Two Names Called Together","並んで呼ばれた二人の名"],"내가 먼저 간을 보지.":
["I’ll taste it first.","僕が先に味を見る。"],"너와 계약하겠어!!":
["I’ll make a contract with you!","お前と契約する！"],"능력치 교환 교본":
["Attribute trade-off manuals","能力値を振り替える教本"],"달력에 실린 완구":
["The Toy on the Calendar","暦に描かれた玩具"],"도련님. 아침입니다.":
["Time to rise, my lord.","坊ちゃん、朝でございます。"],"도안 번호 열일곱":
["Design Number Seventeen","図案番号十七"],"두 사람의 말을 듣는다":
["Listen to the two children","二人の話を聞く"],"런던 완구상회":
["London Toy Merchants","ロンドン玩具商会"],"런던 집의 열쇠":
["The Key to the London House","ロンドン邸の鍵"],"런던 타운하우스":
["London townhouse","ロンドンのタウンハウス"],"마차의 빈 네 자리":
["Room for Four More","荷馬車の空き四つ"],"명령보다 한 박자 먼저":
["A Beat Ahead of the Order","命令より一拍早く"],"목재 운반선 입항":
["Timber ship arrives","木材運搬船が入港"],"뭐가 웃기지?":
["What’s so amusing?","何がおかしい？"],"미드포드가 영애":
["Daughter of House Midford","ミッドフォード家令嬢"],"미드포드가 장남":
["Eldest son of House Midford","ミッドフォード家の長男"],"반주자가 없는 왈츠":
["A Waltz Without a Pianist","伴奏のないワルツ"],"배치된 인원 없음":
["No staff assigned","配置した使用人はいません"],"버터 비스킷 한 봉":
["Bag of butter biscuits","バタービスケットの小袋"],"벤치를 옮긴 자리":
["A New Spot for the Bench","ベンチの引っ越し先"],"벨 & 손 제과점":
["Bell & Son, Confectioners","ベル＆サン菓子店"],"벽난로 옆 자리":
["A Place by the Fire","暖炉のそば"],"봉제 상태를 지적한다":
["Point out the stitching","縫い目の具合を指摘する"],"봉투에 든 바퀴":
["A Wheel in an Envelope","封筒の中の車輪"],"부활절 가든파티":
["Easter Garden Party","復活祭の園遊会"],"부활절 달걀 찾기":
["Easter Egg Hunt","復活祭の卵探し"],"비 오는 날의 진열창":
["The Shop Window in the Rain","雨の日のショーウィンドー"],"빗나갔어……?":
["I missed…?","外した……？"],"사 스토리 시리즈」":
["Story series’","社のストーリーシリーズ」"],"사본에만 적힌 이름":
["A Name Only in the Copy","写しにだけある名前"],"상대의 표정을 읽는다":
["Read the other party’s expression","相手の表情を読む"],"상아색 칠교판":
["Ivory-coloured tangram","象牙色の七巧板"],"상자를 직접 열어 본다":
["Open the box yourself","自分で箱を開けてみる"],"상표를 빌린 자들":
["Those Who Borrowed a Trade Mark","商標を借りた者たち"],"생산품 및 재고 부족":
["Insufficient production and stock","生産品・在庫が不足"],"서신을 펼친다":
["Open the letter","書簡を開く"],"서재 관리 권한 인수":
["You now have charge of the study","書斎の管理を引き継いだ"],"설탕 경매가 상승":
["Sugar auction prices rise","砂糖の競売価格が上昇"],"세바스찬 · 독백":
["Sebastian’s thoughts","セバスチャン・独白"],"세바스찬의 강평":
["Sebastian’s appraisal","セバスチャンの講評"],"세바스찬의 마지막 평":
["Sebastian's final assessment","セバスチャンの最後の講評"],"세바스찬의 시험":
["Sebastian’s Test","セバスチャンの試験"],"소리 내 읽어 본다":
["Read it aloud","声に出して読む"],"소매·납품 합계":
["Retail sales and deliveries combined","小売・納品の合計"],"손님 이름은 열하나":
["eleven guests by name","客の名が十一人分"],"손잡이 달린 그릇":
["A Bowl with a Handle","取っ手のついた器"],"수동 저장은 유지됩니다.":
["Manual saves will be kept.","手動セーブは保持されます。"],"수확 바구니 품평":
["Harvest Basket Competition","収穫籠の品評会"],"숙련도 5당 +1)":
["+1 per 5 proficiency points)","熟練度5につき＋1）"],"시엘 팬텀하이브":
["Ciel Phantomhive","シエル・ファントムハイヴ"],"식당 천장의 물자국":
["A Water Stain on the Dining Room Ceiling","食堂の天井の水染み"],"식어 가는 밀크티":
["Milk Tea Growing Cold","冷めてゆくミルクティー"],"아래층 보관, 메리":
["Held downstairs, Mary","階下にてお預かり、メアリー"],"아이 쉰 명 무료 초대":
["Fifty children admitted free","子ども五十人を無料招待"],"아이들은 어떡합니까?":
["What about the children?","子供たちはどうします？"],"아주 노련하셨습니다.":
["Very deftly handled, my lord.","お見事なお手並みでございました、坊ちゃん。"],"어느 방으로 모실까요.":
["Which room shall I show him to, my lord?","どちらのお部屋にお通しいたしましょうか。"],"어디든 상관없어!":
["I don’t care where!","どこだって構わない！"],"어릴 때라니요?":
["When you were little, my lord?","幼い頃、とおっしゃいますと？"],"엘리자베스11":
["Elizabeth 11","エリザベス11"],"엘리자베스12":
["Elizabeth 12","エリザベス12"],"엘리자베스13":
["Elizabeth 13","エリザベス13"],"영지의 수확 감사제":
["Estate Harvest Festival","領地の収穫感謝祭"],"예상 영업이익 변화":
["Projected change in operating profit","営業利益の予想増減"],"예상 월말 잔액":
["Projected closing balance","月末残高の見込み"],"오늘 일정은 확인했나?":
["Have you checked today’s schedule?","今日の予定は確認したか？"],"온실의 여벌 열쇠":
["A Spare Key to the Greenhouse","温室の合鍵"],"왕실 납품 인증":
["Royal Warrant of Appointment","王室御用達認定"],"왕실 납품 증서":
["Royal Warrant certificate","王室御用達認定証"],"왕실 평가 소폭 상승":
["Royal standing improves slightly","王室の評価が少し上がる"],"월말 컨디션 회복":
["Month-end condition recovery","月末の体調回復"],"응접실 후속 접객":
["More Callers in the Drawing Room","応接間の次の来客"],"이 가격의 예상 수요":
["Estimated demand at this price","この価格での予想需要"],"이달 일정·사건 기록":
["This month’s activities and events","今月の日程・出来事の記録"],"이번 회차의 발자취":
["This playthrough in review","今回の歩み"],"인수증의 두 번째 장":
["The Second Copy of the Receipt","二枚目の受領証"],"일을 해? 왕자인 내가?":
["Work? Me? A prince?","働く？　王子の俺が？"],"일정 진행과 월말 결산":
["Running the schedule and closing the accounts","日程の進行と月末決算"],"자금 부족으로 종료":
["Ending · Bankruptcy","破産による結末"],"자선회 서기의 회신":
["The Charity Secretary’s Reply","慈善会の書記からの返事"],"자유행동 · 월 1회":
["Free time · once a month","自由行動・月1回"],"작은 차이가 남긴 평가표":
["A Narrow Margin on the Assessment Sheet","評価表に残ったわずかな差"],"잠시 펜을 놓는다":
["Put the pen aside for a moment","少しペンを置く"],"재작업 예약 · £12":
[" · Rework scheduled · £12"," · 手直しを予約 · £12"],"저녁 일정을 비운다":
["Clear the evening’s schedule","夜の予定を空ける"],"저택 → 관리 · 경영":
["Manor → Estate & Company","屋敷 → 屋敷・会社経営"],"저택에 자리를 마련한다":
["Make room at the manor","屋敷に居場所を用意する"],"저택의 새 셰프":
["The Manor's New Chef","屋敷の新しい料理長"],"접대가 끝난 뒤에도":
["After the Tea Is Served","もてなしが済んでも"],"정제당 대량 입고":
["Bulk shipment of refined sugar arrives","精製糖が大量入荷"],"제작실 → 저택 메뉴":
["Workshop → Manor Menu","製作室 → 屋敷のメニュー"],"조금 앞선 새해 인사":
["A New Year's Greeting Wins by a Whisker","わずかな差で届いた新年の挨拶"],"조리대를 맡긴다":
["Put him in charge at the stove","調理台を任せる"],"주머니판 모험소설":
["Pocket-sized adventure novel","携帯版の冒険小説"],"주방 → 사용인 배치":
["Kitchen → Assign Staff","厨房 → 使用人の配置"],"주인의 말을 기다린다":
["Wait for the master to speak","主が口を開くのを待つ"],"중순 → 서재 수업":
["Mid-Month → Study in the Library","中旬 → 書斎での授業"],"지방 완구점의 추가 주문":
["Extra order from a provincial toyshop","地方の玩具店からの追加注文"],"지출 내역·시설 효과":
["Expenses & facility effects","支出内訳・施設効果"],"직접 자리를 옮긴다":
["Change seats yourself","自分の席を移す"],"진열 담당의 수첩":
["The Window Dresser’s Notebook","陳列係の手帳"],"집사보다 이른 손님":
["The Guest Who Beat the Butler to It","執事より早起きの客"],"참가한 경연이 없습니다.":
["No competitions entered.","出場した競技会はありません。"],"창고 정리 할인전":
["Warehouse clearance sale","在庫一掃セール"],"처음부터 박자를 센다":
["Count the beats from the beginning","最初から拍を数える"],"출시 승인 · 다음 달 생산":
["Approve release · Produce next month","発売を承認 · 翌月生産"],"출품 가능한 품목 없음":
["No eligible products","出品できる品目なし"],"켜기 또는 끄기":
["Toggle on or off","オン・オフを切り替え"],"타운하우스 배치 효과":
["Townhouse assignment effects","タウンハウスの配置効果"],"타운하우스의 문간":
["On the Townhouse Steps","タウンハウスの戸口で"],"타운하우스의 손님":
["The Townhouse Guest","タウンハウスの客"],"튜토리얼 안내서":
["Game guide","遊び方"],"판매·납품 흑자":
["Profitable months from retail and deliveries: ","小売・納品の黒字月数："],"팬텀사 견본 소개":
["Present Funtom samples","ファントム社の見本を紹介"],"팬텀사 누적 매출":
["Funtom's total revenue","ファントム社の累計売上"],"팬텀사 소매 매출":
["Funtom retail revenue","ファントム社の小売売上"],"팬텀사 소매 수요":
["Funtom retail demand","ファントム社の小売需要"],"팬텀사 예상 매출":
["Projected Funtom sales","ファントム社の予想売上"],"팬텀사 운영 · 생산비":
["Funtom operating and production costs","ファントム社の運営費・生産費"],"팬텀사 인지도 상승":
["Funtom gains recognition","ファントム社の知名度上昇"],"풀이를 말로 듣는다":
["Hear him explain his reasoning aloud","解き方を口頭で説明してもらう"],"풋맨의 첫 급료":
["The Footman's First Wages","フットマンの初任給"],"하순 → 귀족 예법":
["Late Month → Noble Etiquette","下旬 → 貴族の礼法"],"한 곡이 끝난 뒤":
["After the Last Note","一曲を終えて"],"한 바퀴 더 걷는다":
["Walk another circuit","もう一周歩く"],"합류한 사용인이 없습니다.":
["No servants have joined the household.","屋敷に加わった使用人はいません。"],"협력 공장 기록 확보":
["Supplier factory records obtained","取引先工場の記録を入手"],"화구 수리부터 함께한다":
["Start by repairing the stove together","まず一緒にかまどを直す"],"화제 선택과 능력 확인":
["Conversation topics and attributes","話題の選択と能力の確認"],"확정된 이달 예산":
["Confirmed budget for this month","今月の確定予算"],"(숙련도 5당 +1)":
["(+1 per 5 proficiency points)","（熟練度5につき＋1）"],"B가 두 개이고 D가 없다":
["There are two Bs and no D","Bが二枚あり、Dがない"],"· 예상 영업이익 변화":
[" · Estimated change in operating profit: "," · 営業利益の予想増減 "],"「― 빅토리아.」":
["“Victoria.”","「――ヴィクトリア」"],"「관을 가진 신의 손」":
["Kanmuri o Motsu Kami no Te","『冠を持つ神の手』"],"가문 연례행사 · IF":
["Annual family occasion · What-if scenario","一家の年中行事・IF"],"가문의 관습을 찾아본다":
["Look up the family’s customs","その家のしきたりを調べる"],"가자, 세바스찬!":
["Come, Sebastian!","行くぞ、セバスチャン！"],"가족이라뇨. 당치 않습니다.":
["Family? You give me far too much credit.","家族だなんて、滅相もございません。"],"같은 호칭을 돌려준다":
["Reply using the same form of address","こちらも同じ呼び方で返す"],"개수할 때마다 · 최대 100":
["Per renovation · Maximum 100","改修ごと · 最大100"],"개수할 때마다 추가 감소":
["Further reduction with each renovation","改修ごとにさらに減少"],"개월 (상금 제외)":
[" months (excluding prize money)","か月（賞金を除く）"],"개월에 증설비 회수":
[" months","か月で増設費を回収"],"거래처 납품 대금":
["Wholesale receipts","納品代金"],"계절 경연 · 박람회":
["Seasonal competitions and exhibitions","季節の競技会・博覧会"],"골든 주빌리 기념 메달":
["Golden Jubilee Commemorative Medal","即位五十周年記念メダル"],"그 까닭을 묻는다":
["Ask why","理由を尋ねる"],"그 뒤, 저택의 서재":
["Later, in the Manor Study","後日、屋敷の書斎にて"],"그것도 나쁘지 않지….":
["It has its charms…","それも悪くないな……。"],"그쪽에도 있었구나. (":
["Oh. There you are, too.","……そっちにもいたのか。"],"까지 올리셨군요.":
[" points, my lord.","までお上げになりましたね。"],"납품 조건을 조사한다":
["Investigate the terms of supply","納入条件を調べる"],"낮의 버킹엄궁 정문":
["The gates of Buckingham Palace by daylight","昼のバッキンガム宮殿正門"],"내역 외 잔액 변동":
["Unitemised change in balance","明細外の残高増減"],"네가 마음대로 물렸어?":
["You sent them away on your own authority?","僕に断りもなく帰したのか？"],"년 6월 21일 기념 예배":
[" · 21 June, Jubilee service","年6月21日 記念礼拝"],"는 외상으로 진행합니다.":
[" will be charged to the account.","は掛け払いとなります。"],"다른 염색 천을 청한다":
["Ask to see cloth dyed a different colour","別の色に染めた布を頼む"],"다시 벗겨 드릴까요?":
["Shall I take it off again?","では、もう一度お脱がせいたしましょうか？"],"다음 곡을 남겨 두고":
["A Piece for Another Day","次の一曲を残して"],"다음 봄에도 같은 정원에서":
["In the Same Garden Next Spring","来春もこの庭で"],"대화창 다시 표시 (H)":
["Show dialogue box (H)","会話ウィンドウを再表示（H）"],"도련님, 제 뒤로.":
["Behind me, my lord.","坊ちゃん、私の後ろへ。"],"도련님의 말을 기다린다":
["Wait for the young master to speak","坊ちゃんの言葉を待つ"],"동사 어미부터 대조한다":
["Compare the verb endings first","まず動詞の語尾を見比べる"],"두 번째로 돌아온 영수증":
["The Receipt That Came Back Twice","二度戻ってきた領収書"],"두 손님의 대화를 잇는다":
["Draw the two guests into conversation","二人の客の会話を取り持つ"],"둘만의 아침 습관 기록":
["Their morning ritual is recorded","二人だけの朝の習慣を記録"],"라우 상점 재고 매각":
["Stock sold to Lau's shop ","劉の店への在庫売却 "],"런던 상인 간담회":
["London merchants' meeting","ロンドン商人の懇談会"],"런던 집의 두 주인":
["Two Masters of the London House","ロンドン邸の二人の主"],"리넨장 맨 윗칸":
["The Top Shelf of the Linen Cupboard","リネン戸棚の最上段"],"마지막 한 분께는 주방으로":
["Take the last one to the kitchen","最後のお一人には厨房へ"],"명함의 호칭을 확인한다":
["Check the titles on the visiting cards","名刺の敬称を確かめる"],"모두 뒷면이 빨갛다":
["both decks have red backs","裏はすべて赤い"],"무례한 젊은 사업가":
["An Ill-Mannered Young Businessman","無作法な若き実業家"],"문장 없는 마차 · 사업가":
["The Unmarked Carriage · Businessman","紋章のない馬車・実業家"],"문장 없는 마차 · 정보상":
["The Unmarked Carriage · Information Broker","紋章のない馬車・情報屋"],"문장 없는 마차 · 추적":
["The Unmarked Carriage · Pursuit","紋章のない馬車・追跡"],"박람회의 유리 진열장":
["The Exhibition Display Case","博覧会のガラスケース"],"박수로 맺는 인사":
["Closing Remarks and Applause","拍手で結ぶ挨拶"],"박자가 멎은 무도회":
["When the Ballroom Misses a Beat","舞踏会で途切れた拍子"],"박자만 짚어 본다":
["Just mark the beat","拍子だけを取る"],"받침 종이를 빼면":
["Remove the cardboard insert","台紙を抜けば"],"발의 위치를 다시 맞춘다":
["Adjust your foot position again","足の位置を合わせ直す"],"병환 · 다음 일정부터 요양":
["Illness · Rest from the next activity","病気 · 次の日程から療養"],"보유금이 부족합니다.":
["Insufficient funds.","所持金が足りません。"],"봄꽃 압화 책갈피":
["Pressed Spring Flower Bookmark","春の押し花のしおり"],"봄꽃 표찰 맞히기":
["Name the Spring Flowers","春の花の名当て"],"봉인의 압흔을 대조한다":
["Compare the impressions in the wax","封蝋に残った印影を比べる"],"봉투 무게부터 잰다":
["Weigh the envelopes first","まず封筒の重さを量る"],"봉투 안의 부스러기":
["A Scrap in the Envelope","封筒の中の紙片"],"빗물 아래 놓인 악보":
["Sheet Music under a Leaking Roof","雨漏りの下の楽譜"],"사라진 동전 한 닢":
["The Missing Penny","消えた一ペニー"],"사용인 배치 → 저택 관리":
["Assign Staff → Estate Management","使用人の配置 → 屋敷の管理"],"사용인 실무 숙련도 ·":
["Staff proficiency · ","使用人の実務熟練度 · "],"사용인들의 작업 일지를 본다":
["Read the servants’ work logs","使用人たちの作業日誌を読む"],"사용인이 시엘을 대하는 마음":
["How the staff feel about Ciel","使用人たちのシエルへの思い"],"사우스켄싱턴 박람회":
["South Kensington Exhibition","サウス・ケンジントン博覧会"],"새 도안첩의 번호대로":
["the number in the new catalogue","新しい図案帳の番号どおり"],"서로의 곡을 들은 오후":
["An Afternoon Listening to Each Other Play","互いの曲を聴いた午後"],"서쪽 지붕의 견적":
["An Estimate for the West Roof","西側の屋根の見積もり"],"설비를 매각할까요?":
["Sell this equipment?","設備を売却しますか？"],"세바스찬 미카엘리스":
["Sebastian Michaelis","セバスチャン・ミカエリス"],"세바스찬의 월말 보고":
["Sebastian’s Month-End Report","セバスチャンの月末報告"],"세바스찬의 한마디":
["A Word from Sebastian","セバスチャンのひと言"],"소량 납품부터 계약한다":
["Agree to supply a small order first","まずは少量の納入を引き受ける"],"소매 안쪽의 바늘땀":
["Stitches Inside the Sleeve","袖の裏の縫い目"],"소인의 경로를 맞춘다":
["Trace the route from the postmark","消印から経路をたどる"],"손님에게 새해 인사를 한다":
["Offer the guests New Year’s greetings","客に新年の挨拶をする"],"수확 장부를 검토한다":
["Review the harvest ledger","収穫の帳簿を確認する"],"시설 개수와 사용인 배치":
["Renovating rooms and assigning staff","施設の改修と使用人の配置"],"시엘의 최종 능력치":
["Ciel's final attributes","シエルの最終能力値"],"실례했습니다, 도련님.":
["Forgive me, my lord.","失礼いたしました、坊ちゃん。"],"아그니와의 다과 기록":
["Tea with Agni","アグニとのお茶の記録"],"아직 기록된 엔딩이 없습니다.":
["No endings recorded yet.","まだエンディングの記録はありません。"],"아직 기록된 인물이 없습니다.":
["No one has been recorded yet.","まだ人物の記録はありません。"],"아직 살피지 못한 정원":
["More of the Garden to Explore","まだ見ていない庭"],"어디까지 전하면 됩니까?":
["How much shall I tell them?","どこまでお伝えしましょう？"],"어제의 현금 출납장":
["Yesterday’s Cashbook","昨日の現金出納帳"],"얼스 코트 공예 메달":
["Earl's Court Medal for Craftsmanship","アールズ・コート工芸メダル"],"얼스 코트 인근 상점":
["Shop near Earl's Court","アールズ・コート近くの店"],"에드워드 미드포드":
["Edward Midford","エドワード・ミッドフォード"],"여왕의 골든 주빌리":
["The Queen's Golden Jubilee","女王陛下の即位五十周年"],"영수증이 길어서요.":
["It’s a long receipt.","領収書が長いものですから。"],"예스, 마이 로드.":
["Yes, my lord.","イエス、マイロード。"],"오늘 복도가 너무 조용해.":
["The hall is too quiet today.","今日の廊下は静かすぎる。"],"오늘 아침 바삭하게 부러졌다":
["Snapped cleanly this morning","今朝、ぱきんと割れた"],"오늘부터 할 일이 아주 많아.":
["There’s a great deal to do, starting today.","今日からやることは山ほどある。"],"온실 열쇠를 건넨다":
["Hand over the greenhouse key","温室の鍵を渡す"],"완구상 두 곳의 증언":
["The Two Toy Dealers’ Accounts","二軒の玩具商の証言"],"완구상 초청 다과회":
["Tea for the toy merchants","玩具商を招く茶会"],"왈츠의 셋째 박":
["The Third Beat of the Waltz","ワルツの三拍目"],"외상으로 진행할 수 있습니다.":
["You can proceed on credit.","掛けで進められます。"],"은상입니다, 도련님.":
["Silver, my lord.","銀賞でございます、坊ちゃん。"],"의 발주서를 접수했습니다.":
["'s order accepted.","からの発注を受け付けました。"],"의 한도에 도달했습니다.":
[".","の上限に達しました。"],"의사를 다시 모셔 오겠습니다.":
["I shall fetch the doctor again.","もう一度、お医者様をお呼びしてまいります。"],"의지 +5 · 의욕 -5":
["Resolve +5 · Motivation −5","意志 +5・意欲 −5"],"이미 상한에 도달했습니다.":
["Already at the limit.","すでに上限に達しています。"],"이번 달 일정을 시작할까요?":
["Start this month's schedule?","今月の日程を開始しますか？"],"이번 달 입출금이 없습니다.":
["No money came in or went out this month.","今月は入出金がありませんでした。"],"이번 달이 마지막 영업입니다.":
["This is the final month of trading.","今月が最後の営業月です。"],"이번 도안첩과 출고표":
["The Current Catalogue and the Dispatch Slips","今季の図案帳と出荷票"],"인장의 연대부터 맞춘다":
["Establish the date of each seal first","まず印章の年代を割り出す"],"일정한 보폭으로 완주한다":
["Finish with an even stride","歩幅を揃えて走り切る"],"자선병원 식사 후원":
["Meals for the charity hospital","慈善病院への食事支援"],"작년 연회 감사 인사’":
["Thanks for last year’s banquet","昨年の晩餐会の礼状"],"작은 동전부터 다시 센다":
["Recount the coins, starting with the smallest","額の小さい硬貨から数え直す"],"잔을 새로 내온다":
["Bring fresh cups","新しいカップを運ぶ"],"잠깐, 세바스찬.":
["Wait, Sebastian.","待て、セバスチャン。"],"잠깐이라면 들어주지.":
["I can spare you a moment.","少しなら聞いてやる。"],"잠시 머물다 돌아간다":
["Stay a little, then leave","少し滞在して帰る"],"잠시 호흡을 고른다":
["Take a moment to steady your breathing","少し呼吸を整える"],"저택 유지·채무 상환":
["Estate upkeep and debt repayments ","屋敷の維持費・借入返済 "],"저택 유지·채무 합산":
["Estate upkeep and debt payments","屋敷維持費・債務返済の合計"],"전표의 글씨를 본다":
["Examine the handwriting on the slip","伝票の筆跡を調べる"],"정기 운송 자리를 계약한다":
["Reserve regular space on the carrier’s wagon","荷馬車の定期便に場所を確保する"],"정보상의 연락망을 얻었습니다.":
["Ciel has secured a network of informants.","シエルは情報屋の連絡網を手に入れました。"],"정원사가 한 일을 묻는다":
["Ask what the gardener did","どんな手入れをしたのか庭師に尋ねる"],"제과장의 검식 쪽지":
["The Head Confectioner’s Tasting Note","製菓長の試食メモ"],"좌석표를 고친다":
["Revise the seating plan","席次表を直す"],"주빌리 기념품 출품사":
["Jubilee Souvenir Exhibitor","即位五十周年記念品の出品者"],"증설하면 이번 달 준비비가":
["Expanding now would leave the budget for this month’s preparations ","増設すると今月の準備費が"],"진열대를 그려 둔다":
["Sketch the display","陳列台を描き留める"],"쯧, 안됐군그래.":
["Tch. Tough luck.","ちっ、そいつはお気の毒に。"],"차를 한 잔 더 따른다":
["Pour another cup","お茶をもう一杯注ぐ"],"찻잔 너머의 악수":
["A Handshake Across the Teacups","カップ越しの握手"],"찻잔을 내려놓고":
["Setting Down the Teacup","カップを置いて"],"찻잔을 받아 든다":
["Accept the teacup","ティーカップを受け取る"],"찻주전자 바로 위 선반":
["the shelf directly above the steaming kettle","やかんの真上の棚"],"창고에서 사라진 세 벌":
["Three Sets Missing from the Warehouse","倉庫から消えた三組"],"창턱의 빈 바구니":
["An Empty Basket on the Sill","窓辺の空の籠"],"추가 유지비 £2 차감 후":
["After £2 in extra upkeep","追加維持費£2を差し引いた額"],"축하드립니다, 도련님.":
["Congratulations, my lord.","おめでとうございます、坊ちゃん。"],"토끼가 기우는 쪽":
["Which Way the Rabbit Leans","ウサギが傾く方"],"통찰 19이면 복원 가능":
["Can be restored with 19 Insight","洞察19で修復可能"],"판매원의 의견을 받아 적는다":
["Take down the shop assistant’s observations","店員の意見を書き留める"],"팬텀사 소매 수요 +":
["Funtom retail demand +","ファントム社の小売需要 ＋"],"팬텀사 시제품 검수":
["Funtom prototype inspection","ファントム社の試作品検品"],"팬텀사에서 받은 적이 없다":
["Neither shopkeeper received the toys from Funtom","ファントム社から仕入れたことはない"],"팬텀하이브의 당주":
["Head of House Phantomhive","ファントムハイヴ家当主"],"프린세스 메이커 3":
["Princess Maker 3","プリンセスメーカー3"],"피니안의 신뢰 상승":
["Finnian’s trust increases","フィニアンからの信頼が上がる"],"합격 · 고급 과정 진급":
["Pass · Advance to the advanced course","合格・上級課程へ進級"],"햇살이 드는 회랑":
["A Sunlit Gallery","陽の差す回廊"],"현관에서 한 사람씩 맞는다":
["Greet each guest at the door","玄関で一人ずつ迎える"],"현을 갈고 다시 켠다":
["Replace the string and play again","弦を張り替えてもう一度弾く"],"현재 배치할 인원이 없습니다.":
["No one is currently available to assign.","現在配置できる人はいません。"],"현재 진행이 초기화됩니다.":
["Current progress will be reset.","現在の進行状況は初期化されます。"],"현재 탭에 임시 저장":
["Temporarily saved in this tab","このタブに一時保存"],"화이트채플에서 온 전보":
["A Telegram from Whitechapel","ホワイトチャペルからの電報"],"확인 · 집사 세바스찬":
["Reviewed by Sebastian, butler","確認・執事セバスチャン"],"휴대폰에서 게임 여는 방법":
["How to play on your phone","スマートフォンでゲームを開く方法"],"흰 장갑 한 켤레":
["A Pair of White Gloves","一組の白手袋"],"/14개월 (상금 제외)":
["/14 months (excluding prize money)"," / 14か月（賞金を除く）"],"Test · 세바스찬의 시험":
["Test · Sebastian’s Test","Test · セバスチャンの試験"],"‘작년 연회 감사 인사’":
["‘Thanks for last year’s banquet’","「昨年の晩餐会の礼状」"],"……네가 마음대로 물렸어?":
["…You sent them away on your own authority?","……僕に断りもなく帰したのか？"],"가문 장부 → 저장 · 설정":
["Family Ledger → Save & Settings","家の帳簿 → セーブ・設定"],"가문의 장서표를 대조한다":
["Compare the family bookplates","一族の蔵書票を照合する"],"가벼운 일부터 가르친다":
["Start with light duties","軽作業から教える"],"검은 사탕을 찾는 손님":
["The Customer Who Asked for Black Sweets","黒い飴を探す客"],"관리 유예 시 월 £8 절약":
["Deferring upkeep saves £8 per month.","手入れを見送ると毎月£8節約できます。"],"그래서 한 개만 기울었군.":
["So that’s why that one’s leaning.","だから一本だけ傾いてるのか。"],"그러니까 내가 직접 왔잖아.":
["Precisely why I came myself.","だから僕が来たんだろう。"],"금요일 전에 받을 대금을 표시한다":
["Mark the payments due before Friday","金曜までに受け取る代金に印をつける"],"기록 시작 시점부터 집계했습니다.":
["Figures are available from the date these records began.","記録をつけ始めた時点から集計しています。"],"나는 싸우기 위해 돌아왔어.":
["I came back to fight.","戦うために戻ってきたんだ。"],"납품 약속에 집중한다":
["Concentrate on the promised delivery","納品の約束に専念する"],"답장 속 꽃 이름을 다시 읽는다":
["Reread the flower names in their reply","返事にある花の名を読み返す"],"대화창 숨기기 (H)":
["Hide dialogue box (H)","会話ウィンドウを隠す（H）"],"도련님의 대답을 기다린다":
["Wait for his answer","坊ちゃんのお返事を待つ"],"두 손님께 직접 순서를 청한다":
["Ask the two guests in person to agree on an order","二人の客に直接、踊る順番を相談する"],"두 판의 차이를 찾아낸다":
["Look for the difference between the two boards","二つの盤面の違いを見つける"],"똑같은 곳에서 접힌다":
["it folds in the same place","同じところで折れる"],"라고 에밀리가 말했어.":
["says Emily.","……って、エミリーが言ってる。"],"라고 키츠가 말했어.":
["says Keats.","……って、キーツが言ってる。"],"런던 집의 손님 맞이":
["Receive a guest at the London house","ロンドン邸で客を迎える"],"마지막 명령 · 무관의 주인":
["The Final Order · An Untitled Master","最後の命令・無冠の主人"],"마지막 박에 맞춰 함께 인사한다":
["Bow together on the final beat","最後の拍に合わせて二人で礼をする"],"마지막엔 생강 맛이 남아.":
["It's the ginger that lingers at the end.","あとに生姜の味が残るんだ。"],"마차까지 직접 가서 인계한다":
["Go to the coach and hand it over yourself","馬車まで出向き、自分で引き渡す"],"말없이 다음 장갑을 건넨다":
["Hand him the other glove without a word","黙ってもう片方の手袋を差し出す"],"명령이다, 세바스찬.":
["That’s an order, Sebastian.","命令だ、セバスチャン。"],"문 앞에서 두 번 두드린다":
["Knock twice at the door","玄関の扉を二度たたく"],"바구니에 묶은 리본":
["A Ribbon for the Basket","籠に結んだリボン"],"바닥에 붙은 꼬리표":
["The Tags on the Underside","底に貼られた札"],"바닥을 바꿔 굴린다":
["Roll it on a different surface","別の床で転がしてみる"],"바르도가 고개를 들었다.":
["Baldo looked up.","バルドが顔を上げた。"],"백화점의 포장 견본":
["The Department Store’s Sample Box","百貨店の包装見本"],"본저택으로 보낼 식사 준비":
["Prepare meals for the manor","本邸に送る食事を用意"],"비어 있는 옆자리를 권한다":
["Offer the empty seat beside the first guest","先客の隣の空席を勧める"],"빈 쟁반을 드는 법":
["How to Carry an Empty Tray","空の盆の持ち方"],"살펴 둔 길 끝의 상장":
["A Prize at the End of a Familiar Path","見ておいた小道の先の賞状"],"상대를 만나 납기를 바꾼다":
["Meet the customer and renegotiate the deadline","先方に会って納期を変更する"],"서로의 연주에 보낸 박수":
["Applause for Both Performances","互いの演奏に送る拍手"],"서재 열쇠를 돌려준다":
["Return the study key to Tanaka","書斎の鍵をタナカに返す"],"선택 근무지와 인원 배치":
["Selected workplace and staff assignments","選択中の配属先と使用人の配置"],"세바스찬에게 접수 위임":
["Have Sebastian file the papers","書類の提出をセバスチャンに任せる"],"세바스찬의 안내 다시 재생":
["Replay Sebastian’s introduction","セバスチャンの案内をもう一度聞く"],"손끝으로만 박자를 맞춘다":
["Keep time with fingertips alone","指先だけで拍子を合わせる"],"손을 잡아 박을 맞춘다":
["Take his hand and find the beat together","手を取って拍子を合わせる"],"시엘의 이름이 불리는 순간":
["When Ciel's Name Is Called","シエルの名が呼ばれた時"],"심사에 오르지 않은 참가표":
["An Unused Entry Ticket","審査に出せなかった参加票"],"앞 문장까지 이어서 번역한다":
["Translate it together with the preceding sentence","前の文と続けて訳す"],"어릴 때도 꼭 이랬어.":
["It was just like this when I was little.","小さい頃も、こうだった。"],"엘리자베스의 신뢰":
["Elizabeth's trust","エリザベスの信頼"],"여러 분야의 최종 실기 통과":
["Final practical exams passed in multiple fields","複数分野の最終実技試験に合格"],"여우의 대사를 고쳐 읽는다":
["Read the fox’s line aloud with the correction","狐の台詞を直して読み上げる"],"열일곱 번은 목제 완구":
["Number seventeen is a wooden toy","十七番は木の玩具"],"예. 이분은 여성입니다만.":
["Indeed, my lord. The Owl is a woman.","ええ、こちらの方は女性でいらっしゃいますが。"],"예. 책은 거기 두세요.":
["I see. Leave the book there, please.","ええ。本はそこに置いてください。"],"오늘 접객은 여기서 마친다":
["Receive no more callers today","今日の接客はここまでにする"],"오늘은 말의 보폭을 본다":
["Spend today observing the horse’s stride","今日は馬の歩幅を観察する"],"왕실에서 작위를 승인했다.":
["The Crown has approved the title.","王室が爵位を承認した。"],"왕자가 직접 현관에 나와?":
["The prince answers his own front door?","王子が自分で玄関まで出てくるのか？"],"왕진 완료 · 컨디션 +":
["Doctor's visit complete · Condition +","往診完了 · 体調＋"],"외상 매출 전표를 찾는다":
["Look for a credit sales slip","掛売りの伝票を探す"],"왼쪽 귀 끝이 찍혀 있다":
["The tip of the left ear has left a mark","左耳の先の跡がついている"],"위층 매장, 주인에게 직접":
["Upstairs shop, to the proprietor in person","二階の店舗、店主に手渡し"],"유리창 한 칸의 사용료":
["The Rent on a Shop Window","ショーウィンドウの貸し賃"],"이 판본의 눈송이 장식":
["this edition’s snowflake motif","この版の雪の結晶の模様"],"이 하나 갖고 싶었거든.":
["I’ve wanted one for a while.","ちょうど一匹欲しかったんだ。"],"이달 운영 지시 확인·변경":
["Review or change this month's instructions","今月の運営指示を確認・変更"],"이번 순에는 수치 변화가 없습니다.":
["Your stats did not change this period.","この期間の数値に変動はありません。"],"이었습니다. 팬텀사의 개발품은":
[". Funtom developed ","でした。ファントム社が開発した商品は"],"인칭 어미를 고쳐 읽는다":
["Correct the verb ending and read it aloud","動詞の人称語尾を直して読み上げる"],"입맛이 없는 날에 추천해.":
["I'd recommend it for days when you've no appetite.","食欲のない日におすすめだよ。"],"장부는 두고 가십니까?":
["Will you be leaving your ledger here, my lord?","帳簿は置いていかれるのですか、坊ちゃん？"],"저녁 식단을 함께 짠다":
["Plan the dinner menu together","一緒に夕食の献立を考える"],"저녁에도 같은 잔을 부탁한다":
["Ask for the same cup at dinner","夕食にも同じカップを頼む"],"저택과 런던의 방문 기록":
["Manor and London visit records","屋敷とロンドンの訪問記録"],"정기 운송 4자리 확보":
["Four regular shipping slots secured","定期輸送の枠を4つ確保"],"조사 자료를 왕실에 제출한다":
["Submit the findings to the Crown","調査資料を王室に提出する"],"좌석표를 다시 살핀다":
["Check the seating plan again","席次表をもう一度見る"],"주민에게 빵을 나눈다":
["Hand out bread to the villagers","領民にパンを配る"],"준비한 만큼 따뜻한 한 잔":
["The Care Behind a Warm Cup","温かな一杯に込めた心配り"],"지연 때의 부담을 확인한다":
["Check who bears the cost of a delay","遅配の費用を誰が負担するか確かめる"],"차를 올리는 순서를 묻는다":
["Ask in what order the tea is served","茶を出す順序を尋ねる"],"참가한 행사의 결과가 기록됩니다.":
["Results appear here after you take part in an event.","参加した催しの結果がここに記録されます。"],"찻잔 곁의 작은 상장":
["A Little Certificate Beside the Cup","カップの隣の小さな賞状"],"창에 비춰 뒤집어 본다":
["Hold the sketch to the window and look from the back","窓に透かして裏から見る"],"첫 제보자에게 확인을 부탁해.":
["Ask the original informant to confirm it.","最初の情報提供者に確認を頼め。"],"클럽의 카드 두 묶음":
["The Club’s Two Decks","クラブにある二組の札"],"타나카에게 봉랍을 문의한다":
["Ask Tanaka about the sealing wax","タナカに封蝋のことを尋ねる"],"팬텀사 이야기를 꺼낸다":
["Bring up Funtom","ファントム社の話をする"],"팬텀사 회계 장부 제출":
["Submit Funtom’s accounts","ファントム社の帳簿を提出する"],"편성한 일정의 예상 변동":
["Projected schedule effects","予定による変化の見込み"],"푸른 카드는 한 장도 없다":
["There isn’t a single blue card","青い札は一枚もない"],"하지만 거짓말이 아닙니다.":
["Though I assure you, I spoke the truth.","もっとも、嘘を申し上げたわけではございません。"],"할아범 잘못이 아니야.":
["It wasn't your fault, old man.","じいやのせいじゃない。"],"헌정 완구를 보낸다":
["Send a toy in tribute","玩具を献上する"],"회의 서류만 두고 간다":
["Leave the meeting papers","会議の書類だけ置いていく"],"1887년 6월 21일 기념 예배":
["21 June 1887 · Jubilee service","1887年6月21日　記念礼拝"],"……! 의사를 다시 모셔 오겠습니다.":
["…! I shall fetch the doctor again.","……！　もう一度、お医者様をお呼びします。"],"……어릴 때도 꼭 이랬어.":
["…It was just like this when I was little.","……小さい頃も、こうだった。"],"가문 증빙 확보 · 통찰 400":
["Family records secured · Insight 400","家の記録を確保済み・洞察 400"],"가장자리에 다른 색 실을 달아.":
["Sew a different colour of thread along each edge.","縁に目印を縫いつけろ。糸は色を違えて。"],"같은 물량·가격·수요라면":
["At the same volume, price and demand, expansion pays for itself in ","数量・価格・需要が同じなら、"],"거기부터 봤어야 했는데.":
["That’s where I should have looked first.","そっちから見るべきだったな。"],"거래처 일대의 시장을 조사한다":
["Survey the market around the shop","取引先の店の周辺で市場を調べる"],"격변화표를 펼친다":
["Open the declension table","格変化表を開く"],"고개를 조금만 숙여 주십시오.":
["Your head a little lower, please.","少しだけ頭をお下げください。"],"관리 지연 · 가문 명성 하락":
["Upkeep overdue · Family reputation falls","手入れの遅れ・家の名声が下がる"],"규칙서에서 성문을 지운다":
["Strike the castle gate from the rules","説明書から城門を消す"],"그대와의 만남을 기대합니다.":
["I look forward to meeting you.","そなたに会えるのを楽しみにしています。"],"그대의 귀환을 환영합니다.":
["Welcome home.","そなたの帰還を歓迎します。"],"나, 나는······.":
["I… I…","ぼ、僕は……。"],"남은 식사 비용을 계산한다":
["Work out the remaining meal budget","残りの食事代を計算する"],"납품 기록 끝에 놓인 증서":
["A Warrant to Go with the Delivery Record","納品記録に添えられた認定証"],"년 5월 4일 박람회 개막":
[" · 4 May, exhibition opens","年5月4日 博覧会開幕"],"년 5월 얼스 코트 박람회":
[" · May, Earl’s Court Exhibition","年5月 アールズ・コート博覧会"],"누적 판매·납품 18개 미달":
["Fewer than 18 units sold or delivered","小売・納品の累計が18個未満"],"다음 상자부터 어디를 손볼까?":
["What should be changed for the next box?","次の箱からどこを直す？"],"다음 영업일에 다시 오시라고 한다":
["Ask him to return the next business day","次の営業日にもう一度来てもらう"],"대출 실행 · £144 입금":
["Loan taken out · £144 received","借入実行 · £144入金"],"더 깎일 체면이 있을까요?)":
["I wonder how much dignity there is left to lose.)","これ以上、失うほどの面目がおありでしょうか？）"],"도련님, 편지가 왔습니다.":
["A letter for you, my lord.","坊ちゃん、お手紙が届いております。"],"둘의 공통 관심사를 꺼낸다":
["Bring up something both guests enjoy","二人に共通する話題を持ち出す"],"라고 오스카가 말했어.":
["says Oscar.","……って、オスカーが言ってる。"],"라고 와일드가 말했어.":
["says Wilde.","……って、ワイルドが言ってる。"],"라우 상점 중고 교본 매각":
["Used manuals sold to Lau's shop ","劉の店への古い教本の売却 "],"런던 타운하우스 근무지":
["London townhouse assignments","ロンドンのタウンハウスの配属先"],"로열 워런트(수확제)":
["Royal Warrant (Harvest Festival)","王室御用達認定（収穫祭）"],"를 열어 보시겠습니까?":
["Would you care to open it?","お開きいただけますか？"],"맛 없을 것 같은 메뉴인데…….)":
["That doesn’t sound terribly appetising…)","あまり食欲をそそらない献立だな……）"],"먼저 떠나는 요리사 엘런에게":
["For Ellen, our cook, who leaves us first","ひと足先に旅立つ料理人エレンへ"],"모든 방을 돌며 진행을 지휘한다":
["Go from room to room and supervise in person","各部屋を回り、自ら進行を指揮する"],"모퉁이까지 호흡부터 고른다":
["Steady your breathing on the way to the corner","曲がり角まで、まず呼吸を整える"],"바구니 곁의 은빛 장식":
["A Silver Ornament Beside the Basket","籠のそばの銀飾り"],"보충 · 다음 수강 후 재시험":
["Further practice · Retake after the next lesson","補習・次の受講後に再試験"],"부족한 능력과 주력 과목":
["Skills to improve and subjects to focus on","不足している能力と重点科目"],"사우스켄싱턴 상인회 메달":
["South Kensington Merchants' Association Medal","サウス・ケンジントン商人組合メダル"],"사우스켄싱턴 역 앞 완구점":
["Toyshop by South Kensington Station","サウス・ケンジントン駅前の玩具店"],"상자를 수레에 다시 맞춰 본다":
["Fit the crate back onto the cart","箱を荷車に載せ直してみる"],"상품·생산량·판매가 설정":
["Setting products, quantities and prices","商品・生産数・販売価格の設定"],"선대는 승부에서 졌어.":
["My predecessor lost his match.","先代は勝負に負けた。"],"세바스찬의 대답을 듣는다":
["Hear Sebastian’s reply","セバスチャンの返事を聞く"],"소마가 준비한 수부터 받아 준다":
["Let Soma try the move he prepared","ソーマが用意した手を先に受ける"],"시엘 팬텀하이브 경에게.":
["To Lord Ciel Phantomhive.","シエル・ファントムハイヴ卿へ。"],"시엘과 팬텀하이브 저택":
["Ciel and Phantomhive Manor","シエルとファントムハイヴ邸"],"시엘이 판매 기록을 대조하게 한다":
["Have Ciel cross-check the sales records","シエルに販売記録を照合させる"],"식당까지 직접 동선을 살핀다":
["Walk the route to the dining room yourself","食堂まで自分で歩いて動線を確かめる"],"식탁과 장부를 함께 점검한다":
["Inspect both table and ledger","食卓と帳簿を併せて点検する"],"심사대에서 납품 장부로":
["From the Judging Table to the Delivery Ledger","審査台から納品台帳へ"],"아그니와의 집사 교류 기록":
["Butler's notes on meeting Agni","アグニとの執事交流記録"],"아무리 명문 백작가라지만…":
["An illustrious family of earls, to be sure, but even so…","いくら名門伯爵家とはいえ……。"],"아주 잘하셨습니다, 도련님!":
["Very well done, my lord!","大変よくできました、坊ちゃん！"],"아직 어떤 주인인지 살피고 있습니다.":
["Still getting to know Ciel as a master.","どんな主人なのか、まだ見極めている。"],"얼스 코트 이탈리아 박람회":
["Italian Exhibition at Earl's Court","アールズ・コートのイタリア博覧会"],"에서 가장 진전이 컸습니다.":
[" showed the greatest improvement.","が最も伸びました。"],"엘리자베스 미드포드":
["Elizabeth Midford","エリザベス・ミッドフォード"],"엘리자베스 호감도 ↑":
["Elizabeth's affection ↑","エリザベスの好感度 ↑"],"엘리자베스와 함께 찾는다":
["Look for it with Elizabeth","エリザベスと一緒に探す"],"연습한 곡에 돌아온 박수":
["Applause for a Well-Practised Piece","練習を重ねた曲への拍手"],"온실에 남은 서른두 칸":
["Thirty-Two Empty Panes","温室に残った三十二の空枠"],"왕궁으로 갈 마차는 물려.":
["Dismiss the carriage for the Palace.","宮殿へ行く馬車は返せ。"],"왕실에서 이번 심의를 유보했다.":
["The Crown has deferred its decision.","王室は今回の裁定を見送った。"],"요즘 팔리는 물건을 묻는다":
["Ask what’s selling these days","最近の売れ筋を尋ねる"],"원서의 인용부호를 확인한다":
["Check the quotation marks in the original","原書の引用符を確かめる"],"이건 누가 묻힌 거지?":
["Who left this on it?","誰がつけた？"],"이걸 누구한테 받으셨소?":
["Who gave you this?","これを、誰から？"],"이달의 교본은 이미 사용했습니다.":
["You've already used a manual this month.","今月はすでに教本を使いました。"],"이제야 표정이 풀리는군요.":
["Ah, you look more at ease at last.","ようやくお顔が和らぎましたね。"],"일정 편성 중에 구매할 수 있습니다.":
["You can buy this while planning your schedule.","日程の編成中に購入できます。"],"자, 작은 숟가락 여기 있습니다.":
["Here you go. A little spoon.","ほい、小さい匙ですぜ。"],"자선회 소장 원본을 베낀":
["copied from the charity’s original","慈善会所蔵の原本を書き写した"],"자유행동 · 병환으로 방문 취소":
["Free time · Visit cancelled due to illness","自由行動 · 病気のため訪問中止"],"잠깐. 한 번만 더 해 보고.”":
["Wait. Let me try just once more.","待て。もう一度だけやってみる"],"장부 여백에 본을 뜬다":
["Trace the seals in the ledger margin","帳簿の余白に印影を写し取る"],"저 어린 나이에 왜 훈장을?":
["A decoration? At his age?","あの年で、なぜ勲章を？"],"저택 관리 → 팬텀 사(社)":
["Estate Management → Funtom","屋敷管理 → ファントム社"],"저택의 시야를 맡긴다":
["Put her on watch over the estate","屋敷の見張りを任せる"],"점수와 별개로 남은 수량":
["A Delivery Total Still to Meet","点数とは別に残った数量要件"],"종이 울리기 전의 납품":
["A Delivery Before the Bell","鐘が鳴る前の配達"],"창가에서 햇빛을 쬔다":
["Sit in the sun by the window","窓辺で日を浴びる"],"첫 제보자에게 답장을 보냈다.":
["A reply was sent to the original informant.","最初の情報提供者に返事を送った。"],"최근 판매로 이번 달 소매 수요 −":
["Recent sales reduce this month's retail demand by ","直近の売上による今月の小売需要の減少数："],"친절하게 일러바치지 마!":
["Don’t be so helpful about giving us away!","ご親切に告げ口するな！"],"타나카 복귀 · 서재 근무":
["Tanaka returns · Assigned to the study","タナカ復帰・書斎勤務"],"타나카 복귀 · 신뢰 상승":
["Tanaka returns · Trust increases","タナカ復帰・信頼上昇"],"타나카에게 교육을 맡긴다":
["Leave the training to Tanaka","タナカに教育を任せる"],"팬텀하이브 백작 귀하.’":
["To the Earl of Phantomhive.”","ファントムハイヴ伯爵閣下」"],"팬텀하이브 백작 메이커":
["Earl Phantomhive Maker","ファントムハイヴ伯爵メーカー"],"팬텀하이브 저택 단면도":
["Cross-section of Phantomhive Manor","ファントムハイヴ邸の断面図"],"팬텀하이브 저택의 서재":
["The study at Phantomhive Manor","ファントムハイヴ邸の書斎"],"필요할 때마다 마차를 부른다":
["Hire a wagon as needed","必要なときだけ荷馬車を呼ぶ"],"하지만 제 방식은 스파르타입니다.":
["I should warn you, though. My methods are rather strict.","ただし、私のやり方はスパルタですよ。"],"한 푼도 어긋나지 않는다":
["down to the last penny","一ペニーも違わない"],"할게!! 맡겨만 줘!!":
["I'll do it! Leave it to me!","やるぞ！　俺に任せろ！"],"홍차와 케이크를 낸다":
["Serve tea and cake","紅茶とケーキを出す"],"(더 깎일 체면이 있을까요?)":
["(I wonder how much dignity there is left to lose.)","（これ以上、失うほどの面目がおありでしょうか？）"],"(맛 없을 것 같은 메뉴인데…….)":
["(That doesn't sound terribly appetising…)","（あまり食欲をそそらない献立だな……）"],"‘팬텀하이브 백작 귀하.’":
["“To the Earl of Phantomhive.”","「ファントムハイヴ伯爵閣下」"],"“잠깐. 한 번만 더 해 보고.”":
["“Wait. Let me try just once more.”","「待て。もう一度だけやってみる」"],"……거기부터 봤어야 했는데.":
["…That’s where I should have looked first.","……そっちから見るべきだったな。"],"……이걸 누구한테 받으셨소?":
["…Who gave you this?","……これを、誰から？"],"가문 증빙 확보 · 통찰 +5":
["Family records secured · Insight +5","家の記録を確保・洞察 +5"],"가족분들께 사람을 보내셔야겠습니다.":
["I think you should send for the family.","ご家族に使いをお出しになったほうがよろしいでしょう。"],"개수할 때마다 · 피로 보정 전":
["Per renovation, before fatigue","改修ごと・疲労補正前"],"검은까치밥 맛의 생산을 줄인다":
["Make fewer blackcurrant sweets","黒すぐり味の生産を減らす"],"견본에 가격표를 달아 본다":
["Try a price tag on the sample","見本に値札をつける"],"관리 · 경영’에서 ‘팬텀 사(":
["Estate & Company, then Funtom","屋敷・会社経営」から「ファントム社"],"그가 내게 바란 것은 세 가지였다.":
["He asked three things of me.","彼が私に求めたものは三つ。"],"그대와의 만남을 기대합니다.」":
["I look forward to meeting you.”","そなたに会えるのを楽しみにしています。」"],"그래. 오늘 들고 갈 건 따로 있어.":
["Yes. I’m taking something else today.","ああ。今日持っていくのは別のものだ。"],"그래서, 내일부터는 수업이 없나?”":
["So, no more lessons from tomorrow?","で、明日からはもう授業はないんだな？"],"그렇구나…… 정신이 하나도 없네.":
["Oh… my head’s all in a muddle.","そうか……頭がぼんやりしてる。"],"그리고 절대로 거짓말을 하지 않을 것.":
["And I was never to tell him a lie.","そして、決して嘘をつかないこと。"],"그림자를 따라 날짜를 베껴 쓴다":
["Trace the shadows to copy the date","影をなぞって日付を書き写す"],"그의 명령에 절대복종할 것.":
["I was to obey his every order.","彼の命令には絶対に従うこと。"],"기품 +6 · 가문 명성 상승":
["Refinement +6 · Family reputation increases","気品 +6・家の名声が上がる"],"남은 거리에 맞춰 걸음을 나눈다":
["Pace yourself for the distance left","残りの距離に合わせて歩調を整える"],"내 옷깃을 놓으면 대답하지.":
["Let go of my collar and I'll answer you.","僕の襟から手を放せ。そうしたら答えてやる。"],"누구보다 빨리 진짜가 되어야지.":
["We’ll have to become the real thing faster than anyone else.","誰よりも早く本物にならなくてはな。"],"다음 곡도 같은 속도로 청하겠습니다.":
["I shall ask for the next piece at the same tempo.","次の曲も同じ速さで弾いていただきましょう。"],"다음 달 계획에서 배치를 바꿀 수 있습니다.":
["You can change assignments when planning next month.","来月の予定を組むときに配置を変更できます。"],"다음 달 교육비와 생산비를 확인하세요.":
["Check next month’s tuition and production costs.","来月の授業料と生産費を確認してください。"],"도련님의 방은 제가 정리하겠습니다.":
["I shall see to the young master’s room.","坊ちゃんのお部屋は私が整えておきます。"],"도련님의 성함도 함께 불렸습니다.":
["They called your name as well, my lord.","坊ちゃんのお名前も一緒に呼ばれましたよ。"],"도련님이 고를 때까지 둔다":
["Leave it until he chooses","坊ちゃんが選ぶまでそのままにする"],"들었어. 같이 인사하고 올게.":
["I heard. I'll go and take my bow with the others.","聞こえた。一緒に挨拶してくる。"],"마구간에서 다른 마부를 부른다":
["Call another driver from the stables","厩から別の御者を呼ぶ"],"마차를 부를까요, 도련님?":
["Shall I send for the carriage, my lord?","馬車をお呼びしましょうか、坊ちゃん？"],"먼저 배치할 사용인을 선택해 주세요.":
["Select a staff member to assign first.","まず配置する使用人を選んでください。"],"메이린에게 길이를 맡긴다":
["Let Mey-Rin decide the length","長さはメイリンに任せる"],"방문을 마치고 마차로 돌아왔다.":
["The visit over, Ciel returned to the carriage.","訪問を終え、シエルは馬車に戻った。"],"새로 맞춘 지 얼마나 됐다고.":
["But I’ve only just had it made.","仕立ててから、まだいくらも経っていないぞ。"],"서둘러 알현복을 준비해야겠습니다.":
["I’d best have your court dress ready at once.","急いで謁見の礼服をご用意しなくては。"],"서로 발을 보면서 한 번 더 춘다":
["Dance again, watching each other’s feet","お互いの足元を見ながらもう一度踊る"],"서재 수업 · 기록 조사 · 라틴어":
["Library lessons · Archival research · Latin","書斎の授業・記録調査・ラテン語"],"선금 £32 · 가문 명성 상승":
["£32 advance · Family reputation increases","前金 £32・家の名声が上がる"],"셋째 마디부터 끝까지 이끈다":
["Lead from the third bar to the end","三小節目から最後まで合奏を導く"],"손님은 딱 한 분이셨습니다.":
["We had precisely one guest.","お客様は、ちょうどお一人でした。"],"수락 완료 · 월말 자동 납품":
["Accepted · Automatic delivery at month-end","受注済み · 月末に自動納品"],"수치가 이미 한도에 도달했습니다.":
[" is already at its limit.","はすでに上限に達しています。"],"수프를 찻잔에 담았네.":
["You’ve put the soup in a teacup.","ティーカップにスープを入れたのか。"],"시엘 팬텀하이브 경에게.」":
["To Lord Ciel Phantomhive.”","シエル・ファントムハイヴ卿へ。」"],"심사표도 함께 챙겨 둬.":
["Take the judging sheet as well.","審査表も一緒に持っておけ。"],"아직 마구간에 있습니다, 왕자님.":
["It's still in the stables, Your Highness.","まだ厩にございます、ソーマ様。"],"아첨하는 것도 집사다워졌군.":
["You’ve even learnt to flatter like a butler.","お世辞まで執事らしくなったな。"],"앞선 악구를 떠올려 잇는다":
["Recall the preceding phrase and play on","直前のフレーズを思い出して弾き継ぐ"],"얼마나 아름답고 어리석은가.":
["How beautiful. How foolish.","なんと美しく、愚かなことか。"],"엘리자베스 호감도 +3":
["Elizabeth's affection +3","エリザベスの好感度＋3"],"여덟 번째 판에서는 무엇을 바꿀까?":
["What should we change for the eighth game?","八局目は何を変えよう？"],"여섯 상자를 모두 무상으로 교환한다":
["Replace all six crates free of charge","六箱すべてを無償で交換する"],"열하나. ……제대로 셌네.":
["Eleven. …You counted correctly.","十一本。……ちゃんと数えたんだな。"],"영수증을 맞춰 손님을 찾는다":
["Match the receipts to find the customer","領収書を照合して該当する客を探す"],"우리 서커스의 단장 대리야.":
["He's our acting ringmaster.","うちのサーカスの団長代理よ。"],"이건 왜 따로 빼 놨어?":
["Why have you set these apart?","これはなぜ別にしてある？"],"이번 달에 집계된 시설 효과가 없습니다.":
["No facility effects recorded this month.","今月は設備による効果がありませんでした。"],"인증 품목 수요 매달 +2개":
["Monthly demand for the approved product +2 units","認定品の月間需要＋2個"],"자두인 병에서는 검은까치밥 향":
["The jar labelled ‘Plum’ smells of blackcurrant","「すもも」の瓶から黒すぐりの香り"],"잔을 들고 그 자리에서 마신다":
["Pick up the cup and drink it there and then","カップを取ってその場で飲む"],"잘 어울리십니다, 도련님.":
["It suits you very well, my lord.","よくお似合いですよ、坊ちゃん。"],"접는 방향을 달리해 봐.":
["Try folding them in different directions.","畳む向きを変えてみろ。"],"종이표를 떼어 한데 두었다":
["he took them off and laid them together","紙札を外して一緒に置いた"],"찻잔 옆에 레몬을 놓는다":
["Set a slice of lemon beside the cup","カップの脇にレモンを添える"],"첫 사건을 마치면 선택이 기록됩니다.":
["Your choice will be recorded once the first event concludes.","最初の出来事を終えると、選択が記録されます。"],"타나카에게 다음 권도 맡긴다":
["Entrust the next volume to Tanaka too","次の巻もタナカに任せる"],"푸른 카드 한 장을 내야 한다":
["must play one blue card","青い札を一枚出す決まり"],"피니안이 외우는 법을 듣는다":
["Hear how Finnian remembers the name","フィニアンに花の名の覚え方を聞く"],"하나에 종이로 D를 붙여 준다":
["Stick a paper D on one of them","片方に紙のDを貼る"],"하순에는 귀족 예법을 넣겠습니다.":
["I shall put you down for noble etiquette at the end of the month.","下旬には貴族の礼法を入れましょう。"],"학교 지붕의 수리비를 맡는다":
["Pay for the school roof repairs","学校の屋根の修理費を引き受ける"],"흙이 마른 화분부터 살핀다":
["Check the pots with dry soil first","土の乾いた鉢から見る"],"1886년 5월 4일 박람회 개막":
["4 May 1886 · Exhibition opens","1886年5月4日　博覧会開幕"],"1888년 5월 얼스 코트 박람회":
["May 1888 · Earl's Court Exhibition","1888年5月　アールズ・コート博覧会"],"B 하나에 종이로 D를 붙여 준다":
["Stick a paper D on one of the Bs","片方のBに紙で作ったDを貼る"],"「Kairosoft 사 스토리 시리즈」":
["Kairosoft's Story series","『カイロソフトの「ストーリー」シリーズ』"],"「그대와의 만남을 기대합니다.」":
["“I look forward to meeting you.”","「そなたに会えるのを楽しみにしています。」"],"「시엘 팬텀하이브 경에게.」":
["“To Lord Ciel Phantomhive.”","「シエル・ファントムハイヴ卿へ。」"],"가격표를 아래로 내려 반응을 본다":
["Lower the price tag and watch for a reaction","値札の位置を下げて反応を見る"],"견본 옆에 남겨 둔 장부":
["The Ledger Beside the Sample","見本の隣に残した台帳"],"결석 · 요양으로 대체 · 예약 비용":
["Absent · Rest instead · Booking fee","欠席・療養に変更・予約費用"],"고마워! 다음에도 같이 연주하자.":
["Thank you! Let's play together again next time.","ありがとう！　次も一緒に弾きましょうね。"],"고마워. 차가 식기 전에 마셔.":
["Thank you. Drink up before your tea goes cold.","ありがとう。茶が冷めないうちに飲んでくれ。"],"고맙다. 다음에도 같이 겨뤄 보자.":
["Thank you. Let's compete again next time.","ありがとう。また一緒に競おう。"],"교본 전체 중 매월 1권 · 즉시 사용":
["One manual per month across all titles · Used immediately","全教本のうち月1冊まで · 購入時に使用"],"귀족 예법 · 무도 · 사교 수업":
["Noble etiquette, dance and social etiquette","貴族の礼法・ダンス・社交の授業"],"그 손님이 머물던 자리를 돌아본다":
["Revisit the spot where that guest lingered","その客が長くいた場所を見に行く"],"그래. 그러니 네 이름은 피니안이다.":
["Yes. So your name will be Finnian.","そうだ。だから、お前の名前はフィニアンだ。"],"그럼 오늘의 인사도 함께 해야겠군.":
["Then we'd best make our bows together today.","それなら、今日の挨拶も二人一緒だな。"],"기존 슬롯의 저장 내용을 교체합니다.":
["This will replace the existing save in this slot.","このスロットのセーブデータを上書きします。"],"난 손수건 무늬인 줄 알았지.":
["I thought it was the pattern on the handkerchief.","僕はてっきりハンカチの柄かと思った。"],"너는 나의 검이 되고 방패가 되어…":
["Be my sword and my shield…","お前は僕の剣となり、盾となり……。"],"너는 커다란 희생을 치렀다.":
["You have made a great sacrifice.","お前は大きな犠牲を払った。"],"너한테 이름을 하나 지어 주겠어.":
["I'm going to give you a name.","お前に名前をつけてやる。"],"네 자리는 비워 뒀어. 들어와.":
["I kept your place for you. Come in.","お前の場所は空けておいた。入れ。"],"누가 저 녀석의 입을 막아!":
["Someone shut that boy up!","誰かそいつを黙らせろ！"],"다음 것도 내놔. 아직 시간이 남았잖아.”":
["Give me the next one. We’ve still got time.","次も出せ。まだ時間はあるだろう"],"다음 산책 때 볼 가지를 골라 둔다":
["Pick a branch to check on the next walk","次の散歩で見る枝を選ぶ"],"다음번에는 표 값을 두 배로 정한다":
["Double the ticket price next time","次回は切符代を倍にする"],"단계마다 개당 원가 최대 £1 절감":
["Each level cuts unit cost by up to £1","増設のたびに1個あたりの原価が最大£1下がる"],"답장을 대조해 정정본을 쓴다":
["Check the reply and write a corrected copy","返書と照らし合わせ、訂正版を書く"],"더 가까이에서 보면 좋았을 텐데.":
["I wish you could have watched from a little closer.","もっと近くで見られたらよかったのにね。"],"도련님 얼굴에 피로가 짙습니다.":
["You look quite worn out, my lord.","お顔にお疲れが出ておりますよ、坊ちゃん。"],"도련님, 오늘 일정을 준비해 두었습니다.":
["I’ve drawn up today’s schedule, my lord.","坊ちゃん、本日のご予定を整えておきました。"],"두 사람에게 런던 집을 맡긴다":
["Leave the London house in their care","ロンドンの屋敷を二人に任せる"],"둘만의 차 취향 기록 · 의욕 +6":
["A tea preference known only to the two of you is recorded · Motivation +6","二人だけが知る紅茶の好みを記録・意欲 +6"],"둘이 나눈 짧은 농담을 적는다":
["Write down the little joke you shared","二人で交わしたちょっとした冗談を書く"],"둘이 앉아서 해가 지는 걸 본다":
["Watch the sun go down together","二人で腰掛けて日が沈むのを眺める"],"런던의 사업가로 자리 잡았습니다.":
["Ciel has established himself as a businessman in London.","シエルはロンドンの実業家として身を立てました。"],"리본에 묻은 흙을 살핀다":
["Examine the soil on the ribbon","リボンについた土を調べる"],"만년필로 그린 붉은 하나마루":
["A red flower of approval drawn with a fountain pen","万年筆で描いた赤い花丸"],"말뚝에 리본을 옮겨 묶는다":
["Retie the ribbon on the stake","リボンを支柱に結び直す"],"메이드? 잠깐. 올빼미가……?":
["A maid? Wait. The Owl is…?","メイドだと？　待て、あの梟は……？"],"물론이지. 우유도 곁들이겠나?":
["Of course. Would you like milk with it?","もちろんだ。ミルクも添えようか？"],"미결 전표 한 장은 내일까지 두겠습니다.":
["I shall leave the outstanding voucher until tomorrow.","未処理の伝票が一枚ございます。そちらは明日まで取っておきましょう。"],"바퀴 자국을 따라 사고 순서를 짚는다":
["Follow the wheel tracks to reconstruct the accident","車輪の跡をたどり、事故の経過を確かめる"],"박자를 짚으며 합주할 곳을 찾는다":
["Count the beats to find where to rejoin","拍を取りながら合奏に戻る箇所を探す"],"배치하면 시설 관리 수치가 오릅니다.":
["Assigning staff increases the facility's upkeep rating.","使用人を配置すると施設の管理値が上がります。"],"보폭을 줄여 일정한 속도로 완주한다":
["Shorten your stride and finish at a steady pace","歩幅を縮め、一定の速さで走り切る"],"봉하기 전에 날짜만 다시 적으시면 됩니다.":
["Only the date needs correcting before you seal it.","封をなさる前に、日付だけお書き直しください。"],"분수대까지 내쉬는 숨을 맞춘다":
["Breathe out in time with your steps until you reach the fountain","噴水までは歩調に合わせて息を吐く"],"서명이 한 장 남았습니다. 이쪽입니다.":
["One more page needs your signature. Here it is.","あと一枚、ご署名が必要です。こちらでございます。"],"설마 마차 삯은 아닐 테고.":
["Surely not the carriage fare.","まさか、馬車代じゃないだろうな。"],"시엘에게 보낼 런던 소식 정리":
["Gather news from London to send to Ciel","シエルに書き送るロンドンの近況をまとめる"],"시엘의 손 크기로 홈을 다시 그린다":
["Redraw the notch to fit Ciel’s hand","シエルの手に合わせて切り欠きを描き直す"],"시엘이 반대쪽 손도 내민다.":
["Ciel holds out his other hand.","シエルはもう片方の手も差し出す。"],"어디서 온 서신인지 보시겠습니까?":
["Would you like to see who it’s from?","差出人をお確かめになりますか？"],"어려울 때 시엘을 믿고 의지합니다.":
["Turns to Ciel when times are hard.","困った時はシエルを信じ、頼りにしている。"],"여기까진 알겠어. 그다음은?”":
["I follow so far. What comes next?","ここまではわかった。次は？"],"왕실 평가 상승 · 가문 명성 상승":
["Royal standing improves · Family reputation increases","王室の評価が上がる・家の名声が上がる"],"왕실 평가 상승 · 가문 증빙 확보":
["Royal standing improves · Family records secured","王室の評価が上がる・家の記録を確保"],"원본을 맡기고 사본을 부탁한다":
["Leave the original with Tanaka and ask for a copy","原本を預け、写しを頼む"],"원작과 다른 IF 세계관을 다룹니다.":
["An alternate story set in the world of Black Butler.","原作とは異なる、もしもの物語です。"],"이 시계를 제게 주시는 겁니까?":
["You wish me to have this watch?","この時計を、私に？"],"이대로 돌면 네 발을 밟겠어.":
["If I turn now, I’ll tread on your foot.","このまま回ったら、お前の足を踏むぞ。"],"이번 달 능력에는 큰 변동이 없었습니다.":
["There was no substantial change in your abilities this month.","今月は、坊ちゃんの腕前に目立った変化はございませんでした。"],"이제 당신은 정식으로 백작이 되었습니다.":
["You’re an earl in your own right now.","これであなたは、名実ともに伯爵です。"],"이제 시엘 곁을 편하게 여깁니다.":
["Now feels at ease in Ciel’s company.","今ではシエルのそばでくつろいでいる。"],"이제 이 탭을 닫으셔도 됩니다.":
["You can now close this tab.","このタブはもう閉じても構いません。"],"입금일 순으로 지급 계획을 짠다":
["Plan payments around the dates money is due in","入金日順に支払いの予定を組む"],"저 애가…… 팬텀하이브 백작?":
["That boy is… Earl Phantomhive?","あの子が……ファントムハイヴ伯爵？"],"저택 응접실을 수업에 내준다":
["Lend the manor’s drawing room for lessons","屋敷の応接間を授業に貸す"],"종, 저택에 합류한 고용인은":
[" products, and the household gained ","種類、屋敷に加わった使用人は"],"종이가 왜 저렇게 긴지를 묻잖아!":
["I’m asking why it’s so long!","どうしてそんなに長いのかと聞いてるんだ！"],"좋습니다. 그러면 서로의 몸에 계약서를.":
["Very well. Let us inscribe the contract on our bodies.","よろしい。では、互いの身体に契約の印を。"],"지금은 그 자리가 두 번째로 따뜻해.":
["Right now that’s the second-warmest spot.","今はそこが二番目に暖かいぞ。"],"차가 식기 전에 마저 마시겠어.":
["I’ll finish my tea before it goes cold.","冷めないうちに紅茶を飲んでしまおう。"],"차기 심의는 언제라고 적혀 있지?":
["What date do they give for the next review?","次の審議はいつと書いてある？"],"창가에서 안대에 손을 올리는 시엘":
["Ciel touching his eyepatch by the window","窓辺で眼帯に手を添えるシエル"],"체중이 옮겨질 때까지 기다린다":
["Wait for your partner’s weight to shift","相手の重心が移るのを待つ"],"축하해, 리지. 잘 들었어.":
["Congratulations, Lizzy. I enjoyed that.","おめでとう、リジー。いい演奏だった。"],"출품 전 누적 판매·납품 18개 이상":
["Sell or deliver at least 18 units in total before entering.","出品前に小売・納品合わせて18個以上の実績が必要です。"],"파트너에게 다음 박을 짚어 준다":
["Cue your partner for the next beat","相手に次の拍を知らせる"],"하아…?! 지금 그런 말이나 할 때야?":
["What…?! Is this really the time?","はあ……⁉　今そんなことを言っている場合か？"],"한 그릇 덜어서 덮어 둬.":
["Set aside a bowl and cover it.","一杯よそって蓋をしておけ。"],"화이트채플에서 답신이 왔습니다.":
["A reply has arrived from Whitechapel.","ホワイトチャペルから返書が届いております。"],"활이 걸린 두 음을 따로 켠다":
["Play the two notes that caught the bow separately","弓が引っかかった二音を一つずつ弾く"],"······뭐가 웃기지?":
["…What’s so funny?","……何がおかしい？"],"“그래서, 내일부터는 수업이 없나?”":
["“So, no more lessons from tomorrow?”","「で、明日からはもう授業はないんだな？」"],"……가족분들께 사람을 보내셔야겠습니다.":
["…I think you should send for the family.","……ご家族に使いをお出しになったほうがよろしいでしょう。"],"…차기 심의는 언제라고 적혀 있지?":
["…What date do they give for the next review?","……次の審議はいつと書いてある？"],"가문 증빙 확보 · 가문 명성 상승":
["Family records secured · Family reputation increases","家の記録を確保・家の名声が上がる"],"같은 필체라는 데까지는 저도 동의합니다.":
["I agree with you this far: the handwriting is the same.","同じ筆跡だというところまでは、私も同意いたします。"],"경영 +6 · 다음 달 가문 명성 상승":
["Management +6 · Family reputation increases next month","経営 +6・翌月、家の名声が上がる"],"계약인을 드러내고 명령을 내리는 시엘":
["Ciel revealing the contract seal as he gives his order","契約印をあらわにして命令を下すシエル"],"궁정에서 작위 이야기가 오가는 모양이다.":
["There is talk of the title at court.","宮廷で爵位の話が出ているらしい。"],"귀 속의 솜을 더 단단히 채운다":
["Pack the stuffing more firmly into the ears","耳の綿をもっと固く詰める"],"그 양반은 장난감 장사가 아닙니다.":
["That gentleman doesn’t sell toys.","あの方は玩具屋じゃありませんよ。"],"그건 다음 심사 때 들을 말이겠지.":
["Save that for the next time the judges give their marks.","その言葉は、次の審査の時に聞くとしよう。"],"그때도 같이 나오겠다는 뜻으로 들어 둘게.":
["I'll take that to mean you'll enter with me again.","次も一緒に出るということだな。"],"그럼 나도 다음 곡을 준비해야겠군.":
["Then I'd better start preparing my next piece too.","それなら僕も、次の曲を準備しておかないとな。"],"그럼 우리는 모자걸이에 있어도 돼?":
["Does that mean we can stay on the hatstand?","じゃあ、僕たちは帽子掛けにいてもいい？"],"그분은 아직 소개를 받지 못하셨습니다.":
["You haven’t yet been introduced to that guest.","あの方とは、まだご紹介が済んでおりません。"],"끝에 가서 뛰면 금방인 거리인데.":
["A sprint at the end and I’d cover that in no time.","最後に走れば、すぐ着く距離なのに。"],"누구에게도 지지 않을 힘을 갖고 싶어!!":
["I want the power never to lose to anyone!","誰にも負けない力が欲しいんだ！"],"눅눅해진 한 통은 어떻게 처리할까?":
["What should be done about the tin of soft biscuits?","湿気てしまった一缶をどうする？"],"다시 닫아 선물해도 되는지 시험한다":
["Test whether the box can be closed again and given as a gift","箱を閉じ直して贈り物にできるか試す"],"다음 납품부터 양쪽에 사본을 보내.":
["Send copies to both parties, starting with the next delivery.","次の納品から、双方に写しを送れ。"],"다음 생산분 세 벌을 창고에 더 보낸다":
["Send three extra sets from the next batch to the stockroom","次の生産分から三組余分に倉庫へ送る"],"당신은 이제 시엘에게 가족이나 다름없어.":
["You’re as good as family to Ciel now.","あなた、もうシエルにとっては家族も同然よ。"],"도련님, 다음 장을 넘겨 드릴까요?":
["Shall I turn the page, my lord?","坊ちゃん、ページをめくりましょうか？"],"도련님께서 다음 달에 쓰실 수 있는 돈은":
["At your disposal next month","来月、坊ちゃんがお使いになれる資金は"],"도련님께서 안정을 취하실 시간을 마련했습니다.":
["I’ve kept some time free for you to rest, my lord.","坊ちゃんにゆっくりお休みいただける時間を設けました。"],"도련님의 기침이 다시 잦아졌습니다.":
["The young master’s cough has grown more frequent again.","坊ちゃんはまた、咳き込まれることが増えました。"],"두 병을 섞어 모둠 사탕으로 판다":
["Mix the sweets from both jars and sell them as an assortment","二つの瓶の飴を混ぜ、詰め合わせにして売る"],"로열 워런트 · 왕실 납품 심사":
["Royal Warrant · Suppliers' Inspection","王室御用達認定審査"],"를 넘겨 남는 순이익에 단계 적용":
[" in available funds; the levy applies in bands to the remaining net profit","を超えた分の純利益に段階制で適用"],"마지막 상자를 놓을 자리를 식탁에 더 마련한다":
["Lay another place at the table for the last box","最後の箱のために食卓にもう一席設ける"],"먼저 오신 분의 성함부터 부르시면 됩니다.":
["Begin with the name of the guest who arrived first.","先にお越しになった方のお名前からお呼びください。"],"박자는 맞습니다. 활 끝까지 쓰셔도 됩니다.":
["Your rhythm is right. Feel free to use the bow right to the tip.","拍は合っております。弓先までお使いになって結構です。"],"병중에는 개인 경연에 출전할 수 없습니다.":
["Ciel cannot enter individual competitions while ill.","病気の間は個人競技に出場できません。"],"빈 박을 받아 기억한 선율을 잇는다":
["Come in on the open beat and continue the melody from memory","空いた拍で入り、覚えている旋律を続ける"],"사람 죽이던 손으로 메이드 일을 어떻게 하라고.":
["I've killed people with these hands. How am I supposed to be a maid?","人を殺してきたこの手で、どうやってメイドをやれっていうのさ。"],"서로 서명할 수 있는 데까지는 왔습니다.":
["We have at least reached terms both parties can sign.","双方が署名できるところまでは、こぎつけましたね。"],"설탕은 하나. 그래, 오늘도 그걸로.":
["One lump. Yes, the usual.","砂糖は一つ。ああ、今日もそれでいい。"],"손님들이 봉인을 먼저 뜯었다고 답장한다":
["Write back saying the customers broke the seals first","客が先に封を切ったのだと返事を出す"],"손님방에 따뜻한 물이 준비되어 있다.":
["Warm water is ready in the guest room.","客間には温かい湯が用意されている。"],"수집한 엔딩 {found} / {total}":
["Endings collected: {found} / {total}","収集したエンディング {found} / {total}"],"스네이크가 돌아와 풋맨으로 일한다.":
["Snake returned to serve as a footman.","スネークが戻り、フットマンとして働くことになった。"],"시엘이 마차 안에서 창을 두드렸다.":
["Ciel tapped on the carriage window from inside.","馬車の中からシエルが窓を叩いた。"],"알겠어. 참가표는 보관해 둬.":
["Understood. Keep the entry ticket.","分かった。参加票は取っておけ。"],"어서 와요, 팬텀하이브 백작.":
["Welcome, Earl Phantomhive.","ようこそ、ファントムハイヴ伯爵。"],"여왕의 골든 주빌리 · 기념품 경연":
["The Queen’s Golden Jubilee · Souvenir Competition","女王陛下の即位五十周年・記念品品評会"],"예. 다음번에는 더 빨리 다녀오겠습니다.":
["Yes, my lord. I shall be back sooner next time.","はい、坊ちゃん。次はもっと早く戻ってまいります。"],"오늘 번역에는 제가 고칠 곳이 없군요.":
["I can find nothing to correct in today’s translation.","今日の訳には、私が手を入れる箇所がございませんね。"],"온실의 첫 꽃을 함께 보자고 쓴다":
["Write an invitation to see the greenhouse’s first bloom together","温室で最初に咲く花を一緒に見ようと書く"],"왕실에 가문의 활동 내역을 제출합니다.":
["Submit an account of the family’s activities to the Crown.","一族の活動をまとめて王室に提出する。"],"우리를 이렇게 만든 놈들에게 복수할 힘을!":
["The power to take revenge on the people who did this to us!","僕たちをこんな目に遭わせた奴らに復讐する力が！"],"원본과 답신을 한 봉투에 넣어.":
["Put the original and the reply in one envelope.","原本と返事を一つの封筒に入れろ。"],"전표를 어디서 가져왔는지 묻는다":
["Ask where the voucher came from","伝票をどこから持ってきたのか尋ねる"],"접객과 팬텀사 판매로 명성 쌓기":
["Build your reputation by entertaining guests and selling Funtom goods","接客とファントム社の販売で名声を高める"],"집사 교류 기록 · 소마의 신뢰 상승":
["Butler’s journal · Soma’s trust grew","執事の交流記録・ソーマの信頼が上がった"],"창으로 빛이 드는 회랑에 선 두 사람":
["Two figures in a sunlit gallery","窓から光が差す回廊に立つ二人"],"창이 언제 그늘지는지 근무표에 적는다":
["Note on the duty roster when the window falls into shade","窓辺が陰る時刻を当番表に書く"],"첫 월간 결산 후 판매 내역이 기록됩니다.":
["Sales will appear here once the first month’s accounts are closed.","最初の月次決算のあと、販売明細が記録されます。"],"춤 수첩의 빈 곡을 찾아본다":
["Look for a free dance on the dance card","ダンスカードで空いている曲を探す"],"컨디션 회복 · 다음 순부터 일정에 복귀":
["Condition restored · Return to schedule next period","体調回復 · 次の旬から日程に復帰"],"팬텀사의 이름이 불렸습니다, 도련님.":
["They’ve called Funtom’s name, my lord.","坊ちゃん、ファントム社の名が呼ばれましたよ。"],"평평한 바닥에서 축 높이를 잰다":
["Measure the axle heights on level ground","平らな床で車軸の高さを測る"],"현재 진행을 선택한 저장 상태로 바꿉니다.":
["Replace your current progress with the selected save.","現在の進行状況を選んだセーブデータに切り替えます。"],"화분 번호를 장부에도 적어 두지.":
["Let’s put the pot numbers in the ledger too.","鉢の番号を帳面にも控えておこう。"],"“다음 것도 내놔. 아직 시간이 남았잖아.”":
["“Give me the next one. We’ve still got time.”","「次も出せ。まだ時間はあるだろう」"],"“여기까진 알겠어. 그다음은?”":
["“I follow so far. What comes next?”","「ここまではわかった。次は？」"],"『흑집사』 비공식 2차 창작 팬게임":
["An unofficial Black Butler fan game","『黒執事』非公式二次創作ゲーム"],"가격은 정했습니다. 납기는 아직 빈칸입니다.":
["The price is settled. The delivery date is still blank.","値は決まりました。納期の欄はまだ空いております。"],"가장자리가 조금 깨진 건 내가 먹어 뒀다고.":
["I ate the ones with chipped edges myself.","端が少し欠けたのは、私が食べておいたよ。"],"같은 날 구운 비스킷을 전부 거둬들인다":
["Recall all the biscuits baked that day","同じ日に焼いたビスケットをすべて回収する"],"검수인에게 열두 번째 상자를 물어내라고 한다":
["Charge the receiving clerk for the twelfth box","検品係に十二個目の箱を弁償させる"],"경리 담당에게 두 장을 맞춰 보라고 해.":
["Have the accounts clerk compare the two copies.","経理係に二枚を照合させろ。"],"고삐는 좋습니다. 어깨만 조금 내리십시오.":
["You’re holding the reins well. Just lower your shoulders a little.","手綱の持ち方は結構です。肩をもう少しだけお下げください。"],"공장 견본은 세워도 두 귀가 선다":
["Stand the factory sample up and both ears stand straight","工場の見本は立たせても両耳が立つ"],"교육 반복 또는 스트레스로 일정 조정이 필요합니다.":
["Repeated lessons or mounting stress have made it necessary to review the schedule.","同じ授業の繰り返しやストレスのため、日程の見直しが必要です。"],"그 어미라면 초대한 사람이 도련님이 됩니다.":
["With that ending, young master, it is you who issued the invitation.","その語尾ですと、お招きになったのは坊ちゃんの方です。"],"그 잔은 아까 인사를 나눈 분의 것입니다.":
["That cup belongs to the guest you greeted earlier.","そのカップは、先ほどご挨拶なさった方のものでございます。"],"그 책에 저처럼 머리 노란 사람이 나와요?":
["There's someone in that book with yellow hair like mine?","その本に、僕みたいに髪の毛が黄色い人が出てくるんですか？"],"그때는 그것이 무슨 말인지 알 수 없었다.":
["At the time, he didn't understand the question.","その時は、何を聞かれたのかわからなかった。"],"그럼 남은 걸 가게에서 팔았어야지!":
["Then you should have sold the rest in the shop!","だったら残りは店で売ればよかっただろう！"],"그분께선 지금 꼭꼭 숨어 계신데요.":
["That gentleman is taking great care to stay out of sight.","その方は今、すっかり身を隠しておいでですが。"],"남색 예복을 입은 시엘 팬텀하이브":
["Ciel Phantomhive in navy evening dress","紺の礼服をまとったシエル・ファントムハイヴ"],"내일 아침엔 대체 어디서 눈을 떠야 하지?":
["Where exactly am I meant to wake up tomorrow morning?","明日の朝、僕はいったいどこで目を覚ませばいいんだ？"],"내일 아침은 본저택에서 먹어야겠어.":
["I’ll have breakfast at the manor tomorrow.","明日の朝食は本邸で取るとしよう。"],"네가 조금 앞섰군. 축하해, 리지.":
["You just edged ahead of me. Congratulations, Lizzy.","わずかにお前が上だったな。おめでとう、リジー。"],"다음 기차가 오기 전에 두 병을 어떻게 할까?":
["What should we do with the two jars before the next train arrives?","次の列車が来るまでに二つの瓶をどうする？"],"다음에는 오늘처럼 먼저 이름을 불러 보시지요.":
["Next time, try addressing them by name first, just as you did today.","次も今日のように、先にお名前を呼んでさしあげてください。"],"도련님 전용 잔으로 찜해 두겠습니다.":
["I’ll set it aside as your very own cup, young master.","坊ちゃん専用のカップに取っておきますね。"],"도련님. 제 손을 잡으시겠습니까?":
["My lord, would you take my hand?","坊ちゃん。私の手をお取りになりますか？"],"도련님을 위해 써보지 않겠습니까?":
["Would you care to put it to use for my young master?","その力を、坊ちゃんのために役立ててみませんか？"],"두 차축을 바꿔 끼워 원인을 가린다":
["Swap the axles to isolate the cause","二台の車軸を入れ替えて原因を突き止める"],"마지막 바퀴에는 제가 고삐를 잡을 일이 없었습니다.":
["On the final circuit, I had no occasion to take the reins.","最後の一周では、私が手綱を取る場面はございませんでした。"],"맡아 둔 상자가 아직 계단을 막고 있다":
["The box we took in before the upstairs shop opened is still blocking the stairs","預かった箱が、まだ階段をふさいでいます"],"먼저 상순에 서재 수업을 적어 보겠습니다.":
["First, let us schedule a lesson in the library for the beginning of the month.","まず、上旬の予定に書斎での授業を入れてみましょう。"],"물건을 받은 창고지기에게 책임을 묻는다":
["Hold the warehouse keeper who received the toy responsible","玩具を受け取った倉庫番の責任を問う"],"바르도가 맛볼 몫을 덜어 두었다.":
["Baldo set aside a little for Ciel to taste.","バルドが味見の分を取り分けた。"],"방금 건 내 방식대로 했어. 그래도 맞지?”":
["I did that one my own way. It’s still right, isn’t it?","今のは僕のやり方でやった。それでも合ってるだろう？"],"배우셔야 할 것이 산더미처럼 쌓여 있습니다.":
["You have a great deal to learn.","お学びいただくことは山ほどございます。"],"벤치가 놓인 자리를 정원도에 표시한다":
["Mark the bench on the garden plan","庭の見取り図にベンチの位置を記す"],"보고만 있지 말고, 처음 것부터 다시 줘.”":
["Don’t just stand there watching. Give me the first one again.","見ていないで、最初のものからもう一度出せ"],"복수가 끝나는 날, 그 영혼은 내 것이 된다.":
["On the day his revenge is complete, his soul will be mine.","復讐が終わる日、その魂は私のものとなる。"],"봉랍을 떼고 원본을 함께 펼친다":
["Break the seal and open the original together","封蝋をはがし、二人で原本を開く"],"비가 오기 전에 지붕 수선이 끝나겠습니다.":
["The roof repairs should be finished before the rain comes.","雨が降る前に、屋根の修繕が済みそうですね。"],"사건을 통해 영입한 사용인이 이곳에 표시됩니다.":
["Staff recruited through events appear here.","出来事を通じて加入した使用人がここに表示されます。"],"사내의 손이 시엘의 깃에서 떨어졌다.":
["The man's hand fell from Ciel's collar.","男の手がシエルの襟から離れた。"],"상장을 잘 챙겨 둬, 세바스찬.":
["Keep the certificate safe, Sebastian.","賞状は大事に取っておけ、セバスチャン。"],"서명과 환불 자국을 나란히 보여 준다":
["Show him the signature alongside the refund mark","署名と返金済みの穴を並べて見せる"],"서재와 응접실, 주방을 개수하세요.":
["Renovate the study, drawing room and kitchen.","書斎、応接室、厨房を改修しましょう。"],"성함은 뭘로 적습니까? 손님 앞으로?":
["What name shall I put on it, sir? Yours?","宛名はどうしましょう？　お客さんのお名前で？"],"세바스찬이 시엘의 의자를 당겼다.":
["Sebastian drew back Ciel’s chair.","セバスチャンがシエルの椅子を引いた。"],"손님 앞에 어떤 기록을 펼쳐 놓을까?":
["Which records should Ciel lay before the customer?","客の前にどの記録を広げようか？"],"시엘, 오늘은 내가 먼저 손 내밀어도 되지?":
["Ciel, may I offer you my hand first today?","シエル、今日は私から手を差し出してもいい？"],"시엘은 아직 병상에서 일어나지 못하고 있습니다.":
["Ciel is still too ill to get out of bed.","シエルはまだ病床を離れられずにいます。"],"시엘한테 한 번 더 놀러 오라고 할걸.":
["I wish I’d asked Ciel to come and play again.","シエルに、また遊びに来てって言えばよかった。"],"아래층 보관분을 위층 주인에게 인계한다":
["Take the box from downstairs and hand it to the upstairs proprietor","階下で預かった箱を二階の店主に手渡す"],"알아. 그 자가 묵고 있다는 여관 말이지.":
["I know. The inn where that man is staying.","分かってる。あいつが泊まってる宿だろう。"],"어서 와, 할아범. 거기 앉아.":
["Welcome back, old man. Take a seat.","おかえり、じいや。そこに掛けてくれ。"],"엘리자베스의 부활절 달걀 찾기":
["Elizabeth’s Easter Egg Hunt","エリザベスのイースターエッグ探し"],"여긴 끝났어. 기록부터 전부 불태워!":
["We're through here. Burn every last record first!","ここはもうおしまいだ。まず記録をすべて焼き払え！"],"옆 가게의 비 오는 날 진열도 살핀다":
["See how the shop next door displays its wares in the rain","隣の店が雨の日にどう商品を並べているかも見る"],"예. 제작실에서 함께 보실 수 있도록 준비하겠습니다.":
["Certainly. I shall have them ready to view together in the workshop.","かしこまりました。製作室で併せてご覧いただけるよう、整えておきます。"],"오래 살면서 허송세월한 건 아닙니다.":
["I haven’t spent my long life entirely idle.","長い年月を、ただ無為に過ごしてきたわけではございません。"],"오른쪽 귀도 접어 한 쌍으로 맞춘다":
["Fold the right ear to match the left","右耳も折って左右を揃える"],"온실의 유리에 물방울이 맺혔다.":
["Beads of water cling to the greenhouse glass.","温室のガラスに水滴がついている。"],"원문에 없는 농담까지 알아들으셨군요.":
["You even caught a joke that wasn’t in the original text.","原文にはない冗談までお分かりになったのですね。"],"원본 옆에 사본을 나란히 꽂는다":
["Shelve the copy beside the original","原本の隣に写しを差しておく"],"원장에 없는 영수증부터 골라내셨습니다.":
["You picked out the receipts missing from the ledger first.","元帳に載っていない領収書から選び出されましたね。"],"이 봉투에는 다른 댁의 문장이 찍혔습니다.":
["This envelope bears another family’s crest.","そちらの封筒には、よそのお家の紋章が押してございます。"],"이 장에는 도련님의 서명 하나면 족합니다.":
["Your signature alone will do on this page, my lord.","この頁には、坊ちゃんのご署名一つで結構です。"],"이런 때까지 서서 내려다볼 셈이냐?":
["Are you going to stand there looking down at me even now?","こんな時まで立ったまま僕を見下ろすつもりか？"],"이럴 때까지 서서 하게 할 셈이냐?":
["Do you mean to make me do even this standing up?","こんな時まで立ったまま言わせるつもりか？"],"이름 하나에 기니 하나. 외상은 안 받소.":
["A guinea a name. No credit.","名前一つに一ギニー。ツケはお断りだ。"],"입구 직원에게 모자라는 표 값을 청구한다":
["Charge the doorkeeper for the missing ticket money","入口係に足りない切符代を請求する"],"작은 몸에 웬 욕심이 그리 많을까.":
["Such ambition in such a small body.","小さな身体で、ずいぶん欲張りですね。"],"잠깐, 너희가 봤다는 건 어디부터지?":
["Wait. At what point did you start watching?","待て。お前たち、いったいどこから見ていた？"],"정말, 그런 이유라니…. 어쩔 수 없군요.":
["Goodness. So that was your reason… Very well.","まったく、そのような理由で……。仕方がありませんね。"],"제가 언제 봉급을 돈으로 받은 적이 있었습니까?":
["When have I ever taken my wages in coin?","これまで私が、お給金をお金で頂戴したことがございましたか？"],"좋아. 다음에는 더 제대로 겨뤄 보자, 시엘.":
["Good. Next time let’s have a proper match, Ciel.","よし。次はもっとじっくり勝負しよう、シエル。"],"주방 요청서에 정원사의 이름이 적혀 있습니다.":
["The kitchen’s request bears the gardener’s name.","厨房からの依頼書に、庭師の名前がございます。"],"진행 중인 일정과 결산을 먼저 마쳐 주세요.":
["Finish the current schedule and settle the accounts first.","まず進行中の日程と決算を終えてください。"],"창문에 한 벌, 판매대 양 끝에 한 벌씩":
["One set in the window, one at each end of the sales counter","窓に一組、売り台の両端に一組ずつ"],"첫 근무를 마치면 여기에 결과가 기록됩니다.":
["Results will appear here once the first shift is complete.","最初の勤務を終えると、ここに結果が記録されます。"],"첫 차례인 사람에게만 성문을 열어 준다":
["Open the gate only for the first player","先手だけ城門を通す"],"축하드립니다. 이번에는 팬텀사가 선정됐군요.":
["Congratulations. Funtom has been selected this time.","おめでとうございます。今回はファントム社が選ばれましたね。"],"축하한다, 시엘. 다음에는 내 차례야.":
["Congratulations, Ciel. Next time it’ll be my turn.","おめでとう、シエル。次は僕の番だ。"],"축하해, 시엘. 다음에는 내가 받을 거야!":
["Congratulations, Ciel. Next time it'll be mine!","おめでとう、シエル。次は私がもらうわ！"],"편지부터 좀 보지. 그런데 조커가 누구지?":
["Let me see the letter first. Who's Joker, by the way?","まず手紙を見せてくれ。ところで、ジョーカーとは誰だ？"],"하나는 박람회가 끝난 뒤에 오잖아.":
["One of these wouldn’t arrive until after the fair.","片方は博覧会が終わってから届くじゃないか。"],"합계에 같은 영수증이 두 번 들어갔습니다.":
["The same receipt has been counted twice in the total.","同じ領収書が二度、合計に入っております。"],"호텔 주인은 마지막 상자를 어디서 찾아야 할까?":
["Where should the hotelier look for the last box?","ホテルの主人は最後の箱をどこで探すべきか？"],"화단에 쪼그려 앉아 꽃을 본다":
["Crouch by the flower bed for a closer look","花壇にしゃがんで花を見る"],"회전은 좋습니다. 마지막 발만 모아 주십시오.":
["Your turn was good. Just bring your feet together at the end.","回転は結構でした。最後に足をそろえてください。"],"흑집사』 비공식 2차 창작 팬게임":
["An unofficial Black Butler fan game","黒執事』非公式二次創作ゲーム"],"“방금 건 내 방식대로 했어. 그래도 맞지?”":
["“I did that one my own way. It’s still right, isn’t it?”","「今のは僕のやり方でやった。それでも合ってるだろう？」"],"… 내일 아침엔 대체 어디서 눈을 떠야 하지?":
["…Where exactly am I meant to wake up tomorrow morning?","……明日の朝、僕はいったいどこで目を覚ませばいいんだ？"],"가져. 내일 아침엔 쓸 일이 없을 테니.":
["Keep it. I shan’t need it tomorrow morning.","持っていろ。明日の朝はもう使わない。"],"갈 곳이 없으면 오랬지? 아직 우리 자리가 있어?":
["You said to come if we had nowhere else to go. Is there still room for us?","行くあてがないなら来いって言ったよね？　まだ僕たちの居場所はある？"],"거울 앞에서 시엘의 안대를 매는 세바스찬":
["Sebastian tying Ciel’s eyepatch before the mirror","鏡の前でシエルの眼帯を結ぶセバスチャン"],"그 찻잎, 아직 한 번은 더 우릴 수 있어.":
["Those leaves have another pot of tea in them yet.","その茶葉なら、まだもう一度は淹れられる。"],"그게 마음에 들어서 어제부터 여기 누워 있었지.":
["That’s what I like about it. I’ve been lying here since yesterday.","そこが気に入って、昨日からここに寝そべってるの。"],"그게, 한밤중에 따로 내리는 짐이라…….":
["Well, it’s a separate lot unloaded in the dead of night, you see…","いや、こいつは真夜中に別口で下ろす荷でして……。"],"그래도 창문은 조금 열어 둬. 오늘만은.":
["Leave the window open a crack all the same. Just for today.","それでも窓は少し開けておいて。今日だけは。"],"그럼 그 책은 조금만 놓아 주시겠습니까.":
["Now, would you loosen your hold on that book just a little?","では、その本を抱く手を、少々緩めていただけますか。"],"그럼 부모로부터 독립한 멋진 남자가 되겠지?":
["That would make you quite the man, independent of your parents, wouldn't it?","そうすれば親元を離れて自立した、立派な男になれるだろう？"],"근무지는 월간 계획을 세울 때 변경할 수 있습니다.":
["You can change work assignments while planning the month.","勤務先は月の予定を組む際に変更できます。"],"꽤나 거창한 이름을 골라 주셨군요.":
["What a grand name you've chosen for him.","ずいぶんと立派なお名前をお選びになりましたね。"],"내가 숟가락 내려놓는 것까지 봤어?":
["You even noticed me putting my spoon down?","僕が匙を置いたところまで見ていたのか？"],"년 런던 성냥공장 파업 · 회사 대응 IF":
[" London match factory strike · an alternate response","年 ロンドンのマッチ工場ストライキ · 会社の対応（IF）"],"다음 종이 울리면 들어가. 내가 먼저 시작할게.":
["Come in at the next bell. I'll start us off.","次の鐘で入ってくれ。僕が先に弾く。"],"다음은 회사 장부입니다. 위쪽의 ‘팬텀 사(":
["Next comes the company ledger. At the top of the screen, select Funtom","次は会社の帳簿でございます。画面上部の「ファントム社"],"단계마다 도안 수익 +£1 · 개발비 할인":
["Per level: +£1 design premium and lower development costs","各段階で意匠収入＋£1、開発費割引"],"도련님, 현관에 외투를 내어 두었습니다.":
["Your coat is ready in the hall, my lord.","坊ちゃん、玄関に外套をご用意しました。"],"동사가 빠졌습니다. 편지는 잠시 제게 주십시오.":
["The verb is missing. May I have the letter for a moment?","動詞が抜けております。少々お手紙をお預かりいたします。"],"등 뒤에서 두 번이나 부르셨습니다. 이쪽입니다.":
["You’ve been called twice from behind. This way, if you please.","後ろから二度お声がかかりましたよ。こちらでございます。"],"리본을 푸는 순간까지가 저희 선물입니다.":
["Even the moment you untie the ribbon is part of our gift.","リボンをほどくそのひとときまでが、当店の贈り物です。"],"마지막 명령에는 도련님 자신의 이름을 쓰셨군요.":
["You signed your last order in your own name.","最後のご命令には、坊ちゃんご自身のお名前をお書きになったのですね。"],"마지막 해에 서로 다른 분야의 최종 실기를 통과하세요.":
["In your final year, pass the final practical examination in more than one field.","最終年に、複数の分野で最終実技試験に合格しましょう。"],"마차를 타고 옛 흔적을 좇습니다.":
["Ciel takes a carriage to follow a trail from the past.","シエルは馬車に乗り、過去の足跡をたどります。"],"맞아. 그게 우리 천막에 걸린 이름이야.":
["That's right. That's the name on our tent.","そう。うちのテントに掲げてある名前だ。"],"메이린이 두 색의 실로 수건을 표시했다.":
["Mey-Rin marked the towels with two colours of thread.","メイリンは二色の糸でタオルに印をつけた。"],"메이린이 손으로 수건을 구분하게 됐다.":
["Mey-Rin could now tell the towels apart by touch.","メイリンはタオルを手触りで見分けられるようになった。"],"뭐야? 주전자는 또 왜 줄줄 새는 거지?":
["What the devil? And why is the teapot leaking everywhere?","何だ？　それに、どうしてポットから茶がだだ漏れなんだ？"],"미군 출신을 우리 집 셰프로 쓰겠다고?":
["You mean to make a former American soldier our chef?","元米兵を、うちの料理長にするだと？"],"바로 옆에서 고막을 찢는 총성이 울렸다.":
["A deafening shot rang out right beside him.","すぐそばで、鼓膜が裂けそうな銃声がした。"],"바르도가 시엘의 접시를 따로 덮었다.":
["Baldo covered Ciel’s portion and set it aside.","バルドがシエルの皿に蓋をして取り置いた。"],"밤에 창고를 드나드는 사람이 있는지 지켜본다":
["Watch the stockroom at night to see who comes and goes","夜中に倉庫に出入りする者がいないか見張る"],"방식은 너한테 맡기지. 제대로 교육시켜.":
["I'll leave the method to you. See that he's properly trained.","やり方はお前に任せる。きちんと仕込んでおけ。"],"백작과 집사…… 너나 나나 아직 가짜야.":
["An earl and his butler… Neither of us is the real thing yet.","伯爵と執事……僕もお前も、まだ偽物だ。"],"빅토리아 시대 수확 감사 관습 · 가문 참여 IF":
["Victorian harvest thanksgiving custom · The family’s participation is imagined","ヴィクトリア朝の収穫感謝の風習・一家の参加はIF"],"사교계에서 가문의 이름이 다시 들리기 시작했다.":
["The family name is being heard in society again.","社交界で再び家名が聞かれるようになった。"],"사우스켄싱턴 박람회 · 팬텀사 출품전":
["South Kensington Exhibition · Funtom's Entry","サウス・ケンジントン博覧会・ファントム社出品会"],"상대가 부른 값이 우리 원가보다 낮습니다.":
["Their offer is below our cost price.","先方の言い値は、こちらの原価を下回っております。"],"세바스찬, 어느 쪽 서랍을 연 거야?":
["Sebastian, which drawer did you open?","セバスチャン、どっちの引き出しを開けた？"],"세바스찬은 곱게 접은 안대를 받았다.":
["Sebastian received the neatly folded eyepatch.","セバスチャンは丁寧に畳まれた眼帯を受け取った。"],"세바스찬은 곱게 접힌 안대를 받았다.":
["Sebastian accepted the neatly folded eyepatch.","セバスチャンは丁寧に畳まれた眼帯を受け取った。"],"시엘의 얇은 가슴은 다시 오르지 않았다.":
["Ciel’s narrow chest did not rise again.","シエルの薄い胸は、もう動かなかった。"],"시엘이 눈을 감기도 전에 세상이 어두워졌다.":
["The world went dark before Ciel could close his eyes.","シエルが目を閉じるより先に、世界が暗くなった。"],"시제품 옆에 반품된 상자가 놓여 있다.":
["A returned box sits beside the prototype.","試作品の隣に、返品された箱が置いてある。"],"아, 저녁이요? ……불은 제가 끄죠.":
["Oh, dinner? …I’ll put the fire out.","あ、夕飯ですか？　……火は俺が消しますよ。"],"애초에 네 봉급부터 깎았어야 했어.":
["I should have cut your wages first.","真っ先にお前の給料を削るべきだった。"],"어디까지 납품 구역으로 삼으시겠습니까?":
["How far shall our deliveries extend?","どこまでを納品先にいたしましょう？"],"어쩌려고 저런 수상한 자를 받아들이셨습니까?":
["May I ask what you intend to do with such a dubious character, my lord?","坊ちゃん、あのように素性の知れぬ者をお屋敷に置いて、どうなさるおつもりです？"],"예. 다음 납품분도 같은 기준으로 확인하겠습니다.":
["Certainly. I shall hold the next delivery to the same standard.","かしこまりました。次の納品分も同じ基準で確認いたします。"],"예배를 마친 손님들이 연주석 앞으로 모입니다.":
["Guests gather by the musicians' stand after the service.","礼拝を終えた客が、演奏席の前に集まります。"],"오늘은 네가 이겼어. 축하한다, 시엘.":
["You won today. Congratulations, Ciel.","今日は君の勝ちだ。おめでとう、シエル。"],"왕자님께서 신세를 지시는 집이지 않습니까.":
["But this household has shown my prince such hospitality.","ソーマ様がお世話になっているお屋敷ですから。"],"원작 14권 66화 모티프 · 시점 재구성":
["Inspired by manga vol. 14, ch. 66 · Timeline adapted","原作14巻第66話をもとに、時期を再構成"],"이 회차의 사용인 관계 기록은 남아 있지 않습니다.":
["No record of Ciel’s relations with the servants survives from this playthrough.","この周回の使用人との関係は記録されていません。"],"이 회차의 세부 장부는 남아 있지 않습니다.":
["No detailed ledger survives for this playthrough.","この周回の詳細な帳簿は残っていません。"],"이번에도 봉투를 고스란히 돌려보냈어?":
["Did they return the whole envelope untouched again?","今度も封筒ごと突き返してきたのか？"],"인장은 하나인데 밀랍을 두 종류나 썼다고?":
["One seal, but two kinds of wax?","印章は一つなのに、封蝋を二種類使ったのか？"],"자, 딱 여기까지만 보이면 될 것 같아.":
["There. Just this much ought to show.","ほら、ちょうどここまで見えればいい。"],"지금은 저택에 아무도 들이고 싶지 않아.":
["I don’t want anyone coming into the manor just now.","今は屋敷に誰も入れたくない。"],"찾았다. 세바스찬, 다음 배편을 잡아.":
["Found you. Sebastian, book passage on the next ship.","見つけたぞ。セバスチャン、次の船を押さえろ。"],"채무를 상환하고 가문 자금을 비축하세요.":
["Repay the debt and build up the family’s reserves.","借金を返し、家の資金を蓄えましょう。"],"첫 엔딩을 맞이하면 이곳에서 다시 볼 수 있습니다.":
["Reach an ending to revisit it here.","迎えたエンディングはここで振り返れます。"],"카이로소프트 ‘○○○ 스토리’ 시리즈":
["Kairosoft's Story series","カイロソフトの「○○○ストーリー」シリーズ"],"타나카의 저택 복귀 · 게임 달력에 배치":
["Tanaka’s return to the manor · Placed on the game calendar","タナカの屋敷への帰還・ゲームの暦に合わせて配置"],"팬텀사 창고의 출고 담당자를 먼저 지목한다":
["Name the dispatch clerk at Funtom’s warehouse first","まずファントム社の倉庫の出荷係を名指しする"],"포장 받침을 낮춰 두 귀의 공간을 확보한다":
["Lower the insert to leave room for both ears","台紙を低くして両耳の入る余地を作る"],"표찰의 방향을 피니안에게 맡겼다.":
["Ciel let Finnian decide which way the label should face.","名札の向きはフィニアンに任せた。"],"한 치의 망설임도 없이 빛을 등지고,":
["Without a moment’s hesitation, he turns his back on the light…","一片のためらいもなく光に背を向け、"],"합계는 맞습니다. 외상 건은 다음 칸입니다.":
["Your total is correct. Credit transactions go in the next column.","合計は合っております。掛けの分は次の欄でございます。"],"현 상황에서는 재가 허가를 내리기 어렵습니다.’":
["In the present circumstances, royal assent cannot be granted.","現状においては、裁可を下すことは困難である"],"현재 물량에서는 증설 뒤 비용이 더 큽니다.":
["At current volume, expansion would raise costs.","現在の数量では、増設後の費用が高くなります。"],"화이트채플 서신을 가문 기록에 보관했다.":
["The Whitechapel correspondence was filed in the family archives.","ホワイトチャペルの書簡を一族の記録に収めた。"],"‘현 상황에서는 재가 허가를 내리기 어렵습니다.’":
["“In the present circumstances, royal assent cannot be granted.”","「現状においては、裁可を下すことは困難である」"],"“……보고만 있지 말고, 처음 것부터 다시 줘.”":
["“…Don’t just stand there watching. Give me the first one again.”","「……見ていないで、最初のものからもう一度出せ」"],"가문 심의에 제출할 장부 원본을 발견했습니다.":
["The original ledger has turned up. It can be submitted when the family’s affairs come under review.","家の審議に提出できる帳簿の原本が見つかった。"],"값을 그대로 두고 운임까지 받아 내셨군요.":
["You held your price and persuaded them to pay the freight as well.","値を下げずに運賃まで先方持ちになさいましたね。"],"같은 날 포장한 상자들을 확인하고 D를 바꿔 준다":
["Check the other boxes packed that day and exchange a B for a D","同じ日に詰めた箱を調べ、BをDと交換する"],"개수마다 휴식·요양의 컨디션 회복 +5":
["Rest and convalescence restore 5 additional Condition points per renovation.","改修ごとに休息・療養による体調回復量＋5。"],"고맙습니다. 저기 촛대도 한 쌍이지요?":
["Much obliged. Those candlesticks are a pair, I take it?","助かります。そちらの燭台も一対ですな？"],"골목의 길이는 쟀습니다. 시간은 더 확인해야겠습니다.":
["We’ve measured the alley. The timing still needs to be checked.","路地の長さは測れました。時刻はもう少し確かめねばなりません。"],"구인 광고를 내도 좀처럼 찾기 힘들겠지요.":
["You would be hard pressed to find such a candidate by advertising for one.","求人広告を出したところで、そうそう見つかる人材ではございませんよ。"],"그 견본은 다른 상회의 것입니다. 표찰을 보십시오.":
["That sample belongs to another firm. Look at the label.","その見本は別の商会のものです。札をご覧ください。"],"그 부분에서 또 걸렸군. 어디서부터 틀렸지?”":
["Caught on that part again. Where did I go wrong?","またそこでつかえたな。どこから間違えた？"],"그 조건대로라면 우리가 운임을 두 번 냅니다.":
["Under those terms we would pay the freight twice.","その条件ですと、運賃をこちらが二度払うことになります。"],"그래서 시식회에 손님을 몇 명이나 먹인 거야?":
["How many people did we feed at this tasting, exactly?","で、試食会にはいったい何人分の料理を出したんだ？"],"그의 어깨 너머, 창가에 어린 백작이 서 있었다.":
["Beyond his shoulder, the young earl stood by the window.","その肩越しに、窓辺に立つ幼い伯爵の姿が見えた。"],"끝까지 도련님의 뜻으로 내리신 명령이군요.":
["An order entirely of your own choosing, to the very last.","最後まで坊ちゃんご自身の意志で下されたご命令ですね。"],"난 우리 동포 편이야. 저 둘을 막아 줘!":
["I'm on the side of my countrymen. Stop those two!","俺は同胞の味方だ。あの二人を止めてくれ！"],"날짜까지 덮으면 필적도 단서가 되겠지.":
["If you’re covering the dates as well, I suppose the handwriting counts as a clue.","日付まで隠すなら、筆跡も手掛かりのうちだな。"],"내가 문까지 나가면 먼저 온 손님이 혼자가 되는군.":
["If I go to the door, I leave my first guest alone.","僕が扉まで迎えに行けば、先客が一人になるな。"],"네 마디는 잘 이어졌습니다. 다음은 쉼표입니다.":
["Those four bars flowed nicely. Next comes a rest.","四小節がきれいにつながりました。次は休符でございます。"],"네가 관리를 잘못한 거잖아, 세바스찬!":
["You were the one who mismanaged it, Sebastian!","お前の管理が悪かったんだろう、セバスチャン！"],"네가 조금 앞섰군. 축하해, 에드워드.":
["You just edged ahead. Congratulations, Edward.","少しだけお前が上だったな。おめでとう、エドワード。"],"다음 무도회에서는 먼저 춤을 청해 보시지요.":
["At the next ball, might I suggest you ask someone to dance?","次の舞踏会では、ご自分から踊りにお誘いになっては？"],"대체 어디서 기어나온 놈이지, 꼬마야?":
["What hole did you crawl out of, boy?","どこの穴から湧いて出たんだ、小僧？"],"도장보다 먼저 종이의 접힌 자리를 보셨군요.":
["You looked at the crease in the paper before examining the seal.","印よりも先に、紙の折り目をご覧になりましたね。"],"리본이 걸렸군. 잠시만요, 제가 풀겠습니다.":
["The ribbon has caught. One moment, let me undo it.","リボンが引っかかりましたね。少々お待ちを、僕がほどきます。"],"마부한테 오늘은 일찍 들어가 쉬라고 전해.":
["Tell the coachman he may go home early today and get some rest.","御者には今日は早く帰って休めと言っておけ。"],"마지막 동사가 달랐어. 누가 말하는지 바꿨군.":
["The last verb changed. You switched the speaker.","最後の動詞が違う。話し手を変えたな。"],"무게는 같습니다. 손톱으로 누른 자리도 같을까요?":
["They weigh the same. What about the marks left by a fingernail?","重さは同じです。爪で押した跡も同じでしょうか？"],"물론이지. 그렇다고 다음 상장까지 내줄 생각은 없어.":
["Certainly. Though I have no intention of giving up the next certificate as well.","もちろんだ。もっとも、次の賞状まで譲るつもりはないぞ。"],"바구니 옆에서 조용히 햇볕을 쬔다":
["Sit quietly in the sun beside the basket","籠のそばで静かに日向ぼっこをする"],"방금 적으신 시각은 종소리보다 앞섭니다.":
["The time you just noted is earlier than the ringing of the bell.","いまお書きになった時刻は、鐘が鳴った時刻よりも前ですよ。"],"생산품·재고에서 1개를 빌려 심사 후 반환":
["One unit is borrowed from production or stock and returned after judging.","生産品または在庫から1個を借り、審査後に返却します。"],"서가 맨 아래에 그을린 장부가 누워 있다.":
["A scorched ledger lies on the bottom shelf.","書棚のいちばん下に、焦げた帳簿が一冊、横にして置かれている。"],"세 문장 중 두 번째만 사전을 펴면 되겠습니다.":
["Of the three sentences, only the second calls for a dictionary.","三つの文のうち、辞書が要るのは二つ目だけですね。"],"세 벌은 장부의 어느 칸에 들어가야 할까?":
["Where should the three sets be entered in the ledger?","三組は帳簿のどの欄に記すべきか？"],"세바스찬이 올빼미 앞에 몸을 낮췄다.":
["Sebastian crouched in front of the Owl.","セバスチャンは梟の前で身をかがめた。"],"손님, 봉투만 전해 드려도 되겠습니까?":
["Sir, shall I see that your letter reaches him?","お客様、お手紙でしたら私がお届けしましょうか？"],"손님에게 도안 번호를 한 번 더 써 달라고 한다":
["Ask the customers to write down the design number once more","客にもう一度図案番号を書いてもらう"],"손님이 먼저 도련님 곁자리를 청하셨습니다.":
["The guest asked to sit beside you, my lord.","お客様の方から、坊ちゃんのお隣の席をお望みでした。"],"시엘 팬텀하이브. 그 이름이면 충분해.":
["Ciel Phantomhive. That name will suffice.","シエル・ファントムハイヴ。その名で十分だ。"],"시엘의 인사, 일정 애니메이션과 대사 표시 효과":
["Ciel's greeting, schedule animations and dialogue effects","シエルの挨拶、日程のアニメーション、台詞の表示演出"],"시엘이 위독합니다. 곁에서 돌볼 사람이 필요합니다.":
["Ciel is gravely ill. Someone must stay with him.","シエルは危険な状態です。付き添って看病する人が必要です。"],"시엘한테 볼일 있어? 오늘은 본저택에 있는데.":
["You're looking for Ciel? He's at the manor today.","シエルに用か？　今日は本邸にいるぞ。"],"시연회를 취소하고 경시청에 수사를 맡긴다":
["Cancel the demonstration and leave the investigation to Scotland Yard","実演会を取りやめ、捜査を警視庁に任せる"],"실행 전에 취소하면 원래 하순 일정으로 돌아갑니다.":
["Cancel before starting the schedule to restore the original late-month activity.","日程開始前に取り消すと、元の下旬の予定に戻ります。"],"실험체 따위 살려 둘 수 없어. 서둘러!":
["We can't leave the subjects alive. Hurry!","実験体など生かしておけん。急げ！"],"아그니, 우리 마차가 아직 마구간에 있나?":
["Agni, is our carriage still in the stables?","アグニ、俺たちの馬車はまだ厩にあるか？"],"아그니와 둘이 타운하우스를 관리하면 어때?":
["How would you like to look after the townhouse with Agni?","アグニと二人で、このタウンハウスの管理をしてみるか？"],"안쪽에서 나는 소리를 누가 먼저 듣는지 겨뤄 본다":
["See who hears the first sound from inside","中の物音にどちらが先に気づくか競う"],"알아. 날짜 말고 뒷면의 글씨나 봐.":
["I know. Never mind the date. Look at the writing on the back.","分かってる。日付じゃなく、裏の字を見ろ。"],"약속한 거야! 다음에는 내가 먼저 상장을 받을 테니까.":
["It's a promise! Next time I'll be the first to collect a certificate.","約束よ！　次は私が先に賞状を受け取るんだから。"],"어학과 경제, 사격과 승마······.":
["Languages and economics, marksmanship and riding…","語学に経済、射撃に乗馬……。"],"얼스 코트 이탈리아 박람회 · 공예품 품평":
["Italian Exhibition at Earl's Court · Craft Competition","アールズ・コートのイタリア博覧会・工芸品品評会"],"역시 아그니야! 시엘, 난 한숨 더 잘게.":
["That’s my Agni! Ciel, I’m going back to sleep.","さすがアグニだ！　シエル、俺はもうひと眠りするぞ。"],"오늘 아침 차는 산뜻한 닐기리로 골랐습니다.":
["I've chosen a refreshing Nilgiri for your morning tea.","今朝は爽やかなニルギリをご用意いたしました。"],"오늘 올라온 요청은 날짜대로 묶어 두셨군요.":
["You’ve bundled today’s requests by date.","今日届いた依頼を、日付順にまとめておかれましたね。"],"오늘은 네 차례군. 축하해, 에드워드.":
["It's your turn today. Congratulations, Edward.","今日はお前の番だ。おめでとう、エドワード。"],"오늘은 네가 조금 앞섰네. 축하해, 시엘!":
["You just beat me today. Congratulations, Ciel!","今日はシエルの方が少し上だったわね。おめでとう！"],"오늘이 목요일인데 수요일에 가시겠다고 쓰셨습니다.":
["Today is Thursday, and you’ve written that you’ll be calling on Wednesday.","今日は木曜日ですが、水曜日に伺うとお書きになっていますよ。"],"왕실이 팬텀하이브가를 눈여겨보고 있다.":
["The Crown has taken an interest in House Phantomhive.","王室がファントムハイヴ家に注目している。"],"응. 네 바구니도 귀엽게 꾸며 주고 싶어":
["Yes! I’d like to make your basket look pretty too","ええ、あなたの籠も可愛く飾ってあげたいの"],"이 가문의 집사장이 대대로 물려받는 시계입니다.":
["This watch has passed from one head butler of this house to the next.","この家の執事長が代々受け継いできた時計です。"],"이 게임의 리소스 제작에 생성형 AI를 사용했습니다.":
["Generative AI was used to create game assets.","ゲーム素材の制作に生成AIを使用しています。"],"이번에는······. 나는 절대로 안 져.":
["This time… I will not lose.","今度は……僕は絶対に負けない。"],"이제 ‘중순’ 칸을 열어 보시겠습니까?":
["Would you open the Mid-Month slot now?","では、「中旬」の欄をお開きいただけますか？"],"이제 집기 목록을 훤히 꿰고 계시는군요.":
["I see you know the inventory inside out now.","今ではすっかり家財目録にお詳しくなられましたね。"],"잠깐. 둘이서 멋대로 정하지 마. 난 안 해.":
["Hold on. You two don't get to decide for me. I won't do it.","ちょっと待ちな。二人で勝手に決めるんじゃないよ。あたしはご免だ。"],"장미의 번호를 정원 장부에 옮겼다.":
["The rose numbers were entered in the garden ledger.","バラの番号を庭の帳面に書き写した。"],"적어도 어디서 끊을지는 먼저 말해 주지 그래.":
["You might at least tell me where you mean to stop.","せめてどこで止めるかくらい、先に言ったらどうだ。"],"점수 차이가 작군. 축하해, 에드워드.":
["A narrow margin. Congratulations, Edward.","僅差だったな。おめでとう、エドワード。"],"정원에서는 바람도 심사에 끼어들지요.":
["In the garden, even the wind has a say in the judging.","庭では、風まで審査に口を挟みますのよ。"],"정작 도련님께서는 거짓말에 능하십니다.":
["Yet you are quite an accomplished liar yourself.","坊ちゃんご自身は、ずいぶんと嘘がお上手でいらっしゃいますね。"],"줄 하나가 풀렸는데도 끝 음을 잡으셨군요.":
["You found the final note even with a string loose.","弦が一本緩んでいたのに、最後の音をきちんと取られましたね。"],"증인이 그린 골목에는 있어야 할 굴뚝이 없습니다.":
["The alley in the witness’s sketch is missing a chimney that ought to be there.","証人が描いた路地には、あるはずの煙突が見当たらない。"],"지난번보다 덜 떫네. 잎을 바꿨어?":
["Less bitter than last time. Different leaves?","前ほど渋くないな。茶葉を替えたのか？"],"찾으시는 물건이라면 제가 조금 전 치워 두었습니다만.":
["If it’s the item you’re after, I took the liberty of putting it away a moment ago.","お探しの品でしたら、先ほど片づけておきましたが。"],"첫 문장을 덜어내면 훨씬 자연스럽겠습니다.":
["It would read much more naturally without the opening sentence.","最初の一文を除けば、ずっと自然な文面になるでしょう。"],"축하해, 시엘. 다음에는 나도 이길 거야!":
["Congratulations, Ciel. I’ll win next time!","おめでとう、シエル。次は私が勝つわ！"],"축하해, 시엘. 오늘은 네가 조금 앞섰네!":
["Congratulations, Ciel. You just had the edge today!","おめでとう、シエル。今日はあなたが少しだけ上だったわね！"],"피니안이 팬텀하이브가의 정원사가 되었다.":
["Finnian became the Phantomhive gardener.","フィニアンはファントムハイヴ家の庭師になった。"],"현재 생산·판매 조건에서는 이달 추가 이익이 없습니다.":
["At current production and sales levels, there is no extra profit this month.","現在の生産・販売条件では、今月の追加利益はありません。"],"흠. 그럼 오늘은 내가 밖에서 다시 두드리지.":
["Hmm. Then I’ll step outside and knock again today.","ふうん。なら今日は僕が外に出て、もう一度たたこう。"],"1888년 런던 성냥공장 파업 · 회사 대응 IF":
["London matchworkers’ strike, 1888 · The company’s response is imagined","1888年ロンドンのマッチ工場ストライキ・会社の対応はIF"],"Earl Phantomhive Maker · 팬텀하이브 메이커":
["Earl Phantomhive Maker","ファントムハイヴ伯爵メーカー"],"“그 부분에서 또 걸렸군. 어디서부터 틀렸지?”":
["“Caught on that part again. Where did I go wrong?”","「またそこでつかえたな。どこから間違えた？」"],"…… 오늘 아침 차는 산뜻한 닐기리로 골랐습니다.":
["…I've chosen a refreshing Nilgiri for your morning tea.","……今朝は爽やかなニルギリをご用意いたしました。"],"……대체 어디서 기어나온 놈이지, 꼬마야?":
["…What hole did you crawl out of, boy?","……どこの穴から湧いて出たんだ、小僧？"],"각 인물이 시엘에게 보내는 신뢰와 호감도입니다.":
["Each person's trust in and affection for Ciel.","それぞれの人物がシエルに寄せる信頼と好感度です。"],"각주에서 제가 일부러 틀린 연도를 찾으셨군요.":
["You spotted the wrong year I deliberately put in the footnote.","脚注にわざと記した誤った年を、よくお見つけになりましたね。"],"공통 관리비 £36과 경비 절감액은 별도입니다.":
["The £36 general upkeep charge and savings from guard duty are calculated separately.","共通の管理費£36と警備による節約額は別計算です。"],"그 접시는 ……아냐. 이리 줘. 내가 치울게.":
["That plate… Never mind. Here, I’ll take it away.","その皿は……いや。貸しな、俺が片づける。"],"그건 어제 제가 붙인 표찰입니다. 단서는 그 아래입니다.":
["I attached that label yesterday. Your clue is underneath it.","それは私が昨日貼った札です。手がかりはその下にございます。"],"그래. 어느 부분을 보완할지는 기록을 보고 정하겠어.":
["Yes. I'll decide what needs improvement once I've seen the records.","ああ。どこに手を入れるかは記録を見て決める。"],"그러면······ 그 커다란 눈동자에!":
["Then… in that great wide eye of yours!","では……その大きな瞳に！"],"그런 소동이 있고, 결국 정원에 아침상이 차려졌다.":
["After all that commotion, breakfast was finally laid out in the garden.","そんな騒ぎの末、結局、庭に朝食の席が整えられた。"],"그렇다면 마차를 대겠습니다. 바구니도 이리 주십시오.":
["In that case, I'll have the carriage brought round. Allow me to take your basket as well.","それでは馬車を回しましょう。その籠もお預かりいたします。"],"글쎄요. 기일을 적는 자리가 텅 비어 있습니다.":
["Well, the space for the date is quite blank.","さあ。期日を記す欄には何もございませんね。"],"나는 행복을 얻기 위해 ‘여기’로 돌아온 게 아니야.":
["I didn’t come back here to find happiness.","僕は幸せになるために、ここへ戻ってきたんじゃない。"],"나무 책상 위에 놓인 여왕의 봉서와 편지칼":
["The Queen’s sealed letter and a paper knife on a wooden desk","木の机に置かれた女王の親書とペーパーナイフ"],"날씨 이야기는 무사히 끝났습니다. 다음 화제는요?":
["The weather saw you safely through the opening. And your next topic?","お天気のお話は無事に済みました。次の話題はいかがなさいます？"],"네 글씨대로 둬. 화분을 돌리면 되잖아.":
["Leave it as you wrote it. You can always turn the pot.","書いたままでいい。鉢を回せば済むだろう。"],"눈치가 좋은 줄 알았는데, 의외의 것을 묻네.":
["An odd question. I thought you were more observant than that.","察しがいいと思っていたのに、妙なことを聞くな。"],"도안첩의 판본을 먼저 맞추고 세 주문을 교환한다":
["Identify the catalogue edition, then exchange all three orders","まず図案帳の版を確かめ、三件とも品物を交換する"],"두 견본의 심사표에 같은 점수가 적혔군요.":
["The judges have given both samples the same score.","二つの見本の審査表には、同じ点数が記されていますね。"],"두 근무지를 모두 맡기면 월말에 가문 명성 +1":
["Staff both posts for +1 family reputation at month-end.","両方の持ち場に人を配置すると、月末に家の名声＋1。"],"두 상회가 함께 선정됐습니다. 축하드립니다, 도련님.":
["Both firms have been selected. My congratulations, my lord.","両社とも選ばれました。おめでとうございます、坊ちゃん。"],"리지가 가운데에 앉으면 아무 문제도 안 생기는 일이잖아….":
["If Lizzy sat between us, we wouldn’t have a problem…","リジーが真ん中に座れば何の問題もないだろう……。"],"마부를 다시 부를까요? 아직 마당을 안 나갔습니다.":
["Shall I recall the coachman? He hasn’t left the yard yet.","御者を呼び戻しましょうか？　まだ庭を出ておりませんよ。"],"마지막 계단에서도 제가 도련님의 보폭을 맞춰야 했습니다.":
["Even on the last stair, it was I who had to match your stride.","最後の一段まで、坊ちゃんの歩幅に合わせたのは私のほうでしたね。"],"마침 '애완동물'이 하나 갖고 싶었거든.":
["As it happens, I've been wanting a “pet.”","ちょうど「ペット」が一匹欲しかったんだ。"],"마침 차가 잘 우러났어. 한 잔 하겠어?":
["The tea is just right. Care for a cup?","ちょうどいい具合にお茶が入ったよ。一杯どうだい？"],"먼저 결재하신 지붕 수선 건부터 장인에게 전하겠습니다.":
["I shall tell the craftsman first about the roof repairs you have already approved.","先に決裁なさった屋根の修繕から、職人に伝えてまいります。"],"먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?":
["How can you tell before you've even picked up a feather duster?","はたき一本手に取る前から、どうしてそう言い切れるのです？"],"무릎 꿇은 시엘의 어깨에 경식을 거는 여왕":
["The Queen placing the collar of the order on the kneeling Ciel","ひざまずくシエルの肩に頸飾を掛ける女王"],"물론이지. 다음 상장까지 네게 주겠다는 뜻은 아니지만.":
["Of course. Though that doesn't mean I'm giving you the next certificate as well.","もちろんだ。次の賞状までお前に譲るという意味じゃないぞ。"],"바퀴를 끼우니 뚜껑이 열리지 않는군요.":
["With the wheels fitted, the lid will no longer open.","車輪をはめると、蓋が開かなくなりますね。"],"방금 복도를 지나간 건 우리 애들이야. 놀라지 마.":
["It was our lot going down the corridor just now. Don’t be alarmed.","さっき廊下を通ったのはうちの子たちよ。驚かないでね。"],"복도 끝 옷걸이에 새 앞치마가 걸려 있다.":
["A new apron hangs on a peg at the end of the corridor.","廊下の突き当たりのフックに、新しい前掛けが掛かっている。"],"복수는 그만두겠어. 이게 내 마지막 명령이다.":
["I’m giving up my revenge. That is my final order.","復讐はもうやめる。これが僕の最後の命令だ。"],"복수는 여기서 끝이다. 이게 내 마지막 명령이야.":
["My revenge ends here. That’s my final order.","復讐はここまでだ。これが僕の最後の命令だ。"],"세 바퀴째도 첫 바퀴처럼 달리는지 봐 주십시오.":
["Watch whether it runs as well on the third lap as it did on the first.","三周目も一周目と同じように走るか、どうぞご覧ください。"],"소인 하나로 두 증언의 순서를 바로잡으셨군요.":
["A single postmark, and you put the two accounts in their proper order.","消印一つで、二つの証言の順序を正されましたね。"],"시엘 앞에 한쪽 무릎을 꿇은 세바스찬.":
["Sebastian on one knee before Ciel","シエルの前に片膝をつくセバスチャン"],"시엘! 여기 앉아! 오늘은 내가 차 골라 줄게!":
["Ciel! Sit here! I’ll choose the tea today!","シエル！　ここに座れ！　今日は俺が茶を選んでやる！"],"시엘에게 속마음을 털어놓을 만큼 깊이 믿습니다.":
["Trusts Ciel enough to confide their true feelings.","胸の内を明かせるほど深くシエルを信頼している。"],"시연회에서 무엇을 근거로 누구의 이름을 댈까?":
["Whom should Ciel name at the demonstration, and on what evidence?","実演会で誰の名を挙げる？　その根拠は？"],"식탁에 저녁 식단과 빈 접시가 놓여 있다.":
["The dinner menu and an empty plate lie on the table.","食卓には夕食の献立と空の皿が置かれている。"],"아침 홍차를 따르던 중 저택의 창이 깨진다.":
["As the morning tea is poured, a window shatters at the manor.","朝の紅茶を注いでいると、屋敷の窓が割れる。"],"역시 인간 아이에게 가문의 경영은 너무 이른 분야였을까요.":
["Perhaps managing a household really was rather too advanced for a human child.","やはり人間の子供に家の切り盛りは少々早すぎましたかね。"],"오늘 들은 성함을 마차 안에서 적어 두시지요.":
["Perhaps you might jot down the names you heard today in the carriage.","今日お聞きになったお名前は、馬車の中で控えておかれるとよろしいでしょう。"],"오늘도 불 끄기 전에 한 숟갈 빼 놨습니다!":
["Saved you a spoonful again today, before I put the fire out!","今日も火を落とす前に、ひと匙取っときましたぜ！"],"오늘은 정원 문까지 한 걸음 더 가 보시겠습니까?":
["Shall we go a step further today, as far as the garden gate?","今日はもう少し、庭の門まで足を延ばしてみませんか？"],"은쟁반 위에 다음 다과회의 답신이 쌓여 있다.":
["Replies to the invitations for the next tea party are piled on a silver tray.","銀の盆には、次の茶会の招待状への返事が積み重なっている。"],"이 수첩의 저장 기록을 새 회차로 교체할까요?":
["Replace the saved game in this notebook with a new one?","この手帳の記録を新しいゲームで上書きしますか？"],"이 회차의 최종 능력치 기록은 남아 있지 않습니다.":
["No final attributes were recorded for this playthrough.","この周回の最終能力値は記録されていません。"],"인간의 한평생도 내게는 눈 깜박할 사이다.":
["A human lifetime passes for me in the blink of an eye.","人間の一生など、私にとっては瞬きの間のこと。"],"잘했어. 마침 그때 일을 기억할 증인도 여기 있고.":
["Well done. As it happens, we have a witness here who remembers those days.","よくやった。ちょうど、当時を覚えている証人もここにいる。"],"저 눈이라면 망을 보는 데도 쓸모가 있겠습니다.":
["With eyesight like hers, she'd make a fine lookout as well.","あれほど目が利くのなら、見張りも務まりましょう。"],"제가 그 케이크를 열일곱 접시나 먹었습니까?":
["Was it I who ate seventeen plates of cake?","私がケーキを十七皿もいただいたのですか？"],"제가 박자를 바꿨는데도 발을 밟지 않으셨습니다.":
["I changed the beat, and still you didn’t tread on my feet.","私が拍子を変えても、一度も私の足をお踏みになりませんでしたね。"],"제가 피아노를 멈춰도 활은 계속 가는군요.":
["I stopped playing the piano, but your bow kept going.","私がピアノを止めても、弓は動き続けておりますね。"],"주방의 엘런에게 마지막 상자가 닿았는지 확인한다":
["Ask whether the last box reached Ellen in the kitchen","厨房のエレンに最後の箱が届いたか確かめる"],"중복된 문장 묶음을 열쇠 묶음으로 교환한다":
["Exchange the duplicate crest deck for a key deck","余分な紋章札の組を鍵札の組と交換する"],"증언 한 줄로 약도의 빈자리가 메워졌군요.":
["A single line of testimony has filled the gap in your sketch map.","証言の一行で、見取り図の空白が埋まりましたね。"],"지금으로선 작위를 되찾을 가망이 희박해 보인다.":
["For now, the chances of reclaiming the title look slim.","今のところ、爵位を取り戻せる見込みは薄い。"],"지위도 재산도 아름다운 약혼자도 전부 당신 것입니다.":
["Rank, wealth, a lovely fiancée. All yours.","地位も財産も、美しい許嫁も、すべてあなたのもの。"],"진열품을 장부에 따로 적고 수량을 맞춘다":
["Enter the display stock separately and reconcile the count","展示品を別欄に記し、帳簿と現物の数を合わせる"],"짐꾼이 묶은 매듭을 직접 풀어 보겠어?":
["Care to try your hand at untying a porter's knot?","荷運び人の結んだ縄を、自分でほどいてみるかい？"],"집에서 다른 나무패와 섞였는지 아이에게 묻는다":
["Ask if the tiles got mixed up with another set at home","家で別の組の木札と混ざらなかったか尋ねる"],"첫 인사는 마쳤습니다. 창가에 한 분 더 계십니다.":
["Your first greeting is done. There is another guest by the window.","最初のご挨拶は済みました。窓辺にもうお一方いらっしゃいます。"],"축하해, 시엘. 엄청나게 귀여웠어~!":
["Congratulations, Ciel. You were simply adorable!","おめでとう、シエル。とーっても可愛かったわ！"],"팔을 뻗어 움직일 때의 길이도 잰다":
["Measure the sleeve with the arm extended as well","腕を伸ばし、動いた時の袖丈も測る"],"팬텀하이브가에서 일해 보실 생각은 없습니까?":
["Would you consider entering the service of House Phantomhive?","ファントムハイヴ家で働いてみませんか？"],"허어. 난 비가 와서 장사가 안되는 줄 알았지.":
["Oh? And here I thought business was slow because of the rain.","へえ。てっきり雨のせいで売れないんだとばかり思っていたよ。"],"확실히, 들어 있는 동전의 수에는 변함이 없겠습니다.":
["It certainly wouldn’t alter the number of coins.","確かに、中の硬貨の枚数は変わりませんね。"],"― 그런 소동이 있고, 결국 정원에 아침상이 차려졌다.":
["After all that commotion, breakfast was finally laid out in the garden.","そんな騒ぎの末、結局、庭に朝食の席が整えられた。"],"가장자리까지 손으로 마감했습니다. 가까이서 보시지요.":
["It's hand-finished right to the edge. Do take a closer look.","縁に至るまで手で仕上げてあります。どうぞお近くでご覧ください。"],"각 분야 한 과목의 실기 합격 뒤 같은 과목 2회 수강":
["Pass a practical in one subject in each field, then take the same subject twice more","各分野で一科目の実技に合格し、同じ科目をさらに二回受講"],"거기서 멈추십시오. 지금처럼 어깨를 내리시면 됩니다.":
["Stop there. Keep your shoulders lowered, just as they are now.","そこでお止まりください。今のように肩を下げていただければ結構です。"],"구리 냄비 뚜껑 아래에서 스튜가 끓고 있습니다.":
["Stew bubbles beneath the lid of a copper pot.","銅鍋の蓋の下でシチューが煮えている。"],"그 박자로 계속 쳐 줘. 다음 소절에서 내가 따라가지.":
["Keep that tempo. I'll catch up in the next phrase.","その拍子で続けてくれ。次の一節で僕が合わせる。"],"그가 복수를 끝낼 때까지, 배신하지 않고 지켜낼 것.":
["I was to protect him until his revenge was complete, and never betray him.","復讐を遂げるまで、決して裏切らず彼を守ること。"],"그럼 잘 받았다고만 해. 답장 기다리게 하지 말고.":
["Then just say it reached me. Don’t keep them waiting for a reply.","なら、ちゃんと受け取ったとだけ伝えろ。返事を待たせるな。"],"그렇다면 도련님께 청구할 것이 딱 하나 남는군요.":
["Then there’s just one thing left for me to claim from you, my lord.","では、坊ちゃんにご請求するものが、ちょうど一つ残っておりますね。"],"기록을 쓴 본인에게 직접 물으면 허가 따윈 필요 없지.":
["I don’t need permission to ask the man who wrote it.","書いた本人に聞くのに許可はいらない。"],"기품 있는 걸음걸이로 나락으로 돌진하는 그 모습은…":
["and strides so elegantly towards the abyss.","気高い足取りで奈落へ向かう、その姿は……。"],"끝나고 같이 한 바퀴 돌자. 내가 본 곳도 보여 줄게.":
["Let's walk round together afterwards. I'll show you where I looked.","終わったら一緒にひと回りしましょう。私が見た所も教えてあげる。"],"나의 악한 이름에 걸고 반드시 복수를 하고 말 거야!":
["On my own wicked name, I swear I’ll have my revenge!","僕の悪しき名にかけて、必ず復讐を遂げてみせる！"],"늦게 와도 알아. 이제 네 구두 소리는 기억하거든.":
["We’ll know even if you’re late. We remember your footsteps now.","遅くても分かる。もう靴音を覚えたから。"],"다녀왔습니다, 도련님. 너무 오래 자리를 비웠습니다.":
["I’m back, my lord. I’ve been away far too long.","ただいま戻りました、坊ちゃん。長らく留守にいたしました。"],"도련님께서 그렇게 말씀하실 줄 알고 다음 교본을 준비해 두었습니다.”":
["I thought you might say that, my lord. I have the next textbook ready.”","そうおっしゃると思い、次の教本をご用意しておきましたよ、坊ちゃん」"],"돌아오시면 스튜는 제가 데우죠. 그 정도는 할 수 있습니다?":
["I’ll heat up the stew when you get back. I can manage that much… can’t I?","帰ってきたらシチューは俺が温めますよ。それくらい、できますって……ね？"],"됐어. 그 놈을 다시 보거든 여기로 기별해.":
["That’ll do. If you see him again, send word here.","もういい。またそいつを見たら、ここへ知らせろ。"],"두 분의 점수가 같군요. 함께 우승하신 것을 축하드립니다.":
["Your scores are level. Congratulations to you both on sharing first place.","お二人は同点でございます。そろってのご優勝、おめでとうございます。"],"뒷골목에서 도련님을 뭐라 부르는지 아십니까?":
["Do you know what they call you in the back alleys, my lord?","路地裏でご自分が何と呼ばれているか、ご存じですか、坊ちゃん？"],"듣고 보니 일리 있네!! 그럼 내가 뭘 하면 돼?":
["You make a good point! All right, what do I do?","なるほど、一理あるな！　それで、俺は何をすればいい？"],"런던 집의 응접실과 우편함을 살펴봅니다.":
["You look in on the drawing room and check the letter box at the London house.","ロンドン邸の応接室と郵便受けを見て回る。"],"말씀만 하십시오, 도련님께서 고르신 길로 모시겠습니다.":
["Only say the word, my lord. I shall take you by the road you choose.","どうぞご命令を。坊ちゃんのお選びになった道へお供いたします。"],"말씨도, 힘을 쓰는 법도 차차 익히셔야겠습니다.":
["In time we'll have to teach you both how to speak and how to judge your own strength.","言葉遣いも力加減も、これから少しずつ覚えていただきましょう。"],"말없이 앉아 있던 손님까지 웃게 하셨군요.":
["You even made the guest who’d sat in silence laugh.","ずっと黙っていらしたお客様まで、坊ちゃんのお話に笑っておいででしたよ。"],"말이 먼저 멈췄군요. 오늘은 제가 내려 드리겠습니다.":
["The horse stopped before you did. Allow me to help you down today.","馬の方が先に止まりましたね。今日は私がお降ろしいたします。"],"먼저 보시지요. 저희 견본은 제가 직접 보여 드리겠습니다.":
["Do look at theirs first. I'll demonstrate our sample myself.","どうぞ先にご覧ください。弊社の見本は僕がご説明します。"],"메이린이 팬텀하이브가의 메이드로 합류했다.":
["Mey-Rin joined the Phantomhive household as a maid.","メイリンがファントムハイヴ家のメイドとして加わった。"],"목격자를 한 사람 만났습니다. 원문대로 적어 두지요.":
["We’ve spoken to one witness. Let us write down their exact words.","目撃者に一人会えましたね。その方の言葉どおりに書き留めましょう。"],"무료 초대석을 따로 정산하고 직원의 누명을 벗긴다":
["Account for the complimentary seats separately and clear the doorkeeper’s name","招待席を別勘定にし、入口係の疑いを晴らす"],"바르도가 팬텀하이브가의 셰프로 합류했다.":
["Baldo joined the Phantomhive household as its chef.","バルドがファントムハイヴ家の料理長になった。"],"발소리만 듣고도 맞혔어. 오늘도 그 구두네.":
["I knew you just by your footsteps. Those shoes again today.","足音だけで分かったぞ。今日もあの靴だな。"],"복도에서 우릴 보면 놀라지 마. 마중 나온 거야.":
["Don’t be startled if you see us in the hall. We came to meet you.","廊下で俺たちを見ても驚くな。迎えに出たんだ。"],"불탄 기록 곁에서 마지막 명령을 받아들이는 세바스찬.":
["Sebastian accepts the final order beside the burnt records.","焼けた記録の傍らで最後の命令を受けるセバスチャン。"],"빛에 비춰 보니 종이 뒤에 글자가 아른거리는데.":
["Hold it up to the light. There’s writing on the back, just visible.","光に透かすと、裏にうっすら文字が見える。"],"서커스단이라면…… 노아의 방주 서커스단인가?":
["A circus… You mean the Noah's Ark Circus?","サーカス……ノアの方舟サーカス団のことか？"],"성함을 모두 기억하셨습니다. 오늘은 그걸로 충분합니다.":
["You remembered everyone’s name. That is quite enough for today.","皆様のお名前を覚えておいででしたね。今日はそれで十分でございます。"],"송구스럽지만, 저는 아직 단 한 푼도 받은 적이 없습니다.":
["I do beg your pardon, but I’ve yet to receive a single penny.","恐縮ですが、私はまだ一ペニーたりともいただいておりません。"],"시내에 들르실 곳이 하나 더 남지 않으셨습니까?":
["Was there not one more call you meant to make in town?","市内にもう一か所、お立ち寄りの先がおありでは？"],"시엘이 서류에서 눈을 떼지 않고 잔을 받는다.":
["Ciel takes the cup without looking up from his papers.","シエルは書類から目を離さず、カップを受け取る。"],"시엘이 위독합니다. 당분간 곁에서 돌봐야겠습니다.":
["Ciel is gravely ill. I must stay with him for the time being.","シエルは危険な状態です。しばらくはそばについておかねばなりません。"],"신용 한도를 넘겨 채권단이 가문의 결산을 요구했습니다.":
["The family exceeded its credit limit. Its creditors have demanded a final accounting.","信用限度額を超えたため、債権者たちがファントムハイヴ家に最終的な収支報告を求めました。"],"심사위원이 팬텀사의 견본 옆에 상장을 놓습니다.":
["The judge lays a certificate beside Funtom’s sample.","審査員がファントム社の見本の横に賞状を置きます。"],"아직 손님이 앉기 전입니다. 의자를 다시 당기지요.":
["Your guest has yet to sit down. Let us draw the chair out once more.","お客様はまだお掛けになっておられません。もう一度、椅子をお引きしましょう。"],"아직 안 졌어. 그런데 체스판을 왜 하나 더 샀지?":
["I haven’t lost yet. Why have you bought another chessboard?","まだ負けてない。それより、なぜもう一つチェス盤を買った？"],"알고 있어. 심사가 끝났다고 손님까지 돌아가신 건 아니니까.":
["I know. The judging is over, but our guests are still here.","分かっている。審査が終わっても、お客様はまだいらっしゃるんだ。"],"알아. 다음에는 박수를 받는 쪽도 바뀔 수 있겠지.":
["I know. Next time, perhaps you'll be the one applauding me.","分かってる。次は拍手を受ける側が入れ替わるかもしれないな。"],"어라? 제 열쇠는 여기 있는데 온실 문이 열려 있네요?":
["Huh? I’ve got my key right here. How’s the greenhouse already open?","あれ？　僕の鍵、ここにあるのに。どうしてもう温室が開いてるんですか？"],"에드워드가 손님들을 대하는 데는 더 익숙하군.":
["Edward is more practised at looking after guests.","客の相手はエドワードの方が慣れているな。"],"연도 두 개가 뒤바뀌었습니다. 연표에 표시해 두겠습니다.":
["Two years have been transposed. I shall mark them on the timeline.","二つの年が入れ替わっています。年表に印をつけておきましょう。"],"열이 내렸습니다. 다음 일정은 아침 식사 뒤에 시작하지요.":
["Your fever has come down. Let us begin the next engagement after breakfast.","熱が下がりましたね。次の予定は朝食の後にいたしましょう。"],"예. 돌아가시면 곧바로 검토하실 수 있게 준비하겠습니다.":
["Very good. I shall have them ready for you to review as soon as you return.","かしこまりました。お戻り次第お目通しいただけるよう、整えておきます。"],"오늘 복도가 너무 조용해. ⋯라고 에밀리가 말했어.":
["The hall is too quiet today. …says Emily.","今日の廊下は静かすぎる。……ってエミリーが言ってる。"],"오늘은 내 시계로 재. 먼저 둘지 말지는 네가 정해.":
["We’ll use my watch today. Whether you move first is up to you.","今日は僕の時計で計る。先に指すかどうかはお前が決めろ。"],"오늘은 내가 이겼네. 다음에도 같이 나올 거지, 시엘?":
["I won today. You’ll enter with me next time too, won’t you, Ciel?","今日は私の勝ちね。次も一緒に出てくれるでしょう、シエル？"],"오늘은 활을 내려놓고 리듬만 짚어 보지요.":
["Let us put the bow down and mark out just the rhythm today.","今日は弓を置いて、リズムだけ取ってみましょう。"],"오후 두 시엔 바구니를 반 뼘만 옮겨 줘.":
["At two in the afternoon, move the basket just half a handspan.","午後二時に、籠を手の幅の半分だけずらしてね。"],"올해는 이 정도면 돼. 차는…… 한 잔 더 줘.":
["That’s enough for this year. The tea, though… I’ll have another cup.","今年はこれで十分だ。紅茶は……もう一杯くれ。"],"올해도 같이 나올 줄 알았어. 자, 종이 울린다!":
["I knew you'd enter with me again this year. Listen, there's the bell!","今年も一緒に出てくれると思ってたわ。ほら、鐘よ！"],"왕실은 작위 승인을 보류했습니다. 금고에 남은 돈은":
["The Crown has deferred its decision on your title. The treasury holds","王室は爵位の承認を保留しました。金庫に残っているのは"],"왕진 시 컨디션 +24 · 대출은 월 £24씩 상환":
["Doctor's visit: Condition +24. Loan repayment: £24 per month.","往診で体調＋24 · 借入金は月£24ずつ返済"],"왼쪽으로만 도는 수레입니다. 자를 다시 대 보십시오.":
["This cart only turns left. Measure it again, if you please.","左にばかり曲がる台車ですね。もう一度、定規を当ててご覧ください。"],"은 다음 겨울에도 도련님의 지시를 따르겠다고 전했습니다.":
[" pledged to follow the young master's orders next winter as well. ","は来年の冬も坊ちゃんの指示に従うと伝えました。"],"음악보다 한 걸음 앞서셨습니다. 잠시 멈추지요.":
["You’re a step ahead of the music. Let us pause a moment.","音楽より一歩早く出てしまわれましたね。少し止まりましょう。"],"이 단어는 지난겨울에 읽으신 편지에도 있었지요.":
["You came across this word in a letter last winter, too.","この単語は昨冬お読みになった手紙にも出てきましたね。"],"인사 각도는 좋았습니다. 이번엔 문 쪽을 보십시오.":
["The depth of your bow was just right. Now turn your gaze to the door.","お辞儀の角度は結構でした。今度は扉の方をご覧ください。"],"작별 인사를 건네기엔 손님의 찻잔이 가득합니다.":
["A little early for goodbyes. Your guest’s teacup is still full.","お別れのご挨拶には早うございます。お客様のカップには、まだお茶がたっぷりと。"],"잠깐만. 심사위원에게 한 가지만 묻고 갈 거야.":
["One moment. I have a question for the judge before we leave.","少し待て。帰る前に一つだけ審査員に聞いておきたい。"],"쟁반은 가져가도 좋아. 영수증은 놓고 가.":
["Take the tray. Leave the receipts.","盆は持っていっていい。領収書は置いていけ。"],"전표는 이게 다야? ……됐어. 있는 만큼만 올려.":
["Are these all the delivery slips? …Very well. Lay out what we have.","納品伝票はこれで全部か？　……いい。ある分だけ出せ。"],"정말 입이 벌어지네. 한 번만 더 눌러 봐.":
["It really does open its mouth. Squeeze it once more.","本当に口が開くんだな。もう一度押してみろ。"],"제 몫의 품삯까지 넣어 두셨군요, 도련님.":
["You’ve even included my wages, my lord.","私の賃金まで入れてくださったのですね、坊ちゃん。"],"제가 손을 떼었는데도 말이 같은 걸음으로 돌아왔습니다.":
["Even after I let go, the horse came round at the same pace.","私が手を放しても、馬は歩調を変えずに戻ってきましたね。"],"제값은 하는군. 다음번엔 네 진짜 이름도 사 주지.":
["Worth the price. Next time I’ll buy your real name too.","値段分の価値はあったな。次はお前の本名も買ってやる。"],"지난 주문서도 가져왔습니다. 장부부터 보셔도 좋습니다.":
["I've brought the earlier orders as well. You're welcome to start with the ledger.","以前の注文書もお持ちしました。台帳からご覧いただいても結構です。"],"체온계를 여기 두겠습니다. 오늘 남은 일은 제가 물리겠습니다.":
["I shall leave the thermometer here and put off the rest of today’s engagements.","体温計はこちらに置いておきます。本日の残りのご用は私がお断りしてまいります。"],"체크메이트. 네 몫은 네가 지킨 폰으로 해.":
["Checkmate. You can have the pawn you went to such trouble to protect.","チェックメイト。お前の取り分は、お前が守ったそのポーンだ。"],"축하해, 시엘. 오늘의 찻숟가락은 네 것이군.":
["Congratulations, Ciel. Today's teaspoon is yours.","おめでとう、シエル。今日のティースプーンは君のものだ。"],"타나카가 휴직을 마치고 저택 서재로 돌아왔다.":
["When his leave ended, Tanaka returned to the study at the manor.","休職を終えたタナカが、屋敷の書斎に戻ってきた。"],"팬텀하이브 가 당주, 시엘 팬텀하이브로서.":
["As Ciel Phantomhive, head of House Phantomhive.","ファントムハイヴ家当主、シエル・ファントムハイヴとして。"],"푸른 유료표 오십 장과 흰 초대권 오십 장":
["fifty blue paid tickets and fifty white invitations","青い有料券五十枚と白い招待券五十枚"],"피니, 장미마다 왜 천 조각을 묶어 놨지?":
["Finny, why have you tied bits of cloth to all the roses?","フィニ、なぜどのバラにも布切れが結んである？"],"하지만 내 주방에선 태우지 마. 이건 명령이야.":
["In my kitchen, you will burn nothing. That's an order.","だが僕の厨房では焦がすな。これは命令だ。"],"한 바퀴면 충분합니다. 오늘은 평보로 끝내지요.":
["One circuit will suffice. We shall finish at a walk today.","一周で十分でございます。今日は常歩で終えましょう。"],"한 시간 더 뻐긴다고 금고 안 사정이 달라지나?":
["Would another hour’s stalling make any difference to what’s in the safe?","一時間粘ったところで、金庫の中身が変わるのか？"],"해가 졌으면 등불을 켜면 될 일이야. 준비해.":
["Then we’ll light a lamp. Get ready.","日が暮れたら灯りをつければいい。支度しろ。"],"활이 멎자 처음으로 응접실의 시계 소리가 들립니다.":
["Only when the bow falls still can you hear the drawing-room clock.","弓が止まって初めて、応接間の時計の音が耳に届く。"],"· 각 분야 한 과목의 실기 합격 뒤 같은 과목 2회 수강":
[" · Pass a practical in one subject in each field, then take that subject twice more"," · 各分野で1科目の実技に合格し、同じ科目をさらに2回受講"],"“도련님께서 그렇게 말씀하실 줄 알고 다음 교본을 준비해 두었습니다.”":
["“I thought you might say that, my lord. I have the next textbook ready.”","「そうおっしゃると思い、次の教本をご用意しておきましたよ、坊ちゃん」"],"… 쟁반은 가져가도 좋아. 영수증은 놓고 가.":
["…Take the tray. Leave the receipts.","……盆は持っていっていい。領収書は置いていけ。"],"…듣고 보니 일리 있네!! 그럼 내가 뭘 하면 돼?":
["…You make a good point! All right, what do I do?","……なるほど、一理あるな！　それで、俺は何をすればいい？"],"걸음이 자꾸 짧아집니다. 의자는 제가 가져오겠습니다.":
["Your steps are growing shorter. I shall fetch a chair.","歩幅がだんだん狭くなっております。椅子をお持ちします。"],"게임 속 사건과 인물의 행적은 허구이며 현실과 무관합니다.":
["The events depicted in this game and the actions of its characters are fictional and bear no relation to real events.","ゲーム内の事件や登場人物の行動はフィクションであり、現実とは関係ありません。"],"고마워. 그래도 이건 스네이크가 직접 건네고 싶대.":
["Thank you. But Snake would like to deliver this one himself.","ありがとう。でも、これだけはスネークが自分で渡したいんだって。"],"그 조용한 손님에게서 웃음을 끌어내셨군요.":
["You coaxed a smile from that quiet guest, I see.","あの物静かなお客様の笑顔を引き出されましたね。"],"글쎄요. 도련님께서 아직 돌아가시라는 말씀을 안 하셔서.":
["Well, my master hasn’t told me to go home yet.","さあ。坊ちゃんからはまだ、帰れとのお言葉をいただいておりませんので。"],"길모퉁이 둘이 같은 모양입니다. 방향을 다시 표시하지요.":
["Those two street corners look alike. Let us mark the direction again.","二つの街角はよく似ています。改めて方角を記しましょう。"],"날짜는 맞습니다. 거래처별로 한 번 더 나누지요.":
["The dates are correct. Now let us sort them by trading partner.","日付は合っています。今度は取引先別に分けましょう。"],"년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF":
[" · June, Queen Victoria’s Golden Jubilee · The family’s participation is fictional","年6月 ヴィクトリア女王即位50周年 · 一家の参加はIF"],"놈이 내 돈을 단 한 푼이라도 축내는 곳 끝까지.":
["Wherever he goes, so long as he’s spending even a penny of my money.","奴が僕の金を一ペニーでも使うなら、どこまででもだ。"],"눈에 띄는 곳에 새길수록 큰 힘을 쓸 수 있습니다.":
["The more conspicuous the mark, the greater the power you can wield.","目立つ場所に刻むほど、大きな力を振るえます。"],"다시 한 번만. 교회 종이 울릴 때 첫 음을 놓쳤어.":
["Once more. I missed my first note when the church bell rang.","もう一度だけ。教会の鐘で最初の音を外した。"],"단계마다 수요 +2개 · 판매품당 포장 수익 +£1":
["Per level: demand +2 units and +£1 packaging income per item sold","各段階で需要＋2個、販売1個あたり包装収入＋£1"],"도련님, 돌아가시면 원고부터 함께 살펴보시겠습니까?":
["When we return, my lord, shall we begin by going over the manuscript together?","坊ちゃん、お戻りになりましたら、まずはご一緒に原稿を確認いたしましょうか？"],"돈을 뿌렸으면 이름값은 해야지. 오늘은 몇이나 기다려?":
["If I’ve spent that much, I’d better live up to my reputation. How many are waiting today?","金を撒いたんだ、評判に見合う仕事はしないとな。今日は何人待ってる？"],"돌아갈 곳이 없으면 여기로 와. 일손이 하나 필요하거든.":
["If you’ve nowhere to go, come here. I could use another pair of hands.","帰るところがなければ、ここへ来い。ちょうど一人、人手がいるんだ。"],"두 달 이상 유예하면 교육 효율과 가문 명성이 낮아집니다.":
["Deferring upkeep for two months or longer reduces lesson effectiveness and family reputation.","2か月以上手入れを見送ると、授業の効果と家の名声が下がります。"],"뜻은 통했습니다. 마지막 어미를 한 번 더 읽어 보시지요.":
["Your meaning was clear. Would you read the ending of that last word once more?","意味は通じました。最後の語尾をもう一度お読みください。"],"마지막 장소에 닿을 즈음이면 해가 뚝 떨어지겠습니다.":
["It will be quite dark by the time we reach the last one.","最後の場所に着く頃には、すっかり日も暮れましょう。"],"맞아. 다음에도 봐주지 않을 테니까 또 같이 나와 줘!":
["That's right! I won't go easy on you next time either, so enter with me again!","そうよ！　次も手加減しないから、また一緒に出てね！"],"먹을만한 걸 만들어도 이젠 드셔 줄 도련님이 없네.":
["Even if I cook something worth eating now, the young master isn’t here to eat it.","せっかく食えるもんが作れても、もう食ってくれる坊ちゃんがいねえんだよな。"],"뭐? 이봐, 너희가 먼저 저 애 멱살을 잡았어?":
["What? Hey, were you the ones who grabbed the boy by the collar first?","何だって？　おい、先にあの子の胸ぐらをつかんだのはお前たちなのか？"],"바퀴는 굴러갑니다. 손잡이는 조금 더 다듬지요.":
["The wheels turn. The handle could use a little more smoothing.","車輪は回ります。持ち手をもう少し滑らかに仕上げましょう。"],"발이 등자에서 두 번 빠졌습니다. 안장부터 다시 보지요.":
["Your foot slipped out of the stirrup twice. Let us check the saddle first.","足が二度、鐙から外れました。まず鞍を確かめ直しましょう。"],"병마개의 맛표와 시식 결과에 맞춰 종이표를 바꾼다":
["Change the paper labels to match the flavour marks on the stoppers and the results of the tasting","栓の味札と味見の結果に合わせ、紙札を取り替える"],"복도 끝 방에서 새로 다린 리넨 냄새가 납니다.":
["The room at the end of the corridor smells of freshly pressed linen.","廊下の突き当たりの部屋から、アイロンをかけたばかりのリネンが香る。"],"새 장갑은 됐어. 단추만 다시 달면 쓸 수 있어.":
["I don't need new gloves. Sew the button back on and they'll do.","新しい手袋はいらない。ボタンを付け直せば使える。"],"서명을 받았으니 배달은 끝났다고 거래처에 알린다":
["Tell the shopkeeper the signed receipt completes the delivery","署名があるので配達は済んだと店主に伝える"],"손님, 이걸론 못 타요. 날짜가 몇 년 전 것인데.":
["You can’t travel on this, sir. It’s years out of date.","お客さん、これじゃ乗れませんよ。何年も前の日付だ。"],"손님에게 먼저 인사를 건네고 대답이 끝날 때까지 기다립니다.":
["He greets the guest first, then waits until they have finished their reply.","客に自分から挨拶をし、返事が終わるまで待つ。"],"손님은 저녁상에 오른 요리로도 그 집을 평합니다.":
["A house is judged in part by the dinner it sets before its guests, my lord.","晩餐にどのような料理が並ぶかも、お客様がその家を見定める基準の一つでございます。"],"손님이 둘인데 네 역할도 둘이야? 꽤 바쁘겠군.":
["Two guests, and you’re playing both? You’ll have your hands full.","客が二人で、お前が一人二役か？　さぞ忙しいことだろうな。"],"시엘 앞에 무릎을 꿇고 고개를 숙인 세바스찬":
["Sebastian kneeling with his head bowed before Ciel","シエルの前にひざまずき、頭を垂れるセバスチャン"],"시엘! 런던에 오거든 내 쪽에도 꼭 들러라!":
["Ciel! Come and see me when you’re in London!","シエル！　ロンドンに来たら俺のところにも顔を出せよ！"],"아그니 씨. 혹시 내일도 이 시간에 뵐 수 있을까요?":
["Mr Agni, might I see you here at the same time tomorrow?","アグニさん。明日もこの時間にお会いできますか？"],"아까 문이 열리길래 네가 온 줄 알았어, 시엘.":
["When the door opened a little while ago, I thought it was you, Ciel.","さっき扉が開いた時、シエルが来たのかと思ったの。"],"영수증 한 장만 남았습니다. 내일 이 줄에서 시작하지요.":
["Only one receipt remains. Tomorrow we shall begin on this line.","残る領収書はあと一枚。明日はこちらの行から始めましょう。"],"이 문장의 주어를 바꾸면 동사의 어느 부분이 달라집니까?":
["If you change the subject of this sentence, which part of the verb changes?","この文の主語を変えると、動詞のどの部分が変わりますか？"],"이 은쟁반은 경매에 부치면 제법 값을 받겠습니다.":
["This silver tray ought to fetch a tidy sum at auction.","この銀盆なら競売で相当の値がつきますな。"],"이번 달 석탄값은 얼마지? 지난달 영수증도 가져와.":
["What did the coal cost this month? Bring me last month's receipt as well.","今月の石炭代はいくらだ？　先月の領収書も持ってこい。"],"이번에는 악사 쪽을 보지 않고도 박자를 맞추셨군요.":
["This time you kept time without so much as a glance at the musicians.","今度は楽士の方をご覧にならずとも、拍をお取りになれましたね。"],"작은 사장님께서 직접 화물을 보러 납실 줄은 몰랐습니다.":
["I wasn’t expecting the young proprietor to come and see the cargo in person.","若い社長さん自ら荷を見においでとは、思いませんでしたな。"],"잘했어, 시엘. 내 잔에도 조금만 더 따라 주겠나?":
["Well done, Ciel. A little more in my cup, if you please?","よくやった、シエル。僕のカップにも、もう少し注いでくれないか？"],"전에 계시던 가정교사에게 연락을 넣어도 되겠습니까?":
["Shall I send for your former tutor?","以前の家庭教師に連絡を入れてもよろしいですか？"],"제 구두는 괜찮습니다. 왼발부터 다시 하시지요.":
["My shoes are quite all right. Let us try again, starting with the left foot.","私の靴ならご心配なく。左足からもう一度まいりましょう。"],"좋아. 그렇다고 다음 경연에서도 네 뒤만 따라다닐 생각은 없어.":
["Very well. Though I don't intend to trail after you in the next competition.","いいだろう。次の競技でもお前の後ろばかりついて回るつもりはないがな。"],"지병이 깊어져 도련님께서 자리를 뜨기 어렵습니다.":
["The young master’s illness has worsened. He can scarcely leave his bed.","持病が悪化し、坊ちゃんは寝床を離れることも難しいご様子です。"],"찌그러진 통을 바꿔 주고 보관 자리를 옮긴다":
["Replace the dented tin and find a new place to keep it","へこんだ缶を取り替え、置き場所を変える"],"차는 침실로 올리겠습니다. 오늘은 어느 서류를 물릴까요?":
["I shall bring your tea to the bedroom. Which papers would you like me to set aside today?","お茶は寝室にお持ちいたします。今日はどの書類を後回しになさいますか？"],"창고에서 열일곱 번 칸을 옆 칸과 맞바꾼다":
["Swap stockroom bin seventeen with the one beside it","倉庫の十七番の棚と隣の棚の中身を入れ替える"],"창문은 조금 열어 둘게. 우리가 먼저 네가 오는 걸 알아채게.":
["I’ll leave the window open a crack so we’ll be the first to hear you come.","窓を少し開けておく。俺たちが真っ先に帰りに気づけるように。"],"천막에선 뱀을 돌봤어. 여기선 뭘 하면 돼?":
["At the circus I looked after the snakes. What would I do here?","テントでは蛇の世話をしてた。ここでは何をすればいい？"],"추천서 원본과 두 영수증을 맞춰 상회 대표를 지목한다":
["Compare the original letter of recommendation with both receipts to identify the firm’s representative","推薦状の原本と二枚の領収書を突き合わせ、商会の代表を名指しする"],"크하하, 진짜 마시네! 한 잔 더 갖다 놓죠!":
["Ha! You really drank it! I’ll bring you another cup!","ハハッ、本当に飲んでくれた！　もう一杯持ってきますよ！"],"팔 수 있는 물량이 부족해 이달 추가 매출은 £0입니다.":
["Too few units are available to sell. Extra revenue this month is £0.","販売できる数量が不足しているため、今月の追加売上は£0です。"],"하면, 제가 대신 가정교사 일을 맡아도 되겠습니까?":
["Then may I take on the tutor’s duties myself?","それでは、私が家庭教師を務めてもよろしいでしょうか？"],"한 닢을 어디 감췄는지만 물으면 시험이 안 되겠지.":
["I suppose it wouldn’t be much of a test if all I had to do was ask where you’d hidden the tenth coin.","十枚目をどこに隠したか聞くだけでは、試験にならないな。"],"회랑에서 시엘의 뒷모습을 지켜보는 세바스찬":
["Sebastian watching Ciel walk away down the corridor","回廊でシエルの後ろ姿を見送るセバスチャン"],"후, 살았다. 이제 당분간 조용히 지낼 수 있겠지.":
["Whew. That's a relief. I may get a little peace and quiet now.","ふう、助かった。これでしばらくは静かに暮らせそうだ。"],"……아그니 씨. 혹시 내일도 이 시간에 뵐 수 있을까요?":
["…Mr Agni. Might I see you here at the same time tomorrow?","……アグニさん。明日もこの時間にお会いできますか？"],"……잘했어, 시엘. 내 잔에도 조금만 더 따라 주겠나?":
["…Well done, Ciel. A little more in my cup, if you please?","……よくやった、シエル。僕のカップにも、もう少し注いでくれないか？"],"……정말 입이 벌어지네. 한 번만 더 눌러 봐.":
["…It really does open its mouth. Squeeze it once more.","……本当に口が開くんだな。もう一度押してみろ。"],"…후, 살았다. 이제 당분간 조용히 지낼 수 있겠지.":
["…Whew. That's a relief. I may get a little peace and quiet now.","……ふう、助かった。これでしばらくは静かに暮らせそうだ。"],"견본은 받았습니다. 납품일은 서신으로 확인하지요.":
["We have the sample. I shall confirm the delivery date by letter.","見本は頂戴しました。納期は書面で確かめましょう。"],"고삐를 짧게 쥐고 울타리를 따라 한 바퀴 돕니다.":
["He takes a short hold on the reins and rides a circuit along the fence.","手綱を短く持ち、柵に沿って一周する。"],"골목의 발자국을 살핀 뒤 수첩에 현장 약도를 그립니다.":
["After studying the footprints in the alley, he sketches the scene in his notebook.","路地の足跡を調べ、手帳に現場の略図を描く。"],"그 눈동자―, 도련님을 위해 써보지 않겠습니까?":
["Those eyes of yours… would you care to put them to use for my master?","その目を――坊ちゃんのために役立ててみませんか？"],"그날 밤, 누구한테 개찰을 맡기고 자리를 떴지?":
["That night, who took over at the ticket gate when you left?","あの晩、誰に改札を任せて持ち場を離れた？"],"그래. 한 잔만 더. 그동안은 서류도 그대로 두자고.":
["Very well. One more cup. The papers can wait until I’ve finished it.","そうだな。もう一杯だけ。その間は書類もそのままだ。"],"그러니까 갈 만한 구멍을 세 군데나 짚어 놨잖아.":
["Which is why I’ve marked three holes he might have crawled into.","だから、潜り込みそうな穴を三つも挙げておいたんだろう。"],"네 앞으로 빼 둔 물건이 하나 있어. 장부에는 적지 않았지.":
["There’s an item I set aside for you. I never entered it in my books.","君のために取り置いた品が一つあるんだ。帳簿にはつけなかったよ。"],"네 축사도 잘 들었어. 다음에도 함께 겨뤄 볼 만하겠군.":
["I enjoyed your speech too. It would be worth competing again.","お前の祝辞もよかった。次も腕を競う甲斐がありそうだ。"],"네가 듣겠다고 했으니까. 대충 연습할 수는 없잖아.":
["You said you'd be listening. I could hardly skimp on practice.","お前が聴くと言ったんだ。いい加減な練習で済ませるわけにはいかないだろう。"],"네가 봐주지 않겠다고 했잖아. 나도 준비는 해야지.":
["You said you weren't going to go easy on me. I had to come prepared.","お前が手加減しないと言ったんだ。僕だって準備くらいするさ。"],"다음에 들르면 차 한 잔은 내가 내지. 내가 쏘는 거야.":
["Next time you call, the tea’s on me. My treat.","また寄ったら、お茶を一杯出そう。私のおごりだよ。"],"도라의 이름을 완성해 주려면 가게에서는 어디까지 확인해야 할까?":
["How far should the shop take its enquiries so Dora can spell her name?","ドーラが自分の名前を完成させられるよう、店ではどこまで調べるべきだろう？"],"도련님 접시는 요 뚜껑 밑에! 탄내 없이 따끈합니다.":
["Your plate’s under this lid, young master! Piping hot, and not a whiff of smoke.","坊ちゃんの分はこの蓋の下だ！　焦げ臭くもねえ、熱々だぜ。"],"도련님, 바닥이 젖었어요! 제가 먼저 지나가 볼게요!":
["Young master, the floor’s wet! I’ll go first!","坊ちゃん、床が濡れてます！　僕が先に通ってみますね！"],"도련님이 표시하신 축을 고치니 바퀴가 끝까지 돌아갑니다.":
["We repaired the axle you marked, my lord. The wheels can now turn all the way round.","坊ちゃんがお示しになった車軸を直すと、車輪が最後まで回るようになりました。"],"두 번째 종합 실기 완료 · 주력 과목의 심화 수련 해금":
["Second comprehensive practical completed · Advanced training unlocked in your main subject","第2回総合実技修了 · 重点科目の上級訓練を解放"],"두 집의 가격을 받아 적으셨군요. 돌아가서 대조하겠습니다.":
["You wrote down prices from two firms. We can compare them on our return.","二軒分の値段を控えられましたね。戻ってから照らし合わせましょう。"],"런던 타운하우스 · 소마와 아그니가 맞이한 방문객":
["London townhouse · A visitor welcomed by Soma and Agni","ロンドンのタウンハウス・ソーマとアグニが迎えた訪問者"],"로열 워런트 · 왕실 납품 인증 · 월 수요 +2개":
["Royal Warrant · Approved supplier to the Crown · Monthly demand +2 units","ロイヤルワラント · 王室御用達認定 · 月間需要＋2個"],"리본이 걸렸군. 실례합니다. 잠깐 제가 풀어도 될까요?":
["The ribbon has caught. Excuse me. May I undo it for you?","リボンが引っかかったか。失礼、少し僕にほどかせていただけますか。"],"매표 수입이 예상의 절반으로 나온 까닭은 뭘까?":
["Why were the ticket takings only half what the owner expected?","入場料の収入が見込みの半分だったのはなぜだろう？"],"맨 앞의 사내가 시엘의 옷깃을 움켜쥐었다.":
["The man in front seized Ciel by the collar.","先頭の男がシエルの襟をつかんだ。"],"문을 닫았군요. 다음번엔 영업시간부터 묻지요.":
["They’re closed. Next time let us enquire about their hours first.","閉まっておりますね。次は最初に営業時間を伺いましょう。"],"빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장":
["twelve red crest cards and twelve blue key cards","赤い紋章札十二枚と青い鍵札十二枚"],"상대에게도 입을 열 틈을 주셔야지요, 도련님.":
["Do give the other person a chance to speak, my lord.","坊ちゃん、お相手が口を開く間もお取りください。"],"설비와 제작 기록까지 준비하겠습니다. 어느 부분부터 검토하시겠습니까?":
["I shall have the equipment and production records ready as well. Where would you like to begin your review?","設備と製作の記録もご用意いたしましょう。どこからお調べになりますか。"],"세바스찬은 태연히 반대쪽 장갑의 단추를 풀었다.":
["Sebastian calmly unbuttoned the other glove.","セバスチャンは涼しい顔でもう片方の手袋の釦を外した。"],"손끝으로 가장자리를 따라가 보십시오. 거기까지 손으로 마감했습니다.":
["Run your fingertip along the edge. Even that was finished by hand.","どうぞ指先で縁をなぞってください。そこまで手で仕上げてあります。"],"손님의 명함 가장자리가 접혀 있습니다. 오늘 방문의 뜻이 거기에 있습니다.":
["The guest has folded the edge of the calling card. That fold tells you the purpose of today’s visit.","客の名刺は端が折られている。その折り方に、今日の訪問の意味がある。"],"손님이 인사를 맺을 때까지 기다리셨군요, 도련님.":
["You waited until your guest had quite finished the greeting, my lord.","お客様がご挨拶を終えるまでお待ちになりましたね、坊ちゃん。"],"손님이 장갑을 떨어뜨린 사이에도 소개가 끊기지 않았습니다.":
["Even a guest dropping a glove didn’t interrupt your introductions.","お客様が手袋を落とされても、ご紹介を途切れさせませんでしたね。"],"손잡이를 한번 돌려 보시지요. 인사가 끝날 때까지요.":
["Give the crank a turn, if you please. Watch until the figure has finished its bow.","どうぞハンドルをひと回し。人形がお辞儀を終えるまでご覧ください。"],"스콘은 따뜻할 때 반으로 갈라야 버터가 스며들지.":
["Split a scone while it's warm so the butter soaks in.","スコーンは温かいうちに半分に割ると、バターがしみ込むよ。"],"시엘은 반쪽짜리 표를 조끼 주머니에 찔러 넣었다.":
["Ciel tucked the half-ticket into his waistcoat pocket.","シエルは半券をチョッキのポケットに押し込んだ。"],"시엘의 오른쪽 눈동자에 보랏빛 계약인이 맺힌다.":
["A violet contract seal appears in Ciel’s right eye.","シエルの右目に紫の契約印が浮かび上がる。"],"시엘이 손을 내밀자 흰 장갑이 이미 그 위에 놓였다.":
["The moment Ciel held out his hand, a white glove was already resting on it.","シエルが手を差し出すと、もうその手に白い手袋が載っていた。"],"어딘가에 팬텀하이브 가를 파멸시키려는 자가 있어.":
["Someone out there means to destroy the House of Phantomhive.","どこかにファントムハイヴ家を滅ぼそうとしている者がいる。"],"여기에. 내 생일인데 자꾸 네가 먼저 정하게 둘 순 없잖아.":
["Here. It’s my birthday. I can’t keep letting you make all the decisions before I do.","ここに。僕の誕生日だぞ。何もかもお前に先に決めさせるわけにはいかない。"],"영지를 돌려달라는 탄원서는 책상 위에 그대로 버려두었다.":
["He left the petition for the return of his lands lying on the desk.","領地返還の嘆願書は、机に置き去りにした。"],"예, 도련님. 첫 조각은 어느 접시에 덜어 드릴까요?":
["Certainly, my lord. Which plate shall have the first slice?","かしこまりました、坊ちゃん。最初の一切れはどちらのお皿に？"],"예전에 천식을 앓은 적이 있습니까? 아주 어릴 때라도요.":
["Has he ever had asthma? Even in early childhood?","以前に喘息を患ったことは？　ごく幼い頃でも結構です。"],"오 분만 더 기다려 달라고 하면 배고프다고 성질을 내셨죠.":
["Whenever I asked for five more minutes, you’d snap that you were hungry.","あと五分待ってくれって言うと、腹が減ったって怒ったもんだ。"],"오늘은 목차까지만 정리해 두지요. 다음 장은 이어집니다.":
["Let us put the contents page in order and leave it there for today. We can begin the next chapter another time.","今日は目次を整えるところまでにいたしましょう。次の章はまた改めて。"],"왕실 서신에 답하거나 납품 인증으로 신임을 얻으세요.":
["Earn the Crown's trust by answering royal letters or securing a royal warrant.","王室の書簡に返事をするか、王室御用達の認定を受けて信任を得ましょう。"],"우리 견본은 내가 가져가지. 심사표는 네가 챙겨.":
["I'll take our sample. You take the judging sheet.","うちの見本は僕が持つ。審査表はお前が持ってくれ。"],"원작 연구소 탈출 · 첫 만남과 명명 / 게임 달력에 배치":
["Manga episode: escape from the laboratory, first meeting and naming · Placed on the game calendar","原作の研究所脱出、出会いと命名・ゲームの暦に合わせて配置"],"원작의 서재 면담 · 메이린 합류 뒤 게임 달력에 배치":
["The study interview from the manga · Scheduled after Mey-Rin joins in the game","原作の書斎での面談・ゲームではメイリン加入後に配置"],"월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.":
[" · A special investiture will be held at Buckingham Palace on the seventeenth at ten in the morning.","月17日午前10時、バッキンガム宮殿にて特別叙勲式を執り行います。"],"응! 중간에 음악이 끊겨도 내가 돌 때 손 받아 줄 수 있어?":
["Yes! Even if we lose the music halfway through, can you catch my hand when I turn?","そう！　途中で曲が聞こえなくなっても、私が回ったら手を取ってくれる？"],"이 품목의 다음 주문도 준비해. 증서를 받은 뒤가 더 중요하니까.":
["Prepare for the next order of this item too. What we do after receiving the warrant matters more.","この品の次の注文にも備えろ。認定証を受け取ってからの方が大事だからな。"],"이건 앵초야. 잎을 뒤집어 보면 털이 있으니까.":
["This one's a primrose. See the hairs on the underside of the leaf?","これはサクラソウだ。葉を裏返せば、毛があるだろう。"],"이라 아무한테나 맡길 수 없는 일이지. 할 수 있겠어?":
["I can’t entrust it to just anyone. Think you’re up to it?","誰にでも任せられる仕事じゃない。お前にできるか？"],"이번 견본에는 도련님께서 직접 값을 매겨 보시지요.":
["Perhaps you would care to price this sample yourself, my lord.","今回の見本には、坊ちゃんご自身で値をつけてみてはいかがですか？"],"이봐! 문 열어 달라며? 그렇게 보고만 있으면 안에서 어떻게 알아!":
["Hey! You want someone to open up, don't you? How's anyone inside supposed to know if you just stare at the door?!","おい！　開けてほしいんだろ？　いくら扉をにらんだって、中の奴にはわからないぞ！"],"작년 생각나? 이번에는 내가 먼저 심사대에 갈 거야, 시엘!":
["Remember last year? This time I'll be first to the judges' table, Ciel!","去年のこと、覚えてる？　今度は私が先に審査台に着くわよ、シエル！"],"잘도 미끄러졌군. 그렇게 둬 봐. 두 수면 끝나.":
["How very obliging of it. Leave it there. Two moves and it’s over.","ずいぶん都合よく滑ったものだ。そのまま指してみろ。二手で終わる。"],"잠깐. 견본을 빛 쪽으로 좀 옮겨 주겠어?":
["Wait. Would you move the sample into the light?","待て。見本を明るい方へ移してくれるか？"],"잠깐. 그 잔은 이미 식었군. 새로 우려 오도록 해.":
["Wait. That cup’s gone cold. Have a fresh pot brought in.","待て。その紅茶はもう冷めている。新しく淹れ直してくれ。"],"제 경우처럼 개 이름을 물려받는 것보다는 백배 낫겠습니다만.":
["A hundred times better than inheriting the dog's name, as I did, I daresay.","まあ、私のように飼い犬の名を頂戴するよりは、百倍もよろしいかと。"],"좋아. 가장 그럴싸한 거짓말을 짠 놈부터 데려와.":
["Good. Bring me the one with the most convincing lie first.","いい。いちばんもっともらしい嘘を用意した奴から通せ。"],"지난 주문서까지 가져왔습니다. 어느 쪽이든 먼저 보시지요.":
["We've brought the earlier orders too. Start with whichever you wish.","以前の注文書もお持ちしました。どちらからでもご覧ください。"],"차를 한 잔 더 우리라고. 누구 몫인지는 묻지 말고.":
["Brew another cup. Don’t ask who it’s for.","お茶をもう一杯淹れておくれ。誰の分かは聞かないでね。"],"찾았습니다. 어릴 적에 여러 차례 심하게 앓으셨답니다.":
["I’ve found it. He had several severe attacks as a child.","見つけました。幼い頃、何度もひどい発作があったそうです。"],"철문이 열렸다. 아이들은 그저 묻고 싶은 게 있었을 뿐이었다.":
["The iron door opened. All the children wanted was to ask a question.","鉄の扉が開いた。子供たちは、ただ聞きたいことがあっただけだった。"],"첫 견본으로 충분합니다. 아이가 쥘 자리를 표시해 두겠습니다.":
["Quite sufficient for a first sample. I shall mark where a child would grip it.","最初の見本としては十分です。お子様が握る箇所に印をつけておきましょう。"],"추리소설의 범인 옆에 누군가 이름을 써 두었습니다.":
["Someone has pencilled a name beside the culprit in the detective novel.","推理小説の犯人のくだりに、誰かが名前を書き添えている。"],"컨디션이 좋지 않습니다. 다음 달에는 휴식이나 왕진을 고려하세요.":
["Ciel is unwell. Consider scheduling rest or a doctor’s visit next month.","体調が優れません。来月は休息か医師の往診を検討してください。"],"포장을 여실 때 이 끝을 당기시면 됩니다. 안쪽도 보시죠.":
["Pull this end to open the parcel. Do look inside as well.","包みを開けるには、この端をお引きください。どうぞ中もご覧ください。"],"1887년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF":
["Queen Victoria’s Golden Jubilee, June 1887 · The family’s participation is imagined","1887年6月、ヴィクトリア女王即位50周年・一家の参加はIF"],"3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.":
["A special investiture will be held at Buckingham Palace on the seventeenth of March at ten in the morning.","三月十七日午前十時、バッキンガム宮殿にて特別叙勲式を執り行います。"],"……그래. 한 잔만 더. 그동안은 서류도 그대로 두자고.":
["…Very well. One more cup. The papers can wait until I’ve finished it.","……そうだな。もう一杯だけ。その間は書類もそのままだ。"],"……리본이 걸렸군. 실례합니다. 잠깐 제가 풀어도 될까요?":
["…The ribbon has caught. Excuse me. May I undo it for you?","……リボンが引っかかったか。失礼、少し僕にほどかせていただけますか。"],"가까이서 보셔도 됩니다. 진열장에 놓인 것과 같은 물건입니다.":
["Do take a closer look. It’s the same item as the one in the display case.","どうぞ近くでご覧ください。陳列棚にあるものと同じ品です。"],"같은 줄을 세 번 읽으셨습니다. 제가 소리 내어 읽어 드리지요.":
["You’ve read that line three times. Allow me to read it aloud.","同じ行を三度お読みになりましたね。私が声に出してお読みしましょう。"],"겨울 아침의 빛이 팬텀하이브 저택의 창을 비춘다.":
["Winter morning light falls across the windows of Phantomhive Manor.","冬の朝日がファントムハイヴ邸の窓を照らしている。"],"견본과 납품분은 같은 규격입니다. 치수는 여기 적었습니다.":
["The sample and the goods we supplied meet the same specifications. I've noted the measurements here.","見本と納品分は同じ規格です。寸法はこちらに記しました。"],"고모님. 실례했습니다. 먼저 새해 인사를 드렸어야 했는데요.":
["Aunt. Forgive me. I ought to have wished you a happy New Year first.","叔母上。失礼しました。まず新年のご挨拶を申し上げるべきでした。"],"공방에도 알려 줘. 오늘만 이 규격으로 만들라고 한 적은 없다고.":
["Let the workshop know too. I never said these specifications were for today alone.","工房にも伝えろ。この規格で作れと言ったのは、今日の分だけじゃない。"],"그 돌덩이를? 세바스찬한테 수레라도 빌리지 그랬어.":
["That lump of rock? You could have borrowed a barrow from Sebastian.","あの石の塊を？　セバスチャンに手押し車でも借りればよかったのに。"],"그래서 일부러 피아노에서 제일 먼 자리까지 의자를 밀어 둔 거야?":
["Is that why you pushed the chairs as far from the piano as they’d go?","それでわざわざ、ピアノからいちばん遠い所まで椅子を押していったのか？"],"그럼 다음 곡도 기대할게. 나도 열심히 준비해 올 거야.":
["Then I'll look forward to your next piece too. I'll practise ever so hard myself.","じゃあ、次の曲も楽しみにしてる。私も一生懸命練習してくるわ。"],"그럼 다음에는 나랑 같이 연습하자. 곡은 내가 골라도 돼?":
["Then let's practise together next time. May I choose the piece?","それなら、今度は一緒に練習しましょう。曲は私が選んでもいい？"],"그쪽에도 있었구나. (;) 난 손수건 무늬인 줄 알았지.":
["Oh. There you are, too. I thought that was the pattern on the handkerchief.","……そっちにもいたのか。僕はてっきりハンカチの柄かと。"],"깨지기 전에 하나 집어. 봉투는 책갈피로 써도 돼.":
["Take one before it breaks. The little envelope makes a fine bookmark, too.","割れる前にひとつお取り。袋はしおりにもなるよ。"],"꽃잎 색은 같은데…… 이 둘의 표찰은 잠시 비워 두겠어.":
["The petals are the same colour… I'll leave these two labels blank for now.","花びらの色は同じだが……この二つの名札はひとまず空けておこう。"],"난 스네이크야. 장갑이 마음에 든 저 애는 와일드고.":
["I’m Snake. The one who’s taken a liking to your glove is Wilde.","俺はスネーク。あんたの手袋を気に入ったあの子はワイルドだ。"],"내가 조금 앞섰네. 네가 찾아낸 달걀들도 정말 귀엽다, 시엘!":
["I only just beat you. The eggs you found are so pretty, Ciel!","私の方がほんの少し上だったのね。シエルの見つけた卵も、本当に可愛いわ！"],"내가 한 입 먹을 때마다 눈치도 없이 새 접시를 내온 게 누군데":
["And who thought it a good idea to bring me another plate every time I took a bite?","僕が一口食べるたびに、気も利かせず新しい皿を出したのは誰だ？"],"너도 정원을 꼼꼼히 살폈더군. 다음에도 이렇게 겨뤄 보자.":
["You searched the garden thoroughly too. Let’s have another contest like this next time.","お前も庭をよく見ていたな。次もこうして競おう。"],"녹색 앞방에서 식장을 바라보는 마담 레드와 세바스찬":
["Madam Red and Sebastian watching the ceremony from the Green Drawing Room","緑の控えの間から式場を見守るマダム・レッドとセバスチャン"],"누가 도련님을 저격했습니다. 제법 눈이 좋은 손님이군요.":
["Someone has taken a shot at you, my lord. A visitor with quite an eye.","何者かが坊ちゃんを狙撃しました。なかなか目のよいお客様ですね。"],"답은 맞습니다. 어떤 구절이 근거인지 짚어 보시겠습니까?":
["Your answer is correct. Would you point out the passage that supports it?","答えは合っております。根拠となる一節を指していただけますか？"],"도련님, 숨을 고르실 때까지는 이 벤치를 비워 두겠습니다.":
["I shall keep this bench free until you’ve caught your breath, my lord.","坊ちゃん、息が整うまで、こちらのベンチを空けておきます。"],"도련님, 장터에 내놓을 물건을 고른다고 생각해 보십시오.":
["Imagine you’re choosing what to put on a market stall, my lord.","坊ちゃん、市で売る品を選ぶおつもりでお考えください。"],"도련님은 요양 중입니다. 예약한 수업료는 그대로 지급됩니다.":
["The young master is convalescing. Fees for lessons already booked are still payable.","坊ちゃんは療養中です。予約済みの授業料はそのまま支払われます。"],"도련님의 회중시계는 그날 새벽의 시각에 그대로 두었습니다.":
["I left your pocket watch at the hour it showed that dawn, my lord.","坊ちゃんの懐中時計は、あの日の明け方の時刻のままにしてございます。"],"도련님이 앉으시던 자리는 제가 매일 닦아 두겠습니다요.":
["I’ll dust the young master’s place every day, I will.","坊ちゃんがお座りだったところは、私が毎日磨いておきますだ。"],"두 분께 같은 자리를 권하셨습니다. 좌석표를 다시 드릴까요?":
["You offered the same seat to two guests. Shall I bring the seating plan again?","お二方に同じお席をお勧めになりましたね。もう一度、席次表をお渡ししましょうか？"],"마지막 선에서도 보폭이 같았습니다. 기록보다 호흡을 먼저 보셨군요.":
["You kept the same stride right up to the finish. You put your breathing ahead of your time.","ゴールまで歩幅が変わりませんでした。記録よりも呼吸を意識なさったのですね。"],"마지막 영수증까지 제자리에 있습니다. 내일은 이 원장부터 펴겠습니다.":
["Every receipt is in place, down to the last one. Tomorrow we shall begin with this ledger.","最後の領収書まで、きちんと収まっています。明日はこちらの元帳から開きましょう。"],"먼 길 와 주셔서 감사합니다. 돌아가실 때는 저희 마차를 쓰시지요.":
["Thank you for coming all this way. Please take our carriage home.","遠いところをお越しくださり、ありがとうございます。お帰りにはうちの馬車をお使いください。"],"물론이지. 그때는 네가 내게 박수를 칠 차례가 될 거야.":
["Of course. Next time it'll be your turn to applaud me.","もちろんだ。その時は君が僕に拍手を送る番だぞ。"],"반품 한 건까지 찾아내시다니. 경리에게도 보여 줘야겠습니다.":
["You even spotted the one return. I must show this to our bookkeeper.","返品の一件まで見つけられるとは。うちの帳簿係にも見せてやりたいものです。"],"반품도 매출에 넣으셨군요. 이 영수증은 빼겠습니다.":
["You’ve included a return in the sales. I shall take this receipt out.","返品も売上に入っておりますね。この領収書は外しておきます。"],"봉투랑 문패에 똑같은 이름이 있어. 이번엔 제대로 왔네.":
["The name on the envelope matches the one on the door. We've got the right house this time.","封筒と表札に同じ名前がある。今度は合ってるね。"],"서랍에 넣어 두면 장부를 펼칠 때마다 향이 날 거야.":
["Keep it in your drawer and you'll catch the scent every time you open your ledger.","引き出しに入れておくと、帳簿を開くたびに香るよ。"],"서쪽 창을 조금만 열어 둘까? 누가 오는지 우리가 먼저 알 수 있어.":
["Shall we leave the west window open a crack? Then we’ll be the first to know who’s coming.","西の窓を少し開けておこうか。誰が来たか、俺たちがいちばんに分かるぞ。"],"석 달 전이었으면 네 손에서 낚아채서라도 읽었을 거야.":
["Three months ago I’d have snatched it out of your hand to read it.","三か月前なら、お前の手から奪ってでも読んだだろうな。"],"세 칸을 모두 채우셨군요. 다음은 ‘자유행동’입니다.":
["All three slots are filled. Next comes Free Time.","三つの欄がすべて埋まりましたね。次は「自由行動」でございます。"],"세바스찬이 이발 가위를 들고 시엘의 머리를 다듬고 있다.":
["Sebastian trims Ciel’s hair with a pair of barber’s scissors.","セバスチャンが理髪用の鋏でシエルの髪を整えている。"],"셋입니다. 서로 얼굴 붉히지 않도록 전부 다른 문으로 들였습니다.":
["Three. I’ve shown them in through separate doors to spare them the embarrassment of meeting.","三人です。気まずいご対面とならぬよう、それぞれ別の扉からお通ししました。"],"수금 전표가 지출 쪽에 있습니다. 색실을 끼워 둘까요?":
["A receipt for money collected has been filed with the expenses. Shall I mark it with coloured thread?","入金伝票が支出の方にございます。色糸を挟んでおきましょうか？"],"수레가 턱을 넘었습니다. 이번 축은 견본으로 남기지요.":
["The cart cleared the raised edge. Let us keep this axle as a sample.","台車が段差を越えました。今回の車軸は見本として残しましょう。"],"시엘, 오늘을 위해 정원을 열심히 살펴봤구나. 축하해!":
["You really did get to know the garden before today, Ciel. Congratulations!","シエル、今日のために庭をよく見ておいたのね。おめでとう！"],"시엘은 잠시 빈 접시를 내려다보다가 자기 앞으로 가져왔다.":
["Ciel looked down at the empty plate for a moment, then drew it towards him.","シエルはしばらく空の皿に目を落とし、自分の前に引き寄せた。"],"시엘이 차 주문서에 줄을 긋고 한 통을 더 적어 넣었습니다.":
["Ciel crossed out the quantity on the tea order and added one more tin.","シエルは紅茶の注文書に線を引き、一缶多く書き入れました。"],"아주 가볍고 고운 필체입니다. 안부를 묻는 편지군요.":
["A very fine, light hand. A letter to ask how you are, I should say.","細く、ごく軽い筆跡です。お加減をうかがうお便りでしょう。"],"앞으로도 그게 궁금하면, 내 돈 값어치 하는 물건부터 내놔.":
["If you want another chance to ask me that, give me my money’s worth first.","またそれを聞きたければ、まずは僕の払う金に見合う品を出せ。"],"양쪽 손님이 모두 자리에 앉았습니다. 차도 식지 않았고요.":
["Both guests are seated, and the tea is still hot.","お二方ともお席に着かれました。お茶もまだ温かいままです。"],"어차피 배에 들어가면 그만인 걸, 맛이 무슨 대수라고!":
["It all ends up in your belly anyway. Who the hell cares how it tastes?!","どうせ腹に入れば同じだろ。味なんざどうだっていいじゃねえか！"],"얼굴만이라도 볼 수 있어? 우리가 왔다고 조커한테 전해 줘.":
["Could we at least see him? Tell Joker we’re here.","顔だけでも見せてくれないか？　僕たちが来たってジョーカーに伝えて。"],"에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까.":
[" had never been asked for a name instead of a number until Ciel asked.","に番号ではなく名前を尋ねたのは、シエルが初めてだったからだ。"],"연구소에서 빠져나온 S-012는 시엘에게 이름과 책을 받았다.":
["After S-012 escaped from the laboratory, Ciel gave him a name and a book.","研究所を逃げ出したS-012は、シエルから名前と一冊の本をもらった。"],"연도가 같은 편지 두 통에 찍힌 가문 인장의 테두리가 다릅니다.":
["Two letters from the same year bear the family seal, yet the borders of the impressions differ.","同じ年に書かれた二通の手紙。押されている家印の縁取りがそれぞれ違う。"],"예, 도련님. 이번에는 홍차도 한 분 몫만 준비해 두겠습니다.":
["Yes, my lord. This time I shall lay tea for one as well.","ええ、坊ちゃん。今度は紅茶もお一人分だけご用意いたします。"],"오늘 고른 리본, 시엘이 보면 너무 화려하다고 했을 텐데….":
["The ribbon I picked today… Ciel would have said it was too showy.","今日選んだリボン、シエルが見たら派手すぎるって言ったでしょうね……。"],"오늘 들어온 서류는 서재에 두었습니다. 차는 침실로 올리지요.":
["Today’s papers are in the study. I shall bring your tea to the bedroom.","本日届いた書類は書斎にございます。お茶は寝室にお持ちしましょう。"],"오늘 수업은 여기까지입니다. 다음 선생님께는 제가 편지를 보내지요.":
["That will do for today’s lesson. I shall write to your next instructor.","今日の授業はここまでにいたしましょう。次の先生には私からお手紙を差し上げます。"],"오늘은 교본 대신 추리소설을 무릎 위에 올려 둡니다.":
["Today he rests a detective novel on his knees in place of his textbook.","今日は教本の代わりに推理小説を膝に置く。"],"오늘은 네가 더 잘 준비했군. 다음에도 그럴지는 두고 보자고.":
["You were better prepared today. We'll see about next time.","今日はお前の方がよく準備していたな。次もそうなるか、見ものだ。"],"오른쪽이 이번 달에 들어온 돈이고, 왼쪽이 나간 돈입니다.":
["On the right, this month’s receipts. On the left, this month’s expenditure.","右が今月入ったお金、左が出ていったお金でございます。"],"왕실의 소개장 없이는 어딜 가도 문전박대일 텐데요.":
["Without a royal introduction, I fear every door will be shut in your face.","王室の紹介状なしでは、どこへ行っても門前払いかと。"],"우리 서커스의 단장 대리야. ⋯라고 에밀리가 말했어.":
["“He's our acting ringmaster,” says Emily.","「うちのサーカスの団長代理よ」……って、エミリーが言ってる。"],"우유를 곁들이신다고요? 이번 잔은 조금 진하게 따르겠습니다.":
["You take milk? Then let me pour you a slightly stronger cup.","ミルクをお入れになりますか？　では、今度は少し濃いめにお注ぎします。"],"월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.」":
[" · A special investiture will be held at Buckingham Palace on the seventeenth at ten in the morning.”","月17日午前10時、バッキンガム宮殿にて特別叙勲式を執り行います。」"],"월말 잔액이 음수입니다. 다음 월말에도 음수면 파산합니다.":
["The month closed in the red. If next month also ends with a negative balance, the family will go bankrupt.","月末残高が赤字です。来月末も赤字なら破産します。"],"이 품목의 지난 납품 전표가 이것뿐인가? 있는 대로 올려.":
["Are these the only delivery slips for this item? Bring me every one we have.","この品の過去の納品伝票はこれだけか？　ある分を出せ。"],"이름이 알려진 셰프라면 대개 프랑스나 이탈리아 사람이잖아.":
["Most chefs of any renown are French or Italian, aren't they?","名の通った料理長といえば、たいていフランス人かイタリア人だろう。"],"이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요.":
["In a house of this size, I can scarcely be the only senior servant.","これほどのお屋敷で、上級使用人が私一人というわけにもまいりませんので。"],"이번에는 저쪽이 선정됐군. 심사 기록은 전부 가져가겠어.":
["They’ve chosen the other firm this time. I’ll take all the judges’ records with me.","今回は向こうが選ばれたか。審査の記録はすべて持ち帰る。"],"이번에는 제 눈치를 살피지 않고 명령을 내려 보십시오, 도련님.":
["This time, my lord, try giving the order without looking to me first.","今度は私の顔色をうかがわずに、ご命令をどうぞ、坊ちゃん。"],"이번에는 참가가 어려워졌습니다. 다음 경연 전에 필요한 조건을 확인하겠습니다.":
["I'm afraid you cannot enter this time. I shall check the requirements before the next competition.","今回はご参加がかないません。次の競技までに必要な条件を確認しておきます。"],"이쪽 가지에 물감이 묻었어. 파란 달걀은 이 아래야.":
["There's paint on this branch. The blue egg is underneath.","こっちの枝に絵の具がついてる。青い卵はこの下だ。"],"일곱 조각이면 학 한 마리가 돼. 동양의 미, 어때?":
["Seven pieces make a crane. What do you think of the beauty of the East?","七つのかけらで鶴が一羽。東洋の美はいかがかな？"],"잠깐 시간을 때우고 배를 채울 수 있다면, 그것으로 족하다.":
["A little diversion and a meal at the end of it. That will do nicely.","しばし退屈をしのげて、腹も満たせるのなら、それで十分だ。"],"잠깐만. 마지막 집에 돌아갈 몫이 왜 한 자루 모자라지?":
["Hold on. Why are we a sack short for the last household?","待て。どうして最後の家の分が一袋足りない？"],"좀 더 가까이서 보시죠. 진열장에서 보신 것과 같은 물건입니다.":
["Do take a closer look. It's the same article you saw in the display case.","どうぞお近くで。陳列棚でご覧になったものと同じ品です。"],"좋아. 다음 곡도 같이 준비하자. 나도 다음에는 이기고 싶어!":
["Let's prepare the next piece together too. I'd like to win next time!","ええ、次の曲も一緒に練習しましょう。今度は私も勝ちたいわ！"],"차를 더 준비하겠습니다. 두 분께서 함께 드실 수 있도록 자리를 마련하지요.":
["I shall make some more tea and set places for the two of you.","お茶をもう少しお淹れいたします。お二人で召し上がれるよう、お席を整えましょう。"],"찻잔을 소리 없이 놓으셨군요. 다음 잔도 그렇게 부탁드립니다.":
["You set the cup down without a sound. The next cup just so, if you please.","音ひとつ立てずにカップを置かれましたね。次の一杯もその調子でお願いいたします。"],"창가까지 같은 걸음이었습니다. 제 시계를 보실 필요도 없군요.":
["You kept an even pace all the way to the window. No need to look at my watch.","窓辺まで同じ歩調でしたね。私の時計をご覧になるまでもありません。"],"철창 앞 차가운 돌바닥에 시엘이 무릎을 꿇고 있다.":
["Ciel kneels on the cold stone floor before the iron bars.","鉄格子の前、冷たい石床にシエルが膝をついている。"],"초가 녹기 전까지 제게 두 수나 허락해 주시겠습니까?":
["Will you grant me as many as two moves before the candles melt?","蝋燭が溶けるまでに、二手もお許しいただけるので？"],"축하드립니다, 도련님. 다음 납품분도 같은 기준으로 확인하겠습니다.":
["My congratulations, my lord. I shall inspect the next delivery to the same standard.","おめでとうございます、坊ちゃん。次の納品分も同じ基準で確かめておきます。"],"축하드립니다, 도련님. 준비하신 인사에 좋은 결과가 따랐군요.":
["My congratulations, my lord. That greeting was well worth rehearsing.","おめでとうございます、坊ちゃん。ご挨拶を練習された甲斐がございましたね。"],"축하해. 네가 고른 차를 한 잔 마셔 봐도 될까?":
["Congratulations. May I try a cup of the tea you chose?","おめでとう。お前が選んだ茶を、一杯もらえるか？"],"팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다.":
["If you are to restore the Phantomhive name, you will need a chef.","ファントムハイヴ家の名声を取り戻すには、料理長が必要でございます。"],"한 마디만 다시 부탁해. 바람에 악보가 두 장 넘어갔어.":
["Give me that bar once more, please. The wind turned two pages.","一小節だけ、もう一度頼む。風で二枚もめくれた。"],"한 잔 더, 입니까. 그럼 저도 배운 보람이 있군요.":
["Another cup? Then my practice has paid off.","もう一杯、ですか。では、私にも習った甲斐がございましたね。"],"……고모님. 실례했습니다. 먼저 새해 인사를 드렸어야 했는데요.":
["…Aunt. Forgive me. I ought to have wished you a happy New Year first.","……叔母上。失礼しました。まず新年のご挨拶を申し上げるべきでした。"],"값은 확실히 받았으니, 나와 계약할지는 네가 정해라.":
["I have received my due. Whether you enter into a contract with me is for you to decide.","対価は確かに受け取った。私と契約するかどうかは、お前が決めろ。"],"같은 수선에 견적이 두 장 나갔군요. 하나는 회수하지요.":
["Two estimates went out for the same repair. I shall recall one.","同じ修繕の見積書が二通出ておりますね。一通引き取りましょう。"],"견적서를 밀어 둡니다. 상대가 먼저 가격을 부를 차례입니다.":
["He slides the estimate aside. It is the other party's turn to name a price.","見積書を脇へやる。先に値を言うのは相手の番だ。"],"다음 악구로 넘어가는 숨까지 이어졌습니다. 악보를 돌려 드리지요.":
["You played right through to the breath before the next phrase. Here is your score again.","次のフレーズへ移る息継ぎまで、きれいにつながりました。楽譜をお戻しいたしましょう。"],"도련님 창 아래 심은 꽃, 다음에 피면 제일 먼저 보여 드릴게요!":
["When the flowers under your window bloom again, you’ll see them first, young master!","坊ちゃんの窓の下に植えた花、次に咲いたら真っ先にお見せしますね！"],"도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까?":
["Which notebook shall hold the household’s first ledger, my lord?","坊ちゃん、当家最初の帳簿は、どの手帳に収めましょうか？"],"도련님, 공장에서 답이 왔습니다. 인수증을 한번 보시지요.":
["A reply from the factory, my lord. Have a look at the receipt.","坊ちゃん、工場から返事が届きました。受領書をご覧ください。"],"도련님, 짐작을 증거로 쓰시기 전에 소인을 다시 보시지요.":
["Before you offer that guess as evidence, my lord, look at the postmark again.","坊ちゃん、推測を証拠となさる前に、もう一度消印をご覧ください。"],"두 달 연속 월말 잔액이 음수입니다. 파산을 피할 수 없습니다.":
["The family has ended two consecutive months in the red. Bankruptcy is now unavoidable.","二か月続けて月末残高が赤字になりました。もはや破産を免れません。"],"뒷면의 흠까지 보셨군요. 좋은 견본을 고르셨습니다.":
["You even checked the back for flaws. A well-chosen sample.","裏の傷まで確かめられましたね。よい見本をお選びになりました。"],"리본부터 보셨군요. 어느 끝을 당겨야 하는지 고객도 알아볼까요?":
["The ribbon caught your eye first. Do you think a customer would know which end to pull?","真っ先にリボンをご覧になりましたね。お客様にも、どちらを引けばいいか分かるでしょうか？"],"마차에서 내려 쇼윈도를 구경합니다. 약속한 시각 전에 돌아갑니다.":
["He steps down from the carriage to look in the shop windows and returns before the appointed hour.","馬車を降りて店先の陳列を眺める。約束の時刻までに戻る。"],"맛만 봐 줘요, 도련님! 이건 진짜 안 태웠다구요!":
["Just have a taste, young master! I really didn’t burn this one!","味見だけでも頼むよ、坊ちゃん！　こいつは本当に焦がしてないんだ！"],"맨 아래 배가 눌렸군. 잠깐, 바구니를 다시 내 줘.":
["The pear at the bottom's been crushed. Wait, give me the basket again.","一番下の梨がつぶれたか。待て、もう一度その籠を寄こせ。"],"메이드 경력은 묻지 않습니다. 나이도, 어디에서 오셨는지도요.":
["We do not require previous experience as a maid. Nor do we ask your age or where you come from.","メイドの経験は問いません。お年も、ご出身も伺いません。"],"바닥까지 다시 닦을 일을 제가 왜 만들겠습니까? 저는 다른 용건이 있습니다.":
["Why should I give myself a floor to scrub all over again? I am here on another matter.","床を一から磨き直すような真似を、私がわざわざいたしますか？　別件でお話がございます。"],"반주가 한 박자 멎었습니다. 상대의 발끝이 아직 떠 있군요.":
["The accompaniment has paused for one beat. Your partner’s toe is still off the floor.","伴奏が一拍途切れました。お相手のつま先は、まだ床に着いていませんね。"],"밤새 숨이 턱턱 막혀서……. 어머니가 옆에서 밤새도록 등을…….":
["All night I could hardly breathe… Mother stayed beside me till morning, rubbing my back…","ひと晩中、息が詰まって……母さんがそばで、ずっと背中を……。"],"복수 같은 어리석은 짓은 그만두고 이대로 행복하게 살아가는 것은?":
["Why not give up this folly of revenge and live happily, just as you are?","復讐などという愚かな真似はおやめになって、このまま幸せにお暮らしになっては？"],"봉랍 두 덩이가 촛불 가까이에서 서로 다른 냄새를 냈다.":
["Held near the candle flame, the two lumps of sealing wax gave off different scents.","二つの封蝋を蝋燭の火に近づけると、それぞれ違う匂いが立った。"],"봉인 둘은 갈라 두셨습니다. 발신인 칸은 비워 두지요.":
["You’ve separated the two seals. Let us leave the sender’s name blank.","二つの封印は分けておかれましたね。差出人の欄は空けておきましょう。"],"분명히 저 리본이었는데. ……빈 바구니까지 숨겨 두다니.":
["I was sure it was that ribbon. …Fancy hiding an empty basket too.","確かにあのリボンだったのに。……空の籠まで隠しておくなんて。"],"빛을 버리고 나락으로 떨어지는 길을 선택하겠다······.":
["So you would turn your back on the light and descend into the abyss…","光に背を向け、奈落へと落ちる道を選ぶのですね……。"],"삼십 분 늦추겠습니다. 그동안만큼은 장부를 제게 주시지요.":
["Half an hour, then. Allow me to take the ledger off your hands until then.","三十分遅らせましょう。その間だけは帳簿をお預けください。"],"상장에는 그런 말이 없던데. 네가 먼저 꺼낼 줄은 몰랐군.":
["It says nothing of the sort on the certificate. I didn't expect you to bring it up first.","賞状にはそんなことは書いてなかったぞ。お前の方から言い出すとは思わなかったな。"],"상장은 제작실에 걸어 둬. 견본을 만든 직원들도 봐야지.":
["Hang the certificate in the workshop. The people who made the sample ought to see it.","賞状は製作室に掛けておけ。見本を作った者たちにも見せたい。"],"서로 다른 두 신문의 날짜와 증언을 대조해 사건 연표를 복원합니다.":
["Reconstruct the sequence of events by comparing dates and witness accounts in two different newspapers.","二紙の日付と証言を照合し、事件の経過を時系列にまとめる。"],"서열이 같은 두 손님을 어느 쪽도 기다리게 하지 않고 자리로 안내합니다.":
["Seat two guests of equal rank without keeping either waiting.","同じ位の客を、どちらも待たせずに席に案内する。"],"세바스찬은 마지막 성적표의 일곱 칸에 차례로 서명했다.":
["Sebastian signed each of the seven boxes on the final report in turn.","セバスチャンは最後の成績表の七つの欄に、順に署名した。"],"손님이 먼저 다음 약속을 청하시더군요. 초대장은 제가 준비하겠습니다.":
["Your guest was the first to suggest meeting again. I shall prepare the invitation.","お客様の方から次のお約束を望まれましたね。招待状は私がご用意しましょう。"],"수선 요청서를 먼저 읽고 결재가 끝난 문서를 왼편에 쌓습니다.":
["He reads the repair requests first and stacks the approved papers on the left.","修繕依頼書に先に目を通し、決裁を終えた書類を左に重ねる。"],"시엘, 네 몫 리본을 하나 더 골라 놨어. 귀엽지~?":
["Ciel, I picked out another ribbon for you. Isn’t it darling?","シエル、あなたのリボンをもう一つ選んでおいたの。可愛いでしょ～？"],"시엘은 다음 달 초청장에 답을 쓰기 전에 우편 요금부터 확인했습니다.":
["Before replying to next month’s invitations, Ciel checked the postage.","シエルは来月の招待状に返事を書く前に、まず郵便料金を確かめました。"],"시엘이 눈을 감기도 전에 방 안의 촛불이 일제히 꺼졌다.":
["Before Ciel could close his eyes, every candle in the room went out at once.","シエルが目を閉じるより先に、部屋中の蝋燭が一斉に消えた。"],"식으면 다 같은 설탕이지. 사람들 먼저 불러. 초는 같이 끌 거야.":
["It’ll all taste of sugar once it cools. Call everyone in first. We’ll blow out the candles together.","冷めてしまえば、どれも同じ砂糖だ。先にみんなを呼べ。火は一緒に消す。"],"십일 일이군. 앞쪽에 있던 영수증과 정확히 같은 날이야.":
["The eleventh. The very same day as the receipt at the front.","十一日か。前の方に挟んであった領収書と同じ日だ。"],"아, 손으로도 크기를 알겠습니다요. 맨 윗칸부터 다시 개겠습니다요.":
["Oh, I can tell the sizes by touch, I can. I’ll refold them, starting at the top!","あっ、大きさは手で触っても分かりますだ。いちばん上の段から畳み直しますだよ。"],"아그니, 저기 봐! 영국 귀족에다 집사까지 있잖아.":
["Agni, look! An English nobleman, and he's even got a butler with him!","アグニ、あれを見ろ！　英国の貴族だ、執事まで連れてるぞ！"],"악보를 덮겠습니다. 방금 멈춘 마디부터 이어 주시겠습니까?":
["I shall close the score. Would you play on from the bar where you just stopped?","楽譜を閉じます。今止まった小節から続きを弾いていただけますか？"],"악보부터 보여 줘. 네가 고른 곡이 얼마나 긴지는 알아야지.":
["Let me see the score first. I'd like to know just how long a piece you've picked.","先に楽譜を見せてくれ。お前の選んだ曲がどれほど長いかは知っておきたい。"],"약속을 미룬 오후입니다. 해가 기울 때까지 안락의자에서 쉽니다.":
["His afternoon engagements postponed, he rests in an armchair until the sun sinks low.","約束を先に延ばした午後。日が傾くまで肘掛け椅子で休む。"],"약속한 때보다 한 시간이나 일찍 들이닥쳤습니다. 돌려보낼까요?":
["He’s a full hour early. Shall I send him away?","お約束より丸一時間も早いお着きです。お引き取り願いましょうか？"],"어서 오십시오, 시엘 님. 왕자님께서 곧 내려오십니다.":
["Welcome, Lord Ciel. The prince will be down shortly.","ようこそお越しくださいました、シエル様。王子はまもなくお下りになります。"],"에서 익히신 것을 여기 쓰셨군요. 따로 설명드릴 필요가 없겠습니다.":
[" served you well here, my lord. I need hardly explain it again.","でお学びになったことを、ここで生かされましたね。改めてご説明するまでもございません。"],"예. 이제 다른 사람이 한 말을 그대로 옮겨도 주인이 바뀌지 않겠습니다.":
["Indeed. Now you can quote someone word for word and still make it clear whose words they are.","さようでございます。これでもう、人の言葉をそのまま引いても、誰の発言か取り違えずに済みますね。"],"오늘은 찻잔이 식을 때까지 한 장도 넘기지 않으셨군요.":
["Your tea has gone cold, my lord, and you haven’t turned a single page.","今日はお茶が冷めるまで、一枚も頁をおめくりになりませんでしたね。"],"오늘은 창문 셋째 칸까지입니다. 거리가 조금씩 늘고 있군요.":
["As far as the third window today. You’re going a little farther each time.","今日は三つ目の窓までです。少しずつ距離が延びておりますね。"],"온실 문이 열려 있습니다. 흙이 마르지 않았는지 함께 살핍니다.":
["The greenhouse door stands open. Together you check whether the soil has dried out.","温室の扉が開いている。土が乾いていないか、一緒に確かめる。"],"왼손이지? ……그 표정은 뭐야. 손은 제대로 내밀었잖아.":
["The left hand, yes? …What’s that look for? I held out the proper hand, didn’t I?","左手だろう？　……なんだ、その顔は。ちゃんと合ってるじゃないか。"],"우리 표도 챙겨 둬. 다음 견본을 만들 때 꺼내 보게.":
["Keep our sheet too. I want to refer to it when we make the next sample.","うちの審査表も取っておけ。次の見本を作る時に見返したい。"],"이 품목의 누적 판매와 납품이 열여덟 개에 못 미치는군.":
["Sales and deliveries of this product still total fewer than eighteen units.","この品目の販売と納品を合わせても、まだ十八個に届かないのか。"],"이미 봤겠지. 기왕 들킨 김에 이 꽃 이름이나 가르쳐 줘.":
["I expect he’s seen them already. Now that I’ve been found out, you might as well tell me what this flower’s called.","どうせもう見てるさ。見つかったついでだ。この花の名前を教えてくれ。"],"이쪽은 볕이 아주 잘 든다고.":
["Tell them this room gets plenty of sun.","こっちはよく日が当たるって。"],"잘됐네! 우린 아까 만났잖아. 그럼 새 손님은 아니지?":
["Perfect! We met earlier, so we don't count as new visitors, do we?","よかった！　俺たち、さっき会っただろ？　なら新しい客じゃないよな？"],"잠깐. 그 방이 마음에 들면 계속 써도 좋아. 허락해 주지.":
["Wait. If you like that room, you may go on using it. You have my permission.","待て。その部屋が気に入ったなら、これからも使っていい。僕が許す。"],"저번에 네가 고른 차, 오늘은 내가 끓이려고 했어, 시엘.":
["Ciel, I was going to make the tea myself today. The one you chose last time.","この前お前が選んだ茶、今日は俺が淹れるつもりだったんだ、シエル。"],"접시마다 딱 한 입씩만 베어 드시고 물리신 것을 말씀하십니까?":
["The ones you took precisely one bite out of before sending each plate back?","どのお皿も、きっちり一口ずつお召し上がりになって、すぐ下げるようおっしゃった、あれですか？"],"정원에서 꺾어 왔어요. 도련님 방에 두어도 돼요?":
["I picked these in the garden. May I put them in your room, young master?","庭で摘んできました。坊ちゃんのお部屋に飾ってもいいですか？"],"좋은 타이밍에 물었네. 오늘 회의는 삼십 분 늦춰 줘.":
["Good timing. Put today’s meeting back half an hour.","ちょうどいいところで聞いてくれたな。今日の会議は三十分遅らせてくれ。"],"주문서마다 받아 가신 분의 서명이 있습니다. 필요하신 날짜를 말씀해 주십시오.":
["Each order bears the recipient's signature. Tell me which date you require.","どの注文書にも、受取人の署名がございます。ご入用の日付をお申し付けください。"],"책에 끼워 두신 표지는 그대로 두십시오. 거기까지 읽으셨습니다.":
["Leave the marker where it is, if you please. That’s where you read up to.","本に挟んだ栞はそのままに。そこまでお読みになりましたからな。"],"처음부터 남겨 뒀어? 그때 내 팔이 얼마나 더 길어질 줄 알고.":
["You left that much from the start? How could you tell how much my arms would grow?","最初から取っておいたのか？　僕の腕がどれだけ伸びるか、あの時分かったとでも？"],"초면인 손님 둘이 같은 은쟁반을 집었습니다. 도련님이라면요?":
["Two guests who have never met reach for the same silver tray. What would you do, my lord?","初対面のお客様が二人、同じ銀盆に手を伸ばされました。坊ちゃんならどうなさいますか？"],"축하해, 리지. 내 바구니의 리본까지 바꿔 묶으려고?":
["Congratulations, Lizzy. Are you going to retie the ribbon on my basket as well?","おめでとう、リジー。僕の籠のリボンまで結び直すつもりか？"],"평가표부터 보자. 추측으로 공방을 뒤집어 놓을 수는 없지.":
["The assessment sheet first. We can't turn the workshop upside down on a hunch.","まずは評価表だ。憶測で工房を引っかき回すわけにはいかない。"],"한 문장으로 승낙과 사양을 다 쓰셨군요. 그대로 봉하겠습니다.":
["An acceptance and a refusal, both in a single sentence. I shall seal it as it is.","一文で承諾と辞退の両方をお書きになりましたね。このまま封をいたしましょう。"],"홍차까지 포함해서 알아봐. 돈 두 번 내는 건 이제 지긋지긋하니까.":
["Find one that includes tea. I’m sick of paying for things twice.","紅茶も込みで探せ。二度払いはもううんざりだ。"],"활을 현 위에 얹습니다. 네 마디를 끊지 않고 이어 봅니다.":
["He sets the bow to the strings and tries to play four bars without a break.","弦に弓を当て、四小節を途切れずに弾いてみる。"],". 도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까?":
[". Which notebook shall hold the household’s first ledger, my lord?","。坊ちゃん、当家最初の帳簿は、どの手帳に収めましょうか？"],"「3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.」":
["“A special investiture will be held at Buckingham Palace on the seventeenth of March at ten in the morning.”","「三月十七日午前十時、バッキンガム宮殿にて特別叙勲式を執り行います。」"],"견본 등급, 제품 평판, 판매·납품 실적, 설계·제작 시설":
["Sample grade, product reputation, sales and delivery record, design and production facilities","見本の等級、商品の評判、小売・納品実績、設計・製造設備"],"견본의 치수와 납품한 치수를 한 줄에 적었습니다. 이쪽입니다.":
["I've entered the measurements of the sample and the goods supplied on the same line. Here, if you please.","見本と納品分の寸法を同じ行に記しました。こちらです。"],"구두코는 리지, 네가 먼저 밟았잖아. 그렇게 웃지 말라고.":
["You stepped on my toe first, Lizzy. Stop laughing.","先に僕の靴のつま先を踏んだのはお前だぞ、リジー。そんなに笑うな。"],"그 사람 거래, 내가 통째로 사지. 돈은 지금 여기서 쳐 주겠어.":
["I’ll take over every last deal that man has here. I’ll pay cash, on the spot.","そいつの取引は僕が丸ごと買う。金なら今ここで払おう。"],"내가 한 입 먹을 때마다 눈치도 없이 새 접시를 내온 게 누군데―!":
["And who thought it a good idea to bring me another plate every time I took a bite—!","僕が一口食べるたびに、気も利かせず新しい皿を出したのは誰だ――！"],"당신은 시계 뚜껑을 닫고 도련님의 첫 일정표를 펼쳤다.":
["You close the watch and unfold the young master’s first schedule.","あなたは時計の蓋を閉じ、坊ちゃんの最初の予定表を開いた。"],"도련님 셔츠를 다려 뒀습니다요. 여기 정리해 뒀습니다요.":
["I’ve pressed your shirts, young master. They’re folded right here, they are.","坊ちゃんのシャツにアイロンをかけましただ。こちらに畳んでありますだよ。"],"도련님, 다음 장부에는 시식회에 쓰실 돈부터 남겨 두시지요.":
["In your next budget, my lord, let us set aside the tasting expenses first.","坊ちゃん、次の帳簿では試食会の費用を先に取り分けておきましょう。"],"등잔을 돌리니 긁힌 자리가 보이는군요. 다시 보시겠습니까?":
["With the lamp turned this way, the scratch shows. Would you look again?","ランプの向きを変えると、擦り傷が見えますね。もう一度ご覧になりますか？"],"리본을 푸는 시간도 선물을 받는 즐거움에 넣어 주시면 좋겠습니다.":
["I hope you’ll find that undoing the ribbon is part of the pleasure of receiving the gift.","リボンをほどくひとときも、贈り物を受け取る楽しみの一つに加えていただければ幸いです。"],"물건 수는 맞았습니다. 이번엔 외상 장부의 마지막 줄을 보시지요.":
["The stock count is correct. Now, if you would, take a look at the last entry in the credit ledger.","品数は合っています。では、掛売帳の最後の一行をご覧ください。"],"미지급금 경고 · 이번 월말까지 잔액을 £0 이상으로 회복하세요.":
["Outstanding payments · Restore your balance to at least £0 by the end of the month.","未払金あり · 今月末までに残高を£0以上にしてください。"],"반주가 조를 바꿉니다. 첫 음을 다시 짚고 선율을 이어 갑니다.":
["The accompaniment changes key. Find the first note again and carry on with the melody.","伴奏が転調する。最初の音を取り直し、旋律をつなぐ。"],"발밑을 조심하시지요. 저희 주인께서 아직 답을 못 들으셨으니.":
["Do mind your step. My master is still waiting for an answer.","足元にお気をつけください。主人はまだお答えをいただいておりませんので。"],"방금 읽으신 답신은 통역을 거치지 않고 그대로 부쳐도 되겠습니다.":
["The reply you just read out can go straight into the post. It needs no interpreter.","いまお読みになったお返事なら、通訳を通さずそのままお出しになれますね。"],"번역하면 같은 말이지만, 한 단어만 상대의 계급을 드러냅니다.":
["The words mean the same thing in translation, but one of them gives away the correspondent’s social rank.","訳せば同じ意味になるのに、ある一語だけが相手の身分を物語っている。"],"비에 젖은 골목에서 시엘이 문장 없는 마차에 발을 올린다.":
["In a rain-soaked alley, Ciel steps into a carriage without a crest.","雨に濡れた路地で、シエルが紋章のない馬車に足を掛ける。"],"비에 젖은 쇼윈도 너머로 완구점 주인이 손을 흔든다.":
["The toyshop owner waves from behind the rain-streaked window.","雨に濡れたショーウィンドーの向こうで、玩具屋の主人が手を振っている。"],"상대가 디딜 자리를 남겨 두셨습니다. 다음 곡도 이 속도로 하지요.":
["You left your partner room to step. Let us keep this tempo for the next dance.","お相手が足を運ぶ余地を残されましたね。次の曲も、この速さで参りましょう。"],"상대가 한 박자 늦자 보폭을 줄여 다음 회전에서 다시 맞춥니다.":
["When your partner falls a beat behind, shorten your stride to come together on the next turn.","相手が一拍遅れたら歩幅を縮め、次のターンで合わせ直す。"],"세바스찬이 커튼을 걷었다. 햇빛이 이불 끝까지 들어왔다.":
["Sebastian drew back the curtains. Sunlight crept all the way to the foot of the bed.","セバスチャンがカーテンを開けると、朝日が掛け布団の端まで差し込んだ。"],"손님도 점원도 열일곱을 골랐다. 세 주문을 어떻게 바로잡을까?":
["Customers and clerk alike chose seventeen. How should the three orders be put right?","客も店員も十七番を選んだ。三件の注文をどう正す？"],"숨을 참으셨군요. 발판을 치우고 창가에서 쉬시지요.":
["You were holding your breath. Let us put the step away and rest by the window.","息を止めておいででしたね。踏み台を片づけて、窓辺でお休みください。"],"시엘 님, 타운하우스에 편히 돌아오십시오. 기다리는 사람이 둘이나 있습니다.":
["Come back to the townhouse whenever you please, Lord Ciel. There are two of us waiting for you there.","シエル様、どうぞお気兼ねなくタウンハウスへお帰りください。お待ちしている者が二人もおります。"],"시엘 님께 올리던 찻잔을 가져왔습니다. 이쪽에 놓겠습니다.":
["I’ve brought the cup Lord Ciel used. I shall leave it here.","シエル様がお使いのティーカップをお持ちしました。こちらに置いておきます。"],"시엘, 저 금색 달걀 보이지? 오늘은 나도 봐주지 않을 거야!":
["Ciel, can you see that golden egg? I'm not going easy on you today!","シエル、あの金色の卵、見える？　今日は私も手加減しないわよ！"],"시엘은 두 사람이 고개를 맞댄 사이 세바스찬에게 외투를 내밀었다.":
["While the two bent their heads over the pages, Ciel held out his coat to Sebastian.","二人が名簿をのぞき込んでいるうちに、シエルはセバスチャンに外套を差し出した。"],"어느 대목에서 의심이 드셨는지 한 줄만 짚어 주시겠습니까?":
["Could you point to the very line that first aroused your suspicion?","どこで疑問をお持ちになったか、その一行を示していただけますか？"],"어떻습니까? 첫 일자리치고는 꽤 괜찮은 조건이지요.":
["Well? Rather good terms for a first position, wouldn't you say?","いかがです？　初めての勤め先としては、なかなかの条件でしょう。"],"연주에서는 아직 네게 배울 것이 있군. 돌아가면 연습을 좀 해야겠어.":
["I can still learn a thing or two from your playing. I'd better practise when I get home.","演奏では、まだお前に学ぶことがあるな。帰ったら少し練習しないと。"],"예. 삼십 분 뒤에 깨워 드리지요. 다시 부르실 때까지 여기 있겠습니다.":
["Certainly. I shall wake you in half an hour. Until you call for me again, I’ll be right here.","ええ。三十分後にお起こしいたしましょう。次にお呼びになるまで、こちらに控えております。"],"오늘은 내가 말할게. ……네가 지어 준 우리 자리를 잊지 않을 거야.":
["Today I’ll speak for myself. …I won’t forget the place you made for us.","今日は俺が言う。……俺たちに居場所をくれたこと、忘れない。"],"오늘은 세바스찬 말고, 제가 한 잔을 더 올려도 되겠습니까?":
["Might I pour your next cup today, in Sebastian’s stead?","今日はセバスチャンさんに代わって、私がもう一杯お注ぎしてもよろしいでしょうか？"],"오늘은 여기 좀 더 있다 가지 그래? 말하지 않아도 네 마음쯤은 다 안다구.":
["Why don’t you stay a little longer today? You don’t have to say a word. I know how you feel.","今日はもう少しゆっくりしていったらどうだ？　言わなくたって、お前の気持ちくらい分かるぞ。"],"오늘은 제가 먼저 돌아가도 되겠군요. 말이 도련님 손만 기다리고 있습니다.":
["I think I may go on ahead today, my lord. The horse is waiting for your cue.","今日は私が先に戻ってもよさそうですね。もうこの馬に合図を出すのは、坊ちゃんだけで十分です。"],"오늘은 찻잔이 하나 남았네. 손님이 올 때까지 치우지 말까.":
["One cup left over today. Perhaps I’ll leave it there until our guest arrives.","今日はカップが一つ余ったね。お客が来るまで、そのままにしておこうか。"],"오븐은 제가 볼 테니 좀 물러나 계십쇼! 언제 터질지 몰라요!":
["Stand back and let me handle the oven! No telling when it might blow!","オーブンは俺が見ますから、ちょいと下がっててください！　いつ吹っ飛ぶか分かりませんぜ！"],"오호, 뚜껑 있는 그릇 좋네! 주방 날릴 일도 없겠는데요.":
["Well now, a bowl with a lid! Won’t have to blow up the kitchen after all.","おっ、蓋付きの器か！　これなら厨房を吹っ飛ばさずに済みそうだ。"],"온실까지 걸으셨군요. 돌아오시는 동안 보폭이 한결 고르셨습니다.":
["You walked all the way to the glasshouse. Your stride was much steadier on the way back.","温室まで歩かれたのですね。お帰りの足取りは、ずいぶん安定しておいででしたよ。"],"완구점 주인이 아이들이 가장 오래 서 있던 진열대를 가리켜 줍니다.":
["The toyshop owner points out the display where children lingered longest.","玩具店の主人が、子どもたちが一番長く足を止めた陳列台を指さす。"],"왼쪽 종이는 왜 책상 아래 바닥까지 뱀처럼 기어 내려와 있지?":
["Why is the paper on the left snaking off the desk and across the floor?","なぜ左の紙は蛇みたいに机から床まで這ってるんだ？"],"응. 네 바구니도 귀엽게 꾸며 주고 싶어♥ 상장은 내 것이지만!":
["Yes! I want to make your basket look pretty too ♥ But the certificate is mine!","ええ、あなたの籠も可愛く飾ってあげたいの♥　でも賞状は私のものよ！"],"이 구절은 혼자 푸셨군요. 어디서 실마리를 잡으셨습니까?":
["You worked out that passage on your own. Where did you find your first clue?","その一節はご自身で解かれましたね。どこに手がかりを見つけられましたか？"],"이 안경은 제 보물입니다요. 도련님이 처음으로 주신 선물입니다요.":
["These spectacles are my treasure, they are. The first present the young master ever gave me.","この眼鏡は私の宝物ですだ。坊ちゃんが初めてくださった贈り物ですだよ。"],"이스트엔드 전당포에서 정보상에게 금화 한 닢을 내미는 시엘.":
["Ciel offering a gold coin to an informant in an East End pawnshop","イーストエンドの質屋で情報屋に金貨を差し出すシエル"],"일하지 않는 녀석은 내 집에 놔두지 않는다는 게 내 원칙이야.":
["It's a rule of mine that nobody lives under my roof without working.","働かない奴は家に置かない。それが僕の主義だ。"],"잔은 충분합니다. 이제 어느 쪽 손님께 먼저 말을 거시겠습니까?":
["We have plenty of cups. Now, which guest will you speak to first?","カップは十分にございます。では、どちらのお客様に先にお声を掛けますか？"],"잔을 들어 건배하고, 맞은편 손님에게 차례로 인사를 건넵니다.":
["He raises his glass in a toast, then greets the guests opposite him one by one.","グラスを上げて乾杯し、向かいの客に順に挨拶する。"],"장식은 나중으로. 고객이 혼자서도 상자를 열 수 있는지부터 볼래.":
["The decorations can wait. First I want to see whether our customers can open the box themselves.","飾りは後だ。まず、客が自分で箱を開けられるか確かめたい。"],"전장에선 숯이 될 때까지 구우라는 명령을 받았을지도 모르지.":
["Perhaps your orders on the battlefield were to burn everything to a cinder.","戦場では、何もかも炭になるまで焼けと命じられたのかもしれないな。"],"제가 아직 당신이 어떤 분인지는 다 알지 못합니다만…… 도련님을 잘 부탁드립니다.":
["I cannot yet say that I know you well… but I entrust the young master to your care.","あなたがどのような方か、まだよく存じませんが……坊ちゃんをよろしくお願いいたします。"],"제가 처음으로 혼자 키운 꽃이에요. 이 한 송이는 도련님 거예요!":
["These are the first flowers I’ve grown all on my own. This one’s for you, young master!","初めて僕ひとりで育てた花なんです。この一輪は坊ちゃんに！"],"종목 능력치에 그날의 컨디션·의욕·스트레스가 반영됩니다.":
["The score reflects the relevant attributes and Ciel's condition, motivation and stress on the day.","種目に応じた能力値に、当日の体調・意欲・ストレスが反映されます。"],"주문이 열두 개였다는 건 알아. 그런데 이 식탁에 앉을 사람은 몇이지?":
["I know twelve were ordered. How many people are sitting down at this table?","注文が十二個なのは分かっている。で、この食卓に着くのは何人だ？"],"지금은 그 자리가 두 번째로 따뜻해. ⋯라고 오스카가 말했어.":
["“That spot is the second warmest just now,” says Oscar.","今はそこが二番目に暖かいぞ……ってオスカーが言ってる。"],"지난번에 같이 보신 그 봉오리예요! 오늘 아침에 활짝 벌어졌어요!":
["It’s the bud we looked at together last time! It opened wide this morning!","この前、一緒にご覧になったあのつぼみです！　今朝、ぱっと開いたんですよ！"],"직선과 회전을 섞은 코스를 돌며 마지막 구간까지 호흡을 유지합니다.":
["Keep your breathing steady to the final stretch of a course with both straights and turns.","直線とカーブを組み合わせたコースを走り、最後の区間まで呼吸を保つ。"],"차 한 잔에서 침대 두 개까지 가는 데 숨도 한 번 안 쉬는군.":
["From one cup of tea to two beds, all in a single breath.","茶を一杯ねだったと思えば、次はベッドを二つか。息継ぎひとつしないんだな。"],"찻잔을 내려놓고 벽난로의 장작이 타는 소리를 듣습니다.":
["He sets down his teacup and listens to the logs crackle in the hearth.","ティーカップを置き、暖炉の薪がはぜる音に耳を傾ける。"],"창문을 조금 열어 줘. 오늘 아침엔 빗소리밖에 못 들었거든.":
["Open the window a little. All I heard this morning was rain.","窓を少し開けてくれ。今朝は雨の音しか聞いていない。"],"책 보면서 한 손으로 마시라구요. 평범한 수프니까 걱정 말고!":
["So you can drink it one-handed while you read. It’s just soup, don’t worry!","本を読みながら片手で飲めるでしょう？　心配いりませんよ、普通のスープですって！"],"첫 손님의 마차가 도착했습니다. 도련님께서 문 앞에서 맞으시겠습니까?":
["The first guest’s carriage has arrived. Will you receive them at the door, my lord?","最初のお客様の馬車が着きました。坊ちゃんが玄関でお迎えになりますか？"],"체조실을 한 번 왕복하셨습니다. 다음엔 숨을 더 길게 내쉬십시오.":
["You’ve walked the length of the gymnasium and back. Next time, try breathing out a little longer.","体操室を一往復なさいましたね。次は息をもう少し長く吐いてください。"],"축하한다, 시엘. 점수 차이가 크지는 않았지만 오늘은 네가 앞섰어.":
["Congratulations, Ciel. There wasn't much in it, but you had the edge today.","おめでとう、シエル。僅差だったが、今日は君が上だった。"],"키가 작은 사내였소. 왼손 엄지가 없었고……. 난 그거밖에 몰라!":
["A short man. Missing his left thumb… That’s all I know!","背の低い男だ。左手の親指がなくて……知ってるのはそれだけだ！"],"파운드와 실링이 한 칸에 들어갔습니다. 선을 다시 긋지요.":
["Pounds and shillings have gone into the same column. Let us rule a new line.","ポンドとシリングが同じ欄に入っています。罫線を引き直しましょう。"],"팬텀사가 조금 앞섰군. 휘트컴 상회도 준비를 잘해 왔어.":
["Funtom was a shade ahead. Whitcomb’s came well prepared, too.","ファントム社がわずかに上だったな。ウィットコム商会もよく準備してきた。"],"팬텀사의 견본과 거래 기록을 함께 놓고 검토하실 수 있게 준비하겠습니다.":
["I shall lay out Funtom’s sample beside the trading records for your inspection.","ファントム社の見本と取引記録を並べてご覧いただけるよう、整えておきます。"],"필요한 수량을 장부에 표시해 둬. 다음에는 기록까지 갖춰서 오겠어.":
["Mark the required quantity in the ledger. Next time we'll bring the record to match.","必要な数量を台帳に記しておけ。次は記録もそろえて来る。"],"하순 일정도 도련님께서 정하십니다. ‘하순’을 열어 주십시오.":
["The last part of the month is yours to plan as well, my lord. Open Late Month.","下旬のご予定も坊ちゃんがお決めになります。「下旬」をお開きください。"],"……차 한 잔에서 침대 두 개까지 가는 데 숨도 한 번 안 쉬는군.":
["…From one cup of tea to two beds, all in a single breath.","……茶を一杯ねだったと思えば、次はベッドを二つか。息継ぎひとつしないんだな。"],"…그 다음에― 돌아갈 곳이 없으면 여기로 와. 일손이 하나 필요하거든.":
["…After that, if you've nowhere to go, come back here. I could use another pair of hands.","……その後で、帰るところがなければ、ここへ来い。ちょうどひとり、人手がいるんだ。"],"같은 잎입니다. 오늘은 도련님께서 편지를 펴시기 전에 따라 드렸거든요.":
["The very same leaves, my lord. Today I poured before you opened your letters.","同じ茶葉でございます、坊ちゃん。今日はお手紙をお開きになる前にお注ぎしましたので。"],"계단 내려오시는 소리가 들리시지요? 차를 한 잔 더 준비하겠습니다.":
["Can you hear him coming down the stairs? I shall set out another cup of tea.","階段をお下りになる音が聞こえますでしょう？　お茶をもう一杯ご用意いたします。"],"고마워, 시엘. 귀~여운 연주였어. 한 번 더 들려줄래?":
["Thank you, Ciel. That was such a sweet little tune! Won’t you play it again?","ありがとう、シエル。とっても可愛い演奏だったわ。もう一度聴かせて？"],"고마워. 네가 준비한 차도 좋았어. 한 잔 더 마셔도 될까?":
["Thank you. I enjoyed your tea too. May I have another cup?","ありがとう。お前の茶もよかった。もう一杯もらってもいいか？"],"고맙다. 네 축사도 좋았어. 내가 이겼다고 빈말을 하는 건 아니다.":
["Thank you. Yours was a fine speech too. And I'm not just saying that because I won.","ありがとう。君の祝辞もよかったぞ。勝ったからといって、お世辞を言っているわけじゃない。"],"고삐를 늦출 때를 잡으셨군요. 이번에는 제가 옆에서 걷겠습니다.":
["You’ve found the moment to ease the reins. This time I shall walk beside you.","手綱を緩める頃合いをつかまれましたね。今度は私が横を歩きましょう。"],"그럼 셋 하면 같이 들어 올리자. 하나, 둘…… 시엘, 벌써 봤지?":
["Then let’s lift it together on three. One, two… Ciel, you’ve peeked already, haven’t you?","じゃあ、三つ数えたら一緒に持ち上げましょ。いち、に……シエル、もう見たでしょう？"],"그럼 우리는 모자걸이에 있어도 돼? ⋯라고 오스카가 말했어.":
["“Does that mean we can stay on the hatstand?” says Oscar.","「じゃあ、僕たちは帽子掛けにいてもいい？」……って、オスカーが言ってる。"],"그쪽 판에서도 내 말을 두고 있었네. 이 수를 세 번이나 연습한 거야?":
["You’ve been playing my side on that board too. Did you practise this move three times?","そっちの盤でも僕の駒を動かしてたんだな。この手を三回も練習したのか？"],"꼭 둬야 해? 지금까지 주방은 너 혼자서도 잘 꾸려 왔잖아.":
["Do we really need one? You've managed the kitchen perfectly well on your own till now.","どうしても必要なのか？　今までお前ひとりで厨房を切り盛りしてきただろう。"],"납품가는 같고 도착일이 다릅니다. 어느 조건부터 물으시겠습니까?":
["The suppliers quote the same price but different delivery dates. Which terms would you ask about first?","納入価格は同じで、到着日が違います。どの条件からお尋ねになりますか？"],"네 연주도 잘 들었어. 다음에도 이렇게 겨룰 수 있다면 나쁘지 않겠군.":
["I enjoyed your playing too. I wouldn't mind competing like this again.","お前の演奏もよかった。次もこうして競えるなら、悪くないな。"],"닦지 마. 어차피 저 탁자도 곧 들고 갈 텐데, 뭐.":
["Don’t polish it. They’ll be taking the table any moment anyway.","拭くな。どうせその机もじきに持っていかれる。"],"도련님, 차를 드시기 전에 이 영수증부터 장부에 옮기시지요.":
["Before tea, my lord, let us enter this receipt in the ledger.","坊ちゃん、お茶の前にこちらの領収書を帳簿へ写しましょう。"],"라틴어 편지 한 줄을 소리 내어 읽고, 강세를 고쳐 다시 읽습니다.":
["He reads a line of a Latin letter aloud, corrects the stress and reads it again.","ラテン語の手紙を一行声に出して読み、アクセントを直してもう一度読む。"],"마룻결을 기준으로 두 발을 다시 놓으십시오. 제가 먼저 체중을 옮기겠습니다.":
["Line your feet up again with the grain of the floorboards. I shall shift my weight first.","床板の木目に合わせて、両足を置き直してください。私から先に重心を移します。"],"목제 견본의 바퀴를 굴려 보고 도면의 축 길이를 고칩니다.":
["He spins the wheels of the wooden sample and corrects the axle length on the drawing.","木製見本の車輪を回し、図面の車軸の長さを直す。"],"바퀴 달린 말 열 개를 세운 집사가 동전 아홉 닢을 내려놓았다.":
["The butler lined up ten toy horses on wheels and laid out nine coins.","執事は車輪のついた玩具の馬を十頭並べ、硬貨を九枚置いた。"],"발끝을 모으고 손을 가슴에 얹습니다. 이번 인사는 정확히 세 박자입니다.":
["He brings his toes together and lays a hand on his chest. This bow lasts precisely three beats.","つま先をそろえ、手を胸に当てる。今度の礼はきっかり三拍だ。"],"백작을 섬기는 집사로서는 하나같이 수고스러울 것 같은 요구들이다.":
["Each of these conditions promises to give a butler in an earl’s service a fair bit of trouble.","伯爵家の執事としては、どれも骨の折れそうなご注文です。"],"빈 가게에서 접시 값을 두고 말다툼하는 시엘과 세바스찬.":
["Ciel and Sebastian arguing over the price of a plate in an empty shop.","がらんとした店で皿の値段をめぐって言い争うシエルとセバスチャン。"],"사과와 배 사이에 짚을 좀 깔아. 이 정도면 장터까지 가겠어.":
["Lay some straw between the apples and pears. That ought to see them safely to market.","りんごと梨の間に藁を敷け。これなら市までもつだろう。"],"상장을 받고도 앙코르가 필요해? ……좋아. 곡은 내가 고를게.":
["You've won a certificate and you still want an encore? …Very well. I'll choose the piece.","賞状をもらっても、まだアンコールが要るのか？　……いいだろう。曲は僕が選ぶ。"],"새 물량을 보내기 전에 어제 내린 상자부터 찾자. 어디로 가야 할까?":
["Before sending more goods, find the box unloaded yesterday. Where should we look?","代わりを送る前に、昨日下ろした箱を探そう。どこへ行けばいい？"],"생울타리 사이로 달걀을 담을 빈 바구니가 하나씩 건네집니다.":
["Between the hedges, each entrant is handed an empty basket for the eggs.","生け垣の間で、卵を入れる空の籠が一人に一つずつ手渡されます。"],"세바스찬은 시엘이 움켜쥔 천을 펴 주려다 그대로 두었다.":
["Sebastian reached to smooth the cloth in Ciel’s fist, then left it as it was.","セバスチャンはシエルの握りしめた布のしわを伸ばしかけて、そっと手を引いた。"],"세바스찬이 빈 의자 둘을 놓고 은쟁반 하나를 그 사이에 밀었다.":
["Sebastian set out two empty chairs and slid a silver tray between them.","セバスチャンは空の椅子を二脚並べ、その間に銀の盆を一つ滑り込ませた。"],"소마가 열쇠를 받자마자 아그니와 손님 명부를 펼쳤다.":
["The moment Soma had the key in his hand, he and Agni opened the visitors' register.","鍵を受け取るやいなや、ソーマはアグニと一緒に来客名簿を開いた。"],"소마와 아그니가 보수를 받고 런던 타운하우스의 관리를 맡았다.":
["Soma and Agni took paid positions looking after the London townhouse.","ソーマとアグニは給金を受け取り、ロンドンのタウンハウスの管理を引き受けた。"],"시엘은 말을 집는 대신 접시를 저택 식구 수만큼 꺼내 놓았다.":
["Ciel left the pieces where they were and took out a plate for every member of the household.","シエルは駒に手を伸ばさず、屋敷のみんなの分だけ皿を出した。"],"식탁 양끝에서 끊긴 대화를 손님 둘의 공통 관심사로 이어 줍니다.":
["When conversation flags at either end of the table, bring two guests together over a shared interest.","食卓の両端で会話が途切れたら、二人の客に共通する話題で話をつなぐ。"],"실 색깔은 저도 금방 알아봅니다요. 바느질 상자를 가져올게요!":
["I can tell thread colours apart at a glance, I can. I’ll fetch my sewing box!","糸の色なら私にもすぐ分かりますだ。裁縫箱を持ってきますだよ！"],"실례하겠습니다, 도련님. 아침에 찾아온 ‘올빼미’를 데려왔습니다.":
["Pardon the intrusion, my lord. I’ve brought the ‘Owl’ who called on us this morning.","失礼いたします、坊ちゃん。今朝訪ねてきた「梟」をお連れしました。"],"심사 점수가 높은 쪽이 우승합니다. 동점이면 양측이 함께 우승합니다.":
["The higher score wins. Equal scores mean a joint victory.","審査得点の高いほうが優勝します。同点の場合は双方が優勝です。"],"악보는 그대로 둬. 방금 네가 바꾼 끝음, 이번엔 내가 받아 볼게.":
["Leave the score as it is. That last note you changed just now—let me pick it up this time.","楽譜はそのままでいい。さっき君が変えた最後の音、今度は僕が受けてみよう。"],"안개 낀 템스강 하역장에서 운송장을 확인하는 시엘과 세바스찬.":
["Ciel and Sebastian checking a waybill at a misty wharf on the Thames.","霧のテムズ河岸で運送状を確かめるシエルとセバスチャン。"],"애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.":
["It was not for his cooking that I brought him here, my lord.","そもそも、この方をお連れしたのは料理の腕を買ってのことではございません。"],"어제 쓴 출납장을 가져와. 돈을 돌려줬으면 받은 사람도 있을 테니까.":
["Bring me yesterday’s cashbook. If the money was refunded, someone must have received it.","昨日の出納帳を持ってこい。金を返したなら、受け取った者がいるはずだ。"],"오늘은 돌아가며 보실 필요 없어요. 제 쪽에서 제가 바로 읽어 드릴게요!":
["You needn’t walk round to see it today. I can read it to you from right here!","今日は回り込まなくても大丈夫です。僕の方からそのままお読みしますね！"],"오른손의 장갑을 벗는 동안에도 손님을 기다리게 하지 않으셨습니다.":
["You took off your right glove without keeping your guest waiting for an instant.","右手の手袋をお取りになる間も、お客様を少しもお待たせになりませんでしたね。"],"외상 장부와 납품서를 대조해 중복 청구된 한 줄을 찾아냅니다.":
["Compare the credit ledger against the delivery notes to find the entry billed twice.","掛売帳と納品書を照合し、二重請求された一行を見つける。"],"우리에게 맡겨질 주문부터 준비해. 다른 상회의 몫까지 셀 필요는 없어.":
["Start with the orders that will come our way. There's no need to count the other firm's share.","まずはうちに任される注文の準備だ。よその商会の取り分まで数えることはない。"],"우선 이분들부터 시경에 인계하지요. 단추는 제가 달아 드리겠습니다.":
["First, let us hand these gentlemen over to the Metropolitan Police. I shall sew that button back on for you.","まずはこちらの方々をロンドン警視庁に引き渡しましょう。ボタンは私がお付けします。"],"원문의 농담까지 살리셨군요. 제가 적어 둔 풀이는 접어 두지요.":
["You even preserved the joke in the original. I shall put my own notes away.","原文の冗談まで生かされましたね。私の用意した解釈はしまっておきましょう。"],"원본에는 비어 있던 칸이군. 물건을 받아 간 놈이 생각났어?":
["That space was blank in the original. Do you remember who took delivery?","原本では空欄だったな。品を受け取った奴を思い出したのか？"],"원장의 합계와 금고의 잔돈이 맞습니다. 이대로 서명하시겠습니까?":
["The ledger total tallies with the cash in the safe. Will you sign here?","元帳の合計と金庫の小銭がぴたりと合います。このままご署名なさいますか？"],"이거 어제 두던 판이잖아. 내 나이트가 거기가 아니었을 텐데.":
["This is yesterday’s game. I don’t recall leaving my knight there.","昨日の盤面じゃないか。僕のナイトはそこじゃなかったはずだ。"],"잠깐, 그 견본은 내가 놓겠어. 받침대가 조금 흔들리는군.":
["Wait, I'll set the sample down. The stand is a little unsteady.","待て、その見本は僕が置く。台が少しぐらついている。"],"젠장, 은쟁반이 안 오네! 화력 올려서 새로 끓일까요?":
["Damn, still no silver tray! Want me to stoke the fire and boil up another batch?","ちっ、銀盆がまだ来ねえ！　火力を上げて、もうひと鍋いきますかい？"],"진열창 앞에 멈춰 견본의 마감과 납기표를 대조합니다.":
["He stops before the shop window to compare the sample's finish with the delivery schedule.","陳列窓の前で足を止め、見本の仕上がりと納期表を照らし合わせる。"],"차 이름을 물어봤어?! 방금 내 머리 옆을 스쳐 간 게 뭐냐고!":
["Did I ask what tea it was?! What just went whizzing past my head?!","誰が茶の名を聞いた⁉　今、僕の頭をかすめていったのは何だ！"],"창가에 닿자 숨이 찹니다. 세바스찬이 다음 발판에서 기다립니다.":
["By the time Ciel reaches the window, he is short of breath. Sebastian waits on the next step.","窓辺まで来ると、シエルの息が上がる。セバスチャンは一段先で待っている。"],"책갈피가 붙어 있네. 집사 군이 부르면 거기까지만 읽으면 되겠다.":
["It comes with a bookmark. When your butler calls, you'll know where to leave off.","しおりが付いているね。執事君に呼ばれたら、そこまでにしておけばいい。"],"첫 박자를 잡으셨군요. 이제 그 박자를 간직한 채 셋째 마디부터.":
["You have the downbeat. Now start at the third bar, keeping that pulse.","一拍目をつかめましたね。ではその拍を保ったまま、三小節目から。"],"청구서는 저택 앞으로 돌려. ……꽃은 왜 가져가? 그건 거기에 둬.":
["Have the bill sent to the estate. …Why are you taking the flower? Leave it there.","請求は屋敷に回せ。……なぜ花まで下げる？　それはそこに置いておけ。"],"크하하! 오늘은 안 태웠어요! 멀쩡한 끝 조각 드셔 보실래요?":
["Ha! Didn’t burn it today! Fancy an end piece? This one’s in good shape!","ハハッ、今日は焦がしませんでしたぜ！　端っこの無事なとこ、ひと切れどうです？"],"팬텀사가 완구를 밤도둑처럼 야반에 하역하라고 한 적이 있던가?":
["Since when does Funtom have its toys unloaded in the dead of night, like a gang of thieves?","いつファントム社が、夜盗のように真夜中に玩具を荷下ろししろと命じた？"],"표를 보셔도 됩니다. 대신 이번 문장은 도련님 자신의 말로 읽으시지요.":
["You may consult the table. This sentence, however, I should like to hear in your own words.","表はご覧になって結構です。ただし、この一文は坊ちゃんご自身のお言葉でどうぞ。"],"한 잔 더 올리지요. 이번엔 설탕을 넣기 전에 향부터 맡아 보십시오.":
["One more cup, then. This time, do take in the aroma before adding the sugar.","もう一杯お注ぎしましょう。今度はお砂糖を入れる前に、香りをお楽しみください。"],"허나 이 기록의 뒷장은 왕실의 열람 허가가 있어야 이어 보실 수 있습니다.":
["You will need the Crown’s permission to read the next page of this record, however.","ただし、この記録の続きをご覧になるには王室の閲覧許可が要りますよ。"],"'어려운 일'이라 아무한테나 맡길 수 없는 일이지. 할 수 있겠어?":
["It's a “difficult job.” I can't entrust it to just anyone. Think you're up to it?","「難しい仕事」だから、誰にでも任せられるわけじゃない。お前にできるか？"],"……그쪽 판에서도 내 말을 두고 있었네. 이 수를 세 번이나 연습한 거야?":
["…You’ve been playing my side on that board too. Did you practise this move three times?","……そっちの盤でも僕の駒を動かしてたんだな。この手を三回も練習したのか？"],"갈 곳이 없으면 오랬지? 아직 우리 자리가 있어? ⋯라고 에밀리가 말했어.":
["“You said to come if we had nowhere else to go. Is there still room for us?” says Emily.","「行くあてがないなら来いって言ったよね？　まだ僕たちの居場所はある？」……って、エミリーが言ってる。"],"그 구두 소리는 다른 사람하고 헷갈리지 않아. 오늘은 한 번도 못 들었어.":
["I wouldn’t mistake those footsteps for anyone else’s. Haven’t heard them once today.","あの靴音を聞き間違えたりしない。今日はまだ一度も聞いてない。"],"그건 진열하지 마. 팔아야 될 물건이라면 애초에 거기 두지 않았지.":
["Don’t put that in the window. If it were for sale, I wouldn’t have left it there in the first place.","それは店先に出さないでおくれ。売る品なら、そもそもあそこには置かなかったよ。"],"그게 마음에 들어서 어제부터 여기 누워 있었지. ⋯라고 에밀리가 말했어.":
["“That’s what I like about it. I’ve been lying here since yesterday,” says Emily.","そこが気に入って、昨日からここに寝そべってるの……ってエミリーが言ってる。"],"그럼 근무표에 올리겠습니다. 그런데 도련님, 장갑은 되찾으셨습니까?":
["Then I shall add him to the duty roster. Did you recover your glove, my lord?","では勤務表に加えておきます。ところで坊ちゃん、手袋は取り戻されましたか？"],"그럼 장부에는 새 풋맨의 동행을 위한 침구 한 벌로 적어 두지요.":
["Then I'll enter it in the ledger as a set of bedding for the new footman's companion.","では帳簿には、新任のフットマンのお連れ様用に、寝具一式と記しておきましょう。"],"그럼 저희도 같은 조건으로 보시지요. 오늘 납품할 상자를 가져왔습니다.":
["Then inspect ours on the same terms, if you please. We've brought a crate from today's delivery.","では弊社の品も、同じ条件でご覧ください。本日納品する箱を持参しました。"],"그렇다고 날 죽이러 온 녀석한테 메이드 앞치마를 두르겠다는 거야?":
["And on that account you're going to put a maid's apron on someone who tried to kill me?","それで、僕を殺しに来た奴にメイドのエプロンを着せる気か？"],"나는 이 집에 대해 모르는 게 너무 많아. 내가 배우기도 전에 선대가 돌아가셨으니까.":
["There’s too much I don’t know about this house. My father died before he could teach me.","僕はこの家のことを知らなすぎる。教わる前に先代が亡くなったからな。"],"날짜별로 정리하셨군요. 세바스찬, 우리 장부도 펴 둬.":
["Filed by date, I see. Sebastian, open our ledger as well.","日付順に整理なさったのですね。セバスチャン、うちの台帳も開いておけ。"],"내 손가락도 안 들어가잖아. 모서리는 용케도 저만큼만 뜯었군.":
["Even my finger won’t fit. I’m surprised they managed to tear so little off the corners.","僕の指さえ入らないぞ。よくあれだけ破っただけで済んだものだ。"],"네가 저번에 고른 차를 사 뒀어! 이번엔 내가 제대로 끓여 볼 거야!":
["I bought that tea you chose last time! I’ll brew it properly myself this time!","この前お前が選んだ茶を買っておいたぞ！　今度こそ俺がちゃんと淹れてやる！"],"단순한 과로가 아닙니다. 그 전의 일을 아는 분께 급히 확인해 주십시오.":
["This is more than exhaustion. Send at once for someone who knows his medical history.","ただの過労ではありません。以前のご様子をご存じの方に、急いで確かめてください。"],"도련님 창 밑에 심은 게 오늘 아침에 폈어요. 한 송이 가져왔어요.":
["The flowers under your window opened this morning, young master. I brought you one.","坊ちゃんの窓の下に植えた花、今朝咲いたんです。一輪持ってきました！"],"리넨은 이쪽입니다요, 도련님. 잠깐만요, 안경부터 바로 쓰겠습니다요!":
["The linen’s over here, young master. Just a tick while I straighten my glasses!","リネンはこちらですだ、坊ちゃん。ちょっと待ってくださいまし、まず眼鏡を直しますだ！"],"리지, 마지막 음은 조금 늦춰. 종이 우리 대신 끝을 맺어 줄 거야.":
["Lizzy, wait a moment before you play that last note. Let the bell finish the piece for us.","リジー、最後の音はもう少し遅らせて。あとは鐘が締めてくれる。"],"마룻바닥의 무늬를 따라 세 걸음, 반 바퀴 돌아 제자리로 옵니다.":
["Following the pattern in the floorboards, he takes three steps and makes a half-turn back to his place.","床板の模様に沿って三歩進み、半回転して元の位置に戻る。"],"맛을 보고 싫다는 손님이 있었어? 방금 저 사람은 한 알도 못 먹었는데.":
["Has anyone tasted one and said they disliked it? That man didn’t get so much as a single sweet.","食べてまずいと言った客がいたのか？　今の男は一粒も口にできなかったぞ。"],"맡겨 두신 장부의 사본을 마쳤습니다. 맨 마지막 줄은 제 글씨입니다.":
["I’ve finished copying the ledger you left with me. I added the very last line myself.","お預かりした帳簿の写しができました。いちばん下の一行は、私が書き加えたものです。"],"뭐라고? 세바스찬, 저 녀석은 오늘 아침에 나를 쏘러 왔어!":
["What? Sebastian, she came to shoot me this morning!","何だって？　セバスチャン、そいつは今朝、僕を撃ちに来たんだぞ！"],"볕이 드는 쪽하고 그늘진 쪽 중에서 내가 고를 수 있게 해 뒀어.":
["So I can choose between the sun and the shade.","日向と日陰、好きな方を選べるようにしてあるの。"],"빈 자루 무게는 빼고 달아. 그래야 마지막 집까지 제 몫이 돌아가.":
["Deduct the weight of the empty sack. That way even the last household gets its full share.","空袋の重さを引いて量れ。そうすれば最後の家まできちんと取り分が行き渡る。"],"세바스찬. 그런데 하룻밤 묵는 데 왜 셋을 전부 데려온 거지?":
["Sebastian. Why did you bring all three for a single night’s stay?","セバスチャン。たった一泊のために、どうして三人とも連れてきた？"],"세바스찬이 폰을 밀자 시엘은 기다렸다는 듯 설탕 비숍을 집었다.":
["Sebastian advanced a pawn. Ciel took up the sugar bishop as though he’d been waiting for just that move.","セバスチャンがポーンを進めると、シエルは待っていたとばかりに砂糖のビショップをつまんだ。"],"손님이 잔을 내려놓으신 뒤에 의자를 미셔야지요, 도련님.":
["Wait until your guest has put down the cup before you push the chair in, my lord.","椅子をお戻しになるのは、お客様がカップを置かれてからですよ、坊ちゃん。"],"시엘, 다음에 올 땐 편지부터 보내 줘. 내가 정원까지 마중 나갈게!":
["Ciel, send me a letter before your next visit. I’ll come all the way out to the garden to meet you!","シエル、今度来る時は先に手紙をちょうだい。私、お庭まで迎えに行くわ！"],"시엘의 구두가 같은 자리를 두 번 밟습니다. 반주를 한 박 늦춥니다.":
["Ciel’s shoes land on the same spot twice. You hold the accompaniment back by a beat.","シエルの靴が二度続けて同じ場所を踏む。伴奏を一拍遅らせる。"],"시엘이 몸을 일으키기도 전에 은제 찻주전자가 그의 앞을 가로막았다.":
["Before Ciel could sit up, a silver teapot swung in front of him.","シエルが身を起こすより早く、銀のティーポットが目の前に差し出された。"],"시엘이 책상 한쪽에 쌓아 둔 서신 뭉치를 타나카 앞으로 밀었다.":
["Ciel slid a bundle of letters from the side of his desk towards Tanaka.","シエルは机の脇に積んでおいた手紙の束を、タナカの前に押しやった。"],"시제품 하나가 사장 책상에 놓여 있습니다. 포장과 내용물을 따로 검사합니다.":
["A prototype sits on the company president's desk. The packaging and its contents are inspected separately.","社長の机に試作品がひとつ載っている。包装と中身を別々に検品する。"],"아닙니다. 저에게는 거짓말을 하지 말라고 하셨으면서······.":
["Nothing, my lord. I was only thinking that you forbade me to lie…","いいえ。私には嘘をつくなとお命じになったのに……。"],"아침에 제 이름을 불러 주실 것 같아서, 오늘도 창문 아래서 한참 기다렸네요.":
["I thought you might call my name this morning, so I waited under your window for ages again.","朝になったら名前を呼んでもらえそうで、今日も窓の下でずっと待ってしまいました。"],"예. 이번에는 견본의 점수와 별개로 인증 요건을 채우셔야 합니다.":
["Indeed. Whatever score the sample receives, the quantity requirement for a warrant must also be met.","はい。今回は見本の得点にかかわらず、認定に必要な数量も満たしていただく必要がございます。"],"완구가 열 개 팔렸는데 대금은 아홉 개분입니다. 무엇을 확인하시겠습니까?":
["Ten toys have been sold, but we have payment for only nine. What would you check?","玩具が十個売れましたが、代金は九個分でございます。何をお確かめになりますか？"],"왕자님께서는 오늘도 두 잔을 부탁하셨습니다. 우유는 따로 놓았습니다.":
["The prince asked me for two cups again today. I’ve put the milk on the side.","王子は今日も二杯とおっしゃいました。ミルクは別に置いてございます。"],"외교 서한의 완곡한 거절을 원문의 뉘앙스까지 살려 옮깁니다.":
["Translate a diplomatic letter’s tactful refusal, preserving the nuances of the original.","外交書簡の遠回しな断りを、原文の機微までくんで訳す。"],"요즘은 늘 그 권부터 펼치시는군요. 오늘은 책상 위에 올려 두었습니다.":
["That’s always the first volume you open these days. I’ve put it on your desk today.","この頃はいつも、その巻からお開きになりますな。今日は机に載せておきました。"],"이 귀퉁이의 연필 자국은 제 것입니다. 오늘이라면 말씀드릴 수 있겠군요.":
["Those pencil marks in the corner are mine. I think I can tell you about them today.","この隅の鉛筆の跡は私のものです。今日ならお話しできそうですな。"],"이건 잎 끝이 벌써 붉군. 어느 쪽 꽃이 먼저 피나 내기할까?":
["The leaf tips on this one are red already. Care to wager which will flower first?","こいつはもう葉の先が赤いな。どっちが先に咲くか、賭けてみるか？"],"이번 다과에는 제가 접시를 낼 차례조차 짚어 드릴 일이 없었군요.":
["At today’s tea I had no need even to prompt you on the order of the plates.","今日のお茶の席では、皿をお出しする順番すらお教えする必要がございませんでしたね。"],"인원을 선택하거나 끌어서 원하는 방에 배치하세요. 같은 방의 업무 효과는 합산됩니다.":
["Select a staff member and then a room, or drag them into place. Staff assigned to the same room combine their effects.","使用人を選んでから部屋を選ぶか、配属先へドラッグしてください。同じ部屋に配属した使用人の効果は合算されます。"],"장부를 등불에 비춥니다. 종이를 긁어 고친 흔적이 보입니다.":
["He holds the ledger up to the lamp. The paper has been scraped and written over.","帳簿を灯火にかざす。紙を削って書き直した跡が見える。"],"전표 날짜까지 맞습니다. 내일 들어올 한 닢도 마감할 수 있겠군요.":
["Even the date on the voucher matches. You can close the books with tomorrow’s penny accounted for.","伝票の日付も合っています。明日入る一ペニーまで織り込んで、帳簿を締められますね。"],"정원 길을 천천히 걷습니다. 온실 앞에서 보폭이 한결 느려집니다.":
["He walks slowly along the garden path. His pace slackens further by the greenhouse.","庭の小道をゆっくり歩く。温室の前ではさらに足が緩む。"],"제 이름을 불러 주신 날부터 지금까지, 저, 여기서 매일 아침이 기다려졌어요!":
["From the day you called me by my name, I’ve looked forward to every morning here!","名前を呼んでいただいたあの日から、僕、ここで朝を迎えるのが毎日楽しみだったんです！"],"좋아! 아그니, 이번엔 귀띔해 주면 안 돼! 이 수는 내가 생각했어!":
["Right! No hints this time, Agni! I worked this move out myself!","よし！　アグニ、今回は助言無用だぞ！　この手は俺が自分で考えたんだ！"],"좋아. 다음 주문에서도 이 품질을 지켜. 오늘의 점수만 자랑할 생각은 없어.":
["Good. Maintain this quality on the next order. I've no intention of merely boasting about today's score.","よし。次の注文でもこの品質を守れ。今日の点数を自慢して終わるつもりはない。"],"주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요.":
["Ridding your master of nuisances must, after all, be familiar work.","主人の目障りなものを片づけるお仕事なら、さぞお慣れでしょう。"],"주판알을 한 줄씩 밀어 매입가를 더합니다. 마지막 줄에서 검산을 시작합니다.":
["He slides the beads along the abacus, adding the purchase prices row by row. At the last row, he begins checking his sums.","そろばんの珠を一列ずつはじき、仕入れ値を足していく。最後の列まで来て、検算にかかる。"],"지금. ……너도 들었구나. 소마의 실내화는 뒤축부터 닳겠어.":
["There. …You heard it too. Soma’s slippers will wear through at the heels first.","今だ。……お前にも聞こえたな。ソーマの室内履きは、かかとから先にすり減りそうだ。"],"창가에 선 세바스찬 곁으로 시엘의 빈 의자와 수첩이 보인다.":
["Sebastian at the window, beside Ciel’s empty chair and notebook","窓辺に佇むセバスチャン。その傍らにシエルの空いた椅子と手帳が見える。"],"책갈피가 꽂힌 곳을 펴고, 어제 푼 문제의 다음 줄을 읽습니다.":
["Ciel opens the book at his bookmark and reads the line below yesterday's exercise.","シエルはしおりのページを開き、昨日解いた問題の次の行を読む。"],"책상 왼쪽 서랍입니다. 아침에 의사가 다녀간 시각을 적어 두려고요.":
["In the left-hand drawer of the desk. I wanted to note the time the doctor called this morning.","机の左の引き出しでございます。今朝、お医者様がいらした時刻を書き留めておこうかと。"],"편지의 두 귀를 맞춰 접고 붉은 밀랍 위에 가문의 인장을 누릅니다.":
["He folds the corners of the letter together and presses the family seal into the red wax.","手紙の角を合わせて折り、赤い封蝋に家の印章を押す。"],"한 품목의 평판이 3에 이르면 거래처가 다음 달 납품을 제안합니다.":
["When a product's reputation reaches 3, a customer will propose a delivery for the following month.","商品の評判が3に達すると、取引先から翌月納品の依頼が届きます。"],"홍차를 한 번 더 우렸습니다. 오늘은 충분히 쉬셨습니까, 도련님?":
["I’ve brewed another pot of tea. Have you had enough rest today, my lord?","紅茶をもう一度お淹れしました。今日は十分にお休みになれましたか、坊ちゃん？"],"……내 손가락도 안 들어가잖아. 모서리는 용케도 저만큼만 뜯었군.":
["…Even my finger won’t fit. I’m surprised they managed to tear so little off the corners.","……僕の指さえ入らないぞ。よくあれだけ破っただけで済んだものだ。"],"가죽은 그을렸는데 봉랍에는 먼지 한 톨 없군. 누가 새로 봉했지?":
["The leather’s scorched, but there isn’t a speck of dust on the wax. Who resealed it?","革は焦げているのに、封蝋には埃ひとつない。誰が封をし直した？"],"같은 날 심었다는 기록부터 틀렸군. 이쪽만 묵은 꽃대가 남았잖아.":
["The planting date is wrong to begin with. Only this one still has an old flower stalk.","同じ日に植えたという記録からして違う。こっちにだけ古い花茎が残っているだろう。"],"고맙다. 네가 준비한 차도 좋았어. 나중에 한 잔 마셔 보고 싶군.":
["Thank you. Your tea was excellent too. I'd like a cup later.","ありがとう。君が用意した茶もよかった。あとで一杯いただきたいな。"],"골목 이름에 번지까지 여쭤봤습니다. 두 분이 같은 집을 짚으시더군요.":
["I asked for the street name and even the house number. Both gentlemen indicated the same building.","通りの名に加えて番地までうかがいました。お二方とも同じ建物をお示しでしたよ。"],"그 사람은 잠깐 놔둬. 돈은 자네가 셌으니 나는 표를 세어 볼게.":
["Leave the man be for a moment. You’ve counted the money. I’ll count the tickets.","その者はひとまず放っておけ。金は君が数えたから、僕は切符を数えよう。"],"그 정도면 차가 식기 전에 눈을 좀 붙이실 수 있겠군요. 깨워 드리겠습니다.":
["That should give you time to close your eyes before your tea cools. I’ll wake you, my lord.","それならお茶が冷めるまで、少しお休みになれますね。お時間にはお起こしいたします。"],"그래. 일한 보수도 지불하지. 즉, 그 돈은 네가 일해서 번 돈이라는 거야.":
["Yes. And I'll pay you for it. That means the money will be yours because you earned it.","そうだ。働いた分の給金も払おう。つまり、その金はお前自身が働いて稼いだ金になる。"],"그래도 창문은 조금 열어 둬. 오늘만은. ⋯라고 와일드가 말했어.":
["“Leave the window open a crack all the same. Just for today,” says Wilde.","それでも窓は少し開けておいて。今日だけは。……ってワイルドが言ってる。"],"그럼 그 두 줄부터 내일 읽으시지요. 같은 자리에 연필을 끼워 두겠습니다.":
["Then we shall begin with those two lines tomorrow. I shall mark your place with a pencil.","では明日、その二行からお読みになるとよろしいでしょう。鉛筆を挟んでおきます。"],"내일 같은 자리에 꺼내 두겠습니다. 도련님 펜도 곁에 놓아두지요.":
["I shall lay it out here again tomorrow, with your pen beside it, my lord.","明日も同じ場所に出しておきます。坊ちゃんのペンも傍らに。"],"다음은 회사 장부입니다. 위쪽의 ‘팬텀 사(社)’를 열어 보시겠습니까?":
["Next is the company ledger. Would you open Funtom at the top of the screen?","次は会社の帳簿でございます。画面上部の「ファントム社」をお開きいただけますか？"],"도련님. 이번에는 제가 돌아오시라는 말씀을 드려도, 대답이 없으시군요.":
["My lord. This time, even when I ask you to come back, you give me no answer.","坊ちゃん。今度ばかりは、お戻りくださいと申し上げても、お返事がございませんね。"],"도련님께서도 차근차근 익히시면 됩니다. 아직 차를 더 드실 분이 계십니다.":
["Take your time learning, my lord. There is still someone who would like more tea.","坊ちゃんも一つずつお覚えになればよいのです。まだお茶のおかわりをお待ちの方がいらっしゃいますよ。"],"떨어지는 조각은 제가 받겠습니다. 도련님께서는 첫 장 귀퉁이를 눌러 주십시오.":
["I shall catch any pieces that fall. Hold down the corner of the first page, my lord.","落ちる欠片は私が受けます。坊ちゃんは一枚目の角を押さえていてください。"],"마음에 들지 않는 선물에도 답례는 써야지. 첫 장에 아주 좋은 문안이 있어.":
["Even a gift you dislike calls for a thank-you note. There's a splendid example on the very first page.","気に入らない贈り物にも礼状は書かないとね。最初のページにちょうどいい文例があるよ。"],"맞아. 그게 우리 천막에 걸린 이름이야. ⋯라고 와일드가 말했어.":
["“That's right. That's the name on our tent,” says Wilde.","「そう。うちのテントに掲げてある名前だ」……って、ワイルドが言ってる。"],"맞았습니다. 그럼 밑줄을 긋고, 다음 문장도 같은 식으로 읽어 보십시오.":
["Correct. Now underline it and try reading the next sentence in the same way.","正解でございます。ではそこに下線を引いて、次の文も同じ要領でお読みください。"],"먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.":
["Let me first offer my heartfelt condolences on the loss of your family, and thank God for your safe return.","まず、ご家族を亡くされたことに心より哀悼の意を表します。そして、そなたの無事を神に感謝いたします。"],"목제 완구는 어제 돌려주셨고, 돈은 한 푼도 못 받으셨답니다.":
["He says he returned the wooden toy yesterday and has yet to see a penny.","木の玩具は昨日返したのに、代金は一銭も受け取っていないとのことです。"],"반년 뒤에 쓸 종이값은 남겨 둬. 딴 데 쓸 일이 생길 테니.":
["Set aside what we’d spend on paper in six months’ time. We’ll find another use for it.","半年後に使うはずの紙代は取っておけ。別の使い道ができる。"],"반으로 잘라. 그렇다고 나머지 반을 접시에 그대로 올려놓으라는 뜻은 아니고.":
["Cut it in half. And that doesn’t mean you can put the other half on my plate as well.","半分に切れ。残り半分も一緒に皿へ載せろという意味じゃないぞ。"],"봉랍과 필체가 서로 다른 발신인을 가리킵니다. 편지가 거친 손을 추적합니다.":
["The wax and the handwriting point to different senders. Trace the hands the letter passed through.","封蝋と筆跡が別々の差出人を示している。手紙が誰の手を経たかをたどる。"],"브라우저 저장소를 사용할 수 없습니다. 이 탭을 닫으면 진행 내용이 사라집니다.":
["Browser storage is unavailable. Closing this tab will erase your progress.","ブラウザに保存できません。このタブを閉じると進行状況が失われます。"],"상대가 먼저 납기를 앞당겼습니다. 그 조건을 계약서에 옮겨 두지요.":
["They offered an earlier delivery date of their own accord. I shall put those terms in the contract.","先方から納期を早めてくださいました。その条件を契約書に記しておきましょう。"],"세바스찬은 문 앞으로 나가 장갑을 벗고, 뒤늦은 손님처럼 노크했다.":
["Sebastian stepped outside, removed his gloves and knocked as though he were a late arrival.","セバスチャンは扉の外に出て手袋を脱ぐと、遅れて来た客のようにノックした。"],"세바스찬이 접수처에서 돌려받은 참가표를 수첩에 끼워 둡니다.":
["Sebastian tucks the entry slip the clerk returned to him into his notebook.","セバスチャンは受付で返された参加票を手帳に挟みます。"],"소란이 가라앉았을 때 골목의 사내들은 하나같이 바닥에 뻗어 있었다.":
["By the time things quietened down, every one of the men from the alley lay sprawled on the ground.","騒ぎが収まった時には、路地の男たちは全員、地面に伸びていた。"],"손님을 맞으려면 메이드 한 명은 있어야 한다고 말씀하신 분은 도련님이셨습니다.":
["It was you, my lord, who said we needed at least one maid if we were to receive guests.","客を迎えるならメイドが一人は必要だとおっしゃったのは、坊ちゃんでしたが。"],"손님이 말하는 동안 잔을 채우셨군요. 당사자는 눈치도 못 챘겠습니다.":
["You refilled your guest’s cup while they were speaking. I doubt they even noticed.","お客様がお話しの間にお茶を注ぎ足されましたね。ご本人はお気づきにもならなかったでしょう。"],"시엘 님, 길에서 드실 차를 챙겼습니다. 떠나시기 직전에 따라 드리겠습니다.":
["Lord Ciel, I’ve packed tea for the journey. I shall pour it just before you set out.","シエル様、道中のお茶をご用意しました。ご出発の直前にお注ぎいたします。"],"시엘 도트 · 드래그하거나 방향키로 위치 조정 · Shift와 방향키로 크게 이동":
["Ciel sprite · Drag or use the arrow keys to move · Hold Shift for larger steps","ドット絵のシエル · ドラッグまたは矢印キーで移動 · Shiftを押しながら矢印キーで大きく移動"],"시엘 팬텀하이브 백작이라는 이름을 짊어진 이상, 앞으로 나아가는 수밖에 없어.":
["So long as I bear the name of Earl Ciel Phantomhive, the only way is forward.","シエル・ファントムハイヴ伯爵の名を背負った以上、僕は前へ進むしかない。"],"시엘, 마지막 달걀만 남았어! 내가 숨긴 곳이니까, 이번엔 네가 찾아야 해!":
["Ciel, there’s just one egg left! I hid it myself, so this time you have to find it!","シエル、残る卵はあと一つよ！　私が隠したんだから、今度はあなたが見つけてね！"],"안에 이만큼 남겨 뒀어요. 풀면 다음 봄까지 입으실 수 있을 겁니다요.":
["I left this much tucked inside, I did. Let it out and it should see you through to next spring.","内側にこれだけ折り込んでおいたですだ。ほどけば来年の春まで着ていただけますだ。"],"앗, 정말 자국이 났네요! 내일은 끈부터 느슨하게 보러 와야겠다.":
["Oh, it really has left a mark! First thing tomorrow I’d better make sure the ties are loose.","あっ、本当だ。跡がついてる！　明日は真っ先に、紐がきつくなってないか見に来なくちゃ。"],"언덕 위의 시엘과 세바스찬이 밤하늘 아래 불타는 건물을 바라본다.":
["From a hilltop, Ciel and Sebastian watch a building burn beneath the night sky.","丘の上から、シエルとセバスチャンが夜空の下で燃え上がる建物を見つめている。"],"여기, 아버지가 돌아가신 날. 누군가 잉크를 칼로 긁어 냈지?":
["Here. The day my father died. Someone scraped the ink off with a knife, didn’t they?","ここだ。父が死んだ日。誰かが刃物でインクを削り取ってるな？"],"연대를 정하셨으니 틀린 날짜가 적힌 사본도 골라내시겠군요.":
["Now that you’ve established the period, I imagine you can pick out the copy bearing the wrong date.","年代を見極められたのですから、日付を誤った写しもお分かりでしょう。"],"연착 책임을 넣으니 싼 쪽이 바뀌었습니다. 이 조건으로 서명하시지요.":
["Once we account for who pays for delays, the other offer is cheaper. Shall we sign on those terms?","遅配に伴う費用まで含めると、もう一方のほうが割安です。こちらの条件でご署名なさってはいかがでしょう。"],"예. 팬텀하이브가의 집사로서, 성심을 다해 도련님을 모시겠습니다.":
["Of course. As butler to the House of Phantomhive, I shall serve him with all my heart.","ええ。ファントムハイヴ家の執事として、誠心誠意、坊ちゃんにお仕えいたします。"],"오전에 들른 손님은 돌려보냈습니다. 오후에도 마차는 부르지 않을 겁니다.":
["I sent the morning caller away. I shan’t be sending for the carriage this afternoon, either.","午前のお客様にはお引き取りいただきました。午後も馬車は呼びません。"],"왕자님께 무슨 말씀을 드릴지, 오늘만은 시엘 님께 여쭙고 싶었습니다.":
["Just for today, Lord Ciel, I wish I could ask you what to say to the prince.","王子に何と申し上げたらよいか、今日ばかりはシエル様にお尋ねしたかった。"],"원작 30권 · 올빼미에게 건넨 고용 제안 / 피니안 합류 뒤 월말 추첨":
["Manga, vol. 30 · A job offer for the ‘Owl’ / May occur at month-end after Finnian joins","原作30巻・「梟」への雇用の申し出／フィニアン加入後、月末に発生することがある"],"은포크는 열두 벌입니다. 생선용 나이프는 아래쪽 서랍에 가지런히 있습니다.":
["Twelve silver forks. You’ll find the fish knives neatly laid out in the lower drawer.","銀のフォークは十二本です。魚用のナイフでしたら下の引き出しに揃えてございます。"],"이제 얼마든지 굵어져도 되겠어요! 남은 것도 제가 얼른 이렇게 옮길게요!":
["Now it can grow as thick as it likes! I’ll move the rest of the ribbons right away!","これで枝がもっと太くなっても大丈夫ですね！　残りのリボンもすぐに結び替えます！"],"이쪽 끝을 잡아당겨 보시죠. 예, 그렇게요. 안쪽도 보시겠습니까?":
["Try pulling this end. Yes, just so. Would you care to look inside?","こちらの端を引いてみてください。ええ、そのように。中もご覧になりますか。"],"잠시 후, 세바스찬이 포박한 침입자를 질질 끌고 저택으로 돌아왔다.":
["A short while later, Sebastian came back to the manor, dragging a bound intruder behind him.","しばらくして、セバスチャンが縄で縛った侵入者を引きずって屋敷に戻ってきた。"],"재가를 청하는 서류를 다시 꾸릴 수는 있습니다. 반년 뒤에 다음 심의가 열립니다.":
["We could prepare a fresh petition for royal approval. The next review is in six months.","裁可を願う書類を改めて整えることはできます。次の審議は半年後です。"],"조커의 짐에서 이게 나왔어. 우리 식구들을 데려가라고 한 게 당신이야?":
["We found this among Joker's things. Was it you who had our family taken away?","ジョーカーの荷物からこれが出てきた。家族のみんなを連れていけって言ったのは、あんた？"],"주문하신 물건을 주문하신 대로 보내 드렸습니다. 지난 전표를 보시면 아실 겁니다.":
["We sent exactly what was ordered. The earlier delivery slips will bear that out.","ご注文の品を、ご注文どおりにお届けしました。以前の納品伝票でお確かめいただけます。"],"첫 주문부터 이번 물량까지입니다. 어느 상자를 여셔도 같은 견본과 대조하실 수 있습니다.":
["Here is everything from the first order to the present shipment. Whatever crate you open, you can check its contents against this same sample.","最初のご注文から今回の納品分までございます。どの箱を開けても、この見本と照合していただけます。"],"축하드립니다. 손님들을 맞으실 준비를 꼼꼼히 해 두신 보람이 있군요.":
["Congratulations. All the care you took in preparing for your guests has paid off.","おめでとうございます。お客様をお迎えする準備を入念になさった甲斐がございましたね。"],"풀이의 세 번째 줄을 보십시오. 이제 제가 여백에 힌트를 남길 필요가 없겠습니다.":
["Look at the third line of your solution. I shan’t need to leave hints in the margin any longer.","解答の三行目をご覧ください。もう私が余白に手がかりを書き添える必要はございませんね。"],"필체를 옮긴 두 줄을 인장 옆에 놓으십시오. 같은 해인지 보이십니까?":
["Lay the two lines of copied handwriting beside the seal. Can you tell whether they’re from the same year?","筆跡を写した二行を印章の隣に。どちらも同じ年のものか、お分かりですか？"],"하늘에 크고 둥근 빛이 떠 있었다. S-012의 바로 앞에는 두 사람이 서 있었다.":
["A great round light hung in the sky. Two people stood right in front of S-012.","空には大きな丸い光が浮かんでいた。S-012の目の前に、二人の人間が立っていた。"],"한 조각만 둬. 아까는 차를 마셨는데 레몬 맛밖에 기억이 안 나더군.":
["Just one slice. Last time I drank tea, but all I remember tasting was lemon.","一切れでいい。さっきは紅茶を飲んだのに、覚えているのはレモンの味だけだ。"],"합계 아래의 작은 글씨도 보십시오. 마차가 늦으면 누가 비용을 냅니까?":
["Read the small print beneath the total as well. If the carriage is late, who bears the cost?","合計額の下の小さな文字もご覧ください。馬車が遅れたら、誰が費用を負担するのでしょう？"],"홍차를 따르는 사이, 시엘이 케이크의 모서리를 반듯하게 잘라 냈다.":
["While the tea was being poured, Ciel cut a neat slice from the corner of the cake.","紅茶が注がれる間に、シエルはケーキの角をきっちりと切り分けた。"],"후식은 오렌지 젤리입니다. 그럼 잠시 다녀오겠습니다. 천천히 드십시오.":
["For dessert, orange jelly. Now, if you'll excuse me for a moment. Do take your time.","デザートはオレンジのゼリーです。では、少々失礼いたします。どうぞごゆっくり。"],"……그렇다고 날 죽이러 온 녀석한테 메이드 앞치마를 두르겠다는 거야?":
["…And on that account you're going to put a maid's apron on someone who tried to kill me?","……それで、僕を殺しに来た奴にメイドのエプロンを着せる気か？"],"……예. 팬텀하이브가의 집사로서, 성심을 다해 도련님을 모시겠습니다.":
["…Of course. As butler to the House of Phantomhive, I shall serve him with all my heart.","……ええ。ファントムハイヴ家の執事として、誠心誠意、坊ちゃんにお仕えいたします。"],"가격이 같은 견적서 두 장. 세바스찬이 달력 위에 반씩 겹쳐 놓았다.":
["Two quotations, both for the same price. Sebastian laid them across the calendar, one half covering the other.","同額の見積書が二通。セバスチャンは半分ずつ重ねてカレンダーの上に置いた。"],"가문을 증명하는 서류는 반송되었습니다. 답신은 딱 한 줄뿐이더군요.":
["They returned the papers attesting to your lineage. The reply itself amounted to one line.","家系を証す書類は返送されました。お返事のほうは、たった一行でしたよ。"],"견본과 납품표에 같은 표시를 남기셨군요. 다음 주문 때 대조하기 좋겠습니다.":
["You put matching marks on the sample and its delivery slip. That will make checking the next order quite simple.","見本と納品票に同じ印をつけられましたね。次のご注文の折、照合しやすくなります。"],"그럼 넌 반대쪽에 앉아. 둘이 앉을 때도 흔들리나 보게.":
["Then take the other end. Let’s see if it wobbles with both of us on it.","ならお前は反対側に座れ。二人で座ってもぐらつくか見てみよう。"],"그렇게 꽉 묶으면 굵어질 자리가 없잖아. 자, 이쪽은 내가 잡고 있을게.":
["Tie it that tight and the branch has no room to grow. Here, I’ll hold this side.","そんなにきつく結んだら、枝が太れないだろう。ほら、こっちは僕が持つ。"],"난 누가 요리하든 상관없어. 식탁에 올릴 거면 맛있는 게 좋다는 거지.":
["I don't care who cooks it. I simply like the food on my table to taste good.","僕は誰が作ろうとかまわない。食卓に出すなら、うまいものがいいというだけだ。"],"내 옷깃을 잡은 건 저쪽이야. 내가 영국인이면 그건 물을 필요도 없나?":
["It was one of them who grabbed my collar. Or does the fact that I'm English spare you the trouble of asking?","僕の襟をつかんだのはあっちだ。僕が英国人なら、そんなことは聞くまでもないのか？"],"내가 언제 인정해 달랬어? ……먼저 해, 에드워드. 손님들 차가 식겠어.":
["When did I ask for your blessing? …Go on, Edward. Our guests’ tea is getting cold.","僕がいつ認めてくれと頼んだ？　……先にどうぞ、エドワード。お客様の紅茶が冷めてしまう。"],"네가 불러 준 이름이 좋았어. 다음에도 스네이크라고 불러 줘. 마이 로드.":
["I liked hearing you call me by my name. Call me Snake next time too. My lord.","呼んでくれた名前が好きだった。今度もスネークって呼んでくれ。マイロード。"],"네가 연습할 때는 이 폰이 한 칸 뒤에 있었지. 자, 이제 내 차례다.":
["When you practised, this pawn was one square further back. Now it’s my turn.","練習の時はこのポーンが一マス後ろにいた。さあ、今度は僕の番だ。"],"다음은 저택 관리입니다. ‘관리 · 경영’을 여시면 저택 지도를 펼쳐 드리겠습니다.":
["Now for the estate. Open Estate & Company and I shall lay out the manor map.","次はお屋敷の管理でございます。「屋敷・会社経営」をお開きいただければ、見取り図をお出しいたします。"],"단가를 양보하는 대신 반품 비용을 거래처가 부담하도록 계약서를 고칩니다.":
["Concede on the unit price and amend the contract so the other party covers return costs.","単価で譲る代わりに、返品費用を取引先が負担するよう契約書を改める。"],"도련님, 오늘은 제가 노크할게요! 지난번에 열쇠를 맡아 주셨잖아요!":
["Young master, let me knock today! You looked after the key for me last time!","坊ちゃん、今日は僕がノックします！　この前は鍵を預かってくださいましたから！"],"도련님, 원문을 덮고 방금 읽으신 대목을 옮겨 보시겠습니까?":
["Would you close the original and translate what you’ve just read, my lord?","坊ちゃん、原文を閉じて、今お読みになった箇所を訳していただけますか？"],"도련님께서 읽으시던 장부는 펼쳐 두겠습니다. 돌아오셔서 마저 보시지요.":
["I shall leave your ledger open, my lord. You can finish when you return.","お読みかけの帳簿は開いたままにしておきます。お戻りの際に続きをどうぞ、坊ちゃん。"],"동트기 전 들판에서 반지를 움켜쥔 시엘이 세바스찬을 올려다본다.":
["In a field before dawn, Ciel clutches his ring and looks up at Sebastian.","夜明け前の野原で、シエルは指輪を握りしめ、セバスチャンを見上げる。"],"두 분께서 같은 날 초대하셨는데, 어느 쪽도 거절당했다고 생각하지 않겠군요.":
["Two invitations for the same day, yet neither host will feel you’ve turned them down.","同じ日にお二方からお招きがありましたのに、どちらも断られたとはお感じにならないでしょうね。"],"마지막 굽이를 제가 잘못 짚었군요. 도련님이 고르신 길로 돌아가겠습니다.":
["I misjudged that last bend. We shall return by the route you chose, my lord.","最後の曲がり角は私の見立て違いでした。坊ちゃんのお選びになった道で帰りましょう。"],"마지막 네 마디가 한 호흡에 이어졌습니다. 그 부분에 책갈피를 꽂아 두지요.":
["Those last four bars flowed in a single breath. I shall mark the passage for you.","最後の四小節がひと息でつながりましたね。その箇所にしおりを挟んでおきましょう。"],"마지막 줄에서 잉크가 번졌습니다. 시엘은 답을 외운 채 새 종이를 달라고 합니다.":
["The ink has run on the last line. Ciel has the answer by heart and asks for a fresh sheet.","最後の行でインクがにじみました。シエルは答えを覚えたまま、新しい紙を求めます。"],"맞았어! 반주가 다시 들리는 데까지 한 번도 안 멈췄잖아! 대단해~.":
["We got it! We didn’t stop once before we could hear the piano again! That was wonderful!","ぴったり！　またピアノが聞こえるところまで、一度も止まらなかったわ！　すごい！"],"먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.」":
["Let me first offer my heartfelt condolences on the loss of your family, and thank God for your safe return.”","まず、ご家族を亡くされたことに心より哀悼の意を表します。そして、そなたの無事を神に感謝いたします。」"],"방금 복도를 지나간 건 우리 애들이야. 놀라지 마. ⋯라고 에밀리가 말했어.":
["“That was us in the corridor just now. Don’t be alarmed,” says Emily.","さっき廊下を通ったのはうちの子たちよ。驚かないでね……ってエミリーが言ってる。"],"삼십 분이면 충분하시겠습니까? 그럼 그 시각에 맞춰 손님을 들이겠습니다.":
["Will half an hour suffice? Very good. I’ll show the guests in then.","三十分でよろしいのですか？　では、そのお時間にお客様をお通しいたします。"],"상자 밑에 상호를 찍었군. 고객이 뒤집어 봐야 회사 이름을 알겠어?":
["You’ve stamped our name underneath. Must a customer turn the box upside down to see who made it?","箱の底に社名を入れたのか。客はいちいち箱をひっくり返さないと、どこの品か分からないのか？"],"성문에서 열쇠를 내라. 읽었어. 그런데 자네들은 그 열쇠를 어디서 받았지?":
["‘Play a key at the castle gate.’ Yes, I’ve read that. And where did you get this key of yours?","「城門で鍵を出せ」。そこは読んだ。それで君たちは、どこでその鍵を手に入れた？"],"세바스찬이 빈 장부를 덮었다. 유난히 공손하고 평온한 미소였다.":
["Sebastian closed the empty ledger. His smile was exceptionally courteous and serene.","セバスチャンは空の帳簿を閉じた。その微笑はひときわ丁重で、穏やかだった。"],"시엘! 그 판은 그대로 둬! 지난번에 네가 지기 직전에 집에 갔잖아!":
["Ciel! Leave the board as it is! You went home just when you were about to lose last time!","シエル！　盤はそのままにしておけ！　この前は負けそうになったところで帰っただろう！"],"시엘, 네가 먼저 손을 내밀던 날을 기억해. 오늘은 그 생각으로 여기까지 왔어.":
["Ciel, I remember the day you held out your hand first. I came all this way today thinking of that.","シエル、あなたから手を差し出してくれた日のこと、覚えてるわ。今日はそれを思いながら、ここまで来たの。"],"시엘은 서랍을 열었다. 구겨진 방명록 한 장이 맨 위에 얹혀 있었다.":
["Ciel opened a drawer. A crumpled page from a visitors’ book lay on top.","シエルが引き出しを開けると、丸まった宿帳の一頁がいちばん上にあった。"],"시엘의 책장이 한참 동안 넘어가지 않습니다. 잠든 손 곁에서 찻잔을 치웁니다.":
["Ciel has not turned a page in some time. He is asleep. You lift the teacup from beside his hand.","ずいぶん長いこと、シエルの本のページがめくられていない。眠った坊ちゃんの手元からティーカップをそっと下げる。"],"심사위원이 상대의 이름을 부릅니다. 시엘은 자리에서 일어나 먼저 박수를 보냅니다.":
["The judge calls his opponent’s name. Ciel rises and is the first to applaud.","審査員が対戦相手の名を呼びます。シエルは席を立ち、真っ先に拍手を送ります。"],"아그니, 시엘 자리는 치우지 말아 줘. 오늘은 내가 거기 앉고 싶어.":
["Agni, leave Ciel’s place set. I want to sit there today.","アグニ、シエルの席はそのままにしておいてくれ。今日は俺がそこに座りたい。"],"오늘 보신 견본을 내일 주문하셔도 그대로 보내 드립니다. 지난 주문서를 보시지요.":
["Order tomorrow what you've seen today, and that's precisely what we'll send. Do look at our earlier orders.","今日ご覧になった見本を明日ご注文いただいても、そのままの品をお届けします。以前の注文書をご覧ください。"],"왕실에서 회신이 도착했습니다. 전령은 답도 듣지 않고 말머리부터 돌리더군요.":
["A reply from the Palace. The messenger turned his horse before I could give him an answer.","王室から返書が届きました。使いの者は返事も聞かずに馬首を返しましたよ。"],"이 두 줄은 같은 집이야. 잘못 뺀 반 자루는 아이들이 셋인 집 몫이고.":
["These two entries are the same household. And that half sack deducted in error belongs to the family with three children.","この二行は同じ家だ。それに、間違って引いた半袋は子どもが三人いる家の分だ。"],"이미 삯을 치렀습니다만. 원하신다면 남는 편지를 불쏘시개로 쓸 수는 있습니다.":
["We’ve paid the fare already. Though if you wish, the spare letters would make excellent kindling.","もう運賃を支払っておりますが。よろしければ、余った手紙を焚きつけにはできますよ。"],"이번엔 끝까지 박자를 셌어. 시엘이 내 손을 놓던 데서는 잠깐 틀렸지만.":
["I counted the beat right to the end this time. I only lost my place for a moment, where you used to let go of my hand, Ciel.","今度は最後まで拍を数えたわ。シエルが私の手を離したところだけ、ちょっと間違えちゃったけど。"],"이상하지. 장사가 잘된 날보다 네가 뭘 고를지 맞힌 날이 더 기억에 남더라고.":
["Odd, isn’t it? I remember the days I guessed what you’d choose better than the days I did a roaring trade.","不思議だね。繁盛した日より、君が何を選ぶか当てた日のほうをよく覚えてるんだ。"],"이쪽이 견본입니다. 실제 납품분의 치수는 바로 옆에 적어 뒀습니다.":
["Here is the sample. The measurements of the goods we supplied are written beside it.","こちらが見本です。実際にお届けした品の寸法は、すぐ隣に記してあります。"],"잉크가 다른 줄에만 표식을 남기셨군요. 원본은 제가 따로 보관하겠습니다.":
["You marked only the lines in a different ink. I shall keep the original separately.","インクの違う行だけに印をつけられましたね。原本は私が別に保管いたします。"],"잎보다 먼저 색이 변한 꽃이 눈에 띕니다. 도련님이 걸음을 멈춥니다.":
["One flower has changed colour before its leaves. The young master stops to look.","葉に先んじて色を変えた花が目を引きます。坊ちゃんが足を止めます。"],"저택도 한 바퀴 돌아보시겠습니까? 돌아가는 길은 화면 아래의 ‘뒤로’입니다.":
["Would you care for a tour of the manor as well? Select Back at the foot of the screen to return.","お屋敷もひと巡りなさいますか？　画面下の「戻る」からお戻りいただけます。"],"정신을 차렸을 때, 부서진 철문 너머로 S-012는 맨발로 달리고 있었다.":
["The next thing S-012 knew, he was past the broken iron door, running barefoot.","気がつくと、S-012は壊れた鉄の扉を抜け、裸足で走っていた。"],"지난번에 짚어 둔 자리입니다. 한번 보시지요. 이번 견본은 잘 고쳤습니다.":
["This is the spot we noted last time. Do have a look. They’ve put it right in this sample.","前回ご指摘した箇所です。どうぞご覧ください。今回の見本では、きれいに直っています。"],"차변과 대변이 한 페니만큼 어긋납니다. 끝줄의 글씨가 조금 기울어 있습니다.":
["The debits and credits differ by a penny. The writing on the last line has a slight slant.","借方と貸方が一ペニー合わない。最後の一行は、わずかに筆跡が傾いている。"],"첫 잔은 거의 안 드셨더군요. 이번엔 조금 연하게 해 봤습니다. 어떠십니까?":
["I noticed you barely touched the first cup. I’ve made this one a little weaker. Is it more to your liking?","一杯目はあまりお口にされませんでしたね。今度は少し薄めにしてみました。いかがですか？"],"큰 바늘이 여섯에 닿으면 깨워. 안 일어난다는 이유로 재워 놓지 말고.":
["Wake me when the minute hand reaches six. And don’t let me sleep on just because I won’t get up.","長針が六を指したら起こせ。僕が起きないからって、そのまま寝かせておくなよ。"],"‘핀’. 옛말로 금발이라는 뜻이지. 여기 나오는 영웅도 그 머리 때문에 그렇게 불렸어.":
["“Finn.” It's an old word for fair-haired. The hero in this book was called that on account of his hair.","「フィン」。昔の言葉で金髪という意味だ。この本の英雄も、その髪の色からそう呼ばれたんだ。"],"……난 누가 요리하든 상관없어. 식탁에 올릴 거면 맛있는 게 좋다는 거지.":
["…I don't care who cooks it. I simply like the food on my table to taste good.","……僕は誰が作ろうとかまわない。食卓に出すなら、うまいものがいいというだけだ。"],"가지를 안 부러뜨리고 옮길 수 있게 됐어요. 도련님한테 보여 드리려고 했는데.":
["I can move it now without breaking the branches. I wanted to show the young master.","もう枝を折らずに移せるんです。坊ちゃんにお見せしたかったな。"],"같은 날 보낸 두 봉투에서 서로 다른 밀랍 냄새가 납니다. 어디부터 보시겠습니까?":
["The wax on two envelopes sent the same day has two different scents. Where would you look first?","同じ日に出した二通の封筒で、封蝋の香りが違います。どこからご覧になりますか？"],"그 얘기는 됐어. 세바스찬, 홍차. 오늘은 이제 아무도 만나고 싶지 않아.":
["Enough of that. Sebastian, tea. I shan’t see anyone else today.","その話はもういい。セバスチャン、紅茶だ。今日はもう誰にも会いたくない。"],"그건 손님들이 가신 뒤에 들어도 돼. 저쪽 탁자에 차를 더 내어 드려.":
["That can wait until our guests have gone. Take some more tea to that table.","そういう話はお客様がお帰りになってからでいい。あちらのテーブルに茶のお代わりを。"],"그럼 들여. 문밖에 세워 두는 것도 결국 가문의 체면을 깎는 일일 뿐이잖아.":
["Then show him in. What will people think of this house if we leave him standing on the doorstep?","なら通せ。外に立たせたって、うちの面目を余計に潰すだけだろう。"],"그럼 이 매듭을 한 손으로 풀어 보십시오. 다른 손엔 장난감을 들고 있다고 생각하시고요.":
["Then try undoing this knot with one hand, my lord. Imagine you’re holding a toy in the other.","では、片手でこの結び目をほどいてみてください。もう片方の手には玩具をお持ちのつもりで。"],"그리고 좁은 사다리를 기어올라, 머리 위 뚜껑을 힘껏 밀어 젖혔다.":
["He scrambled up a narrow ladder and shoved the hatch above his head open with all his might.","細いはしごをよじ登り、頭上の蓋を力いっぱい押し開けた。"],"금이 간 자국까지 겹칩니다. 봉한 사람과 보낸 사람을 나눠 볼 수 있겠군요.":
["Even the impressions of the crack match. Now you can distinguish the person who sealed the letters from the person who sent them.","ひびの跡まで重なりますね。これなら封をした者と差出人を分けて考えられましょう。"],"길 건너 완구점에서 한참을 머무셨군요. 다음 외출 때도 들르시겠습니까?":
["You spent quite some time at the toyshop across the road. Shall we stop there on your next outing?","通りの向かいの玩具店で、ずいぶん長くお過ごしでしたね。次のお出かけでもお立ち寄りになりますか？"],"내일 아침이면 됩니다요. 왼팔이랑 오른팔 길이도 따로 적어 놨습니다요.":
["It’ll be ready tomorrow morning. I took down the measure of each arm separately, I did.","明日の朝には仕上がりますだ。右腕と左腕の寸法も別々に控えてあるですだ。"],"넌 언제나 매듭을 왼쪽으로 묶잖아. 그래서 새 둥지도 한번 들춰 봤지.":
["You always tie your knots on the left. That's why I looked under the bird's nest too.","お前はいつも左に結び目を作るだろう。だから鳥の巣の下も見てみたんだ。"],"답장을 기다리는 초청장이 은쟁반에 놓여 있습니다. 시엘은 첫 줄의 호칭부터 살핍니다.":
["An invitation awaits a reply on a silver tray. Ciel begins by looking at the salutation.","銀の盆の上で、招待状が返事を待っている。シエルはまず、書き出しの敬称に目を通す。"],"도련님, 길에서 드시라고 빵을 싸 뒀습니다. 이번 건 안 태웠습니다, 하하하!":
["Packed you some bread for the road, young master. Didn’t burn it this time, ha!","道中のパンを包んでおいたぜ、坊ちゃん。今度は焦がしてねえよ、ははっ！"],"도련님, 손이 떨리십니다. 다음 일정까지 밀어붙이면 몸이 더 상할 겁니다.":
["Your hands are trembling, my lord. If you insist on keeping your next engagement, you will only make yourself worse.","坊ちゃん、手が震えておいでです。次のご予定まで押し通されては、お体に障りますよ。"],"도련님께서 부르시면 언제든 대답하겠습니다. ‘대화’로 한번 불러 보시겠습니까?":
["Whenever you call, my lord, I shall answer. Would you try calling me with the ‘Talk’ button?","坊ちゃんがお呼びになればいつでもお答えします。「会話」から一度お呼びいただけますか？"],"또 와 주셨네요! 오늘은 도련님 구두에 흙 안 튀게 물부터 미리 줬어요.":
["You came back! I watered early today so you wouldn’t get mud on your shoes, young master.","また来てくださったんですね！　今日は坊ちゃんの靴に泥が跳ねないよう、先に水をまいておきました！"],"마지막 왕복입니다. 체조실 문턱까지 보폭을 흐트러뜨리지 않고 가 보시겠습니까?":
["One last length and back. Can you keep your stride even all the way to the gymnasium doorway?","これが最後の一往復です。体操室の戸口まで、歩幅を乱さずに行けますか？"],"말이 담장 앞에서 멈춥니다. 시엘은 고삐를 쥔 손부터 가만히 폅니다.":
["The horse stops before the wall. Ciel slowly opens the hand that holds the reins.","馬が塀の前で立ち止まる。シエルはまず、手綱を握った手をそっと開く。"],"벤치는 가벼웠는데 수평 맞추기가 영 어려웠어요! 한쪽에 앉아 보실래요?":
["The bench was light enough. Getting it level was the hard part! Will you try sitting on one end?","ベンチは軽かったんですけど、水平にするのが難しくって！　片方の端に座ってみてくれますか？"],"보시다시피 지난 납품 때와 규격이 같습니다. 견본의 치수도 여기에 적었습니다.":
["As you see, the specifications are the same as for our last delivery. The measurements of the sample are here as well.","ご覧のとおり、前回の納品分と同じ規格です。見本の寸法もここに記してあります。"],"복도에서 우릴 보면 놀라지 마. 마중 나온 거야. ⋯라고 에밀리가 말했어.":
["“Don’t be startled if you see us in the hall. We came to meet you,” says Emily.","廊下で俺たちを見ても驚くな。迎えに出たんだ。……ってエミリーが言ってる。"],"빈 줄까지 보이는 대로 옮겨 적겠습니다. 제가 기억하는 대목은 따로 기록해 두지요.":
["I shall copy it exactly as it stands, blank lines and all. What I remember I shall set down separately.","空いた行もそのままに、見た通りに書き写しましょう。私の覚えていることは別に記しておきます。"],"사용인을 근무지로 끌어 놓으세요. 사용인과 근무지를 차례로 눌러도 됩니다.":
["Drag a staff member to a post, or select the person and then the post.","使用人を持ち場へドラッグしてください。使用人、持ち場の順に押しても配置できます。"],"세바스찬이 주인 앞에 무릎을 꿇었다. 늘 장화를 벗겨 주던 높이였다.":
["Sebastian knelt before his master. He knew this height well. It was where he always knelt to draw off the boy’s boots.","セバスチャンは主人の前にひざまずいた。いつも長靴を脱がせる時と同じ高さだった。"],"손님방 수건이 또 도련님 방에 들어갔습니다요. 글씨가 어찌나 비슷한지…….":
["The guest towels have ended up in your room again, young master. The writing looks ever so similar…","客間のタオルがまた坊ちゃんのお部屋に……。文字があんまり似てますもので……。"],"시엘 님이 앉으시던 자리는 비워 두었습니다. 런던에 오시면 들러 주십시오.":
["I’ve kept your usual place free, Lord Ciel. Do call whenever you come to London.","シエル様のお席は空けてございます。ロンドンにいらしたら、どうぞお立ち寄りください。"],"시엘, 네가 바쁜 건 알아. 그래도 네가 차 한 잔 할 시간은 내가 비워 둘 테다.":
["Ciel, I know you’re busy. Still, I’ll always keep time for a cup of tea with you.","シエル、忙しいのは分かってる。だが、お前と茶を一杯飲む時間くらい、俺が空けておいてやる。"],"시엘은 며칠 전 세바스찬에게서 받아 본 스코틀랜드 야드의 보고서를 떠올렸다.":
["Ciel recalled the Scotland Yard report Sebastian had handed him a few days ago.","シエルは数日前、セバスチャンから受け取って目を通したスコットランドヤードの報告書を思い出した。"],"시엘이 안대를 풀었다. 매듭이 한 번 걸려서, 두 번째에는 두 손을 써야 했다.":
["Ciel undid his eyepatch. The knot caught, and on his second attempt he had to use both hands.","シエルは眼帯を外した。結び目が一度引っ掛かり、二度目は両手を使わなければならなかった。"],"심사위원이 에드워드에게 상장을 건넵니다. 시엘은 손님들과 함께 박수를 보냅니다.":
["The judge hands Edward the certificate. Ciel joins the guests in applauding him.","審査員がエドワードに賞状を手渡します。シエルも客たちと一緒に拍手を送ります。"],"어린 시절부터 숨겨 온 지병이 악화되어, 시엘은 결국 동트기 전 숨을 거뒀습니다.":
["The illness Ciel had concealed since childhood worsened. He drew his last breath before dawn.","幼い頃から隠してきた持病が悪化し、シエルは夜明けを待たずに息を引き取った。"],"여기 있는 것 중 아무거나 골라 보시죠. 저희 상표를 붙인 건 전부 같은 검사를 거칩니다.":
["Choose any of the articles here. Everything bearing our trademark passes the same inspection.","ここにあるものをどれでもお選びください。弊社の商標を付ける品は、すべて同じ検査を通ります。"],"예. 그런데 저희는 사람이 모자라고, 피니 혼자서 저택 일을 전부 맡을 수도 없지요.":
["Indeed. We are short of staff, and Finny can hardly manage the entire household on his own.","ええ。何しろ人手不足ですし、フィニひとりに屋敷の仕事をすべて任せるわけにもまいりません。"],"오후 두 시엔 바구니를 반 뼘만 옮겨 줘. ⋯라고 에밀리가 말했어.":
["“At two in the afternoon, move the basket just half a handspan,” says Emily.","午後二時に、籠を手の幅の半分だけずらしてね……ってエミリーが言ってる。"],"월말에 영입한 사용인의 실무 숙련도가 숙소 등급만큼 성장 (월 +1 / +2 / +3)":
["At month-end, recruited staff gain proficiency equal to the quarters' level (+1 / +2 / +3 per month).","月末に、加入した使用人の実務熟練度が宿舎の等級分だけ上がります（月＋1／＋2／＋3）。"],"의사가 기침이 멎은 시간을 묻습니다. 시엘은 시계보다 먼저 창문을 봅니다.":
["The doctor asks what time the coughing stopped. Ciel looks at the window before the clock.","医師が咳の治まった時刻を尋ねる。シエルは時計より先に窓に目をやる。"],"이 문장에는 저도 한참 걸렸습니다. 도련님의 번역을 한 부 가져도 되겠습니까?":
["That sentence took me quite some time as well. Might I have a copy of your translation, my lord?","この一文には私もずいぶん時間を取られました。坊ちゃんの訳を一部いただけますか。"],"이런, 백작. 내 가게엔 비를 피할 지붕도 있는데 굳이 거기에 서서 보시나?":
["Why, my lord, my shop does have a roof. Must you stand out there in the rain to look?","おや、伯爵。うちにも雨宿りのできる屋根はあるのに、わざわざそこでご覧になるのかい？"],"이름은 이미 셋이나 듣고 왔어. 공교롭게도 셋 다 같은 날 뒈졌더군.":
["I’ve already had three names. Strange thing is, all three men dropped dead on the same day.","名前ならもう三つ聞いた。妙なことに三人とも同じ日にくたばっていたがな。"],"조금 더 진하게 우려 보았습니다. 어느 쪽이 나은지는 도련님께서 말씀해 주시지요.":
["I’ve brewed this one a little stronger. I shall leave it to you to say which you prefer.","少し濃いめに淹れてみました。どちらがお好みか、お聞かせいただけますか、坊ちゃん。"],"조커가 그랬다고? 매일 같은 천막에서 잤는데 스네이크한텐 아무 말도 안 했어.":
["Joker did that? We slept in the same tent every night, and he never said a word to Snake.","ジョーカーが？　毎晩同じテントで眠ってたのに、スネークには何も言わなかったわ。"],"처음부터 끝까지 같은 너비로 디디셨습니다. 마룻바닥의 표시를 지워도 되겠군요.":
["Your stride was even from beginning to end. I believe we can erase the marks on the floorboards.","最初から最後まで同じ歩幅でございました。もう床板の印は消してもよろしいでしょう。"],"천천히 내쉬십시오. 시계는 제가 멈췄으니 도련님이 준비되면 다시 시작하지요.":
["Breathe out slowly. I’ve stopped the watch. We shall begin again when you’re ready, my lord.","ゆっくりお吐きください。時計は止めてあります。坊ちゃんのご用意ができたら再開しましょう。"],"첫 춤을 청하신 두 분이 같은 곡명을 적으셨군요. 벌써 악장이 활을 들었습니다.":
["Both guests who asked for the first dance have written down the same piece. The leader of the orchestra has already raised his bow.","最初のダンスを申し込まれたお二方が、同じ曲名をお書きです。すでに楽団の首席奏者が弓を構えましたよ。"],"축하드립니다, 도련님. 견본과 실적을 꾸준히 갖추신 보람이 있군요.":
["My congratulations, my lord. Your work on the samples and your sales record has borne fruit.","おめでとうございます、坊ちゃん。見本と実績を着実に揃えてこられた甲斐がございましたね。"],"타나카가 장서표를 한 장씩 넘깁니다. 도련님이 가문의 필체를 알아봅니다.":
["Tanaka turns the bookplates over one by one. The young master recognises his family’s handwriting.","タナカが蔵書票を一枚ずつめくります。坊ちゃんは一族の筆跡に気づきます。"],"편지에 적어 주신 장미가 올봄엔 피겠군요. 그때는 제가 먼저 인사를 가겠습니다.":
["The roses you mentioned in your letter should bloom this spring. When they do, let me be the one to call on you.","お手紙にあった薔薇が、この春には咲くのでしょうね。その時はこちらからご挨拶に伺います。"],"핀’. 옛말로 금발이라는 뜻이지. 여기 나오는 영웅도 그 머리 때문에 그렇게 불렸어.":
["Finn.” It's an old word for fair-haired. The hero in this book was called that on account of his hair.","フィン」。昔の言葉で金髪という意味だ。この本の英雄も、その髪の色からそう呼ばれたんだ。"],"한 번에 한 건을 수락할 수 있습니다. 납기에는 해당 품목의 표준품부터 출고합니다.":
["You can accept one order at a time. On the due date, standard-grade units of the ordered product ship first.","一度に受けられる注文は1件です。納期には指定商品の標準品から出荷します。"],"활이 현에서 떨어지자 집사가 악보를 뒤집었다. 끝나지 않은 음 하나가 방에 남았다.":
["As the bow left the string, the butler turned the score face down. An unfinished note hung in the room.","弓が弦を離れると、執事は楽譜を伏せた。弾きさしの音が一つ、部屋に残った。"],"35개월이나 발버둥 쳤지만…… 이제 놈들의 이름을 알아낸대도 더 쫓을 마음이 없어.":
["I’ve fought for thirty-five months… and now, even if I knew their names, I’ve no wish to pursue them.","三十五か月もあがいてきたのに……今さら奴らの名前が分かっても、もう追う気になれない。"],"「먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.」":
["“Let me first offer my heartfelt condolences on the loss of your family, and thank God for your safe return.”","「まず、ご家族を亡くされたことに心より哀悼の意を表します。そして、そなたの無事を神に感謝いたします。」"],"가주께서는 집안일은 물론, 어른들에게 뒤지지 않을 지식과 교양도 갖추셔야 합니다.":
["As head of the house, you must know how to run it, and hold your own among adults in learning and manners.","当主たるもの、家政はもちろん、大人に引けを取らぬ知識と教養も身につけていただかなくては。"],"개월이나 발버둥 쳤지만…… 이제 놈들의 이름을 알아낸대도 더 쫓을 마음이 없어.":
[" months I’ve fought for this… and now, even if I knew their names, I’d have no wish to pursue them.","か月もあがいてきたのに……今さら奴らの名前が分かったところで、もう追う気はない。"],"개킨 쪽으로 손을 넣으면 작은 수건부터 잡힙니다요. 도련님이 보신 그대로입니다요.":
["Reach in from the folded side and the little towels come out first. Just as you saw, young master.","折り目の側から手を入れると、小さなタオルから取れますだ。坊ちゃんがご覧になったとおりですだよ。"],"게다가 일을 그르친 이상 이제 백에게 돌아갈 수도 없겠지요? 마침 이곳에는 빈자리가 있습니다.":
["Besides, now that you've failed, you can hardly go back to Bai, can you? As it happens, we have a vacancy.","それに、仕事に失敗なさった以上、もう白のもとへは戻れないでしょう？　折よく、こちらにはひとつ空きがございます。"],"견본은 오늘 만든 물건이고 장부는 지난 납품 때 쓴 겁니다. 함께 봐 주십시오.":
["The sample was made today. The ledger dates from the last delivery. Please examine them together.","見本は今日作った品で、台帳は前回の納品の際につけたものです。一緒にご覧ください。"],"고마워. 그래도 이건 스네이크가 직접 건네고 싶대. ⋯라고 키츠가 말했어.":
["“Thank you. But Snake would like to give him this one himself,” says Keats.","「ありがとう。でも、この手紙はスネークが自分で渡したいんだって」……って、キーツが言ってる。"],"그건 내가 끌게. 너는 칼을 데워 와. 찬 걸로 자르면 단면이 망가져.":
["I’ll blow that one out. Go and warm the knife. A cold blade will spoil the cut.","それは僕が吹き消す。お前はナイフを温めてこい。冷たい刃じゃ切り口が崩れる。"],"그래, 응원 고마워. ……그렇게 노려보지 마. 리지한테는 비밀로 할 테니까.":
["Well, thank you for cheering me on. …No need to glare. I won’t tell Lizzy.","そうか、応援ありがとう。……そんなに睨むな。リジーには黙っておくから。"],"그럼 너희가 잘못했잖아! 아그니, 저 땅꼬마 좀 도와줘! 집사도!":
["Then it’s your fault! Agni, give that little fellow a hand! His butler too!","だったらお前たちが悪いじゃないか！　アグニ、あのチビを助けてやれ！　執事もだ！"],"날 죽여. 뭘 물어봐도 대답은 안 해. 정원 바닥만 피로 더러워질걸.":
["Kill me. Whatever you ask, I won't talk. All you'll get is blood on your garden path.","殺しな。何を聞かれたって答えやしないよ。庭の敷石が血で汚れるだけさ。"],"늦게 와도 알아. 이제 네 구두 소리는 기억하거든. ⋯라고 오스카가 말했어.":
["“Even if you’re late, I’ll know it’s you. I remember the sound of your shoes now,” says Oscar.","遅くても分かる。もう靴音を覚えたから。……ってオスカーが言ってる。"],"도련님, 셔츠는 이쪽에 걸어 뒀습니다요! 이번엔 단추도 다 맞췄습니다요!":
["Your shirts are hanging here, young master! I got every button right this time!","坊ちゃん、シャツはこちらに掛けてありますだ！　今度は釦も全部揃えましただよ！"],"도련님, 왕실에서 서신이 왔습니다. 봉랍을 확인했습니다. 도련님 앞으로 온 친서입니다.":
["A letter from the Palace, my lord. I’ve examined the seal. It is addressed to you personally.","坊ちゃん、王室から書状が届きました。封蝋は確かめてございます。坊ちゃんに宛てた親書です。"],"도련님이 차를 식히시는 버릇까지 선대와 닮았다는 말을 끝내 못 드렸군요.":
["I never did tell you, young master, how you took after your father even in letting your tea go cold.","紅茶を冷ましてしまわれる癖まで先代とそっくりだと、とうとう坊ちゃんにお伝えできませんでしたな。"],"도안 사용료도 함께 도착했습니다. 도련님께서 고르신 그림이 실린 달력을 한 부 남겨 둘까요?":
["The fee for the illustration came with it. Shall I keep a calendar with the picture you chose, my lord?","図案の使用料も届きました。坊ちゃんがお選びになった絵の載る暦を、一部取っておきましょうか？"],"동쪽 계단 밑 작은 서랍에서 나왔습니다. 내일은 도련님께서 직접 열어 보시지요.":
["It turned up in the little drawer under the east staircase. Perhaps you’d like to open it yourself tomorrow, my lord.","東階段の下の小さな引き出しにございました。明日は坊ちゃんご自身で開けてみてはいかがです？"],"리지, 내가 장미 쪽을 볼 때만 웃음을 참더군. 이리 와. 마지막 건 같이 열자.":
["Lizzy, the only time you stifled a laugh was when I looked towards the roses. Come here. Let’s open the last one together.","リジー、僕がバラの方を見た時だけ、笑いをこらえていたな。こっちに来い。最後の一つは一緒に開けよう。"],"맨 아래 것을 하나 꺼내 보시죠. 마차에 실려도 멍이 들지 않게 담았습니다.":
["Do take one from the bottom. I've packed them to travel by carriage without bruising.","一番下のものを一つお取りください。馬車で運んでも傷まないように詰めました。"],"바구니는 밑을 받쳐 줘. 에밀리가 손잡이에 턱을 괴고 자거든.":
["Hold the basket from underneath. Emily sleeps with her chin on the handle.","籠は下から持って。エミリーは取っ手にあごをのせて眠るんだ。"],"발소리만 듣고도 맞혔어. 오늘도 그 구두네. ⋯라고 오스카가 말했어.":
["“I knew you just by your footsteps. Those shoes again today,” says Oscar.","足音だけで分かったぞ。今日もあの靴だな……ってオスカーが言ってる。"],"복도 시계가 네 번 울렸다. 시엘은 세 번째와 네 번째 사이에서 거칠게 숨을 골랐다.":
["The clock in the hall struck four. Between the third stroke and the fourth, Ciel struggled to catch his breath.","廊下の時計が四つ打った。三つ目と四つ目の間に、シエルは荒い息を整えた。"],"생산에 쓸 돈은 확인하셨습니까? 아래의 ‘뒤로’를 누르시면 저택으로 돌아갑니다.":
["Have you checked the funds available for production? Select Back below to return to the manor.","生産にお使いになる資金はお確かめになりましたか？　下の「戻る」でお屋敷にお戻りいただけます。"],"서재로 돌아온 타나카가 시엘에게 그날의 일을 이야기하고, 다시 가문의 서신을 맡는다.":
["Back in the study, Tanaka tells Ciel what happened that day and resumes handling the family correspondence.","書斎に戻ったタナカはシエルにあの日のことを語り、再び一家の書簡を預かる。"],"서재로 적었습니다. ‘이달 일정 실행’을 열면 확정하기 전에 지출을 검토할 수 있습니다.":
["I’ve put you down for the study. Select ‘Begin the month’ to review the cost before you confirm.","書斎の予定を入れておきました。「今月の予定を開始」をお選びいただくと、確定前に出費をご確認いただけます。"],"세바스찬이 책을 닫고 같은 문장을 두 번 읽었다. 두 번째에는 한 음절이 달랐다.":
["Sebastian closed the book and recited the sentence twice. The second time, he changed a single syllable.","セバスチャンは本を閉じ、同じ文を二度読み上げた。二度目は一音節だけが違った。"],"소개장도 여권도 없이 청방에 쫓기면서, 이 문을 나가면 어디로 가실 생각입니까?":
["No references, no passport, and the Green Gang after you. Where do you mean to go when you walk out that door?","紹介状も旅券もなく、青幇にも追われる身で、この扉を出てどちらへ行かれるおつもりですか？"],"시엘. 힘들 땐 이 소마 님께 기대 달라고. 나도 그땐 눈치를 봐 줄 테니까.":
["Ciel. You can count on the great Soma when things get rough. I’ll even take a hint, just for you.","シエル。つらい時にはこのソーマ様を頼れ。その時くらいは俺も察してやるからな。"],"시엘은 편지 끝의 날짜를 내려다보았다. 날짜만 두 번, 소리 없이 훑었다.":
["Ciel looked down at the date at the foot of the letter. Silently, he read it twice. Only the date.","シエルは手紙の末尾の日付に目を落とした。日付だけを二度、黙って目でなぞった。"],"시엘이 안대를 풀었다. 매듭이 한 번 엉켜, 두 번째에는 양손을 다 써야 했다.":
["Ciel undid his eyepatch. The knot tangled once. On his second attempt he needed both hands.","シエルは眼帯を外した。結び目が一度もつれ、二度目は両手を使わなければならなかった。"],"실례합니다. 두 분께서 다정히 의논하시는 동안 저쪽 은식기부터 세어도 되겠습니까?":
["Pardon me. While you two enjoy your little tête-à-tête, may I start counting the silver over there?","失礼。お二人が仲よくご相談なさっている間に、あちらの銀器から数えてもよろしいですかな？"],"아직 마구간에 있습니다, 왕자님.\\n손님, 봉투만 전해 드려도 되겠습니까?":
["It's still in the stables, Your Highness.\nSir, shall I see that your letter reaches him?","まだ厩にございます、ソーマ様。\nお客様、お手紙でしたら私がお届けしましょうか？"],"오늘 기록은 지난 순과 같군요. 다음에는 다른 과목을 편성해 보시겠습니까, 도련님?":
["Today’s record matches the last session’s. Might we try a different subject next time, my lord?","今日の記録は前回と同じですね。次は別の科目をお選びになりますか、坊ちゃん？"],"오늘도 창가에 두 잔씩 놓았습니다. 시엘 님 몫에는 우유를 따로 드렸습니다.":
["I’ve set two cups by the window again today. I kept the milk separate for you, Lord Ciel.","今日も窓辺にカップを二つご用意いたしました。シエル様のミルクは別にお持ちしました。"],"오실 줄 알고 도련님 셔츠는 따로 걸어 뒀습니다요. 단추도 세 봤고요!":
["I thought you’d come, young master, so I hung up your shirt separately. Counted the buttons, too!","お見えになると思って、坊ちゃんのシャツは別に掛けておきましただ。釦の数も確かめましただよ！"],"왕실에 올릴 서신은 이쪽입니다, 도련님. 마차가 떠나기 전에 보시겠습니까?":
["Here is the letter for the Palace, my lord. Would you care to read it before the carriage leaves?","王室へお届けする書状はこちらです、坊ちゃん。馬車が出る前に目を通されますか？"],"요 며칠 빈 바구니만 창 앞에 있더군. 바닥 천은 왜 반만 덮었어?":
["I’ve seen that empty basket by the window for days. Why does the cloth only cover half the bottom?","ここ数日、窓辺には空の籠ばかりだな。底の布が半分しか敷いていないのはなぜだ？"],"요양 중인 타나카 씨가 열쇠와 장부를 보내셨습니다. 어느 쪽부터 보시겠습니까?":
["Mr Tanaka has sent the keys and a ledger from his sickbed. Which would you care to see first?","療養中のタナカさんから、鍵と帳簿が届いております。どちらからご覧になりますか？"],"위가 소란스럽다. 피니안의 옆에 앉아 있던 아이가 먼저 고개를 들었다.":
["A commotion came from overhead. The child beside Finnian looked up first.","頭上が騒がしい。フィニアンの隣に座っていた子が真っ先に顔を上げた。"],"이 곡은 끝까지 밀어붙이면 새가 날아가 버려. 한 소절쯤은 쉬어도 좋아.":
["Rush straight through this piece and the bird will fly away. You can spare a bar for a breath.","この曲は最後まで勢いよく弾くと、鳥が逃げてしまうよ。一小節くらい休んでもいい。"],"이 브라우저에서는 진행 상황이 임시로만 저장됩니다. 탭을 닫으면 이번 진행을 잃습니다.":
["This browser saves your progress temporarily. If you close the tab, you’ll lose this session’s progress.","このブラウザーでは進行状況は一時保存のみです。タブを閉じると今回の進行状況は失われます。"],"이 줄을 보시죠. 지난번에 출고한 물건도 오늘 내놓은 견본과 같은 규격입니다.":
["Look at this line, if you please. Our last shipment was made to the same specifications as today's sample.","こちらの行をご覧ください。前回お届けした品も、本日の見本と同じ規格です。"],"이 편지를 읽을 사람을 찾고 있어. 여기 ‘팬텀하이브 백작 귀하’라고 쓰여 있지?":
["We’re looking for the person this letter is for. It says “To the Earl of Phantomhive” here, doesn’t it?","この手紙の宛先の人を探してる。ここに『ファントムハイヴ伯爵閣下』って書いてあるだろ？"],"이걸로 한번 해 보시죠. 가게에서 내놓는 것과 똑같이 풀을 발라 뒀습니다.":
["Do try this one. I’ve glued it just as they do at the shop.","こちらでお試しください。店頭の品と同じように糊をつけてございます。"],"장부의 네 번째 줄이 바로 여기예요. 비가 와도 번호는 그대로라서 금방 찾았어요!":
["Here’s the one on the fourth line of the ledger! The rain didn’t change the number, so I found it straight away!","帳面の四行目はこれです！　雨が降っても番号は変わらないから、すぐ見つかりました！"],"쟁반은 테이블에 남고 손님끼리 이야기를 시작했습니다. 훌륭한 주최시군요.":
["The tray is on the table, and the guests have fallen into conversation. My compliments to their host.","盆はテーブルに収まり、お客様同士でお話が弾んでいます。見事なおもてなしでございます。"],"저쪽에선 내가 대답도 안 한 셈이군. 종이를 줘. 사과문은 내가 쓰지.":
["As far as they know, I never even answered. Paper. I’ll write the apology myself.","先方にしてみれば、僕は返事ひとつ寄越さなかったわけだ。紙をくれ。詫び状は僕が書く。"],"제가 직접 받았습니다. 그때는 저 말고 이 장부를 읽을 이가 남을 줄은 몰랐지요.":
["I took delivery myself. At the time, I hardly thought anyone besides me would be left to read this ledger.","受け取ったのは私です。あの頃は、私のほかにこの帳簿を読む者が残ろうとは思いもよりませんでした。"],"첫 바퀴는 어느 집의 물건이나 잘 굴러갑니다. 저희 것은 세 바퀴째를 봐 주십시오.":
["Anyone's toy runs well on the first lap. Watch ours on the third, if you please.","一周目なら、どこの品もよく走ります。弊社の品は、どうぞ三周目をご覧ください。"],"카카오를 진하게 풀었어. 숟가락을 세워 볼 생각이라면 조금 더 식혀야겠지만.":
["I made the cocoa good and thick. If you want your spoon to stand up in it, you'll have to let it cool a little longer.","ココアを濃く溶いたよ。匙を立ててみたいなら、もう少し冷まさないとね。"],"커튼은 아직 닫지 말아 주시라요. 도련님 방을 어둡게 두고 싶지 않습니다요.":
["Please leave the curtains open a little longer. I can’t bear the young master’s room to be dark.","カーテンはもう少し、そのままにしてくださいまし。坊ちゃんのお部屋を暗くしておきたくないんですだ。"],"피니안의 머리카락이 조금 자랐을 때쯤, 시엘이 제 방으로 소년을 불렀다.":
["When Finnian’s hair had grown out a little, Ciel sent for the boy to come to his room.","フィニアンの髪が少し伸びた頃、シエルは少年を自分の部屋に呼んだ。"],"……견본은 그쯤 닦아 두고. 지금 보여 드려야 할 건 이 품목의 납품 기록이야.":
["…That's quite enough polishing. What we need to show them now is this item's delivery record.","……見本を磨くのはそのくらいにしておけ。今お見せすべきなのは、この品目の納品記録だ。"],"게임을 불러오는 중입니다. 이 안내가 계속 보이면 현재 화면에서 게임 실행이 시작되지 않은 상태입니다.":
["Loading the game. If this message stays on screen, the game has not started.","ゲームを読み込んでいます。この案内が消えない場合、ゲームが起動できていません。"],"견본은 그쯤 닦아 두고. 지금 보여 드려야 할 건 이 품목의 납품 기록이야.":
["That's quite enough polishing. What we need to show them now is this item's delivery record.","見本を磨くのはそのくらいにしておけ。今お見せすべきなのは、この品目の納品記録だ。"],"궁에서 나를 백작이라 부르든 애송이라 부르든 상관없어. 그래서 그만두는 게 아니야.":
["The Palace can call me an earl or a little boy for all I care. That’s not why I’m stopping.","宮殿で伯爵と呼ばれようが青二才と呼ばれようが、どうでもいい。それでやめるんじゃない。"],"그건 다른 품목이야. 이 물건을 보낸 전표만 추려. 몇 장뿐이어도 그대로 올려.":
["That's a different product. Pick out just the slips for this one. Show them all, however few there are.","それは別の品目だ。この品を届けた伝票だけ選り分けろ。数枚しかなくても、そのまま出せ。"],"내가 정원을 충분히 살피지 못했나 보네. 다음에는 눈에 띄는 것만 따라가지 않겠어.":
["I didn’t look closely enough around the garden. Next time I’ll look beyond what first catches my eye.","庭の調べ方が足りなかったようだ。次は目につくものばかり追わないさ。"],"담당관님, 찾으시는 날짜가 있으십니까? 지난 주문서까지 날을 맞춰 꽂아 뒀습니다.":
["Is there a particular date you're looking for, sir? Even the earlier orders are filed by date.","調達官殿、お探しの日付がございますか。以前の注文書まで日付順に綴じてあります。"],"담당관이 같은 점수를 받은 두 상회의 이름을 나란히 적고 양쪽 견본 앞에 상장을 놓습니다.":
["The official writes the two firms’ names side by side against their matching scores, then sets a certificate before each sample.","担当官は同点だった二つの商会の名を並べて書き、双方の見本の前に賞状を置きます。"],"답안은 이미 오래전에 써 두고, 날짜만 오늘 도장을 꾹 눌러 보낸 모양이지요.":
["It seems the answer was written long ago. All that remained today was to stamp the date and post it.","返答などとうに書き上げてあって、今日は日付の印をぽんと押して寄越しただけなのでしょう。"],"도련님, 나가시는 길에 정원 흙은 밟으셔도 돼요! 방금 쓸었어요!":
["You can step on the garden path on your way out, young master! I’ve just swept it!","坊ちゃん、お出かけの時は庭の土を踏んでも大丈夫です！　今掃いたばかりですから！"],"도련님께서 어제저녁에 직접 명하셨습니다. 열이 오르셔서 잊으신 모양이군요.":
["You gave the order yourself last night, my lord. Your fever must have put it out of your mind.","昨晩、坊ちゃんご自身がそうお命じになりました。熱でお忘れのようですね。"],"말은 제가 데려오지요. 도련님은 오늘 저녁에는 그쪽 손으로 찻잔만 안 드시면 됩니다.":
["I’ll fetch the horse. All I ask is that you don’t lift your teacup with that hand tonight, my lord.","馬は私が連れてまいります。坊ちゃんは今夜、その手でティーカップをお持ちにならなければ結構です。"],"봉투 가장자리가 바스락거렸다. 스네이크는 구겨진 데를 엄지로 몇 번이고 폈다.":
["The edge of the envelope crackled. Snake ran his thumb over the crease again and again, smoothing it flat.","封筒の端がかさりと鳴った。スネークはつぶれたところを親指で何度も伸ばした。"],"상대가 보낸 편지에는 존칭이 하나 빠져 있습니다. 시엘의 펜촉이 공중에서 멎습니다.":
["The correspondent has left out a title. Ciel’s pen pauses in mid-air.","先方の手紙には敬称が一つ抜けている。シエルのペン先が宙で止まる。"],"세 번의 일정에 이만큼 들겠군요. 오늘은 연습이니 ‘취소’로 일정표만 덮겠습니다.":
["That is the cost of all three engagements. This is only practice, so let us select Cancel and close the schedule.","三つの予定で、これだけの費用がかかります。今日は練習ですので、「キャンセル」で予定表を閉じましょう。"],"세바스찬이 돌려받은 참가표를 수첩에 끼웁니다. 이번에는 경연에 참가하지 못합니다.":
["Sebastian slips the returned entry slip into his notebook. You cannot take part this time.","セバスチャンは返された参加票を手帳に挟みます。今回は大会に出られません。"],"손님이 모자를 걸었다가 기절할 일 있나. 뱀들의 거처도 따로 만들어 두면 되는 거지?":
["And have the guests faint when they hang up their hats? I take it the snakes will need quarters of their own.","帽子を掛けた客を気絶させる気か。蛇たちには別に居場所を用意してやればいいんだな？"],"스네이크, 네가 보고 들은 건 야드에 네 입으로 얘기해. 난 해줄 수 있는 게 없어.":
["Snake, tell the Yard what you saw and heard, in your own words. There’s nothing I can do for you.","スネーク、見聞きしたことは、自分の口でヤードに話せ。僕にしてやれることはない。"],"심사대의 것만 고른 솜씨라고요? 납품 상자에서도 하나 꺼내 보시겠습니까?":
["You think we reserved our best work for the judging table? Would you care to take another from the delivery crate?","審査台の品にだけ腕を振るったと？　納品用の箱からも、一つお取りになってみますか。"],"어느 손님의 입맛이 더 까다로운지는 됐어. 어제 이 두 통을 각각 어디에 뒀지?":
["Never mind which customer is the fussier eater. Where did you put each tin yesterday?","どちらの客が味にうるさいかはもういい。昨日、この二つの缶をそれぞれどこに置いた？"],"언제까지고 널 피험자 12번이라 부를 순 없잖아. 금발이 제법 근사하게 자랐군.":
["I can’t go on calling you Subject Twelve. That fair hair of yours has grown out rather well.","いつまでも被験体十二番とは呼べないだろう。ずいぶんきれいな金髪が伸びてきたな。"],"여기서는 온실 유리에 노을이 두 번 비쳐요! 봐요, 두 번째 노을이 벌써 왔네요!":
["From here you get two sunsets in the greenhouse glass! Look, here comes the second one already!","ここだと温室のガラスに夕焼けが二度映るんですよ！　ほら、もう二度目が来ました！"],"영수증 한 장에 동전 한 닢이 모자랍니다. 맞춰 본 전표를 오른쪽 함에 넣습니다.":
["The money for one receipt is a coin short. Ciel puts the vouchers he has checked in the tray on his right.","領収書一枚の金額に、硬貨一枚分だけ足りない。シエルは照合を終えた伝票を右の箱に入れる。"],"영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.":
["In the absence of a lord, your lands and title reverted temporarily to the Crown. It is my wish to restore them to you.","領主不在のため王家が一時預かっていた領地と爵位を、そなたに返還したく存じます。"],"옆집은 벌써 등을 켰어. 봐, 고인 물에까지 진열한 물건이 비치잖아.":
["They’ve lit the lamps next door already. Look, you can see their wares reflected even in the puddles.","隣はもう灯りをつけてる。見ろ、水たまりにまで商品が映ってるぞ。"],"예. 열일곱 번째 접시에서 이제 단 건 꼴도 보기 싫다며 포크를 던지셨지요.":
["Quite. At the seventeenth plate, you threw down your fork and declared you never wanted to see anything sweet again.","ええ。十七皿目で、甘いものは見るのも嫌だとフォークをお投げになりました。"],"예. 종이가 얇아졌으니 등불에 비추면 필압이 고스란히 드러날 겁니다.":
["Indeed. The paper is thinner there. Hold it to the lamp and the marks left by the pen should show quite clearly.","ええ。紙が薄くなっています。灯りに透かせば筆圧の跡がくっきり浮かぶでしょう。"],"오늘 서명은 여기까지만 할래. …마지막 두 줄을 세 번이나 읽었는데 무슨 말인지 모르겠어.":
["That’s enough signing for today. …I’ve read those last two lines three times and I still couldn’t tell you what they say.","今日の署名はここまでだ。……最後の二行を三度も読んだのに、何が書いてあるのかさっぱりだ。"],"올해는 열두 개가 다 촛대에 들어갔다. 초 사이의 설탕 체스 말만 하나 비스듬했다.":
["This year the holder had room for all twelve candles. Among them, a single sugar chessman stood askew.","今年は十二本とも燭台に収まった。蝋燭の間で、砂糖のチェスの駒が一つだけ斜めを向いていた。"],"완두콩 수프와 미트볼입니다. 크루아상은 방금 구웠고, 달걀도 삶아 두었습니다.":
["Pea soup and meatballs. The croissants are fresh from the oven, and I've boiled eggs for you as well.","グリーンピースのスープとミートボールでございます。クロワッサンは焼きたてを、卵は茹でてご用意しました。"],"우선 묵을 숙소부터 알아보겠습니다. 조식은 별도 요금이어도 괜찮으시겠습니까?":
["I shall start by looking for lodgings. Would you mind paying extra for breakfast?","ひとまず宿を探しましょう。朝食は別料金でもよろしいですか？"],"작년에 쓰시던 촛대에는 열 개밖에 들어가지 않아서요. 하나는 케이크에 바로 꽂았습니다.":
["Last year’s holder has room for only ten, so I set one directly into the cake.","去年の燭台には十本しか立ちませんので、一本はケーキに直接立ててございます。"],"저 복도에서 구두 소리가 났습니다요. 도련님이 아니란 걸 알아도 받아들이기가 힘듭니다요.":
["I heard shoes in that corridor. I know they weren’t the young master’s. I just can’t make myself believe it.","あの廊下で靴音がしましただ。坊ちゃんじゃないって分かってても、なかなかそうは思えませんだ。"],"전표까지 올려. 몇 장이냐고? 보시면 아실 텐데 굳이 우리가 먼저 말할 건 없지.":
["Put the slips out too. How many? They'll see for themselves. No need for us to announce it.","伝票も出せ。何枚かって？　見れば分かる。こちらからわざわざ告げることはない。"],"정원에 가져가 봐. 책에 그린 여우 발자국과 진짜가 얼마나 닮았는지.":
["Take it into the garden. See how closely the fox tracks in the book match the real thing.","庭に持っていってごらん。本に描かれた狐の足跡が本物とどれくらい似ているかね。"],"제가 늦게 도착한 손님이라면, 먼저 오신 손님을 기다리게 하지 않고 어디로 안내하시겠습니까?":
["Suppose I’m a late arrival. Where would you show me without keeping your first guest waiting?","私が遅れて来た客だといたしましょう。先にお越しのお客様をお待たせせず、どちらへご案内なさいますか？"],"제가 이 댁에 온 뒤로는 들은 바가 없습니다. 도련님께서 약한 소리를 하시는 분이 아니어서요.":
["I’ve never heard it since I came to this house. The young master doesn’t readily complain.","この屋敷に参りましてからは聞いた覚えがございません。坊ちゃんは弱音をお吐きになる方ではありませんから。"],"제가 할 수 있는 일이 눈앞에 있는데, 굳이 누가 와서 하실 때까지 두는 편이 더 불편합니다.":
["If there’s a job I can do right in front of me, I find it harder to leave it for someone else.","目の前に私にもできる仕事があるのに、どなたかが来てくださるまで手をつけずにいるほうが、落ち着かないのです。"],"좌석표에 한 칸을 남겨 두지요. 손님이 늘 때마다 주인이 일어설 수는 없습니다.":
["Let us leave a place free on the seating plan. A host cannot rise each time a guest arrives.","席次表に一席、空きを作っておきましょう。お客様が増えるたびに主人が席を立つわけにはまいりません。"],"주방부터 살펴보겠습니다. 지도에서 주방을 짚으면 현재 등급과 개수 비용이 함께 나옵니다.":
["Let us start in the kitchen. Select it on the map to see its current level and the cost of an upgrade.","まずは厨房から。見取り図で厨房をお選びいただくと、現在の等級と改修費用をご覧になれます。"],"주방에서 오는 동안 한 칸 미끄러진 모양입니다. 제 킹에는 뜻밖의 행운이었지요.":
["It seems to have slipped one square on its way from the kitchen. A most fortunate turn for my king.","厨房から運ぶ間に、一マス滑ったようですね。私のキングには思いがけぬ幸運でした。"],"주방을 맡길 사람이 필요하겠군요. 시설 정보 아래 ‘사용인 배치’에 명단을 준비했습니다.":
["We shall need someone to look after the kitchen. The staff assignment roster is just below the facility details.","厨房を任せる者が必要ですね。施設情報の下、「使用人の配置」に名簿を用意しております。"],"차가 식기 전에 와. 네가 주문을 할 때까지는 나도 이 가게를 닫을 생각이 없거든.":
["Come before the tea goes cold. I’ve no intention of closing up until you’ve placed your order.","お茶が冷めないうちにおいで。君の注文を聞くまでは、私も店を閉めるつもりはないからね。"],"창문은 조금 열어 둘게. 우리가 먼저 네가 오는 걸 알아채게. ⋯라고 와일드가 말했어.":
["“I’ll leave the window open a crack so we’ll be the first to know when you’re coming,” says Wilde.","窓を少し開けておく。俺たちが真っ先に帰りに気づけるように。……ってワイルドが言ってる。"],"책등 높이가 똑같으니 한눈에 찾겠어. 이 칸은 손대지 말고 그대로 둬.":
["The spines are exactly the same height. I’ll spot the pair at a glance. Leave this shelf as it is.","背の高さが揃っているから、ひと目で見つかる。この棚はこのままにしておけ。"],"천막에선 뱀을 돌봤어. 여기선 뭘 하면 돼? ⋯라고 와일드가 말했어.":
["“At the circus I looked after the snakes. What would I do here?” says Wilde.","「テントでは蛇の世話をしてた。ここでは何をすればいい？」……って、ワイルドが言ってる。"],"축음기가 회전하는데 반주가 한 박자 비었다. 집사의 발끝이 아직 바닥에 닿지 않았다.":
["The gramophone kept turning, but the accompaniment dropped out for a beat. The butler’s toe had yet to touch the floor.","蓄音機は回ったまま、伴奏が一拍途切れた。執事のつま先はまだ床に着いていない。"],"치수를 따로 재 보시겠습니까? 여기를 보십시오. 납품 장부에도 같은 수치가 적혀 있습니다.":
["Would you care to take your own measurements? Look here. The delivery ledger gives the very same figures.","ご自身でも寸法を測られますか。こちらをご覧ください。納品台帳にも同じ数字が記してあります。"],"파란 실은 손님방, 흰 실은 도련님 방. 이번엔 수건이 제자리에 갔습니다요!":
["Blue thread for the guest room, white for the young master’s. The towels are in the right places this time!","青い糸は客間、白い糸は坊ちゃんのお部屋。今度はちゃんとタオルをお届けできましただ！"],"한 모금 마셔 봐! 난 이게 좋은데 넌 어때? 다음엔 네가 고른 걸로 마시자!":
["Have a sip! I like this one. What do you think? Next time you can choose!","ひと口飲んでみろ！　俺はこれが好きだが、お前はどうだ？　次はお前が選んだのを飲もう！"],"……궁에서 나를 백작이라 부르든 애송이라 부르든 상관없어. 그래서 그만두는 게 아니야.":
["…The Palace can call me an earl or a little boy for all I care. That’s not why I’m stopping.","……宮殿で伯爵と呼ばれようが青二才と呼ばれようが、どうでもいい。それでやめるんじゃない。"],"가문의 열쇠를 넘긴 뒤에도, 주인과 집사는 마지막 영수증 한 장을 놓고 한참이나 다퉜습니다.":
["Even after handing over the keys, master and butler argued at length over one final receipt.","屋敷の鍵を引き渡した後も、主と執事は最後の領収書一枚をめぐって、しばらく言い争っていた。"],"그걸 봤어? 리본까지 새로 묶었는데! 자, 열어 봐. 마지막 달걀은 네 거야.":
["You spotted that? But I even retied the ribbon! Go on, open it. The last egg is yours.","そこまで見てたの？　リボンまで結び直したのに！　さあ、開けてみて。最後の卵はあなたのよ。"],"그런데 그 셋의 장례를 죄다 네가 치렀다지? 난 그게 훨씬 구미가 당기는데.":
["But I hear you conducted all three funerals. Now that interests me rather more.","だが三人とも葬式を出したのはお前だそうだな？　僕はそっちのほうがよほど気になる。"],"그을음이 묻은 시엘의 손바닥 위에 푸른 보석이 박힌 가문의 반지가 놓여 있다.":
["The family ring, set with a blue stone, rests in Ciel’s soot-stained palm.","煤けたシエルの手のひらに、青い宝石をあしらった一族の指輪が載っている。"],"난 스네이크야. 장갑이 마음에 든 저 애는 와일드고. ⋯라고 에밀리가 말했어.":
["“I’m Snake. The one who likes your glove is Wilde,” says Emily.","俺はスネーク。その手袋が気に入ったあの子はワイルドだ。……ってエミリーが言ってる。"],"네가 맡겨 둔 열쇠로 열었어. 꽃 한 송이 보러 가는데 매번 사람을 깨워야 하나?":
["I used the key you left with me. Must I wake someone every time I want to see a flower?","お前が預けた鍵で開けた。花を一輪見るたびに誰かを起こせとでも？"],"눈치가 좋은 줄 알았는데, 의외의 것을 묻네.\\n시엘이 반대쪽 손도 내민다.":
["I thought you rather observant. What an odd thing to ask.\nCiel holds out his other hand as well.","気が利くと思っていたのに、妙なことを聞くな。\nシエルはもう片方の手も差し出す。"],"뚜껑 안쪽은 어떠십니까? 장난감을 꺼내는 순간에 한 번은 눈에 들 테니까요.":
["Inside the lid, perhaps? They could hardly miss it as they lift out the toy.","蓋の内側ではいかがでしょう。玩具を取り出す時、必ず一度は目に入りますから。"],"마음에 들었다잖아. 첫 급료에서 장갑 값을 떼면 주인이 너무 옹졸해 보이겠지?":
["He likes it, doesn't he? I'd look a rather petty employer if I docked his first wages for a glove.","気に入ったと言っていただろう。初給金から手袋代を引いたら、いくらなんでもけちな主人に見えるだろうな？"],"범인을 짐작하신 쪽에 책갈피가 꽂혀 있더군요. 결말은 마음에 드셨습니까?":
["I found your bookmark at the page where you guessed the culprit. Was the ending to your liking?","犯人の見当をつけられたページに、しおりが挟んでありましたね。結末はお気に召しましたか？"],"서재에서 시엘은 세바스찬에게 미군 출신을 셰프로 고용하려는 이유를 묻는다.":
["In the study, Ciel asks Sebastian why he wants to hire a former American soldier as the household’s chef.","書斎でシエルはセバスチャンに、なぜ元米兵を屋敷の料理長として雇うつもりなのかと尋ねる。"],"선천적인 천식이셨군요. 고작 이런 위태로운 숨을 숨기고 지금까지 버티셨단 말입니까.":
["Asthma, since birth. Have you truly borne it all this time without letting me see how hard each breath came?","生まれつきの喘息でいらしたのですね。これほどおぼつかない息を隠して、今まで耐えてこられたのですか。"],"세바스찬이 램프를 바짝 가져왔다. 시엘은 말없이 심지를 쑥 내려 불을 죽였다.":
["Sebastian brought the lamp close. Without a word, Ciel wound down the wick until the light was gone.","セバスチャンがランプを寄せた。シエルは黙って芯を下げ、火を消した。"],"세바스찬이 손님 역을 맡습니다. 장갑을 벗는 손의 순서가 지난번과 다릅니다.":
["Sebastian plays the guest. This time he takes off the other glove first.","セバスチャンが客役を務める。今日は前回と反対の手から手袋を外した。"],"소마 님께서 그러고 싶어 하십니다. 제가 먼저 열면 발소리를 듣고도 아쉬워하시더군요.":
["Prince Soma wishes to do it himself. When I open the door first, he hears the footsteps and looks quite crestfallen.","ソーマ様がご自分でとお望みなのです。私が先に開けますと、足音を聞きつけて残念そうなお顔をなさいますから。"],"소매를 걷고 천 끝을 비벼야 할 걸. 장갑 낀 손으로는 올이 풀리는지 모르거든.":
["Roll up your sleeves and rub the edge of the cloth. You can't feel a loose thread through a glove.","袖をまくって布の端をこすってごらん。手袋をしたままじゃ、糸がほつれるか分からないからね。"],"손님들 성함을 적은 쪽지가 그대로군요. 오늘은 꺼내실 일이 없으셨나 봅니다.":
["Your note with the guests’ names is untouched. I take it you had no need of it today.","お客様の名を控えたメモがそのままですね。今日は取り出すまでもなかったようで。"],"스네이크는 벌떡 일어섰다. 손에 쥐고 온 편지를 내미는 데는 한참이 더 걸렸다.":
["Snake sprang to his feet. It was some time before he could bring himself to hold out the letter in his hand.","スネークは勢いよく立ち上がった。握りしめてきた手紙を差し出すまでには、それからずいぶん時間がかかった。"],"시엘, 네가 또 왔으면 이번엔 아무것도 묻지 않고 그냥 옆에 앉아 있었을 텐데.":
["Ciel, if you’d come again, this time I’d have sat beside you without asking a single question.","シエル、また来てくれたら、今度は何も聞かずに隣に座ってたのにな。"],"시엘, 잘해라. 리지가 보고 있다. ……응원한 게 아니다! 내 매제가 되려면 그 정도는 해야지.":
["Do your best, Ciel. Lizzy’s watching. …I wasn’t cheering for you! I expect that much of anyone who means to marry my sister.","シエル、しっかりやれ。リジーが見ているぞ。……応援したわけじゃない！　僕の義弟になろうというなら、それくらい当然だ。"],"시엘은 심사표를 접어 견본 상자에 넣고, 상장을 받는 상대에게 고개를 숙입니다.":
["Ciel folds the score sheet, puts it in the sample box and bows as his opponent accepts the certificate.","シエルは審査票を畳んで見本の箱に収め、賞状を受け取る相手に一礼します。"],"시엘은 주머니 속 남은 반쪽을 매만졌다. 투박하게 뜯긴 종이 결이 손끝에 걸렸다.":
["Ciel fingered the other half in his pocket. The ragged fibres caught against his fingertips.","シエルはポケットの中の半券を撫でた。乱暴に裂かれた紙の繊維が指先に引っ掛かった。"],"시엘이 받은 상장이 찻잔 옆에 놓입니다. 에드워드가 박수를 마치고 자리에 앉습니다.":
["Ciel's certificate is laid beside his teacup. Edward finishes applauding and takes his seat.","シエルの受け取った賞状がカップの隣に置かれます。エドワードは拍手を終え、席に着きます。"],"어느 날의 물건을 보시겠습니까? 저희는 첫 납품분부터 같은 규격에 가문의 이름을 걸었습니다.":
["Which day's goods would you like to inspect? From the very first delivery, we've staked our family name on that same standard.","いつの品をご覧になりますか。初めて納めた品から一貫して、同じ規格にわが家の名を懸けてまいりました。"],"영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.」":
["In the absence of a lord, your lands and title reverted temporarily to the Crown. It is my wish to restore them to you.”","領主不在のため王家が一時預かっていた領地と爵位を、そなたに返還したく存じます。」"],"오늘 밤엔 우리랑 한 바퀴 돌자. 온실 지붕에 달이 걸리는 걸 너한테도 보여 주고 싶어.":
["Come for a walk with us tonight. I want you to see the moon when it hangs over the greenhouse roof.","今夜は私たちとひと回りしましょう。温室の屋根に月がかかるところ、あなたにも見せたいの。"],"오늘은 작은 잔으로 줘. 아까부터 한 모금 마실 때마다 잉크가 손등에 묻잖아.":
["The small cup today. Every time I take a sip I get ink on the back of my hand.","今日は小さいカップにしてくれ。さっきから一口飲むたびに手の甲にインクがつく。"],"이 품목의 전표는 몇 장 없겠군. 다른 전표로 두께를 늘릴 생각은 마. 그대로 올려.":
["There won't be many slips for this item. Don't pad them out with slips for other goods. Show them as they are.","この品の伝票は数枚だろう。ほかの伝票で水増しするな。そのまま出せ。"],"이번에는 도련님의 차례입니다. ‘상태’를 여시면 컨디션과 그간의 성과를 보실 수 있습니다.":
["Your turn, my lord. Open Status to see your condition and what you’ve achieved so far.","今度は坊ちゃんの番です。「状態」をお開きになると、体調とこれまでの成果をご覧いただけます。"],"잘했어, 시엘. ……그렇다고 리지의 옆자리까지 네게 양보하겠다는 뜻은 아니야.":
["Well done, Ciel. …That doesn’t mean I’m giving you the seat beside Lizzy.","よくやった、シエル。……だからといって、リジーの隣の席まで譲るつもりはないぞ。"],"잠깐. 그늘에서는 잘 안 보이잖아. 견본을 빛이 드는 자리로 좀 옮겨 줘.":
["Wait. You can hardly see it in the shade. Move the sample into the light, will you?","待て。日陰ではよく見えないだろう。見本を明るい所へ移してくれ。"],"점수 차이가 크지는 않군. 이번 인증은 저쪽이 받았지만, 평가표를 두고 갈 이유는 없어.":
["There's little between the scores. They have the warrant this time, but that's no reason to leave our assessment behind.","さほどの点差じゃないな。今回の認定は向こうに渡ったが、評価表まで置いていく理由はない。"],"정원 쪽으로 열겠습니다. 서풍이라 빗물이 책상까지 들이칠 염려는 없을 겁니다.":
["The garden window, then. With the wind from the west, your desk should be quite safe.","では、庭に面した窓を。西風ですから、机に雨が吹き込むこともないでしょう。"],"좋아. 이 아이가 집에서 D를 잃어버렸다고 치자. 그럼 남는 B는 어느 집에서 왔지?":
["Very well. Suppose she lost the D at home. Whose house did the spare B come from, then?","いいだろう。この子が家でDをなくしたとしよう。じゃあ、余ったBはどこの家から来たんだ？"],"주인어른을 지켜 드리지 못한 몸으로 다시 이 방에 들어서려니, 고개를 들 면목이 없습니다.":
["I failed to protect my master. To set foot in this room again… I can scarcely lift my head.","旦那様をお守りできなかった身で再びこの部屋に入るのは、まことに顔向けがなりません。"],"첫 주문서부터 마지막 상자까지 가져왔습니다. 제가 고른 것만 보시고 결정을 내리실 필요는 없지요.":
["I've brought everything from the first order to the last crate. You needn't make your decision solely on what I've selected.","最初の注文書から最後の箱まで持参しました。僕が選んだものだけでお決めになることはありません。"],"침실로 돌아왔을 때 시엘은 베갯잇 끝을 손가락 사이에 팽팽하게 말아 쥐고 있었다.":
["When Sebastian returned to the bedroom, Ciel had twisted the edge of the pillowcase tight between his fingers.","寝室に戻ると、シエルは枕カバーの端を指にきつく巻きつけていた。"],"팬텀사가 아직 갖춰야 할 것이 있군. 견본과 이 품목의 실적을 함께 살펴봐야겠어.":
["Funtom still has work to do. Let’s look at the sample alongside this product’s sales record.","ファントム社にはまだ足りないものがある。見本と、この品の販売実績を照らし合わせよう。"],"품에 안기는 감촉이 좋습니다. 귀 뒤의 솔기도 한번 만져 보십시오. 이 솔기만 손끝에 걸립니다.":
["It feels lovely in one's arms. Now run a finger behind the ear, if you would. This is the only seam that catches.","抱き心地はよろしいですね。耳の裏の縫い目にもお触れください。指先に引っかかるのはここだけです。"],"프란시스 고모님이 말씀하셨어. 반격할 기회는 상대가 공격해 왔을 때라고.":
["Aunt Frances told me that the time to strike back is when your opponent attacks.","フランシス叔母様はおっしゃった。相手が攻めてきた時こそ、反撃の好機だと。"],"현장 약도에 빈칸을 남겨 두셨군요. 아직 확인하지 못한 증언은 제가 따로 묶겠습니다.":
["You’ve left gaps on the sketch of the scene. I shall set the statements we’ve yet to verify to one side.","現場の見取り図には空欄を残されましたね。裏の取れていない証言は私が別にまとめておきます。"],"회랑 밖에서 의전관이 백작의 마차를 불렀다. 대답이 없어 한 번 더 불렀다.":
["Beyond the gallery, the master of ceremonies called for the earl’s carriage. Receiving no answer, he called again.","回廊の外で式部官が伯爵の馬車を呼んだ。返事がなく、もう一度呼んだ。"],"……선천적인 천식이셨군요. 고작 이런 위태로운 숨을 숨기고 지금까지 버티셨단 말입니까.":
["…Asthma, since birth. Have you truly borne it all this time without letting me see how hard each breath came?","……生まれつきの喘息でいらしたのですね。これほどおぼつかない息を隠して、今まで耐えてこられたのですか。"],"「영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.」":
["“In the absence of a lord, your lands and title reverted temporarily to the Crown. It is my wish to restore them to you.”","「領主不在のため王家が一時預かっていた領地と爵位を、そなたに返還したく存じます。」"],"가게는 평소대로 열어 둬. 오늘부터 저 배가 닻을 내리는 항구마다 우리 물건을 깔겠다.":
["Open the shop as usual. From today, I want our goods in every port where that ship drops anchor.","店はいつもどおり開けておけ。今日から、あの船が錨を下ろす港すべてにうちの品を並べる。"],"견본의 치수는 여기에 적었습니다. 지난번 납품 기록을 곁에 놓으면 그대로 맞을 겁니다.":
["The sample's measurements are recorded here. Lay the last delivery record beside them and they'll match exactly.","見本の寸法はこちらです。前回の納品記録を隣に置けば、ぴたりと一致するはずです。"],"그럼 이번엔 제가 읽는 쪽으로요! 내일 꽃이 피면 제가 제일 먼저 달려가서 알려 드릴게요!":
["Then I’ll turn it so I can read it this time! If the rose opens tomorrow, I’ll be the first to run and tell you!","じゃあ今度は僕が読める向きに！　明日咲いたら、真っ先に走ってお知らせしますね！"],"급료와 휴일이 있고, 설탕과 홍차도 넉넉히 드립니다. 일을 잘하시면 급료도 올라갑니다.":
["The post comes with wages, days off and a generous allowance of sugar and tea. If your work is good, your wages will go up.","お給金とお休みのほか、お砂糖と紅茶もたっぷり差し上げます。よく働いてくだされば、昇給もございます。"],"누워 있으면 어느 쪽이 저희 견본인지 저도 모르겠군요. 두 마리를 다 세워 보시겠습니까?":
["Even I cannot tell which is ours while they’re lying down. Would you care to stand them both up?","寝かせたままでは、私にもどちらが当社の見本やら。二匹とも立たせてご覧になりますか？"],"담당관이 팬텀사의 출품 품목에 증서를 내립니다. 시엘은 증서를 받아 들고 짧게 인사합니다.":
["The officer issues a warrant for Funtom's entry. Ciel accepts the certificate with a short bow.","調達官がファントム社の出品した品目に認定証を発行します。シエルは証書を受け取り、短く一礼します。"],"도살장 옛 장부를 봐. 열두 번째 줄. 사람 이름은 없고 짐 무게만 적혀 있을 거요.":
["Look in the old slaughterhouse ledger. Twelfth line. No name, just the weight of a load.","屠畜場の古い帳簿を見な。十二行目だ。人の名はなくて、荷の重さだけが書いてある。"],"동부에서 들어온 전보에 수신인이 빠져 있습니다. 시엘은 봉투에 남은 우편 소인부터 살핍니다.":
["A telegram from the East End bears no addressee’s name. Ciel begins with the postmark on the envelope.","イーストエンドからの電報には、宛名が抜けている。シエルはまず封筒に残った消印を調べる。"],"뚜껑에 우리 문장이 찍혀 있을 텐데. 그 판자만 떼어 두고 나머지는 조합에 넘겨.":
["Our crest should be stamped on the lids. Take off the boards with the crest and let the guild have the rest.","蓋にはうちの紋章が押してあるはずだ。その板だけ外して、あとは組合に渡せ。"],"마지막 손님 말고, 아무것도 안 사고 나간 손님 이야기를 좀 들어야겠어. 우리가 모르는 건 그쪽이니까.":
["Never mind the last sale. Tell me about the people who left empty-handed. They’re the ones we know nothing about.","最後に買った客の話はいい。何も買わずに出ていった客の話を聞かせろ。僕らが知らないのはそっちだ。"],"봉투랑 문패에 똑같은 이름이 있어. 이번엔 제대로 왔네. ⋯라고 오스카가 말했어.":
["“The name on the envelope matches the one on the door. We've got the right house this time,” says Oscar.","「封筒と表札に同じ名前がある。今度は合ってるね」……って、オスカーが言ってる。"],"서쪽 창을 조금만 열어 둘까? 누가 오는지 우리가 먼저 알 수 있어. ⋯라고 와일드가 말했어.":
["“Shall we leave the west window open a crack? Then we’ll be the first to know who’s coming,” says Wilde.","西の窓を少し開けておこうか。誰が来たか、俺たちがいちばんに分かるぞ……ってワイルドが言ってる。"],"세 통의 봉투가 책상에 놓였다. 세바스찬이 날짜를 가린 뒤 모래시계를 뒤집었다.":
["Three envelopes lay on the desk. Sebastian covered the dates and turned over the hourglass.","机に封筒が三通並んだ。セバスチャンは日付を隠し、砂時計をひっくり返した。"],"세바스찬이 주인 앞에 한쪽 무릎을 꿇었다. 늘 장화를 벗겨 주던 바로 그 높이였다.":
["Sebastian went down on one knee before his master. Just the height at which he had always drawn off his boots.","セバスチャンは主人の前に片膝をついた。いつも長靴を脱がせていた、まさにあの高さだった。"],"시엘, 네 자리를 비워 뒀어. 저번에는 햇빛 때문에 눈 찡그렸잖아. 여긴 어때?":
["Ciel, I saved you a seat. You were squinting in the sun last time. How’s this one?","シエル、お前の席を取っておいたぞ。前は日差しが眩しくて目を細めていただろう？　ここはどうだ？"],"시엘이 케이크 받침을 사분의 일 바퀴 돌렸다. 검은 왕 뒤에 흰 비숍이 숨어 있었다.":
["Ciel turned the cake stand a quarter turn. Behind the black king stood a white bishop, hidden from view.","シエルはケーキ台を四分の一回転させた。黒のキングの後ろに、白のビショップが隠れていた。"],"얼굴만이라도 볼 수 있어? 우리가 왔다고 조커한테 전해 줘. ⋯라고 오스카가 말했어.":
["“Couldn't we see him, even for a moment? Tell Joker we're here,” says Oscar.","「ひと目だけでも会えない？　僕たちが来たってジョーカーに伝えて」……って、オスカーが言ってる。"],"오늘은 제가 손님이었던 덕을 봤군요. 마지막 한 모금까지 대접을 잘 받았습니다, 도련님.":
["I was fortunate to be your guest today, my lord. You looked after me down to the very last sip.","今日は客役の得をいたしました。最後の一口まで、結構なおもてなしでございました、坊ちゃん。"],"이 고기, 지금 썰면 육즙 다 빠집니다! 제가 구운 건 아니지만 딱 오 분만 벌어 주십쇼!":
["Cut the meat now and you’ll lose all the juices! I didn’t roast it myself, but buy me five minutes, would you?","今そいつを切ったら肉汁が全部流れちまう！　焼いたのは俺じゃありませんが、あと五分だけ時間を稼いでくださいよ！"],"잉크병도 왼쪽으로 옮기겠습니다. 그래야 이번에는 어느 쪽이 범인이었는지 알겠군요.":
["I shall move the inkwell to your left as well. Then perhaps we’ll discover which of the two was at fault.","では、インク壺も左に移しましょう。これで今度こそ、どちらが犯人だったか分かりますね。"],"잠깐, 내가 놓을게. ……견본은 두고 그 밑을 잡아. 받침대가 흔들리잖아.":
["Wait, I'll set it down. …Leave the sample alone. Hold the stand underneath. It's wobbling.","待て、僕が置く。……見本はいい、その下を押さえろ。台がぐらついている。"],"잠깐. 둘이서 멋대로 정하지 마. 난 안 해.\\n사람 죽이던 손으로 메이드 일을 어떻게 하라고.":
["Hold on. You two don't get to decide for me. I won't do it.\nI've killed people with these hands. How am I supposed to be a maid?","ちょっと待ちな。二人で勝手に決めるんじゃないよ。あたしはご免だ。\n人を殺してきたこの手で、どうやってメイドをやれっていうのさ。"],"장부 순서대로 하나, 둘…… 아! 그럼 잉크가 물에 번져도 어느 화분인지 금방 알겠어요!":
["One, two, in ledger order… Oh! Then even if the ink runs, I’ll know which pot it is straight away!","帳面の順に、一つ、二つ……あっ！　それならインクが水でにじんでも、どの鉢かすぐ分かりますね！"],"저희 집 계단에서 시엘 님이 내려오시는 소리를 아직도 기억합니다. 왕자님께서도 그러시겠지요.":
["I still remember the sound of you coming down our stairs, Lord Ciel. I dare say the prince does too.","わが家の階段をシエル様が下りていらっしゃる音を、今も覚えております。ソーマ様も、きっと。"],"제가 겨울에 접붙인 가지예요! 잎이 나니까 어느 게 제 것이었는지 도무지 못 찾겠어서요.":
["Those are the branches I grafted over the winter! Once the leaves came out, I couldn’t tell which ones were mine.","冬に僕が接いだ枝なんです！　葉っぱが出たら、どれが僕のだったかさっぱり分からなくて。"],"제게 맡겨 주신 창문이십니다요. 제가 닦아 둘 테니 돌아오시면 꼭 봐 주시라요!":
["You put me in charge of that window, you did. I’ll keep it shining, so do have a look when you come home!","私に任せてくださった窓ですだ。磨いておきますから、お帰りの時はきっと見てくださいまし！"],"제보자 앞으로 보낸 봉투가 아직 돌아오지 않았습니다. 답신이 오면 이 칸부터 먼저 살피시지요.":
["The envelope we sent our informant has yet to come back. Once we have a reply, let us look in this compartment first.","情報提供者に宛てた封筒は、まだ戻っておりません。返事が届きましたら、まずはこちらの仕切りをご覧ください。"],"죄다 오른쪽 모서리를 뜯었어. 손잡이까지 붙여 줬는데 그건 하나같이 새것이고.":
["Every single one is torn at the right corner. We even put handles on them, and every handle looks brand new.","どれも右の角が破れてる。わざわざ取っ手まで付けたのに、そっちはどれも新品同様だ。"],"지난번에 도련님이 여기서 오래 서 계셨잖아요. 그래서 저쪽 벤치를 통째로 들고 왔어요!":
["Last time you had to stand here for ages, young master. So I brought that whole bench over!","この前、坊ちゃんはここにずっと立っていらしたでしょう？　だから、あっちのベンチを丸ごと持ってきました！"],"첫 종소리에 활이 반 박자 늦습니다. 시엘은 반주자의 손끝을 보며 마지막 소절을 마칩니다.":
["At the first bell, Ciel's bow comes in half a beat late. Watching the accompanist's fingers, he plays the last phrase through.","最初の鐘に、シエルの弓が半拍遅れます。伴奏者の指先を見ながら、最後の一節を弾き終えます。"],"타나카가 서재 문을 두드렸다. 아직 정양 중인 그는 모자를 벗으며 세바스찬을 불렀다.":
["Tanaka knocked at the study door. Still convalescing, he took off his hat and called to Sebastian.","書斎の扉をノックしたのはタナカだった。まだ療養中の彼は帽子を取り、セバスチャンに声をかけた。"],"편지를 가져온 아이는 마차가 대문을 빠져나갈 때까지 현관 앞에서 모자를 꼭 쥔 채 서 있었다.":
["The child who had delivered the letter stood on the doorstep clutching his cap until the carriage passed out of the gates.","手紙を届けた子は、馬車が門を出るまで帽子を握りしめて玄関先に立っていた。"],"피니안이 책을 품에 꼭 껴안았다. 소년의 팔 안에서 양장본 표지가 푹 우그러졌다.":
["Finnian hugged the book to his chest. The hard cover buckled in his arms.","フィニアンは本を胸にぎゅっと抱いた。少年の腕の中で、硬い表紙がぐにゃりとへこんだ。"],"가지를 이쪽으로 유인할까요? 전 이 문으로 들어올 때 바로 꽃이 보였으면 좋겠는데, 도련님은요?":
["Shall I train the branch this way? I’d like to see the flowers the moment I come through that door. Would you, young master?","枝はこちらへ伸ばしましょうか？　僕はこの戸を開けたらすぐに花が見えるといいなって。坊ちゃんはいかがです？"],"간식을 하나 고르면 드시기 전후의 수치를 비교할 수 있습니다. 오늘은 값만 알아두고 ‘뒤로’ 돌아가겠습니다.":
["Select a treat to see how each stat would change if you ate it. For today, let us note the price and select ‘Back’.","お菓子をひとつお選びになると、召し上がる前後の数値を比べられます。今日は値段を確かめるだけにして、「戻る」を選びましょう。"],"그럼 날이 개면 말의 머리가 저절로 보이나? 너희 가게에서 제일 잘 보이는 물건이 가격표야.":
["Will the horse’s head appear of its own accord when the sun comes out? The easiest thing to see in your shop is the price tag.","じゃあ晴れれば、ひとりでに馬の頭が見えるのか？　お前の店でいちばんよく見えるのは値札だぞ。"],"그럼 내일 아침에 다시 올게. 네 장갑은 조금만 더 빌려 줘. 와일드가 벌써 잠들었어.":
["Then we'll come back tomorrow morning. Let us keep your glove a little longer. Wilde's already asleep.","じゃあ、明日の朝また来るよ。手袋はもう少し貸しておいて。ワイルドがもう寝ちゃったんだ。"],"네가 자주 고르던 건 서랍에 따로 넣어 뒀어. 아무한테나 내주면 섭섭할 테니까.":
["I’ve put your usual choice away in the drawer. You’d be put out if I handed it to just anyone.","君がよく選んでいた品は、引き出しにしまってあるよ。誰彼かまわず渡したら、面白くないだろう？"],"다들 내 마차에서 자면 되잖아! 참, 시엘한테 전해 줘. 지난번 체스는 아직 내 차례라고!":
["You can all sleep in my carriage! Oh, tell Ciel it’s still my move from our last game!","みんな俺の馬車で寝ればいいだろう！　あっ、シエルに伝えてくれ。この前のチェスはまだ俺の手番だぞ！"],"달빛이 드는 창가에 시엘이 서 있고 세바스찬의 손 위로 푸른 빛이 피어오른다.":
["Ciel stands at the moonlit window. A blue light rises from Sebastian’s hand.","月の差す窓辺にシエルが立ち、セバスチャンの手に青い光が浮かぶ。"],"리지와 저녁을 먹고, 겨울이면 저택에 내려가고…… 그래. 어떻게 살지는 나도 궁금했어.":
["Dinner with Lizzy. Winters down at the manor… Yes. I did wonder what that life would be like.","リジーと夕食をとって、冬には領地の屋敷に帰って……。ああ。どんな暮らしになるか、僕だって少しは考えた。"],"마지막 날짜 아래에 짧은 줄이 그어져 있었다. 저택이 불탄 뒤로 한 줄도 더해지지 않은 기록이었다.":
["Beneath the final date was a short ruled line. Not a word had been added since the manor burned.","最後の日付の下に短い線が一本引かれていた。屋敷が焼けた後は一行も書き足されていない記録だった。"],"마지막 초가 흘린 밀랍이 크림에 닿기 직전이었다. 시엘이 접시를 제 쪽으로 당겼다.":
["A drop of wax from the last candle was about to touch the cream. Ciel drew the plate towards him.","最後の一本から垂れた蝋が、今にもクリームに触れそうだった。シエルは皿を手元に引き寄せた。"],"몸체는 제법 단단합니다. 손잡이가 문제군요. 어린아이가 쥐면 엄지와 검지가 닿질 않겠습니다.":
["The body is sturdy enough. It is the handle that concerns me. A child could not make thumb and forefinger meet around it.","本体はなかなか頑丈です。問題は持ち手ですね。幼い子の手では、親指と人差し指が届かないでしょう。"],"배관공이 오면 바로 식당으로 들여. 오늘 저녁은 내가 자리를 옮기지. 서재에 상을 차려.":
["Show the plumber straight to the dining room when he arrives. I’ll move for dinner. Set a place in the study.","配管工が来たらすぐに食堂へ通せ。今夜は僕が席を移そう。書斎に夕食の支度を。"],"분리해 두었습니다. 그중 세 개는 같은 날 만든 물건이라, 제작실에 그날 장부도 청해 두었지요.":
["I’ve listed them separately. Three were made on the same day, so I’ve asked the workshop for that day’s ledger.","分けて記してございます。うち三つは同じ日に作られた品ですので、工房にその日の台帳を取り寄せるよう頼んでおきました。"],"서늘한 손끝이 겨우 닿았다. 세바스찬은 다른 손으로 침대 곁의 종을 세게 당겼다.":
["Cool fingertips barely touched. With his other hand Sebastian pulled hard on the bell beside the bed.","冷たい指先がかろうじて触れた。セバスチャンはもう片方の手で枕元の呼び鈴を強く引いた。"],"설탕은 하나. 그래, 오늘도 그걸로.\\n시엘이 서류에서 눈을 떼지 않고 잔을 받는다.":
["One lump. Yes, the usual.\nCiel takes the cup without looking up from his papers.","砂糖は一つ。ああ、今日もそれでいい。\nシエルは書類から目を離さずにカップを受け取る。"],"소년은 제 이름이 소마 아스만 카다르라고 외치고는, 아그니를 데리고 저만치 가 버렸다.":
["The boy called out that his name was Soma Asman Kadar, then strode off with Agni in tow.","少年はソーマ・アスマン・カダールと大声で名乗り、アグニを連れてさっさと行ってしまった。"],"손님이야 우리가 적은 값에 샀지. 차액도 전단을 다시 찍는 비용도 팬텀사 앞으로 달아.":
["The customers paid what we printed. Charge both the difference and the reprint to Funtom.","客は僕たちが書いた値で買ったんだ。差額もちらしの刷り直しもファントム社に付けておけ。"],"시엘은 계약서를 돌려주고 마차를 불러야 할 날짜에만 동그라미를 쳤다. 경영 +6":
["Ciel returned the contract and circled only the dates on which a wagon would be needed. Management +6","シエルは契約書を返し、荷馬車を呼ぶ日にだけ丸をつけた。経営 +6"],"시엘은 편지를 구기지 않았다. 첫 장부 맨 뒷장에 칼같이 반듯하게 접어 끼웠다.":
["Ciel didn’t crumple the letter. He folded it with a knife-sharp crease and slipped it inside the back cover of his first ledger.","シエルは手紙を握り潰さなかった。刃物を当てたようにきっちり折り、最初の帳簿のいちばん後ろに挟んだ。"],"시엘의 손이 스르르 풀렸다. 악마는 ‘다음번’이라는 거짓말을 차마 고쳐 말하지 않았다.":
["Ciel’s hand slowly went slack. The demon could not bring himself to take back the lie in that “next time”.","シエルの手からそっと力が抜けた。悪魔は「次は」という嘘を、どうしても言い直せなかった。"],"엘리자베스가 상장을 받은 뒤 시엘에게 다가옵니다. 시엘은 악보를 덮고 그녀를 맞습니다.":
["After receiving her certificate, Elizabeth comes over to Ciel. He closes the score to greet her.","賞状を受け取ったエリザベスがシエルの方へやって来ます。シエルは楽譜を閉じて彼女を迎えます。"],"예, 같은 차로 올리겠습니다. 두 번째 잔을 청하시면 그날의 차는 합격이라고 여겨도 되겠습니까?":
["The same tea, certainly. When you ask for a second cup, may I take it that the first met with your approval?","ええ、同じお茶を。おかわりをお望みの日は、その日のお茶に合格をいただけたと思ってよろしいですか？"],"오늘 답신을 기다릴 분께는 차를 한 잔 더 내드렸습니다. ……저도 이제 제법 능숙해졌지요?":
["I’ve served another cup to the gentleman waiting for your reply. …I rather think I’m getting the hang of this, don’t you?","お返事をお待ちのお客様には、もう一杯お茶をお出ししました。……私もずいぶん手際がよくなったでしょう？"],"이 배가 언제 항구에 닿을까? 네 성정으론, 푸느라 저녁 산책도 거를 것 같네.":
["When do you suppose this ship will reach port? Knowing you, you'll skip your evening walk to finish the puzzle.","この船はいつ港に着くのかな。君のことだ、解くのに夢中で夕方の散歩まで忘れそうだね。"],"이상하군요. 보통 사람이라면 벌써 몇 번은 정신을 잃었을 텐데. 어찌 아직 서 계십니까?":
["How curious. An ordinary man would have lost consciousness several times over by now. How are you still standing?","不思議ですね。並の方なら、とうに何度か気を失っているはずです。どうしてまだ立っておいでなのです？"],"작위를 돌려받은 날 시엘은 복수를 포기했습니다. 세바스찬은 그 자리에서 주인의 영혼을 거뒀습니다.":
["On the day his title was restored, Ciel gave up his revenge. Sebastian claimed his master’s soul there and then.","爵位を取り戻したその日、シエルは復讐を捨てた。セバスチャンはその場で主の魂を受け取った。"],"작위의 환부는 차기 심의까지 보류합니다. 제출된 서류 일체는 왕실 서고에 보관합니다.」":
["Restoration of the title is deferred until the next review. All documents submitted shall be held in the royal archives.”","爵位の返還は次回の審議まで保留とする。提出書類一式は王室の書庫にて保管する」"],"정원 끝까지는 아직 한 바퀴 남았습니다. 아까부터 자갈 위 발소리가 두 걸음씩 붙어 들리는군요.":
["One more lap takes you to the far end of the garden. For a little while now I’ve heard your footsteps coming in pairs on the gravel.","庭の端まで、あと一周でございます。先ほどから砂利を踏む足音が、二歩ずつ詰まって聞こえますね。"],"찾으시는 해의 장부를 꺼내 두었습니다. 끈이 낡았으니 제가 조심스레 풀어 드리지요.":
["I’ve taken out the ledger for the year you asked about. The cord is old. Allow me to undo it carefully.","お探しの年の帳簿を出しておきました。古い紐でございますから、私がそっとほどきましょう。"],"처음 두 번은 잘 굴러갔습니다. 세 번째에야 소리가 나는군요. 보십시오, 한쪽 바퀴만 멎었습니다.":
["It rolled quite smoothly the first two times. Only on the third did it squeak. Look, just one of the wheels has stopped.","初めの二回は滑らかに転がりました。三回目にしてようやく音がしましたね。ご覧ください、片方の車輪だけが止まっています。"],"청방의 백이 나를 노린다더니. 제 손으로 길렀다는 올빼미까지 보낸 걸 보면 정보가 맞았군.":
["I'd heard Bai of the Green Gang was after me. If he's sent the Owl he trained himself, my information was sound.","青幇の白が僕を狙っているとは聞いていた。手塩にかけた梟まで寄越したのなら、情報は確かだったようだな。"],"해 질 무렵이면 저 창에 맞은편 지붕이 비칩니다요. 수상한 자가 없는지 항상 지켜보고 있습니다요.":
["Around sunset you can see the roof opposite in that window. I always keep an eye out for anyone suspicious, I do.","日が暮れる頃には、あの窓に向かいの屋根が映るですだ。怪しい奴がいないか、いつも見張っておりますだ。"],"「작위의 환부는 차기 심의까지 보류합니다. 제출된 서류 일체는 왕실 서고에 보관합니다.」":
["“Restoration of the title is deferred until the next review. All documents submitted shall be held in the royal archives.”","「爵位の返還は次回の審議まで保留とする。提出書類一式は王室の書庫にて保管する」"],"견본은 제가 골랐으니 납품 상자는 그쪽에서 골라 보시죠. 첫 주문부터 기록을 다 가져왔습니다.":
["I chose the sample, so you may choose the delivery crate. I've brought the records all the way back to our first order.","見本は僕が選びましたから、納品の箱はそちらでお選びください。記録は初回のご注文からすべてお持ちしました。"],"그때 우리가 춤췄던 곡 말이야. 한 소절만 들려도 자꾸 시엘이 고개를 들던 게 생각나.":
["That piece we danced to. Whenever I hear even a bar, I remember the way Ciel looked up.","あの時踊った曲よ。一小節聴くだけで、シエルがふっと顔を上げたのを思い出すの。"],"그럼 오늘 날짜를 쓰고 서명해 둬. 나중에 누가 읽든 어느 날 되짚어 낸 기억인지 알 수 있게.":
["Then date it today and sign it. Whoever reads it afterwards should know when you put these recollections together.","なら、今日の日付を入れて署名しろ。あとで誰が読んでも、いつ思い出して書いたのか分かるように。"],"그럼 초콜릿을 한 알 넣고 도로 닫아 보지요. 이번에는 선물을 받으시는 쪽입니다, 도련님.":
["Let’s put one chocolate inside and close it again. This time you’re the one receiving the gift, my lord.","では、チョコレートを一粒入れて蓋を閉めましょう。今度は坊ちゃんが贈り物を受け取る側ですよ。"],"그자가 내 이름을 쓰는 동안 나는 그 얼굴을 한 번도 못 봤군. 마침 자리도 있다니, 가서 인사해야지.":
["All this time he’s been using my name, and I’ve never even seen his face. Since there’s a seat to spare, I think I’ll go and introduce myself.","僕の名を散々使っておいて、顔を合わせたこともないとはね。せっかく席まであるんだ。挨拶に行こう。"],"꽃 이름을 떼어 낸 화분들이 온실 앞에 늘어섭니다. 마지막 두 화분에는 아직 봉오리만 달렸습니다.":
["Pots stand outside the conservatory with their labels removed. The last two plants are still in bud.","名札を外した鉢が温室の前に並びます。最後の二鉢は、まだつぼみのままです。"],"내 얼굴 한 번 보지 않고 내린 처분이란 말이지. 좋아. 그럼 이번엔 내가 직접 얼굴을 들이밀고 묻겠어.":
["So they passed judgement without once looking me in the face. Very well. This time I’ll stand in front of them and ask.","僕の顔も見ずに決めたというわけだ。いいだろう。今度は僕のほうから出向いて聞いてやる。"],"단원들이 남긴 편지에서 백작의 이름을 읽은 스네이크가 런던의 타운하우스 문을 두드린다.":
["Having read the Earl’s name in the letters the troupe left behind, Snake knocks at the door of the London townhouse.","一座が残した手紙に伯爵の名を見つけたスネークは、ロンドンのタウンハウスの扉を叩く。"],"도련님, 안쪽 서가를 정리하다 이 장부가 나왔습니다. 묶인 끈은 아직 옛것 그대로입니다.":
["Young master, I found this ledger while putting the back shelves in order. It’s still tied with the original cord.","坊ちゃん、奥の書棚を整えておりましたら、この帳簿が出てまいりました。綴じ紐も昔のままです。"],"두 번역본에서 같은 문장의 주어가 서로 다르군요. 도련님께서 고르신 쪽을 들려주시지요.":
["The two translations give the same sentence different subjects. Let me hear the one you favour, my lord.","二つの訳では、同じ一文なのに主語が違いますね。坊ちゃんがお選びになった方をお聞かせください。"],"바람에 악보 귀퉁이가 들립니다. 시엘은 악보대의 집게를 누르고 반주자와 눈을 맞춥니다.":
["A corner of the score lifts in the breeze. Ciel presses down the clip on the music stand and catches the accompanist's eye.","風が楽譜の端を持ち上げます。シエルは譜面台の留め具を押さえ、伴奏者と目を合わせます。"],"받는 분이 직접 여실 텐데 칼을 쓰실 필요야 없지요. 리본을 한 번만 당겨 보시겠습니까?":
["The recipient should be able to open it without a knife. Would you give the ribbon a single tug?","受け取った方がご自分で開けるのに、ナイフまでは要らないでしょう。リボンを一度引いていただけますか。"],"불에 그을린 서신 세 통입니다. 왕실 인장이 바뀐 해를 기준으로 먼저 놓을 편지를 골라 보시겠습니까?":
["Here are three letters scorched by fire. Using the year the royal seal changed as your guide, which letter would you place first?","火に焦げた手紙が三通ございます。王室の印章が変わった年を手掛かりに、最初に置く一通をお選びいただけますか？"],"선대께서는 집을 비우실 때 제게 열쇠를 맡기셨지요. 도련님의 열쇠도 제가 간수하겠습니다.":
["Your father used to leave me his keys when he went away. I shall take care of yours too, young master.","先代はお留守の折、私に鍵をお預けくださいました。坊ちゃんの鍵も大切にお預かりいたします。"],"쉬시라고 비워 둔 오후였는데요. 도련님께서 석탄 배달표를 세 번이나 검산하셨더군요.":
["I’d kept the afternoon free for you to rest. I see you checked the coal delivery figures three times, my lord.","お休みのために空けた午後でしたが。坊ちゃんは石炭の納品書を三度も検算なさったようですね。"],"시엘, 연습 좀 도와줘! 어제 저쪽 구석에서 춤을 췄는데 피아노 소리가 영 안 들렸어.":
["Ciel, help me practise! I danced in that corner yesterday and I couldn’t hear the piano at all.","シエル、ちょっと練習に付き合って！　昨日あそこの隅で踊ったら、ピアノがちっとも聞こえなかったの。"],"시엘이 상장을 받아 들자 엘리자베스가 박수를 보냅니다. 시엘은 그녀를 향해 고개를 숙입니다.":
["Elizabeth applauds as Ciel accepts his certificate. He bows to her.","シエルが賞状を受け取ると、エリザベスが拍手を送ります。シエルは彼女に一礼します。"],"식탁 위에 초가 열한 개입니다. 시엘은 장부를 덮고, 빈 의자 하나를 잠깐 바라봅니다.":
["Eleven candles stand on the table. Ciel closes the ledger and glances at an empty chair.","食卓には十一本のろうそく。シエルは帳簿を閉じ、空いた椅子にひととき目をやる。"],"식탁에 앉아도 문부터 살피게 되네요. 뭐, 도련님이 맞은편에 계실 땐 그냥 먹지만요.":
["Even at table I look at the door first. Well, when the young master’s across from me I just eat.","飯の席でも、つい先に戸口を見ちまうんだ。まあ、坊ちゃんが向かいにいる時は普通に食うけどな。"],"아그니 씨, 여기는 남의 집이고 당신은 손님입니다. 적어도 식사만큼은 앉아서 받아 주셔도 됩니다만.":
["Mr Agni, you are a guest in this house. At meals, at least, do sit down and let us wait on you.","アグニさん、あなたはよそのお屋敷にいらしたお客様です。せめてお食事くらいは、お掛けになってお召し上がりいただいてよろしいのですよ。"],"올해의 케이크 장식은 설탕으로 만든 체스 말입니다. 한 칸 움직이면 곧장 무너질 자리입니다.":
["This year’s cake is dressed with chessmen made of sugar. One move of a single square would bring the whole position down.","今年のケーキを飾るのは、砂糖でできたチェスの駒です。一マス動かせばたちまち崩れてしまう配置でございます。"],"이건 입을 딱 벌린 사자처럼 생겼죠? 옆을 살짝 누르면요…… 자, 도련님도 해 보세요!":
["Looks like a lion with its jaws wide open, doesn’t it? Squeeze the side, just here… There! Your turn, young master!","口をあんぐり開けたライオンみたいでしょう？　横をそっと押すと……ほら！　坊ちゃんもやってみてください！"],"잠시 차를 드시겠습니까, 도련님? ‘상점’을 여시면 오늘 나온 간식과 가격을 보실 수 있습니다.":
["Would you care for tea, my lord? Open ‘Shop’ to see today’s refreshments and their prices.","少しお茶になさいませんか、坊ちゃん？　「店」を開けば、今日のお菓子とお値段をご覧になれます。"],"저 화분만 받침 아래 흙이 말랐어. 방금 옮긴 거지? 리지, 그 옆에서부터 찾아보자.":
["The earth is dry under that pot’s saucer, and nowhere else. You’ve just moved it, haven’t you? Lizzy, let’s start looking beside it.","あの鉢だけ、受け皿の下の土が乾いてる。今そこへ動かしたんだろう？　リジー、その隣から探そう。"],"저, 이제 안경을 벗어도 도련님 발소리는 압니다요! 언제 돌아오셔도 제가 먼저 맞을 겁니다요.":
["I know your footsteps even without my glasses now, young master! Whenever you come home, I’ll be first to greet you!","私、もう眼鏡を外しても坊ちゃんの足音は分かりますだ！　いつお帰りになっても真っ先にお迎えしますだよ。"],"저분이 묻는 건 이 물건을 몇 번 납품했느냐는 거야. 전표를 줘. 내가 보여 드리지.":
["He's asking how often we've delivered this item. Give me the slips. I'll show him myself.","あの方が尋ねているのは、この品を何度納めたかだ。伝票を寄こせ。僕がお見せする。"],"접시 가장자리에 흰 설탕이 조금 묻어 있었다. 시엘은 검지로 그것을 닦다가 촛불을 보았다.":
["A little white sugar clung to the rim of the plate. Ciel was brushing it off with his forefinger when he noticed the candles.","皿の縁に白い砂糖が少しついていた。人差し指でぬぐいながら、シエルは蝋燭の火に目を留めた。"],"주방에서 센 건 흰 말 열다섯 개였지? 여기 열넷밖에 없어. 접시 아래 그 폰부터 꺼내.":
["You counted fifteen white pieces in the kitchen, didn’t you? There are only fourteen here. Get that pawn out from under the plate first.","厨房で数えた白の駒は十五個だったな？　ここには十四個しかない。まず皿の下のポーンを出せ。"],"체조실 바닥에 분필선이 세 줄 그어져 있었다. 세바스찬이 회중시계의 뚜껑을 열었다.":
["Three chalk lines crossed the gymnasium floor. Sebastian flipped open his pocket watch.","体操室の床に三本の線が白墨で引いてあった。セバスチャンは懐中時計の蓋を開けた。"],"할아범이 돌아오면 맡기려고 따로 빼 뒀어. 예전처럼 할아범이 먼저 훑어봐 줘.":
["I've been setting these aside for your return. I'd like you to go through them first, as you used to.","じいやが戻ったら任せようと思って、よけておいたんだ。昔のように、まずじいやが目を通してくれ。"],"……이상하군요. 보통 사람이라면 벌써 몇 번은 정신을 잃었을 텐데. 어찌 아직 서 계십니까?":
["…How curious. An ordinary man would have lost consciousness several times over by now. How are you still standing?","……不思議ですね。並の方なら、とうに何度か気を失っているはずです。どうしてまだ立っておいでなのです？"],"가게에서 가져온 빈 상자입니다. 손님들이 알맹이만 꺼내 가고 이건 두고 갔다더군요.":
["I brought these empty boxes from the shop. I’m told the customers took out their purchases and left the boxes behind.","店から持ち帰った空き箱でございます。お客様は中身だけをお持ちになり、箱は置いていかれたそうです。"],"경리 담당이 인수증 두 장을 대조하게 됐다. 새 재주문의 미납 부담이 개당 £1로 감소한다.":
["The accounts clerk now cross-checks the two receipts. The charge for each undelivered item on new repeat orders falls to £1.","経理係が二枚の受領証を照合するようになった。以後の再注文では、未納一個当たりの負担が£1に下がる。"],"그 빨간 봉투도 두고 가. ……그 눈빛은 뭐야? 읽을 작정이면 안경부터 가져오라고 했겠지.":
["Leave the red envelope too. …What’s that look for? If I meant to read it, I’d have asked for my glasses.","赤い封筒も置いていけ。……何だ、その目は？　読むつもりなら先に眼鏡を持ってこいと言ったはずだ。"],"끝까지 자리를 지키셨군요. 다음 순에는 차를 일찍 올리겠습니다. 오늘은 평소보다 피로가 짙으셨습니다.":
["You stayed to the very end. I shall bring tea earlier next time. You looked more tired than usual today.","最後までお席を立たれませんでしたね。次の予定では早めにお茶をお持ちしましょう。今日はいつもよりお疲れに見えました。"],"나도 체스는 두고 싶고, 네가 오기 전에 네 말을 옮겨 버리긴 싫잖아! 그래서 하나 더 샀어!":
["I wanted to play, but I didn’t want to move your pieces before you got here! So I bought another one!","俺だってチェスはしたいし、お前が来る前にお前の駒を動かすのは嫌だろう！　だからもう一つ買ったのだ！"],"납품하는 쪽과 받는 쪽에 인수증을 한 장씩 보냈다. 새 재주문에서 개당 대금 +£1.":
["Supplier and recipient were each sent a copy of the delivery receipt. New repeat orders now pay £1 more per item.","納品側と受取側の双方に受領証を一枚ずつ送った。以後の再注文では、一個当たりの代金が£1増える。"],"도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.":
["She has the skill to protect you, my lord, and is in no position to betray you. You have tested her abilities yourself.","坊ちゃんをお守りする腕があり、裏切ることもできない立場の方です。その力量は坊ちゃんご自身がお確かめになりました。"],"도련님이 고르신 넥타이는 따로 싸 뒀습니다요. 구겨지면 이 메이드에게 맡겨 주시라요!":
["I’ve packed the tie you chose separately, young master. If it creases, you leave it to your maid!","坊ちゃんがお選びのタイは別に包みましただ。しわになったら、このメイドにお任せくださいまし！"],"도련님이 오 분 더 기다려 주신 덕에 저번 고기는 잘 됐죠. 예? 태웠냐고요? 아닙니다?!":
["That roast came out fine because you gave me five more minutes, young master. What? Burnt it? I did not!","この前の肉は坊ちゃんがもう五分待ってくれたおかげで、うまくいったぜ。え？　焦がした？　まさか！"],"마지막 찻잔이 내려앉고 시엘의 이름이 불립니다. 시엘은 원고를 뒤집어 놓고 자리에서 일어납니다.":
["The last teacup settles into its saucer, and Ciel's name is called. He turns his notes face down and rises.","最後のカップが受け皿に戻ると、シエルの名が呼ばれます。シエルは原稿を伏せて立ち上がります。"],"볕이 드는 쪽하고 그늘진 쪽 중에서 내가 고를 수 있게 해 뒀어. ⋯라고 에밀리가 말했어.":
["“It’s been left like that so I can choose between sun and shade,” says Emily.","日向と日陰、好きな方を選べるようにしてあるの……ってエミリーが言ってる。"],"상순·중순·하순 중 바꿀 칸을 누르고 활동을 선택합니다. 카드의 £ 표시는 해당 활동의 비용입니다.":
["Select an early-, mid- or late-month slot and choose an activity. The £ figure on each card shows its cost.","上旬・中旬・下旬のうち変更する枠を押して活動を選びます。カードの£表示はその活動の費用です。"],"서재 문을 여는 열쇠가 찻숟가락과 짤랑 부딪혔다. 눈을 감고 있던 시엘이 먼저 물었다.":
["The study key rang against a teaspoon. Ciel’s eyes were shut, but he was the first to speak.","書斎の鍵がティースプーンに触れてちりんと鳴った。目を閉じていたシエルが先に尋ねた。"],"세바스찬, 마차를 돌려. 이 일련번호가 어느 역으로 납품됐는지 장부부터 털어야겠어.":
["Turn the carriage round, Sebastian. I want the ledgers. Let’s see which station received the tickets with this serial number.","セバスチャン、馬車を戻せ。まず帳簿を洗って、この通し番号の切符がどの駅に納められたか突き止める。"],"시엘 님, 저 문은 두 번 두드리시면 됩니다. 한 번이면 제가, 두 번이면 소마 님께서 나오십니다.":
["If you would knock twice, Lord Ciel. Knock once and I shall answer. Twice, and Prince Soma himself will come to the door.","シエル様、あの扉は二度お叩きください。一度なら私が、二度ならソーマ様がお出になります。"],"심사위원이 같은 점수를 받은 두 사람의 이름을 차례로 부릅니다. 시엘이 상대와 나란히 서서 인사합니다.":
["The judge calls the names of the two entrants who tied. Ciel stands beside his rival, and they bow together.","審査員が同点の二人の名を順に呼びます。シエルは相手と並んで一礼します。"],"심사위원이 엘리자베스의 이름을 부릅니다. 시엘은 심사표를 확인한 뒤 그녀에게 박수를 보냅니다.":
["The judge calls Elizabeth’s name. Ciel checks the scorecard, then applauds her.","審査員がエリザベスの名を呼びます。シエルは採点表に目を通し、彼女に拍手を送ります。"],"심사표의 두 점수를 확인한 시엘이 원고를 접습니다. 에드워드의 이름이 불리자 먼저 박수를 보냅니다.":
["Ciel checks both scores on the judging sheet and folds his notes. When Edward's name is called, he is the first to applaud.","シエルは審査表で二人の点を確かめ、原稿を畳みます。エドワードの名が呼ばれると、真っ先に拍手します。"],"어느 알을 골라도 맛은 고릅니다. 포장지 끝을 조금만 더 남기면 작은 손으로도 잡고 풀 수 있겠군요.":
["Whichever sweet one chooses, the flavour is consistent. Leave a little more wrapper at the ends and even small fingers could untwist it.","どの一粒を選んでも、味は均一です。包み紙の端をもう少し長くすれば、小さな手でもつまんでほどけるでしょう。"],"어이쿠, 벌써 꼬마 손님 하나가 멈췄네. 백작한테는 비 오는 날마다 차를 대접해야겠어.":
["Well, well. One little customer has stopped already. I shall have to offer you tea every time it rains, my lord.","おやおや、もう小さなお客が一人、足を止めたよ。雨の日は毎回、伯爵にお茶をご馳走しないとね。"],"에드워드가 상장을 받아 들고 손님들에게 인사합니다. 시엘은 접어 둔 축사 원고를 다시 펼칩니다.":
["Edward accepts his certificate and bows to the guests. Ciel unfolds the speech he had put away.","エドワードが賞状を受け取り、客に一礼します。シエルは畳んでおいた祝辞の原稿をもう一度開きます。"],"왕자님께 어려운 말씀을 드릴 때면 시엘 님의 조언을 떠올립니다. 덕분에 한결 쉬워졌습니다.":
["When I have something difficult to tell the prince, I think of your advice, Lord Ciel. It makes it much easier to speak.","ソーマ様に申し上げにくいことがあると、シエル様の助言を思い出します。おかげでずいぶん話しやすくなりました。"],"우와, 이제 정원도에 제가 고른 자리도 들어가요? 그럼 다음엔 길가 풀도 예쁘게 다듬어 둘게요!":
["Wow, the spot I picked gets to go on the garden plan? I’ll trim the grass along the path nice and neat next time!","わあ、僕が選んだ場所も庭の図に載るんですか？　今度は小道の草もきれいに刈っておきますね！"],"이 책은 네 거야. 글자를 익히거든 네 이름이 나온 대목을 직접 읽어 봐. 알았지, 피니안?":
["This book is yours. Once you know your letters, read the part with your name in it yourself. Understood, Finnian?","この本はお前のものだ。字を覚えたら、自分の名前が出てくるところを自分で読め。分かったな、フィニアン？"],"장부를 묶을 때 밑에 깔았던 전표입니다. 불에 그슬려서 버리는 종이인 줄만 알았습니다.":
["It’s a voucher that lay beneath the ledger when it was bound. With those scorch marks, I took it for waste paper.","帳簿を綴じた時に下に敷いた伝票です。焦げていたもので、反故紙とばかり思っておりました。"],"제 이름은 메리가 아닙니다.’ 위층에서 온 답장은 한 줄로 충분했다. 아래층에서는 여전히 상자를 넘어 다녔다.":
["My name is not Mary.’ One line sufficed for the reply from upstairs. Downstairs they were still stepping over the box.","私の名はメアリーではありません」。二階からの返事は一行で足りた。階下では相変わらず皆が箱をまたいでいた。"],"주문과 다른 물건이 왔다는 편지가 세 통입니다. 재미있는 건 세 분이 모두 열일곱 번을 주문하셨다는 겁니다.":
["Three letters say we sent the wrong article. Curiously enough, all three customers ordered number seventeen.","注文と違う品が届いたとのお手紙が三通。面白いことに、お三方ともご注文は十七番でございます。"],"중순에는 ‘서재 수업’이 어떻습니까? 제가 맡은 수업입니다. £ 옆에 수업료도 적혀 있습니다.":
["For the middle of the month, may I suggest ‘Study in the library’? I shall be teaching you myself. You will find the fee beside the £ sign.","中旬は「書斎での授業」になさいませんか？　私が受け持っております。£の横に授業料も記してございます。"],"차를 새로 올릴까요, 도련님? 지금 읽으시는 면을 펴셨을 때는 찻잔에서 김이 났는데요.":
["Shall I brew a fresh pot, my lord? Your cup was still steaming when you turned to that page.","新しく淹れましょうか、坊ちゃん？　今お読みの頁を開かれた時には、まだカップから湯気が立っておりましたが。"],"책상 위에는 영수증이 발행일 순서대로 묶여 있었다. 맨 마지막 묶음만 철끈에서 풀려 나와 있었다.":
["The receipts on the desk were tied in bundles by date of issue. Only the last bundle had been slipped free of its cord.","机の上の領収書は発行日順に綴じてあった。最後の一束だけが綴じ紐から外されていた。"],"첫 주문서부터 가져왔습니다. 상자는 담당관께서 골라 주시죠. 어느 걸 여셔도 장부와 맞을 겁니다.":
["I've brought every order, starting with the first. Please choose a crate yourself. Whichever you open, its contents will match the ledger.","最初の一通から注文書をお持ちしました。箱は調達官ご自身でお選びください。どれを開けても台帳と合うはずです。"],"최고급 밀가루. 설탕. 프랑스산 발효 버터. 이 아래에 또 버터. 우리 집에 젖소라도 들였나?":
["Finest flour. Sugar. Cultured butter from France. And down here, more butter. Did we buy a cow?","最高級の小麦粉、砂糖、フランス産の発酵バター。その下にまたバター。うちは乳牛でも買ったのか？"],"펜을 얼마나 눌러 썼는지 두 장 아래까지 필압이 남았어. 등잔을 좀 옆으로 치워 봐.":
["Whoever wrote this pressed hard enough to leave a mark two sheets down. Move the lamp a little to one side.","二枚下にまで跡が残っている。ずいぶん筆圧が強いな。ランプを少し横へずらしてくれ。"],"편지 두 통과 차를 가져왔습니다. 어떤 편지를 먼저 여시겠습니까? 편지의 내용은 미리 분류해 두었습니다.":
["Two letters and your tea, my lord. Which would you care to open first? I’ve sorted them by subject.","お手紙が二通、それにお茶でございます。どちらからお開けになりますか？　用件別に分けておきました。"],"해가 바뀌었다고 내가 마음을 바꾼 줄은 아니겠지, 시엘? 리지의 옆자리는 더더욱 양보 못 해!":
["A new year doesn’t mean I’ve changed my mind, Ciel. And you certainly can’t have the seat next to Lizzy!","年が明けたからって、僕が考えを変えたと思うなよ、シエル。リジーの隣の席ならなおさら譲れない！"],"‘제 이름은 메리가 아닙니다.’ 위층에서 온 답장은 한 줄로 충분했다. 아래층에서는 여전히 상자를 넘어 다녔다.":
["‘My name is not Mary.’ One line sufficed for the reply from upstairs. Downstairs they were still stepping over the box.","「私の名はメアリーではありません」。二階からの返事は一行で足りた。階下では相変わらず皆が箱をまたいでいた。"],"같은 날 만든 상자 하나를 시엘이 보는 앞에서 개봉했다. 나무패를 꺼내 보니 이번에도 B가 둘이고 D가 없다.":
["A box made on the same day was unsealed in front of Ciel. Out came the tiles. Two Bs, no D, just as before.","同じ日に作られた箱の封を、シエルの目の前で切った。木札を取り出してみると、やはりBが二枚でDがない。"],"같은 설계도로 만든 두 수레 중 하나만 빈 채로도 기웁니다. 제작자는 바퀴 지름이 같다고 장담하더군요.":
["Of two carts built to the same plan, only one leans even when empty. Their maker insists the wheels are the same diameter.","同じ図面で作った荷車のうち、一台だけが空でも傾きます。作り手は車輪の直径は同じだと言い切っていますが。"],"그 구두 소리는 다른 사람하고 헷갈리지 않아. 오늘은 한 번도 못 들었어. ⋯라고 오스카가 말했어.":
["“I’d know those footsteps anywhere. I haven’t heard them once today,” says Oscar.","「あの靴音なら誰のとも聞き違えない。今日はまだ一度も聞いてない」……って、オスカーが言ってる。"],"네 자리에서만 비숍이 안 보이겠군. 생일 손님에겐 판을 볼 권리쯤은 줘야지. 의자를 당겨.":
["Yours is the only seat the bishop is hidden from. A birthday guest is entitled to a view of the board. Pull up a chair.","ビショップが見えないのはお前の席からだけだな。誕生日の客には盤を見る権利くらいある。椅子を寄せろ。"],"담당관이 같은 점수를 받은 두 상회의 이름을 나란히 적습니다. 팬텀사의 견본 앞에도 납품 증서가 놓입니다.":
["The officer writes the names of the two firms with equal scores side by side. A royal warrant is laid before Funtom's sample too.","調達官が同点の二社の名を並べて記します。ファントム社の見本の前にも認定証が置かれます。"],"물건이 아니라 삯을 보러 왔어. 똑같은 상자인데 왜 이 창고에서만 운임이 두 배로 튀지?":
["I came to see the rates, not the goods. Same crates, yet the freight charge doubles at this warehouse alone. Why?","見に来たのは荷じゃない、運賃だ。同じ箱なのに、なぜここの倉庫だけ倍に跳ね上がる？"],"볕에 비춰 봐. 글자가 등까지 비치면 급한 거야. 급하면 다들 펜을 꾹 눌러 쓰잖아.":
["Hold it to the sun. If the letters show through, it’s urgent. People press hard when they’re in a hurry.","日に透かしてみろ。裏まで字が浮いてたら急ぎだ。急ぐと誰だってペンを強く押しつけるだろう。"],"부르셨습니까, 도련님? 가운데서 화제를 고르시면 됩니다. 급한 용건이 없으시다면 ‘다음에’ 듣겠습니다.":
["You called, my lord? The topics are there in the centre. If your business can wait, ‘Another time’ will do.","お呼びですか、坊ちゃん？　中央から話題をお選びください。お急ぎでなければ「また今度」伺いましょう。"],"서로 처음 만난 손님 셋이 시엘의 탁자에 앉습니다. 한 사람이 차는 됐다며 찻잔을 밀어 놓습니다.":
["Three guests who have never met sit down at Ciel's table. One declines the tea and pushes their cup aside.","シエルのテーブルに、互いに初対面の客が三人座ります。一人はお茶を辞退し、カップを脇へ押しやります。"],"서재 문을 두드리는 노크 소리에 시엘이 펜을 내려놓았다. 문 앞에 선 타나카가 모자를 벗었다.":
["At a knock on the study door, Ciel laid down his pen. Tanaka stood in the doorway and took off his hat.","書斎の扉を叩く音に、シエルはペンを置いた。戸口に立ったタナカが帽子を脱いだ。"],"선대 백작 부인의 수첩은 늘 같은 자리에 꽂혀 있었다. 집사가 수백 번도 넘게 먼지를 닦아 낸 책이었다.":
["The late countess’s notebook stood in its usual place. The butler had dusted it hundreds of times.","先代伯爵夫人の手帳はいつもの場所に差してあった。執事が何百回となく埃を払ってきた本だった。"],"손잡이를 한 번 돌려 보십시오. 자, 이제 제가 인사를 올리는 동안 얼마나 부드럽게 도는지 봐 주시지요.":
["Give the crank one turn. Now, as I make my bow, watch how smoothly it runs.","ハンドルをひと回しなさってください。では、僕がご挨拶する間、その滑らかな動きをご覧ください。"],"시엘이 상장을 받아 들자 에드워드가 고개를 끄덕입니다. 두 사람은 손님들을 향해 나란히 인사합니다.":
["Edward nods as Ciel accepts the certificate. Side by side, they bow to the guests.","シエルが賞状を受け取ると、エドワードがうなずきます。二人は並んで客に一礼します。"],"심사위원이 시엘의 이름을 부릅니다. 엘리자베스는 바구니를 내려놓고 시엘에게 박수를 보냅니다.":
["The judge calls Ciel’s name. Elizabeth puts down her basket to applaud him.","審査員がシエルの名を呼びます。エリザベスは籠を置き、シエルに拍手を送ります。"],"알겠습니다. 매듭만 바꾼 견본을 하나 더 가져오지요. 두 상자 중 어느 것을 먼저 집는지 보시겠습니까?":
["Very good. I’ll bring a second sample with a different knot. Shall we see which box they reach for first?","承知しました。結び方だけ変えた見本をもう一つお持ちします。どちらの箱に先に手を伸ばすか、ご覧になりますか？"],"어느 걸로 보시겠습니까? 팬텀사의 상표를 달려면 저것들도 이 견본과 같은 검사를 통과해야 하거든요.":
["Which would you care to inspect? Those must pass the same tests as this sample before they can bear the Funtom name.","どれをご覧になりますか。あちらの品も、この見本と同じ検査に通らなければ、ファントム社の商標は付けられませんので。"],"어느 집 식탁에 앉으셔도 상관없습니다만, 배고플 땐 가만있지 말고 제 부엌부터 찾아오십쇼!":
["Don’t matter whose table you eat at. When you’re hungry, don’t just sit there. Come straight to my kitchen!","どこんちの食卓についたってかまいませんよ。ただ、腹が減ったら黙ってないで、真っ先に俺の厨房に来てくださいよ！"],"의사는 시엘의 손목을 놓지 않은 채 침대 곁을 지켰다. 세바스찬이 아래층 서재로 내려갔다.":
["The doctor remained at the bedside, his fingers on Ciel’s wrist. Sebastian went down to the study.","医師はシエルの手首から指を離さず、枕元に残った。セバスチャンは階下の書斎に向かった。"],"지난번 봉인을 떼실 때 이 종이 조각이 떨어졌습니다. 잃어버릴까 흰 종이에 받쳐 두었지요.":
["This scrap fell out when you broke the seal last time. I laid it on a sheet of white paper for safekeeping.","先日、坊ちゃんが封をお開けになった折に、この紙片が落ちましてな。見失わぬよう、白い紙に載せておきました。"],"지난번에도 같은 분이 다과회 초대를 사양하셨습니다. 그런데 도련님의 온실에 관해서는 두 장이나 쓰셨더군요.":
["The same guest declined our last invitation to tea. Yet they filled two pages asking about your greenhouse, my lord.","その方は前のお茶会もお断りになりました。もっとも、坊ちゃんの温室については二枚もお書きでしたが。"],"집사가 흰 장갑 한 짝을 벗었다. 손등의 문양과 소년의 오른쪽 눈이 같은 빛을 띠었다.":
["The butler removed a white glove. The mark on his hand and the boy’s right eye shone with the same light.","執事は白手袋を片方外した。手の甲の紋様と少年の右目が、同じ色の光を帯びた。"],"체조실 거울 앞에 섭니다. 두 팔을 펴고 무릎을 번갈아 올리며 네 박자마다 숨을 고릅니다.":
["He stands before the exercise-room mirror, arms outstretched. He lifts his knees in turn and steadies his breathing every four beats.","体操室の鏡の前に立つ。両腕を広げ、交互に膝を上げながら、四拍ごとに息を整える。"],"칼은 두셔도 됩니다. 선물을 받는 분이 칼부터 찾으셔야 쓰겠습니까. 리본 끝만 살짝 당겨 보시죠.":
["You may set the knife aside. Who wants to hunt for a blade before unwrapping a present? Just give the ribbon a gentle tug.","ナイフはお置きください。贈り物を手にして、まず刃物を探すのでは興ざめでしょう。リボンの端をそっとお引きください。"],"화이트채플에서 온 두 통은 한 봉투에 묶어 두었습니다. 다음에 찾으실 때도 나란히 꺼내 드리지요.":
["I have put the two letters from Whitechapel in one envelope. Next time you ask for them, I shall lay them out side by side again.","ホワイトチャペルからの二通は、一つの封筒にまとめてございます。次にご所望の折にも、並べてお出しいたしましょう。"],"회신을 보내 온 상인들의 명함이 은쟁반에 쌓였다. 다음 모임의 날짜는 손님들 쪽에서 먼저 물었다.":
["The calling cards of merchants who had written back piled up on the silver tray. It was the guests who first asked when the next gathering would be.","返事を寄せた商人たちの名刺が銀の盆に積み重なった。次の集まりはいつかと先に尋ねたのは、客たちの方だった。"],"가문의 문장은 끝내 돌아오지 않았습니다. 스스로 복수를 내려놓은 밤, 악마는 계약대로 시엘의 영혼을 삼켰습니다.":
["The family crest was never restored. The night Ciel laid his revenge aside, the demon devoured his soul, just as their contract decreed.","家の紋章が戻ることはなかった。シエルが自ら復讐を手放した夜、悪魔は契約どおりその魂を喰らった。"],"곡이 끝난 줄 알고 손님 한 분이 먼저 박수를 치셨습니다. 아직 파트너의 손을 잡고 계시지요, 도련님?":
["One guest mistook the pause for the end and applauded. You still have your partner’s hand, I trust, my lord?","曲が終わったと思われたお客様が、お一人拍手なさいました。坊ちゃん、まだお相手の手を取っておいでですね？"],"구성은 이대로 좋겠습니다. 다만 상자를 기울여 건네면…… 보십시오. 제일 작은 병이 칸막이 틈으로 빠집니다.":
["The assortment is quite satisfactory. But tilt the box as you hand it over and… there, you see? The smallest bottle slips through the partition.","品ぞろえはこのままでよろしいでしょう。ただ、箱を傾けて手渡すと……ご覧ください。一番小さな瓶が仕切りの隙間を抜けてしまいます。"],"그 뒤는 쌕쌕거리는 숨소리에 묻혀 들리지 않았다. 시엘은 여전히 자신이 말을 이어 가고 있는 줄 아는 얼굴이었다.":
["The rest was lost in the wheeze of his breathing. From his expression, Ciel still thought he was speaking.","その先は喘鳴にかき消された。シエルはまだ、言葉を続けているつもりの顔をしていた。"],"그리고… 손등이 흉터로 굳어서 검표 가위를 못 쥐더군. 결국 표를 손으로 반만 북 찢어 줬어.":
["And… the back of his hand was so scarred and stiff he couldn’t grip the ticket punch. In the end he just tore the ticket in two by hand.","それと……手の甲が傷痕で引きつれて、改札鋏を握れなかった。結局、手で切符をびりっと半分に裂いたんだ。"],"꽃이 핀 영지 정원에 연주석과 묘목 심사대를 마련합니다. 시엘은 두 종목 중 하나에 출전할 수 있습니다.":
["A musicians' stand and a judging table for young plants are set up in the flowering estate gardens. Ciel may enter one of the two events.","花盛りの領地の庭に、演奏席と苗の審査台が設けられます。シエルは二つの種目から一つを選んで出場できます。"],"담당관이 팬텀사의 거래 장부 옆에 납품 증서를 놓습니다. 시엘은 증서를 받아 세바스찬에게 건넵니다.":
["The officer lays the warrant beside Funtom's account ledger. Ciel takes it and passes it to Sebastian.","調達官がファントム社の取引台帳の隣に認定証を置きます。シエルはそれを取ってセバスチャンに渡します。"],"무리한 일정이었는지는 컨디션과 스트레스, 의욕에 드러납니다. 이제 아래의 ‘가문 장부’를 함께 보겠습니다.":
["Your condition, stress and motivation will tell us whether the schedule was too demanding. Now let us turn to the family ledger below.","ご予定に無理があったかどうかは、体調とストレス、意欲に表れます。では下にある家の帳簿を一緒に見てまいりましょう。"],"세바스찬이 비단으로 견본을 감쌌다. 왕실에 갈 상자의 뚜껑은 시엘이 받아 제 손으로 덮었다.":
["Sebastian wrapped the sample in silk. Ciel took the lid of the box bound for the palace and closed it himself.","セバスチャンは見本を絹で包んだ。王室に届ける箱の蓋は、シエルが受け取って自ら閉じた。"],"수레는 왼쪽으로 넘어졌는데 짐 상자의 오른쪽 모서리만 패였습니다. 어느 흔적이 먼저 생겼을까요?":
["The cart fell to the left, yet only the right corner of its crate is dented. Which mark came first?","荷車は左に倒れたのに、積み荷の箱は右の角だけがへこんでいます。どちらの跡が先についたのでしょう？"],"시엘은 편지를 접힌 자국대로 접어 돌려주었다. 스네이크가 봉투를 받았는데도 그 손은 거기 그대로 있었다.":
["Ciel folded the letter along its old creases and handed it back. Even after Snake took the envelope, Ciel's hand lingered there.","シエルはもとの折り目に沿って手紙を畳み、返した。スネークが封筒を受け取った後も、シエルの手はそこに残っていた。"],"시엘이 빈 잔을 내려놓는다. 명령을 기다릴 필요는 없었다. 세바스찬이 두 번째 잔을 채운다.":
["Ciel sets down his empty cup. There is no need to wait for an order. Sebastian pours a second cup.","シエルが空のカップを置く。命令を待つまでもなかった。セバスチャンが二杯目を注ぐ。"],"시엘이 상장을 받고 손님들을 향해 몸을 숙입니다. 세바스찬은 돌아온 시엘에게 접어 둔 원고를 건넵니다.":
["Ciel accepts the certificate and bows to the guests. When he returns, Sebastian hands him the folded speech.","シエルは賞状を受け取り、客席に一礼します。戻ってきたシエルに、セバスチャンは畳んでおいた原稿を差し出します。"],"에드워드가 상장을 내려놓고 손님들의 탁자로 돌아갑니다. 시엘은 남아 있는 찻잔들을 살펴봅니다.":
["Edward puts down his certificate and returns to the guests' table. Ciel looks over the cups still there.","エドワードが賞状を置いて客のテーブルに戻ります。シエルは残ったカップに目を配ります。"],"여왕의 즉위 50주년을 기념하는 주간입니다. 런던 상인들이 여는 기념품 경연에 팬텀사 제품을 냅니다.":
["This week marks the fiftieth anniversary of the Queen’s accession. Funtom enters a product in the London merchants’ souvenir competition.","女王の即位五十周年を祝う一週間です。ロンドンの商人が催す記念品の品評会に、ファントム社の品を出します。"],"오늘 만찬은 제가 문밖에서 기다리겠습니다. 손님들은 벌써 도착하셨는데, 도련님은 어느 자리를 맡으시겠습니까?":
["I shall wait outside the dining room tonight. Your guests have already arrived. Which duty will you take on, my lord?","今夜の晩餐では、私は扉の外で控えます。お客様はもうお揃いです。坊ちゃんはどの役目をお引き受けになりますか？"],"왕실의 승인은 기약 없이 미뤄졌습니다. 시엘은 작위 대신 스스로 선택한 이름으로 집요한 추적을 이어 갑니다.":
["The Crown has deferred its approval indefinitely. Without his title, Ciel doggedly continues the pursuit under a name of his own choosing.","王室による承認は無期限に延期された。シエルは爵位に代わる名を自ら選び、執念深く追跡を続ける。"],"우리 상표가 보이게 놓는다는 조건으로 빌려줘. 사용료를 받으면 어느 진열장 값인지 장부에 적어 두고.":
["Lend it to them, provided they put our trademark where it can be seen. When the hire fee comes in, record which display case it was for.","うちの商標が見えるように置くなら貸してやれ。貸し賃を受け取ったら、どの陳列ケースの分か帳簿に記しておけ。"],"우리나라에선 은인이 집에 오면 잘 대접해 줘. 아그니 것도 한 잔 줘! 그런데 시엘, 우리 방은 어디야?":
["Where I come from, a man welcomes his benefactor properly! A cup for Agni, too! Now, Ciel, which room is ours?","俺の国では恩人を家に迎えたら手厚くもてなすんだ。アグニにも一杯くれ！　ところでシエル、俺たちの部屋はどこだ？"],"조커의 짐에서 이게 나왔어. 우리 식구들을 데려가라고 한 게 당신이야? ⋯라고 와일드가 말했어.":
["“We found this among Joker's things. Was it you who had our family taken away?” says Wilde.","「ジョーカーの荷物からこれが出てきた。家族のみんなを連れていけって言ったのは、あんた？」……って、ワイルドが言ってる。"],"직원 대표가 겨우 구한 사본이랍니다. 물건을 만든 사람들의 손에는 정작 인수증이 한 장도 돌아가지 않았다더군요.":
["The workers’ representative went to considerable trouble to obtain this copy. It seems the people who actually made the goods never received a single receipt.","従業員の代表がようやく手に入れた写しだそうです。品を作った当の職人たちには、受領証が一枚も渡らなかったとか。"],"찻잔을 거둔 뒤에도 손님들은 자리를 뜨지 않았다. 마지막 태엽이 다 풀릴 때까지 견본 둘레에 서 있었다.":
["Even after the cups were cleared, the guests lingered. They stood around the sample until the last turn of its spring ran down.","カップを下げても客たちは席を立たなかった。最後のぜんまいがほどけきるまで、見本を取り囲んでいた。"],"출품할 물건만 골라 손을 봤을까 싶으십니까? 마침 납품 상자가 있습니다. 하나를 꺼내 보시죠.":
["Perhaps you think we lavished special attention on our entry? We happen to have a delivery crate here. Do take one out.","出品する品だけを選んで手をかけたとお思いですか。ちょうど納品用の箱があります。一つお取りになってみてください。"],"팔린 숫자 옆에 반품도 적어. 태엽이 끊어져서 돌아온 물건까지 실적에 넣을 셈이야?":
["Put the returns beside the sales. Surely you don’t mean to count toys sent back with broken springs?","売上の隣に返品数も書け。ぜんまいが切れて戻った玩具まで実績に数える気か？"],"교회 현관에 빵과 채소를 놓을 자리를 비워 두었습니다. 올해는 도련님께서 첫 바구니를 맡으시지요.":
["There’s space for bread and vegetables in the church porch. This year the first basket is yours, my lord.","教会の玄関にパンと野菜を置く場所を空けておきました。今年は最初の籠を坊ちゃんにお任せしましょう。"],"나이트가 지나간 자리에 설탕 가루가 끊겼군. 미끄러진 게 아니라 들어서 옮겼어. 비숍은 거기 둬.":
["There’s a gap in the sugar dust along the knight’s path. It didn’t slide. Someone lifted it. Leave the bishop where it is.","ナイトが通ったはずの所で粉砂糖の筋が途切れてる。滑ったんじゃない。持ち上げて動かしたんだ。ビショップはそこに置いておけ。"],"도련님 쪽에서 읽으시게 꽂았는데, 물을 줄 때마다 제가 자꾸 거꾸로 읽어요. 이 이름표, 다시 쓸까요?":
["I put the label in so you could read it, young master, but now it’s upside down whenever I water it. Shall I write another?","坊ちゃんから読める向きに挿したんですけど、水をやるたびに僕には逆さなんです。この名札、書き直しましょうか？"],"도련님, 잠깐만 팔을 굽혀 봐 주시겠습니까요? 지난번 가봉 때보다 소매가 짧아진 것 같습니다요.":
["Would you bend your arm a moment, young master? That sleeve looks shorter than at the last fitting, it does.","坊ちゃん、ちょっと腕を曲げていただけますかね？　前の仮縫いの時より袖が短くなったようですだ。"],"뚜껑을 열자마자 버터 향이 납니다. 한 장을 꺼내 봤더니 가장자리만 상자에 남는군요.":
["The scent of butter rises the moment one opens the lid. Yet when I lift out a biscuit, its edges stay in the box.","蓋を開けた途端にバターが香ります。ところが、一枚取ってみますと、縁だけが箱に残りますね。"],"마차가 떠나기 전에 정문으로 가셔야 합니다. 계단에서는 여유가 있었는데 자갈길에 드니 숨이 가빠지셨군요.":
["You must reach the main gate before the carriage leaves. You had breath to spare on the stairs, but you’re breathing harder on the gravel path.","馬車が出る前に正門へおいでください。階段では余裕がおありでしたが、砂利道に入って息が上がってきましたね。"],"마침 커튼이 걷혔다. 세바스찬의 눈에는 햇살이 죄다 아그니의 등 뒤로 모인 것처럼 보였다.":
["Just then the curtains were drawn back. To Sebastian, it looked as if every ray of sunlight in the room had gathered behind Agni.","折しもカーテンが開いた。セバスチャンには、差し込む陽の光がすべてアグニの背後に集まったように見えた。"],"뭐야, 양키라서 영 마땅찮단 건가? 프랑스 놈이 구우면 같은 고기도 더 고상한 맛이 난다 이거지?":
["What's that? A Yank ain't good enough for you? Same hunk of meat tastes fancier if a Frenchman cooks it, does it?","何だよ、ヤンキーじゃ気に食わねえってのか？　同じ肉でもフランス野郎が焼きゃ上品な味になるってか？"],"세바스찬은 공손히 입을 다물었다. 대신 촛대가 든 장식장 문을 소리 없이 활짝 열어젖혔다.":
["Sebastian held his tongue. Instead, with perfect courtesy and without a sound, he opened the cabinet doors wide to reveal the candlesticks.","セバスチャンは礼儀正しく口をつぐんだ。その代わり、燭台を収めた飾り棚の扉を、音もなく大きく開け放った。"],"세바스찬이 은쟁반을 들어 올리자, 부도 처리되어 돌아온 어음 아래에서 동그란 찻잔 자국이 드러났다.":
["Sebastian lifted the silver tray. Beneath the dishonoured bill lay the round stain of a teacup.","セバスチャンが銀盆を持ち上げた。不渡りで戻ってきた手形の下に、丸い茶染みが現れた。"],"시엘, 난 아직 널 내 매제로 인정하지 않았다. ……뭐? 다과회랑 무슨 상관이냐고? 아무튼, 내가 먼저다!":
["Ciel, I still haven’t accepted you as my brother-in-law. …What’s that? What does that have to do with a tea party? Never mind. I’m going first!","シエル、僕はまだ君を義弟と認めていないぞ。……何？　茶会と何の関係があるかって？　とにかく、僕が先だ！"],"시엘은 몸을 일으키려다 힘없이 침대 가장자리를 짚었다. 세바스찬의 움직임이 뚝 멈췄다.":
["Ciel tried to sit up. His hand came down weakly on the edge of the bed. Sebastian went utterly still.","シエルは起き上がろうとして、力なく寝台の縁に手をついた。セバスチャンの動きがぴたりと止まった。"],"시엘의 생일과 유모의 품삯이 적힌 페이지 뒤편에, 어린 도련님의 발작이 있던 밤들이 빼곡히 적혀 있었다.":
["On the back of the page that recorded Ciel’s birthday and his nurse’s wages, someone had noted, in close-set lines, every night the young master had suffered an attack.","シエルの誕生日と乳母の賃金が記された頁の裏には、幼い坊ちゃんが発作を起こした晩がびっしり書き込まれていた。"],"시엘이 상장을 받으러 나서자 에드워드가 박수를 칩니다. 시엘은 상장을 받아 들고 그에게 고개를 숙입니다.":
["Edward applauds as Ciel steps forward for his certificate. With it in hand, Ciel bows to him.","シエルが賞状を受けに進み出ると、エドワードが拍手します。シエルは賞状を受け取り、彼に一礼します。"],"시엘이 은제 찻숟가락을 받아 듭니다. 에드워드는 빈 찻잔을 내려놓고 시엘에게 손을 내밉니다.":
["Ciel accepts the silver teaspoon. Edward sets down his empty cup and offers Ciel his hand.","シエルが銀のティースプーンを受け取ります。エドワードは空のカップを置き、シエルに手を差し伸べます。"],"심사위원이 같은 점수를 받은 두 사람의 이름을 차례로 부릅니다. 시엘은 상대와 나란히 서서 손님들에게 인사합니다.":
["The judge calls the names of the two entrants who tied, one after the other. Ciel stands beside his rival, and together they bow to the guests.","審査員が同点の二人の名を順に呼びます。シエルは対戦相手と並び、客に一礼します。"],"아이들은 집에 가져갈 기념 상자에 리본을 묶었다. 시엘은 완성된 상자를 건네며 누구에게 줄 선물인지 물었다.":
["The children tied ribbons round their keepsake boxes. As Ciel handed each one back, he asked who the gift was for.","子供たちは持ち帰る記念の箱にリボンを結んだ。シエルは出来上がった箱を手渡しながら、誰への贈り物かと尋ねた。"],"에드워드가 상장을 받고 시엘을 향해 고개를 숙입니다. 시엘도 찻주전자를 내려놓고 인사를 돌려줍니다.":
["Edward accepts the certificate and bows to Ciel, who sets down the teapot and returns the bow.","エドワードは賞状を受け取り、シエルに一礼します。シエルもティーポットを置き、礼を返します。"],"엘리자베스가 상장을 받은 뒤 연주석으로 돌아옵니다. 시엘은 바이올린을 내려놓고 악보를 정리합니다.":
["Elizabeth returns to the musicians' stand with her certificate. Ciel sets down his violin and puts his score in order.","エリザベスが賞状を受け取って演奏席に戻ります。シエルはヴァイオリンを置き、楽譜をそろえます。"],"왕자님께 드릴 말씀인데 제가 꺼내면 먼저 걱정하실 겁니다. 시엘 님이라면 어떻게 운을 떼시겠습니까?":
["There’s something I must tell the prince, but he’ll worry the moment I bring it up. How would you begin, Lord Ciel?","ソーマ様に申し上げたいことがあるのですが、私から切り出すと、話を聞く前からご心配なさるでしょう。シエル様なら、どうお話しになりますか？"],"이웃 가문이 응접실에서 새해 인사를 나눕니다. 초대받은 집안의 자제들이 인사와 다과 접대를 겨룹니다.":
["Neighbouring families exchange New Year's greetings in the drawing room. Their sons and daughters compete in speechmaking and the art of serving tea.","近隣の家々が応接間に集まり、新年の挨拶を交わします。招かれた子女たちが、祝辞とお茶のもてなしで腕を競います。"],"조커가 그랬다고? 매일 같은 천막에서 잤는데 스네이크한텐 아무 말도 안 했어. ⋯라고 에밀리가 말했어.":
["“Joker did that? We slept in the same tent every night, and he never said a word to Snake,” says Emily.","「ジョーカーが？　毎晩同じテントで眠ってたのに、スネークには何も言わなかったわ」……って、エミリーが言ってる。"],"그때는 그것이 무슨 말인지 알 수 없었다.\\nS-012에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까.":
["At the time, he didn't understand the question.\nCiel was the first person ever to ask S-012 for his name instead of his number.","その時は、何を聞かれたのかわからなかった。\nS-012に番号ではなく名前を尋ねたのは、シエルが初めてだったからだ。"],"담당관이 납품 장부의 수량을 짚습니다. 시엘은 인증에 필요한 열여덟 개까지 몇 개가 남았는지 확인합니다.":
["The royal purchasing officer points to the quantity in the delivery ledger. Ciel checks how many more units he must deliver to reach the eighteen required for certification.","調達官が納品台帳の数量を指します。シエルは認定に必要な十八個まで、あといくつかを確かめます。"],"담당관이 휘트컴 상회에 증서를 건넵니다. 시엘은 팬텀사의 평가표를 받아 견본 상자 위에 펼칩니다.":
["The officer presents Whitcomb & Co. with the certificate. Ciel takes Funtom's assessment sheet and spreads it over the sample crate.","調達官がウィットコム商会に認定証を渡します。シエルはファントム社の評価表を受け取り、見本の箱の上に広げます。"],"도련님께서 안감을 조금 접어 보시니 상인이 또 천을 펴 주는군요. 아까부터 앞면을 보여 준 게 벌써 세 번째입니다.":
["You turn back a corner of the lining and the merchant spreads the cloth again. That’s the third time he’s shown you its face, my lord.","坊ちゃんが裏地を少し折り返すと、商人はまた布を広げました。表ばかり見せたのは、これでもう三度目です。"],"먹지를 대고 옮긴 두 장입니다. 그대로 포개면 글씨가 꼭 맞아야 할 텐데, 숫자 하나가 어긋나는군요.":
["These two sheets were made with carbon paper. Lay one over the other and the writing ought to match exactly. Yet one figure is out of place.","こちらはカーボン紙で写した二枚です。重ねればぴたりと字が合うはずですが、数字が一つずれていますね。"],"바구니는 밑을 받쳐 줘. 에밀리가 손잡이에 턱을 괴고 자거든. ⋯라고 키츠가 말했어.":
["“Hold the basket from underneath. Emily sleeps with her chin on the handle,” says Keats.","「籠は下から持って。エミリーは取っ手にあごをのせて眠るんだ」……って、キーツが言ってる。"],"봉투는 그대로 두었습니다. 제 짐작을 미리 말씀드리면 주제 넘는 짓이겠지요. 어디까지나 전 집사니까요.":
["I’ve left the envelopes untouched. It would hardly be my place to offer a guess before you’ve had a look. I am, after all, your butler.","封筒はそのままにしてございます。先に私の推測を申し上げては差し出がましいでしょう。私はあくまで執事ですから。"],"상자는 하나도 빠지지 않았습니다. 청구서가 좀 늘었군요. 마차 세 대의 운임에 새 차축 하나의 값까지 붙었습니다.":
["Every crate is accounted for. The bill, however, has grown a little. Hire for three wagons, and the price of a new axle besides.","箱はすべて揃っております。請求の方は少々増えましたね。荷馬車三台分の運賃に、新しい車軸一本分まで付いてまいりました。"],"손님은 영수증을 반으로 접어 갔다. 다음 장날, 같은 접힌 자국을 펴 가며 다른 점원이 같은 항의를 받아 적었다.":
["The customer folded the receipt in half and took it away. On the next market day, a different clerk smoothed out the same crease and took down the same complaint.","客は領収書を二つに折って帰った。次の市の日、別の店員が同じ折り目を伸ばしながら、同じ苦情を書き取った。"],"시엘이 마지막 음을 길게 당기자 종소리가 그 뒤를 받습니다. 모자를 쓰고 일어서던 손님까지 돌아서서 박수를 칩니다.":
["Ciel draws out the final note, and the bells take it up. Even the guests who had risen and put on their hats turn back to applaud.","シエルが最後の音を長く引くと、鐘の響きがそれを受けます。帽子をかぶって立ち上がりかけた客まで振り返って拍手を送ります。"],"시엘이 은제 달걀 장식을 받아 듭니다. 엘리자베스는 바구니를 팔에 걸고 그 장식을 가까이 들여다봅니다.":
["Ciel accepts the silver egg ornament. Her basket over her arm, Elizabeth leans closer to admire it.","シエルが銀の卵飾りを受け取ります。エリザベスは籠を腕に掛けたまま、飾りを間近からのぞき込みます。"],"시엘이 픽, 작게 웃었다. 마른 웃음이 잦아들자 방 안에는 종이 타는 소리만 사그락거렸다.":
["Ciel gave a small, dry laugh. When it died, the only sound in the room was the rustle of burning paper.","シエルがふっと笑った。その乾いた笑いが消えると、部屋には紙の燃えるかさかさした音だけが残った。"],"악보가 한 장 넘어가도 시엘은 활을 멈추지 않습니다. 반주자가 다시 따라붙고 두 사람이 같은 박에서 곡을 닫습니다.":
["Even when a page blows over, Ciel keeps his bow moving. The accompanist catches up, and they finish on the same beat.","風で楽譜が一枚めくれても、シエルの弓は止まりません。伴奏者も追いつき、二人はぴたりと拍を合わせて曲を結びます。"],"앞의 달걀은 수선화, 제비꽃, 은방울꽃 순이었어. 네 자수 도안 순서잖아. 다음 꽃을 보여 줘.":
["The other eggs went daffodil, violet, lily of the valley. That’s the order on your embroidery pattern. Show me the next flower.","前の卵は水仙、スミレ、スズランの順だった。お前の刺繍の図案と同じだ。次の花を見せてくれ。"],"어둠 속에서 악마가 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.":
["In the dark the demon opened his mouth. Ciel’s soul slipped out with his final breath, and Sebastian swallowed it whole.","闇の中で悪魔が口を開けた。シエルの最期の息とともに抜け出た魂を、セバスチャンは余さず飲み込んだ。"],"어린 주인이 지도 접는 법을 익힌 건 첫겨울이었다. 이제는 어둠 속을 걸을 등불 한 자루까지 셈에 넣기 시작한 것이다.":
["It was his first winter when the young master learnt to fold a map. Now his reckoning even allowed for a lamp to walk by after dark.","幼い主人が地図の畳み方を覚えたのは最初の冬だった。今では夜道を行く灯り一つまで勘定に入れるようになった。"],"인쇄소에서 마지막 교정쇄가 왔습니다. 이 한 줄대로라면 여우가 사냥꾼에게 쫓아오라고 명령하는 셈인데요.":
["The final proof has arrived from the printer. According to this line, the fox is ordering the huntsman to give chase.","印刷所から最後の校正刷りが届きました。この一行のままですと、狐が猟師に「追ってこい」と命じることになりますが。"],"종이 한 장이면 오늘은 DORA가 된다. 이튿날 다른 아이가 계산대에 나무패를 두 개 올려놨다. B와 B였다.":
["One slip of paper was enough to spell DORA that day. The next day another child laid two tiles on the counter. A B and a B.","紙切れ一枚で、今日のところはDORAと並んだ。翌日、別の子供が勘定台に木札を二枚置いた。BとBだった。"],"지난번 명부에는 같은 작업장의 이름이 두 번 있었지요. 오늘 온 인수증을 보십시오. 두 줄 중 하나에서 작업장의 이름을 지웠군요.":
["The same workshop appeared twice on the last list, as you may recall. Look at the receipt that came today. The workshop’s name has been erased from one of the two lines.","先日の名簿には、同じ工房の名が二度ございましたね。本日届いた受領証をご覧ください。二行のうち片方から、工房の名が消されております。"],"진열장 너머로도 리본이 눈에 띕니다. 이 매듭대로라면 선물을 받은 아이가 맨 먼저 어른부터 찾아야겠군요.":
["The ribbon catches the eye even through a shop window. With a knot like this, though, the first thing the child will have to do is find a grown-up.","陳列窓越しにもリボンが目を引きます。とはいえ、この結び方では、贈られたお子様はまず大人を探すことになりそうです。"],"첫 납품 날짜를 짚으셨군요. 좋습니다. 그날의 물건에도 오늘과 같은 기준을 썼습니다. 대조해 보시죠.":
["You've picked out the date of our first delivery. Very good. Those goods had to meet the same standard as today's. Do compare them.","最初の納品日に目をお留めになりましたか。結構です。その日の品にも今日と同じ基準を用いました。どうぞお確かめください。"],"첫 장에는 잡혀간 단원들의 명단이, 그 뒤에는 아이들이 사라진 날짜와 서커스의 순회 일정이 나란히 적혀 있었다.":
["The first page listed the troupe members taken into custody. The pages that followed set the dates of the children's disappearances alongside the circus's tour dates.","最初のページには連行された団員の名が並び、その後には子供たちが姿を消した日付とサーカスの巡業日程が並べて記されていた。"],"판매점마다 교환할 물건을 보냈다. 아이에게 가는 봉투에는 새 바퀴를 단 수레를 그려 넣었다. 가문 명성 +4":
["Replacements went out to every stockist. The envelope for the child held a drawing of the cart with its new wheel. Family reputation +4","各販売店に交換品を送った。子供に宛てた封筒には、新しい車輪をつけた荷車の絵を入れた。家の名声 +4"],"평소에는 도련님께서 방문지를 정하십니다. 오늘은 연습이니 서재를 골라 보겠습니다. 방문은 하순 일정을 마친 뒤입니다.":
["Ordinarily you choose where to visit, my lord. Today, for practice, let us choose the library. We shall go after the last activity of the month.","普段は坊ちゃんが行き先をお決めになります。今日は練習ですから、書斎を選びましょう。訪れるのは下旬の予定を終えた後です。"],"풋맨 일이지. 손님이 오면 외투를 받고 응접실로 안내해. 식사 때는 세바스찬 곁에서 시중을 들고.":
["You'd be a footman. Take the guests' coats and show them to the drawing room. At mealtimes, you'd wait at table alongside Sebastian.","フットマンの仕事だ。客が来たら外套を預かり、応接間へ案内する。食事の時はセバスチャンについて給仕をしろ。"],"가문의 사건을 기록하는 장부입니다. 궁정에 어떤 소문이 도는지도 여기 적어 두겠습니다. 마지막으로 보여 드릴 것은 ‘저장 · 설정’입니다.":
["This ledger records the family’s affairs. I shall also note any rumours making the rounds at court. Our last stop is Save & Settings.","家の出来事を記す帳簿でございます。宮廷でどのような噂が流れているかも、こちらに書き留めておきます。最後に「セーブ・設定」をご案内しましょう。"],"건너편에 놓인 말도 색깔이 잘 보입니다. 이제 첫 수를 둬야 하는데…… 설명서에서는 벌써 두 번째 수로 넘어갔군요.":
["Even across the board, the colours of the pieces are clear. Now, to make the first move… Ah. The instructions are already on the second.","向こう側の駒の色もよく見えます。では初手を指しましょうか……おや、説明書はもう二手目に進んでいますね。"],"귀는 더 단단해졌다. 뚜껑을 덮자 왼쪽 귀가 꺾이면서 안쪽 종이에 전보다 깊은 자국을 냈다.":
["The ears were firmer. When the lid went on, the left ear buckled and left a deeper dent in the lining paper than before.","耳は固くなった。蓋を閉めると左耳が折れ曲がり、裏紙に前より深い跡をつけた。"],"담당관이 팬텀사의 이름을 부르고 출품 품목의 납품 증서를 건넵니다. 시엘은 증서에 적힌 품목명을 확인합니다.":
["The officer calls Funtom's name and presents the warrant for the product it entered. Ciel checks the name of the item on the certificate.","調達官がファントム社の名を呼び、出品した品目の認定証を渡します。シエルは証書に記された品目名を確かめます。"],"도련님의 수업과 휴식, 저택의 살림, 팬텀사의 경영까지. 이제부터 그 모든 시간을 짜는 건 집사인 당신의 일이다.":
["Lessons and leisure, the running of the manor, the affairs of Funtom. As his butler, you will decide how the young master spends his days.","坊ちゃんの授業と休息、屋敷の切り盛りにファントム社の経営。そのすべてを月々の予定に組み込むのが、これからは執事であるあなたの仕事だ。"],"바람에 넘어간 마디를 찾느라 한 박이 빕니다. 시엘은 반주자가 되풀이하는 소절에 맞춰 끝까지 연주합니다.":
["Ciel loses a beat finding the bar the wind has hidden. The accompanist repeats a phrase, and Ciel picks it up and plays to the end.","風で見失った小節を探すうちに、一拍空いてしまいます。シエルは伴奏者の繰り返す一節に合わせ、最後まで弾き通します。"],"바로 여기서 필체가 달라지지요. 제 짐작을 말씀드리기 전에, 도련님 눈에는 어찌 읽히는지 먼저 듣고 싶습니다.":
["Right here the handwriting changes. Before I tell you what I make of it, I should like to hear how you read it, my lord.","ほら、ここで筆跡が変わります。私の見立てをお話しする前に、坊ちゃんにはどう読めるかお聞かせください。"],"병동마다 필요한 식사 수를 확인하고 따뜻한 그릇을 보냈다. 저녁 우편에 빈 바구니와 간호사의 답장이 함께 돌아왔다.":
["They checked how many meals each ward needed and sent them out hot. The evening post brought back the empty basket and a reply from a nurse.","病棟ごとに必要な食数を確かめ、温かい食事を送り届けた。夕方の便で、空の籠と看護師からの返事が一緒に戻ってきた。"],"사내가 시엘의 옷깃에서 뜯어낸 단추를 슬쩍 놓았다. 돌바닥에 떨어지는 소리에 소마의 눈썹이 올라갔다.":
["The man quietly let go of the button he’d torn from Ciel’s collar. At its clatter on the flagstones, Soma raised an eyebrow.","男はシエルの襟からむしり取った釦をそっと放した。石畳に当たる音に、ソーマが眉を上げた。"],"세바스찬이 찻잔을 받쳐 들었다. 총알이 뚫은 주전자 옆구리에서 홍차가 잔 안으로 똑똑 떨어졌다.":
["Sebastian held a cup beneath the pot. Drop by drop, tea fell into it through the bullet hole in the side.","セバスチャンがカップを差し出すと、ポットの横腹に空いた弾の穴から、紅茶がぽたぽたと落ちた。"],"아, 도련님 신발 자국이었구나! 흙 묻은 구두로 돌아가시면 세바스찬 씨한테 혼나실 텐데요!":
["Oh, those are your footprints, young master! If you go back with mud on your shoes, Mr Sebastian will give you an earful!","あっ、坊ちゃんの足跡だったんですね！　泥靴のまま戻ったら、セバスチャンさんに叱られちゃいますよ！"],"얼스 코트 이탈리아 박람회가 열리는 달입니다. 인근 상인회가 여는 공예품 견본 품평에 팬텀사도 참가합니다.":
["The Italian Exhibition opens at Earl’s Court this month. Funtom will enter the local merchants’ handicraft competition.","今月はアールズ・コートでイタリア博覧会が開かれます。地元商人の手工芸品の品評会には、ファントム社も参加します。"],"에드워드의 이름이 불리고 박수가 이어집니다. 시엘은 심사표를 확인한 뒤 찻주전자를 내려놓고 박수를 보냅니다.":
["Edward's name draws a round of applause. Ciel checks the scores, sets down the teapot and joins in.","エドワードの名が呼ばれ、拍手が続きます。シエルも審査表を確かめると、ティーポットを置いて拍手を送ります。"],"이 편지를 읽을 사람을 찾고 있어. 여기 ‘팬텀하이브 백작 귀하’라고 쓰여 있지? ⋯라고 오스카가 말했어.":
["“We’re looking for the person this letter is for. It says ‘To the Earl of Phantomhive’ here, doesn’t it?” says Oscar.","「この手紙の宛先の人を探してる。ここに『ファントムハイヴ伯爵閣下』って書いてあるだろ？」……って、オスカーが言ってる。"],"저도 뚜껑을 고쳐야겠다 싶었습니다만, 리본 하나를 빼면 그만이군요. 이번엔 도련님 안이 한 수 위였습니다.":
["I’d thought of altering the lid, but removing one ribbon does the trick. You’ve bested me this time, my lord.","私は蓋に手を加えるつもりでしたが、リボンを一本外すだけで済みますね。今回は坊ちゃんの案が一枚上手でした。"],"주최 측이 보리와 밀을 나누어 줄 명단을 내밉니다. 성인과 아이가 받는 양이 달라 자루 수부터 맞춰야 합니다.":
["The organisers hand over a list of households due barley and wheat. Adults and children receive different shares, so the number of sacks must be worked out first.","主催者が、大麦と小麦の配給先を記した名簿を差し出します。大人と子どもでは取り分が違うため、まず袋数を合わせます。"],"창문에 한 벌, 판매대 양 끝에 한 벌씩.’ 오늘 날짜 밑에 가게 안을 대강 그리고 세 자리에 동그라미를 쳤다.":
["One set in the window, one at each end of the sales counter.” Under today’s date is a rough sketch of the shop with three spots circled.","窓に一組、売り台の両端に一組ずつ」。今日の日付の下に店内の見取り図がざっと描かれ、三か所に丸がついている。"],"‘창문에 한 벌, 판매대 양 끝에 한 벌씩.’ 오늘 날짜 밑에 가게 안을 대강 그리고 세 자리에 동그라미를 쳤다.":
["“One set in the window, one at each end of the sales counter.” Under today’s date is a rough sketch of the shop with three spots circled.","「窓に一組、売り台の両端に一組ずつ」。今日の日付の下に店内の見取り図がざっと描かれ、三か所に丸がついている。"],"가격표는 뒤집어 둬. 값이 보이면 부모의 손이 먼저 움직이는 법이지. 고객님이 먼저 고르는지 보려던 거잖아?":
["Turn the price tag over. If they can see the price, the parents will reach for it first. We want to see what the child chooses, remember?","値札は裏返せ。値段が見えたら親の手が先に出る。お客様が自分で選ぶかどうかを見るんだろう？"],"그래. 네가 처음부터 노려 온 몫이 뭔지는 알아. 복수를 접고 판에서 내려온다면, 계약의 위약금은 지금 치러야겠지.":
["Yes. I know what you’ve had your eye on from the start. If I give up my revenge and leave the board, the forfeit falls due now.","ああ。お前が初めから何を狙っていたかは知ってる。復讐を捨てて盤を下りるなら、違約の代償は今払うんだろう。"],"네가 그 사람을 보고 싶은 건 알겠어. 그래도 내 이름으로 면회시켜 주진 않아. 아직 피해 아동이 돌아오길 기다리는 집이 있으니까.":
["I understand you want to see him. But I won't use my name to get you a visit. There are families still waiting for their children to come home.","会いたい気持ちはわかる。だが、僕の名を使って面会を取りつけてやる気はない。今も我が子の帰りを待っている家があるんだ。"],"담당관이 납품 장부의 수량을 짚고 증서를 보류합니다. 시엘은 출품한 품목의 판매·납품 기록을 다시 확인합니다.":
["The officer points to the quantity in the delivery ledger and withholds the warrant. Ciel checks the sales and delivery records for his entry again.","調達官は納品台帳の数量を指し、認定を保留します。シエルは出品した品目の販売・納品記録をもう一度確かめます。"],"도련님께서 읽으신 소인을 토대로 우체국에서 회신을 보내왔습니다. 해당 전보는 이틀 동안 한 창구에 묵혀 있었다더군요.":
["The post office has replied on the strength of the postmark you deciphered, my lord. The telegram sat at the same counter for two days.","坊ちゃんがお読みになった消印をもとに、郵便局から返事がございました。あの電報は二日間、同じ窓口に留め置かれていたそうです。"],"되돌아온 서류 틈에 모래가 조금 남아 있었다. 봉투를 기울이자 검은 낟알 셋이 톡, 굴러 떨어졌다.":
["A little sand remained between the returned papers. He tilted the envelope. Three black grains clicked onto the desk.","返された書類の間に砂が少し残っていた。封筒を傾けると、黒い粒が三つ、ころりと落ちた。"],"두 귀를 나란히 접어 보낸 날, 백화점에서 원래 주문서를 다시 보내 왔다. 그림 속 토끼는 두 귀를 쫑긋 세우고 있었다.":
["The day the rabbits went out with both ears folded, the department store sent back its original order. The rabbit in the drawing had both ears pricked.","両耳を揃えて折って送った日、百貨店から元の注文書が再び届いた。絵のウサギは両耳をぴんと立てていた。"],"마지막 장을 넘기는 순간 보면대에서 악보가 미끄러졌다. 세바스찬은 반주를 이어 가며 다음 마디의 첫 박을 비워 두었다.":
["As the last page turned, the score slipped from its stand. Sebastian kept playing the accompaniment, leaving the first beat of the next bar open.","最後のページをめくった途端、楽譜が譜面台から滑り落ちた。セバスチャンは伴奏を続け、次の小節の一拍目を空けた。"],"막차가 빠져나간 플랫폼에는 빗물이 흥건했다. 시엘이 내민 표를 본 역무원이 등불을 바짝 들이댔다.":
["Rainwater stood on the platform after the last train had gone. The porter brought his lamp close to the ticket Ciel held out.","終列車の去ったホームに雨水が溜まっていた。シエルが差し出した切符に、駅員が灯りをぐっと近づけた。"],"분홍 리본 끝을 따라간 곳에는 빈 바구니만 남았습니다. 마지막 종이 울리자 시엘이 찾아낸 달걀을 심사대에 올립니다.":
["The pink ribbon leads only to an empty basket. At the final bell, Ciel sets the eggs he has found on the judging table.","ピンクのリボンをたどった先には、空の籠しかありませんでした。最後の鐘が鳴ると、シエルは見つけた卵を審査台に並べます。"],"상회 대표의 말로는 저희와 함께 납품했다는군요. 내일 자선 시연회에는 친절하게도 도련님의 자리까지 마련해 두었답니다.":
["The merchant claims to have supplied the goods with us. He has even been so kind as to reserve you a seat at tomorrow’s charity demonstration, my lord.","商会の代表いわく、私どもと一緒に納品したそうです。ご親切にも、明日の慈善実演会には坊ちゃんのお席までご用意くださったとか。"],"서두르는 바람에 두 손님의 호칭을 바꿔 불렀습니다. 시엘은 자리에 앉기 전 두 사람을 찾아가 이름을 바로 불러 인사합니다.":
["In his haste, Ciel addresses two guests by each other's titles. Before sitting down, he seeks them both out and greets each by the proper name.","急ぐあまり、二人の客の敬称を取り違えてしまいました。シエルは席に着く前に二人のもとへ出向き、今度は正しく名を呼んで挨拶します。"],"세바스찬은 봉투를 침대 옆 탁자에 세워 두었다. 겹쳐 놓은 편지지 위로 창살 그림자가 반듯하게 걸렸다.":
["Sebastian stood the envelope on the bedside table. The window bars cast straight shadows across the stacked sheets.","セバスチャンは封筒を枕元の卓に立てた。重ねた便箋に、窓格子の影がまっすぐ落ちた。"],"스코틀랜드 야드가 단원들을 데려간 뒤였다. 조커의 짐 속에 마른 분 냄새가 밴 편지 한 통이 남아 있었다.":
["Scotland Yard had taken the troupe away. Among Joker's things was a letter that smelled faintly of face powder.","スコットランドヤードが団員たちを連れていった後だった。ジョーカーの荷物の中に、乾いたおしろいの匂いが染みついた手紙が一通、残されていた。"],"시엘은 서신 끝에 가문의 이름을 적었다. 봉랍에 인장을 누르고, 붉은 밀랍이 다 식은 뒤에야 손을 뗐다.":
["Ciel signed the family name at the foot of the letter. He pressed the seal into the red wax and held it there until the wax had cooled completely.","シエルは手紙の末尾に家名を記した。赤い封蝋に印章を押し、すっかり冷めてから手を離した。"],"시엘이 받은 은제 달걀 장식이 바구니 곁에 놓입니다. 엘리자베스는 장식을 살펴보다가 시엘을 향해 웃습니다.":
["Ciel's silver egg ornament sits beside his basket. Elizabeth looks it over, then smiles at him.","シエルの受け取った銀の卵飾りが、籠のそばに置かれます。エリザベスは飾りを眺めてから、シエルに微笑みます。"],"아침에 들여온 사과와 늦게 거둔 배가 나란히 놓였습니다. 심사할 바구니에는 각각 한 겹씩만 담을 수 있습니다.":
["Apples brought in this morning lie beside late-picked pears. The competition basket has room for just one layer of each.","朝届いたりんごと、遅摘みの梨が並びます。審査用の籠には、それぞれ一段ずつしか詰められません。"],"오늘 명단에는 메이린을 올려 두었습니다. 근무지를 정하실 때는 이름을 원하는 방으로 옮기시면 됩니다. 지금은 ‘뒤로’ 가겠습니다.":
["I’ve put Mey-Rin on today’s roster. To assign her, move her name to the room you have in mind. For now, select Back.","今日の名簿にはメイリンを載せておきました。配置をお決めになる時は、その名をお望みの部屋へ移してください。今は「戻る」を選びましょう。"],"오늘 밤엔 우리랑 한 바퀴 돌자. 온실 지붕에 달이 걸리는 걸 너한테도 보여 주고 싶어. ⋯라고 에밀리가 말했어.":
["“Come for a walk with us tonight. I want to show you the moon hanging over the greenhouse roof,” says Emily.","「今夜は私たちとひと回りしましょう。温室の屋根に月がかかるところ、あなたにも見せたいの」……って、エミリーが言ってる。"],"이스트엔드의 골목에서 시엘과 소마가 서로 다른 편에 선다. 이튿날 두 사람은 런던 집의 열쇠를 놓고 거래한다.":
["In an East End alley, Ciel and Soma find themselves on opposing sides. The next day, they strike a bargain over the key to the London house.","イーストエンドの路地で、シエルとソーマは敵味方に分かれる。翌日、二人はロンドンの屋敷の鍵をめぐって取引をする。"],"이튿날 아침, 자물쇠에는 흠집이 하나도 없었다. 경비를 선 사람은 퇴근했고 창고지기는 어제와 같은 질문을 받았다.":
["The next morning there was not a scratch on the lock. The watchman went home. The storekeeper faced yesterday’s questions all over again.","翌朝、錠前には傷ひとつなかった。見張りは帰り、倉庫番は昨日と同じ質問を受けた。"],"잠시 뒤 창밖으로 멀어지는 마차 바퀴 소리가 났다. 시엘의 손가락 밑에서 종이 끝이 힘없이 들렸다 가라앉았다.":
["Presently the carriage wheels could be heard receding outside. Under Ciel’s fingers the edge of the page lifted limply and fell.","やがて窓の外で車輪の音が遠ざかった。シエルの指の下で、紙の端が頼りなく浮き、また落ちた。"],"제작실에서 먼저 보실 것은 한 개당 원가입니다. 품질도 이곳에 적혀 있으니, 둘을 살핀 뒤 생산량을 정하시는 편이 좋겠습니다.":
["In the workshop, first look at the cost per unit. Quality is recorded here too. I suggest you consider both before deciding how many to make.","製作室では、まず一個あたりの原価をご覧ください。品質もこちらに記してあります。両方をお確かめのうえで、生産量をお決めになるとよろしいでしょう。"],"지난번 정리하신 연락망에서 답이 왔습니다. 세 곳에서 똑같은 전보를 수령했는데, 정작 회신할 주소가 제각각입니다.":
["Your contacts have sent word, my lord. Three of them received the same telegram, yet each was given a different address for the reply.","先日おまとめになった連絡先から返事が参りました。三か所で同じ文面の電報を受け取りながら、返信先は三通とも別々でございます。"],"집달리가 난처한 듯 헛기침을 했다. 비어 있던 은쟁반 밑에서 큼지막한 영수증이 한 장 더 삐져나왔다.":
["The bailiff cleared his throat awkwardly. Another substantial receipt was poking out from beneath the empty silver tray.","執行官が困ったように咳払いした。空の銀盆の下から、さらに大判の領収書が一枚顔を出した。"],"집사가 오른손의 흰 장갑을 벗었다. 손등의 계약인과 소년의 오른쪽 눈이 같은 빛으로 서늘하게 얽혔다.":
["The butler drew the white glove from his right hand. The contract seal on its back and the boy’s right eye met in the same cold light.","執事は右手の白手袋を外した。手の甲の契約印と少年の右目が、同じ冷たい光で結ばれた。"],"창고를 정리하다가 참나무 상자를 한 무더기 찾았습니다. 운송 조합에서 마침 그 규격을 구한다며 수표를 보내왔습니다.":
["While clearing the warehouse, I came across a stack of oak crates. The carriers’ guild happens to need that very size and has sent a cheque.","倉庫を整理しておりましたら、樫の木箱がひと山出てまいりました。運送組合がちょうどその寸法の箱をお探しだそうで、小切手が届いております。"],"창고에 있는 물건이 장부에 적힌 수량보다 세 벌 모자랍니다. 창고지기는 제 품삯에서 그 값을 빼 달라더군요.":
["There are three fewer sets in the warehouse than the ledger shows. The warehouse keeper has asked to have their value deducted from his wages.","倉庫の品が帳簿の数より三組足りません。倉庫番は自分の給金からその代金を引いてほしいと申しております。"],"첫 사람이 말을 성안으로 옮겼다. 두 번째 사람이 문 앞에 섰다. 클럽 회원 일동은 방금 치운 규칙서를 다시 펼쳤다.":
["The first player moved a piece into the castle. The second stopped at the gate. The club members opened the rulebook they had only just put away.","先手が駒を城内へ進めた。後手が門前に立った。クラブの面々は、たった今しまった説明書をまた広げた。"],"추수 감사예배 뒤 교회 앞마당에서 수확물 경연이 열립니다. 영지 주민들과 함께 바구니를 꾸리거나 수확물을 배분합니다.":
["After the harvest thanksgiving service, a produce competition is held in the churchyard. Join the tenants in packing a basket or sharing out the harvest.","収穫感謝の礼拝のあと、教会の前庭で収穫物の品評会が開かれます。領民と一緒に籠を詰めるか、収穫物を分配しましょう。"],"피니안이 도련님의 손바닥에 작은 열쇠를 살며시 올려놓는다. 오늘은 먼저 들어가 보시겠느냐고 해맑게 묻는다.":
["Finnian slips a little key into the young master’s palm. With a beaming smile, he asks whether Ciel would like to go in first today.","フィニアンが坊ちゃんの手のひらに小さな鍵をそっと載せる。今日は先に入ってみませんかと、屈託のない笑顔で尋ねる。"],"합계는 맞았지만 마지막 집 몫을 다른 줄에 써 놓았습니다. 시엘은 배부가 끝나기 전에 잘못 건넨 표를 돌려받습니다.":
["The total is right, but the last household's share is on the wrong line. Ciel retrieves the misissued ticket before distribution ends.","合計は合っていましたが、最後の一家の取り分を別の行に書いていました。シエルは配給が終わる前に、渡し間違えた引換券を回収します。"],"공방에서 작은 짐수레 세 대를 가져왔다. 시엘은 상자를 뒤집어 경사로를 만들고 아이에게 가장 가벼운 수레부터 내주었다.":
["The workshop sent three little carts. Ciel upended a crate to make a ramp and handed the child the lightest cart first.","工房から小さな荷車が三台届いた。シエルは木箱をひっくり返して坂を作り、まず一番軽い荷車を子どもに手渡した。"],"공연이 끝나면 조커가 돈을 세고, 스네이크는 뱀을 셌다. 오늘은 뱀을 다 세고도 천막을 떠날 수 없었다.":
["After a performance, Joker counted the money and Snake counted the snakes. Today he'd counted every last one and still couldn't leave the tent.","公演が終わると、ジョーカーは金を数え、スネークは蛇を数えた。今日は、蛇を数え終えてもテントを離れられなかった。"],"그가 손을 잡고 일어서자 바구니에서 에밀리가 따라 나왔다. 소맷부리와 소맷부리 사이, 두 사람의 손등을 건너갔다.":
["As Snake took Ciel's hand and stood up, Emily slipped out of the basket after him. From one cuff to the other, she glided across the backs of their hands.","スネークがその手を取って立ち上がると、エミリーも後を追って籠から出てきた。ひとつの袖口からもうひとつの袖口へ、二人の手の甲を渡っていった。"],"남자의 손이 계산대 밑으로 쑥 내려갔다. 등 뒤에서 세바스찬이 묵직한 빈 서랍을 통째로 빼 들었다.":
["The man’s hand darted under the counter. Behind him Sebastian drew the heavy, empty drawer out in one piece.","男の手が勘定台の下へ滑った。その背後でセバスチャンが、重く空っぽの引き出しを丸ごと抜き取った。"],"년 6월 21일. 여왕의 행렬이 웨스트민스터 사원으로 향했다. 마지막 마차가 창 아래를 지나자 시엘은 책상으로 돌아섰다.":
[" · 21 June. The Queen’s procession made its way to Westminster Abbey. As the last carriage passed beneath the window, Ciel turned back to his desk.","年6月21日。女王の行列がウェストミンスター寺院へ向かった。最後の馬車が窓の下を通ると、シエルは机に向き直った。"],"다음 심의의 날짜를 알리는 왕실의 편지가 저택에 당도한 것은 이듬해였다. 편지는 수취인 부재로 궁에 되돌아갔다.":
["The royal letter naming the date of the next review reached the manor the following year. It went back to the Palace marked “Addressee absent.”","次の審議日を知らせる王室の手紙が屋敷に届いたのは翌年だった。手紙は宛先人不在で宮殿に送り返された。"],"담당관이 휘트컴 상회의 이름을 부릅니다. 시엘은 팬텀사의 견본 곁에 평가표와 거래 장부를 나란히 놓습니다.":
["The officer calls the name of Whitcomb & Co. Ciel lays the assessment sheet and account ledger side by side, next to Funtom's sample.","調達官がウィットコム商会の名を呼びます。シエルはファントム社の見本のそばに、評価表と取引台帳を並べます。"],"두 묶음은 모두 뒷면이 빨갛다. 펼쳐 보면 같은 문장이 꼭 두 장씩 짝을 이룬다. 푸른 카드는 한 장도 없다.":
["The cards in both decks have red backs. Spread them out and every crest has an exact twin. There isn’t a single blue card.","二組とも裏はすべて赤い。広げてみると、同じ紋章がきっちり二枚ずつ揃う。青い札は一枚もない。"],"마지막 우편 마차가 곧 떠납니다. 납품서와 거래처의 답장이 서로 다르군요. 제게 어떤 지시를 내리시겠습니까?":
["The last mail coach is about to leave. Our delivery note differs from the customer's reply. What are your instructions?","最終の郵便馬車がまもなく出ます。納品書の内容が取引先の返事と食い違っておりますね。どのようにご指示なさいますか？"],"사환이 문 앞에서 나갈 편지 묶음을 기다렸다. 시엘은 자기 앞에 놓인 임시 봉투의 주소를 펜으로 쭉 그어 지웠다.":
["The errand boy waited at the door for the outgoing post. Ciel struck the address off the provisional envelope with one long stroke.","小僧が扉の前で発送する手紙の束を待っていた。シエルは手元の仮封筒の宛先を、ペンで一息に引いて消した。"],"셋째 마디에서 활이 멎자 세바스찬은 피아노 건반에서 손을 뗐다. “반주는 어디서 다시 들어갈까요, 도련님?”":
["When the bow stopped in the third bar, Sebastian lifted his hands from the keys. “Where would you like the accompaniment to come back in, my lord?”","三小節目で弓が止まると、セバスチャンはピアノの鍵盤から手を離した。「坊ちゃん、伴奏はどこから入りましょうか？」"],"손님들은 모두 귀가하셨는데 맨 끝자리의 명찰만 뒤집혀 있습니다. 그분께 오늘 감사 편지를 쓰신다면 어떤 일을 떠올리시겠습니까?":
["All the guests have gone home. Only the place card at the far end lies face down. If you wrote that guest a thank-you note today, what would you remember?","お客様は皆お帰りですが、端の席の席札だけが裏返しです。あの方に今日お礼状をしたためるなら、何を思い出されますか？"],"손님은 저녁상에 오른 요리로도 그 집을 평합니다. \\n팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다.":
["A house is judged in part by the dinner it sets before its guests, my lord.\nIf you are to restore the Phantomhive name, you will need a chef.","晩餐にどのような料理が並ぶかも、お客様がその家を見定める基準の一つでございます。\nファントムハイヴ家の名声を取り戻すには、料理長が必要でございます。"],"시엘은 맨 끝자리의 손님까지 돌아보고 집집마다 보낸 새해 인사에 답합니다. 심사위원이 원고를 읽지 않았다는 데 표시를 합니다.":
["Ciel looks around the room, right to the furthest seat, and answers each family's New Year's greeting in turn. A judge notes that he never consulted his speech.","シエルは一番奥の席まで見渡し、一家ずつ新年の挨拶に応えます。審査員は、原稿に一度も目を落とさなかったことを審査表に書き留めます。"],"시엘은 반송 주소를 쓰다 말았다. 봉투 세 장은 모두 새하얀데, 거기에 오려 붙인 주문표는 세 장이 다 누렇게 바랬다.":
["Ciel stopped halfway through writing the return address. All three envelopes were white as snow. The order slips pasted on them had all yellowed with age.","シエルは返送先を書きかけて手を止めた。三枚の封筒はどれも真っ白なのに、切り貼りされた注文票は三枚とも黄ばんでいた。"],"시엘은 책상 밑 서랍을 당겼다. 맨 아래 깔아 둔 낡은 여비 봉투에서 반으로 찢긴 기차표가 나왔다.":
["Ciel pulled open the desk drawer. In an old travel-money envelope hidden at the bottom lay half a railway ticket.","シエルは机の引き出しを開けた。底に敷いた古い旅費袋から、半分に破れた汽車の切符が出てきた。"],"압류 영장을 든 사내는 모자도 외투도 맡기지 않았다. 현관에 뻣뻣이 서서 금고를 열 수 있는 시각만 물었다.":
["The man with the seizure order surrendered neither hat nor coat. He stood stiffly in the hall and asked only what time the safe could be opened.","差押令状を携えた男は帽子も外套も預けなかった。玄関にしゃちほこばって立ち、金庫を開けられる時刻だけを尋ねた。"],"엘리자베스가 상장을 받아 들고 시엘에게 손을 흔듭니다. 시엘은 두 사람의 바구니를 심사대에서 내려 줍니다.":
["Elizabeth accepts her certificate and waves to Ciel. He lifts both their baskets down from the judging table.","エリザベスが賞状を受け取り、シエルに手を振ります。シエルは審査台から二人の籠を下ろしてやります。"],"오늘 응접실에 손님이 한 분 더 오십니다. 좌석표에도, 식사 장부에도 자리가 없습니다. 어느 쪽을 먼저 손보시겠습니까?":
["We have an additional guest in the drawing room today. There is no place for them on the seating plan or in the dining accounts. Which will you attend to first?","本日の応接室に、お客様がもうお一人お見えになります。席次表にも食事の帳簿にも空きがございません。どちらからお手を入れますか？"],"이 정도면 돼. 장갑을 낀 채로도 손가락이 걸리잖아. 내일은 이대로 견본을 하나 만들어서 가게에 갖다줘.":
["That will do. I can get a finger under it even with my gloves on. Make a sample like this tomorrow and take it to the shop.","これでいい。手袋をしたままでも指が掛かる。明日この通りに見本を一つ作って、店に届けろ。"],"쟁반이 들려 나가자 탁자 위에 하얗게 동그라미가 남았다. 세바스찬이 얼른 마른 천을 꺼내 들었다.":
["When the tray was carried off, it left a pale circle on the table. Sebastian promptly produced a dry cloth.","盆が運び出されると、卓に白い輪が残った。セバスチャンがすかさず乾いた布を取り出した。"],"휘트컴 상회가 증서를 받는 동안 시엘은 평가표를 견본 상자에 넣습니다. 세바스찬이 거래 장부를 챙깁니다.":
["While Whitcomb & Co. receives its certificate, Ciel slips the score sheet into the sample box. Sebastian gathers up the trading ledger.","ウィットコム商会が認定証を受け取る間に、シエルは評価表を見本箱に収めます。セバスチャンは取引台帳を手に取ります。"],"그 상자도 여셔도 됩니다. 납품 날짜를 짚어 주시면 그날의 기록도 펴 드리지요. 첫 주문부터 기록이 여기에 다 있으니까요.":
["You're welcome to open that crate too. Point to a delivery date and I'll turn to that day's entry. Every record since our first order is here.","そちらの箱もお開けください。納品日をお示しいただければ、その日の記録もお開きします。最初のご注文からすべてここにございます。"],"꽃잎만 본 앞줄은 맞혔지만 끝의 두 표찰이 뒤바뀝니다. 시엘은 정답표를 접기 전에 잎 모양부터 다시 그려 둡니다.":
["The petals were enough to identify the front row, but the last two labels are reversed. Before folding the answer sheet, Ciel sketches the leaves once more.","花びらで見分けた手前の列は正解でしたが、最後の二枚は逆でした。シエルは解答表を畳む前に、もう一度、葉の形を描き留めます。"],"나무 말 여섯 필과 마차 두 대가 창턱에 올라갔다. 아이들이 고삐를 잡고 늘어서자 시엘이 지휘봉 대신 연필을 들었다.":
["Six wooden horses and two carriages lined the sill. As the children lined up with reins in hand, Ciel raised a pencil for a conductor’s baton.","窓辺に木馬が六頭、馬車が二台並んだ。子供たちが手綱を握って整列すると、シエルは指揮棒代わりの鉛筆を掲げた。"],"다음 상자에서는 열두 마리가 두 귀를 쫑긋 세우고 나왔다. 백화점은 맨 앞의 한 마리를 상자에 그대로 앉혀 진열했다.":
["Twelve rabbits came out of the next box with both ears pricked. The department store left the first one sitting in its box and put it straight on display.","次の箱からは、十二匹とも両耳をぴんと立てて出てきた。百貨店は手前の一匹を箱に座らせたまま飾った。"],"런던 이스트엔드. 시엘과 세바스찬이 골목을 돌아서자, 일거리를 기다리던 인도인 사내 몇이 둘을 에워쌌다.":
["In London's East End, Ciel and Sebastian turned a corner. Several Indian men waiting for work in the alley closed in around them.","ロンドンのイーストエンド。シエルとセバスチャンが路地を曲がると、仕事を待っていたインド人の男たちが二人を取り囲んだ。"],"모둠 사탕은 잘 팔렸다. 그 손님은 한 봉지를 들여다보다가 기적 소리를 듣고 도로 놓았다. 오늘도 딸아이 몫은 없었다.":
["The assorted sweets sold well. The passenger peered into a bag, heard the whistle and put it back. Nothing for his daughter today either.","詰め合わせの売れ行きはよかった。あの客は一袋の中をのぞき込んだが、汽笛を聞いて元に戻した。今日も娘の分はなかった。"],"새 판에서는 다른 물품에 열일곱 번이 붙었다. 출고표를 맞춰 보니 점원은 세 번 모두 새 도안첩의 번호대로 물건을 보냈다.":
["In the new edition a different article is numbered seventeen. The dispatch slips show that in all three cases the clerk used the number in the new catalogue.","新版では別の品が十七番になっている。出荷票と照らすと、店員は三回とも新しい図案帳の番号どおりに品物を送っていた。"],"서쪽 지붕 수리비를 또 청구했군요. 지난달에 온 청구서도 가져왔습니다. 손봤다는 자리도, 받아 가겠다는 액수도 같습니다.":
["Another bill for repairing the west roof, I see. I have brought last month’s bill as well. They claim to have repaired the very same spot, and the sum they ask is identical.","西側の屋根の修理代をまた請求してきましたね。先月の請求書もお持ちしました。直したという箇所も、請求額も同じでございます。"],"수량도 납기도 저쪽에서 써 왔는데 값만 비워 두었군요. 저 펜을 먼저 집는 쪽이 첫 가격을 부르는 셈입니다.":
["They have filled in the quantity and the delivery date, I see, and left only the price blank. Whoever picks up that pen first will be naming the opening price.","先方は数量も納期も記入して、値段の欄だけを空けてきましたね。あのペンを先に取った方が、最初の値をつけることになります。"],"시엘은 기니 금화 한 닢을 세워 탁자 위로 데구루루 굴렸다. 남자가 투박한 손바닥으로 금화를 턱 덮었다.":
["Ciel stood a gold guinea on edge and rolled it across the table. The man clapped a rough palm over it.","シエルはギニー金貨を一枚立て、テーブルの上を転がした。男のごつい手のひらが、その上にぱしりとかぶさった。"],"심사위원이 시엘의 앞에 은제 찻숟가락을 놓습니다. 시엘은 그것을 세바스찬에게 맡기고 다시 찻주전자를 듭니다.":
["The judge sets a silver teaspoon before Ciel. He entrusts it to Sebastian and picks up the teapot again.","審査員がシエルの前に銀のティースプーンを置きます。シエルはそれをセバスチャンに預け、再びティーポットを手に取ります。"],"아래층 제본소에서 쪽지가 왔다. ‘위층 가게가 문을 열기 전에 맡아 둔 상자가 아직 계단을 막고 있다’는 전갈이다.":
["A note arrives from the bookbinder downstairs. ‘The box we took in before the upstairs shop opened is still blocking the stairs.’","階下の製本所から伝言が届いた。「二階の店が開く前に預かった箱が、まだ階段をふさいでいます」とのことだ。"],"엘리자베스가 상장을 받아 들고 바구니를 챙깁니다. 시엘은 심사대에서 돌아서며 생울타리 쪽을 다시 봅니다.":
["Elizabeth accepts the certificate and picks up her basket. Turning away from the judging table, Ciel looks back towards the hedges.","エリザベスが賞状を受け取り、籠を手にします。シエルは審査台に背を向けながら、もう一度生け垣の方を見ます。"],"엘리자베스의 이름이 불리고 두 사람의 바구니가 심사대에서 내려옵니다. 시엘은 자신의 바구니를 받아 들고 그녀를 기다립니다.":
["Elizabeth’s name is called, and both baskets are lifted off the judges’ table. Ciel takes his basket and waits for her.","エリザベスの名が呼ばれ、二人の籠が審査台から下ろされます。シエルは自分の籠を受け取り、彼女を待ちます。"],"여왕의 즉위 50주년을 맞아 런던 상인들이 기념품 경연을 엽니다. 팬텀사가 내놓은 선물에도 기념 리본을 달았습니다.":
["London's merchants are holding a souvenir competition to mark the fiftieth anniversary of the Queen's accession. Funtom's gift bears a commemorative ribbon too.","女王陛下の即位五十周年を祝い、ロンドンの商人たちが記念品の品評会を開きます。ファントム社の贈り物にも記念のリボンを結びました。"],"왕실 담당관이 팬텀사의 견본과 장부를 나란히 놓았습니다. 이번 대결에서 이긴 품목은 왕실 납품 인증을 받습니다.":
["The royal purchasing officer lays Funtom's sample and ledger side by side. The product that wins this contest will receive a royal warrant.","王室の調達官が、ファントム社の見本と台帳を並べました。今回の対決で勝った品目が、王室御用達の認定を受けます。"],"인쇄소에서 내년 달력의 견본을 보내왔다. 5월 그림에는 태엽을 감는 아이가, 그 발치에는 팬텀사의 목마가 그려져 있었다.":
["The printer sent a proof of next year’s calendar. The illustration for May showed a child winding a clockwork toy, with a Funtom rocking horse at the child’s feet.","印刷所から来年の暦の見本が届いた。五月の絵にはねじを巻く子供と、その足元にファントム社の木馬が描かれていた。"],"집달리가 저택의 열쇠를 받아 들고 서재 문을 닫았다. 두 사람이 앉아 있던 의자마저 그 뒤를 따라 복도로 실려 나갔다.":
["The bailiff took the manor keys and closed the study door. Even the chairs they had been sitting in were carried out into the hall after him.","執行官が屋敷の鍵を受け取り、書斎の扉を閉めた。二人が座っていた椅子まで、後を追って廊下に運び出された。"],"차를 한 잔 드시지요. 잔은 오른쪽에 두었습니다. 편지를 펼치시기 전에 봉투의 이름부터 확인하시는 걸 잊지 마시기 바랍니다.":
["Your tea, my lord. The cup is on your right. Do remember to check the name on the envelope before you open it.","お茶をどうぞ、坊ちゃん。カップは右手にございます。封をお切りになる前に、宛名をお確かめくださいませ。"],"팬텀사의 상표를 단 견본을 흰 천 위에 올립니다. 심사위원이 견본을 들어 마감을 살피고 납품 기록을 펼칩니다.":
["A sample bearing the Funtom mark is set on a white cloth. The judge lifts it to inspect the finish, then opens the delivery ledger.","白布の上にファントム社の商標入りの見本を置きます。審査員は手に取って仕上げを確かめ、納品記録を開きます。"],"1887년 6월 21일. 여왕의 행렬이 웨스트민스터 사원으로 향했다. 마지막 마차가 창 아래를 지나자 시엘은 책상으로 돌아섰다.":
["21 June 1887. The Queen’s procession made its way to Westminster Abbey. As the last carriage passed beneath the window, Ciel turned back to his desk.","一八八七年六月二十一日。女王の行列はウェストミンスター寺院へ向かった。最後の馬車が窓の下を過ぎると、シエルは机に向き直った。"],"그럼 내일 아침에 다시 올게. 네 장갑은 조금만 더 빌려 줘. 와일드가 벌써 잠들었어. ⋯라고 오스카가 말했어.":
["“Then we'll come back tomorrow morning. Let us keep your glove a little longer. Wilde's already asleep,” says Oscar.","「じゃあ、明日の朝また来るよ。手袋はもう少し貸しておいて。ワイルドがもう寝ちゃったんだ」……って、オスカーが言ってる。"],"런던 성냥공장의 여공들이 일손을 놓았답니다. ……예, 도련님. 조간지와 함께 팬텀사의 하청 명부도 가져다 놓겠습니다.":
["The women at a London match factory have gone on strike. …Yes, my lord. I shall bring Funtom’s list of subcontractors with the morning paper.","ロンドンのマッチ工場で女工たちがストライキに入ったそうです。……ええ、坊ちゃん。朝刊と一緒にファントム社の下請け先の名簿もお持ちいたします。"],"먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?\\n주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요.":
["How can you tell before you've even picked up a feather duster?\nRidding your master of nuisances must, after all, be familiar work.","はたき一本手に取る前から、どうしてそう言い切れるのです？\n主人の目障りなものを片づけるお仕事なら、さぞお慣れでしょう。"],"번 영수증 귀퉁이에 반달 모양 구멍이 있다. 계산대의 환불 집게를 포개 보면, 날이 살짝 이지러진 자리까지 꼭 맞는다.":
[" has a crescent-shaped hole in one corner. It fits the refund punch on the counter exactly, right down to the nick in the blade.","番の領収書の隅に半月形の穴がある。勘定台の返金用の鋏を重ねると、刃の少し欠けたところまでぴたりと合う。"],"새벽안개 속에 템스 강 하역장이 열렸다. 경비가 앞을 막아섰지만 팬텀사의 정식 운송장을 보자 군말 없이 빗장을 풀었다.":
["The wharf on the Thames opened in the morning mist. A guard barred their way, but at the sight of an official Funtom waybill he drew back the bolt without a word.","朝霧の中、テムズ河岸の荷揚げ場が開いた。警備員が立ちはだかったが、ファントム社の正式な運送状を見ると黙って閂を外した。"],"성문을 지우니 모두가 무사히 끝까지 갔다. 클럽에서 새로 보낸 편지는 전보다 짧았다. ‘그런데 누가 이긴 겁니까?’":
["Without the gate, everyone made it safely to the end. The club’s next letter was shorter than the last. ‘But who won?’","城門を消すと、全員が無事に上がれた。クラブから次に届いた手紙は前のものより短かった。「それで、誰の勝ちですか？」"],"세 벌을 채우고 장부를 덮었다. 저녁에 진열대를 비우자 창고로 세 벌이 더 들어왔다. 아침에는 모자라더니 이번에는 남는다.":
["They made up the three missing sets and closed the ledger. That evening, when the displays were cleared, three more sets came back to the stockroom. Three short in the morning, three too many by evening.","三組補って帳簿を閉じた。夕方、売り場を片づけると、倉庫にまた三組戻ってきた。朝には足りず、今度は余った。"],"시엘이 상장을 받자 엘리자베스가 환하게 웃습니다. 세바스찬은 연주석 곁에서 바이올린 케이스를 열어 둡니다.":
["Elizabeth beams as Ciel accepts the certificate. Beside the musicians' stand, Sebastian opens the violin case.","シエルが賞状を受け取ると、エリザベスが満面の笑みを浮かべます。演奏席のそばでは、セバスチャンがヴァイオリンケースを開けて待っています。"],"아직 저택에 돌아와 일할 몸은 아닙니다만, 이것만은 먼저 전해 두고 싶었습니다. 세바스찬 씨, 잠시 손을 펴 주시겠습니까?":
["I’m not yet well enough to return to work at the manor, but there’s something I wanted to give you first. Mr Sebastian, would you open your hand a moment?","まだお屋敷に戻って働ける体ではありませんが、これだけは先にお渡ししたくて。セバスチャンさん、少し手を開いていただけますか？"],"이리 와서 이만큼만 몸을 낮춰 봐. 태엽 말의 머리가 보여야 할 자리에 가격표가 붙어 있잖아. 애들한테는 이렇게 보인다고.":
["Come here and get down as low as I am. There’s a price tag right where the clockwork horse’s head should be. This is what the children see.","ここへ来て、僕と同じ高さまで屈んでみろ。ぜんまい仕掛けの馬の頭が見えるはずの場所に値札がある。子供にはこう見えてるんだ。"],"후원자의 인쇄 주문에는 ‘아이 쉰 명 무료 초대’라는 글씨가 있다. 극장주의 예상 수입표에는 ‘백 자리 전부 유료’라고 적혀 있다.":
["The patron’s order to the printer reads ‘Fifty children admitted free’. The theatre owner’s estimate reads ‘All one hundred seats paid’.","後援者から印刷所への注文には「子ども五十人を無料招待」。劇場主の収入見込み表には「百席すべて有料」とある。"],"27번 영수증 귀퉁이에 반달 모양 구멍이 있다. 계산대의 환불 집게를 포개 보면, 날이 살짝 이지러진 자리까지 꼭 맞는다.":
["Receipt No. 27 has a crescent-shaped hole in one corner. Held against the refund punch from the counter, the mark fits exactly, right down to a nick in the blade.","二十七番の領収書の隅に、半月形の穴がある。勘定台の返金用の鋏を重ねると、刃がわずかに欠けたところまでぴたりと合う。"],"고개를 돌렸을 때 세바스찬은 벌써 낯선 남자와 맞붙어 있었다. 마차 한 대가 골목을 지나도록 어느 쪽도 물러서지 않았다.":
["By the time Ciel turned round, Sebastian and a stranger had already come to blows. A carriage rattled the length of the alley, and neither man gave an inch.","振り向いた時には、セバスチャンはもう見知らぬ男と打ち合っていた。馬車が一台、路地を通り過ぎる間も、二人は一歩も譲らなかった。"],"도련님, 오늘은 차를 테라스에 내지 않는 편이 좋겠습니다. 아침부터 온도계가 이 눈금까지 오른 건 저택의 6월 기록에도 없더군요.":
["My lord, I suggest we forgo tea on the terrace today. I can find no June in the household records when the thermometer stood this high so early.","坊ちゃん、今日はテラスでのお茶はお控えになった方がよろしいかと。朝から温度計がここまで上がった例は、当家の六月の記録にもございません。"],"번, 전액 반환.’ 그 옆에는 수령 서명이 있다. 이름 끝에서 펜을 길게 끈 버릇이 오늘 손님이 써 낸 항의장에도 보인다.":
[", refunded in full.” Beside it is the recipient’s signature. The long stroke at the end of the name appears on the customer’s letter of complaint as well.","番、全額返金」。その隣に受取人の署名がある。名前の最後でペンを長く引く癖は、今日の客が書いた苦情の手紙にも見て取れる。"],"시엘은 바닥에 닿은 영수증 끝자락을 잡아챘다. 그 밑으로 똑같은 무늬의 영수증이 줄줄이 딸려 올라왔다.":
["Ciel snatched up the end of the receipt from the floor. A whole train of others bearing the same design came up after it.","シエルは床に垂れた領収書の端をひったくった。その下から同じ模様の領収書がぞろぞろとついてきた。"],"시엘이 손을 내밀었다. 스네이크는 손바닥을 바지에 한 번 닦고, 옷깃 위로 올라온 오스카 쪽으로 귀를 기울였다.":
["Ciel held out his hand. Snake wiped his palm on his trousers and inclined his ear towards Oscar, who had climbed onto his collar.","シエルが手を差し出した。スネークは手のひらをズボンでひと拭きして、襟元に上がってきたオスカーに耳を傾けた。"],"에드워드가 인사를 마치고 자리로 돌아옵니다. 사회자가 시엘의 이름을 부르자, 시엘은 원고를 접어 두고 손님들 앞으로 나섭니다.":
["Edward finishes his address and returns to his seat. When the master of ceremonies calls his name, Ciel folds his notes and steps out before the guests.","エドワードが挨拶を終え、席に戻ります。司会に名を呼ばれると、シエルは原稿を畳んで客の前に進み出ます。"],"운송업자의 장부에 팬텀사 몫으로 네 자리를 더 잡았다. 다음 출하부터 추가 운임 없이 보낼 수 있는 물량이 월 16개에서 20개로 늘었다.":
["The carrier reserved four more places for Funtom. From the next shipment, the monthly allowance at the usual rate rises from 16 items to 20.","運送業者の帳簿にファントム社の枠を四つ追加した。次の出荷から、割増運賃なしで送れる品が月十六個から二十個に増えた。"],"접니다. 바삭하게 마른 종이를 옮기다 낱장이 달아날까 염려되어서요. 풀기 전에 그 말씀부터 올리는 편이 옳겠다 싶었습니다.":
["I did. The pages were so brittle I feared one might slip out when I moved it. I thought you should hear that before you opened it.","私でございます。紙がすっかり乾いて、運ぶ途中で一枚でも落としてはと思いましてな。お開けになる前に申し上げておくのが筋かと。"],"짙은 어둠 속에서 악마가 본래의 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.":
["In the deep dark the demon opened his true maw. Ciel’s soul slipped out with his last breath. Sebastian swallowed it, leaving nothing.","濃い闇の中で、悪魔が本来の口を開けた。シエルの最期の息とともに抜け出た魂を、セバスチャンは余さず飲み込んだ。"],"찻잔은 제때 돌렸지만 탁자 끝의 손님 몫은 식고 말았습니다. 시엘이 새 물을 부어 주는 사이 심사 종료 종이 울립니다.":
["The cups go round on time, but the tea for the guest at the end of the table has gone cold. As Ciel pours fresh hot water, the judging bell rings.","お茶は時間どおりに行き渡りましたが、端の席の客の分は冷めてしまいました。シエルが新しい湯を注ぐうちに、審査終了の鐘が鳴ります。"],"찻잔을 내려놓을 자리도 없이 점포가 붐볐다. 시엘은 비스킷 여섯 장과 포장지 한 장을 들고 계산대 앞으로 갔다.":
["The shop was so crowded there was nowhere to put down a teacup. Ciel took six biscuits and a sheet of wrapping paper to the counter.","店はティーカップを置く場所もないほど混み合っていた。シエルはビスケット六枚と包装紙を一枚持って勘定台へ向かった。"],"팬텀사의 진열창 앞에서 화가가 화판을 접었다. 그가 그려 둔 자리에 백화점의 새 모자를 한 주만 전시하게 해 달라는 편지가 도착했다.":
["An artist folded his easel outside Funtom’s shop window. A department store wrote asking to display its new hats for a week in the spot he had sketched.","ファントム社のショーウィンドウの前で画家が画架を畳んだ。彼が描き留めたその場所に一週間、新作の帽子を飾らせてほしいと百貨店から手紙が届いた。"],"그해 겨울, 런던 부두가에 팬텀사의 새 지점이 문을 열었다. 사장실 벽에는 매출표와 항만 입항표가 나란히 걸렸다.":
["That winter Funtom opened a new branch in London’s docklands. Sales figures and harbour arrivals hung side by side on the proprietor’s wall.","その冬、ロンドンの波止場にファントム社の新しい支店が開いた。社長室の壁には売上表と入港表が並んだ。"],"나무패는 모두 스물여섯 개다. B가 두 개이고 D가 없다. 두 B의 모서리에는 갓 마른 파란 칠이 똑같이 묻어 있다.":
["There are twenty-six wooden tiles in all. There are two Bs and no D. Both Bs have identical traces of freshly dried blue paint on their corners.","木札は全部で二十六枚。Bが二枚あり、Dがない。二枚のBの角には、乾いたばかりの青い塗料が同じようについている。"],"다른 다실에서 돌려보낸 비스킷은 어느 것이나 똑똑 잘 부러졌다. 며칠 뒤 같은 선반에 놓아둔 통에서만 또 눅눅한 것이 나왔다.":
["Every biscuit the other tearooms returned broke with a crisp snap. A few days later, only the tin on that same shelf yielded soft biscuits again.","よその茶房から戻ったビスケットは、どれもぱきぱきと割れた。数日後、また湿気ていたのは、あの棚に置いた缶の分だけだった。"],"스네이크는 타운하우스에서 소마와 아그니를 만났다. 본저택에서 시엘과 이야기를 나눈 뒤, 뱀들과 함께 풋맨으로 일하기로 했다.":
["Snake met Soma and Agni at the townhouse. After speaking with Ciel at the manor, he agreed to become a footman and bring his snakes with him.","スネークはタウンハウスでソーマとアグニに出会った。本邸でシエルと話した後、蛇たちと一緒にフットマンとして働くことにした。"],"‘27번, 전액 반환.’ 그 옆에는 수령 서명이 있다. 이름 끝에서 펜을 길게 끈 버릇이 오늘 손님이 써 낸 항의장에도 보인다.":
["“No. 27, refunded in full.” Beside it is the recipient’s signature. The long trailing stroke at the end of the name appears on the customer’s written complaint today as well.","「二十七番、全額返金」。その隣に受取人の署名がある。名前の末尾で長くペンを引く癖は、客が今日書いた苦情の書面にも見て取れる。"],"남자가 눈을 피했다. 세바스찬이 운송장 석 장을 가지런히 겹쳐 들었다. 세 장 모두 같은 자리에서 펜촉이 종이를 뚫고 나갔다.":
["The man looked away. Sebastian held up three waybills, neatly aligned. The pen nib had pierced all three in the same place.","男は目をそらした。セバスチャンが三枚の運送状をきちんと重ねて掲げた。どの紙も同じ箇所でペン先が突き抜けている。"],"다음 공연의 표 값이 두 배가 됐다. 후원자는 새 가격표를 밀어 놓고 이번 장부부터 펼쳤다. “그래서, 제가 초대한 아이들은 어느 줄입니까?”":
["The ticket price doubled for the next performance. The patron pushed the new price list aside and opened the ledger for this one. ‘Now, which line shows the children I invited?’","次の公演の切符代は倍になった。後援者は新しい料金表を脇へ押し、今回の帳簿を開いた。「それで、私が招待した子どもたちはどの行に？」"],"동틀 무렵, 의사가 일어서며 시계를 보았다. 세바스찬도 탁자 위 시계를 보았다. 두 시계가 가리키는 분은 여전히 달랐다.":
["As dawn approached, the doctor rose and checked his watch. Sebastian glanced at the clock on the table. The two minute hands still disagreed.","夜明け頃、医師が立ち上がって時計を見た。セバスチャンも卓上の時計に目をやった。二つの時計の分針は、相変わらず違うところを指していた。"],"봉랍의 한쪽이 납작해. 봉랍이 굳기도 전에 누가 그 위에 서류를 얹었군. 이대로 궁에 보낼 수야 없지. 다시 봉하겠다.":
["The wax is flat on one side. Someone set papers on it before it hardened. I can hardly send that to the palace. I’ll seal it again.","封蝋の片側が平らだ。固まる前に誰かが書類を載せたな。このまま宮殿に出せるものか。僕が封をし直す。"],"부두에선 우리 보고 인도로 돌아가라더군. 거기선 너희 나라 사람들이 일자리를 차지하고 있는데 말이야. 도련님은 어느 쪽으로 가라고 할 텐가?":
["Down at the docks they told us to go back to India. Over there it’s your countrymen taking the jobs. Where would you have us go, young sir?","波止場じゃインドへ帰れと言われたよ。向こうじゃあんたの国の連中が仕事を取ってるってのにな。坊ちゃんはどっちへ行けと言うんだい？"],"시엘은 한 집에서 두 번 적어 낸 몫을 찾아냅니다. 남은 곡물까지 계량을 끝내자 심사위원이 장부와 저울의 수를 대조합니다.":
["Ciel spots a household whose share has been entered twice. Once the remaining grain is weighed, the judge checks the figures on the scales against the ledger.","シエルは、一軒の取り分が二度記入されていることに気づきます。残りの穀物を量り終えると、審査員が秤の目盛りと台帳の数字を照合します。"],"시엘의 이름이 불리자 엘리자베스가 두 손을 모아 박수를 칩니다. 시엘은 바이올린을 맡기고 상장을 받으러 나갑니다.":
["Elizabeth claps when Ciel's name is called. He hands over his violin and steps forward to receive the certificate.","シエルの名が呼ばれると、エリザベスが両手を合わせて拍手します。シエルはヴァイオリンを預け、賞状を受けに進み出ます。"],"시엘이 빈 둥지 밑을 살짝 들추자 금빛 달걀이 굴러 나옵니다. 엘리자베스가 직접 묶은 작은 리본이 달려 있습니다.":
["Ciel lifts the edge of the empty nest. Out rolls a golden egg, tied with a little ribbon by Elizabeth herself.","シエルが空の巣の端をそっと持ち上げると、金の卵が転がり出ます。小さなリボンはエリザベスが自分で結んだものです。"],"애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.\\n이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요.":
["It was not for his cooking that I brought him here, my lord.\nIn a house of this size, I can scarcely be the only senior servant.","そもそも、この方をお連れしたのは料理の腕を買ってのことではございません。\nこれほどのお屋敷で、上級使用人が私一人というわけにもまいりませんので。"],"얼스 코트 이탈리아 박람회가 열리는 달입니다. 인근 상인회의 공예품 품평회에 팬텀사와 모레티 공방이 견본을 내놓았습니다.":
["The Italian Exhibition opens at Earl’s Court this month. Funtom and the Moretti workshop have submitted samples to the local merchants’ handicraft competition.","今月はアールズ・コートでイタリア博覧会が開かれます。地元商人の手工芸品の品評会に、ファントム社とモレッティ工房が見本を出しました。"],"왕실 납품 담당관이 견본을 받아 들고 거래 장부를 요청합니다. 대결에서 이기면 출품한 품목이 왕실 납품 인증을 받습니다.":
["The royal purchasing officer takes the sample and asks for the account ledger. The winning entry receives a royal warrant.","王室の調達官が見本を手に取り、取引台帳を求めます。対決に勝つと、出品した品目が王室御用達の認定を受けます。"],"왼쪽 위 달력에서 현재 날짜와 전체 35개월 중 몇 개월째인지 확인할 수 있습니다. 오른쪽 위 명패에는 시엘의 나이와 가문의 보유금이 표시됩니다.":
["The calendar at the upper left shows the date and your current month out of 35. The nameplate at the upper right shows Ciel's age and the family's funds.","左上の暦で、今日の日付と全35か月のうちの何か月目かを確認できます。右上の名札には、シエルの年齢と一家の所持金が表示されます。"],"저택 메인 화면의 ‘대화’에서 화제를 고르면 시엘의 반응을 볼 수 있습니다. ‘상태’에서는 컨디션·스트레스와 각 능력치를 확인할 수 있습니다.":
["Choose a topic under Talk on the estate screen to see how Ciel responds. Status shows his condition, stress and individual attributes.","屋敷のメイン画面の「会話」で話題を選ぶと、シエルの反応を見られます。「ステータス」では体調、ストレス、各能力値を確認できます。"],"저택에서 ‘대화’로 부르시면 제가 듣겠습니다. ‘상태’에서는 도련님의 컨디션과 능력을 보실 수 있습니다. 피곤하시면 다음 한 순은 비워 둘까요?":
["At the manor, select Talk whenever you wish to speak to me. Status shows your condition and abilities. If you’re tired, shall we leave the next slot free?","お屋敷で「会話」からお呼びいただければ、いつでも伺います。「ステータス」では坊ちゃんの体調と能力をご覧になれます。お疲れなら次の予定は空けておきましょうか？"],"처음 이 집에서 아침상을 차리던 날엔 손이 떨렸습니다. 왕자님께는 비밀로 해 주시겠습니까? 오늘이라면 웃으며 말씀드릴 수 있겠군요.":
["My hands shook the first time I laid the breakfast table in this house. Would you keep that from the prince? I can tell the story with a smile now.","初めてこの屋敷で朝食の卓を整えた日には、手が震えたものです。王子には内緒にしていただけますか？　今なら笑ってお話しできます。"],"처음엔 혼날까 봐 부러진 가지를 숨겼어요. 이건 제가 실수로 부러뜨린 거예요. 그런데 보세요! 붙여 놓은 데서 새잎이 났어요!":
["At first I hid the broken branch because I thought I’d get in trouble. I broke it by accident. But look! There’s a new leaf where I bound it back together!","最初は怒られると思って、折れた枝を隠しちゃったんです。これ、僕がうっかり折ったんです。でも見てください！　つないでおいたところから新しい葉っぱが出ました！"],"판지로 만든 다리 밑에 종이배를 달았다. 손잡이를 한 바퀴 돌릴 때마다 무대 한쪽에서 뱃사공이 나타나 모자를 벗어야 한다.":
["A paper boat hung beneath a cardboard bridge. With each turn of the crank, a boatman was meant to appear at the side of the stage and doff his hat.","厚紙の橋の下に紙の舟を吊った。ハンドルを一周させるたび、舞台の袖から船頭が現れて帽子を取る仕掛けだ。"],"관리 · 경영’의 저택 지도에서 방을 누르면 개수 효과와 비용을 확인할 수 있습니다. ‘사용인 배치’에서 인물을 고르고 근무할 방을 누릅니다.":
["On the Manor map under Estate & Company, select a room to see what a renovation would change and how much it costs. To assign staff, select someone under Assign staff, then choose the room where they will work.","屋敷・会社経営」の「屋敷の見取り図」で部屋を選ぶと、改修の効果と費用を確認できます。「使用人の配置」で人物を選んでから、勤務する部屋を選んでください。"],"그날부터 전당포 창에 불이 켜지면 뒷골목에 수군거림이 돌았다. 값을 깎지 않고 제값을 치르는 외눈의 손님이 온다고.":
["After that night, whenever light appeared in the pawnshop window, word ran round the alleys. The one-eyed customer was coming, the one who paid the asking price without haggling.","それからは質屋の窓に灯りがともるたび、路地裏に噂が走った。値切りもせず言い値を払う片目の客が来る、と。"],"다음 날에도 그 손님은 검은까치밥을 찾았다. 주인은 고개를 저었다. 팔꿈치 바로 옆에 ‘자두’라고 적힌 병이 사탕으로 그득했다.":
["The next day the passenger asked for blackcurrant again. The owner shook his head. Right by his elbow, a jar marked ‘Plum’ was full to the brim with sweets.","翌日も客は黒すぐりを求めた。主人は首を横に振った。その肘のすぐ横には、「すもも」と書かれた瓶いっぱいに飴が詰まっていた。"],"답신 봉투가 반송되어 돌아왔다. 연회는 어제 끝났다. 조간지에는 좌석표까지 실렸는데, 주빈 바로 옆 한 칸에만 이름이 없었다.":
["The reply came back undelivered. The banquet had been yesterday. The morning paper even printed the seating plan. Only the place beside the guest of honour bore no name.","返事を入れた封筒が戻ってきた。晩餐会は昨日終わった。朝刊には席次表まで載っていたが、主賓のすぐ隣だけが空欄だった。"],"도련님, 커튼은 잠시 그대로 두시지요. 밤새 창 안쪽까지 얼었습니다. 올 12월은 기록적인 한파로 남겠군요. 차는 난롯가에 준비했습니다.":
["Leave the curtains a moment, my lord. Even the inside of the window froze overnight. This December’s cold will go down in the records. I’ve laid tea by the fire.","坊ちゃん、カーテンは今しばらくそのままに。ひと晩で窓の内側まで凍りました。この十二月の寒波は記録に残るでしょうね。お茶は暖炉のそばにご用意しました。"],"세바스찬은 탁자 위 수첩을 펼쳤다. 오래전에 멎어 있던 날짜들 밑에, 그날 새벽의 시각을 반듯하게 적어 넣었다.":
["Sebastian opened the notebook on the table. The last dated entry was long ago. Beneath it, in a neat hand, he wrote the hour of that morning’s dawn.","セバスチャンは卓上の手帳を開いた。とうに途絶えた日付の下に、その明け方の時刻を端正な字で書き入れた。"],"시엘은 멍든 자리를 골라내고 바구니 밑에 짚을 덧댑니다. 심사위원이 열매를 하나씩 들어 보아도 밑면의 손상이 없습니다.":
["Ciel sets aside the bruised fruit and lines the basket with extra straw. The judge lifts each piece in turn, finding the underside unmarked.","シエルは傷んだ果実をよけ、籠の底に藁を敷き足します。審査員が一つずつ持ち上げても、底に当たった面に傷はありません。"],"시엘은 잎 뒷면의 털과 줄기가 갈라지는 높이를 비교해 표찰을 놓습니다. 심사위원이 마지막 화분을 돌려 보다가 고개를 끄덕입니다.":
["Ciel compares the hairs beneath the leaves and the height at which the stems branch, then sets out the labels. The judge turns the last pot and nods.","シエルは葉裏の毛と茎の分かれる高さを比べ、名札を置きます。審査員は最後の鉢を回して眺め、うなずきます。"],"일주일 동안 시엘은 결재를 하면서 피아노 연습을 들었다. 금요일쯤에는 어느 마디에서 틀릴지까지 알았다. 가문 명성 +2 · 스트레스 +6":
["For a week, Ciel signed papers to the sound of piano practice. By Friday he knew exactly which bar would go wrong. Family reputation +2 · Stress +6","一週間、シエルはピアノの練習を聴きながら書類に決裁を下した。金曜には、どの小節でつまずくかまで分かるようになっていた。家の名声 +2・ストレス +6"],"지난겨울 주문표를 보낸 세 사람에게는 이제 맞는 물건이 갔다. 네 번째 손님은 새 책에서 주문표를 오렸다. 그 집에도 목제 완구가 배달됐다.":
["The three who had sent last winter’s slips now received the right article. A fourth customer clipped a slip from the new catalogue. A wooden toy arrived at that house too.","昨冬の注文票を送った三人には、今度こそ正しい品が届いた。四人目の客は新しい本から注文票を切り取った。その家にも木の玩具が届いた。"],"지난번에 셋에게 집을 맡겼을 때 말입니다. 돌아와 보니 밖에서도 식당 안이 훤히 보이더군요. 원래 벽이 있던 쪽으로요.":
["The last time we left those three in charge, we came back to find a splendid view into the dining room from outdoors. From the side where the wall used to be, my lord.","前にあの三人に留守を任せた時のことです。戻ってみますと、外から食堂の中まで実によく見渡せまして。もとは壁のあった側からでございます。"],"첫 손님이 오기 전에 제가 통을 열었습니다.’ 주인은 그 한 줄을 쓴 편지를 찌그러진 통에 넣어 보냈다. 뚜껑은 오는 길에 빠져 있었다.":
["I opened the tin before the first customer arrived.’ The owner put this one-line letter in the dented tin and sent it back. The lid came off on the way.","最初のお客様がいらっしゃる前に、私が缶を開けました」。主人はその一行を書いた手紙をへこんだ缶に入れて送り返した。蓋は道中で外れていた。"],"‘관리 · 경영’의 저택 지도에서 방을 누르면 개수 효과와 비용을 확인할 수 있습니다. ‘사용인 배치’에서 인물을 고르고 근무할 방을 누릅니다.":
["On the Manor map under Estate & Company, select a room to see what a renovation would change and how much it costs. To assign staff, select someone under Assign staff, then choose the room where they will work.","「屋敷・会社経営」の「屋敷の見取り図」で部屋を選ぶと、改修の効果と費用を確認できます。「使用人の配置」で人物を選んでから、勤務する部屋を選んでください。"],"‘첫 손님이 오기 전에 제가 통을 열었습니다.’ 주인은 그 한 줄을 쓴 편지를 찌그러진 통에 넣어 보냈다. 뚜껑은 오는 길에 빠져 있었다.":
["‘I opened the tin before the first customer arrived.’ The owner put this one-line letter in the dented tin and sent it back. The lid came off on the way.","「最初のお客様がいらっしゃる前に、私が缶を開けました」。主人はその一行を書いた手紙をへこんだ缶に入れて送り返した。蓋は道中で外れていた。"],"개학 날, 첫 연주회 초대장이 두 장 왔다. 아이들이 한 장은 도련님께, 다른 한 장은 지붕을 고친 수리공에게 썼다. 가문 명성 +5":
["On the first day of term two invitations to the children’s first concert arrived. One was for the young master, the other for the man who had mended the roof. Family reputation +5","新学期の初日、子供たちの初めての演奏会に招待状が二通届いた。一通は坊ちゃんに、もう一通は屋根を直した職人に、子供たちが宛てたものだった。家の名声 +5"],"뚜껑 안쪽에 왼쪽 귀 끝이 찍혀 있다. 받침 종이를 빼면 귀가 뚜껑에 닿지 않고, 토끼는 상자 속에서도 똑바로 선다.":
["The tip of the left ear has left a mark inside the lid. Remove the cardboard insert and the ears clear the lid. The rabbit stands straight even inside the box.","蓋の裏に左耳の先の跡がついている。台紙を抜けば耳は蓋に触れず、ウサギは箱の中でもまっすぐに立つ。"],"메리가 계단에서 상자를 밀어 올리고 위층 주인이 상자를 받아 인수증에 서명했다. 점심때는 따끈한 파이가 같은 계단을 내려왔다. 메리의 몫이었다.":
["Mary pushed the box up the stairs. The shopkeeper upstairs took it from her and signed the receipt. At lunchtime a piping-hot pie came down those same stairs. It was for Mary.","メアリーが階段の下から箱を押し上げ、二階の店主が受け取って受領証に署名した。昼には同じ階段を熱々のパイが下りてきた。メアリーの分だった。"],"봉제 인형 둘을 무대에 올리고 시엘이 바이올린을 턱 밑에 댔다. 인형을 든 점원이 고개를 끄덕이자 첫 박이 울렸다.":
["Two stuffed animals took the stage, and Ciel tucked his violin under his chin. The shop assistant holding them nodded, and the music began.","ぬいぐるみを二体舞台に上げ、シエルは顎の下にヴァイオリンを当てた。ぬいぐるみを手にした店員がうなずくと、最初の一音が響いた。"],"봉투에는 폐하의 존호를 빠짐없이 써 놓고, 편지의 첫 줄에는 평소에 쓰던 호칭을 적었군. 새 종이를 줘. 첫 줄은 내가 쓰지.":
["Every one of Her Majesty’s titles is on the envelope, and then the letter opens with our usual form of address. A fresh sheet. I’ll write the first line.","封筒には陛下の称号を漏れなく記したのに、手紙の書き出しは普段通りの呼びかけだな。新しい紙をくれ。最初の一行は僕が書く。"],"사우스켄싱턴에서 식민지·인도 박람회가 열렸습니다. 박람회 주간에 맞춰 런던 상인들이 여는 별도 견본 품평회에 출품합니다.":
["The Colonial and Indian Exhibition has opened in South Kensington. Enter the separate sample competition organised by London merchants for exhibition week.","サウス・ケンジントンで植民地・インド博覧会が開幕しました。会期に合わせ、ロンドンの商人たちが別に催す見本品評会に出品します。"],"새 마부가 빈손으로 위층 문을 두드렸다. 아래층 직공은 종이 한 짐을 안고 계단의 상자를 넘어야 했다. 오늘만 해도 벌써 세 번째였다.":
["The new driver knocked empty-handed at the upstairs door. Downstairs, a workman carrying an armful of paper stepped over the box on the stairs. It was his third time today.","新しい御者が手ぶらで二階の戸を叩いた。階下の職人は紙の束を抱えたまま、階段の箱をまたがなければならなかった。今日だけでもう三度目だった。"],"식탁에 빈 의자가 하나 늘었다. 주최자는 좌석표에 그린 숟가락을 짚었다. “그분은 오늘 저녁에도 여기에 앉으실 수가 없어요.”":
["One empty chair was added to the table. The host pointed to the spoon on the plan. ‘She can’t sit here this evening either, you know.’","食卓に空の椅子が一脚増えた。主催者が席次表の匙を指さした。「あの方は今晩も、ここにお掛けにはなれないのですよ」"],"왕실 납품 담당관이 팬텀사의 견본과 거래 장부를 함께 봅니다. 해당 품목이 대결에서 이기면 왕실 납품 인증을 획득합니다.":
["The royal purchasing officer examines Funtom's sample alongside its account ledger. A winning product earns a royal warrant.","王室の調達官が、ファントム社の見本と取引台帳を照合します。対決に勝った品目が王室御用達の認定を受けます。"],"이스트엔드의 전당포는 새벽 한 시에도 셔터를 반쯤 치켜올려 두고 있었다. 시엘이 허리를 숙여 들어서자 어둠 속에서 값부터 날아왔다.":
["The East End pawnshop still had its shutter halfway up at one in the morning. Ciel ducked inside. A price came flying out of the dark.","午前一時、イーストエンドの質屋はまだ鎧戸を半分上げていた。シエルがかがんで潜ると、暗がりから値が飛んできた。"],"저 끝자리에 앉은 손님만 한 박자씩 늦게 웃으십니다. 저 의자에 앉으면 옆에서 말을 옮겨 줘야 들리는 모양이군요.":
["Only the guest at the far end laughs a beat late every time. It seems that from that chair one can hear the conversation only if a neighbour repeats it.","端のお席の方だけ、いつも一拍遅れてお笑いになります。あの椅子では、お隣の方に言葉を取り次いでいただかないと聞こえないようですね。"],"직원은 흰 표를 반듯이 접어 묶은 꾸러미를 꺼냈다. 쉰 장이었다. 극장주는 아까 그 말을 들은 사람들을 도로 불러 모아야 했다.":
["The doorkeeper produced a bundle of neatly folded and tied white tickets. Fifty in all. The theatre owner had to gather everyone who had heard his accusation back together.","入口係は、白い切符をきちんと畳んで束ねたものを取り出した。五十枚あった。劇場主は先ほどの言葉を聞いた面々を、また呼び集める羽目になった。"],"창밖의 아이들을 보십시오. 하나는 수레바퀴를, 하나는 마부의 모자를 가리키는군요. 같은 장난감을 두고 무슨 이야기를 저렇게 열심히 하는 걸까요?":
["Look at the children outside. One is pointing at a cartwheel, the other at the coachman’s hat. I wonder what they find to discuss so earnestly about one and the same toy.","窓の外の子供たちをご覧ください。一人は荷車の車輪を、もう一人は御者の帽子を指しています。同じ玩具を前に、何をあんなに熱心に話しているのでしょうね。"],"공장 견본은 세워도 두 귀가 선다. 돌아온 토끼의 왼쪽 귀를 손으로 쭉 펴 봤다. 손을 떼면 똑같은 곳에서 접힌다.":
["Stand the factory sample up and both ears stand straight. Straighten the returned rabbit’s left ear by hand, and as soon as you let go it folds in the same place.","工場の見本は立たせても両耳が立つ。返品されたウサギの左耳を手でまっすぐ伸ばしてみた。手を離すと同じところで折れる。"],"그 종이를 챙겨. 팬텀하이브가 왕실에 문전박대당했다는 소식이라면, 오히려 반가워서 빗장을 풀 놈이 하나쯤은 있을 테니까.":
["Take that paper. At least one man will be glad enough to unbolt his door when he hears the Crown turned a Phantomhive away.","その紙は取っておけ。ファントムハイヴが王室に門前払いされたと聞けば、喜んで閂を外す奴も一人くらいいるだろう。"],"런던의 타운하우스. 스네이크는 봉투에 적힌 번지와 눈앞의 문패를 번갈아 보았다. 목도리 속에서 오스카가 먼저 고개를 내밀었다.":
["At the London townhouse, Snake looked from the address on the envelope to the nameplate on the door. Oscar was the first to poke his head out of Snake's scarf.","ロンドンのタウンハウスで、スネークは封筒の番地と目の前の表札を見比べた。マフラーの中から真っ先に顔を出したのはオスカーだった。"],"를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다.":
["Choose your product in the development room, the quantity in the workshop and the price in the shop. If funds look short for tuition, may I suggest a smaller production run this month?","をお開きください。開発室では商品を、製作室では数量を、販売店では価格をお決めください。授業料が足りなくなりそうでしたら、今月の生産数を少し抑えてはいかがでしょう。"],"잉크를 말릴 때 쓰는 모래군요. ……다만 묘한 점이 있습니다. 차기 심의 칸은 백지인데, 발신 인장과 날짜는 오늘 자로 찍혀 있습니다.":
["Blotting sand. …Though there is one curious detail. The review date is blank, yet the dispatch seal bears today’s date.","インクを乾かす砂ですね。……ただ、一つ妙な点が。次の審議日は空欄なのに、発送の印には今日の日付が入っております。"],"팬텀사 신제품 시식회 비용입니다. 도련님께서 재료가 성에 안 찬다며 공정을 열일곱 번이나 갈아엎고 직접 맛을 보시겠다고 하셨지요.":
["The bill for the tasting of Funtom’s new product, my lord. You found the ingredients wanting, had the recipe revised seventeen times and asked to taste the result yourself.","ファントム社の新商品の試食会にかかった費用でございます。材料がお気に召さず、作り方を十七回も改めさせたうえ、ご自分で味見をなさるとおっしゃいましたね。"],"한 달에 한 곳을 방문할 수 있습니다. 일정표의 ‘자유행동’에서 장소를 고르면 하순 일정이 끝난 뒤 방문합니다. 방문하지 않을 때는 ‘방문 생략’을 선택합니다.":
["You can visit one place each month. Choose a destination under Free time on the schedule. You will go after the last activity of the month. Select Skip visit to stay home.","訪問できるのは月に一か所です。予定表の「自由行動」で行き先を選ぶと、下旬の活動を終えたあとに訪問します。出かけない場合は「訪問を見送る」を選んでください。"],"그럼 왜 잡혀갔는지도 똑바로 알아 둬. 네가 같이 지낸 단원들이 공연을 다니면서 아이들을 납치했어. 야드가 쫓고 있던 건 그 사건이야.":
["Then you should know exactly why they were arrested. The people you lived with were abducting children as they toured. That's what the Yard was investigating.","なら、なぜ捕まったのかも、きちんと知っておけ。お前と暮らしていた団員たちは、巡業先で子供をさらっていた。ヤードが追っていたのはその事件だ。"],"도련님, 이달 일정표를 가져왔습니다. 날짜는 위쪽 달력에, 잔금은 명패에 적어 두었습니다. 아래의 ‘일정표’를 여시면 제가 설명드리겠습니다.":
["Your schedule for the month, my lord. The date is on the calendar above and your funds on the nameplate. Open Schedule below and I shall explain.","坊ちゃん、今月の予定表です。日付は上の暦に、残金は名札に記してあります。下の「予定表」をお開きください。順にご案内いたします。"],"매출 장부는 펴 보실 때마다 숫자가 늘지요. 그런데 금요일에 줄 품삯은 모자랍니다. 자, 외상 장부와 주문서 가운데 어느 쪽부터 펴시겠습니까?":
["The figures in the sales ledger rise each time you open it. Yet we are short of Friday’s wages. Which will you open first, the credit ledger or the order book?","売上帳をお開きになるたびに数字は伸びています。ところが金曜に払う賃金が足りません。さて、掛売帳と注文書、どちらからご覧になりますか？"],"본저택 온실 앞에서 마차가 멎었다. 스네이크가 바구니 뚜껑을 조금 들자 납작한 머리들이 볕 드는 돌턱으로 하나씩 미끄러져 나왔다.":
["The carriage stopped outside the manor greenhouse. Snake lifted the basket lid a little, and flat heads slipped out one after another onto the sunlit ledge.","本邸の温室前で馬車が止まった。スネークが籠の蓋を少し上げると、平たい頭が次々と日向の石の縁へ滑り出た。"],"아그니는 빈 쟁반을 거두는 동안에도 소마에게서 시선을 떼지 않는다. 세바스찬이 그 빈틈없는 손놀림을 유심히 지켜본다.":
["Even as he clears the empty tray, Agni never takes his eyes off Soma. Sebastian watches the unerring movements of his hands.","空の盆を下げる間も、アグニはソーマから目を離さない。セバスチャンはその隙のない手さばきをじっと見ている。"],"에드워드가 찻주전자를 내려놓자 사회자가 다음 차례인 시엘을 부릅니다. 시엘은 손님들의 찻잔을 하나씩 살피며 탁자로 다가갑니다.":
["Edward sets down the teapot, and the master of ceremonies calls Ciel. As he approaches the table, Ciel takes in each guest's cup.","エドワードがティーポットを置くと、司会が次のシエルを呼びます。シエルは客のカップを一つずつ見ながら、テーブルに近づきます。"],"자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다.":
["Free time is reserved for your outings, my lord. You may visit one place each month. Once you arrive, you may choose your company and what to discuss.","「自由行動」は坊ちゃんの外出のために空けた枠です。ひと月に一か所、お選びいただけます。誰と何を話すかは着いてからお決めになって結構です。"],"전단에 찍힌 값이 한 줄씩 밀렸다. 손님들은 제 물건 밑에 적힌 값을 셌고 점원은 그 돈을 받았다. 벌써 가게 밖까지 줄이 서 있었다.":
["Every price on the handbill was printed one line out of place. Customers counted out the sum beneath their purchase, and the clerk took it. The queue already stretched outside the shop.","ちらしの値段が一行ずつずれていた。客は買う品の下にある額を数え、店員はその金を受け取った。列はすでに店の外まで続いていた。"],"타나카가 조끼에서 회중시계를 꺼내 세바스찬의 흰 장갑 위에 올려놓았다. 은제 뚜껑에는 팬텀하이브가의 문장이 새겨져 있었다.":
["Tanaka took a pocket watch from his waistcoat and laid it in Sebastian’s white-gloved palm. The Phantomhive crest was engraved on its silver lid.","タナカはチョッキから懐中時計を取り出し、セバスチャンの白手袋に包まれた手のひらに載せた。銀の蓋にはファントムハイヴ家の紋章が刻まれていた。"],"기록을 남길 칸과 음악·효과음의 크기는 여기서 정하실 수 있습니다. ‘마치기’를 누르시면 연습은 끝입니다. 이달의 첫 명령을 기다리겠습니다, 도련님.":
["Here you may choose a save slot and adjust the music and effects. Select Finish to end the tutorial. I await your first order of the month, my lord.","記録を残す欄と、音楽・効果音の音量はこちらでお選びください。「終了」で練習はおしまいです。坊ちゃん、今月最初のご命令をお待ちしております。"],"새 통은 벽난로 건너편 마른 찬장에 두었다. 사흘 뒤 다실에서 작은 소포가 왔다. 편지는 없고, 반으로 똑 부러진 비스킷 하나가 들었다.":
["The new tin went into a dry cupboard across from the fireplace. Three days later a small parcel arrived from the tearoom. There was no letter, just one biscuit snapped neatly in two.","新しい缶は暖炉の向かいにある乾いた戸棚へ。三日後、茶房から小包が届いた。手紙はなく、ぱきんと二つに割ったビスケットが一枚入っていた。"],"세바스찬이 찻잔 하나를 들고 돌아왔다. 소마는 벌써 시엘 옆에 앉아 있었다. 등 뒤에 선 아그니가 마침 컵을 하나 더 꺼내던 참이었다.":
["Sebastian returned with one teacup. Soma was already sitting beside Ciel. Behind him, Agni was just taking out another cup.","セバスチャンがティーカップをひとつ持って戻ると、ソーマはもうシエルの隣に座っていた。その後ろでは、アグニがちょうどもうひとつカップを出しているところだった。"],"시엘 팬텀하이브야. 아그니가 편지를 든 손님이 온다고 했는데, 네가 그 녀석인가? 거기 내 장갑을 깔고 누운 녀석은 일행이고?":
["I’m Ciel Phantomhive. Agni said a visitor was bringing a letter. Is that you? And is that creature lying on my glove with you?","シエル・ファントムハイヴだ。アグニから手紙を持った客が来ると聞いたが、お前か？　僕の手袋を敷いて寝ているそいつも連れか？"],"시엘은 뜨거운 물을 따로 내고, 양옆의 손님에게도 차의 농도를 묻습니다. 빈 찻잔에 손을 대지 않던 손님이 먼저 두 번째 잔을 청합니다.":
["Ciel brings hot water separately and asks the guests on either side how strong they like their tea. The guest who had left their cup untouched is the first to ask for a second.","シエルは差し湯を別に用意し、両隣の客にもお茶の濃さの好みを尋ねます。空のカップに手も伸ばさなかった客が、真っ先にお代わりを頼みます。"],"시엘은 축을 깎은 날짜와 판매 기록을 하나씩 맞춰 봤다. 수리하러 갈 집의 주소를 다 적고 나서야 펜을 놓았다. 통찰 +8 · 스트레스 +8":
["Ciel matched the dates the axles were cut to the sales records, one by one. He put down his pen only when he had listed every address where a repair was due. Insight +8 · Stress +8","シエルは車軸を削った日付を一つずつ販売記録と突き合わせた。修理に回る家の住所をすべて書き出して、ようやくペンを置いた。洞察 +8・ストレス +8"],"왕실 납품 담당관이 심사대 앞에 앉았습니다. 견본과 거래 장부를 함께 심사하며, 대결에서 이긴 품목에 왕실 납품 인증을 내립니다.":
["The royal purchasing officer takes a seat at the judging table. The sample and account ledger will be examined together, and the winning product awarded a royal warrant.","王室の調達官が審査台に着きました。見本と取引台帳を併せて審査し、対決に勝った品目に王室御用達の認定を与えます。"],"은쟁반 한복판에 물 한 방울이 떨어졌다. 쟁반을 옮기자 식탁보가 젖었다. 천장을 열어 보니 오래된 수도관의 이음매가 벌어져 있었다.":
["A drop of water fell squarely in the middle of the silver tray. The tray was moved, and the tablecloth grew wet. When the ceiling was opened up, a joint in an old water pipe had come apart.","銀盆の真ん中に水が一滴落ちた。盆をずらすと、今度はテーブルクロスが濡れた。天井を開けてみると、古い水道管の継ぎ目が開いていた。"],"진열대 세 곳에서 떼어 낸 꼬리표에는 같은 창고 번호가 적혀 있다. 판매용 꼬리표 구석에 손으로 써 넣은 ‘진열 중’이라는 글씨도 같다.":
["The tags from all three displays bear the same stockroom number. In one corner of each sales tag, the same hand has written ‘On display’.","三か所の売り場から剥がした札には、同じ倉庫番号がある。値札の隅に書き添えた「展示中」の字も、同じ筆跡だ。"],"책상 위 지도에는 항구와 여관 두 곳, 그리고 폐쇄된 역의 옛 이름이 붉게 찍혀 있었다. 지난 35개월간 왕실의 눈을 피해 발품으로 긁어모은 자리들이었다.":
["On the map, a port, two inns and the old name of a disused station were marked in red. He’d found them on foot over thirty-five months, out of the Crown’s sight.","机の地図には港と二軒の宿、それに廃駅の旧名が赤く記してあった。三十五か月、王室の目を避けて自分の足で拾い集めた場所だ。"],"‘자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다.":
["Free time is reserved for your outings, my lord. You may visit one place each month. Once you arrive, you may choose your company and what to discuss.","「自由行動」は坊ちゃんの外出のために空けた枠です。ひと月に一か所、お選びいただけます。誰と何を話すかは着いてからお決めになって結構です。"],"견본은 벌써 마차에 실었는데 수령증은 내 책상에 있잖아. 이대로면 궁에서 누가 견본을 받았는지 모르겠군. 수령증을 한 부 더 써.":
["The sample’s already on the carriage, but the receipt is on my desk. We’ll have no record of who takes delivery at the palace. Make out a second receipt.","見本はもう馬車の中なのに、受領証は僕の机にある。これじゃ宮殿で誰が受け取ったか分からない。もう一通、受領証を書け。"],"규칙서의 첫 장에는 빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장이 그려져 있다. 성문에 닿은 사람은 푸른 카드 한 장을 내야 한다.":
["The first page shows twelve red crest cards and twelve blue key cards. Anyone reaching the castle gate must play one blue card.","最初のページには赤い紋章札十二枚と青い鍵札十二枚の絵がある。城門に着いた者は青い札を一枚出す決まりだ。"],"도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.\\n구인 광고를 내도 좀처럼 찾기 힘들겠지요.":
["She has the skill to protect you, my lord, and is in no position to betray you. You have tested her abilities yourself.\nYou would be hard pressed to find such a candidate by advertising for one.","坊ちゃんをお守りする腕があり、裏切ることもできない立場の方です。その力量は坊ちゃんご自身がお確かめになりました。\n求人広告を出したところで、そうそう見つかる人材ではございませんよ。"],"열한 장에는 손님의 이름이 하나씩 적혀 있다. 나머지 한 장에는 ‘먼저 떠나는 요리사 엘런에게’라는 글귀가 있다. 엘런은 오늘 저녁상을 마지막으로 은퇴한다.":
["Eleven ribbons each bear a guest’s name. The remaining one reads ‘For Ellen, our cook, who leaves us first’. Tonight’s dinner will be Ellen’s last before she retires.","十一枚には客の名が一人分ずつ。残る一枚には「ひと足先に旅立つ料理人エレンへ」とある。エレンは今夜の晩餐を最後に引退する。"],"유리병에는 ‘자두’, ‘검은까치밥’ 종이표가 하나씩 붙었다. 제과장이 병마개에 매단 맛표를 읽어 보니 종이표와는 각각 반대로 적혀 있다.":
["The glass jars have paper labels, one ‘Plum’ and one ‘Blackcurrant’. Read the confectioner’s flavour tags tied to the stoppers, and the labels are the wrong way round.","ガラス瓶の紙札には、それぞれ「すもも」「黒すぐり」とある。菓子職人が栓に結んだ味札を読むと、紙札とは中身があべこべだ。"],"남자가 등불을 푹 내렸다. 뒷걸음질 치던 구두 굽이 승강장 끝에 걸려 휘청였다. 흰 장갑을 낀 손이 그의 팔꿈치를 우아하게 붙들었다.":
["The man lowered his lamp. Backing away, he caught his heel on the platform edge and stumbled. A white-gloved hand caught him neatly by the elbow.","男がランプをぐっと下げた。後ずさるうち、靴のかかとがホームの縁に引っかかり、よろめいた。白い手袋の手がすっと伸び、その肘を優雅に支えた。"],"런던 다리를 앞두고 팬텀사 짐마차의 차축이 부러졌다. 빌린 마차 셋에 짐을 나눠 싣고 마지막 한 대가 도착하고서야 상점의 문을 열었다.":
["A Funtom wagon broke an axle on the approach to London Bridge. The load was shared among three hired carts. The shop only opened when the last one arrived.","ロンドン橋の手前でファントム社の荷馬車の車軸が折れた。三台の借り馬車に荷を分け、最後の一台が着いてようやく店を開けた。"],"부활절 예배가 끝나자 엘리자베스가 정원의 문을 엽니다. 리본을 단 달걀을 찾거나, 예배를 마친 손님들에게 바이올린 한 곡을 들려주세요.":
["After the Easter service, Elizabeth opens the garden gates. Hunt for ribboned eggs, or play a piece on the violin for the returning congregation.","復活祭の礼拝が終わると、エリザベスが庭の門を開きます。リボンのついた卵を探すか、礼拝帰りの客にヴァイオリンの一曲を披露しましょう。"],"세바스찬이 시엘의 방문에 손을 대자 문이 안에서 열렸다. 시엘은 벌써 옷깃을 여미고 있었다. 아그니가 빈 세숫대야를 들고 길을 비켰다.":
["As Sebastian reached for Ciel’s door, it opened from within. Ciel was already fastening his collar. Agni stepped aside with an empty washbasin.","セバスチャンがシエルの部屋の扉に手をかけると、内側から開いた。シエルはもう襟を整えていた。アグニが空の洗面器を手に道を譲った。"],"수확제 장터에 왕실 담당관이 자리를 잡았습니다. 출품할 팬텀사 제품 한 점을 고르세요. 견본과 그 품목의 납품 기록이 함께 심사대에 오릅니다.":
["The royal purchasing officer has arrived at the harvest market. Choose one Funtom product to enter. Its sample and its delivery record will go before the officer together.","収穫祭の市に王室の調達官が着席しました。出品するファントム社の製品を一点選んでください。見本とその品目の納品記録が、一緒に審査台に上がります。"],"열일곱 번은 목제 완구다. 지난겨울에만 쓴 테두리 무늬가 있다. 손님들이 오려 낸 주문표 세 장에도 이 판본의 눈송이 장식이 한 귀씩 남았다.":
["Number seventeen is a wooden toy. The border was used only last winter. Each of the customers’ three clipped order slips still has a corner of this edition’s snowflake motif.","十七番は木の玩具。縁飾りは昨冬だけのものだ。客が切り取った三枚の注文票にも、この版の雪の結晶の模様が隅に少しずつ残っている。"],"열일곱.’ ‘열일곱.’ 세 번째 손님은 ‘열일곱’ 밑에 줄까지 그어 보냈다. 시엘은 겨울 것과 이번 것, 도안첩 두 권을 나란히 펼쳤다.":
["Seventeen.’ ‘Seventeen.’ The third customer even underlined ‘seventeen’. Ciel laid the two catalogues open side by side, last winter’s and this season’s.","十七」「十七」。三人目は「十七」に下線まで引いてよこした。シエルは昨冬のものと今季のもの、二冊の図案帳を並べて開いた。"],"좌석표에 적힌 손님 이름은 열하나다. 주최자는 좌석표 아래 여백에 조그맣게 숟가락을 그리고 ‘마지막 한 분께는 주방으로’라고 써 두었다.":
["The plan lists eleven guests by name. In the margin below, the host has drawn a tiny spoon and written, ‘Take the last one to the kitchen.’","席次表には客の名が十一人分。下の余白には、主催者が小さな匙を描き、「最後のお一人には厨房へ」と書き添えていた。"],"첫 거래를 청하는 편지가 왔다. ‘우선 저희 가게의 진열대 하나를 채울 만큼만.’ 주문은 작고, 선금을 치르겠다는 대목에는 밑줄이 두 번 그어져 있다.":
["A letter arrived with a first order. “Just enough to fill one shelf in our shop, to begin with.” The order was small. The offer to pay in advance was underlined twice.","初めての取引を申し込む手紙が届いた。「まずは当店の陳列棚を一つ埋めるだけの品を」。ささやかな注文だ。前金で支払うという箇所には二度、下線が引いてある。"],"체스 클럽에서 한 상자를 붙들고 일곱 판을 뒀다. 일곱 판이 모두 성문 앞에서 끝났다. 여덟 번째 판을 권하자 시엘은 말부터 치우고 상자를 뒤집었다.":
["The chess club played seven rounds from a single game box. All seven ended at the castle gate. When someone suggested an eighth, Ciel cleared away the pieces and turned the box over.","チェスクラブでは同じ箱のゲームを七局指した。七局とも城門の前で終わった。八局目を勧められると、シエルはまず駒をどけ、箱をひっくり返した。"],"타운하우스 문이 열렸다. 피니안이 시엘의 외투를 받고 메이린이 모자를 받았다. 바르도는 젖은 장갑을 말리겠다며 부엌에서 집게를 들고 나왔다.":
["The townhouse door opened. Finnian took Ciel's coat and Mey-Rin his hat. Announcing that he'd dry the wet gloves, Baldo came out of the kitchen with a pair of tongs.","タウンハウスの扉が開いた。フィニアンがシエルの外套を、メイリンが帽子を受け取った。バルドは濡れた手袋を乾かすと言って、厨房からトングを持ち出した。"],"‘열일곱.’ ‘열일곱.’ 세 번째 손님은 ‘열일곱’ 밑에 줄까지 그어 보냈다. 시엘은 겨울 것과 이번 것, 도안첩 두 권을 나란히 펼쳤다.":
["‘Seventeen.’ ‘Seventeen.’ The third customer even underlined ‘seventeen’. Ciel laid the two catalogues open side by side, last winter’s and this season’s.","「十七」「十七」。三人目は「十七」に下線まで引いてよこした。シエルは昨冬のものと今季のもの、二冊の図案帳を並べて開いた。"],"금화가 묵직하게 건너가자 금고 밑바닥에서 진짜 선하증권이 나왔다. 팬텀하이브가 불타던 밤, 은밀히 출항한 배의 이름도 거기 박혀 있었다.":
["A heavy stack of gold changed hands, and the real bill of lading came out of the bottom of the safe. It named the ship that had slipped out on the night Phantomhive Manor burned.","ずしりと金貨が渡ると、金庫の底から本物の船荷証券が出てきた。ファントムハイヴ邸が焼けた晩、ひそかに出港した船の名もそこに記されていた。"],"마지막 모퉁이를 도는데 발밑에 등자가 없었다. 다음으로 시엘이 본 것은 눈앞의 젖은 모래였다. 깔린 어깨가 아프다는 건 숨을 한 번 들이켠 뒤에야 알았다.":
["Rounding the last bend, Ciel felt no stirrup beneath his foot. The next thing he saw was wet sand inches from his face. Only when he drew breath did he feel the pain in the shoulder pinned beneath him.","最後の角を曲がる時、足の下に鐙がなかった。次にシエルの目に入ったのは、鼻先の濡れた砂だった。下敷きになった肩の痛みに気づいたのは、一度息を吸ってからだった。"],"새벽 두 시에 울리기 시작한 마을 종이 동틀 무렵에야 멎었다. 이웃 헛간의 불은 꺼졌고, 시엘의 베개는 어제 펴 놓은 모양 그대로였다.":
["The village bell began ringing at two and did not fall silent until dawn. The fire in the neighbouring barn was out. Ciel’s pillow lay exactly as it had been set out the night before.","午前二時に鳴り始めた村の鐘が、夜明けになってようやくやんだ。近くの納屋の火は消え、シエルの枕は昨夜整えた時のままだった。"],"수확제 장터에 왕실 납품 심사대가 섰습니다. 팬텀사에서 만든 제품 한 점을 골라 출품하세요. 담당관이 견본과 지금까지의 납품 장부를 살핍니다.":
["A royal inspection table has been set up at the harvest market. Enter one Funtom product. The officer will examine the sample and its delivery ledger to date.","収穫祭の市に王室御用達の審査台が設けられました。ファントム社製品を一点選んで出品してください。調達官が見本とこれまでの納品台帳を調べます。"],"시엘은 자를 대고 두 표를 한 줄씩 짚어 내려갔다. 선박의 입항일과 수상한 돈줄이 움직인 날짜가 맞물리는 한 줄에서 자가 딱, 멎었다.":
["Ciel ran a ruler down the two tables line by line. It stopped with a tap where a ship’s arrival coincided with a suspicious movement of funds.","シエルは二つの表を定規で一行ずつ辿った。船の入港日と怪しい金の動いた日が重なる一行で、定規がぴたりと止まった。"],"응접실을 넓힌 덕에 거래처 손님을 한 팀 더 받을 수 있다. 세바스찬은 새 찻잔을 꺼내 놓고, 시엘이 회중시계를 덮을 때까지 기다렸다.":
["With the drawing room enlarged, there was room to receive one more party of business callers. Sebastian set out fresh cups and waited for Ciel to snap his pocket watch shut.","応接間を広げたおかげで、取引先からの客をもう一組迎えられる。セバスチャンは新しいカップを並べ、シエルが懐中時計の蓋を閉じるのを待った。"],"장부를 처음부터 뒤져도 그런 물건을 내보낸 기록은 없었다. 시엘이 사람들 앞에서 담당자의 이름을 거두는 동안 경시청은 두 가게를 따로 찾아가 영수증을 받았다.":
["They went through the ledger from the first page. There was no record of such goods ever leaving the warehouse. While Ciel publicly withdrew his accusation against the clerk, Scotland Yard called at each shop separately to collect the receipts.","帳簿を最初から繰っても、そんな品の出荷記録はない。シエルが人前で担当者への疑いを取り下げる間に、警視庁は二軒を別々に訪ね、領収書を受け取った。"],"조항마다 도련님의 뜻대로 됐더군요. 상대도 군말 없이 서명했고요. 다만 도련님께서 악수를 청하셨을 때, 그분은 벌써 문고리를 잡고 계시더군요.":
["Every clause reads precisely as you wished, my lord. The other party signed without a word. I did notice, though, that by the time you offered your hand, theirs was already on the door handle.","どの条項も坊ちゃんのお望みどおり。先方も異を唱えず署名なさいました。ただ、坊ちゃんが握手を求められた時、あちらはもう扉の取っ手に手を掛けておいででしたが。"],"첫 번째 비스킷은 똑, 소리를 내며 부러졌다. 두 번째 것은 시엘의 엄지가 닿은 자리만 움푹 들어갔다. 다실 주인의 말로는 두 통을 다 어제 처음 열었다고 한다.":
["The first biscuit broke with a snap. On the second, Ciel’s thumb merely left a dent. The tearoom owner said both tins had been opened for the first time yesterday.","一枚目のビスケットはぱきんと割れた。二枚目にはシエルの親指の跡がへこんで残った。茶房の主人によると、どちらの缶も昨日初めて開けたという。"],"검수인이 인수증을 펴는 사이 주방 문이 열렸다. 엘런의 손에는 막 끌러 낸 리본이 있었다. 호텔 주인은 인수증을 끝까지 읽기 전에 검수인에게 사과했다.":
["As the receiving clerk unfolded the receipt, the kitchen door opened. Ellen held a ribbon she had just untied. Before he had even finished reading, the hotelier turned to the clerk and apologised.","検品係が受領証を広げるうちに厨房の戸が開いた。エレンの手には、ほどいたばかりのリボン。主人は受領証を読み終えぬうちに検品係に詫びた。"],"눅눅한 쪽은 밤새 김이 오르던 찻주전자 바로 위 선반에 있었다. 통의 한쪽이 찌그러져, 손으로 꾹 눌러도 뚜껑이 꼭 닫히지 않는다.":
["The soft biscuits spent the night on the shelf directly above the steaming kettle. One side of the tin is dented. Even pressed down firmly, the lid will not close properly.","湿気た方の缶は、一晩中湯気を立てていたやかんの真上の棚にあった。缶の片側がへこみ、手で強く押しても蓋がきちんと閉まらない。"],"돈통에 한 페니가 남습니다. 장부대로라면 거스름돈이 누군가의 주머니에 한 닢 덜 들어간 셈이지요. 방금 계산한 손님들이 아직 가게 안에 계십니다.":
["There’s a penny too much in the till. By the ledger, someone is a penny short in change. The customers who have just paid are still in the shop.","勘定台の銭箱に一ペニー多く残っています。帳簿からすると、どなたかにお釣りを一ペニー少なくお渡ししたようですね。たった今お会計を済まされた皆様は、まだ店内においでです。"],"를 엽니다. 개발실에서 상품을 개발하고, 제작실에서 생산량을, 판매점에서 판매가를 정합니다. ‘이달 자금 예상’에서 수업료를 포함한 월말 잔액을 확인할 수 있습니다.":
["Develop products in the development room, set quantities in the workshop and prices in the shop. The monthly forecast shows your estimated closing balance after tuition.","を開きます。開発室で商品を開発し、製作室で生産数を、販売店で価格を決めます。「今月の資金予測」で授業料を含む月末残高を確認できます。"],"시엘이 맨 위에 놓은 배는 빛깔이 좋았지만 밑에 깔린 두 알이 눌렸습니다. 심사위원이 꺼내 놓은 두 알을 보고 바구니 높이를 다시 잽니다.":
["The pears Ciel placed on top are a fine colour, but two underneath have been crushed. When the judge takes them out, Ciel looks at them and measures the height of the basket again.","シエルが上に置いた梨は色づきがよいものの、下の二つは押しつぶされてしまいました。審査員が取り出したその二つを見て、シエルは籠の高さを測り直します。"],"창고지기가 어제 돌려받은 완구를 내밀었다. 손님은 거들떠보지도 않았다. “그래서 내 돈은요?” 창고지기는 완구를 든 채 같은 사연을 처음부터 들어야 했다.":
["The warehouse keeper held out the toy returned the day before. The customer did not so much as glance at it. “And what about my money?” Still holding the toy, the warehouse keeper had to hear the whole story from the beginning.","倉庫番は昨日引き取った玩具を差し出した。客は見向きもしなかった。「で、私の金は？」。倉庫番は玩具を持ったまま、同じ話を初めから聞かされることになった。"],"회수한 표는 푸른 유료표 오십 장과 흰 초대권 오십 장이다. 푸른 표에 찍힌 값을 모두 더하면 동전함 속 금액과 한 푼도 어긋나지 않는다.":
["Among the tickets collected are fifty blue paid tickets and fifty white invitations. The prices printed on the blue tickets add up to the sum in the cashbox, down to the last penny.","回収したのは青い有料券五十枚と白い招待券五十枚。青い券の額面を足すと、金箱の中身と一ペニーも違わない。"],"사우스켄싱턴에서 식민지·인도 박람회가 열렸습니다. 런던 상인들도 그 주에 맞춰 별도의 견본 품평회를 엽니다. 팬텀사가 이곳에 낼 물건을 준비했습니다.":
["The Colonial and Indian Exhibition has opened in South Kensington. London merchants are holding their own sample competition that week, and Funtom has prepared an entry.","サウス・ケンジントンで植民地・インド博覧会が開幕しました。ロンドン商人も同じ週に独自の品評会を催します。ファントム社は出品の用意を整えました。"],"세 손님은 지난겨울에 골라 둔 목제 완구를 받았다. 다음에 찍은 주문표에는 번호 옆에 판본의 이름이 붙었다. 종이를 아무리 바짝 오려도 둘이 함께 남게끔.":
["The three customers received the wooden toys they had picked out last winter. On the next printing of the order slips, the edition appeared beside the number. However closely one cut, the two would stay together.","三人の客には昨冬選んでおいた木の玩具が届いた。次に刷った注文票では、番号の隣に版の名が添えられた。どんなにぎりぎりで切り抜いても、二つ一緒に残るように。"],"오늘 날짜는 왼쪽 위 달력을 보십시오. 연도 옆에는 서른다섯 달 중 몇 달째인지 적어 두었습니다. 저택의 오른쪽 위 명패에는 도련님의 나이와 가문의 잔금이 있습니다.":
["Today’s date is on the calendar at the upper left, my lord. Beside the year you’ll see which of the thirty-five months this is. The nameplate at the upper right shows your age and the household funds.","今日の日付は左上の暦に。年の隣には全三十五か月のうちの何か月目かを記してあります。屋敷の右上の名札には、坊ちゃんの年齢と家の残金がございます。"],"유리장에 올릴 완구를 하나만 골라 달랍니다. 태엽 인형이 인사를 할 때는 어른들이 보시더군요. 아이들은 그 옆에 있는 수레를 직접 굴려 보고 싶다는 눈치고요.":
["They have asked us to choose a single toy for the glass case. It was the adults who watched the clockwork doll take a bow. The children had their eyes on the cart beside it. I rather think they would like to roll it themselves.","ガラスケースに飾る玩具を一つだけ選んでほしいそうです。ぜんまい人形のお辞儀をご覧になったのは大人の方々でした。子供たちは、隣の荷車を自分で転がしてみたそうでしたよ。"],"같은 판에서 구운 비스킷을 세 통에 나누어 담았다. 공장에 남긴 한 통도 열어 봤다고 한다. 검식 쪽지의 마지막 줄에는 ‘오늘 아침 바삭하게 부러졌다’고 적혀 있다.":
["Biscuits baked on the same tray were divided among three tins. The baker also opened the one that stayed at the factory. The last line of the note reads, ‘Snapped cleanly this morning.’","同じ天板で焼いたビスケットを三つの缶に分けた。工場に残した一缶も開けてみたそうだ。試食記録の最後に「今朝、ぱきんと割れた」とある。"],"시엘이 창가의 꼬리표를 뒤집자 창고지기가 제 글씨를 알아봤다. 장부에는 진열란이 생겼고, 창고지기는 품삯을 받았다. 봉투를 뜯을 일도 없었다.":
["Ciel turned over the tag in the window, and the storekeeper recognised his own handwriting. The ledger gained a column for display stock. The storekeeper received his wages. There had been no need to open the pay envelope.","シエルが窓辺の札を裏返すと、倉庫番は自分の字に気づいた。帳簿に展示品の欄ができ、倉庫番は給金を受け取った。封を切るまでもなかった。"],"문제의 완구는 팔리기 전에 수거됐고 경시청은 상회 수사에 들어갔다. 그 뒤로도 팬텀사에는 초청장을 든 사람들이 찾아왔다. “그럼 여기에 적힌 백작님의 이름은 뭡니까?”":
["The toys were collected before they could be sold, and Scotland Yard began investigating the firm. People with invitations kept calling at Funtom all the same. ‘Then why is the Earl’s name printed here?’","玩具は売れる前に回収され、警視庁が商会の捜査に乗り出した。その後も招待状を手にした人々がファントム社を訪ねてきた。「では、ここに伯爵のお名前があるのはなぜです？」"],"수확제 장터에 올해의 왕실 납품 심사대가 섰습니다. 팬텀사 제품 가운데 출품할 한 점을 고르세요. 담당관은 그 물건을 지금까지 어떻게 납품해 왔는지도 살핍니다.":
["This year's royal inspection table is ready at the harvest market. Choose one Funtom product to enter. The officer will also examine its delivery history.","収穫祭の市に、今年の王室御用達の審査台が設けられました。ファントム社の製品から一点を選んで出品してください。調達官はその品のこれまでの納品実績も調べます。"],"우리 집에는 이거 하나뿐이에요.” 아이는 아까와 똑같이 대답했다. 세 번째로 묻기 전에 어머니가 나무패를 도로 상자에 담았다. 맨 앞 한 칸은 끝내 비어 있었다.":
["We’ve only got this one set at home.” The child gave exactly the same answer as before. Before anyone could ask a third time, her mother put the tiles back in the box. The space at the front was never filled.","うちにはこれしかありません」。子供はさっきとまったく同じ返事をした。三度目を尋ねられる前に、母親が木札を箱にしまった。名前の先頭はとうとう空いたままだった。"],"이 필체를 쓰는 분은 몸이 열 개라도 모자라겠군요. 같은 날 런던과 도버 양쪽에 동시에 계셨으니. 이름만 빌려줬거나, 솜씨 좋은 대리인을 두셨나 봅니다.":
["The writer of these notes has a remarkable gift, my lord. He was in London and Dover at the very same time. Either he lent someone his name or he employs a most accomplished deputy.","この筆跡の主は身が十あっても足りませんね。同じ日にロンドンとドーヴァーの双方においでです。名をお貸しになったか、腕のいい代理がおいでのようです。"],"타운하우스 문이 열렸다. 피니안이 외투를, 메이린이 모자를 받았다. 바르도가 부엌 집게로 시엘의 장갑을 집으려 하자 타나카가 말없이 은쟁반을 내밀었다.":
["The townhouse door opened. Finnian took the coat and Mey-Rin the hat. As Baldo reached for Ciel's gloves with the kitchen tongs, Tanaka silently held out a silver tray.","タウンハウスの扉が開いた。フィニアンが外套を、メイリンが帽子を受け取った。バルドが厨房のトングでシエルの手袋をつまもうとすると、タナカが黙って銀の盆を差し出した。"],"거래처 주인은 어제 온 짐이 없다고 썼다. 마부는 자기가 직접 짐을 내려놓았다고 했다. 빈 마차를 끌고 모퉁이를 도는데 그제야 학교 종이 울리더란다.":
["The shopkeeper wrote that no goods had arrived yesterday. The driver said he had unloaded them himself. He was rounding the corner with an empty wagon when at last he heard the school bell.","得意先の店主は、昨日は荷が届かなかったと書いてきた。御者は自分の手で荷を下ろしたと言う。空の荷馬車で角を曲がるところで、ようやく学校の鐘が鳴ったそうだ。"],"수확제 장터 한쪽에 왕실 납품 심사대가 들어섰습니다. 팬텀사 제품을 한 점 고르세요. 담당관은 견본 옆에 그 품목의 납품 장부를 펴 놓고 심사합니다.":
["A royal inspection table stands at one end of the harvest market. Choose one Funtom product. The officer will open its delivery ledger beside the sample.","収穫祭の市の一角に、王室の調達官が審査台を設けました。ファントム社の製品を一点選んでください。調達官は見本の隣に、その品目の納品台帳を開いて審査します。"],"인수증의 서명 밑에는 ‘아래층 보관, 메리’라고 적혀 있다. 발주서의 배달 지시에는 ‘위층 매장, 주인에게 직접’이라고 적혀 있다. 번지는 같고 마지막 줄이 다르다.":
["Beneath the signature on the receipt are the words ‘Held downstairs, Mary’. The delivery instructions on the order read ‘Upstairs shop, to the proprietor in person’. The house number matches. The last line does not.","受領証の署名の下に「階下にてお預かり、メアリー」とある。注文書の届け先には「二階の店舗、店主に手渡し」。番地は同じで、最後の一行が違う。"],"“우리 집에는 이거 하나뿐이에요.” 아이는 아까와 똑같이 대답했다. 세 번째로 묻기 전에 어머니가 나무패를 도로 상자에 담았다. 맨 앞 한 칸은 끝내 비어 있었다.":
["“We’ve only got this one set at home.” The child gave exactly the same answer as before. Before anyone could ask a third time, her mother put the tiles back in the box. The space at the front was never filled.","「うちにはこれしかありません」。子供はさっきとまったく同じ返事をした。三度目を尋ねられる前に、母親が木札を箱にしまった。名前の先頭はとうとう空いたままだった。"],"두 가게의 주인은 모두 문제의 완구를 팬텀사에서 받은 적이 없다. 주인들은 서로 다른 날 상회 대표에게서 물건을 샀다. 각자 제 돈통에 넣어 둔 영수증에 같은 대표의 서명이 있다.":
["Neither shopkeeper received the toys from Funtom. The two bought them on different days from the firm’s representative. The receipts they kept in their tills bear the same representative’s signature.","どちらの店主も問題の玩具をファントム社から仕入れたことはない。二人は別々の日に商会の代表から品を買った。それぞれの金箱にしまっていた領収書には、同じ代表の署名がある。"],"매달 열여섯 개까지는 지금 내는 운임으로 보낼 수 있습니다. 열일곱 개째부터 하나에 3파운드씩 더 들지요. 연말까지 네 자리만 미리 사 두시면 스무 개까지 웃돈을 아낄 수 있습니다.":
["Our present rate covers sixteen items a month. From the seventeenth onwards, each costs an extra three pounds. If you reserve four more places through the end of the year, we can send up to twenty a month without the surcharge.","今の運賃で運べるのは月に十六個まで。十七個目からは一個につき三ポンドの割増です。年末まで四個分の場所を先に押さえておけば、月に二十個までは割増なしで送れます。"],"여덟 번째 판에서 클럽의 막내가 푸른 카드 한 장을 내고 말을 성안으로 옮겼다. 클럽의 대국 기록에는 첫 승자의 이름이, 그 아래에는 열쇠를 보내 준 팬텀사의 이름이 적혔다.":
["In the eighth game, the club’s youngest member played a blue card and moved a piece into the castle. Below the name of its first winner, the club recorded Funtom as the company that had sent the key.","八局目、クラブ最年少の子が青い札を出して駒を城へ進めた。対局帳には初勝者の名と、その下に鍵を贈ったファントム社の名が記された。"],"편집용 ZIP을 Windows PC에서 압축 해제하고 Play-on-phone.cmd를 실행하세요. 같은 Wi-Fi에 연결한 휴대폰의 Safari 또는 Chrome에서 PC에 표시된 주소를 열면 됩니다. PC에 Python 3이 필요합니다.":
["On a Windows PC with Python 3 installed, extract the editable ZIP and run Play-on-phone.cmd. Connect your phone to the same Wi-Fi network, then open the address shown on the PC in Safari or Chrome on your phone.","Python 3をインストールしたWindows PCで編集用ZIPを展開し、Play-on-phone.cmdを実行してください。スマートフォンを同じWi-Fiに接続し、PCに表示されたアドレスをスマートフォンのSafariかChromeで開いてください。"],"경찰이 두 완구점에서 같은 상회의 장난감을 거둬 갔다. 속에 마약이 들어 있었다. 다행히 아이에게 팔린 것은 아직 없었다. 두 가게에서 그 완구가 놓였던 자리는 팬텀사 제품 바로 옆이었다.":
["Police seized toys from the same supplier at two toy shops. Inside were narcotics. Fortunately, none had been sold to children. In both shops the toys had been displayed right beside Funtom’s.","警察が二軒の玩具店で同じ商会の玩具を押収した。中には麻薬が入っていた。幸い、子供に売れた品はまだない。二軒とも、その玩具はファントム社の品のすぐ隣に並んでいた。"],"관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다.":
["Select a room on the Estate & Company map to inspect the facilities and staff assignments. Before ordering renovations, do check the cost and this month's upkeep. Should you care for a snack, I shall escort you to the Shop in the estate menu.","屋敷・会社経営」の地図で部屋をお選びいただくと、設備と使用人の持ち場をご覧になれます。改修をお命じになる前に、費用と今月の手入れの状況をお確かめください。おやつをご所望でしたら、屋敷メニューの「店」へご案内いたします。"],"종이표가 자두인 병에서는 검은까치밥 향이 났다. 주인은 그제야 두 병을 씻던 날의 이야기를 꺼냈다. 물에 젖을까 봐 종이표를 떼어 한데 두었다고.":
["The jar labelled ‘Plum’ smells of blackcurrant. Only then does the owner mention washing the jars. To keep the labels dry, he took them off and laid them together.","「すもも」の瓶から黒すぐりの香りがする。そこで初めて主人は瓶を洗った日のことを話した。濡らさないよう、紙札を外して一緒に置いたのだという。"],"‘관리 · 경영’에서 ‘팬텀 사(社)’를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다.":
["Open Funtom under Estate & Company. Choose a product in the development room, set the quantity in the workshop and the price in the shop. If funds look a little short for tuition, I would suggest a smaller production run this month.","「屋敷・会社経営」から「ファントム社」をお開きください。開発室で商品を、製作室で数量を、販売店で価格をお決めください。授業料が不足しそうでしたら、今月の生産数を少し抑えるのがよろしいかと。"],"‘관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다.":
["Select a room on the Estate & Company map to inspect the facilities and staff assignments. Before ordering renovations, do check the cost and this month's upkeep. Should you care for a snack, I shall escort you to the Shop in the estate menu.","「屋敷・会社経営」の地図で部屋をお選びいただくと、設備と使用人の持ち場をご覧になれます。改修をお命じになる前に、費用と今月の手入れの状況をお確かめください。おやつをご所望でしたら、屋敷メニューの「店」へご案内いたします。"],"봉투에는 보증서가 없고 부러진 나무 바퀴가 하나 들었습니다. 답장은 그림으로 부탁한다는군요. 수레의 임자인 동생이 아직 글을 모른답니다. 같은 축을 쓴 수레가 여섯 상자 나갔습니다.":
["There was no guarantee in the envelope, only a broken wooden wheel. The writer asks that we draw our reply. The cart belongs to a younger sibling who cannot yet read. We have sent out six crates of carts fitted with the same axle.","封筒には保証書の代わりに、折れた木の車輪が一つ。返事は絵でお願いしたいそうです。荷車の持ち主は手紙を書いた子の弟か妹で、まだ字が読めないのだとか。同じ車軸を使った荷車を、すでに六箱出荷しております。"],"시엘이 영수증 옆에 출납장을 펴 놓았다. 손님은 제 서명부터 손바닥으로 가렸다. 줄을 선 사람들이 슬쩍 길을 터 주었다. 나갈 때는 바로 뒤에 선 점원조차 그 목소리를 못 들었다.":
["Ciel opened the cashbook beside the receipt. The customer’s first move was to cover his own signature with his palm. The queue quietly made way. As he left, even the clerk right behind him could not hear a word he said.","シエルが領収書の横に出納帳を広げると、客は真っ先に自分の署名を手のひらで覆った。列に並んだ人々がそっと道を空けた。去り際には、すぐ後ろの店員にすらその声は聞こえなかった。"],"아이는 계산대에 O, R, A를 나란히 놓고 맨 앞을 한 칸 비워 뒀다. 도라는 제 이름을 보여 주고 싶었는데, 상자에 D가 없다고 했다. 점원은 집에 가서 잘 찾아보라고 했다.":
["The child laid O, R and A on the counter, leaving one space at the front. Dora wanted to show them her name, she said, but there was no D in the box. The clerk told her to go home and look properly.","子供は勘定台にO、R、Aと並べ、その前を一文字分空けておいた。自分の名前を見せたかったのに箱にDがないのだと、ドーラは言った。店員は、家に帰ってよく探すようにと答えた。"],"엘런은 제 이름이 적힌 리본을 반듯이 개어 앞치마 주머니에 넣고 있었다. 시엘은 좌석표의 숟가락 옆에 그 이름을 적어 보냈다. 이번에는 주최자가 직접 주방으로 내려갔다.":
["Ellen neatly folded the ribbon bearing her name and slipped it into her apron pocket. Ciel wrote her name beside the spoon on the seating plan and sent it back. This time the host went down to the kitchen in person.","エレンは名入りのリボンをきちんと畳み、前掛けのポケットにしまった。シエルは席次表の匙の隣に彼女の名を書いて返した。今度は主催者自ら厨房に下りていった。"],"서기가 상회의 추천서와 자선회에 보관된 편지를 나란히 놓았다. 추천서는 자선회 소장 원본을 베낀 것이었다. 원본에는 용도가 ‘작년 연회 감사 인사’라고 적혀 있다. 추천서에는 그 끝 줄만 빠졌다.":
["The secretary laid the firm’s letter of recommendation beside a letter in the charity’s files. The recommendation had been copied from the charity’s original. Its purpose was given as ‘Thanks for last year’s banquet’. Only that last line was missing from the recommendation.","書記が商会の推薦状と慈善会の保管する手紙を並べた。推薦状は慈善会所蔵の原本を書き写したものだ。原本には「昨年の晩餐会の礼状」と用途が記されている。推薦状には、その最後の一行だけがない。"],"시엘은 임금 봉투를 서랍에 밀어 넣었다. 그 돈이면 세 벌의 값을 치를 수야 있겠지. 그러고도 물건이 어디로 갔는지는 모를 테고. 오늘 아침에 처음 열쇠를 받아 간 사람부터 부르게 했다.":
["Ciel pushed the pay envelope into the drawer. That money would pay for the three sets, certainly. And they would still have no idea where the goods had gone. He sent for the first person who had collected the key that morning.","シエルは給金袋を引き出しに押し込んだ。この金で三組分の代金は払えるだろう。それで品の行方が分かるわけでもない。今朝いちばんに鍵を受け取りに来た者から呼ばせた。"],"문을 닫기 직전이었다. 손님은 반으로 접은 영수증을 계산대에 펴 놓고, 완구 하나를 돌려주는 데 대체 몇 번을 와야 하느냐고 물었다. 길 건너에서도 대답할 수 있을 만한 목소리였다.":
["It was nearly closing time. A customer unfolded a receipt on the counter and demanded to know how many visits it took to return one toy. Someone across the street could easily have answered him.","もうじき閉店という頃だった。客は二つ折りの領収書を勘定台に広げ、玩具一つ返すのにいったい何度通えばいいのかと尋ねた。通りの向こうからでも返事ができそうな声だった。"],"호텔 주인이 손가락으로 짚어 가며 선물을 세었다. 열하나. 검수인은 상자를 받을 때도 그렇게 하나씩 짚었으며, 자기 손가락으로 센 건 틀림없이 열둘이었다고 했다. 귀까지 벌겋게 달아올라 있었다.":
["The hotelier counted the gifts, touching each one. Eleven. The receiving clerk said he had done just that when the boxes arrived, and he had counted twelve with his own fingers. Even his ears had gone red.","ホテルの主人が一つずつ指さして贈り物を数えた。十一個。検品係は、箱を受け取った時もそうやって指で数えた、自分の指で確かに十二個数えたと言った。耳まで真っ赤だった。"],"백화점에서 봉제 토끼를 한 줄 통째로 돌려보냈다. 나란히 앉혀 놓으니 모조리 왼쪽 귀를 늘어뜨리고 있었다. ‘진열대가 낮잠 시간의 보육원 같습니다.’ 담당자가 동봉한 쪽지였다.":
["The department store returned a whole row of stuffed rabbits. Seated side by side, every one of them had a drooping left ear. ‘Our display looks like a nursery at nap time,’ read the buyer’s note.","百貨店からぬいぐるみのウサギが一列まるごと返品された。並べて座らせると、どれも左耳が垂れている。「売り場が昼寝時の託児所のようです」。係の者の添え書きだった。"],"지나간 사건은 아래의 ‘가문 장부’에 적어 두었습니다. ‘저장 · 설정’에서는 저장 칸과 음량을 고르실 수 있습니다. 음악만 잠시 끄시려면 BGM 버튼을, 돌아가시려면 ‘뒤로’를 눌러 주십시오.":
["I have recorded past events in the Family Ledger below. Under Save & Settings you may choose a save slot or adjust the volume. To silence the music for a while, press BGM. To return, press Back.","これまでの出来事は下の「家の帳簿」に記してございます。「セーブ・設定」ではセーブ枠と音量をお選びいただけます。音楽だけしばらくお止めになるにはBGMボタンを、お戻りになるには「戻る」をお押しください。"],"‘관리 · 경영’에서 ‘팬텀 사(社)’를 엽니다. 개발실에서 상품을 개발하고, 제작실에서 생산량을, 판매점에서 판매가를 정합니다. ‘이달 자금 예상’에서 수업료를 포함한 월말 잔액을 확인할 수 있습니다.":
["Open Funtom under Estate & Company. Develop products in the development room, set production quantities in the workshop and retail prices in the shop. Monthly forecast shows your estimated closing balance after tuition.","「屋敷・会社経営」から「ファントム社」を開きます。開発室で商品を開発し、製作室で生産数を、販売店で価格を決めます。「今月の資金予測」で授業料込みの月末残高を確認できます。"],"점원이 D를 건네자 도라는 그 패를 맨 앞에 놓고 제 이름을 큰 소리로 읽었다. 구경하던 손님들이 한 번 더 읽어 달라고 했다. 그사이 시엘은 같은 날 포장한 상자들이 어디로 갔는지 주소를 받아 적었다.":
["When the clerk handed Dora a D, she put it at the front and read her name aloud. The onlookers asked her to read it again. Meanwhile, Ciel took down the addresses where the other boxes packed that day had gone.","店員がDの札を渡すと、ドーラはそれを先頭に並べ、自分の名を声に出して読んだ。客たちがもう一度とせがむ間に、シエルは同じ日に詰めた箱の送り先を控えた。"],"하단의 ‘가문 장부’에는 지난 사건과 엔딩이 기록됩니다. ‘저장 · 설정’에서 회차를 저장하거나 불러오고 음량을 조절할 수 있습니다. 하단의 BGM 버튼을 누르면 배경음악이 켜지거나 꺼집니다.":
["The Family Ledger at the bottom records past events and endings. Use Save & Settings to save or load a playthrough and adjust the volume. The BGM button at the bottom toggles the background music.","下部の「家の帳簿」には過去の出来事とエンディングが記録されます。「セーブ・設定」から周回データの保存・読み込み、音量調整ができます。下部のBGMボタンで背景音楽をオン・オフできます。"],"밤새 바람이 온실 유리를 한 줄 걷어 갔다. 깨진 유리는 서른두 칸이었다. 시엘의 아침 식탁에는 꽃 한 송이와 그 서른두 칸에 들어갈 유리값을 적은 유리공의 청구서가 나란히 놓였다.":
["Overnight the wind tore a row of panes from the greenhouse. Thirty-two were broken. At breakfast Ciel found a single flower beside the glazier’s bill for all thirty-two.","夜の風が温室のガラスを一列さらっていった。割れたのは三十二枚。シエルの朝食の席には花が一輪と、三十二枚分のガラス代を記した請求書が並んでいた。"],"가문 장부에서 왕실의 반응을 살펴보세요. 마지막 해에는 응용 실기를 마친 과목을 다시 수강해 여러 분야의 최종 실기를 통과하세요. 왕실은 꾸준한 영업 흑자와 채무를 갚고 남긴 자금도 함께 살핍니다.":
["Check the Family Ledger to see what the Crown thinks. In the final year, return to subjects in which you have passed the applied practical and sit the final practical exam in several fields. The Crown also considers whether the business consistently makes an operating profit and how much cash remains after the debt is repaid.","家の帳簿で王室の反応を確かめましょう。最終年には応用実技を終えた科目を再履修し、複数分野の最終実技に合格しましょう。王室は継続して営業黒字を出しているか、借金を返したあと資金がどれだけ残っているかも見ています。"],"영지 학교의 음악실에 비가 샌답니다. 선생님이 보낸 그림에는 피아노 건반 위에 찻잔이 줄지어 있더군요. 개학 전에는 수리공의 일정이 한 주 비는데, 마침 그 주에는 저희 응접실에도 손님이 없습니다.":
["The music room at the estate school has a leak. In the teacher’s drawing, teacups stand in a row on the piano keys. The roofer has a week free before term begins. As it happens, we expect no visitors in the drawing room that week either.","領地の学校の音楽室で雨漏りがするそうです。先生が送ってくださった絵には、ピアノの鍵盤にずらりとティーカップが並んでおりました。新学期までに屋根職人の手が一週間空きます。折よく、その週は当家の応接間にも来客の予定がございません。"],"왼쪽 아래 ‘일정표’에 상순·중순·하순 세 칸을 마련했습니다. 쉬고 나면 다음 수업에 집중하기 쉽습니다. 바꾸실 칸을 먼저 짚고 활동을 고르시면 제가 적겠습니다. £ 옆의 숫자가 그 비용입니다.":
["The Schedule at the lower left has three spaces, one for each third of the month. A little rest will help you concentrate on your next lesson. Select the space you wish to change, then the activity, and I shall enter it for you. The figure beside the £ sign is the cost.","左下の「予定表」に上旬・中旬・下旬の三枠をご用意いたしました。お休みのあとは、次の授業にも集中しやすくなります。変更する枠に触れ、活動をお選びください。私が書き入れます。£の隣の数字が費用でございます。"],"저녁 기차를 타는 손님은 역 앞 매점에서 매번 검은까치밥 사탕을 찾았고, 매번 빈손으로 갔다. 매점 주인의 걱정은 조금 달랐다. 장부를 펼 때마다 그 맛만 고스란히 남아 있다는 것이다.":
["Whenever he took the evening train, the same passenger asked for blackcurrant sweets at the station kiosk. Each time he left empty-handed. The owner had a rather different worry. Every time he checked his books, not a single blackcurrant sweet had been sold.","夕方の列車に乗る客は、駅前の売店でいつも黒すぐりの飴を尋ね、いつも手ぶらで帰った。売店の主人の悩みは少し違った。帳簿を開くたび、その味だけが丸々売れ残っているのだ。"],"팬텀사가 완구를 빌려준 자선 공연에는 빈자리가 하나도 없었다. 막이 내리고 돈을 세어 본 극장주는 출입구 직원을 불러 세웠다. 표 값이 반밖에 없으니 누군가 동전함에 손을 댄 게 틀림없다고 했다.":
["There wasn’t an empty seat at the benefit performance for which Funtom had lent its toys. When the curtain fell, the theatre owner counted the takings and called the doorkeeper over. Only half the ticket money was there. Someone must have had a hand in the cashbox, he said.","ファントム社が玩具を貸した慈善公演は満席だった。幕が下り、金を数えた劇場主は入口係を呼び止めた。切符代が半分しかない。誰かが金箱に手をつけたに違いない、と。"],"명하신 대로 준비했습니다. 저택의 ‘실행’이나 일정표의 ‘이달 일정 실행’을 고르시면 상순부터 시작하겠습니다. 매 순의 성과는 제가 보고드리겠습니다. 하순 강평 뒤에는 정해 두신 곳을 방문하고, 돌아오시면 결산을 보고드리겠습니다.":
["Everything is ready, as you ordered. Select Begin at the manor or Begin the month on the schedule, and we shall start with the first period. I shall report on your progress after each activity. After the last assessment we shall visit the place you have chosen. When you return, I shall present the month’s accounts.","仰せのとおり、準備は整いました。屋敷の「開始」か予定表の「今月の予定を開始」をお選びいただければ、上旬から始めます。各旬の成果は私からご報告いたします。下旬の講評のあとはご指定の場所を訪ね、お戻りになりましたら決算をご報告いたします。"],"세 순의 활동과 자유행동을 정한 뒤 ‘이달 일정 실행’을 누릅니다. 저택 메인 화면의 ‘실행’으로도 시작할 수 있습니다. 상순부터 차례로 성과를 확인하고, 하순이 끝나면 선택한 방문지를 거쳐 월말 결산을 봅니다.":
["Choose activities for all three periods and your free time, then select Begin the month. You can also select Begin on the estate screen. Review each period's results in order. After the final period, you'll visit your chosen destination and see the month-end accounts.","上旬・中旬・下旬の活動と自由行動の行き先を決め、「今月の予定を開始」を押します。屋敷のメイン画面の「開始」からも始められます。上旬から順に成果を確認しましょう。下旬が終わると、選んだ場所を訪ねてから月末の決算を確認します。"],"저녁 기차가 들어올 무렵, 그 손님이 처음으로 사탕을 샀다. 한 봉지는 자기 몫이었고, 다른 한 봉지는 딸아이 몫이었다. 그 뒤로 주인은 병을 닦을 때 한 병을 다 닦고 표까지 붙여야 다음 병에 손을 댔다.":
["As the evening train pulled in, the passenger bought his sweets for the first time. One bag for himself, one for his daughter. From then on the owner washed one jar and put its label back before he touched the next.","夕方の列車が入る頃、その客は初めて飴を買った。一袋は自分に、もう一袋は娘に。それから主人は、瓶を一つ洗って札を貼り直してから次の瓶に手を伸ばすようになった。"],"시엘이 좌석표에 흰 표를 한 장씩 놓았다. 쉰 자리를 덮고 나니 남은 자리의 표 값은 돈통과 꼭 맞았다. 극장주는 직원을 곁에 세운 채 제 손으로 장부를 고쳤다. 아이들 쉰 명은 그날 공짜로 공연을 보았다. 애초에 그러기로 한 저녁이었다.":
["Ciel laid the white tickets on the seating plan one by one. Fifty seats covered, the price of the rest matched the cashbox exactly. With the doorkeeper beside him, the theatre owner corrected the ledger in his own hand. Fifty children had seen the show for nothing that evening, just as intended.","シエルは席次表に白い切符を一枚ずつ置いた。五十席を覆うと、残りの席の代金は金箱の額とぴたり合った。劇場主は入口係を傍らに立たせ、自分の手で帳簿を直した。その晩、五十人の子どもが無料で芝居を見た。初めから、そういう約束の晩だった。"],"시엘이 원본의 마지막 한 줄을 읽고 두 완구상이 영수증을 한 장씩 폈다. 대표는 입을 다물었다. 상회를 내세웠던 마피아 일당이 경시청에 연행될 때까지 기자들은 자리를 지켰다. 일당이 직접 부른 기자들이었다. 이튿날 두 가게의 창에는 시엘이 서명한 회수 공고가 나붙었다.":
["Ciel read out the last line of the original, and the two toy dealers unfolded their receipts. The representative fell silent. The reporters stayed until Scotland Yard led away the gang that had used the firm as a front. The gang had invited the press themselves. Next day both shops posted recall notices signed by Ciel in their windows.","シエルが原本の最後の一行を読み上げ、二人の玩具商が一枚ずつ領収書を広げた。代表は黙り込んだ。商会を隠れ蓑にしていたマフィアの一味がロンドン警視庁に連行されるまで、記者たちは席を立たなかった。一味が自ら招いた記者だった。翌日、両店の窓にはシエルの署名入りの回収告知が貼り出された。"],"배경 음악":
["Background music","BGM"],"런던의 사업가":
["London Entrepreneur","ロンドンの実業家"],"······.":
["…","……"],"준비":
["Preparation","準備"],"고급":
["Advanced","上級"],"기본":
["Basic","基礎"],"성공":
["Success","成功"],"사용인":
["Servants","使用人"],"가문":
["House","家門"],"음악":
["Music","音楽"],"멈춤":
["Pause","一時停止"],"초급":
["Beginner","初級"],"중급":
["Intermediate","中級"],"가든파티":
["Garden Party","ガーデンパーティー"],"결과":
["Result","結果"],"위험":
["At risk","危険"],"평온":
["Calm","平穏"],"일정":
["Schedule","予定"],"심사점수":
["Judges’ score","審査得点"],"빈 칸":
["Empty","空き"],"상순 활동을 선택하세요.":
["Choose an activity for early in the month.","上旬の予定を選んでください。"],"중순 활동을 선택하세요.":
["Choose a mid-month activity.","中旬の予定を選んでください。"],"하순 활동을 선택하세요.":
["Choose an activity for late in the month.","下旬の予定を選んでください。"],"표준":
["Standard","標準"],"경연":
["Competition","大会"],"재생":
["Play","再生"],"신년제":
["New Year Festival","新年祭"],"이스터 가든파티":
["Easter Garden Party","イースター・ガーデンパーティー"],"로열 워런트":
["Royal Warrant","ロイヤルワラント"],"도련님":
["My lord","坊ちゃん"],"초대장":
["Invitation","招待状"],"상점 상품":
["Shop inventory","店の商品"],"아직 마구간에 있습니다, 왕자님.\n손님, 봉투만 전해 드려도 되겠습니까?":
["It's still in the stables, Your Highness.\nSir, shall I see that your letter reaches him?","まだ厩にございます、ソーマ様。\nお客様、お手紙でしたら私がお届けしましょうか？"],"눈치가 좋은 줄 알았는데, 의외의 것을 묻네.\n시엘이 반대쪽 손도 내민다.":
["I thought you rather observant. What an odd thing to ask.\nCiel holds out his other hand as well.","気が利くと思っていたのに、妙なことを聞くな。\nシエルはもう片方の手も差し出す。"],"잠깐. 둘이서 멋대로 정하지 마. 난 안 해.\n사람 죽이던 손으로 메이드 일을 어떻게 하라고.":
["Hold on. You two don't get to decide for me. I won't do it.\nI've killed people with these hands. How am I supposed to be a maid?","ちょっと待ちな。二人で勝手に決めるんじゃないよ。あたしはご免だ。\n人を殺してきたこの手で、どうやってメイドをやれっていうのさ。"],"설탕은 하나. 그래, 오늘도 그걸로.\n시엘이 서류에서 눈을 떼지 않고 잔을 받는다.":
["One lump. Yes, the usual.\nCiel takes the cup without looking up from his papers.","砂糖は一つ。ああ、今日もそれでいい。\nシエルは書類から目を離さずにカップを受け取る。"],"그때는 그것이 무슨 말인지 알 수 없었다.\nS-012에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까.":
["At the time, he didn't understand the question.\nCiel was the first person ever to ask S-012 for his name instead of his number.","その時は、何を聞かれたのかわからなかった。\nS-012に番号ではなく名前を尋ねたのは、シエルが初めてだったからだ。"],"손님은 저녁상에 오른 요리로도 그 집을 평합니다. \n팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다.":
["A house is judged in part by the dinner it sets before its guests, my lord.\nIf you are to restore the Phantomhive name, you will need a chef.","晩餐にどのような料理が並ぶかも、お客様がその家を見定める基準の一つでございます。\nファントムハイヴ家の名声を取り戻すには、料理長が必要でございます。"],"먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?\n주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요.":
["How can you tell before you've even picked up a feather duster?\nRidding your master of nuisances must, after all, be familiar work.","はたき一本手に取る前から、どうしてそう言い切れるのです？\n主人の目障りなものを片づけるお仕事なら、さぞお慣れでしょう。"],"애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.\n이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요.":
["It was not for his cooking that I brought him here, my lord.\nIn a house of this size, I can scarcely be the only senior servant.","そもそも、この方をお連れしたのは料理の腕を買ってのことではございません。\nこれほどのお屋敷で、上級使用人が私一人というわけにもまいりませんので。"],"도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.\n구인 광고를 내도 좀처럼 찾기 힘들겠지요.":
["She has the skill to protect you, my lord, and is in no position to betray you. You have tested her abilities yourself.\nYou would be hard pressed to find such a candidate by advertising for one.","坊ちゃんをお守りする腕があり、裏切ることもできない立場の方です。その力量は坊ちゃんご自身がお確かめになりました。\n求人広告を出したところで、そうそう見つかる人材ではございませんよ。"],"책갈피는 그대로 둬. 범인의 이름을 보기 직전이니까.":
["Leave the bookmark there. I’m just about to find out the culprit’s name.","栞はそのままにしておけ。もう少しで犯人の名前が分かるんだ。"],"비가 그쳤군. 마차를 부르기엔 아직 일러.":
["The rain’s stopped. It’s too early to send for the carriage, though.","雨が上がったな。馬車を呼ぶにはまだ早い。"],"거기 흰 나이트 좀 건네줘. 아직 외통수는 아니야.":
["Pass me the white knight. It isn’t mate yet.","そこの白のナイトを取ってくれ。まだ詰みじゃない。"],"내 잉크를 또 옮겼나? 오른손을 뻗으면 닿는 자리가 좋다고 했잖아.":
["Have you moved my ink again? I wanted it within reach of my right hand.","またインクを動かしたのか？　右手の届く所がいいと言っただろう。"],"그 편지는 맨 위에 둬. 답장을 기다리는 쪽에도 사정이 있을 테니.":
["Put that letter on top. Whoever’s waiting for an answer must have a reason.","その手紙は一番上に。返事を待つ方にも事情があるだろう。"],"오늘 과자는 몇 개지? …아니, 손님 수를 확인하려는 거야.":
["How many cakes are there today? …I’m checking how many guests we expect, that’s all.","今日の菓子はいくつだ？　……いや、客の数を確かめているだけだ。"],"빈 봉투는 버리지 마. 안쪽은 계산지로 쓸 수 있어.":
["Keep the empty envelopes. I can do my sums on the inside.","空の封筒は捨てるな。内側は計算用紙に使える。"],"새 촛대는 다음 달로 미뤄. 초는 지금 것도 반이나 남았어.":
["The new candlesticks can wait a month. These candles have half their length left.","新しい燭台は来月に回せ。今の蝋燭だってまだ半分ある。"],"체스판을 펼친다":
["Set out the chessboard","チェス盤を広げる"],"체스 한 수":
["A move at chess","チェスの一手"],"흑은 내 거야. 백을 잡았으면 네가 먼저 둬.":
["I’m playing Black. You have White, so it’s your move.","黒は僕だ。白を持ったなら、お前から指せ。"],"그럼 이 폰을 두 칸 앞으로. 제 손보다 판을 보시는 편이 좋을 겁니다, 도련님.":
["Then I shall advance this pawn two squares. You might do well to keep your eye on the board, my lord, rather than on my hand.","では、このポーンを二つ前へ。坊ちゃん、私の手元より盤上をご覧になった方がよろしいかと。"],"나이트를 가리킨다":
["Point to the knight","ナイトを指す"],"그쪽을 보라고? 네가 그렇게 친절할 때는 반대편을 보는 게 낫더군.":
["You want me to look there? When you’re this helpful, I usually find it pays to look the other way.","そっちを見ろと？　お前がそこまで親切な時は、反対側を見た方がいい。"],"서신의 인장을 살핀다":
["Examine a letter’s seal","手紙の封蝋を調べる"],"봉랍의 흔적":
["The wax seal","封蝋の跡"],"인장이 거꾸로 찍혔어. 답장을 쓰기 전에 지난 편지를 가져와.":
["The seal’s upside down. Fetch the last letter before I write back.","印が逆さだ。返事を書く前に、前の手紙を持ってこい。"],"여기 있습니다. 두 통을 나란히 놓으니, 도련님께서도 어느 손으로 눌렀는지 보이시겠지요?":
["Here it is. With the two side by side, can you tell which hand pressed the seal, my lord?","こちらに。二通を並べれば、どちらの手で押したのか、坊ちゃんにもお分かりでしょう？"],"두 편지를 빛에 비춘다":
["Hold both letters to the light","二通を明かりに透かす"],"종이도 달라. 인장을 빌린 건지 훔친 건지는 아직 모르겠군.":
["The paper’s different, too. Whether they borrowed the seal or stole it remains to be seen.","紙も違う。印章を借りたのか盗んだのかは、まだ分からないな。"],"마차 노선을 의논한다":
["Discuss the carriage route","馬車の道順を相談する"],"런던의 길":
["The streets of London","ロンドンの道"],"다리를 건너지 말고 강을 따라가. 조금 돌아도 공장이 문을 열 때 도착할 수 있어.":
["Follow the river instead of crossing the bridge. Even with the detour, we’ll reach the factory when it opens.","橋は渡らず、川沿いを行け。少し遠回りでも、工場が開く頃には着ける。"],"그럼 마부에게 그렇게 전하지요. 돌아오는 길도 같은 길로 잡을까요?":
["I shall tell the coachman. Shall I have him take the same road on our return?","では御者にそう伝えましょう。お帰りも同じ道でよろしいですか？"],"귀갓길을 지도에 짚는다":
["Trace the return route","地図で帰り道を示す"],"돌아올 때는 시장을 거쳐. 우리 완구가 어느 창가에 놓였는지 직접 볼 거야.":
["Come back through the market. I want to see which shops have our toys in the window.","帰りは市場を通れ。うちの玩具がどの店の窓に並んでいるか、自分で見る。"],"세바스찬은 곱게 접힌 안대를 받았다. ":
["Sebastian accepted the neatly folded eyepatch.","セバスチャンは丁寧に畳まれた眼帯を受け取った。"],"(더 깎일 체면이 있을까요?) ":
["(I wonder how much dignity there is left to lose.)","（これ以上、失うほどの面目がおありでしょうか？）"],"시엘, 오늘은 내가 먼저 손 내밀어도 되지? ":
["Ciel, may I offer you my hand first today?","シエル、今日は私から手を差し出してもいい？"],"오늘 고른 리본, 시엘이 보면 너무 화려하다고 했을 텐데…. ":
["The ribbon I picked today… Ciel would have said it was too showy.","今日選んだリボン、シエルが見たら派手すぎるって言ったでしょうね……。"]," 배우셔야 할 것이 산더미처럼 쌓여 있습니다.":
["You have a great deal to learn.","お学びいただくことは山ほどございます。"],"그럼 그 책은 조금만 놓아 주시겠습니까. ":
["Now, would you loosen your hold on that book just a little?","では、その本を抱く手を、少々緩めていただけますか。"]," 시엘이 몸을 일으키기도 전에 은제 찻주전자가 그의 앞을 가로막았다.":
["Before Ciel could sit up, a silver teapot swung in front of him.","シエルが身を起こすより早く、銀のティーポットが目の前に差し出された。"],"예. 그런데 저희는 사람이 모자라고, 피니 혼자서 저택 일을 전부 맡을 수도 없지요. ":
["Indeed. We are short of staff, and Finny can hardly manage the entire household on his own.","ええ。何しろ人手不足ですし、フィニひとりに屋敷の仕事をすべて任せるわけにもまいりません。"],"세바스찬이 올빼미 앞에 몸을 낮췄다. ":
["Sebastian crouched in front of the Owl.","セバスチャンは梟の前で身をかがめた。"],"어서 와, 할아범. 거기 앉아. ":
["Welcome back, old man. Take a seat.","おかえり、じいや。そこに掛けてくれ。"],"스코틀랜드 야드가 단원들을 데려간 뒤였다. 조커의 짐 속에 마른 분 냄새가 밴 편지 한 통이 남아 있었다. ":
["Scotland Yard had taken the troupe away. Among Joker's things was a letter that smelled faintly of face powder.","スコットランドヤードが団員たちを連れていった後だった。ジョーカーの荷物の中に、乾いたおしろいの匂いが染みついた手紙が一通、残されていた。"],"시엘한테 볼일 있어? 오늘은 본저택에 있는데. ":
["You're looking for Ciel? He's at the manor today.","シエルに用か？　今日は本邸にいるぞ。"]," 첫 장에는 잡혀간 단원들의 명단이, 그 뒤에는 아이들이 사라진 날짜와 서커스의 순회 일정이 나란히 적혀 있었다.":
["The first page listed the troupe members taken into custody. The pages that followed set the dates of the children's disappearances alongside the circus's tour dates.","最初のページには連行された団員の名が並び、その後には子供たちが姿を消した日付とサーカスの巡業日程が並べて記されていた。"],"런던 이스트엔드. 시엘과 세바스찬이 골목을 돌아서자, 일거리를 기다리던 인도인 사내 몇이 둘을 에워쌌다. ":
["In London's East End, Ciel and Sebastian turned a corner. Several Indian men waiting for work in the alley closed in around them.","ロンドンのイーストエンド。シエルとセバスチャンが路地を曲がると、仕事を待っていたインド人の男たちが二人を取り囲んだ。"],"아그니, 저기 봐! 영국 귀족에다 집사까지 있잖아. ":
["Agni, look! An English nobleman, and he's even got a butler with him!","アグニ、あれを見ろ！　英国の貴族だ、執事まで連れてるぞ！"],"사내의 손이 시엘의 깃에서 떨어졌다. ":
["The man's hand fell from Ciel's collar.","男の手がシエルの襟から離れた。"],"잠깐, 너희가 봤다는 건 어디부터지? ":
["Wait. At what point did you start watching?","待て。お前たち、いったいどこから見ていた？"],"소란이 가라앉았을 때 골목의 사내들은 하나같이 바닥에 뻗어 있었다. ":
["By the time things quietened down, every one of the men from the alley lay sprawled on the ground.","騒ぎが収まった時には、路地の男たちは全員、地面に伸びていた。"],"왕자님께서 신세를 지시는 집이지 않습니까. ":
["But this household has shown my prince such hospitality.","ソーマ様がお世話になっているお屋敷ですから。"],"대신!! ":
["On one condition!","ただし！"],"소마가 열쇠를 받자마자 아그니와 손님 명부를 펼쳤다. ":
["The moment Soma had the key in his hand, he and Agni opened the visitors' register.","鍵を受け取るやいなや、ソーマはアグニと一緒に来客名簿を開いた。"]," 내일 아침은 본저택에서 먹어야겠어.":
["I’ll have breakfast at the manor tomorrow.","明日の朝食は本邸で取るとしよう。"]," · 상금 ":
[" · Prize money ","・賞金 "]," 수요 +":
[" demand +","の需要 ＋"]," 통과":
[" passed"," 合格"]," 보충":
[" · further practice"," 補習"],"고급 · ":
["Advanced · ","上級・"]," 이상":
[" or higher","以上"]," · 가문 명성 +":
[" · Family reputation +"," · 家の名声 +"],"컨디션 ":
["Condition ","体調 "],"스트레스 ":
["Stress ","ストレス "],"의욕 ":
["Motivation ","意欲 "],"가문 명성 ":
["Family reputation ","家の名声 "]," 상승":
[" increase","上昇"]," 하락":
[" decrease","低下"],"병환 · ":
["Illness · ","病気 · "]," 예정":
[" planned","の予定"],"개 소매 · 매출 ":
[" sold at retail · Revenue ","個を小売販売 · 売上 "]," / 생산비 ":
[" / Production costs "," / 製造費 "]," / 재고 ":
[" / Stock "," / 在庫 "],"저택 유지·채무 상환 ":
["Estate upkeep and debt repayments ","屋敷の維持費・借入返済 "],"수익 분담금 ":
["Profit contribution ","利益分担金 "],"라우 상점 재고 매각 ":
["Stock sold to Lau's shop ","劉の店への在庫売却 "],"라우 상점 중고 교본 매각 ":
["Used manuals sold to Lau's shop ","劉の店への古い教本の売却 "]," 납품 ":
[" · Delivered "," · 納品 "],"개 · ":
[" units · ","個 · "]," · 미납 부담금 ":
[" · Shortfall penalty "," · 未納分の負担金 "]," 합류":
[" joined","が加入"]," 방문 가능":
[" available to visit","を訪問可能"]," 판매 가능":
[" available for sale","を販売可能"]," · 앞 수업 응용":
[" · Applied the previous lesson"," · 前の授業を応用"]," · 추천 수업: ":
[" · Recommended lesson: "," · おすすめの授業： "]," · 각 분야 한 과목의 실기 합격 뒤 같은 과목 2회 수강":
[" · Pass a practical in one subject in each field, then take that subject twice more"," · 各分野で1科目の実技に合格し、同じ科目をさらに2回受講"],"판매·납품 흑자 ":
["Profitable months from retail and deliveries: ","小売・納品の黒字月数："]," 활동을 선택하세요.":
[" · Choose an activity.","の活動を選んでください。"]," 활동 목록":
[" activities","の活動一覧"],"필요 조건 · ":
["Requirements · ","必要条件 · "],"런던의 사업가로 자리 잡았습니다. ":
["Ciel has established himself as a businessman in London.","シエルはロンドンの実業家として身を立てました。"],"정보상의 연락망을 얻었습니다. ":
["Ciel has secured a network of informants.","シエルは情報屋の連絡網を手に入れました。"],"마차를 타고 옛 흔적을 좇습니다. ":
["Ciel takes a carriage to follow a trail from the past.","シエルは馬車に乗り、過去の足跡をたどります。"],"은 다음 겨울에도 도련님의 지시를 따르겠다고 전했습니다. ":
[" pledged to follow the young master's orders next winter as well. ","は来年の冬も坊ちゃんの指示に従うと伝えました。"],"가장 단련된 능력은 ":
["Ciel's strongest attribute was ","最も鍛えられた能力は"],"이었습니다. 팬텀사의 개발품은 ":
[". Funtom developed ","でした。ファントム社が開発した商品は"],"종, 저택에 합류한 고용인은 ":
[" products, and the household gained ","種類、屋敷に加わった使用人は"]," · 처리 완료":
[" · Resolved"," · 対応済み"],"상순 · ":
["Early month · ","上旬 · "],"이전 회차의 선택 · ":
["Previous playthrough's choice · ","以前の周回での選択 · "],"저장 칸 ":
["Save slot ","セーブ枠 "],"시설 개수 · ":
["Facility renovation · ","施設改修 · "],"개량 · ":
["Improve · ","改良 · "],"개발 · ":
["Develop · ","開発 · "],"증설 · ":
["Expand · ","増設 · "],"설비 매각 · ":
["Sell equipment · ","設備売却 · "],"같은 물량·가격·수요라면 ":
["At the same volume, price and demand, expansion pays for itself in ","数量・価格・需要が同じなら、"]," · 개발비 할인 별도":
[" · Development discount calculated separately"," · 開発費の割引は別計算"],"소매 판매 · ":
["Retail sales · ","小売販売 · "],"교본으로 기를 수 있는 ":
["You've reached the training manual limit for ","教本で伸ばせる"]," 수치가 ":
[" must be at least ","が"]," 이상 필요합니다.":
[".","以上必要です。"]," 수치가 이미 한도에 도달했습니다.":
[" is already at its limit.","はすでに上限に達しています。"]," 구매":
["Buy","を購入"]," · 매각 대금 ":
[" · Sale proceeds "," · 売却額 "],"설비 매각 대금 ":
["Equipment sale proceeds: ","設備売却代金 "]," 입금":
[" received","を入金"]," 출시 승인":
[" · Release approved","の発売を承認"]," 재작업 예약 · £12":
[" · Rework scheduled · £12"," · 手直しを予約 · £12"],"개 · 판매가 ":
[" units · Retail price ","個 · 販売価格 "],"슬롯 ":
["Slot ","スロット "]," 저장":
[" · Save","に保存"]," 저장 완료":
[" · Saved","に保存しました"],"자유행동 · ":
["Free time · ","自由行動 · "]," · 예상 영업이익 변화 ":
[" · Estimated change in operating profit: "," · 営業利益の予想増減 "]," 시제품 착수":
[" · Prototype started","の試作を開始"]," 결석 · 요양으로 대체 · 예약 비용 ":
["Absent · Rest instead · Booking fee","欠席・療養に変更・予約費用"],"만날 수 있는 사람: ":
["Possible encounters: ","会える人物："]," · 교류":
[" · Social visit"," · 交流"]," · 휴식":
[" · Rest"," · 休息"],"자유행동 성과 · ":
["Free-time results · ","自由行動の成果 · "],"회 / ":
[" wins / ","回優勝 / "],"주요 편성　":
["Main activities　","主な活動　"]," · 마지막 기록":
[" · Final record"," · 最後の記録"],"년 ":
[" / ","年"],"사용인 실무 숙련도 · ":
["Staff proficiency · ","使用人の実務熟練度 · "],"개당 재료비 ":
["Material cost per unit ","1個あたりの材料費 "],"소매 수요 ":
["Retail demand ","小売需要 "]," · 이달 소매 수요 ":
[" · Retail demand this month: "," · 今月の小売需要："],"팬텀하이브 메이커":
["Phantomhive Maker","ファントムハイヴ・メーカー"],"상대 → 시엘 신뢰":
["Trust in Ciel","シエルへの信頼"],"/ 3단계":
["/ 3 levels"," / 3段階"],"· 이달 영업이익":
["· Operating profit this month","· 今月の営業利益"],"· 높은 가격 수용":
["· Customers accept higher prices","· 高めの価格でも売れる"],"소매·납품 합계 <strong>{limit}</strong>개까지 무료<br>초과 <strong>1</strong>개당 <strong>{fee}</strong>":
["Up to <strong>{limit}</strong> units ship free each month, counting retail sales and deliveries together.<br>Each additional unit costs <strong>{fee}</strong>.","小売と納品を合わせて<strong>{limit}</strong>個まで無料。<br>超過分は1個につき<strong>{fee}</strong>。"],"전 품목 합산 <strong>{limit}</strong>개까지 무료<br>초과 <strong>1</strong>개당 <strong>{fee}</strong>":
["The first <strong>{limit}</strong> units are stored free across all products.<br>Each additional unit costs <strong>{fee}</strong>.","全商品を合わせて<strong>{limit}</strong>個まで無料。<br>超過分は1個につき<strong>{fee}</strong>。"],"가용 자금 {floor}를 넘겨 남는 순이익에 단계 적용":
["The contribution is calculated in bands on net profit above the {floor} cash reserve.","手元資金が{floor}を超えた分の純利益に応じて、段階別に分担金を算定します。"],"개당 {price} × {quantity}개":
["{price} per unit × {quantity}","単価{price} × {quantity}個"],"판매 가능 {available}개 중 예상 판매 <b>{sold}개</b>":
["Projected sales: <b>{sold}</b> of {available} available","販売可能な{available}個のうち、販売見込みは<b>{sold}個</b>"],"미납 1개당 {fee} 부담":
["Penalty per undelivered unit: {fee}","未納分は1個につき{fee}"],"왕실은 작위 승인을 보류했습니다. 금고에 남은 돈은 {fund}. 도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까?":
["The Crown has deferred its decision on your title. The treasury holds {fund}. Which notebook shall I use for our first ledger, my lord?","王室は爵位の承認を保留しました。金庫には{fund}。坊ちゃん、最初の帳簿はどの手帳にお納めしましょうか？"],"{lesson} 중인 시엘":
["Ciel taking part in {lesson}","「{lesson}」に取り組むシエル"],"{month} 월말":
["End of {month}","{month}末"],"같은 물량·가격·수요라면 {months}개월에 증설비 회수":
["At the same volume, price and demand, the expansion will pay for itself in {months} months.","数量・価格・需要が同じなら、{months}か月で増設費を回収できます。"],"{month} 결산":
["Monthly accounts · {month}","{month}の決算"],"{stat} {before}에서 {after}로, 변화 {change}":
["{stat}: {before} to {after}, change {change}","{stat}：{before}から{after}へ（増減 {change}）"],"{stat} 수치가 {amount} 이상 필요합니다.":
["Requires at least {amount} {stat}.","{stat}が{amount}以上必要です。"],"교본으로 기를 수 있는 {stat}의 한도에 도달했습니다.":
["{stat} has reached the limit for training with a manual.","教本で伸ばせる{stat}の上限に達しています。"],"{price} 구매":
["Buy for {price}","{price}で購入"]};
