import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import React from "react";
import svgPaths from "../../imports/svg-ieepuppe65";
import clsx from "clsx";

// Fitting Section Components
function FittingScaleBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
        <div className="basis-0 grow h-[20px] min-h-px min-w-px rounded-[4px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 118, 251) 0%, rgb(77, 250, 214) 25%, rgb(5, 254, 27) 50%, rgb(255, 237, 53) 75%, rgb(255, 4, 2) 100%)" }} />
        <div className="absolute content-stretch flex h-[12px] items-center justify-between left-0 opacity-60 px-[12px] py-0 top-[4px] w-full">
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
        </div>
        <div className="absolute bg-white h-[20px] w-[4px] top-0" style={{ left: '30%' }} />
        <div className="absolute bg-white h-[20px] w-[4px] top-0" style={{ left: '70%' }} />
      </div>
      <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] items-center justify-between leading-[17px] not-italic relative shrink-0 text-[12px] text-center w-full">
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(12,15,15,0.29)] w-[22px]">{"-50"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"-40"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"-30"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"-20"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a9664] w-[22px]">{"-10"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"0"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"10"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"20"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"30"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"40"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(12,15,15,0.29)] w-[22px]">{"50"}</p>
      </div>
    </div>
  );
}

type FittingItemProps = {
  label: string;
  value: number;
};

function FittingItem({ label, value }: FittingItemProps) {
  const leftPosition = `calc(50% + ${value}%)`;

  const dotRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [dotRef.current, lineRef.current, labelRef.current];
    if (elements.some(el => !el)) return;

    d3.selectAll(elements)
      .style("left", "50%")
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .style("left", leftPosition);
      
  }, [leftPosition]);
  
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">{label}</p>
      <div className="relative w-full">
        <FittingScaleBar />
        {/* Dot indicator - bottom of marker stack */}
        <div ref={dotRef} className="absolute h-[10px] w-[10px] top-[10px] translate-x-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="#1E2020" r="5" />
          </svg>
        </div>
        {/* Vertical line - connects dot to label */}
        <div ref={lineRef} className="absolute bg-[#1e2020] h-[16px] rounded-[4px] top-[15px] translate-x-[-50%] w-[2px]" />
        {/* Value label - top of marker stack */}
        <div ref={labelRef} className="absolute bg-[#1e2020] content-stretch flex flex-col items-center px-[10px] py-[4px] rounded-[4px] top-[31px] translate-x-[-50%]">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-center text-nowrap text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

const FootHeatmapWrapper = React.forwardRef<SVGSVGElement, React.PropsWithChildren<{ additionalClassNames?: string }>>(
  ({ children, additionalClassNames = "" }, ref) => {
    return (
      <div className={clsx("h-[212px] relative w-[72px]", additionalClassNames)}>
        <svg ref={ref} className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0001 212">
          {children}
        </svg>
      </div>
    );
  }
);

type FittingSectionProps = {
  onViewDetails: () => void;
};

