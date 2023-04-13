import FirstNameComponent from "./components/FirstName";
import LastNameComponent from "./components/LastNameComponent";
import EmailComponent from "./components/EmailComponent";
import SubmitButton from "./components/SubmitButton";
import CityList from "./components/CityList";
import { useState } from "react";
import bootstrap from "bootstrap";
import { Form, Row } from "react-bootstrap";
const UserForm = () => {
  const [formData, setFormData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    city: ""
  });
  const handleInputChange = (evnt) => {
    const inputFieldValue = evnt.target.value;
    const inputFieldName = evnt.target.name;
    const NewInputValue = {
      ...formInputData,
      [inputFieldName]: inputFieldValue
    };
    setFormInputData(NewInputValue);
  };
  const handleFormSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      console.log(formInputData);
    }
  };
  return (
    <form className="container mt-3 mb-3">
      <Row className="mb-3">
        <Form.Group className="col col-sm-6" controlId="formGroupEmail">
          <FirstNameComponent
            firstName={formInputData.firstname}
            handleInputChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="col col-sm-6" controlId="formGroupEmail">
          <LastNameComponent
            lastName={formInputData.lastName}
            handleInputChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="col col-sm-6" controlId="formGroupEmail">
          <EmailComponent
            emailAddress={formInputData.emailAddress}
            handleInputChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="col col-sm-6" controlId="formGroupEmail">
          <CityList
            city={formInputData.city}
            handleInputChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <SubmitButton handleFormSubmit={handleFormSubmit} />
    </form>
  );
};
export default UserForm;
