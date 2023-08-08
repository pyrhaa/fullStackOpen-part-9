import patients from '../../data/patientsDb';
import { NewPatient, Patient, PublicPatient, NewEntry, Entry } from '../types';
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

const addEntry = (patientId: string, entry: NewEntry): Entry => {
  const newId: string = uuid();
  const newEntry = {
    id: newId,
    ...entry
  };
  const idx: number = patientsData.findIndex(
    (patient) => patientId === patient.id
  );
  if (idx === -1) {
    throw Error('Patient not found');
  } else {
    patientsData[idx].entries.push(newEntry);
    return newEntry;
  }
};

export default {
  getPatients,
  addPatient,
  getPatientById,
  addEntry
};
