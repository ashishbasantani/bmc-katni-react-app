import "./AppointmentStepper.css";

interface StepperProps {
  step: number;
}

const steps = [
  { id: 1, label: "Department" },
  { id: 2, label: "Doctor" },
  { id: 3, label: "Schedule" },
  { id: 4, label: "Details" },
];

export default function Stepper({ step }: StepperProps) {
  return (
    <div className="appointment-stepper">
      {steps.map((item, index) => {
        const isCompleted = step > item.id;
        const isActive = step === item.id;

        return (
          <div
            className={`stepper-item ${item.id === steps.length ? "last-step" : ""}`}
            key={item.id}
          >

            <div
              className={`step-circle ${
                isCompleted ? "completed" : isActive ? "active" : ""
              }`}
            >
              {item.id}
            </div>

            <span
              className={`step-label ${
                isCompleted || isActive ? "active" : ""
              }`}
            >
              {item.label}
            </span>

            {index !== steps.length - 1 && (
              <div
                className={`step-line ${
                  step > item.id ? "filled" : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
