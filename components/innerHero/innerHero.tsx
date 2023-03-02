import { Container, Row, Col } from "react-bootstrap";

import styles from "../innerHero/innerHero.module.scss";

interface Props {
  title: string;
}

const InnerHero: React.FC<Props> = ({ title }) => {
  return (
    <>
      <section className={styles["inner-hero"]}>
        <Container>
          <Row>
            <Col lg="12">
              <h1>{title}</h1>
              <hr />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InnerHero;
