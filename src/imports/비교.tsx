import svgPaths from "./svg-rg9x9hxthy";
import clsx from "clsx";
import imgImage4 from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";
import imgImage5 from "@/assets/864a3c9bc3adad5251021636f6ef8e09449470b8.png";
import imgImage6 from "@/assets/7885c67f6aac708b6cd51cb2d7a30e37c72e817d.png";
type Wrapper11Props = {
  additionalClassNames?: string;
};

function Wrapper11({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper11Props>) {
  return (
    <div className={clsx("h-[212px] relative w-[72px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0001 212">
        {children}
      </svg>
    </div>
  );
}

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
      <div className="flex-none rotate-[135deg]">{children}</div>
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("flex flex-col justify-center size-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[12px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Card1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center px-[24px] py-[20px] relative w-full">{children}</div>
    </Wrapper4>
  );
}

function Checkbox({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5>
      <g id="checkbox">{children}</g>
    </Wrapper5>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Wrapper6>{children}</Wrapper6>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <Wrapper6 additionalClassNames="overflow-clip rounded-[inherit]">{children}</Wrapper6>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Img({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[220px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper7>{children}</Wrapper7>
    </div>
  );
}
type Text15Props = {
  text: string;
};

function Text15({ text, children }: React.PropsWithChildren<Text15Props>) {
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

function AnalystTopFixedHelper() {
  return (
    <div className="h-full relative shrink-0 w-0">
      <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 72">
          <path d="M0.5 0V72" id="Vector 9737" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
        </svg>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Wrapper8>
        <g id="ic_search">
          <path d={svgPaths.p18195a80} fill="var(--fill-0, #2A2C2C)" id="Vector" />
        </g>
      </Wrapper8>
    </div>
  );
}
type Text14Props = {
  text: string;
};

function Text14({ text }: Text14Props) {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
        <p className="leading-[25px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type Text13Props = {
  text: string;
  additionalClassNames?: string;
};

function Text13({ text, additionalClassNames = "" }: Text13Props) {
  return (
    <div className={clsx("content-stretch flex items-center pl-[24px] pr-0 py-0 relative", additionalClassNames)}>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}
type Helper1DepthMenuTextProps = {
  text: string;
};

function Helper1DepthMenuText({ text }: Helper1DepthMenuTextProps) {
  return (
    <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Helper2DepthMenuTextProps = {
  text: string;
};

function Helper2DepthMenuText({ text }: Helper2DepthMenuTextProps) {
  return (
    <Wrapper>
      <Wrapper9>
        <g id="ic_dashboard">
          <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
        </g>
      </Wrapper9>
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">{text}</p>
    </Wrapper>
  );
}

function Helper6() {
  return (
    <div className="h-[28px] relative shrink-0 w-0">
      <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
          <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type NumTextProps = {
  text: string;
};

function NumText({ text }: NumTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-center pl-[24px] pr-[16px] py-0 relative shrink-0 w-[96px]">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[34px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap text-right tracking-[-0.26px]">{text}</p>
      <div className="content-stretch flex flex-col items-center justify-center pb-[5px] pt-0 px-0 relative shrink-0 w-[11px]">
        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{"점"}</p>
      </div>
    </div>
  );
}
type Helper5Props = {
  text: string;
  text1: string;
};

function Helper5({ text, text1 }: Helper5Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">{text1}</p>
    </div>
  );
}

function Helper4() {
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
type Text12Props = {
  text: string;
};

function Text12({ text }: Text12Props) {
  return (
    <Text15 text={text}>
      <path d="M0 0.5H680" id="Vector 9744" stroke="var(--stroke-0, #0C0F0F)" strokeDasharray="4 4" strokeOpacity="0.13" />
    </Text15>
  );
}
type Text11Props = {
  text: string;
};

function Text11({ text }: Text11Props) {
  return (
    <Text15 text={text}>
      <path d="M0 0.5H680" id="Vector 9743" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
    </Text15>
  );
}

function Helper3() {
  return (
    <Wrapper10>
      <div className="relative size-[10px]" data-name="Beak (Stroke)">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path clipRule="evenodd" d="M0 10H10V0H8.75V8.75H0V10Z" fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" fillRule="evenodd" id="Beak (Stroke)" />
          </svg>
        </div>
      </div>
    </Wrapper10>
  );
}

function Helper2() {
  return (
    <Wrapper10>
      <div className="relative size-[10px]" data-name="Beak">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, white)" id="Beak" />
          </svg>
        </div>
      </div>
    </Wrapper10>
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

function Group() {
  return (
    <div className="absolute inset-[25.32%_24.62%_24.62%_28.33%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1153 23.5271">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pc568000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p345da00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}
type Text10Props = {
  text: string;
  additionalClassNames?: string;
};

function Text10({ text, additionalClassNames = "" }: Text10Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text9Props = {
  text: string;
};

function Text9({ text }: Text9Props) {
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
type Text8Props = {
  text: string;
};

function Text8({ text }: Text8Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[red] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#0f0] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#2873fb] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

function Frame1597910751Helper() {
  return (
    <div className="h-[16px] relative shrink-0 w-0">
      <div className="absolute inset-[-6.25%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18">
          <path d="M1 1V17" id="Vector 19" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type Helper2DepthTabItemTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Helper2DepthTabItemText({ text, additionalClassNames = "" }: Helper2DepthTabItemTextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0", additionalClassNames)}>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text5Props = {
  text: string;
  additionalClassNames?: string;
};

function Text5({ text, additionalClassNames = "" }: Text5Props) {
  return (
    <div className={clsx("content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]", additionalClassNames)}>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">{text}</p>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{"개별응답보기"}</p>
        <Wrapper8>
          <g id="ic_chevron_right">
            <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
          </g>
        </Wrapper8>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute h-[65.094px] left-[27.83%] right-[33.25%] top-[calc(50%-7px)] translate-y-[-50%]">
      <div className="absolute inset-[0_-2.62%_-12.29%_-2.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.546 73.0943">
          <g id="Group 1597909515">
            <g filter="url(#filter0_d_50_3729)" id="Ellipse 1">
              <circle cx="81.6595" cy="5.54717" fill="var(--fill-0, #FF253F)" r="5.54717" />
              <circle cx="81.6595" cy="5.54717" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter1_d_50_3729)" id="Ellipse 2">
              <circle cx="65.0189" cy="7.54717" fill="var(--fill-0, #FF253F)" r="5.54717" />
              <circle cx="65.0189" cy="7.54717" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter2_d_50_3729)" id="Ellipse 9">
              <circle cx="51.1507" cy="16.5472" fill="var(--fill-0, #FF253F)" r="5.54717" />
              <circle cx="51.1507" cy="16.5472" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter3_d_50_3729)" id="Ellipse 3">
              <circle cx="40.056" cy="56.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
              <circle cx="40.056" cy="56.5472" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter4_d_50_3729)" id="Ellipse 7">
              <circle cx="150.999" cy="5.54717" fill="var(--fill-0, #FF253F)" r="5.54717" />
              <circle cx="150.999" cy="5.54717" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter5_d_50_3729)" id="Ellipse 11">
              <circle cx="145.452" cy="19.5472" fill="var(--fill-0, #FF253F)" r="5.54717" />
              <circle cx="145.452" cy="19.5472" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter6_d_50_3729)" id="Ellipse 5">
              <circle cx="9.54717" cy="34.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
              <circle cx="9.54717" cy="34.5472" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter7_d_50_3729)" id="Ellipse 6">
              <circle cx="28.9622" cy="59.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
              <circle cx="28.9622" cy="59.5472" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
            <g filter="url(#filter8_d_50_3729)" id="Ellipse 4">
              <circle cx="64.095" cy="56.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
              <circle cx="64.095" cy="56.5472" r="5.04717" stroke="var(--stroke-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter0_d_50_3729" width="19.0943" x="72.1123" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter1_d_50_3729" width="19.0943" x="55.4717" y="2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter2_d_50_3729" width="19.0943" x="41.6035" y="11">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter3_d_50_3729" width="19.0943" x="30.5088" y="51">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter4_d_50_3729" width="19.0943" x="141.452" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter5_d_50_3729" width="19.0943" x="135.905" y="14">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter6_d_50_3729" width="19.0943" x="0" y="29">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter7_d_50_3729" width="19.0943" x="19.415" y="54">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter8_d_50_3729" width="19.0943" x="54.5479" y="51">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3729" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3729" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <Wrapper8>
            <g id="ic_thumb down">
              <path d={svgPaths.p36588100} fill="var(--fill-0, #FF253F)" id="Vector" />
            </g>
          </Wrapper8>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ff253f] text-[12px] text-nowrap">{"부정"}</p>
        </div>
        <div className="h-[12px] relative shrink-0 w-0">
          <div className="absolute inset-[-8.33%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
              <path d="M1 1V13" id="Vector 9740" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{"박성한"}</p>
      </div>
      <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{`“신발의 반발 탄성이 추진력을 준다기 보다는 딱딱한 느낌이 들게 해서 거슬리는 느낌이 들었다.” `}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-[36px] items-center justify-center min-h-px min-w-px relative rounded-br-[2px] rounded-tr-[2px] shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="bg-[#00b56b] content-stretch flex h-[36px] items-center justify-center relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[272px]">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
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

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="비교">
      <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[356px] top-[172px] w-[1320px]">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
            <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">통증 부위</p>
            <div className="bg-white content-stretch flex gap-[2px] h-[40px] items-center justify-center opacity-0 px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">개별응답보기</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative rounded-[12px] shrink-0 w-full">
            <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
              <Wrapper6 additionalClassNames="overflow-clip rounded-[inherit]">
                <Img>
                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                    <div className="relative shrink-0 size-[240px]" data-name="image 4">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[184px] translate-x-[-50%]" data-name="label">
                    <Text text="긍정" />
                    <Text1 text="부정" />
                  </div>
                  <div className="absolute h-[65.094px] left-[27.83%] right-[28.3%] top-[calc(50%-7px)] translate-y-[-50%]">
                    <div className="absolute inset-[0_-2.33%_-12.29%_-2.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.962 73.0943">
                        <g id="Group 1597909515">
                          <g filter="url(#filter0_d_50_3756)" id="Ellipse 1">
                            <circle cx="81.6595" cy="5.54717" fill="var(--fill-0, #FF253F)" r="5.54717" />
                            <circle cx="81.6595" cy="5.54717" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter1_d_50_3756)" id="Ellipse 2">
                            <circle cx="65.0189" cy="7.54717" fill="var(--fill-0, #FF253F)" r="5.54717" />
                            <circle cx="65.0189" cy="7.54717" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter2_d_50_3756)" id="Ellipse 9">
                            <circle cx="51.1507" cy="16.5472" fill="var(--fill-0, #FF253F)" r="5.54717" />
                            <circle cx="51.1507" cy="16.5472" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter3_d_50_3756)" id="Ellipse 3">
                            <circle cx="40.056" cy="56.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
                            <circle cx="40.056" cy="56.5472" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter4_d_50_3756)" id="Ellipse 7">
                            <circle cx="150.999" cy="5.54717" fill="var(--fill-0, #FF253F)" r="5.54717" />
                            <circle cx="150.999" cy="5.54717" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter5_d_50_3756)" id="Ellipse 11">
                            <circle cx="145.452" cy="19.5472" fill="var(--fill-0, #FF253F)" r="5.54717" />
                            <circle cx="145.452" cy="19.5472" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter6_d_50_3756)" id="Ellipse 5">
                            <circle cx="9.54717" cy="34.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
                            <circle cx="9.54717" cy="34.5472" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter7_d_50_3756)" id="Ellipse 6">
                            <circle cx="28.9622" cy="59.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
                            <circle cx="28.9622" cy="59.5472" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g filter="url(#filter8_d_50_3756)" id="Ellipse 4">
                            <circle cx="64.095" cy="56.5472" fill="var(--fill-0, #00B56B)" r="5.54717" />
                            <circle cx="64.095" cy="56.5472" r="5.04717" stroke="var(--stroke-0, white)" />
                          </g>
                          <g id="Group 1597909595">
                            <g filter="url(#filter9_d_50_3756)" id="Ellipse 8">
                              <circle cx="164.868" cy="11.5475" fill="var(--fill-0, #FF253F)" r="11.0943" />
                              <circle cx="164.868" cy="11.5475" r="10.5943" stroke="var(--stroke-0, white)" />
                            </g>
                            <g filter="url(#filter10_d_50_3756)" id="Ellipse 12">
                              <circle cx="164.867" cy="11.5472" fill="var(--fill-0, white)" r="5.54717" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter0_d_50_3756" width="19.0943" x="72.1123" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter1_d_50_3756" width="19.0943" x="55.4717" y="2">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter2_d_50_3756" width="19.0943" x="41.6035" y="11">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter3_d_50_3756" width="19.0943" x="30.5088" y="51">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter4_d_50_3756" width="19.0943" x="141.452" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter5_d_50_3756" width="19.0943" x="135.905" y="14">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter6_d_50_3756" width="19.0943" x="0" y="29">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter7_d_50_3756" width="19.0943" x="19.415" y="54">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter8_d_50_3756" width="19.0943" x="54.5479" y="51">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.1887" id="filter9_d_50_3756" width="30.1887" x="149.773" y="0.453125">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.0943" id="filter10_d_50_3756" width="19.0943" x="155.32" y="6">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3756" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3756" mode="normal" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </Img>
                <Card>
                  <div className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full" data-name="data">
                    <Text2 text="76%" />
                    <Text3 text="24%" />
                  </div>
                  <Comment />
                </Card>
              </Wrapper6>
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
            <Wrapper1>
              <Img>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="relative rounded-[2px] shrink-0 size-[240px]" data-name="image 4">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
                      <img alt="" className="absolute h-[133.46%] left-0 max-w-none top-[-13.11%] w-full" src={imgImage5} />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[184px] translate-x-[-50%]" data-name="label">
                  <Text text="긍정" />
                  <Text1 text="부정" />
                </div>
                <Helper />
              </Img>
              <Card>
                <div className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full" data-name="data">
                  <Text2 text="76%" />
                  <Text3 text="24%" />
                </div>
                <Comment />
              </Card>
            </Wrapper1>
            <Wrapper1>
              <Img>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="relative shrink-0 size-[240px]" data-name="image 4">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[133.46%] left-0 max-w-none top-[-17.05%] w-full" src={imgImage6} />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[184px] translate-x-[-50%]" data-name="label">
                  <Text text="긍정" />
                  <Text1 text="부정" />
                </div>
                <Helper />
              </Img>
              <Card>
                <div className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full" data-name="data">
                  <Text2 text="76%" />
                  <Text3 text="24%" />
                </div>
                <Comment />
              </Card>
            </Wrapper1>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <Text4 text="피팅감" />
          <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="bg-white h-[40px] relative rounded-[7px] shrink-0" data-name="_2depth Tab Item">
                  <Text5 text="신발 길이" additionalClassNames="h-full" />
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                </div>
                <Helper2DepthTabItemText text="발볼 둘레" additionalClassNames="h-[40px]" />
                <Frame1597910751Helper />
                <Helper2DepthTabItemText text="발등" additionalClassNames="h-[40px]" />
                <Frame1597910751Helper />
                <Helper2DepthTabItemText text="발 뒤꿈치" additionalClassNames="h-[40px]" />
              </div>
              <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex h-[40px] items-start overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Segmented Control">
                <div className="bg-white content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[4px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)] shrink-0" data-name="_Segmented Control Item">
                  <Wrapper5>
                    <g id="ic_image">
                      <path d={svgPaths.pc98f9f0} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                    </g>
                  </Wrapper5>
                </div>
                <div className="content-stretch flex h-full items-center justify-center opacity-40 overflow-clip px-[12px] py-0 relative rounded-[4px] shrink-0" data-name="_Segmented Control Item">
                  <Wrapper5>
                    <g id="ic_tune">
                      <path d={svgPaths.p34a10e80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </Wrapper5>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full">
              <Wrapper2>
                <div className="content-stretch flex flex-col gap-[24px] h-[299px] items-center justify-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[212px] items-center relative shrink-0" data-name="heatmap">
                    <Wrapper11 additionalClassNames="shrink-0">
                      <g id="Group 1597909599">
                        <g id="Vector 37">
                          <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                          <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                        </g>
                        <g id="Mask group">
                          <mask height="212" id="mask0_50_3580" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                            <g id="Vector 39">
                              <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                              <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                          </mask>
                          <g mask="url(#mask0_50_3580)">
                            <g id="Ellipse 43">
                              <g filter="url(#filter0_f_50_3580)" id="Ellipse 35">
                                <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3580)" r="37.5" />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="Vector 38">
                          <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                          <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3580" width="91" x="-3" y="-14">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_50_3580" stdDeviation="4" />
                        </filter>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3580" r="1">
                          <stop offset="0.25" stopColor="#2873FB" />
                          <stop offset="0.7" stopColor="#1CC6FA" />
                          <stop offset="0.845" stopColor="#49FFF9" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </Wrapper11>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                        <Wrapper11>
                          <g id="Group 1597909605">
                            <g id="Vector 37">
                              <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                              <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                            <g id="Mask group">
                              <mask height="212" id="mask0_50_3748" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                                <g id="Vector 39">
                                  <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                  <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                                </g>
                              </mask>
                              <g mask="url(#mask0_50_3748)">
                                <g id="Ellipse 43">
                                  <g filter="url(#filter0_f_50_3748)" id="Ellipse 35">
                                    <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3748)" r="37.5" />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g id="Vector 38">
                              <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                              <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3748" width="91" x="-3" y="-14">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_50_3748" stdDeviation="4" />
                            </filter>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3748" r="1">
                              <stop offset="0.25" stopColor="#2873FB" />
                              <stop offset="0.7" stopColor="#1CC6FA" />
                              <stop offset="0.845" stopColor="#49FFF9" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </Wrapper11>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="label">
                    <Text6 text="헐거움" />
                    <Text7 text="적당함" />
                    <Text8 text="압박감" />
                  </div>
                </div>
              </Wrapper2>
              <Wrapper2>
                <div className="content-stretch flex flex-col gap-[24px] h-[299px] items-center justify-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[212px] items-center relative shrink-0" data-name="heatmap">
                    <Wrapper11 additionalClassNames="shrink-0">
                      <g id="Group 1597909599">
                        <g id="Vector 37">
                          <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                          <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                        </g>
                        <g id="Mask group">
                          <mask height="212" id="mask0_50_3713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                            <g id="Vector 39">
                              <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                              <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                          </mask>
                          <g mask="url(#mask0_50_3713)">
                            <g id="Ellipse 43">
                              <g filter="url(#filter0_f_50_3713)" id="Ellipse 35">
                                <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3713)" r="37.5" />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="Vector 38">
                          <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                          <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3713" width="91" x="-3" y="-14">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_50_3713" stdDeviation="4" />
                        </filter>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3713" r="1">
                          <stop offset="0.25" stopColor="#00FF00" />
                          <stop offset="0.7" stopColor="#1CFAB0" />
                          <stop offset="0.845" stopColor="#B0FF49" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </Wrapper11>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                        <Wrapper11>
                          <g id="Group 1597909605">
                            <g id="Vector 37">
                              <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                              <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                            <g id="Mask group">
                              <mask height="212" id="mask0_50_3679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                                <g id="Vector 39">
                                  <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                  <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                                </g>
                              </mask>
                              <g mask="url(#mask0_50_3679)">
                                <g id="Ellipse 43">
                                  <g filter="url(#filter0_f_50_3679)" id="Ellipse 35">
                                    <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3679)" r="37.5" />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g id="Vector 38">
                              <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                              <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3679" width="91" x="-3" y="-14">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_50_3679" stdDeviation="4" />
                            </filter>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3679" r="1">
                              <stop offset="0.25" stopColor="#00FF00" />
                              <stop offset="0.7" stopColor="#1CFAB0" />
                              <stop offset="0.845" stopColor="#B0FF49" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </Wrapper11>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="label">
                    <Text6 text="헐거움" />
                    <Text7 text="적당함" />
                    <Text8 text="압박감" />
                  </div>
                </div>
              </Wrapper2>
              <Wrapper2>
                <div className="content-stretch flex flex-col gap-[24px] h-[296px] items-center justify-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] h-[212px] items-center relative shrink-0" data-name="heatmap">
                    <Wrapper11 additionalClassNames="shrink-0">
                      <g id="Group 1597909599">
                        <g id="Vector 37">
                          <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                          <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                        </g>
                        <g id="Mask group">
                          <mask height="212" id="mask0_50_3740" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                            <g id="Vector 39">
                              <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                              <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                          </mask>
                          <g mask="url(#mask0_50_3740)">
                            <g id="Ellipse 43">
                              <g filter="url(#filter0_f_50_3740)" id="Ellipse 35">
                                <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3740)" r="37.5" />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g id="Vector 38">
                          <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                          <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3740" width="91" x="-3" y="-14">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_50_3740" stdDeviation="4" />
                        </filter>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3740" r="1">
                          <stop offset="0.25" stopColor="#FF0000" />
                          <stop offset="0.7" stopColor="#FA9E1C" />
                          <stop offset="0.845" stopColor="#FFF649" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </Wrapper11>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                        <Wrapper11>
                          <g id="Group 1597909605">
                            <g id="Vector 37">
                              <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                              <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                            <g id="Mask group">
                              <mask height="212" id="mask0_50_3539" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                                <g id="Vector 39">
                                  <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                  <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                                </g>
                              </mask>
                              <g mask="url(#mask0_50_3539)">
                                <g id="Ellipse 43">
                                  <g filter="url(#filter0_f_50_3539)" id="Ellipse 35">
                                    <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3539)" r="37.5" />
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g id="Vector 38">
                              <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                              <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3539" width="91" x="-3" y="-14">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                              <feGaussianBlur result="effect1_foregroundBlur_50_3539" stdDeviation="4" />
                            </filter>
                            <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3539" r="1">
                              <stop offset="0.25" stopColor="#FF0000" />
                              <stop offset="0.7" stopColor="#FA9E1C" />
                              <stop offset="0.845" stopColor="#FFF649" />
                              <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </Wrapper11>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="label">
                    <Text6 text="헐거움" />
                    <Text7 text="적당함" />
                    <Text8 text="압박감" />
                  </div>
                </div>
              </Wrapper2>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <Text4 text="기능성" />
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
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
            <Wrapper4>
              <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
                <div className="content-stretch flex gap-[10px] h-[352px] items-center justify-center relative shrink-0 w-[480px]">
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
                        <Text9 text="100" />
                        <Text9 text="75" />
                        <Text9 text="50" />
                        <Text9 text="25" />
                        <Text9 text="0" />
                      </div>
                      <div className="[grid-area:1_/_1] h-[204px] ml-[35.5px] mt-[17px] relative w-[169px]">
                        <div className="absolute inset-[0_0_-5.42%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 215.067">
                            <g id="Group 1597909616">
                              <path d={svgPaths.p1218ae00} fill="var(--fill-0, #FF7350)" fillOpacity="0.3" id="Polygon 70" />
                              <path d={svgPaths.p2d219280} fill="var(--fill-0, #AF88FF)" fillOpacity="0.3" id="Polygon 72" />
                              <g id="Group 1597909615">
                                <path d={svgPaths.p395de880} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.3" id="Polygon 71" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" />
                                <g filter="url(#filter0_d_50_3568)" id="Ellipse 13">
                                  <circle cx="84.5" cy="6" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="84.5" cy="6" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter1_d_50_3568)" id="Ellipse 14">
                                  <circle cx="58.5" cy="88" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="58.5" cy="88" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter2_d_50_3568)" id="Ellipse 15">
                                  <circle cx="37.5" cy="130" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="37.5" cy="130" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter3_d_50_3568)" id="Ellipse 16">
                                  <circle cx="84.5" cy="198" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="84.5" cy="198" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter4_d_50_3568)" id="Ellipse 17">
                                  <circle cx="149.5" cy="141" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="149.5" cy="141" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter5_d_50_3568)" id="Ellipse 18">
                                  <circle cx="149.5" cy="63.5" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="149.5" cy="63.5" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                              </g>
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter0_d_50_3568" width="23.0667" x="72.9667" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="5.53333" />
                                <feGaussianBlur stdDeviation="2.76667" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter1_d_50_3568" width="23.0667" x="46.9667" y="82">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="5.53333" />
                                <feGaussianBlur stdDeviation="2.76667" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter2_d_50_3568" width="23.0667" x="25.9667" y="124">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="5.53333" />
                                <feGaussianBlur stdDeviation="2.76667" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter3_d_50_3568" width="23.0667" x="72.9667" y="192">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="5.53333" />
                                <feGaussianBlur stdDeviation="2.76667" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter4_d_50_3568" width="23.0667" x="137.967" y="135">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="5.53333" />
                                <feGaussianBlur stdDeviation="2.76667" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter5_d_50_3568" width="23.0667" x="137.967" y="57.5">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="5.53333" />
                                <feGaussianBlur stdDeviation="2.76667" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Text10 text="탄성" additionalClassNames="justify-center left-[-41px] top-[53.5px]" />
                    <div className="absolute bg-[rgba(78,160,255,0.1)] content-stretch flex flex-col items-start left-[94px] px-[8px] py-[4px] rounded-[4px] top-[-36px]">
                      <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">통기성</p>
                      </div>
                    </div>
                    <Text10 text="쿠셔닝" additionalClassNames="left-[-53px] top-[180.5px]" />
                    <Text10 text="편안함" additionalClassNames="left-[240px] top-[53.5px]" />
                    <Text10 text="유연성" additionalClassNames="left-[240px] top-[180.5px]" />
                    <Text10 text="안정성" additionalClassNames="justify-end left-[94px] top-[248px]" />
                  </div>
                  
                </div>
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                  <div className="size-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-start pb-[48px] pt-[24px] px-[24px] relative w-full">
                      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">통기성</p>
                      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                        <Text11 text="100" />
                        <Text12 text="75" />
                        <Text12 text="50" />
                        <Text12 text="25" />
                        <Text11 text="0" />
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
            </Wrapper4>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <Text4 text="만족도" />
          <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="bg-white relative rounded-[7px] shrink-0" data-name="_2depth Tab Item">
                  <Text5 text="착용감" />
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                </div>
                <Helper2DepthTabItemText text="디자인" />
              </div>
              <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="label">
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                  <div className="bg-[#049840] rounded-[4px] shrink-0 size-[14px]" />
                  <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">긍정</p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                  <div className="bg-[#d4d4d4] rounded-[4px] shrink-0 size-[14px]" />
                  <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">중립</p>
                </div>
                <Text1 text="부정" />
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-start relative rounded-[12px] shrink-0 w-full">
              <Wrapper3>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-center p-[24px] relative w-full">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Figpie">
                        <div className="[grid-area:1_/_1] h-[212px] ml-[14.2px] mt-0 relative w-[197.799px]" data-name="Slice - 12 (66.7%)">
                          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 181, 107, 1)", "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.799 212">
                              <g id="Slice - 12 (66.7%)">
                                <path d={svgPaths.p39c1c4f0} fill="var(--fill-0, #00B56B)" />
                                <path d={svgPaths.p838da00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[151.67px] mt-[125px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">72%</p>
                        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.2px] mt-0 opacity-20 place-items-start relative">
                          <Slice additionalClassNames="ml-0" />
                          <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[38.47px] mt-[36px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">13%</p>
                        </div>
                        <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[53px] opacity-20 place-items-start relative">
                          <Slice1 additionalClassNames="mt-0" />
                          <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[17.67px] mt-[42px] not-italic overflow-ellipsis overflow-hidden relative text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">15%</p>
                        </div>
                        <Helper4 />
                      </div>
                      <div className="absolute content-stretch flex gap-[4px] items-center left-[236.5px] top-[86px]" data-name="tooltip">
                        <div className="relative shadow-[0px_1.469px_4.406px_0px_rgba(0,0,0,0.1),0px_1.469px_2.938px_-1.469px_rgba(0,0,0,0.1)] shrink-0 size-[47px]" data-name="Util / Cursor & Interaction">
                          <Group />
                        </div>
                        <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[136px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                          <Helper1 text="매우 만족" text1="7건" />
                          <Helper1 text="만족" text1="2건" />
                          <Helper1 text="약간 만족" text1="3건" />
                          <Helper2 />
                          <Helper3 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Card1>
                  <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="info">
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                      <Helper5 text="긍정" text1="12건" />
                      <Helper5 text="중립" text1="53건" />
                      <Helper5 text="부정" text1="7건" />
                    </div>
                    <Helper6 />
                    <NumText text="72" />
                  </div>
                </Card1>
              </Wrapper3>
              {[...Array(2).keys()].map((_, i) => (
                <Wrapper3>
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col items-center p-[24px] relative w-full">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Figpie">
                          <div className="[grid-area:1_/_1] h-[212px] ml-[14.2px] mt-0 relative w-[197.799px]" data-name="Slice - 12 (66.7%)">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 181, 107, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.799 212">
                                <path d={svgPaths.p838da00} fill="var(--fill-0, #00B56B)" id="Slice - 12 (66.7%)" stroke="var(--stroke-0, white)" />
                              </svg>
                            </div>
                          </div>
                          <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[151.67px] mt-[125px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">72%</p>
                          <Slice1 additionalClassNames="mt-[53px]" />
                          <Slice additionalClassNames="ml-[14.2px]" />
                          <Helper4 />
                          <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[52.67px] mt-[36px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">13%</p>
                          <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[17.67px] mt-[95px] not-italic overflow-ellipsis overflow-hidden relative text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">15%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Card1>
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="info">
                      <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                        <Helper5 text="긍정" text1="12건" />
                        <Helper5 text="중립" text1="4건" />
                        <Helper5 text="부정" text1="3건" />
                      </div>
                      <Helper6 />
                      <NumText text="72" />
                    </div>
                  </Card1>
                </Wrapper3>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[2470px] items-start left-0 px-[16px] py-[20px] top-[60px] w-[304px]" data-name="LNB">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
          <Helper2DepthMenuText text="대시보드" />
          <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
            <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <Wrapper7>
              <Wrapper9>
                <g clipPath="url(#clip0_4_9912)" id="ic_data">
                  <path d={svgPaths.pbeab100} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_4_9912">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper9>
              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">리포트</p>
            </Wrapper7>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
          <Helper1DepthMenuText text="설문" />
          <Wrapper>
            <Wrapper9>
              <g clipPath="url(#clip0_31_17872)" id="ic_survey">
                <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_31_17872">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </Wrapper9>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문지</p>
          </Wrapper>
          <Wrapper>
            <Wrapper9>
              <g clipPath="url(#clip0_39_9410)" id="ic_list">
                <path d={svgPaths.p25da1f40} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_39_9410">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </Wrapper9>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
          </Wrapper>
          <Helper2DepthMenuText text="설문 응답" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
          <Helper1DepthMenuText text="관리" />
          <Helper2DepthMenuText text="제품 관리" />
          <Helper2DepthMenuText text="법인 관리" />
          <Helper2DepthMenuText text="이미지 관리" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
          <Helper1DepthMenuText text="권한" />
          <Helper2DepthMenuText text="사용자 권한" />
          <Helper2DepthMenuText text="그룹 권한" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[1700px] px-[24px] py-0 top-[224px] w-[168px]">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-[66px]">평가 항목</p>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0">
            <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none" />
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">통증 부위</p>
          </div>
          <Text13 text="피팅감" additionalClassNames="shrink-0" />
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <Text13 text="기능성" additionalClassNames="w-full" />
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <Text13 text="만족도" additionalClassNames="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[12px] h-[72px] items-center pl-[52px] pr-[244px] py-0 right-0 top-[60px] w-[1616px]" data-name="analyst top fixed">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
        <Title>
          <Text14 text="피스테런 3.0" />
          <IconButton />
        </Title>
        <AnalystTopFixedHelper />
        <Title>
          <Text14 text="가드런 맥스" />
          <IconButton />
        </Title>
        <AnalystTopFixedHelper />
        <Title>
          <Text14 text="스위프트인터벌" />
          <IconButton />
        </Title>
      </div>
    </div>
  );
}