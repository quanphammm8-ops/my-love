import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { imgThirdImage } from "../assets/image.constants";

const Page4 = () => {
  const [showContent, setShowContent] = useState(false);
  const [confetti, setConfetti] = useState<
    { id: number; x: number; delay: number }[]
  >([]);

  useEffect(() => {
    setShowContent(true);

    const confettiArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setConfetti(confettiArray);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 overflow-hidden relative">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${item.x}%`,
            animationDelay: `${item.delay}s`,
            top: "-50px",
          }}
        >
          <Heart
            className="text-red-500"
            size={Math.random() > 0.5 ? 24 : 16}
            fill="currentColor"
          />
        </div>
      ))}

      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Sparkles className="text-yellow-300 opacity-40" size={20} />
          </div>
        ))}
      </div>

      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div
          className={`max-w-3xl w-full text-center transform transition-all duration-1000 ${
            showContent ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <div className="space-y-8">
            <div className="flex justify-center mb-8 animate-bounce">
              <Heart
                className="text-red-600 drop-shadow-lg"
                size={80}
                fill="currentColor"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 drop-shadow-lg">
              Tuyệt Vời!
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              Em đã chấp nhận!
            </h2>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">
              <p className="text-3xl md:text-4xl font-bold text-gray-800">
                Cảm ơn em đã mang đến hạnh phúc này!
              </p>

              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
                Từ hôm nay, anh sẽ là chàng trai bên cạnh em, chăm sóc, bảo vệ,
                và yêu thương em hết mức. Mỗi ngày bên em sẽ là ngày hạnh phúc
                nhất.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={imgThirdImage}
                alt="Happy"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-semibold">
              Xinh thííííííí 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
