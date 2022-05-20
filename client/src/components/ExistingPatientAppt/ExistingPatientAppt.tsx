import React from "react";
import "./style.css";
import back from "../../images/left-arrow.png";

interface Props {
  toggler: React.Dispatch<React.SetStateAction<boolean>>
}

const ExistingPatientAppt: React.FC<Props> = ({ toggler }) => {
  return (
    <div className="cpf-search">
      <img
        src={back}
        alt="back button"
        className="back-arrow"
        onClick={() => toggler(false)}
      />
      <div className="input-group">
        <label htmlFor="cpf-search">Search For Patient By CPF</label>
        <input name="cpf-search" />
      </div>
      <button className="submission-button" type="button">
        Register Patient
      </button>
    </div>
  );
}

export default ExistingPatientAppt;