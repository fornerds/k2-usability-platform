import clsx from "clsx";
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
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#1e2020] content-stretch flex flex-col items-center px-[10px] py-[4px] rounded-[4px] top-[48px] translate-x-[-50%]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-center text-nowrap text-white">{text}</p>
    </div>
  );
}

function BackgroundImage() {
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

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[12px] size-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">신발 길이</p>
        <BackgroundImage />
        <div className="absolute contents left-1/2 top-[29px] translate-x-[-50%]">
          <BackgroundImageAndText text="0" additionalClassNames="left-1/2" />
          <div className="absolute bg-[#1e2020] h-[16px] left-1/2 rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
          <DotBackgroundImage additionalClassNames="left-[49.35%] right-[49.35%]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발볼 둘레</p>
        <BackgroundImage />
        <div className="absolute contents left-[calc(50%-223px)] top-[29px] translate-x-[-50%]">
          <BackgroundImageAndText text="-30" additionalClassNames="left-[calc(50%-223px)]" />
          <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%-223px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
          <DotBackgroundImage additionalClassNames="left-[20.31%] right-[78.39%]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발등</p>
        <BackgroundImage />
        <div className="absolute contents left-[calc(50%+299px)] top-[29px] translate-x-[-50%]">
          <BackgroundImageAndText text="40" additionalClassNames="left-[calc(50%+299px)]" />
          <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+299px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
          <DotBackgroundImage additionalClassNames="left-[88.28%] right-[10.42%]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발 뒤꿈치</p>
        <BackgroundImage />
        <div className="absolute contents left-[calc(50%+75px)] top-[29px] translate-x-[-50%]">
          <BackgroundImageAndText text="10" additionalClassNames="left-[calc(50%+75px)]" />
          <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+75px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
          <DotBackgroundImage additionalClassNames="left-[59.11%] right-[39.58%]" />
        </div>
      </div>
    </div>
  );
}