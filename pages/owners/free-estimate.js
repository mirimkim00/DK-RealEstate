import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Owners.module.css";
import Sidebar from "../../components/SideBar";
import SubepageHero from "../../components/SubpageHero";

export default function FreeEstimate() {
  return (
    <>
      <SubepageHero />
      <main>
        <section className={styles.faqSection}>
          <Row className={styles.faqMain}>
            <Col lg="3" xl="3">
              <Sidebar />
            </Col>
            <Col>
              <div className={styles.faq}>
                <h1>Free Estimate</h1>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}
