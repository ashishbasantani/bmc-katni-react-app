import { Check } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  "Department",
  "Doctor",
  "Schedule",
  "Patient Info",
];

interface Props {
  activeStep: number;
  goToStep: (step: number) => void;
}

export default function ProgressTracker({
  activeStep,
  goToStep,
}: Props) {
  return (
    <div className="sticky top-0 z-20 bg-white border-b">

      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex items-center justify-between">

          {steps.map((label, index) => {
            const step = index + 1;
            const completed = step < activeStep;
            const active = step === activeStep;

            return (
              <div
                key={step}
                className="flex-1 flex items-center cursor-pointer"
                onClick={() => step <= activeStep && goToStep(step)}
              >
                {/* Circle */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: active ? 1.15 : 1,
                    backgroundColor: completed || active
                      ? "#602962"
                      : "#E5E7EB",
                  }}
                  className="
                    w-9 h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    font-semibold
                  "
                >
                  {completed ? (
                    <Check size={16} />
                  ) : (
                    step
                  )}
                </motion.div>

                {/* Label */}
                <span
                  className={`
                    ml-3 text-sm font-medium hidden sm:block
                    ${active ? "text-[#602962]" : "text-gray-500"}
                  `}
                >
                  {label}
                </span>

                {/* Line */}
                {step !== steps.length && (
                  <div className="flex-1 h-1 mx-4 bg-gray-200 relative">

                    <motion.div
                      initial={false}
                      animate={{
                        width: completed ? "100%" : "0%",
                      }}
                      className="absolute top-0 left-0 h-1 bg-[#602962]"
                    />

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}