import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function SubContent() {
  const router = useRouter();
  const currentPage = router.pathname.replace("/", ""); // 현재 경로에서 페이지 이름 가져오기

  let DynamicPageComponent;

  try {
    // 페이지에 해당하는 컴포넌트 동적 임포트
    DynamicPageComponent = dynamic(() => import(`../pages/${currentPage}`));
  } catch (error) {
    DynamicPageComponent = () => <div>Page not found</div>;
  }

  return (
    <div>
      <h2>{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Page</h2>
      <DynamicPageComponent />
    </div>
  );
}
