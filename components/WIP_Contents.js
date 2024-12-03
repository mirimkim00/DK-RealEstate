import SubPageHero from "../SubPageHero";
import SideBar from "../SideBar";
import DynamicPage from "../DynamicPage";

export default function Contents() {
  return (
    <>
      <SubPageHero />
      <main>
        <section className={styles.faqSection}>
          <Row className={styles.faqMain}>
            <Col lg="3" xl="3">
              <SideBar />
            </Col>
            <Col>
              <DynamicPage />
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}
