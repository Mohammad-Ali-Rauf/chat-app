import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const OpenConversation = () => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              onChange={(e) => setText(e.target.value)}
              as="textarea"
              required
              value={text}
              placeholder="Your Message"
              style={{ height: "40px", resize: "none" }}
            />
            <InputGroup.Append>
              <Button type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default OpenConversation;
