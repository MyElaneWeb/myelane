import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import styles from "../iconText/IconText.module.scss";

interface Props {
  icon: any;
  iconAlt: string;
  heading: string;
  text: any;
}

const IconText: React.FC<Props> = ({ icon, iconAlt, heading, text }) => {
  return (
    <section className={styles.iconText}>
      <div className={styles.bg}>
        <Container>
          <Row className="align-items-center">
            <Col lg="4">
              <Image className="img-fluid" src={icon} alt={iconAlt} />
            </Col>
            <Col lg={{ span: 7, offset: 1 }}>
              <h3>{heading}</h3>
              <p>{text}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default IconText;
