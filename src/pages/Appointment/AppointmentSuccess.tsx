import { useLocation, useNavigate } from "react-router-dom";

type SuccessState = {
  appointmentId: string;
  doctor: string;
  patient: string;
  dateTime: string;
};

const AppointmentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as SuccessState | null;

  // Fallback if user refreshes or opens page directly
  if (!state) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#faf7ff] to-white px-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-gray-700 text-xl font-semibold">
            No appointment data found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#5b21b6] text-white px-5 py-2 rounded-lg hover:bg-[#4c1d95] transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { appointmentId, doctor, patient, dateTime } = state;

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-[#faf7ff] to-white 
                    flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-[760px] bg-white rounded-[18px] 
                      p-10 max-sm:p-7
                      shadow-[0_12px_28px_rgba(120,56,160,0.12)]">

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
            onClick={() => navigate("/")}
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
  );
};

export default AppointmentSuccess;
