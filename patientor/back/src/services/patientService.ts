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

const findById = (id: string): Patient | undefined => {
  const entry = patients.find((d) => d.id === id);
  return entry;
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatientEntry: Patient = {
    id: id,
    ...patient
  };
  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  addPatient,
  findById
};
