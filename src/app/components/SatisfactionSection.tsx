import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Helper Components from original file (simplified)
function Helper2({ text, text1 }: { text: string; text1: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">{text1}</p>
    </div>
  );
}

function SummaryCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[20px] relative w-full">
          <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              <Helper2 text="긍정" text1="12건" />
              <Helper2 text="중립" text1="4건" />
              <Helper2 text="부정" text1="3건" />
            </div>
            <div className="h-[28px] relative shrink-0 w-0">
              <div className="absolute inset-[-3.57%_-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                  <path d="M1 1V29" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-end justify-center pl-[24px] pr-[16px] py-0 relative shrink-0 w-[128px]">
              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[34px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap text-right tracking-[-0.26px]">{"72"}</p>
              <div className="content-stretch flex flex-col items-center justify-center pb-[5px] pt-0 px-0 relative shrink-0 w-[11px]">
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{"점"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type PieChartProps = {
  title: string;
  data: { value: number; color: string; label: string }[];
};

function PieChart({ title, data }: PieChartProps) {
  const ref = useRef<SVGSVGElement>(null);
  const width = 220;
  const height = 220;
  const radius = Math.min(width, height) / 2;

  useEffect(() => {
    if (!ref.current) return;
    
    // Clear previous render
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie<{ value: number }>()
      .sort(null)
      .value(d => d.value)
      .startAngle(0) // Start from top (12 o'clock position)
      .endAngle(2 * Math.PI); // Full circle

    const arc = d3.arc<any>()
      .innerRadius(radius * 0.7) // Donut chart
      .outerRadius(radius);

    const pieData = pie(data.map(d => ({ value: d.value })));

    const arcs = svg.selectAll(".arc")
      .data(pieData)
      .enter()
      .append("g")
      .attr("class", "arc");

    // Calculate cumulative start angles for sequential animation
    let cumulativeStartAngle = 0;

    arcs.append("path")
      .attr("fill", (d, i) => data[i].color)
      .each(function(d) {
        // Store the start angle for this arc before animation
        const startAngleForThisArc = cumulativeStartAngle;
        cumulativeStartAngle += d.endAngle - d.startAngle;
        
        // Create initial arc at startAngle (no endAngle, so it's invisible)
        const initialArc: any = {
          ...d,
          endAngle: d.startAngle
        };

        d3.select(this)
          .attr("d", arc(initialArc))
          .transition()
          .duration((d.endAngle - d.startAngle) / (2 * Math.PI) * 1500) // Duration proportional to size
          .delay(startAngleForThisArc / (2 * Math.PI) * 1500) // Delay based on position (clockwise)
          .ease(d3.easeCubicOut)
          .attrTween("d", function(d) {
            const interpolate = d3.interpolate(initialArc, d);
            return function(t) {
              return arc(interpolate(t));
            };
          });
      });

    // Add labels
    arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .style("fill", (d, i) => (data[i].label === "중립" ? "#2a2c2c" : "#fff"))
      .style("font-size", "16px")
      .style("font-weight", "600")
      .attr("opacity", 0)
      .transition()
      .delay((d, i) => {
        // Calculate delay based on when this arc finishes animating
        let delay = 0;
        for (let j = 0; j < i; j++) {
          delay += (pieData[j].endAngle - pieData[j].startAngle) / (2 * Math.PI) * 1500;
        }
        delay += (pieData[i].endAngle - pieData[i].startAngle) / (2 * Math.PI) * 1500;
        return delay;
      })
      .duration(500)
      .attr("opacity", 1)
      .text(d => `${d.data.value}%`);

  }, [data]);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full p-4">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">{title}</p>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          {data.map(item => (
            <div key={item.label} className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
              <div className="rounded-[4px] shrink-0 size-[14px]" style={{ backgroundColor: item.color }} />
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <svg ref={ref}></svg>
    </div>
  );
}


export default function SatisfactionSection() {
  const pieData = [
    { value: 72, color: "#00b56b", label: "긍정" },
    { value: 15, color: "#d4d4d4", label: "중립" },
    { value: 13, color: "#ff253f", label: "부정" },
  ];

  return (
    <div className="relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
            <PieChart title="착용감" data={pieData} />
            <SummaryCard />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-0">
              <div className="absolute inset-[0_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 358">
                  <path d="M0.5 0V358" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
            <PieChart title="디자인" data={pieData} />
            <SummaryCard />
          </div>
        </div>
      </div>
    </div>
  );
}