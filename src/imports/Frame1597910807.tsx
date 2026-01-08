import svgPaths from "./svg-u3w7td3ssi";
import clsx from "clsx";

function Checkbox({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">{children}</g>
      </svg>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text, children }: React.PropsWithChildren<Text4Props>) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
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
      <path d="M0 0.5H680" id="Vector 9744" stroke="var(--stroke-0, #0C0F0F)" strokeDasharray="4 4" strokeOpacity="0.13" />
    </Text4>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Text4 text={text}>
      <path d="M0 0.5H680" id="Vector 9743" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
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
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.52)] text-center text-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <div className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
            <Checkbox>
              <rect fill="var(--fill-0, #0085EC)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
              <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            </Checkbox>
          </div>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">가드런 맥스</p>
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
            <Checkbox>
              <rect fill="var(--fill-0, #9766F8)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
              <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            </Checkbox>
          </div>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">피스테런 3.0</p>
        </div>
        <div className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
            <Checkbox>
              <rect fill="var(--fill-0, #E15634)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
              <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
            </Checkbox>
          </div>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">스위프트인터벌</p>
        </div>
      </div>
      <div className="relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
            <div className="content-stretch flex h-[352px] items-center justify-center relative shrink-0 w-[480px]">
              <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-start relative shrink-0 w-[240px]" data-name="chart">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="chart">
                  <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[240px]" data-name="chart">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
                      <g id="chart">
                        <g id="Polygon 63">
                          <path d={svgPaths.p9181ae0} fill="var(--fill-0, white)" />
                          <path d={svgPaths.p1a956d00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                        </g>
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
                  <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[4px] h-[96.774px] items-start ml-[112.26px] mt-[6px] relative w-[15.484px]">
                    <Text text="100" />
                    <Text text="75" />
                    <Text text="50" />
                    <Text text="25" />
                    <Text text="0" />
                  </div>
                  <div className="[grid-area:1_/_1] h-[193.5px] ml-[35.5px] mt-[23.5px] relative w-[169px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 193.5">
                      <g id="Group 1597909616">
                        <path d={svgPaths.p2c124d80} fill="var(--fill-0, #FF7350)" fillOpacity="0.3" id="Polygon 70" />
                        <path d={svgPaths.p3ddb080} fill="var(--fill-0, #AF88FF)" fillOpacity="0.3" id="Polygon 72" />
                        <g id="Group 1597909615">
                          <path d={svgPaths.p27b9ed80} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.3" id="Polygon 71" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <Text1 text="통기성" additionalClassNames="justify-center left-[-41px] top-[53.5px]" />
                <div className="absolute bg-[rgba(78,160,255,0.1)] content-stretch flex flex-col items-start left-[94px] px-[8px] py-[4px] rounded-[4px] top-[-36px]">
                  <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">탄성</p>
                  </div>
                </div>
                <Text1 text="쿠셔닝" additionalClassNames="left-[-53px] top-[180.5px]" />
                <Text1 text="편안함" additionalClassNames="left-[240px] top-[53.5px]" />
                <Text1 text="유연성" additionalClassNames="left-[240px] top-[180.5px]" />
                <Text1 text="안정성" additionalClassNames="justify-end left-[94px] top-[248px]" />
              </div>
            </div>
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start pb-[48px] pt-[24px] px-[24px] relative w-full">
                  <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">탄성</p>
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <Text2 text="100" />
                    <Text3 text="75" />
                    <Text3 text="50" />
                    <Text3 text="25" />
                    <Text2 text="0" />
                  </div>
                  <div className="absolute content-stretch flex gap-[40px] items-end justify-center left-[calc(50%+20.5px)] top-[calc(50%+38.5px)] translate-x-[-50%] translate-y-[-50%] w-[583px]">
                    <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
                      <div className="bg-[#d4d4d4] h-[144px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                      <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50.5px] not-italic overflow-ellipsis overflow-hidden text-[#2a2c2c] text-[16px] text-center text-nowrap top-[61px] tracking-[-0.08px] translate-x-[-50%]">68</p>
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-[min-content]">카테고리 평균</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
                      <div className="bg-[#0085ec] h-[191px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-[min-content]">가드런 맥스</p>
                      <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50.5px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[84px] tracking-[-0.08px] translate-x-[-50%]">88</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
                      <div className="bg-[#9766f8] h-[144px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                      <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50.5px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[61px] tracking-[-0.08px] translate-x-[-50%]">68</p>
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">피스테런3.0</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] h-[146px] items-center justify-end relative shrink-0 w-[100px]">
                      <div className="basis-0 bg-[#e15634] grow min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                      <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[47px] tracking-[-0.08px] translate-x-[-50%]">52</p>
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">스위프트인터벌</p>
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
}