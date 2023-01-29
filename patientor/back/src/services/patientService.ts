import patients from '../../data/patientsDb';
import { Patient } from '../types';

const getPatients = (): Array<Patient> => {
  return patients;
};

export default {
  getPatients
};
