import React, { useRef } from "react";
import "./style.css";
import { patientService } from "../../services/patientService";
import back from "../../images/left-arrow.png";

interface Props {
  toggler: React.Dispatch<React.SetStateAction<boolean>>
}

interface NewPatient {
  firstName: string | undefined,
  lastName: string | undefined,
  cpf: string | undefined,
  insurance: string | undefined,
}

const CreateNewPatient: React.FC<Props> = ({ toggler }) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const cpf = useRef<HTMLInputElement>(null);
  const insurance = useRef<HTMLInputElement>(null);

  function handleAddPatient() {
    const first = firstName.current?.value;
    const last = lastName.current?.value;
    const id = cpf.current?.value;
    const seguro = insurance.current?.value;

    const newPatient: NewPatient = {
      firstName: first,
      lastName: last,
      cpf: id,
      insurance: seguro,
    };
    patientService.postPatient(newPatient);
    console.log(newPatient);
  }

  return (
    <div className="new-patient-container">
      <img
        src={back}
        alt="back button"
        className="back-arrow"
        onClick={() => toggler(false)}
      />
      <div className="new-form">
        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input name="first-name" ref={firstName} />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input name="last-name" ref={lastName} />
        </div>
        <div className="input-group">
          <label htmlFor="cpf">CPF</label>
          <input name="cpf" ref={cpf} />
        </div>
        <div className="input-group">
          <label htmlFor="insurance">Insurance</label>
          <input name="insurance" ref={insurance} />
        </div>
        <div className="input-group">
          <button
            className="submission-button"
            type="button"
            onClick={handleAddPatient}
          >
            Register Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPatient;
