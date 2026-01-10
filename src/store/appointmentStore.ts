import { create } from "zustand";
import { Appointment } from "../types/api";

interface AppointmentState {
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
  isLoading: boolean;
  error: string | null;
  showBookingModal: boolean;

  setAppointments: (appointments: Appointment[]) => void;
  setSelectedAppointment: (appointment: Appointment | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setShowBookingModal: (show: boolean) => void;
  addAppointment: (appointment: Appointment) => void;
  removeAppointment: (id: string) => void;
  updateAppointment: (id: string, updates: Partial<Appointment>) => void;
  clearError: () => void;
}

export const useAppointmentStore = create<AppointmentState>((set: any) => ({
  appointments: [],
  selectedAppointment: null,
  isLoading: false,
  error: null,
  showBookingModal: false,

  setAppointments: (appointments) => set({ appointments }),
  setSelectedAppointment: (appointment) => set({ selectedAppointment: appointment }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setShowBookingModal: (showBookingModal) => set({ showBookingModal }),
  
  addAppointment: (appointment: Appointment) =>
    set((state: AppointmentState) => ({
      appointments: [...state.appointments, appointment],
    })),
  
  removeAppointment: (id: string) =>
    set((state: AppointmentState) => ({
      appointments: state.appointments.filter((a) => a.id !== id),
    })),
  
  updateAppointment: (id: string, updates: Partial<Appointment>) =>
    set((state: AppointmentState) => ({
      appointments: state.appointments.map((a) =>
        a.id === id ? { ...a, ...updates } : a
      ),
    })),
  
  clearError: () => set({ error: null }),
}));
