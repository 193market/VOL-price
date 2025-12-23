import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Target from './components/Target';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Services />
        <WhyUs />
        <Target />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Vietnam Online Lab. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;