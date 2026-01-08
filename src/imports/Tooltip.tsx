import svgPaths from "./svg-4in6g8k1ti";

export default function Tooltip() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Tooltip">
      <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start justify-end left-[calc(50%+140.5px)] top-[-48px] translate-x-[-50%]" data-name="tooltip-wrapper">
        <div className="bg-[#1e2020] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)] shrink-0" data-name="tooltip">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px]">분석하고 싶은 리포트를 선택해서 비교할 수 있어요</p>
          <div className="relative shrink-0 size-[16px]" data-name="ic_close">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="ic_close">
                <path d={svgPaths.p2390fef0} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute flex items-center justify-center left-[13.86px] size-[14.142px] top-[calc(50%+20px)] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[135deg]">
            <div className="relative size-[10px]" data-name="Beak">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, #1E2020)" id="Beak" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}