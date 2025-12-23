import React from 'react';
import { Check } from 'lucide-react';

const Target: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50 border-t border-blue-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">
          이런 분들께 <span className="text-blue-700">강력 추천</span>합니다
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TargetItem text="베트남 시장 반응을 가볍게 테스트하고 싶은 브랜드" />
          <TargetItem text="인력 · 법인 설립 부담 없이 해외 진출을 원하는 기업" />
          <TargetItem text="Shopee 등 베트남 온라인 채널 진입을 고려 중인 셀러" />
        </div>
      </div>
    </section>
  );
};

const TargetItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-blue-100">
    <div className="bg-blue-100 p-1 rounded-full">
      <Check className="w-4 h-4 text-blue-600" />
    </div>
    <span className="font-medium text-slate-700 text-sm md:text-base">{text}</span>
  </div>
);

export default Target;