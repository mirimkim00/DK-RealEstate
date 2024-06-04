import styles from '../styles/Home.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button, Carousel, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import img1 from '../src/images/1.jpg';
import img2 from '../src/images/2.jpg';
import img3 from '../src/images/3.jpg';
import img4 from '../src/images/4.jpg';
import React from "react";

export default function Home() {
  return (
    <>
      <section id={styles.hero}>
        <Carousel
          className={styles.heroCarousel}
          prevIcon={false}
          nextIcon={false}
        >
          <Carousel.Item className={styles.heroItem}>
            <Image
              alt=''
              src={img1}
            />
            <Carousel.Caption className={styles.heroCaption}>
              <h1>First slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.heroItem}>
            <Image
              alt=''
              src={img2}
            />
            <Carousel.Caption className={styles.heroCaption}>
              <h1>Second slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.heroItem}>
            <Image
              alt=''
              src={img3}
            />
            <Carousel.Caption className={styles.heroCaption}>
              <h1>Third slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles.heroItem}>
            <Image
              alt=''
              src={img4}
            />
            <Carousel.Caption className={styles.heroCaption}>
              <h1>Fourth slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section id={styles.info}>
        <h3>
          Pretium vulputate sapien nec sagittis aliquam
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus. Eget est lorem ipsum dolor sit. Aliquam eleifend mi in nulla. Volutpat est velit egestas dui id. Commodo quis imperdiet massa tincidunt nunc. Consequat semper viverra nam libero justo laoreet sit amet.
        </p>
      </section >

      <section >
        <div id={styles.partners}>
          <Carousel
            className={styles.partnersCarousel}
            prevIcon={false}
            nextIcon={false}
          >
            <Carousel.Item className={styles.partnersItem}>
              <div>
                <Row className="gx-5" style={{ height: '300px' }}>
                  <Col>
                    <Image
                      src={img1}
                      alt="First slide"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Col>
                  <Col className={styles.partnersCaption}>
                    <h3>Partner 1</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles.partnersItem}>
              <div>
                <Row className="gx-5" style={{ height: '300px' }}>
                  <Col>
                    <Image
                      src={img2}
                      alt="First slide"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Col>
                  <Col className={styles.partnersCaption}>
                    <h3>Partner 2</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles.partnersItem}>
              <div>
                <Row className="gx-5" style={{ height: '300px' }}>
                  <Col>
                    <Image
                      src={img3}
                      alt="First slide"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Col>
                  <Col className={styles.partnersCaption}>
                    <h3>Partner 3</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item className={styles.partnersItem}>
              <div>
                <Row className="gx-5" style={{ height: '300px' }}>
                  <Col>
                    <Image
                      src={img4}
                      alt="First slide"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Col>
                  <Col className={styles.partnersCaption}>
                    <h3>Partner 4</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}
