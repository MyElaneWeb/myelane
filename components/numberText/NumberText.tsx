import { Container, Row, Col } from "react-bootstrap";

import styles from "../numberText/NumberText.module.scss";

interface Props {
  number: string;
  text: string;
}

const NumberText: React.FC<Props> = ({ number, text }) => {
  return (
    <section className={styles.numberText}>
      <div className={styles.bg}>
        <Container>
          <Row className="align-items-center">
            <Col lg="4">
              <h2>{number}</h2>
            </Col>
            <Col lg="8">
              <p>{text}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default NumberText;
