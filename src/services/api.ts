import {
  Appointment,
  AppointmentRequest,
  Doctor,
  Service,
  ApiResponse,
  PaginatedResponse,
} from "../types/api";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

// Generic fetch helper with error handling
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
}

// Appointments API
export const appointmentAPI = {
  create: (data: AppointmentRequest) =>
    fetchAPI<ApiResponse<Appointment>>("/appointments", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getAll: () =>
    fetchAPI<ApiResponse<PaginatedResponse<Appointment>>>("/appointments", {
      method: "GET",
    }),

  getById: (id: string) =>
    fetchAPI<ApiResponse<Appointment>>(`/appointments/${id}`, {
      method: "GET",
    }),

  update: (id: string, data: Partial<Appointment>) =>
    fetchAPI<ApiResponse<Appointment>>(`/appointments/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  cancel: (id: string) =>
    fetchAPI<ApiResponse<Appointment>>(`/appointments/${id}/cancel`, {
      method: "POST",
    }),
};

// Doctors API
export const doctorAPI = {
  getAll: () =>
    fetchAPI<ApiResponse<Doctor[]>>("/doctors", {
      method: "GET",
    }),

  getById: (id: string) =>
    fetchAPI<ApiResponse<Doctor>>(`/doctors/${id}`, {
      method: "GET",
    }),

  getAvailableSlots: (doctorId: string, date: string) =>
    fetchAPI<ApiResponse<string[]>>(
      `/doctors/${doctorId}/available-slots?date=${date}`,
      {
        method: "GET",
      }
    ),
};

// Services API
export const serviceAPI = {
  getAll: () =>
    fetchAPI<ApiResponse<Service[]>>("/services", {
      method: "GET",
    }),

  getById: (id: string) =>
    fetchAPI<ApiResponse<Service>>(`/services/${id}`, {
      method: "GET",
    }),
};
