import "./Stepper.css";

export default function Stepper({ step }: { step: number }) {
  return (
    <div className="stepper-wrapper">
      <div className="stepper">
        {["Department", "Doctor", "Schedule", "Details"].map((label, i) => (
          <div
            key={label}
            className={`step ${step >= i + 1 ? "active" : ""}`}
          >
            <div className="circle">{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

