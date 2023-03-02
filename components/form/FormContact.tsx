import { useForm, ValidationError } from "@formspree/react";
import { Form, FormGroup } from "react-bootstrap";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdbweo");
  if (state.succeeded) {
    return <p className="thanks">Thanks! We'll get back to you shortly!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      {/* Name */}
      <FormGroup>
        <input id="name" type="text" name="name" placeholder="Name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </FormGroup>
      {/* Email */}
      <FormGroup>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="E-mail Address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormGroup>
      {/* Phone */}
      <FormGroup>
        <input id="phone" type="tel" name="phone" placeholder="Phone" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </FormGroup>
      <textarea id="message" name="message" placeholder="Message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <br />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </Form>
  );
};

export default Contact;
