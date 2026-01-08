
  # K2 Usability Platform

  K2 사용성 플랫폼 관리자 페이지

  ## 기술 스택

  - React 18.3.1
  - TypeScript
  - Vite 6.3.5
  - Tailwind CSS 4.1.12
  - D3.js 7.9.0

  ## 로컬 개발

  ```bash
  # 의존성 설치
  npm install

  # 개발 서버 실행
  npm run dev

  # 프로덕션 빌드
  npm run build
  ```

  ## 배포

  이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

  ### 배포 프로세스

  1. `main` 또는 `master` 브랜치에 푸시하면 자동으로 배포가 시작됩니다.
  2. GitHub Actions가 자동으로 빌드를 실행합니다.
  3. 빌드가 완료되면 GitHub Pages에 배포됩니다.

  ### 수동 배포

  GitHub Actions 탭에서 "Build and Deploy" 워크플로우를 선택하고 "Run workflow"를 클릭하여 수동으로 배포를 트리거할 수 있습니다.

  ### GitHub Pages 설정

  GitHub 리포지토리 설정에서 다음을 확인하세요:
  - Settings > Pages > Source: GitHub Actions

  배포된 사이트는 `https://[username].github.io/k2-usability-platform/` 에서 확인할 수 있습니다.

  