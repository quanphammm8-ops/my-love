import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import {
  imgChild1,
  imgChild2,
  imgChild3,
  imgChild4,
  imgChild5,
} from "../assets/image.constants";
import music from "../assets/tang-tang-tang.mp3";

const lixi = [
  {
    id: 1,
    amount: "168.888 VNĐ",
    photo: imgChild2,
  },
  {
    id: 2,
    amount: "350.000 VNĐ",
    photo: imgChild4,
  },
  {
    id: 3,
    amount: "520.000 VNĐ",
    photo: imgChild3,
  },
  {
    id: 4,
    amount: "808.400 VNĐ",
    photo: imgChild1,
  },
  {
    id: 5,
    amount: "930.000 VNĐ",
    photo: imgChild5,
  },
];

const Page7 = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const idleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [audio] = useState(() => new Audio(music));

  useEffect(() => {
    if (!isSpinning) {
      idleIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % lixi.length);
      }, 2000);
    } else {
      if (idleIntervalRef.current) {
        clearInterval(idleIntervalRef.current);
        idleIntervalRef.current = null;
      }
    }
    return () => {
      if (idleIntervalRef.current) {
        clearInterval(idleIntervalRef.current);
        idleIntervalRef.current = null;
      }
    };
  }, [isSpinning]);

  const [isFirstSpin, setIsFirstSpin] = useState(true);
  const startSpin = () => {
    setIsSpinning(true);
    audio.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction");
    });
    let speed = 50;
    let counter = 0;
    const maxSpins = 30;

    const spin = () => {
      setCurrentIndex((prev) => (prev + 1) % lixi.length);
      counter++;

      if (counter > maxSpins) {
        speed += 20;
      }

      if (counter > maxSpins + 20) {
        if (spinIntervalRef.current) {
          clearInterval(spinIntervalRef.current);
        }
        let finalIndex;
        if (isFirstSpin) {
          finalIndex = lixi.findIndex((item) => item.id === 2);
          setIsFirstSpin(false);
        } else {
          const validIds = [1, 2, 3];
          const validIndexes = lixi
            .map((item, idx) => (validIds.includes(item.id) ? idx : -1))
            .filter((idx) => idx !== -1);
          const randIdx = Math.floor(Math.random() * validIndexes.length);
          finalIndex = validIndexes[randIdx];
        }
        setCurrentIndex(finalIndex);
        setResult(finalIndex);
        setIsSpinning(false);

        localStorage.setItem("lixi_result_2026", finalIndex.toString());

        // setTimeout(() => {
          setShowResult(true);
          if (!idleIntervalRef.current) {
            idleIntervalRef.current = setInterval(() => {
              setCurrentIndex((prev) => (prev + 1) % lixi.length);
            }, 2000);
          }
        // }, 500);
        return;
      }

      spinIntervalRef.current = setTimeout(spin, speed);
    };

    spin();
  };

  const FlowerPetal = ({ delay, left }: { delay: number; left: number }) => (
    <div
      className="absolute text-4xl animate-fall opacity-80 top-[-50px]"
      style={{
        left: `${left}%`,
        animation: `fall ${3 + Math.random() * 2}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {Math.random() > 0.5 ? "🌸" : "🌼"}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/2 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {[...Array(12)].map((_, i) => (
        <FlowerPetal key={i} delay={i * 0.5} left={Math.random() * 100} />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-lg flex items-center justify-center gap-4">
            <Sparkles className="w-12 h-12 text-pink-500" />
            CHÚC MỪNG NĂM MỚI 2026
            <Sparkles className="w-12 h-12 text-pink-500" />
          </h1>
          <p className="text-xl md:text-2xl text-purple-700 font-semibold">
            Lì Xì CHO XINH GÁI CỦA QUÂN
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 mb-8 border border-pink-100">
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-pink-300 relative bg-white flex items-center justify-center">
                <img
                  src={lixi[currentIndex].photo}
                  alt="Cute emotion"
                  className="w-full h-full object-cover transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            <div className="relative h-32 mb-8 overflow-hidden rounded-xl bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-2 border-pink-200 shadow-inner">
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`flex gap-4 transition-all ${isSpinning ? "duration-75" : "duration-500"}`}
                  style={{
                    transform: `translateX(-${currentIndex * 240}px)`,
                  }}
                >
                  {[...lixi, ...lixi, ...lixi].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-56 h-28 rounded-lg flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(135deg, #dc2626 0%, #991b1b 100%), url('${item.photo}')`,
                        backgroundSize: "100%, 60px",
                        backgroundPosition: "center, top",
                        border: "3px solid #b91c1c",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-30 bg-gradient-to-b from-transparent via-red-900 to-red-900"
                        style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`,
                        }}
                      ></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <p
                          className="text-2xl font-bold text-yellow-300"
                          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                        >
                          {item.amount}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-pink-500 z-10"></div>
              <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-white z-10 shadow-lg"></div>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={startSpin}
                disabled={isSpinning}
                className={`px-12 py-4 rounded-full text-2xl font-bold text-white shadow-xl transform transition-all flex items-center justify-center gap-3 ${
                  isSpinning
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 hover:shadow-2xl active:scale-95"
                }`}
              >
                <span>Quay điii</span>
                <img
                  src={
                    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBjeTBxdW9zaXpqbXcyaHZ4cGRvbGpnbmU5YzQ1aWZqeG1ub3U5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5iwS0IRgABkZ5F7x4r/giphy.gif"
                  }
                  alt="Cute emotion"
                  className="text-5xl w-12 h-12 "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showResult && result !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 text-center relative animate-scaleIn border border-pink-100">
            <button
              onClick={() => setShowResult(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-600"
            >
              ✕
            </button>

            <div className="mb-6">
              <Sparkles className="w-16 h-16 text-pink-500 mx-auto animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              CHÚC MỪNG!
            </h2>

            <div
              className="rounded-2xl p-8 mb-6 shadow-2xl text-center relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(220,38,38,0.85) 0%, rgba(153,27,27,0.85) 100%), url('${lixi[result].photo}')`,
                backgroundSize: "100%, 150px",
                backgroundPosition: "center, top",
                backgroundAttachment: "fixed",
                border: "3px solid #b91c1c",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,.1) 15px, rgba(255,255,255,.1) 30px)`,
                }}
              ></div>
              <div className="relative z-10">
                <img
                  src={lixi[result].photo}
                  alt="Người yêu"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-300 object-cover shadow-lg"
                />
                <p
                  className="text-5xl font-bold text-yellow-300 mb-2"
                  style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.6)" }}
                >
                  {lixi[result].amount}
                </p>
                <p className="text-lg text-yellow-100 font-semibold">
                  Lì Xì Của Anh Yêu
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6 border border-pink-100">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Chúc Boo em có một năm mới tràn đầy niềm vui, hạnh phúc và thành
                công!
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                ❤️ Yêu em rất nhiều! ❤️
              </p>
            </div>

            <div className="text-pink-600 font-bold text-xl">
              Nói yêu anh nhiều hơn nhó 😝
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fall {
          from {
            top: -50px;
            opacity: 1;
          }
          to {
            top: 100vh;
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Page7;
