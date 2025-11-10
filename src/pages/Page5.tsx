import { Heart, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Page5 = () => {
  const navigate = useNavigate();

  const onRetry = () => navigate("/choose-love");
  const onHome = () => navigate("/home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 flex items-center justify-center p-4 py-12 overflow-hidden">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="relative"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <Heart className="text-gray-400" size={64} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">💙</span>
                </div>
              </motion.div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Em đã đọc kỹ, và…
            </h1>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-blue-500 to-slate-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Cảm ơn anh thật nhiều vì đã can đảm bày tỏ. Em thực sự trân
                trọng tình cảm của anh, nhưng sau khi suy nghĩ kỹ, em cảm thấy
                chúng ta sẽ tốt hơn nếu là bạn bè.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Em xin lỗi nếu điều này làm anh buồn, và mong anh hiểu cho quyết
                định của em.
              </p>

              <p className="text-gray-600 italic">
                Anh sẽ luôn là người bạn quý giá trong cuộc đời em. 💙
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
              Điều Gì Tiếp Theo?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.button
                onClick={onRetry}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative space-y-3 text-white">
                  <div className="flex items-center justify-center mb-3">
                    <Heart size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Em Muốn Suy Nghĩ Lại
                  </h3>
                  <p className="text-sm md:text-base">
                    Em cần thêm thời gian để suy nghĩ về điều này một lần nữa...
                  </p>
                  <div className="pt-3 flex items-center justify-center gap-2">
                    <ArrowLeft size={20} />
                    <span>Quay lại</span>
                  </div>
                </div>
              </motion.button>

              <motion.button
                onClick={onHome}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-0 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative space-y-3 text-white">
                  <div className="flex items-center justify-center mb-3">
                    <Home size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Quay Lại Trang Chính
                  </h3>
                  <p className="text-sm md:text-base">
                    Em muốn xem lại tất cả từ đầu và tìm hiểu rõ hơn...
                  </p>
                  <div className="pt-3 flex items-center justify-center gap-2">
                    <Home size={20} />
                    <span>Về nhà</span>
                  </div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.p
            className="text-center text-gray-500 text-sm italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Anh sẽ luôn bảo vệ và quan tâm đến em, dù là bạn hay người yêu. Bạn
            bè mãi mãi 💙
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page5;
