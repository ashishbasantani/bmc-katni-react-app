import { useState, useCallback } from "react";
import { useAppointmentStore } from "../store/appointmentStore";
import { appointmentAPI } from "../services/api";
import { Appointment, AppointmentRequest } from "../types/api";

export const useAppointments = () => {
  const {
    appointments,
    isLoading,
    error,
    showBookingModal,
    setAppointments,
    setLoading,
    setError,
    setShowBookingModal,
    addAppointment,
    removeAppointment,
    updateAppointment,
    clearError,
  } = useAppointmentStore();

  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await appointmentAPI.getAll();
      if (response.success && response.data) {
        setAppointments(response.data.items);
      } else {
        setError(response.error || "Failed to fetch appointments");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch appointments"
      );
    } finally {
      setLoading(false);
    }
  }, [setAppointments, setLoading, setError]);

  const createAppointment = useCallback(
    async (data: AppointmentRequest) => {
      setLoading(true);
      try {
        const response = await appointmentAPI.create(data);
        if (response.success && response.data) {
          addAppointment(response.data);
          setShowBookingModal(false);
          return response.data;
        } else {
          setError(response.error || "Failed to create appointment");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to create appointment"
        );
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, addAppointment, setShowBookingModal]
  );

  const cancelAppointment = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const response = await appointmentAPI.cancel(id);
        if (response.success) {
          removeAppointment(id);
        } else {
          setError(response.error || "Failed to cancel appointment");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to cancel appointment"
        );
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, removeAppointment]
  );

  return {
    appointments,
    isLoading,
    error,
    showBookingModal,
    setShowBookingModal,
    fetchAppointments,
    createAppointment,
    cancelAppointment,
    clearError,
  };
};
