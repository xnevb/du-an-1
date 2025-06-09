"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeFeatures = ({ advantages }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 font-bold">Lợi thế Cạnh tranh</h2>
          <p className="mt-4 text-lg">Những ưu điểm vượt trội khi chọn dịch vụ của chúng tôi</p>
        </motion.div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <motion.div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center hover:shadow-lg transition-shadow duration-300"
              key={`advantage-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {item.icon && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={40}
                    height={40}
                    alt={item.name}
                  />
                </motion.div>
              )}
              <div className="mt-4">
                <h3 className="text-h5 font-semibold">{item.name}</h3>
                <p className="mt-3 text-gray-600">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
