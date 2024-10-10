import { useState } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default function MainNav() {
  const [currentPage, setCurrentPage] = useState("Owners");
  const router = useRouter(); // useRouter 초기화
  const handleNavClick = (page, path) => {
    setCurrentPage(page);
    router.push(path); // 페이지 이동
  };

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image
              alt="DK Real Estate Management"
              src="/logo.png"
              width={"200px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "end" }}>
            <Nav className="mr-auto my-2 my-lg-0">
              <Nav.Link onClick={() => handleNavClick("Owners", "/owners")}>
                Owners
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("Tenants", "/tenants")}>
                Tenants
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("Properties", "/properties")}
              >
                Properties
              </Nav.Link>
              <Nav.Link
                onClick={() =>
                  handleNavClick("New Development", "/new_development")
                }
              >
                New Development
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("Plans", "/plans")}>
                Plans
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClick("Contact", "/contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
