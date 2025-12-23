import React from 'react';
import { BadgeCheck, ShoppingBag, PenTool, BarChart3, MessageSquare } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 구성</h2>
          <p className="text-slate-400">투명하고 합리적인 비용으로 필요한 서비스만 선택하여 이용하세요.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <ServiceCard 
            icon={<PenTool />}
            title="KOC 콘텐츠 제작"
            price="9,900원"
            unit="/ 1건"
            details={["현지 감성에 맞는 콘텐츠", "제품 별도 제공"]}
          />

          <ServiceCard 
            icon={<BadgeCheck />}
            title="리뷰 · 체험단 운영"
            price="9,900원"
            unit="/ 1건"
            details={["실제 현지 유저 리뷰", "바이럴 마케팅 효과"]}
          />

          <ServiceCard 
            icon={<BarChart3 />}
            title="시장 설문조사"
            price="9,900원"
            unit="/ 1건"
            details={["성별/연령/직업 타겟팅", "시장 반응 사전 테스트"]}
          />

          <ServiceCard 
            icon={<ShoppingBag />}
            title="판매대행 (소량)"
            price="390,000원"
            unit="5건 기준"
            details={["10건 기준: 590,000원", "입점 및 상품 등록 관리", "초기 테스트 판매 적합"]}
            highlight
          />

          <ServiceCard 
            icon={<MessageSquare />}
            title="로컬 계정 운영"
            price="990,000원"
            unit="/ 월"
            details={["계정 운영 및 전반 컨설팅", "CS 및 댓글 관리", "광고비 별도 집행"]}
            highlight
          />

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <span className="text-2xl font-bold">★</span>
            </div>
            <h3 className="text-xl font-bold mb-2">KOL 인플루언서 협업</h3>
            <p className="text-slate-400 text-sm mb-6">
              메가/마이크로 인플루언서 매칭 및 캠페인 진행
            </p>
            <div className="mt-auto">
               <span className="inline-block px-4 py-2 rounded-full bg-slate-700 text-slate-300 text-sm font-medium">
                 별도 문의 및 협상
               </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  price: string, 
  unit: string, 
  details: string[],
  highlight?: boolean
}> = ({ icon, title, price, unit, details, highlight = false }) => (
  <div className={`p-8 rounded-2xl border flex flex-col ${highlight ? 'bg-blue-900/20 border-blue-500/50 relative overflow-hidden' : 'bg-slate-800 border-slate-700'}`}>
    {highlight && <div className="absolute top-0 right-0 bg-blue-600 text-xs px-3 py-1 rounded-bl-lg font-bold">RECOMMENDED</div>}
    
    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-blue-400 mb-6">
      {icon}
    </div>
    
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    
    <div className="mb-6 flex items-baseline">
      <span className="text-3xl font-bold text-white mr-2">{price}</span>
      <span className="text-sm text-slate-400 font-medium">{unit}</span>
    </div>
    
    <ul className="space-y-3 mt-auto">
      {details.map((detail, idx) => (
        <li key={idx} className="flex items-start text-sm text-slate-300">
          <span className="mr-2 text-blue-500">•</span>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;