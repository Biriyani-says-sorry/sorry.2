import React from 'react';
import { Utensils } from 'lucide-react';

interface PavBhajiPageProps {
  onYes: () => void;
  onNo: () => void;
}

const PavBhajiPage: React.FC<PavBhajiPageProps> = ({ onYes, onNo }) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/vaishu.jpg')", // Placeholder - you'll replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="bg-white bg-opacity-95 rounded-3xl p-10 shadow-2xl backdrop-blur-sm border border-orange-200">
          <Utensils className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-bounce" />
          
          <h1 className="text-3xl font-bold text-orange-600 mb-8">
            Man jao na cutie! 🥪
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Pav bhaji bhi khilaunga!
            <br />
            Your favorite street food! 🧈✨
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={onYes}
            className="w-full max-w-sm bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Yes cutie! 🥰
          </button>
          
          <button
            onClick={onNo}
            className="w-full max-w-sm bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Still no 😕
          </button>
        </div>
      </div>
    </div>
  );
};

export default PavBhajiPage;