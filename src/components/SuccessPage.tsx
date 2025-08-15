import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const SuccessPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/vaishu2.jpg')", // Placeholder - you'll replace with vaishu2.pg
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="bg-white bg-opacity-95 rounded-3xl p-12 shadow-2xl backdrop-blur-sm border-4 border-pink-300">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Heart className="w-12 h-12 text-pink-500 animate-bounce" />
            <Sparkles className="w-12 h-12 text-yellow-500 animate-spin" />
            <Heart className="w-12 h-12 text-pink-500 animate-bounce" />
          </div>
          
          <h1 className="text-5xl font-bold text-pink-600 mb-8 animate-pulse">
            Thank You! 💕
          </h1>
          
          <div className="text-2xl text-gray-800 leading-relaxed space-y-4">
            <p className="font-semibold text-pink-700">
              Abse nhi hoga aisa kuch
            </p>
            <p className="text-3xl font-bold text-red-500">
              Pakka! 🤞
            </p>
            <p className="text-2xl text-pink-600 font-medium">
              Love you so much! 💖✨
            </p>
          </div>
          
          <div className="mt-8 text-6xl animate-bounce">
            🥰💕🎉
          </div>
        </div>
      </div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-pink-500 text-4xl animate-bounce">💕</div>
        <div className="absolute top-1/3 right-1/4 text-red-500 text-3xl animate-pulse">❤️</div>
        <div className="absolute bottom-1/4 left-1/3 text-pink-400 text-5xl animate-bounce">💖</div>
        <div className="absolute bottom-1/3 right-1/3 text-rose-500 text-4xl animate-pulse">💗</div>
      </div>
    </div>
  );
};

export default SuccessPage;