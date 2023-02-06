import patients from '../../data/patientsDb';
import { NewPatient, Patient, PublicPatient } from '../types';
import { v4 as uuid } from 'uuid';

const patientsData: Patient[] = patients;
const id: string = uuid();

const getPatientById = (id: string): Patient | undefined => {
  return patientsData.find((patient) => patient.id === id);
};

const getPatients = (): PublicPatient[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatientEntry: Patient = {
    id: id,
    ...patient,
    entries: []
  };
  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  addPatient,
  getPatientById
};
