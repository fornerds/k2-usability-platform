import svgPaths from "./svg-yfrjnf7tik";

export default function Component() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="필터">
      <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="필터">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="검색/필터">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Text Input">
            <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input-box">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                  <div className="relative shrink-0 size-[20px]" data-name="ic_search">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="ic_search">
                        <path d={svgPaths.p378bce80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-wrap">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                      <p className="leading-[22px]">검색어 입력</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[78px]" data-name="filter btn">
            <div className="bg-[rgba(255,255,255,0)] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Label Button">
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-0 relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="ic_tune">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="ic_tune">
                        <path d={svgPaths.p2423ab00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">필터</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[28px] relative shrink-0 w-0" data-name="divider">
          <div className="absolute inset-[-1.79%_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 29">
              <path d="M0.5 0.5V28.5" id="divider" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="switch">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">내 의뢰만 보기</p>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Switch">
            <div className="h-[26px] relative shrink-0 w-[48px]" data-name="Switch">
              <div className="absolute bg-[rgba(12,15,15,0.07)] inset-0 rounded-[9999px]" data-name="Track">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              </div>
              <div className="absolute bg-white left-px rounded-[34.909px] size-[24px] top-px" data-name="Knob">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-[-1px] pointer-events-none rounded-[35.909px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}