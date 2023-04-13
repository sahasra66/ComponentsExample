/** This file is to show Email Component */
import { Form } from "react-bootstrap";
const EmailComponent = ({ handleInputChange, emailAddress }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-center">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleInputChange}
          value={emailAddress}
          name="emailAddress"
        />
      </Form.Group>
    </div>
  );
};
export default EmailComponent;
