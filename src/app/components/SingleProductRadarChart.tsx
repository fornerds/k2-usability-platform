import { useState } from "react";
import svgPaths from "../../imports/svg-uk2wp2l68s";
import clsx from "clsx";

type CategoryData = {
  breathability: number;
  elasticity: number;
  cushioning: number;
  stability: number;
  flexibility: number;
  comfort: number;
};

type ResponseDistribution = {
  veryBad: number;
  bad: number;
  normal: number;
  good: number;
  veryGood: number;
};

type TooltipData = {
  category: keyof CategoryData;
  distribution: ResponseDistribution;
};

type SingleProductRadarChartProps = {
  productData: CategoryData;
  selectedCategory: keyof CategoryData;
  onCategoryClick: (category: keyof CategoryData) => void;
  productColor?: string;
  responseDistribution?: Record<keyof CategoryData, ResponseDistribution>;
};

const categories = [
  { key: "breathability" as keyof CategoryData, label: "통기성", angle: 0 },
  { key: "comfort" as keyof CategoryData, label: "편안함", angle: 60 },
  { key: "flexibility" as keyof CategoryData, label: "유연성", angle: 120 },
  { key: "stability" as keyof CategoryData, label: "안정성", angle: 180 },
  { key: "cushioning" as keyof CategoryData, label: "쿠셔닝", angle: 240 },
  { key: "elasticity" as keyof CategoryData, label: "탄성", angle: 300 }
];

