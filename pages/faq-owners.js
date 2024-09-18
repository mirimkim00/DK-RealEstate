import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { FaLongArrowAltRight, FaMapMarkerAlt } from "react-icons/fa";
import styles from '../styles/Owners.module.css';
import Accordion from 'react-bootstrap/Accordion';
import menuPagePhoto from '../src/images/Menu_Page_Photo.jpg'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

export default function FaqOwners() {
    const accordionData = [
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 },
        { key: 5 },
        { key: 6 },
        { key: 7 },
    ];

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
                                &nbsp; Free Estimate
                            </button>
                            <button>
                                <FaLongArrowAltRight />
                                &nbsp; Non-Resident Taxes
                            </button>
                            <button>
                                <FaLongArrowAltRight />
                                &nbsp; Plans
                            </button>
                            <button>
                                <FaLongArrowAltRight />
                                &nbsp; Owners Portal
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
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <Accordion className={styles.faqItems}>
                            {accordionData.map((item) => (
                                <Accordion.Item eventKey={item.key} key={item.key}>
                                    <Accordion.Header className={styles.question}>Accordion Item #{item.key}</Accordion.Header>
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
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </section>
        </main >
    )
}