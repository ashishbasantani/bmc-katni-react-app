import { useState, useCallback } from "react";
import { doctorAPI, serviceAPI } from "../services/api";
import { Doctor, Service } from "../types/api";

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await serviceAPI.getAll();
      if (response.success && response.data) {
        setServices(response.data);
      } else {
        setError(response.error || "Failed to fetch services");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch services");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    services,
    isLoading,
    error,
    fetchServices,
  };
};

export const useDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await doctorAPI.getAll();
      if (response.success && response.data) {
        setDoctors(response.data);
      } else {
        setError(response.error || "Failed to fetch doctors");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch doctors");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getAvailableSlots = useCallback(
    async (doctorId: string, date: string) => {
      try {
        const response = await doctorAPI.getAvailableSlots(doctorId, date);
        if (response.success && response.data) {
          return response.data;
        } else {
          setError(response.error || "Failed to fetch available slots");
          return [];
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch available slots"
        );
        return [];
      }
    },
    []
  );

  return {
    doctors,
    isLoading,
    error,
    fetchDoctors,
    getAvailableSlots,
  };
};
