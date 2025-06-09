"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import SeoMeta from "@layouts/SeoMeta";
import projectData from "../../project_data.json";

const contactSchema = z.object({
  name: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  subject: z.string().min(5, "Tiêu đề phải có ít nhất 5 ký tự"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

const ContactPage = () => {
  const { contact } = projectData;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          formType: "Liên hệ",
        }),
      });

      if (response.ok) {
        toast.success("Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm.");
        reset();
      } else {
        throw new Error("Gửi tin nhắn thất bại");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <>
      <SeoMeta title="Liên hệ - Văn phòng Gia sư Sinh viên" />
      
      <section className="section">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-h1 font-bold">Liên hệ với chúng tôi</h1>
            <p className="mt-4 text-lg text-gray-600">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí
            </p>
          </motion.div>
          
          <div className="row pb-0">
            <motion.div
              className="col-12 md:col-6 lg:col-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                className="contact-form space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <input
                    className={`form-input w-full rounded-lg border-2 p-4 transition-colors duration-200 focus:border-primary focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    type="text"
                    placeholder="Họ và tên *"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <input
                    className={`form-input w-full rounded-lg border-2 p-4 transition-colors duration-200 focus:border-primary focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    type="email"
                    placeholder="Email *"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <input
                    className={`form-input w-full rounded-lg border-2 p-4 transition-colors duration-200 focus:border-primary focus:outline-none ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                    type="text"
                    placeholder="Tiêu đề *"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <textarea
                    className={`form-textarea w-full rounded-lg border-2 p-4 transition-colors duration-200 focus:border-primary focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    rows="6"
                    placeholder="Tin nhắn của bạn *"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 hover:scale-105 transition-transform duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              className="content col-12 md:col-6 lg:col-5 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-theme-light p-8 rounded-lg">
                <h4 className="text-h4 font-semibold mb-4">Thông tin liên hệ</h4>
                <p className="text-gray-600 mb-6">
                  Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn
                </p>
                
                <ul className="contact-list space-y-4">
                  <li className="flex items-center">
                    <span className="text-primary font-semibold mr-2">📍</span>
                    <span>{contact.address}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary font-semibold mr-2">📞</span>
                    <span>{contact.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary font-semibold mr-2">📧</span>
                    <span>{contact.email}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary font-semibold mr-2">🕒</span>
                    <span>{contact.workingHours}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;