function Tooltip({ data, position }: { data: TooltipData; position: { x: number; y: number } }) {
  const { distribution } = data;
  const total = distribution.veryBad + distribution.bad + distribution.normal + distribution.good + distribution.veryGood;

  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] rounded-[8px] shrink-0 w-[136px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)] border border-[rgba(12,15,15,0.13)]">
        <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] text-[12px] text-[rgba(12,15,15,0.52)]">매우나쁨</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{distribution.veryBad}건</p>
        </div>
        <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] text-[12px] text-[rgba(12,15,15,0.52)]">나쁨</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{distribution.bad}건</p>
        </div>
        <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] text-[12px] text-[rgba(12,15,15,0.52)]">보통</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{distribution.normal}건</p>
        </div>
        <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] text-[12px] text-[rgba(12,15,15,0.52)]">좋음</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{distribution.good}건</p>
        </div>
        <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] text-[12px] text-[rgba(12,15,15,0.52)]">매우좋음</p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{distribution.veryGood}건</p>
        </div>
        
        {/* Beak (arrow) */}
        <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
          <div className="flex-none rotate-[135deg]">
            <div className="relative size-[10px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d="M0 0H10V10H0V0Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
          <div className="flex-none rotate-[135deg]">
            <div className="relative size-[10px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path clipRule="evenodd" d="M0 10H10V0H8.75V8.75H0V10Z" fill="rgba(12,15,15,0.13)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SingleProductRadarChart({
  productData,
  selectedCategory,
  onCategoryClick,
  productColor = "#0085EC",
  responseDistribution
}: SingleProductRadarChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<TooltipData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const centerX = 120;
  const centerY = 120;
  const maxRadius = 96.77;

  const getPoint = (value: number, angle: number) => {
    const radius = (value / 100) * maxRadius;
    const angleRad = (angle - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(angleRad),
      y: centerY + radius * Math.sin(angleRad)
    };
  };

  const getProductPath = () => {
    const points = categories.map(cat => getPoint(productData[cat.key], cat.angle));
    return `M ${points.map(p => `${p.x},${p.y}`).join(' L ')} Z`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left + 10,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="content-stretch flex h-[352px] items-center justify-center relative shrink-0 w-[480px]"
      onMouseMove={handleMouseMove}
    >
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
      <div className="relative size-[240px]">
        {/* Background Grid */}
        <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
          <g id="chart">
            <g id="Polygon 63">
              <path d={svgPaths.p9181ae0} fill="white" />
              <path d={svgPaths.p1a956d00} stroke="rgba(12,15,15,0.13)" />
            </g>
            <g id="Polygon 64">
              <path d={svgPaths.pee86800} fill="white" />
              <path d={svgPaths.p53d7980} stroke="rgba(12,15,15,0.13)" />
            </g>
            <path d={svgPaths.p5ebc640} stroke="rgba(12,15,15,0.13)" />
            <g id="Polygon 66">
              <path d={svgPaths.p288e6b80} fill="white" />
              <path d={svgPaths.p1d7bcb00} stroke="rgba(12,15,15,0.13)" />
            </g>
            <path d={svgPaths.p2995c300} stroke="rgba(12,15,15,0.13)" />
          </g>
        </svg>

        {/* Product Data Overlay */}
        <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
          <path
            d={getProductPath()}
            fill={`${productColor}4D`}
            stroke={productColor}
            strokeWidth="2"
          />
        </svg>

        {/* Interactive Points */}
        {responseDistribution && (
          <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
            {categories.map((cat) => {
              const point = getPoint(productData[cat.key], cat.angle);
              const distribution = responseDistribution[cat.key];
              if (!distribution) return null;
              return (
                <g
                  key={cat.key}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint({ category: cat.key, distribution })}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="10"
                    fill="transparent"
                    className="hover:fill-[rgba(0,0,0,0.05)]"
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="white"
                    stroke={productColor}
                    strokeWidth="1.38333"
                    className="drop-shadow-[0px_5.53px_2.77px_rgba(0,0,0,0.12)]"
                  />
                </g>
              );
            })}
          </svg>
        )}

        {/* Y-axis Labels */}
        <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[96.774px] items-start left-[112.26px] top-[6px] w-[15.484px]">
          <div className="bg-white h-[16px] relative shrink-0 w-full">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] text-[11px] text-[rgba(12,15,15,0.52)] text-center">100</p>
          </div>
          <div className="bg-white h-[16px] relative shrink-0 w-full">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] text-[11px] text-[rgba(12,15,15,0.52)] text-center">75</p>
          </div>
          <div className="bg-white h-[16px] relative shrink-0 w-full">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] text-[11px] text-[rgba(12,15,15,0.52)] text-center">50</p>
          </div>
          <div className="bg-white h-[16px] relative shrink-0 w-full">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] text-[11px] text-[rgba(12,15,15,0.52)] text-center">25</p>
          </div>
          <div className="bg-white h-[16px] relative shrink-0 w-full">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] text-[11px] text-[rgba(12,15,15,0.52)] text-center">0</p>
          </div>
        </div>

        {/* Category Labels - Clickable */}
        <button
          onClick={() => onCategoryClick("elasticity")}
          className={clsx(
            "absolute content-stretch flex flex-col items-start px-[8px] py-[4px] rounded-[4px] left-[94px] top-[-36px] cursor-pointer hover:opacity-80",
            selectedCategory === "elasticity" && "bg-[rgba(78,160,255,0.1)] border border-[#0085ec]"
          )}
        >
          {selectedCategory !== "elasticity" && (
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          )}
          <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#2a2c2c] text-nowrap text-right tracking-[-0.042px]">탄성</p>
          </div>
        </button>

        <button
          onClick={() => onCategoryClick("breathability")}
          className={clsx(
            "absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px] left-[-41px] top-[53.5px] justify-center cursor-pointer hover:opacity-80",
            selectedCategory === "breathability" && "bg-[rgba(78,160,255,0.1)] border border-[#0085ec]"
          )}
        >
          {selectedCategory !== "breathability" && (
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          )}
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#2a2c2c] text-nowrap text-right tracking-[-0.042px]">통기성</p>
        </button>

        <button
          onClick={() => onCategoryClick("cushioning")}
          className={clsx(
            "absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px] left-[-53px] top-[180.5px] cursor-pointer hover:opacity-80",
            selectedCategory === "cushioning" && "bg-[rgba(78,160,255,0.1)] border border-[#0085ec]"
          )}
        >
          {selectedCategory !== "cushioning" && (
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          )}
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#2a2c2c] text-nowrap text-right tracking-[-0.042px]">쿠셔닝</p>
        </button>

        <button
          onClick={() => onCategoryClick("comfort")}
          className={clsx(
            "absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px] left-[240px] top-[53.5px] cursor-pointer hover:opacity-80",
            selectedCategory === "comfort" && "bg-[rgba(78,160,255,0.1)] border border-[#0085ec]"
          )}
        >
          {selectedCategory !== "comfort" && (
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          )}
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#2a2c2c] text-nowrap text-right tracking-[-0.042px]">편안함</p>
        </button>

        <button
          onClick={() => onCategoryClick("flexibility")}
          className={clsx(
            "absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px] left-[240px] top-[180.5px] cursor-pointer hover:opacity-80",
            selectedCategory === "flexibility" && "bg-[rgba(78,160,255,0.1)] border border-[#0085ec]"
          )}
        >
          {selectedCategory !== "flexibility" && (
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          )}
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#2a2c2c] text-nowrap text-right tracking-[-0.042px]">유연성</p>
        </button>

        <button
          onClick={() => onCategoryClick("stability")}
          className={clsx(
            "absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px] justify-end left-[94px] top-[248px] cursor-pointer hover:opacity-80",
            selectedCategory === "stability" && "bg-[rgba(78,160,255,0.1)] border border-[#0085ec]"
          )}
        >
          {selectedCategory !== "stability" && (
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          )}
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[14px] text-[#2a2c2c] text-nowrap text-right tracking-[-0.042px]">안정성</p>
        </button>
      </div>

      {/* Tooltip */}
      {hoveredPoint && (
        <Tooltip data={hoveredPoint} position={mousePosition} />
      )}
    </div>
  );
}

