import Image from "next/image";
import menuPagePhoto from "../src/images/Menu_Page_Photo.jpg";
import styles from "../styles/Owners.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <Image src={menuPagePhoto} alt="" />
      <div>
        <h1>Lorem ipsum dolor sit</h1>
      </div>
    </div>
  );
}
