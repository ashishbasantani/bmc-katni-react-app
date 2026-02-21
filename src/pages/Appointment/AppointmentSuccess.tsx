import { useEffect } from "react";

type SuccessState = {
  appointmentId: string;
  doctor: string;
  patient: string;
  dateTime: string;
};

type Props = {
  data: SuccessState;
  onClose: () => void;
};

const AppointmentSuccessModal = ({ data, onClose }: Props) => {
  const { appointmentId, doctor, patient, dateTime } = data;

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[760px] mx-4 
                   bg-white rounded-[18px]
                   shadow-[0_20px_50px_rgba(120,56,160,0.18)]
                   max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Appointment Confirmation
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-10 max-sm:p-6">

          {/* Success Icon */}
          <div className="w-[78px] h-[78px] mx-auto mb-5 rounded-full 
                          bg-[#e6f9ee] flex items-center justify-center 
                          text-[34px] font-bold text-green-600">
            ✓
          </div>

          {/* Title */}
          <h2 className="text-center text-[26px] font-bold text-gray-800 mb-2">
            Appointment Confirmed!
          </h2>

          <p className="text-center text-gray-500 text-[15px] mb-7">
            Your appointment has been successfully booked.
            You will receive a confirmation via email and SMS.
          </p>

          {/* Details Box */}
          <div className="bg-[#f7f1ff] rounded-[14px] p-6 
                          grid grid-cols-2 gap-5 
                          max-sm:grid-cols-1 
                          mb-7 text-left">

            <div>
              <span className="block text-[13px] text-gray-500 mb-1">
                Appointment ID
              </span>
              <strong className="text-[15px] font-semibold text-gray-800">
                {appointmentId}
              </strong>
            </div>

            <div>
              <span className="block text-[13px] text-gray-500 mb-1">
                Doctor
              </span>
              <strong className="text-[15px] font-semibold text-gray-800">
                {doctor}
              </strong>
            </div>

            <div>
              <span className="block text-[13px] text-gray-500 mb-1">
                Date & Time
              </span>
              <strong className="text-[15px] font-semibold text-gray-800">
                {dateTime}
              </strong>
            </div>

            <div>
              <span className="block text-[13px] text-gray-500 mb-1">
                Patient
              </span>
              <strong className="text-[15px] font-semibold text-gray-800">
                {patient}
              </strong>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-7 max-sm:flex-col">

            <button
              className="flex-1 h-12 rounded-xl text-[15px] font-semibold
                         bg-white border border-[#d1c4f6] text-[#5b21b6]
                         hover:bg-[#f3e8ff] transition"
            >
              Add to Calendar
            </button>

            <button
              onClick={onClose}
              className="flex-1 h-12 rounded-xl text-[15px] font-semibold
                         bg-[#5b21b6] text-white
                         hover:bg-[#4c1d95] transition"
            >
              Done
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-[#faf5ff] border border-[#e9d5ff] 
                          rounded-[14px] p-5 text-left">

            <h4 className="text-[15px] font-semibold text-[#5b21b6] mb-3">
              Important Instructions:
            </h4>

            <ul className="pl-5 space-y-2 list-disc text-[14px] text-[#6b21a8]">
              <li>Please arrive 15 minutes before your appointment time</li>
              <li>Bring a valid ID and insurance card if applicable</li>
              <li>Bring all relevant medical reports and prescriptions</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentSuccessModal;