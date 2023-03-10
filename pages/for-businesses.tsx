import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";

export default function ForBusinesses() {
  return (
    <>
      <Head>
        <title>For Businesses | My eLane</title>
        <meta
          name="description"
          content="Advance your business with an elite, customizable ordering platform that will wow users both in-store and at home.
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Supercharge Customer Loyalty and Showcase Your Brand" />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="6">
              <h2>Enterprise-level software that you’ll own- for less.</h2>
              <p>
                Advance your business with an elite, customizable ordering
                platform that will <strong>wow</strong> users both in-store and
                at home.
                <br />
                <br />
                My eLane delivers a system that offers you more options at a
                lower cost so you can do what you’re meant to do- serve
                delicious food- not fret about the tech that’s there to help you
                achieve your goals.
                <br />
                <br />
                The back and front of house will benefit from faster load times,
                effortless queued start times, and integrated POS and payment
                processing.
              </p>
              <h3>Let our tech do the work for you.</h3>
              <Link href="/contact">
                <Button>Get A Quote</Button>
              </Link>
            </Col>
            <Col lg="6">
              <h2>Businesses We Help</h2>
              <p>
                <strong>Coffee Chains</strong>
                <br />
                Get up to 8x the number of orders out per hour
              </p>
              <p>
                <strong>Fast Casual</strong>
                <br />
                Serve more customers with convenient order-ahead app options
              </p>
              <p>
                <strong>Traditional Restaurants</strong>
                <br />
                Compete with QSR chains with ETA-triggered orders
              </p>
              <p>
                <strong>Quick Service Restaurants</strong>
                <br />
                Make fast-food faster with a GPS-triggered ordering system
              </p>
              <p>
                <strong>Chains/Franchises</strong>
                <br />
                Strategize easier with customer data that you need (and own!)
              </p>
              <p>
                <strong>Hotels/Hospitality</strong>
                <br />
                Streamline your locations from room service to restaurants to
                optimize your brand
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
