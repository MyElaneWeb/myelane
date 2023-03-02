import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "../../../public/logo.jpg";

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src={logo} className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/how-it-works/">How It Works</Nav.Link>
              <Nav.Link href="/suggest-a-merchant/">
                Suggest a Merchant
              </Nav.Link>
              <Nav.Link href="/for-businesses/">For Businesses</Nav.Link>
              <Nav.Link href="/downloads/">Downloads</Nav.Link>
              <Nav.Link href="/contact/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
