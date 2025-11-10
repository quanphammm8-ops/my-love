import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { imgSecondImage } from "../assets/image.constants";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const onNext = () => navigate("/choose-love");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-red-50 overflow-hidden">
      <motion.div
        className="relative h-64 md:h-80 bg-gradient-to-br from-pink-300 via-rose-300 to-red-400 overflow-hidden"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={imgSecondImage}
          alt="My Love"
          className="w-full h-full object-contain"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            My Love
          </h1>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto p-6 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Lá Thư Tỏ Tình
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold">Quỳnh Chi yêu dấu,</p>

              <p className="text-base md:text-lg">
                Có những điều anh muốn nói với em từ lâu, nhưng chưa tìm được
                khoảnh khắc thích hợp để nói.
              </p>

              <p className="text-base md:text-lg">
                Hôm nay, anh quyết định viết những dòng này để em hiểu rằng em
                có ý nghĩa như thế nào với anh.
              </p>

              <p className="text-base md:text-lg">
                Anh biết tình yêu không chỉ là những lời ngọt ngào, mà là sự
                quan tâm, chia sẻ và đồng hành.
              </p>

              <p className="text-base md:text-lg">
                Anh muốn được là người bên em trong mọi khoảnh khắc, cả vui và
                buồn.
              </p>

              <p className="text-base md:text-lg">
                Anh yêu em, không chỉ vì vẻ đẹp bên ngoài, mà vì trái tim tốt
                bụng và tâm hồn trong sáng của em.
              </p>

              <p className="text-base md:text-lg">
                Anh có thể là một chàng Ice Tea lạnh nhạt. Nhưng với em, anh sẽ
                luôn là chàng trai ấm áp.
              </p>

              <motion.div
                className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 space-y-2 border-2 border-pink-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  "Mệt thì ôm anh"
                </p>
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  "Buồn thì nói với anh"
                </p>
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  "Chán hay bực tức thì đánh anh"
                </p>
                <p className="text-base md:text-lg font-semibold text-red-600">
                  "Nhưng tuyệt đối đừng rời xa anh..."
                </p>
              </motion.div>

              <p className="text-lg font-semibold text-gray-800">
                Với tất cả tình yêu, Của Anh 💕
              </p>
            </div>
          </div>

          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p className="text-gray-600 text-sm md:text-base">
              Em muốn tiếp tục đọc lá thư này không?
            </p>
            <button
              onClick={onNext}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Tiếp tục</span>
              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page2;
