# React v18 Template

React v18 템플릿이며 Vite, TypeScript, Storybook, TailwindCSS 등으로 구성되어 있습니다.
또한, MSW (Mock Service Worker)를 사용하여 API 모킹 서비스를 제공합니다.

## Requirements

- Node.js v20+
- Yarn v4.3.1+

## Getting Started

To create a new project based on this template, follow these steps:

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

3. Start the development server:

   ```sh
   yarn dev
   ```

## Scripts

- `yarn dev`: Vite 개발 서버를 시작합니다.
- `yarn build`: 프로젝트를 프로덕션을 위해 빌드합니다.
- `yarn preview`: 프로덕션 빌드를 미리보기합니다.
- `yarn storybook`: Storybook 서버를 시작합니다.
- `yarn build-storybook`: 프로덕션을 위해 Storybook을 빌드합니다.
- `yarn lint`: 코드를 lint하는 데에 ESLint를 실행합니다.
- `yarn lint:fix`: ESLint를 실행하고 발견된 linting 문제들을 수정합니다.
- `yarn format`: Prettier를 사용하여 코드를 포맷팅합니다.

### Dependencies

- `@headlessui/react`: React용 접근성 있는 UI 컴포넌트입니다.
- `@heroicons/react`: UI 개발을 위한 무료 MIT 라이선스 SVG 아이콘 세트입니다.
- `axios`: 브라우저 및 node.js용 프로미스 기반 HTTP 클라이언트입니다.
- `localforage`: 개선된 오프라인 저장소입니다.
- `match-sorter`: 배열을 간단하고 예상 가능하며 결정적으로 최적의 일치 순서로 정렬하는 JavaScript 유틸리티입니다.
- `react`: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.
- `react-dom`: DOM 관련 렌더링 경로의 진입점입니다.
- `react-hook-form`: 성능이 우수하고 유연하며 쉬운 사용자 정의 유효성 검사를 지원하는 폼 라이브러리입니다.
- `react-router-dom`: React를 위한 라우팅 라이브러리입니다.
- `sort-by`: 속성에 따라 객체를 정렬하는 유틸리티입니다.
- `zustand`: 작고 빠르며 확장 가능한 상태 관리 솔루션입니다.

### DevDependencies

- `@chromatic-com/storybook`, `@storybook/addon-essentials`, `@storybook/addon-interactions`, `@storybook/addon-links`, `@storybook/addon-onboarding`, `@storybook/blocks`, `@storybook/react`, `@storybook/react-vite`, `@storybook/test`: Storybook을 위한 도구 및 애드온들입니다.
- `@types/react`, `@types/react-dom`: React용 TypeScript 타입 정의입니다.
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`: TypeScript와 함께 ESLint를 통합하는 플러그인 및 구문 분석기입니다.
- `@vitejs/plugin-react-swc`: SWC를 사용하여 React의 빠른 HMR(Hot Module Replacement)을 제공하는 Vite 플러그인입니다.
- `autoprefixer`: CSS를 파싱하고 벤더 접두사를 추가하는 PostCSS 플러그인입니다.
- `eslint`, `eslint-config-prettier`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-storybook`: ESLint 구성 및 플러그인들입니다.
- `postcss`: JavaScript 플러그인을 사용하여 CSS를 변환하는 도구입니다.
- `prettier`: 코드 포매터입니다.
- `sass`: CSS로 컴파일되는 스크립트 언어인 전처리기입니다.
- `storybook`: UI 개발을 위한 도구입니다.
- `tailwindcss`: 유틸리티 기반의 CSS 프레임워크입니다.
- `typescript`: JavaScript의 상위 집합으로 정적 타입을 지원하며 일반 JavaScript로 컴파일됩니다.
- `vite`: 빠른 번들러 입니다.

이 리스트는 각 패키지의 주요 역할과 프로젝트 개발 및 테스트에 기여하는 방식을 이해하는 데 도움이 될 것입니다.

## License

This project is licensed under the MIT License.
