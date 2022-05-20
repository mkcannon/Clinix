import React from "react";
import PatientCard from "../PatientCard/PatientCard";
import "./style.css";

const TodaysPatients: React.FC = () => {
  return (
    <>
      <div className="patients-container">
        <div className="todays-patients">Today's Appointments</div>
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </div>
    </>
  );
}

export default TodaysPatients;