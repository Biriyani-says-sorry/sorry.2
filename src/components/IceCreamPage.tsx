import React from 'react';
import { Heart } from 'lucide-react';

interface IceCreamPageProps {
  onYes: () => void;
  onNo: () => void;
}

const IceCreamPage: React.FC<IceCreamPageProps> = ({ onYes, onNo }) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/vaishu3.jpg')", // Placeholder - you'll replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="bg-white bg-opacity-95 rounded-3xl p-10 shadow-2xl backdrop-blur-sm border border-pink-200">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-pulse" />
          
          <h1 className="text-3xl font-bold text-pink-600 mb-8">
            Man ja na! 🍦
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Ice cream khilaunga tumhe! 
            <br />
            Your favorite flavor! 🍨✨
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={onYes}
            className="w-full max-w-sm bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Yes! 🥰
          </button>
          
          <button
            onClick={onNo}
            className="w-full max-w-sm bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            No 😐
          </button>
        </div>
      </div>
    </div>
  );
};

export default IceCreamPage;