"use strict";

import Model from '../models/patients'

interface Patient {
  firstName: string
  lastName: string
  cpf: string
  insurance: string
}

export const postPatient = async (req: { body: Patient}, res: any) => {
  try {
    const { firstName, lastName, cpf, insurance } = req.body;
    if (firstName === '' || lastName === '' || cpf === '' || insurance === '') return res.status(400).send('Fields are missing!');
    console.log(req.body);
    const patient = await Model.create({ firstName, lastName, cpf, insurance });
    // console.log(req.IncomingMessage.rawHeaders, 'my res'); //Could not get just the headers
    return res.status(201).send({ res: patient });
  } catch (error) {
    console.log(`Error ${error} in controllers`);
    return res.status(500);
  }
};
