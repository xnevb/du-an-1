"use client";
import { motion } from "framer-motion";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <motion.div
        className="section container rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border border-white/20 relative z-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="row mx-auto items-center justify-center relative z-10">
          <motion.div
            className="md:col-5 lg:col-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                className="w-full rounded-2xl shadow-2xl relative z-10"
                src={cta?.image}
                alt={cta?.image_alt || "call to action image"}
                width={600}
                height={400}
                unoptimized={cta?.image?.startsWith('http')}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                animate={{
                  y: [10, -10, 10],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center md:col-7 lg:col-6 md:mt-0 md:text-left md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.h2
              className="text-h2 lg:text-h1 font-bold bg-gradient-to-r from-dark to-primary bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {cta?.title}
            </motion.h2>

            <motion.div
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {markdownify(cta?.content)}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "500+", label: "Gia sư" },
                { number: "1000+", label: "Học sinh" },
                { number: "98%", label: "Hài lòng" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-2xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {cta.button.enable && (
              <motion.div
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
                    className="btn btn-primary px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center group"
                    href={cta.button.link}
                    rel={cta.button.rel}
                  >
                    {cta.button.label}
                    <motion.span
                      className="ml-3 text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      🚀
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Cta;
