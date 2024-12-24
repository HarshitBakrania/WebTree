import { motion } from "motion/react";

export const Card = (props) => {
  return (
    <motion.div
      className="border rounded-lg border-gray-300 shadow-lg p-6 flex items-center max-w-max hover:shadow-2xl transition-shadow bg-gradient-to-r from-blue-200 to-cyan-200"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <img
        className="rounded-full object-cover shadow-md"
        src={props.image}
        alt={`${props.firstName} ${props.lastName}`}
      />
      <div className="space-y-3 pl-6 text-left">
        <h2 className="font-bold text-2xl text-gray-800">
          {props.firstName} {props.lastName}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Gender:</span> {props.gender}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Phone:</span> {props.phoneNumber}
        </p>
      </div>
    </motion.div>
  );
};
