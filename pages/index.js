import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.heroSwiper}>
          <SwiperSlide className={styles.heroItem}>
            <Image
              alt=''
              src={img1}
            />
            <div className={styles.heroLabel}>
              <h1>First slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroItem}>
            <Image
              alt=''
              src={img2}
            />
            <div className={styles.heroLabel}>
              <h1>Second slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroItem}>
            <Image
              alt=''
              src={img3}
            />
            <div className={styles.heroLabel}>
              <h1>Third slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroItem}>
            <Image
              alt=''
              src={img4}
            />
            <div className={styles.heroLabel}>
              <h1>Fourth slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
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
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.partnersSwiper}>
            <SwiperSlide className={styles.partnersItem}>
              <Row className="gx-5" style={{ height: '300px' }}>
                <Col>
                  <Image
                    src={img1}
                    alt="First slide"
                  />
                </Col>
                <Col className={styles.partnersLabel}>
                  <h3>Partner 1</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide className={styles.partnersItem}>
              <Row className="gx-5" style={{ height: '300px' }}>
                <Col>
                  <Image
                    src={img2}
                    alt="Second slide"
                  />
                </Col>
                <Col className={styles.partnersLabel}>
                  <h3>Partner 2</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide className={styles.partnersItem}>
              <Row className="gx-5" style={{ height: '300px' }}>
                <Col>
                  <Image
                    src={img3}
                    alt="Third slide"
                  />
                </Col>
                <Col className={styles.partnersLabel}>
                  <h3>Partner 3</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide className={styles.partnersItem}>
              <Row className="gx-5" style={{ height: '300px' }}>
                <Col>
                  <Image
                    src={img4}
                    alt="Fourth slide"
                  />
                </Col>
                <Col className={styles.partnersLabel}>
                  <h3>Partner 4</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Col>
              </Row>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
