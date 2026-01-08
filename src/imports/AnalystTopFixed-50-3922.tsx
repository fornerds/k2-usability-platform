import svgPaths from "./svg-wey71m343z";

function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[12px] py-0 relative w-full">{children}</div>
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
    <div 
      data-search-btn
      className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] cursor-pointer hover:bg-[rgba(0,0,0,0.02)]"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="ic_search">
            <path d={svgPaths.p18195a80} fill="var(--fill-0, #2A2C2C)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
        <p className="leading-[25px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

export default function AnalystTopFixed() {
  return (
    <div className="bg-white relative size-full" data-name="analyst top fixed">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_8px_12px_0px_rgba(13,14,17,0.04)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[52px] pr-[244px] py-0 relative size-full">
          <Title>
            <Text text="피스테런 3.0" />
            <IconButton />
          </Title>
          <AnalystTopFixedHelper />
          <Title>
            <Text text="가드런 맥스" />
            <IconButton />
          </Title>
          <AnalystTopFixedHelper />
          <Title>
            <Text text="스위프트인터벌" />
            <IconButton />
          </Title>
        </div>
      </div>
    </div>
  );
}