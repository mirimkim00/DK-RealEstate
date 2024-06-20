import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function MainNav() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image
                        alt='DK Real Estate Management'
                        src="/logo.png"
                        width={'200px'}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ justifyContent: 'end' }}>
                    <Nav className="mr-auto my-2 my-lg-0">
                        <Nav.Link href="faq-owners">Owners</Nav.Link>
                        <Nav.Link href="#">Tenants</Nav.Link>
                        <Nav.Link href="#">Properties</Nav.Link>
                        <Nav.Link href="#">New Development</Nav.Link>
                        <Nav.Link href="#">Plans</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;