import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import svgPaths from "../../imports/svg-uk2wp2l68s";
import svgPathsTooltip from "../../imports/svg-e8jqhjhozb";
import clsx from "clsx";
import RadarChartWithTooltip from "./RadarChartWithTooltip";
import FunctionalityResponseModal from "./FunctionalityResponseModal";

type Product = {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
};

type CategoryData = {
  breathability: number; // 통기성
  elasticity: number; // 탄성
  cushioning: number; // 쿠셔닝
  stability: number; // 안정성
  flexibility: number; // 유연성
  comfort: number; // 편안함
};

type ResponseDistribution = {
  veryBad: number;
  bad: number;
  normal: number;
  good: number;
  veryGood: number;
};

const products: Product[] = [
  { id: "guard", name: "가드런 맥스", color: "#0085EC", bgColor: "bg-[#0085ec]", textColor: "text-white" },
  { id: "fast", name: "피스테런 3.0", color: "#9766F8", bgColor: "bg-[#9766f8]", textColor: "text-white" },
  { id: "swift", name: "스위프트인터벌", color: "#E15634", bgColor: "bg-[#e15634]", textColor: "text-white" }
];

// Figma 디자인에 맞는 데이터 (탄성 카테고리 기준)
const productData: Record<string, CategoryData> = {
  guard: { breathability: 88, elasticity: 88, cushioning: 82, stability: 90, flexibility: 70, comfort: 85 },
  fast: { breathability: 68, elasticity: 68, cushioning: 75, stability: 85, flexibility: 88, comfort: 78 },
  swift: { breathability: 72, elasticity: 52, cushioning: 88, stability: 78, flexibility: 82, comfort: 90 }
};

const categoryAverage: CategoryData = {
  breathability: 68,
  elasticity: 68,
  cushioning: 70,
  stability: 75,
  flexibility: 68,
  comfort: 73
};

// Response distribution data for each product and category
const responseDistribution: Record<string, Record<keyof CategoryData, ResponseDistribution>> = {
  guard: {
    breathability: { veryBad: 2, bad: 1, normal: 5, good: 11, veryGood: 8 },
    elasticity: { veryBad: 1, bad: 2, normal: 6, good: 10, veryGood: 8 },
    cushioning: { veryBad: 1, bad: 1, normal: 4, good: 12, veryGood: 9 },
    stability: { veryBad: 0, bad: 1, normal: 3, good: 13, veryGood: 10 },
    flexibility: { veryBad: 2, bad: 3, normal: 7, good: 9, veryGood: 6 },
    comfort: { veryBad: 1, bad: 2, normal: 5, good: 11, veryGood: 8 }
  },
  fast: {
    breathability: { veryBad: 3, bad: 2, normal: 8, good: 9, veryGood: 5 },
    elasticity: { veryBad: 1, bad: 1, normal: 5, good: 12, veryGood: 8 },
    cushioning: { veryBad: 2, bad: 2, normal: 7, good: 10, veryGood: 6 },
    stability: { veryBad: 1, bad: 2, normal: 5, good: 12, veryGood: 7 },
    flexibility: { veryBad: 0, bad: 1, normal: 4, good: 13, veryGood: 9 },
    comfort: { veryBad: 2, bad: 2, normal: 6, good: 11, veryGood: 6 }
  },
  swift: {
    breathability: { veryBad: 2, bad: 3, normal: 7, good: 10, veryGood: 5 },
    elasticity: { veryBad: 3, bad: 2, normal: 8, good: 9, veryGood: 5 },
    cushioning: { veryBad: 0, bad: 1, normal: 3, good: 13, veryGood: 10 },
    stability: { veryBad: 2, bad: 2, normal: 6, good: 11, veryGood: 6 },
    flexibility: { veryBad: 1, bad: 2, normal: 5, good: 12, veryGood: 7 },
    comfort: { veryBad: 0, bad: 1, normal: 4, good: 12, veryGood: 10 }
  }
};

