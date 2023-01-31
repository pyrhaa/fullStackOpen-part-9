export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type Fields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

export type NonSsn = Omit<Patient, 'ssn'>;
export type NewPatient = Omit<Patient, 'id'>;
