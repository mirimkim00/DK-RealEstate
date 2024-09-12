import styles from '../styles/Home.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
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
              style={{ display: 'flex', justifyContent: 'center', paddingLeft: '10px' }}
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
      </section>

      <section
        style={{
          backgroundColor: "#C4C4C4",
          width: "100%",
          paddingBottom: "5%",
        }}
      >
        <div
          style={{
            paddingTop: "6%",
            paddingBottom: "4%",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>
            Nec feugiat in fermentum posuere
          </h3>
        </div>

        <Row>
          <Col md={6} style={{ paddingLeft: "10%", paddingRight: "5%" }}>
            <h5 style={{ fontWeight: "bold" }}>Personal Information</h5>

            <Form>
              <Form.Group controlId="formName" className="mt-3">
                <Form.Label>Your Name *</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-2">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control type="email" placeholder="info@address.com" />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mt-2">
                <Form.Label>Phone *</Form.Label>
                <Form.Control type="text" placeholder="000-000-000" />
              </Form.Group>

              <Form.Group controlId="formAdditionalComment" className="mt-2">
                <Form.Label>Additional Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={11}
                  placeholder="Do you have any question or comment?"
                />
              </Form.Group>
            </Form>
          </Col>
          {/* <Col md={2}></Col> */}
          <Col md={6} style={{ paddingLeft: "5%", paddingRight: "10%" }}>
            <h5 style={{ fontWeight: "bold" }}>Property Information</h5>
            <Form>
              <Form.Group controlId="formPropertyAddress" className="mt-3">
                <Form.Label>Property Address *</Form.Label>
                <Form.Control type="text" placeholder="Property Address" />
              </Form.Group>

              <Form.Group controlId="formBedroom" className="mt-2">
                <Form.Label>Bedroom *</Form.Label>
                <Form.Select defaultValue="Studio">
                  <option>Studio</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formBathroom" className="mt-2">
                <Form.Label>Bathroom *</Form.Label>
                <Form.Select defaultValue="1">
                  <option>1</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formParking" className="mt-2">
                <Form.Label>Parking *</Form.Label>
                <Form.Select defaultValue="Parking">
                  <option>Parking</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formLocker" className="mt-2">
                <Form.Label>Locker *</Form.Label>
                <Form.Select defaultValue="Locker">
                  <option>Locker</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formBalcony" className="mt-2">
                <Form.Label>Balcony *</Form.Label>
                <Form.Select defaultValue="Balcony">
                  <option>Balcony</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formFurnished" className="mt-2">
                <Form.Label>Furnished *</Form.Label>
                <Form.Select defaultValue="Furnished">
                  <option>Furnished</option>
                  <option>option2</option>
                  <option>option3</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20%",
              paddingRight: "20%",
            }}
          >
            <Button
              variant="dark"
              type="submit"
              className="mt-5"
              style={{
                fontSize: "0.6em",
                letterSpacing: "0.1em",
                paddingTop: "2%",
                paddingBottom: "2%",
                paddingLeft: "4%",
                paddingRight: "4%",
              }}
            >
              SUBMIT &gt;
            </Button>
          </div>
        </Row>
      </section>

      <section style={{ marginTop: "2%" }}>
        <Row>
          <Col
            md={12}
            className="d-flex flex-column justify-content-center align-items-center "
          >
            <h3 style={{ fontWeight: "bold" }}>
              Pretium vulputate sapien nec sagittis aliquam
            </h3>
            <br />
            <Image
              src="/blank_l.jpg"
              alt="Blank"
              width={1000}
              height={500}
              layout="intrinsic"
            />
          </Col>
        </Row>
      </section>

      <section
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          marginBottom: "-6%",
        }}
      >
        <Row>
          <Col
            md={6}
            style={{
              paddingTop: "5%",
              paddingLeft: "5%",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Get In Touch</h3>
            <br />
            <p style={{ marginRight: "4%" }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
            <ul
              className="list-unstyled d-flex mt-5"
              style={{ justifyContent: "left" }}
            >
              <li className="mx-2">
                <Image src="/blank_s.jpg" alt="Blank" width={80} height={80} />
              </li>
              <li className="mx-2">
                <Image src="/blank_s.jpg" alt="Blank" width={80} height={80} />
              </li>
              <li className="mx-2">
                <Image src="/blank_s.jpg" alt="Blank" width={80} height={80} />
              </li>
              <li className="mx-2">
                <Image src="/blank_s.jpg" alt="Blank" width={80} height={80} />
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <Image
              src="/blank_l.jpg"
              alt="Blank"
              width={500}
              height={350}
            //layout="intrinsic"
            />
          </Col>
        </Row>
      </section>
    </main>
  );
}
