import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ConfirmationPageProps {
  onConfirm: () => void;
}

function ConfirmationPage({ onConfirm }: ConfirmationPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-indigo-300 animate-pulse opacity-20 ${
              i % 4 === 0 ? 'w-4 h-4' : i % 4 === 1 ? 'w-6 h-6' : i % 4 === 2 ? 'w-3 h-3' : 'w-5 h-5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-indigo-200 relative">
        {/* Decorative Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
            <Heart className="w-8 h-8 text-indigo-500 fill-indigo-500 animate-bounce" />
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
          </div>
        </div>

        {/* Main Confirmation Message */}
        <div className="mt-6 mb-8">
          <div className="mb-6">
            <div className="text-6xl mb-4 animate-bounce">🥺💕</div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 leading-tight">
              Pakka Na Cutie I Have My Last Chance Right? 🥺💜
            </h1>
          </div>
        </div>

        {/* Yes Button */}
        <div className="space-y-4">
          <button
            onClick={onConfirm}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-green-500 hover:to-emerald-600 border-2 border-green-300 animate-pulse"
          >
            Yes ✅💚
          </button>
        </div>

        {/* Bottom Decorative Hearts */}
        <div className="flex justify-center space-x-3 mt-6 opacity-60">
          <Heart className="w-4 h-4 text-indigo-400 fill-indigo-400 animate-pulse" />
          <Heart className="w-5 h-5 text-purple-400 fill-purple-400 animate-pulse delay-100" />
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;