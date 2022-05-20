import app from "../app";
import request from "supertest";
import { MongoClient } from 'mongodb';


describe('Post patient', () => {

  describe('When fields are missing', () => {
    it('should send error 400 status code', async () => {
      const fields = [{
        firstName: 'test first name',
        lastName: 'test last name',
        cpf: 'test cpf',
        insurance: ''
      },{
        firstName: 'test first name',
        lastName: 'test last name',
        cpf: '',
        insurance: 'test insurance',
      },{
        firstName: 'test first name',
        lastName: '',
        cpf: 'test cpf',
        insurance: 'test insurance',
      },{
        firstName: '',
        lastName: 'test first name',
        cpf: 'test cpf',
        insurance: 'test insurance',
      }]

      for (const body of fields) {
        const response = await request(app).post('/').send(body);
        expect(response.statusCode).toBe(400);
      }
    })
  })

  describe('When fields are provided', () => {
    it('should responde with a 201 status code', async () => {
      const newPatient = {
          firstName: 'test first name',
          lastName: 'test first name',
          cpf: 'test cpf',
          insurance: 'test insurance',
      }
      const response = await request(app).post('/').send(newPatient)
      expect(response.statusCode).toBe(201);
    })
  })

  describe('Check database connection with server', () => {
    let connection: any;
    let db: any;

    beforeAll(async () => {
      connection = await MongoClient.connect('mongodb://localhost:27017/');
      db = await connection.db('bananatest');
    });

    afterAll(async () => {
      await connection.close();
    });

    it('should insert a doc into collection', async () => {
      const users = db.collection('users');
      const rand = Math.random()*10000000;
      const mockUser = {_id: rand, name: 'John'};
      await users.insertOne(mockUser);

      const insertedUser = await users.findOne({_id: rand});
      expect(insertedUser).toEqual(mockUser);
    });
})
})
