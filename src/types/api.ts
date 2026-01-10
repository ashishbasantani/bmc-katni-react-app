// Appointment related types
export interface Appointment {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
  service: string;
  doctorId: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface AppointmentRequest {
  patientName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
  service: string;
  doctorId: string;
  notes?: string;
}

// Doctor related types
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  image: string;
  phone: string;
  email: string;
  available: boolean;
  availableSlots: string[];
}

// Service related types
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  image?: string;
}

// API Response wrapper types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

// User/Auth related types (for future use)
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: 'patient' | 'doctor' | 'admin';
}

export interface AuthResponse {
  user: User;
  token: string;
}
