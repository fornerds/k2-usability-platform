import React from "react";
import svgPaths from "../../imports/svg-passue2w1h";
import imgShoe from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";

// Helper Components (copied from ReportDetailPage.tsx)
function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        {children}
      </svg>
    </div>
  );
}

function Helper({ text, text1 }: { text: string; text1: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">
        {text}
      </p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">
        {text1}
      </p>
    </div>
  );
}

function InfoHelper() {
  return (
    <div className="h-[28px] relative shrink-0 w-0">
      <div
        className="absolute inset-[-3.57%_-1px]"
        style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 30"
        >
          <path
            d="M1 1V29"
            stroke="var(--stroke-0, #0C0F0F)"
            strokeLinecap="round"
            strokeOpacity="0.13"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

type PainPointShoeCardProps = {
  imageSrc: string;
  painPointsData?: { cx: number; cy: number; fill: string; r: number; stroke: string; type?: 'large' }[];
  positiveCount: number;
  negativeCount: number;
  totalResponses: number;
  mostFrequentArea: string;
};

const PainPointShoeCard: React.FC<PainPointShoeCardProps> = ({
  imageSrc,
  painPointsData = [],
  positiveCount,
  negativeCount,
  totalResponses,
  mostFrequentArea,
}) => {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
        />
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pl-0 pr-[24px] py-0 relative w-full">
            <div className="h-[240px] relative rounded-[12px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="absolute left-1/2 size-[288px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src={imageSrc}
                      />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[204px] translate-x-[-50%]">
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                      <div className="relative shrink-0 size-[14px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            d={svgPaths.p26976600}
                            fill="#00B56B"
                          />
                        </svg>
                      </div>
                      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                        긍정
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                      <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
                      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                        부정
                      </p>
                    </div>
                  </div>

                  {/* Heat dots on shoe */}
                  <div className="absolute h-[78.4px] left-[26.67%] right-[26.77%] top-[calc(50%-17.5px)] translate-y-[-50%]">
                    <div className="absolute inset-[0_-1.88%_-10.2%_-1.88%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 220.349 86.4"
                      >
                        <g>
                          {painPointsData.map((point, index) => (
                            <circle
                              key={index}
                              cx={point.cx}
                              cy={point.cy}
                              fill={point.fill}
                              r={point.r}
                              stroke={point.stroke}
                            />
                          ))}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
              />
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative w-full">
                  <div className="content-stretch flex gap-[2px] h-[36px] items-start relative rounded-[8px] shrink-0 w-full">
                    <div className="bg-[#00b56b] content-stretch flex h-full items-center justify-center relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[270px]">
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
                        {positiveCount}%
                      </p>
                    </div>
                    <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0">
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
                        {negativeCount}%
                      </p>
                    </div>
                  </div>
                  <div className="h-[60px] relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
                        <Helper text="총 응답수" text1={`${totalResponses}건`} />
                        <InfoHelper />
                        <Helper text="긍정" text1={`${positiveCount}건`} />
                        <InfoHelper />
                        <Helper text="부정" text1={`${negativeCount}건`} />
                        <InfoHelper />
                        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[100px]">
                          <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">
                            가장 많은 응답 부위
                          </p>
                          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">
                            {mostFrequentArea}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainPointShoeCard;
