import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import "./Planner.css";
import { CREATE_PLAN } from "../../utils/mutations";
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
    console.log(`planTitle${planTitle}`, `destination${destination}`, `description ${descriptionText}`);
    event.preventDefault();
    try {
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
    <div className="plannerContainer">
      <h1 className="title">Create A Plan!</h1>
      <form name="tripInfo" action="/" method="post" onSubmit={handleFormSubmit}>
        <div align="center">
          <label className="subtitle" htmlFor="planTitle">
            Plan Title<span className="req"></span>
          </label>
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
        </div>
        <div align="center">
          <label className="subtitle" htmlFor="planDestination">
            Plan Destination<span className="req"></span>
          </label>
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
        </div>
        <div align="center">
          <textarea
            type="text"
            required
            autoComplete="off"
            className="textarea"
            onChange={handleDescriptionChange}
            value={descriptionText}
            placeholder="Plan Description"
          ></textarea>
        </div>
        <div align="center">
          <button
            className="col-4 btn"
            id="submitBtn"
            htmlFor="tripInfo"
            type="submit"
          >
            Submit Trip
          </button>
        </div>
      </form>
    </div>
  );
}