const categories = [
  { key: "breathability" as keyof CategoryData, label: "통기성", angle: 0 },
  { key: "comfort" as keyof CategoryData, label: "편안함", angle: 60 },
  { key: "flexibility" as keyof CategoryData, label: "유연성", angle: 120 },
  { key: "stability" as keyof CategoryData, label: "안정성", angle: 180 },
  { key: "cushioning" as keyof CategoryData, label: "쿠셔닝", angle: 240 },
  { key: "elasticity" as keyof CategoryData, label: "탄성", angle: 300 }
];

function Checkbox({ checked, color }: { checked: boolean; color: string }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      {checked ? (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="checkbox">
            <rect fill={color} height="18" rx="3.5" width="18" x="3" y="3" />
            <path 
              clipRule="evenodd" 
              d={svgPaths.p1b3c6700} 
              fill="white" 
              fillRule="evenodd" 
            />
          </g>
        </svg>
      ) : (
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" />
        </div>
      )}
    </div>
  );
}

function BarChart({ 
  category, 
  selectedProducts 
}: { 
  category: keyof CategoryData; 
  selectedProducts: string[];
}) {
  const categoryLabels: Record<keyof CategoryData, string> = {
    breathability: "통기성",
    elasticity: "탄성",
    cushioning: "쿠셔닝",
    stability: "안정성",
    flexibility: "유연성",
    comfort: "편안함"
  };

  const average = categoryAverage[category];
  const averageBarRef = useRef<HTMLDivElement>(null);
  const averageTextRef = useRef<HTMLParagraphElement>(null);
  const productBarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const productTextRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  useEffect(() => {
    // Animate average bar - Figma: 68 -> 144px height
    if (averageBarRef.current && averageTextRef.current) {
      const targetHeight = (average / 100) * 212; // 68 -> 144px
      const targetTop = targetHeight / 2; // 50% of bar height
      
      const barSelection = d3.select(averageBarRef.current);
      const textSelection = d3.select(averageTextRef.current);
      
      barSelection.style("height", "0px");
      textSelection.style("top", "0px");
      
      barSelection
        .transition()
        .duration(1500)
        .ease(d3.easeCubicOut)
        .styleTween("height", function() {
          const interpolate = d3.interpolateNumber(0, targetHeight);
          return function(t) {
            const currentHeight = interpolate(t);
            const currentTop = currentHeight / 2;
            textSelection.style("top", `${currentTop}px`);
            return `${currentHeight}px`;
          };
        });
    }

    // Animate product bars
    selectedProducts.forEach((productId, index) => {
      const barRef = productBarRefs.current[productId];
      const textRef = productTextRefs.current[productId];
      if (!barRef || !textRef) return;
      
      const value = productData[productId][category];
      const targetHeight = (value / 100) * 212;
      const targetTop = targetHeight / 2; // 50% of bar height

      const barSelection = d3.select(barRef);
      const textSelection = d3.select(textRef);
      
      barSelection.style("height", "0px");
      textSelection.style("top", "0px");
      
      barSelection
        .transition()
        .duration(1500)
        .delay(index * 100) // Stagger animation
        .ease(d3.easeCubicOut)
        .styleTween("height", function() {
          const interpolate = d3.interpolateNumber(0, targetHeight);
          return function(t) {
            const currentHeight = interpolate(t);
            const currentTop = currentHeight / 2;
            textSelection.style("top", `${currentTop}px`);
            return `${currentHeight}px`;
          };
        });
    });
  }, [category, selectedProducts, average, productData]);

  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[48px] pt-[24px] px-[24px] relative w-full">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
            {categoryLabels[category]}
          </p>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            {/* Grid Lines */}
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">100</p>
              <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                <svg className="absolute inset-[-0.5px_0] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
                  <path d="M0 0.5H680" stroke="rgba(12,15,15,0.13)" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">75</p>
              <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                <svg className="absolute inset-[-0.5px_0] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
                  <path d="M0 0.5H680" stroke="rgba(12,15,15,0.13)" strokeDasharray="4 4" strokeOpacity="0.13" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">50</p>
              <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                <svg className="absolute inset-[-0.5px_0] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
                  <path d="M0 0.5H680" stroke="rgba(12,15,15,0.13)" strokeDasharray="4 4" strokeOpacity="0.13" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">25</p>
              <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                <svg className="absolute inset-[-0.5px_0] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
                  <path d="M0 0.5H680" stroke="rgba(12,15,15,0.13)" strokeDasharray="4 4" strokeOpacity="0.13" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">0</p>
              <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                <svg className="absolute inset-[-0.5px_0] block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
                  <path d="M0 0.5H680" stroke="rgba(12,15,15,0.13)" />
                </svg>
              </div>
            </div>
          </div>
          {/* Bars */}
          <div className="absolute content-stretch flex gap-[40px] items-end justify-center left-[calc(50%+20.5px)] top-[calc(50%+38.5px)] translate-x-[-50%] translate-y-[-50%] w-[583px]">
            {/* Category Average */}
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
              <div 
                ref={averageBarRef}
                className="bg-[#d4d4d4] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px] relative" 
                style={{ height: "0px" }}
              >
                <p 
                  ref={averageTextRef}
                  className="absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]"
                  style={{ top: "0px" }}
                >
                  {average}
                </p>
              </div>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] whitespace-pre-wrap min-w-full">
                카테고리 평균
              </p>
            </div>

            {/* Selected Products */}
            {selectedProducts.map(productId => {
              const product = products.find(p => p.id === productId);
              if (!product) return null;
              const value = productData[productId][category];

              return (
                <div key={productId} className={clsx(
                  "content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]",
                  productId === "swift" && "h-[146px]"
                )}>
                  <div 
                    ref={(el) => productBarRefs.current[productId] = el}
                    className={clsx(
                      product.bgColor, 
                      "rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px] relative",
                      productId === "swift" ? "flex-1 min-h-px min-w-px" : ""
                    )}
                    style={{ height: "0px" }}
                  >
                    <p 
                      ref={(el) => productTextRefs.current[productId] = el}
                      className={clsx(
                        "absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-center text-nowrap tracking-[-0.08px]",
                        product.textColor
                      )}
                      style={{ top: "0px" }}
                    >
                      {value}
                    </p>
                  </div>
                  <p className={clsx(
                    "font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px]",
                    productId === "guard" && "whitespace-pre-wrap min-w-full"
                  )}>
                    {product.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FunctionalitySection() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["guard", "fast", "swift"]);
  const [selectedCategory, setSelectedCategory] = useState<keyof CategoryData>("elasticity");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        // At least one product must be selected
        if (prev.length === 1) return prev;
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">기능성</p>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.02)]" onClick={() => setIsModalOpen(true)}>
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">개별응답보기</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.35002 14.6663L4.16669 13.483L9.65002 7.99967L4.16669 2.51634L5.35002 1.33301L12.0167 7.99967L5.35002 14.6663Z" fill="#2A2C2C"/>
          </svg>
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {/* Product Selection Checkboxes */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          {products.map(product => (
            <button
              key={product.id}
              onClick={() => toggleProduct(product.id)}
              className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:opacity-80"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
              <Checkbox checked={selectedProducts.includes(product.id)} color={product.color} />
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">
                {product.name}
              </p>
            </button>
          ))}
        </div>

        {/* Charts Container */}
        <div className="border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-full">
          {/* Radar Chart - Fixed width 480px */}
          <div className="border-[rgba(12,15,15,0.19)] border-b-0 border-l-0 border-r border-solid border-t-0 content-stretch flex h-[352px] items-center justify-center relative shrink-0 w-[480px]">
              <RadarChartWithTooltip 
                selectedProducts={selectedProducts}
                selectedCategory={selectedCategory}
                onCategoryClick={setSelectedCategory}
                productData={productData}
                products={products}
                responseDistribution={responseDistribution}
              />
          </div>
          {/* Bar Chart - Flexible */}
          <BarChart 
            category={selectedCategory}
            selectedProducts={selectedProducts}
          />
        </div>
      </div>

      {/* Functionality Response Modal */}
      <FunctionalityResponseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}