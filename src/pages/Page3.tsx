import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Page3 = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const navigate = useNavigate();

  const onYes = () => navigate("/approve-love");
  const onNo = () => navigate("/deny-love");
  const onBack = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 flex items-center justify-center p-4 py-12">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Tiêu đề */}
          <motion.div
            className="text-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-800"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Một Quyết Định Thay Đổi Tất Cả
            </motion.h1>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1 },
              }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="space-y-4 text-gray-700 leading-relaxed"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              <motion.p
                className="text-lg md:text-xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Đây là khoảnh khắc quan trọng. Anh hiểu rằng em cần thời gian để
                suy nghĩ, và dù quyết định của em là gì, anh cũng sẽ tôn trọng
                và trân trọng.
              </motion.p>

              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 space-y-3"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <p className="text-lg font-semibold text-gray-800">
                  Anh có thể không đẹp trai nhưng được cái anh trai mặt 😎
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  Anh có thể không giàu nhưng được cái anh nghèo 😅
                </p>
                <p className="text-lg text-gray-600 italic">
                  (Ơ, sai sai hay sao nhỉ...)
                </p>
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl font-bold text-red-600"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Anh chỉ muốn nói là...
              </motion.p>

              <motion.p
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Em đồng ý cho anh cơ hội để quan tâm và yêu thương em nhé!!!
              </motion.p>
            </motion.div>

            <motion.button
              onClick={onBack}
              className="text-pink-600 hover:text-red-600 transition-colors underline text-sm md:text-base"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              ← Đọc lại lời tỏ tình
            </motion.button>
          </motion.div>

          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-800 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Lựa Chọn Của Em
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              <motion.button
                onClick={onYes}
                onMouseEnter={() => setHoveredButton("yes")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 transform transition-all duration-300 ${
                  hoveredButton === "yes"
                    ? "scale-105 shadow-2xl"
                    : "shadow-lg hover:shadow-xl"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative space-y-3 text-white">
                  <div className="flex items-center justify-center mb-3">
                    <Heart
                      size={40}
                      fill="currentColor"
                      className="animate-pulse"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Em Đồng Ý</h3>
                  <p className="text-sm md:text-base">
                    Chấp nhận tình yêu này và bắt đầu một hành trình tuyệt vời
                    cùng nhau. Anh sẽ luôn bên em mỗi khi xúc gạo.
                  </p>
                  <div className="pt-3 flex items-center justify-center gap-2">
                    <span>Nhấn để tiếp tục</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </motion.button>

              {/* NO */}
              <motion.button
                onClick={onNo}
                onMouseEnter={() => setHoveredButton("no")}
                onMouseLeave={() => setHoveredButton(null)}
                className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 transform transition-all duration-300 ${
                  hoveredButton === "no"
                    ? "scale-105 shadow-2xl"
                    : "shadow-lg hover:shadow-xl"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative space-y-3 text-white">
                  <div className="flex items-center justify-center mb-3">
                    <Heart size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Em Chưa Đồng Ý
                  </h3>
                  <p className="text-sm md:text-base">
                    Em cần thêm thời gian để suy nghĩ hoặc cảm thấy chưa sẵn
                    sàng. Anh hiểu và tôn trọng quyết định này của em.
                  </p>
                  <div className="pt-3 flex items-center justify-center gap-2">
                    <span>Chọn tùy chọn này</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-center text-gray-500 text-sm italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Dù em lựa chọn gì, anh sẽ luôn chờ đợi và yêu thương em... 💕
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page3;
