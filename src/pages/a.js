// 페이지의 역할을 하는 컴포넌트를 저장하기 위한 디렉토리
// 기본적으로 브라우저에서는 pages 디렉토리에 있는 파일의 이름을 통해
// 페이지에 접근할 수 있기 때문에 페이지의 역할이 아닌 컴포넌트들은 해당 디렉토리에 절대 저장하면 안됨

// 앞서 설명했듯이 Gatsby 프로젝트에서는 src/pages 내의 모든 파일의 이름을 통해 페이지에 접근할 수 있다고 했었습니다.
// 따라서 만약 해당 디렉토리에 about.tsx 파일이 존재한다면 Gatsby 내부적으로 your-web-site.com/about 과 같은 페이지 링크를 생성합니다.
// 여기서 about.tsx 파일을 src/pages/info 디렉토리로 이동한다면 페이지 링크는 어떻게 변할까요?
// Gatsby는 이에 맞게 디렉토리명도 반영하므로 your-web-site.com/info/about과 같은 페이지 링크를 생성할 것입니다.
