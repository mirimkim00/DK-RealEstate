import Image from "next/image";
import menuPagePhoto from "../src/images/1.jpg";
import styles from "../styles/Owners.module.css";

export default function SubepageHero() {
  return (
    <div className={styles.hero}>
      <Image src={menuPagePhoto} />
      <div>
        <h1>Lorem ipsum dolor sit</h1>
      </div>
    </div>
  );
}
