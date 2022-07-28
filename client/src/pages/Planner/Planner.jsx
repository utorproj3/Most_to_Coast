import React, {  useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import "./Planner.css";
import {CREATE_PLAN} from "../../utils/mutations";

export default function Planner() {
  const [destination, setDestination] = useState("");
  const [planTitle, setPlanTitle] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const handleTitleChange = (event) => {
    setPlanTitle(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
  };
  const [addPlan, { error }] = useMutation(CREATE_PLAN);

  const handleFormSubmit = async (event) => {
    console.log(`planTitle${planTitle}`,`destination${destination}`,`description ${descriptionText}`);
    event.preventDefault();
    try{
    await addPlan({
        variables: { input: { destination, planTitle, descriptionText } }
    });
    //clear form value
    setDestination('');
    setPlanTitle('');
    setDescriptionText('');

    } catch (e) {
        console.error(e);
    }
  };

  return (
    <div className="container-fluid">
      <div className="planner">
        <div className="planner-form">
          <div className="planner-tab-content">
            <div className="row">
              <div className="col-lg-12">
                <h1>Create Plan</h1>

                <form
                  name="tripInfo"
                  action="/"
                  method="post"
                  onSubmit={handleFormSubmit}
                >
                  <div className="row">
                    <label className="col-4" htmlFor="planTitle">
                      Plan Title<span className="req"></span>
                    </label>
                    <label className="col-4" htmlFor="planDestination">
                      Plan Destination<span className="req"></span>
                    </label>
                    <label className="col-4">
                      Plan Description...<span className="req"></span>
                    </label>
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      className="col-4 input-field"
                      id="planTitle"
                      name="planTitle"
                      onChange={handleTitleChange}
                      value={planTitle}
                    />
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      className="col-4 input-field"
                      id="planDestination"
                      name="planDestination"
                      onChange={handleDestinationChange}
                      value={destination}
                    />

                    <textarea
                      type="text"
                      required
                      autoComplete="off"
                      className=""
                      onChange={handleDescriptionChange}
                      value={descriptionText}
                    ></textarea>
                    <button
                      className="col-4 btn"
                      id="submitBtn"
                      htmlFor="tripInfo"
                      type="submit"
                    >
                      Submit Trip
                    </button>
                    {/* <div className="col-4">
                      <button className="btn btn-outline">Private</button>
                      <button className="btn">Public</button>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container row">
          <div className="row">
            <div className="col-lg-12 text-center">
             
                <div className="col-6">
                  <table className="planner-table">
                    <tr className="top-row">
                      <th>Time</th>
                      <th>Day 1</th>
                      <th>Day 2</th>
                      <th>Day 3</th>
                      <th>Add Day</th>
                    </tr>
                    <tr className="row1">
                      <td>9am</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                      <td className="add-day">Add Day</td>
                    </tr>
                    <tr className="row2">
                      <td>12pm</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                    </tr>
                    <tr className="row3">
                      <td>3pm</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                    </tr>
                    <tr className="row4">
                      <td>7pm</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                    </tr>
                    <tr className="row-5">
                      <td>11pm</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                      <td>Add Item</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="container">
        <div className="col-lg-12 text-center">
          <div className="row">
            <div className="col-6">
              <button className="planner-button">Upload Image</button>
            </div>
            <div className="col-6">
              <button type="submit" className="planner-button">
                Save Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
