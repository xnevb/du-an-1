"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import SeoMeta from "@layouts/SeoMeta";
import projectData from "../../project_data.json";

const tutorSchema = z.object({
  fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 số"),
  university: z.string().min(2, "Tên trường không được để trống"),
  major: z.string().min(2, "Chuyên ngành không được để trống"),
  subjects: z.string().min(2, "Môn dạy không được để trống"),
  experience: z.string().min(1, "Vui lòng chọn kinh nghiệm"),
  area: z.string().min(2, "Khu vực không được để trống"),
  schedule: z.string().min(2, "Thời gian rảnh không được để trống"),
});

const TutorRegistration = () => {
  const { expectedOutcomes, operatingModel } = projectData;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(tutorSchema),
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
          formType: "Đăng ký Gia sư",
        }),
      });

      if (response.ok) {
        toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
        reset();
      } else {
        throw new Error("Có lỗi xảy ra");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <>
      <SeoMeta title="Đăng ký làm Gia sư - Văn phòng Gia sư Sinh viên" />
      
      <section className="section pt-14">
        <div className="container">
          <motion.div
            className="row justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-8">
              <div className="text-center mb-8">
                <h1 className="text-h1 font-bold mb-4">Đăng ký làm Gia sư</h1>
                <p className="text-lg text-gray-600">
                  Tham gia cùng chúng tôi để có cơ hội dạy kèm và kiếm thu nhập ổn định
                </p>
              </div>

              {/* Lợi ích */}
              <motion.div
                className="bg-theme-light rounded-lg p-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-h3 font-semibold mb-4">Lợi ích khi làm Gia sư</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {expectedOutcomes.map((outcome, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{outcome}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Form đăng ký */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-h3 font-semibold mb-6">Thông tin Đăng ký</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Họ và tên *
                      </label>
                      <input
                        {...register("fullName")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Nhập họ và tên"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Nhập email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Số điện thoại *
                      </label>
                      <input
                        {...register("phone")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Nhập số điện thoại"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Trường đại học *
                      </label>
                      <input
                        {...register("university")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Nhập tên trường"
                      />
                      {errors.university && (
                        <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Chuyên ngành *
                      </label>
                      <input
                        {...register("major")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Nhập chuyên ngành"
                      />
                      {errors.major && (
                        <p className="text-red-500 text-sm mt-1">{errors.major.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Môn dạy *
                      </label>
                      <input
                        {...register("subjects")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Ví dụ: Toán, Lý, Hóa"
                      />
                      {errors.subjects && (
                        <p className="text-red-500 text-sm mt-1">{errors.subjects.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Kinh nghiệm dạy học *
                    </label>
                    <select
                      {...register("experience")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Chọn kinh nghiệm</option>
                      <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                      <option value="Dưới 1 năm">Dưới 1 năm</option>
                      <option value="1-2 năm">1-2 năm</option>
                      <option value="Trên 2 năm">Trên 2 năm</option>
                    </select>
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Khu vực có thể dạy *
                    </label>
                    <input
                      {...register("area")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Ví dụ: Quận 1, Quận 3, Bình Thạnh"
                    />
                    {errors.area && (
                      <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Thời gian rảnh *
                    </label>
                    <textarea
                      {...register("schedule")}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Ví dụ: Thứ 2, 4, 6 buổi tối từ 18h-21h"
                    />
                    {errors.schedule && (
                      <p className="text-red-500 text-sm mt-1">{errors.schedule.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Đang gửi..." : "Đăng ký làm Gia sư"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TutorRegistration;
