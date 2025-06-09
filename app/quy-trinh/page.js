"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SeoMeta from "@layouts/SeoMeta";
import projectData from "../../project_data.json";

const ProcessPage = () => {
  const { operatingModel } = projectData;

  return (
    <>
      <SeoMeta title="Quy trình làm việc - Văn phòng Gia sư Sinh viên" />
      
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-h1 font-bold mb-4">Quy trình Làm việc</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quy trình đơn giản và hiệu quả để kết nối gia sư với học sinh, 
              đảm bảo chất lượng và sự hài lòng của cả hai bên
            </p>
          </motion.div>
          
          <div className="grid gap-12 md:gap-16">
            {operatingModel.process.map((step, index) => (
              <motion.div
                key={`process-${index}`}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold text-white">{step.step}</span>
                    </div>
                    {step.icon && (
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                        <Image
                          src={step.icon}
                          width={32}
                          height={32}
                          alt={step.title}
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Step Content */}
                <div className={`flex-1 text-center md:text-left ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}>
                  <h3 className="text-h3 font-bold text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Progress Line */}
                  {index < operatingModel.process.length - 1 && (
                    <div className="hidden md:block">
                      <motion.div
                        className={`w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto ${
                          index % 2 === 1 ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'
                        }`}
                        initial={{ height: 0 }}
                        whileInView={{ height: 64 }}
                        transition={{ duration: 0.8, delay: (index * 0.2) + 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-theme-light rounded-xl p-8 md:p-12">
              <h3 className="text-h3 font-bold mb-4">
                Sẵn sàng bắt đầu hành trình?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Hãy đăng ký ngay hôm nay để trở thành một phần của cộng đồng gia sư - học sinh tích cực
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/danh-cho-gia-su"
                    className="btn btn-primary px-8 py-4 text-lg font-semibold"
                  >
                    Đăng ký làm Gia sư
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/danh-cho-phu-huynh"
                    className="btn btn-outline-primary px-8 py-4 text-lg font-semibold"
                  >
                    Tìm Gia sư ngay
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;