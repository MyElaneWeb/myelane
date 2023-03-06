import { useForm, ValidationError } from "@formspree/react";
import { Form, FormGroup } from "react-bootstrap";

const FormSuggestMerchant = () => {
  const [state, handleSubmit] = useForm("mpzeadja");
  if (state.succeeded) {
    return <p className="thanks">Thanks! We'll get back to you shortly!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      {/* Business Name */}
      <FormGroup>
        <input
          id="bizname"
          type="text"
          name="bizname"
          placeholder="Business Name"
          required
        />
        <ValidationError
          prefix="Business Name"
          field="bizname"
          errors={state.errors}
        />
      </FormGroup>
      {/* Location */}
      <FormGroup>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="Location"
          required
        />
        <ValidationError
          prefix="Location"
          field="location"
          errors={state.errors}
        />
      </FormGroup>
      {/* Phone */}
      <FormGroup>
        <input id="phone" type="tel" name="phone" placeholder="Phone" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
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

export default FormSuggestMerchant;
