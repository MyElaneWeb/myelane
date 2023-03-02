import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

import styles from "../footer/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <section className={styles.cta}>
        <Container>
          <Row className="text-center">
            <h2>Request More Information</h2>
            <Link href="/contact">
              <Button>Request</Button>
            </Link>
          </Row>
        </Container>
      </section>
      <footer className={styles.footer}>
        <Container>
          <Row>
            <Col lg="12">
              <p>
                &copy; {new Date().getFullYear()} myeLane. All Right Reserved.
              </p>
              <p>
                <a href="https://infused.agency" target="_blank">
                  Niagara web design
                </a>{" "}
                by Infused Agency
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
