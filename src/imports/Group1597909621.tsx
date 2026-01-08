import svgPaths from "./svg-bknonxp9jy";
import clsx from "clsx";
import imgImage4 from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";
type BackgroundImage17Props = {
  additionalClassNames?: string;
};

function BackgroundImage17({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage17Props>) {
  return (
    <div className={clsx("h-[212px] relative w-[72px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0001 212">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage16({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-w-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function BackgroundImage15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
      <div className="flex-none rotate-[135deg]">{children}</div>
    </div>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}

function CardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage11 additionalClassNames="bg-white">
      <div className="content-stretch flex items-center px-[24px] py-[20px] relative w-full">{children}</div>
    </BackgroundImage11>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage11>
      <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">{children}</div>
    </BackgroundImage11>
  );
}

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <BackgroundImage12>{children}</BackgroundImage12>
    </div>
  );
}
type BackgroundImageAndText10Props = {
  text: string;
};

function BackgroundImageAndText10({ text, children }: React.PropsWithChildren<BackgroundImageAndText10Props>) {
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
type BackgroundImageAndText9Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText9({ text, additionalClassNames = "" }: BackgroundImageAndText9Props) {
  return (
    <div className={clsx("content-stretch flex items-center pl-[24px] pr-0 py-0 relative", additionalClassNames)}>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}
type Helper1DepthMenuBackgroundImageAndTextProps = {
  text: string;
};

function Helper1DepthMenuBackgroundImageAndText({ text }: Helper1DepthMenuBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Helper2DepthMenuBackgroundImageAndTextProps = {
  text: string;
};

function Helper2DepthMenuBackgroundImageAndText({ text }: Helper2DepthMenuBackgroundImageAndTextProps) {
  return (
    <BackgroundImage9>
      <BackgroundImage13>
        <g id="ic_dashboard">
          <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
        </g>
      </BackgroundImage13>
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">{text}</p>
    </BackgroundImage9>
  );
}
type NumBackgroundImageAndTextProps = {
  text: string;
};

function NumBackgroundImageAndText({ text }: NumBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-center pl-[24px] pr-[16px] py-0 relative shrink-0 w-[128px]">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[34px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap text-right tracking-[-0.26px]">{text}</p>
      <div className="content-stretch flex flex-col items-center justify-center pb-[5px] pt-0 px-0 relative shrink-0 w-[11px]">
        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{"점"}</p>
      </div>
    </div>
  );
}

function BackgroundImage8() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <BackgroundImage text="긍정" text1="12건" />
      <BackgroundImage text="중립" text1="4건" />
      <BackgroundImage text="부정" text1="3건" />
    </div>
  );
}

function BackgroundImage7() {
  return (
    <div className="[grid-area:1_/_1] ml-[66px] mt-[66px] relative size-[80px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <circle cx="40" cy="40" fill="var(--fill-0, white)" id="Ellipse 8312" r="40" />
      </svg>
    </div>
  );
}
type SliceBackgroundImage1Props = {
  additionalClassNames?: string;
};

function SliceBackgroundImage1({ additionalClassNames = "" }: SliceBackgroundImage1Props) {
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
type SliceBackgroundImageProps = {
  additionalClassNames?: string;
};

function SliceBackgroundImage({ additionalClassNames = "" }: SliceBackgroundImageProps) {
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
type BackgroundImageAndText8Props = {
  text: string;
};

function BackgroundImageAndText8({ text }: BackgroundImageAndText8Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">{text}</p>
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
          <div className="bg-[#00b56b] rounded-[4px] shrink-0 size-[14px]" />
          <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{"긍정"}</p>
        </div>
        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
          <div className="bg-[#d4d4d4] rounded-[4px] shrink-0 size-[14px]" />
          <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{"중립"}</p>
        </div>
        <BackgroundImageAndText text="부정" />
      </div>
    </div>
  );
}
type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <BackgroundImageAndText10 text={text}>
      <path d="M0 0.5H728" id="Vector 9744" stroke="var(--stroke-0, #0C0F0F)" strokeDasharray="4 4" strokeOpacity="0.13" />
    </BackgroundImageAndText10>
  );
}
type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <BackgroundImageAndText10 text={text}>
      <path d="M0 0.5H728" id="Vector 9743" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
    </BackgroundImageAndText10>
  );
}

function BackgroundImage6() {
  return (
    <BackgroundImage14>
      <div className="relative size-[10px]" data-name="Beak (Stroke)">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path clipRule="evenodd" d="M0 10H10V0H8.75V8.75H0V10Z" fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" fillRule="evenodd" id="Beak (Stroke)" />
          </svg>
        </div>
      </div>
    </BackgroundImage14>
  );
}

function BackgroundImage5() {
  return (
    <BackgroundImage14>
      <div className="relative size-[10px]" data-name="Beak">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, white)" id="Beak" />
          </svg>
        </div>
      </div>
    </BackgroundImage14>
  );
}
type BackgroundImage4Props = {
  text: string;
  text1: string;
};

