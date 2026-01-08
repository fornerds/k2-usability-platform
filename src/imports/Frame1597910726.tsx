import svgPaths from "./svg-4qpxjogsq7";
import clsx from "clsx";

function Frame1597910755Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
      <div className="flex-none rotate-[135deg]">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Card() {
  return (
    <Wrapper additionalClassNames="bg-white shrink-0 w-full">
      <div className="content-stretch flex items-center px-[24px] py-[20px] relative w-full">
        <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
          <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
            <Helper2 text="긍정" text1="12건" />
            <Helper2 text="중립" text1="4건" />
            <Helper2 text="부정" text1="3건" />
          </div>
          <div className="h-[28px] relative shrink-0 w-0">
            <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
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
    </Wrapper>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">{text1}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{text1}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="[grid-area:1_/_1] ml-[66px] mt-[66px] relative size-[80px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <circle cx="40" cy="40" fill="var(--fill-0, white)" id="Ellipse 8312" r="40" />
      </svg>
    </div>
  );
}
type Slice1Props = {
  additionalClassNames?: string;
};

function Slice1({ additionalClassNames = "" }: Slice1Props) {
  return (
    <div className={clsx("[grid-area:1_/_1] ml-0 relative size-[106px]", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(212, 212, 212, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
          <path d={svgPaths.pab74f00} fill="var(--fill-0, #D4D4D4)" id="Slice - 3 (16.7%)" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}
type SliceProps = {
  additionalClassNames?: string;
};

function Slice({ additionalClassNames = "" }: SliceProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-[106px] mt-0 relative w-[91.799px]", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 37, 63, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.7987 106">
          <path d={svgPaths.p31ef8000} fill="var(--fill-0, #FF253F)" id="Slice - 3 (16.7%)" stroke="var(--stroke-0, white)" />
        </svg>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#d4d4d4] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#00b56b] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <Wrapper additionalClassNames="size-full">
      <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="bg-white content-stretch flex flex-col gap-[20px] items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">착용감</p>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="label">
                <Text text="긍정" />
                <Text1 text="중립" />
                <Text2 text="부정" />
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Figpie">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.2px] mt-0 place-items-start relative">
                <div className="[grid-area:1_/_1] h-[212px] ml-0 mt-0 relative w-[197.799px]" data-name="Slice - 12 (66.7%)">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 181, 107, 1)", "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.799 212">
                      <g id="Slice - 12 (66.7%)">
                        <path d={svgPaths.p39c1c4f0} fill="var(--fill-0, #00B56B)" />
                        <path d={svgPaths.p838da00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[138.47px] mt-[128px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">72%</p>
              </div>
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.2px] mt-0 opacity-20 place-items-start relative">
                <Slice additionalClassNames="ml-0" />
                <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[40.47px] mt-[36px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">13%</p>
              </div>
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[53px] opacity-20 place-items-start relative">
                <Slice1 additionalClassNames="mt-0" />
                <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[19.67px] mt-[41px] not-italic overflow-ellipsis overflow-hidden relative text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">15%</p>
              </div>
              <Helper />
            </div>
            <div className="absolute content-stretch flex gap-[4px] items-center left-[345.5px] top-[86px]" data-name="tooltip">
              <div className="relative shadow-[0px_1.469px_4.406px_0px_rgba(0,0,0,0.1),0px_1.469px_2.938px_-1.469px_rgba(0,0,0,0.1)] shrink-0 size-[47px]" data-name="Util / Cursor & Interaction">
                <div className="absolute inset-[25.32%_24.62%_24.62%_28.33%]" data-name="Group">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1153 23.5271">
                    <g id="Group">
                      <path clipRule="evenodd" d={svgPaths.pc568000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                      <path clipRule="evenodd" d={svgPaths.p345da00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[136px]">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                <Helper1 text="매우 만족" text1="7건" />
                <Helper1 text="만족" text1="2건" />
                <Helper1 text="약간 만족" text1="1건" />
                <Frame1597910755Helper>
                  <div className="relative size-[10px]" data-name="Beak">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, white)" id="Beak" />
                      </svg>
                    </div>
                  </div>
                </Frame1597910755Helper>
                <Frame1597910755Helper>
                  <div className="relative size-[10px]" data-name="Beak (Stroke)">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <path clipRule="evenodd" d="M0 10H10V0H8.75V8.75H0V10Z" fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" fillRule="evenodd" id="Beak (Stroke)" />
                      </svg>
                    </div>
                  </div>
                </Frame1597910755Helper>
              </div>
            </div>
          </div>
          <Card />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div className="h-full relative shrink-0 w-0">
            <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 358">
                <path d="M0.5 0V358" id="Vector 9737" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
              </svg>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="bg-white content-stretch flex flex-col gap-[20px] items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">디자인</p>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="label">
                <Text text="긍정" />
                <Text1 text="중립" />
                <Text2 text="부정" />
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Figpie">
              <div className="[grid-area:1_/_1] h-[212px] ml-[14.2px] mt-0 relative w-[197.799px]" data-name="Slice - 12 (66.7%)">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 181, 107, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.799 212">
                    <path d={svgPaths.p838da00} fill="var(--fill-0, #00B56B)" id="Slice - 12 (66.7%)" stroke="var(--stroke-0, white)" />
                  </svg>
                </div>
              </div>
              <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[152.67px] mt-[128px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">72%</p>
              <Slice1 additionalClassNames="mt-[53px]" />
              <Slice additionalClassNames="ml-[14.2px]" />
              <Helper />
              <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[54.67px] mt-[36px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">13%</p>
              <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[19.67px] mt-[94px] not-italic overflow-ellipsis overflow-hidden relative text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">15%</p>
            </div>
          </div>
          <Card />
        </div>
      </div>
    </Wrapper>
  );
}