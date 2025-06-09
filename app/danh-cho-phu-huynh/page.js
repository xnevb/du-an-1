"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import SeoMeta from "@layouts/SeoMeta";
import projectData from "../../project_data.json";

const parentSchema = z.object({
  fullName: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 số"),
  email: z.string().email("Email không hợp lệ"),
  studentGrade: z.string().min(1, "Vui lòng chọn lớp học"),
  subjects: z.string().min(2, "Môn học không được để trống"),
  area: z.string().min(2, "Khu vực không được để trống"),
  schedule: z.string().min(2, "Thời gian học không được để trống"),
  budget: z.string().min(1, "Vui lòng chọn mức học phí"),
  requirements: z.string().optional(),
});

const ParentRequest = () => {
  const { objectives } = projectData;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(parentSchema),
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
          formType: "Yêu cầu Gia sư",
        }),
      });

      if (response.ok) {
        toast.success("Yêu cầu đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
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
      <SeoMeta title="Tìm Gia sư - Văn phòng Gia sư Sinh viên" />
      
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
                <h1 className="text-h1 font-bold mb-4">Tìm Gia sư cho Con</h1>
                <p className="text-lg text-gray-600">
                  Chúng tôi sẽ kết nối bạn với gia sư phù hợp nhất cho con em
                </p>
              </div>

              {/* Lợi ích */}
              <motion.div
                className="bg-theme-light rounded-lg p-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-h3 font-semibold mb-4">Tại sao chọn chúng tôi?</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {objectives.specificGoals.map((goal, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{goal}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Form yêu cầu */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-h3 font-semibold mb-6">Thông tin Yêu cầu</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Họ và tên phụ huynh *
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

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Lớp học của con *
                      </label>
                      <select
                        {...register("studentGrade")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Chọn lớp học</option>
                        <option value="Lớp 1">Lớp 1</option>
                        <option value="Lớp 2">Lớp 2</option>
                        <option value="Lớp 3">Lớp 3</option>
                        <option value="Lớp 4">Lớp 4</option>
                        <option value="Lớp 5">Lớp 5</option>
                        <option value="Lớp 6">Lớp 6</option>
                        <option value="Lớp 7">Lớp 7</option>
                        <option value="Lớp 8">Lớp 8</option>
                        <option value="Lớp 9">Lớp 9</option>
                        <option value="Lớp 10">Lớp 10</option>
                        <option value="Lớp 11">Lớp 11</option>
                        <option value="Lớp 12">Lớp 12</option>
                      </select>
                      {errors.studentGrade && (
                        <p className="text-red-500 text-sm mt-1">{errors.studentGrade.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Môn học cần dạy *
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
                      Khu vực *
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

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Thời gian học *
                      </label>
                      <input
                        {...register("schedule")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Ví dụ: Thứ 2, 4, 6 từ 19h-21h"
                      />
                      {errors.schedule && (
                        <p className="text-red-500 text-sm mt-1">{errors.schedule.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Mức học phí mong muốn *
                      </label>
                      <select
                        {...register("budget")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Chọn mức học phí</option>
                        <option value="80.000 - 120.000 VNĐ/buổi">80.000 - 120.000 VNĐ/buổi</option>
                        <option value="120.000 - 150.000 VNĐ/buổi">120.000 - 150.000 VNĐ/buổi</option>
                        <option value="150.000 - 200.000 VNĐ/buổi">150.000 - 200.000 VNĐ/buổi</option>
                        <option value="Trên 200.000 VNĐ/buổi">Trên 200.000 VNĐ/buổi</option>
                      </select>
                      {errors.budget && (
                        <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Yêu cầu đặc biệt (nếu có)
                    </label>
                    <textarea
                      {...register("requirements")}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Ví dụ: Gia sư nữ, có kinh nghiệm dạy học sinh yếu..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu tìm Gia sư"}
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

export default ParentRequest;
