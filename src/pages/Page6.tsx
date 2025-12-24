import { Heart, Snowflake, Gift } from "lucide-react";
import { useEffect, useState } from "react";
import video from "../assets/hand-made.mp4";
import {
  imgChristmas1,
  imgChristmas2,
  imgChristmas3,
  imgChristmas4,
  imgChristmas5,
  imgChristmas6,
} from "../assets/image.constants";

const Page6 = () => {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; left: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900 relative overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 text-white opacity-70 animate-fall"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        >
          <Snowflake size={16} />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Gift className="text-yellow-300 w-12 h-12 animate-bounce" />
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                Merry Christmas
              </h1>
              <Gift
                className="text-yellow-300 w-12 h-12 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>

            <div className="flex justify-center items-center gap-3 mb-8">
              <Heart className="text-pink-400 w-8 h-8 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-semibold text-pink-200">
                Dành tặng Chi yêu dấu
              </h2>
              <Heart
                className="text-pink-400 w-8 h-8 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 animate-slideUp">
            <div className="prose max-w-none">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-center font-medium">
                Mùa Giáng sinh này, anh muốn gửi đến em những lời chúc ấm áp
                nhất 💝
              </p>

              <div className="text-lg text-gray-700 mb-8">
                <p className="text-center">Chúc người đẹp có một</p>
                <p className="text-center">mùa Giáng sinh an lành, bình</p>
                <p className="text-center">an ấm áp may mắn sẽ đến với</p>
                <p className="text-center">em nhiều hơn, luôn vui vẻ tích</p>
                <p className="text-center">cực và nở thêm thật nhiều</p>
                <p className="text-center">nụ cười tươi xinh trên</p>
                <p className="text-center">môi Người Đẹp</p>
                <p className="text-center">nhoaaa</p>
                <p className="text-center">❤️</p>
              </div>

              <div className="border-t-2 border-red-200 pt-8 mb-8">
                <h3 className="text-2xl font-bold text-center text-red-800 mb-6">
                  🎁 Món quà handmade dành cho em
                </h3>

                <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-black">
                  <div className="aspect-[9/16]">
                    <video
                      controls
                      className="w-full h-full object-contain bg-black"
                    >
                      <source src={video} type="video/mp4" />
                      Trình duyệt của bạn không hỗ trợ video.
                    </video>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-red-200 pt-8">
                <h3 className="text-2xl font-bold text-center text-red-800 mb-6">
                  📸 Những khoảnh khắc đẹp của em
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={imgChristmas1}
                      alt="Chi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={imgChristmas2}
                      alt="Chi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={imgChristmas3}
                      alt="Chi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={imgChristmas4}
                      alt="Chi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={imgChristmas5}
                      alt="Chi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                    <img
                      src={imgChristmas6}
                      alt="Chi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                </div>

                <p className="text-center text-gray-600 mt-6 italic">
                  Mỗi ảnh là một khoảnh khắc quý giá mà em mang lại cho anh 💕
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <p className="text-red-800 font-semibold text-lg">
                🎄 Chúc em Giáng sinh an lành! 🎄
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