function BackgroundImage4({ text, text1 }: BackgroundImage4Props) {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{text1}</p>
    </div>
  );
}

function GroupBackgroundImage() {
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
type BackgroundImageAndText5Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText5({ text, additionalClassNames = "" }: BackgroundImageAndText5Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
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
type DotBackgroundImageProps = {
  additionalClassNames?: string;
};

function DotBackgroundImage({ additionalClassNames = "" }: DotBackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[10px] top-[calc(50%-0.5px)] translate-y-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="dot">
          <circle cx="5" cy="5" fill="var(--fill-0, #1E2020)" id="Ellipse 8" r="5" />
        </g>
      </svg>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
  return (
    <div className={clsx("absolute bg-[#1e2020] content-stretch flex flex-col items-center px-[10px] py-[4px] rounded-[4px] top-[48px] translate-x-[-50%]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-center text-nowrap text-white">{text}</p>
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
        <div className="basis-0 grow h-[20px] min-h-px min-w-px rounded-[4px] shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 118, 251) 0%, rgb(77, 250, 214) 25%, rgb(5, 254, 27) 50%, rgb(255, 237, 53) 75%, rgb(255, 4, 2) 100%)" }} />
        <div className="absolute content-stretch flex h-[12px] items-center justify-between left-0 opacity-60 px-[12px] py-0 top-[4px] w-[768px]">
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[6px] rounded-[4px] shrink-0 w-[2px]" />
          <div className="bg-[rgba(255,255,255,0.82)] h-[8px] rounded-[4px] shrink-0 w-[2px]" />
        </div>
        <div className="absolute bg-white h-[20px] left-[234px] top-0 w-[4px]" />
        <div className="absolute bg-white h-[20px] left-[531px] top-0 w-[4px]" />
      </div>
      <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] items-center justify-between leading-[17px] not-italic relative shrink-0 text-[12px] text-center w-full">
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(12,15,15,0.29)] w-[22px]">{"-50"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"-40"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"-30"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"-20"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#1a9664] w-[22px]">{"-10"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"0"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"10"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] w-[22px]">{"20"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"30"}</p>
        <p className="-webkit-box opacity-0 overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] w-[22px]">{"40"}</p>
        <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[rgba(12,15,15,0.29)] w-[22px]">{"50"}</p>
      </div>
    </div>
  );
}

function Frame1597910750BackgroundImage() {
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
type Helper2DepthTabItemBackgroundImageAndTextProps = {
  text: string;
};

function Helper2DepthTabItemBackgroundImageAndText({ text }: Helper2DepthTabItemBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">{text}</p>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{"개별응답보기"}</p>
        <BackgroundImage15>
          <g id="ic_chevron_right">
            <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
          </g>
        </BackgroundImage15>
      </div>
    </div>
  );
}
type CommentBackgroundImageAndTextProps = {
  text: string;
};

function CommentBackgroundImageAndText({ text }: CommentBackgroundImageAndTextProps) {
  return (
    <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BackgroundImage16>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <BackgroundImage15>
              <g id="ic_thumb up">
                <path d={svgPaths.p3d297b00} fill="var(--fill-0, #009759)" id="Vector" />
              </g>
            </BackgroundImage15>
            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] text-[12px] text-nowrap">{"긍정"}</p>
          </div>
          <BackgroundImage2 />
          <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{"박성한"}</p>
        </div>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{text}</p>
      </BackgroundImage16>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <BackgroundImage16>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <BackgroundImage15>
            <g id="ic_thumb down">
              <path d={svgPaths.p36588100} fill="var(--fill-0, #FF253F)" id="Vector" />
            </g>
          </BackgroundImage15>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ff253f] text-[12px] text-nowrap">{"부정"}</p>
        </div>
        <BackgroundImage2 />
        <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{"나성윤"}</p>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{text}</p>
    </BackgroundImage16>
  );
}

