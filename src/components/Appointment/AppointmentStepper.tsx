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
    <div
      className="
        flex items-center justify-between
        px-[300px] py-[26px]
        bg-[#faf7ff]
        border-b border-[#ececec]
        sticky top-[81px] z-[1000]

        md:px-[300px]
        max-md:px-[16px] max-md:py-[18px]
        max-md:overflow-x-auto
        max-md:top-[100px]
      "
    >
      {steps.map((item, index) => {
        const isCompleted = step > item.id;
        const isActive = step === item.id;
        const isLast = item.id === steps.length;

        return (
          <div
            key={item.id}
            className={`
              flex items-center relative
              ${isLast ? "flex-none w-auto" : "flex-1"}
              max-md:flex-none
            `}
          >
            {/* Circle */}
            <div
              className={`
                w-[34px] h-[34px]
                max-md:w-[30px] max-md:h-[30px]
                rounded-full
                border-2
                flex items-center justify-center
                font-semibold
                z-[2]
                transition-all
                ${
                  isCompleted
                    ? "bg-[#7a2bd6] border-[#7a2bd6] text-white"
                    : isActive
                    ? "border-[#7a2bd6] text-[#7a2bd6] bg-white"
                    : "border-[#cfcfcf] text-[#9a9a9a] bg-white"
                }
              `}
            >
              <span className="max-md:text-[13px]">{item.id}</span>
            </div>

            {/* Label */}
            <span
              className={`
                ml-[10px] max-md:ml-[6px]
                text-[15px] max-md:text-[13px]
                whitespace-nowrap
                ${
                  isCompleted || isActive
                    ? "text-[#7a2bd6] font-semibold"
                    : "text-[#9a9a9a] font-medium"
                }
              `}
            >
              {item.label}
            </span>

            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1
                  h-[2px]
                  mx-[16px] max-md:mx-[12px]
                  max-md:min-w-[40px]
                  ${
                    step > item.id
                      ? "bg-[#7a2bd6]"
                      : "bg-[#dcdcdc]"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
