import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainNav from "./MainNav";
import HeroImgSection from "./HeroImgSection";
import Sidebar from "./Sidebar";
import SubContent from "./SubContent";
import Footer from "./Footer";

export default function Layout(props) {
  const router = useRouter();
  const isMainPage = router.pathname === "/";
  const [currentPage, setCurrentPage] = useState("Owners");

  useEffect(() => {
    const path = router.pathname.replace("/", "") || "Owners";
    setCurrentPage(path.charAt(0).toUpperCase() + path.slice(1)); // 첫 글자 대문자로
  }, [router.pathname]);

  return (
    <>
      <title>DK Real Estate Home</title>
      <MainNav setCurrentPage={setCurrentPage} />

      {isMainPage ? (
        <div>{props.children}</div>
      ) : (
        <div className="layoutContainer">
          <HeroImgSection />
          <div className="contentContainer">
            <div className="sidebar">
              <Sidebar currentPage={currentPage} />
            </div>
            <div className="subContent">
              <SubContent currentPage={currentPage} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
