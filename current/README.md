# 팬텀하이브 백작 메이커

이 폴더는 편집기와 GitHub Pages가 함께 사용하는 게임 원본입니다. 이미지·음원은 저장소 루트의 `game-part-*.zip`에서 읽고, 편집기에서 교체한 파일은 `current/assets/`에 저장합니다.

## Windows에서 실행하기

저장소 전체를 ZIP으로 내려받아 풀고, VS Code에서 `game-part-1.zip`과 `current`가 함께 있는 폴더를 엽니다. Python 3이 설치된 상태에서 **터미널 → 새 터미널**을 열고 실행하세요.

```powershell
py current/build.py playable
py -m http.server 8000 --bind 127.0.0.1 --directory playable
```

[게임 시작 화면](http://127.0.0.1:8000/)을 여세요. 빌드는 새 폴더 또는 빈 폴더에 생성합니다.

[콘텐츠 편집기 사용법과 게시 방법](../tools/content-editor/README.md)
