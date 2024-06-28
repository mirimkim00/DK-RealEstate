import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import styles from '../styles/Owners.module.css';
import Accordion from 'react-bootstrap/Accordion';
import menuPagePhoto from '../src/images/Menu_Page_Photo.jpg'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

export default function FaqOwners() {
    return (
        <main id={styles.faqOwners}>
            <div className={styles.hero}>
                <Image
                    src={menuPagePhoto}
                    alt=''
                />
                <div>
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>

            <section className={styles.faqSection}>
                <Row className={styles.faqMain}>
                    <Col lg='3' xl={3}>
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
                                <p>
                                    DK@dk.ca
                                </p>
                            </div>
                            <div>
                                <FaMapMarkerAlt />
                                <p>
                                    123 Yonge St, Toronto
                                    Ontario, M1M 1M1
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.faq}>
                            <h1>OWNERS FAQs</h1>
                        </div>
                        <Accordion className={styles.faqItems}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className={styles.question}>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className={styles.question}>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className={styles.question}>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className={styles.question}>Accordion Item #3</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className={styles.question}>Accordion Item #4</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className={styles.question}>Accordion Item #5</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </section>
        </main >
    )
}