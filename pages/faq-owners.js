import styles from '../styles/Owners.module.css';
import Accordion from 'react-bootstrap/Accordion';
import menuPagePhoto from '../src/images/Menu_Page_Photo.jpg'
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import SideBar from '@/components/SideBar';

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
                    <SideBar />
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