import styles from '../styles/TenantsPlans.module.css';
import menuPagePhoto from '../src/images/Menu_Page_Photo.jpg'
import Image from 'next/image';
import { Col, Row, Card, Button } from 'react-bootstrap';
import TenantsSideBar from '@/components/TenantsSideBar';
import { BsCheck } from "react-icons/bs";

export default function TenantsPlans() {
    const cardData = [1, 2];
    return (
        <main id={styles.plans}>
            <div className={styles.hero}>
                <Image
                    src={menuPagePhoto}
                    alt=''
                />
                <div>
                    <h1>Tenants Plans</h1>
                </div>
            </div>

            <section className={styles.plansSection}>
                <Row className={styles.plansMain}>
                    <TenantsSideBar />
                    <Col>
                        <div className={styles.plans}>
                            <h1>Plans</h1>
                        </div>
                        {cardData.map((index) => (
                            <Card key={index} className={styles.planCard}>
                                <Card.Body>
                                    <Row>
                                        <Col className={styles.cardTitle}>
                                            <Card.Title>Plan {index}</Card.Title>
                                            <Card.Text>CA$ XX</Card.Text>
                                            <Card.Text>+ HST</Card.Text>
                                        </Col>
                                        <Col className={styles.cardDesc}>
                                            <Card.Text>
                                                <BsCheck />Feature<br />
                                                <BsCheck />Feature<br />
                                                <BsCheck />Feature<br />
                                                <BsCheck />Feature<br />
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </section>
        </main >
    )
}