import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { imgFirstImage } from "../assets/image.constants";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  const onNext = () => {
    navigate("/express-one-feelings");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100 flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
            <motion.img
              src={imgFirstImage}
              alt="Người yêu"
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="text-center space-y-4 bg-black/40 rounded-2xl p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Anh có một bí mật
              </h1>
              <p className="text-lg md:text-2xl text-white">
                Em có muốn khám phá điều bí mật này không?
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Heart button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={onNext}
            className="group relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <Heart
              className="text-white animate-pulse"
              size={48}
              fill="currentColor"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-0 group-hover:opacity-50 animate-ping"></div>
          </button>
        </motion.div>

        <motion.p
          className="text-center text-gray-600 mt-8 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Nhấn vào trái tim để tiếp tục...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Page1;
