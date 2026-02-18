import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        {/* <Offerings /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;