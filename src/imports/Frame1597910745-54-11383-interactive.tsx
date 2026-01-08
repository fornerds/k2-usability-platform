import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import svgPaths from "./svg-717k7rx6we";
import clsx from "clsx";

function Frame1597910758BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
      <div className="flex-none rotate-[135deg]">{children}</div>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

type BackgroundImage3Props = {
  showTooltip: boolean;
  onInfoClick: () => void;
  tooltipData: {
    totalCount: string;
    loose: string;
    fit: string;
    tight: string;
  };
};

function BackgroundImage3({ children, showTooltip, onInfoClick, tooltipData }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className="basis-0 grow h-[328px] min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center pb-[32px] pt-[20px] px-[16px] relative size-full">{children}</div>
      </div>
      {/* Info Icon - Clickable */}
      <div 
        className="absolute right-[20px] size-[20px] top-[20px] cursor-pointer hover:opacity-70 z-10"
        onClick={onInfoClick}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="ic_info">
            <path d={svgPaths.p3d481a00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
          </g>
        </svg>
      </div>
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] right-[16px] rounded-[8px] shrink-0 top-[48px] w-[136px] z-20">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
          <BackgroundImage2 text="총 응답수" text1={tooltipData.totalCount} />
          <BackgroundImage2 text="헐거움" text1={tooltipData.loose} />
          <BackgroundImage2 text="적당함" text1={tooltipData.fit} />
          <BackgroundImage2 text="압박감" text1={tooltipData.tight} />
          <Frame1597910758BackgroundImage>
            <div className="relative size-[10px]" data-name="Beak">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, white)" id="Beak" />
                </svg>
              </div>
            </div>
          </Frame1597910758BackgroundImage>
          <Frame1597910758BackgroundImage>
            <div className="relative size-[10px]" data-name="Beak (Stroke)">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path clipRule="evenodd" d="M0 10H10V0H8.75V8.75H0V10Z" fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" fillRule="evenodd" id="Beak (Stroke)" />
                </svg>
              </div>
            </div>
          </Frame1597910758BackgroundImage>
        </div>
      )}
    </div>
  );
}

type SegmentedControlItemBackgroundImageProps = {
  additionalClassNames?: string;
};

function SegmentedControlItemBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<SegmentedControlItemBackgroundImageProps>) {
  return (
    <div className={clsx("basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 cursor-pointer", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

type BackgroundImage2Props = {
  text: string;
  text1: string;
};

function BackgroundImage2({ text, text1 }: BackgroundImage2Props) {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{text1}</p>
    </div>
  );
}

type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("absolute aspect-[16/16] translate-y-[-50%]", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #1E2020)" id="Ellipse 8" r="4" />
        </svg>
      </div>
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#1e2020] content-stretch flex flex-col items-center px-[10px] py-[4px] rounded-[4px] top-[24px] translate-x-[-50%]", additionalClassNames)}>
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
        <div className="absolute content-stretch flex h-[12px] items-center justify-between left-0 opacity-60 px-[12px] py-0 top-[4px] w-full">
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
        <div className="absolute bg-white h-[20px] w-[4px] top-0" style={{ left: '30%' }} />
        <div className="absolute bg-white h-[20px] w-[4px] top-0" style={{ left: '70%' }} />
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] items-center justify-between leading-[17px] not-italic px-[2px] py-0 relative text-[12px] text-center w-full">
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
      </div>
    </div>
  );
}

function LabelBackgroundImage() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center opacity-0 relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
        <div className="bg-[#2873fb] rounded-[4px] shrink-0 size-[14px]" />
        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{"헐거움"}</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
        <div className="bg-[#0f0] rounded-[4px] shrink-0 size-[14px]" />
        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{"적당함"}</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
        <div className="bg-[red] rounded-[4px] shrink-0 size-[14px]" />
        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{"압박감"}</p>
      </div>
    </div>
  );
}

