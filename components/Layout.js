import MainNav from "./MainNav";
import HeroImgSection from "./HeroImgSection";
import Sidebar from "./Sidebar";
import SubContent from "./SubContent";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();
  const isMainPage = router.pathname === "/";

  return (
    <>
      <title>DK Real Estate Home</title>
      <MainNav />

      {isMainPage ? (
        <div>{props.children}</div>
      ) : (
        <div className="layoutContainer">
          <HeroImgSection />
          <div className="contentContainer">
            <div className="sidebar">
              <Sidebar currentPage={props.currentPage} />
            </div>
            <div className="subContent">
              <SubContent currentPage={props.currentPage} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