export default function FittingSection({ onViewDetails }: FittingSectionProps) {
  const [activeFittingTab, setActiveFittingTab] = useState<string>("전체");
  const leftFootRef = useRef<SVGSVGElement>(null);
  const rightFootRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const animateHeatmap = (svgRef: React.RefObject<SVGSVGElement | null>) => {
      if (!svgRef.current) return;
      const svg = d3.select(svgRef.current);
      const gradients = svg.selectAll('g[filter] circle, g[filter] ellipse');
      gradients
        .attr('opacity', 0)
        .transition()
        .duration(1500)
        .delay((_, i) => i * 150)
        .ease(d3.easeCubicOut)
        .attr('opacity', 1);
    };
    animateHeatmap(leftFootRef);
    animateHeatmap(rightFootRef);
  }, []);

  const fittingData = [
    { label: "신발 길이", value: 0 },
    { label: "발볼 둘레", value: -30 },
    { label: "발등", value: 40 },
    { label: "발 뒤꿈치", value: 10 },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shrink-0 w-full">
      {/* Tabs */}
      <div className="content-stretch flex items-center relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0">
          {["전체", "신발 길이", "발볼 둘레", "발등", "발 뒤꿈치"].map((tab, index) => (
            <div key={tab} className="flex items-center">
              <button
                onClick={() => setActiveFittingTab(tab)}
                className={clsx(
                  "relative shrink-0 content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] rounded-tl-[8px] rounded-tr-[8px]",
                  activeFittingTab === tab ? "bg-white" : ""
                )}
              >
                <p className={clsx(
                  "font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.042px]",
                  activeFittingTab === tab ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                )}>{tab}</p>
                {activeFittingTab === tab && (
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                )}
              </button>
              {index < 4 && (
                <div className="h-[16px] relative shrink-0 w-0">
                  <div className="absolute inset-[-6.25%_-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18">
                      <path d="M1 1V17" stroke="#0C0F0F" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
            {/* Left: Foot Heatmap */}
            <div className="h-[324px] relative shrink-0 w-[480px]">
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)] px-[12px] py-[8px] rounded-[8px] top-[267px] translate-x-[-50%]">
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="bg-[#2976fb] rounded-[4px] shrink-0 size-[14px]" />
                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">헐거움</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="bg-[#00e613] rounded-[4px] shrink-0 size-[14px]" />
                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">적당함</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="bg-[#ff0402] rounded-[4px] shrink-0 size-[14px]" />
                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">압박감</p>
                  </div>
                </div>

                {/* Foot heatmap visualization */}
                <div className="absolute content-stretch flex gap-[12px] h-[212px] items-center left-[162px] top-[40px]">
                  {/* Left Foot */}
                  <FootHeatmapWrapper ref={leftFootRef} additionalClassNames="shrink-0">
                    <g>
                      <g>
                        <path d={svgPaths.p31d4e8e0} fill="#E2E2E2" />
                        <path d={svgPaths.p16ecc380} stroke="#0C0F0F" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g>
                        <mask height="212" id="mask0_43_20149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g>
                            <path d={svgPaths.p31d4e8e0} fill="#E2E2E2" />
                            <path d={svgPaths.p16ecc380} stroke="#0C0F0F" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_43_20149)">
                          <g>
                            <g filter="url(#filter0_f_43_20149)">
                              <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_43_20149)" r="37.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g>
                        <path d={svgPaths.p23bae100} fill="#F4F3F3" />
                        <path d={svgPaths.pb1ff8c0} stroke="#0C0F0F" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g>
                        <mask height="212" id="mask1_43_20149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g>
                            <path d={svgPaths.p31d4e8e0} fill="#E2E2E2" />
                            <path d={svgPaths.pcb25f80} stroke="#0C0F0F" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask1_43_20149)">
                          <g>
                            <g filter="url(#filter1_f_43_20149)">
                              <circle cx="45.5" cy="212.5" fill="url(#paint1_radial_43_20149)" r="28.5" />
                            </g>
                          </g>
                          <g>
                            <g filter="url(#filter2_f_43_20149)">
                              <ellipse cx="34" cy="86" fill="url(#paint2_radial_43_20149)" rx="27" ry="38" />
                            </g>
                          </g>
                          <g>
                            <g filter="url(#filter3_f_43_20149)">
                              <ellipse cx="-5.5" cy="60.5" fill="url(#paint3_radial_43_20149)" rx="16.5" ry="28.5" />
                            </g>
                          </g>
                          <g>
                            <g filter="url(#filter4_f_43_20149)">
                              <ellipse cx="72.5" cy="60.5" fill="url(#paint4_radial_43_20149)" rx="16.5" ry="28.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_43_20149" width="91" x="-3" y="-14">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="4" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter1_f_43_20149" width="77" x="7" y="174">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96" id="filter2_f_43_20149" width="74" x="-3" y="38">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter3_f_43_20149" width="53" x="-32" y="22">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter4_f_43_20149" width="53" x="46" y="22">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#00FF00" />
                        <stop offset="0.7" stopColor="#1CFAB0" />
                        <stop offset="0.845" stopColor="#B0FF49" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(45.5 212.5) rotate(90) scale(28.5)" gradientUnits="userSpaceOnUse" id="paint1_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#00FF00" />
                        <stop offset="0.7" stopColor="#1CFAB0" />
                        <stop offset="0.845" stopColor="#B0FF49" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(34 86) rotate(90) scale(38 27)" gradientUnits="userSpaceOnUse" id="paint2_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#FF0000" />
                        <stop offset="0.7" stopColor="#FA9E1C" />
                        <stop offset="0.845" stopColor="#FFF649" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(-5.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint3_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#2873FB" />
                        <stop offset="0.7" stopColor="#1CC6FA" />
                        <stop offset="0.845" stopColor="#49FFF9" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(72.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint4_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#2873FB" />
                        <stop offset="0.7" stopColor="#1CC6FA" />
                        <stop offset="0.845" stopColor="#49FFF9" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </FootHeatmapWrapper>

                  {/* Right Foot (mirrored) */}
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <FootHeatmapWrapper ref={rightFootRef}>
                        <g>
                          <g>
                            <path d={svgPaths.p31d4e8e0} fill="#E2E2E2" />
                            <path d={svgPaths.p35cacb00} stroke="#0C0F0F" strokeOpacity="0.13" />
                          </g>
                          <g>
                            <mask height="212" id="mask0_43_20109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                              <g>
                                <path d={svgPaths.p31d4e8e0} fill="#E2E2E2" />
                                <path d={svgPaths.p35cacb00} stroke="#0C0F0F" strokeOpacity="0.13" />
                              </g>
                            </mask>
                            <g mask="url(#mask0_43_20109)">
                              <g>
                                <g filter="url(#filter0_f_43_20109)">
                                  <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_43_20109)" r="37.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g>
                            <path d={svgPaths.p23bae100} fill="#F4F3F3" />
                            <path d={svgPaths.pb1ff8c0} stroke="#0C0F0F" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                          <g>
                            <mask height="212" id="mask1_43_20109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                              <g>
                                <path d={svgPaths.p31d4e8e0} fill="#E2E2E2" />
                                <path d={svgPaths.pcb25f80} stroke="#0C0F0F" strokeOpacity="0.13" strokeWidth="1.19101" />
                              </g>
                            </mask>
                            <g mask="url(#mask1_43_20109)">
                              <g>
                                <g filter="url(#filter1_f_43_20109)">
                                  <circle cx="45.5" cy="212.5" fill="url(#paint1_radial_43_20109)" r="28.5" />
                                </g>
                              </g>
                              <g>
                                <g filter="url(#filter2_f_43_20109)">
                                  <ellipse cx="34" cy="86" fill="url(#paint2_radial_43_20109)" rx="27" ry="38" />
                                </g>
                              </g>
                              <g>
                                <g filter="url(#filter3_f_43_20109)">
                                  <ellipse cx="-5.5" cy="60.5" fill="url(#paint3_radial_43_20109)" rx="16.5" ry="28.5" />
                                </g>
                              </g>
                              <g>
                                <g filter="url(#filter4_f_43_20109)">
                                  <ellipse cx="72.5" cy="60.5" fill="url(#paint4_radial_43_20109)" rx="16.5" ry="28.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_43_20109" width="91" x="-3" y="-14">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="4" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter1_f_43_20109" width="77" x="7" y="174">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96" id="filter2_f_43_20109" width="74" x="-3" y="38">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter3_f_43_20109" width="53" x="-32" y="22">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter4_f_43_20109" width="53" x="46" y="22">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#00FF00" />
                            <stop offset="0.7" stopColor="#1CFAB0" />
                            <stop offset="0.845" stopColor="#B0FF49" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(45.5 212.5) rotate(90) scale(28.5)" gradientUnits="userSpaceOnUse" id="paint1_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#00FF00" />
                            <stop offset="0.7" stopColor="#1CFAB0" />
                            <stop offset="0.845" stopColor="#B0FF49" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(34 86) rotate(90) scale(38 27)" gradientUnits="userSpaceOnUse" id="paint2_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#FF0000" />
                            <stop offset="0.7" stopColor="#FA9E1C" />
                            <stop offset="0.845" stopColor="#FFF649" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(-5.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint3_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#2873FB" />
                            <stop offset="0.7" stopColor="#1CC6FA" />
                            <stop offset="0.845" stopColor="#49FFF9" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(72.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint4_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#2873FB" />
                            <stop offset="0.7" stopColor="#1CC6FA" />
                            <stop offset="0.845" stopColor="#49FFF9" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </FootHeatmapWrapper>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            </div>

            {/* Right: Scales */}
            <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative rounded-[12px] shrink-0">
              {fittingData.map((item) => (
                <FittingItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}