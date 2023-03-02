import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import FormContact from "../components/form/FormContact";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact | My eLane</title>
        <meta
          name="description"
          content="Thinking of upgrading to an enterprise-level ordering system? 
          Ready to catapult your business into a new sphere of success?
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero
        title="Thinking of upgrading to an enterprise-level ordering system? Ready to catapult your business into a new sphere of success?
"
      />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <p>
                My eLane is ready to disrupt the market by providing software
                previously only available to some of the largest franchises in
                the country to you at a fraction of the price.
                <br />
                <br />
                Even with a tried and tested system like ours, we know you’re
                going to have questions- we would too! Which is why we’re here
                to answer them all.
                <br />
                <br />
                Learn more about how our platform works, what it can do for your
                business, how long it takes to set up (spoiler alert- not long),
                and more!
                <br />
                <br />
                Send us a message, and we’ll be in touch to give you the
                answers, or quote, you’re looking for.
              </p>
            </Col>
            <Col lg="6">
              <FormContact />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
