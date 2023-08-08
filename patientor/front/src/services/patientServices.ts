import axios from 'axios';
import { EntryWithoutId, Patient, PatientValues } from '../types';

import { apiBaseUrl } from '../constants';

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

const getPatient = async (id: string) => {
  const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
  return data;
};

const postPatient = async (object: PatientValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
};

const postEntry = async (patientId: string, object: EntryWithoutId) => {
  const { data } = await axios.post(
    `${apiBaseUrl}/patients/${patientId}/entries`,
    object
  );
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  getPatient,
  postEntry,
  postPatient
};
