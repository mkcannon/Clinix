import React, { useState } from "react";
import "./style.css";
import CreateNewPatient from "../CreateNewPatient/CreateNewPatient";
import ExistingPatientAppt from "../ExistingPatientAppt/ExistingPatientAppt";

export default function ApptFirstScreen() {
  const [newPatientForm, setNewPatientForm] = useState(false); // setting initial value to state as false
  const [existingForm, setExistingForm] = useState(false);

  return (
    <form className="form-container">
      <div className="new-schedule">Schedule New Appointment</div>
      {!newPatientForm && !existingForm ? (
        <>
          {" "}
          <button
            className="first-button"
            type="button"
            onClick={() => setNewPatientForm(true)}
          >
            Appointment For New Patient
          </button>
          <button
            className="first-button"
            type="button"
            onClick={() => setExistingForm(true)}
          >
            Appointment For Returning Patient
          </button>
        </>
      ) : newPatientForm ? (
        <CreateNewPatient toggler={setNewPatientForm} />
      ) : (
        <ExistingPatientAppt toggler={setExistingForm} />
      )}
    </form>
  );
}
