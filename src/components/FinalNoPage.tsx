import React from 'react';
import { HeartHandshake } from 'lucide-react';

interface FinalNoPageProps {
  onOkay: () => void;
}

const FinalNoPage: React.FC<FinalNoPageProps> = ({ onOkay }) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/vaishu6.jpg')", // Placeholder - you'll replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <div className="bg-white bg-opacity-95 rounded-3xl p-12 shadow-2xl backdrop-blur-sm border border-purple-200">
          <HeartHandshake className="w-20 h-20 text-purple-500 mx-auto mb-8 animate-pulse" />
          
          <h1 className="text-4xl font-bold text-purple-600 mb-8">
            Please na! 🥺
          </h1>
          
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
            Meri pyari dumbo
            <br />
            Man ja! 💜✨
          </p>
          
          <p className="text-lg text-gray-600 mb-8 italic">
            I promise I'll be better! 🤞
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={onOkay}
            className="w-full max-w-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-5 px-8 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse"
          >
            Okay fine! 💕
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalNoPage;