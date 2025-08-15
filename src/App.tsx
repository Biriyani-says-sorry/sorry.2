import React, { useState } from 'react';
import HomePage from './components/HomePage';
import IceCreamPage from './components/IceCreamPage';
import PavBhajiPage from './components/PavBhajiPage';
import FinalNoPage from './components/FinalNoPage';
import SuccessPage from './components/SuccessPage';

type Page = 'home' | 'icecream' | 'pavbhaji' | 'final' | 'success';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onForgive={() => navigateTo('success')} onRefuse={() => navigateTo('icecream')} />;
      case 'icecream':
        return <IceCreamPage onYes={() => navigateTo('success')} onNo={() => navigateTo('pavbhaji')} />;
      case 'pavbhaji':
        return <PavBhajiPage onYes={() => navigateTo('success')} onNo={() => navigateTo('final')} />;
      case 'final':
        return <FinalNoPage onOkay={() => navigateTo('success')} />;
      case 'success':
        return <SuccessPage />;
      default:
        return <HomePage onForgive={() => navigateTo('success')} onRefuse={() => navigateTo('icecream')} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;