function BackgroundImage2() {
  return (
    <div className="h-[12px] relative shrink-0 w-0">
      <div className="absolute inset-[-8.33%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
          <path d="M1 1V13" id="Vector 9740" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage1() {
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
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">{text1}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="단일">
        <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[356px] top-[172px] w-[1320px]">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="title">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
              <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">통증 부위</p>
              <div className="bg-white content-stretch flex gap-[2px] h-[40px] items-center justify-center opacity-0 px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">개별응답보기</p>
              </div>
            </div>
            <div className="relative rounded-[12px] shrink-0 w-full" data-name="contents">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[24px] items-center pb-0 pt-[24px] px-[24px] relative w-full">
                  <div className="content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[480px]">
                    <div className="relative shrink-0 w-full" data-name="통증부위">
                      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
                      <div className="flex flex-col justify-center size-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pl-0 pr-[24px] py-0 relative w-full">
                          <div className="h-[240px] relative rounded-[12px] shrink-0 w-full" data-name="img">
                            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
                                <div className="content-stretch flex items-center justify-center relative shrink-0">
                                  <div className="absolute left-1/2 size-[288px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image 4">
                                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
                                  </div>
                                </div>
                                <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[204px] translate-x-[-50%]" data-name="label">
                                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                    <div className="relative shrink-0 size-[14px]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p26976600} fill="var(--fill-0, #00B56B)" id="Rectangle 34635940" />
                                      </svg>
                                    </div>
                                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">긍정</p>
                                  </div>
                                  <BackgroundImageAndText text="부정" />
                                </div>
                                <div className="absolute h-[78.4px] left-[26.67%] right-[26.77%] top-[calc(50%-17.5px)] translate-y-[-50%]">
                                  <div className="absolute inset-[0_-1.88%_-10.2%_-1.88%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220.349 86.4">
                                      <g id="Group 1597909515">
                                        <g filter="url(#filter0_d_43_20167)" id="Ellipse 1">
                                          <circle cx="82.8504" cy="26.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                          <circle cx="82.8504" cy="26.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter1_d_43_20167)" id="Ellipse 2">
                                          <circle cx="69.5496" cy="18.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                          <circle cx="69.5496" cy="18.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter2_d_43_20167)" id="Ellipse 9">
                                          <circle cx="61.95" cy="29.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                          <circle cx="61.95" cy="29.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter3_d_43_20167)" id="Ellipse 3">
                                          <circle cx="50.5496" cy="69.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                          <circle cx="50.5496" cy="69.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter4_d_43_20167)" id="Ellipse 7">
                                          <circle cx="210.649" cy="28.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                          <circle cx="210.649" cy="28.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter5_d_43_20167)" id="Ellipse 11">
                                          <circle cx="168.85" cy="25.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                          <circle cx="168.85" cy="25.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter6_d_43_20167)" id="Ellipse 5">
                                          <circle cx="9.7" cy="47.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                          <circle cx="9.7" cy="47.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter7_d_43_20167)" id="Ellipse 6">
                                          <circle cx="39.1492" cy="72.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                          <circle cx="39.1492" cy="72.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g filter="url(#filter8_d_43_20167)" id="Ellipse 4">
                                          <circle cx="112.3" cy="5.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                          <circle cx="112.3" cy="5.7" r="5.2" stroke="var(--stroke-0, white)" />
                                        </g>
                                        <g id="Group 1597909595">
                                          <g filter="url(#filter9_d_43_20167)" id="Ellipse 8">
                                            <circle cx="188.8" cy="14.6969" fill="var(--fill-0, #FF253F)" r="11.4" />
                                            <circle cx="188.8" cy="14.6969" r="10.9" stroke="var(--stroke-0, white)" />
                                          </g>
                                          <g filter="url(#filter10_d_43_20167)" id="Ellipse 12">
                                            <circle cx="188.801" cy="14.7" fill="var(--fill-0, white)" r="5.7" />
                                          </g>
                                        </g>
                                      </g>
                                      <defs>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter0_d_43_20167" width="19.4" x="73.1504" y="21">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter1_d_43_20167" width="19.4" x="59.8496" y="13">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter2_d_43_20167" width="19.4" x="52.25" y="24">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter3_d_43_20167" width="19.4" x="40.8496" y="64">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter4_d_43_20167" width="19.4" x="200.949" y="23">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter5_d_43_20167" width="19.4" x="159.15" y="20">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter6_d_43_20167" width="19.4" x="0" y="42">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter7_d_43_20167" width="19.4" x="29.4492" y="67">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter8_d_43_20167" width="19.4" x="102.6" y="0">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.8" id="filter9_d_43_20167" width="30.8" x="173.4" y="3.29688">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter10_d_43_20167" width="19.4" x="179.101" y="9">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                          <feOffset dy="4" />
                                          <feGaussianBlur stdDeviation="2" />
                                          <feComposite in2="hardAlpha" operator="out" />
                                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                        </filter>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="피드백 정보">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="flex flex-col justify-center size-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative w-full">
                                <div className="content-stretch flex gap-[2px] h-[36px] items-start relative rounded-[8px] shrink-0 w-full" data-name="data">
                                  <div className="bg-[#00b56b] content-stretch flex h-full items-center justify-center relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[270px]">
                                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">64%</p>
                                  </div>
                                  <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0">
                                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">36%</p>
                                  </div>
                                </div>
                                <div className="h-[60px] relative shrink-0 w-full" data-name="info">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
                                      <BackgroundImage text="총 응답수" text1="22건" />
                                      <BackgroundImage1 />
                                      <BackgroundImage text="긍정" text1="15건" />
                                      <BackgroundImage1 />
                                      <BackgroundImage text="부정" text1="8건" />
                                      <BackgroundImage1 />
                                      <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[100px]">
                                        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">가장 많은 응답 부위</p>
                                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">발등</p>
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
                  <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                    <div className="basis-0 bg-white content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="피드백">
                      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">사용자 피드백</p>
                      <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="comment">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                            <BackgroundImageAndText1 text="착용감이 너무 딱딱하고 장시간 신으면 발이 아픕니다." />
                          </div>
                          <CommentBackgroundImageAndText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                          <CommentBackgroundImageAndText text="사이즈가 정사이즈라 딱 맞고 편해요." />
                          <CommentBackgroundImageAndText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                          <CommentBackgroundImageAndText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                        </div>
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                          <CommentBackgroundImageAndText text="디자인, 착용감, 내구성 모두 만족스럽습니다. 재구매 의향이 있어요!" />
                          <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="comment">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            <BackgroundImageAndText1 text="디자인, 착용감, 내구성 모두 만족스럽습니다. 재구매 의향이 있어요! 다만 발볼이 다른 브랜드에 비해 좀 좁아요" />
                          </div>
                          <CommentBackgroundImageAndText text="발을 감싸주는 느낌이 좋고, 장시간 착용해도 편안합니다. 다만 점프를 할때 발 뒤꿈치가 살짝 들리는 느낌이 들어요." />
                          {[...Array(2).keys()].map((_, i) => (
                            <CommentBackgroundImageAndText text="무게가 꽤 있어서 장시간 신기엔 부담됩니다." />
                          ))}
                        </div>
                      </div>
                      <div className="absolute bg-gradient-to-b bottom-px from-[rgba(255,255,255,0)] h-[33px] left-0 opacity-[0.48] to-[rgba(0,0,0,0.12)] w-[768px]" data-name="dimmed" />
                    </div>
                  </div>
                  <div className="absolute bg-[#b8b9b9] h-[100px] right-[20px] rounded-[100px] top-[78px] w-[8px]" data-name="Scrollbar" />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <BackgroundImageAndText2 text="피팅감" />
            <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shrink-0 w-full">
              <div className="content-stretch flex items-center relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="bg-white relative rounded-[7px] shrink-0" data-name="_2depth Tab Item">
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">전체</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                  </div>
                  <Helper2DepthTabItemBackgroundImageAndText text="신발 길이" />
                  <Frame1597910750BackgroundImage />
                  <Helper2DepthTabItemBackgroundImageAndText text="발볼 둘레" />
                  <Frame1597910750BackgroundImage />
                  <Helper2DepthTabItemBackgroundImageAndText text="발등" />
                  <Frame1597910750BackgroundImage />
                  <Helper2DepthTabItemBackgroundImageAndText text="발 뒤꿈치" />
                </div>
              </div>
              <BackgroundImage10>
                <div className="h-[324px] relative shrink-0 w-[480px]">
                  <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)] px-[12px] py-[8px] rounded-[8px] top-[267px] translate-x-[-50%]" data-name="label">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                        <div className="bg-[#2976fb] rounded-[4px] shrink-0 size-[14px]" />
                        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">헐거움</p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                        <div className="bg-[#00e613] rounded-[4px] shrink-0 size-[14px]" />
                        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">적당함</p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                        <div className="bg-[#ff0402] rounded-[4px] shrink-0 size-[14px]" />
                        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">압박감</p>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[12px] h-[212px] items-center left-[162px] top-[40px]" data-name="heatmap">
                      <BackgroundImage17 additionalClassNames="shrink-0">
                        <g id="Group 1597909599">
                          <g id="Vector 37">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                          <g id="Mask group">
                            <mask height="212" id="mask0_43_20149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                              <g id="Vector 39">
                                <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                              </g>
                            </mask>
                            <g mask="url(#mask0_43_20149)">
                              <g id="Ellipse 43">
                                <g filter="url(#filter0_f_43_20149)" id="Ellipse 35">
                                  <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_43_20149)" r="37.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Vector 38">
                            <path d={svgPaths.p23bae100} fill="var(--fill-0, #F4F3F3)" />
                            <path d={svgPaths.pb1ff8c0} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                          <g id="Mask group_2">
                            <mask height="212" id="mask1_43_20149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                              <g id="Vector 30">
                                <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                <path d={svgPaths.pcb25f80} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                              </g>
                            </mask>
                            <g mask="url(#mask1_43_20149)">
                              <g id="Ellipse 39">
                                <g filter="url(#filter1_f_43_20149)" id="Ellipse 35_2">
                                  <circle cx="45.5" cy="212.5" fill="url(#paint1_radial_43_20149)" r="28.5" />
                                </g>
                              </g>
                              <g id="Ellipse 42">
                                <g filter="url(#filter2_f_43_20149)" id="Ellipse 35_3">
                                  <ellipse cx="34" cy="86" fill="url(#paint2_radial_43_20149)" rx="27" ry="38" />
                                </g>
                              </g>
                              <g id="Ellipse 40">
                                <g filter="url(#filter3_f_43_20149)" id="Ellipse 35_4">
                                  <ellipse cx="-5.5" cy="60.5" fill="url(#paint3_radial_43_20149)" rx="16.5" ry="28.5" />
                                </g>
                              </g>
                              <g id="Ellipse 41">
                                <g filter="url(#filter4_f_43_20149)" id="Ellipse 35_5">
                                  <ellipse cx="72.5" cy="60.5" fill="url(#paint4_radial_43_20149)" rx="16.5" ry="28.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_43_20149" width="91" x="-3" y="-14">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="4" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter1_f_43_20149" width="77" x="7" y="174">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96" id="filter2_f_43_20149" width="74" x="-3" y="38">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter3_f_43_20149" width="53" x="-32" y="22">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter4_f_43_20149" width="53" x="46" y="22">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                          </filter>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_43_20149" r="1">
                            <stop offset="0.25" stopColor="#00FF00" />
                            <stop offset="0.7" stopColor="#1CFAB0" />
                            <stop offset="0.845" stopColor="#B0FF49" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(45.5 212.5) rotate(90) scale(28.5)" gradientUnits="userSpaceOnUse" id="paint1_radial_43_20149" r="1">
                            <stop offset="0.25" stopColor="#00FF00" />
                            <stop offset="0.7" stopColor="#1CFAB0" />
                            <stop offset="0.845" stopColor="#B0FF49" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(34 86) rotate(90) scale(38 27)" gradientUnits="userSpaceOnUse" id="paint2_radial_43_20149" r="1">
                            <stop offset="0.25" stopColor="#FF0000" />
                            <stop offset="0.7" stopColor="#FA9E1C" />
                            <stop offset="0.845" stopColor="#FFF649" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(-5.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint3_radial_43_20149" r="1">
                            <stop offset="0.25" stopColor="#2873FB" />
                            <stop offset="0.7" stopColor="#1CC6FA" />
                            <stop offset="0.845" stopColor="#49FFF9" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(72.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint4_radial_43_20149" r="1">
                            <stop offset="0.25" stopColor="#2873FB" />
                            <stop offset="0.7" stopColor="#1CC6FA" />
                            <stop offset="0.845" stopColor="#49FFF9" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </BackgroundImage17>
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                          <BackgroundImage17>
                            <g id="Group 1597909605">
                              <g id="Vector 37">
                                <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                <path d={svgPaths.p35cacb00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                              </g>
                              <g id="Mask group">
                                <mask height="212" id="mask0_43_20109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                                  <g id="Vector 39">
                                    <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                    <path d={svgPaths.p35cacb00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_43_20109)">
                                  <g id="Ellipse 43">
                                    <g filter="url(#filter0_f_43_20109)" id="Ellipse 35">
                                      <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_43_20109)" r="37.5" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g id="Vector 38">
                                <path d={svgPaths.p23bae100} fill="var(--fill-0, #F4F3F3)" />
                                <path d={svgPaths.pb1ff8c0} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                              </g>
                              <g id="Mask group_2">
                                <mask height="212" id="mask1_43_20109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                                  <g id="Vector 30">
                                    <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                    <path d={svgPaths.pcb25f80} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                                  </g>
                                </mask>
                                <g mask="url(#mask1_43_20109)">
                                  <g id="Ellipse 39">
                                    <g filter="url(#filter1_f_43_20109)" id="Ellipse 35_2">
                                      <circle cx="45.5" cy="212.5" fill="url(#paint1_radial_43_20109)" r="28.5" />
                                    </g>
                                  </g>
                                  <g id="Ellipse 42">
                                    <g filter="url(#filter2_f_43_20109)" id="Ellipse 35_3">
                                      <ellipse cx="34" cy="86" fill="url(#paint2_radial_43_20109)" rx="27" ry="38" />
                                    </g>
                                  </g>
                                  <g id="Ellipse 40">
                                    <g filter="url(#filter3_f_43_20109)" id="Ellipse 35_4">
                                      <ellipse cx="-5.5" cy="60.5" fill="url(#paint3_radial_43_20109)" rx="16.5" ry="28.5" />
                                    </g>
                                  </g>
                                  <g id="Ellipse 41">
                                    <g filter="url(#filter4_f_43_20109)" id="Ellipse 35_5">
                                      <ellipse cx="72.5" cy="60.5" fill="url(#paint4_radial_43_20109)" rx="16.5" ry="28.5" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_43_20109" width="91" x="-3" y="-14">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="4" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter1_f_43_20109" width="77" x="7" y="174">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96" id="filter2_f_43_20109" width="74" x="-3" y="38">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter3_f_43_20109" width="53" x="-32" y="22">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter4_f_43_20109" width="53" x="46" y="22">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                              </filter>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_43_20109" r="1">
                                <stop offset="0.25" stopColor="#00FF00" />
                                <stop offset="0.7" stopColor="#1CFAB0" />
                                <stop offset="0.845" stopColor="#B0FF49" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(45.5 212.5) rotate(90) scale(28.5)" gradientUnits="userSpaceOnUse" id="paint1_radial_43_20109" r="1">
                                <stop offset="0.25" stopColor="#00FF00" />
                                <stop offset="0.7" stopColor="#1CFAB0" />
                                <stop offset="0.845" stopColor="#B0FF49" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(34 86) rotate(90) scale(38 27)" gradientUnits="userSpaceOnUse" id="paint2_radial_43_20109" r="1">
                                <stop offset="0.25" stopColor="#FF0000" />
                                <stop offset="0.7" stopColor="#FA9E1C" />
                                <stop offset="0.845" stopColor="#FFF649" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(-5.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint3_radial_43_20109" r="1">
                                <stop offset="0.25" stopColor="#2873FB" />
                                <stop offset="0.7" stopColor="#1CC6FA" />
                                <stop offset="0.845" stopColor="#49FFF9" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(72.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint4_radial_43_20109" r="1">
                                <stop offset="0.25" stopColor="#2873FB" />
                                <stop offset="0.7" stopColor="#1CC6FA" />
                                <stop offset="0.845" stopColor="#49FFF9" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                              </radialGradient>
                            </defs>
                          </BackgroundImage17>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative rounded-[12px] shrink-0">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">신발 길이</p>
                    <BackgroundImage3 />
                    <div className="absolute contents left-1/2 top-[29px] translate-x-[-50%]">
                      <BackgroundImageAndText3 text="0" additionalClassNames="left-1/2" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-1/2 rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                      <DotBackgroundImage additionalClassNames="left-[49.35%] right-[49.35%]" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발볼 둘레</p>
                    <BackgroundImage3 />
                    <div className="absolute contents left-[calc(50%-223px)] top-[29px] translate-x-[-50%]">
                      <BackgroundImageAndText3 text="-30" additionalClassNames="left-[calc(50%-223px)]" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%-223px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                      <DotBackgroundImage additionalClassNames="left-[20.31%] right-[78.39%]" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발등</p>
                    <BackgroundImage3 />
                    <div className="absolute contents left-[calc(50%+299px)] top-[29px] translate-x-[-50%]">
                      <BackgroundImageAndText3 text="40" additionalClassNames="left-[calc(50%+299px)]" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+299px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                      <DotBackgroundImage additionalClassNames="left-[88.28%] right-[10.42%]" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발 뒤꿈치</p>
                    <BackgroundImage3 />
                    <div className="absolute contents left-[calc(50%+75px)] top-[29px] translate-x-[-50%]">
                      <BackgroundImageAndText3 text="10" additionalClassNames="left-[calc(50%+75px)]" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+75px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                      <DotBackgroundImage additionalClassNames="left-[59.11%] right-[39.58%]" />
                    </div>
                  </div>
                </div>
              </BackgroundImage10>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <BackgroundImageAndText2 text="기능성" />
            <BackgroundImage11>
              <div className="content-stretch flex items-center p-[24px] relative w-full">
                <div className="basis-0 content-stretch flex gap-[24px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="bg-white content-stretch flex gap-[10px] h-[352px] items-center justify-center relative shrink-0 w-[480px]">
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
                          <BackgroundImageAndText4 text="100" />
                          <BackgroundImageAndText4 text="75" />
                          <BackgroundImageAndText4 text="50" />
                          <BackgroundImageAndText4 text="25" />
                          <BackgroundImageAndText4 text="0" />
                        </div>
                        <div className="[grid-area:1_/_1] h-[204px] ml-[67px] mt-[17px] relative w-[124px]">
                          <div className="absolute inset-[0_-4.46%_-5.42%_-4.46%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135.067 215.067">
                              <g id="Group 1597909614">
                                <path d={svgPaths.p36a18f00} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.3" id="Polygon 70" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" />
                                <g filter="url(#filter0_d_43_20035)" id="Ellipse 13">
                                  <circle cx="58.5333" cy="6" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="58.5333" cy="6" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter1_d_43_20035)" id="Ellipse 14">
                                  <circle cx="32.5333" cy="88" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="32.5333" cy="88" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter2_d_43_20035)" id="Ellipse 15">
                                  <circle cx="11.5333" cy="130" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="11.5333" cy="130" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter3_d_43_20035)" id="Ellipse 16">
                                  <circle cx="58.5333" cy="198" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="58.5333" cy="198" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter4_d_43_20035)" id="Ellipse 17">
                                  <circle cx="123.533" cy="141" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="123.533" cy="141" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                                <g filter="url(#filter5_d_43_20035)" id="Ellipse 18">
                                  <circle cx="123.533" cy="63.5" fill="var(--fill-0, white)" r="6" />
                                  <circle cx="123.533" cy="63.5" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                                </g>
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter0_d_43_20035" width="23.0667" x="47" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="5.53333" />
                                  <feGaussianBlur stdDeviation="2.76667" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20035" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20035" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter1_d_43_20035" width="23.0667" x="21" y="82">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="5.53333" />
                                  <feGaussianBlur stdDeviation="2.76667" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20035" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20035" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter2_d_43_20035" width="23.0667" x="0" y="124">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="5.53333" />
                                  <feGaussianBlur stdDeviation="2.76667" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20035" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20035" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter3_d_43_20035" width="23.0667" x="47" y="192">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="5.53333" />
                                  <feGaussianBlur stdDeviation="2.76667" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20035" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20035" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter4_d_43_20035" width="23.0667" x="112" y="135">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="5.53333" />
                                  <feGaussianBlur stdDeviation="2.76667" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20035" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20035" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter5_d_43_20035" width="23.0667" x="112" y="57.5">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="5.53333" />
                                  <feGaussianBlur stdDeviation="2.76667" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20035" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20035" mode="normal" result="shape" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <BackgroundImageAndText5 text="탄성" additionalClassNames="justify-center left-[-41px] top-[53.5px]" />
                      <div className="absolute bg-[rgba(78,160,255,0.1)] content-stretch flex flex-col items-start left-[94px] px-[8px] py-[4px] rounded-[4px] top-[-36px]">
                        <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">통기성</p>
                        </div>
                      </div>
                      <BackgroundImageAndText5 text="쿠셔닝" additionalClassNames="left-[-53px] top-[180.5px]" />
                      <BackgroundImageAndText5 text="편안함" additionalClassNames="left-[240px] top-[53.5px]" />
                      <BackgroundImageAndText5 text="유연성" additionalClassNames="left-[240px] top-[180.5px]" />
                      <BackgroundImageAndText5 text="안정성" additionalClassNames="justify-end left-[94px] top-[248px]" />
                    </div>
                    <div className="absolute content-stretch flex gap-[4px] items-center left-[231px] top-[40.5px]" data-name="tooltip">
                      <div className="relative shadow-[0px_1.469px_4.406px_0px_rgba(0,0,0,0.1),0px_1.469px_2.938px_-1.469px_rgba(0,0,0,0.1)] shrink-0 size-[47px]" data-name="Util / Cursor & Interaction">
                        <GroupBackgroundImage />
                      </div>
                      <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[136px]">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                        <BackgroundImage4 text="매우나쁨" text1="2건" />
                        <BackgroundImage4 text="나쁨" text1="1건" />
                        <BackgroundImage4 text="보통" text1="5건" />
                        <BackgroundImage4 text="좋음" text1="11건" />
                        <BackgroundImage4 text="매우좋음" text1="8건" />
                        <BackgroundImage5 />
                        <BackgroundImage6 />
                      </div>
                    </div>
                  </div>
                  <div className="basis-0 bg-white content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px pb-[48px] pt-[24px] px-0 relative rounded-[12px] shrink-0">
                    <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">통기성</p>
                    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                      <BackgroundImageAndText6 text="100" />
                      <BackgroundImageAndText7 text="75" />
                      <BackgroundImageAndText7 text="50" />
                      <BackgroundImageAndText7 text="25" />
                      <BackgroundImageAndText6 text="0" />
                    </div>
                    <div className="absolute content-stretch flex gap-[140px] items-end justify-center left-[calc(50%+20px)] top-[calc(50%+41.5px)] translate-x-[-50%] translate-y-[-50%] w-[666px]">
                      <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[92px]">
                        <div className="bg-[#d4d4d4] h-[144px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[148px]" data-name="bar" />
                        <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[45.5px] not-italic overflow-ellipsis overflow-hidden text-[#2a2c2c] text-[16px] text-center text-nowrap top-[64px] tracking-[-0.08px] translate-x-[-50%]">68</p>
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-[min-content]">카테고리 평균</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[92px]">
                        <div className="bg-[#0085ec] h-[184px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[148px]" data-name="bar" />
                        <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[46px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[84px] tracking-[-0.08px] translate-x-[-50%]">87</p>
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">피스테런3.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage11>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <BackgroundImageAndText2 text="만족도" />
            <BackgroundImage10>
              <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="bg-white content-stretch flex flex-col gap-[20px] items-center relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
                  <BackgroundImageAndText8 text="착용감" />
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
                      <SliceBackgroundImage additionalClassNames="ml-0" />
                      <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[40.47px] mt-[36px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">13%</p>
                    </div>
                    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[53px] opacity-20 place-items-start relative">
                      <SliceBackgroundImage1 additionalClassNames="mt-0" />
                      <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[19.67px] mt-[41px] not-italic overflow-ellipsis overflow-hidden relative text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">15%</p>
                    </div>
                    <BackgroundImage7 />
                  </div>
                  <div className="absolute content-stretch flex gap-[4px] items-center left-[345.5px] top-[86px]" data-name="tooltip">
                    <div className="relative shadow-[0px_1.469px_4.406px_0px_rgba(0,0,0,0.1),0px_1.469px_2.938px_-1.469px_rgba(0,0,0,0.1)] shrink-0 size-[47px]" data-name="Util / Cursor & Interaction">
                      <GroupBackgroundImage />
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[136px]">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                      <BackgroundImage4 text="매우 만족" text1="7건" />
                      <BackgroundImage4 text="만족" text1="2건" />
                      <BackgroundImage4 text="약간 만족" text1="1건" />
                      <BackgroundImage5 />
                      <BackgroundImage6 />
                    </div>
                  </div>
                </div>
                <CardBackgroundImage>
                  <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="info">
                    <BackgroundImage8 />
                    <BackgroundImage1 />
                    <NumBackgroundImageAndText text="72" />
                  </div>
                </CardBackgroundImage>
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
                  <BackgroundImageAndText8 text="디자인" />
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Figpie">
                    <div className="[grid-area:1_/_1] h-[212px] ml-[14.2px] mt-0 relative w-[197.799px]" data-name="Slice - 12 (66.7%)">
                      <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 181, 107, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.799 212">
                          <path d={svgPaths.p838da00} fill="var(--fill-0, #00B56B)" id="Slice - 12 (66.7%)" stroke="var(--stroke-0, white)" />
                        </svg>
                      </div>
                    </div>
                    <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[152.67px] mt-[128px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">72%</p>
                    <SliceBackgroundImage1 additionalClassNames="mt-[53px]" />
                    <SliceBackgroundImage additionalClassNames="ml-[14.2px]" />
                    <BackgroundImage7 />
                    <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[54.67px] mt-[36px] not-italic overflow-ellipsis overflow-hidden relative text-[16px] text-nowrap text-white tracking-[-0.08px]">13%</p>
                    <p className="-webkit-box [grid-area:1_/_1] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] ml-[19.67px] mt-[94px] not-italic overflow-ellipsis overflow-hidden relative text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">15%</p>
                  </div>
                </div>
                <CardBackgroundImage>
                  <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="info">
                    <BackgroundImage8 />
                    <BackgroundImage1 />
                    <NumBackgroundImageAndText text="72" />
                  </div>
                </CardBackgroundImage>
              </div>
            </BackgroundImage10>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[2388px] items-start left-0 px-[16px] py-[20px] top-[60px] w-[304px]" data-name="LNB">
          <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
            <Helper2DepthMenuBackgroundImageAndText text="대시보드" />
            <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
              <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <BackgroundImage12>
                <BackgroundImage13>
                  <g clipPath="url(#clip0_4_9912)" id="ic_data">
                    <path d={svgPaths.pbeab100} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_9912">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </BackgroundImage13>
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">리포트</p>
              </BackgroundImage12>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
            <Helper1DepthMenuBackgroundImageAndText text="설문" />
            <BackgroundImage9>
              <BackgroundImage13>
                <g clipPath="url(#clip0_31_17872)" id="ic_survey">
                  <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_31_17872">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </BackgroundImage13>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문지</p>
            </BackgroundImage9>
            <BackgroundImage9>
              <BackgroundImage13>
                <g clipPath="url(#clip0_39_9410)" id="ic_list">
                  <path d={svgPaths.p25da1f40} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_39_9410">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </BackgroundImage13>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
            </BackgroundImage9>
            <Helper2DepthMenuBackgroundImageAndText text="설문 응답" />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
            <Helper1DepthMenuBackgroundImageAndText text="관리" />
            <Helper2DepthMenuBackgroundImageAndText text="제품 관리" />
            <Helper2DepthMenuBackgroundImageAndText text="법인 관리" />
            <Helper2DepthMenuBackgroundImageAndText text="이미지 관리" />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
            <Helper1DepthMenuBackgroundImageAndText text="권한" />
            <Helper2DepthMenuBackgroundImageAndText text="사용자 권한" />
            <Helper2DepthMenuBackgroundImageAndText text="그룹 권한" />
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
            <BackgroundImageAndText9 text="피팅감" additionalClassNames="shrink-0" />
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <BackgroundImageAndText9 text="기능성" additionalClassNames="w-full" />
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <BackgroundImageAndText9 text="만족도" additionalClassNames="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex h-[72px] items-center pl-[52px] pr-[244px] py-0 right-0 top-[60px] w-[1616px]" data-name="analyst top fixed">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[24px] items-center px-[12px] py-0 relative w-full">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="제품">
                  <div className="basis-0 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
                    <p className="leading-[25px] overflow-ellipsis overflow-hidden">피스테런 3.0</p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <BackgroundImage15>
                    <g id="ic_search">
                      <path d={svgPaths.p18195a80} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                    </g>
                  </BackgroundImage15>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-between left-0 px-[24px] py-[16px] top-0 w-[1920px]" data-name="GNB">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="logo">
          <div className="h-[22px] relative shrink-0 w-[79px]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 22">
                <path d={svgPaths.p1c055c72} fill="var(--fill-0, #1E2020)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="h-[16px] relative shrink-0 w-0">
            <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
                <path d="M0.5 0.5V16.5" id="Vector 19" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" />
              </svg>
            </div>
          </div>
          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">사용성 평가 플랫폼</p>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] h-[34px] items-start relative shrink-0 w-[160px]" data-name="gnb user select">
          <div className="relative rounded-[30px] shrink-0 w-full" data-name="select">
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[30px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[6px] relative w-full">
                <div className="content-stretch flex gap-[4px] items-center leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]" data-name="text">
                  <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">김이투</p>
                  <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">분석가</p>
                </div>
                <BackgroundImage15>
                  <g id="ic_chevron_down">
                    <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </BackgroundImage15>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}