import styles from '../styles/OwnersPlans.module.css';
import menuPagePhoto from '../src/images/Menu_Page_Photo.jpg'
import Image from 'next/image';
import { Col, Row, Card, Button } from 'react-bootstrap';
import OwnersSideBar from '@/components/OwnersSideBar';
import { BsCheck } from "react-icons/bs";

export default function OwnersPlans() {
    const cardData = [1, 2, 3];
    return (
        <main id={styles.plans}>
            <div className={styles.hero}>
                <Image
                    src={menuPagePhoto}
                    alt=''
                />
                <div>
                    <h1>Plans</h1>
                </div>
            </div>

            <section className={styles.plansSection}>
                <Row className={styles.plansMain}>
                    <OwnersSideBar />
                    <Col>
                        <div className={styles.plans}>
                            <h1>Plans</h1>
                        </div>
                        <Row className="justify-content-between">
                            {cardData.map((index) => (
                                <Card key={index} style={{ width: '18rem' }}>
                                    <Card.Body className={styles.planCard}>
                                        <Card.Title>Plan {index}</Card.Title>
                                        <Card.Text>CA$ XX</Card.Text>
                                        <Card.Text>+ HST</Card.Text>
                                        <Card.Text>
                                            <BsCheck />Feature<br />
                                            <BsCheck />Feature<br />
                                            <BsCheck />Feature<br />
                                            <BsCheck />Feature<br />
                                            <BsCheck />Feature<br />
                                            <BsCheck />Feature<br />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </section>
        </main >
    )
}