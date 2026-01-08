import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import RadarChartWithTooltip from "./RadarChartWithTooltip";

const chartData = [
  { axis: "탄성", value: 80 },
  { axis: "통기성", value: 45 },
  { axis: "편안함", value: 55 },
  { axis: "유연성", value: 75 },
  { axis: "쿠셔닝", value: 95 },
  { axis: "안정성", value: 65 },
];

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
  return (
    <div className="relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
          {/* Left: Radar Chart */}
          <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
            <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
              기능성
            </p>
            <div className="content-stretch flex flex-col h-[222px] items-center justify-center relative shrink-0 w-full">
              <RadarChartWithTooltip
                data={chartData}
                labels={chartData.map((d) => d.axis)}
              />
            </div>
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
    </div>
  );
}