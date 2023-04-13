/** This file is to show First Name Component */
import { Form } from "react-bootstrap";

const FirstNameComponent = ({ handleInputChange, firstName }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label className="text-center">First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
};
export default FirstNameComponent;
