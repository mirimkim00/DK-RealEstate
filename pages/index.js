import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button, Form, Carousel, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import img1 from "../src/images/1.jpg";
import img2 from "../src/images/2.jpg";
import img3 from "../src/images/3.jpg";
import img4 from "../src/images/4.jpg";
import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";
// import { SiKakaotalk, SiTiktok } from "react-icons/si";

export default function Home() {
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
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.heroSwiper}
        >
          <SwiperSlide className={styles.heroItem}>
            <Image alt="" src={img1} />
            <div className={styles.heroLabel}>
              <h1>First slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroItem}>
            <Image alt="" src={img2} />
            <div className={styles.heroLabel}>
              <h1>Second slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroItem}>
            <Image alt="" src={img3} />
            <div className={styles.heroLabel}>
              <h1>Third slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="dark" className={styles.heroBtn}>
                LEARN MORE
                <MdKeyboardArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.heroItem}>
            <Image alt="" src={img4} />
            <div className={styles.heroLabel}>
              <h1>Fourth slide label</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <h3>Pretium vulputate sapien nec sagittis aliquam</h3>
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
          className={styles.partnersSwiper}
        >
          <SwiperSlide className={styles.partnersItem}>
            <Image src={img1} alt="First slide" />
            <div className={styles.partnersLabel}>
              <h3>Partner 1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.partnersItem}>
            <Image src={img2} alt="Second slide" />
            <div className={styles.partnersLabel}>
              <h3>Partner 2</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.partnersItem}>
            <Image src={img3} alt="Third slide" />
            <div className={styles.partnersLabel}>
              <h3>Partner 3</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.partnersItem}>
            <Image src={img4} alt="Fourth slide" />
            <div className={styles.partnersLabel}>
              <h3>Partner 4</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Nec feugiat in fermentum posuere</h3>
        </div>

        <Row>
          <Col md={6} className={styles.formSection}>
            <h5>Personal Information</h5>

            <Form>
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

              <Form.Group controlId="formBedroom" className={styles.formGroup}>
                <Form.Label>Bedroom *</Form.Label>
                <Form.Select defaultValue="Studio">
                  <option>Studio</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formBathroom" className={styles.formGroup}>
                <Form.Label>Bathroom *</Form.Label>
                <Form.Select defaultValue="1">
                  <option>1</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formParking" className={styles.formGroup}>
                <Form.Label>Parking *</Form.Label>
                <Form.Select defaultValue="Parking">
                  <option>Parking</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formLocker" className={styles.formGroup}>
                <Form.Label>Locker *</Form.Label>
                <Form.Select defaultValue="Locker">
                  <option>Locker</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formBalcony" className={styles.formGroup}>
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
      </section>

      <section className={styles.chartSection}>
        <Row>
          <Col
            md={12}
            className="d-flex flex-column justify-content-center align-items-center "
          >
            <h3>Pretium vulputate sapien nec sagittis aliquam</h3>
            <br />
            <Image
              className="chartSection-lmg"
              src="/blank_l.jpg"
              alt="Blank"
              layout="responsive"
              width={300}
              height={100}
              // sizes="100vw"
              // layout="intrinsic"
            />
          </Col>
        </Row>
      </section>

      <section className={styles.getInTouchSection}>
        <Row>
          <Col
            md={6}
            // style={{
            //   paddingTop: "2%",
            //   paddingLeft: "0%",
            // }}
          >
            <h3>Get In Touch</h3>
            <br />
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="mx-2">
                <Image
                  // className="getInTouch-sm-lmg"
                  src="/blank_s.jpg"
                  alt="Blank"
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </li>
              <li className="mx-2">
                <Image
                  // className="getInTouch-sm-lmg"
                  src="/blank_s.jpg"
                  alt="Blank"
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </li>
              <li className="mx-2">
                <Image
                  className="getInTouch-sm-lmg"
                  src="/blank_s.jpg"
                  alt="Blank"
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </li>
              <li className="mx-2">
                <Image
                  className="getInTouch-sm-lmg"
                  src="/blank_s.jpg"
                  alt="Blank"
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Image
              className="getInTouch-lg-lmg"
              src="/blank_l.jpg"
              alt="Blank"
              layout="responsive"
              width={300}
              height={100}
              // sizes="100vw"
            />
          </Col>
        </Row>
      </section>
    </main>
  );
}
