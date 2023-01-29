import patients from '../../data/patientsDb';
import { NonSsn } from '../types';

const getPatients = (): Array<NonSsn> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default {
  getPatients
};
