import Footer from "./Footer";
import MainNav from "./MainNav";

export default function Layout(props) {
  return (
    <>
      <title>DK Real Estate Home</title>
      <MainNav />
      {props.children}
      <br />
      <Footer />
    </>
  );
}
