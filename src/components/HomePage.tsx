import React from 'react';

interface HomePageProps {
  onForgive: () => void;
  onRefuse: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onForgive, onRefuse }) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/bg.jpg')", // Placeholder - you'll replace with bg.pg
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Apology Message */}
        <div className="bg-white bg-opacity-95 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-pink-200">
          <h1 className="text-2xl font-bold text-pink-600 mb-6">My Dearest Love 💕</h1>
          
          <div className="text-gray-800 leading-relaxed space-y-4 text-lg">
            <p>
              Hi, I'm sorry. I know you are hurt because of me and the past. I'm really trying to shape myself for us. 
              As I said in messages on Insta, I really didn't want anything that happened to happen, but some things lead to another.
            </p>
            
            <p>
              Please maf kar de, aage se nhi karunga aise ki kisi bat se pareshan hu to tujhe na batau. Sacchi, I really love you yaar. 
              Maf kar de mujhe please.
            </p>
            
            <p>
              Look at our pictures of us yaar, how happy we are! I was a jerk before and I'm really sorry, but abhi I'm really changing. 
              I really love you a lot and don't want you sad.
            </p>
            
            <p className="font-semibold text-pink-700">
              Please maf kar de please 😭😭😭
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-4">
          <button
            onClick={onForgive}
            className="w-full max-w-md bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ok maf krti hu 💕
          </button>
          
          <button
            onClick={onRefuse}
            className="w-full max-w-md bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sorry I can't 😔
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;