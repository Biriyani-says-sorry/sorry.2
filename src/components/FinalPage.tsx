import React from 'react';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';

function FinalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300 animate-pulse opacity-30 ${
              i % 4 === 0 ? 'w-4 h-4' : i % 4 === 1 ? 'w-6 h-6' : i % 4 === 2 ? 'w-3 h-3' : 'w-5 h-5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-pink-200 relative animate-pulse">
        {/* Decorative Elements */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
            <Heart className="w-10 h-10 text-red-500 fill-red-500 animate-bounce" />
            <Sparkles className="w-8 h-8 text-yellow-400 animate-spin" />
          </div>
        </div>

        {/* Final Love Message */}
        <div className="mt-8 mb-8">
          <div className="mb-6">
            <div className="text-7xl mb-6 animate-bounce">❤️💕</div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 mb-8 leading-tight">
              Love You Mera Cutie ❤️
            </h1>
          </div>
          
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center justify-center space-x-3 text-xl font-semibold text-pink-600">
              <MessageCircle className="w-6 h-6 animate-bounce" />
              <span>Text Me Once You Are Free 📱💕</span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Hearts */}
        <div className="flex justify-center space-x-3 mt-8 opacity-60">
          <Heart className="w-5 h-5 text-pink-400 fill-pink-400 animate-pulse" />
          <Heart className="w-6 h-6 text-red-400 fill-red-400 animate-pulse delay-100" />
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}

export default FinalPage;