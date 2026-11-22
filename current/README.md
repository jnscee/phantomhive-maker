# 팬텀하이브 백작 메이커 · v106

[게임 플레이](https://earl-phantomhive-maker.aptlamb33.chatgpt.site)

배포 중인 게임의 HTML과 모든 JavaScript·CSS 원본이 이 폴더에 있습니다. 추가 이미지와 엔딩 CG는 `images.zip`에, 공통 리소스는 저장소 루트의 `game-part-*.zip`에 있습니다. 공통 파일 목록과 SHA-256은 `shared-assets.json`에 기록했습니다.

세바스찬의 튜토리얼은 `tour.js`, 스네이크의 방문과 사용인 숙소 대사는 `snake.js`에서 수정할 수 있습니다.

방문 시 발생하는 조건·대사·선택 결과는 `visitors.js`, 런던 행사의 일정·준비 과목·결과는 `festivals.js`, 엔딩별 대본은 `endings.js`에서 수정할 수 있습니다. 관계 장부는 각 인물이 시엘에게 보내는 신뢰만 기록합니다.

## Windows에서 실행하기

저장소 전체를 ZIP으로 내려받아 풀고, VS Code에서 `game-part-1.zip`과 `current` 폴더가 함께 있는 위치를 엽니다. Python 3이 설치된 상태에서 **터미널 → 새 터미널**을 고르고 다음 두 줄을 차례로 실행하세요.

```powershell
py current/build.py playable
py -m http.server 8000 --bind 127.0.0.1 --directory playable
```

브라우저에서 [게임 시작 화면](http://127.0.0.1:8000/)을 여세요. 처음 만드는 `playable` 폴더에는 게임 전체가 들어가므로 이후에는 두 번째 명령만 실행하면 됩니다. 서버를 종료하려면 Ctrl+C를 누르세요.
