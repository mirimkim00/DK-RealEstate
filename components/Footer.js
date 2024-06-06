import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { SiKakaotalk, SiTiktok } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        className="text-light pt-3 px-4"
        style={{
          backgroundColor: "#000000",
          width: "100%",
          paddingBottom: "4%",
        }}
      >
        <Container>
          <Row>
            <Col md={4}>
              <Image
                src="/logo_w.png"
                alt="Company Logo"
                width={400}
                height={400}
                layout="intrinsic"
              />
              <ul className="list-unstyled d-flex" style={{ marginLeft: "8%" }}>
                <li className="mx-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={45} color="white" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={45} color="white" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={45} color="white" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTiktok size={45} color="white" />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiKakaotalk size={45} color="white" />
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              md={2}
              className="d-flex flex-column align-items-left "
              style={{ marginTop: "5%" }}
            >
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "27px",
                  marginBottom: "17px",
                }}
              >
                Management
              </h5>
              <ul className="list-unstyled" style={{ fontSize: "1.1em" }}>
                <li className="mb-1">
                  <Link href="#">Quick Free Quote</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Leasing Q&A</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Rent Q&A</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Buildings</Link>
                </li>
              </ul>
            </Col>
            <Col
              md={2}
              className="d-flex flex-column align-items-left mx-1"
              style={{ marginTop: "5%", paddingLeft: "5.5%" }}
            >
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "27px",
                  marginBottom: "17px",
                }}
              >
                Menu
              </h5>
              <ul className="list-unstyled" style={{ fontSize: "1.1em" }}>
                <li className="mb-1">
                  <Link href="#">Owners</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Tenants</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Properties</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">New Development</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Plans</Link>
                </li>
                <li className="mb-1">
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col md={3} style={{ marginTop: "70px", paddingLeft: "6%" }}>
              <Image
                src="/blank_l.jpg"
                alt="Blank"
                width={310}
                height={210}
                // layout="intrinsic"
              />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
