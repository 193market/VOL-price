import React from 'react';
import { CheckCircle2, Globe2, Truck, Smartphone } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Vietnam Online Lab의<br />
              <span className="text-blue-700">명쾌한 해답</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              우리는 복잡한 준비 과정 없이 즉시 비즈니스를 시작할 수 있는
              <span className="font-semibold text-slate-900"> '실행 중심'의 구조</span>를 제공합니다.
              불필요한 리스크는 제거하고, 핵심인 판매와 마케팅에만 집중하세요.
            </p>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SolutionCard 
              icon={<Globe2 className="w-6 h-6 text-blue-600" />}
              title="현지 법인 없이 운영"
              desc="법인 설립 비용과 시간을 절약하고 즉시 판매를 시작합니다."
            />
            <SolutionCard 
              icon={<CheckCircle2 className="w-6 h-6 text-blue-600" />}
              title="현지 직원 없이 운영"
              desc="채용 스트레스 없이 전문 운영팀이 모든 업무를 대행합니다."
            />
            <SolutionCard 
              icon={<Truck className="w-6 h-6 text-blue-600" />}
              title="한국에서 배송 연동"
              desc="복잡한 물류 창고 계약 없이 한국에서 직발송 프로세스를 구축합니다."
            />
            <SolutionCard 
              icon={<Smartphone className="w-6 h-6 text-blue-600" />}
              title="로컬 계정 기반 운영"
              desc="베트남 현지 계정을 통해 고객 신뢰도를 높이고 접근성을 극대화합니다."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const SolutionCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
    <div className="mb-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Solutions;