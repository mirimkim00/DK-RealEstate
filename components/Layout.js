import MainNav from "./MainNav";
import Footer from "./Footer";

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
