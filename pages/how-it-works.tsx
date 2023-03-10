import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";

import InnerHero from "../components/innerHero/innerHero";
import styles from "../styles/HowItWorks.module.scss";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | My eLane</title>
        <meta
          name="description"
          content="For over ten years, My eLane has been working behind the scenes to revolutionize mobile ordering for some of the biggest franchises in the United States and Canada."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerHero title="Online Ordering Made Easy" />
      <section className="inner-content">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <p>
                For over ten years, My eLane has been working behind the scenes
                to revolutionize mobile ordering for some of the biggest
                franchises in the United States and Canada.
                <br />
                <br />
                We love what we do, and now we’re making it our mission to
                disrupt the market and start bringing our tech directly to you,
                the consumers.
                <br />
                <br />
                When you purchase My eLane, not only do you get a leading mobile
                ordering experience, but you get professionals with over a
                decade of experience to guide you.
                <br />
                <br />
                Every growing business should have the opportunity to own its
                own ordering software without the headaches of dealing with
                non-responsive designers or wasting years of your time, and
                millions of dollars, to perfect your own code.
              </p>
            </Col>
            <Col lg="6">
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/AbAK5hdBQVk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Col>
          </Row>
          <Row className="p-t-40">
            <Col lg="12">
              <h2>Something New...</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <p>
                We’re now offering you the option of owning our enterprise-level
                tech, and customizing it so that your brand is showcased through
                all of your digital presence, including your ordering system, at
                a much lower cost than renting, or designing your own.
                <br />
                <br />
                Best of all, once you purchase My eLane, everything is YOURS. We
                believe that your hard-earned money should stay in your
                business, which is why we don’t take any commissions or
                percentages. Once you buy our system, everything you earn is
                yours to keep.
                <br />
                <br />
                When you implement your My eLane software, you’ll be
                streamlining your whole ordering process which results in not
                only increased revenue and a smoother-running kitchen, but your
                customer's user experience will be second to none.
              </p>
              <p>
                With designated start times for each order, your customers will
                receive the right order on time, so you’ll never have to throw
                out products that were made too early, or have unhappy customers
                waiting longer for their food.
                <br />
                <br />
                In the digital world, convenience is key- so make your franchise
                the go-to choice for your customers with My eLane.
              </p>
            </Col>
            <Col lg="6">
              <ul>
                <li>Fast Loading</li>
                <li>Pre-ordering and Pre-paying</li>
                <li>
                  Patented ETA system uses GPS to ensure their order will be
                  ready exactly when they arrive
                </li>
                <li>
                  The system automatically processes the orders ranked on the
                  time of pickup/delivery to make it easier for your employees.{" "}
                </li>
                <li>You are notified when each order should be prepped. </li>
              </ul>
              <Link href="/contact">
                <Button>Request More Information</Button>
              </Link>
            </Col>
          </Row>
          <Row className="p-t-40">
            <Col lg="12">
              <h2>How It Works</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <p>
                We’re happy to answer any questions you have about our software.
                Once you’ve spoken to us, we’ll get the ball rolling.
              </p>
              <ul>
                <li>
                  Any custom functions and design features you want in your
                  mobile experience will be discussed with our team.
                </li>
                <li>
                  We’ll integrate your POS and payment providers into your
                  system.
                </li>
                <li>
                  Our team works to advise and set up your entire system
                  including your new cloud environment.
                </li>
                <li>
                  Once our specialists have reviewed your platform in-house and
                  worked with your team to test real-world applications in your
                  test stores, we check to make sure everything is working
                  perfectly.
                </li>
                <li>When you’re ready- We publish!</li>
              </ul>
            </Col>
            <Col lg="6">
              <p>
                You’ll have complete control over what you want for your
                business. And we’re here to make it happen.{" "}
              </p>

              <Link href="/contact">
                <Button>Get Started</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
