import svgPaths from "./svg-zpbuay9xf5";

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">
          <rect fill="var(--fill-0, #0085EC)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
          <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white relative rounded-[6px] size-full" data-name="modal">
      <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Modal Header">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[2px] items-start pb-[16px] pl-[24px] pr-[100px] pt-[24px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="title-wrap">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-nowrap tracking-[-0.154px]">필터</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="content">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start pb-[28px] pt-0 px-0 relative shrink-0 w-full" data-name="브랜드">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">유형 구분</p>
                <div className="content-center flex flex-wrap gap-[12px] items-center justify-between relative shrink-0 w-full" data-name="wrap">
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[176px] relative shrink-0" data-name="check box">
                    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                      <Checkbox />
                    </div>
                    <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">피팅감</p>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[176px] relative shrink-0" data-name="check box">
                    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                      <Checkbox1 />
                    </div>
                    <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">기능성</p>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[176px] relative shrink-0" data-name="check box">
                    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                      <Checkbox />
                    </div>
                    <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">통증 부위</p>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[176px] relative shrink-0" data-name="check box">
                    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                      <Checkbox1 />
                    </div>
                    <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">종합 평가</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Modal Footer">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-[24px] pt-[16px] px-[24px] relative w-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inline Label Button">
                <div className="relative shrink-0 size-[16px]" data-name="ic_refresh">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g clipPath="url(#clip0_5_4957)" id="ic_refresh">
                      <path d={svgPaths.p38ed0f00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_4957">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">초기화</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right-wrap">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px]">취소</p>
                </div>
                <div className="bg-[#1e2020] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px]">적용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}