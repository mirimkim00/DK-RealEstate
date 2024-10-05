import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Home.module.css';
import img1 from "../src/images/1.jpg";
import img2 from "../src/images/2.jpg";
import img3 from "../src/images/3.jpg";
import img4 from "../src/images/4.jpg";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function Home() {
  const logos = [
    img1,
    img2,
    img3,
    img4,
  ];

  const heroSlides = [
    {
      img: img1,
      title: "First slide label",
      description:
        "Eros et tempus purus venenatis sollicitudin at scelerisque at a. Pharetra turpis aliquet vestibulum urna. Pellentesque nisi aliquam lectus sed ipsum et. Ridiculus platea luctus vestibulum sem quis. Lorem quis ut venenatis vel tincidunt congue.",
    },
    {
      img: img2,
      title: "Second slide label",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: img3,
      title: "Third slide label",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: img4,
      title: "Fourth slide label",
      description:
        "",
    },
  ];

  return (
    <main>
      <section id={styles.hero}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.heroSwiper}>

          {/* 내용 정해지면 map 해체 */}
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.heroItem}>
              <Image alt="" src={slide.img} />
              <div className={styles.heroLabel}>
                <h1>{slide.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button variant="dark" className={styles.heroBtn}>
                  Learn more
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id={styles.info}>
        <h3>DK Real Estate Management</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          elit ut aliquam purus. Eget est lorem ipsum dolor sit. Aliquam
          eleifend mi in nulla. Volutpat est velit egestas dui id. Commodo quis
          imperdiet massa tincidunt nunc. Consequat semper viverra nam libero
          justo laoreet sit amet.
        </p>
      </section>

      <section id={styles.partners}>
        <Swiper
          slidesPerView={3}
          spaceBetween={-50}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={styles.partnersSwiper}>
          {logos.map((logo, index) => (
            <SwiperSlide key={index}
              style={{
                // display: 'flex',
                justifyContent: 'center',
                paddingLeft: '10px'
              }}
            >
              <Image
                src={logo}
                alt={`Partner ${index}`}
                style={{
                  width: "340px", height: "50px", objectFit: "cover"
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section >

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Quick Free Quote</h3>
        </div>

        <Form>
          <Row>
            <Col md={6} className={styles.formSection}>
              <h5>Personal Information</h5>
              <Form.Group controlId="formName" className={styles.formGroup}>
                <Form.Label>Your Name *</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
              </Form.Group>

              <Form.Group controlId="formEmail" className={styles.formGroup}>
                <Form.Label>Email Address *</Form.Label>
                <Form.Control type="email" placeholder="info@address.com" />
              </Form.Group>

              <Form.Group controlId="formPhone" className={styles.formGroup}>
                <Form.Label>Phone *</Form.Label>
                <Form.Control type="text" placeholder="000-000-000" />
              </Form.Group>

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
            </Col>

            <Col md={6} className={styles.formSection}>
              <h5>Property Information</h5>
              <Form.Group
                controlId="formPropertyAddress"
                className={styles.formGroup}
              >
                <Form.Label>Property Address *</Form.Label>
                <Form.Control type="text" placeholder="Property Address" />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group
                    controlId="formBedroom"
                    className={styles.formGroup}
                  >
                    <Form.Label>Bedroom *</Form.Label>
                    <Form.Select defaultValue="Studio">
                      <option>Studio</option>
                      <option>1 Bedroom</option>
                      <option>2 Bedrooms</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    controlId="formBathroom"
                    className={styles.formGroup}
                  >
                    <Form.Label>Bathroom *</Form.Label>
                    <Form.Select defaultValue="1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={3} className="text-start">
                  <Form.Label>Parking *</Form.Label>
                </Col>
                <Col md={3} className="text-start">
                  <Form.Label>Locker *</Form.Label>
                </Col>
                <Col md={3} className="text-start">
                  <Form.Label>Balcony *</Form.Label>
                </Col>
                <Col md={3} className="text-start">
                  <Form.Label>Furnished *</Form.Label>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={3} className="text-start">
                  {/* Parking */}
                  <Form.Check
                    type="radio"
                    name="parking"
                    id="parkingYes"
                    label="Yes"
                    value="yes"
                    className="me-2"
                    inline
                  />
                  <Form.Check
                    type="radio"
                    name="parking"
                    id="parkingNo"
                    label="No"
                    value="no"
                    inline
                  />
                </Col>
                <Col md={3} className="text-start">
                  {/* Locker */}
                  <Form.Check
                    type="radio"
                    name="locker"
                    id="lockerYes"
                    label="Yes"
                    value="yes"
                    className="me-2"
                    inline
                  />
                  <Form.Check
                    type="radio"
                    name="locker"
                    id="lockerNo"
                    label="No"
                    value="no"
                    inline
                  />
                </Col>
                <Col md={3} className="text-start">
                  {/* Balcony */}
                  <Form.Check
                    type="radio"
                    name="balcony"
                    id="balconyYes"
                    label="Yes"
                    value="yes"
                    className="me-2"
                    inline
                  />
                  <Form.Check
                    type="radio"
                    name="balcony"
                    id="balconyNo"
                    label="No"
                    value="no"
                    inline
                  />
                </Col>
                <Col md={3} className="text-start">
                  {/* Furnished */}
                  <Form.Check
                    type="radio"
                    name="furnished"
                    id="furnishedYes"
                    label="Yes"
                    value="yes"
                    className="me-2"
                    inline
                  />
                  <Form.Check
                    type="radio"
                    name="furnished"
                    id="furnishedNo"
                    label="No"
                    value="no"
                    inline
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Submit 버튼을 Form 내부로 이동 */}
          <div className={styles.submitButtonContainer}>
            <Button
              variant="dark"
              type="submit"
              className={styles.submitButton}
            >
              Get Quote
            </Button>
          </div>
        </Form>
      </section>
      <section className={styles.chartSection}>
        <Row>
          <Col
            md={12}
            className="d-flex flex-column justify-content-center align-items-center "
          >
            <h3>Why DK?</h3>
            <br />
            <div className={styles.imageContainer}>
              <Image
                className={styles.chartSectionImg}
                src="/blank_l.jpg"
                alt="Blank"
                layout="fill"
              />
              <Button
                variant="dark" /* Bootstrap 제공 */
                type="submit"
                className={styles.imageButton}
              >
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </section>
      <TestimonialsCarousel />
    </main>
  );
}
