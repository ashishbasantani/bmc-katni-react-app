export interface Doctor {
  id: number;
  name: string;
  degree: string;
  experience: string;
  department: string;
  image: string;
}

export interface AppointmentFormData {
  department: string;
  doctor?: Doctor;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  reason: string;
}