function ContentsTabsDividerBackgroundImage() {
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

type ContentsTabItemBackgroundImageAndTextProps = {
  text: string;
};

function ContentsTabItemBackgroundImageAndText({ text }: ContentsTabItemBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.29)] text-justify text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const pointerContainerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const productData = [
    { score: "-40", totalCount: "19건", loose: "2건", fit: "14건", tight: "3건", position: "calc(50% - 146px)" },
    { score: "0", totalCount: "15건", loose: "1건", fit: "12건", tight: "2건", position: "50%" },
    { score: "35", totalCount: "12건", loose: "3건", fit: "7건", tight: "2건", position: "calc(50% + 129px)" }
  ];

  useEffect(() => {
    // Animate pointer containers from center (50%) to their actual positions
    productData.forEach((product, index) => {
      const containerRef = pointerContainerRefs.current[index];
      if (!containerRef) return;

      // Animate the container itself (all children will move with it)
      d3.select(containerRef)
        .style("left", "50%")
        .transition()
        .duration(1500)
        .delay(index * 150)
        .ease(d3.easeCubicOut)
        .style("left", product.position);
    });
  }, []);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">피팅감</p>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.02)]" data-name="Label Button">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">개별응답보기</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.35002 14.6663L4.16669 13.483L9.65002 7.99967L4.16669 2.51634L5.35002 1.33301L12.0167 7.99967L5.35002 14.6663Z" fill="#2A2C2C"/>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tab/범례">
          <div className="content-stretch flex items-center relative shrink-0" data-name="contents Tabs">
            <div className="bg-white relative rounded-[7px] shrink-0" data-name="_contents Tab Item">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-justify text-nowrap tracking-[-0.042px]">신발 길이</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
            </div>
            <ContentsTabItemBackgroundImageAndText text="발볼 둘레" />
            <ContentsTabsDividerBackgroundImage />
            <ContentsTabItemBackgroundImageAndText text="발등" />
            <ContentsTabsDividerBackgroundImage />
            <ContentsTabItemBackgroundImageAndText text="발 뒤꿈치" />
          </div>
          <div className="content-stretch flex gap-[32px] items-center justify-end relative shrink-0 w-[635.5px]">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="label">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                <div className="bg-[#2976fb] rounded-[4px] shrink-0 size-[14px]" />
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">헐거움</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                <div className="bg-[#05fe1b] rounded-[4px] shrink-0 size-[14px]" />
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">적당함</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                <div className="bg-[#ff0402] rounded-[4px] shrink-0 size-[14px]" />
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">압박감</p>
              </div>
            </div>
            <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex h-[40px] items-start overflow-clip p-[4px] relative rounded-[6px] shrink-0 w-[104px]" data-name="Segmented Control">
              <SegmentedControlItemBackgroundImage>
                <BackgroundImage4>
                  <g id="ic_image">
                    <path d={svgPaths.pc98f9f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </BackgroundImage4>
              </SegmentedControlItemBackgroundImage>
              <SegmentedControlItemBackgroundImage additionalClassNames="bg-white shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)]">
                <BackgroundImage4>
                  <g id="ic_tune">
                    <path d={svgPaths.p34a10e80} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                </BackgroundImage4>
              </SegmentedControlItemBackgroundImage>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full">
          {productData.map((product, index) => (
            <BackgroundImage3
              key={index}
              showTooltip={activeTooltip === index}
              onInfoClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
              tooltipData={product}
            >
              <LabelBackgroundImage />
              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <BackgroundImage />
                  {index === 0 && (
                    <div 
                      ref={(el) => pointerContainerRefs.current[0] = el}
                      className="absolute contents left-[calc(50%-146px)] top-[7.15px] translate-x-[-50%]"
                    >
                      <BackgroundImageAndText text="-40" additionalClassNames="left-[calc(50%-146px)]" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%-146px)] rounded-[4px] top-[12px] translate-x-[-50%] w-[2px]" />
                      <BackgroundImage1 additionalClassNames="left-[11.73%] right-[86.22%] top-[calc(50%-11.35px)]" />
                    </div>
                  )}
                  {index === 1 && (
                    <div 
                      ref={(el) => pointerContainerRefs.current[1] = el}
                      className="absolute contents left-1/2 top-[6.01px] translate-x-[-50%]"
                    >
                      <BackgroundImageAndText text="0" additionalClassNames="left-1/2" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-1/2 rounded-[4px] top-[12px] translate-x-[-50%] w-[2px]" />
                      <div className="absolute h-[8px] left-[48.98%] right-[48.98%] top-[calc(50%-12.49px)] translate-y-[-50%]" data-name="dot">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <g id="dot">
                            <circle cx="4" cy="4" fill="var(--fill-0, #1E2020)" id="Ellipse 8" r="4" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div 
                      ref={(el) => pointerContainerRefs.current[2] = el}
                      className="absolute contents left-[calc(50%+129px)] top-[6.01px] translate-x-[-50%]"
                    >
                      <BackgroundImageAndText text="35" additionalClassNames="left-[calc(50%+129px)]" />
                      <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+129px)] rounded-[4px] top-[12px] translate-x-[-50%] w-[2px]" />
                      <BackgroundImage1 additionalClassNames="left-[81.89%] right-[16.07%] top-[calc(50%-12.49px)]" />
                    </div>
                  )}
                </div>
              </div>
            </BackgroundImage3>
          ))}
        </div>
      </div>
    </div>
  );
}
