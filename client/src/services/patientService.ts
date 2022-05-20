const url = "http://localhost:3001";

function pullPatients() {
  return fetch(`${url}/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

interface Event {
  firstName: string | undefined,
  lastName: string | undefined,
  cpf: string | undefined,
  insurance: string | undefined,
}

function postPatient(event: Event) {
  return fetch(`${url}/`, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}
export const patientService = {
  pullPatients,
  postPatient,
};
