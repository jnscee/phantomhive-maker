// Display text indexed by the original Korean. Columns: English, Japanese.
const editionLines = {"가족":
["Families","家族"],"개":
["items","個"],"건":
["cases","件"],"건강":
["Health","健康"],"계약":
["Contract","契約"],"교육":
["Education","教育"],"구매":
["Buy","購入"],"끝":
["ended","終わり"],"년":
["by","年"],"다음":
["Next","次へ"],"명":
["people","人"],"사건":
["Case","事件"],"상태":
["Status","ステータス"],"설정":
["Settings","設定"],"세":
["years old","歳"],"아이":
["The child","子供"],"어린이":
["Children","子供たち"],"예정":
["PrevPrevious","予想"],"월":
["Month","月"],"이상":
["More","もう"],"이전":
["Previous","前へ"],"점":
["points","点"],"증가":
["Increase","上昇"],"지난":
["past","過去"],"참가":
["Participate","参加"],"현재":
["Currently","現在"],"확인":
["Confirm","決定"],"회":
["times","回"],"가난":
["poorly","貧乏"],"감소":
["Decrease","低下"],"강평":
["Strength","強く"],"개 ·":
["Dogs","犬 ·"],"개 기록":
["Dog recording.","犬記録"],"개당":
["The Hose","犬"],"개발 ·":
["Development of","開発 ·"],"개발실":
["Developmental room","開発室"],"개월":
["months","か月"],"게임 시작":
["New game","はじめから"],"결과 확인":
["confirmed results.","結果確認"],"결산":
["Finally","結末"],"경비":
["The Guardian","警備"],"경영":
["Management","経営"],"계약 계속":
["Contract continues.","契約は続く"],"교류":
["The exchange","交換"],"귀빈":
["The Dear","貴重"],"금상":
["gold","金"],"기품":
["Refinement","気品"],"꼬":
["The","ココ"],"네!":
["Yes !","はい!"],"다시 보기":
["See again.","再度見る"],"다음 달":
["The next month.","次の月"],"다음에":
["The next","次に"],"다크":
["Dark","ダーク"],"단계":
["levels","段階"],"담당":
["Responsible","担当者"],"대기":
["Wait","待つ"],"대폭":
["The width","広い"],"대화":
["Talk","会話"],"독백":
["Monologue","独白"],"동점":
["Tie","同点"],"뒤로":
["Back","戻る"],"또쥐":
["The Mouse","ネズミ"],"라우":
["Lau","劉"],"마지막 기록":
["The Last Record.","最後の記録"],"마침":
["Finally","ついに"],"매각":
["The Seller","売り"],"매력":
["Charm","魅力"],"매출":
["The sale","売り上げ"],"메뉴":
["Menu","メニュー"],"몸 상태":
["body state.","体の状態"],"뭐?":
["What ?","何?"],"방문 가능":
["Possible Visit","訪問可能"],"방문 계속":
["Continued visit.","訪問は続く"],"벨":
["by Bell","ベル"],"변동":
["Changed","変動"],"병중":
["sick","病気"],"보관":
["The guard","保守"],"보상":
["reward","報酬"],"보안":
["Security","防犯"],"보충":
["Added","補足"],"부담":
["The burden","負担"],"사건 결과":
["The case result.","事件結果"],"사건 기록":
["Case records","事件記録"],"사건 조사":
["Investigation of the case","事件調査"],"사건 확인":
["Confirmation of the case.","事件確認"],"사교":
["Socialist","社会"],"사내":
["Man","男"],"사업가":
["business","ビジネス"],"사탕":
["Sweets","甘い"],"상금":
["The reward","賞金"],"상대":
["against","対"],"상순":
["Early","上旬"],"상승":
["Increase","上昇"],"상점":
["Shop","店"],"상품 개발":
["Products Development","商品開発"],"상품 구매":
["Buying goods","商品購入"],"생산량":
["Production quantity","生産数"],"생산비":
["Production cost","生産費"],"서재":
["Library","書斎"],"선물":
["The Gift","プレゼント"],"선택 결과":
["The choice result.","選択結果"],"선택 시설":
["Selection of facilities","選択施設"],"성과":
["and Castle","城と"],"소년":
["boy","男の子"],"소마":
["Soma","ソーマ"],"소식":
["News","ニュース"],"소폭":
["The Sophia","ソボー"],"수선":
["Repairs","修繕"],"수요":
["Demand","需要"],"수첩":
["Notebook","手帳"],"스트레스":
["Stress","ストレス"],"슬롯":
["Slots","スロット"],"승리":
["Victory","勝利"],"승마":
["Riding","乗馬"],"승패":
["Victory","勝利"],"시설 상태":
["The facility state.","施設状態"],"시설 선택":
["Selection of facilities","施設の選択"],"시설 효과":
["Facility effects","施設の効果"],"시엘":
["Ciel","シエル"],"신뢰":
["Trusted","信頼"],"실적":
["Reality","現実"],"실패":
["Failure","失敗"],"실행":
["Begin","開始"],"심사":
["by Simeon","セミナー"],"악마":
["Demon","悪魔"],"안내 계속":
["Go on.","続けて"],"어?":
["and?","え?"],"업무 효과":
["Work Effects","仕事効果"],"에서":
["in","で"],"연구소":
["Laboratory","研究所"],"연구원":
["The researchers","研究者"],"완납":
["completed","完成"],"완료":
["finished","完成"],"왕실":
["The Royal","王室"],"왕자":
["Prince","王子"],"요양":
["Yoyu","ヨー"],"우유":
["Milk","牛乳"],"운송":
["Transportation","運送"],"원가":
["The first","原子"],"월말":
["The Month","月末"],"으로":
["to","へ"],"은상":
["The Gare","金庫"],"음량":
["Volume","音量"],"음악실":
["Music Hall","音楽室"],"의사":
["Doctor","医者"],"의욕":
["Motivation","意欲"],"의지":
["Resolve","意志"],"이달":
["Month","月"],"이어하기":
["Continue","つづきから"],"일정 사건":
["The agenda of the event.","予定事件"],"일정 시작":
["Start of schedule","スタート予定"],"일정 진행":
["Progress schedule","スケジュール進展"],"일정표":
["Schedule","予定表"],"입금":
["Income","入金"],"입니다.":
["and .","です。"],"장면":
["Narration","地の文"],"재고":
["Stock","在庫"],"재료":
["Materials","材料"],"저는—":
["I am—","わたしは -"],"저장":
["Save","セーブ"],"저택":
["Manor","屋敷"],"절감":
["The Disappointment","減少"],"점 차":
["Point car.","ポイント車"],"정보상":
["Information","情報"],"정원":
["Garden","庭園"],"제작 참고":
["Inspirations","参考作品"],"제작실":
["Production room","製造室"],"주방":
["Kitchen","厨房"],"주요 고객":
["The main customer.","主な顧客"],"준비 중":
["Coming soon","準備中"],"준비비":
["Prepared","準備"],"중간":
["The middle","中間"],"중순":
["Mid","中旬"],"증가\"":
["“Great”","ギャンブル »"],"증감":
["The evidence","証明"],"증빙":
["Proofing","証明"],"지성":
["Intellect","知性"],"지출":
["Expenses","支出"],"집사":
["The house","ホーム"],"창밖":
["The window.","窓外"],"채무":
["The debt","債務"],"처음부터":
["From the beginning","初めから"],"첫 안내":
["Getting started","はじめての手引き"],"청결":
["Cleaning","清潔"],"청소":
["Cleaning","掃除"],"체력":
["Stamina","体力"],"초과":
["and","二番"],"추적":
["Tracking","追跡"],"충족":
["Met","達成"],"취소":
["Cancel","キャンセル"],"침실":
["Bedroom","寝室"],"타운":
["by Town","タウン"],"탕":
["The Dan","タン"],"통과":
["passed","通行"],"통찰":
["Insight","洞察"],"판매 가능":
["Possible for sale.","販売可能"],"판매 상품":
["Sales of goods","商品販売"],"판매가":
["The sale","売り"],"판매점":
["The Seller","販売点"],"패배":
["Defeat","敗北"],"평판":
["Reputation","評判"],"폭염":
["Firefighting","火災"],"품격":
["Prestige","品格"],"하.":
["and","ハ。"],"하락":
["Decrease","低下"],"하순":
["Late","下旬"],"하우스":
["House","ハウス"],"하지만,":
["But,","しかし、"],"학술":
["academic","学術"],"한국어":
["Korean","韓国語"],"한파":
["HANPA","ハンファ"],"합류":
["Join","合併"],"항목":
["The item","関数"],"협상":
["negotiations","交渉"],"호평":
["The Happiness","こんにちは"],"화이트":
["Light","ライト"],"활동 목록":
["Activity List","活動リスト"],"회 /":
["Meeting /","会 /"],"회 참가":
["Meeting participate","会議参加"],"회사 기반":
["Company foundations","会社の基盤"],"효과음":
["Sound effects","効果音"],"휴식":
["Rest","休息"],"+2개":
["+ 2 of them","+2個"],"/ 생산비":
["Production of","/ 生産"],"/ 재고":
["/ The","/ 保管"],"· 교류":
["· Exchanges","■交換"],"· 마지막 기록":
["The Last Record","■最後の記録"],"· 상금":
["· reward","■ 賞金"],"· 휴식":
["· Rest","■休憩"],"……뭐?":
["What is?","・・・何?"],"……어?":
["... the ?","・・・?"],"가정용":
["household","ホーム"],"감소\"":
["The Reduction »","減少」"],"강평 보기":
["Look at Strong","強み見る"],"개까지 무료":
["Free to dog.","犬まで無料"],"개량 ·":
["The amount;","増加 ·"],"게임 메뉴":
["The Game Menu","ゲームメニュー"],"게임 언어":
["Game language","ゲームの言語"],"게임 표지":
["The game sign.","ゲーム サイン"],"겨울 아침":
["Winter morning","冬の朝"],"견본":
["The sample","サンプル"],"결과 대사":
["The Ambassador.","結果大使"],"결산 확인":
["Confirmed","結末確認"],"경비실":
["Guardroom","警備室"],"경연 결과":
["The contest results.","コンテスト結果"],"경영 22":
["Management 22","管理 22"],"고급 ·":
["Advanced ·","優先 ·"],"고급·":
["Advanced","優先"],"고급품":
["Premium","高級品"],"공동 금상":
["The Common Gold","共同金"],"공동 우승":
["Joint winners","同点優勝"],"관리 열기":
["Open the management.","管理開設"],"관리 유예":
["Defer upkeep","管理を延期"],"교육·활동":
["Tuition & activities","教育・活動"],"구매 목적":
["Purpose of purchase.","購入目的"],"구매 수요":
["Buying can.","買う"],"귀족 교육":
["Noble education","貴族教育"],"그 다음에":
["and then","次に"],"그건…….":
["It is...","それは・・・"],"기록한 사건":
["Cases recorded","記録した事件"],"기본 원가":
["The basic","基本原"],"기존 일정 유지":
["Keep the schedule.","持続予定"],"기타 운영비":
["Guitar Managers","ギター管理"],"기품 24":
["The 24","商品 24"],"기품 380":
["The 380","商品 380"],"기획 중":
["in planning.","計画中"],"깨진 창":
["Broken window.","壊れた窓"],"꺼짐":
["Off","オフ"],"나가기":
["Exit","終了"],"납기":
["Theft","引き出し"],"납품":
["Delivery","配達"],"네가?":
["You?","お前が？"],"누적 판매":
["Selling of","コレクション販売"],"능력 변화":
["Stat changes","能力変化"],"능력치":
["Capacity","能力"],"다과회":
["The meeting","ダビデ"],"다른 연구원":
["Other researchers.","他の研究者"],"다른 종목":
["Other types","他の種類"],"다음 단계":
["Next level","次の段階"],"다음 달로":
["The next month.","次の月"],"다음 대사":
["The next ambassador.","次大使"],"다음 장면":
["The next scene.","次のシーン"],"닫기":
["Close","閉じる"],"달빛 아래":
["Under the moon.","月の下"],"담당 업무":
["Responsible work.","担当職"],"담당자":
["officer","担当者"],"대성공":
["Great success","大成功"],"대신!!":
["Instead of!","代わりに!!"],"도원향":
["Tao Yuan Xiang","桃源郷"],"동작 설정":
["Animation","演出設定"],"라틴어":
["Latin","ラテン語"],"런던":
["London","ロンドン"],"로, 변화":
["by, change","へ、変化"],"마지막 대사":
["The Last Ambassador.","最後の大使"],"마지막 명령":
["The Last Order.","最後の命令"],"마지막 심의":
["The Last Heart.","最後の心"],"마치기":
["Finished","完成"],"메이린":
["Mey-Rin","メイリン"],"명 배치":
["The place.","男 配置"],"명입니다.":
["The man.","男です。"],"미배치":
["by MIBATCH","ミバチ"],"미수집":
["The House","ミスハウス"],"미충족":
["Unmet","未達成"],"바르도":
["Bardroy","バルドロイ"],"발주처":
["The Battles","発射"],"방문 생략":
["Skip visit","訪問を見送る"],"방문지 선택":
["The visit choice.","訪問の選択"],"배치 효과":
["The placement effect.","配置効果"],"변화 그래프":
["Change Graph","グラフの変化"],"병환 ·":
["The disease","病気 ·"],"보드게임":
["Board game","ボードゲーム"],"보유 중":
["in possession.","持っている"],"보유금":
["Funds","所持金"],"부속 시설":
["Annexes","付属施設"],"비스킷":
["The biscuit","ビーチ"],"사건 단서":
["The case.","事件の指示"],"사교 행사":
["Social events","社会活動"],"사업 확장":
["Expand the business","事業拡大"],"상순 ·":
["The Simplient","シンプル ·"],"상순으로":
["by purely","単純に"],"상품 장부":
["Product officer","商品の管理者"],"상품 평판":
["Product reputation","商品評判"],"새 회차":
["New playthrough","新しく始める"],"서신실":
["The Serial","会場"],"서재.":
["and the","立場。"],"서훈식":
["warning","警告"],"선물용":
["The Gift","プレゼント"],"선생님":
["The teacher","先生"],"설비 운영":
["Installation Operations","設備運営"],"소인 기록":
["The record.","ソイン記録"],"수요 +":
["The +","求人+"],"수첩 선택":
["Choose a notebook","手帳を選ぶ"],"수첩으로":
["To notebook","手帳へ"],"수치가":
["The number","数字"],"숙련도":
["and skilled","熟練"],"스네이크":
["Snake","スネーク"],"스트레스 -8":
["Stress – 8","ストレス - 8"],"승마장":
["The Knight","乗馬"],"시설상태":
["Facility condition","施設の状態"],"시엘 상태":
["Seal state.","シエル状態"],"식기 전에":
["Before eating.","食前"],"실행 확인":
["Controlled execution.","実行確認"],"심사 ·":
["The Says","セミナー ·"],"심사 결과":
["The result.","審判結果"],"심사 기준":
["The Siddhartha","セッション基準"],"심사 중":
["Under review","審査中"],"심의 확인":
["Verification of heart.","心の確認"],"아그니":
["Agni","アグニ"],"아아.":
["and yeah.","☆☆☆"],"아침 시중":
["in the morning.","朝の時"],"악마!":
["Demon!","悪魔！"],"안내 종료":
["Go to close.","終わり へ"],"알겠습니다.":
["Understood, my lord.","かしこまりました。"],"알현복":
["The Alphabet","アルハイブ"],"앨범":
["The album","アルバム"],"어려운 일":
["difficult work.","難しい仕事"],"역무원":
["officer","役員"],"온실 앞":
["The front of the greenhouse.","温室前"],"올빼미":
["The upper","こっち"],"왕실 평가":
["Royal Assessment","王室評価"],"원가 최대":
["The maximum.","最大の原子"],"월 비용":
["Monthly cost","月の費用"],"월 운영비":
["Monthly operating costs","月間運営費"],"월 유지비":
["Monthly upkeep","月の維持費"],"월간 일정":
["Monthly schedule","月間スケジュール"],"월말 사건":
["Month-end event","月末イベント"],"월말로":
["by Month","月末"],"응접실":
["Drawing room","応接室"],"의 신뢰":
["The Trust.","信頼の"],"의지함":
["Trusted","信頼"],"이거…":
["This...","これ..."],"이번 달에는":
["This month","この月は"],"이전 기록 ·":
["Previous records","以前の記録"],"이전 대사":
["The former ambassador.","前大使"],"이튿날":
["This day","今日も"],"익숙함":
["used to","慣れ"],"인물 관계":
["Relationships","人間関係"],"일반 재료":
["General materials","一般材料"],"일정 장면":
["The schedule","スケジュール"],"일정 재개":
["The schedule reboot.","再開予定"],"입금 £":
["Payment of £","預金 £"],"자동 재생":
["Auto-play","オート"],"자동 저장":
["Autosave","オートセーブ"],"자유 독서":
["Free readers","自由読者"],"자유행동":
["Free time","自由行動"],"장부 보기":
["See the officer.","部門見る"],"재생 ×":
["Replayed ×","再生 ×"],"저장 기록":
["Saved games","セーブデータ"],"저택 관리":
["Estate management","屋敷の管理"],"저택 운영":
["The house operations.","ホーム運営"],"저택 유지":
["Housing","家を守る"],"저택 지도":
["The house.","家も"],"저택 지원":
["Household support","屋敷への支援"],"제작 담당":
["Production lead","製作担当"],"주요 편성":
["The main arrangement.","主な配置"],"준비 완료":
["ready finished.","準備完了"],"준비비 중":
["Prepared","準備中"],"증설 ·":
["The proof","証明 ·"],"증설비":
["The Proof","証明"],"지구력":
["Endurance","持久力"],"지출 £":
["The spending £","支出 £"],"진행한 달":
["The progressive moon.","進歩する月"],"집달리":
["The house","ホーム"],"참가 조건":
["Conditions of participation","参加条件"],"참가 종목":
["Competition category","参加種目"],"참가 취소":
["Announced","参加キャンセル"],"참가 확정":
["Participation is certain.","参加確定"],"참고작품":
["The Reserve","保守作品"],"처리 완료":
["Processing is finished.","処理完了"],"첫 수업":
["The first class.","初級クラス"],"최대 규모":
["The maximum scale.","最大規模"],"출시 승인":
["Release approved.","出発承認"],"컨디션":
["Condition","体調"],"켜짐":
["On","オン"],"타나카":
["Tanaka","タナカ"],"통상 관리":
["Routine upkeep","通常管理"],"통찰 +":
["The View +","見通し+"],"통찰 24":
["The inspection 24","検査 24"],"통찰 33":
["The view 33","見直し 33"],"특별 수업":
["Special lessons","特別授業"],"판매 담당":
["Selling responsible","販売担当者"],"팬텀 사":
["The Phantom.","ファンタジー"],"팬텀사":
["Funtom","ファントム社"],"편성 중":
["in the preparation.","準備中"],"평가 항목":
["The assessment item.","評価項目"],"표준품":
["Standard","標準品"],"표지로":
["Title screen","タイトルへ"],"풋맨":
["Footman","足マン"],"프롤로그":
["Prologue","序章"],"피니안":
["Finnian","フィニアン"],"항상 재생":
["Always animate","常に再生"],"호감도":
["and pleasant","喜びも"],"후훗.":
["Heh.","ふふっ。"],"흥.":
["and exciting.","興奮。"],"· 숙련도":
["• Skills","■ 熟練"],"· 처리 완료":
["Processing is completed.","■処理完了"],"✓ 참가 확정":
["Join the assurance.","参加確定"],"가문 기록 조사":
["Research the family archives","一族の記録調査"],"가문 명성":
["Family reputation","家の名声"],"가문 수첩":
["Family Signs","家族の手紙"],"가문 자금":
["Family funds","家庭資金"],"가문 장부":
["Family Ledger","家の帳簿"],"가문 회계":
["Family Accounting","家庭会計"],"가문의 반지":
["The Family Ring","家族の指輪"],"가용 자금":
["The funds.","利用資金"],"개 · 판매가":
["Dogs to sell","犬売り"],"개당 단가":
["One of them.","ひとりひとり"],"개량 완료":
["The amount is finished.","数値完了"],"개발비 할인":
["Developmental discount","開発者 デビュー"],"개수 완료":
["The dog is finished.","犬が完成"],"거래처 방문":
["Visit to trade.","取引所訪問"],"건너뛰기":
["Skip","スキップ"],"경연 상금":
["Competition rewards","競技賞"],"경연 우승":
["The competition wins.","コンテスト優勝"],"경영 +8":
["Management +8","経営 +8"],"계약의 인장":
["The Contract Manager","契約の主人公"],"고용 조건":
["Conditions of Employment","雇用条件"],"관리 · 경영":
["Estate & Company","屋敷・会社経営"],"교류 시 가능":
["Possible exchange.","交換可能"],"교육 일정 완화":
["Training schedule.","教育のスケジュール緩和"],"교육·활동비":
["Education and Activity","教育・活動"],"귀족 예법":
["Noble etiquette","貴族の礼法"],"그 눈동자":
["The eyes.","その目"],"그럭저럭":
["by GREAT","グラク"],"그렇군요.":
["Yes is.","はい。"],"근무 1개월":
["1 month work.","仕事 1ヶ月"],"기록을 확인한다":
["Check the records.","記録を確認する"],"기본 시설 대비":
["Basic facility.","基本施設の準備"],"기초 수업":
["Basic lessons","基礎授業"],"끊어진 현":
["Cuted by","断ち切った"],"남은 채무":
["Outstanding debt","残債"],"높은 가격 수용":
["High price acceptance.","高価格受け入れ"],"닐기리":
["Nylli","ニリ"],"다과 접대":
["and receiving","ダンと接続"],"다시보기 종료":
["End replay","回想を終了"],"단서 다시 보기":
["Look at again.","再度見る"],"대기 배치":
["Waiting to place.","待つ配布"],"대사 재생":
["The Ambassador","大使再生"],"대연회장":
["The meeting","会議長"],"대출 입금":
["Loan Loans","貸付金"],"대화 선택지":
["Choice of conversation.","対話の選択"],"대화와 상태":
["Conversation and state.","会話と状態"],"대화창 표시":
["Signs of conversation.","会話の標識"],"돌아오는 길":
["The way back.","帰る道"],"돌아온 일행":
["Returning of","帰り行き"],"돌아온 집사":
["The Return House.","帰ってきた家"],"동트기 전":
["before the coat.","同士の前"],"됐어.":
["No.","いい。"],"두 번째 잔":
["The second drink.","2回目の飲み物"],"마담 레드":
["Madame Red","マダム・レッド"],"마지막 한 바퀴":
["The Last Round.","最後のラウンド"],"망보기 기록":
["The distorted record.","破壊記録"],"매각 대금":
["Selling the money.","売り払い"],"먹지 두 장":
["Eat two.","食べる2個"],"먼저 연 온실":
["First the greenhouse.","まず温室。"],"목제 완구":
["The wood is complete.","木材 完成"],"무도 수업":
["Untold classes","無しの授業"],"무도 실기":
["Untoldly","無事実"],"미납 부담":
["Untold burden.","無負担"],"미리 볼 일정":
["See the schedule.","見る予定"],"바이올린":
["by Violin","バイオリン"],"밖이었다.":
["was outside.","外だった。"],"받은 발주서":
["received by","受付した発射"],"발주 수락":
["The acceptance.","発射承認"],"발주 수량":
["The amount of","発射量"],"배경음악":
["Background music","BGM"],"배치 인원":
["The placement staff.","配置スタッフ"],"버터 스콘":
["Butter scone","バタースコーン"],"변동 없음":
["No change.","変えなし"],"보내라니까.":
["to send.","送るから。"],"보폭 시험":
["Examples","拡張試験"],"봉인의 판독":
["The Sign of Judgment.","封印の裁判"],"봉제인형":
["Plush toy","ぬいぐるみ"],"부족합니다.":
["is not enough.","不足です。"],"불러오기":
["Load","ロード"],"빅토리아":
["by Victoria","ビクトリア"],"빈 가격란":
["The empty price.","空の価格"],"빈 등자":
["The empty back.","空の背中"],"빈 슬롯":
["Empty slot","空きスロット"],"사교 수업":
["Social classes","社会学科"],"사교와 조사":
["Society & investigation","社交と調査"],"사수자리":
["The Hunter","捕獲者"],"사업과 결단":
["Business & resolve","事業と決断"],"사용인 배치":
["Assign staff","使用人の配置"],"사용인 숙소":
["Servants’ quarters","使用人宿舎"],"산책 스트레스":
["Walking stress.","ストレスの散歩"],"살피는 중":
["in the speech.","サルフィー"],"상품 개발 실습":
["Products development practice.","商品開発実践"],"새 회차 시작":
["New playthrough started.","新しい周回を開始しました。"],"생강 당과":
["Candied ginger","生姜の砂糖漬け"],"생산비 절감":
["Production reduced.","生産量減少"],"서재 면담":
["Interview with","インタビュー"],"서재 수업":
["Study in the library","書斎での授業"],"서재 인수":
["The Sustainable","入り口"],"설마 나?":
["Maybe I?","わたしじゃない?"],"세바스찬":
["Sebastian","セバスチャン"],"세의 시엘":
["The Seal.","シエル三位"],"소년의 책":
["The Boy's Book","男の子の本"],"소매 수요":
["The Sweat.","⁇  し"],"소매 판매 ·":
["The sale of;","売り切れ ·"],"손 제과점":
["hand point.","手のひら"],"수령 서명":
["Command signed.","指揮署名"],"수집한 CG":
["Collected CG","収集されたCG"],"수집한 엔딩":
["The ends collected.","収集したエンド"],"스트레스 -12":
["Stress – 12","ストレス -12"],"스트레스 −12":
["Stress – 12","ストレス −12"],"스트레스 −6":
["Stress – 6","ストレス −6"],"스트레스 −7":
["Stress – 7","ストレス −7"],"스트레스 완화":
["Relieve stress","ストレス緩和"],"승리 보상":
["Victory rewards","優勝報酬"],"시내 외출":
["City out.","市外出"],"시설 개수 ·":
["Renovate ·","改修・"],"시엘 신뢰":
["Seth trusted.","シエル信頼"],"시엘 통찰":
["Seal inspection.","シエル 見直し"],"시엘의 상태":
["The state of Seal.","シエルの状態"],"시장 거래 기록":
["Mayor’s record.","市長の取引記録"],"식장의 문턱":
["The restaurant door.","食堂のドア"],"신년 축사":
["New Year’s celebration","新年祭り"],"실행 전 확인":
["Check out the operation.","実行確認"],"심사 결과 보기":
["See the results.","審査結果を見る"],"심사 점수":
["The point.","審判点"],"아침 장갑 기록":
["The morning handheld.","朝の手袋記録"],"애완동물":
["The pet.","ペット"],"앨범 기록":
["Album","アルバム"],"앨범으로":
["by album","アルバム"],"어디까지나,":
["to the extent,","どこまで、"],"엄선 재료":
["The material.","素材の"],"에드워드":
["by Edward","エドワード"],"엔딩 다시 보기":
["Ending to see again.","エンドを再度見る"],"엔딩 도감":
["Ending collection","エンディング一覧"],"역전 매점":
["The reverse point.","逆転点"],"열어 둘 문":
["Open two doors.","二つのドアを開ける"],"영수증 공유":
["The recipient.","受付証明書共有"],"영수증 확인":
["confirmation of receipt.","受付確認"],"영업 수입":
["Sales income","売上収入"],"영입 완료":
["Entrance finished.","入場完了"],"영입 확정":
["Inserted.","入り口確定"],"예상 매출":
["Projected revenue","予想売上"],"예상 지출":
["Expected expenses","予想支出"],"예상 판매량":
["Projected unit sales","販売見込み数"],"오후의 홍차":
["The afternoon.","午後の火"],"왕실 서신":
["The royal stand.","王室立場"],"왕실 신임":
["The Crown’s trust","王室の信任"],"왕실 인증":
["Royal Certificate","王室認証"],"원본 보관":
["Original storage","オリジナル保管"],"월 순절감":
["Month of Purity","月の純粋さ"],"월 시설 유지비":
["Monthly facility upkeep","施設の月間維持費"],"월간 결산":
["Monthly report","月次報告"],"월말 보관":
["The month guard.","月末保管"],"으음…….":
["and...","こんにちは・・・"],"음량 조절":
["Audio volume","音量調整"],"응용 실기":
["Application is","応用実"],"의욕 +9":
["Their Wishes +9","欲望 +9"],"의욕 회복":
["Restore motivation","意欲回復"],"의지 +15":
["The +15","意志 +15"],"의지 +5":
["The Wish +5","意志 +5"],"이달 생산품":
["This month’s product","今月の生産品"],"이름……요?":
["Name... is it?","名前・・・?"],"이번 달 배치":
["This month placed.","今月の配布"],"이번 달 변동":
["This month’s changes","今月の変化"],"이번 심사의 기록":
["This record of the","この審議の記録"],"이상 필요합니다.":
["I need more.","もう必要だ。"],"이튿날―":
["This day –","今日～"],"인증 요건":
["Certificate of","認証ヨガン"],"일반 견본":
["The general sample.","一般サンプル"],"일상 수요":
["day to day.","いつでも"],"일시정지":
["time to","タイム"],"일정 과부하":
["Overtime of schedule","スケジュール過剰"],"입상 보상":
["Rewarded rewards","入り口の報酬"],"자금 부족":
["Lack of money.","資金不足"],"자동 멈춤":
["Stop auto-play","オート解除"],"자유행동 ·":
["The freedom of action;","自由行動 ·"],"자유행동 결과":
["The freedom of action.","自由行動の結果"],"자유행동으로":
["in freedom.","自由行動"],"작위 승인":
["Approval of work.","作品承認"],"작위 회복":
["Recovery of work.","仕事回復"],"작은 진열창":
["Small Sweaters.","小さな発熱"],"장미 정원":
["The Rose Garden","バラの庭園"],"장부 복원":
["The restore.","部長復元"],"재검수 예정":
["Reexamination is scheduled.","再検査予定"],"재고 실사":
["and Sullivan","レジストリ"],"재정 안정":
["Financial stability","財政の安定"],"저장 · 설정":
["Save & Settings","セーブ・設定"],"저장 완료":
["The completion.","保存完了"],"저장 칸":
["The Cannes.","保存カン"],"저택 → 상태":
["The house is in state.","家は状態"],"저택 메뉴":
["Home Menu","ホームメニュー"],"저택 사무":
["The house office.","ホームオフィス"],"저택 서재":
["The house.","ホーム 居住"],"저택 재건":
["Estate restoration","屋敷の再建"],"저택 휴식":
["Rest at the manor","屋敷で休む"],"정원 산책":
["Garden Walk","庭の散歩"],"조사 기록 확보":
["Inspection records.","調査記録確保"],"조작 안내로":
["Manipulation by","操作しないで"],"종합 실기":
["Total of","総合実"],"중인 시엘":
["The Seal.","続くシエル"],"증빙 자료 요청":
["Request for evidence.","証明データの要求"],"지역 호텔 조합":
["Local Hotel Association","地域ホテル協会"],"진열 중’":
["In the heat.”","熱中」"],"집사의 독백":
["The housewife.","家の毒"],"쨍그랑":
["and","⁇ と"],"차 배합 기록":
["Car recording.","車の記録"],"차례 대기":
["time awaits.","次回待つ"],"참가 접수 중":
["Participation in receipt.","参加受付"],"창고지기":
["The warehouse","倉庫"],"채무 상환":
["Return of debt.","債務返済"],"첫 개수 시":
["The first number.","初のカラス"],"체력 단련":
["Strengths of effort.","力試練"],"체스 클럽":
["The Chess Club.","チェスクラブ"],"총생산비":
["Total production cost","総生産費"],"최종 실기":
["Final practical exam","最終実技試験"],"추천 수업:":
["Recommended classes:","レッスン推薦:"],"출품 심사":
["Presentation of","出品 セッション"],"출품할 제품":
["Product to enter","出品する商品"],"컨디션 +":
["Condition +","コンディション+"],"타운하우스":
["Townhouse","タウンハウス"],"탕―!":
["and the!","ダン～!"],"통찰 +6":
["The view +6","見る +6"],"판매·납품":
["Sales & deliveries","販売・納品"],"팬텀 사(":
["The Phantom (","ファンタジー("],"팬텀사 운영":
["Phantom operations.","ファンタジー運営"],"팬텀사에서는":
["in the fancy.","ファンタジーで"],"편성한 일정":
["The prepared schedule.","準備予定"],"편집할 기간":
["Time to edit.","編集期間"],"포장 수익":
["Package Profit","パッケージ収益"],"표지 메뉴":
["Title menu","タイトルメニュー"],"필요 조건 ·":
["Required conditions","必要条件 ·"],"함께한 사람들":
["The people together.","共にいる人々"],"함께한 사용인":
["Users together.","共通の利用者"],"행사 달의 일정":
["The Month of the Event.","月のイベント日程"],"행사 마치기":
["Ended the event.","イベント終了"],"현장 수행":
["Field experience","現場での実績"],"현장 실습":
["Fieldwork","実地訓練"],"협상 실기":
["negotiations are","交渉の実"],"환불 집게":
["Take the reward.","返金する"],"황송합니다.":
["I swear.","恥ずかしい。"],"회계 감사 기록":
["Accounting thanks.","会計感謝記録"],"회계 실습":
["Accounting Practice","会計実践"],"회송 봉투":
["Return package","送料袋"],"회차 종료":
["The tour is closed.","ツアー終了"],"BGM 꺼짐":
["BGM off","BGM オフ"],"BGM 켜짐":
["BGM on","BGM オン"],"CG 앨범":
["CG album","CG アルバム"],"· 매각 대금":
["• Payment of the price","■ 売り上げ"],"· 추천 수업:":
["· Recommended classes:","●授業の推奨:"],"‘진열 중’":
["“In the heat”","「熱中」"],"……늦었어.":
["It is late.","・・・遅かった。"],"……설마 나?":
["Don’t tell me?","・・・私を?"],"가문 명성 +":
["Family reputation +","ファミリー名声+"],"가문 명성 +1":
["Family reputation +1","ファミリー名声 +1"],"가문 문서고":
["Family Documents","家族文書"],"가문 장부 확인":
["Family check.","家庭の確認"],"가문 책무 보고":
["Family tasks.","家族の仕事を見る"],"같은 날 만든 상자":
["The box made the same day.","同じ日に作られた箱。"],"같은 대표의 서명":
["The same representative.","同一代表の署名"],"같은 창고 번호":
["The same stock number.","同じ倉庫番号"],"같은 판에서 구운":
["The same edition.","同じ板で焼き"],"개 중 예상 판매":
["Expected sales of dogs.","犬の売り上げ"],"개당 생산 원가":
["The production of one.","生産先の"],"개당 재료비":
["Material by person.","個々の材料"],"개수할 때마다":
["Every time you are","毎回、打ち上げ"],"거래 보증료":
["Transaction guarantees","取引保証"],"거래처 협상":
["negotiations","取引所交渉"],"걸어서 마친다":
["Walking to finish.","歩き終える"],"게임을 종료했습니다":
["Game closed","ゲームを終了しました"],"견본 출품":
["Examples of presentations","サンプルプレゼンテーション"],"결과창 닫기":
["Close results","結果を閉じる"],"경연 미리보기":
["Competition to see.","コンテスト見る"],"경연 초대장":
["Contest invitation","コンテスト招待状"],"계수부터 다시 한다":
["Starting again.","再び、順番から"],"고급 견본":
["Higher examples","高度なサンプル"],"고급 과정 이수":
["Advanced courses completed","上級課程の修了"],"고용인 명단":
["List of employers.","雇用者リスト"],"관리 권한 인수":
["Managing authority.","管理権限の取得"],"교구 원예회":
["The Church Council.","教会 遺産"],"교류 시 확정":
["Concerning the exchange.","交換確定"],"그게 나아.":
["All the better.","その方がいい。"],"금발의 영웅":
["The Blonde Hero","金髪のヒーロー"],"기념 선물 세트":
["Commemorative gift set","記念ギフトセット"],"기록 시작 잔액":
["Start of recording.","記録開始 収入"],"기록을 덮는다":
["Cover the records.","記録をカバー"],"나에게 승리를!":
["Win for me!","わたしに勝利!"],"남겨진 명함":
["The left card.","残されたカード"],"납품 선금":
["Supply of money","配達料"],"느슨한 고삐":
["A calm hole.","ゆっくりとゴッホ"],"능력 · 500점":
["Capacity 500 points.","能力 · 500ポイント"],"늦었어.":
["It was late.","遅かった。"],"다과회 실기":
["The meeting.","会議の実"],"다과회 예약 증가":
["The reservation of the","予約の増加"],"다시 찾은 서재":
["Found again.","再発見の場所"],"다실의 자리 그림":
["The place of the painting.","ダシュの場所の絵"],"다음 인사를 위한 준비":
["Ready for the next greeting.","次の挨拶の準備"],"답신의 마지막 줄":
["The last line of answer.","最後の答え"],"대화 → 저택":
["Talk to home.","会話は家"],"대화를 마친다":
["Ended the conversation.","会話終了"],"대화창 테마":
["Dialogue theme","会話ウィンドウ"],"덮어쓰기":
["covered","覆い"],"도련님의 침실":
["The bedroom of the","ドーシュのベッドルーム"],"도안 웃돈":
["The laughing.","ドン笑い"],"돌발 사건 지출":
["The expenditure of the incident.","事件の流出"],"동작 줄이기":
["Reduce motion","動きを抑える"],"두 개의 봉랍":
["Two shells.","2  ⁇ の"],"두 번째 체스판":
["The second chess.","2番目のチェス"],"두 상회의 증서":
["Two council certificates.","2 会議の証明書"],"뒤집힌 약도":
["Reverse drugs.","逆転薬"],"뒤집힌 차륜":
["The reversed road.","逆転車"],"라우 상점 구매":
["Roo shop.","ラウ・ショッピング"],"라우의 대사":
["The Ambassador of Rao.","ラウの大使"],"라틴어 구술":
["Latin language.","ラテン語の口コミ"],"런던 거리":
["London streets","ロンドンの街"],"를 판매했습니다.":
["I sold it.","売った。"],"리본 달린 가지":
["The ribbon.","リボン つぶやき"],"마지막 장까지 읽는다":
["Read to the last chapter.","最後まで読む。"],"매대 추가 매출":
["Additional sales.","追加売上"],"먼저 핀 장미":
["First the pink.","まずピンバラ。"],"메이린 영입":
["Maine entrance.","メアリー入り"],"모레티 공방":
["Moretti airport","モレティ空港"],"무슨 일이지?":
["What is it?","何の用だ？"],"문장 없는 마차":
["The Unmarked Carriage","紋章のない馬車"],"미납 1개당":
["1 by 1","無数 1"],"미납 부담금":
["Untold charge","無負担"],"미리보기 예시":
["Look at Yes.","見る イーサ"],"미완성 악보":
["Untold evil","無限の悪"],"바르도 영입":
["Barry enters.","バード入り"],"발자국 수첩":
["Tracker’s notebook","足跡の手帳"],"방문지를 선택하세요.":
["Choose the visit.","訪問場所を選択。"],"번역자의 여백":
["100 translators.","翻訳者数百名"],"번진 잉크":
["The Inch.","インクの流れ"],"병중으로 불참":
["Unfortunate in the sickness.","病気の不幸"],"봉인된 장부":
["The sealed","封印された部門"],"부활절 연주":
["The Restoration Play","復活祭遊び"],"불타는 저택":
["burning house.","燃える家"],"비어 있는 장부":
["The empty officer.","空っぽの部門"],"비어 있는 천막":
["The empty tent.","空っぽのテント"],"빅토리아.":
["of Victoria.","ヴィクトリア"],"사건 기록과 저장":
["The record and record of the case.","事件記録と保存"],"상점 → 저택":
["The shop is home.","店は家"],"상점 진열장":
["Point of Prevention.","店内 熱点"],"상태창 닫기":
["Stopping the state.","状態閉鎖"],"새벽의 일정표":
["The Dawn schedule.","朝の日程"],"생산 또는 재고 필요":
["Production or supply.","生産・供給が必要"],"생산량 (개)":
["Production of Dogs","生産量(犬)"],"서명을 대조한다":
["signing against.","サインを反対する。"],"서재의 열쇠":
["The key of the","座席の鍵"],"선생님……?":
["The... ?","先生・・・?"],"선원의 매듭줄":
["Sailor’s knotting cord","船乗りの結び縄"],"설비 매각 ·":
["The equipment.","設備販売 ·"],"설비·기획":
["Planning of equipment","設備・計画"],"속을 터놓음":
["to dissolve.","内側を"],"손 내밀어.":
["Toughen the hand.","手を伸ばす。"],"손님의 영수증":
["The Guest’s Request","ゲストの受付証明書"],"수업별 성장치":
["Growth per lesson","授業ごとの成長値"],"수익 분담금":
["The profit share.","収益分配"],"숙련도 10마다":
["10 each.","熟練10"],"시설 기여 이익":
["Facilities benefit.","施設利益"],"시엘 컨디션":
["Seal Condition","シエルコンディション"],"시엘의 경영":
["The Seal’s management.","シエルの管理"],"시엘의 성장 기록":
["Ciel’s growth record","シエルの成長記録"],"시제품 기획":
["Planning of Products","プロジェクト計画"],"시제품 착수":
["The product starts.","商品の入り口"],"식사가 식기 전에":
["Before the meal.","食事の前に"],"신년 다과회":
["New Year’s Meeting","新年会議"],"아이의 나무패":
["The Child's Tree","子供の木"],"아침의 올빼미":
["The morning of the day.","朝の ⁇"],"안 보십니까?":
["Do you see?","見ない?"],"앞 수업 응용":
["Advanced Classes","前のクラス応用"],"어떻습니까?":
["What about?","どうですか?"],"에, 진짜?":
["Well really?","やっぱり?"],"여왕의 번견":
["The Queen’s Watchdog","女王の番犬"],"여왕의 봉서":
["The Queen's Closer","女王の封筒"],"연대의 배열":
["The line of solidarity.","連合の順序"],"연도별 성장 기록":
["Annual growth record.","成長記録"],"연말 수요 증가":
["Talk to Give.","話すよ、ハイジャック"],"연회 주문 취소":
["Annulation of the party.","パーティーのキャンセル"],"열두 번째 생일":
["The Twelfth Birthday.","12回目の誕生日"],"열두 번째 선물":
["The 12th Gift.","第12回 プレゼント"],"열리지 않는 성문":
["Unopened gate.","開かない門"],"열한 번째 생일":
["The twelfth birthday.","第十回誕生日"],"예상 납품":
["Expected delivery","予想配達"],"예상 판매 비중":
["Expected sales.","予想販売の割合"],"완납 시 대금":
["Finished payments.","完了時にお金"],"왕자의 첫 명령":
["The Prince's First Order","王子の最初の命令"],"왕진 · £55":
["Doctor’s visit · £55","往診・£55"],"외교 서한집":
["Diplomatic correspondence","外交書簡集"],"요리와 출신":
["From cooking and","料理と出身"],"요양으로 불참":
["Unfortunate to the","ヨーグルトに不幸"],"월 손실 절감":
["Monthly losses.","月間損失"],"월말 검수 예정":
["Month checked.","月末検査予定"],"월말 결산으로":
["The month of the end.","月末の決算"],"월말 잔액":
["Month of money.","月末の収入"],"월초 잔액":
["Monthly balance","月額の収入"],"응접실 실기":
["The reception.","受付室実"],"의 호감도 ↑":
["The pleasure ↑","喜び ↑"],"이 순 마치기":
["Finish activity","この予定を終える"],"이달 일정 실행":
["Begin the month","今月の予定を開始"],"이달의 수요":
["The month.","月のチャンス"],"이번 달 중점 업무":
["This month’s priority","今月の重点業務"],"이번 심의 유보":
["This heart of","この心の ⁇"],"일반 견본 가능":
["Possible general","一般的な可能性"],"일정표 → 상순":
["The schedule is simple.","スケジュールは、"],"일정표 → 저택":
["Calendar for the house.","会計 ホーム"],"일정표 → 중순":
["The schedule is mid-","スケジュールは中間"],"일정표 → 하순":
["The schedule is","スケジュールは、"],"읽어 봐.":
["Read it.","読んで。"],"입상권 밖":
["Out of the right.","入力権外"],"입출금 내역":
["Transactions","入出金明細"],"자, 어디에?":
["Well, where shall it be?","さて、どちらになさいますか？"],"자유행동 결과 보기":
["See the freedom.","自由行動の結果を見る"],"작위 심의 기준":
["The work of the heart.","働きの心の基準"],"작위 심의 확인":
["Confirmation of the heart.","心の確認"],"장면 마치기":
["Finish the scene.","シーン終了"],"장미의 표찰":
["The Rose Sign","バラの印"],"저장 기록 없음":
["No saved game","セーブデータなし"],"저택 → 대화":
["Home → conversation","家 会話"],"저택 → 상점":
["Home → shop","ホーム → 店"],"저택 → 일정표":
["Home → schedule","ホーム → スケジュール"],"저택 근무지":
["House work.","ホーム 仕事"],"저택 메뉴 위치":
["Home Menu Location","ホームメニュー位置"],"저택 지시 변경":
["Home Instructions Change","家指示変更"],"저택 체조실":
["The house of the body.","ホーム トレーニング"],"전 품목 합산":
["I have the assembly.","わたしは、合計"],"정오의 왕진":
["The Queen of the Day.","午後の王様"],"정원 연주회":
["The Garden Play","庭園演奏会"],"주방의 명령":
["The kitchen order.","キッチンの命令"],"준비비 부족 ·":
["Lack of preparation.","準備不足"],"진열병 두 개":
["Two diseases.","熱病2名"],"집사니까요.":
["for home.","家事です。"],"창가의 대답":
["The window answer.","窓の答え"],"천의 뒷면":
["The back of the","千の後ろ"],"체리 타르트":
["Cherry tart","チェリータルト"],"초대장 답신":
["Answer invitations","招待状の返事"],"취득 · £250":
["Purchase · £250","購入・£250"],"컨디션 회복":
["Restore condition","体調回復"],"클라라 벨":
["by Clara Bell","クララ・ベル"],"타운하우스 ·":
["Townhouse ·","タウンハウス"],"토끼 두 마리":
["Two Rabbits.","ウサギ2匹"],"토머스 리드":
["Thomas Reed","トーマス・リード"],"투자·사업 지출":
["Investment and business expenditure","投資・ビジネス支出"],"판매가 (£)":
["The sale (£)","売り上げ(£)"],"팬텀 사 경영":
["Manage Funtom","ファントム社の経営"],"팬텀사 제작소":
["Phantom Production","ファンタジー製造"],"팬텀사 회계":
["Funtom accounting","ファントム社の会計"],"팬텀사의 이름으로":
["by the name of Phantom.","ファンタジーの名前"],"편지의 다른 뜻":
["Other meaning of the letter.","手紙の意味"],"평소대로 따른다":
["Follow as usual.","通常通り追いかける"],"프롤로그 다시 보기":
["Replay prologue","序章を振り返る"],"피니안 영입":
["Pinnacy entrance","フィニア入り"],"하순 · 경연":
["The competition","レース・コンテスト"],"하순 경연으로":
["The competition.","単純競技"],"한 달 일정 편성":
["A month of schedule.","1ヶ月の予定"],"한 자리의 거리":
["One street.","1 場所の通り"],"핫초콜릿":
["Hot chocolate","ホットチョコレート"],"현장을 직접 찾는다":
["Find the scene.","現場を自分で見つける"],"현재 가용 자금":
["Available funds","利用可能な資金"],"현재 물량으로 판매":
["Currently sold in water.","現在の水量で販売"],"현재 상태 · 100점":
["Current status: 100 points.","現在の状態 · 100 ポイント"],"홍차 한 잔":
["Cup of tea","紅茶一杯"],"활동을 선택하세요.":
["Select an activity.","の活動を選んでください。"],"회상 마치기":
["Finish the memory.","思い出終了"],"힘을 원해.":
["I want power.","力が欲しい。"],", 시엘의 경영":
["The management of Seal.","シエルの経営"],"· 가문 명성 +":
["Family reputation +","● 家族名声+"],"· 가문 명성 +1":
["Family reputation +1","● 家族名誉 +1"],"· 미납 부담금":
["· Untold charge","■ 無償の負担"],"· 앞 수업 응용":
["• Advanced classes","●前授業の応用"],"― 빅토리아.":
["and Victoria.","ヴィクトリア"],"가 둘이고 D가 없다":
["There are two and no D.","二つ、Dは無い。"],"가 둘인 알파벳":
["The two alphabet.","アルファベット2つ"],"가문 명성 +2":
["Family reputation +2","ファミリー名声 +2"],"가문 명성 상승":
["Family reputation increased.","家族名声の増加"],"가문 장부 복원":
["Family Recovery","家庭の復元"],"가문 증빙 확보":
["Family Assurance.","家庭の確保"],"가장 많이 편성한 일정":
["The most fixed schedule.","最も整備された日程"],"개 소매 · 매출":
["Dogs to sell.","犬の売り上げ"],"개발비 할인 별도":
["The Star Development.","開発の星"],"거래처 재주문":
["The transaction.","取引所の再注文"],"건강 악화로 종료":
["Ending · Ill Health","病による結末"],"결과 대사 넘기기":
["The Ambassador.","大使を渡す。"],"경영 행운 수입":
["Successful income management.","運の収入管理"],"고급 견본 가능":
["Possible high-level","高度な実験が可能"],"골목에서 고른 편":
["Choose from the street.","街の選ばれた側"],"공들인 인사의 끝":
["End of the greeting.","ボールの挨拶の終わり"],"과정을 먼저 짚는다":
["First to the process.","プロセスを先に"],"교육을 맡기다":
["Give education.","教育を渡す"],"구동 구조를 기록한다":
["Recording the rescue.","救助記録"],"규칙서의 첫 장":
["The first chapter of the rule.","ルールの第一章"],"근무 일지를 본다":
["See the work.","仕事の日見"],"기계 완구 상인":
["Machine tournament.","機械の仕組み"],"기계 인형 제작소":
["Machine manufacturing.","機械人形製造"],"기기 설정 따르기":
["Use device settings","端末設定に従う"],"날짜와 보유금":
["Date and deposit.","日付と保有料"],"날짜판과 명패":
["Date and list.","日付と印"],"남은 과자를 권한다":
["Recommend the rest of sweets.","残りの甘いものをおすすめします。"],"남은 교육·활동비":
["The remaining education.","残りの教育・活動"],"남은 지출 합계":
["Remaining expenses","残りの支出合計"],"납기부터 확인한다":
["Check from the delivery.","発送から確認"],"낮잠을 연장한다":
["Extend the sleep.","昼眠りを延ばす。"],"네 이름은 뭐지?":
["What is your name?","あなたの名前は?"],"네, 도련님.":
["Yes the Dutch.","はい、ドーシュ。"],"능력치 변화 없음":
["No change of ability.","能力の変化なし"],"닐기리 홍차":
["Nylon Tree","ニール・グラス"],"다른 목격자를 찾는다":
["Find another witness.","他の目撃者を探す"],"다음 방문을 약속한다":
["Promise the next visit.","次の訪問を約束する。"],"다음 봄의 약속":
["The promise of the next spring.","来年の春の約束"],"다음 손님을 맞는다":
["The next guest.","次のゲストに合う。"],"답례 방문을 잡는다":
["Take a visit.","返信訪問"],"답방을 약속한다":
["Promise the answer.","答えを約束する。"],"답장이 오는 초대장":
["Answer to the invitation.","返信の招待状"],"대출 · £144":
["Borrow £144","借入・£144"],"돌려받은 박수":
["Rewarded Congratulations","返還された褒め言葉"],"돌아오지 않은 마차":
["The Unreceived Car.","帰ってこない車"],"두 번 울리는 노크":
["Two times noise.","二度ノックを鳴らす。"],"따뜻한 콘소메":
["Warm consommé","温かいコンソメ"],"뜯긴 모서리":
["Cuted corners","折れた角"],"뜻밖의 일자리":
["Unexpected jobs","予期せぬ仕事"],"라벤더 향주머니":
["Lavender sachet","ラベンダーの香り袋"],"런던 상점가":
["The London shop.","ロンドンショップ"],"런던 운영 일지":
["Operating in London.","ロンドン運営"],"런던의 번지":
["The London.","ロンドンのバンク"],"리버티 완구점":
["Liberty is finished.","リバート 終点"],"마지막 명령 · 백작":
["The Final Order · Earl","最後の命令・伯爵"],"마차를 빌리다":
["Rent a car.","車を借りる。"],"만날 수 있는 사람:":
["People to meet:","会える人:"],"만남은 방문 때 확인":
["Check at the visit.","会った時の訪問確認"],"맡아 둔다":
["take on.","担当する"],"매점 주인의 시식":
["The owner’s time.","主人公の時間"],"먼저 다과를 함께한다":
["First to go together.","まずはダウトと共に。"],"먼저 한 수 둔다":
["Let me first.","まずは置いておく。"],"목재 하역 지연":
["The wood is over.","木材の延期"],"몸 상태를 묻는다":
["Asking about body.","体の状態を問う。"],"문맥을 다시 읽는다":
["Read the link again.","再度文句を読む"],"바이올린 실기":
["The Violin","バイオリン実"],"반달 모양 구멍":
["Half-month hole","半月の穴"],"발밑부터 다시 본다":
["Looking back from the foot.","足の下から再び見る"],"백 자리 전부 유료":
["100 places all paid.","全100位 全額"],"백작에게 묻다":
["Ask the Count.","伯爵に尋ねる。"],"번, 전액 반환":
["Back, the return.","再び、全額返金"],"번호 대신 이름을":
["Name instead of number.","番号代わりに名前"],"병환 시 방문 취소":
["Canceled visit to the hospital.","病気の訪問キャンセル"],"봄꽃 정원제":
["Spring Flowers Garden","春花園"],"봉랍 확인을 요청함":
["Request for checking.","封筒確認を要求"],"봉투에 적힌 이름":
["Name in the package.","包装に書かれた名前"],"불러오기 완료":
["Calling is finished.","呼び出し完了"],"불을 지키는 사람":
["Who protects fire.","火を守る人"],"비단 견본장":
["Silk swatch book","絹の見本帳"],"빅토리아 다실":
["Victoria is","ヴィクトリアは"],"빅토리아.」":
["and Victoria.”","ヴィクトリア」"],"빈 상자의 값":
["The price of the empty box.","空っぽの箱の値段"],"빈자리는 메이드":
["The room is mead.","空きメイド"],"삐걱거리는 축":
["The shameful axis.","ひきこもりのエース"],"상자에 남은 이름":
["Name in the box.","箱に残った名前"],"상장은 내 것이지만!":
["The sign is mine!","レコードは私のもの!"],"상태 → 가문 장부":
["The state of the family.","状態は家庭主"],"새 판에서는 다른 물품":
["Other items in the new edition.","新品の新品は、"],"새벽 두 시의 종":
["Two morning climbers.","朝の二番目"],"새소리 악보집":
["Birdsong sheet music","鳥の歌の楽譜集"],"생산·소매 등급":
["Product grade","生産・小売等級"],"서로에게 보낸 박수":
["Congratulations to each other.","お互いに褒められた。"],"선물 리본 주문서":
["Requested by Raven.","リボンプレゼント"],"설비 매각 대금":
["The equipment is paid.","設備 売り払い"],"설탕을 하나 줄인다":
["Reduce the sugar.","砂糖を減らす"],"소마·아그니":
["by SOMA AGNY","ソマ・アグニー"],"손님 접견 계속하기":
["Continued guest visit.","ゲストの接待を続ける"],"손님이 돌아간 뒤":
["After the guest returned.","ゲストが戻ってから"],"손으로 전할 편지":
["Letter to hand.","手で送る手紙"],"수레를 시연한다":
["Showing the Sure.","サラを示す。"],"수첩 {number}":
["Notebook {number}","手帳 {number}"],"수치 변동 없음":
["No shift.","数字変更なし"],"수확 감사 바구니":
["Thanksgiving to the basket.","感謝の箱"],"숙련 보너스 +":
["Advanced Bonus +","優秀ボーナス+"],"스토리’ 시리즈":
["Story of Sirius","ストーリー『シリーズ』"],"시설별 유지비와 상태":
["Facility upkeep and condition","施設ごとの維持費と状態"],"시엘에게 말 걸기":
["Talk to Seal.","シエルに話す。"],"신상품 개발비 할인":
["The new product development.","商品開発の割り当て"],"아래층의 쪽지":
["The bottom.","下の側"],"아직 봉한 견본":
["Still covered.","まだ封印"],"아직 안 불렀는데?":
["Not called yet?","まだ呼ばれていない?"],"엘리자베스":
["Elizabeth","エリザベス"],"여왕의 초청장":
["The Queen's invitation","女王の招待状"],"연락망을 정리한다":
["Clean the contact.","連絡先を整理"],"연회 좌석표":
["Party seats.","パーティー席"],"연회가 끝난 뒤":
["After the party ended.","パーティー終了後"],"영수증을 찾는다":
["Looking for receipt.","受付を検索"],"영입 장면 다시 보기":
["View the entry again.","入場再見"],"영지 소작농 대표":
["The Deputy Farmers.","主人公の農家"],"예상 월말 자금":
["Projected month-end funds","月末資金の見込み"],"왕실 납품 후보":
["Royal Supply","王室配達の申請"],"왕실 신뢰 상승":
["Royal Trust Increases","王室信頼の増加"],"왕실 신임 상승":
["The Royal Rise.","王室の新名が上昇"],"왕실 심의와 교육":
["Royal Mind and Education","王室の教育と教育"],"왕실 인증 보류":
["Royal Certificate","王室証明書"],"왕실 작위 심의":
["Royal title review","王室の爵位審査"],"왕자의 두 번째 명령":
["The Prince's Second Order","王子の第二の命令"],"우리의 행선지를 확인한다":
["Check our route.","わたしたちの行進を確認する。"],"운영·물류비 변화":
["Change of operation.","運用・物質の変化"],"운임을 다시 본다":
["See the work again.","再度運転を見る"],"원장의 마지막 한 닢":
["The last of the boss.","主人公の最後の ⁇"],"월별 영업 장부":
["Monthly trading ledger","月別営業帳簿"],"으아아……!":
["Oh oh oh!","ハイ・・・!"],"은인은 손님으로":
["The guest is guest.","ゲストはゲスト"],"은제 달걀 장식":
["The egg decoration.","銀の卵を飾る"],"은제 찻숟가락":
["The silver.","銀のカップ"],"이 순 마치기 ›":
["This is finished.”","終わりはこれ」"],"이달 소매 수요":
["Month of Sweat.","月の ⁇"],"이달 영업이익":
["This month’s operating profit","今月の営業利益"],"이달 자금 예상":
["Monthly forecast","今月の資金予測"],"이달의 발주서":
["The month of the month.","月の発射"],"이달의 초대장":
["This month’s invitation","今月の招待状"],"이전 회차의 선택 ·":
["Choice of the previous rounds","前の車の選択"],"인쇄소의 주문서":
["Order of the printing.","印刷店の注文"],"인수증의 서명":
["Signature of the certificate.","認定書の署名"],"인증 요건 미달":
["Certificate is MIDAL.","認証はミダル"],"일곱 과목 만점":
["Seven points.","7 ポイントの分"],"일정표 → 실행 확인":
["Check the schedule.","スケジュール 実行確認"],"일정표 → 자유행동":
["The schedule of free action.","スケジュール 自由行動"],"자유행동 → 서재":
["Freedom of action.","自由行動 → 立場"],"자유행동 성과 ·":
["The freedom of action;","自由行動の成果"],"장부 원본 보관":
["The original stock.","オリジナル保管"],"재작업 · £12":
["Recovery £12","再起動 · £12"],"저택 개수·지원":
["Home  Support","ホーム サポート"],"저택 운영 · 시설 유지":
["Housing Operations · Facilities Maintain","ホーム・オペレーティング・施設維持"],"저택 지도 → 주방":
["Home → Kitchen","家もキッチンも"],"저택의 새 사용인":
["New Users of the House","家の新用"],"저택이 찾는 사람":
["Who is looking for house.","家を探している人"],"절을 다시 시킨다":
["Re-called the","再び礼拝"],"정중하게 끝맺는다":
["Ended Honestly.","誠実に終わる。"],"주빌리 기념품상":
["The Jubilee Memorial.","ジュビリー記念品"],"지난겨울 도안첩":
["Last winter help.","冬の助け"],"직원 대표를 만난다":
["Meet the staff representative.","スタッフ会見"],"직접 가문을 소개한다":
["Present the family.","家族を紹介する"],"쨍그랑 ―!":
["and the!","⁇ と～!"],"차를 더 따를 시간":
["More time to drive the car.","車をもっと追いかける時間"],"참가 경연별 우승":
["Participation in competition wins.","参加競技優勝"],"창가에서 한 호흡":
["A breath from the window.","窓から息を引く。"],"창가의 올빼미":
["The window up.","窓の上"],"책 가장자리의 연필":
["The Book of the Pen.","書籍の端の鉛筆"],"천천히 다시 돈다":
["Slowly paying back.","ゆっくり返金"],"최종 보유 자금":
["Final funds.","最終資金"],"축을 바꿔 본다":
["Changing the axis.","エッセンシャルを変える"],"카모카테 시리즈":
["Camocate series","カモカテシリーズ"],"카이로소프트 ‘":
["by Cairo »","カイロソフト »"],"커튼을 닫는다":
["Closing the curtain.","カーテンを閉じる"],"팬텀 사 → 제작실":
["Phantom is the manufacturer.","ファンタム・サ 製造室"],"팬텀 사(社)":
["Funtom","ファントム社"],"팬텀사 사무실":
["The Phantom Office.","ファンタジーオフィス"],"팬텀사 지시 변경":
["Changes in Phantom.","ファンタジーの指示変更"],"편성 기록이 없습니다.":
["No recording.","記録は無い。"],"평판 4부터 개량":
["Reputation 4","評判4から改良"],"표지로 돌아가기":
["Return to title","タイトルへ戻る"],"풋맨으로 맞는다":
["Right to football.","足元に合う。"],"하트웰 완구점":
["Hartwell is finished.","ハートウェル 終点"],"한 줄 밀린 가격표":
["A one-line price.","ひとつ一本の値段"],"함께 온실을 돈다":
["Paying for the greenhouse together.","温室を一緒に"],"함께 차를 든다":
["Take the car together.","一緒に車を運転。"],"항로 측량 노트":
["Navigation notebook","航路測量ノート"],"황금빛 초대장":
["The Golden Invitation","黄金の招待状"],"회수한 입장권":
["Returned entrance","返還入場権"],"휘트컴 상회":
["Whitcom meeting.","ウィットコム会議"],"휴식 뒤 이어 간다":
["After the rest.","休憩後に行きます。"],"흰 표 쉰 장":
["White ticket  ⁇","白いチケット  ⁇  章"],"27번, 전액 반환":
["27 return to the whole.","第27話 全額返金"],"B가 둘이고 D가 없다":
["B is two and D is not.","二つ、Dは無い。"],"B가 둘인 알파벳":
["B is two alphabet.","B アルファベット"],"· 개발비 할인 별도":
["• The Star Development","■ 開発の星"],"· 이달 소매 수요":
["• Month of Sweat.","■月の ⁇"],"… 네 이름은 뭐지?":
["What is your name?","あなたの名前は?"],"… 아직 안 불렀는데?":
["Have you not called yet?","まだ呼ばれていない?"],"가 두 개이고 D가 없다":
["There are two and there is no D.","2Dもないし、Dもない。"],"가문 장부와 수첩":
["Ledger and notebooks","家の帳簿と手帳"],"가문의 올해 계획을 전한다":
["The family’s plan for this year.","家族の今年の計画を発表"],"가장 단련된 능력은":
["The most skilled ability.","最も強力な能力"],"각각 반대로 적혀 있다":
["Each is written the opposite.","各が逆に書かれている。"],"개당 도안 웃돈":
["Around the smiles.","ひとりひとりの笑い"],"검은 배경 · 암전":
["Black background · Cancer","黒い背景 · カンパニー"],"견적을 다시 읽는다":
["Read the quote again.","再度引用を読みます。"],"경연에 참가한 시엘":
["Seal in the competition.","コンテストに参加したシエル"],"곡물 나눔 장부":
["The grain shares.","穀物分割部"],"관을 가진 신의 손」":
["The hand of God with a tube.","管を持つ神の手」"],"교본으로 기를 수 있는":
["which can be written.","教科書で作れる"],"글씨를 베껴 비교한다":
["Comparing the text.","文字を比較する"],"기초·고급 수업":
["Basic and Advanced Classes","基礎・高度レッスン"],"깨울 시각을 확인한다":
["Check the awakening view.","目覚めの視線を確認する"],"꼭 닫히지 않는다":
["Not to close.","必ずしも閉じない。"],"나란히 불린 두 이름":
["Two names called together.","二人の名前のつながり"],"내가 먼저 간을 보지.":
["I first look at the liver.","まずは、お腹を見る。"],"너와 계약하겠어!!":
["I’ll make a contract with you!","お前と契約する！"],"능력치 교환 교본":
["Stat exchange manuals","能力交換の教本"],"달력에 실린 완구":
["In the calendar.","月の記録にまとめ"],"도련님. 아침입니다.":
["The morning.","こんにちは、朝です。"],"도안 번호 열일곱":
["Number of Seven.","道番号17"],"두 사람의 말을 듣는다":
["Hearing the two.","二人の話を聞く。"],"런던 완구상회":
["London meeting.","ロンドン総会"],"런던 집의 열쇠":
["The key to London House","ロンドンハウスの鍵"],"런던 타운하우스":
["London townhouse","ロンドンのタウンハウス"],"마차의 빈 네 자리":
["The car’s empty seats.","車の空席"],"명령보다 한 박자 먼저":
["One order first.","命令より先に1本。"],"목재 운반선 입항":
["The transportation line.","木材輸送線入口"],"뭐가 웃기지?":
["What is funny?","何が面白い?"],"미드포드가 영애":
["MIDFOD is a love.","ミドフォードは愛情"],"미드포드가 장남":
["MIDFOD is a man.","ミドフォードは、"],"반주자가 없는 왈츠":
["Waltz without a half-winner.","半分の無いウォルツ"],"배치된 인원 없음":
["No placed staff.","配置されたスタッフなし"],"버터 비스킷 한 봉":
["Bag of butter biscuits","バタービスケットの小袋"],"벤치를 옮긴 자리":
["The place of the bank.","ベンチを移動する場所"],"벨 & 손 제과점":
["Bell and hand.","ベル&ハンド・サプリメント"],"벽난로 옆 자리":
["next to the wall.","壁の隣に座る。"],"봉제 상태를 지적한다":
["The condition of the bond.","封鎖状態を示す。"],"봉투에 든 바퀴":
["Wheel in the package.","包装の輪"],"부활절 가든파티":
["The Garden Party.","復活の庭園パーティー"],"부활절 달걀 찾기":
["Find the Eggs","復活の卵を見つける"],"비 오는 날의 진열창":
["The rain day.","雨の日を迎える。"],"빗나갔어……?":
["You missed...?","逃げた・・・?"],"사 스토리 시리즈」":
["The story of Siri.","シリーズのストーリー」"],"사본에만 적힌 이름":
["Name only in copy.","コピーに記載された名前"],"상대의 표정을 읽는다":
["Read the face.","相手の顔を読む"],"상아색 칠교판":
["Ivory tangram","象牙色の七巧板"],"상자를 직접 열어 본다":
["Open the box on your own.","ボックスを自分で開ける。"],"상표를 빌린 자들":
["Those who borrowed the mark.","ブランドを借りる人"],"생산품 및 재고 부족":
["Production and stock shortage.","生産・供給不足"],"서신을 펼친다":
["The signature is","手紙を広げる。"],"서재 관리 권한 인수":
["Authority of the management.","管理権限の取得"],"설탕 경매가 상승":
["The sugar sales are rising.","砂糖の売上高が上昇"],"세바스찬 · 독백":
["Sebastian · Unclean","セバシュン · 独白"],"세바스찬의 강평":
["The Sebastian’s Strongness","セバシュンの強さ"],"세바스찬의 마지막 평":
["The last point of Sebastian.","セバシュンの最後のレベル"],"세바스찬의 시험":
["The Test of Sebastian","セバスチャンの試験"],"소리 내 읽어 본다":
["I read my voice.","音は読んでる"],"소매·납품 합계":
["Seller of delivery.","配達・配達合計"],"손님 이름은 열하나":
["The guest name is open.","ゲスト名はオープン"],"손잡이 달린 그릇":
["The handheld.","手袋を握る"],"수동 저장은 유지됩니다.":
["The handset is ⁇ ined.","手動保管が維持されます。"],"수확 바구니 품평":
["The Cage Cage.","収穫の箱"],"숙련도 5당 +1)":
["5 of the 1 + 1","熟練 5 + 1"],"시엘 팬텀하이브":
["Ciel Phantomhive","シエル・ファントムハイヴ"],"식당 천장의 물자국":
["The restaurant roof.","レストランの屋根"],"식어 가는 밀크티":
["Milk to go.","食べるミルクティ"],"아래층 보관, 메리":
["The bottom, Mary","ベッドのメアリー"],"아이 쉰 명 무료 초대":
["Free child invitation.","子供の招待状無料"],"아이들은 어떡합니까?":
["What about the children?","子どもたちはどうする?"],"아주 노련하셨습니다.":
["You have been very experienced.","とても経験した。"],"어느 방으로 모실까요.":
["to which room.","どの部屋に連れて行くか。"],"어디든 상관없어!":
["I don’t care where!","どこだって構わない！"],"어릴 때라니요?":
["when child?","幼い頃?"],"엘리자베스11":
["by Elizabeth 11","エリザベス11"],"엘리자베스12":
["by Elizabeth 12","エリザベス12"],"엘리자베스13":
["by Elizabeth 13","エリザベス13"],"영지의 수확 감사제":
["Thanks for the reward.","田舎の感謝"],"예상 영업이익 변화":
["Expected sales change.","売上予想の変化"],"예상 월말 잔액":
["Projected closing balance","月末残高の見込み"],"오늘 일정은 확인했나?":
["Have you checked today’s schedule?","今日の予定は確認したか？"],"온실의 여벌 열쇠":
["The greenhouse key.","温室の鍵"],"왕실 납품 인증":
["Royal delivery certificate.","王室配達証明書"],"왕실 납품 증서":
["Royal delivery certificate.","王室配達証明書"],"왕실 평가 소폭 상승":
["Royal Rate Rise","王室評価の低下"],"월말 컨디션 회복":
["The month of recovery.","月末の復活"],"응접실 후속 접객":
["The following visitors.","接待室後訪問者"],"이 가격의 예상 수요":
["This price is expected.","この価格の予想"],"이달 일정·사건 기록":
["Month of recording.","月日記 事件記録"],"이번 회차의 발자취":
["This playthrough","今回の歩み"],"인수증의 두 번째 장":
["Second chapter of the certificate.","受付証の第2章"],"일을 해? 왕자인 내가?":
["Do I work? the prince?","仕事? 王子様?"],"일정 진행과 월말 결산":
["Progress and end of the month.","予定と月末終了"],"자금 부족으로 종료":
["Ending · Bankruptcy","破産による結末"],"자선회 서기의 회신":
["Reply to the Charity","慈善会の応答"],"자유행동 · 월 1회":
["Free time · once a month","自由行動・月1回"],"작은 차이가 남긴 평가표":
["A small difference in assessment.","ちょっとした差がある評価"],"잠시 펜을 놓는다":
["Put the pen for a while.","しばらくペンを置く。"],"재작업 예약 · £12":
["Re-working reservation £12","再起動予約 · £12"],"저녁 일정을 비운다":
["Dinner schedule.","夕食のスケジュールを空き"],"저택 → 관리 · 경영":
["Home → Management · Management","ホーム → 管理 · 管理"],"저택에 자리를 마련한다":
["Place in the house.","家に座る。"],"저택의 새 셰프":
["The new chef of the house.","家の新料理人"],"접대가 끝난 뒤에도":
["After the reception is over.","受付終了後も"],"정제당 대량 입고":
["Wear a large amount.","着物量の大量"],"제작실 → 저택 메뉴":
["Manufacturing Menu","メニュー 製造室"],"조금 앞선 새해 인사":
["A little ahead of the new year.","少し先に新年おめでとう。"],"조리대를 맡긴다":
["Take the cooking.","料理を担当。"],"주머니판 모험소설":
["Pocket adventure novel","ポケット冒険小説"],"주방 → 사용인 배치":
["The kitchen is used.","キッチン用品"],"주인의 말을 기다린다":
["Waiting for the owner.","主人の言葉を待つ。"],"중순 → 서재 수업":
["The middle class.","中間 レッスン"],"지방 완구점의 추가 주문":
["Additional order of the field.","地点の追加注文"],"지출 내역·시설 효과":
["Expenses & facility effects","支出内訳・施設効果"],"직접 자리를 옮긴다":
["Move the place.","自分の席を移動する。"],"진열 담당의 수첩":
["The Secretary of the Heat.","熱中症の手紙"],"집사보다 이른 손님":
["Early guests.","ホームより早いゲスト"],"참가한 경연이 없습니다.":
["No competition involved.","参加したコンテストはありません。"],"창고 정리 할인전":
["Deposit to clean up.","倉庫の掃除前"],"처음부터 박자를 센다":
["I have a bowl from the beginning.","最初からバッグを"],"출시 승인 · 다음 달 생산":
["Start approval · next month production","発売承認 · 次の月の生産"],"출품 가능한 품목 없음":
["No possible items.","可能な物品なし"],"켜기 또는 끄기":
["Open or off.","点灯または切断"],"타운하우스 배치 효과":
["The Townhouse Effect","タウンハウス 配置効果"],"타운하우스의 문간":
["The door of Townhouse.","タウンハウスの門"],"타운하우스의 손님":
["Guest of Townhouse","タウンハウスのゲスト"],"튜토리얼 안내서":
["Game guide","遊び方"],"판매·납품 흑자":
["Selling and delivery black","売り・配達 黒"],"팬텀사 견본 소개":
["The Phantom Show.","ファンタジーの紹介"],"팬텀사 누적 매출":
["Phantom Saga.","ファンタジーの売り上げ"],"팬텀사 소매 매출":
["FANTOMS SALE","ファンタジーの売り上げ"],"팬텀사 소매 수요":
["FANTOMS SCHOOL.","ファンタジーの売り手"],"팬텀사 예상 매출":
["Projected Funtom sales","ファントム社の予想売上"],"팬텀사 운영 · 생산비":
["Phantom Operations · Production","ファンタムサ・オペレーティング · 生産ビー"],"팬텀사 인지도 상승":
["The fancy is rising.","ファンタジーの認識も上昇"],"풀이를 말로 듣는다":
["Hear the grass.","草の話を聞く"],"풋맨의 첫 급료":
["The first footman.","ファースト・フットマン"],"하순 → 귀족 예법":
["The Aristotle Law.","貴族の法則"],"한 곡이 끝난 뒤":
["After a song ended.","一曲が終わった後"],"한 바퀴 더 걷는다":
["Walking another round.","もうひとつの輪を歩く。"],"합류한 사용인이 없습니다.":
["No user joined.","参加ユーザーはありません。"],"협력 공장 기록 확보":
["Factory registration.","協力工場記録を確保"],"화구 수리부터 함께한다":
["Coming with the repair.","修理から一緒。"],"화제 선택과 능력 확인":
["Check the choice and ability.","選択と能力を確認する"],"확정된 이달 예산":
["Monthly budget confirmed.","確定月間予算"],"(숙련도 5당 +1)":
["(Thanks for 5 + 1 )","(学習5分以上)"],"B가 두 개이고 D가 없다":
["There are two B and no D.","二つ、Dは無い。"],"· 예상 영업이익 변화":
["• Changes in sales expectations","● 売上予想の変化"],"「― 빅토리아.」":
["“Victoria”","「ヴィクトリア」"],"「관을 가진 신의 손」":
["The hand of God with the wombs.","「神の手」と「神の手」"],"가문 연례행사 · IF":
["Family event if","家族の年賀状 · IF"],"가문의 관습을 찾아본다":
["Find the family practice.","家族の習慣を探す"],"가자, 세바스찬!":
["Let’s go, Sivas!","行こうセバシュン!"],"가족이라뇨. 당치 않습니다.":
["Family, not to be.","家族だよ、いや。"],"같은 호칭을 돌려준다":
["Returns the same name.","同じ名称を返す。"],"개수할 때마다 · 최대 100":
["At the time of the number, up to 100","毎回数えるとき最大100"],"개수할 때마다 추가 감소":
["Additional each time.","毎回追加のスイッチ"],"개월 (상금 제외)":
["Months (except for rewards)","月(報酬を除く)"],"개월에 증설비 회수":
["Recovery in Months.","月間の復活"],"거래처 납품 대금":
["Transaction of the payment.","取引所の配達料"],"계절 경연 · 박람회":
["Contest of the Exhibition.","コンテスト・展覧会"],"골든 주빌리 기념 메달":
["Golden Jubilee Memorial Medal","ゴールデン・ジュビリー記念メダル"],"그 까닭을 묻는다":
["Ask the reason.","その理由を尋ねる。"],"그 뒤, 저택의 서재":
["After that, the house.","その後、家の宿。"],"그것도 나쁘지 않지….":
["It is not bad either...","それも悪くない・・・"],"그쪽에도 있었구나. (":
["It was there too. (","こちらもあった("],"까지 올리셨군요.":
["He raised up.","まで上げた。"],"납품 조건을 조사한다":
["Examination of delivery conditions.","配達条件を調べる"],"낮의 버킹엄궁 정문":
["Day of Burking Palace","バッキングマム宮殿の日"],"내역 외 잔액 변동":
["External change of balance.","内外のバランス変動"],"네가 마음대로 물렸어?":
["You kissed as you want?","あなたは、好きなようにキスした?"],"년 6월 21일 기념 예배":
["Celebrating the 21st of June.","6月21日 礼拝"],"는 외상으로 진행합니다.":
["It is traumatic.","トラウマで進む。"],"다른 염색 천을 청한다":
["I ask for another color.","別の色を求める。"],"다시 벗겨 드릴까요?":
["Will I get it out again?","取り戻す?"],"다음 곡을 남겨 두고":
["Leave the next song.","次の曲を残す。"],"다음 봄에도 같은 정원에서":
["In the same garden next spring.","春も同じ庭で"],"대화창 다시 표시 (H)":
["Sign the dialog window again (H)","会話ウィンドウを再表示する(H)"],"도련님, 제 뒤로.":
["My back, my back.","ドッグ、私の後ろ。"],"도련님의 말을 기다린다":
["Waiting for the word.","ドライバーの言葉を待つ"],"동사 어미부터 대조한다":
["From the mother to the mother.","東方母から対抗"],"두 번째로 돌아온 영수증":
["The second return.","二度目の返品証明書"],"두 손님의 대화를 잇는다":
["Two guests talk.","2 ゲストの会話"],"둘만의 아침 습관 기록":
["Two morning habits.","二人の朝の習慣"],"라우 상점 재고 매각":
["Roo shop and sale.","ラウ・ストア・ストア・ストア"],"런던 상인 간담회":
["London Council of Commerce.","ロンドン商人会議"],"런던 집의 두 주인":
["Two owners of London House","ロンドンの2人の家"],"리넨장 맨 윗칸":
["Man of the Upper.","リネン マン・ウィーカン"],"마지막 한 분께는 주방으로":
["The last one in the kitchen.","最後にキッチンへ。"],"명함의 호칭을 확인한다":
["Check the card name.","カードの名称を確認する"],"모두 뒷면이 빨갛다":
["All the back is red.","背面は全員赤い。"],"무례한 젊은 사업가":
["Unreliable young businessman.","無礼な若いビジネスマン"],"문장 없는 마차 · 사업가":
["A car without a business.","無文字の車・ビジネス"],"문장 없는 마차 · 정보상":
["No information on the car.","無文字の車・情報"],"문장 없는 마차 · 추적":
["Tracking without a word.","無文字のトラック · 追跡"],"박람회의 유리 진열장":
["The Glass of the Exhibition.","展覧会のガラス"],"박수로 맺는 인사":
["Congratulations to the","挨拶を送る。"],"박자가 멎은 무도회":
["The Sunset of the Sunset.","バッカが ⁇ いた会議"],"박자만 짚어 본다":
["I see the puppy.","ボクだけ見る"],"받침 종이를 빼면":
["Except the paper.","紙を除いて、"],"발의 위치를 다시 맞춘다":
["Return to the position of the leg.","足の位置を再調整"],"병환 · 다음 일정부터 요양":
["Next PostNext The next time.","次回の診療から、"],"보유금이 부족합니다.":
["Lack of funds.","保有金不足。"],"봄꽃 압화 책갈피":
["Spring Flowers Printing Book","春の花の圧縮書"],"봄꽃 표찰 맞히기":
["Spring Flowers to be shown.","春の花の印"],"봉인의 압흔을 대조한다":
["Combat the stamp.","封印の圧力に反対する。"],"봉투 무게부터 잰다":
["The bag weight.","包装重量から"],"봉투 안의 부스러기":
["The burst inside the pack.","包装内で破壊"],"빗물 아래 놓인 악보":
["The bad under the rain.","雨水の下に置かれた悪魔"],"사라진 동전 한 닢":
["The Lost Coin.","失われたコイン"],"사용인 배치 → 저택 관리":
["Use of home management.","使用する場所は、住宅管理"],"사용인 실무 숙련도 ·":
["Experience in the use;","使用する実務能力"],"사용인들의 작업 일지를 본다":
["Look at the work of users.","ユーザーの仕事を見る"],"사용인이 시엘을 대하는 마음":
["The user is concerned with Seal.","ユーザーがシエルに"],"사우스켄싱턴 박람회":
["South Kensington Exhibition","サウスケンシントン展"],"새 도안첩의 번호대로":
["The new number of the","新規の通報番号"],"서로의 곡을 들은 오후":
["Afternoon singing each other.","午後、お互いの歌を聴く。"],"서쪽 지붕의 견적":
["The West Roof.","西の屋根の ⁇"],"설비를 매각할까요?":
["to sell equipment?","設備を売る?"],"세바스찬 미카엘리스":
["Sebastian Michaelis","セバスチャン・ミカエリス"],"세바스찬의 월말 보고":
["See the Seth.","セバシュンの月末を見る"],"세바스찬의 한마디":
["One word of Sebastian.","セバシュンの言葉"],"소량 납품부터 계약한다":
["Contract from small delivery.","小さな配達から契約"],"소매 안쪽의 바늘땀":
["The inside of the needle.","内側の針の汗"],"소인의 경로를 맞춘다":
["The path of the son.","ソウンの道を歩く。"],"손님에게 새해 인사를 한다":
["Congratulations to the New Year guests.","新年おめでとうのお客さんへ"],"수확 장부를 검토한다":
["Review the refinery.","収穫の検査"],"시설 개수와 사용인 배치":
["Installation and use of the facility.","施設の使用と配置"],"시엘의 최종 능력치":
["The Final Capacity of Seal","シエルの最終能力"],"실례했습니다, 도련님.":
["Sorry to you, Mr.","申し訳ございません、ドーシュ。"],"아그니와의 다과 기록":
["The record of Agnival.","アグニーとデイの記録"],"아직 기록된 엔딩이 없습니다.":
["There is no recorded end.","まだ記録されたエンドはありません。"],"아직 기록된 인물이 없습니다.":
["There are no recorded persons yet.","まだ記録された人物はありません。"],"아직 살피지 못한 정원":
["A Garden Untold yet.","まだ見ていない庭園"],"어디까지 전하면 됩니까?":
["How far will I tell you?","どこまで伝えるか?"],"어제의 현금 출납장":
["The money of yesterday.","昨日の現金出荷"],"얼스 코트 공예 메달":
["The Ice Coat Medal.","アイスコート メダル"],"얼스 코트 인근 상점":
["The ice coat nearby.","アイスコートの近くの店"],"에드워드 미드포드":
["by Edward Middford.","エドワード・ミッドフォード"],"여왕의 골든 주빌리":
["Queen's Golden Zhuvili","女王のゴールデン・ジュビリー"],"영수증이 길어서요.":
["The receipt is long.","受付は長い。"],"예스, 마이 로드.":
["Yes, my roads","はい、マイ・ロード。"],"오늘 복도가 너무 조용해.":
["The corridors are so quiet today.","今日は廊下が静か。"],"오늘 아침 바삭하게 부러졌다":
["I was broken this morning.","今朝、バッサクに壊れた。"],"오늘부터 할 일이 아주 많아.":
["There’s a great deal to do, starting today.","今日からやることは山ほどある。"],"온실 열쇠를 건넨다":
["The greenhouse key.","温室の鍵を渡る。"],"완구상 두 곳의 증언":
["Two testimonies.","二つの証言の実現"],"완구상 초청 다과회":
["Invitation to the meeting.","総会の招待状"],"왈츠의 셋째 박":
["The Third Night of Waltz","ウォルツの3番目の夜"],"외상으로 진행할 수 있습니다.":
["Can be traumatic.","トラウマで進むことができます。"],"은상입니다, 도련님.":
["The silver, my master.","金だよ、ドッグ。"],"의 발주서를 접수했습니다.":
["received the order.","発送を受信しました。"],"의 한도에 도달했습니다.":
["reached the limit.","限界に達した。"],"의사를 다시 모셔 오겠습니다.":
["I will take the doctor back.","医者を再び連れて来る。"],"의지 +5 · 의욕 -5":
["Wish +5 · Wish -5","意志 +5 · 意志 -5"],"이미 상한에 도달했습니다.":
["I have already reached the hole.","すでに傷口に到達した。"],"이번 달 일정을 시작할까요?":
["Start the schedule this month?","今月の予定は?"],"이번 달 입출금이 없습니다.":
["No payments this month.","今月は入金なし。"],"이번 달이 마지막 영업입니다.":
["This month is the last sale.","今月は最後の売り上げです。"],"이번 도안첩과 출고표":
["This entry and the outlet.","この手紙と出張"],"인장의 연대부터 맞춘다":
["From the headline.","主人公の合意から"],"일정한 보폭으로 완주한다":
["Complete with regular","定期的なパフォーマンスで完成。"],"자선병원 식사 후원":
["Hospital food support.","病院の食事支援"],"작년 연회 감사 인사’":
["Thanksgiving for the past year’s celebration.","昨年のパーティーに感謝の気持ちを伝える」"],"작은 동전부터 다시 센다":
["Return from a small coin.","小さなコインから戻ってくる。"],"잔을 새로 내온다":
["The cup comes new.","グラスが新しくなります。"],"잠깐, 세바스찬.":
["A moment, Sivas","しばらく、セバシュン。"],"잠깐이라면 들어주지.":
["I can spare a moment.","少しなら聞いてやる。"],"잠시 머물다 돌아간다":
["Stay a moment and go back.","しばらく滞在して帰る。"],"잠시 호흡을 고른다":
["Choose a breath.","しばらく呼吸を選ぶ。"],"저택 유지·채무 상환":
["Home / Loans Return","家を保有・借金返済"],"저택 유지·채무 합산":
["Home / Loans of the Treasury","家を保有・債務合計"],"전표의 글씨를 본다":
["See the text of the letter.","表の文字を見る"],"정기 운송 자리를 계약한다":
["Contracting the transportation place.","定期運送場所契約"],"정보상의 연락망을 얻었습니다.":
["I got information contact.","情報の接続をしました。"],"정원사가 한 일을 묻는다":
["The garden asks what you do.","庭師が何を尋ねるか"],"제과장의 검식 쪽지":
["The inspector’s test.","監督の検査"],"좌석표를 고친다":
["Repair the seat.","座席を修正"],"주빌리 기념품 출품사":
["Jubilee Memorial","ジュビリー記念品の展示"],"증설하면 이번 달 준비비가":
["Prepared for this month.","準備が整ったので、今月は"],"진열대를 그려 둔다":
["put the height.","熱を置く。"],"쯧, 안됐군그래.":
["No, not so.","⁇ 、やらない。"],"차를 한 잔 더 따른다":
["Take another drink of the car.","車をもう一杯飲む。"],"찻잔 너머의 악수":
["The boat beyond the cup.","酒のあとに残る"],"찻잔을 내려놓고":
["Put the cup down.","グラスを下げる。"],"찻잔을 받아 든다":
["Get a cup.","ワインを迎える。"],"찻주전자 바로 위 선반":
["The headline right above.","直上線の正面"],"창고에서 사라진 세 벌":
["Three disappeared in the warehouse.","倉庫から消えた3人。"],"창턱의 빈 바구니":
["The empty basket.","窓の空っぽの箱"],"추가 유지비 £2 차감 후":
["Additional maintenance after £2 discount","追加の保守金 £2 後 割引"],"축하드립니다, 도련님.":
["Congratulations Mr. Doyle.","おめでとう、ドーシュ。"],"토끼가 기우는 쪽":
["The Rabbit is Hunting.","ウサギが振る舞う"],"통찰 19이면 복원 가능":
["19 is possible to recover.","19 回復可能"],"판매원의 의견을 받아 적는다":
["Request the Seller's opinion.","売り手の意見を受け入れる"],"팬텀사 소매 수요 +":
["Fantage of the Fantage +","ファンタジー・サンダル+"],"팬텀사 시제품 검수":
["Phantom Products Review","ファンタジーの検査"],"팬텀사에서 받은 적이 없다":
["I have never been in Phantom.","ファンタジーで受け取ったことがない。"],"팬텀하이브의 당주":
["The day of Phantom.","ファンタムハイブの日"],"프린세스 메이커 3":
["Princess Maker 3","プリンセス・メイカー 3"],"피니안의 신뢰 상승":
["Increased Pine's trust","フィニアンの信頼の向上"],"합격 · 고급 과정 진급":
["Acceptance of the advanced process.","進歩・進歩プロセス"],"햇살이 드는 회랑":
["The sunlight meeting.","太陽の集まり"],"현관에서 한 사람씩 맞는다":
["One person in the door.","入門で1人1人"],"현을 갈고 다시 켠다":
["Go and go back.","再び、また、振り回す。"],"현재 배치할 인원이 없습니다.":
["There is no staff to place at the moment.","現在、配置するスタッフはいません。"],"현재 진행이 초기화됩니다.":
["The progress is now starting.","現在の進歩が始まります。"],"현재 탭에 임시 저장":
["Currently on the tab.","現在のタブに一時的に保存"],"화이트채플에서 온 전보":
["Telephone from White Chapel.","ホワイトチャップから来た電話"],"확인 · 집사 세바스찬":
["Reviewed by Sebastian, butler","確認・執事セバスチャン"],"휴대폰에서 게임 여는 방법":
["How to play on your mobile.","携帯電話でゲームをプレイする方法"],"흰 장갑 한 켤레":
["One white gloves.","白い手袋1個"],"/14개월 (상금 제외)":
["14 months (except for rewards)","14ヶ月(賞金以外)"],"Test · 세바스찬의 시험":
["Test of Sebastian","テスト・セバスチャンの試験"],"‘작년 연회 감사 인사’":
["Thanksgiving for the past year’s celebration.","「昨年のパーティーに感謝の挨拶」"],"……네가 마음대로 물렸어?":
["You have bite as you want?","あなたは、好きなようにキスしたのですか?"],"가문 장부 → 저장 · 설정":
["Home → Settings → Settings","家事 設置 設置"],"가문의 장서표를 대조한다":
["The family’s records.","家族の記録を整理する。"],"가벼운 일부터 가르친다":
["Teaching from easy.","軽いことを教える。"],"검은 사탕을 찾는 손님":
["Guests looking for black sweets","黒い甘いものを探すゲスト"],"관리 유예 시 월 £8 절약":
["Saving £8 a month","管理 休暇 月 £8 節約"],"그래서 한 개만 기울었군.":
["So I only set one.","だから1つだけを押し付けた。"],"그러니까 내가 직접 왔잖아.":
["So I came myself.","だから、私自身が来た。"],"금요일 전에 받을 대금을 표시한다":
["Payments to receive before Friday.","金曜日までに支払いを表します。"],"기록 시작 시점부터 집계했습니다.":
["Recorded from the beginning.","記録開始時点から収集。"],"나는 싸우기 위해 돌아왔어.":
["I came back to fight.","戦うために戻ってきた。"],"납품 약속에 집중한다":
["Focus on delivery.","配達約束に集中"],"답장 속 꽃 이름을 다시 읽는다":
["Read the name of the flower again.","花の名前を再読する"],"대화창 숨기기 (H)":
["The dialogue window hides (H)","会話ウィンドウを隠す(H)"],"도련님의 대답을 기다린다":
["Waiting for your answer.","ドライバーの回答を待つ。"],"두 손님께 직접 순서를 청한다":
["Ask for two guests.","2 ゲストに直接注文"],"두 판의 차이를 찾아낸다":
["Find the difference between two editions.","2 版の違いを見つける"],"똑같은 곳에서 접힌다":
["In the same place.","同じ場所で押し付け"],"라고 에밀리가 말했어.":
["Emily said.","エミリーが言った。"],"라고 키츠가 말했어.":
["Kits said.","キッツが言った。"],"런던 집의 손님 맞이":
["Guest of London.","ロンドンのゲスト"],"마지막 명령 · 무관의 주인":
["The Final Order · An Untitled Master","最後の命令・無冠の主人"],"마지막 박에 맞춰 함께 인사한다":
["Welcome to the last night.","最後の夜に挨拶する。"],"마지막엔 생강 맛이 남아.":
["Finally, the flavor remains.","最後に、味が残る。"],"마차까지 직접 가서 인계한다":
["Go to the car and take it.","車まで自分で行って、"],"말없이 다음 장갑을 건넨다":
["I put the next handheld.","次の手袋を無言で"],"명령이다, 세바스찬.":
["Ordinary by Sivas.","命令、セバシュン。"],"문 앞에서 두 번 두드린다":
["2 times before the door.","ドアの前で2回打つ。"],"바구니에 묶은 리본":
["Binding in the basket.","箱に縛られたリボン"],"바닥에 붙은 꼬리표":
["The floor on the ground.","地面に貼り付けられた標識"],"바닥을 바꿔 굴린다":
["Changing the floor.","床を変える。"],"바르도가 고개를 들었다.":
["Bartholomew heard his head.","バルダが耳を傾けた。"],"백화점의 포장 견본":
["Packaging of the store.","店内のパッケージのサンプル"],"본저택으로 보낼 식사 준비":
["Preparing for meals to the house.","宿泊施設に送る食事を準備。"],"비어 있는 옆자리를 권한다":
["Recommend a vacant side.","空っぽの隣を推奨する。"],"빈 쟁반을 드는 법":
["How to get a empty battle.","空っぽの戦いを"],"살펴 둔 길 끝의 상장":
["The end of the road.","見た道の終わり。"],"상대를 만나 납기를 바꾼다":
["Meeting and changing the way.","相手に会い、交差点を変える。"],"서로의 연주에 보낸 박수":
["Congratulations to each other.","お互いの演奏に賛美を送る。"],"서재 열쇠를 돌려준다":
["Return the key.","鍵を返す。"],"선택 근무지와 인원 배치":
["Choice of work and staff.","職場とスタッフの選択"],"세바스찬에게 접수 위임":
["Request to Sebastian.","セバシュタインへの受け入れ"],"세바스찬의 안내 다시 재생":
["The Seasons are back.","セバシュの再生"],"손끝으로만 박자를 맞춘다":
["Only with the finger.","手のひらだけに触れる。"],"손을 잡아 박을 맞춘다":
["Take your hand and take the stick.","手を握り、バックに"],"시엘의 이름이 불리는 순간":
["The name of Seal.","シエルの名前を呼ぶとき"],"심사에 오르지 않은 참가표":
["Not in the judgment.","未審議の参加"],"앞 문장까지 이어서 번역한다":
["Translate to the front.","前の文字まで翻訳する。"],"어릴 때도 꼭 이랬어.":
["It was so when I was child.","子供の頃もそうだった。"],"엘리자베스의 신뢰":
["The trust of Elizabeth.","エリザベスの信頼"],"여러 분야의 최종 실기 통과":
["Final practical exams passed in multiple subjects","複数分野の最終実技試験に合格"],"여우의 대사를 고쳐 읽는다":
["Repair the sheep.","クマの大使を修正する"],"열일곱 번은 목제 완구":
["Seventeen times the tree.","17回 木の完成"],"예. 이분은 여성입니다만.":
["Yes, he is a woman.","だが、これは女性だ。"],"예. 책은 거기 두세요.":
["Let the book there.","書籍はそこに置いておく。"],"오늘 접객은 여기서 마친다":
["The visitors are here today.","今日の訪問はここで終わる。"],"오늘은 말의 보폭을 본다":
["Today I see the word.","今日は、言葉の流れを見る。"],"왕실에서 작위를 승인했다.":
["Approved the Royal House.","王室での活動を承認。"],"왕자가 직접 현관에 나와?":
["The Prince is on the door?","王子様は、直接入り口へ。"],"왕진 완료 · 컨디션 +":
["The King's Finished · Condition +","王様の完成 · 条件 +"],"외상 매출 전표를 찾는다":
["Search for trauma.","トラウマの出荷を検索"],"왼쪽 귀 끝이 찍혀 있다":
["The left ear end is shot.","左耳の端が撮影。"],"위층 매장, 주인에게 직접":
["The top store, directly to the owner.","屋上、主人公に直接"],"유리창 한 칸의 사용료":
["Use of a glass.","ガラス1カンの使用"],"이 판본의 눈송이 장식":
["The eye of this paper is decorated.","この絵本の目が飾られています。"],"이 하나 갖고 싶었거든.":
["I wanted to have one of this.","あるもの持って欲しい。"],"이달 운영 지시 확인·변경":
["Month of change.","月間運用指示確認・変更"],"이번 순에는 수치 변화가 없습니다.":
["There is no change in this time.","この時点で、数値の変更はありません。"],"이었습니다. 팬텀사의 개발품은":
["The development of the Phantom.","ファンタジーの開発"],"인칭 어미를 고쳐 읽는다":
["Repair the mother.","母の名称を修正する"],"입맛이 없는 날에 추천해.":
["Recommended for a day without taste.","味わえない日におすすめです。"],"장부는 두고 가십니까?":
["Do you leave the cabin?","主人公は残す?"],"저녁 식단을 함께 짠다":
["We eat dinner together.","夕食を一緒に食べる。"],"저녁에도 같은 잔을 부탁한다":
["Please drink the same cup at dinner.","夕食でも同じ杯を飲む。"],"저택과 런던의 방문 기록":
["Visit records and London.","ホームとロンドンの訪問記録"],"정기 운송 4자리 확보":
["4 seats of transportation.","運送4位の確保"],"조사 자료를 왕실에 제출한다":
["Submit the investigation to the Royal House.","調査資料を王室に送る"],"좌석표를 다시 살핀다":
["Sitting the seat again.","座席を再度見直す。"],"주민에게 빵을 나눈다":
["Give the people bread.","住民にパンを"],"준비한 만큼 따뜻한 한 잔":
["A warm drink as you have prepared.","準備したほど温かいお酒。"],"지연 때의 부담을 확인한다":
["Check the load of the delay.","遅延時の負担を確認する"],"차를 올리는 순서를 묻는다":
["Ask the order of lifting the car.","車の順番を問う。"],"참가한 행사의 결과가 기록됩니다.":
["The results of the event are recorded.","参加したイベントの結果が記録されます。"],"찻잔 곁의 작은 상장":
["A small bar near the cup.","コーヒーの近くの小さなカップ。"],"창에 비춰 뒤집어 본다":
["Looking back in the window.","窓から振り返る。"],"첫 제보자에게 확인을 부탁해.":
["Please check the first subjects.","初回の受付者に確認してください。"],"클럽의 카드 두 묶음":
["Two Club Cards","クラブのカード2枚"],"타나카에게 봉랍을 문의한다":
["Asking for a Tannaka.","タナカに手紙を"],"팬텀사 이야기를 꺼낸다":
["The Phantom Story.","ファンタジーの物語を"],"팬텀사 회계 장부 제출":
["FANTOMS Accounting Officer","ファンタジー会計事務所の提出"],"편성한 일정의 예상 변동":
["Projected schedule effects","予定による変化の見込み"],"푸른 카드는 한 장도 없다":
["There is no blue card.","ブルーカードは一枚もない。"],"하지만 거짓말이 아닙니다.":
["But not a lie.","しかし、嘘ではない。"],"할아범 잘못이 아니야.":
["Not the defect.","犯人は間違いではない。"],"헌정 완구를 보낸다":
["Send the dedication.","献身を送る"],"회의 서류만 두고 간다":
["Only the meeting documents.","会議の文書だけを残す。"],"1887년 6월 21일 기념 예배":
["Celebrating the 21st of June 1887.","1887年6月21日 記念礼拝"],"……! 의사를 다시 모셔 오겠습니다.":
["I will take the doctor back.","医者を連れて来る。"],"……어릴 때도 꼭 이랬어.":
["That was the case when I was a child.","子供の頃もそうだった。"],"가문 증빙 확보 · 통찰 400":
["Home  Featured  Featured  400","家庭証明 · 見る 400"],"가장자리에 다른 색 실을 달아.":
["A different color on the edge.","横に色が違う。"],"같은 물량·가격·수요라면":
["The same price, if","同じ値段で、"],"거기부터 봤어야 했는데.":
["I had to see from there.","そこから見たはずだった。"],"거래처 일대의 시장을 조사한다":
["Investigate the business manager.","取引所の市長を調査する。"],"격변화표를 펼친다":
["The change sign.","変動表を発展させる。"],"고개를 조금만 숙여 주십시오.":
["Your head a little lower, please.","少しだけ頭をお下げください。"],"관리 지연 · 가문 명성 하락":
["Home / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family / Family","管理延期 · 家族名声の下落"],"규칙서에서 성문을 지운다":
["Cut the door from the rules.","ルールから門を切る。"],"그대와의 만남을 기대합니다.":
["I look forward to meeting you.","あなたと会うのを待っています。"],"그대의 귀환을 환영합니다.":
["Welcome to your return.","あなたの帰還を歓迎します。"],"나, 나는······.":
["I… I…","ぼ、僕は……。"],"남은 식사 비용을 계산한다":
["Calculate the rest of food.","残りの食料の計算"],"납품 기록 끝에 놓인 증서":
["The end of the delivery record.","配達記録の終わりに書かれた証明書"],"년 5월 4일 박람회 개막":
["The opening of the event on 4 May.","5月4日 展覧会開幕"],"년 5월 얼스 코트 박람회":
["May ICE CORT EXHIBITION","5月のアイスコート展"],"누적 판매·납품 18개 미달":
["18th of the sale.","売り上げ・配達 18 メダル"],"다음 상자부터 어디를 손볼까?":
["Where to go from the next box?","次の箱からどこへ行くの?"],"다음 영업일에 다시 오시라고 한다":
["Come back to the next business.","次の営業日に戻ってくる。"],"대출 실행 · £144 입금":
["Loan Running £144 Deposit","融資実行 · £144 預金"],"더 깎일 체면이 있을까요?)":
["Is there a more cut?","もっとカットするものがあるのか?"],"도련님, 편지가 왔습니다.":
["Mr. Dean, the letter has come.","先生、手紙が届きました。"],"둘의 공통 관심사를 꺼낸다":
["They draw both interests.","二人の共通の関心を引き出す。"],"라고 오스카가 말했어.":
["Oscar said.","オスカが言った。"],"라고 와일드가 말했어.":
["Wilde said.","ウィルドが言った。"],"라우 상점 중고 교본 매각":
["Roo to the shop.","ラウ・ストア・トレード"],"런던 타운하우스 근무지":
["London Townhouse work.","ロンドンタウンハウス 仕事"],"로열 워런트(수확제)":
["Royal Warren (Royal Warren)","ロイヤル・ウォーレン(収穫)"],"를 열어 보시겠습니까?":
["Want to open it?","開いてみませんか?"],"맛 없을 것 같은 메뉴인데…….)":
["It’s not a taste of the menu...","美味しくないメニュー・・・。"],"먼저 떠나는 요리사 엘런에게":
["The first to go to the cook, Elon.","まずはエレナの料理人。"],"모든 방을 돌며 진행을 지휘한다":
["Turn around every room and guide the progress.","各部屋を回り、進歩を指示する。"],"모퉁이까지 호흡부터 고른다":
["Breathing to the corner.","角から呼吸する。"],"바구니 곁의 은빛 장식":
["The light of the basket.","箱のそばに輝く。"],"보충 · 다음 수강 후 재시험":
["Next postNext PostNext Testing","次回の試験後、再検査。"],"부족한 능력과 주력 과목":
["Lack of ability and power.","能力と主力の欠如"],"사우스켄싱턴 상인회 메달":
["South Kensington Trade Council Medal","サウスケンシントン商会メダル"],"사우스켄싱턴 역 앞 완구점":
["South Kensington Station.","サウスケンシントン駅前面"],"상자를 수레에 다시 맞춰 본다":
["Look back to the box.","箱を再び見直す。"],"상품·생산량·판매가 설정":
["Production and sales are set.","商品・生産量・販売設定"],"선대는 승부에서 졌어.":
["My predecessor lost his match.","先代は勝負に負けた。"],"세바스찬의 대답을 듣는다":
["Hear the answer of Seth.","セバシュンの答えを聞く"],"소마가 준비한 수부터 받아 준다":
["Soon is ready.","ソマが準備したものから"],"시엘 팬텀하이브 경에게.":
["by Mr. Ciel PhantomHive.","シエル・ファンタムハイブさんへ"],"시엘과 팬텀하이브 저택":
["Seal and PhantomHive House","シエルとファンタムハイブの家"],"시엘이 판매 기록을 대조하게 한다":
["Seal is making a sales record.","シエルは売り記録を破る"],"식당까지 직접 동선을 살핀다":
["Go to the restaurant directly.","レストランまで直接行き"],"식탁과 장부를 함께 점검한다":
["Check the table and the table.","テーブルと食卓を調べる"],"심사대에서 납품 장부로":
["from the delivery department.","裁判所から配達"],"아그니와의 집사 교류 기록":
["The Agnival's House Records","アグニーとの交渉記録"],"아무리 명문 백작가라지만…":
["But the count...","どんなに有名な国王でも、"],"아주 잘하셨습니다, 도련님!":
["Very well done, my lord!","大変よくできました、坊ちゃん！"],"아직 어떤 주인인지 살피고 있습니다.":
["I am still looking at what owner.","どのオーナーか調べています。"],"얼스 코트 이탈리아 박람회":
["The Ice Coat Italy","イタリアのアイスコート展"],"에서 가장 진전이 컸습니다.":
["The greatest progress.","最大の進歩を遂げた。"],"엘리자베스 미드포드":
["Elizabeth Middford","エリザベス・ミドフォード"],"엘리자베스 호감도 ↑":
["Elizabeth is pleased.","エリザベスも喜んで ↑"],"엘리자베스와 함께 찾는다":
["Looking for Elizabeth.","エリザベスと共に"],"연습한 곡에 돌아온 박수":
["Return to the song.","練習曲に戻るおめでとう。"],"온실에 남은 서른두 칸":
["Two canyons in the greenhouse.","温室に残る三十二カン"],"왕궁으로 갈 마차는 물려.":
["The car to the royal palace.","王宮へ行く車を乗せて"],"왕실에서 이번 심의를 유보했다.":
["This was held in the royal house.","王室でこの点を守りました。"],"요즘 팔리는 물건을 묻는다":
["I ask for the goods sold today.","今日売り切れの商品を"],"원서의 인용부호를 확인한다":
["Check the original signature.","原文の記録を確認する"],"이건 누가 묻힌 거지?":
["Who is buried?","誰が埋められたのか?"],"이걸 누구한테 받으셨소?":
["Who received this?","これを誰に届けたのか。"],"이달의 교본은 이미 사용했습니다.":
["The month’s text has already been used.","今月のレポートはすでに使われています。"],"이제야 표정이 풀리는군요.":
["Now the face is shut down.","顔が解き放つ。"],"일정 편성 중에 구매할 수 있습니다.":
["You can buy in a schedule.","予定中に購入できます。"],"자, 작은 숟가락 여기 있습니다.":
["Here is a small cup.","こちらは小さなカップ。"],"자선회 소장 원본을 베낀":
["The Charity Committee gave its original.","慈善会長の原則"],"자유행동 · 병환으로 방문 취소":
["Canceled visit to the Free Service","自由行動・病気訪問キャンセル"],"잠깐. 한 번만 더 해 보고.”":
["“I’m going to do it once more.”","「もう一度見てみよう」"],"장부 여백에 본을 뜬다":
["I see the head.","⁇ の見た目。"],"저 어린 나이에 왜 훈장을?":
["Why not to be a child at that age?","なぜ、若い頃に、お金がかかるのか。"],"저택 관리 → 팬텀 사(社)":
["Home Management → Phantom SA (Company)","ホーム管理 → ファンタムサ(社)"],"저택의 시야를 맡긴다":
["The view of the house.","家の視線を"],"점수와 별개로 남은 수량":
["The remaining number and the remaining number.","残り数と分数"],"종이 울리기 전의 납품":
["Delivery before the paper loads.","紙の鳴き声の前に"],"창가에서 햇빛을 쬔다":
["Sunlight from the window.","窓から太陽が輝く。"],"첫 제보자에게 답장을 보냈다.":
["I sent the first respondent.","最初の受講者に返信しました。"],"최근 판매로 이번 달 소매 수요 −":
["Last sale this month.","月末の売り上げで、"],"친절하게 일러바치지 마!":
["Don’t be kind!","親切に言わないで!"],"타나카 복귀 · 서재 근무":
["Tango Returns to Work","タナカ 帰還 · 勤務"],"타나카 복귀 · 신뢰 상승":
["Tanaka Return · Trust Increase","タナカの復帰 · 信頼の向上"],"타나카에게 교육을 맡긴다":
["Education for Tannaka.","タナカに教育を"],"팬텀하이브 백작 귀하.’":
["“FantomHive Count.”","ファンタムハイブ伯爵さん」"],"팬텀하이브 백작 메이커":
["Earl Phantomhive Maker","ファントムハイヴ伯爵メーカー"],"팬텀하이브 저택 단면도":
["Phantom House of the House.","ファンタムハイブの家"],"팬텀하이브 저택의 서재":
["The Phantom House.","ファンタムハイブの家"],"필요할 때마다 마차를 부른다":
["Call the car whenever needed.","必要に応じて車を呼びます。"],"하지만 제 방식은 스파르타입니다.":
["I should warn you, though. My methods are rather strict.","ただし、私のやり方はスパルタですよ。"],"한 푼도 어긋나지 않는다":
["No one penny.","1ポンドも反対しない。"],"할게!! 맡겨만 줘!!":
["I will do it! give me!","やっぱり! やっぱり!!"],"홍차와 케이크를 낸다":
["Bringing the tea and cake.","紅茶とケーキを。"],"(더 깎일 체면이 있을까요?)":
["(Are there any more cut?","(もっとカットするものがあるのか?)"],"(맛 없을 것 같은 메뉴인데…….)":
["(It is a menu that doesn’t taste.)","(味わえないメニュー・・・)"],"‘팬텀하이브 백작 귀하.’":
["“FantomHive Count of you.”","「ファンタムハイブ伯爵よ」"],"“잠깐. 한 번만 더 해 보고.”":
["“I’m going to do it once more.”","「もう一度、見てみよう」"],"……거기부터 봤어야 했는데.":
["I had to see from there.","そこから見たはずだった。"],"……이걸 누구한테 받으셨소?":
["Who did you receive this?","誰にこれを受け取ったの?"],"가문 증빙 확보 · 통찰 +5":
["Home > Health & Safety > 5+","家庭証明 · 見る +5"],"가족분들께 사람을 보내셔야겠습니다.":
["You have to send people to your family.","家族に人を送る。"],"개수할 때마다 · 피로 보정 전":
["Per renovation, before fatigue","改修ごと・疲労補正前"],"검은까치밥 맛의 생산을 줄인다":
["Reduce the taste of black beans.","黒いカエルが味を減らす。"],"견본에 가격표를 달아 본다":
["Look at the price sample.","サンプルで値段を調べる"],"관리 · 경영’에서 ‘팬텀 사(":
["The “Fantasy” (The Fantasy)","管理・管理の「ファンタム」"],"그가 내게 바란 것은 세 가지였다.":
["He asked three things of me.","彼が私に求めたものは三つ。"],"그대와의 만남을 기대합니다.」":
["I look forward to meeting you.”","あなたと会うのを待っています」"],"그래. 오늘 들고 갈 건 따로 있어.":
["I have to take it with me today.","・・・今日も持って行くのは、ひとりで。"],"그래서, 내일부터는 수업이 없나?”":
["So, there’s no lessons tomorrow?”","「明日から授業は無いの?」"],"그렇구나…… 정신이 하나도 없네.":
["No... there is no mind.","・・・精神が無い。"],"그리고 절대로 거짓말을 하지 않을 것.":
["And I was never to tell him a lie.","そして、決して嘘をつかないこと。"],"그림자를 따라 날짜를 베껴 쓴다":
["Take the shadow of date.","影に日付を記録する"],"그의 명령에 절대복종할 것.":
["I was to obey his every order.","彼の命令には絶対に従うこと。"],"기품 +6 · 가문 명성 상승":
["6+6 Family reputation increase","商品+6 · 家庭名声の増加"],"남은 거리에 맞춰 걸음을 나눈다":
["Walk on the remaining street.","残りの通りを歩く。"],"내 옷깃을 놓으면 대답하지.":
["I put my clothes in answer.","着替えをしたら答える。"],"누구보다 빨리 진짜가 되어야지.":
["We’ll have to become the real thing faster than anyone else.","誰よりも早く本物にならなくてはな。"],"다음 곡도 같은 속도로 청하겠습니다.":
["I will be playing the next song at the same speed.","次の曲も同じ速さで聴きます。"],"다음 달 계획에서 배치를 바꿀 수 있습니다.":
["You can change your layout in the next month plan.","来月の計画を変更する。"],"다음 달 교육비와 생산비를 확인하세요.":
["Check the production and education costs next month.","来月の生産と教育をチェック。"],"도련님의 방은 제가 정리하겠습니다.":
["I will clean your room.","部屋の掃除をします。"],"도련님의 성함도 함께 불렸습니다.":
["The Holy Spirit is called together.","神聖さも呼ばれました。"],"도련님이 고를 때까지 둔다":
["You leave until you choose.","選ぶまで、おまえを"],"들었어. 같이 인사하고 올게.":
["I’m going to come and greet you together.","こんにちは、一緒に来てくれます。"],"마구간에서 다른 마부를 부른다":
["Calling another man in the shadow.","別のマラソンで呼びかけます。"],"마차를 부를까요, 도련님?":
["Call the car, my friend?","車を呼ぶか?"],"먼저 배치할 사용인을 선택해 주세요.":
["Please choose the user to place first.","まずは、利用者を選択してください。"],"메이린에게 길이를 맡긴다":
["Give the way to May.","メアリーに道を渡す。"],"방문을 마치고 마차로 돌아왔다.":
["After the visit, I returned to the car.","訪問を終え、車に戻りました。"],"새로 맞춘 지 얼마나 됐다고.":
["How long it was new.","新しくいくらかで、"],"서둘러 알현복을 준비해야겠습니다.":
["We need to prepare the clothes quickly.","急いでスイッチの準備をします。"],"서로 발을 보면서 한 번 더 춘다":
["Looking at each other's feet again.","互いに足を振り返って、またひっくり返す。"],"서재 수업 · 기록 조사 · 라틴어":
["Library lessons · Archives · Latin","書斎の授業・記録調査・ラテン語"],"선금 £32 · 가문 명성 상승":
["£32 · Family reputation increase","収入 £32 · 家族名声の増加"],"셋째 마디부터 끝까지 이끈다":
["From the third word to the end.","第三の言葉から最後まで"],"손님은 딱 한 분이셨습니다.":
["The guest was only one.","ゲストはひとりだけでした。"],"수락 완료 · 월말 자동 납품":
["Automotive delivery is completed.","受付完了 · 月末自動配達"],"수치가 이미 한도에 도달했습니다.":
["The numbers have already reached the limit.","数字はすでに限界に達した。"],"수프를 찻잔에 담았네.":
["Soup in a cup.","スープをカップに置いた。"],"시엘 팬텀하이브 경에게.」":
["to Mr. Ciel PhantomHive.”","シエル・ファンタムハイブ氏に」"],"심사표도 함께 챙겨 둬.":
["Take the card together.","証明書も一緒に持って行け。"],"아직 마구간에 있습니다, 왕자님.":
["I am still in the shadow, Prince.","まだ、おじいちゃんのところにいるんだよ。"],"아첨하는 것도 집사다워졌군.":
["You have also been home-made.","主人公も、おめでとう。"],"앞선 악구를 떠올려 잇는다":
["Remember the evil.","前の悪口を思い出します。"],"얼마나 아름답고 어리석은가.":
["How beautiful and stupid.","なんて美しくて馬鹿げた。"],"엘리자베스 호감도 +3":
["Elizabeth is happy +3","エリザベス 喜びも +3"],"여덟 번째 판에서는 무엇을 바꿀까?":
["What will change in the eighth edition?","8番目に何が変わるのか?"],"여섯 상자를 모두 무상으로 교환한다":
["All six boxes are exchanged.","6箱を無償に交換する"],"열하나. ……제대로 셌네.":
["Open. . . it is right.","オープン・・・正しく。"],"영수증을 맞춰 손님을 찾는다":
["Find guests for receipt.","受付証明書でゲストを検索"],"우리 서커스의 단장 대리야.":
["The head of our circus.","私たちのサーカスの主人公です。"],"이건 왜 따로 빼 놨어?":
["Why did you take it out?","なぜこれを自分で取り出したのか。"],"이번 달에 집계된 시설 효과가 없습니다.":
["The installations that were collected this month do not work.","今月の収集施設は機能しません。"],"인증 품목 수요 매달 +2개":
["Certificate item demand +2 per month","認定項目要求 1ヶ月 + 2個"],"자두인 병에서는 검은까치밥 향":
["In the black shark, the sickness.","病気の黒い口臭"],"잔을 들고 그 자리에서 마신다":
["Take a cup and drink in the place.","酒を飲み、その場所で"],"잘 어울리십니다, 도련님.":
["You fit well, Mr.","うまくいく、ドッグ。"],"접는 방향을 달리해 봐.":
["Go in the direction.","向きの方向を振り回す。"],"종이표를 떼어 한데 두었다":
["I took the paper and left it.","紙を捨てて、残した。"],"찻잔 옆에 레몬을 놓는다":
["Put lemon next to the cup.","グラスのそばにレモンを置く。"],"첫 사건을 마치면 선택이 기록됩니다.":
["When the first case is completed, the choice is recorded.","最初の事件が終わった後、選択は記録されます。"],"타나카에게 다음 권도 맡긴다":
["The next power to Tannaka.","タナカに次の権限を渡す。"],"푸른 카드 한 장을 내야 한다":
["You need a blue card.","ブルーカードを1枚入れる。"],"피니안이 외우는 법을 듣는다":
["Finnair Hears the Way of Sweating.","フィニアが鳴るのを聞く。"],"하나에 종이로 D를 붙여 준다":
["I put it on paper D.","紙にDを貼り付けます。"],"하순에는 귀족 예법을 넣겠습니다.":
["I will put an aristocratic law.","貴族の法則を下す。"],"학교 지붕의 수리비를 맡는다":
["Repair the school roof.","学校の屋根の修理"],"흙이 마른 화분부터 살핀다":
["The ground is from the dry shade.","土は乾燥した水から溶けます。"],"0&&(seq.before.건강":
["0&(seq.before. health","0&(seq.before.健康"],"1886년 5월 4일 박람회 개막":
["The opening of the exhibition on May 4, 1886.","1886年5月4日 展覧会開幕"],"1888년 5월 얼스 코트 박람회":
["The May 1888 Ice Coat Exhibition","1888年5月 アイスコート展"],"B 하나에 종이로 D를 붙여 준다":
["B to a paper.","B を 1 枚の紙に D を貼り付けます。"],"「Kairosoft 사 스토리 시리즈」":
["“Kairosoft’s Story Series”","「Kairosoftのストーリーシリーズ」"],"「그대와의 만남을 기대합니다.」":
["“I look forward to meeting you.”","「あなたと会うのを待っています。"],"「시엘 팬텀하이브 경에게.」":
["“To Mr. Ciel PhantomHive.”","「シエル・ファンタムハイブさん」"],"가격표를 아래로 내려 반응을 본다":
["Look down to the price.","値段を下に表示して反応"],"견본 옆에 남겨 둔 장부":
["The sample left next to the sample.","サンプルに残された"],"결석 · 요양으로 대체 · 예약 비용":
["The cost of the reservation.","無駄 · 介護に代わる · 予約費用"],"고마워! 다음에도 같이 연주하자.":
["Thanks, we will play next.","ありがとう!次回も一緒に遊んでみよう。"],"고마워. 차가 식기 전에 마셔.":
["Drink the car before you eat.","飲む前に、お酒を飲んでください。"],"고맙다. 다음에도 같이 겨뤄 보자.":
["Thank you, let’s go together next.","ありがとう、次回も一緒に見ていきましょう。"],"교본 전체 중 매월 1권 · 즉시 사용":
["1 of the total textbooks per month · Immediately use","全編1本毎月 · すぐに使用"],"귀족 예법 · 무도 · 사교 수업":
["Aristotle class, social class.","貴族の法学 · 無道 · 社会教科"],"그 손님이 머물던 자리를 돌아본다":
["The guest is looking back to where he was.","ゲストが居住した場所を振り返る。"],"그래. 그러니 네 이름은 피니안이다.":
["So your name is Pine.","だから、あなたの名前はフィニアンです。"],"그럼 오늘의 인사도 함께 해야겠군.":
["Today’s greetings are to be accompanied.","今日の挨拶も一緒です。"],"기존 슬롯의 저장 내용을 교체합니다.":
["Replace the slot.","スロットの保存内容を交換する。"],"난 손수건 무늬인 줄 알았지.":
["I thought my hand was a shell.","手袋がかわいそうだと思っていました。"],"너는 나의 검이 되고 방패가 되어…":
["You are my sword and my shield.","あなたはわたしの剣であり、盾になる。"],"너는 커다란 희생을 치렀다.":
["You have made a great sacrifice.","お前は大きな犠牲を払った。"],"너한테 이름을 하나 지어 주겠어.":
["I will give you a name.","あなたに名前をあげます。"],"네 자리는 비워 뒀어. 들어와.":
["You have your place, go in.","席を空いて、入って。"],"누가 저 녀석의 입을 막아!":
["Someone shut that boy up!","誰かそいつを黙らせろ！"],"다음 것도 내놔. 아직 시간이 남았잖아.”":
["Let me go, you have time yet.”","次のことをやめて、まだ時間があるよ」"],"다음 산책 때 볼 가지를 골라 둔다":
["Choose the next walk.","次の散歩で見る場所を選びます。"],"다음번에는 표 값을 두 배로 정한다":
["Next time, you will double the price.","次回はチケットの値を2倍にする。"],"단계마다 개당 원가 최대 £1 절감":
["Save up to £1 per step.","各ステップごとに最大1ポンドの割引"],"답장을 대조해 정정본을 쓴다":
["Reply and correct.","答えを正しく書く。"],"더 가까이에서 보면 좋았을 텐데.":
["I would have been looking closer.","もっと近づいて見るのが良かった。"],"도련님 얼굴에 피로가 짙습니다.":
["The face is dark.","主人の顔に暗い。"],"도련님, 오늘 일정을 준비해 두었습니다.":
["Mr. Doyle, I have prepared the schedule today.","ドッグ、今日は予定を立てました。"],"두 사람에게 런던 집을 맡긴다":
["I have two homes in London.","ロンドンで2人のお家を借りる。"],"둘만의 차 취향 기록 · 의욕 +6":
["Two of the car tastes record · desire +6","二人車の味覚記録 · 欲望 +6"],"둘이 나눈 짧은 농담을 적는다":
["They both have a short joke.","二人で短い冗談を言って"],"둘이 앉아서 해가 지는 걸 본다":
["They are sitting and seeing the sun falls.","二人で座って、太陽が降るのを見る。"],"런던의 사업가로 자리 잡았습니다.":
["I was a businessman in London.","ロンドンのビジネスに就任。"],"리본에 묻은 흙을 살핀다":
["The ground buried in the ribbon.","リボンに埋め込まれた土を"],"만년필로 그린 붉은 하나마루":
["One year of green red.","緑色の赤い1年"],"말뚝에 리본을 옮겨 묶는다":
["We move the ribbon onto the mouth.","リボンを切り替え、結びつける。"],"메이드? 잠깐. 올빼미가……?":
["So, I’m going to go up...?","マイド? もう少し・・・?"],"물론이지. 우유도 곁들이겠나?":
["Will it be milk?","もちろん、牛乳も含まれていますか?"],"미결 전표 한 장은 내일까지 두겠습니다.":
["I will leave a single post until tomorrow.","明日まで、一枚の無名のカードを残します。"],"바퀴 자국을 따라 사고 순서를 짚는다":
["Routes are in order.","車輪の順番を追いかけて"],"박자를 짚으며 합주할 곳을 찾는다":
["Find a place to get together.","バッグを集める場所を探す"],"배치하면 시설 관리 수치가 오릅니다.":
["When installed, the facility management is up.","設置すると、施設管理の数値が上がります。"],"보폭을 줄여 일정한 속도로 완주한다":
["Reduce the speed and finish at a regular speed.","スピードを減らし、安定した速度で完成する。"],"봉하기 전에 날짜만 다시 적으시면 됩니다.":
["You can only re-set the date before you are closed.","閉じる前に日付を再記入するだけです。"],"분수대까지 내쉬는 숨을 맞춘다":
["breathing to the shadow.","息を引きずるまで、"],"상태\" min=\"0\" max=\"100\" value=\"":
["The status of the \"min=\"0\" max=\"100\" value=\"","状態\" min=\"0\" max=\"100\" value=\""],"서명이 한 장 남았습니다. 이쪽입니다.":
["There is one signature, here.","署名は1枚残り、こちら。"],"설마 마차 삯은 아닐 테고.":
["I think it is not a car.","車がダメじゃないのかも。"],"시엘에게 보낼 런던 소식 정리":
["New York News to Seoul.","シエルに送るロンドンニュース"],"시엘의 손 크기로 홈을 다시 그린다":
["Hear the house again with Seal's hand size.","シエルの手の大きさで家を再グリーンする"],"시엘이 반대쪽 손도 내민다.":
["Ciel is in the opposite hand.","シエルは反対の手を握る。"],"어디서 온 서신인지 보시겠습니까?":
["You see where the letter comes from?","どこから来たか見てみませんか?"],"어려울 때 시엘을 믿고 의지합니다.":
["I trust and trust Seal when it is difficult.","辛い時にはシエルを信じる。"],"여기까진 알겠어. 그다음은?”":
["I know it, what next?”","「ここまで知るよ、次は何?」"],"왕실 평가 상승 · 가문 명성 상승":
["Royal Rate Increase · Family Reputation Increase","王室評価上昇 · 家族名声上昇"],"왕실 평가 상승 · 가문 증빙 확보":
["Royal Rate Up · Family Certification Guarantee","王室評価上昇 · 家族証明"],"원본을 맡기고 사본을 부탁한다":
["Please send the original and copy.","オリジナルを残してコピーをお願いします。"],"원작과 다른 IF 세계관을 다룹니다.":
["An alternate story set in the world of Black Butler.","原作とは異なる、もしもの物語です。"],"이 시계를 제게 주시는 겁니까?":
["You wish me to have this watch?","この時計を、私に？"],"이대로 돌면 네 발을 밟겠어.":
["If you turn this way, I will walk your feet.","こうして歩いて、足を踏み出す。"],"이번 달 능력에는 큰 변동이 없었습니다.":
["There was no big change in the capacity this month.","今月の能力には大きな変化はありませんでした。"],"이제 당신은 정식으로 백작이 되었습니다.":
["You are now officially a count.","正式に伯爵になった。"],"이제 시엘 곁을 편하게 여깁니다.":
["Now I am relaxed with Seal.","シエルに安心して。"],"이제 이 탭을 닫으셔도 됩니다.":
["You can now close this tab.","このタブを閉じられます。"],"입금일 순으로 지급 계획을 짠다":
["Payment plan for payments.","支払い計画を立てて"],"저 애가…… 팬텀하이브 백작?":
["Is it a fancy count?","彼は...ファンタムハイブ伯爵?"],"저택 응접실을 수업에 내준다":
["Home Accommodation to Classes.","教室に宿泊施設を設置。"],"종, 저택에 합류한 고용인은":
["Employees who join the house.","家に加わった従業員、"],"종이가 왜 저렇게 긴지를 묻잖아!":
["Why the paper is so narrow?","紙がなぜこんなにかわいそうだ!"],"좋습니다. 그러면 서로의 몸에 계약서를.":
["Very well. Let us inscribe the contract on our bodies.","よろしい。では、互いの身体に契約の印を。"],"지금은 그 자리가 두 번째로 따뜻해.":
["This is the second time heating.","もう2度目は暖かい。"],"차가 식기 전에 마저 마시겠어.":
["I’ll finish my tea before it gets cold.","冷めないうちに紅茶を飲んでしまおう。"],"차기 심의는 언제라고 적혀 있지?":
["When is the word written?","いつの日記が書かれているのか?"],"창가에서 안대에 손을 올리는 시엘":
["He lifts his hand from the window.","窓から手を上げるシエル"],"체중이 옮겨질 때까지 기다린다":
["Wait until the weight is moved.","重さが移動するまで待つ。"],"축하해, 리지. 잘 들었어.":
["Congratulations, Riley, I heard it well.","こんにちはリジー、よく聞いた。"],"출품 전 누적 판매·납품 18개 이상":
["18 sales and sales.","売り上げ・配達 18件以上"],"파트너에게 다음 박을 짚어 준다":
["Give the next partner.","次のパートナーに、お知らせします。"],"하아…?! 지금 그런 말이나 할 때야?":
["Is it time to say that now?","・・・?今、そんなことを言う時が来たのか?"],"한 그릇 덜어서 덮어 둬.":
["Cover one piece and cover it.","1個のカバーを覆う。"],"화이트채플에서 답신이 왔습니다.":
["Reply from White Chapel.","ホワイトチャップから返信。"],"활이 걸린 두 음을 따로 켠다":
["Two shells that are taken.","ふたつの弓を一つに打ち上げる。"],"······뭐가 웃기지?":
["…What’s so funny?","……何がおかしい？"],"“그래서, 내일부터는 수업이 없나?”":
["“So, there’s no lessons tomorrow?”","「明日から授業は無いの?」"],"……가족분들께 사람을 보내셔야겠습니다.":
["You must send people to your families.","家族に人を送る。"],"…차기 심의는 언제라고 적혀 있지?":
["When is the word written?","いつ、文書の内容が書かれているのか?"],"가문 증빙 확보 · 가문 명성 상승":
["Family Certification · Family reputation increases","家庭の評判を高める 家族の評判を高める"],"같은 필체라는 데까지는 저도 동의합니다.":
["I agree with the same philosophy.","同じフィルターに同意する。"],"경영 +6 · 다음 달 가문 명성 상승":
["Management +6 · Family reputation increases next month","経営 +6 · 来月の家庭名声の増加"],"계약인을 드러내고 명령을 내리는 시엘":
["Seal to show and order.","契約者を明らかにし、命令を出すシーエル"],"궁정에서 작위 이야기가 오가는 모양이다.":
["It seems that the story comes from the palace.","宮殿で物語がやってくる。"],"귀 속의 솜을 더 단단히 채운다":
["Fill the ear in a stronger way.","耳の毛をもっと強く満たす。"],"그 양반은 장난감 장사가 아닙니다.":
["This is not a toy shop.","ゲームは、おもちゃの店ではない。"],"그건 다음 심사 때 들을 말이겠지.":
["I will hear it at the next session.","次の審議で聞くことになる。"],"그때도 같이 나오겠다는 뜻으로 들어 둘게.":
["I mean that we will come out together.","だから、一緒に出てくるという意味です。"],"그럼 나도 다음 곡을 준비해야겠군.":
["I will also have to prepare for the next song.","次曲も準備する。"],"그럼 우리는 모자걸이에 있어도 돼?":
["Can we be in the hat?","帽子にいるのかな?"],"그분은 아직 소개를 받지 못하셨습니다.":
["He has not yet been presented.","まだ紹介されていない。"],"끝에 가서 뛰면 금방인 거리인데.":
["And then, when you go and run, it is a quick way.","終わりには、すぐ走る。"],"누구에게도 지지 않을 힘을 갖고 싶어!!":
["I want the power to defeat anyone!","誰にも負けない力が欲しいんだ！"],"눅눅해진 한 통은 어떻게 처리할까?":
["How to deal with a wet water?","湿った道をどう処理するか?"],"다시 닫아 선물해도 되는지 시험한다":
["Try to get a gift again.","再度閉め、プレゼントを試す。"],"다음 납품부터 양쪽에 사본을 보내.":
["Send a copy from the next delivery to both sides.","次の配達から両側にコピーを送ります。"],"다음 생산분 세 벌을 창고에 더 보낸다":
["Next Production Three Crimes to the Storage","次の生産分は、倉庫に3つの罰金を送る"],"당신은 이제 시엘에게 가족이나 다름없어.":
["You are no longer a family for Seal.","シエルには家族がいる。"],"도련님, 다음 장을 넘겨 드릴까요?":
["Do I give you the next chapter?","次ページへ 次の記事を渡す?"],"도련님께서 다음 달에 쓰실 수 있는 돈은":
["What money you can spend next month?","来月の金がお得なのは"],"도련님께서 안정을 취하실 시간을 마련했습니다.":
["He has given time to stabilize.","安定を保つために時間をつけました。"],"도련님의 기침이 다시 잦아졌습니다.":
["The stomach of the dog has repeatedly increased.","ドッキーの発音が再び増えました。"],"두 병을 섞어 모둠 사탕으로 판다":
["Mix two bottles and sell them with dark sweets.","2 ボトルを混ぜて、暗い甘いものに売る。"],"로열 워런트 · 왕실 납품 심사":
["Royal Warrant · Royal House Delivery Review","ロイヤル・ウォーレント · 王室配達審査"],"를 넘겨 남는 순이익에 단계 적용":
["The remaining stages of the transfer.","残された純利益に適用するステップ"],"마지막 상자를 놓을 자리를 식탁에 더 마련한다":
["Put the last box on the table.","最後の箱を置く場所をテーブルに置く。"],"먼저 오신 분의 성함부터 부르시면 됩니다.":
["Call the first person to come.","最初に来た人の名声を呼ぶ。"],"박자는 맞습니다. 활 끝까지 쓰셔도 됩니다.":
["You can use it until the end of the shell.","やっぱり、やっぱり、やっぱり、最後まで弾けます。"],"병중에는 개인 경연에 출전할 수 없습니다.":
["The patient cannot participate in a private competition.","病気では、個人コンテストに出場することはできません。"],"빈 박을 받아 기억한 선율을 잇는다":
["Remember the empty memory.","空っぽのバックを思い出した。"],"사람 죽이던 손으로 메이드 일을 어떻게 하라고.":
["How to do the work of a man with the hand that killed.","殺した人の手でメイドの仕事をどうするか。"],"서로 서명할 수 있는 데까지는 왔습니다.":
["They came to signing each other.","お互いに署名できるようになった。"],"설탕은 하나. 그래, 오늘도 그걸로.":
["A sugar, so, and that’s the same.","砂糖は、今日は、"],"손님들이 봉인을 먼저 뜯었다고 답장한다":
["Guests say they first cut the seal.","ゲストが先に封印を切ったと答えた。"],"손님방에 따뜻한 물이 준비되어 있다.":
["Hot water is available in the guest room.","客室には温かい水が用意されています。"],"수집한 엔딩 {found} / {total}":
["Endings collected: {found} / {total}","収集したエンディング {found} / {total}"],"스네이크가 돌아와 풋맨으로 일한다.":
["Snake returns to work as a footballer.","スニークはフォットマンとして働く。"],"시엘이 마차 안에서 창을 두드렸다.":
["Ciel knocked the window inside the car.","シエルは車内で窓を叩いた。"],"알겠어. 참가표는 보관해 둬.":
["Keep the participation list.","参加記録を保管してください。"],"어서 와요, 팬텀하이브 백작.":
["Come, Count of Phantom.","来て、ファンタムハイブ伯爵。"],"여왕의 골든 주빌리 · 기념품 경연":
["Queen's Golden Jubilee · Memorial Contest","女王のゴールデン・ジュビリー · 記念品コンテスト"],"예. 다음번에는 더 빨리 다녀오겠습니다.":
["Next time I’ll come faster.","次回はもっと早く来る。"],"오늘 번역에는 제가 고칠 곳이 없군요.":
["I have no place to fix in today's translation.","今日の翻訳は修正する場所がありません。"],"온실의 첫 꽃을 함께 보자고 쓴다":
["Let us see the first flower in the greenhouse together.","温室の最初の花を見る"],"왕실에 가문의 활동 내역을 제출합니다.":
["Submit the family activity in the royal house.","王室での家族活動の内容を提出する。"],"우리를 이렇게 만든 놈들에게 복수할 힘을!":
["The power to take revenge on the people who did this to us!","僕たちをこんな目に遭わせた奴らに復讐する力が！"],"원본과 답신을 한 봉투에 넣어.":
["Put the original and answer in one container.","オリジナルと回答を1袋に置く。"],"전표를 어디서 가져왔는지 묻는다":
["Ask where you have the card.","どこからチケットを持ち込んだのかと聞かれます。"],"접객과 팬텀사 판매로 명성 쌓기":
["Create reputation for guests and fancy sales","ゲストとファンタムサの販売で評判を上げる"],"집사 교류 기록 · 소마의 신뢰 상승":
["Home Exchanges Record · SOMA'S Rise of Trust","ホーム 交換記録 · ソマの信頼を高める"],"창으로 빛이 드는 회랑에 선 두 사람":
["Two people in the window lighting.","窓から光を照らす二人の"],"창이 언제 그늘지는지 근무표에 적는다":
["When the window shines.","窓がいつ暗くなるかを表す。"],"첫 월간 결산 후 판매 내역이 기록됩니다.":
["The first month of the sale is recorded after the discount.","初月の売り上げが記録される。"],"춤 수첩의 빈 곡을 찾아본다":
["Looking for the empty dance song.","ダンスの曲を聴く"],"컨디션 회복 · 다음 순부터 일정에 복귀":
["The condition recovery · Return to the schedule from the next line","次回の復活から、次の日程に戻る。"],"팬텀사의 이름이 불렸습니다, 도련님.":
["The name of the fancy is called, Mr.","ファンタジーの名前が呼ばれました。"],"평평한 바닥에서 축 높이를 잰다":
["Heighting the axes on a flat floor.","平らな床に高さを上げる。"],"현재 진행을 선택한 저장 상태로 바꿉니다.":
["Change the current status of the chosen storage.","現在の選択した状態に変更します。"],"화분 번호를 장부에도 적어 두지.":
["Write the number in the box.","番号を本部にも記入します。"],"“다음 것도 내놔. 아직 시간이 남았잖아.”":
["“Let’s go, you have time.”","「もう一つ、時間は残るよ」"],"“여기까진 알겠어. 그다음은?”":
["“I know it, what next?”","「あれからわかるよ、次は?」"],"『흑집사』 비공식 2차 창작 팬게임":
["An unofficial Black Butler fan game","『黒執事』非公式二次創作ゲーム"],"가격은 정했습니다. 납기는 아직 빈칸입니다.":
["The price is fixed. the delivery is still empty.","値段が決まりました 配達はまだ空きです。"],"가장자리가 조금 깨진 건 내가 먹어 뒀다고.":
["My edge was a bit broken and I ate it.","少し折れたのは、食べたこと。"],"같은 날 구운 비스킷을 전부 거둬들인다":
["All the cakes on the same day.","同じ日に焼いたケーキを全部取り出します。"],"검수인에게 열두 번째 상자를 물어내라고 한다":
["Ask the inspector for the twelfth box.","検察官に第12箱を尋ねる。"],"경리 담당에게 두 장을 맞춰 보라고 해.":
["Ask the two officers to look.","二人のパスポートをチェックする。"],"고삐는 좋습니다. 어깨만 조금 내리십시오.":
["It is good to go down, just lower your shoulders a little.","肩を少し下げて、"],"공장 견본은 세워도 두 귀가 선다":
["The plant sample is set with two ears.","工場のサンプルを立てても2つの耳がつく"],"교육 반복 또는 스트레스로 일정 조정이 필요합니다.":
["Training repeats or stress requires calendar adjustment.","トレーニングの繰り返しまたはストレスによるスケジュール調整が必要です。"],"그 어미라면 초대한 사람이 도련님이 됩니다.":
["The mother who is invited will be the one who is invited.","母親が招待された人は、おじいちゃんになる。"],"그 잔은 아까 인사를 나눈 분의 것입니다.":
["The drink was one of those who had ever greeted.","以前の挨拶をいただいたお酒です。"],"그 책에 저처럼 머리 노란 사람이 나와요?":
["Is there a yellow-headed person like me in that book?","こんなに黄色い頭の人が書いているのかな?"],"그때는 그것이 무슨 말인지 알 수 없었다.":
["At that time I didn’t know what it was.","その時、何を言っているのかわからなかった。"],"그럼 남은 걸 가게에서 팔았어야지!":
["The rest was sold in the store.","残りは店で売ってた!"],"그분께선 지금 꼭꼭 숨어 계신데요.":
["He is hidden now.","彼は今、隠れている。"],"남색 예복을 입은 시엘 팬텀하이브":
["Shell Panthamsy in the Black.","黒い服を着たシエル・ファンタムハイブ"],"내일 아침엔 대체 어디서 눈을 떠야 하지?":
["Where should you look tomorrow morning?","明日の朝はどこから目を開けるのか?"],"내일 아침은 본저택에서 먹어야겠어.":
["I will eat in the house tomorrow morning.","明日の朝、本屋で食事をします。"],"네가 조금 앞섰군. 축하해, 리지.":
["You are a little ahead, congratulations, Ridge.","少し前進して、おめでとうリジー。"],"다음 기차가 오기 전에 두 병을 어떻게 할까?":
["What to do with two bottles before the next train arrives?","次の列車が来る前に2つのボトルをどうするか?"],"다음에는 오늘처럼 먼저 이름을 불러 보시지요.":
["Then, first call the name as today.","次回は、今日のように名前を呼んでください。"],"도련님 전용 잔으로 찜해 두겠습니다.":
["I will give you a cup of water.","ワインを飲むと、おまえのカップを。"],"도련님. 제 손을 잡으시겠습니까?":
["Do you hold my hand?","手を握ってくれますか?"],"도련님을 위해 써보지 않겠습니까?":
["Will you try it for your body?","あなたのために使わない?"],"두 차축을 바꿔 끼워 원인을 가린다":
["Changes two shots and cause.","2 変動をし、原因を覆う"],"마지막 바퀴에는 제가 고삐를 잡을 일이 없었습니다.":
["I had no time to get the last wheel.","最後のラウンドでは、私は何も手を引くことができませんでした。"],"맡아 둔 상자가 아직 계단을 막고 있다":
["The box still stopping the stairs.","箱がまだ階段を止めている。"],"먼저 상순에 서재 수업을 적어 보겠습니다.":
["Let me first write the class.","まずは、レッスンに先行する。"],"물건을 받은 창고지기에게 책임을 묻는다":
["Ask for the warehouse.","物件の保管者に責任を問う"],"바르도가 맛볼 몫을 덜어 두었다.":
["Bartholomew has smoked.","バルダは味わいを減らした。"],"방금 건 내 방식대로 했어. 그래도 맞지?”":
["You just did it in my way, but right?”","僕のやり方でやったけど、そうじゃない?」"],"배우셔야 할 것이 산더미처럼 쌓여 있습니다.":
["I’m afraid the list is rather long.","学んでいただくことは山ほどございます。"],"벤치가 놓인 자리를 정원도에 표시한다":
["Sign the place that the bench is placed in the garden.","ベンチが置いた場所を庭に表示する"],"보고만 있지 말고, 처음 것부터 다시 줘.”":
["Don’t just look, let me start again.”","見てはならない、最初から戻ってくる」"],"복수가 끝나는 날, 그 영혼은 내 것이 된다.":
["On the day his revenge is complete, his soul will be mine.","復讐が終わる日、その魂は私のものとなる。"],"봉랍을 떼고 원본을 함께 펼친다":
["Remove the shell and bring the original together.","オリジナルをまとめて、オリジナルをまとめます。"],"비가 오기 전에 지붕 수선이 끝나겠습니다.":
["The roof will be finished before the rain comes.","雨が降る前に屋根の修理が終わります。"],"사건을 통해 영입한 사용인이 이곳에 표시됩니다.":
["The user entering through the event is shown here.","事件を通じて入力したユーザーはここに表示されます。"],"사내의 손이 시엘의 깃에서 떨어졌다.":
["The man’s hand fell from the shell of Ciel.","男の手がシエルの尾から落ちた。"],"상장을 잘 챙겨 둬, 세바스찬.":
["Keep your head well, Sivas.","手元に保管して、セバシュン。"],"서명과 환불 자국을 나란히 보여 준다":
["Signature and refund.","サインと返金の国を一方で示す"],"서재와 응접실, 주방을 개수하세요.":
["Keep the room, the kitchen and the room.","宿泊施設、食堂、キッチン。"],"성함은 뭘로 적습니까? 손님 앞으로?":
["What is the guest? what is the guest?","何を待っているのか?ゲストはどうするの?"],"세바스찬이 시엘의 의자를 당겼다.":
["Shevchenko pulled the chair of Ciel.","セバスチャンはシエルの椅子を引き取った。"],"손님 앞에 어떤 기록을 펼쳐 놓을까?":
["What records should you place before your guests?","ゲストの前でどんな記録を書くのか?"],"시엘, 오늘은 내가 먼저 손 내밀어도 되지?":
["Will I get my hand first today?","シエル、今日は手を伸ばすことができるのか?"],"시엘은 아직 병상에서 일어나지 못하고 있습니다.":
["She is not still waking up from the hospital.","シエルはまだ病院で起きていない。"],"시엘한테 한 번 더 놀러 오라고 할걸.":
["I ask Seth to come again.","シエルに再び来てくれる。"],"아래층 보관분을 위층 주인에게 인계한다":
["The lower floor is placed to the top owner.","下の保管を上部の所有者に委託する。"],"알아. 그 자가 묵고 있다는 여관 말이지.":
["I know, that he is still in place.","知ってるけど、彼が住んでいるの。"],"어서 와, 할아범. 거기 앉아.":
["Come, grandfather, sit there.","来て、おじいちゃん、そこに座って。"],"엘리자베스의 부활절 달걀 찾기":
["The Egg of Elizabeth","エリザベスのバースデーの卵を見つける"],"여긴 끝났어. 기록부터 전부 불태워!":
["It’s finished, all the records are burned!","記録が終わり、すべてが燃え尽きる!"],"옆 가게의 비 오는 날 진열도 살핀다":
["The rainfall in the nearby store.","隣の店で雨が降る日も、"],"예. 제작실에서 함께 보실 수 있도록 준비하겠습니다.":
["I’m ready to see you in the production room.","制作室でご覧いただけるよう、準備いたします。"],"오래 살면서 허송세월한 건 아닙니다.":
["I haven’t spent my long life entirely idle.","長い年月を、ただ無為に過ごしてきたわけではございません。"],"오른쪽 귀도 접어 한 쌍으로 맞춘다":
["The right ear is in one pair.","右耳も一組に合う。"],"온실의 유리에 물방울이 맺혔다.":
["Water is placed in the greenhouse.","温室のガラスに水滴を入れました。"],"원문에 없는 농담까지 알아들으셨군요.":
["You know the jokes that are not original.","原文でないジョークを聞いた。"],"원본 옆에 사본을 나란히 꽂는다":
["Placing a copy next to the original.","オリジナルにコピーを付けて"],"원장에 없는 영수증부터 골라내셨습니다.":
["Choose from the headquarters.","主人公の無しの受付から選ばれた。"],"이 봉투에는 다른 댁의 문장이 찍혔습니다.":
["In this box there is another phrase.","この箱には、別の文字が書かれています。"],"이 장에는 도련님의 서명 하나면 족합니다.":
["This is enough for one signature.","この本では、一人のサインが足りる。"],"이런 때까지 서서 내려다볼 셈이냐?":
["Do you stand down and look down?","こんなところまで立って下を見る?"],"이럴 때까지 서서 하게 할 셈이냐?":
["Will you keep it up until that?","これまで立ち止まるのか?"],"이름 하나에 기니 하나. 외상은 안 받소.":
["One name in Gini. no trauma.","名前のひとつ、怪我はしない。"],"입구 직원에게 모자라는 표 값을 청구한다":
["Require a ticket for the entrance staff.","入場料をキャップに請求する。"],"작은 몸에 웬 욕심이 그리 많을까.":
["Such ambition in such a small body.","小さな身体で、ずいぶん欲張りですね。"],"잠깐, 너희가 봤다는 건 어디부터지?":
["From where did you see?","あなたが見たものはどこから?"],"정말, 그런 이유라니…. 어쩔 수 없군요.":
["Really, because of that... I can’t do it.","まあ、その理由で・・・何もしない。"],"제가 언제 봉급을 돈으로 받은 적이 있었습니까?":
["When did I have paid for the salary?","いつから給料を支払ったの?"],"좋아. 다음에는 더 제대로 겨뤄 보자, 시엘.":
["Let’s go better next time, Sye.","次回は、もっと正しく見ていきましょう、シェル。"],"주방 요청서에 정원사의 이름이 적혀 있습니다.":
["The name of the garden is written on the kitchen request.","庭園の名前の書面に、庭師の名前が書かれています。"],"진행 중인 일정과 결산을 먼저 마쳐 주세요.":
["Please finish the schedule and the schedules that are ongoing first.","まずは、予定と予定を終えてください。"],"창문에 한 벌, 판매대 양 끝에 한 벌씩":
["One penalty on the window, one penalty on the end of the sale.","窓の向こうに、売り場の端に1つの罰"],"첫 근무를 마치면 여기에 결과가 기록됩니다.":
["After completing the first job, the results will be recorded here.","最初の作業が完了すると、ここで結果が記録されます。"],"첫 차례인 사람에게만 성문을 열어 준다":
["Only the first time opened for the person.","初めての人が開くだけの扉。"],"축하드립니다. 이번에는 팬텀사가 선정됐군요.":
["Congratulations, this time the fancy was selected.","こんにちは、今回、ファンタジーが選ばれた。"],"축하한다, 시엘. 다음에는 내 차례야.":
["Congratulations, Syeel, the next time is my turn.","こんにちは、シエル、次回は私の番です。"],"축하해, 시엘. 다음에는 내가 받을 거야!":
["Congratulations, Seal, I will get you next time!","こんにちは、シエル!次回は私に届きます!"],"켜기 또는 끄기\" aria-pressed=\"":
["Open or turn off” aria-pressed=\"","点灯またはオフ」 aria-pressed=\""],"편지부터 좀 보지. 그런데 조커가 누구지?":
["Look at the letter, but who is Joker?","手紙を書いてみて、ジョーカーは誰?"],"하나는 박람회가 끝난 뒤에 오잖아.":
["One comes after the event is over.","会議が終わった後に一つ。"],"합계에 같은 영수증이 두 번 들어갔습니다.":
["The same receipt has entered twice.","同一の受付は2回入りました。"],"호텔 주인은 마지막 상자를 어디서 찾아야 할까?":
["Where do the hotel owner find the last box?","ホテルの所有者は最後の箱をどこで探すべきか?"],"화단에 쪼그려 앉아 꽃을 본다":
["I sit down and see the flowers.","花を見ながら、火の下に座る。"],"회전은 좋습니다. 마지막 발만 모아 주십시오.":
["The turn is good, please collect the last foot.","回転は良いので、最後の足だけを集めてください。"],"흑집사』 비공식 2차 창작 팬게임":
["The Black House, the Second Division of Creation.","黒屋さん「非公式2番目のファンゲーム」"],"“방금 건 내 방식대로 했어. 그래도 맞지?”":
["“You’ve done it in my way, but right?”","「僕のやり方でやったけど、そうじゃない?」"],"… 내일 아침엔 대체 어디서 눈을 떠야 하지?":
["Where should you look for tomorrow morning?","明日の朝、どこから目を開けようか。"],"가져. 내일 아침엔 쓸 일이 없을 테니.":
["I will not have anything to do tomorrow morning.","明日の朝は、何も使わない。"],"갈 곳이 없으면 오랬지? 아직 우리 자리가 있어?":
["Would we have a place to go? - I still have a place.","どこか行かない? まだ居場所はありますか?"],"거울 앞에서 시엘의 안대를 매는 세바스찬":
["Shevaschan, who holds the eye of Ciel in front of the mirror.","鏡の前でシエルの目を閉じるセバスチャン"],"그 찻잎, 아직 한 번은 더 우릴 수 있어.":
["That sheet, we can get it again.","もう一度、あの葉が、また私たちを手に入れることができる。"],"그게 마음에 들어서 어제부터 여기 누워 있었지.":
["I liked it and was here since yesterday.","好きだったので、昨日からここに寝てしまいました。"],"그게, 한밤중에 따로 내리는 짐이라…….":
["It is the one that goes down in midnight.","夜中に降りてくるジム・・・。"],"그래도 창문은 조금 열어 둬. 오늘만은.":
["Open the window a little, today.","窓を開けて、今日は"],"그럼 그 책은 조금만 놓아 주시겠습니까.":
["So let me leave the book a little.","ちょっと本を残してあげて下さい。"],"그럼 부모로부터 독립한 멋진 남자가 되겠지?":
["You’re a great man independent of your parents.","親から独立した素晴らしい男になるだろうか。"],"근무지는 월간 계획을 세울 때 변경할 수 있습니다.":
["Working hours can be changed when you make a monthly plan.","仕事は月間計画を立てるときに変更することができます。"],"꽤나 거창한 이름을 골라 주셨군요.":
["You chose a pretty big name.","かなり大きな名前を選びました。"],"내가 숟가락 내려놓는 것까지 봤어?":
["Have you seen me put the cup down?","ガラスを下げるのを見た?"],"년 런던 성냥공장 파업 · 회사 대응 IF":
["Year London Shark Factory Strike · Company React IF","ロンドン ハンター工場ストライキ · 会社応答 IF"],"다음 종이 울리면 들어가. 내가 먼저 시작할게.":
["The next paper sounds, I’ll start.","次の紙が鳴ると、入って、私はまず始める。"],"다음은 회사 장부입니다. 위쪽의 ‘팬텀 사(":
["The next is the company’s headquarters. “Fantom” at the top","次は会社の「ファンタム」の上の「ファントム」"],"단계마다 도안 수익 +£1 · 개발비 할인":
["Rate Profit +£1 per step · Development Cost Discount","各ステップの道の収益 +£1 · 開発費割引"],"도련님, 현관에 외투를 내어 두었습니다.":
["Mr. Dahl, I put a spell on the door.","ドッグ、入門に投げ込んだ。"],"동사가 빠졌습니다. 편지는 잠시 제게 주십시오.":
["I'm missing the letter, please let me a moment.","手紙がなくなったので、ちょっとお送りください。"],"등 뒤에서 두 번이나 부르셨습니다. 이쪽입니다.":
["I called it two times from the back, here.","背中から2回、ここに電話した。"],"리본을 푸는 순간까지가 저희 선물입니다.":
["The moment of putting the ribbon is our gift.","リボンが送るまで、プレゼントです。"],"마지막 명령에는 도련님 자신의 이름을 쓰셨군요.":
["In the last command, he wrote his name.","最後の命令に、彼は自分の名前を書いた。"],"마지막 해에 서로 다른 분야의 최종 실기를 통과하세요.":
["Pass the final course of each other's fields in the last year.","最後の1年で、各分野の最終実績を通過します。"],"마차를 타고 옛 흔적을 좇습니다.":
["I ride the old trace.","古いトラックを追いかける。"],"맞아. 그게 우리 천막에 걸린 이름이야.":
["That is the name in our tent.","こちらが、お寺の名前です。"],"메이린이 두 색의 실로 수건을 표시했다.":
["Mary indicated two colored real handwags.","メアリーは2色の真っ白なタオルを示した。"],"메이린이 손으로 수건을 구분하게 됐다.":
["Mary got the hand tooth.","マリーナは手でタオルを切り離した。"],"뭐야? 주전자는 또 왜 줄줄 새는 거지?":
["Why is the bird giving you a bird?","なぜ、鳥はまた鳥を飼うのか?"],"미군 출신을 우리 집 셰프로 쓰겠다고?":
["Will we use the US as a chef?","アメリカの家をシェフに使える?"],"바로 옆에서 고막을 찢는 총성이 울렸다.":
["A gunshot broke the shell right next.","すぐそばで、 ⁇ を打つ銃声が鳴った。"],"바르도가 시엘의 접시를 따로 덮었다.":
["Bartholomew covered the plate of Ciel.","バルドーはシエルの皿をカバーした。"],"밤에 창고를 드나드는 사람이 있는지 지켜본다":
["Look at someone who is in the warehouse at night.","夜に倉庫をかぶっている人がいるのか見てます。"],"방식은 너한테 맡기지. 제대로 교육시켜.":
["You are educated, you are educated properly.","教えてもらう方法、正しく教えてもらう方法"],"백작과 집사…… 너나 나나 아직 가짜야.":
["An earl and his butler… Neither of us is the real thing yet.","伯爵と執事……僕もお前も、まだ偽物だ。"],"빅토리아 시대 수확 감사 관습 · 가문 참여 IF":
["Victoria Age Crop Recruitment Practice · Family Participation IF","ヴィクトリア時代の収穫感謝習慣 · 家族参加 IF"],"사교계에서 가문의 이름이 다시 들리기 시작했다.":
["The name of the family began to be heard again.","社会界で家族の名前が再び聞こえてきた。"],"사우스켄싱턴 박람회 · 팬텀사 출품전":
["South Kensington Exhibition · Phantomsa Presentation","サウスケンシントン展 · ファンタムサの展示会"],"상대가 부른 값이 우리 원가보다 낮습니다.":
["The price of the counter is lower than our price.","相手の値段は私たちの原価より低い。"],"세바스찬, 어느 쪽 서랍을 연 거야?":
["Seth, which box will you open?","セバシュン、どの箱を開くの?"],"세바스찬은 곱게 접은 안대를 받았다.":
["Seth was very hardly trapped.","セバシュンは、ひどく接続された。"],"세바스찬은 곱게 접힌 안대를 받았다.":
["Seth was very tightly trapped.","セバシュンは、ひどくつぶやきを受けた。"],"시엘의 얇은 가슴은 다시 오르지 않았다.":
["She's thin breasts did not rise again.","シエルの胸が再び上昇しなかった。"],"시엘이 눈을 감기도 전에 세상이 어두워졌다.":
["The world was dark before Seal colded his eyes.","シエルが目を冷やす前に、世界は暗くなった。"],"시제품 옆에 반품된 상자가 놓여 있다.":
["A box is located next to the product.","商品の隣に箱が置かれています。"],"아, 저녁이요? ……불은 제가 끄죠.":
["I’m going to turn off the fire. – I’m going to turn off the fire.","夕食? 火は消す。"],"애초에 네 봉급부터 깎았어야 했어.":
["I had to cut your salary.","最初は給料を減らすべきだった。"],"어디까지 납품 구역으로 삼으시겠습니까?":
["How far do you get to the delivery area?","どのくらいの配達地帯に移動するか?"],"어쩌려고 저런 수상한 자를 받아들이셨습니까?":
["How did you accept such a miserable man?","どうしてこんなに不幸な人を受け入れたのか。"],"예. 다음 납품분도 같은 기준으로 확인하겠습니다.":
["Next articleWe will check the same standard.","次回の配達も同じ基準で確認します。"],"예배를 마친 손님들이 연주석 앞으로 모입니다.":
["The guests who have finished the prayer are coming to play.","礼拝を終えたゲストが遊び場に集まる。"],"오늘은 네가 이겼어. 축하한다, 시엘.":
["You won today, congratulations, Ciel.","今日は勝ちました、おめでとう、シエル。"],"왕자님께서 신세를 지시는 집이지 않습니까.":
["The Prince is the house of the Lord.","王子様が主人公の家だ。"],"원작 14권 66화 모티프 · 시점 재구성":
["The 14th edition of 66th edition of Motif · Time rebuilding","原作14本66話モティフ · 時点再構築"],"이 회차의 사용인 관계 기록은 남아 있지 않습니다.":
["The user-related records of this round are not left.","このツアーの使用者関係記録は残っていません。"],"이 회차의 세부 장부는 남아 있지 않습니다.":
["The details of this round of the car are not left.","この車の細部は残っていません。"],"이번에도 봉투를 고스란히 돌려보냈어?":
["Have you returned the pack this time?","今回は、バッグを返してきたのか?"],"인장은 하나인데 밀랍을 두 종류나 썼다고?":
["One is one, and two types of rubber?","ひとつ、二つの種類のマルチを書いたのか?"],"자, 딱 여기까지만 보이면 될 것 같아.":
["I think you will see it until here.","まあ、ここまで見られるようだ。"],"지금은 저택에 아무도 들이고 싶지 않아.":
["I don’t want anyone coming into the manor just now.","今は屋敷に誰も入れたくない。"],"찾았다. 세바스찬, 다음 배편을 잡아.":
["I found.Sebastian, take the next edition.","見つけました.セバスチャン、次のバージョンを捕まえよう。"],"채무를 상환하고 가문 자금을 비축하세요.":
["Pay back and save family funds.","借金を返し、家族の資金を節約する。"],"첫 엔딩을 맞이하면 이곳에서 다시 볼 수 있습니다.":
["Reach an ending to revisit it here.","迎えたエンディングはここで振り返れます。"],"카이로소프트 ‘○○○ 스토리’ 시리즈":
["Kyrosoft ‘○○ 物語’ series","キロソフト『○○ストーリー』シリーズ"],"타나카의 저택 복귀 · 게임 달력에 배치":
["Return to the house of Tanaka · Placing on the game calendar","タナカの家に戻る · ゲームカレンダーに配置"],"팬텀사 창고의 출고 담당자를 먼저 지목한다":
["First, the fancy warehouse officer.","ファントマの倉庫の先駆者を指名する"],"포장 받침을 낮춰 두 귀의 공간을 확보한다":
["Low the packaging reception and guarantee two ears space.","パッケージの接続を下げて、両耳のスペースを確保する"],"표찰의 방향을 피니안에게 맡겼다.":
["I sent the direction to Pine.","フィニアンの指示を渡した。"],"한 치의 망설임도 없이 빛을 등지고,":
["and the light of the light, without a shame,","明るい光を一つずつ、"],"합계는 맞습니다. 외상 건은 다음 칸입니다.":
["The trauma is the next can.","トラウマは次のカンです。"],"현 상황에서는 재가 허가를 내리기 어렵습니다.’":
["In this situation, it is difficult to give permission.”","現状では、許可を下すのは難しい」"],"현재 물량에서는 증설 뒤 비용이 더 큽니다.":
["The current amount of water is more expensive after the discharge.","現在の水分は、供給後より費用がかかります。"],"화이트채플 서신을 가문 기록에 보관했다.":
["White Chapel was kept in the family record.","ホワイトチャップの手紙を家族記録に保管した。"],"‘현 상황에서는 재가 허가를 내리기 어렵습니다.’":
["“In this situation, it is difficult to give permission.”","「現状では、許可を下すのは難しい」"],"“……보고만 있지 말고, 처음 것부터 다시 줘.”":
["“Don’t just look, give it back from the first.”","「見るだけではなく、最初から返す」"],"가문 심의에 제출할 장부 원본을 발견했습니다.":
["I found the original gift to submit to family review.","家族の検査に提出するオリジナルを発見しました。"],"값을 그대로 두고 운임까지 받아 내셨군요.":
["You have paid the price and received it.","値段を付けて、運命まで受け取った。"],"같은 날 포장한 상자들을 확인하고 D를 바꿔 준다":
["Check the boxes packed on the same day and change D.","同じ日に包装された箱をチェックしてDを変更します。"],"개수마다 휴식·요양의 컨디션 회복 +5":
["Each renovation adds 5 to condition recovered through rest or convalescence.","改修ごとに休息・療養による体調回復量＋5。"],"고맙습니다. 저기 촛대도 한 쌍이지요?":
["And there is a pair of candles.","ろうそくも一組あるの?"],"골목의 길이는 쟀습니다. 시간은 더 확인해야겠습니다.":
["The road is long, time will be checked.","道路の道が近いので、時間はもっと見る。"],"구인 광고를 내도 좀처럼 찾기 힘들겠지요.":
["I think it’s hard to find an advertisement.","広告を見つけるのは、ちょっと難しい。"],"그 견본은 다른 상회의 것입니다. 표찰을 보십시오.":
["The sample is a different council. see the mark.","サンプルは別のコンサートです。 サンプルを見てください。"],"그 부분에서 또 걸렸군. 어디서부터 틀렸지?”":
["“Where did you get wrong?”","どこから、間違ったのか? どこから、間違ったのか?」"],"그 조건대로라면 우리가 운임을 두 번 냅니다.":
["Under that condition, we will give the charge twice.","条件として、私たちは2回の運命をします。"],"그래서 시식회에 손님을 몇 명이나 먹인 거야?":
["How many guests have been feeding at the meeting?","会場で何人のお客さんが食べたの?"],"그의 어깨 너머, 창가에 어린 백작이 서 있었다.":
["Behind his shoulder, a young cousin stood on the window.","彼の肩の向こうに、窓の上に小さな伯爵が立っていた。"],"끝까지 도련님의 뜻으로 내리신 명령이군요.":
["Order to the end of your will.","最後まで、命令に従って下された。"],"난 우리 동포 편이야. 저 둘을 막아 줘!":
["I am on our side, stop them both!","俺は、この二人で、やめろ!"],"날짜까지 덮으면 필적도 단서가 되겠지.":
["If you cover the date, it will be a sign.","日付を記録すると、印刷も可能です。"],"내가 문까지 나가면 먼저 온 손님이 혼자가 되는군.":
["When I get out, the first guest is alone.","入り口に到着すると、最初のゲストは一人で来る。"],"네 마디는 잘 이어졌습니다. 다음은 쉼표입니다.":
["Your words went well, the next is a refuge.","うまく言って、次は避難記です。"],"네가 관리를 잘못한 거잖아, 세바스찬!":
["You’ve done the wrong, Seth!","間違った管理をしていたんだけど、セバシュン!"],"네가 조금 앞섰군. 축하해, 에드워드.":
["You are a little ahead, congratulations, Edward.","少し前進して、おめでとう、エドワード。"],"다음 무도회에서는 먼저 춤을 청해 보시지요.":
["At the next meeting, you will first dance.","次回の会場では、まずダンスをしよう。"],"대체 어디서 기어나온 놈이지, 꼬마야?":
["Where did you come from, little boy?","どこから来たんだよ、子?"],"도장보다 먼저 종이의 접힌 자리를 보셨군요.":
["You saw the paper first.","紙の先に、見たところ。"],"리본이 걸렸군. 잠시만요, 제가 풀겠습니다.":
["I have a little bit of it, I will get rid.","リボンが止まって、もう少し解放します。"],"마부한테 오늘은 일찍 들어가 쉬라고 전해.":
["I ask you to go in early and rest.","マラソンに、今日は早めに休んでほしい。"],"마지막 동사가 달랐어. 누가 말하는지 바꿨군.":
["The last one changed, who said.","最後の話は変わった、誰が言っているのか。"],"무게는 같습니다. 손톱으로 누른 자리도 같을까요?":
["Is it like a weight, and the nail is like?","重さは同じですか?爪の重さと同じですか?"],"물론이지. 그렇다고 다음 상장까지 내줄 생각은 없어.":
["I don’t think, I don’t want to go to the next stage.","もちろん、次のレベルまで出るつもりはない。"],"바구니 옆에서 조용히 햇볕을 쬔다":
["Sunlight in silence next to the basket.","横に静かに太陽が輝く。"],"방금 적으신 시각은 종소리보다 앞섭니다.":
["The eyes are just ahead of the sound.","見た目は、音より先に。"],"생산품·재고에서 1개를 빌려 심사 후 반환":
["1 product in stock, and then returned.","商品・倉庫から1個借りて審査後返品"],"서가 맨 아래에 그을린 장부가 누워 있다.":
["A little bit of the lingerie is lying down.","横に下のベッドが横たわっている。"],"세 문장 중 두 번째만 사전을 펴면 되겠습니다.":
["I can only write the second of three words.","前の3つの言葉のうち2つだけを解説する。"],"세 벌은 장부의 어느 칸에 들어가야 할까?":
["Which three punishments should be in the cabin of the officer?","3 どのカンボジアに入るべきか?"],"세바스찬이 올빼미 앞에 몸을 낮췄다.":
["Shevchenko dropped his body before the top.","セバシュチャンは、上に下がった。"],"손님, 봉투만 전해 드려도 되겠습니까?":
["Can I give you a bag?","ゲスト、バッグだけお届けできますか?"],"손님에게 도안 번호를 한 번 더 써 달라고 한다":
["Ask the guest to write the number once more.","ゲストに、再度番号を書いておく。"],"손님이 먼저 도련님 곁자리를 청하셨습니다.":
["The guest first asked for a place.","ゲストは先に、お客さんに会いに来てくれました。"],"시엘 팬텀하이브. 그 이름이면 충분해.":
["Shel PhantomHive, that name is enough.","シェル・ファンタムハイブ、その名前は十分だ。"],"시엘의 인사, 일정 애니메이션과 대사 표시 효과":
["Controls Ciel’s greeting animation, activity animations and dialogue effects.","シエルの挨拶、予定のアニメーション、台詞の表示演出に適用されます。"],"시엘이 위독합니다. 곁에서 돌볼 사람이 필요합니다.":
["Ciel is a lazy, you need someone to take care of.","シエルは、そばに誰かを大切にする必要がある。"],"시엘한테 볼일 있어? 오늘은 본저택에 있는데.":
["I have a job with Sia? today I am in the house.","シェルは今日は、お家にいる。"],"시연회를 취소하고 경시청에 수사를 맡긴다":
["Annuling the meeting and investigation.","会議をキャンセルし、調査に任命する。"],"실행 전에 취소하면 원래 하순 일정으로 돌아갑니다.":
["If you cancel before running, it will return to the original schedule.","キャンセルする前に、通常のスケジュールに戻ります。"],"실험체 따위 살려 둘 수 없어. 서둘러!":
["I can't get the test, you're quick!","実験にこだわることはできない!急いで!"],"아그니, 우리 마차가 아직 마구간에 있나?":
["Is the car still in the shore?","エルニー、車はまだトラックにありますか?"],"아그니와 둘이 타운하우스를 관리하면 어때?":
["What if Agni and the two manage the townhouse?","エルニーと二人はタウンハウスを管理するにはどうすればいいの?"],"안쪽에서 나는 소리를 누가 먼저 듣는지 겨뤄 본다":
["I see who hears the voice first.","内側から、誰が最初に聞くかを調べる。"],"알아. 날짜 말고 뒷면의 글씨나 봐.":
["Look at the date, not the back.","後ろの文字ではなく、日付を参照。"],"약속한 거야! 다음에는 내가 먼저 상장을 받을 테니까.":
["I promise! next time I will get the first sign.","約束!次回は、まずレコードを受け取ります。"],"어학과 경제, 사격과 승마······.":
["Languages and economics, marksmanship and riding…","語学に経済、射撃に乗馬……。"],"얼스 코트 이탈리아 박람회 · 공예품 품평":
["The Italian Exhibition of Ice Coat","イタリア・アイスコート展 · 工芸品評価"],"역시 아그니야! 시엘, 난 한숨 더 잘게.":
["Oh, I’m going to breathe better.","シェル!息が良くなります。"],"오늘 아침 차는 산뜻한 닐기리로 골랐습니다.":
["This morning, the car was chosen with a hot Nile.","今朝、車は熱いニルギリで選ばれました。"],"오늘 올라온 요청은 날짜대로 묶어 두셨군요.":
["The request you have made today is linked to the date.","今日の日付を、当日の日付にまとめておりました。"],"오늘은 네 차례군. 축하해, 에드워드.":
["Today is your time. congratulations, Edward.","今日はおめでとう、エドワード。"],"오늘은 네가 조금 앞섰네. 축하해, 시엘!":
["You are a little ahead today. congratulations, Ciel!","今日はちょっと前進してますよ、おめでとう、シエル!"],"오늘이 목요일인데 수요일에 가시겠다고 쓰셨습니다.":
["Today is Thursday, and we are going to go on Wednesday.","今日は木曜日で、水曜日に行こうと書いた。"],"왕실이 팬텀하이브가를 눈여겨보고 있다.":
["The royal house is looking at the PhantomHive.","王室はファンタムハイブガーを見ている。"],"응. 네 바구니도 귀엽게 꾸며 주고 싶어":
["I want to make your basket beautiful.","俺も、お尻をかわいいようにしたい。"],"이 가문의 집사장이 대대로 물려받는 시계입니다.":
["It has passed from one head butler of this house to the next.","この家の執事長が代々受け継いできた時計です。"],"이 게임의 리소스 제작에 생성형 AI를 사용했습니다.":
["Generative AI was used to create game assets.","ゲーム素材の制作に生成AIを使用しています。"],"이번에는······. 나는 절대로 안 져.":
["This time… I will not lose.","今度は……僕は絶対に負けない。"],"이제 ‘중순’ 칸을 열어 보시겠습니까?":
["Do you want to open the “Central” Canyon?","「中間」のオープンは?"],"이제 집기 목록을 훤히 꿰고 계시는군요.":
["You are now looking into the list of the houses.","あなたは今、ハイライトリストをしっかりと見ている。"],"잠깐. 둘이서 멋대로 정하지 마. 난 안 해.":
["Do not make it good for you both, I don't do it.","二人でいいな、やらないよ。"],"장미의 번호를 정원 장부에 옮겼다.":
["The number of roses was transferred to the garden.","バラの番号を庭に移す。"],"적어도 어디서 끊을지는 먼저 말해 주지 그래.":
["At least tell me where I’m going to stop.","まず、どこからやればいいのか、と話す。"],"점수 차이가 작군. 축하해, 에드워드.":
["The difference is small. congratulations, Edward.","ポイントの違いは小さく、おめでとう、エドワード。"],"정원에서는 바람도 심사에 끼어들지요.":
["The wind is in the garden.","庭園では風も入る。"],"정작 도련님께서는 거짓말에 능하십니다.":
["Yet you are quite an accomplished liar yourself.","坊ちゃんは、ずいぶんと嘘がお上手だと。"],"줄 하나가 풀렸는데도 끝 음을 잡으셨군요.":
["You got one but you got the end.","ひとつは解放されたが、結末を迎えた。"],"증인이 그린 골목에는 있어야 할 굴뚝이 없습니다.":
["There is no hole to be in the green street.","見事の緑の街には、いかなる穴もない。"],"지난번보다 덜 떫네. 잎을 바꿨어?":
["Less than the last time. have you changed the leaves?","前の回より、葉を変えた?"],"찾으시는 물건이라면 제가 조금 전 치워 두었습니다만.":
["If you were looking for something, I had left it a little before.","探していた物件があれば、少し前に取り出した。"],"첫 문장을 덜어내면 훨씬 자연스럽겠습니다.":
["The first phrase is much more natural.","最初の言葉を解き放つと、より自然なことになります。"],"축하해, 시엘. 다음에는 나도 이길 거야!":
["Congratulations, Syeel, I’m going to win next time!","こんにちは、シエル!次回も勝つ!"],"축하해, 시엘. 오늘은 네가 조금 앞섰네!":
["Congratulations, Syeel, you are a little ahead today!","こんにちは、シエル!今日は少し先に進んでいます!"],"피니안이 팬텀하이브가의 정원사가 되었다.":
["Pinian became a fanta-hive garden.","フィニアンはファンタムハイブガの庭師となった。"],"현재 생산·판매 조건에서는 이달 추가 이익이 없습니다.":
["At the current production and sales conditions there is no additional profit per month.","現在の生産・販売条件では、月額追加利益はありません。"],"흠. 그럼 오늘은 내가 밖에서 다시 두드리지.":
["I’m going to get out again today.","今日は、また外から打ち上げます。"],"1888년 런던 성냥공장 파업 · 회사 대응 IF":
["1888 London Shark Factory Strike · Company React IF","1888年 ロンドン 狩<unk>工場ストライキ · 会社応答 IF"],"Earl Phantomhive Maker · 팬텀하이브 메이커":
["Earl Phantomhive Maker","エール・ファンタムヒーブ・メーカー"],"row.name===\"가문 자금\"&&row.value":
["row.name===\"Foreign Fund\"&&row.value","row.name===\"家庭資金\"&&row.value"],"“그 부분에서 또 걸렸군. 어디서부터 틀렸지?”":
["“You’ve got it again, where did you get wrong?”","「あの部分は、どこから間違ったのか?」"],"…… 오늘 아침 차는 산뜻한 닐기리로 골랐습니다.":
["The car was selected this morning with a hot niche.","今朝、車は熱いニルギリで選ばれました。"],"……대체 어디서 기어나온 놈이지, 꼬마야?":
["Where did you come from, little boy?","どこから来たんだよ、子?"],"각 인물이 시엘에게 보내는 신뢰와 호감도입니다.":
["Every person is the trust and pleasure that he sends to Ciel.","シエルに送る信頼と愛情は、それぞれの人物です。"],"각주에서 제가 일부러 틀린 연도를 찾으셨군요.":
["I found the wrong thing intentionally.","故意に間違った場所を見つけた。"],"공통 관리비 £36과 경비 절감액은 별도입니다.":
["Common management fee is £36 and the savings savings are separate.","一般管理費 £36 と節約金は別々です。"],"그 접시는 ……아냐. 이리 줘. 내가 치울게.":
["I’m going to give you the dish. – I’m going to give you the dish.","パスタは・・・いや、ここに置いておきます。"],"그건 어제 제가 붙인 표찰입니다. 단서는 그 아래입니다.":
["It is the sign I have attached yesterday. the clue is below.","昨日、私が付けた印です。 印は下にあります。"],"그래. 어느 부분을 보완할지는 기록을 보고 정하겠어.":
["I’ll see which part of the record.","どの部分を記録するかを確認します。"],"그러면······ 그 커다란 눈동자에!":
["Then… in that great wide eye of yours!","では……その大きな瞳に！"],"그런 소동이 있고, 결국 정원에 아침상이 차려졌다.":
["It was a night, and it was finally in the garden.","こんな風に、朝は庭で終わった。"],"그렇다면 마차를 대겠습니다. 바구니도 이리 주십시오.":
["Please take the car, please take the basket.","車を運転して、箱も入れてください。"],"글쎄요. 기일을 적는 자리가 텅 비어 있습니다.":
["The place of the gathering is empty.","やっぱり、ギャラリーの場所は空っぽ。"],"나는 행복을 얻기 위해 ‘여기’로 돌아온 게 아니야.":
["I’m not returning to “there” to get happiness.","幸せを求めて「ここ」に戻って来たわけではない。"],"나무 책상 위에 놓인 여왕의 봉서와 편지칼":
["The Queen's handful and letter knife on the tree table","木のテーブルの上に置かれた女王の封筒と手紙のナイフ"],"날씨 이야기는 무사히 끝났습니다. 다음 화제는요?":
["The weather is over, the next day?","天気は終わり、次回のテーマは?"],"네 글씨대로 둬. 화분을 돌리면 되잖아.":
["Keep your writing, you can turn the spoon.","書き込みをしっかりと、振り回すことができます。"],"눈치가 좋은 줄 알았는데, 의외의 것을 묻네.":
["I thought it was good, and I asked something extraordinary.","よくわかるようになったので、不思議なことを聞く。"],"도안첩의 판본을 먼저 맞추고 세 주문을 교환한다":
["First, you will be able to exchange three orders.","最初に手紙を貼り、3つの注文を交換します。"],"두 견본의 심사표에 같은 점수가 적혔군요.":
["The same score is recorded in the two samples.","両方のサンプルのスケジュールに同じ点数が記されている。"],"두 근무지를 모두 맡기면 월말에 가문 명성 +1":
["If you are both, the family reputation in the month +1","両職を任せば、月末に家族名誉 +1"],"두 상회가 함께 선정됐습니다. 축하드립니다, 도련님.":
["The two are joined together, congratulations.","二人で選ばれた、おめでとうございます。"],"리지가 가운데에 앉으면 아무 문제도 안 생기는 일이잖아….":
["If Rihanna is sitting in the middle, there’s no problem.","リッジが真ん中に座ると、何の問題もない。"],"마부를 다시 부를까요? 아직 마당을 안 나갔습니다.":
["Do you call the bar again? I haven’t gone out of the garden yet.","再び、お庭に戻ってこない?"],"마지막 계단에서도 제가 도련님의 보폭을 맞춰야 했습니다.":
["In the last stairs I had to take your boat.","最後の階段で、僕は彼の手をひっくり返す必要がありました。"],"마침 '애완동물'이 하나 갖고 싶었거든.":
["I wanted a “pets.”","動物を飼いたいと思っていた。"],"마침 차가 잘 우러났어. 한 잔 하겠어?":
["The tea is just right. Care for a cup?","ちょうどいい具合にお茶が入ったよ。一杯どうだい？"],"먼저 결재하신 지붕 수선 건부터 장인에게 전하겠습니다.":
["I will first tell the master of the roof.","まずは、屋根の修理を先にマネージャーに伝える。"],"먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?":
["How do you know that before you hear the dust?","汚れの音を聞く前に、どうやって知るの?"],"무릎 꿇은 시엘의 어깨에 경식을 거는 여왕":
["The Queen of Seal's Shadow.","ひざまずいたシエルの肩に礼拝する女王"],"물론이지. 다음 상장까지 네게 주겠다는 뜻은 아니지만.":
["I don’t mean you will be given to the next list.","もちろん、次のレコードまでお届けするつもりはありません。"],"바퀴를 끼우니 뚜껑이 열리지 않는군요.":
["The wheel does not open the cover.","車輪を閉じると、カバーが開かない。"],"방금 복도를 지나간 건 우리 애들이야. 놀라지 마.":
["The kids just passed the corridors, don’t be surprised.","歩道を通り過ぎたばかりの子どもたち、驚かないでください。"],"복도 끝 옷걸이에 새 앞치마가 걸려 있다.":
["A new front line is on the end of the corridory.","廊下の端に新しい衣装がついている。"],"복수는 그만두겠어. 이게 내 마지막 명령이다.":
["I will stop revenge, this is my last command.","復 ⁇ をやめよう!これは最後の命令だ。"],"복수는 여기서 끝이다. 이게 내 마지막 명령이야.":
["Revenge is here, this is my last command.","復 ⁇ はここで終わり、これは私の最後の命令です。"],"세 바퀴째도 첫 바퀴처럼 달리는지 봐 주십시오.":
["Please see the three wheels run like the first wheel.","最初の3輪も同じように走る。"],"소인 하나로 두 증언의 순서를 바로잡으셨군요.":
["He has fixed two testimony orders.","男の子が一人の証言の順序を2つ修正した。"],"시엘 앞에 한쪽 무릎을 꿇은 세바스찬.":
["Shevaschan, one side on his knees in front of Ciel.","シエルの前でひざまずいて、"],"시엘! 여기 앉아! 오늘은 내가 차 골라 줄게!":
["I’ll choose a car today!","車を買う!今日は、車を選ぶ!"],"시엘에게 속마음을 털어놓을 만큼 깊이 믿습니다.":
["I believe so deeply as to tell Seal his heart.","シエルに心を伝えるほど深く信じています。"],"시연회에서 무엇을 근거로 누구의 이름을 댈까?":
["Who’s the name to be given on the show?","会場で誰の名前を呼ぶのか。"],"식탁에 저녁 식단과 빈 접시가 놓여 있다.":
["There is a dinner and empty dish on the table.","テーブルには、空っぽの皿と夕食が置かれています。"],"아침 홍차를 따르던 중 저택의 창이 깨진다.":
["In the morning, the window of the house is broken.","朝の紅茶を追いかけて家の窓が壊れました。"],"역시 인간 아이에게 가문의 경영은 너무 이른 분야였을까요.":
["The management of the family for human children was too early.","子どもの経営は早いことだった。"],"오늘 들은 성함을 마차 안에서 적어 두시지요.":
["Let me write the story in the car today.","今日は、車内で聞いた言葉を書く。"],"오늘도 불 끄기 전에 한 숟갈 빼 놨습니다!":
["I have a fire before it is shut down today!","今日も火を消す前に一本のカラスが取り出されました!"],"오늘은 정원 문까지 한 걸음 더 가 보시겠습니까?":
["Would you like to take a step further to the garden door today?","今日は、庭の門まで一歩歩歩いてみませんか?"],"은쟁반 위에 다음 다과회의 답신이 쌓여 있다.":
["The next meeting is on the back of the summit.","次の会議の答えが集まっている。"],"이 수첩의 저장 기록을 새 회차로 교체할까요?":
["Will I replace the record of this record with a new round?","この記録を新しい車に置き換える?"],"이 회차의 최종 능력치 기록은 남아 있지 않습니다.":
["The final capacity record of this round is not left.","この回転の最終能力記録は残っていません。"],"인간의 한평생도 내게는 눈 깜박할 사이다.":
["A human lifetime passes for me in the blink of an eye.","人間の一生など、私にとっては瞬きの間のこと。"],"잘했어. 마침 그때 일을 기억할 증인도 여기 있고.":
["Well, there are witnesses to remember that.","まあ、その時点で証人もいる。"],"저 눈이라면 망을 보는 데도 쓸모가 있겠습니다.":
["It will be useful to see the eyes.","目が悪く見えるのも役に立つでしょう。"],"제가 그 케이크를 열일곱 접시나 먹었습니까?":
["Have I eaten the cake for 17 tables?","ケーキを7個食べたのか?"],"제가 박자를 바꿨는데도 발을 밟지 않으셨습니다.":
["I changed my foot but didn’t walk.","足を変えても、足を踏み切らなかった。"],"제가 피아노를 멈춰도 활은 계속 가는군요.":
["When I stop playing the piano, the arc goes on.","ピアノをやめても、あきらめは続く。"],"주방의 엘런에게 마지막 상자가 닿았는지 확인한다":
["Check if the last box has been touched by the kitchen's Elon.","キッチンのエレンが最後の箱に触れたかどうかを確認する"],"중복된 문장 묶음을 열쇠 묶음으로 교환한다":
["Repeated sentence bonds are exchanged with key bonds.","複数文字の結合を鍵結合に交換する"],"증언 한 줄로 약도의 빈자리가 메워졌군요.":
["A witness is a vacant place.","証言の場で、薬物の空席が詰まっている。"],"지금으로선 작위를 되찾을 가망이 희박해 보인다.":
["I think the hope of regaining work is now very low.","今のところ、仕事を復活させるという希望が低い。"],"지위도 재산도 아름다운 약혼자도 전부 당신 것입니다.":
["Status, property and beautiful bride are all yours.","地位も財産も美しい花嫁も皆あなたです。"],"진열품을 장부에 따로 적고 수량을 맞춘다":
["The amount of the product is set and set.","物件を個別に、数値を調整する。"],"짐꾼이 묶은 매듭을 직접 풀어 보겠어?":
["Will the pet bearers get rid of the bonds?","飼い主が自分に縛られた ⁇ を解放する?"],"집에서 다른 나무패와 섞였는지 아이에게 묻는다":
["Ask the child if it was mixed with other trees at home.","家で他の木の木と混ぜたかどうかを子供に尋ねる"],"첫 인사는 마쳤습니다. 창가에 한 분 더 계십니다.":
["The first greeting is over, there is another one in the window.","初回の挨拶が終わり、窓には1分も残っています。"],"축하해, 시엘. 엄청나게 귀여웠어~!":
["Congratulations, Seal, it was so cute!","こんにちは、シエル!すごく可愛い!!"],"팔을 뻗어 움직일 때의 길이도 잰다":
["The arm is stretched and the road is moving.","腕を伸ばして動く途中も、"],"팬텀하이브가에서 일해 보실 생각은 없습니까?":
["Do you want to work in PhantomHive?","ファンタジーで働くことを考えているのか?"],"허어. 난 비가 와서 장사가 안되는 줄 알았지.":
["I thought it was rain and I didn’t think it was a rain.","雨が降って、お土産にならないと思った。"],"확실히, 들어 있는 동전의 수에는 변함이 없겠습니다.":
["Of course, the number of coins that are in will not change.","もちろん、コインの数は変わらない。"],"― 그런 소동이 있고, 결국 정원에 아침상이 차려졌다.":
["It was a night, and it was finally a morning in the garden.","こんな風に、ついに庭で朝が盛り上がった。"],"가장자리까지 손으로 마감했습니다. 가까이서 보시지요.":
["I got to the hand, look closely.","手を伸ばして、近くから見て。"],"각 분야 한 과목의 실기 합격 뒤 같은 과목 2회 수강":
["Each one of the two subjects is a single subjects.","各分野の実科を1つに合った後、同じ科目2回の受付"],"거기서 멈추십시오. 지금처럼 어깨를 내리시면 됩니다.":
["Stop there, you can get your shoulders down like now.","こっちで止まって、今のように肩を下げる。"],"구리 냄비 뚜껑 아래에서 스튜가 끓고 있습니다.":
["Stea is cooking under the bakery pot cover.","クリームカバーの下でスチューが調理されている。"],"그 박자로 계속 쳐 줘. 다음 소절에서 내가 따라가지.":
["I will keep it up, I will follow you next time.","続けて、次の段階で追いかけてきます。"],"그가 복수를 끝낼 때까지, 배신하지 않고 지켜낼 것.":
["I was to protect him without betrayal until his revenge was complete.","復讐を遂げるまで、決して裏切らず彼を守ること。"],"그럼 잘 받았다고만 해. 답장 기다리게 하지 말고.":
["Please do not wait for the answer.","うまくいったんだけど、答えを待ってはいけない。"],"그렇다면 도련님께 청구할 것이 딱 하나 남는군요.":
["There is only one thing to claim.","だから、あなたに請求するものだけが残っている。"],"기록을 쓴 본인에게 직접 물으면 허가 따윈 필요 없지.":
["If you ask the recording person, you don’t need permission.","記録を書く際は、許可を求める必要はありません。"],"기품 있는 걸음걸이로 나락으로 돌진하는 그 모습은…":
["The way that goes on the foot is like...","歩き回る道のりで、その姿は・・・"],"끝나고 같이 한 바퀴 돌자. 내가 본 곳도 보여 줄게.":
["Let’s go around and see where I’ve seen.","最後に、一緒に回って行こう!見た場所も見せてくれます。"],"나의 악한 이름에 걸고 반드시 복수를 하고 말 거야!":
["I will be wrecked by my evil name and I will be revenge!","悪名を呼び、復 ⁇ する!"],"늦게 와도 알아. 이제 네 구두 소리는 기억하거든.":
["I know it is late, I remember your voice.","遅く来るのよ、今はあなたの口音を覚えている。"],"다녀왔습니다, 도련님. 너무 오래 자리를 비웠습니다.":
["I have been there, I have been left for a long time.","こんにちは、久しぶりに席を空いてしまいました。"],"도련님께서 그렇게 말씀하실 줄 알고 다음 교본을 준비해 두었습니다.”":
["I know that you will tell me, and I’ve got the next book.”","ドーシュはそう言ってくれるのを知り、次の教科書を準備した」"],"돌아오시면 스튜는 제가 데우죠. 그 정도는 할 수 있습니다?":
["If I come back, I’m going to go back.","帰ってくるなら、スティーブは俺にダウだよ?それでもできるだろうか?"],"됐어. 그 놈을 다시 보거든 여기로 기별해.":
["If you see him again, I am surprised.","もう一度見たら、ここにいるのが驚き。"],"두 분의 점수가 같군요. 함께 우승하신 것을 축하드립니다.":
["I’m happy to win both, and congratulate you for winning together.","両方とも勝てばいいし、おめでとうございます。"],"뒷골목에서 도련님을 뭐라 부르는지 아십니까?":
["Do you know what the back of the street is called?","裏側の道のりは何と呼ばれるか知っていますか?"],"듣고 보니 일리 있네!! 그럼 내가 뭘 하면 돼?":
["I’m going to hear it, what can I do?","見て、聞いたらいいの?どうしたらいいの?"],"런던 집의 응접실과 우편함을 살펴봅니다.":
["Look at the London House and Postal.","ロンドンの郵便局と郵便局をチェック。"],"말씀만 하십시오, 도련님께서 고르신 길로 모시겠습니다.":
["Please say, I will take you on the way you have chosen.","あなたが選んだ道を歩みましょう。"],"말씨도, 힘을 쓰는 법도 차차 익히셔야겠습니다.":
["You must also learn how to use the power.","やっぱり、力を使う方法も知っておくべきです。"],"말없이 앉아 있던 손님까지 웃게 하셨군요.":
["You laughed to the guests who were sitting.","無言に座っていたゲストを笑わせた。"],"말이 먼저 멈췄군요. 오늘은 제가 내려 드리겠습니다.":
["I’m going to stop it, and I’m going to drop it today.","最初は止めました、今日は下りします。"],"먼저 보시지요. 저희 견본은 제가 직접 보여 드리겠습니다.":
["First, I will show you my own sample.","まずは、私自身のサンプルを示します。"],"메이린이 팬텀하이브가의 메이드로 합류했다.":
["Marilyn joined the fantacy of Meda.","メイリーンはファンタムハイブガのメイドに加わった。"],"목격자를 한 사람 만났습니다. 원문대로 적어 두지요.":
["I have a witness, let him write the original.","目撃者に会ったので、そのまま書きます。"],"무료 초대석을 따로 정산하고 직원의 누명을 벗긴다":
["Free invitation and dismiss the staff.","無料の招待状を整理し、従業員の不満を解除する"],"바르도가 팬텀하이브가의 셰프로 합류했다.":
["Barton joined the Chef of PhantomHive.","バルドーはファンタムハイブガのシェフに加わった。"],"발소리만 듣고도 맞혔어. 오늘도 그 구두네.":
["I just heard the foot, and today.","足の音も聞こえてきたけど、今日は"],"복도에서 우릴 보면 놀라지 마. 마중 나온 거야.":
["Don’t be surprised when you see us in the corridors.","廊下から見ると驚かないで、あれは、"],"불탄 기록 곁에서 마지막 명령을 받아들이는 세바스찬.":
["Sevascan receives the last command near fire records.","火事記録の最後の命令を受け入れるセバスチャン。"],"빛에 비춰 보니 종이 뒤에 글자가 아른거리는데.":
["I see the light behind the paper.","光に照らして、紙の後ろに文字が浮かび上がる。"],"서커스단이라면…… 노아의 방주 서커스단인가?":
["The Circus of Noah?","サーカス・ダン...ノアのサーカス・ダン?"],"성함을 모두 기억하셨습니다. 오늘은 그걸로 충분합니다.":
["You remember all the holiness, today it is enough.","すべての聖霊を覚えていますが、今日はそれで十分です。"],"송구스럽지만, 저는 아직 단 한 푼도 받은 적이 없습니다.":
["I’m sorry, but I’ve never received a single penny.","残念ですが、まだ1ドルも得られていません。"],"시내에 들르실 곳이 하나 더 남지 않으셨습니까?":
["Do you have a place to go in the city?","市内には、もう一つ入る場所はありますか?"],"시엘이 서류에서 눈을 떼지 않고 잔을 받는다.":
["Ciel gets a glass without leaving his eyes from the papers.","シエルは、紙から目を離さずに飲み込む。"],"시엘이 위독합니다. 당분간 곁에서 돌봐야겠습니다.":
["She is a little bit shy, I’ll be taking care of it for a while.","シエルは、しばらくの間、そばにいておく。"],"신용 한도를 넘겨 채권단이 가문의 결산을 요구했습니다.":
["The credit limit was transferred, the debt authority demanded the family's discharge.","クレジットを渡し、債権団は家族の解散を要求した。"],"심사위원이 팬텀사의 견본 옆에 상장을 놓습니다.":
["The judge puts the sign next to the sample of Phantom.","審査員はファンタムサのサンプルの隣に記録を置く。"],"아직 손님이 앉기 전입니다. 의자를 다시 당기지요.":
["The guest is still before he sits. pull the chair again.","客が座る前に、椅子を引き戻す。"],"아직 안 졌어. 그런데 체스판을 왜 하나 더 샀지?":
["So why did you buy a new chess?","何故、もう1枚のチョコレートを買ったのか?"],"알고 있어. 심사가 끝났다고 손님까지 돌아가신 건 아니니까.":
["I know that the visitors did not have died.","見事の終わりには、ゲストが死んでいないという。"],"알아. 다음에는 박수를 받는 쪽도 바뀔 수 있겠지.":
["I think the next time you can change your praise.","次回は、おめでとうの仕方が変わるかも。"],"어라? 제 열쇠는 여기 있는데 온실 문이 열려 있네요?":
["My key is here, the greenhouse door is open.","鍵はここにあり、温室のドアが開いている。"],"에드워드가 손님들을 대하는 데는 더 익숙하군.":
["Edward is more familiar with his guests.","エドワードはゲストを扱うことに慣れています。"],"연도 두 개가 뒤바뀌었습니다. 연표에 표시해 두겠습니다.":
["Two years have changed, I will sign it in the year.","2 変更が行われ、日記に表示します。"],"열이 내렸습니다. 다음 일정은 아침 식사 뒤에 시작하지요.":
["The next schedule starts after breakfast.","熱が下がり、次のスケジュールは朝食後に始まります。"],"예. 돌아가시면 곧바로 검토하실 수 있게 준비하겠습니다.":
["If you are dead, I will be ready to check it immediately.","死んでしまったら、すぐに検査する準備ができてしまう。"],"오늘 복도가 너무 조용해. ⋯라고 에밀리가 말했어.":
["The corridors are so quiet today, Emily said.","今日は、廊下が静かだよ、エミリーは言った。"],"오늘은 내 시계로 재. 먼저 둘지 말지는 네가 정해.":
["I am not going to have my watch, you are not going to have it first.","今日は時計を着て、まず手に入れよう。"],"오늘은 내가 이겼네. 다음에도 같이 나올 거지, 시엘?":
["I’m going to win today, and I’m going to go next, Seal.","今日は勝ち、次回も一緒に出るんだよ?"],"오늘은 활을 내려놓고 리듬만 짚어 보지요.":
["Now we are going to get down and see the rhythm.","今日は、リズムを下げて、リズムを下げる。"],"오후 두 시엔 바구니를 반 뼘만 옮겨 줘.":
["At 2 p.m. move the basket half a piece.","午後2時には、半分の箱を移動させます。"],"올해는 이 정도면 돼. 차는…… 한 잔 더 줘.":
["This year, you can get a little more... a drink.","車を飲んで、もう1杯も・・・。"],"올해도 같이 나올 줄 알았어. 자, 종이 울린다!":
["I thought I would go out this year, the paper is sounding!","今年も出る予定だよ! 紙が鳴る!"],"왕실은 작위 승인을 보류했습니다. 금고에 남은 돈은":
["The royal house held the work approval. the money left in the box","王室は、手続きの承認を保有し、財布に残ったお金"],"왕진 시 컨디션 +24 · 대출은 월 £24씩 상환":
["Doctor’s visit: condition +24. Loan repayment: £24 per month.","往診で体調＋24。借入は月£24ずつ返済。"],"왼쪽으로만 도는 수레입니다. 자를 다시 대 보십시오.":
["It is only a line to the left. look at the one again.","左側のみが、また見て下さい。"],"은 다음 겨울에도 도련님의 지시를 따르겠다고 전했습니다.":
["I said I will follow your instructions next winter.","来年の冬にも、その指示に従うことを約束した。"],"음악보다 한 걸음 앞서셨습니다. 잠시 멈추지요.":
["A step ahead of music, stop for a while.","音楽を少しずつ止め、一歩先に。"],"이 단어는 지난겨울에 읽으신 편지에도 있었지요.":
["This word was also in the letter I read last winter.","こちらも、昨年の冬の記事を読んでみました。"],"인사 각도는 좋았습니다. 이번엔 문 쪽을 보십시오.":
["The headline is good, this time look at the door.","こんにちは、この度はドアを見てください。"],"작별 인사를 건네기엔 손님의 찻잔이 가득합니다.":
["The cup of the guest is full for goodbye.","別れの挨拶には、お客さんのカップが満ちています。"],"잠깐만. 심사위원에게 한 가지만 묻고 갈 거야.":
["I’ll ask the judge a question.","もう一つ、裁判官に聞いてみよう。"],"쟁반은 가져가도 좋아. 영수증은 놓고 가.":
["Take the box, take the card.","手紙を持ち込んで、手紙を置いておく。"],"전표는 이게 다야? ……됐어. 있는 만큼만 올려.":
["The list is up? - I just get up.","タイトルはこれ? いいえ? できるだけ上昇する"],"절감\"],[\"sales\",\"판매 담당\",\"수요":
["“Sales”, “Sales”, “Sales” and “Sales”.","売り上げ(売り上げ)と「売り上げ」"],"정말 입이 벌어지네. 한 번만 더 눌러 봐.":
["It’s hard to get up, just press it once more.","口が開いて、もう一度押す。"],"제 몫의 품삯까지 넣어 두셨군요, 도련님.":
["You have put me in your part, Mr.","俺の名誉を、おまえに置いておくんだよ、ドーディー。"],"제가 손을 떼었는데도 말이 같은 걸음으로 돌아왔습니다.":
["I took my hand away and came back on the same way.","手を伸ばしたが、同じステップで戻ってきた。"],"제값은 하는군. 다음번엔 네 진짜 이름도 사 주지.":
["I'm going to get your real name next time.","名前を買うと、次回は本当の名前を買う。"],"지난 주문서도 가져왔습니다. 장부부터 보셔도 좋습니다.":
["I have already received the order, you can see it from the office.","前の注文も持ってきて、先行から見てみたい。"],"체온계를 여기 두겠습니다. 오늘 남은 일은 제가 물리겠습니다.":
["I will keep the body heating here.I will take the remaining thing today.","体温をここに置いて、今日の残りは私にします。"],"체크메이트. 네 몫은 네가 지킨 폰으로 해.":
["Checkmate. you share with your phone.","チェックメイト! あなたが守る携帯電話であなたの割り当てをします。"],"축하해, 시엘. 오늘의 찻숟가락은 네 것이군.":
["Congratulations, Ciel, this day’s cup is yours.","こんにちは、シエル、今日のカップはあなたのものだ。"],"타나카가 휴직을 마치고 저택 서재로 돌아왔다.":
["Tanaka finished his vacation and returned to the residence.","タナカは休暇を終え、家に帰った。"],"팬텀하이브 가 당주, 시엘 팬텀하이브로서.":
["Not as Ciel Phantomhive, head of the House of Phantomhive.","ファントムハイヴ家当主、シエル・ファントムハイヴとして。"],"푸른 유료표 오십 장과 흰 초대권 오십 장":
["50 Blue Tickets and 50 White Invitations.","ブルー・カード50枚、ホワイト・招待券50枚"],"피니, 장미마다 왜 천 조각을 묶어 놨지?":
["Why do you put a thousand pieces of roses?","ピニー、なぜ毎バラに千枚の塊を結びつけたのか?"],"하지만 내 주방에선 태우지 마. 이건 명령이야.":
["But don’t burn in my kitchen, this is the order.","キッチンで焼かないで、これは命令です。"],"한 바퀴면 충분합니다. 오늘은 평보로 끝내지요.":
["One round is enough, and today it ends with a ratio.","1回は十分だ、今日はレベルで終わる。"],"한 시간 더 뻐긴다고 금고 안 사정이 달라지나?":
["Is it a time more than a hour, and is it not a time more?","もう1時間もかかり、変わらないのかな?"],"해가 졌으면 등불을 켜면 될 일이야. 준비해.":
["If the sun is gone, you will have to light the lamps.","太陽が消えると、灯りが点灯するので、準備を整える。"],"활이 멎자 처음으로 응접실의 시계 소리가 들립니다.":
["The clock is heard for the first time.","時計の鳴き声が聞こえるのは初めて。"],"· 각 분야 한 과목의 실기 합격 뒤 같은 과목 2회 수강":
["• The same two-time course of each subject.","各分野の実習を1つの科目で同一科目2回受講後"],"“도련님께서 그렇게 말씀하실 줄 알고 다음 교본을 준비해 두었습니다.”":
["“I know that you’re going to say that, and I’ve prepared the next text.”","「あの先生がそう言ってくれることを知り、次のレコードを準備した」"],"… 쟁반은 가져가도 좋아. 영수증은 놓고 가.":
["Take the card, take the card.","手紙を持ち込んで、手紙を置いておく。"],"…듣고 보니 일리 있네!! 그럼 내가 뭘 하면 돼?":
["I’m going to hear it, what do I do?","こんにちは! こんにちは! どうしたらいいの?"],"걸음이 자꾸 짧아집니다. 의자는 제가 가져오겠습니다.":
["The step is short, the chair I will bring.","歩きが短くなり、椅子を連れて行きます。"],"게임 속 사건과 인물의 행적은 허구이며 현실과 무관합니다.":
["The events and actions portrayed in this game are fictional.","ゲーム内の事件や登場人物の行動はフィクションです。"],"고마워. 그래도 이건 스네이크가 직접 건네고 싶대.":
["Thanks, but I want to do this by Snake.","ありがとう、スナイクが自分でやってきたんだけど。"],"그 조용한 손님에게서 웃음을 끌어내셨군요.":
["He smiled from the quiet guest.","静かなゲストから笑いを引き出した。"],"글쎄요. 도련님께서 아직 돌아가시라는 말씀을 안 하셔서.":
["You don’t say that he is still dead.","まあ、まだ死ぬなんて言ってないんだよ。"],"길모퉁이 둘이 같은 모양입니다. 방향을 다시 표시하지요.":
["The two corners are the same. remark the direction.","二つの角は同じように見える、方向を再示します。"],"날짜는 맞습니다. 거래처별로 한 번 더 나누지요.":
["The date is right, I will share it once more.","正解は、再度取引を繰り返します。"],"년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF":
["June Queen Victoria Immediate 50th Anniversary · Family Participation IF","6月 ヴィクトリア女王の50周年 · 家族参加 IF"],"놈이 내 돈을 단 한 푼이라도 축내는 곳 끝까지.":
["He has only paid a penny to the end of my celebration.","最後まで、お金の1ポンドを祝う。"],"눈에 띄는 곳에 새길수록 큰 힘을 쓸 수 있습니다.":
["The more conspicuous the mark, the greater the power you can wield.","目立つ場所に刻むほど、大きな力を振るえます。"],"다시 한 번만. 교회 종이 울릴 때 첫 음을 놓쳤어.":
["I missed the first sound when the church paper was screaming.","教会の紙が鳴るときに、最初の音を失った。"],"단계마다 수요 +2개 · 판매품당 포장 수익 +£1":
["Demand +2 per step · Packaging revenue per sale +£1","各ステップごとに需要 + 2 件 · 販売商品ごとに包装収益 + £ 1"],"도련님, 돌아가시면 원고부터 함께 살펴보시겠습니까?":
["If you die, will you look at the original?","死んでしまったら、先見てみませんか?"],"돈을 뿌렸으면 이름값은 해야지. 오늘은 몇이나 기다려?":
["If you have to pay the name, how much do you wait today?","金がかかるなら、今日は何時間待つのか?"],"돌아갈 곳이 없으면 여기로 와. 일손이 하나 필요하거든.":
["If you don’t have any place to go back, come here because you need one hand.","帰る場所が無いので、手を握って来てください。"],"두 달 이상 유예하면 교육 효율과 가문 명성이 낮아집니다.":
["With a two-month leave, the efficiency of education and family reputation will be lower.","2ヶ月以上休暇を取れば、教育効率と家族の評判が低下します。"],"뜻은 통했습니다. 마지막 어미를 한 번 더 읽어 보시지요.":
["I'm sure you'll read the last mom again.","最後の母をもう一度読んでみてください。"],"마지막 장소에 닿을 즈음이면 해가 뚝 떨어지겠습니다.":
["When we reach the last place, the sun will fall.","最後の場所に到達すると、太陽が落ちる。"],"맞아. 다음에도 봐주지 않을 테니까 또 같이 나와 줘!":
["I’m not going to see you again, let you go back!","次回は見てないから、また来てくれ!"],"먹을만한 걸 만들어도 이젠 드셔 줄 도련님이 없네.":
["You can do something to eat, but you don’t have anything to eat.","食べるものを作っても、もう食べない。"],"뭐? 이봐, 너희가 먼저 저 애 멱살을 잡았어?":
["Have you first killed that child?","あなたは、最初にその子を殺したのですか?"],"바퀴는 굴러갑니다. 손잡이는 조금 더 다듬지요.":
["The wheel goes round, the handheld is a little more thick.","車輪が回り、手のひらは少しずつ伸びます。"],"발이 등자에서 두 번 빠졌습니다. 안장부터 다시 보지요.":
["The legs fell two times from the back, and I look again from the eye.","足が2回下がったので、再び見る。"],"병마개의 맛표와 시식 결과에 맞춰 종이표를 바꾼다":
["Change the paper according to the taste and test results.","病気の味わいと試験結果に合わせて紙を変更する"],"복도 끝 방에서 새로 다린 리넨 냄새가 납니다.":
["The end of the corridory room smells newly drawn linen.","廊下の端の部屋に新しく塗られたリネンの匂いがする。"],"새 장갑은 됐어. 단추만 다시 달면 쓸 수 있어.":
["I have a new handheld and I can only use it again.","新しい手袋が届いたので、ボタンを再び押すだけです。"],"서명을 받았으니 배달은 끝났다고 거래처에 알린다":
["Signed, the delivery is finished.","契約書が締結され、配達終了を告げる。"],"손님, 이걸론 못 타요. 날짜가 몇 년 전 것인데.":
["My guest, I don’t know this date, it was a few years ago.","ゲストは、何年も前から来た日付です。"],"손님에게 먼저 인사를 건네고 대답이 끝날 때까지 기다립니다.":
["We will first say goodbye to the guest and wait until the answer is over.","まずはお客さんに挨拶を送り、回答が終わるまで待ってます。"],"손님은 저녁상에 오른 요리로도 그 집을 평합니다.":
["The guests also appreciate the house as a dinner.","客は夕食の料理でその家を評価する。"],"손님이 둘인데 네 역할도 둘이야? 꽤 바쁘겠군.":
["You have two guests and you’re both busy.","ふたりのゲストがいる? 仕事も2人?"],"시엘 앞에 무릎을 꿇고 고개를 숙인 세바스찬":
["He was on his knees and heed up in front of Seal.","シエルにひざまずいて頭をひっくり返すセバスチャン"],"시엘! 런던에 오거든 내 쪽에도 꼭 들러라!":
["If you’re in London, go to me!","ロンドンに来て、私も来てくれ!"],"아그니 씨. 혹시 내일도 이 시간에 뵐 수 있을까요?":
["Will I be able to go this time tomorrow?","明日もこの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で、あの時点で"],"아까 문이 열리길래 네가 온 줄 알았어, 시엘.":
["I thought you had come, Ciel.","ドアが開いて、あなたが来たと思っていたシエル。"],"영수증 한 장만 남았습니다. 내일 이 줄에서 시작하지요.":
["I have only one receipt left, tomorrow we start on this line.","残り1枚の受付が残りますので、明日からこのラインからスタートします。"],"이 문장의 주어를 바꾸면 동사의 어느 부분이 달라집니까?":
["If this phrase changes, what part of the word will be changed?","この言葉の内容を変えれば、どの部分が変わるのでしょうか?"],"이 은쟁반은 경매에 부치면 제법 값을 받겠습니다.":
["If you are on the auction, you will get a fair price.","売り上げに当たるときは、正しい値段がかかります。"],"이번 달 석탄값은 얼마지? 지난달 영수증도 가져와.":
["How much is the price of coal this month? take the receipt last month.","月額の石炭は? 月額の石炭は?"],"이번에는 악사 쪽을 보지 않고도 박자를 맞추셨군요.":
["This time, you have not seen the wicked.","今回は悪魔の姿を見せずに、"],"작은 사장님께서 직접 화물을 보러 납실 줄은 몰랐습니다.":
["I didn’t know the little boss would go to see the cargo.","少年の先生が、自分で荷物を見ることに気づいていなかった。"],"잘했어, 시엘. 내 잔에도 조금만 더 따라 주겠나?":
["Well, Ciel, can I follow you a little more in my cup?","うん、シエル、もう少しお酒を飲んでくれますか?"],"전에 계시던 가정교사에게 연락을 넣어도 되겠습니까?":
["Shall I send for your former tutor?","以前の家庭教師に連絡を入れてもよろしいですか？"],"제 구두는 괜찮습니다. 왼발부터 다시 하시지요.":
["My mouth is fine, let me go back to the left.","うまくいくので、左足から戻ってきます。"],"좋아. 그렇다고 다음 경연에서도 네 뒤만 따라다닐 생각은 없어.":
["I don’t think you will be following me in the next competition.","だから、次のコンテストで追いかけるつもりはない。"],"지병이 깊어져 도련님께서 자리를 뜨기 어렵습니다.":
["The troops are deep and it is difficult to get up.","軍隊が深く、ドライバーは座席を上げるのが難しい。"],"찌그러진 통을 바꿔 주고 보관 자리를 옮긴다":
["Change the shell and move the storage.","切り替え、保管場所を移動。"],"차는 침실로 올리겠습니다. 오늘은 어느 서류를 물릴까요?":
["I will get the car up to the bedroom. what documents do I get today?","車を寝室に持ち上げる?今日はどんな書類を噛むべきか?"],"창고에서 열일곱 번 칸을 옆 칸과 맞바꾼다":
["In the warehouse, seventeen canyons are replaced with a side canyon.","倉庫の十七回カンと隣のカンに合わせて交換する。"],"창문은 조금 열어 둘게. 우리가 먼저 네가 오는 걸 알아채게.":
["Let the window open a little, let us first see you come.","窓を開けて、まずあなたが来るのを見せてくれ。"],"천막에선 뱀을 돌봤어. 여기선 뭘 하면 돼?":
["I watched the serpent in the tent, what can I do here?","屋根の蛇を観察して、どうしたらいいの?"],"추천서 원본과 두 영수증을 맞춰 상회 대표를 지목한다":
["The original and two receipts are presented by the representative of the council.","オリジナルと2つの受付証明書に合わせて、会議の代表を指定します。"],"크하하, 진짜 마시네! 한 잔 더 갖다 놓죠!":
["Oh, you really drink! let me get another drink!","ワイ!お酒を飲んで、もう一杯も!"],"팔 수 있는 물량이 부족해 이달 추가 매출은 £0입니다.":
["There is no amount to sell, the additional monthly sales are £0.","売れる金額が足りず、月額追加販売は£0です。"],"하면, 제가 대신 가정교사 일을 맡아도 되겠습니까?":
["Then may I take on the tutor’s duties myself?","それでは、私が家庭教師を務めてもよろしいでしょうか？"],"한 닢을 어디 감췄는지만 물으면 시험이 안 되겠지.":
["I have a test but I don't ask you to get the test.","どこに隠されたのか、試験ができなくなる。"],"회랑에서 시엘의 뒷모습을 지켜보는 세바스찬":
["Seaschen watching the back of Seal.","シエルの後ろの姿を見るセバスチャン"],"후, 살았다. 이제 당분간 조용히 지낼 수 있겠지.":
["I’m still alive, and I can stay quiet for a while.","もう、今は、しばらく静かに暮らすことが出来ます。"],"……아그니 씨. 혹시 내일도 이 시간에 뵐 수 있을까요?":
["Can I get this time tomorrow?","明日もこの時点で、あれはできるだろうか。"],"……잘했어, 시엘. 내 잔에도 조금만 더 따라 주겠나?":
["“Good, Ciel, can I follow you a little more in my cup?","シェル、もう少しお酒を飲んでくれますか?"],"……정말 입이 벌어지네. 한 번만 더 눌러 봐.":
["It’s really hard, just press it once more.","口が開いて、もう一度押して。"],"…후, 살았다. 이제 당분간 조용히 지낼 수 있겠지.":
["I’m still alive, I can stay quiet for a while.","もう、今は、しばらく静かに暮らすことができる。"],"견본은 받았습니다. 납품일은 서신으로 확인하지요.":
["The delivery is confirmed by letter.","サンプルを受け取った、配達日付は手紙で確認します。"],"고삐를 짧게 쥐고 울타리를 따라 한 바퀴 돕니다.":
["Keep the thumb short and help one round along the curtain.","短い手を握り、壁に沿って一輪を助ける。"],"골목의 발자국을 살핀 뒤 수첩에 현장 약도를 그립니다.":
["Slip the footsteps of the street and then draw the scene slides in the letter.","道の足跡をスルフィンして、その後、手紙に現場の弱さを描く。"],"그 눈동자―, 도련님을 위해 써보지 않겠습니까?":
["Do you not try it for your eyes?","目が、あなたのために使ってないの?"],"그날 밤, 누구한테 개찰을 맡기고 자리를 떴지?":
["Who did you take the place and put it on that night?","夜、誰に手を差し伸べるのか?"],"그래. 한 잔만 더. 그동안은 서류도 그대로 두자고.":
["I have a little more. - I have the documents.","もう1杯、そのまま書類を残す。"],"그러니까 갈 만한 구멍을 세 군데나 짚어 놨잖아.":
["So, I have three holes to go.","だから、三つの穴を掘り下げた。"],"네 앞으로 빼 둔 물건이 하나 있어. 장부에는 적지 않았지.":
["I have one thing left in front of you, not a piece in the box.","前のところに何かが残っている、お店には何もない。"],"네 축사도 잘 들었어. 다음에도 함께 겨뤄 볼 만하겠군.":
["I’ve heard your story well, and we’ll be able to see it next.","うん、お祭りも聴いてますので、次回も一緒に会いましょう。"],"네가 듣겠다고 했으니까. 대충 연습할 수는 없잖아.":
["You will hear, you can’t practice.","聞くこと、練習できないって言ってるよ。"],"네가 봐주지 않겠다고 했잖아. 나도 준비는 해야지.":
["You said I don’t want to take care of you, I have to prepare.","気をつけないと言って、私も準備をしていきたい。"],"다음에 들르면 차 한 잔은 내가 내지. 내가 쏘는 거야.":
["I will get a cup of the car, and I will shoot it.","次回は、お酒を飲んで、俺が撃つ。"],"도라의 이름을 완성해 주려면 가게에서는 어디까지 확인해야 할까?":
["How far do I need to check in the store to complete the name of Dora?","ドーラの名前を完成させるには、店でどのくらいチェックする必要がありますか?"],"도련님 접시는 요 뚜껑 밑에! 탄내 없이 따끈합니다.":
["The dish is under the cover! it is not a slurry.","パッケージはカバーの下に! 無く、"],"도련님, 바닥이 젖었어요! 제가 먼저 지나가 볼게요!":
["The floor is wet! I'm going to go through first!","水道が濡れ!先に見る!"],"도련님이 표시하신 축을 고치니 바퀴가 끝까지 돌아갑니다.":
["The wheel is fixed and the wheel goes back to the end.","指示された軸を修正し、車輪が終わりまで戻る。"],"두 번째 종합 실기 완료 · 주력 과목의 심화 수련 해금":
["Second full-time training; deepening training of the main subjects","2回目の総合実習完了 · 主科の深化訓練解除"],"두 집의 가격을 받아 적으셨군요. 돌아가서 대조하겠습니다.":
["You have the price of two houses, I will return and deal with you.","二人の家に値段を付けて、帰ってくる。"],"런던 타운하우스 · 소마와 아그니가 맞이한 방문객":
["London Townhouse · Somah and Agni welcomed visitors","ロンドンタウンハウス · ソマとアグニーが迎えた訪問者"],"로열 워런트 · 왕실 납품 인증 · 월 수요 +2개":
["Royal Warrant · Royal Delivery Certificate · Monthly Demand +2","ロイヤル・ウォーレント · 王室配達認証 · 月間需要 + 2 件"],"리본이 걸렸군. 실례합니다. 잠깐 제가 풀어도 될까요?":
["I am sorry, can I get rid of it for a while?","リボンが苦手です、すみません、もう少し解放できますか?"],"매표 수입이 예상의 절반으로 나온 까닭은 뭘까?":
["What is the result of the average half-performance income?","収入の半分が予想されるのは何ですか?"],"맨 앞의 사내가 시엘의 옷깃을 움켜쥐었다.":
["The man in front took the Ciel's clothes.","男はシエルの衣類を振り回した。"],"문을 닫았군요. 다음번엔 영업시간부터 묻지요.":
["I’m closed, and next time I’ll ask for the time.","営業時間は閉まっているので、次回は営業時間からお問い合わせください。"],"빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장":
["Red sentence card twelve chapters and blue key card twelve chapters","赤い文字カード12章と青い鍵カード12章"],"상대에게도 입을 열 틈을 주셔야지요, 도련님.":
["You have to give it a hand, Mr.","口をあげて、お前も、"],"설비와 제작 기록까지 준비하겠습니다. 어느 부분부터 검토하시겠습니까?":
["I will prepare up to the equipment and production records. from which part do you review?","製造・製造の記録を準備する予定ですが、どの部分から検討したいですか?"],"세바스찬은 태연히 반대쪽 장갑의 단추를 풀었다.":
["Shevchen throwed the button on the opposite handheld.","セバスチャンは、反対の手袋のボタンを直ぐに解放した。"],"손끝으로 가장자리를 따라가 보십시오. 거기까지 손으로 마감했습니다.":
["Follow the edge with your finger ends, and close it with your hands.","手のひらで、手を伸ばして、そのままに。"],"손님의 명함 가장자리가 접혀 있습니다. 오늘 방문의 뜻이 거기에 있습니다.":
["The guest’s card edge is attached.The meaning of today’s visit is there.","ゲストカードの端が横たわり、今日の訪問の意味はそこにある。"],"손님이 인사를 맺을 때까지 기다리셨군요, 도련님.":
["You have been waiting until the guest greeted.","こんにちは、お客さんがお迎えするまで待ってました。"],"손님이 장갑을 떨어뜨린 사이에도 소개가 끊기지 않았습니다.":
["The guest didn’t break the presentation even when he dropped his gloves.","ゲストが手袋を落としたときも、プレゼンテーションは中断されていませんでした。"],"손잡이를 한번 돌려 보시지요. 인사가 끝날 때까지요.":
["Take the hand to the end of the greeting.","手袋を振り返って、挨拶が終わるまで。"],"스콘은 따뜻할 때 반으로 갈라야 버터가 스며들지.":
["The scorn is split into half when it is warm, butter is shrinking.","スコーンは暖かくなったら半分に分け、バターが溶ける。"],"시엘은 반쪽짜리 표를 조끼 주머니에 찔러 넣었다.":
["Ciel put half-threatened tickets in his jacket pocket.","シエルは半分のチケットをポケットに押し付けた。"],"시엘의 오른쪽 눈동자에 보랏빛 계약인이 맺힌다.":
["The right eye of Seal is a Boratlight Contract.","シエルの右の目には、ボラートの契約が結ばれています。"],"시엘이 손을 내밀자 흰 장갑이 이미 그 위에 놓였다.":
["When Ciel stretched his hand, the white gloves were already placed on him.","シエルが手を伸ばしたとき、白い手袋はすでに彼の上に置かれた。"],"어딘가에 팬텀하이브 가를 파멸시키려는 자가 있어.":
["Someone out there means to destroy the House of Phantomhive.","どこかにファントムハイヴ家を滅ぼそうとしている者がいる。"],"여기에. 내 생일인데 자꾸 네가 먼저 정하게 둘 순 없잖아.":
["Here is my birthday, and you can't keep it up to the first.","誕生日だよ、今までは決して決められない。"],"영지를 돌려달라는 탄원서는 책상 위에 그대로 버려두었다.":
["The request for the return of the order was left on the table.","返品の要請は、テーブルの上に残された。"],"예, 도련님. 첫 조각은 어느 접시에 덜어 드릴까요?":
["What kind of cake should I put on the first piece?","では、最初のパッケージはどのパッケージに割れるのでしょうか?"],"예전에 천식을 앓은 적이 있습니까? 아주 어릴 때라도요.":
["Have you ever suffered from asthma before? even when you were very young.","以前は喘息を患っていたことがありますか? とても若い頃でも"],"오 분만 더 기다려 달라고 하면 배고프다고 성질을 내셨죠.":
["If you want to wait more, you’re hungry.","もう少し待ってほしいとしたら、お腹が空いてしまいます。"],"오늘은 목차까지만 정리해 두지요. 다음 장은 이어집니다.":
["I will be on the road today, and the next chapter will be.","今日は、車の仕上げをし、次の章が続きます。"],"왕실 서신에 답하거나 납품 인증으로 신임을 얻으세요.":
["Reply to the Royal letter or get a certificate of delivery.","王室の手紙に返信するか、配達証明書で信号を取得します。"],"우리 견본은 내가 가져가지. 심사표는 네가 챙겨.":
["I take the sample, you take the test.","サンプルを私に持って行きます. 審査はあなたに持って行きます。"],"원작 연구소 탈출 · 첫 만남과 명명 / 게임 달력에 배치":
["Original Laboratory Escape · First Meeting and Name / Game Calendar","オリジナル 研究所の脱出 · 最初の出会いと名称 / ゲームカレンダーに配置"],"원작의 서재 면담 · 메이린 합류 뒤 게임 달력에 배치":
["The original book interview · Mayer join after placing in the game calendar","オリジナルの本作インタビュー · メイリンが加わった後ゲームカレンダーに配置"],"월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.":
["On 17th of May, at 10 a.m. in the Buckingham Palace, a special ceremony will be opened.","1月17日午前10時、バッキングハム宮殿で特別な礼拝式が開かれます。"],"응! 중간에 음악이 끊겨도 내가 돌 때 손 받아 줄 수 있어?":
["Oh! if the music is broken in the middle, can I take my hand when I turn?","音楽が中途半端に止まっても、僕の手を握ることができる?"],"이 품목의 다음 주문도 준비해. 증서를 받은 뒤가 더 중요하니까.":
["Prepare the next order of this item as it is more important after receiving the certificate.","次の商品の注文も準備してください、証明書を受け取った後も重要です。"],"이건 앵초야. 잎을 뒤집어 보면 털이 있으니까.":
["This is anarchy. because you see the leaves turn around, there are hair.","やっぱり、あの葉が振り回されるから髪がついている。"],"이라 아무한테나 맡길 수 없는 일이지. 할 수 있겠어?":
["I can’t give it to anyone, can you?","誰にも渡すことはできない、やれる?"],"이번 견본에는 도련님께서 직접 값을 매겨 보시지요.":
["In this case, you can pay the price yourself.","この手紙で、あなた自身がお金を払ってくれる。"],"이봐! 문 열어 달라며? 그렇게 보고만 있으면 안에서 어떻게 알아!":
["How do you see it? - I know how to see it inside.","どうやって見る? どうやって見る? どうやって見る? どうやって見る? どうやって見る?"],"작년 생각나? 이번에는 내가 먼저 심사대에 갈 거야, 시엘!":
["This time I’m going to go to the court first, Ciel!","来年は、今度は、初回のセッションに行きます!シエル!"],"잘도 미끄러졌군. 그렇게 둬 봐. 두 수면 끝나.":
["It’s good, you’re going to go. – I’m going to get two.","うん、やっぱり2つで終わってね。"],"잠깐. 견본을 빛 쪽으로 좀 옮겨 주겠어?":
["Can you move the sample to light?","サンプルを光の方向に移動させますか?"],"잠깐. 그 잔은 이미 식었군. 새로 우려 오도록 해.":
["The cup is already cold, let me get a new.","もう、お酒が冷たいので、もう一つお酒を飲んでください。"],"제 경우처럼 개 이름을 물려받는 것보다는 백배 낫겠습니다만.":
["It is a hundred times better than my dog’s name.","犬の名前を相続するより、100倍も良かった。"],"좋아. 가장 그럴싸한 거짓말을 짠 놈부터 데려와.":
["Take the most fake lie from him.","最悪の嘘を、あなたから取り出して下さい。"],"지난 주문서까지 가져왔습니다. 어느 쪽이든 먼저 보시지요.":
["I have received the previous order, first look at any one.","前の注文まで持ってきて、どちらか先に見てみましょう。"],"차를 한 잔 더 우리라고. 누구 몫인지는 묻지 말고.":
["I'm not going to drink a glass of the car, ask who it is.","車を飲んで、誰のものかと聞かないで。"],"찾았습니다. 어릴 적에 여러 차례 심하게 앓으셨답니다.":
["He has been seriously ill several times in his childhood.","子供の頃、何度も重病を患っていた。"],"철문이 열렸다. 아이들은 그저 묻고 싶은 게 있었을 뿐이었다.":
["The door was opened, the kids had just something to ask.","子供たちは、ただ何かを尋ねただけだった。"],"첫 견본으로 충분합니다. 아이가 쥘 자리를 표시해 두겠습니다.":
["The first sample is enough. the child will show the shell place.","最初のサンプルで十分です. 子供が ⁇ 席を示す。"],"추리소설의 범인 옆에 누군가 이름을 써 두었습니다.":
["Someone had a name on the side of the murderer.","犯人の隣に名前を書いた人がいる。"],"컨디션이 좋지 않습니다. 다음 달에는 휴식이나 왕진을 고려하세요.":
["The condition is not good. consider rest or royalty in the next month.","気分が良くない、来月は休憩や王位を考慮してください。"],"포장을 여실 때 이 끝을 당기시면 됩니다. 안쪽도 보시죠.":
["You can pull the end of the package when you open it, see inside.","パッケージを閉じるときは、その端を引きずり、内側も見る。"],"1887년 6월 빅토리아 여왕 즉위 50주년 · 가문 참여 IF":
["June 1887 Queen Victoria Immediate 50th Anniversary · Family Participation IF","1887年6月 ヴィクトリア女王の50周年 · 家族参加 IF"],"3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.":
["On March 17, at 10 a.m. in the Buckingham Palace, a special ceremony will be opened.","3月17日午前10時、バッキングハム宮殿で特別な礼拝式が開かれます。"],"……그래. 한 잔만 더. 그동안은 서류도 그대로 두자고.":
["I have a little more. - I have the documents.","もう1杯、そのまま書類を残す。"],"……리본이 걸렸군. 실례합니다. 잠깐 제가 풀어도 될까요?":
["I am sorry, I can get rid of it for a while.","リボンが苦手ですよ、すみません、もう少し解放できますか?"],"가까이서 보셔도 됩니다. 진열장에 놓인 것과 같은 물건입니다.":
["You can see the same thing that is placed in the heating field.","見るのも、まっすぐに、同じような物体が、地下室に置かれている。"],"같은 줄을 세 번 읽으셨습니다. 제가 소리 내어 읽어 드리지요.":
["You have read the same line three times, I will read it.","同じ曲を3回読んだので、読み聞かせます。"],"겨울 아침의 빛이 팬텀하이브 저택의 창을 비춘다.":
["The winter morning light brings the windows of the PhantomHive house.","冬の朝の光はファンタムハイブの家の窓を照らす。"],"견본과 납품분은 같은 규격입니다. 치수는 여기 적었습니다.":
["The samples and delivery are the same standard. dimensions are written here.","サンプルと配達は同じ規格です。"],"고모님. 실례했습니다. 먼저 새해 인사를 드렸어야 했는데요.":
["Sorry, I had to say goodbye to you first.","すみません、おじいちゃん、新年おめでとうを頂きました。"],"공방에도 알려 줘. 오늘만 이 규격으로 만들라고 한 적은 없다고.":
["I have never told you that this is not the standard today.","空中も言って、今日はこの規格を決して作ったことがない。"],"그 돌덩이를? 세바스찬한테 수레라도 빌리지 그랬어.":
["I had to pay for the Suarez.","シュレアもセバシュチャンに貸し出した。"],"그래서 일부러 피아노에서 제일 먼 자리까지 의자를 밀어 둔 거야?":
["So you deliberately pushed the chair to the most distant place from the piano?","だから、意図的にピアノから最も遠い場所まで椅子を押したのですか?"],"그럼 다음 곡도 기대할게. 나도 열심히 준비해 올 거야.":
["I'm going to wait for the next song, and I'll be ready.","次の曲も楽しみにして、準備が整った。"],"그럼 다음에는 나랑 같이 연습하자. 곡은 내가 골라도 돼?":
["So next time we can practice with me. can I choose the song?","次回は、歌いながら練習してみて、歌いながら練習してみてはいかがでしょうか?"],"그쪽에도 있었구나. (;) 난 손수건 무늬인 줄 알았지.":
["I was there. ( I thought it was a handful.","俺も、手のひらがかわいそうだと思っていた。"],"깨지기 전에 하나 집어. 봉투는 책갈피로 써도 돼.":
["Take one before it breaks. the package can be used in a bookboard.","折る前に、箱を書く。"],"꽃잎 색은 같은데…… 이 둘의 표찰은 잠시 비워 두겠어.":
["The flowers are like the colors... I will leave these two signs empty for a while.","花の色は同じ・・・この2つの印をしばらく空かせてあげます。"],"난 스네이크야. 장갑이 마음에 든 저 애는 와일드고.":
["I love the handwriting, and she is wild.","手袋が好きな男の子はワイルド。"],"내가 조금 앞섰네. 네가 찾아낸 달걀들도 정말 귀엽다, 시엘!":
["I’m a little ahead.The eggs you found are also cute, Ciel!","見つけた卵も可愛い!シエル"],"내가 한 입 먹을 때마다 눈치도 없이 새 접시를 내온 게 누군데":
["Every time I eat one mouth, I don’t notice someone else coming out a new dish.","誰かが、口を食べるたびに、気づかずに新しい皿をあげてくれました。"],"너도 정원을 꼼꼼히 살폈더군. 다음에도 이렇게 겨뤄 보자.":
["You have been looking at the garden and let’s look at it again.","庭をしっかり見て、次回もこうやってみよう。"],"녹색 앞방에서 식장을 바라보는 마담 레드와 세바스찬":
["Madame Red and Sebastian looking at the green front room.","緑の前面から食堂を見るマダム・レッドとセバスチャン"],"누가 도련님을 저격했습니다. 제법 눈이 좋은 손님이군요.":
["Who shot you? he is a good eye guest.","誰が射殺したか? 正直な目で良いゲストだ。"],"답은 맞습니다. 어떤 구절이 근거인지 짚어 보시겠습니까?":
["The answer is right.Will you see what the phrase is based on?","答えは正しい!どんな言葉が根拠なのか見てみようか?"],"도련님, 숨을 고르실 때까지는 이 벤치를 비워 두겠습니다.":
["I will leave this bench until you have a breath.","息を引くまで、このベンチを空けます。"],"도련님, 장터에 내놓을 물건을 고른다고 생각해 보십시오.":
["Think, the boss, that you choose what to put in the chamber.","先生、お店に置くものを選んでみてください。"],"도련님은 요양 중입니다. 예약한 수업료는 그대로 지급됩니다.":
["The class is in charge. the class fees are paid as well.","授業料は、予約済みで、ご支払いいただきました。"],"도련님의 회중시계는 그날 새벽의 시각에 그대로 두었습니다.":
["The clock of the meeting was set in the sight of that morning.","朝の目に、その日の時計が付いている。"],"도련님이 앉으시던 자리는 제가 매일 닦아 두겠습니다요.":
["I will clean the place where you sit every day.","座っている場所は、毎日掃除します。"],"두 분께 같은 자리를 권하셨습니다. 좌석표를 다시 드릴까요?":
["I recommend the same place to you, can you give me a seat?","二人とも同じ席を勧めましたか?また座席を返すことができますか?"],"마지막 선에서도 보폭이 같았습니다. 기록보다 호흡을 먼저 보셨군요.":
["You’ve seen the breath first than the record.","最後のラインも、同じように、レコードよりも先に息を吸った。"],"마지막 영수증까지 제자리에 있습니다. 내일은 이 원장부터 펴겠습니다.":
["I am on the last post, tomorrow I will open this post.","最後の受付まで、明日からこの本を開く。"],"먼 길 와 주셔서 감사합니다. 돌아가실 때는 저희 마차를 쓰시지요.":
["Thank you for the way, when you die, use our car.","遠くに来てくださった方、ありがとう、死んでしまったら車に乗ってください。"],"물론이지. 그때는 네가 내게 박수를 칠 차례가 될 거야.":
["And then you will be the time to congratulate me.","もちろん、その時、あなたは私に祝福を送る番になるでしょう。"],"반품 한 건까지 찾아내시다니. 경리에게도 보여 줘야겠습니다.":
["I'm going to get you back, I'm going to show you to the roof.","返品を頂いて、パリにも見せてくれます。"],"반품도 매출에 넣으셨군요. 이 영수증은 빼겠습니다.":
["You have the return on the sale. I will take this receipt away.","売り上げも取り出し、この手数料は取り出します。"],"봉투랑 문패에 똑같은 이름이 있어. 이번엔 제대로 왔네.":
["The same name and the same name on the box, this time it came right.","タオルとタオルの名前が同じで、今回は正解です。"],"서랍에 넣어 두면 장부를 펼칠 때마다 향이 날 거야.":
["You will smell it every time you put it in the box.","箱に入ると、毎回香りが吹き飛ばします。"],"서쪽 창을 조금만 열어 둘까? 누가 오는지 우리가 먼저 알 수 있어.":
["We will open the western window a little bit. - We can first know who comes.","西の窓を開けたら、誰が来るか先にわかる。"],"석 달 전이었으면 네 손에서 낚아채서라도 읽었을 거야.":
["Three months ago, I would have read that fish from your hands.","3ヶ月前だったら、手から釣りをしていたはずだ。"],"세 칸을 모두 채우셨군요. 다음은 ‘자유행동’입니다.":
["You have filled all three canyons, the next is “Free Action”.","全部で3カンが満たされ、次は「自由行動」です。"],"세바스찬이 이발 가위를 들고 시엘의 머리를 다듬고 있다.":
["Shevaschan is holding a sheep and shaking the head of Ciel.","セバスチャンは、シエルの頭をひっくり返して、 ⁇ の毛をかぶっている。"],"셋입니다. 서로 얼굴 붉히지 않도록 전부 다른 문으로 들였습니다.":
["They all went into the other door so that each other's face did not red.","みんなが互いに顔を赤くしないように、他の門に突っ込んだ。"],"수금 전표가 지출 쪽에 있습니다. 색실을 끼워 둘까요?":
["The money is on the side of the spending. can you put it in a color room?","金の流れは、お金の流れにありますか? 色室を入れますか?"],"수레가 턱을 넘었습니다. 이번 축은 견본으로 남기지요.":
["The shell is over the neck. this axis leaves as a sample.","⁇ は横を渡り、この軸はサンプルとして残す。"],"시엘, 오늘을 위해 정원을 열심히 살펴봤구나. 축하해!":
["Seal, I have been looking forward to the garden for today. congratulations!","シエル、今日は庭園をしっかり見てきました!おめでとうございます!"],"시엘은 잠시 빈 접시를 내려다보다가 자기 앞으로 가져왔다.":
["Ciel took the empty plate down for a moment and brought it to himself.","シエルは、しばらく空っぽの皿を下ろして、自分自身に先に連れて行った。"],"시엘이 차 주문서에 줄을 긋고 한 통을 더 적어 넣었습니다.":
["Seal put a line on the car order and put another piece in.","シエルは車の注文にラインを押し付け、もう一つのタブレットを書いた。"],"아주 가볍고 고운 필체입니다. 안부를 묻는 편지군요.":
["Very light and cool, a letter to ask goodbye.","とても軽くて、おめでとうの手紙です。"],"앞으로도 그게 궁금하면, 내 돈 값어치 하는 물건부터 내놔.":
["If you want to do so, let me get my money.","もし、これからもお金がかかるのであれば、お金の価値を手に入れましょう。"],"양쪽 손님이 모두 자리에 앉았습니다. 차도 식지 않았고요.":
["Both guests were sitting in the car, and they didn’t eat.","両方のゲストが座り、車も食べなかった。"],"어차피 배에 들어가면 그만인 걸, 맛이 무슨 대수라고!":
["If you go on the boat, what a taste!","船に入ると、何の味もあれ!"],"얼굴만이라도 볼 수 있어? 우리가 왔다고 조커한테 전해 줘.":
["Let me tell you that I’m here. – Let me tell you that I’m here.","顔も見てますか? ジョーカーに、私たちが来たことを伝えてください。"],"에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까.":
["He who asked him not the number but the name was Ciel.","名前を尋ねるのはシエルが初めてだったからだ。"],"연구소에서 빠져나온 S-012는 시엘에게 이름과 책을 받았다.":
["The S-012 was given the name and book to Ciel.","研究所から脱出したS-012はシエルに名前と本を授与された。"],"연도가 같은 편지 두 통에 찍힌 가문 인장의 테두리가 다릅니다.":
["The year is different from the boundary of the family sign that is drawn in two letters of the same letter.","同じ手紙の2本に描かれた家族印の境界線は異なります。"],"예, 도련님. 이번에는 홍차도 한 분 몫만 준비해 두겠습니다.":
["I’ll be preparing a single piece of the cake this time.","こんにちは!今回は、一杯のチョコレートを用意します。"],"오늘 고른 리본, 시엘이 보면 너무 화려하다고 했을 텐데….":
["I think that today, when I saw Raven, she would have been so good.","今日のリボン、シエルは見た目がすごく素晴らしいと聞いた。"],"오늘 들어온 서류는 서재에 두었습니다. 차는 침실로 올리지요.":
["The documents that we enter today are placed in the room, and the car is lifted to the bedroom.","今日入った書類は、店内に置いており、車は寝室に持ち込まれます。"],"오늘 수업은 여기까지입니다. 다음 선생님께는 제가 편지를 보내지요.":
["Today I am here, and I will send you a letter.","今日は授業です、次に先生に手紙を送ります。"],"오늘은 교본 대신 추리소설을 무릎 위에 올려 둡니다.":
["Today I put the logic novel on my knees instead of the text.","今日は、本の代わりに、ひざまずきをひざまずく。"],"오늘은 네가 더 잘 준비했군. 다음에도 그럴지는 두고 보자고.":
["You are better prepared today, let’s see what happens next.","今日は、もう準備が整ったので、次回も見てみましょう。"],"오른쪽이 이번 달에 들어온 돈이고, 왼쪽이 나간 돈입니다.":
["The money that comes to the right side this month, and the money that comes to the left side.","右側が来たお金、左側が来たお金。"],"왕실의 소개장 없이는 어딜 가도 문전박대일 텐데요.":
["Wherever the kingdom is presented.","王室の紹介なしでどこへでも、ドアは開けます。"],"우리 서커스의 단장 대리야. ⋯라고 에밀리가 말했어.":
["The head of the circus, Emily said.","サーカスの主役だよ、エミリーは言った。"],"우유를 곁들이신다고요? 이번 잔은 조금 진하게 따르겠습니다.":
["I’m going to take this glass a little bit seriously.","牛乳を飲んでる?このグラスは少し真剣に続きます。"],"월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.」":
["On 17th of May, at 10 a.m., we will open a special ceremony in the Buckingham Palace.”","月17日午前10時、バッキングハム宮殿で特別な礼拝式が開かれます。"],"월말 잔액이 음수입니다. 다음 월말에도 음수면 파산합니다.":
["The balance is fine. the next month will be false if the balance is fine.","月末のバランスは水分です、次の月末にも水分が破産します。"],"이 품목의 지난 납품 전표가 이것뿐인가? 있는 대로 올려.":
["The previous item’s delivery list is this only?","前の記事の配達記録はこれだけですか? こんな感じです。"],"이름이 알려진 셰프라면 대개 프랑스나 이탈리아 사람이잖아.":
["The name of the chef is usually French or Italian.","名前の知られているシェフは、通常フランス人やイタリア人です。"],"이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요.":
["This is not the case for a high-end user.","こんな高級利用者には、そんなにない。"],"이번에는 저쪽이 선정됐군. 심사 기록은 전부 가져가겠어.":
["This time, I will take all the records.","今回は、すべての記録を手に入れました。"],"이번에는 제 눈치를 살피지 않고 명령을 내려 보십시오, 도련님.":
["This time, please do not check my notice and take the command down, Mr.","今回は、私の注意を調べずに命令を下ろして下さい。"],"이번에는 참가가 어려워졌습니다. 다음 경연 전에 필요한 조건을 확인하겠습니다.":
["This time, the participation was difficult.I will check the conditions needed before the next competition.","今回の参加は難しかったので、次のコンテスト前に必要な条件を確認します。"],"이쪽 가지에 물감이 묻었어. 파란 달걀은 이 아래야.":
["The blue egg is under this.","水分が埋められ、青い卵は下にあります。"],"일곱 조각이면 학 한 마리가 돼. 동양의 미, 어때?":
["Seven pieces of a school, the East America, what?","7 東のアメリカで学ぶ? どうする?"],"잠깐 시간을 때우고 배를 채울 수 있다면, 그것으로 족하다.":
["A little diversion and a meal at the end of it. That will do nicely.","しばし退屈をしのげて、腹も満たせるのなら、それで十分だ。"],"잠깐만. 마지막 집에 돌아갈 몫이 왜 한 자루 모자라지?":
["Why do you want to go home for the last time?","最後の家に帰るのはなぜ?"],"좀 더 가까이서 보시죠. 진열장에서 보신 것과 같은 물건입니다.":
["Look closer, the same thing you saw in the heating.","もっと近づいて見て、まるで地下室の様子。"],"좋아. 다음 곡도 같이 준비하자. 나도 다음에는 이기고 싶어!":
["Let’s get the next song, I want to win!","次の曲も一緒に作って、次回も勝ちたい!"],"차를 더 준비하겠습니다. 두 분께서 함께 드실 수 있도록 자리를 마련하지요.":
["I will prepare the car for you to have a place together.","車をもう少し準備し、二人とも一緒に食事をできるようにする。"],"찻잔을 소리 없이 놓으셨군요. 다음 잔도 그렇게 부탁드립니다.":
["You have not gotten the cup, please, and then you will drink it.","飲み物は無音で、次の飲み物もどうぞ。"],"창가까지 같은 걸음이었습니다. 제 시계를 보실 필요도 없군요.":
["I went to the window, and I don’t have to see my clock.","窓から歩いて、時計を見る必要もない。"],"철창 앞 차가운 돌바닥에 시엘이 무릎을 꿇고 있다.":
["In the cold stone front of the iron window, Ciel is on his knees.","鉄窓の前で、シエルはひざまずいて冷たい岩の底に立っている。"],"초가 녹기 전까지 제게 두 수나 허락해 주시겠습니까?":
["Can you allow me two to go before the second is broken?","二つ目は、お湯が溶けるまでお許しですか?"],"축하드립니다, 도련님. 다음 납품분도 같은 기준으로 확인하겠습니다.":
["Congratulations, I will check the next delivery in the same standard.","こんにちは、次回の配達も同じ基準で確認します。"],"축하드립니다, 도련님. 준비하신 인사에 좋은 결과가 따랐군요.":
["Congratulations, you have received a good result for your prepared greeting.","こんにちは、おめでとうございます、ご挨拶の結果が良かった。"],"축하해. 네가 고른 차를 한 잔 마셔 봐도 될까?":
["Can you drink a drink of the car you have chosen?","どうぞお酒を飲んで頂けますか?"],"팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다.":
["To re-establish the name of the fantazy, you need a chef.","ファンタムハイブの名を再構築するには、シェフが必要です。"],"한 마디만 다시 부탁해. 바람에 악보가 두 장 넘어갔어.":
["I ask you to say a word again.The winds have passed two chapters.","もう一つ言ってください、風に悪魔が2つの章を渡った。"],"한 잔 더, 입니까. 그럼 저도 배운 보람이 있군요.":
["I have a drink, and I have a reward.","もう一杯、それで、私も学んだ報酬がある。"],"……고모님. 실례했습니다. 먼저 새해 인사를 드렸어야 했는데요.":
["Sorry, I had to say goodbye to you first.","すみません、おめでとうございます、新年を迎えました。"],"값은 확실히 받았으니, 나와 계약할지는 네가 정해라.":
["I have received my due. Whether you enter into a contract with me is for you to decide.","対価は確かに受け取った。私と契約するかどうかは、お前が決めろ。"],"같은 수선에 견적이 두 장 나갔군요. 하나는 회수하지요.":
["Two of the same lines are left, one is returned.","同じレベルで2枚のチケットを発行し、1枚は返品。"],"견적서를 밀어 둡니다. 상대가 먼저 가격을 부를 차례입니다.":
["The first time the counter is to call the price.","引用を押すと、相手がまず価格を呼び出す番です。"],"다음 악구로 넘어가는 숨까지 이어졌습니다. 악보를 돌려 드리지요.":
["I will go back to the next evil, and I will return the evil.","次の悪口に渡るまで呼吸を続けて、悪口を返す。"],"도련님 창 아래 심은 꽃, 다음에 피면 제일 먼저 보여 드릴게요!":
["The flowers are planted under the window, and next time they flow, I will show you first!","花の下に植えられた花、次回咲くと最初に見せます!"],"도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까?":
["What kind of family card can I keep in?","ファミリーの最初の遺産は、どの手紙に保存されるのでしょうか?"],"도련님, 공장에서 답이 왔습니다. 인수증을 한번 보시지요.":
["I have a response from the factory, look at the certificate.","工場から返信が届きましたので、お問い合わせください。"],"도련님, 짐작을 증거로 쓰시기 전에 소인을 다시 보시지요.":
["Mr. Doyle, look again before you make the guess as a proof.","サウル、お前らを証言する前に再び見て"],"두 달 연속 월말 잔액이 음수입니다. 파산을 피할 수 없습니다.":
["Two months in a row, the monthly balance is not water. failing cannot be avoided.","月末のバランスは2ヶ月連続で、破産は避けられない。"],"뒷면의 흠까지 보셨군요. 좋은 견본을 고르셨습니다.":
["You have seen the back, you have chosen a good sample.","後ろの見た目が、良いサンプルを選んだ。"],"리본부터 보셨군요. 어느 끝을 당겨야 하는지 고객도 알아볼까요?":
["You’ve seen the ribbon, let’s see which end should be drawn?","リボンから見て、どのターゲットを引き出すかを顧客に確認する?"],"마차에서 내려 쇼윈도를 구경합니다. 약속한 시각 전에 돌아갑니다.":
["Look down from the car and look at the showwind. go back before the promised view.","車から下りてショウィンドを眺め、約束された視野の前に戻る。"],"맛만 봐 줘요, 도련님! 이건 진짜 안 태웠다구요!":
["I’m really not burning! – I’m not really burning.","味わいがいい! やっぱり燃え上がらない!"],"맨 아래 배가 눌렸군. 잠깐, 바구니를 다시 내 줘.":
["I'm going to get the boat back, and let me get the basket back.","ボートを押して、もう少し箱を返して。"],"메이드 경력은 묻지 않습니다. 나이도, 어디에서 오셨는지도요.":
["I don’t ask you about your career, the age, where you came from.","メイドのキャリアは、年齢も、どこから来たのか、疑問に思わない。"],"바닥까지 다시 닦을 일을 제가 왜 만들겠습니까? 저는 다른 용건이 있습니다.":
["Why do I make the work to clean up to the floor?I have another slurry.","なぜ、地面に戻って洗濯する仕事を作るのか? 私は別のスイッチを持っています。"],"반주가 한 박자 멎었습니다. 상대의 발끝이 아직 떠 있군요.":
["The mid-sized is still on the foot.","半分の足がついて、まだ足の端がついている。"],"밤새 숨이 턱턱 막혀서……. 어머니가 옆에서 밤새도록 등을…….":
["I was breathing on my neck all night and my mother was behind me all night.","夜中息が止まって・・・お母さんは一晩中横にいて、"],"복수 같은 어리석은 짓은 그만두고 이대로 행복하게 살아가는 것은?":
["How do you stop the stupid thing like revenge and live happily?","復<unk>のような愚かなことをやめて、幸せに生きるのはどういうことか。"],"봉랍 두 덩이가 촛불 가까이에서 서로 다른 냄새를 냈다.":
["The two flags smelled each other from the close of the candle.","二つの花の ⁇ は、ろうそくの近くから互いに異なる匂いを吹き込んだ。"],"봉인 둘은 갈라 두셨습니다. 발신인 칸은 비워 두지요.":
["The two are left off, the Cannabis is left.","二人の封印を分け、送信されたカンは空っぽに。"],"분명히 저 리본이었는데. ……빈 바구니까지 숨겨 두다니.":
["It was the ribbon, and it hides up to the empty basket.","きっと、あのリボンだったのだから・・・空っぽの箱まで隠れてしまったんだよ。"],"빛을 버리고 나락으로 떨어지는 길을 선택하겠다······.":
["So you would turn your back on the light and descend into the abyss…","光に背を向け、奈落へと落ちる道を選ぶのですね……。"],"삼십 분 늦추겠습니다. 그동안만큼은 장부를 제게 주시지요.":
["I will take 30 minutes late, let you give me the same amount.","約30分遅れ、そのままお手伝いします。"],"상장에는 그런 말이 없던데. 네가 먼저 꺼낼 줄은 몰랐군.":
["I didn’t say that, you didn’t know you would get out first.","レコードに言ってないけど、最初は出るなんて知らなかった。"],"상장은 제작실에 걸어 둬. 견본을 만든 직원들도 봐야지.":
["The signage is in the manufacturing room, and the staff who make the samples must also see.","製造室に座って、サンプルを作ったスタッフも見てほしい。"],"서로 다른 두 신문의 날짜와 증언을 대조해 사건 연표를 복원합니다.":
["The two different newspapers are opposed to the dates and testimonies, restoring the incident record.","異なる2つの新聞の日付と証言に反して、事件の年記を復元します。"],"서열이 같은 두 손님을 어느 쪽도 기다리게 하지 않고 자리로 안내합니다.":
["The series guides the same two guests without leaving any side to wait.","順番は同じ2人のゲストを待つことなく、どちらも席に連れて行きます。"],"세바스찬은 마지막 성적표의 일곱 칸에 차례로 서명했다.":
["Sebastian signed the seven canyons of the last sex card.","セバスチャンは最後の七カンのセックスカードに順番に署名した。"],"손님이 먼저 다음 약속을 청하시더군요. 초대장은 제가 준비하겠습니다.":
["The guest first asked for the next promise. the invitation I will prepare.","ゲストは先に約束を求め、招待状は準備します。"],"수선 요청서를 먼저 읽고 결재가 끝난 문서를 왼편에 쌓습니다.":
["Read the repair request first and build the document that ended on the left side.","修理申請書を最初に読み、結末の文書を左側にまとめます。"],"시엘, 네 몫 리본을 하나 더 골라 놨어. 귀엽지~?":
["Ciel, I have chosen another part of your ribbon.","シエル、もう一つのリボンを選んだよか?可愛い?"],"시엘은 다음 달 초청장에 답을 쓰기 전에 우편 요금부터 확인했습니다.":
["Seal checked the mail fee before answering the invitation next month.","シエルは、来月の招待状に返信する前に郵便料金から確認しました。"],"시엘이 눈을 감기도 전에 방 안의 촛불이 일제히 꺼졌다.":
["The candle in the room was cleared before Ciel had cold eyes.","シエルが目を冷やす前に、部屋の中のろうそくは一瞬消えた。"],"식으면 다 같은 설탕이지. 사람들 먼저 불러. 초는 같이 끌 거야.":
["If you eat, all the same sugar. people first call. the second will be pulled together.","食べるとみんな同じ砂糖だよ、人々をまず呼び、秒を一緒に引き取る。"],"십일 일이군. 앞쪽에 있던 영수증과 정확히 같은 날이야.":
["10 days ago, the same day as the receipt in front.","正確に前方で、10日間の受付と同様の日。"],"아, 손으로도 크기를 알겠습니다요. 맨 윗칸부터 다시 개겠습니다요.":
["I know the size of my hand, I will get back from the top.","手の大きさもわかる! トップから再び犬を飼う。"],"아그니, 저기 봐! 영국 귀족에다 집사까지 있잖아.":
["And you see, there is an English noble.","イギリス人! イギリス人! イギリス人! イギリス人! イギリス人!"],"악보를 덮겠습니다. 방금 멈춘 마디부터 이어 주시겠습니까?":
["Will you get to the wrong word? can you just stop?","やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やがて、やが"],"악보부터 보여 줘. 네가 고른 곡이 얼마나 긴지는 알아야지.":
["Show me how hard you’ve chosen the song.","曲がどれだけ長いか、どれだけの曲がどれだけ長いかを教えてください。"],"약속을 미룬 오후입니다. 해가 기울 때까지 안락의자에서 쉽니다.":
["It is a promised afternoon. it is easy in the comforts until the sun rises.","約束の遅れた午後です。太陽が降るまで、快適なところで簡単です。"],"약속한 때보다 한 시간이나 일찍 들이닥쳤습니다. 돌려보낼까요?":
["I got a hour earlier than I promised, can you return it?","約束した時間より1時間早く、返すか?"],"어서 오십시오, 시엘 님. 왕자님께서 곧 내려오십니다.":
["Come, Ciel, the Prince is coming down soon.","来て、シエルよ、王子はすぐに下って来る。"],"에서 익히신 것을 여기 쓰셨군요. 따로 설명드릴 필요가 없겠습니다.":
["You have written something here, I don’t need to explain it.","あなたがここで知っていることを書いたので、説明する必要はありません。"],"예. 이제 다른 사람이 한 말을 그대로 옮겨도 주인이 바뀌지 않겠습니다.":
["Yes, if you move the other person as he said, the owner will not change.","もう、誰かが言ったように転換しても、主人は変わらない。"],"오늘은 찻잔이 식을 때까지 한 장도 넘기지 않으셨군요.":
["You did not take a cup until you got it today.","今日は、お茶が食べるまで一杯も飲まなかった。"],"오늘은 창문 셋째 칸까지입니다. 거리가 조금씩 늘고 있군요.":
["Today we are up to the third window, the street is growing a little bit.","今日は、窓の3番目のカンまで、少しずつ伸びている。"],"온실 문이 열려 있습니다. 흙이 마르지 않았는지 함께 살핍니다.":
["The greenhouse door is open, and the soil is not dry.","温室のドアが開いており、土が乾かされていないかどうかを調べます。"],"왼손이지? ……그 표정은 뭐야. 손은 제대로 내밀었잖아.":
["What is the face? - The left hand is right.","左手は? 顔は? 右手は? 右手は?"],"우리 표도 챙겨 둬. 다음 견본을 만들 때 꺼내 보게.":
["Take our tickets, let’s take them out when we make the next sample.","チケットも取り出して、次のサンプルを作る際に見て下さい。"],"이 품목의 누적 판매와 납품이 열여덟 개에 못 미치는군.":
["The sales and delivery of these items are not exceeding eight.","この商品の累積販売と配達は18件に達しない。"],"이미 봤겠지. 기왕 들킨 김에 이 꽃 이름이나 가르쳐 줘.":
["I'm sure you've heard this name of the flower.","やっぱり、この花の名前を教えてもらうか?"],"이쪽은 볕이 아주 잘 든다고. 그건 네 눈에도 보이잖아.":
["The sun is very good, you can see it in your eyes.","太陽が綺麗で、目にも見える。"],"잘됐네! 우린 아까 만났잖아. 그럼 새 손님은 아니지?":
["We’ve been in a new visit, not a new guest.","うーん、お前はもう来てないんだよ?"],"잠깐. 그 방이 마음에 들면 계속 써도 좋아. 허락해 주지.":
["If you like the room, I can keep it up.","部屋が好きなら、そのまま使ってあげて下さい。"],"저번에 네가 고른 차, 오늘은 내가 끓이려고 했어, 시엘.":
["You chose the car last time, and today I was going to cook, Ciel.","昨日、お前が選んだ車、今日は俺が調理しようとしたシエル。"],"접시마다 딱 한 입씩만 베어 드시고 물리신 것을 말씀하십니까?":
["Do you say that you only bite one mouth per plate and beat it?","たった1個の口を、お皿にしか食べないと言って、打ち切ったのだろうか。"],"정원에서 꺾어 왔어요. 도련님 방에 두어도 돼요?":
["Can I put it in your garden?","庭にぶつかった? 部屋に置いておくのか?"],"좋은 타이밍에 물었네. 오늘 회의는 삼십 분 늦춰 줘.":
["I asked you, let the meeting be 30 minutes late.","会議の時間は、30分遅れておきます。"],"주문서마다 받아 가신 분의 서명이 있습니다. 필요하신 날짜를 말씀해 주십시오.":
["We have the signature of each order, please tell us the date you need.","注文の日付はご注文いただいた方からの署名があり、ご要望の日付を教えてください。"],"책에 끼워 두신 표지는 그대로 두십시오. 거기까지 읽으셨습니다.":
["Keep the label in the book, you have read it.","書いた本を、そのままに置いておいて、そこまで読んだ。"],"처음부터 남겨 뒀어? 그때 내 팔이 얼마나 더 길어질 줄 알고.":
["I know how long my arm will be.","手がどれだけ長いかわかる。"],"초면인 손님 둘이 같은 은쟁반을 집었습니다. 도련님이라면요?":
["The two guests have the same silver, if you are a gentleman?","二人のゲストが同じお金のパッケージを買ったのだろうか?"],"축하해, 리지. 내 바구니의 리본까지 바꿔 묶으려고?":
["Congratulations, Ridge. to change the ribbon of my basket?","こんにちは、リジー!私の箱のリボンまで変えようとしている?"],"평가표부터 보자. 추측으로 공방을 뒤집어 놓을 수는 없지.":
["Let’s see the assessment. you can’t turn the air into guess.","見直しは、推測に逆転することはできない。"],"한 문장으로 승낙과 사양을 다 쓰셨군요. 그대로 봉하겠습니다.":
["You have written all the words and terms, I will say.","全ての文と文を一つに書いたので、それでまとめてみます。"],"홍차까지 포함해서 알아봐. 돈 두 번 내는 건 이제 지긋지긋하니까.":
["I’m tired of paying two times, and I’m tired of paying two times.","金が2回もかかるから、もう飽きている。"],"활을 현 위에 얹습니다. 네 마디를 끊지 않고 이어 봅니다.":
["I put the shark on the top of the line.I will keep your words without cutting down.","⁇ を上に置いて、あなたの言葉を断ち切ることなく続ける。"],". 도련님, 가문의 첫 장부는 어느 수첩에 보관하면 되겠습니까?":
["What kind of family card should I keep on?","では、ファミリーの最初の遺産はどの手紙に保存されるのでしょうか?"],"「3월 17일 오전 10시 버킹엄궁전에서 특별 서훈식을 엽니다.」":
["“On March 17, at 10 a.m., we will open a special ceremony in the Buckingham Palace.”","「3月17日午前10時、バッキングハム宮殿で特別な礼拝式が開かれます。"],"견본 등급, 제품 평판, 판매·납품 실적, 설계·제작 시설":
["Examples rating, product reputation, sales·delivery achievements, design·production facilities","サンプル評価、製品評判、販売・配達成果、設計・製造施設"],"견본의 치수와 납품한 치수를 한 줄에 적었습니다. 이쪽입니다.":
["The size of the sample and the dimensions delivered in one line. here.","サンプルのサイズと配達されたサイズを一行に書いた。"],"구두코는 리지, 네가 먼저 밟았잖아. 그렇게 웃지 말라고.":
["Gunduko is Ridge, you’ve been the first step. let’s not laugh so.","リジーは、先に歩いたんだよ、そんな笑いをしないで。"],"그 사람 거래, 내가 통째로 사지. 돈은 지금 여기서 쳐 주겠어.":
["I’m going to buy it all, I’m going to get the money here.","彼の取引、私は完全に買う. お金は今ここから取り出す。"],"내가 한 입 먹을 때마다 눈치도 없이 새 접시를 내온 게 누군데―!":
["Every time I eat one mouth, someone comes out a new dish without notice—!","毎回、口を食べるときに、誰かが気づかずに新しい皿を出してきた――!"],"당신은 시계 뚜껑을 닫고 도련님의 첫 일정표를 펼쳤다.":
["You close the watch and unfold the young master’s first schedule.","あなたは時計の蓋を閉じ、坊ちゃんの最初の予定表を開いた。"],"도련님 셔츠를 다려 뒀습니다요. 여기 정리해 뒀습니다요.":
["I put my shirt, I put it here.","シャツを着て、ここで整理した。"],"도련님, 다음 장부에는 시식회에 쓰실 돈부터 남겨 두시지요.":
["The next day, you will leave the money you spend on the meeting.","次回の会議でお金を残す。"],"등잔을 돌리니 긁힌 자리가 보이는군요. 다시 보시겠습니까?":
["I see the shell and the scratch, you can see it again?","ひっそりと見て、また見てますか?"],"리본을 푸는 시간도 선물을 받는 즐거움에 넣어 주시면 좋겠습니다.":
["I hope you will spend the time on the ribbon in the enjoyment of receiving gifts.","リボンに時間をかけてプレゼントを受け取る楽しみを。"],"물건 수는 맞았습니다. 이번엔 외상 장부의 마지막 줄을 보시지요.":
["This time, look at the last line of the trauma.","正解は、今回のトラウマの最後のラインを見る"],"미지급금 경고 · 이번 월말까지 잔액을 £0 이상으로 회복하세요.":
["No payment warning · Restore your balance to £0 above this month.","無償金の警告 · 今月末までにバランスを £0以上に回収してください。"],"반주가 조를 바꿉니다. 첫 음을 다시 짚고 선율을 이어 갑니다.":
["The first half of the day, I am changing the first one.","半分はジョーを変え、最初の音を再び振り回し、順位を継続します。"],"발밑을 조심하시지요. 저희 주인께서 아직 답을 못 들으셨으니.":
["Be careful, because the owner has not yet heard the answer.","気をつけて、主人はまだ答えを聞いていない。"],"방금 읽으신 답신은 통역을 거치지 않고 그대로 부쳐도 되겠습니다.":
["The answer you have just read can be translated without any way.","読んだ答えは、翻訳を通過せず、まさにそのままに解釈できる。"],"번역하면 같은 말이지만, 한 단어만 상대의 계급을 드러냅니다.":
["Translating is the same word, but only one word reveals the class of the opposite.","翻訳は同じ単語ですが、一言だけが相手のクラスを示しています。"],"비에 젖은 골목에서 시엘이 문장 없는 마차에 발을 올린다.":
["In the wet street, Ciel raises his feet on a no-word car.","雨の濡れた街で、シエルは言葉のない車に足を上げる。"],"비에 젖은 쇼윈도 너머로 완구점 주인이 손을 흔든다.":
["The moist showns even beyond the full point owner throws his hands.","雨の濡れたショウィンも、完点のオーナーが手を振る。"],"상대가 디딜 자리를 남겨 두셨습니다. 다음 곡도 이 속도로 하지요.":
["The opponent left the place of Didi.The next song will be with this speed.","ディディールの位置を残して、次の曲もこの速さでやる。"],"상대가 한 박자 늦자 보폭을 줄여 다음 회전에서 다시 맞춥니다.":
["The opponent is a bit late to reduce the boost and regains in the next round.","相手は一瞬遅く、再び回転で再び合う。"],"세바스찬이 커튼을 걷었다. 햇빛이 이불 끝까지 들어왔다.":
["Shevaschan walked the curtain, and the sunlight came to the end of the sun.","セバスチャンはカーテンを歩き、太陽の光が火の終わりまで入った。"],"손님도 점원도 열일곱을 골랐다. 세 주문을 어떻게 바로잡을까?":
["The guest and the shopman also chose twelve. how can I fix three orders?","ゲストも店員も17名を選んだが、3件の注文をどう修正するか?"],"숨을 참으셨군요. 발판을 치우고 창가에서 쉬시지요.":
["You have breathed, wash your feet and rest in the window.","息を引いて、足板を洗って窓から休む。"],"시엘 님, 타운하우스에 편히 돌아오십시오. 기다리는 사람이 둘이나 있습니다.":
["Mr. Seal, come back to the townhouse with two people waiting.","シエルさん、町屋へ帰ってきて、待っている人が2人いる。"],"시엘 님께 올리던 찻잔을 가져왔습니다. 이쪽에 놓겠습니다.":
["I have brought the cup to Seth, and I will put it here.","シエルに持って来たカップを、ここに置いておきます。"],"시엘, 저 금색 달걀 보이지? 오늘은 나도 봐주지 않을 거야!":
["Seal, you see that golden egg? today I will not take care of it!","シエル、あの黄金の卵を見る? 今日も見るつもりはない!"],"시엘은 두 사람이 고개를 맞댄 사이 세바스찬에게 외투를 내밀었다.":
["Ciel sparked the two men against Sebastian.","シエルは二人の間で、首を打つセバスチャンに、外戦を引き出した。"],"어느 대목에서 의심이 드셨는지 한 줄만 짚어 주시겠습니까?":
["Can you tell me what question you are doubting?","どちらの疑いがあるのか、お伝えしますか?"],"어떻습니까? 첫 일자리치고는 꽤 괜찮은 조건이지요.":
["The first job is a pretty good condition.","最初の仕事はかなり良い条件です。"],"연주에서는 아직 네게 배울 것이 있군. 돌아가면 연습을 좀 해야겠어.":
["I have something to learn from you, and when you go back, you will have to practice.","演奏で学ぶべきことはあるが、帰ってきて練習する必要がある。"],"예. 삼십 분 뒤에 깨워 드리지요. 다시 부르실 때까지 여기 있겠습니다.":
["I will wake you up in 30 minutes, and I will be here until you call me again.","もう30分後、起きて、また呼び出すまでここにいる。"],"오늘은 내가 말할게. ……네가 지어 준 우리 자리를 잊지 않을 거야.":
["Today I will say, you will not forget the place you built.","今日、私は言います...あなたが建てた私たちの場所を忘れないでしょう。"],"오늘은 세바스찬 말고, 제가 한 잔을 더 올려도 되겠습니까?":
["Can I get a drink more today?","今日は、セバシュンじゃなくて、もう一杯も飲めますか?"],"오늘은 여기 좀 더 있다 가지 그래? 말하지 않아도 네 마음쯤은 다 안다구.":
["I have a little more here today. - I know everything about you.","今日は、もう少しお話しするの? 心から知ってるの?"],"오늘은 제가 먼저 돌아가도 되겠군요. 말이 도련님 손만 기다리고 있습니다.":
["I can come back today, I am waiting for your hand.","今日は、先に戻ってくるので、手がついてくる。"],"오늘은 찻잔이 하나 남았네. 손님이 올 때까지 치우지 말까.":
["We have a cup left until the guest comes.","今日はお酒を飲んで、ゲストが来るまでお酒を飲まないでください。"],"오븐은 제가 볼 테니 좀 물러나 계십쇼! 언제 터질지 몰라요!":
["I’m going to see the oven, I’m going to go back!I don’t know when it will explode!","オーブンは見て、少し後退する!いつ爆発するかわからない!"],"오호, 뚜껑 있는 그릇 좋네! 주방 날릴 일도 없겠는데요.":
["Oh, good, the cover is fine! I can't fly the kitchen.","キッチンがいい! キッチンがいい! キッチンがいい!"],"온실까지 걸으셨군요. 돌아오시는 동안 보폭이 한결 고르셨습니다.":
["You walked to the greenhouse. you chose a lot of burning while returning.","温室まで歩いて、帰ってくる間にボクシングを決めた。"],"완구점 주인이 아이들이 가장 오래 서 있던 진열대를 가리켜 줍니다.":
["The master point refers to the children's longest standing ground.","主人公は、子供たちが最も長く立っている熱帯を指す。"],"왼쪽 종이는 왜 책상 아래 바닥까지 뱀처럼 기어 내려와 있지?":
["Why is the left paper like a serpent down to the floor below the table?","なぜ左の紙は、テーブルの下に蛇のように地面に下がるのか?"],"응. 네 바구니도 귀엽게 꾸며 주고 싶어♥ 상장은 내 것이지만!":
["I want to make your basket beautiful, but the sign is mine!","やっぱり、お尻のカラスがかわいいけど、俺のカラスだよ!"],"이 구절은 혼자 푸셨군요. 어디서 실마리를 잡으셨습니까?":
["You have been put on your own, where did you get the bullet?","ひとりで、どこから、このスレを手に入れたのか?"],"이 안경은 제 보물입니다요. 도련님이 처음으로 주신 선물입니다요.":
["This glasses are my treasure, the gift I gave you for the first time.","メガネは私の宝物です、あなたが初めて与えた贈り物です。"],"이스트엔드 전당포에서 정보상에게 금화 한 닢을 내미는 시엘.":
["The East End is a gold-growing silver for the information.","東端の前線で情報上に金貨を発射するシーエル。"],"일하지 않는 녀석은 내 집에 놔두지 않는다는 게 내 원칙이야.":
["My principle is that the person who doesn’t work will not be left in my house.","仕事をしない人は、家に残さないという原則です。"],"잔은 충분합니다. 이제 어느 쪽 손님께 먼저 말을 거시겠습니까?":
["The cup is enough. now to which guest will you talk first?","飲み物は、どちらのゲストに先に話すのか?"],"잔을 들어 건배하고, 맞은편 손님에게 차례로 인사를 건넵니다.":
["Take the cup and greet the guest on the other side.","酒を飲んで、向こう側のゲストに挨拶する。"],"장식은 나중으로. 고객이 혼자서도 상자를 열 수 있는지부터 볼래.":
["The decoration is later. see if the customer can open the box alone.","後で装飾するので、お客様がボックスを自分で開けることができるかどうかを確認します。"],"전장에선 숯이 될 때까지 구우라는 명령을 받았을지도 모르지.":
["You may have been ordered to go up until the warfare is made.","戦場で、石が焼くまで焼くように命じられたのかもしれない。"],"제가 아직 당신이 어떤 분인지는 다 알지 못합니다만…… 도련님을 잘 부탁드립니다.":
["I cannot yet say that I know you well… but I entrust the young master to your care.","あなたがどのような方か、まだよく存じませんが……坊ちゃんをよろしくお願いいたします。"],"제가 처음으로 혼자 키운 꽃이에요. 이 한 송이는 도련님 거예요!":
["I’m the first time I’ve grown a single flower, this is a song!","初めての花を育てたのは、この一本の花が、あなたにこだわる!"],"종목 능력치에 그날의 컨디션·의욕·스트레스가 반영됩니다.":
["The ability to do so reflects the conditional desire and stress of that day.","天気のストレスがその日の状態・欲望・ストレスを反映する。"],"주문이 열두 개였다는 건 알아. 그런데 이 식탁에 앉을 사람은 몇이지?":
["I know that there were twelve orders, but how many people would sit on this table?","何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、何人か、"],"지금은 그 자리가 두 번째로 따뜻해. ⋯라고 오스카가 말했어.":
["The second place is now the heater, Oscar said.","もう2度目は暖かいので、オスカは言った。"],"지난번에 같이 보신 그 봉오리예요! 오늘 아침에 활짝 벌어졌어요!":
["I was the one who was in the morning! this morning it was a big deal!","こっちの朝、見たことある!今朝は大盛り上がった!"],"직선과 회전을 섞은 코스를 돌며 마지막 구간까지 호흡을 유지합니다.":
["Turn the course mixed with the straight line and rotation, keeping your breath until the last range.","直線と回転を混ぜたコースを回し、最後の段階まで呼吸を維持します。"],"차 한 잔에서 침대 두 개까지 가는 데 숨도 한 번 안 쉬는군.":
["You can't breathe from a cup of tea to two beds.","飲み物から寝るまで、一杯の水を飲むと息が止まらない。"],"찻잔을 내려놓고 벽난로의 장작이 타는 소리를 듣습니다.":
["I put the cup down and hear the sound of the bark's crossing.","グラスを下ろして、井戸の鳴き声を聞く。"],"창문을 조금 열어 줘. 오늘 아침엔 빗소리밖에 못 들었거든.":
["Open the window a little, I heard no rain tonight.","窓を開けて、今朝は雨の音しか聞こえなかった。"],"책 보면서 한 손으로 마시라구요. 평범한 수프니까 걱정 말고!":
["Take a drink with one hand, not worry!","手で飲んでみて、普通のスープだよ!心配しないで!"],"첫 손님의 마차가 도착했습니다. 도련님께서 문 앞에서 맞으시겠습니까?":
["The first guest’s car arrived.Do you want to get in front of the door?","ゲストの車が到着しました? ドアの前にドライバーが直面するでしょうか?"],"체조실을 한 번 왕복하셨습니다. 다음엔 숨을 더 길게 내쉬십시오.":
["You have a time in the gym, and then take a long breath.","体調を回すと、次回は息を長くする。"],"축하한다, 시엘. 점수 차이가 크지는 않았지만 오늘은 네가 앞섰어.":
["Congratulations, Ciel. the score difference was not big but today you were ahead.","こんにちは、シエル、ポイントの違いは大きいわけではありませんが、今日は前進しました。"],"키가 작은 사내였소. 왼손 엄지가 없었고……. 난 그거밖에 몰라!":
["He was a little boy, no left hand and I know it.","左手が小さかった、左手が無い・・・私はそれだけ知らない!"],"파운드와 실링이 한 칸에 들어갔습니다. 선을 다시 긋지요.":
["Pounds and silings went into one cane. to push the line again.","ポンドとシリングが1カンに入り、ラインを再び押す。"],"팬텀사가 조금 앞섰군. 휘트컴 상회도 준비를 잘해 왔어.":
["The fancy is a bit ahead.The Whitcom match is well prepared.","ファンタジーは少し先に進んでおり、ウィットコムの試合も準備が整った。"],"팬텀사의 견본과 거래 기록을 함께 놓고 검토하실 수 있게 준비하겠습니다.":
["We will be prepared to put the sample and transaction records together and review.","ファンタムのサンプルと取引記録を組み合わせて、見直す準備ができています。"],"필요한 수량을 장부에 표시해 둬. 다음에는 기록까지 갖춰서 오겠어.":
["Make the required amount in the box, and then I will get up to record.","必要な数を記録に記載し、次に記録まで付けておきます。"],"하순 일정도 도련님께서 정하십니다. ‘하순’을 열어 주십시오.":
["Please open the “Supply” button.","手順を設定して下さい「オープン」"],"……차 한 잔에서 침대 두 개까지 가는 데 숨도 한 번 안 쉬는군.":
["You can't breathe from a glass to two beds.","車の1杯からベッド2つまで、息を引かない。"],"…그 다음에― 돌아갈 곳이 없으면 여기로 와. 일손이 하나 필요하거든.":
["And then, if there is no place to go back, come here, because you need one hand.","帰る場所が無いので、ここに来て、一つの手が必要です。"],"같은 잎입니다. 오늘은 도련님께서 편지를 펴시기 전에 따라 드렸거든요.":
["I'm like the same sheet, because today you followed it before you opened the letter.","同じ葉です!今日、あなたが手紙を開く前に、ドーシュは私に従ってくれました。"],"계단 내려오시는 소리가 들리시지요? 차를 한 잔 더 준비하겠습니다.":
["Do you hear the sound of coming down the stairs? I will prepare another drink of the car.","階段を下りる音が聞こえる? もう一杯の車を用意する。"],"고마워, 시엘. 귀~여운 연주였어. 한 번 더 들려줄래?":
["Thank you, Syeel. – It was a nice play. can you hear me again?","ありがとう、シエル!耳～かわいい演奏でした!もう一度聞くことができますか?"],"고마워. 네가 준비한 차도 좋았어. 한 잔 더 마셔도 될까?":
["Thank you, I’ve got the car ready. can you drink another?","車が好きだったので、もう一杯飲めますか?"],"고맙다. 네 축사도 좋았어. 내가 이겼다고 빈말을 하는 건 아니다.":
["Thank you, I’m not saying that I won.","ありがとう!お祭りも好きだし、勝ったとは言わない。"],"고삐를 늦출 때를 잡으셨군요. 이번에는 제가 옆에서 걷겠습니다.":
["You’ve got the time to slow down.This time I’ll walk next to you.","遅刻したので、今回はそばに歩きます。"],"그럼 셋 하면 같이 들어 올리자. 하나, 둘…… 시엘, 벌써 봤지?":
["So let’s get three together, one, two... Seal, you’ve already seen?","もう3つ、もう1つ、もう2つ・・・シエル、見たことある?"],"그럼 우리는 모자걸이에 있어도 돼? ⋯라고 오스카가 말했어.":
["So, can we be in the hat? — Oscar said.","帽子にいるのか?とオスカは言った。"],"그쪽 판에서도 내 말을 두고 있었네. 이 수를 세 번이나 연습한 거야?":
["I have been talking about this in the edition, you’ve practiced this number three times?","僕の話も、この3回練習したのだろうか?"],"꼭 둬야 해? 지금까지 주방은 너 혼자서도 잘 꾸려 왔잖아.":
["You have finished the kitchen alone.","料理は、今まで自分で作ったものだ。"],"납품가는 같고 도착일이 다릅니다. 어느 조건부터 물으시겠습니까?":
["The delivery price is the same and the arrival date is different. from what conditions do you ask?","配達料は同じで到着日が異なります.どんな条件からご質問いただけますか?"],"네 연주도 잘 들었어. 다음에도 이렇게 겨룰 수 있다면 나쁘지 않겠군.":
["I’ve heard your play well, and it’s not bad if you can do that again.","うまく演奏するけど、次回もそうやってやるなら悪くない。"],"닦지 마. 어차피 저 탁자도 곧 들고 갈 텐데, 뭐.":
["Don’t clean it, I’ll get the table soon.","やっぱり、あっという間にテーブルも取り出せばいいんだよなぁ。"],"도련님, 차를 드시기 전에 이 영수증부터 장부에 옮기시지요.":
["Please take this car before you get to the car.","ドライバー、車を食べる前に、この手紙から入荷を送ってください。"],"라틴어 편지 한 줄을 소리 내어 읽고, 강세를 고쳐 다시 읽습니다.":
["Read a line of Latin letters, and re-read the strength.","ラテン語の手紙を一行読み、強度を修正して再読する。"],"마룻결을 기준으로 두 발을 다시 놓으십시오. 제가 먼저 체중을 옮기겠습니다.":
["Put two feet back on the basis of the mouth, I will move weight first.","足を2本ずつ置いて、まず体重を移動します。"],"목제 견본의 바퀴를 굴려 보고 도면의 축 길이를 고칩니다.":
["Turn the wheels of the wood sample and fix the axis length of the drawing.","木製サンプルの輪を回して、絵の軸の長さを修正します。"],"바퀴 달린 말 열 개를 세운 집사가 동전 아홉 닢을 내려놓았다.":
["The housewife, who built ten wheeled horses, drove nine coins down.","車輪を乗せた馬の10匹を建てた家主が、9枚のコインを下げた。"],"발끝을 모으고 손을 가슴에 얹습니다. 이번 인사는 정확히 세 박자입니다.":
["Gather the foot ends and put your hands on your chest. This greeting is exactly three stickers.","足の端を集め、手を胸に置き、この挨拶は正確に3つのボタンです。"],"백작을 섬기는 집사로서는 하나같이 수고스러울 것 같은 요구들이다.":
["Quite a list of duties for an earl’s butler.","伯爵家の執事としては、どれも骨の折れそうなご注文です。"],"빈 가게에서 접시 값을 두고 말다툼하는 시엘과 세바스찬.":
["Ciel and Sebastian discussing the price of the dishes in a vacant store.","空っぽの店で皿の値段について議論するシーエルとセバスチャン。"],"사과와 배 사이에 짚을 좀 깔아. 이 정도면 장터까지 가겠어.":
["I'm going to get a little bit off the boat and I'm going to get to the boat.","船と道を交わして、その時点で船に渡る。"],"상장을 받고도 앙코르가 필요해? ……좋아. 곡은 내가 고를게.":
["Do you need an anchor to get the label? ......Go. I'll choose the song.","安倍首相が選ばれた?歌を歌う"],"새 물량을 보내기 전에 어제 내린 상자부터 찾자. 어디로 가야 할까?":
["Let’s find the box that I had taken yesterday before sending a new quantity. where should I go?","新しい箱を送る前に、昨日下げた箱から探してみましょう。"],"생울타리 사이로 달걀을 담을 빈 바구니가 하나씩 건네집니다.":
["A vacant basket to put eggs between the bulbs passes one by one.","卵を入れるときの空っぽの箱が1個ずつ流れています。"],"세바스찬은 시엘이 움켜쥔 천을 펴 주려다 그대로 두었다.":
["Shevaschan turned Syeel and put him up to the mountain.","セバスチャンはシエルが動き、天を伸ばすようにした。"],"세바스찬이 빈 의자 둘을 놓고 은쟁반 하나를 그 사이에 밀었다.":
["Sebastian put two empty chairs and pushed one silver ball between them.","セバスチャンは2つの空っぽの椅子を置き、銀の板を1つに押した。"],"소마가 열쇠를 받자마자 아그니와 손님 명부를 펼쳤다.":
["Soon, after Soma received the keys, Agni and guest lists were opened.","ソマが鍵を手に入れた瞬間、アグニーとゲストリストを開いた。"],"소마와 아그니가 보수를 받고 런던 타운하우스의 관리를 맡았다.":
["Soma and Agni were paid for and managed the London Townhouse.","ソマとアグニーは、ロンドンタウンハウスの管理を担当し、補助を受けた。"],"시엘은 말을 집는 대신 접시를 저택 식구 수만큼 꺼내 놓았다.":
["Seal put the dish out as much as the house's food.","シエルは、馬の家にいる代わりに、皿を家用食材ほど取り出した。"],"식탁 양끝에서 끊긴 대화를 손님 둘의 공통 관심사로 이어 줍니다.":
["The interrupted conversation at the end of the table leads to the common interest of both guests.","テーブルの両端から断った会話は、ゲスト2人の共通の関心をもたらします。"],"실 색깔은 저도 금방 알아봅니다요. 바느질 상자를 가져올게요!":
["I will find the color, I will bring the box!","色がわかるので、箱を連れて行きます!"],"실례하겠습니다, 도련님. 아침에 찾아온 ‘올빼미’를 데려왔습니다.":
["Sorry, I’ve got the “Smoke” that I came in this morning.","すみません、朝から来た「おばあちゃん」を"],"심사 점수가 높은 쪽이 우승합니다. 동점이면 양측이 함께 우승합니다.":
["The high score wins the side, and if the point is high, both sides win together.","審査ポイントの高い側が勝ち、点があれば両側が共に勝ちます。"],"악보는 그대로 둬. 방금 네가 바꾼 끝음, 이번엔 내가 받아 볼게.":
["The bad thing is that you have just changed the end, this time I will accept it.","悪魔をあきらめて、あなたがたは変わったばかりで、今度はわたしが受け入れる。"],"안개 낀 템스강 하역장에서 운송장을 확인하는 시엘과 세바스찬.":
["Ciel and Sevashan check the transportation station at the cloudy Thames River subway.","霧のテムス川下駅で運送場を確認するシーエルとセバスチャン。"],"애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.":
["I did not see him when I was cooking.","最初は料理のスキルを見たわけではない。"],"어제 쓴 출납장을 가져와. 돈을 돌려줬으면 받은 사람도 있을 테니까.":
["Take the bill yesterday, and someone will get you back.","返金した方、お金を返す人がいるから"],"오늘은 돌아가며 보실 필요 없어요. 제 쪽에서 제가 바로 읽어 드릴게요!":
["I don’t need to go back today, I’ll read it right away!","今日は、帰って来る必要はない! 俺の側から直ぐに読むつもりだ!"],"오른손의 장갑을 벗는 동안에도 손님을 기다리게 하지 않으셨습니다.":
["He did not wait for the guest even while he was leaving his right hand gloves.","右手の手袋を脱ぐ間に、ゲストを待つことはなかった。"],"외상 장부와 납품서를 대조해 중복 청구된 한 줄을 찾아냅니다.":
["Traumatic signals and delivery documents to find a line of rebounded charged.","トラウマの手紙と配達書類に対抗して、複製請求された一行を見つける。"],"우리에게 맡겨질 주문부터 준비해. 다른 상회의 몫까지 셀 필요는 없어.":
["Get ready from the order to us. we don't need to count up to other council parts.","注文を準備し、他の会議の割合まで数える必要はありません。"],"우선 이분들부터 시경에 인계하지요. 단추는 제가 달아 드리겠습니다.":
["I’m going to get them out of the eye, but I’m going to get them out.","まずは、ボタンを押して、ボタンを押す。"],"원문의 농담까지 살리셨군요. 제가 적어 둔 풀이는 접어 두지요.":
["You have been laughing at the original. I'm putting the grapes I wrote.","原作のジョークまで、私が書いた草を残して。"],"원본에는 비어 있던 칸이군. 물건을 받아 간 놈이 생각났어?":
["The original is empty. you remember the one who got the stuff?","オリジナルに空っぽのカン、物件を手に入れた人は覚えていますか?"],"원장의 합계와 금고의 잔돈이 맞습니다. 이대로 서명하시겠습니까?":
["The total of the boss's stock and the deposit are right.Do you sign this?","財布の総額と保管金は正しい?こんなに署名するのか?"],"이거 어제 두던 판이잖아. 내 나이트가 거기가 아니었을 텐데.":
["This was the edition I had posted yesterday. my night would not be there.","夜は、昨日、私の夜は、そこにはなかった。"],"잠깐, 그 견본은 내가 놓겠어. 받침대가 조금 흔들리는군.":
["I’ll take it a bit, the shirt is slightly shaking.","ちょっと、そのサンプルを置いておきます! ベッドが少し揺れる。"],"젠장, 은쟁반이 안 오네! 화력 올려서 새로 끓일까요?":
["Do you want to get a new food? - I will get a new food.","こんにちは!新作を食べて、火をつけようか?"],"진열창 앞에 멈춰 견본의 마감과 납기표를 대조합니다.":
["Stop in front of the hot window and counter the end of the sample and the shipping card.","熱窓の前で止まり、サンプルの終結と配信テーブルに対立します。"],"차 이름을 물어봤어?! 방금 내 머리 옆을 스쳐 간 게 뭐냐고!":
["What is the name of my car? - I just asked what was it right next to my head!","車の名前を聞いたのか? 頭のそばに何が突っ込んだのか!"],"창가에 닿자 숨이 찹니다. 세바스찬이 다음 발판에서 기다립니다.":
["He breathes when he touches the window.Sevashan is waiting for the next footboard.","窓に触れて息を引くセバスチャンは次の足板で待っている。"],"책갈피가 붙어 있네. 집사 군이 부르면 거기까지만 읽으면 되겠다.":
["The book is on the side.The family will call you until you read it.","書籍が詰まっているので、軍隊に電話したら読めます。"],"첫 박자를 잡으셨군요. 이제 그 박자를 간직한 채 셋째 마디부터.":
["You have taken the first box, now keep the third box.","最初のボックスを捕まえ、今はそのボックスを3番目の言葉から守ってください。"],"청구서는 저택 앞으로 돌려. ……꽃은 왜 가져가? 그건 거기에 둬.":
["The bills go back to the house. ...Why do you take the flowers?","花を持ち帰る? 花を持ち帰る? 花を持ち帰る? 花を持ち帰る?"],"크하하! 오늘은 안 태웠어요! 멀쩡한 끝 조각 드셔 보실래요?":
["I don’t have a lot of fire today. – Do you want to get a bit of it?","こんにちは!今日は、やっぱり大火が止まらないの?"],"팬텀사가 완구를 밤도둑처럼 야반에 하역하라고 한 적이 있던가?":
["Did the fanatics ever ask him to go down like a night-drunk?","ファンタムサは、夜の泥棒のように、真ん中のカエルを下ろすように言ったことがありますか?"],"표를 보셔도 됩니다. 대신 이번 문장은 도련님 자신의 말로 읽으시지요.":
["You can see the letter, instead you can read this phrase by your own words.","自分の言葉で読むか、その代わりにこの言葉を自分自身で読む。"],"한 잔 더 올리지요. 이번엔 설탕을 넣기 전에 향부터 맡아 보십시오.":
["Take a drink more, this time before you put the sugar in.","もう1杯を上げて、今回は砂糖を入れる前に香りから取り上げてください。"],"허나 이 기록의 뒷장은 왕실의 열람 허가가 있어야 이어 보실 수 있습니다.":
["However, the back of this record must have a royal house's heating permit.","ところが、この記録の裏側には王室の熱門許可があるはずです。"],"'어려운 일'이라 아무한테나 맡길 수 없는 일이지. 할 수 있겠어?":
["It’s hard to do, it’s hard to do, can you do?","誰にも渡すことのできない「難しいこと」だろ?"],"……그쪽 판에서도 내 말을 두고 있었네. 이 수를 세 번이나 연습한 거야?":
["I’ve been talking about this in the edition, have you practiced this number three times?","僕の言葉を、この3回練習したのだろうか?"],"갈 곳이 없으면 오랬지? 아직 우리 자리가 있어? ⋯라고 에밀리가 말했어.":
["Would you have any place to go? - Amelia said.","どこに行かなくて来る?まだ席がある? エミリーは言った。"],"그 구두 소리는 다른 사람하고 헷갈리지 않아. 오늘은 한 번도 못 들었어.":
["I don’t get confused with anyone else, I never heard it today.","口音は他人の声と混乱しない、今日は一度も聞いたことがない。"],"그건 진열하지 마. 팔아야 될 물건이라면 애초에 거기 두지 않았지.":
["Don’t worry, if it was something to sell, I didn’t put it there at first.","売るものだったら、最初はそこに置いておくことなく。"],"그게 마음에 들어서 어제부터 여기 누워 있었지. ⋯라고 에밀리가 말했어.":
["I liked it and I was here since yesterday, said Emily.","好きだったので、昨日からここに寝ていた」とエミリーは言った。"],"그럼 근무표에 올리겠습니다. 그런데 도련님, 장갑은 되찾으셨습니까?":
["I'm going to get it back, but you've got the gloves?","手袋を返して、手袋を返してますか?"],"그럼 장부에는 새 풋맨의 동행을 위한 침구 한 벌로 적어 두지요.":
["Then, the boat is written as a bed for the accompaniment of the new footballman.","すると、新足の伴侶のためにベッドベッドを書く。"],"그럼 저희도 같은 조건으로 보시지요. 오늘 납품할 상자를 가져왔습니다.":
["So we look at the same condition. today we have a box to deliver.","こちらもご覧ください!今日も送り込む箱を手に入れた。"],"그렇다고 날 죽이러 온 녀석한테 메이드 앞치마를 두르겠다는 거야?":
["Do you want to get a MID to the man who is coming to kill me?","俺を殺そうとする男にメイド・マッチマを打つのか?"],"나는 이 집에 대해 모르는 게 너무 많아. 내가 배우기도 전에 선대가 돌아가셨으니까.":
["There’s too much I don’t know about this house. My father died before he could teach me.","僕はこの家のことを知らなすぎる。教わる前に先代が亡くなったからな。"],"날짜별로 정리하셨군요. 세바스찬, 우리 장부도 펴 둬.":
["You have finished the date.Sebastian, let us open our headline too.","スイートをやめて、セバシュン、私たちもオープンしてください。"],"내 손가락도 안 들어가잖아. 모서리는 용케도 저만큼만 뜯었군.":
["I didn’t get my finger, but the corner was just as hard as I was.","指も入ってないし、角のカラスも私と同じくらいぶっちゃった。"],"네가 저번에 고른 차를 사 뒀어! 이번엔 내가 제대로 끓여 볼 거야!":
["You bought the car you chose last time! this time I will cook it properly!","車を買った!今度は調理する!"],"단순한 과로가 아닙니다. 그 전의 일을 아는 분께 급히 확인해 주십시오.":
["It’s not a simple overwhelming. please check out to someone who knows what was done before.","単純な過剰ではないので、先の事を知っている人に早く確認してください。"],"도련님 창 밑에 심은 게 오늘 아침에 폈어요. 한 송이 가져왔어요.":
["I was put down the window this morning, and I brought a song.","朝、窓の下に植え付けられたもの、一曲も持って来ました。"],"리넨은 이쪽입니다요, 도련님. 잠깐만요, 안경부터 바로 쓰겠습니다요!":
["I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'm here, I'","ライトアップ! もうすぐ、メガネを着て行きます!"],"리지, 마지막 음은 조금 늦춰. 종이 우리 대신 끝을 맺어 줄 거야.":
["Ridge, the last sound is a little late. paper will end in our place.","リジー、最後の音は少し遅れ、紙が私たち代わりに終わる。"],"마룻바닥의 무늬를 따라 세 걸음, 반 바퀴 돌아 제자리로 옵니다.":
["Three steps along the mouth floor, half round and come to the seat.","マルトベッドの ⁇ を沿って3歩、半輪回り、座席に到着。"],"맛을 보고 싫다는 손님이 있었어? 방금 저 사람은 한 알도 못 먹었는데.":
["There was a guest who didn’t like to taste? he just did not eat one egg.","味わいが嫌いだったのか? 食べたばかりの人がいなかった。"],"맡겨 두신 장부의 사본을 마쳤습니다. 맨 마지막 줄은 제 글씨입니다.":
["I have finished my copy of the book.The last line is my letter.","最後に書いた本のコピーを終えました。"],"뭐라고? 세바스찬, 저 녀석은 오늘 아침에 나를 쏘러 왔어!":
["Shevchen, he came to shoot me this morning!","シェバシュン、今朝、彼が私を撃って来た!"],"볕이 드는 쪽하고 그늘진 쪽 중에서 내가 고를 수 있게 해 뒀어.":
["From the sunshine and shadow side I can choose.","太陽の向こうと影の向こうから、私は選択できるようになりました。"],"빈 자루 무게는 빼고 달아. 그래야 마지막 집까지 제 몫이 돌아가.":
["I have the empty bag weight and then I have my share back to my last house.","空っぽの袋を除いて、最後の家まで私の部分を逃げる。"],"세바스찬. 그런데 하룻밤 묵는 데 왜 셋을 전부 데려온 거지?":
["Why did you take all three of them to stay one night?","なんで、三人で一晩中滞在したの?"],"세바스찬이 폰을 밀자 시엘은 기다렸다는 듯 설탕 비숍을 집었다.":
["When Sebastian sparked the phone, Ciel took a sugar shop as if he was waiting.","セバスチャンが電話をかぶって、シーエルは待っていたように砂糖ビショップを取った。"],"손님이 잔을 내려놓으신 뒤에 의자를 미셔야지요, 도련님.":
["The guest must put the chair down after he has dropped the cup.","客がカップを下ろした後、椅子を洗う。"],"시엘, 다음에 올 땐 편지부터 보내 줘. 내가 정원까지 마중 나갈게!":
["Seal, send me a letter when I come next, I’ll go out to the garden!","シエル、次回来たら手紙から送ってくれ!私は庭にパラダイスに行きます!"],"시엘의 구두가 같은 자리를 두 번 밟습니다. 반주를 한 박 늦춥니다.":
["Ciel's mouth goes on the same place twice, half a night late.","シエルの口は同じ場所に2回歩き、半夜遅れる。"],"시엘이 몸을 일으키기도 전에 은제 찻주전자가 그의 앞을 가로막았다.":
["Before Seal was lifted up, the silver-cake-wheel had stopped him.","シエルが体を起きる前に、銀のカウターは彼の前を止めた。"],"시엘이 책상 한쪽에 쌓아 둔 서신 뭉치를 타나카 앞으로 밀었다.":
["Seal pushed the letter group on one side of the table to Tanaca.","シエルはテーブルの片側に積み重ねられた手紙集をタナカに向けて押した。"],"시제품 하나가 사장 책상에 놓여 있습니다. 포장과 내용물을 따로 검사합니다.":
["One of the pre-products is placed on the head desk. check packaging and content separately.","プロデューサーは、テーブルに置かれています パッケージとコンテンツを別々にチェックします。"],"아닙니다. 저에게는 거짓말을 하지 말라고 하셨으면서······.":
["Nothing, my lord. I was only thinking that you forbade me to lie…","いいえ。私には嘘をつくなとお命じになったのに……。"],"아침에 제 이름을 불러 주실 것 같아서, 오늘도 창문 아래서 한참 기다렸네요.":
["I think I’ll call you my name in the morning, and I’ve been waiting for you under the window today.","朝、名前を呼んで、今日は窓の下で待っていた。"],"예. 이번에는 견본의 점수와 별개로 인증 요건을 채우셔야 합니다.":
["Yes, this time you will have to fill out the certification requirements separately with the sample score.","今回は、サンプルのポイントと別々に認証要件を満たす必要があります。"],"완구가 열 개 팔렸는데 대금은 아홉 개분입니다. 무엇을 확인하시겠습니까?":
["The price is 9 and the price is 9 and what do you see?","売り切れは9枚、売り切れは9枚、何をチェックするか?"],"왕자님께서는 오늘도 두 잔을 부탁하셨습니다. 우유는 따로 놓았습니다.":
["The Prince asked for two cups today, and the milk was put apart.","王子様は今日も2杯を頼み、牛乳を別々に置いた。"],"외교 서한의 완곡한 거절을 원문의 뉘앙스까지 살려 옮깁니다.":
["The complete rejection of the diplomatic letter moves to the original nuances.","外交書の完全な拒絶を元文のニュアンスまで生き延びる。"],"요즘은 늘 그 권부터 펼치시는군요. 오늘은 책상 위에 올려 두었습니다.":
["I always put it on the table today.","今日は、いつも、テーブルの上に置いておく。"],"이 귀퉁이의 연필 자국은 제 것입니다. 오늘이라면 말씀드릴 수 있겠군요.":
["This pencil is my own, I can tell you today.","⁇ の鉛筆は私のものだ、今日なら言えるだろう。"],"이건 잎 끝이 벌써 붉군. 어느 쪽 꽃이 먼저 피나 내기할까?":
["The leaves are red, and which flower will first flow?","花の終わりは赤いので、どちらの花が最初に咲くのでしょうか?"],"이번 다과에는 제가 접시를 낼 차례조차 짚어 드릴 일이 없었군요.":
["I didn’t even have the time to put my dish on this day.","こんなに、このお皿を食べる時も、決してない。"],"인원을 선택하거나 끌어서 원하는 방에 배치하세요. 같은 방의 업무 효과는 합산됩니다.":
["Choose or pull staff and place it in the room you want.The work effect of the same room is aggregated.","スタッフを選択または引き出して、望む部屋に配置します。同じ部屋の作業効果が合計されます。"],"장부를 등불에 비춥니다. 종이를 긁어 고친 흔적이 보입니다.":
["The scratch is shining in the lamp. you see traces of the paper scratched and fixed.","紙を振り回し、修正した痕跡が表示されます。"],"전표 날짜까지 맞습니다. 내일 들어올 한 닢도 마감할 수 있겠군요.":
["It is right until the date, and you can get a lot of time tomorrow.","入場日が正しいので、明日に入る予定です。"],"정원 길을 천천히 걷습니다. 온실 앞에서 보폭이 한결 느려집니다.":
["Walk the garden path slowly, the spread is slow before the greenhouse.","庭の道をゆっくり歩き、温室の前で広がりがゆっくり。"],"제 이름을 불러 주신 날부터 지금까지, 저, 여기서 매일 아침이 기다려졌어요!":
["From the day you called my name to this time, I was waiting here every morning!","僕の名前を呼んだ日から今まで、私はここで毎朝待っていた!"],"좋아! 아그니, 이번엔 귀띔해 주면 안 돼! 이 수는 내가 생각했어!":
["Oh, don't be cute this time! I thought it was the number!","やっぱり、あの時もかわいそうだ!この時もかわいそうだ!"],"좋아. 다음 주문에서도 이 품질을 지켜. 오늘의 점수만 자랑할 생각은 없어.":
["Well, keep this quality in the next order. I don't think I'm proud of just the score today.","次回の注文でもこの品質を守ってください.今日のポイントだけを誇りに思わない。"],"주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요.":
["It is quite usual to get rid of the owner.","主人公に仕掛けられることは、かなり慣れやすいことだ。"],"주판알을 한 줄씩 밀어 매입가를 더합니다. 마지막 줄에서 검산을 시작합니다.":
["Press the headball one-line to add the purchase price. start the review in the last line.","主板を一行ずつ押し付け、購入価格を追加します。最後の行で検査を開始します。"],"지금. ……너도 들었구나. 소마의 실내화는 뒤축부터 닳겠어.":
["You know, I’m going to see the Sophie’s shadow.","・・・お前も聞いたんだよ、ソマの内心は後ろから消えるだろう。"],"창가에 선 세바스찬 곁으로 시엘의 빈 의자와 수첩이 보인다.":
["On the window, on the side of the Seaschang line, there is a empty chair and a letter of Ciel.","窓の向こう側には、シエルの空っぽの椅子と手紙が見えます。"],"책갈피가 꽂힌 곳을 펴고, 어제 푼 문제의 다음 줄을 읽습니다.":
["Open the bookmap on which it was placed, and read the next line of the question of yesterday's pound.","書籍のカバーを開いて、昨日のペン問題の次の行を読みます。"],"책상 왼쪽 서랍입니다. 아침에 의사가 다녀간 시각을 적어 두려고요.":
["The table is on the left box. I try to write the sight of the doctor's visit in the morning.","左の箱で、朝は医師が訪れた時の視線を書く。"],"편지의 두 귀를 맞춰 접고 붉은 밀랍 위에 가문의 인장을 누릅니다.":
["Close the two ears of the letter and press the family's seal on the red rubber.","手紙の両耳を合わせて、赤いスイッチの上に家族の印を押します。"],"한 품목의 평판이 3에 이르면 거래처가 다음 달 납품을 제안합니다.":
["When one item's reputation reaches 3, the dealers offer delivery next month.","商品の評判が3に達すると、取引所は次の月の配達を提案します。"],"홍차를 한 번 더 우렸습니다. 오늘은 충분히 쉬셨습니까, 도련님?":
["I have a little bit of tea. - You have rested enough today, Doyle?","もう一度、紅茶を飲んだんだけど、今日はお休みですか?"],"=fatigueThreshold(seq.before.체력)||seq.before.의욕":
["=fatigueThreshold (seq.before. force) ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰ ♰","☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆ ☆"],"……내 손가락도 안 들어가잖아. 모서리는 용케도 저만큼만 뜯었군.":
["I don’t have any finger in, but the corner shrinked as much as me.","俺の指も入ってないし、角のゴーグルも僕と同じくらいぶっちゃった。"],"가죽은 그을렸는데 봉랍에는 먼지 한 톨 없군. 누가 새로 봉했지?":
["The skin was broken but there was no one stool of dust in the box.Who had new?","皮が薄いけど、箱には粉が一本ない?誰が新しい封筒をかけるの?"],"같은 날 심었다는 기록부터 틀렸군. 이쪽만 묵은 꽃대가 남았잖아.":
["It was wrong from the record that it was planted on the same day. only this flower remains here.","同じ日に植えられたのは間違った記録です!ここに残っている花の葉だけが残っています。"],"고맙다. 네가 준비한 차도 좋았어. 나중에 한 잔 마셔 보고 싶군.":
["Thank you, I’m very happy with the car you have prepared.I want to drink a drink later.","車が好きで、後で飲みたい。"],"골목 이름에 번지까지 여쭤봤습니다. 두 분이 같은 집을 짚으시더군요.":
["I asked the name of the street, and you both were building the same house.","二人の名前の通り、同じ家を建てた。"],"그 사람은 잠깐 놔둬. 돈은 자네가 셌으니 나는 표를 세어 볼게.":
["I’m going to get you, and you’re going to get me, I’m going to get you.","金がかかるので、チケットを買う。"],"그 정도면 차가 식기 전에 눈을 좀 붙이실 수 있겠군요. 깨워 드리겠습니다.":
["You can close your eyes before you get to the car, I will wake you up.","車が起きる前に目を閉じるので、目覚める。"],"그래. 일한 보수도 지불하지. 즉, 그 돈은 네가 일해서 번 돈이라는 거야.":
["Yes, you don’t pay the money you have worked, that means that you are the money you have earned.","仕事の報酬も払わない、つまり、そのお金はあなたが働いて得たお金だ。"],"그래도 창문은 조금 열어 둬. 오늘만은. ⋯라고 와일드가 말했어.":
["But let the window open a little, just today,” said Wild.","窓を開けて、今日はワイルドが言った。"],"그럼 그 두 줄부터 내일 읽으시지요. 같은 자리에 연필을 끼워 두겠습니다.":
["I will read the two lines tomorrow, and I will put a pen in the same place.","明日も同じ場所に鉛筆を置いておきます。"],"내일 같은 자리에 꺼내 두겠습니다. 도련님 펜도 곁에 놓아두지요.":
["I will leave you tomorrow, and you will leave the pen.","明日、同じ場所に置いておきますので、ペンもそばに置いておきます。"],"다음은 회사 장부입니다. 위쪽의 ‘팬텀 사(社)’를 열어 보시겠습니까?":
["Next is the company’s headquarters.Do you want to open the ‘Fantom Company’ above?","次は会社の本部です.上に「ファンタムサ(会社)」を開くことを望んでいますか?"],"도련님. 이번에는 제가 돌아오시라는 말씀을 드려도, 대답이 없으시군요.":
["If you say I’m coming back this time, you don’t have any answer.","こんにちは!今回も返ってくるという話ですが、答えがありません。"],"도련님께서도 차근차근 익히시면 됩니다. 아직 차를 더 드실 분이 계십니다.":
["You can also find out how to get a car, and there are still others who will have a car.","もう1台もお得な車がいるので、もう1台もお得な車がいる。"],"떨어지는 조각은 제가 받겠습니다. 도련님께서는 첫 장 귀퉁이를 눌러 주십시오.":
["I will get a piece falling.Let me try the first corner.","落とす部分は私に届きます. ドーシュ先生、最初の章の角を押してください。"],"마음에 들지 않는 선물에도 답례는 써야지. 첫 장에 아주 좋은 문안이 있어.":
["You don’t like the gift, but there’s a very good story in the first chapter.","好きなプレゼントも、最初に良いお話が書かれています。"],"맞아. 그게 우리 천막에 걸린 이름이야. ⋯라고 와일드가 말했어.":
["That’s the name we got in our tent,” said Wild.","ホールは、この名前のようだ」とウィルドは言った。"],"맞았습니다. 그럼 밑줄을 긋고, 다음 문장도 같은 식으로 읽어 보십시오.":
["So, then put the bottom line and read the next phrase in the same way.","正解です! 次に、下の文字を同じように読んでみてください。"],"먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.":
["First, I am deeply grateful for the death of my family and thank God for your health.","まず、家族の死を深く悲しみ、そしてあなたの健康に神に感謝します。"],"목제 완구는 어제 돌려주셨고, 돈은 한 푼도 못 받으셨답니다.":
["He gave me the money back yesterday, and he did not receive a single penny.","木の木を返したが、金も1セントも得られなかった。"],"반년 뒤에 쓸 종이값은 남겨 둬. 딴 데 쓸 일이 생길 테니.":
["Let the paper be paid in a half year, and there will be something else to do.","半年後には紙の値段を残して、他の場所に書くことが出来ます。"],"반으로 잘라. 그렇다고 나머지 반을 접시에 그대로 올려놓으라는 뜻은 아니고.":
["Cut it in half, that means not put the rest half on the plate.","半分に切り、残りの半分を皿に置くという意味ではありません。"],"봉랍과 필체가 서로 다른 발신인을 가리킵니다. 편지가 거친 손을 추적합니다.":
["The boxes and the folders refer to different sender, the letter traces the hard hand.","封筒とフィルツは、異なる送信者を指します 手紙は硬い手を追跡します。"],"브라우저 저장소를 사용할 수 없습니다. 이 탭을 닫으면 진행 내용이 사라집니다.":
["The browser storage is not available.When you close this tab, the progress will disappear.","ブラウザストレージは使用できません. このタブを閉じると、進歩が消えます。"],"상대가 먼저 납기를 앞당겼습니다. 그 조건을 계약서에 옮겨 두지요.":
["The contract is first to be transferred to the contract.","相手は先に引き渡しをしました.その条件を契約に移す。"],"세바스찬은 문 앞으로 나가 장갑을 벗고, 뒤늦은 손님처럼 노크했다.":
["Sebastian went out to the door, pulled his gloves and knocked like a late guest.","セバスチャンはドアの前で出て、手袋を脱ぎ、遅いゲストのようにノックした。"],"세바스찬이 접수처에서 돌려받은 참가표를 수첩에 끼워 둡니다.":
["Shevchenko will put the participation card returned from the reception.","セバスチャンは受付所から返還された参加券を手紙に置く。"],"소란이 가라앉았을 때 골목의 사내들은 하나같이 바닥에 뻗어 있었다.":
["When the storm drowned, the men of the street were one-like on the floor.","震災が沈んだとき、街の男たちはひとりひとり地面に伸びていた。"],"손님을 맞으려면 메이드 한 명은 있어야 한다고 말씀하신 분은 도련님이셨습니다.":
["He said that one Midi should be a guest to meet.","ゲストに会うにはメイドが1人いる必要があると話したのは、ドーシュだった。"],"손님이 말하는 동안 잔을 채우셨군요. 당사자는 눈치도 못 챘겠습니다.":
["The guest filled the cup while speaking, the party would not notice.","ゲストが話す間にワインを満たしたので、当事者は気づかない。"],"시엘 님, 길에서 드실 차를 챙겼습니다. 떠나시기 직전에 따라 드리겠습니다.":
["I have a car on the road, I will follow you before you leave.","シエル、車を連れて行って、出発前にすぐに追いかけてくれます。"],"시엘 도트 · 드래그하거나 방향키로 위치 조정 · Shift와 방향키로 크게 이동":
["Seal Dot · drag or position to the direction key · Shift and move bigly to the direction key","シエルドット · 引き出しまたは方向キーで位置調整 · Shift と方向キーに大きく移動"],"시엘 팬텀하이브 백작이라는 이름을 짊어진 이상, 앞으로 나아가는 수밖에 없어.":
["After the name of Count Ciel PhantomHive, we have to go ahead.","シエル・ファンタムハイブ伯爵の名前を呼ばれた後、進むしかない。"],"시엘, 마지막 달걀만 남았어! 내가 숨긴 곳이니까, 이번엔 네가 찾아야 해!":
["Seal, only the last egg is left! because I’ve hidden where this time you have to find!","シエル、最後の卵だけが残っている!私が隠した場所だから、今回はあなたを探すべきだ!"],"안에 이만큼 남겨 뒀어요. 풀면 다음 봄까지 입으실 수 있을 겁니다요.":
["You can wear it until the next spring, and you will be able to wear it until the next spring.","入れてしまったら、来年の春まで着るかも。"],"앗, 정말 자국이 났네요! 내일은 끈부터 느슨하게 보러 와야겠다.":
["I'm going to get a lot of trouble. - I'm going to get a lot of trouble tomorrow.","うーん、明日もおしゃべり! きっと、明日もおしゃべり!"],"언덕 위의 시엘과 세바스찬이 밤하늘 아래 불타는 건물을 바라본다.":
["Ciel and Sebastian on the hill look at the building burning under the night sky.","山の上のシエルとセバスチャンは夜空の下で燃える建物を見ている。"],"여기, 아버지가 돌아가신 날. 누군가 잉크를 칼로 긁어 냈지?":
["Here, the day my father died. has someone scratched the ink with a knife?","父が亡くなった日、誰かがナイフでインクを切ったのだろうか?"],"연대를 정하셨으니 틀린 날짜가 적힌 사본도 골라내시겠군요.":
["You have the right date and you will choose a copy of the wrong date.","間違った日付を書いたコピーを選ぶ"],"연착 책임을 넣으니 싼 쪽이 바뀌었습니다. 이 조건으로 서명하시지요.":
["The price has changed, and you sign this condition.","安い値段を変更して、この条件で署名します。"],"예. 팬텀하이브가의 집사로서, 성심을 다해 도련님을 모시겠습니다.":
["As a fancy housewife, I will take you with my holy heart.","ファントハイブの家主として、聖心であなたを迎え入れる。"],"오전에 들른 손님은 돌려보냈습니다. 오후에도 마차는 부르지 않을 겁니다.":
["The guests arrived in the morning and will not call the car even afternoon.","朝起きたゲストが送ってきて、午後も車は呼ばない。"],"왕자님께 무슨 말씀을 드릴지, 오늘만은 시엘 님께 여쭙고 싶었습니다.":
["What I would say to Prince, I wanted to ask Ciel today.","王子に何を言いたいのか、今日はシエルに尋ねたい。"],"원작 30권 · 올빼미에게 건넨 고용 제안 / 피니안 합류 뒤 월말 추첨":
["30th of the year, I'm going to get a job offer.","オリジナル30本 · オルツミに渡る雇用提案 / フィニアン加入後月末の優勝"],"은포크는 열두 벌입니다. 생선용 나이프는 아래쪽 서랍에 가지런히 있습니다.":
["Silverfork is twelve. the fish knife is hanged in the lower box.","銀の ⁇ は十二本です 魚のナイフは下の箱に詰め込まれています。"],"이제 얼마든지 굵어져도 되겠어요! 남은 것도 제가 얼른 이렇게 옮길게요!":
["How much I can do now!I will move the rest so soon!","何があっても、もう少しずつ動き出せます!"],"이쪽 끝을 잡아당겨 보시죠. 예, 그렇게요. 안쪽도 보시겠습니까?":
["I’m going to see it inside, and you can see it inside.","見て、ここから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て、そこから見て"],"잠시 후, 세바스찬이 포박한 침입자를 질질 끌고 저택으로 돌아왔다.":
["A while later, Sebastian pulled the invaders into a shake and returned to their home.","しばらくすると、セバスチャンは、包囲された侵略者を誘い、家に帰った。"],"재가를 청하는 서류를 다시 꾸릴 수는 있습니다. 반년 뒤에 다음 심의가 열립니다.":
["You can re-create the documents requesting a reward. after half year the next review will be opened.","返済を求める文書を再編することができる。半年後には次の審議が開かれます。"],"조커의 짐에서 이게 나왔어. 우리 식구들을 데려가라고 한 게 당신이야?":
["This came out of the Joker’s bag. - You asked us to take our foods?","ジョーカーの荷物から出たのはこれ? あなたが私たちの食器を連れて行くように言ったのはこれですか?"],"주문하신 물건을 주문하신 대로 보내 드렸습니다. 지난 전표를 보시면 아실 겁니다.":
["I have ordered the items you ordered, and you will see the previous bills.","注文した商品を送って頂きましたので、先行のチケットを見ればご存知でしょう。"],"첫 주문부터 이번 물량까지입니다. 어느 상자를 여셔도 같은 견본과 대조하실 수 있습니다.":
["From the first order to this amount. any box you open can counter the same sample.","最初の注文からこの量まで、どの箱でも同じサンプルと対立することができます。"],"축하드립니다. 손님들을 맞으실 준비를 꼼꼼히 해 두신 보람이 있군요.":
["Congratulations, you have been prepared to meet your guests.","こんにちは、お客さんを迎える準備が整った。"],"풀이의 세 번째 줄을 보십시오. 이제 제가 여백에 힌트를 남길 필요가 없겠습니다.":
["Look at the third line of the grass. I will no longer have to leave a clue on the hundred.","草の3番目のラインを見てください、今は百にヒントを残す必要はありません。"],"필체를 옮긴 두 줄을 인장 옆에 놓으십시오. 같은 해인지 보이십니까?":
["Put the two lines that move the filet next to the seal.Do you see it is the same?","フィルツを移動した2行を印の隣に置いて、同じ傷があるのを見る?"],"하늘에 크고 둥근 빛이 떠 있었다. S-012의 바로 앞에는 두 사람이 서 있었다.":
["There was a large, round light on the sky, and two people stood right in front of S-012.","天空に大きな丸い光が吹き飛ばされ、S-012の直前に2人が立っていた。"],"한 조각만 둬. 아까는 차를 마셨는데 레몬 맛밖에 기억이 안 나더군.":
["I had a drink of the tea before, but I remembered nothing but lemon.","飲んでいたので、レモンの味だけは覚えていません。"],"합계 아래의 작은 글씨도 보십시오. 마차가 늦으면 누가 비용을 냅니까?":
["See also the small text below the total: Who will pay if the car is late?","トラックが遅くなったら誰が費用を払うのか?"],"홍차를 따르는 사이, 시엘이 케이크의 모서리를 반듯하게 잘라 냈다.":
["While following the red tea, Ciel boldly cut the corner of the cake.","紅茶を追いかけて、シエルはケーキの角を大喜びに切った。"],"후식은 오렌지 젤리입니다. 그럼 잠시 다녀오겠습니다. 천천히 드십시오.":
["The afternoon is orange gel. then I will come for a moment. slowly eat.","オレンジジェリーの後食は、しばらく来て、ゆっくりと食べる。"],"……그렇다고 날 죽이러 온 녀석한테 메이드 앞치마를 두르겠다는 거야?":
["“Do you think he’s going to get me to kill me?","俺を殺そうとする人にメイド・ファミリーを打つのか?"],"……예. 팬텀하이브가의 집사로서, 성심을 다해 도련님을 모시겠습니다.":
["…Of course. As butler to the House of Phantomhive, I shall serve him with all my heart.","……ええ。ファントムハイヴ家の執事として、誠心誠意、坊ちゃんにお仕えいたします。"],"가격이 같은 견적서 두 장. 세바스찬이 달력 위에 반씩 겹쳐 놓았다.":
["The price is the same quote two chapters.Sevashan put half-over the calendar.","価格は同じ引用で2章.セバスチャンがカレンダー上に半分を割った。"],"가문을 증명하는 서류는 반송되었습니다. 답신은 딱 한 줄뿐이더군요.":
["The family documents were returned, and the answer was only one.","家族の証明書が返還され、回答は一つだけだった。"],"견본과 납품표에 같은 표시를 남기셨군요. 다음 주문 때 대조하기 좋겠습니다.":
["You have left the same sign on the sample and delivery sheet. I would like to counter it at the next order.","サンプルと配達表に同じ印を残したので、次の注文時に対処することをお勧めします。"],"그럼 넌 반대쪽에 앉아. 둘이 앉을 때도 흔들리나 보게.":
["Then you sit on the opposite side, and look at it when both are sitting.","座って、二人で座ると振り回される。"],"그렇게 꽉 묶으면 굵어질 자리가 없잖아. 자, 이쪽은 내가 잡고 있을게.":
["If you are so tight, there’s no place to get thick. now, I’ll be holding it here.","こんなに重くつながる場所が無いので、ここで私は持っている。"],"난 누가 요리하든 상관없어. 식탁에 올릴 거면 맛있는 게 좋다는 거지.":
["I don’t care who cookes, it’s good to get it on the table.","料理を食べる人は誰でもいいし、テーブルに置いておくと美味しい。"],"내 옷깃을 잡은 건 저쪽이야. 내가 영국인이면 그건 물을 필요도 없나?":
["I’m a British, if I’m a British, do you need to ask?","イギリス人だったら、その服を着てきたのだろうか?"],"내가 언제 인정해 달랬어? ……먼저 해, 에드워드. 손님들 차가 식겠어.":
["When did I admit? ... First, Edward. the guests will eat the car.","いつ、お客さんに聞いてみようか? エドワード、お客さんに車が食べる。"],"네가 불러 준 이름이 좋았어. 다음에도 스네이크라고 불러 줘. 마이 로드.":
["I'm glad you called me, and then call me Snake.","君が呼んだ名前はいいし、次にスネイクと呼ばれるよ、マイロッド。"],"네가 연습할 때는 이 폰이 한 칸 뒤에 있었지. 자, 이제 내 차례다.":
["When you were exercising, this phone was behind one cane. now it’s my time.","練習するとき、この携帯電話が1つのカンタの後ろにあったので、今は私の番だ。"],"다음은 저택 관리입니다. ‘관리 · 경영’을 여시면 저택 지도를 펼쳐 드리겠습니다.":
["Next is the housing management.When you open the “Management · Management”, we will expand your home map.","次は「管理・経営」を開くと、住宅地図を広げます。"],"단가를 양보하는 대신 반품 비용을 거래처가 부담하도록 계약서를 고칩니다.":
["Instead of delivering the single price, repaired the contract so that the transaction site will charge the return costs.","単価を渡す代わりに返品コストを取引所が負担するように契約を修正します。"],"도련님, 오늘은 제가 노크할게요! 지난번에 열쇠를 맡아 주셨잖아요!":
["I'm going to get the key today! - You've got the key last time.","こんにちは!今日は、お前が鍵を手に入れたんだよ!"],"도련님, 원문을 덮고 방금 읽으신 대목을 옮겨 보시겠습니까?":
["Do you want to cover the original and move the title you just read?","オリジナルをカバーして、読んだ本を引っ越すのか?"],"도련님께서 읽으시던 장부는 펼쳐 두겠습니다. 돌아오셔서 마저 보시지요.":
["I'll read the book you read, and come back to see.","読んだ本をまとめてみて、また見て。"],"동트기 전 들판에서 반지를 움켜쥔 시엘이 세바스찬을 올려다본다.":
["He turned his ring on the ground, and Ciel looked up at Sebastian.","東機前のフィールドから指輪を振り回して、シエルはセバスチャンを上げる。"],"두 분께서 같은 날 초대하셨는데, 어느 쪽도 거절당했다고 생각하지 않겠군요.":
["You both invited the same day, and you don’t think any one was rejected.","二人は同じ日に招待されましたが、どちらも拒否されたとは思っていません。"],"마지막 굽이를 제가 잘못 짚었군요. 도련님이 고르신 길로 돌아가겠습니다.":
["I'm wrong with the last step, I'm going to go back to the way you chose.","最後の間違った点を踏み出したので、あなたが選んだ道に戻ります。"],"마지막 네 마디가 한 호흡에 이어졌습니다. 그 부분에 책갈피를 꽂아 두지요.":
["The last four words led to one breath, and put a booklet on that part.","最後の4つの言葉は、一息を引きずり、その部分に本の毛布を置く。"],"마지막 줄에서 잉크가 번졌습니다. 시엘은 답을 외운 채 새 종이를 달라고 합니다.":
["In the last line, the ink was broken.Seoel asked for a new paper and answered.","最後の行にインクが浮かび上がり、シエルは答えを引き出し、新しい紙を求める。"],"맞았어! 반주가 다시 들리는 데까지 한 번도 안 멈췄잖아! 대단해~.":
["I never stopped until the half week was heard again!","やっぱり、半分はもう一度聞こえなくなった!すごいですね。"],"먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.」":
["First, I am deeply grateful for the death of my family and thank God for your health.”","まず、家族の死を深く悲しみ、あなたの健康を神に感謝します。"],"방금 복도를 지나간 건 우리 애들이야. 놀라지 마. ⋯라고 에밀리가 말했어.":
["The kids just passed the corridors.Do not be surprised, Emily said.","廊下を通り過ぎたばかりの子どもたちだよ、驚かないでください」とエミリーは言った。"],"삼십 분이면 충분하시겠습니까? 그럼 그 시각에 맞춰 손님을 들이겠습니다.":
["Do you have 30 minutes? then I will get the guests right in the sight.","約30分?その時点でゲストを迎える。"],"상자 밑에 상호를 찍었군. 고객이 뒤집어 봐야 회사 이름을 알겠어?":
["You have a link below the box.The customer should turn around, know the company name?","会社名を振り返って、顧客が会社名を知る?"],"성문에서 열쇠를 내라. 읽었어. 그런데 자네들은 그 열쇠를 어디서 받았지?":
["I read the key, but where did you get the key?","鍵を引っ張って、どこから鍵を手に入れたの?"],"세바스찬이 빈 장부를 덮었다. 유난히 공손하고 평온한 미소였다.":
["Sebastian covered his empty head, a very kind and quiet smile.","セバスチャンは空っぽの毛布を覆い、とても寛容で穏やかな笑顔だった。"],"시엘! 그 판은 그대로 둬! 지난번에 네가 지기 직전에 집에 갔잖아!":
["She was home just before you got home!","シエル!そのバージョンをあっという間に!先回、あなたが倒れる前に家に帰った!"],"시엘, 네가 먼저 손을 내밀던 날을 기억해. 오늘은 그 생각으로 여기까지 왔어.":
["Ciel, remember the day you first put your hand out; today I came here with that thought.","シエル、あなたが最初に手を伸ばした日を思い出し、今日この考えでここまで来た。"],"시엘은 서랍을 열었다. 구겨진 방명록 한 장이 맨 위에 얹혀 있었다.":
["Ciel opened the box, and a scrolled light record was placed on top.","シエルは箱を開け、その上に一本の ⁇ が置かれていた。"],"시엘의 책장이 한참 동안 넘어가지 않습니다. 잠든 손 곁에서 찻잔을 치웁니다.":
["Ciel's bookstore does not pass for a long time. he is drinking a cup next to his sleeping hand.","シエルの本は長く過ぎず、寝ている手のそばでカップを切る。"],"심사위원이 상대의 이름을 부릅니다. 시엘은 자리에서 일어나 먼저 박수를 보냅니다.":
["The judge calls the name of the opponent. Seal stands up from the seat and sends his first congratulations.","裁判官は相手の名前を呼び、シエルは席から立ち上がり、まず褒め言葉を送る。"],"아그니, 시엘 자리는 치우지 말아 줘. 오늘은 내가 거기 앉고 싶어.":
["Agni, don’t let the seat be shut down. I want to sit there today.","シエルは座ってないで、今日はそこに座りたい。"],"오늘 보신 견본을 내일 주문하셔도 그대로 보내 드립니다. 지난 주문서를 보시지요.":
["If you order the sample you have seen today, I will send you as soon as tomorrow.","今日のサンプルを注文した場合、明日送信します。"],"왕실에서 회신이 도착했습니다. 전령은 답도 듣지 않고 말머리부터 돌리더군요.":
["The king came to the house and he turned his head without hearing any answer.","王室から返信が到着し、司令官は答えも聞きず、頭から振り回された。"],"이 두 줄은 같은 집이야. 잘못 뺀 반 자루는 아이들이 셋인 집 몫이고.":
["The two lines are the same house; half-sets of the wrong children are three.","二つは同じ家で、間違って半分のベッドが3人の子供の家に分かれています。"],"이미 삯을 치렀습니다만. 원하신다면 남는 편지를 불쏘시개로 쓸 수는 있습니다.":
["You can write the remaining letter if you want.","すでに打ち切ったが、望むなら残りの手紙を射撃として書くことができる。"],"이번엔 끝까지 박자를 셌어. 시엘이 내 손을 놓던 데서는 잠깐 틀렸지만.":
["This time I was getting the bite to the end. but Seal put my hand a bit wrong.","最後まで、シエルが手を差し伸べたとき、間違った。"],"이상하지. 장사가 잘된 날보다 네가 뭘 고를지 맞힌 날이 더 기억에 남더라고.":
["It is strange that you remember the day when you chose what you had better than the day when the work was good.","奇妙なことですが、あなたが選んだ日より良い日を思い出した日。"],"이쪽이 견본입니다. 실제 납품분의 치수는 바로 옆에 적어 뒀습니다.":
["This is the sample. the actual size of the delivery is written right next to it.","実際の配達のサイズは、すぐそばに書かれている。"],"잉크가 다른 줄에만 표식을 남기셨군요. 원본은 제가 따로 보관하겠습니다.":
["The ink has left a sign only on the other line. the original will be kept separately.","インクは他のラインにしか印を残さないが、オリジナルは私自身で保存する。"],"잎보다 먼저 색이 변한 꽃이 눈에 띕니다. 도련님이 걸음을 멈춥니다.":
["The flowers that changed color before the leaves appear in the eyes.The thief stops his walk.","葉の前に色が変わった花が目に浮かび上がり、ドーシュは歩き止める。"],"저택도 한 바퀴 돌아보시겠습니까? 돌아가는 길은 화면 아래의 ‘뒤로’입니다.":
["The way back is “back” below the screen.","家も一回の回りを見る? 帰りの道は画面の下の「後ろ」です。"],"정신을 차렸을 때, 부서진 철문 너머로 S-012는 맨발로 달리고 있었다.":
["When the mind was shaken, the S-012 was running on the hand over the broken iron door.","心が閉じ込められたとき、壊れた鉄の門を超えて、S-012は足元に走っていた。"],"지난번에 짚어 둔 자리입니다. 한번 보시지요. 이번 견본은 잘 고쳤습니다.":
["I'm going to see it last time. this sample is well fixed.","見て、先回のレポートが修正されました。"],"차변과 대변이 한 페니만큼 어긋납니다. 끝줄의 글씨가 조금 기울어 있습니다.":
["The line and the spell are as opposite as one penny. the end line is a bit sliding.","⁇ と ⁇ は一ペニーと同じように反対です 結尾の文字が少し曲がっています。"],"첫 잔은 거의 안 드셨더군요. 이번엔 조금 연하게 해 봤습니다. 어떠십니까?":
["I did not drink the first cup, but this time I tried a little bit.","最初の飲み物はほとんど食べていませんでしたが、今回は少しずつおいしくなりました。"],"큰 바늘이 여섯에 닿으면 깨워. 안 일어난다는 이유로 재워 놓지 말고.":
["When the big needle reaches six, wake up and don’t put it down because it doesn’t happen.","大きな針が6点に触れたら目覚め、起きない理由でそれを振り回さないでください。"],"‘핀’. 옛말로 금발이라는 뜻이지. 여기 나오는 영웅도 그 머리 때문에 그렇게 불렸어.":
["“Pin” means blond, and the hero that comes out here is called so because of his head.","金髪の意味は、昔から「ピン」という意味で、ここから来たヒーローもその頭のためにそう呼ばれていた。"],"……난 누가 요리하든 상관없어. 식탁에 올릴 거면 맛있는 게 좋다는 거지.":
["I don’t care who cook, it’s good to get on the table.","料理を食べる人はいないけど、テーブルに置いておくと美味しくなります。"],"가지를 안 부러뜨리고 옮길 수 있게 됐어요. 도련님한테 보여 드리려고 했는데.":
["I could not break the branch and move it.I wanted to show you to the Dutch.","打ち砕かず、転がせてくれました。"],"같은 날 보낸 두 봉투에서 서로 다른 밀랍 냄새가 납니다. 어디부터 보시겠습니까?":
["The two bags spent the same day smell different folds. where do you see?","同じ日に過ごした2つの袋から、お互いのミルクの匂いがする。"],"그 얘기는 됐어. 세바스찬, 홍차. 오늘은 이제 아무도 만나고 싶지 않아.":
["I'm talking about it. -Sebastian, Chongqing. - Today I don't want to see anyone anymore.","こんにちは! シバシュン、ハンチー! 今日は誰も会いたくない。"],"그건 손님들이 가신 뒤에 들어도 돼. 저쪽 탁자에 차를 더 내어 드려.":
["You can get the guests in, and take the car on the table.","客が来て、その後、車をテーブルに置いておく。"],"그럼 들여. 문밖에 세워 두는 것도 결국 가문의 체면을 깎는 일일 뿐이잖아.":
["And then, it is just a thing to put the door out of the house.","やっぱり、ドアを外に置くのは、結局家の体の部分を切るだけだ。"],"그럼 이 매듭을 한 손으로 풀어 보십시오. 다른 손엔 장난감을 들고 있다고 생각하시고요.":
["Then release this stick with one hand, you think you have a toy in the other hand.","手でこのマッチを解き放って、もう片手におもちゃを持っていると思っている。"],"그리고 좁은 사다리를 기어올라, 머리 위 뚜껑을 힘껏 밀어 젖혔다.":
["And he lifted the narrow stairs, and pushed the cover over his head hardly.","狭い階段を上げて、頭の上のカバーを強く濡らした。"],"금이 간 자국까지 겹칩니다. 봉한 사람과 보낸 사람을 나눠 볼 수 있겠군요.":
["You can share the gold with the messengers.","金が流れた国まで、あなたは、封じられた人と送った人を分けることができるでしょう。"],"길 건너 완구점에서 한참을 머무셨군요. 다음 외출 때도 들르시겠습니까?":
["You’ve been on the road, you’ll be able to see it next time?","途中で、あっという間に、お出かけの時も聞きたいですか?"],"내일 아침이면 됩니다요. 왼팔이랑 오른팔 길이도 따로 적어 놨습니다요.":
["I will be on my left arm and my right arm.","明日の朝、左腕と右腕の道を別々に書く。"],"넌 언제나 매듭을 왼쪽으로 묶잖아. 그래서 새 둥지도 한번 들춰 봤지.":
["You always bind the bands to the left, so I have seen a new nest.","いつも、左側にハンドルを結びつけており、また新しい巣を見た。"],"답장을 기다리는 초청장이 은쟁반에 놓여 있습니다. 시엘은 첫 줄의 호칭부터 살핍니다.":
["The invitation waiting for the answer is placed on the Silverboard. Seal is removed from the first line's name.","答えを待つ招待状が銀の板に置かれ、シーエルは最初のラインの名称から逃げ出します。"],"도련님, 길에서 드시라고 빵을 싸 뒀습니다. 이번 건 안 태웠습니다, 하하하!":
["I’ve got a bread on the road, but this time I didn’t burn it.","こんにちは、この時点で焼き尽くすパンが食べられました!"],"도련님, 손이 떨리십니다. 다음 일정까지 밀어붙이면 몸이 더 상할 겁니다.":
["Your hands are thickened. if you push it to the next schedule, your body will be hurting more.","手が伸びて、次の日程まで押すと体がさらに傷つく。"],"도련님께서 부르시면 언제든 대답하겠습니다. ‘대화’로 한번 불러 보시겠습니까?":
["I will answer you whenever you call me. - Do you want to call me?","いつでも「電話」をかけておくか?"],"또 와 주셨네요! 오늘은 도련님 구두에 흙 안 튀게 물부터 미리 줬어요.":
["I have come back to you today, and I have not been put on the water.","こんにちは!今日は、水を流して水を流さないようにしました。"],"마지막 왕복입니다. 체조실 문턱까지 보폭을 흐트러뜨리지 않고 가 보시겠습니까?":
["The last roof.Do you want to go without spinning the bulk to the doorway of the gym?","最後の王衣です! トレーニング室の門まで、広がりを振り回さずに行ってほしいですか?"],"말이 담장 앞에서 멈춥니다. 시엘은 고삐를 쥔 손부터 가만히 폅니다.":
["The horse stops in front of the cage. Seal holds his gout from his hand.","馬はカーテンの前で止まります.シエルはゴッピーを手から押しつける。"],"벤치는 가벼웠는데 수평 맞추기가 영 어려웠어요! 한쪽에 앉아 보실래요?":
["The bench was light but it was hard to horizonize! can you sit on one side?","ベンチは軽かったけど、横向きに直面するのは難しい!一方で座ってくれますか?"],"보시다시피 지난 납품 때와 규격이 같습니다. 견본의 치수도 여기에 적었습니다.":
["As you can see, the time and standards of previous delivery are the same. the size of the sample is also written here.","見るように、前回の配達時間と規格は同じです サンプルのサイズもここに書かれています。"],"복도에서 우릴 보면 놀라지 마. 마중 나온 거야. ⋯라고 에밀리가 말했어.":
["Don’t be surprised when you see us in the corridor. – She is out of the corridor.","廊下から見ると驚かないで、エミリーは言った。"],"빈 줄까지 보이는 대로 옮겨 적겠습니다. 제가 기억하는 대목은 따로 기록해 두지요.":
["I will move it as empty.I remember the items I keep in mind.","空っぽの線まで移動します. 記憶する本を別々に記録します。"],"사용인을 근무지로 끌어 놓으세요. 사용인과 근무지를 차례로 눌러도 됩니다.":
["You can push the user and workplace.","ユーザーを職場に引き寄せ、ユーザーと職場を順番に押すことができます。"],"세바스찬이 주인 앞에 무릎을 꿇었다. 늘 장화를 벗겨 주던 높이였다.":
["Shevaschan was kneeling before his master, the height that always had removed the armor.","セバスチャンは主人の前でひざまずいて、いつも着物を取り除く高さだった。"],"손님방 수건이 또 도련님 방에 들어갔습니다요. 글씨가 어찌나 비슷한지…….":
["The guest room handwashes went into the room of the Doyle. how similar is the text...","客室のタオルがまた、ドーシュームに入ったので、文字がどんなに似ているか・・・。"],"시엘 님이 앉으시던 자리는 비워 두었습니다. 런던에 오시면 들러 주십시오.":
["The seat of Seal was left empty, please come to London.","シエルが座っている場所は空っぽで、ロンドンに来たら入ってください。"],"시엘, 네가 바쁜 건 알아. 그래도 네가 차 한 잔 할 시간은 내가 비워 둘 테다.":
["Ciel, I know you’re busy, but I’ll leave you free time to drink a cup of tea.","シエル、あなたが忙しいことを知っていますが、お茶を飲む時間は私に空いてしまいます。"],"시엘은 며칠 전 세바스찬에게서 받아 본 스코틀랜드 야드의 보고서를 떠올렸다.":
["Ciel reminded of the report from the Scottish Yard received from Sebastian a few days ago.","シエルは数日前にセバスチャンから受け取ったスコットランドヤードの報告書を思い出した。"],"시엘이 안대를 풀었다. 매듭이 한 번 걸려서, 두 번째에는 두 손을 써야 했다.":
["Ciel had to take the hand, and the second time he had to put his two hands.","シエルは、一つは手を伸ばし、2つ目は両手を伸ばす。"],"심사위원이 에드워드에게 상장을 건넵니다. 시엘은 손님들과 함께 박수를 보냅니다.":
["The judge hands Edward the certificate. Ciel joins the guests in applauding him.","審査員がエドワードに賞状を手渡す。シエルも客たちとともに拍手を送った。"],"어린 시절부터 숨겨 온 지병이 악화되어, 시엘은 결국 동트기 전 숨을 거뒀습니다.":
["The illness Ciel had concealed since childhood worsened. He drew his last breath before dawn.","幼い頃から隠してきた持病が悪化し、シエルは夜明けを待たずに息を引き取った。"],"여기 있는 것 중 아무거나 골라 보시죠. 저희 상표를 붙인 건 전부 같은 검사를 거칩니다.":
["Choose any of the things here. all that we have a brand is tested by the same.","こちらからご覧ください! すべてのブランドを貼り付けたものは同じ検査を受けます。"],"예. 그런데 저희는 사람이 모자라고, 피니 혼자서 저택 일을 전부 맡을 수도 없지요.":
["Yes, but we are a man with a hat, and Pini can't take all the housework alone.","もちろん、私たちは帽子だし、フィニーは一人で家事の仕事を全て担当することはできない。"],"오후 두 시엔 바구니를 반 뼘만 옮겨 줘. ⋯라고 에밀리가 말했어.":
["“Let the basket be moved half a hour in the afternoon,” Emily said.","午後2時には、半分だけの箱を移動させなさい」とエミリーは言った。"],"월말에 영입한 사용인의 실무 숙련도가 숙소 등급만큼 성장 (월 +1 / +2 / +3)":
["The user’s work skill rate that entered in the month end increased as much as the accommodation rating (month +1 / +2 / +3)","月末に収入されたユーザーの実務スキルは宿泊施設等に増加(月 +1 / +2 / +3)"],"의사가 기침이 멎은 시간을 묻습니다. 시엘은 시계보다 먼저 창문을 봅니다.":
["The doctor asks when it is coughing. Ciel looks at the window before the clock.","医師は咳の時間を尋ね、シーエルは時計より先に窓を見る。"],"이 문장에는 저도 한참 걸렸습니다. 도련님의 번역을 한 부 가져도 되겠습니까?":
["I have a lot of time in this phrase. can I get a translation?","こんなに長い時間、翻訳もできるのか?"],"이런, 백작. 내 가게엔 비를 피할 지붕도 있는데 굳이 거기에 서서 보시나?":
["I have a roof in my store to avoid rain, and should you stand there?","店内には雨を避ける屋根があるので、そこに立って見てはいかがでしょうか?"],"이름은 이미 셋이나 듣고 왔어. 공교롭게도 셋 다 같은 날 뒈졌더군.":
["The name has already been heard three times, and the three were all in the same day.","名前はすでに3つ聞こえてきたが、公正に3つも同じ日に消えた。"],"조금 더 진하게 우려 보았습니다. 어느 쪽이 나은지는 도련님께서 말씀해 주시지요.":
["I’m a little worried, let me tell you which one is better.","ちょっと気になっていたので、どちらがいいのか教えてください。"],"조커가 그랬다고? 매일 같은 천막에서 잤는데 스네이크한텐 아무 말도 안 했어.":
["I was in the same tent every day and didn’t say anything to Snake.","ジョーカーは言った?毎日同じテントで寝て、スニークに何も言わなかった。"],"처음부터 끝까지 같은 너비로 디디셨습니다. 마룻바닥의 표시를 지워도 되겠군요.":
["From the beginning to the end, you can remove the mark of the mouth.","最初から最後まで同じ幅でディディーディングして、マルトベッドの印を削除できます。"],"천천히 내쉬십시오. 시계는 제가 멈췄으니 도련님이 준비되면 다시 시작하지요.":
["I stop the clock, and when you are ready, I start again.","時計が止まって、準備が整ったとき、再び始める。"],"첫 춤을 청하신 두 분이 같은 곡명을 적으셨군요. 벌써 악장이 활을 들었습니다.":
["The two of the first dancers had the same song, and the actress had already heard the arrow.","最初のダンスを求める二人は同じ曲を書いたが、すでにアカデルは弓を聞いた。"],"축하드립니다, 도련님. 견본과 실적을 꾸준히 갖추신 보람이 있군요.":
["Congratulations, you have a good look and a good look.","こんにちは、おめでとうございます! 実績と実績をしっかりと手に入れたお得様です。"],"타나카가 장서표를 한 장씩 넘깁니다. 도련님이 가문의 필체를 알아봅니다.":
["Tanaca sends a book of records.The Doyle will find out the family’s file.","タナカは一冊の記録を渡すが、ドシュは家族のフィルツを見る。"],"편지에 적어 주신 장미가 올봄엔 피겠군요. 그때는 제가 먼저 인사를 가겠습니다.":
["The roses you write in the letter will flow this spring, then I'll first greet.","春に書いたバラが咲くので、まずはおめでとうございます。"],"핀’. 옛말로 금발이라는 뜻이지. 여기 나오는 영웅도 그 머리 때문에 그렇게 불렸어.":
["The old word is blond, and the hero that comes out here was called so because of his head.","金髪という意味で、ここから来たヒーローもその頭のせいでそう呼ばれていた。"],"한 번에 한 건을 수락할 수 있습니다. 납기에는 해당 품목의 표준품부터 출고합니다.":
["You can accept one thing at a time. the delivery is issued from the standard items of the item.","時々1件を受け入れることができます 配達には、その項目の標準商品から出発します。"],"활이 현에서 떨어지자 집사가 악보를 뒤집었다. 끝나지 않은 음 하나가 방에 남았다.":
["When the shark fell from the scene, the housewife turned the evil; one unfinished sound left in the room.","弓が現地から落ちたとき、家主は悪を振り回し、終わらない一つの音が部屋に残った。"],"35개월이나 발버둥 쳤지만…… 이제 놈들의 이름을 알아낸대도 더 쫓을 마음이 없어.":
["It has been 35 months long but I have no longer been looking for the names of them.","35ヶ月も経ったが、今は彼らの名前を知るまで追いかけるつもりはない。"],"「먼저, 가족의 죽음을 진심으로 애도합니다. 그리고 그대의 무사함을 신께 감사드립니다.」":
["“First, I am deeply grateful for the death of my family and thank God for your health.”","「まず、家族の死を深く悲しみ、あなたの健康に神に感謝します。"],"가주께서는 집안일은 물론, 어른들에게 뒤지지 않을 지식과 교양도 갖추셔야 합니다.":
["As head of the house, you must know how to run it, and hold your own among adults in learning and manners.","当主たるもの、家政はもちろん、大人に引けを取らぬ知識と教養も身につけていただかなくては。"],"개월이나 발버둥 쳤지만…… 이제 놈들의 이름을 알아낸대도 더 쫓을 마음이 없어.":
["It was a few months ago, but I have no longer been looking for the names of them.","数ヶ月も経ってますが...今は彼らの名前を知るまで、追いかけるつもりはありません。"],"개킨 쪽으로 손을 넣으면 작은 수건부터 잡힙니다요. 도련님이 보신 그대로입니다요.":
["If you put your hand in the side of the hole, you will take it from a small handwasher, as you see.","手をひっくり返して、小さなタオルから手を握り、あなたが見たように。"],"게다가 일을 그르친 이상 이제 백에게 돌아갈 수도 없겠지요? 마침 이곳에는 빈자리가 있습니다.":
["And you can’t get back to the work? there’s a vacancy here.","仕事をやめてから、もうバカに戻ることはできない? まさにここに空き席がある。"],"견본은 오늘 만든 물건이고 장부는 지난 납품 때 쓴 겁니다. 함께 봐 주십시오.":
["The sample is the item made today and the package was written at the previous delivery. please look together.","サンプルは今日の作り物であり、配達時に書かれたものだ。"],"고마워. 그래도 이건 스네이크가 직접 건네고 싶대. ⋯라고 키츠가 말했어.":
["Thanks, but it’s what Snake wants to do. – Kits said.","ありがとう、それでもスネイクが自分で通うことを望んでいます」とキッツは言った。"],"그건 내가 끌게. 너는 칼을 데워 와. 찬 걸로 자르면 단면이 망가져.":
["I will draw it, you will take the sword, and if you cut it in a cold shell, the side will be broken.","あなたは剣を引き取って、冷たいものに切り落とすなら、その片側が壊れる。"],"그래, 응원 고마워. ……그렇게 노려보지 마. 리지한테는 비밀로 할 테니까.":
["Thank you for the support. ...Don’t worry about it, I’ll do it secretly to Ridge.","どうぞ、お礼を申し上げますが、リジーに秘密を伝えることに気付かないでください。"],"그럼 너희가 잘못했잖아! 아그니, 저 땅꼬마 좀 도와줘! 집사도!":
["So you’ve done the wrong!Augni, help that little land!","やっぱり、あの男の子を助けてくれ! やっぱり、あの男の子を助けてくれ!"],"날 죽여. 뭘 물어봐도 대답은 안 해. 정원 바닥만 피로 더러워질걸.":
["Do not answer anything, but the garden floor is dirty by blood.","何を言っても答えないで、庭の床だけが血で汚れる。"],"늦게 와도 알아. 이제 네 구두 소리는 기억하거든. ⋯라고 오스카가 말했어.":
["I know it is late, I remember your oral sound now, Oscar said.","遅く来るかわかりますが、今はあなたの口音を覚えています」とオスカは言った。"],"도련님, 셔츠는 이쪽에 걸어 뒀습니다요! 이번엔 단추도 다 맞췄습니다요!":
["I have the shirt on this side! this time, I have the button on this side!","シャツを着て、今度はボタンも入れてしまいました!"],"도련님, 왕실에서 서신이 왔습니다. 봉랍을 확인했습니다. 도련님 앞으로 온 친서입니다.":
["I have a letter from the Royal House.I have confirmed the cover.I have a friend from the next.","王室から手紙が届きました! 封筒を確認しました. 王室から手紙が届きました。"],"도련님이 차를 식히시는 버릇까지 선대와 닮았다는 말을 끝내 못 드렸군요.":
["You can’t tell me that you are like a cold car.","車の冷却習慣に似ているという言葉を終えなかった。"],"도안 사용료도 함께 도착했습니다. 도련님께서 고르신 그림이 실린 달력을 한 부 남겨 둘까요?":
["Do you want to leave a calendar that you have chosen?","出張の日付も入れてきましたか? あなたが選んだカレンダーを残すことはできますか?"],"동쪽 계단 밑 작은 서랍에서 나왔습니다. 내일은 도련님께서 직접 열어 보시지요.":
["I came out from a small box below the east stairs. tomorrow the Doyle will open it directly.","東階の下の小さな箱から出て、明日、ドーシュは自分で開けよう。"],"리지, 내가 장미 쪽을 볼 때만 웃음을 참더군. 이리 와. 마지막 건 같이 열자.":
["Ridge, I only laughed when I saw the rose side. come and open the last together.","リジー、僕はバラの向こうを見たときだけ笑いを耐えました.ここに来て最後のことを一緒に開けよう。"],"맨 아래 것을 하나 꺼내 보시죠. 마차에 실려도 멍이 들지 않게 담았습니다.":
["Take a look at the bottom of the car, and you can't get it in the car.","車の下に置いて、いや、ひっそりと見せてない。"],"바구니는 밑을 받쳐 줘. 에밀리가 손잡이에 턱을 괴고 자거든.":
["Take the basket down, as Emily slows his neck on his handheld and sleeps.","コートを下ろして、エミリーが手のひらに首をぶつけて寝る。"],"발소리만 듣고도 맞혔어. 오늘도 그 구두네. ⋯라고 오스카가 말했어.":
["I just heard the foot, and I’m still talking about it today,” Oscar said.","足の音も聞こえてきたし、今日は口だよ」とオスカは言った。"],"복도 시계가 네 번 울렸다. 시엘은 세 번째와 네 번째 사이에서 거칠게 숨을 골랐다.":
["The corridory clock sounded four times, and Ciel chose to breathe hardly between the third and the fourth.","廊下の時計が4回鳴り、シエルは3番目と4番目の間で厳しく息を吸い取った。"],"생산에 쓸 돈은 확인하셨습니까? 아래의 ‘뒤로’를 누르시면 저택으로 돌아갑니다.":
["Have you checked the money spent on production? if you press the “back” below, you’ll go back to your home.","生産に費やされたお金は確認したか? 下の「後ろ」を押すと、家に戻ります。"],"서재로 돌아온 타나카가 시엘에게 그날의 일을 이야기하고, 다시 가문의 서신을 맡는다.":
["Tanaka, returning to the residence, tells Ciel about the day and takes back the family's letters.","帰国したタナカは、その日の事柄をシエルに話し、また家族の手紙を担当する。"],"서재로 적었습니다. ‘이달 일정 실행’을 열면 확정하기 전에 지출을 검토할 수 있습니다.":
["Opening the ‘Monthly Calendar Run’ you can review your spending before confirming it.","「月のスケジュール実行」を開くと、確認する前に支出を検討できます。"],"세바스찬이 책을 닫고 같은 문장을 두 번 읽었다. 두 번째에는 한 음절이 달랐다.":
["Sebastian closed the book and read the same phrase twice; in the second one was different.","セバスチャンは本を閉じて同じ句を2回読み、第2の句は別でした。"],"소개장도 여권도 없이 청방에 쫓기면서, 이 문을 나가면 어디로 가실 생각입니까?":
["If you go out of the door without a passport, where will you go?","パスポートもなく、このドアから出て行くと、どこへ行くのか?"],"시엘. 힘들 땐 이 소마 님께 기대 달라고. 나도 그땐 눈치를 봐 줄 테니까.":
["I’m sure you’ll be able to see this, so I’ll see it.","シエル:困難な時、このソマに期待して、私もその時気づくでしょう。"],"시엘은 편지 끝의 날짜를 내려다보았다. 날짜만 두 번, 소리 없이 훑었다.":
["Seal looked down on the date of the end of the letter. the date was only twice, he spoke without noise.","シエルは手紙の終わりの日付を下に見て、その日付は二度しか聞こえず鳴り響いた。"],"시엘이 안대를 풀었다. 매듭이 한 번 엉켜, 두 번째에는 양손을 다 써야 했다.":
["Ciel had to put the hand on, and the hand was to be wiped one, and the second hand was to be wiped all.","シエルは、一つにマンドを折り、二度目に両手を書きなさなければならなかった。"],"실례합니다. 두 분께서 다정히 의논하시는 동안 저쪽 은식기부터 세어도 되겠습니까?":
["Sorry, can you get out of the stock while you are talking gently?","申し訳ありませんが、この2つは、お互いに親切に話し合う間に、その金庫から立ち上がることができますか?"],"아직 마구간에 있습니다, 왕자님.\\n손님, 봉투만 전해 드려도 되겠습니까?":
["I am still in the shelf, Prince.\\n Guest, can I tell you a bag?","まだ、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん"],"오늘 기록은 지난 순과 같군요. 다음에는 다른 과목을 편성해 보시겠습니까, 도련님?":
["Today’s record is the same as the previous. next time, do you want to compile another subject?","今日のレコードは前回と同じで、次回は別の科目を編集するつもりですか?"],"오늘도 창가에 두 잔씩 놓았습니다. 시엘 님 몫에는 우유를 따로 드렸습니다.":
["I put two cups on the window today, and I gave it to Ciel.","今日も窓に2杯を置いて、シエルにミルクを分けてあげた。"],"오실 줄 알고 도련님 셔츠는 따로 걸어 뒀습니다요. 단추도 세 봤고요!":
["I know you’re going to come and I’ve got your shirt on my own, and I’ve seen the three buttons!","見て、シャツを着て、ボタンも3本見て!"],"왕실에 올릴 서신은 이쪽입니다, 도련님. 마차가 떠나기 전에 보시겠습니까?":
["The letter to the royal house is here, Mr. Doyle.Do you want to see before the car leaves?","王室に手紙を上げるのはここで、ドーシュさん、車が去る前に見てほしいですか?"],"요 며칠 빈 바구니만 창 앞에 있더군. 바닥 천은 왜 반만 덮었어?":
["For a few days, the basket was just empty before the window.Why did the floor cover half?","何日か空っぽの箱が窓の前で、なぜ地面は半分だけ覆われたのか?"],"요양 중인 타나카 씨가 열쇠와 장부를 보내셨습니다. 어느 쪽부터 보시겠습니까?":
["Mr. Tanaka, who is in care, has sent the keys and the gifts. from which side do you see?","看護のタナカさん、鍵とガイドを送ってくれました。どこから見たいですか?"],"위가 소란스럽다. 피니안의 옆에 앉아 있던 아이가 먼저 고개를 들었다.":
["The child sitting next to Pinean first heard his head.","ピニアンのそばに座っていた少年が、最初に頭を上げた。"],"이 곡은 끝까지 밀어붙이면 새가 날아가 버려. 한 소절쯤은 쉬어도 좋아.":
["If the song is pushed to the end, the bird will fly and leave it.","この曲を最後まで押すと、鳥が飛び去って、一瞬休むことも良い。"],"이 브라우저에서는 진행 상황이 임시로만 저장됩니다. 탭을 닫으면 이번 진행을 잃습니다.":
["Progress is temporary in this browser. Closing the tab will end this session.","このブラウザーでは進行状況は一時保存のみです。タブを閉じると今回の進行状況は失われます。"],"이 줄을 보시죠. 지난번에 출고한 물건도 오늘 내놓은 견본과 같은 규격입니다.":
["Look at this line. the items that were released last time are the same standard as the samples presented today.","見てみると、先に発行した物件も今日のサンプルと同じ規格です。"],"이 편지를 읽을 사람을 찾고 있어. 여기 ‘팬텀하이브 백작 귀하’라고 쓰여 있지?":
["I am looking for someone to read this letter. here is the ‘FantomHive Count you’ written?","この手紙を読んでくれる人がいるのだが、ここに「ファンタムハイブ伯爵君」と書かれているのだろうか?"],"이걸로 한번 해 보시죠. 가게에서 내놓는 것과 똑같이 풀을 발라 뒀습니다.":
["I’m going to try it, just like you put it out in the store.","見てみると、店内で作ったものと同じように、草を投げ出した。"],"장부의 네 번째 줄이 바로 여기예요. 비가 와도 번호는 그대로라서 금방 찾았어요!":
["The fourth line of the boat is here.The number of rain comes and I quickly found it!","雨が降った時、その番号はすぐに見つかった!"],"쟁반은 테이블에 남고 손님끼리 이야기를 시작했습니다. 훌륭한 주최시군요.":
["The hosts stayed on the table and began a conversation with guests.","テーブルに座ってゲストとの話を始めた、素晴らしいホスト。"],"저쪽에선 내가 대답도 안 한 셈이군. 종이를 줘. 사과문은 내가 쓰지.":
["I don’t answer it, I give you a paper and I ask for apology.","書くことなく、文書を書いておきますが、申し訳ありません。"],"제가 직접 받았습니다. 그때는 저 말고 이 장부를 읽을 이가 남을 줄은 몰랐지요.":
["I did not know that there was no one else to read this book.","自分も読んでいたけど、この本を読んでいない人はいなかった。"],"첫 바퀴는 어느 집의 물건이나 잘 굴러갑니다. 저희 것은 세 바퀴째를 봐 주십시오.":
["The first wheel runs well any house items or we look at the third wheel.","最初の車輪は、どの家でも物事や良い回転をします。私たちは3回目の車輪を見てください。"],"카카오를 진하게 풀었어. 숟가락을 세워 볼 생각이라면 조금 더 식혀야겠지만.":
["I’m going to get a little cold, but if you want to get a little cold.","コカオを真剣に解放したが、グラスを建てるならもう少し冷やさなければならない。"],"커튼은 아직 닫지 말아 주시라요. 도련님 방을 어둡게 두고 싶지 않습니다요.":
["Don’t keep the curtains closed, I don’t want to leave your room dark.","カーテンはまだ閉まらないで、ドーシュの部屋を暗くするつもりはない。"],"피니안의 머리카락이 조금 자랐을 때쯤, 시엘이 제 방으로 소년을 불렀다.":
["As soon as Pinian's hair was a little big, Ciel called the boy to my room.","フィニアンの髪が少し大きくなったとき、シエルはその男の子を私の部屋に呼んだ。"],"……견본은 그쯤 닦아 두고. 지금 보여 드려야 할 건 이 품목의 납품 기록이야.":
["I have to keep the sample cleaned. now I need to show you the record of this item.","サンプルをきれいにし、今すぐ見せなければならないのはこの商品の配達記録です。"],"게임을 불러오는 중입니다. 이 안내가 계속 보이면 현재 화면에서 게임 실행이 시작되지 않은 상태입니다.":
["If this guide continues to appear, the game is not running on the current screen.","このガイドが続く場合は、現在の画面でゲームの実行が開始されていない状態です。"],"견본은 그쯤 닦아 두고. 지금 보여 드려야 할 건 이 품목의 납품 기록이야.":
["The sample is cleaned, now you need to show the record of this item.","サンプルをきれいにしておいて、今すぐ見せなければならないのはこの商品の配達記録です。"],"궁에서 나를 백작이라 부르든 애송이라 부르든 상관없어. 그래서 그만두는 게 아니야.":
["It doesn’t matter if you call me a cousin or a covet in the palace, so I don’t stop.","宮殿で私をカウンターと呼ぶか、愛情と呼ぶかは関係ないので、やめない。"],"그건 다른 품목이야. 이 물건을 보낸 전표만 추려. 몇 장뿐이어도 그대로 올려.":
["It is a different item. only take the full-block of these items. just a few chapters up as well.","別物です!この物件を送った単一のテーブルを引き出し、数枚だけアップして。"],"내가 정원을 충분히 살피지 못했나 보네. 다음에는 눈에 띄는 것만 따라가지 않겠어.":
["I don’t have seen the garden enough, and I’m not going to see it next time.","庭をよく見てないけど、次回は見るのもない。"],"담당관님, 찾으시는 날짜가 있으십니까? 지난 주문서까지 날을 맞춰 꽂아 뒀습니다.":
["Do you have a date to find? I have set up the previous order.","オフィスは、先日注文の日付を付けましたか?"],"담당관이 같은 점수를 받은 두 상회의 이름을 나란히 적고 양쪽 견본 앞에 상장을 놓습니다.":
["The representative shall write the names of the two counties that have received the same score and place the list before both sample.","担当者は同じ点数を獲得した2つの会議の名前を横に書き、両側のサンプルの前で記録を置く。"],"답안은 이미 오래전에 써 두고, 날짜만 오늘 도장을 꾹 눌러 보낸 모양이지요.":
["The answer was written a long time ago, and the date just pressed today.","答えはすでに長い間書かれていて、日付だけが今日を押して送ったようです。"],"도련님, 나가시는 길에 정원 흙은 밟으셔도 돼요! 방금 쓸었어요!":
["You can go to the garden on your way!","こんにちは! 庭の道を歩く! こんにちは!"],"도련님께서 어제저녁에 직접 명하셨습니다. 열이 오르셔서 잊으신 모양이군요.":
["I told him that he had a fever and forgotten it.","夜に発熱したと、忘れてしまった。"],"말은 제가 데려오지요. 도련님은 오늘 저녁에는 그쪽 손으로 찻잔만 안 드시면 됩니다.":
["I'm saying you don't have to drink a cup with your hands tonight.","こんにちは!今夜は、お手で飲むだけのワインを飲まないでください。"],"봉투 가장자리가 바스락거렸다. 스네이크는 구겨진 데를 엄지로 몇 번이고 폈다.":
["The box is shaken.Sneak has been shaken several times in the shell.","包装の端がバッグした.スニークは、何回か、手をひいて、その場所にぶつかった。"],"상대가 보낸 편지에는 존칭이 하나 빠져 있습니다. 시엘의 펜촉이 공중에서 멎습니다.":
["The letter sent by the opponent has a name missing: Ciel's penny is thrown out of the air.","相手が送った手紙には一つの名称が欠けているシエルのペンタックが空中から飛び出した。"],"세 번의 일정에 이만큼 들겠군요. 오늘은 연습이니 ‘취소’로 일정표만 덮겠습니다.":
["I will be able to do this in three times.Today, the exercise is a “annull” schedule.","今日は3回の練習で、『キャンセル』でカバーする予定です。"],"세바스찬이 돌려받은 참가표를 수첩에 끼웁니다. 이번에는 경연에 참가하지 못합니다.":
["Shevchenko will return the ticket to the contest, this time he won’t participate.","セバスチャンが返還した参加券を手紙に貼り付け、今回はコンテストに参加しない。"],"손님이 모자를 걸었다가 기절할 일 있나. 뱀들의 거처도 따로 만들어 두면 되는 거지?":
["You have a hat and you can get rid of the serpent’s houses.","ゲストは帽子をかぶって、あきらめないのか?蛇の家も別々に作れるのか?"],"스네이크, 네가 보고 들은 건 야드에 네 입으로 얘기해. 난 해줄 수 있는 게 없어.":
["Snake, what you see and hear, I speak to Yade with your mouth; I can’t do anything.","スネイク、あなたが見て聞いたこと、ヤードに口で話して、私は何もできない。"],"심사대의 것만 고른 솜씨라고요? 납품 상자에서도 하나 꺼내 보시겠습니까?":
["Do you want to get one out of the box?","手紙の箱に1枚しか入れてないか?"],"어느 손님의 입맛이 더 까다로운지는 됐어. 어제 이 두 통을 각각 어디에 뒀지?":
["Which of the guests was more expensive. where did you put these two boots yesterday?","どちらのゲストが一番おいしい?昨日、どちらの2つのカップルをどこに置いたのか?"],"언제까지고 널 피험자 12번이라 부를 순 없잖아. 금발이 제법 근사하게 자랐군.":
["I can't tell you how long, the blondes are growing beautifully.","いつまで、あなたを12回の試験者と呼ぶことはできない! 金髪は素晴らしい成長を遂げた。"],"여기서는 온실 유리에 노을이 두 번 비쳐요! 봐요, 두 번째 노을이 벌써 왔네요!":
["Here is the two-fold lighting in the greenhouse glass! see, the second lighting has already come!","ガラスガラスに2回のノーが輝いている!見よ、もう2回目のノーが来た!"],"영수증 한 장에 동전 한 닢이 모자랍니다. 맞춰 본 전표를 오른쪽 함에 넣습니다.":
["One coin in the receipt chapter is a cap. Place the fixed bill on the right hand.","受付の1枚のコインがカップです。正しく見たチケットを右側に置きます。"],"영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.":
["I want to return to you the empire and work that was temporarily returned to the king in a relationship without the prince.","王様の関係で一時的に王様に返された王位と働きをあなたに返したい。"],"옆집은 벌써 등을 켰어. 봐, 고인 물에까지 진열한 물건이 비치잖아.":
["The house is already back. see, there are a lot of things that are hot up to the water.","隣の家はすでに背を閉じている!見よ、水の流れまであくまでも物が輝いている。"],"예. 열일곱 번째 접시에서 이제 단 건 꼴도 보기 싫다며 포크를 던지셨지요.":
["For example, in the seventh plate, you throwed a fock and didn’t want to see anything.","ちなみに、第17回の皿で、もう見た目が嫌いなのは、フォークを投げてしまった。"],"예. 종이가 얇아졌으니 등불에 비추면 필압이 고스란히 드러날 겁니다.":
["Yes, the paper is thin and when it is lighted on the lamp, the philtry will be clear.","紙が薄くなったので、灯りに照らすとフィルプレッシャーがひどく現れます。"],"오늘 서명은 여기까지만 할래. …마지막 두 줄을 세 번이나 읽었는데 무슨 말인지 모르겠어.":
["I have read the last two lines three times, but I don't know what it means.","最後の2行を3回読んだけど、何が言ってるのかわからない。"],"올해는 열두 개가 다 촛대에 들어갔다. 초 사이의 설탕 체스 말만 하나 비스듬했다.":
["This year, twelve of them all went into the candle. between seconds sugar chess only one was swallowed.","今年は12人がすべてろうそくに入り、1秒間の砂糖チェスの馬だけを吹き飛ばした。"],"완두콩 수프와 미트볼입니다. 크루아상은 방금 구웠고, 달걀도 삶아 두었습니다.":
["It is a bulk soup and a metball. the crowns just got it, and the eggs were also dried.","クルアーンは、ちょうど焼き、卵も焼き尽くした。"],"우선 묵을 숙소부터 알아보겠습니다. 조식은 별도 요금이어도 괜찮으시겠습니까?":
["First, I will see the room.Do you want to pay for a star?","まずは、お客さまの宿泊施設を調べてみましょう!朝食は星の料金でもいいですか?"],"작년에 쓰시던 촛대에는 열 개밖에 들어가지 않아서요. 하나는 케이크에 바로 꽂았습니다.":
["The candles we used last year had only ten, one placed directly in the cake.","昨年使ったろうそくには、10個しか入っていなかったが、1つはケーキに直接貼り付けられた。"],"저 복도에서 구두 소리가 났습니다요. 도련님이 아니란 걸 알아도 받아들이기가 힘듭니다요.":
["I heard a sound in the corridors, and it is hard to admit that you are not a Dutch.","廊下から口音が聞こえてきたので、あなたがダビデではないことを理解するのは難しい。"],"전표까지 올려. 몇 장이냐고? 보시면 아실 텐데 굳이 우리가 먼저 말할 건 없지.":
["How many of you know, but we have nothing to say first.","何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か? 何枚か?"],"정원에 가져가 봐. 책에 그린 여우 발자국과 진짜가 얼마나 닮았는지.":
["Take it to the garden. how much the green sheep footprints in the book look like the real.","庭に連れて行って、本の緑のカエルの足跡がどれほど真実に似ているかを調べてみましょう。"],"제가 늦게 도착한 손님이라면, 먼저 오신 손님을 기다리게 하지 않고 어디로 안내하시겠습니까?":
["If I’m a late guest, where would you be to get without waiting for the first guest?","遅刻したゲストだったら、最初に来たゲストを待つことなく、どこへ行くのか?"],"제가 이 댁에 온 뒤로는 들은 바가 없습니다. 도련님께서 약한 소리를 하시는 분이 아니어서요.":
["I have not heard anything since I came to this house, because the Doyle is not a weak voice.","僕がここに来た後、何も聞こえなかったので、ドーシュは弱い声をあげる者ではない。"],"제가 할 수 있는 일이 눈앞에 있는데, 굳이 누가 와서 하실 때까지 두는 편이 더 불편합니다.":
["I have something to do before my eyes, and it is more uncomfortable to leave until someone comes and does.","僕ができることは、誰かが来るまで残すのが不快なことだ。"],"좌석표에 한 칸을 남겨 두지요. 손님이 늘 때마다 주인이 일어설 수는 없습니다.":
["Leave a cup on the seat table. The owner can not stand up every time the guest is always.","座席に1個のカンボジアを残す ゲストがいつもいるたびにオーナーが立ち上がることはできません。"],"주방부터 살펴보겠습니다. 지도에서 주방을 짚으면 현재 등급과 개수 비용이 함께 나옵니다.":
["Looking out from the kitchen. if you look at the kitchen on the map, the current rating and number costs come together.","キッチンから見てみよう!地図でキッチンを振り返ると、現在の評価と数値コストが合ってくる。"],"주방에서 오는 동안 한 칸 미끄러진 모양입니다. 제 킹에는 뜻밖의 행운이었지요.":
["I looked like a cane was sliding while coming from the kitchen. my king had an unexpected luck.","キッチンから来るときに一つのカンが滑り、私の王には意外な運があった。"],"주방을 맡길 사람이 필요하겠군요. 시설 정보 아래 ‘사용인 배치’에 명단을 준비했습니다.":
["You need someone to put the kitchen. under the facility information, we have prepared a list of “User Placement”.","キッチンに任せられる人がいるだろう.施設情報の下で「ユーザー配置」にリストを準備した。"],"차가 식기 전에 와. 네가 주문을 할 때까지는 나도 이 가게를 닫을 생각이 없거든.":
["I will not be thinking of closing this store until you order.","車が食べる前に来て、あなたが注文するまで、私もこの店を閉じるつもりはありません。"],"창문은 조금 열어 둘게. 우리가 먼저 네가 오는 걸 알아채게. ⋯라고 와일드가 말했어.":
["Let the window open a little, let us first see that you are coming.","窓を開けて、まずあなたが来るのを見せよう」とワイルドは言った。"],"책등 높이가 똑같으니 한눈에 찾겠어. 이 칸은 손대지 말고 그대로 둬.":
["The light is the same, so I will look at it.Do not hold this can and keep it right.","同じ高さの本灯で、一目で見るだろう.このカンは手を握らないで、そのままに置いておく。"],"천막에선 뱀을 돌봤어. 여기선 뭘 하면 돼? ⋯라고 와일드가 말했어.":
["I looked at the serpent in the tent. What can we do here? said Wild.","テントで蛇を見たが、ここで何をすべきか? ワイルドは言った。"],"축음기가 회전하는데 반주가 한 박자 비었다. 집사의 발끝이 아직 바닥에 닿지 않았다.":
["The sunlight was round a half-week, and the house's foot end was not yet reached the floor.","祭りは回転し、半分の空白が1本だったが、家の足の端はまだ地面に触れていない。"],"치수를 따로 재 보시겠습니까? 여기를 보십시오. 납품 장부에도 같은 수치가 적혀 있습니다.":
["Do you want to look at the dimensions separately? see here. the same numbers are written in the delivery board.","次元を別々に見直したいですか? ここを見てください. 配達のスケジュールにも同じ数字が書かれています。"],"파란 실은 손님방, 흰 실은 도련님 방. 이번엔 수건이 제자리에 갔습니다요!":
["The blue is a guest room, the white is a Doyle room. this time the handwashes went to your place!","ブルー・リアルはゲストルーム、ホワイト・リアルはドシュタインの部屋です!今回はタオルがお席に行きました!"],"한 모금 마셔 봐! 난 이게 좋은데 넌 어때? 다음엔 네가 고른 걸로 마시자!":
["I’m good, but what do you think? next time you’ve chosen to drink!","飲んでみて、次回はどうする? 飲んでみて、次回はどうする?"],"……궁에서 나를 백작이라 부르든 애송이라 부르든 상관없어. 그래서 그만두는 게 아니야.":
["“It doesn’t matter if you call me a cousin or a clerk in the palace, so I don’t stop.","「宮殿で私を伯爵と呼ぶか、愛情と呼ぶかは関係ないので、あきらめない。"],"가문의 열쇠를 넘긴 뒤에도, 주인과 집사는 마지막 영수증 한 장을 놓고 한참이나 다퉜습니다.":
["Even after handing over the keys, master and butler argued at length over one final receipt.","屋敷の鍵を引き渡した後も、主と執事は最後の領収書一枚をめぐって、しばらく言い争っていた。"],"그걸 봤어? 리본까지 새로 묶었는데! 자, 열어 봐. 마지막 달걀은 네 거야.":
["I’ve got it up to the ribbon! now, open it. the last egg is yours.","見た? リボンまで新しく縛られた! さあ、開けて! 最後の卵は君だ。"],"그런데 그 셋의 장례를 죄다 네가 치렀다지? 난 그게 훨씬 구미가 당기는데.":
["And you have done all the three funerals? I’m much more stunning.","葬儀は3人で行ったのだろうか?それ以上に、お前が埋葬したのだろうか?"],"그을음이 묻은 시엘의 손바닥 위에 푸른 보석이 박힌 가문의 반지가 놓여 있다.":
["On the handbone of Ciel, he was buried, a family ring with blue jewelry.","シエルの手のひらには、青い宝石をかぶった家族の指輪が置かれています。"],"난 스네이크야. 장갑이 마음에 든 저 애는 와일드고. ⋯라고 에밀리가 말했어.":
["I'm Snake. the boy who likes the gloves is wild. - Emily said.","手袋が好きな男の子はワイルドだよ、エミリーは言った。"],"네가 맡겨 둔 열쇠로 열었어. 꽃 한 송이 보러 가는데 매번 사람을 깨워야 하나?":
["You have opened the key you have given.Do you need to wake up people every time they go to see a flower song?","あなたがたに与えられた鍵で開いたのだろうか? 花の歌を見に行くと、毎回人を目覚めさせる必要があるのだろうか。"],"눈치가 좋은 줄 알았는데, 의외의 것을 묻네.\\n시엘이 반대쪽 손도 내민다.":
["I thought it was good to see, but I asked something extraordinary. \\Neil also puts the opposite hand in.","見た目は良く、不思議なことを尋ねる――ニシエルも反対の手を振り回す。"],"뚜껑 안쪽은 어떠십니까? 장난감을 꺼내는 순간에 한 번은 눈에 들 테니까요.":
["What about the cover inside? because you will see it once when you get out of the toy.","どうしたの?おもちゃを脱ぐ瞬間、目に浮かび上がる。"],"마음에 들었다잖아. 첫 급료에서 장갑 값을 떼면 주인이 너무 옹졸해 보이겠지?":
["If you have a first-class handworm, the owner will look too much?","初級の手袋を手に入れたら、主人公はあまりにうまくいくのかな?"],"범인을 짐작하신 쪽에 책갈피가 꽂혀 있더군요. 결말은 마음에 드셨습니까?":
["You’ve got a book on the side of the assassin’s guess.Do you like the end?","犯人の側に書類が詰まっていると推測したところで、結末は気に入ったのか?"],"서재에서 시엘은 세바스찬에게 미군 출신을 셰프로 고용하려는 이유를 묻는다.":
["In the story, Ciel asks Sebastian why he wants to hire a US-born chef.","シエルはセバスチャンに、なぜアメリカ軍のシェフとして雇うのかと尋ねる。"],"선천적인 천식이셨군요. 고작 이런 위태로운 숨을 숨기고 지금까지 버티셨단 말입니까.":
["You have been a native asthma, you have just hidden this dangerous breath and survived so far.","生まれつきの喘息だったのに、これまでこんな危険な呼吸を隠して生き延びただけだ。"],"세바스찬이 램프를 바짝 가져왔다. 시엘은 말없이 심지를 쑥 내려 불을 죽였다.":
["Sebastian brought the lamp down, and Ciel dropped his heart down and killed the fire.","セバスチャンは灯をひっくり返し、シエルは言葉なく心をひっくり返して火を殺した。"],"세바스찬이 손님 역을 맡습니다. 장갑을 벗는 손의 순서가 지난번과 다릅니다.":
["Sebastian takes the guest role. hand-out order is different from the previous time.","セバスチャンはゲストの役割を担う。手袋を脱ぐ手順は前回とは異なります。"],"소마 님께서 그러고 싶어 하십니다. 제가 먼저 열면 발소리를 듣고도 아쉬워하시더군요.":
["Soon, I would like to do so. - When I opened first, I could hear the foot sound.","神様は、最初に開いたとき、足の音を聞くのを望んでいました。"],"소매를 걷고 천 끝을 비벼야 할 걸. 장갑 낀 손으로는 올이 풀리는지 모르거든.":
["You have to walk the shell and light the thousand ends. I don't know if the hand in hand is leaving the oils.","手を伸ばして、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手のひらで、手"],"손님들 성함을 적은 쪽지가 그대로군요. 오늘은 꺼내실 일이 없으셨나 봅니다.":
["I think you have a little bit of the guest, and today you don’t have anything to get out.","ゲストの手紙がかわいそうで、今日は出ることはない。"],"스네이크는 벌떡 일어섰다. 손에 쥐고 온 편지를 내미는 데는 한참이 더 걸렸다.":
["Snake stood up and took a lot more to get the letter in his hand.","スニークは、目が覚めて、手のひらに持って来た手紙を引き出すのに、もっと時間がかかりました。"],"시엘, 네가 또 왔으면 이번엔 아무것도 묻지 않고 그냥 옆에 앉아 있었을 텐데.":
["Ciel, if you were coming again this time, I would have been sitting next to you without asking anything.","シエル、もしあなたがまた来たら、今回は何も尋ねず、ただ隣に座っていたはずだ。"],"시엘, 잘해라. 리지가 보고 있다. ……응원한 게 아니다! 내 매제가 되려면 그 정도는 해야지.":
["Ciel, do it well. – Ridge is looking at. – It’s not a stimulation! – I have to be the magistrates.","シエル、いいね!リジーは見ている・・・励ましなことじゃない!マジになるためにはそれほどしなければならない。"],"시엘은 심사표를 접어 견본 상자에 넣고, 상장을 받는 상대에게 고개를 숙입니다.":
["Ciel puts the test sheet into the sample box, and heads to the opponent that is marked.","シエルは、試験表を押し、サンプルボックスに置き、指標を受けた相手に頭を振る。"],"시엘은 주머니 속 남은 반쪽을 매만졌다. 투박하게 뜯긴 종이 결이 손끝에 걸렸다.":
["Ciel caught the remaining half in his pocket, and a hardly scratched paper was thrown on his finger.","シエルはポケットの残りの半分を押しつけ、ひどく切った紙が手首にぶつかった。"],"시엘이 받은 상장이 찻잔 옆에 놓입니다. 에드워드가 박수를 마치고 자리에 앉습니다.":
["Ciel's receiving sign is placed next to the cup. Edward ends his praise and sits on his seat.","シエルが受け取った記号は、カップのそばに置かれ、エドワードは褒め言葉を終え、座る。"],"어느 날의 물건을 보시겠습니까? 저희는 첫 납품분부터 같은 규격에 가문의 이름을 걸었습니다.":
["We have taken the name of the family on the same standard from the first delivery.","いつの日か見たいですか? 私たちは最初の配達から同じ規格で家族の名前を取りました。"],"영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.」":
["I want to return to you the command and work that was temporarily returned to the king in a relationship without the prince.\"","王様の関係で一時的に王様に返された王位と働きをあなたに返すことを望んでいます。"],"오늘 밤엔 우리랑 한 바퀴 돌자. 온실 지붕에 달이 걸리는 걸 너한테도 보여 주고 싶어.":
["Let us go around with us tonight, I want to show you that the moon takes on the greenhouse roof.","今夜、私たちと一緒に一歩回り、温室の屋根に月がかかることをあなたにも示したい。"],"오늘은 작은 잔으로 줘. 아까부터 한 모금 마실 때마다 잉크가 손등에 묻잖아.":
["Today give it a small cup. Every time you drink one piece of water from the beginning, the ink is swallowed in your hand.","今日は小さなグラスで、先から1個のコレクションを飲むたびにインクが手のひらに浸す。"],"이 품목의 전표는 몇 장 없겠군. 다른 전표로 두께를 늘릴 생각은 마. 그대로 올려.":
["There are no other items in the list.Do not think about increasing the thickness of the other item.","数枚の本は、この項目の総表はありません.他の総表で厚さを増やすことを考えてはいけません.それと同じように上昇してください。"],"이번에는 도련님의 차례입니다. ‘상태’를 여시면 컨디션과 그간의 성과를 보실 수 있습니다.":
["This time, it is your turn to “the state,” you can see the condition and its outcome.","今回は「状況」を開くと、条件とその結果を見ることができます。"],"잘했어, 시엘. ……그렇다고 리지의 옆자리까지 네게 양보하겠다는 뜻은 아니야.":
["Well, Ciel. ... That doesn’t mean I’ll give you up to the side of Ridge.","まあ、リジーの隣にいるわけじゃないよなぁ～"],"잠깐. 그늘에서는 잘 안 보이잖아. 견본을 빛이 드는 자리로 좀 옮겨 줘.":
["You don’t see it in the shadow. – Let the sample be moved to a lighting place.","影によく見えないので、光の場所にサンプルを移動してください。"],"점수 차이가 크지는 않군. 이번 인증은 저쪽이 받았지만, 평가표를 두고 갈 이유는 없어.":
["This is not a big difference. this certificate was received there, but there is no reason to go for the rating.","ポイントの違いは大きいわけではないが、この認証はそこから受けたが、評価を残す理由はない。"],"정원 쪽으로 열겠습니다. 서풍이라 빗물이 책상까지 들이칠 염려는 없을 겁니다.":
["I will open to the garden.West winds, rain water will not be worried about going to the table.","庭に向かって開きます. 風西で雨水がテーブルまで流れることを心配するな。"],"좋아. 이 아이가 집에서 D를 잃어버렸다고 치자. 그럼 남는 B는 어느 집에서 왔지?":
["Well, let’s say that this child has lost D in the house. then what other B is from?","では、この子がDを失ったと言いましょう.その後残りのBはどこから来たのでしょうか?"],"주인어른을 지켜 드리지 못한 몸으로 다시 이 방에 들어서려니, 고개를 들 면목이 없습니다.":
["To enter this room with the body that has not been protected by the master, there is no head-to-head.","主人公を守らない体で再びこの部屋に入るなら、頭を上げて毛がない。"],"첫 주문서부터 마지막 상자까지 가져왔습니다. 제가 고른 것만 보시고 결정을 내리실 필요는 없지요.":
["I've brought it from the first order to the last box. I just have to see what I chose and don't have to make a decision.","最初の注文から最後の箱まで持って来たので、選んだものだけを見て決断する必要はありません。"],"침실로 돌아왔을 때 시엘은 베갯잇 끝을 손가락 사이에 팽팽하게 말아 쥐고 있었다.":
["When he returned to the bedroom, Seal was holding the end of the beam between his fingers.","寝室に戻ると、シエルはベンチの端を指の間に伸ばして抱いていた。"],"팬텀사가 아직 갖춰야 할 것이 있군. 견본과 이 품목의 실적을 함께 살펴봐야겠어.":
["The fancy has something to have yet to equip. I need to look at the samples and the performance of this item together.","ファンタムサはまだ何かを装備しなければならないので、サンプルとこの項目の実績を一緒に見る必要があります。"],"품에 안기는 감촉이 좋습니다. 귀 뒤의 솔기도 한번 만져 보십시오. 이 솔기만 손끝에 걸립니다.":
["It is good to touch the hand in your arms. Touch the sun behind your ears once, this sun takes only on your finger ends.","腕に触れるのは良いです 耳の後ろのソルも一度触ってください このソルだけが指端にかかります。"],"프란시스 고모님이 말씀하셨어. 반격할 기회는 상대가 공격해 왔을 때라고.":
["Aunt Frances told me that the time to strike back is when your opponent attacks.","フランシス叔母様はおっしゃった。相手が攻めてきた時こそ、反撃の好機だと。"],"현장 약도에 빈칸을 남겨 두셨군요. 아직 확인하지 못한 증언은 제가 따로 묶겠습니다.":
["I have left the vacancy on the scene.The evidence that I have not yet confirmed will be attached to me.","現場に空っぽの箱を残して、まだ確認されていない証言を私自身に結びつける。"],"회랑 밖에서 의전관이 백작의 마차를 불렀다. 대답이 없어 한 번 더 불렀다.":
["The parliamentary officer called the county's car outside of the tour, and no answer, he called again.","会場の外で議員が伯爵の車を呼び、答えはなかったので、もう一度呼んだ。"],"……선천적인 천식이셨군요. 고작 이런 위태로운 숨을 숨기고 지금까지 버티셨단 말입니까.":
["You’ve been a noble asthma, you’ve just hidden this dangerous breath and have survived so far.","天才的な喘息だったのに、これまでこの危険な呼吸を隠して生き延びただけだ。"],"「영주가 없는 관계로 왕가에 일시적으로 반환되었던 영지와 작위를 그대에게 반환하고자 합니다.」":
["“I want to return to you the command and work that was temporarily returned to the king in a relationship without the prince.”","「王様の関係で一時的に王様に返された王位と働きをあなたに返したい。"],"가게는 평소대로 열어 둬. 오늘부터 저 배가 닻을 내리는 항구마다 우리 물건을 깔겠다.":
["We will open the store as usual. from today we will put our goods on every port that the ship is down.","店はいつものように開いて、今日からその船が降りる港のすべての物品を整理します。"],"견본의 치수는 여기에 적었습니다. 지난번 납품 기록을 곁에 놓으면 그대로 맞을 겁니다.":
["The size of the sample is written here. if you put the last delivery record next, it will be right.","サンプルのサイズはここに記載されています. 過去の配達記録を付けてあれば、正しいでしょう。"],"그럼 이번엔 제가 읽는 쪽으로요! 내일 꽃이 피면 제가 제일 먼저 달려가서 알려 드릴게요!":
["So this time I’m reading! tomorrow if the flowers flourish, I’ll run first and tell you!","明日、花が咲くなら、私は最初に走ってあなたに伝える!"],"급료와 휴일이 있고, 설탕과 홍차도 넉넉히 드립니다. 일을 잘하시면 급료도 올라갑니다.":
["There are classes and holidays, you have enough sugar and red tea. if you do good work, the classes will also rise.","給料と休日があり、砂糖と紅茶も十分に提供します.仕事がうまくすれば給料も上昇します。"],"누워 있으면 어느 쪽이 저희 견본인지 저도 모르겠군요. 두 마리를 다 세워 보시겠습니까?":
["I don’t know which one of the samples are, do you want to put both?","どちらが私たちのサンプルなのか、私は知らないだろうか? 二つを全部見てあげたいのか?"],"담당관이 팬텀사의 출품 품목에 증서를 내립니다. 시엘은 증서를 받아 들고 짧게 인사합니다.":
["The officer will issue a certificate on the presentation item of the Phantom Company. Seal will accept the certificate and greet shortly.","担当者はファンタム社のプレゼンテーションの項目に証明書を提出し、シエルは証明書を受け入れ、短く挨拶します。"],"도살장 옛 장부를 봐. 열두 번째 줄. 사람 이름은 없고 짐 무게만 적혀 있을 거요.":
["The old chapter of the murderer, the twelfth line, will not have a name and the weight of the baggage.","殺人場の古い ⁇ を見よ、第12行、人の名前がなく荷物重さだけが書かれている。"],"동부에서 들어온 전보에 수신인이 빠져 있습니다. 시엘은 봉투에 남은 우편 소인부터 살핍니다.":
["The receiver is missing in the telephone entering from the east. Seal is missing from the postpone left in the bag.","東から入った電話には受信者が欠けているシエルは、ポケットに残っている郵便物の子供から逃げ出している。"],"뚜껑에 우리 문장이 찍혀 있을 텐데. 그 판자만 떼어 두고 나머지는 조합에 넘겨.":
["The cover will be written on our page. only the sheet is left and the rest is transferred to the combination.","封筒に文字が貼り付けられ、その紙だけを切り離し、残りは組み合わせに渡す。"],"마지막 손님 말고, 아무것도 안 사고 나간 손님 이야기를 좀 들어야겠어. 우리가 모르는 건 그쪽이니까.":
["I'm not the last guest, but the guest who did nothing and did not know what you were doing.","最後のゲストではなく、何も買わなかったゲストの話を聞くべきだ、私たちは知らないからだ。"],"봉투랑 문패에 똑같은 이름이 있어. 이번엔 제대로 왔네. ⋯라고 오스카가 말했어.":
["The box and the doorboard have the same name.This time it came right, Oscar said.","袋とドアパックには同じ名前があるが、今回は正しく来た」とオスカは言った。"],"서쪽 창을 조금만 열어 둘까? 누가 오는지 우리가 먼저 알 수 있어. ⋯라고 와일드가 말했어.":
["“Will we open the western window a little? we can first know who comes,” said Wild.","西の窓を少しだけ開けようか?誰が来るのか、まずわかるだろう。"],"세 통의 봉투가 책상에 놓였다. 세바스찬이 날짜를 가린 뒤 모래시계를 뒤집었다.":
["Three bulbs were placed on the table, and Sebastian turned his sand watch after covering the date.","テーブルに3つのバッグが置かれ、セバスチャンは日付をカバーして砂時計を振り回した。"],"세바스찬이 주인 앞에 한쪽 무릎을 꿇었다. 늘 장화를 벗겨 주던 바로 그 높이였다.":
["Sebastian was on one side of his master’s knees, the high that he always had removed the armor.","セバスチャンは主人の前でひざまずいて、いつもその高さが、機器を脱ぎ出した。"],"시엘, 네 자리를 비워 뒀어. 저번에는 햇빛 때문에 눈 찡그렸잖아. 여긴 어때?":
["Seal, I left your place empty. last time you shut your eyes because of the sunlight.","シエル、お前の席を空かせてくれました.昨日、太陽の光で目を閉じたんだ?ここはどうですか?"],"시엘이 케이크 받침을 사분의 일 바퀴 돌렸다. 검은 왕 뒤에 흰 비숍이 숨어 있었다.":
["Ciel turned the cake to a quarter of the day, and behind the black king was a white bishop hidden.","シエルはケーキの調理を四分の一の日を回し、黒王の後ろには白いビショップが隠れていた。"],"얼굴만이라도 볼 수 있어? 우리가 왔다고 조커한테 전해 줘. ⋯라고 오스카가 말했어.":
["“You can see the face, let me tell Joker that we’re coming,” Oscar said.","ジョーカーに、私たちが来たことを伝えてください」とオスカは言った。"],"오늘은 제가 손님이었던 덕을 봤군요. 마지막 한 모금까지 대접을 잘 받았습니다, 도련님.":
["Today I was a guest, and I received the last collection of money.","今日は、お客さんのおかげで、最後の収集までお得な扱いを受けました。"],"이 고기, 지금 썰면 육즙 다 빠집니다! 제가 구운 건 아니지만 딱 오 분만 벌어 주십쇼!":
["This meat, now cutting all the juice! I don't cook it but just come to make it!","肉を食べて、今は切る! すべてのジュースが消えていきます! 私は焼いたことではないが、ただ来て、おまえらを稼ぐだけです!"],"잉크병도 왼쪽으로 옮기겠습니다. 그래야 이번에는 어느 쪽이 범인이었는지 알겠군요.":
["I'll move the ink ball to the left so you know who was the murderer this time.","左側にインクボールを移動するので、今回は誰が犯人だったかわかる。"],"잠깐, 내가 놓을게. ……견본은 두고 그 밑을 잡아. 받침대가 흔들리잖아.":
["I will put it down. . . . and take the sample below. the bed is shaking.","しばらくして・・・サンプルを置いて下に押し付けます。"],"잠깐. 둘이서 멋대로 정하지 마. 난 안 해.\\n사람 죽이던 손으로 메이드 일을 어떻게 하라고.":
["I don’t do it. – I don’t do it. – How to do the work of Made with the killing hand?","二人でいいな、やらないよ～と、殺した人の手でメイドの仕事をどうするか。"],"장부 순서대로 하나, 둘…… 아! 그럼 잉크가 물에 번져도 어느 화분인지 금방 알겠어요!":
["I’m sure I’ll get one, two... Oh! so I’ll know what the ink is in water!","水に浸り、そのまま、二つ・・・ああ、インクが水に吹き込まれるなら、すぐにどんなお菓子かわかるよ!"],"저희 집 계단에서 시엘 님이 내려오시는 소리를 아직도 기억합니다. 왕자님께서도 그러시겠지요.":
["I still remember the sound of Seal coming down from our house stairs, and Prince will.","シエルが階段から降りてくるのを覚えていますが、王子もそうでしょう。"],"제가 겨울에 접붙인 가지예요! 잎이 나니까 어느 게 제 것이었는지 도무지 못 찾겠어서요.":
["I’m in the winter, I don’t know which of my leaves is.","冬に着いたものだ! 葉があって、どちらが私のものか見つからない。"],"제게 맡겨 주신 창문이십니다요. 제가 닦아 둘 테니 돌아오시면 꼭 봐 주시라요!":
["I’m going to clean them, and you’ll see me when you come back.","窓を掃除して、帰って来たら見てくれ!"],"제보자 앞으로 보낸 봉투가 아직 돌아오지 않았습니다. 답신이 오면 이 칸부터 먼저 살피시지요.":
["The package that is sent to the supplier has not yet returned.When the answer comes, look at this canon first.","送信された箱はまだ戻ってこないので、返信が来たら、まずこのカンから見て下さい。"],"죄다 오른쪽 모서리를 뜯었어. 손잡이까지 붙여 줬는데 그건 하나같이 새것이고.":
["I cut the right corner, and I put it up to my hand, but it was a new one.","右の角を切ったが、手袋まで付けたが、それは一つ新しかった。"],"지난번에 도련님이 여기서 오래 서 계셨잖아요. 그래서 저쪽 벤치를 통째로 들고 왔어요!":
["You’ve been there for a long time, so I got the whole bank here!","久しぶりにここにいたので、バンチを全部持って来ました!"],"첫 종소리에 활이 반 박자 늦습니다. 시엘은 반주자의 손끝을 보며 마지막 소절을 마칩니다.":
["The arrow is half-sweeping late at the first sound. Ciel looks at the midwheel's fingertips and finishes the last sound.","最初の音に弓が半点遅れ、シエルは半分の指端を見ながら最後の音を終える。"],"타나카가 서재 문을 두드렸다. 아직 정양 중인 그는 모자를 벗으며 세바스찬을 불렀다.":
["Tanaka knocked at the library door. Still convalescing, he took off his hat and called to Sebastian.","書斎の扉をノックしたのはタナカだった。まだ療養中の彼は帽子を取り、セバスチャンに声をかけた。"],"편지를 가져온 아이는 마차가 대문을 빠져나갈 때까지 현관 앞에서 모자를 꼭 쥔 채 서 있었다.":
["The child who brought the letter was still standing with a hat before the door until the car came out.","手紙をもたらした少年は、車が大門から出るまで、前門の前に帽子をかぶって立っていた。"],"피니안이 책을 품에 꼭 껴안았다. 소년의 팔 안에서 양장본 표지가 푹 우그러졌다.":
["Pignan hugged the book in his arms, and the boy's arm was a handful of the book.","フィニアンは本を抱きしめて、男の子の腕の中には、 ⁇ 印がひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっそりとひっ"],"가지를 이쪽으로 유인할까요? 전 이 문으로 들어올 때 바로 꽃이 보였으면 좋겠는데, 도련님은요?":
["I would like to see the flowers right when I enter this door, do you?","入り口に花が咲くのを見たかったらいいのに、どうした?"],"간식을 하나 고르면 드시기 전후의 수치를 비교할 수 있습니다. 오늘은 값만 알아두고 ‘뒤로’ 돌아가겠습니다.":
["If you choose one snack, you can compare the numbers before you eat after. Today we will only know the value and go back.","スナックを選ぶと、食べる前の数値を比較することができます. 今日、値だけを知り、「後ろ」に戻ります。"],"그럼 날이 개면 말의 머리가 저절로 보이나? 너희 가게에서 제일 잘 보이는 물건이 가격표야.":
["So the day when the dog's head looks like a slurry? the best thing you see in your store is the price list.","あなたがたの店で最も見えるものは、価格表です。"],"그럼 내일 아침에 다시 올게. 네 장갑은 조금만 더 빌려 줘. 와일드가 벌써 잠들었어.":
["So I’m coming back tomorrow morning.Let me borrow your gloves a little more.Wild is already asleep.","明日の朝、また来てくれます! 手袋を少しだけ貸してあげてください! ワイルドはすでに眠っている。"],"네가 자주 고르던 건 서랍에 따로 넣어 뒀어. 아무한테나 내주면 섭섭할 테니까.":
["You often choose to put it in your box, and you will be sorry if you give it to anyone.","よく選んだものは、箱の中に置いておくので、誰かに渡すと、苦しむでしょう。"],"다들 내 마차에서 자면 되잖아! 참, 시엘한테 전해 줘. 지난번 체스는 아직 내 차례라고!":
["I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car. - I'm going to go to the car","みんなで寝てます! シエルに伝えてください! チェスは今度も僕の番だ!"],"달빛이 드는 창가에 시엘이 서 있고 세바스찬의 손 위로 푸른 빛이 피어오른다.":
["On the moon-lighted window, Ciel stands and a blue light flourishes over Sevaschhan’s hand.","月の光の窓にシエルが立って、セバスチャンの手の上に青い光が輝く。"],"리지와 저녁을 먹고, 겨울이면 저택에 내려가고…… 그래. 어떻게 살지는 나도 궁금했어.":
["I went to the house in winter and I was wondering how I would live.","リジと夕食を食べ、冬に家に下りて・・・はい、どうやって生きるか、私も疑問に思った。"],"마지막 날짜 아래에 짧은 줄이 그어져 있었다. 저택이 불탄 뒤로 한 줄도 더해지지 않은 기록이었다.":
["The last date was a short line drawn below; the house was not added to a line after the fire.","最後の日付の下に短い線が描かれていた、家が燃えた後も一行も追加されていない記録だった。"],"마지막 초가 흘린 밀랍이 크림에 닿기 직전이었다. 시엘이 접시를 제 쪽으로 당겼다.":
["The last second was just before the blurry dropped the cream.Seoul pulled the plate to me.","最後の瞬間が流れたミラブがクリームに触れる直前に、シエルは皿を私の側に引きつけた。"],"몸체는 제법 단단합니다. 손잡이가 문제군요. 어린아이가 쥐면 엄지와 검지가 닿질 않겠습니다.":
["The body is quite solid. the handheld is a problem. if the child holds it, the finger and detection will not be reached.","体はかなり硬い、手袋が問題だ、子供が抱きしめると、胸と検査に触れない。"],"배관공이 오면 바로 식당으로 들여. 오늘 저녁은 내가 자리를 옮기지. 서재에 상을 차려.":
["When the carrier comes, go straight into the restaurant.Today evening I will move my place.","トイレが来たら、直ぐにレストランに入って、今夜は座席を引っ越す。"],"분리해 두었습니다. 그중 세 개는 같은 날 만든 물건이라, 제작실에 그날 장부도 청해 두었지요.":
["Three of them were made on the same day, and I asked for a piece in the production room that day.","別々に置いておいたが、そのうちの3つは同じ日に作られた物件で、当日の製造室にも供給を求めていた。"],"서늘한 손끝이 겨우 닿았다. 세바스찬은 다른 손으로 침대 곁의 종을 세게 당겼다.":
["The thick finger end was hardly touched.Sevashan pulled the spider near the bed with another hand.","⁇ の指がほとんど触れず、セバスチャンは別の手でベッドのそばの種を固く引きつけた。"],"설탕은 하나. 그래, 오늘도 그걸로.\\n시엘이 서류에서 눈을 떼지 않고 잔을 받는다.":
["Sugar is one. yes, it is today.\\Nciel gets a glass without leaving his eyes from the papers.","砂糖は1つ!はい、今日もそれで・・・ニシエルは紙から目を離さずに飲みます。"],"소년은 제 이름이 소마 아스만 카다르라고 외치고는, 아그니를 데리고 저만치 가 버렸다.":
["The boy called my name Soma Asman Kadar, and took Agni and left me.","男の子は私の名前をソマ・アスマン・カダールと呼んで、アグニーと一緒に私を捨てた。"],"손님이야 우리가 적은 값에 샀지. 차액도 전단을 다시 찍는 비용도 팬텀사 앞으로 달아.":
["The guest, we bought it at a low price. the difference and the cost of re-cutting the front also fought forward by Phantom.","ゲストよ、私たちは低価格で買ったが、差も前線を再撮影する費用もファンタムサは先に走る。"],"시엘은 계약서를 돌려주고 마차를 불러야 할 날짜에만 동그라미를 쳤다. 경영 +6":
["Seal was only a time to return the contract and call the car. Management +6","シエルは契約書を返し、車を呼び出す日付にのみドグラミーを打った。"],"시엘은 편지를 구기지 않았다. 첫 장부 맨 뒷장에 칼같이 반듯하게 접어 끼웠다.":
["Ciel did not read the letter; he was proudly hanging as a knife on the back of the first hand.","シエルは手紙を聞き取らなかったが、最初の ⁇ の後ろに剣のように熱心に突っ込んだ。"],"시엘의 손이 스르르 풀렸다. 악마는 ‘다음번’이라는 거짓말을 차마 고쳐 말하지 않았다.":
["Ciel's hand was shrinked and the devil did not correct the lie \"Next time.\"","シエルの手は、スルーを解き放ったが、悪魔は「次回」という嘘を直すことなく言った。"],"엘리자베스가 상장을 받은 뒤 시엘에게 다가옵니다. 시엘은 악보를 덮고 그녀를 맞습니다.":
["After Elizabeth is given the sign, she approaches Ciel; Ciel covers the evil and takes her.","エリザベスが名付けられた後、シエルに近づき、シエルは悪魔を覆い、彼女に会う。"],"예, 같은 차로 올리겠습니다. 두 번째 잔을 청하시면 그날의 차는 합격이라고 여겨도 되겠습니까?":
["Yes, I will take it up on the same car. If you ask for a second cup, can you consider that the day's car is passed?","車で2回目を飲むと、その日の車が合うのか?"],"오늘 답신을 기다릴 분께는 차를 한 잔 더 내드렸습니다. ……저도 이제 제법 능숙해졌지요?":
["I have a drink of the car to the one who is waiting for his answer today. ...I’m well skilled now?","今日の答えを待つ人に、もう一杯の車をあげた・・・今も正しく熟練したのだろうか?"],"이 배가 언제 항구에 닿을까? 네 성정으론, 푸느라 저녁 산책도 거를 것 같네.":
["When will this ship reach the port? your heart, I think you’ll have a night walk.","いつこの船が港に到着するのか? あなたの性感、プーニャの夕食散歩も行われると思います。"],"이상하군요. 보통 사람이라면 벌써 몇 번은 정신을 잃었을 텐데. 어찌 아직 서 계십니까?":
["If you were a normal person, how many times you’d already lost mind.","普通の人なら、何回も心を失っただろう? どうして今でも立っているのか?"],"작위를 돌려받은 날 시엘은 복수를 포기했습니다. 세바스찬은 그 자리에서 주인의 영혼을 거뒀습니다.":
["On the day his title was restored, Ciel gave up his revenge. Sebastian claimed his master’s soul there and then.","爵位を取り戻したその日、シエルは復讐を捨てた。セバスチャンはその場で主の魂を受け取った。"],"작위의 환부는 차기 심의까지 보류합니다. 제출된 서류 일체는 왕실 서고에 보관합니다.」":
["The reward of the work is kept until the next consideration; all submitted documents are kept in the Royal Order.”","手紙の返還は次の審議まで保管され、提出された書類はすべて王室記録に保管される」"],"정원 끝까지는 아직 한 바퀴 남았습니다. 아까부터 자갈 위 발소리가 두 걸음씩 붙어 들리는군요.":
["There is still one round to the end of the garden, and from the beginning the foot sound goes up two steps.","庭の終わりまでまだ1回しか残っていませんが、前から2歩ずつ足の鳴き声が聞こえます。"],"찾으시는 해의 장부를 꺼내 두었습니다. 끈이 낡았으니 제가 조심스레 풀어 드리지요.":
["I have the sun’s clothes you are looking for.The thread is old, so I will carefully release it.","見つけた年の<unk>を取り出したので、ロープが古いので、慎重に解放します。"],"처음 두 번은 잘 굴러갔습니다. 세 번째에야 소리가 나는군요. 보십시오, 한쪽 바퀴만 멎었습니다.":
["The first two times went well. the third only sounded. see, I just run one round.","最初の2回はうまく走ったが、第3回だけ音が聞こえる。見よ、一輪しか鳴らなかった。"],"청방의 백이 나를 노린다더니. 제 손으로 길렀다는 올빼미까지 보낸 걸 보면 정보가 맞았군.":
["The chief of the chief was telling me that I had been sending it to the back of my hand, and I found it right.","手のひらをかぶって、手のひらをかぶって、手のひらをかぶって、情報が正しい。"],"해 질 무렵이면 저 창에 맞은편 지붕이 비칩니다요. 수상한 자가 없는지 항상 지켜보고 있습니다요.":
["When the sun is shining, the roof on that window is shining.I always watch if there is no suspicious person.","太陽が降ると、その窓の向こう側の屋根が輝くので、いつも疑わしい人がいないかを見ている。"],"「작위의 환부는 차기 심의까지 보류합니다. 제출된 서류 일체는 왕실 서고에 보관합니다.」":
["“The reward of the work is kept until the next consideration; all the documents submitted are kept in the Royal Order.”","「作品の返還は次の審議まで保管され、提出された書類はすべて王室記録に保管される」"],"견본은 제가 골랐으니 납품 상자는 그쪽에서 골라 보시죠. 첫 주문부터 기록을 다 가져왔습니다.":
["I have the sample, so I have chosen the delivery box from there. I have taken all records from the first order.","サンプルは私を選んだので、配達ボックスから選んでください.最初の注文からすべての記録を持ち込んだ。"],"그때 우리가 춤췄던 곡 말이야. 한 소절만 들려도 자꾸 시엘이 고개를 들던 게 생각나.":
["The song we dance, and I remember that she was still listening to the head.","歌いながら、一曲だけ聴いたが、シエルは頭をひっくり返した。"],"그럼 오늘 날짜를 쓰고 서명해 둬. 나중에 누가 읽든 어느 날 되짚어 낸 기억인지 알 수 있게.":
["Then write the date today and sign it so that you can see who later read or remember which day.","今日、日付を書き、署名して、誰が読んだか、いつの日に思い出したかを知るようになる。"],"그럼 초콜릿을 한 알 넣고 도로 닫아 보지요. 이번에는 선물을 받으시는 쪽입니다, 도련님.":
["Then put a cake and close the road. this time you get a gift, Mr. Doyle.","チョコレートを一杯入れて、道を閉め、今回はプレゼントを受け取る。"],"그자가 내 이름을 쓰는 동안 나는 그 얼굴을 한 번도 못 봤군. 마침 자리도 있다니, 가서 인사해야지.":
["I have never seen his face while he wrote my name, and there is a place to go and say goodbye.","彼が私の名前を書いている間、私はその顔を見たことがないし、まさに場所があるので、行って挨拶しなければならない。"],"꽃 이름을 떼어 낸 화분들이 온실 앞에 늘어섭니다. 마지막 두 화분에는 아직 봉오리만 달렸습니다.":
["The flower names are removed from the flower, and the last two flower are still depending on the flower.","花の名前を切り離した花は温室の前で増え、最後の2つの花はまだ花束だけに依存している。"],"내 얼굴 한 번 보지 않고 내린 처분이란 말이지. 좋아. 그럼 이번엔 내가 직접 얼굴을 들이밀고 묻겠어.":
["I’m not looking at my face, but this time I’ll look at it.","顔を見ないで下げたのは、あれ? さて、今回は私自身の顔を押して尋ねる。"],"단원들이 남긴 편지에서 백작의 이름을 읽은 스네이크가 런던의 타운하우스 문을 두드린다.":
["In a letter left by the members, Snake, who read the name of the Count, knocked at the city house in London.","メンバーが残した手紙で、スネイクはロンドンのタウンハウスのドアを叩き、伯爵の名前を読んだ。"],"도련님, 안쪽 서가를 정리하다 이 장부가 나왔습니다. 묶인 끈은 아직 옛것 그대로입니다.":
["The inner west is fixed, this line has come out. the bonded thread is still as old.","ドーシュ、西側を整理して、この部門が出てきた。結びついた線はまだ旧のようだ。"],"두 번역본에서 같은 문장의 주어가 서로 다르군요. 도련님께서 고르신 쪽을 들려주시지요.":
["The two translations are different from the same phrase, and you can tell the one you have chosen.","二つの翻訳で同じ言葉の贈り物が異なります. あなたが選んだ側を教えてください。"],"바람에 악보 귀퉁이가 들립니다. 시엘은 악보대의 집게를 누르고 반주자와 눈을 맞춥니다.":
["The wind sounds a bad corner. Ciel presses the wing of the bad and faces the eyes with the reversal.","風に悪の角が聞こえるシエルは悪の ⁇ を押し、半導者と目を合わせる。"],"받는 분이 직접 여실 텐데 칼을 쓰실 필요야 없지요. 리본을 한 번만 당겨 보시겠습니까?":
["You will have to take a knife, but you will have to take a knife.","手に入れる人は、自分で行って、ナイフを着用する必要はないだろうか? リボンを一度だけ引きつけようか?"],"불에 그을린 서신 세 통입니다. 왕실 인장이 바뀐 해를 기준으로 먼저 놓을 편지를 골라 보시겠습니까?":
["The three letters of the Greek in Fire. Do you want to choose the letter that will be first placed on the basis of the year that the royal sign has changed?","火にグレリンが書かれている3つの文字です. 王室の印が変わった年を基に最初に置く手紙を選択したいですか?"],"선대께서는 집을 비우실 때 제게 열쇠를 맡기셨지요. 도련님의 열쇠도 제가 간수하겠습니다.":
["You have given me the keys when you are empty, and I will keep your keys.","家を空けるとき、主は私に鍵を与えてくださったので、ドーシュの鍵も私に保管します。"],"쉬시라고 비워 둔 오후였는데요. 도련님께서 석탄 배달표를 세 번이나 검산하셨더군요.":
["The afternoon was a vacation.The coal supplier checked the coal tickets three times.","午後、休憩を休んでいたので、ドーシュは石炭の配達券を3回検査した。"],"시엘, 연습 좀 도와줘! 어제 저쪽 구석에서 춤을 췄는데 피아노 소리가 영 안 들렸어.":
["Ciel, help me practice a little! I was dancing in that corner yesterday but the piano noise.","シエル、練習を手伝ってください!昨日、その角で踊ったが、ピアノの音は聞こえなかった。"],"시엘이 상장을 받아 들자 엘리자베스가 박수를 보냅니다. 시엘은 그녀를 향해 고개를 숙입니다.":
["When Seal receives the sign, Elizabeth sends a praise.","シエルが手紙を受け取ったとき、エリザベスは祝福を送り、シエルは彼女に向かって頭を振るう。"],"식탁 위에 초가 열한 개입니다. 시엘은 장부를 덮고, 빈 의자 하나를 잠깐 바라봅니다.":
["The table is a second of ten dogs. Seal covers the boat, and looks at one empty chair for a moment.","テーブルの上に十数匹の犬がいるシエルは、カバーを覆い、空っぽの椅子を一瞬見てくれます。"],"식탁에 앉아도 문부터 살피게 되네요. 뭐, 도련님이 맞은편에 계실 땐 그냥 먹지만요.":
["You can sit on the table and look at it from the door.When you are on the right side, you just eat.","テーブルに座って、ドアから見て、まあ、ドライバーが正面にいるときは食べるだけだ。"],"아그니 씨, 여기는 남의 집이고 당신은 손님입니다. 적어도 식사만큼은 앉아서 받아 주셔도 됩니다만.":
["Mr. Agni, here is the house of others and you are a guest. but you can sit down and accept it at least as much as you eat.","アグニーさん、ここは他人の家で、あなたはゲストです。少なくとも食事の量ほど座って受け取ることができます。"],"올해의 케이크 장식은 설탕으로 만든 체스 말입니다. 한 칸 움직이면 곧장 무너질 자리입니다.":
["This year’s cake decoration is a chess made of sugar, where one can move directly.","今年のケーキの装飾は砂糖で作られたチェス馬です。一カンが動くと、すぐに崩壊する場所です。"],"이건 입을 딱 벌린 사자처럼 생겼죠? 옆을 살짝 누르면요…… 자, 도련님도 해 보세요!":
["It looks like a lion that is just open to the mouth. - Try it a little next... Oh, you do it too!","口を閉じたライオンみたいな感じですか? 横に少し押して・・・よー、おまえもやってみろ!"],"잠시 차를 드시겠습니까, 도련님? ‘상점’을 여시면 오늘 나온 간식과 가격을 보실 수 있습니다.":
["If you open the “shop” you can see the snacks and prices that come from today.","車を少し食べたいですか? 「店」を開くと、今日のスナックと価格を見ることができます。"],"저 화분만 받침 아래 흙이 말랐어. 방금 옮긴 거지? 리지, 그 옆에서부터 찾아보자.":
["The ground was dry under that throw. - You just moved? - Lidi, let's look from the side.","こっちの下に、あの ⁇ が乾いたのだろうか? まさに引っ越したのだろうか? リジー、そばから見てみよう。"],"저, 이제 안경을 벗어도 도련님 발소리는 압니다요! 언제 돌아오셔도 제가 먼저 맞을 겁니다요.":
["I know when you get back, I will be right first.","メガネを脱ぐと、いつでも戻ってくるの? 最初に戻ってくるの?"],"저분이 묻는 건 이 물건을 몇 번 납품했느냐는 거야. 전표를 줘. 내가 보여 드리지.":
["He asks how many times you have delivered this item. give me a full record.","何回、この商品を渡したのか? 手紙を渡して、見せてくれます。"],"접시 가장자리에 흰 설탕이 조금 묻어 있었다. 시엘은 검지로 그것을 닦다가 촛불을 보았다.":
["A little white sugar was buried on the edge of the plate. Ciel washed it with a detection and saw the candle.","皿の端には白砂糖が少し埋められていたので、シエルは検査でそれを洗い流し、ろうそくを見た。"],"주방에서 센 건 흰 말 열다섯 개였지? 여기 열넷밖에 없어. 접시 아래 그 폰부터 꺼내.":
["There were only ten white horses in the kitchen, right? there are only fourteen.","キッチンで、あの白い馬が十五匹だったのだろうか?ここに十四匹しかないのだろうか?皿の下から電話から取り出して。"],"체조실 바닥에 분필선이 세 줄 그어져 있었다. 세바스찬이 회중시계의 뚜껑을 열었다.":
["The floor of the gym was drawn three lines.Sebastian opened the cover of the meeting clock.","テーブル室の床に三行の分布線が描かれていたセバスチャンは会議時計のカバーを開いた。"],"할아범이 돌아오면 맡기려고 따로 빼 뒀어. 예전처럼 할아범이 먼저 훑어봐 줘.":
["When the grandfather returns, let him go away and take it out as the grandfather first.","祖父が帰ってきて、おじいちゃんが先に見てくれ。"],"……이상하군요. 보통 사람이라면 벌써 몇 번은 정신을 잃었을 텐데. 어찌 아직 서 계십니까?":
["If you were a normal person, how many times you’d already lost mind.","普通の人なら、何回も心を失っただろうか? どうして今でも立っているのか?"],"가게에서 가져온 빈 상자입니다. 손님들이 알맹이만 꺼내 가고 이건 두고 갔다더군요.":
["The empty box was taken from the store. guests only took out the allies and left it.","店から持ち込んだ空っぽの箱で、ゲストはアルシュだけを取り出し、これを残した。"],"경리 담당이 인수증 두 장을 대조하게 됐다. 새 재주문의 미납 부담이 개당 £1로 감소한다.":
["The royal manager has been opposed to two acquisitions. the unpaid burden of the new order is reduced to £1 per person.","パリ担当者は2つの買収章に対立し、新注文の無償負担が1ポンドあたり減少する。"],"그 빨간 봉투도 두고 가. ……그 눈빛은 뭐야? 읽을 작정이면 안경부터 가져오라고 했겠지.":
["I’m going to get it with the red box. – What is that eye? – I’m going to read it, and I’m going to take it from my glasses.","赤い袋も置いて行け・・・その目は何ですか?読むつもりなら、メガネから取り出すように言ってた。"],"끝까지 자리를 지키셨군요. 다음 순에는 차를 일찍 올리겠습니다. 오늘은 평소보다 피로가 짙으셨습니다.":
["You kept your seat until the end. I will lift the car early on the next line. today you were tired than usual.","車を早めに乗せて、今日はいつもより疲れた。"],"나도 체스는 두고 싶고, 네가 오기 전에 네 말을 옮겨 버리긴 싫잖아! 그래서 하나 더 샀어!":
["I also want to have chess, and I don't want to move your words before you come! so I bought one more!","チェスをやりたい! 来る前に、お前の言葉を引っ越すつもりはない! だからもう1つ買った!"],"납품하는 쪽과 받는 쪽에 인수증을 한 장씩 보냈다. 새 재주문에서 개당 대금 +£1.":
["I sent a copy of the receiver to the delivery side. a re-order fee per person +£1.","配達者と受信者に1枚の買収書を送りました 新しい再注文で個別料金 +£1"],"도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.":
["You have the ability to protect you, in a position that cannot be betrayed, and you have verified your ability.","あなたを守る能力があり、裏切れない状況にあり、あなたがその能力を直接証明した人です。"],"도련님이 고르신 넥타이는 따로 싸 뒀습니다요. 구겨지면 이 메이드에게 맡겨 주시라요!":
["You have the cravate you have chosen, and if you are getting it, let me give it to this Midi!","コートを買ったら、メイドに渡す!"],"도련님이 오 분 더 기다려 주신 덕에 저번 고기는 잘 됐죠. 예? 태웠냐고요? 아닙니다?!":
["I'm sure you've got the meat well, so you've burned it?","久しぶりに食べて、お肉が焼かれたんですね～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～"],"마지막 찻잔이 내려앉고 시엘의 이름이 불립니다. 시엘은 원고를 뒤집어 놓고 자리에서 일어납니다.":
["The last cup is sitting down and the name of Ciel is called. Ciel turns the scroll and rises from his place.","最後のカップが下りて、シエルの名前を呼び、シエルは本書を振り返って座席から立ち上がる。"],"볕이 드는 쪽하고 그늘진 쪽 중에서 내가 고를 수 있게 해 뒀어. ⋯라고 에밀리가 말했어.":
["“I’m allowed to choose between the sunshine and the shadow,” Emily said.","太陽の向こうと影の向こうから、私は選択できるようになった」エミリーは言った。"],"상순·중순·하순 중 바꿀 칸을 누르고 활동을 선택합니다. 카드의 £ 표시는 해당 활동의 비용입니다.":
["Press the change box and select the activity.The £ indication on the card is the cost of the activity.","正直・中直・下直の間で変更するカンボンを押して活動を選択します.カードの £ はその活動の費用です。"],"서재 문을 여는 열쇠가 찻숟가락과 짤랑 부딪혔다. 눈을 감고 있던 시엘이 먼저 물었다.":
["The key to the door opened the glass and the shell, and Ciel, who had closed his eyes, first asked.","店のドアを開けた鍵が、ガラスと ⁇ を打った。目を閉じていたシエルはまず尋ねた。"],"세바스찬, 마차를 돌려. 이 일련번호가 어느 역으로 납품됐는지 장부부터 털어야겠어.":
["Sivaschan, return the car. I will tell you from which station this serial number was delivered.","セバスチャン、車を返して、このシリーズ番号がどの駅に届いたかを、店員から伝えるべきだ。"],"시엘 님, 저 문은 두 번 두드리시면 됩니다. 한 번이면 제가, 두 번이면 소마 님께서 나오십니다.":
["Ciel, you can double the door; one time I, and two times Soema God will come out.","シエルよ、その門を二度打つべきだ、一回はわたし、二回はソマ神が出てくる。"],"심사위원이 같은 점수를 받은 두 사람의 이름을 차례로 부릅니다. 시엘이 상대와 나란히 서서 인사합니다.":
["The judge calls the names of two people who have received the same score in order. Ciel stands next to the opponent and greetes.","審査員は同じ点数を得た2人の名前を順番に呼び、シエルは相手のそばに立って挨拶する。"],"심사위원이 엘리자베스의 이름을 부릅니다. 시엘은 심사표를 확인한 뒤 그녀에게 박수를 보냅니다.":
["The judge calls Elizabeth’s name. Ciel checks the scorecard, then applauds her.","審査員がエリザベスの名を呼ぶ。シエルは採点表に目を通し、彼女に拍手を送った。"],"심사표의 두 점수를 확인한 시엘이 원고를 접습니다. 에드워드의 이름이 불리자 먼저 박수를 보냅니다.":
["Ciel, who confirmed the two points of the score, gets the note. When Edward's name is called, he first sends congratulations.","審査表の2点を確認したシーエルは、エドワードの名前が呼ばれたとき、まず褒め言葉を送る。"],"어느 알을 골라도 맛은 고릅니다. 포장지 끝을 조금만 더 남기면 작은 손으로도 잡고 풀 수 있겠군요.":
["If you choose any egg, it’s good to taste.If you leave the packaging end a little more, you can hold it with a small hand and release it.","どの卵を選ぶか味が選ばれます.パッケージの端を少しずつ残すと、小さな手で手を握って解き放つことができます。"],"어이쿠, 벌써 꼬마 손님 하나가 멈췄네. 백작한테는 비 오는 날마다 차를 대접해야겠어.":
["Aiku, a little guest is already stopping.The count must take care of the car every day that rains.","アイクー、もう1人のゲストが止まっているので、伯爵に雨の日ごとに車を扱わなければならない。"],"에드워드가 상장을 받아 들고 손님들에게 인사합니다. 시엘은 접어 둔 축사 원고를 다시 펼칩니다.":
["Edward takes the sign and greetes guests.Sieel reopenes the famous record.","エドワードは、ノートを受け入れ、ゲストに挨拶します。シエルは、彼の収録を再開します。"],"왕자님께 어려운 말씀을 드릴 때면 시엘 님의 조언을 떠올립니다. 덕분에 한결 쉬워졌습니다.":
["When I give the Prince a difficult word, I remember the advice of Ciel.","王子に難しい言葉を伝えるとき、シエルのアドバイスを思い出します。"],"우와, 이제 정원도에 제가 고른 자리도 들어가요? 그럼 다음엔 길가 풀도 예쁘게 다듬어 둘게요!":
["I’m going to go in the garden, and then I’ll make it beautiful!","こんにちは!今度は、庭園で選んだ場所も入りますか?次回は、庭園も美しく飾ります!"],"이 책은 네 거야. 글자를 익히거든 네 이름이 나온 대목을 직접 읽어 봐. 알았지, 피니안?":
["If you know the letter, read your name and read the title.","書くなら、本名のタイトルを自分で読んでみて、知ってる?フィニアン?"],"장부를 묶을 때 밑에 깔았던 전표입니다. 불에 그슬려서 버리는 종이인 줄만 알았습니다.":
["I thought it was a paper that was put down when I had the boil.","結びついたときの下に貼ったテーブル、ただ火に投げ込まれた紙だと思った。"],"제 이름은 메리가 아닙니다.’ 위층에서 온 답장은 한 줄로 충분했다. 아래층에서는 여전히 상자를 넘어 다녔다.":
["My name is Mary’s not.”The answer from the top was enough for one line, and at the bottom it was still going beyond the box.","僕の名前はメアリーじゃない」と上から来た答えは一行で十分だったが、下からまだ箱を越えて歩いていた。"],"주문과 다른 물건이 왔다는 편지가 세 통입니다. 재미있는 건 세 분이 모두 열일곱 번을 주문하셨다는 겁니다.":
["The letter that order and other things came is three, and the interesting thing is that all three have ordered twelve times.","注文と他の物件が来たという手紙は3本、面白いのは、3分の1がすべて17回注文したということです。"],"중순에는 ‘서재 수업’이 어떻습니까? 제가 맡은 수업입니다. £ 옆에 수업료도 적혀 있습니다.":
["What is the “Signature Class” in the middle? it’s the class I take on. next to £ there is also a class fee written.","授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授業は何ですか? 授"],"차를 새로 올릴까요, 도련님? 지금 읽으시는 면을 펴셨을 때는 찻잔에서 김이 났는데요.":
["I’m going to get a new car, Doyle? when you read the page, I got a little bit of a cup.","車を新しく上げるか? ドーシュ? 今読んでいたとき、カップからキムが落ちた。"],"책상 위에는 영수증이 발행일 순서대로 묶여 있었다. 맨 마지막 묶음만 철끈에서 풀려 나와 있었다.":
["On the table, the receiver was bound according to the order of the date of issuance; only the last bond was released from the iron thread.","テーブルの上に受信書が発行日順に縛られていたが、最後の結びつきだけが鉄線から解放された。"],"첫 주문서부터 가져왔습니다. 상자는 담당관께서 골라 주시죠. 어느 걸 여셔도 장부와 맞을 겁니다.":
["The box is picked by the manager. whatever you buy, it will be right with the buyer.","最初の注文から持って来ました.箱は担当者によって選択されます.何をしても、お店員と合うでしょう。"],"최고급 밀가루. 설탕. 프랑스산 발효 버터. 이 아래에 또 버터. 우리 집에 젖소라도 들였나?":
["The highest-quality milk. sugar. French acid fertilized butter. below is another butter. have we even put milk in our house?","最高級のミルク・砂糖・フランス酸バター・下にまたバター・我が家に牛乳も入ったのか?"],"펜을 얼마나 눌러 썼는지 두 장 아래까지 필압이 남았어. 등잔을 좀 옆으로 치워 봐.":
["I have a few minutes to try the pen, and then let the two stick go down.","ペンがどれだけ押すかを2つのカップまでフィルプレッシャーが残っているので、ガラスを少し横に取り除いてください。"],"편지 두 통과 차를 가져왔습니다. 어떤 편지를 먼저 여시겠습니까? 편지의 내용은 미리 분류해 두었습니다.":
["I have brought the letter two passes car. What letter would you open first?","手紙2通車を連れて来ました. 最初にどの手紙を開くべきですか? 手紙の内容は事前に分類されました。"],"해가 바뀌었다고 내가 마음을 바꾼 줄은 아니겠지, 시엘? 리지의 옆자리는 더더욱 양보 못 해!":
["I don’t think the sun has changed my mind, Ciel? – The side of Ridge is not more than a thing!","太陽が変わったという心を変えたのではないか? シエル? リジの隣の座席は、もっともあたしにしない!"],"‘제 이름은 메리가 아닙니다.’ 위층에서 온 답장은 한 줄로 충분했다. 아래층에서는 여전히 상자를 넘어 다녔다.":
["“My name is Mary.” the answer from the top was enough for one line.","「私の名前はメアリーじゃない」と、上から来た答えは一行で十分だった。"],"같은 날 만든 상자 하나를 시엘이 보는 앞에서 개봉했다. 나무패를 꺼내 보니 이번에도 B가 둘이고 D가 없다.":
["The same day I opened one box before Ciel saw, and I took the tree-shake out, this time there were two B and no D.","同じ日に作った箱をシエルが見る前に開いた。木のパラを引き出して、今回もBが2つ、Dが無い。"],"같은 설계도로 만든 두 수레 중 하나만 빈 채로도 기웁니다. 제작자는 바퀴 지름이 같다고 장담하더군요.":
["Only one of the two shells made with the same design is empty, and the manufacturer has promised that the wheel is equal.","同じデザインで作られた2つのシールのうち1つだけが空っぽで、プロデューサーは車輪の直径と同じだと保証した。"],"그 구두 소리는 다른 사람하고 헷갈리지 않아. 오늘은 한 번도 못 들었어. ⋯라고 오스카가 말했어.":
["The oral sound is not confusing with anyone else.I have never heard it today, Oscar said.","口音は他人の声と混乱しない、今日は一度も聞いたことがない、とオスカは言った。"],"네 자리에서만 비숍이 안 보이겠군. 생일 손님에겐 판을 볼 권리쯤은 줘야지. 의자를 당겨.":
["You will not see the Bishop on your place.Giving a birthday guest the right to see the edition.","生日の客に、お見せの権利を渡すべきだし、椅子を引きずるべきだ。"],"담당관이 같은 점수를 받은 두 상회의 이름을 나란히 적습니다. 팬텀사의 견본 앞에도 납품 증서가 놓입니다.":
["The representative shall be given the name of the two counties that received the same score.The sample of the Phantom Company also places a delivery certificate.","担当者は同じ点数を受けた2つの賞品の名前を付けて、ファンタムサのサンプルの前にも配達証明書が置かれている。"],"물건이 아니라 삯을 보러 왔어. 똑같은 상자인데 왜 이 창고에서만 운임이 두 배로 튀지?":
["I came to see the same box, but not the stuff, why is it only twice the cash out in this warehouse?","物ではなく、 ⁇ を見に来たのだが、同じ箱でなぜこの倉庫の運賃が二倍に流れるのか?"],"볕에 비춰 봐. 글자가 등까지 비치면 급한 거야. 급하면 다들 펜을 꾹 눌러 쓰잖아.":
["Look at the sun.When the letter shines up to your back, it’s urgent.When you urgently, everyone will press the pen.","太陽に照らして、文字が背中まで輝くなら急いで、みんなペンを押す。"],"부르셨습니까, 도련님? 가운데서 화제를 고르시면 됩니다. 급한 용건이 없으시다면 ‘다음에’ 듣겠습니다.":
["You call me, Doyle? you can choose the theme in the middle. if you have no urgent claims I will hear 'the next'.","電話をかける? トーディング? 中間のテーマを選ぶことができます. 緊急の訴えがない場合は「次に」聞きます。"],"서로 처음 만난 손님 셋이 시엘의 탁자에 앉습니다. 한 사람이 차는 됐다며 찻잔을 밀어 놓습니다.":
["The three guests first met each other sit on the Ciel's table, one person is getting a car and pushes the cup.","初めて会った3人のゲストがシエルのテーブルに座り、ひとりが車を切ってカップを押す。"],"서재 문을 두드리는 노크 소리에 시엘이 펜을 내려놓았다. 문 앞에 선 타나카가 모자를 벗었다.":
["At the nock sound that knocked on the door, Ciel put his pen down; before the door, Tanaka had taken his hat.","シエルは、ドアを叩くノックの音でペンを下ろし、門の前にライン・タナカが帽子を取り出した。"],"선대 백작 부인의 수첩은 늘 같은 자리에 꽂혀 있었다. 집사가 수백 번도 넘게 먼지를 닦아 낸 책이었다.":
["The letter of the former Count Lady was always placed in the same place: the housewife was a book that was washing dust more than hundreds of times.","元カウンター夫人の手紙はいつも同じ場所に貼り付けられていた、家主が何百回も粉を掃除した本だった。"],"손잡이를 한 번 돌려 보십시오. 자, 이제 제가 인사를 올리는 동안 얼마나 부드럽게 도는지 봐 주시지요.":
["Go back the handheld once, now, see how gentle I’m helping while I raise greetings.","手袋を振り返って、今、私が挨拶をする間にどれだけ柔らかく助けているかを見てください。"],"시엘이 상장을 받아 들자 에드워드가 고개를 끄덕입니다. 두 사람은 손님들을 향해 나란히 인사합니다.":
["When Ciel receives the list, Edward slides his head and both greet each other toward guests.","シエルが記録を受け取ったとき、エドワードは頭を振り回し、二人はゲストに挨拶する。"],"심사위원이 시엘의 이름을 부릅니다. 엘리자베스는 바구니를 내려놓고 시엘에게 박수를 보냅니다.":
["The judge calls Ciel’s name. Elizabeth puts down her basket to applaud him.","審査員がシエルの名を呼ぶ。エリザベスは籠を置き、シエルに拍手を送った。"],"알겠습니다. 매듭만 바꾼 견본을 하나 더 가져오지요. 두 상자 중 어느 것을 먼저 집는지 보시겠습니까?":
["I know. I bring another sample that has changed the boxes. Do you want to see which of the two boxes is first?","もう1つのサンプルを持ち込んで、その2箱のうちどちらが最初に取り上げられるか見てみませんか?"],"어느 걸로 보시겠습니까? 팬텀사의 상표를 달려면 저것들도 이 견본과 같은 검사를 통과해야 하거든요.":
["To get the brand of the Phantom Company, they must also pass the same examples.","ファンタムのブランドを獲得するには、これらのサンプルと同じ検査を通過しなければならない。"],"어느 집 식탁에 앉으셔도 상관없습니다만, 배고플 땐 가만있지 말고 제 부엌부터 찾아오십쇼!":
["No matter where you are sitting at the table, but don’t stay quiet when you’re hungry and come from my kitchen!","家に食卓に座っているかどうかにかかわらず、お腹が空いては黙ってはいけません!私のキッチンから来てくれ!"],"의사는 시엘의 손목을 놓지 않은 채 침대 곁을 지켰다. 세바스찬이 아래층 서재로 내려갔다.":
["The doctor kept his bed without laying the Ciel's handheld.Sebastian went down to the lower floor.","医師はシエルの手首を置かずにベッドのそばに立っていたが、セバスチャンは下階の座席に下りた。"],"지난번 봉인을 떼실 때 이 종이 조각이 떨어졌습니다. 잃어버릴까 흰 종이에 받쳐 두었지요.":
["When I had the last time removed the seal, this piece of paper fell and was left on a white paper.","最後に封印を切ったとき、この紙の塊が落ちてしまったので、失うか白い紙に置いてしまいました。"],"지난번에도 같은 분이 다과회 초대를 사양하셨습니다. 그런데 도련님의 온실에 관해서는 두 장이나 쓰셨더군요.":
["The same person also had the same invitation, but he wrote two chapters about his greenhouse.","同様の人が、先日もダグ会議を指定したが、ドジーの温室について2章しか書いていなかった。"],"집사가 흰 장갑 한 짝을 벗었다. 손등의 문양과 소년의 오른쪽 눈이 같은 빛을 띠었다.":
["The housewife took out a pair of white gloves, the handheld's spell and the boy's right eye were shining the same light.","主人は白い手袋を脱ぎ、手のひらの ⁇ と男の子の右目が同じ光を持ちました。"],"체조실 거울 앞에 섭니다. 두 팔을 펴고 무릎을 번갈아 올리며 네 박자마다 숨을 고릅니다.":
["Go in front of the gym mirror, stretch your two arms, turn your knees up and take a breath every four bits.","体操室の鏡の前で、両腕を伸ばし、膝を振り回し、四つのボタンごとに呼吸を選びます。"],"칼은 두셔도 됩니다. 선물을 받는 분이 칼부터 찾으셔야 쓰겠습니까. 리본 끝만 살짝 당겨 보시죠.":
["You can take a knife.The gift receiver will need to find from the knife.","剣を押すことができるか?プレゼントを受け取る人は剣から探すべきか? リボンの端だけを少しずつ引き上げてほしい。"],"화이트채플에서 온 두 통은 한 봉투에 묶어 두었습니다. 다음에 찾으실 때도 나란히 꺼내 드리지요.":
["The two shells from the White Chapel are bound in one container, and I will get them out next time you find them.","白チャップから来た2つのパウダーを1袋に縛り付け、次回見つけたらそばに連れて行きます。"],"회신을 보내 온 상인들의 명함이 은쟁반에 쌓였다. 다음 모임의 날짜는 손님들 쪽에서 먼저 물었다.":
["The cards of the traders who sent the feedback were set in the silver panel.The date of the next meeting was first asked by the guests.","返信を送った商人のカードが銀板に積み重ねられ、次の会議の日付はまずゲスト側から尋ねられた。"],"가문의 문장은 끝내 돌아오지 않았습니다. 스스로 복수를 내려놓은 밤, 악마는 계약대로 시엘의 영혼을 삼켰습니다.":
["The family crest was never restored. The night Ciel laid his revenge aside, the demon took his soul, as their contract decreed.","家の紋章が戻ることはなかった。シエルが自ら復讐を手放した夜、悪魔は契約どおりその魂を喰らった。"],"곡이 끝난 줄 알고 손님 한 분이 먼저 박수를 치셨습니다. 아직 파트너의 손을 잡고 계시지요, 도련님?":
["I know the song is over and one of the guests first greeted. you are still holding your partner's hand, Doyce?","曲が終わったことを知って、ゲストの1人が最初に褒められた。まだパートナーの手を握っているのか?"],"구성은 이대로 좋겠습니다. 다만 상자를 기울여 건네면…… 보십시오. 제일 작은 병이 칸막이 틈으로 빠집니다.":
["The composition is like this. but if you just put the box on... see, the smallest bottle falls out of the cranberry.","構成はこんな感じで好ましいけど、箱を押すだけなら・・・見よ、最小のボトルがカンバルに迷う。"],"그 뒤는 쌕쌕거리는 숨소리에 묻혀 들리지 않았다. 시엘은 여전히 자신이 말을 이어 가고 있는 줄 아는 얼굴이었다.":
["After that, the thunder was not heard in a breath; Ciel was still the face that knew he was talking.","その後、叫びは息に埋められず、シエルはまだ話し続けていることを知っている顔だった。"],"그리고… 손등이 흉터로 굳어서 검표 가위를 못 쥐더군. 결국 표를 손으로 반만 북 찢어 줬어.":
["And... the handlight was hardened with a wound and he couldn’t hold the check-in cover. I finally cut the ball half north by my hand.","そして...手のひらが傷に固まって検証カバーを握りつけることができず、結局チケットを手で半北だけ切った。"],"꽃이 핀 영지 정원에 연주석과 묘목 심사대를 마련합니다. 시엘은 두 종목 중 하나에 출전할 수 있습니다.":
["The flowers are set up in the Pin-Long Garden with a playground and a seed judgment. Seal can go out in one of the two species.","花はピン・インジェの庭園に遊び場と種子の審判室を設置します。シエルは2つの種のいずれかで出ることができます。"],"담당관이 팬텀사의 거래 장부 옆에 납품 증서를 놓습니다. 시엘은 증서를 받아 세바스찬에게 건넵니다.":
["The officer puts the delivery certificate next to the Phantom Company’s trading board. Ciel receives the certificate and sends it to Sebastian.","担当者はファンタム社の取引所の隣に配達証明書を置き、シエルは証明書を受け取ってセバスチャンに渡す。"],"무리한 일정이었는지는 컨디션과 스트레스, 의욕에 드러납니다. 이제 아래의 ‘가문 장부’를 함께 보겠습니다.":
["It was a massive schedule that shows condition, stress, desire. now we’ll see the ‘family gifts’ below together.","大きな日程だったのは、条件、ストレス、欲望に現れますが、今は下の「家庭の宿」を一緒に見ていきます。"],"세바스찬이 비단으로 견본을 감쌌다. 왕실에 갈 상자의 뚜껑은 시엘이 받아 제 손으로 덮었다.":
["Sebastian hides the sample with a bean.The cover of the box to go to the royal house was taken by Ciel and covered by my hand.","セバスチャンはビダでサンプルを隠し、王室に行く箱のカバーはシエルが受け取って手で覆った。"],"수레는 왼쪽으로 넘어졌는데 짐 상자의 오른쪽 모서리만 패였습니다. 어느 흔적이 먼저 생겼을까요?":
["The shell fell to the left and only the right corner of the bag box was lost.","スレは左に落ちて、荷物箱の右角だけが倒れた。"],"시엘은 편지를 접힌 자국대로 접어 돌려주었다. 스네이크가 봉투를 받았는데도 그 손은 거기 그대로 있었다.":
["Ciel returned him to the country where he had the letter; but Snake was covered with a pack, and his hand was there.","シエルは手紙を貼った国に戻したが、スネイクは封筒を受けたが、その手はそこにあった。"],"시엘이 빈 잔을 내려놓는다. 명령을 기다릴 필요는 없었다. 세바스찬이 두 번째 잔을 채운다.":
["Ciel puts the empty cup down, and he had no need to wait for his command; and Sebastian fills the second cup.","シエルは空の杯を下ろし、命令を待つ必要はなかった。"],"시엘이 상장을 받고 손님들을 향해 몸을 숙입니다. 세바스찬은 돌아온 시엘에게 접어 둔 원고를 건넵니다.":
["Ciel accepts the certificate and bows to the guests. When he returns, Sebastian hands him the folded speech.","シエルは賞状を受け取り、客席に一礼する。戻ってきたシエルに、セバスチャンは折りたたんだ原稿を差し出した。"],"에드워드가 상장을 내려놓고 손님들의 탁자로 돌아갑니다. 시엘은 남아 있는 찻잔들을 살펴봅니다.":
["Edward leaves the mark down and returns to the guest's table.Sieel looks at the remaining cups.","エドワードは、そのスケールを下げてゲストのテーブルに戻り、シエルは残りのカップを見る。"],"여왕의 즉위 50주년을 기념하는 주간입니다. 런던 상인들이 여는 기념품 경연에 팬텀사 제품을 냅니다.":
["It is a week to celebrate Queen's immediate 50th anniversary, and the London merchants offer fantasy products for the memorial competition.","ロンドン商人が開かれた記念品コンテストでファンタジー製品を提供する。"],"오늘 만찬은 제가 문밖에서 기다리겠습니다. 손님들은 벌써 도착하셨는데, 도련님은 어느 자리를 맡으시겠습니까?":
["I’m waiting for the dinner today outside the door.The guests are already arrived, what place will you take?","今日の夕食は、ドアの外で待つつもりです.ゲストはすでに到着しています. あなたはどの席を担当するのでしょうか?"],"왕실의 승인은 기약 없이 미뤄졌습니다. 시엘은 작위 대신 스스로 선택한 이름으로 집요한 추적을 이어 갑니다.":
["The Crown has deferred its decision indefinitely. Ciel continues his pursuit under a name of his own choosing.","王室による承認は無期限に延期された。シエルは爵位に代わる名を自ら選び、執念深く追跡を続ける。"],"우리 상표가 보이게 놓는다는 조건으로 빌려줘. 사용료를 받으면 어느 진열장 값인지 장부에 적어 두고.":
["We are given a loan to you, if you receive the cost, let us know what the price is.","ブランドを表示する条件で貸し出してください. 使用料が得られる場合は、どの熱場の値を記録します。"],"우리나라에선 은인이 집에 오면 잘 대접해 줘. 아그니 것도 한 잔 줘! 그런데 시엘, 우리 방은 어디야?":
["If the silver is home, please treat me well. give me a drink of the silver too. but Ciel, where is our room?","家に帰ると、お金人が来たら、きちんと扱ってくれ! アルニも一杯あげてくれ! でもシエル、私たちの部屋はどこですか?"],"조커의 짐에서 이게 나왔어. 우리 식구들을 데려가라고 한 게 당신이야? ⋯라고 와일드가 말했어.":
["This came out of Joker’s bag. – What did you say to take our foods? – said Wild.","ジョーカーの荷物からこれが出てきた? あなたが私たちの食器を連れて行くように言ったのはあなたですか? ワイルドは言った。"],"직원 대표가 겨우 구한 사본이랍니다. 물건을 만든 사람들의 손에는 정작 인수증이 한 장도 돌아가지 않았다더군요.":
["The staff representatives are just a copy of the stuff.The people who made the stuff did not return a single original acquisition in their hands.","従業員のコピーは、ただ手を差し伸べたものだという事実で、物件を作った人々の手に正当な買収証が一枚も戻ってこなかった。"],"찻잔을 거둔 뒤에도 손님들은 자리를 뜨지 않았다. 마지막 태엽이 다 풀릴 때까지 견본 둘레에 서 있었다.":
["Even after the cup was taken, the guests did not open their seats; they stood around the sample until the last tables were all dissolved.","ワインを飲んだ後も、ゲストは座り開かなかったし、最後のタフラがすべて解き放つまでサンプル周りに立っていた。"],"출품할 물건만 골라 손을 봤을까 싶으십니까? 마침 납품 상자가 있습니다. 하나를 꺼내 보시죠.":
["Do you want to choose the items to deliver? there is a delivery box. take out one.","手元に配達するものを選んでみて欲しいですか? ちょうど配達ボックスがあります。"],"팔린 숫자 옆에 반품도 적어. 태엽이 끊어져서 돌아온 물건까지 실적에 넣을 셈이야?":
["The number sold is also returned.The taffle is cut and the items returned in real estate?","売れた数字のそばに返品も書いておきますか? タフォールが切断され、返品する物件まで現実に置くようにしますか?"],"교회 현관에 빵과 채소를 놓을 자리를 비워 두었습니다. 올해는 도련님께서 첫 바구니를 맡으시지요.":
["I have left the room for bread and vegetables in the church door, this year the Lord will take over the first basket.","教会の門にパンと野菜を置く場所を空かせて、今年は主が最初の箱を担当する。"],"나이트가 지나간 자리에 설탕 가루가 끊겼군. 미끄러진 게 아니라 들어서 옮겼어. 비숍은 거기 둬.":
["The night passed, the sugar powder was broken. it wasn’t sliding but moved into it.","夜が過ぎたところに砂糖粉が切断され、滑らかにならないで、入って移動した。"],"도련님 쪽에서 읽으시게 꽂았는데, 물을 줄 때마다 제가 자꾸 거꾸로 읽어요. 이 이름표, 다시 쓸까요?":
["I read it on your side, and every time I ask you, I keep reading it on the reverse.","読んでみると、毎回読んでみると、この名前を書き直す。"],"도련님, 잠깐만 팔을 굽혀 봐 주시겠습니까요? 지난번 가봉 때보다 소매가 짧아진 것 같습니다요.":
["Do you want to look at your arm? it seems that the shell was shorter than the last time.","手を振り回すと、前回の手のひらより短いようです。"],"뚜껑을 열자마자 버터 향이 납니다. 한 장을 꺼내 봤더니 가장자리만 상자에 남는군요.":
["I have a butter smell when I opened the cover.I have one piece out and only the edges remain in the box.","封筒を開けるとすぐにバターの匂いがするので、一本を取り出して見て、端だけが箱に残る。"],"마차가 떠나기 전에 정문으로 가셔야 합니다. 계단에서는 여유가 있었는데 자갈길에 드니 숨이 가빠지셨군요.":
["You must go to the front door before the car leaves.The stairs were free, but you were breathing off on the road.","車が離れる前に、オープンドアに通う必要がありました.階段には余裕がありましたが、ゆく道で息を吐いた。"],"마침 커튼이 걷혔다. 세바스찬의 눈에는 햇살이 죄다 아그니의 등 뒤로 모인 것처럼 보였다.":
["The curtain was just gone.Sebastian's eyes looked like the sunlight all gathered behind Agni's back.","カーテンが走り回ったので、セバスチャンの目には、アグニーの背後に太陽がすべて集まったように見えた。"],"뭐야, 양키라서 영 마땅찮단 건가? 프랑스 놈이 구우면 같은 고기도 더 고상한 맛이 난다 이거지?":
["What is it like to eat meat? - The French can taste the same meat.","フランス人で食べると、同じ肉も美味しくなりますよね?"],"세바스찬은 공손히 입을 다물었다. 대신 촛대가 든 장식장 문을 소리 없이 활짝 열어젖혔다.":
["Sebastian opened his mouth, but instead opened the door of the decoration with candles without noise.","セバスチャンは、口を礼儀正しく閉じ、代わりにろうそくがついた装飾場のドアを騒がせずに広く濡らした。"],"세바스찬이 은쟁반을 들어 올리자, 부도 처리되어 돌아온 어음 아래에서 동그란 찻잔 자국이 드러났다.":
["When Sivaschan raised the silver, a cup of sandy came down from the bottom of the bar and it was treated.","セバスチャンが銀の板を上げて、バドも処理され、下の<unk>の下に、東グラのカップの<unk>が現れた。"],"시엘, 난 아직 널 내 매제로 인정하지 않았다. ……뭐? 다과회랑 무슨 상관이냐고? 아무튼, 내가 먼저다!":
["Ciel, I have not yet acknowledged you as my magistry. ......What? what does it have to do with the multidiscipline? anyway, I am first!","シエル、私はまだあなたを私のマジとして認めていない......何? ダグ会と何の関係があるのか? いずれにせよ、私は最初です!"],"시엘은 몸을 일으키려다 힘없이 침대 가장자리를 짚었다. 세바스찬의 움직임이 뚝 멈췄다.":
["Ciel put his bed on the edge to wake up, and Sebastian’s movement stopped.","シエルは体を起き上げようと、無力にベッドの端をひっくり返し、セバスチャンの動きが止まった。"],"시엘의 생일과 유모의 품삯이 적힌 페이지 뒤편에, 어린 도련님의 발작이 있던 밤들이 빼곡히 적혀 있었다.":
["On the back of the page, which was written with Ciel's birthday and the baby's honor, the nights of the young Doyle's attack were scattered.","シエルの誕生日と赤ちゃんの名誉を記したページの後ろには、若いドーシュの襲撃があった夜が、ひどく書かれていました。"],"시엘이 상장을 받으러 나서자 에드워드가 박수를 칩니다. 시엘은 상장을 받아 들고 그에게 고개를 숙입니다.":
["After Seal gets the list, Edward praises.Seal takes the list and tells him.","シエルが名称を受け取った後、エドワードは褒められる。"],"시엘이 은제 찻숟가락을 받아 듭니다. 에드워드는 빈 찻잔을 내려놓고 시엘에게 손을 내밉니다.":
["Ciel receives a silver cup. Edward leaves the empty cup down and gives his hand to Ciel.","エドワードは空のカップを下ろし、シエルに手を伸ばす。"],"심사위원이 같은 점수를 받은 두 사람의 이름을 차례로 부릅니다. 시엘은 상대와 나란히 서서 손님들에게 인사합니다.":
["The judge calls the names of two people who have received the same score in turn. Ciel stands next to the opponent and greetes the guests.","審査員は同じ点数を得た2人の名前を呼び、シエルは相手のそばに立ってゲストに挨拶する。"],"아이들은 집에 가져갈 기념 상자에 리본을 묶었다. 시엘은 완성된 상자를 건네며 누구에게 줄 선물인지 물었다.":
["The children wrapped the ribbon in the memorial box to take it home.Seoel passed the finished box and asked who was the gift to give it.","子供たちは、家に連れて行く記念箱にリボンを縛り付け、シエルは完成した箱を通り過ぎて、誰に贈るかと尋ねた。"],"에드워드가 상장을 받고 시엘을 향해 고개를 숙입니다. 시엘도 찻주전자를 내려놓고 인사를 돌려줍니다.":
["Edward gets a sign and hears his head to Ciel.Ciel also leaves the shell and returns his greetings.","エドワードは、シエルに向かって頭を上げて、シエルも、カッコイヤーを下ろし、挨拶を返す。"],"엘리자베스가 상장을 받은 뒤 연주석으로 돌아옵니다. 시엘은 바이올린을 내려놓고 악보를 정리합니다.":
["After Elizabeth receives the list, she returns to the playground. Ciel leaves the violin down and cleans the evil.","エリザベスが記録を受けた後、シエルはバイオリンを下ろし、悪口を整理する。"],"왕자님께 드릴 말씀인데 제가 꺼내면 먼저 걱정하실 겁니다. 시엘 님이라면 어떻게 운을 떼시겠습니까?":
["I will tell you the prince, and if I get out, you’ll be worried first.","王子様に言えば、私がそれを取り出すと、まず心配するだろう.シエルならどう運が離れるだろう?"],"이웃 가문이 응접실에서 새해 인사를 나눕니다. 초대받은 집안의 자제들이 인사와 다과 접대를 겨룹니다.":
["The neighbor family is sharing a new year greeting in the reception room. the hosts of the invited family are welcome and welcome.","隣の家族が迎え入れ室で新年おめでとうを共有し、招待された家庭の親族は挨拶と多様な歓迎を迎えます。"],"조커가 그랬다고? 매일 같은 천막에서 잤는데 스네이크한텐 아무 말도 안 했어. ⋯라고 에밀리가 말했어.":
["I was walking in the same tent every day and didn’t say anything to Snake, Emily said.","ジョーカーはそう言った? 毎日同じテントで寝ているのに、スニークに何も言わなかった。"],"그때는 그것이 무슨 말인지 알 수 없었다.\\nS-012에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까.":
["He did not know what it was, because he was the first to ask the number to nS-012, but the name of the one that asked the number to nS-012.","何を言っているのかは知らなかったが、シエルが最初に番号ではなく、番号を尋ねたのは、シエルだった。"],"담당관이 납품 장부의 수량을 짚습니다. 시엘은 인증에 필요한 열여덟 개까지 몇 개가 남았는지 확인합니다.":
["The officer sets out the amount of delivery orders. Ciel checks how many of the eighteen required certifications are left.","担当者は配達の供給量を調べ、シエルは認証に必要な18個まで残っていることを確認します。"],"담당관이 휘트컴 상회에 증서를 건넵니다. 시엘은 팬텀사의 평가표를 받아 견본 상자 위에 펼칩니다.":
["The officer passes a certificate at the Whitcom Conference. Ciel receives the Phantom's assessment and is placed on the sample box.","担当者はウィットコム会議で証明書を渡し、シーエルはファンタム社の評価表を受け、サンプルボックスの上に広がる。"],"도련님께서 안감을 조금 접어 보시니 상인이 또 천을 펴 주는군요. 아까부터 앞면을 보여 준 게 벌써 세 번째입니다.":
["The dogs are looking at the eye and the trader is opening the ring again. it’s already the third time he has shown the front.","ドーシュは、少し目がついて、商人はまた千を開けているので、前面から見せたのはすでに3回目のことです。"],"먹지를 대고 옮긴 두 장입니다. 그대로 포개면 글씨가 꼭 맞아야 할 텐데, 숫자 하나가 어긋나는군요.":
["The two are moving to the food. if you have to say the letter right, one number is opposed.","ふたつの文字を引っ張って、まさに文字が正しいから、1つは対照する。"],"바구니는 밑을 받쳐 줘. 에밀리가 손잡이에 턱을 괴고 자거든. ⋯라고 키츠가 말했어.":
["Take the basket down.Emmily is sleeping with her neck on her handheld, Kitz said.","ケイツは、エミリーが手のひらに首をぶつけて寝ていると、キッツは言った。"],"봉투는 그대로 두었습니다. 제 짐작을 미리 말씀드리면 주제 넘는 짓이겠지요. 어디까지나 전 집사니까요.":
["I have the box, I think it’s more than my subject matter, because I am home.","包装は同じで、私の推測を先に言うと、テーマ以上なのだから、どこまで家だ。"],"상자는 하나도 빠지지 않았습니다. 청구서가 좀 늘었군요. 마차 세 대의 운임에 새 차축 하나의 값까지 붙었습니다.":
["No box is lost. the bill has been a bit greater. I have added up to one new cost on the three car carriages.","箱は1枚も落ちない、請求書が少し増えました、3台の運送に新切割1枚まで付いた。"],"손님은 영수증을 반으로 접어 갔다. 다음 장날, 같은 접힌 자국을 펴 가며 다른 점원이 같은 항의를 받아 적었다.":
["The guest went half the receipt. The next day, the same attached stool was opened and the other shopper received the same protest.","ゲストは受付書の半分に渡り、翌日、同じつぶやきを開いて、他の店員が同じ抗議を受けた。"],"시엘이 마지막 음을 길게 당기자 종소리가 그 뒤를 받습니다. 모자를 쓰고 일어서던 손님까지 돌아서서 박수를 칩니다.":
["When Ciel pulls the last sound long, the sound gets behind, he turns back to the guest who was wearing a hat and standing up and praises.","シエルが最後の声を長く引きずり、その後、音が聞こえてくる。帽子を着て起きて来たゲストに戻って挨拶する。"],"시엘이 은제 달걀 장식을 받아 듭니다. 엘리자베스는 바구니를 팔에 걸고 그 장식을 가까이 들여다봅니다.":
["Ciel receives a silver egg decoration. Elizabeth holds the basket on her arm and looks closely into its decoration.","シエルは銀の卵を飾る。エリザベスは箱を腕に抱き、その飾りを見つめている。"],"시엘이 픽, 작게 웃었다. 마른 웃음이 잦아들자 방 안에는 종이 타는 소리만 사그락거렸다.":
["Ciel picked, smiled little. when the dry smile was frequent, the paper sound was only out in the room.","シエルはピック、微笑みが小さく、乾いた笑いが頻繁に起こったとき、部屋の中には紙の鳴き声しか消えていなかった。"],"악보가 한 장 넘어가도 시엘은 활을 멈추지 않습니다. 반주자가 다시 따라붙고 두 사람이 같은 박에서 곡을 닫습니다.":
["Even if the wicked passes one chapter, Ciel does not stop the ark. The half-winner follows again and two men close the song in the same bar.","悪魔が一つの曲を超えても、シエルは弓を止めず、半導者が再び続いて、二人が同じ曲で曲を閉じる。"],"앞의 달걀은 수선화, 제비꽃, 은방울꽃 순이었어. 네 자수 도안 순서잖아. 다음 꽃을 보여 줘.":
["The eggs in front were purified, flowered, and silver-wolf. Your own way is ordered. Show the next flowers.","前の卵は、修理、花の花、銀の花が純粋で、あなたの自水道の順番です。次の花を示してください。"],"어둠 속에서 악마가 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.":
["In the darkness the devil opened his mouth; and the soul that went out after the last breath of Ciel, Sebastian swallowed without a left.","闇の中の悪魔が口を開け、シエルの最後の息を追って出た魂を、セバスチャンは無事に飲み込んだ。"],"어린 주인이 지도 접는 법을 익힌 건 첫겨울이었다. 이제는 어둠 속을 걸을 등불 한 자루까지 셈에 넣기 시작한 것이다.":
["The young owner learned how to map it was the first winter; now he began to put the walk in the dark into a lamp of light.","若い主人が地図を描く方法を学んだのは最初の冬だったが、今は暗闇の中を歩くまで灯りでシムに置き始めた。"],"인쇄소에서 마지막 교정쇄가 왔습니다. 이 한 줄대로라면 여우가 사냥꾼에게 쫓아오라고 명령하는 셈인데요.":
["The last edition of the printing station comes, and this one line is telling the wolf to go forth to the hunter.","印刷所で最後の修正シートがやって来て、この一行に従って、カエルが狩人に追いかけるように命じる。"],"종이 한 장이면 오늘은 DORA가 된다. 이튿날 다른 아이가 계산대에 나무패를 두 개 올려놨다. B와 B였다.":
["If one paper is today, it will be DORA.The other child on the day he put two tree spots in the calculator: B and B.","紙が一枚なら、今日はDORAとなり、その翌日、別の子供が計算板に二本の木のパットを上げたBとBだった。"],"지난번 명부에는 같은 작업장의 이름이 두 번 있었지요. 오늘 온 인수증을 보십시오. 두 줄 중 하나에서 작업장의 이름을 지웠군요.":
["The last list has two names of the same workplace. see the entire acquisition today. you have deleted the name of the workplace from one of the two lines.","前のリストには同じワークショップの名前が2回ありました 今日の全買収証を参照してください 2行の1つでワークショップの名前を削除しました。"],"진열장 너머로도 리본이 눈에 띕니다. 이 매듭대로라면 선물을 받은 아이가 맨 먼저 어른부터 찾아야겠군요.":
["The ribbon is also beyond the heating field. if this is a kind, the child who receives the gift must first find from an adult.","熱場の向こうにもリボンが目に見えるので、このマッチのように、贈られた子供はまず大人から見つけるべきです。"],"첫 납품 날짜를 짚으셨군요. 좋습니다. 그날의 물건에도 오늘과 같은 기준을 썼습니다. 대조해 보시죠.":
["You have the first delivery date. okay. I have written the same standards as today for the goods of that day.","初回の配達日付を記録しました. いいえ. その日の商品も同じ基準を書きました. 今日のものと対照してください。"],"첫 장에는 잡혀간 단원들의 명단이, 그 뒤에는 아이들이 사라진 날짜와 서커스의 순회 일정이 나란히 적혀 있었다.":
["The first chapter contained a list of the captured units, and then the date of the children disappeared and the circus' rounds schedule.","最初の章には、捕まった部隊のリストがあり、その後、子供たちが行方不明になった日付とサーカスの巡回スケジュールが付属していた。"],"판매점마다 교환할 물건을 보냈다. 아이에게 가는 봉투에는 새 바퀴를 단 수레를 그려 넣었다. 가문 명성 +4":
["I sent things to exchange every store. I put a new wheel on the bag to the child and drawn a single set of items. Family reputation +4","売り場ごとに交換する物品を送りました 子供の行き方に新しい車輪を描いた単一のスレを置きました 家族名声 +4"],"평소에는 도련님께서 방문지를 정하십니다. 오늘은 연습이니 서재를 골라 보겠습니다. 방문은 하순 일정을 마친 뒤입니다.":
["You usually make a visit to the site.Today is a practice, and we will choose the site.The visit is after the final schedule.","通常、ドシュは訪問地を定めます.今日は練習ですので、会場を選びます.訪問は下のスケジュールが完了した後に。"],"풋맨 일이지. 손님이 오면 외투를 받고 응접실로 안내해. 식사 때는 세바스찬 곁에서 시중을 들고.":
["The guest comes and takes a trip to the reception room. when you eat, take a check in near Sebastian.","足マンは仕事だ!ゲストが来たら、外出を受け取って、応援室に連れて行きます。食事の際はセバスチャンのそばでチョコレートを持ちます。"],"가문의 사건을 기록하는 장부입니다. 궁정에 어떤 소문이 도는지도 여기 적어 두겠습니다. 마지막으로 보여 드릴 것은 ‘저장 · 설정’입니다.":
["I'm the director of recording the family's events.I'll write here what rumors are going to be on the palace.The last thing I'll show you is 'Save · Set'.","家族の出来事を記録するためのガイドです.宮殿で何が噂を起こしているかをここに書きます.最後に示すのは「保存・設定」です。"],"건너편에 놓인 말도 색깔이 잘 보입니다. 이제 첫 수를 둬야 하는데…… 설명서에서는 벌써 두 번째 수로 넘어갔군요.":
["The words on the other side are also colorful. now you have to put the first number... in the documentation you have already passed to the second number.","横に置かれた言葉も色が良く見えますが、今は最初の数を置く必要があります...文書ではすでに2番目に過ぎました。"],"귀는 더 단단해졌다. 뚜껑을 덮자 왼쪽 귀가 꺾이면서 안쪽 종이에 전보다 깊은 자국을 냈다.":
["The ear became more solid. when the cover was covered, the left ear broke down and put a deeper spoon on the inner paper than before.","耳が硬くなったので、カバーを覆い左の耳が折り、内紙に前よりも深くのつぶやきを投げ込んだ。"],"담당관이 팬텀사의 이름을 부르고 출품 품목의 납품 증서를 건넵니다. 시엘은 증서에 적힌 품목명을 확인합니다.":
["The officer calls the name of the Phantom Company and receives the delivery certificate of the presenting items. Ciel confirms the item name written in the certificate.","担当者はファンタムの名前を呼び出し、プレゼンテーションのアイテムの配達証明書を取得します。シーエルは、その証明書に記載されたアイテムの名称を確認します。"],"도련님의 수업과 휴식, 저택의 살림, 팬텀사의 경영까지. 이제부터 그 모든 시간을 짜는 건 집사인 당신의 일이다.":
["Lessons and leisure, the running of the manor, the affairs of Funtom. As his butler, you will decide how the young master spends his days.","坊ちゃんの授業と休息、屋敷の切り盛りにファントム社の経営。そのすべての時間を組み立てるのは、執事であるあなたの仕事だ。"],"바람에 넘어간 마디를 찾느라 한 박이 빕니다. 시엘은 반주자가 되풀이하는 소절에 맞춰 끝까지 연주합니다.":
["It is a night to find the word that has passed through the wind. Ciel plays until the end, in accordance with the repetitive story of the half-winner.","風に渡った言葉を探す一晩が続くシエルは、半走者が繰り返されるスピーチに合わせて最後まで演奏する。"],"바로 여기서 필체가 달라지지요. 제 짐작을 말씀드리기 전에, 도련님 눈에는 어찌 읽히는지 먼저 듣고 싶습니다.":
["I want to hear you first before I tell you my guess, I want to hear you first in your eyes.","まさにここでフィルツェが変わる.私の推測を伝える前に、ドーシュの目でどのように読むかを聞きたい。"],"병동마다 필요한 식사 수를 확인하고 따뜻한 그릇을 보냈다. 저녁 우편에 빈 바구니와 간호사의 답장이 함께 돌아왔다.":
["Every hospital checked the number of meals needed and sent a warm pot. The empty basket on the left of the evening and the nursing response came back together.","各病院で必要な食料の数を確認し、暖かい皿を送りました。夕方には空っぽの箱と看護師の回答が一緒に戻ってきました。"],"사내가 시엘의 옷깃에서 뜯어낸 단추를 슬쩍 놓았다. 돌바닥에 떨어지는 소리에 소마의 눈썹이 올라갔다.":
["The man put the button that he had cut off from Ciel's clothes; and the sound of falling on the stone was the sumer's brushes.","男はシエルの衣の板から切ったボタンを押しつけ、石の底に落ちる音でソマの眼鏡が上昇した。"],"세바스찬이 찻잔을 받쳐 들었다. 총알이 뚫은 주전자 옆구리에서 홍차가 잔 안으로 똑똑 떨어졌다.":
["Sebastian got a cup. The bullet was throwed in the side of the headline and the red tea fell smart into the cup.","セバスチャンはカップを受け取ったが、弾丸が突っ込んだ主機の側から、紅茶が頭に落ちた。"],"아, 도련님 신발 자국이었구나! 흙 묻은 구두로 돌아가시면 세바스찬 씨한테 혼나실 텐데요!":
["If you go back to the ground-covered mouth, you’ll be confused with Mr. Sivaschan!","やっぱり、あの靴を履いて帰ってくるなら、セバスチャンさんに迷惑をかけよう!"],"얼스 코트 이탈리아 박람회가 열리는 달입니다. 인근 상인회가 여는 공예품 견본 품평에 팬텀사도 참가합니다.":
["It is the month in which the Icelandic Coat Italy Exhibition takes place. The nearby trade union also participates in the craftsmanship samples evaluation.","イスコートイタリア展が開催される月です 近くの商人会が開く工芸品サンプル評価に参加するファンタムサも参加します。"],"에드워드의 이름이 불리고 박수가 이어집니다. 시엘은 심사표를 확인한 뒤 찻주전자를 내려놓고 박수를 보냅니다.":
["Edward's name is called and the praise goes on. Ciel confirms the judgment, then hears down the shell and sends a praise.","エドワードの名前が呼ばれ、褒め言葉が続くシエルは、審査書を確認して、カップのスケールを下ろし、褒め言葉を送る。"],"이 편지를 읽을 사람을 찾고 있어. 여기 ‘팬텀하이브 백작 귀하’라고 쓰여 있지? ⋯라고 오스카가 말했어.":
["I’m looking for someone to read this letter. here is the ‘FantomHive Count you’ written, right?","この手紙を読んでくれる人を探しているのだが、ここに「ファンタムハイブ伯爵君」と書かれています。"],"저도 뚜껑을 고쳐야겠다 싶었습니다만, 리본 하나를 빼면 그만이군요. 이번엔 도련님 안이 한 수 위였습니다.":
["I wanted to fix the cover, but if I had a ribbon, this time I could do it.","僕もカバーを修理したいのですが、リボン1を除いてはやめようかな～、今回はドーシングができてしまった。"],"주최 측이 보리와 밀을 나누어 줄 명단을 내밉니다. 성인과 아이가 받는 양이 달라 자루 수부터 맞춰야 합니다.":
["The host party sets a list to share the bear and grain.The amount that adults and children receive is different from the number of cuts.","主催者は、ボリとミルを分けるリストを出します. 大人と子供が受け取る量は異なり、カット数から調整する必要があります。"],"창문에 한 벌, 판매대 양 끝에 한 벌씩.’ 오늘 날짜 밑에 가게 안을 대강 그리고 세 자리에 동그라미를 쳤다.":
["One penalty on the window, one penalty on the end of the sale of the sheep.” today under date I went into the river and hit a thunderstorm on three places.","窓の向こうに一つの罰、売り場の羊の端に一つの罰」 今日日付の下で行くために内を大河と三箇所にドグラムを打った。"],"‘창문에 한 벌, 판매대 양 끝에 한 벌씩.’ 오늘 날짜 밑에 가게 안을 대강 그리고 세 자리에 동그라미를 쳤다.":
["“One penalty on the window, one penalty on the end of the sale.” today under date I went into the gate and hit a dogram in three places.","「窓のひらめき、売り場のひらめきのひらめき」 今日日付の下で行くために内大河と3席にドグラミを打った。"],"가격표는 뒤집어 둬. 값이 보이면 부모의 손이 먼저 움직이는 법이지. 고객님이 먼저 고르는지 보려던 거잖아?":
["The price is turned. if the price is seen, the parents' hands move first. you want to see if the customer chooses first?","値段を振り返って、見た目に値段が表示されると、親の手がまず動く方法です。"],"그래. 네가 처음부터 노려 온 몫이 뭔지는 알아. 복수를 접고 판에서 내려온다면, 계약의 위약금은 지금 치러야겠지.":
["Yes, I know what you’ve been paying from the beginning.If you get revenge and go down from the edition, the contract’s fee will be paid now.","あなたが最初から何をしていたのかわかります.復<unk>を受け、板から降りて来たら、契約の補償金は今すぐ払わなければなりません。"],"네가 그 사람을 보고 싶은 건 알겠어. 그래도 내 이름으로 면회시켜 주진 않아. 아직 피해 아동이 돌아오길 기다리는 집이 있으니까.":
["I know you want to see him, but I have not been given him in my name, because there is still a house waiting for the child to return.","あなたが彼を見たいと知っているが、私の名によって訪れることはない、まだ避けの子供が戻ってくるのを待つ家があるからだ。"],"담당관이 납품 장부의 수량을 짚고 증서를 보류합니다. 시엘은 출품한 품목의 판매·납품 기록을 다시 확인합니다.":
["The representative shall note the amount of the delivery order and keep the certificate. Ciel will re-confirm the sales/leverance records of the items presented.","担当者は配達の供給量を記録し、証明書を保管します.シーエルは、提出された商品の販売・配達記録を再確認します。"],"도련님께서 읽으신 소인을 토대로 우체국에서 회신을 보내왔습니다. 해당 전보는 이틀 동안 한 창구에 묵혀 있었다더군요.":
["The Doyle sent a response from the post office on the basis of the son you read, which was kept in one window for two days.","ドシュは読んだソインに基づいて郵便局から返信を送ったが、その電話は2日間1つの窓に滞在していた。"],"되돌아온 서류 틈에 모래가 조금 남아 있었다. 봉투를 기울이자 검은 낟알 셋이 톡, 굴러 떨어졌다.":
["The backing paper was left a little sand; the pack was shut down and three black pants were shut down.","返って来た紙の間には少し砂が残っていたので、袋を振り回して、三つの黒い ⁇ が丸くなり、倒れてしまった。"],"두 귀를 나란히 접어 보낸 날, 백화점에서 원래 주문서를 다시 보내 왔다. 그림 속 토끼는 두 귀를 쫑긋 세우고 있었다.":
["On the day that I had two ears in one side, I was returning the original order from the store. The pawn in the picture was staying on the two ears.","二つの耳を一つにした日、店から元の注文書を送り戻したが、絵の中のウサギは二つの耳をひっくり返していた。"],"마지막 장을 넘기는 순간 보면대에서 악보가 미끄러졌다. 세바스찬은 반주를 이어 가며 다음 마디의 첫 박을 비워 두었다.":
["At the moment of passing the last chapter, the evil was sliding from the viewpoint.Sebastian went half a week and left the first night of the next word empty.","最後の章を渡る瞬間、見た目から悪魔が滑り落ちてしまったセバスチャンは半週を続けて次の言葉の最初の夜を空かせた。"],"막차가 빠져나간 플랫폼에는 빗물이 흥건했다. 시엘이 내민 표를 본 역무원이 등불을 바짝 들이댔다.":
["The platform where the truck was out was raining rain, and a official who saw Ciel's inhabitants' bills sparked the candles.","車が脱出したプラットフォームには雨水が起きたシエルが内民のチケットを見た職員がランプを吹き飛ばした。"],"분홍 리본 끝을 따라간 곳에는 빈 바구니만 남았습니다. 마지막 종이 울리자 시엘이 찾아낸 달걀을 심사대에 올립니다.":
["The end of the pink ribbon is left with a vacant basket, and when the last paper sounds, the egg Ciel has found is put on to the judgment.","ピンクのリボンの端を追いかけてきたところには、空っぽの箱しか残っていません。最後の紙が鳴ると、シエルが見つけた卵を裁判所に持ち上げます。"],"상회 대표의 말로는 저희와 함께 납품했다는군요. 내일 자선 시연회에는 친절하게도 도련님의 자리까지 마련해 두었답니다.":
["The representative of the contest said he was delivering with us. tomorrow we will be presenting the charity exhibition in a friendly place to the Doyle.","会議の代表者によると、私たちと共に配達したので、明日の慈善展で親切にあなたの席まで準備しました。"],"서두르는 바람에 두 손님의 호칭을 바꿔 불렀습니다. 시엘은 자리에 앉기 전 두 사람을 찾아가 이름을 바로 불러 인사합니다.":
["In the hurry wind, he changed the names of two guests. Ciel finds the two before sitting in place and calls their names right and greet them.","急いで風に二人のゲストの名前を変え、シエルは座る前に二人を探し、その名前を呼び直して挨拶する。"],"세바스찬은 봉투를 침대 옆 탁자에 세워 두었다. 겹쳐 놓은 편지지 위로 창살 그림자가 반듯하게 걸렸다.":
["Sebastian put the bag on the table next to his bed, and the shadow of the creature was gloriously taken over the covered letters.","セバスチャンは、ベッドの隣のテーブルに封筒を置き、封印された手紙の上に、創造の影が輝く。"],"스코틀랜드 야드가 단원들을 데려간 뒤였다. 조커의 짐 속에 마른 분 냄새가 밴 편지 한 통이 남아 있었다.":
["After the Scottish Yard took the units, a piece of a dry-rice-wormed letter was left in Joker's baggage.","スコットランド・ヤードがユニットを連れて行った後、ジョーカーの荷物の中に乾いた人の匂いがするバンが残っていた。"],"시엘은 서신 끝에 가문의 이름을 적었다. 봉랍에 인장을 누르고, 붉은 밀랍이 다 식은 뒤에야 손을 뗐다.":
["Seal wrote the name of the family at the end of the letter, pressing the seal on the bar and only after the red bar was all broken he pulled his hand.","シエルは手紙の終わりに家族の名前を書き、封筒に印を押し、赤い封筒がすべて焼いた後に手を握った。"],"시엘이 받은 은제 달걀 장식이 바구니 곁에 놓입니다. 엘리자베스는 장식을 살펴보다가 시엘을 향해 웃습니다.":
["The silver egg decoration received by Seal is placed next to the basket. Elizabeth looks at the decoration and laughs to Seal.","シエルが受け取った銀の卵の装飾は箱のそばに置かれ、エリザベスは装飾を見るよりシエルに向かって笑う。"],"아침에 들여온 사과와 늦게 거둔 배가 나란히 놓였습니다. 심사할 바구니에는 각각 한 겹씩만 담을 수 있습니다.":
["The morning apologies and late-stay boats are placed alongside each one, each can be covered in the basket to be judged.","朝に入った謝罪と遅く降りた船が隣に置かれ、審判する箱にはそれぞれ1個のカップしか入れられない。"],"오늘 명단에는 메이린을 올려 두었습니다. 근무지를 정하실 때는 이름을 원하는 방으로 옮기시면 됩니다. 지금은 ‘뒤로’ 가겠습니다.":
["Today I have placed the list on the line.When you set your job, you can move your name to the room you want.","今日のリストにメイリンをアップしました. 職場を設定するとき、名前を望む部屋に移動してください. 今は「後ろ」に行きます。"],"오늘 밤엔 우리랑 한 바퀴 돌자. 온실 지붕에 달이 걸리는 걸 너한테도 보여 주고 싶어. ⋯라고 에밀리가 말했어.":
["Let’s go around with us tonight, I want to show you that the moon takes on the greenhouse roof, Emily said.","今夜、私たちと一緒に一歩を回って行こう! 温室の屋根に月がかかることをあなたにも示したい」とエミリーは言った。"],"이스트엔드의 골목에서 시엘과 소마가 서로 다른 편에 선다. 이튿날 두 사람은 런던 집의 열쇠를 놓고 거래한다.":
["In the street of East End, Ciel and Soma are on the other side, and the two people are handled on the keys to London’s house.","東端の街の丘で、シエルとソマは互いに向かって行き、その翌日にはロンドンの家の鍵を置いて取引する。"],"이튿날 아침, 자물쇠에는 흠집이 하나도 없었다. 경비를 선 사람은 퇴근했고 창고지기는 어제와 같은 질문을 받았다.":
["The morning, there was no one-of-the-clock; the guard went out and the warehouse was asked the same question as yesterday.","翌朝、鍵には一つの欠陥がなかった。支出をしていた人は退職し、倉庫の保管者は昨日と同じ質問を受けた。"],"잠시 뒤 창밖으로 멀어지는 마차 바퀴 소리가 났다. 시엘의 손가락 밑에서 종이 끝이 힘없이 들렸다 가라앉았다.":
["A little later, the wheel was sounded out of the window and under Ciel's finger the paper end was untouched and drowned.","しばらくすると、窓から離れる車輪の音が聞こえた。シエルの指の下で紙の端が無力に聞こえ、沈んだ。"],"제작실에서 먼저 보실 것은 한 개당 원가입니다. 품질도 이곳에 적혀 있으니, 둘을 살핀 뒤 생산량을 정하시는 편이 좋겠습니다.":
["The first thing you will see in the production room is one price per one. quality is also written here, so I would like to set the production amount after two salps.","製造室で最初に見るのは1個当たりの価格です。品質もここに書かれていますので、両方をスルフィンしてその後の生産量を決定するのが良いでしょう。"],"지난번 정리하신 연락망에서 답이 왔습니다. 세 곳에서 똑같은 전보를 수령했는데, 정작 회신할 주소가 제각각입니다.":
["I received the same telephone from three places, and the address to be answered is separate.","前の連絡先から回答が届いたのは、同じ電話を3箇所で受信したが、正直返信するアドレスは別々である。"],"집달리가 난처한 듯 헛기침을 했다. 비어 있던 은쟁반 밑에서 큼지막한 영수증이 한 장 더 삐져나왔다.":
["The house was as a disgrace.A few more rewarding receipts were put down under the empty silver.","家道が混乱したように、空っぽの銀板の下で一つの極端な受付がひっくり返った。"],"집사가 오른손의 흰 장갑을 벗었다. 손등의 계약인과 소년의 오른쪽 눈이 같은 빛으로 서늘하게 얽혔다.":
["The housewife took out the white gloves of his right hand; the contracting man and the boy's right eye were blurred in the same light.","主人は右手の白い手袋を取り出し、手の指の契約者と男の子の右目は同じ光で暗く混ざり合った。"],"창고를 정리하다가 참나무 상자를 한 무더기 찾았습니다. 운송 조합에서 마침 그 규격을 구한다며 수표를 보내왔습니다.":
["I fixed the warehouse and found a wooden box. I sent a cheque from the transportation association that I was just seeking that standard.","倉庫を整理して、真木箱を見つけたが、運送協会から、その規格を求めるようになったチェックを送った。"],"창고에 있는 물건이 장부에 적힌 수량보다 세 벌 모자랍니다. 창고지기는 제 품삯에서 그 값을 빼 달라더군요.":
["The items in the warehouse are three more than the amount written on the warehouse.The warehouse has taken that value from my warehouse.","倉庫にある物は、本書に記載されている金額より3倍の罰金で、倉庫の納税者はその価値を私の財布から引き出した。"],"첫 사람이 말을 성안으로 옮겼다. 두 번째 사람이 문 앞에 섰다. 클럽 회원 일동은 방금 치운 규칙서를 다시 펼쳤다.":
["The first person moved the horse to the castle; the second person stood before the door; the club member's team just opened the rough rules.","最初の人は馬を城に移し、2番目の人はドアの前に立っていたクラブメンバーの連合が、まさに破ったルールを再開した。"],"추수 감사예배 뒤 교회 앞마당에서 수확물 경연이 열립니다. 영지 주민들과 함께 바구니를 꾸리거나 수확물을 배분합니다.":
["After the grace ceremony, a harvest contest will be held in the church front hall. The landscape residents will decorate baskets or distribute the harvest.","収穫後、教会の前庭で収穫コンテストが開催され、先住民と一緒に箱を整理したり、収穫を配布したりします。"],"피니안이 도련님의 손바닥에 작은 열쇠를 살며시 올려놓는다. 오늘은 먼저 들어가 보시겠느냐고 해맑게 묻는다.":
["Pinian puts a small key on his hand in the back of his hand, and he asks him if he will first enter.","フィニアンは、ドシュの手のひらに小さな鍵を持ち上げて、今日はまず入って見るかと明るく尋ねる。"],"합계는 맞았지만 마지막 집 몫을 다른 줄에 써 놓았습니다. 시엘은 배부가 끝나기 전에 잘못 건넨 표를 돌려받습니다.":
["The total was right, but the last house share was written in a different line. Seal gets the wrong ticket back before the distribution ends.","合計は正しいが、最後の家を別の行に書いたシエルは配布が終わる前に間違ったチケットを返します。"],"공방에서 작은 짐수레 세 대를 가져왔다. 시엘은 상자를 뒤집어 경사로를 만들고 아이에게 가장 가벼운 수레부터 내주었다.":
["He brought three small beefs from the airport. Seal turned the box and made a shell and gave it to the child from the lightest shell.","空中から小さな三本の野獣を持ち出したシエルは箱を振り回して、 ⁇ 道を作り、子供に最も軽い ⁇ から取り出した。"],"공연이 끝나면 조커가 돈을 세고, 스네이크는 뱀을 셌다. 오늘은 뱀을 다 세고도 천막을 떠날 수 없었다.":
["After the show, Joker paid money, and Snake was kicking a serpent. Today he had all the serpents and couldn't leave the tent.","ショーが終わったとき、ジョーカーはお金を払い、スネイクは蛇を捕まえ、今日、すべての蛇を捕まえ、テントを離れることはできなかった。"],"그가 손을 잡고 일어서자 바구니에서 에밀리가 따라 나왔다. 소맷부리와 소맷부리 사이, 두 사람의 손등을 건너갔다.":
["When he took his hand and stood up, Emily came out from the basket and passed through the two hands between Somatbury and Somatbury.","彼は手を握って立ち上がったとき、エミリーは箱から追い出され、ソマトブルとソマトブルの間で、二人の手のひらを渡った。"],"남자의 손이 계산대 밑으로 쑥 내려갔다. 등 뒤에서 세바스찬이 묵직한 빈 서랍을 통째로 빼 들었다.":
["The man's hand went down under the calculator; behind his back, Sebastian took out the empty closet.","男の手が計算板の下に下り、背中からセバスチャンが沈黙した空っぽの箱を完全に取り出した。"],"년 6월 21일. 여왕의 행렬이 웨스트민스터 사원으로 향했다. 마지막 마차가 창 아래를 지나자 시엘은 책상으로 돌아섰다.":
["On June 21, the Queen's riding went to the Westminster Temple. When the last car passed under the window, Ciel turned to the table.","6月21日、女王の巡礼がウェストミンスター寺院に向かい、最後の車が窓の下を通り過ぎたとき、シエルはテーブルに戻った。"],"다음 심의의 날짜를 알리는 왕실의 편지가 저택에 당도한 것은 이듬해였다. 편지는 수취인 부재로 궁에 되돌아갔다.":
["The letter of the royal house, which announced the date of the next judgment, was brought to the house and returned to the palace due to the absence of receivers.","次の審判の日付を告げる王室の手紙が家に届いたのは、一時的なことだった。手紙は受信者の欠席で宮殿に戻った。"],"담당관이 휘트컴 상회의 이름을 부릅니다. 시엘은 팬텀사의 견본 곁에 평가표와 거래 장부를 나란히 놓습니다.":
["The representative calls the name of the Whitcom Countries. Seal puts the rating and trading bill next to the sample of the Phantom Company.","担当者はウィットコム会議の名前を呼び、シエルはファンタムサのサンプルのそばに評価表と取引のスケジュールを置く。"],"두 묶음은 모두 뒷면이 빨갛다. 펼쳐 보면 같은 문장이 꼭 두 장씩 짝을 이룬다. 푸른 카드는 한 장도 없다.":
["The two sides are all red on the back; if you see the same phrase, it is only two sides, and the blue card does not have one.","両線は背面が赤い、伸びると同じ文字が2つのカップルで合うだけで、ブルーカードは1つのカップルもない。"],"마지막 우편 마차가 곧 떠납니다. 납품서와 거래처의 답장이 서로 다르군요. 제게 어떤 지시를 내리시겠습니까?":
["The last mailing car will soon leave. the response of the delivery and the deal is different. What instructions would you give me?","最後の郵便車がすぐに出る 配達書と取引所の回答は異なります あなたは私にどのような指示を送りますか?"],"사환이 문 앞에서 나갈 편지 묶음을 기다렸다. 시엘은 자기 앞에 놓인 임시 봉투의 주소를 펜으로 쭉 그어 지웠다.":
["She was waiting for the letter to be bound out before the door, and Seal had a pen-shaped address of the temporary package placed in front of her.","彼は、手紙の封印を待っていたが、シエルは、彼の前に置かれた一時的な袋の住所をペンで描いた。"],"셋째 마디에서 활이 멎자 세바스찬은 피아노 건반에서 손을 뗐다. “반주는 어디서 다시 들어갈까요, 도련님?”":
["When the third word is shining, Sebastian puts his hand on the piano. “Where will the halfway go back, Doyle?”","第三の言葉で弓が吹き飛ばされたとき、セバスチャンはピアノのガバナから手を伸ばす「半州はどこから戻るのか、ドーシュ」"],"손님들은 모두 귀가하셨는데 맨 끝자리의 명찰만 뒤집혀 있습니다. 그분께 오늘 감사 편지를 쓰신다면 어떤 일을 떠올리시겠습니까?":
["The guests were all in the mind, but only the end-point sign is turned.When you write a thankful letter to him today, what would you think of?","ゲストはみんな、おかしくなり、最後の席の指標だけが回転しているので、今日は彼に感謝の手紙を書くなら、何を思い出しただろうか。"],"손님은 저녁상에 오른 요리로도 그 집을 평합니다. \\n팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다.":
["The guests also value the house as a dinner cook. \\nFantomHive requires a chef to re-establish the name of the village.","ゲストは夕食の料理としてその家を評価します \\nファンタムハイブの名称を再建するには、シェフが必要です。"],"시엘은 맨 끝자리의 손님까지 돌아보고 집집마다 보낸 새해 인사에 답합니다. 심사위원이 원고를 읽지 않았다는 데 표시를 합니다.":
["Ciel looks around the final guests and responds to the New Year's greetings spent in each house, indicating that the judge has not read the document.","シエルは最後の席のゲストに目を向け、各家で過ごした新年挨拶に答え、審査員が記録を読んでいないことを示す。"],"시엘은 반송 주소를 쓰다 말았다. 봉투 세 장은 모두 새하얀데, 거기에 오려 붙인 주문표는 세 장이 다 누렇게 바랬다.":
["Ciel wrote the return address.The three bags were all white, and the order cards that came there were all three.","シエルは返送アドレスを書いたが、バッグの3つのカバーは全新白で、そこに付いた注文カードは3つのカバーが何を望んでいたか。"],"시엘은 책상 밑 서랍을 당겼다. 맨 아래 깔아 둔 낡은 여비 봉투에서 반으로 찢긴 기차표가 나왔다.":
["Ciel pulled the box under the table, and a half-broken train card came out from the old garlic bag that was put down.","シエルはテーブルの下に箱を引き出し、その下に置かれた古い女の子の袋から半分折った列車のチケットが出てきた。"],"압류 영장을 든 사내는 모자도 외투도 맡기지 않았다. 현관에 뻣뻣이 서서 금고를 열 수 있는 시각만 물었다.":
["The man with the arrest order had no hat or outdoors; the man stood in the door and asked for a view that he could open the box.","捕獲命令を持ちた男は帽子も外具も与えなかったが、前門に立って箱を開けることができる目だけを尋ねた。"],"엘리자베스가 상장을 받아 들고 시엘에게 손을 흔듭니다. 시엘은 두 사람의 바구니를 심사대에서 내려 줍니다.":
["Elizabeth takes the sign and stretches his hand to Seal; Seal puts down the two baskets from the judgment.","エリザベスは手を引いてシエルに手を振り、シエルは二人の箱を裁判所から下げる。"],"오늘 응접실에 손님이 한 분 더 오십니다. 좌석표에도, 식사 장부에도 자리가 없습니다. 어느 쪽을 먼저 손보시겠습니까?":
["Today, another one guest comes to the reception room. There is no place in the seat tables, even in the dining room. Which side would you first look at?","今日、宿泊施設には1人以上のゲストが来ます 座席も食堂も席はありません どちらの側に先見したいですか?"],"이 정도면 돼. 장갑을 낀 채로도 손가락이 걸리잖아. 내일은 이대로 견본을 하나 만들어서 가게에 갖다줘.":
["You can take your finger with your gloves, and make a sample tomorrow and bring it to the store.","手袋をかぶって指を握るので、明日、このようなサンプルを作って店に持って行け。"],"쟁반이 들려 나가자 탁자 위에 하얗게 동그라미가 남았다. 세바스찬이 얼른 마른 천을 꺼내 들었다.":
["When the stranger went out, a white-blanked dogram was left on the table; Sebastian immediately took out the dry thumb.","戦闘員が聞いたとき、テーブルの上に白く残ったドグラミが残り、セバスチャンはすぐに乾いたタンクを取り出した。"],"휘트컴 상회가 증서를 받는 동안 시엘은 평가표를 견본 상자에 넣습니다. 세바스찬이 거래 장부를 챙깁니다.":
["While the Whitcom Counter-Strike receives certificates, Ciel puts the rating in the sample box.","ウィットコムの会議が証明書を受け取る間、シーエルは評価表をサンプルボックスに置き、セバスチャンは取引の手数料を取ります。"],"그 상자도 여셔도 됩니다. 납품 날짜를 짚어 주시면 그날의 기록도 펴 드리지요. 첫 주문부터 기록이 여기에 다 있으니까요.":
["You can also open the box. if you list the delivery date, we will also open the record of that day. since the first order, the record is all here.","配達日付を記入するなら、その日の記録も開きます.最初の注文から記録はすべてここにあります。"],"꽃잎만 본 앞줄은 맞혔지만 끝의 두 표찰이 뒤바뀝니다. 시엘은 정답표를 접기 전에 잎 모양부터 다시 그려 둡니다.":
["The front line that only saw the leaves was fixed, but the two signs on the end turned. Seal repairs from the form of the leaves before it closes the correct answer sheet.","花の葉だけが見た前線は正しいが、端の2つの標識が逆転するシエルは正解を貼る前に葉の形から再び描く。"],"나무 말 여섯 필과 마차 두 대가 창턱에 올라갔다. 아이들이 고삐를 잡고 늘어서자 시엘이 지휘봉 대신 연필을 들었다.":
["Six horses of wood and two horses of the car went up on the window; and when the children got their hips, he heard a pen instead of the commandant.","木馬の六匹と二匹の車が窓の端に上り、子供たちがひざまずいて、大きくなったとき、シエルは指揮の封の代わりに鉛筆を聞いた。"],"다음 상자에서는 열두 마리가 두 귀를 쫑긋 세우고 나왔다. 백화점은 맨 앞의 한 마리를 상자에 그대로 앉혀 진열했다.":
["In the next box, twelve men came out and put their two ears up; the store sat down one in front of the box and burned.","次の箱の中には、十二人が二つの耳をひっくり返して出て行った。店は前方の1人を箱に座って、熱くした。"],"런던 이스트엔드. 시엘과 세바스찬이 골목을 돌아서자, 일거리를 기다리던 인도인 사내 몇이 둘을 에워쌌다.":
["When Ciel and Sebastian of London East End turned around the street, a few Indian men who were waiting for their job were overlooking.","ロンドン東端のシエルとセバスチャンが街を回ったとき、仕事を待っていたインド人男性が二人を振り回した。"],"모둠 사탕은 잘 팔렸다. 그 손님은 한 봉지를 들여다보다가 기적 소리를 듣고 도로 놓았다. 오늘도 딸아이 몫은 없었다.":
["The dark candy was well sold; the guest had a bag in, but he heard miracles and put it on the road.","暗闇の甘いものがよく売られ、そのゲストは一袋に入って奇跡の音を聞き、道に置いた。"],"새 판에서는 다른 물품에 열일곱 번이 붙었다. 출고표를 맞춰 보니 점원은 세 번 모두 새 도안첩의 번호대로 물건을 보냈다.":
["In the new edition, seventeen times were attached to other goods; according to the outlet, the buyer sent all three times the goods according to the number of the new road sign.","新版では、他の商品に十七回貼り付けられ、出荷表に合わせて、店員は三度新道印の番号で商品を送った。"],"서쪽 지붕 수리비를 또 청구했군요. 지난달에 온 청구서도 가져왔습니다. 손봤다는 자리도, 받아 가겠다는 액수도 같습니다.":
["I have paid a repair for the western roof, and I have also brought a bill last month, where you could see the hand, and the amount to receive.","西の屋根修理を再請求しました.先月来た請求書も持ってきて、手見した場所も、受け取る金額も。"],"수량도 납기도 저쪽에서 써 왔는데 값만 비워 두었군요. 저 펜을 먼저 집는 쪽이 첫 가격을 부르는 셈입니다.":
["The amount and the payment is also written from there, but you have left the price untouched. that pen first calls the house the first price.","金も付けて、そこから書いたが、その値を空かせただけだ。このペンはまず家側が最初の値を呼ぶように。"],"시엘은 기니 금화 한 닢을 세워 탁자 위로 데구루루 굴렸다. 남자가 투박한 손바닥으로 금화를 턱 덮었다.":
["Ciel put a gold coin and rolled the deguuru onto the table, and he covered the gold with a handbag.","シエルはギニーの金貨を一本立って、テーブルの上にデグルーロを振り回し、男が押しつけた手袋で金貨をカバーした。"],"심사위원이 시엘의 앞에 은제 찻숟가락을 놓습니다. 시엘은 그것을 세바스찬에게 맡기고 다시 찻주전자를 듭니다.":
["The judge sets a silver teaspoon before Ciel. He entrusts it to Sebastian and picks up the teapot again.","審査員がシエルの前に銀のティースプーンを置く。シエルはそれをセバスチャンに預け、再びティーポットを手に取った。"],"아래층 제본소에서 쪽지가 왔다. ‘위층 가게가 문을 열기 전에 맡아 둔 상자가 아직 계단을 막고 있다’는 전갈이다.":
["The bottom headquarters came a sign: “The box that the top store had before opening the door is still stopping the stairs.”","下の本部から、『上階の店がドアを開く前に持っていた箱はまだ階段を止めている』という言葉が聞こえてきた。"],"엘리자베스가 상장을 받아 들고 바구니를 챙깁니다. 시엘은 심사대에서 돌아서며 생울타리 쪽을 다시 봅니다.":
["Elizabeth takes the sign and takes the basket. Ciel turns from the court and looks back to the wall.","エリザベスは、その手紙を引き取って箱を取るが、シエルは裁判所から回り、再び生石を見る。"],"엘리자베스의 이름이 불리고 두 사람의 바구니가 심사대에서 내려옵니다. 시엘은 자신의 바구니를 받아 들고 그녀를 기다립니다.":
["The name of Elizabeth is called, and the baskets of two men come down from the court; Ciel takes his basket and awaits her.","エリザベスの名前が呼ばれ、二人の箱が裁判所から降りて来る。"],"여왕의 즉위 50주년을 맞아 런던 상인들이 기념품 경연을 엽니다. 팬텀사가 내놓은 선물에도 기념 리본을 달았습니다.":
["On the Queen's immediate 50th anniversary, London merchants open a souvenir contest and the gifts of the Phantom Company also have a commemorative ribbon.","ロンドン商人が女王の50周年を迎え、記念品コンテストを開く。ファンタム社が贈った贈り物にも記念ラインが付いている。"],"왕실 담당관이 팬텀사의 견본과 장부를 나란히 놓았습니다. 이번 대결에서 이긴 품목은 왕실 납품 인증을 받습니다.":
["The Royal House official has placed the sample and gifts of the Phantom Company, which won in this match is certified as the Royal House delivery.","王室の担当者はファンタムサのサンプルと賞品を付けており、この対戦で勝ったアイテムは王室配達認証を受けています。"],"인쇄소에서 내년 달력의 견본을 보내왔다. 5월 그림에는 태엽을 감는 아이가, 그 발치에는 팬텀사의 목마가 그려져 있었다.":
["I sent a sample of the next year calendar from the printing station: in May, the picture contains a child covering the taffle, and on his foot, the fancy's sheep was drawn.","印刷所から来年のカレンダーのサンプルを送りました 5月の絵には、タフロを覆う子供が描かれていて、その足にはファンタムサの<unk>が描かれていました。"],"집달리가 저택의 열쇠를 받아 들고 서재 문을 닫았다. 두 사람이 앉아 있던 의자마저 그 뒤를 따라 복도로 실려 나갔다.":
["The housewife took the keys of the house and closed the room door; the chair that two people were sitting, was just followed by it and went out into the corridors.","家長は家の鍵を手に入れ、宿のドアを閉め、2人の座っていた椅子もその後で廊下に連れて行った。"],"차를 한 잔 드시지요. 잔은 오른쪽에 두었습니다. 편지를 펼치시기 전에 봉투의 이름부터 확인하시는 걸 잊지 마시기 바랍니다.":
["Drink a glass of the car. The glass is placed on the right side. Please don't forget to check from the name of the pack before you open the letter.","車を飲むと、右側に置いておくと、手紙を開く前に、袋の名前からチェックすることを忘れないでください。"],"팬텀사의 상표를 단 견본을 흰 천 위에 올립니다. 심사위원이 견본을 들어 마감을 살피고 납품 기록을 펼칩니다.":
["The phantom company’s brand is placed on a single sample above the white thousand. Judge examines the sample and ends the record of delivery.","ファンタムのブランドを一つのサンプルを白い千の上にアップします. 審査員はサンプルを採取し、完成を調べ、配達記録を開く。"],"1887년 6월 21일. 여왕의 행렬이 웨스트민스터 사원으로 향했다. 마지막 마차가 창 아래를 지나자 시엘은 책상으로 돌아섰다.":
["On June 21, 1887, the Queen's riding went to the Westminster Temple, and when the last car passed under the window, Ciel turned to the table.","1887年6月21日、女王の巡礼がウェストミンスター寺院に向かい、最後の車が窓の下を通り過ぎたとき、シエルはテーブルに戻った。"],"그럼 내일 아침에 다시 올게. 네 장갑은 조금만 더 빌려 줘. 와일드가 벌써 잠들었어. ⋯라고 오스카가 말했어.":
["So I’m coming back tomorrow morning, and give me a little more to borrow your gloves, and the wild is already asleep.","明日の朝、また来るよ!手袋を少しだけ貸してあげてよ!ワイルドはすでに眠っているんだ!とオスカは言った。"],"런던 성냥공장의 여공들이 일손을 놓았답니다. ……예, 도련님. 조간지와 함께 팬텀사의 하청 명부도 가져다 놓겠습니다.":
["The london shelter factory’s passengers have put one hand. ...Yes, Doyle. I will bring you the fancy list with a short time.","ロンドン・サンジ工場のパフォーマンスが一手を置いた・・・はい、ドシュディーさん、しばらくしてファンタム社の下着リストも連れて行きます。"],"먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?\\n주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요.":
["How do you know it before you hear the dust?\\n It is quite usual to remove what is a dust.","汚れの音を聞く前に、どうやって知るの?\\n主人公に怒ったことを取り除くことはかなり慣れたことでしょう。"],"번 영수증 귀퉁이에 반달 모양 구멍이 있다. 계산대의 환불 집게를 포개 보면, 날이 살짝 이지러진 자리까지 꼭 맞는다.":
["The hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hourly hour","受付金の角には半月形の穴がある.計算部の返済重荷を包み込むと、日が少し落ちた場所まで正しい。"],"새벽안개 속에 템스 강 하역장이 열렸다. 경비가 앞을 막아섰지만 팬텀사의 정식 운송장을 보자 군말 없이 빗장을 풀었다.":
["In the morning, the Tems River subway was opened. the guard stopped ahead but when we saw the official transportation station of the Phantomsa, we released the rainfall without a military speech.","朝の夜明けの中、テムス川下駅が開かれ、警備員は前を止めたが、ファンタムサの公式運送場を見ると、軍語なしで雨場を解放した。"],"성문을 지우니 모두가 무사히 끝까지 갔다. 클럽에서 새로 보낸 편지는 전보다 짧았다. ‘그런데 누가 이긴 겁니까?’":
["The new letter from the club was shorter than before: “But who won?”","城門を消して、みんなは安全に終わりまで行ったが、クラブから送られた新手紙は以前より短かった「しかし誰が勝ったの?」"],"세 벌을 채우고 장부를 덮었다. 저녁에 진열대를 비우자 창고로 세 벌이 더 들어왔다. 아침에는 모자라더니 이번에는 남는다.":
["Three punishments were filled and the booth was covered; and the night, when the hotspace was empty, three punishments were entered into the warehouse; and the morning, when it was unclean, this time it remains.","彼は三つの罰を満たし、その箱を覆い、夜に熱室を空き、倉庫に入った三つの罰が、朝には無く、今度は残る。"],"시엘이 상장을 받자 엘리자베스가 환하게 웃습니다. 세바스찬은 연주석 곁에서 바이올린 케이스를 열어 둡니다.":
["When Ciel is awarded, Elizabeth laughs and Sebastian opens the violin case next to the playground.","シエルが記録を受けたとき、エリザベスは喜んで笑い、セバスチャンは演奏会のそばでバイオリンケースを開く。"],"아직 저택에 돌아와 일할 몸은 아닙니다만, 이것만은 먼저 전해 두고 싶었습니다. 세바스찬 씨, 잠시 손을 펴 주시겠습니까?":
["I’m not quite fit to return to service, but there is something I wanted to give you. Would you hold out your hand, Mr Michaelis?","まだ屋敷に戻って働ける身体ではありませんが、これだけは先にお渡ししたくてね。セバスチャンさん、少し手を出していただけますか。"],"이리 와서 이만큼만 몸을 낮춰 봐. 태엽 말의 머리가 보여야 할 자리에 가격표가 붙어 있잖아. 애들한테는 이렇게 보인다고.":
["Come here and just take your body down. the head of the taffle is placed on the price sheet where it looks like this for kids.","こっちに来て、このだけ体を下げて見てください. タフラの頭が見せなければならない場所に価格表が付いている. 子供たちにはこんな感じだ。"],"후원자의 인쇄 주문에는 ‘아이 쉰 명 무료 초대’라는 글씨가 있다. 극장주의 예상 수입표에는 ‘백 자리 전부 유료’라고 적혀 있다.":
["The sponsors' print order contains the letter 'Children's Free Invitation', and the theater's expected income bill is written 'All 100 points paid'.","ファンからの印刷注文には「子供・十人無料招待」という文字が書かれていますが、劇場主義の予想収入表には「百席全額支払い」と書かれています。"],"27번 영수증 귀퉁이에 반달 모양 구멍이 있다. 계산대의 환불 집게를 포개 보면, 날이 살짝 이지러진 자리까지 꼭 맞는다.":
["27 The receipt corner has a half-month-like hole. If you look at the refund of the accounting unit, the day is right to the place that is slightly overwhelmed.","27号受付証の角には半月形の穴がある.計算部の返金重荷を抱きしめてみると、日が少し落ちる場所まで正しい。"],"고개를 돌렸을 때 세바스찬은 벌써 낯선 남자와 맞붙어 있었다. 마차 한 대가 골목을 지나도록 어느 쪽도 물러서지 않았다.":
["When he turned his head, Sebastian had already been facing a stranger; no one of the cars left until the street passed.","頭を振り回すと、セバスチャンはすでに見知らぬ男と対立していたが、一台の車が通り過ぎるまで、どちらも後退しなかった。"],"도련님, 오늘은 차를 테라스에 내지 않는 편이 좋겠습니다. 아침부터 온도계가 이 눈금까지 오른 건 저택의 6월 기록에도 없더군요.":
["I don’t want to get the car on the terrace today.The temperature meter from morning to this point was not even in the June record of the house.","ドシュ、今日は車をテラスに置かない方が良いです.朝から温度計がこの目まで上昇したのは、家の中の6月記録でもありませんでした。"],"번, 전액 반환.’ 그 옆에는 수령 서명이 있다. 이름 끝에서 펜을 길게 끈 버릇이 오늘 손님이 써 낸 항의장에도 보인다.":
["The same, the full return.’ next to that there is a receiver signature. The habit of hanging the pen long from the end of the name is also visible in the protest desk written by the guest today.","まあ、全額返金」と、その隣には受信署名があり、名前の端からペンを長く縛る習慣は、今日のゲストが書いた抗議場にも見える。"],"시엘은 바닥에 닿은 영수증 끝자락을 잡아챘다. 그 밑으로 똑같은 무늬의 영수증이 줄줄이 딸려 올라왔다.":
["Ciel took the receipt end to the ground, and under it the same wire receipt line was hanged up.","シエルは、地面に触れた受付の端を捕まえ、その下に同じ ⁇ の受付の線がつながった。"],"시엘이 손을 내밀었다. 스네이크는 손바닥을 바지에 한 번 닦고, 옷깃 위로 올라온 오스카 쪽으로 귀를 기울였다.":
["Ciel stretched his hand. Snake washed his handbags on his pants once and hearing the Oscars that went up onto the clothes.","シエルは手を伸ばし、スネイクはパンツに手のひらを洗い、着物の上に上ったオスカに向かって耳を傾けた。"],"에드워드가 인사를 마치고 자리로 돌아옵니다. 사회자가 시엘의 이름을 부르자, 시엘은 원고를 접어 두고 손님들 앞으로 나섭니다.":
["Edward ends the greeting and returns to his place.When a sociologist calls Ciel's name, Ciel leaves the booklet and goes forward to guests.","エドワードは挨拶を終え、席に戻る。 社会人がシエルの名前を呼び出したとき、シエルは手紙を置き、ゲストの前に進む。"],"운송업자의 장부에 팬텀사 몫으로 네 자리를 더 잡았다. 다음 출하부터 추가 운임 없이 보낼 수 있는 물량이 월 16개에서 20개로 늘었다.":
["The carrier's assembly took four more seats as a fancy share. the quantity that could be sent without additional charges from the next departure increased from 16 to 20 months.","運送業者の補助金にファンタムサの割合でさらに4席を占め、次の出荷から追加料金なしで送ることができる量が16個から20個まで増加した。"],"접니다. 바삭하게 마른 종이를 옮기다 낱장이 달아날까 염려되어서요. 풀기 전에 그 말씀부터 올리는 편이 옳겠다 싶었습니다.":
["I was worried about moving the dirty paper.I was worried about the word to be taken up before it was released.","うん、やっぱり、あの紙をきれいに切り替えると心配して、文字が逃げるかどうかにかかわらず、解放する前にその言葉から上に立つ側が正しい。"],"짙은 어둠 속에서 악마가 본래의 입을 열었다. 시엘의 마지막 숨을 따라 빠져나온 영혼을, 세바스찬은 남김없이 삼켰다.":
["In the darkness, the devil opened his original mouth; the soul that went out after the last breath of Ciel, Sebastian swallowed without a left.","暗闇の中、悪魔はその本の口を開き、シエルの最後の息を追って出た魂を、セバスチャンは無くして飲み込んだ。"],"찻잔은 제때 돌렸지만 탁자 끝의 손님 몫은 식고 말았습니다. 시엘이 새 물을 부어 주는 사이 심사 종료 종이 울립니다.":
["The cup was turned right in time, but the guest part at the end of the table was broken and dry. The paper ended the trial between Seal's wasting new water.","グラスは正しく回転したが、テーブルの端のゲストは食い尽くし、シエルが新しい水を注ぎ込む間に、裁判の終わり紙が鳴る。"],"찻잔을 내려놓을 자리도 없이 점포가 붐볐다. 시엘은 비스킷 여섯 장과 포장지 한 장을 들고 계산대 앞으로 갔다.":
["The store was full without a place to put the cup down. Ciel took six biscuits and one package and went forward to the calculator.","ワインを下ろす場所もなく店が満員で、シエルは6つのケーキと1つのパッケージを持って計算室に進んだ。"],"팬텀사의 진열창 앞에서 화가가 화판을 접었다. 그가 그려 둔 자리에 백화점의 새 모자를 한 주만 전시하게 해 달라는 편지가 도착했다.":
["In front of the fancy's fire window, the painter was on a fireboard and a letter came to him to show the new hat of the store for a week.","ファンタムサの熱窓の前で画家が火板を叩き、彼が描いた場所に店内の新しい帽子を1週間しか展示せないようにする手紙が届きました。"],"그해 겨울, 런던 부두가에 팬텀사의 새 지점이 문을 열었다. 사장실 벽에는 매출표와 항만 입항표가 나란히 걸렸다.":
["In that winter, a new point of the Phantom Company opened in London's shore, and the headquarters walls were alongside the sales and port tickets.","冬、ロンドン・ブドウガーでファンタムサの新しい拠点が開かれ、会堂の壁には売り手と港のみ入場券が付いて行った。"],"나무패는 모두 스물여섯 개다. B가 두 개이고 D가 없다. 두 B의 모서리에는 갓 마른 파란 칠이 똑같이 묻어 있다.":
["The trees are all twenty-six; B is two and D is not; the corner of two B is buried in the same way with a newly dry blue shell.","木の ⁇ は全部二十六個、Bは二つ、Dは無い。2Bの角には、新鮮な青い ⁇ が同じように埋められている。"],"다른 다실에서 돌려보낸 비스킷은 어느 것이나 똑똑 잘 부러졌다. 며칠 뒤 같은 선반에 놓아둔 통에서만 또 눅눅한 것이 나왔다.":
["The cake returned from another room was smarterly broken; a few days later, only the water that was placed on the same rack came out of the wet.","他のダルシルから返されたケーキは、いずれも賢く壊れており、数日後に同じ棚に置かれた箱からまた湿ったものが出てきた。"],"스네이크는 타운하우스에서 소마와 아그니를 만났다. 본저택에서 시엘과 이야기를 나눈 뒤, 뱀들과 함께 풋맨으로 일하기로 했다.":
["Snake met Soma and Agni in Townhouse, after talking to Ciel at the headquarters, he decided to work as a footballer with the serpents.","スネイクはタウンハウスでソマとアグニーに会い、本部の家でシエルと話した後、蛇と一緒にサッカーマンとして働くことに決めた。"],"‘27번, 전액 반환.’ 그 옆에는 수령 서명이 있다. 이름 끝에서 펜을 길게 끈 버릇이 오늘 손님이 써 낸 항의장에도 보인다.":
["“27th, full return.” next to it is the receiver signature. The habit of hanging a pen from the end of the name is also visible in the protest desk written by the guest today.","「27号、全額返金」とその隣には受信署名があり、名前の端からペンを長く縛る習慣は今日ゲストが書いた抗議場にも見える。"],"남자가 눈을 피했다. 세바스찬이 운송장 석 장을 가지런히 겹쳐 들었다. 세 장 모두 같은 자리에서 펜촉이 종이를 뚫고 나갔다.":
["The man escaped his eyes.Sebastian heard the three chapters of the carrier, and all three chapters went out from the same place with a penny to break through the paper.","男は目を避け、セバスチャンは運送場の三章をひっくり返して聞き、3章も同じ場所でペンタックが紙を突っ抜けて出て行った。"],"다음 공연의 표 값이 두 배가 됐다. 후원자는 새 가격표를 밀어 놓고 이번 장부부터 펼쳤다. “그래서, 제가 초대한 아이들은 어느 줄입니까?”":
["The next show’s ticket value was doubled. the sponsor pushed a new price list and opened from this section. “So, what kind of children I invited?”","次の公演のチケット価値が倍増した。スポンサーは新しい価格表を押し、この場から広がった「だから、私が招待した子供たちは何のラインですか?」"],"동틀 무렵, 의사가 일어서며 시계를 보았다. 세바스찬도 탁자 위 시계를 보았다. 두 시계가 가리키는 분은 여전히 달랐다.":
["At the same time, the doctor stood up and saw the clock; Sevaschand also saw the clock on the table; the two clocks were still different.","午後中、医師が起きて時計を見たセバスチャンもテーブルの上の時計を見た。"],"봉랍의 한쪽이 납작해. 봉랍이 굳기도 전에 누가 그 위에 서류를 얹었군. 이대로 궁에 보낼 수야 없지. 다시 봉하겠다.":
["One side of the bar is shattered.Who has placed the papers on it before the bar is hard, so you can't send it to the palace.","封筒の片側が取り上げられ、封筒が固まる前に誰がその上に書類を置いたのか?こんな感じで宮殿に送る必要はない。"],"부두에선 우리 보고 인도로 돌아가라더군. 거기선 너희 나라 사람들이 일자리를 차지하고 있는데 말이야. 도련님은 어느 쪽으로 가라고 할 텐가?":
["We saw you and returned to India. there your people are taking jobs. where would you ask you to go?","ブドゥーで私たちを見てインドに戻って来たのだが、そこであなたの国の人々が仕事を占めているのだから、あなたはどこへ行くべきか?"],"시엘은 한 집에서 두 번 적어 낸 몫을 찾아냅니다. 남은 곡물까지 계량을 끝내자 심사위원이 장부와 저울의 수를 대조합니다.":
["Ciel finds the part of one house twice written. After the measurement is completed to the remaining grain, the judge compare the number of cuts and cuts.","シエルは一つの家で二度記録された部分を見つけ、残りの穀物まで測定を完了すると、裁判官は、収穫と収穫の数を対決します。"],"시엘의 이름이 불리자 엘리자베스가 두 손을 모아 박수를 칩니다. 시엘은 바이올린을 맡기고 상장을 받으러 나갑니다.":
["When the name of Ciel is called, Elizabeth gathers both hands and praises; Ciel takes the violin and goes out to receive a sign.","シエルの名前が聞こえると、エリザベスは両手を集め、賛美する。"],"시엘이 빈 둥지 밑을 살짝 들추자 금빛 달걀이 굴러 나옵니다. 엘리자베스가 직접 묶은 작은 리본이 달려 있습니다.":
["When Ciel is slightly swallowed under the empty nest, the golden egg runs out, and a small ribbon that Elizabeth has directly bound is hanging.","シエルが空っぽの巣の下を少しずつ振り回すと、金色の卵が流れ出る。"],"애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.\\n이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요.":
["I did not take it to the beginning because I could not be a high-end user in this large house.","最初に、私はこの料理を持ち込んだのは、料理のスキルを見ることではない\\n 十分な大屋の上級ユーザーが私の一人になれないからだ。"],"얼스 코트 이탈리아 박람회가 열리는 달입니다. 인근 상인회의 공예품 품평회에 팬텀사와 모레티 공방이 견본을 내놓았습니다.":
["It is the month in which the Icelandic Exhibition takes place. The Phantom and Moretti Aircraft presented sample at the nearby trade union’s craftsmanship evaluation.","イスコートイタリア展が開催される月です 近くの商人会議でファントマサとモレティ空軍が手紙を展示しました。"],"왕실 납품 담당관이 견본을 받아 들고 거래 장부를 요청합니다. 대결에서 이기면 출품한 품목이 왕실 납품 인증을 받습니다.":
["The Royal Delivery Officer receives the sample and requires a transaction grant. If you win in the match, the items presented will receive the Royal Delivery Certificate.","王室配達担当者はサンプルを受け入れ、取引の補助金を要求します 対戦で勝った場合、提出されたアイテムは王室配達認証を受けます。"],"왼쪽 위 달력에서 현재 날짜와 전체 35개월 중 몇 개월째인지 확인할 수 있습니다. 오른쪽 위 명패에는 시엘의 나이와 가문의 보유금이 표시됩니다.":
["In the upper left calendar, you can check the current date and how many of the total 35 months are. The upper right card shows the age of Seal and the family deposit.","左上のカレンダーでは、現在の日付と35ヶ月のうちの数が確認できます。右上のカードには、シエルの年齢と家族の保有料が表示されます。"],"저택 메인 화면의 ‘대화’에서 화제를 고르면 시엘의 반응을 볼 수 있습니다. ‘상태’에서는 컨디션·스트레스와 각 능력치를 확인할 수 있습니다.":
["If you choose the theme in the ‘conversation’ on the home main screen, you can see the reaction of Ciel. In ‘state’, you can check the condition stress and each ability value.","ホームメインスクリーンの「会話」でテーマを選択すると、シーエルの反応を見ることができます。"],"저택에서 ‘대화’로 부르시면 제가 듣겠습니다. ‘상태’에서는 도련님의 컨디션과 능력을 보실 수 있습니다. 피곤하시면 다음 한 순은 비워 둘까요?":
["If you call me ‘conversation’ at home, I will hear. in ‘state’ you can see your condition and abilities. if you are tired, do you let the next one be empty?","家で「会話」と呼ばれるなら、私は聞くだろう。『状態』では、ドーシュの条件と能力を見ることができる。疲れたら次の純粋を空かせてくれますか?"],"처음 이 집에서 아침상을 차리던 날엔 손이 떨렸습니다. 왕자님께는 비밀로 해 주시겠습니까? 오늘이라면 웃으며 말씀드릴 수 있겠군요.":
["The first day I was in this house, my hand was twisted. - Can you tell the Prince a secret? - Today I can laugh and tell you.","朝の朝をこの家で初めて食べたとき、手が揺れていたのだろうか?王子に秘密を伝えるのか?今日なら笑って話すことができるだろう。"],"처음엔 혼날까 봐 부러진 가지를 숨겼어요. 이건 제가 실수로 부러뜨린 거예요. 그런데 보세요! 붙여 놓은 데서 새잎이 났어요!":
["I first got a broken branch, but I’ve been broken by mistake.","最初は、混ざり合うか見て壊れた枝を隠したが、これは間違って壊れたのだが!それで見て!そこから葉が落ちた!"],"판지로 만든 다리 밑에 종이배를 달았다. 손잡이를 한 바퀴 돌릴 때마다 무대 한쪽에서 뱃사공이 나타나 모자를 벗어야 한다.":
["The paper bar is put under the foot made of paper. Every time you turn a handheld one round, a sailman appears on one side of the stage and must take off the hat.","紙製の足の下に紙のボートを置いたが、手袋を一輪回すたびに舞台の片側に水手が現れ、帽子を取り出す。"],"관리 · 경영’의 저택 지도에서 방을 누르면 개수 효과와 비용을 확인할 수 있습니다. ‘사용인 배치’에서 인물을 고르고 근무할 방을 누릅니다.":
["In the home map in Management and Management, you can check the number effects and costs by pressing the room to select the person in ‘User Placement’ and pressing the room to work.","管理・管理のホームマップで部屋を押すと数値効果とコストが確認されます。"],"그날부터 전당포 창에 불이 켜지면 뒷골목에 수군거림이 돌았다. 값을 깎지 않고 제값을 치르는 외눈의 손님이 온다고.":
["From that day, when the fire was lighted in the front window, a water shake turned back to the street.","火が灯り、その日から、前台の窓に火が点灯したとき、後ろの街に水軍の震動が回った。"],"다음 날에도 그 손님은 검은까치밥을 찾았다. 주인은 고개를 저었다. 팔꿈치 바로 옆에 ‘자두’라고 적힌 병이 사탕으로 그득했다.":
["The next day the guest found a black cabbage; the owner had a head up, and the bottle of “sandy” in front of the arm was filled with sweets.","翌日も、そのゲストは黒いカチバッグを見つけ、主人は頭をひっくり返し、腕のすぐそばに「サドー」と書かれたボトルが甘いもので満たされた。"],"답신 봉투가 반송되어 돌아왔다. 연회는 어제 끝났다. 조간지에는 좌석표까지 실렸는데, 주빈 바로 옆 한 칸에만 이름이 없었다.":
["The answered package was returned and the party ended yesterday. the seat was placed in the short, but there was no name in just one canon next to Zhuvin.","返信された袋が送られて帰って来た、パーティーは昨日終わった、朝の席まで投票したが、ジュビン正側の1つのカンだけに名前がなかった。"],"도련님, 커튼은 잠시 그대로 두시지요. 밤새 창 안쪽까지 얼었습니다. 올 12월은 기록적인 한파로 남겠군요. 차는 난롯가에 준비했습니다.":
["The curtain is still in place for a while. it has frozen to the window all night. this December will be a record-long halo. the car is ready for the Nano.","ドジョー、カーテンをしばらく置いておいて、一晩中窓の内側まで凍りついた12月は記録的なハンファで残るだろう。"],"세바스찬은 탁자 위 수첩을 펼쳤다. 오래전에 멎어 있던 날짜들 밑에, 그날 새벽의 시각을 반듯하게 적어 넣었다.":
["Sebastian sparked a letter on the table, and under the dates that were long ago, he glorified the sight of the morning that day.","セバスチャンはテーブルの上に手紙を広げ、長い間見ていた日付の下で、その日の朝の視線を輝かしく書いた。"],"시엘은 멍든 자리를 골라내고 바구니 밑에 짚을 덧댑니다. 심사위원이 열매를 하나씩 들어 보아도 밑면의 손상이 없습니다.":
["Ciel chooses the hole place and adds a spoon under the basket. The judge hears the fruit one by one, but there is no damage to the bottom.","シエルは、ゴムの席を選び、箱の下に ⁇ を加え、裁判官が果実をひとつずつ聞くにもかかわらず、下側には損傷はありません。"],"시엘은 잎 뒷면의 털과 줄기가 갈라지는 높이를 비교해 표찰을 놓습니다. 심사위원이 마지막 화분을 돌려 보다가 고개를 끄덕입니다.":
["Ciel sets a mark comparing the height of the hair and stems on the back of the leafs, where the judge turns the last piece and throws his head.","シエルは、葉の後ろに毛とストレッチが分裂する高さを比較して標識を置き、裁判官は最後のスケールを振り返り、頭をひっくり返す。"],"일주일 동안 시엘은 결재를 하면서 피아노 연습을 들었다. 금요일쯤에는 어느 마디에서 틀릴지까지 알았다. 가문 명성 +2 · 스트레스 +6":
["For a week, Ciel was playing piano and he heard the practice of the final. on Friday, about, I knew what word was wrong. Family reputation +2 · Stress +6","1週間の間、シーエルは結論を出してピアノ練習を聞いたが、金曜日の頃にはどの言葉が間違っているか知っていた。"],"지난겨울 주문표를 보낸 세 사람에게는 이제 맞는 물건이 갔다. 네 번째 손님은 새 책에서 주문표를 오렸다. 그 집에도 목제 완구가 배달됐다.":
["Three of the people who sent the order tickets last winter, now the right thing went; the fourth guest came the order tickets from the new book.","昨年の冬の注文チケットを送った3人に、今は正しい物が届きました。4番目のゲストは新しい本から注文チケットを届けました.その家にも木製のパッケージが配達されました。"],"지난번에 셋에게 집을 맡겼을 때 말입니다. 돌아와 보니 밖에서도 식당 안이 훤히 보이더군요. 원래 벽이 있던 쪽으로요.":
["The last time I gave them the house, and when I came back, I saw the restaurant inside and outside, where there was a wall.","最後に3人に家を渡したとき、帰ってきて外にもレストランの内側がかわいそうに見えた。"],"첫 손님이 오기 전에 제가 통을 열었습니다.’ 주인은 그 한 줄을 쓴 편지를 찌그러진 통에 넣어 보냈다. 뚜껑은 오는 길에 빠져 있었다.":
["I opened the gate before the first guest came.”The owner sent the letter that had one line in the cutting gate.","最初のゲストが来る前に、私は門を開けた」と主人はその一行を書いた手紙を、ひらめきの門に置いて送った。"],"‘관리 · 경영’의 저택 지도에서 방을 누르면 개수 효과와 비용을 확인할 수 있습니다. ‘사용인 배치’에서 인물을 고르고 근무할 방을 누릅니다.":
["In the home map in ‘Management and Management’, you can check the number effects and costs by pressing the room to choose the person in ‘User Placement’ and pressing the room to work.","「管理・管理」のホームマップで部屋を押すと、数値効果とコストが確認されます。"],"‘첫 손님이 오기 전에 제가 통을 열었습니다.’ 주인은 그 한 줄을 쓴 편지를 찌그러진 통에 넣어 보냈다. 뚜껑은 오는 길에 빠져 있었다.":
["“I opened the gate before the first guest came,” the owner sent the letter that was written in one line and put it into a stinking gate.","「最初のゲストが来る前に、私は通路を開いた」と主人は一行を書いた手紙を、ひきこもった通路に置いて、カバーが来る道に落ちていた。"],"개학 날, 첫 연주회 초대장이 두 장 왔다. 아이들이 한 장은 도련님께, 다른 한 장은 지붕을 고친 수리공에게 썼다. 가문 명성 +5":
["On the opening day, the first play conference invitation came two chapters. one of the children wrote to the Doyle, the other chapter to the repairers who fixed the roof.","開学の日、最初の遊び会の招待状が2章来た。子供たちは1章をドシュタインに書き、もう1章は屋根修理した修理師に書いた。"],"뚜껑 안쪽에 왼쪽 귀 끝이 찍혀 있다. 받침 종이를 빼면 귀가 뚜껑에 닿지 않고, 토끼는 상자 속에서도 똑바로 선다.":
["The left ear end is drawn inside the cover.When the paper is removed, the ear does not touch the cover, and the rabbit is straight in the box.","封筒の内側には左耳端が描かれています. 封筒紙を取り除くと、耳は封筒に触れず、ウサギは箱の中でも直線を指します。"],"메리가 계단에서 상자를 밀어 올리고 위층 주인이 상자를 받아 인수증에 서명했다. 점심때는 따끈한 파이가 같은 계단을 내려왔다. 메리의 몫이었다.":
["Mary pushed the box up from the stairs and the top owner took the box and signed the acquisition. at lunch, a thin pigi came down the same stairs that was Mary's part.","メリーは階段から箱を押し上げ、上層のオーナーが箱を受け取って買収書に署名した。昼食の時に、熱いピアが同じ階段を下りて行った。"],"봉제 인형 둘을 무대에 올리고 시엘이 바이올린을 턱 밑에 댔다. 인형을 든 점원이 고개를 끄덕이자 첫 박이 울렸다.":
["The two puzzled dolls were raised on stage and Ciel put the violin under his neck. The shopman with the dolls was hearing his head and the first night sounded.","ふたりのバンクを舞台に上げて、シエルはヴァイオリンを首の下に投げつけ、人形を着た店員が頭をひっくり返して、最初の夜が鳴った。"],"봉투에는 폐하의 존호를 빠짐없이 써 놓고, 편지의 첫 줄에는 평소에 쓰던 호칭을 적었군. 새 종이를 줘. 첫 줄은 내가 쓰지.":
["I put the sign of the rubber on the box without a break, and in the first line of the letter I wrote the name that I used to write. give me a new paper.","封筒に、廃棄物の名称を無駄に書き、手紙の最初の行には、通常のタイトルを書いた。新しい紙をあげて、最初の行は私が書いている。"],"사우스켄싱턴에서 식민지·인도 박람회가 열렸습니다. 박람회 주간에 맞춰 런던 상인들이 여는 별도 견본 품평회에 출품합니다.":
["The South Kensington Colonial and Indian Exhibition is held, presenting the London traders at a separate sample evaluation meeting in the week of the exhibition.","南ケンシントンで植民地・インド展が開催され、展示週間に合わせてロンドンの商人が開く別々のサンプル評価会に出演する。"],"새 마부가 빈손으로 위층 문을 두드렸다. 아래층 직공은 종이 한 짐을 안고 계단의 상자를 넘어야 했다. 오늘만 해도 벌써 세 번째였다.":
["The new man knocked the upper door with his empty hands; the lower headquarters had to carry a paper bag and cross the box of the stairs, which was already the third time.","新しいマウスが空っぽの手で上階のドアを叩き、下階の直職員は紙の荷物を持ち、階段の箱を渡らなければならなかった。"],"식탁에 빈 의자가 하나 늘었다. 주최자는 좌석표에 그린 숟가락을 짚었다. “그분은 오늘 저녁에도 여기에 앉으실 수가 없어요.”":
["One empty chair was added to the table.The host put a green glass on the seat tab. “He can’t sit here even tonight.”","テーブルに空っぽの椅子が上がり、主催者は座席に緑色のグラスを貼り付け、「今夜もここに座ることはできない」と。"],"왕실 납품 담당관이 팬텀사의 견본과 거래 장부를 함께 봅니다. 해당 품목이 대결에서 이기면 왕실 납품 인증을 획득합니다.":
["The Royal Delivery Officer will see the sample and the transaction balance of the Phantom Company together. If the item wins in the match, it will obtain the Royal Delivery Certificate.","王室配達担当者はファンタムのサンプルと取引の手数料を組み合わせて見るが、その商品が対戦で勝利した場合、王室配達認証を取得する。"],"이스트엔드의 전당포는 새벽 한 시에도 셔터를 반쯤 치켜올려 두고 있었다. 시엘이 허리를 숙여 들어서자 어둠 속에서 값부터 날아왔다.":
["The East End's army had left the shutter up about half in the morning, and Ciel was swallowing his back and flying from the price in the dark.","東端の前線は、朝1時ごろにもシャーターを半分に上げていたが、シエルが背中を振り回して、暗闇の中から値から飛んでいた。"],"저 끝자리에 앉은 손님만 한 박자씩 늦게 웃으십니다. 저 의자에 앉으면 옆에서 말을 옮겨 줘야 들리는 모양이군요.":
["The guest sitting on that end seat only laughed a bit later, and when he was sitting on that chair, he would have to move his voice from the side.","最後に座っているゲストだけが、一瞬ずつ遅く笑うのだが、その椅子に座ったら、そばから話を動かすべきだと思う。"],"직원은 흰 표를 반듯이 접어 묶은 꾸러미를 꺼냈다. 쉰 장이었다. 극장주는 아까 그 말을 들은 사람들을 도로 불러 모아야 했다.":
["The staff took out a white-called coat, which was a shell, and the theater had to bring people who had heard it before.","スタッフは白いチケットのように、つながった飾りを取り出したが、それは ⁇ の場だった。劇場主はこれまで聞いた人々を道に招き集めなければならなかった。"],"창밖의 아이들을 보십시오. 하나는 수레바퀴를, 하나는 마부의 모자를 가리키는군요. 같은 장난감을 두고 무슨 이야기를 저렇게 열심히 하는 걸까요?":
["Look at the children out of the window, one is a wheel, one is a hat of a shark. What is the story that you are so hard about for the same toy?","窓の外の子供たちを見てください、1人はスレローカー、1人はマッサージの帽子を指します。同じおもちゃについて何がそんなにストーリーを苦労しているのでしょうか?"],"공장 견본은 세워도 두 귀가 선다. 돌아온 토끼의 왼쪽 귀를 손으로 쭉 펴 봤다. 손을 떼면 똑같은 곳에서 접힌다.":
["The factory sample is set and two ears are handed. I looked the left ear of the returning rabbit with my hand, and when I pull out my hand, it is attached from the same place.","工場のサンプルを立てても二つの耳が先に立っている。帰ってきたウサギの左耳を手で伸ばし、手を切り離したとき、同じ場所から貼り付けている。"],"그 종이를 챙겨. 팬텀하이브가 왕실에 문전박대당했다는 소식이라면, 오히려 반가워서 빗장을 풀 놈이 하나쯤은 있을 테니까.":
["If the news is that the fantacy had been pushed to the royal house, it would be more pleasant that there was one who was pulling the rainfall.","もしファンタムハイブが王室にドアを押しつけられたというニュースだったら、むしろ喜んで雨場を打ち切る男が1人くらいあるだろう。"],"런던의 타운하우스. 스네이크는 봉투에 적힌 번지와 눈앞의 문패를 번갈아 보았다. 목도리 속에서 오스카가 먼저 고개를 내밀었다.":
["The London Townhouse Snake looked to the shell and the doorbreaks on his bag, and in the hole Oscar first pulled his head.","ロンドンのタウンハウス・スネイクは、袋に書かれたバンジと目の前のドアパックを振り返り、オスカが最初に頭を押した。"],"를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다.":
["In the development room you can set the goods, in the production room you can set the quantities, in the sale store you can set the value. If the class fee is low, it is better to reduce this production amount a little.","開発室では商品、製造室では量、販売店では値を設定する必要があります。授業料が不足したら、この生産量を少し減らす方が良いでしょう。"],"잉크를 말릴 때 쓰는 모래군요. ……다만 묘한 점이 있습니다. 차기 심의 칸은 백지인데, 발신 인장과 날짜는 오늘 자로 찍혀 있습니다.":
["It is the sand that we use when drying ink. ......There is a strange thing.The next sun's can is white, the transmission sign and date are recorded as today.","インクを乾かすときに使われる砂だ・・・ただ奇妙な点がある。今日の心のカンは白い、送信印と日付は今日で記録されている。"],"팬텀사 신제품 시식회 비용입니다. 도련님께서 재료가 성에 안 찬다며 공정을 열일곱 번이나 갈아엎고 직접 맛을 보시겠다고 하셨지요.":
["The Phantomsa new product test conference costs.Dossi said the material was not in the castle and he would change the process ten times and taste it directly.","ファンタムサ新製品試験会の費用です. ドシュは、材料が城に栄光がないと、プロセスを十七回変え、自分で味わうことを言いました。"],"한 달에 한 곳을 방문할 수 있습니다. 일정표의 ‘자유행동’에서 장소를 고르면 하순 일정이 끝난 뒤 방문합니다. 방문하지 않을 때는 ‘방문 생략’을 선택합니다.":
["You can visit one place a month. If you choose a place in the ‘Free Action’ in your calendar, you will visit it after the final schedule is over. When you don’t visit, you will select ‘Move visit’.","月ごとに1か所を訪れることができます. 日程表の「自由行動」で場所を選択すると、日程が終了した後に訪問します. 訪問しない場合は「訪問を無視する」を選択します。"],"1?btn(\"설비 매각 · \"+money(Math.floor(room.cost*(level-1)*.5)),\"liquidate:\"+id,!active):\"\")+\"":
["1?btn(\"Sales of equipment · \"+money(Math.floor(room.cost* (level-1)*.5)),\"liquidate:\"+id,!active):\"\")+\"","1?btn(「設備販売 · 「+money(Math.floor(room.cost*(level-1)*.5))、」liquidate:\"+id、!active):\"\")+」"],"그럼 왜 잡혀갔는지도 똑바로 알아 둬. 네가 같이 지낸 단원들이 공연을 다니면서 아이들을 납치했어. 야드가 쫓고 있던 건 그 사건이야.":
["So, make sure you’re getting caught.The men with you kidnapped the children while going to the show.Yard was pursuing that incident.","だから、なぜ捕まったのかを直ちに知りなさい. あなたと一緒にいた団体が演奏中に子供たちを誘拐した. ヤードが追いかけていたのはその事件だ。"],"도련님, 이달 일정표를 가져왔습니다. 날짜는 위쪽 달력에, 잔금은 명패에 적어 두었습니다. 아래의 ‘일정표’를 여시면 제가 설명드리겠습니다.":
["I have a month schedule, the date is on the calendar above, the reserve is on the list. If you open the ‘date’ below, I will explain to you.","月の日程を持ち込んだ、日付は上の日程に書いており、残りは紙に書いており、下の「日程」を開いて説明します。"],"매출 장부는 펴 보실 때마다 숫자가 늘지요. 그런데 금요일에 줄 품삯은 모자랍니다. 자, 외상 장부와 주문서 가운데 어느 쪽부터 펴시겠습니까?":
["The sales boards are increasing whenever you look at them, but the boards on Friday are a little.Where do you get from the traumatic boards and the orderboards?","売り上げの手紙が開くたびに数が増えていますが、金曜日に与える手紙は帽子です。 さて、トラウマの手紙と注文書の間のどの側から開くのでしょうか?"],"본저택 온실 앞에서 마차가 멎었다. 스네이크가 바구니 뚜껑을 조금 들자 납작한 머리들이 볕 드는 돌턱으로 하나씩 미끄러져 나왔다.":
["The car was shut down in front of the home’s greenhouse.Sneik had a little bit of the basket cover and the hair that had been made, one by one flown out with a sunny stone.","本屋温室の前で車がひっくり返った。スネイクは箱のカバーを少しずつ取り上げて、毛がかわいそうにした頭が一つずつ太陽の石の尾に滑り出した。"],"아그니는 빈 쟁반을 거두는 동안에도 소마에게서 시선을 떼지 않는다. 세바스찬이 그 빈틈없는 손놀림을 유심히 지켜본다.":
["Agni does not take his eyes away from Soma even while he is picking the empty bowl; Sebastian looks carefully at that empty handwashing.","アグニーは、空の戦線を集めながらもソマから目を離さない。セバスチャンはその空き手のひらを注意深く見ている。"],"에드워드가 찻주전자를 내려놓자 사회자가 다음 차례인 시엘을 부릅니다. 시엘은 손님들의 찻잔을 하나씩 살피며 탁자로 다가갑니다.":
["When Edward puts the cup of the cock, the socialist calls Ciel, the next time, Ciel looks at the guest’s cups one by one and goes to the table.","エドワードがカップを下ろすと、社会人は次回のシーエルを呼び、シーエルはゲストのカップを一つ見てテーブルに近づく。"],"자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다.":
["Free Action is a vacant can for your output. you can set one place in a month. you can set with whom you will talk after arrival.","自由行動は、道の出るために空っぽなカンです. 1ヶ月に1つの場所を設定することができます. 誰と何を話すかを決定するには到着後にできるでしょう。"],"전단에 찍힌 값이 한 줄씩 밀렸다. 손님들은 제 물건 밑에 적힌 값을 셌고 점원은 그 돈을 받았다. 벌써 가게 밖까지 줄이 서 있었다.":
["The price on the prey was pushed one-line; the guests were pushing the value under my stuff and the buyer received that money.","出場に撮影された値段が一行ずつ押しつけられ、ゲストは私の物件の下に書かれた値段を押しつけ、店員はそのお金を得た。"],"타나카가 조끼에서 회중시계를 꺼내 세바스찬의 흰 장갑 위에 올려놓았다. 은제 뚜껑에는 팬텀하이브가의 문장이 새겨져 있었다.":
["Tanaka took a pocket watch from his waistcoat and laid it in Sebastian’s white-gloved palm. The Phantomhive crest was engraved on its silver case.","タナカはベストから懐中時計を取り出し、セバスチャンの白い手袋の上に載せた。銀の蓋にはファントムハイヴ家の紋章が刻まれていた。"],"기록을 남길 칸과 음악·효과음의 크기는 여기서 정하실 수 있습니다. ‘마치기’를 누르시면 연습은 끝입니다. 이달의 첫 명령을 기다리겠습니다, 도련님.":
["You can set the size of the record and the music and effect here. if you press ‘Finish’, the exercise is over. I will wait for the first command of this month, Mr. Doyle.","記録を残すカンと音楽・効果のサイズはここで設定できます. 「完成」を押すと練習が終わります. 今月の最初の命令を待つでしょう、ドーシュさん。"],"새 통은 벽난로 건너편 마른 찬장에 두었다. 사흘 뒤 다실에서 작은 소포가 왔다. 편지는 없고, 반으로 똑 부러진 비스킷 하나가 들었다.":
["The new cage was placed on the dry cage over the cage; three days later a small cage came from the cage, no letters, and I heard one half-broken biscuit.","新しい箱は、壁の向こう側に乾いた箱に置かれたが、3日後には、ダシルから小さな箱がやって来たが、手紙もなく、半分に直ぐ壊れたケーキを1つ聞いた。"],"세바스찬이 찻잔 하나를 들고 돌아왔다. 소마는 벌써 시엘 옆에 앉아 있었다. 등 뒤에 선 아그니가 마침 컵을 하나 더 꺼내던 참이었다.":
["Sebastian came back with one cup; Soma was already sitting next to Ciel; the back of Sun Agni was true that he had finally taken out another cup.","セバスチャンは一杯を持ち帰って来たが、ソマはすでにシエルのそばに座っていたが、背後には、サン・アグニーがもう一杯を引き出した。"],"시엘 팬텀하이브야. 아그니가 편지를 든 손님이 온다고 했는데, 네가 그 녀석인가? 거기 내 장갑을 깔고 누운 녀석은 일행이고?":
["Ciel Phantom Hayve. - Agni said that a guest with a letter came, and you are the one?","シエル・ファンタムハイヴァー・アグニは手紙を持ってゲストが来ると言ったが、あなたはその人?そこに私の手袋を着て寝ていた男は一行?"],"시엘은 뜨거운 물을 따로 내고, 양옆의 손님에게도 차의 농도를 묻습니다. 빈 찻잔에 손을 대지 않던 손님이 먼저 두 번째 잔을 청합니다.":
["Seal takes the hot water apart, asking the guests on both sides the concentration of the tea. The guest who has not put his hand in the empty cup first requires the second cup.","シエルは熱い水を分け、両側のゲストにもお茶の濃度を尋ねる。空っぽのカップに手を伸ばさないゲストはまず2回目のカップを求めます。"],"시엘은 축을 깎은 날짜와 판매 기록을 하나씩 맞춰 봤다. 수리하러 갈 집의 주소를 다 적고 나서야 펜을 놓았다. 통찰 +8 · 스트레스 +8":
["Ciel had a shed date and sales record one by another. He wrote the house's address and then put his pen on the way to repair. View +8 · Stress +8","シエルは、軸を切った日付と売上記録を1つずつ調べたが、修理に行く家のすべての住所を書き込み、ペンを置いた。"],"왕실 납품 담당관이 심사대 앞에 앉았습니다. 견본과 거래 장부를 함께 심사하며, 대결에서 이긴 품목에 왕실 납품 인증을 내립니다.":
["The Royal Delivery Officer is sitting in front of the judgment board, examining samples and trading assets together, and issuing a Royal Delivery Certificate on the items won in the match.","王室配達担当者は審査室の前に座り、サンプルと取引の手数料を一緒に検討し、対戦で勝ったアイテムに王室配達証明書を発行します。"],"은쟁반 한복판에 물 한 방울이 떨어졌다. 쟁반을 옮기자 식탁보가 젖었다. 천장을 열어 보니 오래된 수도관의 이음매가 벌어져 있었다.":
["A drop of water fell on the silver-powered plate. when the plate was moved, the table was wet. when the roof opened, the old monastery's water was made.","銀の半分の片段に水が落ちて、戦場を移動したとき、食卓が濡れていた。天井を開けたとき、古い修道院のイエメが起こった。"],"진열대 세 곳에서 떼어 낸 꼬리표에는 같은 창고 번호가 적혀 있다. 판매용 꼬리표 구석에 손으로 써 넣은 ‘진열 중’이라는 글씨도 같다.":
["The mark that is removed from the three places of the heating zone has the same warehouse number written, as the hand-written “in the heating” in the coin of the mark for sale.","熱帯から3箇所から切り離された標識には、同じ倉庫番号が書かれています.販売用標識の角に手で書かれた「熱中」という文字も同様です。"],"책상 위 지도에는 항구와 여관 두 곳, 그리고 폐쇄된 역의 옛 이름이 붉게 찍혀 있었다. 지난 35개월간 왕실의 눈을 피해 발품으로 긁어모은 자리들이었다.":
["On the map above the table, two ports and two hostels, and the old name of the closed station were drawn red in the past 35 months, where the royal house was scratched by the output.","テーブルの上の地図には港と宿泊施設2つ、閉鎖された駅の古い名前が赤に描かれていた。過去35カ月間、王室の目を避けるために、出品でひきこもった場所があった。"],"‘자유행동’은 도련님의 외출을 위해 비워 둔 칸입니다. 한 달에 한 곳을 정하실 수 있습니다. 누구와 무슨 이야기를 나누실지는 도착한 뒤에 정하셔도 됩니다.":
["“Free Action” is a vacant can for your output. you can set one place in a month. you can set with whom you will talk after arrival.","「自由行動」は、ドシュの出るために空っぽなカンです.一ヶ月に1つの場所を設定することができます.誰と何を話すかを到着後に決定することができます。"],"견본은 벌써 마차에 실었는데 수령증은 내 책상에 있잖아. 이대로면 궁에서 누가 견본을 받았는지 모르겠군. 수령증을 한 부 더 써.":
["The sample was already on the car, but the receiver is on my desk. I don't know who received the sample in the palace.","サンプルはすでに車に置かれていますが、受信証は私のテーブルにあります.このように宮殿で誰がサンプルを受けたか分からない.受信証をもう一つ書く。"],"규칙서의 첫 장에는 빨간 문장 카드 열두 장과 푸른 열쇠 카드 열두 장이 그려져 있다. 성문에 닿은 사람은 푸른 카드 한 장을 내야 한다.":
["The first chapter of the book contains twelve red sentence cards and twelve blue key cards; the person who touches the gate must give one blue card.","ルール書の最初の章には、赤い文字カード12章と青い鍵カード12章が描かれています。"],"도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.\\n구인 광고를 내도 좀처럼 찾기 힘들겠지요.":
["You have the ability to protect you, and in a position that cannot be betrayed, and who has verified your ability directly.\\ngoin ads will be hard to find as I do.","あなたを守る能力があり、裏切れない状況にあり、あなたがその能力を直接確認した人です。\\nつい広告を見つけるのは少しでも難しいでしょう。"],"열한 장에는 손님의 이름이 하나씩 적혀 있다. 나머지 한 장에는 ‘먼저 떠나는 요리사 엘런에게’라는 글귀가 있다. 엘런은 오늘 저녁상을 마지막으로 은퇴한다.":
["The tenth chapter contains one-on-one guest names, the rest of the chapter contains a letter: “First to the cook Ellen.”","十章には、ゲストの名前が1つずつ書かれていますが、残りの章には「まず離れる料理人エレンに」という文字があります。"],"유리병에는 ‘자두’, ‘검은까치밥’ 종이표가 하나씩 붙었다. 제과장이 병마개에 매단 맛표를 읽어 보니 종이표와는 각각 반대로 적혀 있다.":
["The glass bottle contains a paper label ‘sandy’, ‘Black Kashib’ one by one.The manufacturer read the Madan taste label on the sick bottle and each with the paper label is written in contrast.","ガラスボトルには「サドー」、「黒カチボブ」紙のタグが一つずつ貼り付けられ、作師は病馬のマダン味のタグを読んで、紙のタグとそれぞれ逆に書かれている。"],"남자가 등불을 푹 내렸다. 뒷걸음질 치던 구두 굽이 승강장 끝에 걸려 휘청였다. 흰 장갑을 낀 손이 그의 팔꿈치를 우아하게 붙들었다.":
["The man dropped the lamps, and his back-step mouth was hanging at the end of the lift; his hand with white gloves elegantly sticked his arm.","男は灯を下げて、後歩を振った口のひらが登山場の端にぶつかった。白い手袋をかぶった手が彼の腕を優しく握っていた。"],"런던 다리를 앞두고 팬텀사 짐마차의 차축이 부러졌다. 빌린 마차 셋에 짐을 나눠 싣고 마지막 한 대가 도착하고서야 상점의 문을 열었다.":
["The car crashed in front of the London Bridge, and the three rental car baggage was split into the last one when the last one arrived, and the store's door opened.","ロンドン橋の前で、ファンタムサ・ジムマッカーのクルーズが壊れ、3台に荷物を分け、最後の1台が到着した直後に店のドアを開けた。"],"부활절 예배가 끝나자 엘리자베스가 정원의 문을 엽니다. 리본을 단 달걀을 찾거나, 예배를 마친 손님들에게 바이올린 한 곡을 들려주세요.":
["After the Pentecost worship, Elizabeth opens the door to the garden, find a single egg in the ribbon, or hear a violin song to the guests who have finished worship.","イースターの礼拝が終わったとき、エリザベスは庭園の扉を開け、リボンに卵をみつけたり、礼拝を終えたゲストにバイオリン曲を聞いたりします。"],"세바스찬이 시엘의 방문에 손을 대자 문이 안에서 열렸다. 시엘은 벌써 옷깃을 여미고 있었다. 아그니가 빈 세숫대야를 들고 길을 비켰다.":
["Sevashan opened his hand to Ciel's visit in the door of the gate; Ciel was already wrapping his clothes; Agni took the empty three-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-tree-t","セバスチャンはシエルの訪問に手を開け、ダザの門の中から開かれたが、シエルはすでに着物を着ていた。"],"수확제 장터에 왕실 담당관이 자리를 잡았습니다. 출품할 팬텀사 제품 한 점을 고르세요. 견본과 그 품목의 납품 기록이 함께 심사대에 오릅니다.":
["The Royal House officer took a place in the harvesting plant. Choose one point of the Phantom Company products to present. Samples and the delivery records of the items come together to the judgment.","収穫場で王室の担当者が席を占め、プレゼントするファンタムサ製品を選択し、サンプルとそのアイテムの配達記録が一緒に審査室に届きます。"],"열일곱 번은 목제 완구다. 지난겨울에만 쓴 테두리 무늬가 있다. 손님들이 오려 낸 주문표 세 장에도 이 판본의 눈송이 장식이 한 귀씩 남았다.":
["Seven times is the wood shell. there are only last winter-written border shells. three chapters of the order tab that guests have come, even this paper's eye shell has been decorated with one ear.","七十回は木の ⁇ だ、昨年の冬だけに書かれた境界線がついている。ゲストが届いた注文表の三章にもこの紙の眼鏡が飾られた耳が一つ残っている。"],"열일곱.’ ‘열일곱.’ 세 번째 손님은 ‘열일곱’ 밑에 줄까지 그어 보냈다. 시엘은 겨울 것과 이번 것, 도안첩 두 권을 나란히 펼쳤다.":
["The third guest sent him to the line under the “Seven” and Seal spread two books alongside the winter and this, the two of the rows.","七十」と「七十」の三番目のゲストは、十七の下に線まで送り、シエルは冬とこの二冊の道の手紙を一方で広げた。"],"좌석표에 적힌 손님 이름은 열하나다. 주최자는 좌석표 아래 여백에 조그맣게 숟가락을 그리고 ‘마지막 한 분께는 주방으로’라고 써 두었다.":
["The guest name on the seat table is open; the host wrote a little cup of water under the seat table and “the last one is in the kitchen.”","座席に書かれたゲストの名前は開け、主催者は座席の下に百分の小さなグラスを置き、「最後のひとりにはキッチン」と書いてあった。"],"첫 거래를 청하는 편지가 왔다. ‘우선 저희 가게의 진열대 하나를 채울 만큼만.’ 주문은 작고, 선금을 치르겠다는 대목에는 밑줄이 두 번 그어져 있다.":
["The first letter to request the deal came: ‘First enough to fill one of our store’ order is small, and the subline to pay the money is drawn twice.","最初の取引を求める手紙が来た「まず、店の熱帯板1つだけ満たすだけ」注文は小さく、送金するというタイトルには下線が2回描かれています。"],"체스 클럽에서 한 상자를 붙들고 일곱 판을 뒀다. 일곱 판이 모두 성문 앞에서 끝났다. 여덟 번째 판을 권하자 시엘은 말부터 치우고 상자를 뒤집었다.":
["He held one box in a chess club and put seven editions. The seven editions all ended before the castle gate. When he recommended the eighth edition, Ciel wiped out of his horse and turned the box.","チェスクラブで1箱を握り、7枚のボックスを置き、7枚のボックスはすべて城門の前で終わった。8枚目のボックスを推奨したとき、シエルはそのボックスを切り落とし、ボックスを振り返った。"],"타운하우스 문이 열렸다. 피니안이 시엘의 외투를 받고 메이린이 모자를 받았다. 바르도는 젖은 장갑을 말리겠다며 부엌에서 집게를 들고 나왔다.":
["The door of the townhouse opened.Pinyan got Ciel's outtouch and Mayrin got a hat.Bardo was going to dry his wet gloves and took his shirt out of the kitchen.","タウンハウスのドアが開かれ、フィニアンはシエルの外出を受け、メイリンは帽子を受け、バルドは濡れた手袋を乾かしてキッチンからトイレを持ち出した。"],"‘열일곱.’ ‘열일곱.’ 세 번째 손님은 ‘열일곱’ 밑에 줄까지 그어 보냈다. 시엘은 겨울 것과 이번 것, 도안첩 두 권을 나란히 펼쳤다.":
["“Tenteen.” “Tenteen.” the third guest sent to the line below “Tenteen.” and Ciel spread two books alongside the winter and this, the road.","七十七」と三十七」のゲストは、十七の下に線まで送り、シエルは冬とこのこと、二つの道の手紙を一方で広げた。"],"금화가 묵직하게 건너가자 금고 밑바닥에서 진짜 선하증권이 나왔다. 팬텀하이브가 불타던 밤, 은밀히 출항한 배의 이름도 거기 박혀 있었다.":
["When the gold coin passed silently, a real goodwill came out from the bottom of the box. The night when the PhantomHive burned, the name of the ship that secretly flew was also sealed there.","金貨が静かに通り過ぎると、箱の底から真の善良証券が出てきた。ファンタムハイブが燃えた夜、秘密に出発した船の名前もそこに押し付けられていた。"],"마지막 모퉁이를 도는데 발밑에 등자가 없었다. 다음으로 시엘이 본 것은 눈앞의 젖은 모래였다. 깔린 어깨가 아프다는 건 숨을 한 번 들이켠 뒤에야 알았다.":
["There was no lightning under the foot to go to the last corner; then what Ciel saw was the wet sand in front of his eyes; and he knew that his shpatches were sick, only after they breathed.","最後の角を歩くために足の下にライトがなかった、次にシエルが見たのは目の前にある濡れた砂だった。"],"새벽 두 시에 울리기 시작한 마을 종이 동틀 무렵에야 멎었다. 이웃 헛간의 불은 꺼졌고, 시엘의 베개는 어제 펴 놓은 모양 그대로였다.":
["The town’s paper, which began to sound at two o’clock in the morning, was just in the midday; the fire of the neighbor’s fool was shut down, and Ciel’s jersey was as it was opened yesterday.","朝2時から鳴き始めた町の紙は、午前中にしか鳴らなかったが、隣人の荒野の火は消え去り、シエルの枕は昨日開けたようにあった。"],"수확제 장터에 왕실 납품 심사대가 섰습니다. 팬텀사에서 만든 제품 한 점을 골라 출품하세요. 담당관이 견본과 지금까지의 납품 장부를 살핍니다.":
["The Royal Delivery Audit Board stands on the harvesting plant. Choose one point of the product made by Phantom and present it. The representative is looking for sample and the delivery fee to date.","収穫部門に王室配達審査員が立っている.ファンタムサで作られた製品を選び、プレゼントしてください.担当者はサンプルとこれまでの配達の手数料を調べます。"],"시엘은 자를 대고 두 표를 한 줄씩 짚어 내려갔다. 선박의 입항일과 수상한 돈줄이 움직인 날짜가 맞물리는 한 줄에서 자가 딱, 멎었다.":
["Ciel took two votes on a line, and he was just, on a line that came to the date of the ship's entry date and the suspected money line moving.","シエルは、船を振り回して2票ずつ一行ずつ下りて行った。船の入場日と疑わしい金線が動く日付が直面する一行で、その人は、まさに、ひっくり返した。"],"응접실을 넓힌 덕에 거래처 손님을 한 팀 더 받을 수 있다. 세바스찬은 새 찻잔을 꺼내 놓고, 시엘이 회중시계를 덮을 때까지 기다렸다.":
["Thanks to the expanding reception room, one more team of shop guests can be received.Sebastian took out a new cup and waited until Ciel covered the meeting clock.","リビングルームを広げて、店内のゲストが1チームも受けることができたセバスチャンは新しいカップを取り出し、シーエルが会議の時計を覆うまで待っていた。"],"장부를 처음부터 뒤져도 그런 물건을 내보낸 기록은 없었다. 시엘이 사람들 앞에서 담당자의 이름을 거두는 동안 경시청은 두 가게를 따로 찾아가 영수증을 받았다.":
["After the buyer from the beginning, there was no record that such items were issued; while Ciel had taken the name of the officer before the people, the police department visited both shops separately and received a receipt.","店を追いかけて、最初からそのような物品を発送した記録はなかったが、シエルが人々の前で担当者の名前を集めるとき、警備局は2つの店を別々に探して受領書を受け取った。"],"조항마다 도련님의 뜻대로 됐더군요. 상대도 군말 없이 서명했고요. 다만 도련님께서 악수를 청하셨을 때, 그분은 벌써 문고리를 잡고 계시더군요.":
["The word was made according to the desire of the Doyle; the opponent also signed without a military word; but when the Doyle asked for a good one, he had already taken the letter.","各条項は、ドシュの意志に従って行われたが、相手も軍語なしで署名したが、ドシュが悪水を求めたとき、彼はすでに文書を握っている。"],"첫 번째 비스킷은 똑, 소리를 내며 부러졌다. 두 번째 것은 시엘의 엄지가 닿은 자리만 움푹 들어갔다. 다실 주인의 말로는 두 통을 다 어제 처음 열었다고 한다.":
["The first biscuit was straight, sounded and broken; the second was just moving into the place where Ciel's hand was touched; the owner said that the two doors were opened yesterday for the first time.","最初のケーキは直、音を出して壊れ、2番目はシエルのハンジが触れた場所だけに動き入った。"],"검수인이 인수증을 펴는 사이 주방 문이 열렸다. 엘런의 손에는 막 끌러 낸 리본이 있었다. 호텔 주인은 인수증을 끝까지 읽기 전에 검수인에게 사과했다.":
["The kitchen door was opened between the inspectors opening the acquisition.Elan's hand had a barrel that just pulled out.The hotel owner apologized to the inspectors before he read the acquisition until the end.","検察官が買収書を開いた間、キッチンドアが開かれ、エレンの手には、直ぐに引き出したリボンがあり、ホテルのオーナーは買収書を読み終える前に検察官に謝罪した。"],"눅눅한 쪽은 밤새 김이 오르던 찻주전자 바로 위 선반에 있었다. 통의 한쪽이 찌그러져, 손으로 꾹 눌러도 뚜껑이 꼭 닫히지 않는다.":
["The wet side was on the upper rail that Kim had come all night; one side of the gate was shaken, but by hand pressing the cover didn't be closed.","湿った側は、キムが一晩中来たカットドライヤーの直上にあった。通道の一面がチグし、手で押すとカバーは必ずしも閉まらない。"],"돈통에 한 페니가 남습니다. 장부대로라면 거스름돈이 누군가의 주머니에 한 닢 덜 들어간 셈이지요. 방금 계산한 손님들이 아직 가게 안에 계십니다.":
["One penny remains in the money pocket.The money is like a bit less in someone's pocket.The guests just counted are still in the store.","金庫にペニーが残っている、お金の流れが誰かのポケットに入ったかのように、もう1個少ない人がいる、今すぐ計算したゲストはまだ店内にある。"],"를 엽니다. 개발실에서 상품을 개발하고, 제작실에서 생산량을, 판매점에서 판매가를 정합니다. ‘이달 자금 예상’에서 수업료를 포함한 월말 잔액을 확인할 수 있습니다.":
["Open the product in the development room, set the production volume in the manufacturing room, and the sales price in the store. In ‘Monthly Fund Forecast’ you can check the monthly balance sheet including class fees.","開く開発室で商品を開発し、生産室で生産量を設定し、販売店で売り上げ価格を設定します。『月間資金予想』では、授業料を含む月末のバランスを確認できます。"],"시엘이 맨 위에 놓은 배는 빛깔이 좋았지만 밑에 깔린 두 알이 눌렸습니다. 심사위원이 꺼내 놓은 두 알을 보고 바구니 높이를 다시 잽니다.":
["The boat that Ciel placed on top was colorful but two eggs were pressed down.The judge took out the two eggs and looked at them and dropped the basket again.","シエルが上に置いた船は色が良かったが、下にふたつの卵を押し付け、裁判官が取り出した二つの卵を見て、箱の高さを再び振り回す。"],"창고지기가 어제 돌려받은 완구를 내밀었다. 손님은 거들떠보지도 않았다. “그래서 내 돈은요?” 창고지기는 완구를 든 채 같은 사연을 처음부터 들어야 했다.":
["The warehouse had taken out the back of the book yesterday.The guest didn’t even look at it. “So what is my money?” the warehouse had to hear the same story from the beginning with a back of the book.","倉庫の店員は昨日返された ⁇ を引き出したが、ゲストは見つからず、「だから私の金は?」倉庫の店員は ⁇ を引き出して最初から同じ物語を聞かなければならなかった。"],"회수한 표는 푸른 유료표 오십 장과 흰 초대권 오십 장이다. 푸른 표에 찍힌 값을 모두 더하면 동전함 속 금액과 한 푼도 어긋나지 않는다.":
["The returned tickets are fifty blue payments and fifty white invitations. If you add all the values on the blue ticket, it is not in contrast with the amount in the coin box and a penny.","返済されたチケットは青い支払い券の50枚、白い招待券の50枚です。青いチケットに記録されたすべての値を加えると、コインボックス内の金額と1ポンドも対立しない。"],"사우스켄싱턴에서 식민지·인도 박람회가 열렸습니다. 런던 상인들도 그 주에 맞춰 별도의 견본 품평회를 엽니다. 팬텀사가 이곳에 낼 물건을 준비했습니다.":
["The colonial and Indian exhibition was held in South Kensington, where the London traders also opened a separate sample evaluation for that week.","南ケンシントンで植民地・インドの展覧会が開催され、ロンドンの商人たちもその週に合わせて別々のサンプル評価会を開き、ファンタム社はここに物品を用意した。"],"세 손님은 지난겨울에 골라 둔 목제 완구를 받았다. 다음에 찍은 주문표에는 번호 옆에 판본의 이름이 붙었다. 종이를 아무리 바짝 오려도 둘이 함께 남게끔.":
["The three guests received the wood package selected last winter; the following order card was named next to the number, so that they both stay together, no matter how close the paper is.","ゲスト3人は昨年の冬に選んだ木のパッケージを受け取ったが、次回撮影した注文表には番号の隣にパッケージの名前が付いており、紙がどんなに近いかどうかにかかわらず二人とも一緒に残るようにした。"],"오늘 날짜는 왼쪽 위 달력을 보십시오. 연도 옆에는 서른다섯 달 중 몇 달째인지 적어 두었습니다. 저택의 오른쪽 위 명패에는 도련님의 나이와 가문의 잔금이 있습니다.":
["Today's date is the calendar on the top left. next to the year, we have written how many of the thirty-five months are. on the top right of the house, the list contains the age of the Lord and the family reserve.","今日の日付は左上のカレンダーを見て、年付に三十五ヶ月のうち何ヶ月かを記録し、家の右上の紙には、ドーシュの年齢と家族の残りがある。"],"유리장에 올릴 완구를 하나만 골라 달랍니다. 태엽 인형이 인사를 할 때는 어른들이 보시더군요. 아이들은 그 옆에 있는 수레를 직접 굴려 보고 싶다는 눈치고요.":
["When the taphon doll greeted, adults saw it.The children noticed that they wanted to see the shell right next to it.","ガラスに持ち上げるための ⁇ だけを選ぶことが異なります. タフォル人形が挨拶するとき、大人たちが見てきました. 子供たちはその隣の ⁇ を直ちに振り回したいと気づきます。"],"같은 판에서 구운 비스킷을 세 통에 나누어 담았다. 공장에 남긴 한 통도 열어 봤다고 한다. 검식 쪽지의 마지막 줄에는 ‘오늘 아침 바삭하게 부러졌다’고 적혀 있다.":
["The cooked biscuit was divided into three panels on the same edge, one panel left in the factory said to have opened, and the last line of the test sheet wrote: \"Today morning I broke down.\"","同じ板から焼いたケーキを3つの通に分け、工場に残した1つの通道を開けたと言い、検査の通道の最後の行には「今朝バッサクに壊れた」と書かれています。"],"시엘이 창가의 꼬리표를 뒤집자 창고지기가 제 글씨를 알아봤다. 장부에는 진열란이 생겼고, 창고지기는 품삯을 받았다. 봉투를 뜯을 일도 없었다.":
["When Ciel turned the window's tag, the warehouse saw my letter; the warehouse had a hot-and-course, and the warehouse was honoured; there was no time to cut the bag.","シエルが窓の ⁇ を振り回したとき、倉庫の店員は私の文字を見た。店には熱い穴があり、倉庫の店員は尊敬され、袋を切ることもなかった。"],"문제의 완구는 팔리기 전에 수거됐고 경시청은 상회 수사에 들어갔다. 그 뒤로도 팬텀사에는 초청장을 든 사람들이 찾아왔다. “그럼 여기에 적힌 백작님의 이름은 뭡니까?”":
["The issue was collected before it was sold and the police entered the executive investigation. After that, people with an invitation came to Phantom: “So what is your Count’s name here?”","問題の ⁇ は売却前に収集され、警報局は競合調査に入り、その後もファンタムサに招待状を持ちの人々が来た「ここに書かれた君の名前は何ですか?」"],"수확제 장터에 올해의 왕실 납품 심사대가 섰습니다. 팬텀사 제품 가운데 출품할 한 점을 고르세요. 담당관은 그 물건을 지금까지 어떻게 납품해 왔는지도 살핍니다.":
["The refinery has been held at the Royal Supply Audit of the year. Choose one point to present among the Phantom Company products. The official is also looking forward to how they have delivered the goods so far.","収穫部門には今年の王室配達審査所が立っている。ファンタムサ製品の中から一つのポイントを選び、担当者はこれまでの商品をどのように配達したかも見る。"],"우리 집에는 이거 하나뿐이에요.” 아이는 아까와 똑같이 대답했다. 세 번째로 묻기 전에 어머니가 나무패를 도로 상자에 담았다. 맨 앞 한 칸은 끝내 비어 있었다.":
["This is only one thing in our house.”The child answered the same as before.Before he asked for the third time, his mother put a tree-bone in the road box.The front-end cane was empty and ended up empty.","わたしたちの家にはこれだけがある」と子供は前回と同じように答えた。三度目の質問をする前に、母は木の ⁇ を道路箱に入れた。"],"이 필체를 쓰는 분은 몸이 열 개라도 모자라겠군요. 같은 날 런던과 도버 양쪽에 동시에 계셨으니. 이름만 빌려줬거나, 솜씨 좋은 대리인을 두셨나 봅니다.":
["The one who uses this film may have ten bodies, and he was on both sides of London and Dover at the same time, and he only borrowed him a name or had a good agent.","このフィルツを書く人は、体が十匹もないかもしれないし、同じ日にロンドンとドーバーの両側に同時にいたので、名前だけ借りたのか、かわいらしい代理人を置いたのかもしれない。"],"타운하우스 문이 열렸다. 피니안이 외투를, 메이린이 모자를 받았다. 바르도가 부엌 집게로 시엘의 장갑을 집으려 하자 타나카가 말없이 은쟁반을 내밀었다.":
["The door of the townhouse opened.Pinyan went out, and Mayrin got a hat.When Bardot tried to take Ciel's gloves into the kitchen, Tanaka threw out his silver ball without saying.","タウンハウスの扉が開かれ、フィニアンは外出し、メイリンは帽子をかぶった。バルドーがキッチンハンガーでシエルの手袋を取りようとしたとき、タナカは無言に銀のパンを投げ出した。"],"거래처 주인은 어제 온 짐이 없다고 썼다. 마부는 자기가 직접 짐을 내려놓았다고 했다. 빈 마차를 끌고 모퉁이를 도는데 그제야 학교 종이 울리더란다.":
["The shop owner wrote that he had no baggage yesterday.Maru said he had left the baggage himself down.The empty car was pulled and the corner was rolling out, and then the school paper sounded.","店主は昨日、荷物が来ていないと書いたが、マブーは自分で荷物を下ろしたと言った。空の車を引き出して角を走るだけで、学校紙が鳴った。"],"수확제 장터 한쪽에 왕실 납품 심사대가 들어섰습니다. 팬텀사 제품을 한 점 고르세요. 담당관은 견본 옆에 그 품목의 납품 장부를 펴 놓고 심사합니다.":
["On one side of the harvesting plant, the Royal Delivery Auditors entered. Choose a point for the Phantom Company product. The representative will open and review the delivery board of that item next to the sample.","収穫の場の片側に王室配達審査室が入ってきて、ファンタムサ製品を選び、担当者はサンプルのそばにその項目の配達を広げて検討する。"],"인수증의 서명 밑에는 ‘아래층 보관, 메리’라고 적혀 있다. 발주서의 배달 지시에는 ‘위층 매장, 주인에게 직접’이라고 적혀 있다. 번지는 같고 마지막 줄이 다르다.":
["Under the signature of the acquisition is written ‘Lower Stock, Mary’; in the delivery instructions of the issuance is written ‘Lower Stock, directly to the owner’.","買収証明書の署名の下には「下層保管、メアリー」と書かれていますが、発送書の配達指示には「上層店、オーナーに直接」と書かれています。"],"“우리 집에는 이거 하나뿐이에요.” 아이는 아까와 똑같이 대답했다. 세 번째로 묻기 전에 어머니가 나무패를 도로 상자에 담았다. 맨 앞 한 칸은 끝내 비어 있었다.":
["“This is only one thing in our house,” the child answered the same as before, and before asked for the third time, his mother put a tree-bone in the road box.","「我が家にはこれだけだ」と子供は前回と同じように答えた。三度目の質問をする前に、母は木の ⁇ を道の箱に入れた。"],"두 가게의 주인은 모두 문제의 완구를 팬텀사에서 받은 적이 없다. 주인들은 서로 다른 날 상회 대표에게서 물건을 샀다. 각자 제 돈통에 넣어 둔 영수증에 같은 대표의 서명이 있다.":
["The owners of both stores never received the problem's coverage from the Phantom.The owners bought things from the representatives of the competition on a different day. Each has the same representative signature on the receipt placed in his own wallet.","二つの店の所有者は、ファンタムサから問題の補償を受けたことがないが、所有者は異なる日に会議代表から商品を買った。それぞれ自分の財布に置かれた受付書には同じ代表者の署名がある。"],"매달 열여섯 개까지는 지금 내는 운임으로 보낼 수 있습니다. 열일곱 개째부터 하나에 3파운드씩 더 들지요. 연말까지 네 자리만 미리 사 두시면 스무 개까지 웃돈을 아낄 수 있습니다.":
["You can spend up to sixteen per month with the current pay. you will cost three pounds more from the seventh to one. If you buy four points in advance until the end of the year, you can save up to twenty laugh money.","毎月十六個まで、今の給料で費やすことができます。十七個から1ポンドあたり3ポンド増えています.年末までに4枚しか買わないと、二十個まで笑お金を節約できます。"],"여덟 번째 판에서 클럽의 막내가 푸른 카드 한 장을 내고 말을 성안으로 옮겼다. 클럽의 대국 기록에는 첫 승자의 이름이, 그 아래에는 열쇠를 보내 준 팬텀사의 이름이 적혔다.":
["In the eighth edition, the club's master gave a blue card and moved his horse to the castle. The club's Grand Prix record contained the name of the first winner, and below it was the name of the fancy that sent the keys.","クラブの第8版では、クラブのマスターがブルーカードを1枚投げて馬を城に移した。クラブの大国記録には、最初の勝者の名前と、その下に鍵を送ったファンタム社の名前が書かれていた。"],"편집용 ZIP을 Windows PC에서 압축 해제하고 Play-on-phone.cmd를 실행하세요. 같은 Wi-Fi에 연결한 휴대폰의 Safari 또는 Chrome에서 PC에 표시된 주소를 열면 됩니다. PC에 Python 3이 필요합니다.":
["Discompress the editing ZIP on Windows PC and run Play-on-phone.cmd. You will open the address displayed on your PC in Safari or Chrome of your phone connected to the same Wi-Fi.","編集 ZIP を Windows PC から解縮し、Play-on-phone.cmd を実行します。同じ Wi-Fi に接続されている携帯電話の Safari または Chrome で PC に表示されたアドレスを開きます. PC には Python 3 が必要です。"],"경찰이 두 완구점에서 같은 상회의 장난감을 거둬 갔다. 속에 마약이 들어 있었다. 다행히 아이에게 팔린 것은 아직 없었다. 두 가게에서 그 완구가 놓였던 자리는 팬텀사 제품 바로 옆이었다.":
["The police took the same gift toys in the two shops, there was a drug inside, and unfortunately nothing was sold to the child yet; the place where the shops were placed in the two stores was right next to the Phantomsa products.","警察は2つの店で同じ店の玩具を捕まえ、その中に麻薬が含まれていたが、幸いにも子供に売られたものはまだなかった。"],"관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다.":
["If you look at the room on the map of management, you can look at the facilities and workplaces. Before ordering a number, check the cost and the administrative status of the month. If you need snacks, we will bring you to the ‘shop’ in the home menu.","管理・管理の地図で部屋を振り回すと、施設や職場を振り回すことができます。数を注文する前に費用と月間の管理状態を見てください.お菓子が必要な場合は、宿泊メニューの「店」に連れて行きます。"],"종이표가 자두인 병에서는 검은까치밥 향이 났다. 주인은 그제야 두 병을 씻던 날의 이야기를 꺼냈다. 물에 젖을까 봐 종이표를 떼어 한데 두었다고.":
["The paper sheet was in the bottle that was shed with a black-couch-bottle smell.The owner just told the story of the day he washed two bottles.","紙の印が詰まったボトルには黒カチバブの香りがあったが、主人はその日2本の瓶を洗った日の物語を出した。"],"‘관리 · 경영’에서 ‘팬텀 사(社)’를 여십시오. 개발실에서는 상품을, 제작실에서는 수량을, 판매점에서는 값을 정하시면 됩니다. 수업료가 모자라겠다면 이번 생산량을 조금 줄이는 편이 좋겠습니다.":
["In ‘Management · Management’ open the ‘Fantom Company’. in the development room you can set the product, in the production room you can set the amount, in the sales store you can set the value. if the class fee is not enough, I would like to reduce this production a little bit.","「管理・経営」で「ファンタム社(会社)」を開いて、開発室では商品を、製造室では量を、販売店では値を設定することができます。"],"‘관리 · 경영’의 지도에서 방을 짚으시면 시설과 근무지를 살필 수 있습니다. 개수를 명하시기 전에 비용과 이달의 관리 상태를 보십시오. 간식이 필요하시면 저택 메뉴의 ‘상점’으로 모시겠습니다.":
["If you look at the room on the map of ‘Management · Management’, you can look at the facilities and workplaces. Before ordering a number, check the cost and the management status of the month. If you need snacks, we will bring you to the ‘shop’ in the home menu.","「管理・管理」の地図で部屋を振り回すと、施設や職場を振り回すことができます。数を注文する前に費用と月間の管理状態を見てください.スナックが必要な場合は、宿泊メニューの「店」に持ち込むでしょう。"],"봉투에는 보증서가 없고 부러진 나무 바퀴가 하나 들었습니다. 답장은 그림으로 부탁한다는군요. 수레의 임자인 동생이 아직 글을 모른답니다. 같은 축을 쓴 수레가 여섯 상자 나갔습니다.":
["There was no guarantee on the bag and one broken wooden wheel heard.The answer is asking for a picture.Sure's executive brother still doesn't know how to write.Sure with the same axis had six boxes out.","袋には証明書がなく、壊れた木の輪が一つ聞こえた。答えは絵で頼む.シュレの先輩の兄弟はまだ書き込みができず.同じ軸を書いたシュレは6箱出た。"],"시엘이 영수증 옆에 출납장을 펴 놓았다. 손님은 제 서명부터 손바닥으로 가렸다. 줄을 선 사람들이 슬쩍 길을 터 주었다. 나갈 때는 바로 뒤에 선 점원조차 그 목소리를 못 들었다.":
["Ciel opened the outlet next to the receipt; the guest covered my signature on the handbag; the people who had the line had shaken the way; when they went out, even the line-back shopper did not hear that voice.","シエルは受付証のそばに出荷場を開け、ゲストは私の署名から手袋まで覆い、線を導いた人々が、道を振り回した。"],"아이는 계산대에 O, R, A를 나란히 놓고 맨 앞을 한 칸 비워 뒀다. 도라는 제 이름을 보여 주고 싶었는데, 상자에 D가 없다고 했다. 점원은 집에 가서 잘 찾아보라고 했다.":
["The child put O, R, A next to the calculator and left a canon before him.Dora wanted to show my name, but said there was no D in the box.The dealers asked me to go home and look for it.","子供は計算室にO、R、Aを横に置き、前面の1カンを空かせたが、ドーラは私の名前を示したいと思っていたが、箱にはDがないと言った。"],"엘런은 제 이름이 적힌 리본을 반듯이 개어 앞치마 주머니에 넣고 있었다. 시엘은 좌석표의 숟가락 옆에 그 이름을 적어 보냈다. 이번에는 주최자가 직접 주방으로 내려갔다.":
["Elan was putting the ribbon with my name in his pocket, and she had written it next to the glass of the seat; this time the host went down directly to the kitchen.","エレンは、私の名前が書かれたリボンを、まわりと前方でポケットに置いていたので、シーエルは座席のカップのそばにその名前を書き込んだ。"],"서기가 상회의 추천서와 자선회에 보관된 편지를 나란히 놓았다. 추천서는 자선회 소장 원본을 베낀 것이었다. 원본에는 용도가 ‘작년 연회 감사 인사’라고 적혀 있다. 추천서에는 그 끝 줄만 빠졌다.":
["The letter was put alongside the letter preserved in the Recommendation and Charity Council. the Recommendation was given the original of the Charity Council Director. the original is written as \"First Year's Party Thanksgiving\" and the Recommendation was only a bit to it.","文書は、会議の勧告書と慈善会に保存された手紙を横に置いた。勧告書は慈善会長のオリジナルを渡したものであった.原稿には用途が「昨年の祭りの感謝挨拶」と書かれていた。"],"시엘은 임금 봉투를 서랍에 밀어 넣었다. 그 돈이면 세 벌의 값을 치를 수야 있겠지. 그러고도 물건이 어디로 갔는지는 모를 테고. 오늘 아침에 처음 열쇠를 받아 간 사람부터 부르게 했다.":
["Seal put the king’s bag into the box, and the money would have to be worth three punishments; but he didn’t know where the things went, and he called him from the one who had received the key this morning.","シエルは王の袋を箱に入れて、そのお金が三つの罰金の価値をもたらすだろうが、物件がどこへ行ったのか分からず、今朝最初に鍵を受けた人から電話した。"],"문을 닫기 직전이었다. 손님은 반으로 접은 영수증을 계산대에 펴 놓고, 완구 하나를 돌려주는 데 대체 몇 번을 와야 하느냐고 물었다. 길 건너에서도 대답할 수 있을 만한 목소리였다.":
["It was just before the door was closed.The guest put half-covered receipt on the accounting table and asked how many times he had to come in order to return one of the plots.","ドアを閉める直前に、ゲストは半分に付いた受付書を計算室に開けて、一枚のパウダーを返すために何回来るべきかと尋ねた。"],"호텔 주인이 손가락으로 짚어 가며 선물을 세었다. 열하나. 검수인은 상자를 받을 때도 그렇게 하나씩 짚었으며, 자기 손가락으로 센 건 틀림없이 열둘이었다고 했다. 귀까지 벌겋게 달아올라 있었다.":
["The hotel owner went with his finger and put the gifts. open but. the inspector even when he received the box, one by one, and said that it was ⁇  twelve with his finger.","ホテルのオーナーは指でひっくり返して贈り物を立てたが、開いたが、監査官は箱を受け取ったときもそれほどひとつひっくり返したが、自分の指でひっくり返すものは必ず十二だったと話した。"],"백화점에서 봉제 토끼를 한 줄 통째로 돌려보냈다. 나란히 앉혀 놓으니 모조리 왼쪽 귀를 늘어뜨리고 있었다. ‘진열대가 낮잠 시간의 보육원 같습니다.’ 담당자가 동봉한 쪽지였다.":
["I sent the coat on the shop and put it up to the side, and he was lifting his left ear. “The Zin-Tree is like a day sleeping garden.”","店内で、 ⁇ のウサギを全部返して行ったので、隣に座って、モジーリ左耳を伸ばしていた「金熱隊は昼寝時間の幼稚園のような」と担当者は同封した。"],"지나간 사건은 아래의 ‘가문 장부’에 적어 두었습니다. ‘저장 · 설정’에서는 저장 칸과 음량을 고르실 수 있습니다. 음악만 잠시 끄시려면 BGM 버튼을, 돌아가시려면 ‘뒤로’를 눌러 주십시오.":
["The past event is written in the ‘Family Settings’ below. in ‘Save · Settings’ you can choose the storage channel and sound volume. to just turn off music for a moment, please press the BGM button, and to get back, please press the ‘back’.","過去のイベントは下記の「家庭の収入」に記載されています. 「保存・設定」では、保存カンと音量を選択できます. 音楽をしばらく切るにはBGMボタンを押して、帰るには「後ろ」を押してください。"],"‘관리 · 경영’에서 ‘팬텀 사(社)’를 엽니다. 개발실에서 상품을 개발하고, 제작실에서 생산량을, 판매점에서 판매가를 정합니다. ‘이달 자금 예상’에서 수업료를 포함한 월말 잔액을 확인할 수 있습니다.":
["In ‘Management & Management’ you open the ‘Fantom Company’. develop products in the development room, set production quantity in the production room, set sales price in the store. in ‘Monthly Fund Forecast’ you can check the monthly balance including class fees.","「管理・経営」で「ファンタム社(会社)」を開く、開発室で商品を開発し、生産室で生産量、販売店で売上価格を設定する、「月間資金予想」では、授業料を含む月末バランスを確認できます。"],"점원이 D를 건네자 도라는 그 패를 맨 앞에 놓고 제 이름을 큰 소리로 읽었다. 구경하던 손님들이 한 번 더 읽어 달라고 했다. 그사이 시엘은 같은 날 포장한 상자들이 어디로 갔는지 주소를 받아 적었다.":
["When the shopper passed D, Dora put the patch in front of me and read my name with a loud voice; the guests who were watching asked to read it once more.","店員がDを渡ったとき、ドラはそのパールを前方に置き、私の名前を大声で読み、見ていたゲストに再度読むように頼んだ。"],"하단의 ‘가문 장부’에는 지난 사건과 엔딩이 기록됩니다. ‘저장 · 설정’에서 회차를 저장하거나 불러오고 음량을 조절할 수 있습니다. 하단의 BGM 버튼을 누르면 배경음악이 켜지거나 꺼집니다.":
["The ‘Family Settings’ below records the past events and ends. In ‘Save · Settings’ you can save or call the turn and control the volume. By pressing the BGM button below, the background music will be activated or disabled.","下の「家庭の収容」には、過去の出来事と終わりを記録します. 「保存・設定」では、回転を保存または呼び出し、音量を制御することができます. 下のBGMボタンを押すと、背景音楽が起動またはオフになります。"],"밤새 바람이 온실 유리를 한 줄 걷어 갔다. 깨진 유리는 서른두 칸이었다. 시엘의 아침 식탁에는 꽃 한 송이와 그 서른두 칸에 들어갈 유리값을 적은 유리공의 청구서가 나란히 놓였다.":
["The wind went on a greenhouse glass all night; the broken glass was thirty-two canons; the Syeel's morning table was placed alongside a flower shell and a small glass bill that would be worth the glass to enter the thirty-two canons.","夜中風がガラスの流れを歩いていた、壊れたガラスは三十二カンだった、シエルの朝食テーブルには花の一本と三十二カンに入るガラスの価値が少ないガラスボールの請求書が付いてあった。"],"가문 장부에서 왕실의 반응을 살펴보세요. 마지막 해에는 응용 실기를 마친 과목을 다시 수강해 여러 분야의 최종 실기를 통과하세요. 왕실은 꾸준한 영업 흑자와 채무를 갚고 남긴 자금도 함께 살핍니다.":
["Look at the reactions of the royal house in the family department. In the last year, take the subjects completed the application practice again and pass the final practice of several fields. The royal house will spend a constant sales black and debt payments and the funds left together.","家族の部門で王室の反応を調べる 最後の年に応用実習を完了した科目を再び取り戻し、いくつかの分野の最終実習を通過する 王室は継続的な売上黒人と借金を返済し、残された資金も一緒に費やします。"],"영지 학교의 음악실에 비가 샌답니다. 선생님이 보낸 그림에는 피아노 건반 위에 찻잔이 줄지어 있더군요. 개학 전에는 수리공의 일정이 한 주 비는데, 마침 그 주에는 저희 응접실에도 손님이 없습니다.":
["The music room of the English school is rain.The painting you sent was a little glass on the piano cover. Before school, the repair schedule was a week, and at that week there were no guests in our reception room.","英ジ学校の音楽室には雨が降り、先生が送った絵画にはピアノの上にカップが少なくなった。学校開館前に修理師のスケジュールが1週間が流れ、その週末は私たちの接待室にもゲストがない。"],"왼쪽 아래 ‘일정표’에 상순·중순·하순 세 칸을 마련했습니다. 쉬고 나면 다음 수업에 집중하기 쉽습니다. 바꾸실 칸을 먼저 짚고 활동을 고르시면 제가 적겠습니다. £ 옆의 숫자가 그 비용입니다.":
["I have set up three canyons on the ‘Table’ below to the left. After rest, it is easy to focus on the next class. If you first pick the change room canyon and choose activity, I will make a few. The number next to £ is that cost.","左下の「日程表」に、上・中・下・三カンが設定され、休憩後、次のクラスに集中するのは簡単です。変換室のカンを先に押して活動を選ぶなら、私はそれを選びます。"],"저녁 기차를 타는 손님은 역 앞 매점에서 매번 검은까치밥 사탕을 찾았고, 매번 빈손으로 갔다. 매점 주인의 걱정은 조금 달랐다. 장부를 펼 때마다 그 맛만 고스란히 남아 있다는 것이다.":
["The guest on the evening train found black cabbage candy every time in the stations front store, and went with empty hands every time. the shop owner was worried a little different.","夕方電車に乗るゲストは駅の前で毎回黒カチボブの甘いものを見つけ、毎回空手で行った。店主の懸念は少し違う。"],"팬텀사가 완구를 빌려준 자선 공연에는 빈자리가 하나도 없었다. 막이 내리고 돈을 세어 본 극장주는 출입구 직원을 불러 세웠다. 표 값이 반밖에 없으니 누군가 동전함에 손을 댄 게 틀림없다고 했다.":
["The charity show that Phantomsa borrowed the plumb was not a vacancy.The theater who had stopped and paid money called the entrance staff.The ticket was only half worth, so someone should have put his hand on the coin boat.","ファンタムサが貸した慈善公演には、空席は一つもなかった。 閉じ込められ、お金を払った劇場主人は入り口のスタッフを呼び出し、チケットの値は半分しかないので誰かがコインボートに手を投げたと伝えていた。"],"명하신 대로 준비했습니다. 저택의 ‘실행’이나 일정표의 ‘이달 일정 실행’을 고르시면 상순부터 시작하겠습니다. 매 순의 성과는 제가 보고드리겠습니다. 하순 강평 뒤에는 정해 두신 곳을 방문하고, 돌아오시면 결산을 보고드리겠습니다.":
["I have prepared as you ordered. if you choose the ‘execution’ of the house or the ‘month schedule’ of the calendar, I will start from the top. I will report the results of each purification. after the low-purification, I will visit the place you set out, and if you return, I will report the result.","あなたが指示したように準備しました. 家の「実行」または日程表の「月日程実行」を選択すると、上半期から始まります. 毎純な成果を報告します. 下半強度後で定められた場所を訪問し、帰って来たら結果を報告します。"],"세 순의 활동과 자유행동을 정한 뒤 ‘이달 일정 실행’을 누릅니다. 저택 메인 화면의 ‘실행’으로도 시작할 수 있습니다. 상순부터 차례로 성과를 확인하고, 하순이 끝나면 선택한 방문지를 거쳐 월말 결산을 봅니다.":
["After setting three purely activities and free actions, press ‘Monthly Calendar Run’ and you can also start with ‘Execute’ on the home main screen. from the top to the turn, check out the results, and after the final, visit the selected site to see the month end results.","3つの純粋な活動と自由行動を設定した後、「月のスケジュール実行」を押します. ホームメインスクリーンで「実行」で始めることもできます. 上から順番に結果を確認し、下の終了時に選択した訪問地を通して月末の結果を見る。"],"저녁 기차가 들어올 무렵, 그 손님이 처음으로 사탕을 샀다. 한 봉지는 자기 몫이었고, 다른 한 봉지는 딸아이 몫이었다. 그 뒤로 주인은 병을 닦을 때 한 병을 다 닦고 표까지 붙여야 다음 병에 손을 댔다.":
["When the evening train came, the guest first bought sweets; one bag was his own part, and the other bag was his daughter’s part. Then the owner had to wash all the bottles when he was cleaning the bottle and attach it to the table and then put his hand on the next bottle.","夕方の列車が入ると、そのゲストは初めてお菓子を買った。一袋は自分のものだったが、もう一袋は娘のものだった。その後、オーナーはボトルを掃除するとき、すべてのボトルを洗い、テーブルまで貼り付けなければならなかった。"],"시엘이 좌석표에 흰 표를 한 장씩 놓았다. 쉰 자리를 덮고 나니 남은 자리의 표 값은 돈통과 꼭 맞았다. 극장주는 직원을 곁에 세운 채 제 손으로 장부를 고쳤다. 아이들 쉰 명은 그날 공짜로 공연을 보았다. 애초에 그러기로 한 저녁이었다.":
["Ciel put a white ticket on the seat card, and covered the seat, the remaining seat’s ticket was right with the money. Theatre owner set the staff next to me and fixed the box with my hand. The children saw the show for free that day. It was one evening in the beginning.","シエルは座席に白いチケットを1枚ずつ置いたが、その席を覆って残った席のチケットは金銭と合った。劇場主はスタッフをそばに置いて自分の手で修理した。子供たちの数十人がその日無料で演出を見た。最初はそうする夜だった。"],"시엘이 원본의 마지막 한 줄을 읽고 두 완구상이 영수증을 한 장씩 폈다. 대표는 입을 다물었다. 상회를 내세웠던 마피아 일당이 경시청에 연행될 때까지 기자들은 자리를 지켰다. 일당이 직접 부른 기자들이었다. 이튿날 두 가게의 창에는 시엘이 서명한 회수 공고가 나붙었다.":
["Ciel read the last line of the original and the two full-fledged were one-of-one receipt. The representative closed his mouth. The journalists kept their place until the Mafia party that had set up the conference was held in the office. The journalists called directly by the party. On the window of the two stores the Ciel signed remiting announcement was put out.","シエルは原作の最後の行を読み、二つの完全賞が受付書を一冊ずつ読み、代表者は口を閉じた。会議を立てたマフィアの一党が警報局に実施されるまで、記者たちは席を守った。一党が直接呼んだ記者たちだった。翌日、二つの店の窓にはシエルが署名した返還宣言が掲げられていた。"],"배경 음악":
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
["Young master","坊ちゃん"],"초대장":
["Invitation","招待状"],"상점 상품":
["Shop inventory","店の商品"],"아직 마구간에 있습니다, 왕자님.\n손님, 봉투만 전해 드려도 되겠습니까?":
["I am still in the shelf, Prince.\\n Guest, can I tell you a bag?","まだ、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん、おじいちゃん"],"눈치가 좋은 줄 알았는데, 의외의 것을 묻네.\n시엘이 반대쪽 손도 내민다.":
["I thought it was good to see, but I asked something extraordinary. \\Neil also puts the opposite hand in.","見た目は良く、不思議なことを尋ねる――ニシエルも反対の手を振り回す。"],"잠깐. 둘이서 멋대로 정하지 마. 난 안 해.\n사람 죽이던 손으로 메이드 일을 어떻게 하라고.":
["I don’t do it. – I don’t do it. – How to do the work of Made with the killing hand?","二人でいいな、やらないよ～と、殺した人の手でメイドの仕事をどうするか。"],"설탕은 하나. 그래, 오늘도 그걸로.\n시엘이 서류에서 눈을 떼지 않고 잔을 받는다.":
["Sugar is one. yes, it is today.\\Nciel gets a glass without leaving his eyes from the papers.","砂糖は1つ!はい、今日もそれで・・・ニシエルは紙から目を離さずに飲みます。"],"그때는 그것이 무슨 말인지 알 수 없었다.\nS-012에게 번호가 아니라 이름을 물은 사람은 시엘이 처음이었으니까.":
["He did not know what it was, because he was the first to ask the number to nS-012, but the name of the one that asked the number to nS-012.","何を言っているのかは知らなかったが、シエルが最初に番号ではなく、番号を尋ねたのは、シエルだった。"],"손님은 저녁상에 오른 요리로도 그 집을 평합니다. \n팬텀하이브 가의 이름을 다시 세우시려면 셰프가 필요합니다.":
["The guests also value the house as a dinner cook. \\nFantomHive requires a chef to re-establish the name of the village.","ゲストは夕食の料理としてその家を評価します \\nファンタムハイブの名称を再建するには、シェフが必要です。"],"먼지떨이를 들어 보기도 전에 그걸 어찌 아십니까?\n주인에게 성가신 것을 치운다는 점에선 꽤 익숙한 일일 텐데요.":
["How do you know it before you hear the dust?\\n It is quite usual to remove what is a dust.","汚れの音を聞く前に、どうやって知るの?\\n主人公に怒ったことを取り除くことはかなり慣れたことでしょう。"],"애초에 제가 이분을 데려온 건 요리 솜씨를 보아서가 아닙니다.\n이만한 대저택에 상급 사용인이 저 하나일 수는 없으니까요.":
["I did not take it to the beginning because I could not be a high-end user in this large house.","最初に、私はこの料理を持ち込んだのは、料理のスキルを見ることではない\\n 十分な大屋の上級ユーザーが私の一人になれないからだ。"],"도련님을 지킬 솜씨가 있고, 배신할 수 없는 처지에 있고, 도련님이 직접 그 실력을 검증하신 사람.\n구인 광고를 내도 좀처럼 찾기 힘들겠지요.":
["You have the ability to protect you, and in a position that cannot be betrayed, and who has verified your ability directly.\\ngoin ads will be hard to find as I do.","あなたを守る能力があり、裏切れない状況にあり、あなたがその能力を直接確認した人です。\\nつい広告を見つけるのは少しでも難しいでしょう。"]};
