"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Services = ({ services }) => {
  return services.map((service, index) => {
    const isOdd = index % 2 > 0;
    return (
      <section
        key={`service-${index}`}
        className={`section relative overflow-hidden ${isOdd && "bg-gradient-to-br from-theme-light/50 to-primary/5"}`}
      >
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
            className="items-center gap-12 lg:grid lg:grid-cols-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Gallery */}
            <motion.div
              className={`lg:col-span-7 ${!isOdd && "lg:order-2"}`}
              initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={
                    service.images.length > 1 ? {
                      clickable: true,
                      dynamicBullets: true
                    } : false
                  }
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={service.images.length > 1}
                  className="rounded-2xl shadow-2xl overflow-hidden"
                >
                  {service?.images.map((slide, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={slide}
                          alt={`${service.title} - Hình ${slideIndex + 1}`}
                          width={800}
                          height={500}
                          className="w-full h-[400px] lg:h-[500px] object-cover"
                          priority={slideIndex === 0}
                          unoptimized={slide.startsWith('http')}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
              </div>
            </motion.div>            {/* Content */}
            <motion.div
              className={`lg:col-span-5 mt-8 lg:mt-0 ${
                !isOdd && "lg:order-1"
              } flex flex-col justify-center`}
              initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Title with decorative line */}
                <div className="relative">
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <motion.h2
                    className="font-bold leading-tight text-h2 lg:text-h1 bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {service?.title}
                  </motion.h2>
                </div>

                {/* Content */}
                <motion.p
                  className="text-lg lg:text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {service?.content}
                </motion.p>

                {/* Features List */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {['Giảng viên chất lượng cao', 'Phương pháp giảng dạy hiện đại', 'Hỗ trợ 24/7'].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Button */}
                {service.button.enable && (
                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={service?.button.link}
                        className="btn btn-primary px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
                      >
                        {service?.button.label}
                        <motion.div
                          className="ml-3"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Image
                            src="/images/arrow-right.svg"
                            width={20}
                            height={16}
                            alt="arrow"
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  });
};

export default Services;
