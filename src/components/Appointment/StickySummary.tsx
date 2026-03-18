import { motion } from "framer-motion";

export default function StickySummary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="
        sticky
        top-24
        bg-white
        rounded-xl
        shadow-md
        border
        p-4
      "
    >
      {children}
    </motion.div>
  );
}