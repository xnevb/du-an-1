"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SeoMeta from "@layouts/SeoMeta";
import projectData from "../../project_data.json";

const FaqPage = () => {
  const { faq } = projectData;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SeoMeta title="Hỏi đáp - Văn phòng Gia sư Sinh viên" />

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-3xl">❓</span>
            </motion.div>

            <motion.h1
              className="text-h1 font-bold bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Câu hỏi Thường gặp
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tìm hiểu những thông tin quan trọng về dịch vụ gia sư của chúng tôi qua các câu hỏi phổ biến nhất
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'shadow-xl border-primary/20' : 'hover:shadow-xl'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                          openIndex === index
                            ? 'bg-gradient-to-r from-primary to-secondary'
                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}
                        animate={{
                          scale: openIndex === index ? 1.1 : 1,
                          rotate: openIndex === index ? 360 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {index + 1}
                      </motion.div>

                      <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                        openIndex === index ? 'text-primary' : 'text-gray-800'
                      }`}>
                        {item.question}
                      </h4>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-2xl font-bold ${
                        openIndex === index ? 'text-primary' : 'text-gray-400'
                      }`}
                    >
                      ↓
                    </motion.div>
                  </motion.button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <motion.div
                          className="w-full h-px bg-gradient-to-r from-primary/20 to-secondary/20 mb-4"
                          initial={{ width: 0 }}
                          animate={{ width: openIndex === index ? "100%" : 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        />
                        <motion.p
                          className="text-gray-600 leading-relaxed text-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: openIndex === index ? 1 : 0,
                            y: openIndex === index ? 0 : 10
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-bold mb-4">Vẫn còn thắc mắc?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="btn btn-primary px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Liên hệ ngay
              </motion.a>
              <motion.a
                href="tel:0375572903"
                className="btn btn-outline-primary px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Gọi hotline
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;