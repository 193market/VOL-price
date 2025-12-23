import React from 'react';
import { ShieldCheck, Layers, Rocket } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              왜 Vietnam Online Lab인가?
            </h2>
            <p className="text-slate-600 text-lg">
              단순 대행이 아닙니다. 베트남 온라인 시장에 안착할 수 있는 <strong>'구조'</strong>를 제공합니다.
            </p>
          </div>

          <div className="space-y-8">
            <WhyCard 
              icon={<Layers className="w-8 h-8 text-blue-600" />}
              title="실험이 아닌 '운영'으로 접근"
              desc="일회성 마케팅에 그치지 않습니다. 지속 가능한 판매 사이클을 만들고, 실제 매출로 이어지는 운영 구조를 구축합니다."
            />
            <WhyCard 
              icon={<ShieldCheck className="w-8 h-8 text-blue-600" />}
              title="리스크 최소화 & 현실적 비용"
              desc="수천만 원의 초기 투자 비용이 들지 않습니다. 꼭 필요한 기능만 모아 합리적인 비용으로 시작하여 실패 비용을 최소화합니다."
            />
            <WhyCard 
              icon={<Rocket className="w-8 h-8 text-blue-600" />}
              title="실행 중심의 파트너"
              desc="복잡한 보고서보다 실제 행동과 결과를 중요하게 생각합니다. 고민할 시간에 제품을 하나라도 더 노출시킵니다."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col md:flex-row gap-6 items-start p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100">
    <div className="flex-shrink-0 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base">{desc}</p>
    </div>
  </div>
);

export default WhyUs;