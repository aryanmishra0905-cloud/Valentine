import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ValentinePage() {
  const [noClicks, setNoClicks] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const noTexts = [
    "No",
    "Are you serious?",
    "Do you not love me?",
    "Really really sure?",
    "Last chance..."
  ];

  const handleNo = () => {
    setNoClicks((prev) => Math.min(prev + 1, noTexts.length));
  };

  const handleYes = () => {
    setAccepted(true);
  };

  const yesScale = 1 + noClicks * 0.35;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6 relative overflow-hidden">
      {/* Background music */}
      <audio autoPlay loop>
        <source src="https://docs.google.com/uc?export=download&id=placeholder_music_1" type="audio/mpeg" />
        <source src="https://docs.google.com/uc?export=download&id=placeholder_music_2" type="audio/mpeg" />
      </audio>
      {/* Confetti / Hearts overlay */}
      {accepted && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${0.8 + Math.random()}s`,
              }}
            >
              {i % 2 === 0 ? "💖" : "🎉"}
            </div>
          ))}
        </div>
      )}

      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md relative z-10">
        {!accepted ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Will you be my Valentine, Akashleena Ghosh? 💘</h1>
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                onClick={handleYes}
                style={{ transform: `scale(${yesScale})` }}
                className="bg-[#c4b5fd] hover:bg-[#b39afd] text-black transition-transform"
              >
                {noClicks >= noTexts.length
                  ? "Yes dear, I love you with all my heart 💜"
                  : "Yes"}
              </Button>
              {noClicks < noTexts.length && (
                <Button
                  onClick={handleNo}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  {noTexts[noClicks]}
                </Button>
              )}
            </div>
            {noClicks === noTexts.length && (
              <p className="mt-4 text-sm text-gray-600">(Only one correct answer 😉)</p>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Yayy! I knew you'd say yes bebtu gebtu! 💕</h2>
            <p className="text-gray-600 mb-4">Happy Valentine's Day, my love 💖</p>
            <img
              src="COUPLE_PHOTO_HERE"
              alt="You and Akashleena"
              className="mx-auto rounded-2xl shadow-md max-w-xs"
            />
          </div>
        )}
      </div>
    </div>
  );
}
