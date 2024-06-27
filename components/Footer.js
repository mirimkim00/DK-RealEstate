import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { SiKakaotalk, SiTiktok } from "react-icons/si";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-light pt-3 px-4 footer">
        <Container>
          <Row>
            <Col md={3}>
              <Image
                className="footer-logo"
                src="/logo_w.png"
                alt="Company Logo"
                width={0}
                height={0}
                sizes="100vw"
                // layout="intrinsic"
              />
              <ul className="list-unstyled d-flex footer-social-icon-set">
                <li className="footer-social-icon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTiktok />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiKakaotalk />
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={6} className="d-flex flex-wrap justify-content-between">
              <Col md={6} className="footer-column">
                {/* <div className="footer-column"> */}
                <h5>Management</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">Quick Free Quote</Link>
                  </li>
                  <li>
                    <Link href="#">Leasing Q&A</Link>
                  </li>
                  <li>
                    <Link href="#">Rent Q&A</Link>
                  </li>
                  <li>
                    <Link href="#">Buildings</Link>
                  </li>
                </ul>
                {/* </div> */}
              </Col>
              <Col md={6} className="footer-column">
                {/* <div className="footer-column"> */}
                <h5>Menu</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">Owners</Link>
                  </li>
                  <li>
                    <Link href="#">Tenants</Link>
                  </li>
                  <li>
                    <Link href="#">Properties</Link>
                  </li>
                  <li>
                    <Link href="#">New Development</Link>
                  </li>
                  <li>
                    <Link href="#">Plans</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
                {/* </div> */}
              </Col>
            </Col>

            <Col md={3} className="temp-footer-image">
              <Image
                src="/blank_l.jpg"
                alt="Blank"
                layout="responsive"
                width={100}
                height={50}
              />
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
