import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import SingleProductRadarChart from "./SingleProductRadarChart";

type CategoryData = {
  breathability: number;
  elasticity: number;
  cushioning: number;
  stability: number;
  flexibility: number;
  comfort: number;
};

// 단일 제품 데이터
const productData: CategoryData = {
  breathability: 45,
  elasticity: 80,
  cushioning: 95,
  stability: 65,
  flexibility: 75,
  comfort: 55,
};

const responseData = [
  { label: "전체적인 핏", value: 82 },
  { label: "발 길이", value: 68 },
  { label: "발등", value: 90 },
  { label: "발목", value: 75 },
];

type AnimatedHorizontalBarProps = {
  value: number;
};

function AnimatedHorizontalBar({ value }: AnimatedHorizontalBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    d3.select(barRef.current)
      .style("width", "0%")
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .style("width", `${value}%`);
  }, [value]);

  return (
    <div className="bg-[rgba(12,15,15,0.07)] h-[36px] rounded-[2px] w-full">
      <div ref={barRef} className="bg-[#0085ec] h-full rounded-[2px]" />
    </div>
  );
}


export default function SingleProductFunctionalitySection({ productName }: { productName: string }) {
  const [selectedCategory, setSelectedCategory] = useState<keyof CategoryData>("elasticity");

  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">기능성</p>
      </div>
      
      <div className="border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex gap-[24px] items-center p-[24px] relative rounded-[12px] shrink-0 w-full">
        {/* Left: Radar Chart */}
        <div className="border-[rgba(12,15,15,0.19)] border-b-0 border-l-0 border-r border-solid border-t-0 content-stretch flex h-[352px] items-center justify-center relative shrink-0 w-[480px]">
          <SingleProductRadarChart
            productData={productData}
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
            productColor="#0085EC"
          />
        </div>

        {/* Divider */}
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 268">
              <path d="M0.5 0V268" stroke="#0C0F0F" strokeOpacity="0.13" />
            </svg>
          </div>
        </div>

        {/* Right: Bar Charts */}
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
            주요 기능 응답
          </p>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {responseData.map((item) => (
              <div key={item.label} className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
                  <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">
                    {item.label}
                  </p>
                  <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">
                    {item.value}점
                  </p>
                </div>
                <AnimatedHorizontalBar value={item.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}