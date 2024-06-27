import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import styles from "../styles/Owners.module.css";
import Accordion from "react-bootstrap/Accordion";
import menuPagePhoto from "../src/images/Menu_Page_Photo.jpg";
import Image from "next/image";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function FreeEstimateOwners() {
  /*temp_추가*/
  const router = useRouter();
  const handleFreeEstimateClick = () => {
    router.push("/free_estimate-owners");
  };

  return (
    <main id={styles.faqOwners}>
      <div className={styles.hero}>
        <Image src={menuPagePhoto} alt="" />
        <div>
          <h1>Nec feugiat in fermentum posuere</h1>
        </div>
      </div>

      <section className={styles.faqSection}>
        <Row className={styles.faqMain}>
          <Col lg="3" xl={3}>
            <div className={styles.sidebar}>
              <button>
                <FaLongArrowAltRight />
                &nbsp; FREE ESTIMATE
              </button>
              <button>
                <FaLongArrowAltRight />
                &nbsp; NON-RESIDENT TAXES
              </button>
              <button>
                <FaLongArrowAltRight />
                &nbsp; PLANS
              </button>
              <button>
                <FaLongArrowAltRight />
                &nbsp; OWNERS PORTAL
              </button>
            </div>

            <div className={styles.contactInfo}>
              <div>
                <IoIosCall />
                <p>
                  Local: 123-456-7890 <br />
                  Toll Free: 1-123-456-7890
                </p>
              </div>
              <div>
                <FiMail />
                <p>DK@dk.ca</p>
              </div>
              <div>
                <FaMapMarkerAlt />
                <p>123 Yonge St, Toronto Ontario, M1M 1M1</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className={styles.faqNoUnderLine}>
              <h1>Nec feugiat in fermentum posuere</h1>
            </div>

            <Row>
              <Col md={6} className={styles.formSection}>
                <h5>Personal Information</h5>

                <Form>
                  <Form.Group controlId="formName" className={styles.formGroup}>
                    <Form.Label>Your Name *</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                  </Form.Group>

                  <Form.Group
                    controlId="formEmail"
                    className={styles.formGroup}
                  >
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control type="email" placeholder="info@address.com" />
                  </Form.Group>

                  <Form.Group
                    controlId="formPhone"
                    className={styles.formGroup}
                  >
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control type="text" placeholder="000-000-000" />
                  </Form.Group>

                  <Form.Group
                    controlId="formAdditionalComment"
                    className={styles.formGroup}
                  >
                    <Form.Label>Additional Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      // rows={10}
                      placeholder="Do you have any question or comment?"
                      className={styles.fixedSizeTextarea} // 여기에 클래스 추가
                    />
                  </Form.Group>
                </Form>
              </Col>

              <Col md={6} className={styles.formSection}>
                <h5>Property Information</h5>
                <Form>
                  <Form.Group
                    controlId="formPropertyAddress"
                    className={styles.formGroup}
                  >
                    <Form.Label>Property Address *</Form.Label>
                    <Form.Control type="text" placeholder="Property Address" />
                  </Form.Group>

                  <Form.Group
                    controlId="formBedroom"
                    className={styles.formGroup}
                  >
                    <Form.Label>Bedroom *</Form.Label>
                    <Form.Select defaultValue="Studio">
                      <option>Studio</option>
                      <option>option2</option>
                      <option>option3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="formBathroom"
                    className={styles.formGroup}
                  >
                    <Form.Label>Bathroom *</Form.Label>
                    <Form.Select defaultValue="1">
                      <option>1</option>
                      <option>option2</option>
                      <option>option3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="formParking"
                    className={styles.formGroup}
                  >
                    <Form.Label>Parking *</Form.Label>
                    <Form.Select defaultValue="Parking">
                      <option>Parking</option>
                      <option>option2</option>
                      <option>option3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="formLocker"
                    className={styles.formGroup}
                  >
                    <Form.Label>Locker *</Form.Label>
                    <Form.Select defaultValue="Locker">
                      <option>Locker</option>
                      <option>option2</option>
                      <option>option3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="formBalcony"
                    className={styles.formGroup}
                  >
                    <Form.Label>Balcony *</Form.Label>
                    <Form.Select defaultValue="Balcony">
                      <option>Balcony</option>
                      <option>option2</option>
                      <option>option3</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="formFurnished"
                    className={styles.formGroup}
                  >
                    <Form.Label>Furnished *</Form.Label>
                    <Form.Select defaultValue="Furnished">
                      <option>Furnished</option>
                      <option>option2</option>
                      <option>option3</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>

              <div className={styles.submitButtonContainer}>
                <Button
                  variant="dark"
                  type="submit"
                  className={styles.submitButton}
                >
                  SUBMIT &gt;
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </section>
    </main>
  );
}
