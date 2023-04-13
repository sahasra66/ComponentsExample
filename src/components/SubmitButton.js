/** This file is to show Submit button */
import { Button } from "react-bootstrap";
const SubmitButton = ({ handleFormSubmit }) => {
  return (
    <div className="col-6 bg-light mx-auto text-center">
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </div>
  );
};
export default SubmitButton;
