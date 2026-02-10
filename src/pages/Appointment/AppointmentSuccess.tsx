import { useLocation, useNavigate } from "react-router-dom";
import "./AppointmentSuccess.css";

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
      <div className="appointment-success-page">
        <div className="success-fallback">
          <h2>No appointment data found</h2>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </div>
    );
  }

  const { appointmentId, doctor, patient, dateTime } = state;

  return (
    <div className="appointment-success-page">
      <div className="success-card">
        {/* Success Icon */}
        <div className="success-icon">✓</div>

        {/* Title */}
        <h2>Appointment Confirmed!</h2>
        <p>
          Your appointment has been successfully booked.
          You will receive a confirmation via email and SMS.
        </p>

        {/* Details */}
        <div className="details-box">
          <div>
            <span>Appointment ID</span>
            <strong>{appointmentId}</strong>
          </div>

          <div>
            <span>Doctor</span>
            <strong>{doctor}</strong>
          </div>

          <div>
            <span>Date & Time</span>
            <strong>{dateTime}</strong>
          </div>

          <div>
            <span>Patient</span>
            <strong>{patient}</strong>
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="secondary">
            Add to Calendar
          </button>

          <button
            className="primary"
            onClick={() => navigate("/")}
          >
            Done
          </button>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <h4>Important Instructions:</h4>
          <ul>
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
