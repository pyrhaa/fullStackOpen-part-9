import { v4 as uuid } from 'uuid';
import { Entry, NewEntry, Patient } from '../types';
import patientService from './patientService';

const add = (
  patientId: Patient['id'],
  payload: NewEntry
): Entry | undefined => {
  const patient = patientService.getPatientById(patientId);
  if (!patient) return;

  const entry: Entry = {
    id: uuid(),
    ...payload
  };

  patient.entries.unshift(entry);

  return entry;
};

export default {
  add
};
