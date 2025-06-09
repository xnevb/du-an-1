"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Workflow = ({ process }) => {
  return (
    <section className="section pb-0">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mx-auto max-w-[400px] font-bold leading-[44px] text-h2">
          Quy trình Làm việc
        </h2>
        <p className="mt-3 text-lg">
          Quy trình đơn giản và hiệu quả để kết nối gia sư với học sinh
        </p>
      </motion.div>

      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <motion.div
              key={`step-${i}`}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl font-bold">{step.step}</span>
              </motion.div>
              {step.icon && (
                <Image
                  className="mx-auto mb-4"
                  src={step.icon}
                  width={40}
                  height={40}
                  alt={step.title}
                />
              )}
              <h3 className="mb-2 text-h5 font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
