import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-20 text-center text-white shadow-2xl overflow-hidden relative">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              베트남 시장, <br className="md:hidden" />지금이 기회입니다.
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              고민은 실행을 늦출 뿐입니다. <br />
              Vietnam Online Lab과 함께 가장 가볍고 빠르게 시작하세요.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
              <a 
                href="mailto:vietnamonlinelab@gmail.com" 
                className="flex items-center gap-3 text-lg hover:text-blue-300 transition-colors"
              >
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <span>vietnamonlinelab@gmail.com</span>
              </a>
              <a 
                href="tel:010-7320-5565" 
                className="flex items-center gap-3 text-lg hover:text-blue-300 transition-colors"
              >
                <div className="p-3 bg-white/10 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <span>010-7320-5565</span>
              </a>
            </div>

            <a 
              href="mailto:vietnamonlinelab@gmail.com?subject=베트남 온라인 진출 상담 문의"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              지금 상담 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;