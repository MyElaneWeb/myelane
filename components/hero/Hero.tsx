import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import styles from "../hero/Hero.module.scss";

interface Props {
  title: string;
  subTitle: string;
  btnText: string;
  btnLink: string;
}

const Hero: React.FC<Props> = ({ title, subTitle, btnLink, btnText }) => {
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={styles.box}>
              <h1>{title}</h1>
              <p>{subTitle}</p>
              <Link href={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
