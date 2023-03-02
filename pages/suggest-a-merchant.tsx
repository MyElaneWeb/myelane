import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import FormSuggestMerchant from "../components/form/FormSuggestMerchant";

export default function SuggestAMerchant() {
  return (
    <>
      <Head>
        <title>Suggest A Merchant | My eLane</title>
        <meta
          name="description"
          content="For over ten years, My eLane has been working behind the scenes to revolutionize mobile ordering for some of the biggest franchises in the United States and Canada."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Support Local" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <p>
                Do you have a favorite food place that you think would benefit
                from a boost in its online ordering platform? We’d love to hear
                about them!
                <br />
                <br />
                Help your local businesses thrive by recommending them to us
                here!
              </p>
            </Col>
            <Col lg="6">
              <FormSuggestMerchant />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
