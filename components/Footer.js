import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "../src/images/facebook.png";
import instagramIcon from "../src/images/instagram.png";
import youtubeIcon from "../src/images/youtube.png";
import tiktokIcon from "../src/images/tiktok.png";
import kakaoIcon from "../src/images/kakaotalk.png";

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
              />
              <ul className="list-unstyled d-flex footer-social-icon-set">
                <li className="footer-social-icon">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={youtubeIcon}
                      alt="YouTube"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={tiktokIcon}
                      alt="TikTok"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a
                    href="https://www.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={kakaoIcon}
                      alt="KakaoTalk"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={6} className="d-flex flex-wrap justify-content-between">
              <Col md={6} className="footer-column">
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
              </Col>
              <Col md={6} className="footer-column">
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
              </Col>
            </Col>

            <Col md={3}>
              <Form className="ownerLoginForm">
                <h5>Owner Login</h5>
                <Form.Group controlId="formUsername">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Sign in
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}