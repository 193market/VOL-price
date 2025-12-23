import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-900/30 text-blue-300 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
          Vietnam Online Lab
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          현지 법인 없이,<br />
          현지 직원 없이<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">
            베트남 온라인 진출
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          복잡한 절차와 높은 고정비는 덜어내고,<br className="hidden md:block" />
          가장 빠르고 효율적인 방법으로 베트남 시장을 시작하세요.
        </p>

        <button 
          onClick={scrollToContact}
          className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-blue-500/25"
        >
          상담 문의하기
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;