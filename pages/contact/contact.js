import { Col, Row, Form, Button } from "react-bootstrap";
import styles from "../../styles/Owners.module.css";
import Sidebar from "../../components/SideBar";
import SubepageHero from "../../components/SubpageHero";

export default function Contact() {
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
                <h1>Contact Us</h1>
              </div>
              <Row className={styles.formSection}>
                <p>
                  Lorem in consequat turpis dui vitae lorem. Cras tellus est
                  faucibus et id vitae sed nisi. Adipiscing phasellus hendrerit
                  pellentesque pellentesque scelerisque in molestie.{" "}
                </p>

                <Form>
                  <Row className="mb-3">
                    <Col md={12} className="text-start">
                      <Form.Label>Select if you are *</Form.Label>

                      <div>
                        <Form.Check
                          type="radio"
                          name="userType"
                          id="owner"
                          label="Owner"
                          value="owner"
                          inline
                        />
                        <Form.Check
                          type="radio"
                          name="userType"
                          id="tenant"
                          label="Tenant"
                          value="tenant"
                          inline
                        />
                        <Form.Check
                          type="radio"
                          name="userType"
                          id="none"
                          label="None of these"
                          value="none"
                          inline
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Form.Group
                      controlId="formName"
                      className={styles.formGroup}
                    >
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Control type="text" placeholder="John Doe" />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group
                      controlId="formEmail"
                      className={styles.formGroup}
                    >
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="info@address.com"
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group
                      controlId="formPhone"
                      className={styles.formGroup}
                    >
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control type="text" placeholder="000-000-000" />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group
                      controlId="formAdditionalComment"
                      className={styles.formGroup}
                    >
                      <Form.Label>Additional Comment *</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Do you have any question or comment?"
                        className={styles.fixedSizeTextarea}
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </Row>

              <div className={styles.submitButtonContainer}>
                <Button
                  variant="dark"
                  type="submit"
                  className={styles.submitButton}
                >
                  Send
                </Button>
              </div>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}
