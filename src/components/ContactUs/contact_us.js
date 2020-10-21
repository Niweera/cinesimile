import React from "react";
import { Form, TextInput, TextArea, Button } from 'carbon-components-react';
import "../../App.css"

const ContactUs = () => {
  return (
    <div>
      <div>
        <h2 className="landing-page__heading">Leave us a message . . . </h2>
      </div>
   
      <div>
    <Form>

      <div style={{marginBottom: '2rem'}}>
        <TextInput
          id="test2"
          invalidText="Invalid error message."
          labelText="Name: "
        />
      </div>

      <div style={{marginBottom: '2rem'}}>
        <TextInput
          id="test3"
          invalidText="Invalid error message."
          labelText="Email: "
        />
      </div>

      <div style={{marginBottom: '2rem'}}>
        <TextArea
          cols={50}
          id="test5"
          invalidText="Invalid error message."
          labelText="Message: "
          rows={4}
        />
      </div>

      <Button
        className="btn"
        kind="primary"
        tabIndex={0}
        type="submit"
      >
        Submit
      </Button >
</Form>
</div>
</div>
  );
};

export default ContactUs;
