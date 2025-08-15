import React from 'react';
import { Heart, ArrowLeft, Sparkles } from 'lucide-react';

interface SorryPageProps {
  onForgive: () => void;
}

function SorryPage({ onForgive }: SorryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-purple-300 animate-pulse opacity-20 ${
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

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-purple-200 relative">
        {/* Decorative Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
            <Heart className="w-8 h-8 text-purple-500 fill-purple-500 animate-bounce" />
            <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
          </div>
        </div>

        {/* Main Sorry Message */}
        <div className="mt-6 mb-8">
          <div className="mb-6">
            <div className="text-6xl mb-4 animate-bounce">🥺</div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mb-6 leading-tight">
              Sorry Na Meri Dumbo 💕
            </h1>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-2xl font-bold text-purple-600 animate-pulse">
              Please Maf Kr De 🙏💜
            </p>
            
            <p className="text-lg leading-relaxed">
              I know I hurt you and I'm really sorry. You're the most precious thing in my life and I can't bear to see you upset because of me.
            </p>
            
            <p className="text-lg font-medium text-pink-600">
              Give me one more chance, I promise I'll make it right! 🌹✨
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={onForgive}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-green-500 hover:to-emerald-600 border-2 border-green-300 animate-pulse"
          >
            Ok ✅
          </button>
        </div>

        {/* Bottom Decorative Hearts */}
        <div className="flex justify-center space-x-3 mt-6 opacity-60">
          <Heart className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
          <Heart className="w-5 h-5 text-pink-400 fill-pink-400 animate-pulse delay-100" />
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}

export default SorryPage;