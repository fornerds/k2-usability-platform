import svgPaths from "./svg-t013uwl7d7";
import clsx from "clsx";
type PannelTitleTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PannelTitleText({ text, additionalClassNames = "" }: PannelTitleTextProps) {
  return (
    <div className={clsx("flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0", additionalClassNames)}>
      <p className="leading-[25px] overflow-ellipsis overflow-hidden text-[18px] text-nowrap">{text}</p>
    </div>
  );
}

export default function BottomPannel() {
  return (
    <div className="bg-white relative size-full" data-name="bottom pannel">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_-4px_10px_0px_rgba(13,14,17,0.04)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[16px] px-[232px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1152px]" data-name="pannel header">
            <div className="content-stretch flex items-center relative shrink-0" data-name="pannel title">
              <div className="content-stretch flex gap-[3px] items-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.126px]" data-name="pannel title">
                <PannelTitleText text="리포트" additionalClassNames="font-['Pretendard_Variable:Bold',sans-serif] text-[#2a2c2c]" />
                <PannelTitleText text="0" additionalClassNames="font-['Pretendard_Variable:SemiBold',sans-serif] text-[rgba(12,15,15,0.29)]" />
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="btn">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="bg-[rgba(12,15,15,0.1)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.19)] text-nowrap tracking-[-0.08px]">비교 분석</p>
                </div>
              </div>
              <div className="h-[28px] relative shrink-0 w-0">
                <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                    <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">닫기</p>
                <div className="relative shrink-0 size-[16px]" data-name="ic_chevron_down">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="ic_chevron_down">
                      <path d={svgPaths.p9819500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[165px] items-center relative shrink-0 w-full" data-name="card">
            <div className="basis-0 flex flex-col font-['Pretendard_Variable:Medium',sans-serif] grow h-[165px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-center tracking-[-0.08px]">
              <p className="leading-[27px]">리스트에서 최대 3개까지 제품 선택 후 비교 분석할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}