import { useRouter } from "next/router";
import dynamic from "next/dynamic";

export default function SubContent() {
  const router = useRouter();
  const currentPage = router.pathname.replace("/", ""); // 현재 경로에서 페이지 이름 가져오기

  let DynamicPageComponent;

  try {
    DynamicPageComponent = dynamic(() => import(`../pages/${currentPage}`));
  } catch (error) {
    DynamicPageComponent = () => <div>Page not found</div>;
  }

  return (
    <div>
      <DynamicPageComponent />
    </div>
  );
}
