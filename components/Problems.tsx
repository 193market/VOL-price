import React from 'react';
import { Building2, Users, PackageX } from 'lucide-react';

const Problems: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            베트남 진출, <br className="md:hidden" />이런 고민 하고 계신가요?
          </h2>
          <p className="text-slate-600">
            대부분의 기업이 베트남 시장 진입 단계에서 겪는 현실적인 장벽들입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProblemCard 
            icon={<Building2 className="w-10 h-10 text-slate-400" />}
            question="현지 법인을 꼭 만들어야 할까?"
            description="복잡한 인허가 절차와 유지 비용, 세무 이슈까지. 시작부터 너무 무겁지 않나요?"
          />
          <ProblemCard 
            icon={<Users className="w-10 h-10 text-slate-400" />}
            question="현지 인력을 채용해야 하나?"
            description="언어 장벽과 문화 차이, 인건비 관리와 근태 관리까지. 리스크가 너무 크지 않나요?"
          />
          <ProblemCard 
            icon={<PackageX className="w-10 h-10 text-slate-400" />}
            question="배송과 CS는 어떻게 해결하지?"
            description="느린 국제 배송과 현지 언어 CS 대응의 어려움. 고객 불만이 걱정되지 않나요?"
          />
        </div>
      </div>
    </section>
  );
};

const ProblemCard: React.FC<{ icon: React.ReactNode, question: string, description: string }> = ({ icon, question, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-slate-50 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-4">{question}</h3>
    <p className="text-slate-600 leading-relaxed word-keep-all">{description}</p>
  </div>
);

export default Problems;