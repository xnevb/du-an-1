"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <motion.h1
              className="font-primary font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {banner.title}
            </motion.h1>
            <motion.p
              className="mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: banner.content }}
            />
            {banner.button && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  className="btn btn-primary mt-4 hover:scale-105 transition-transform duration-200"
                  href={banner.button.link}
                >
                  {banner.button.label}
                </Link>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                className="mx-auto mt-12 rounded-lg shadow-lg"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
