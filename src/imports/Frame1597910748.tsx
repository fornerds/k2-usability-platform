import svgPaths from "./svg-h7xvzcfcbh";
import clsx from "clsx";
type Text4Props = {
  text: string;
};

function Text4({ text, children }: React.PropsWithChildren<Text4Props>) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 728 1">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <Text4 text={text}>
      <path d="M0 0.5H728" id="Vector 9744" stroke="var(--stroke-0, #0C0F0F)" strokeDasharray="4 4" strokeOpacity="0.13" />
    </Text4>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Text4 text={text}>
      <path d="M0 0.5H728" id="Vector 9743" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
    </Text4>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-white h-[16px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative size-full">
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.29)] text-center text-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">기능성</p>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">개별응답보기</p>
          <div className="relative shrink-0 size-[16px]" data-name="ic_chevron_right">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_45_21137)" id="ic_chevron_right">
                <path d={svgPaths.p11a80500} fill="var(--fill-0, #2A2C2C)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_45_21137">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[24px] relative w-full">
            <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="bg-white content-stretch flex h-[352px] items-center justify-center relative shrink-0 w-[480px]">
                <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start relative shrink-0 w-[240px]" data-name="chart">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="chart">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[240px]" data-name="chart">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
                        <g id="chart">
                          <path d={svgPaths.p1a956d00} id="Polygon 63" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          <g id="Polygon 64">
                            <path d={svgPaths.pee86800} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p53d7980} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          </g>
                          <path d={svgPaths.p5ebc640} id="Polygon 65" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          <g id="Polygon 66">
                            <path d={svgPaths.p288e6b80} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p1d7bcb00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          </g>
                          <path d={svgPaths.p2995c300} id="Polygon 67" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                        </g>
                      </svg>
                    </div>
                    <div className="[grid-area:1_/_1] h-[88.636px] ml-[120px] mt-[0.91px] relative w-0">
                      <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 88.6364">
                          <path d="M0.5 88.6364V0" id="Vector 9735" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                        </svg>
                      </div>
                    </div>
                    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[5px] h-[96.774px] items-start ml-[112.26px] mt-0 relative w-[15.484px]">
                      <Text text="100" />
                      <Text text="75" />
                      <Text text="50" />
                      <Text text="25" />
                      <Text text="0" />
                    </div>
                    <div className="[grid-area:1_/_1] h-[193.5px] ml-[72.27px] mt-[23.5px] relative w-[113.182px]">
                      <div className="absolute inset-0" style={{ "--fill-0": "rgba(78, 160, 255, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.182 193.5">
                          <path d={svgPaths.p3e6a6700} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.3" id="Polygon 70" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Text1 text="통기성" additionalClassNames="justify-end left-[-53px] top-[53.5px]" />
                  <div className="absolute bg-[rgba(78,160,255,0.1)] content-stretch flex flex-col items-start left-[99px] px-[8px] py-[4px] rounded-[4px] top-[-36px]">
                    <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">탄성</p>
                    </div>
                  </div>
                  <Text1 text="쿠셔닝" additionalClassNames="justify-end left-[-53px] top-[180.5px]" />
                  <Text1 text="편안함" additionalClassNames="left-[240px] top-[53.5px]" />
                  <Text1 text="유연성" additionalClassNames="left-[240px] top-[180.5px]" />
                  <Text1 text="안정성" additionalClassNames="justify-end left-[94px] top-[248px]" />
                </div>
              </div>
              <div className="basis-0 bg-white content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px pb-[48px] pt-[24px] px-0 relative rounded-[12px] shrink-0">
                <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">탄성</p>
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                  <Text2 text="100" />
                  <Text3 text="75" />
                  <Text3 text="50" />
                  <Text3 text="25" />
                  <Text2 text="0" />
                </div>
                <div className="absolute content-stretch flex gap-[140px] items-end justify-center left-[calc(50%+20px)] top-[calc(50%+41.5px)] translate-x-[-50%] translate-y-[-50%] w-[666px]">
                  <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[92px]">
                    <div className="bg-[#d4d4d4] h-[181px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[148px]" data-name="bar" />
                    <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[45.5px] not-italic overflow-ellipsis overflow-hidden text-[#2a2c2c] text-[16px] text-center text-nowrap top-[64px] tracking-[-0.08px] translate-x-[-50%]">84</p>
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-[min-content]">카테고리 평균</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[92px]">
                    <div className="bg-[#0085ec] h-[137px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[148px]" data-name="bar" />
                    <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[46.5px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[66px] tracking-[-0.08px] translate-x-[-50%]">68</p>
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">피스테런3.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}