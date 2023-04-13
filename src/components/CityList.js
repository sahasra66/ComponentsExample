/* This file is to display List of countries from data/Cities.json file*/

import { Form } from "react-bootstrap";
import Cities from "../data/Cities";
const CityList = ({ handleInputChange, city }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label className="text-center">Select Country</Form.Label>

          <Form.Select
            aria-label="Default select example"
            onChange={handleInputChange}
          >
            {Cities.cities &&
              Cities.cities.map((e, key) => {
                return (
                  <option key={key} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};
export default CityList;
