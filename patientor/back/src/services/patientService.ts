import patients from '../../data/patientsDb';
import { NonSsn, NewPatient, Patient } from '../types';
import { v4 as uuid } from 'uuid';

const patientsData: Patient[] = patients;
const id: string = uuid();

const getPatients = (): Array<NonSsn> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient: Patient = {
    id: id,
    ...patient
  };
  patientsData.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient
};
