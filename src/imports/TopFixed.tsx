import svgPaths from "./svg-ocqovedvpn";

export default function TopFixed() {
  return (
    <div className="bg-white relative size-full" data-name="top fixed">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_8px_12px_0px_rgba(13,14,17,0.04)]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[232px] py-[16px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <div className="relative shrink-0 size-[16px]" data-name="ic_import">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g clipPath="url(#clip0_31_18074)" id="ic_import">
                      <path d={svgPaths.p3ed07b00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_31_18074">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">유형 가져오기</p>
              </div>
            </div>
            <div className="h-[28px] relative shrink-0 w-0">
              <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                  <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">임시저장</p>
              </div>
              <div className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">등록</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}