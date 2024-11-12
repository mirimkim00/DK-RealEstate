import { Col, Row } from "react-bootstrap";
import styles from "../../styles/Owners.module.css";
import Sidebar from "../../components/SideBar";
import SubepageHero from "../../components/SubpageHero";

export default function SearchProperty() {
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
                <h1>Search Property</h1>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}
