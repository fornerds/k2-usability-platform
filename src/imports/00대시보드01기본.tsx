import svgPaths from "./svg-v16cagnvmh";
import clsx from "clsx";
import imgImage4 from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";
type HeatmapProps = {
  additionalClassNames?: string;
};

function Heatmap({ children, additionalClassNames = "" }: React.PropsWithChildren<HeatmapProps>) {
  return (
    <div className={clsx("h-[182px] relative w-[62px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 182">
        {children}
      </svg>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-w-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative w-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">{children}</div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[20px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Helper2DepthMenu({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper3>{children}</Wrapper3>
    </div>
  );
}

function IcChevronDown({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="ic_chevron_down">{children}</g>
    </Wrapper4>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] relative size-[12px]">
      <Wrapper5 additionalClassNames="absolute inset-[-25%_-33.33%_-41.67%_-33.33%]">{children}</Wrapper5>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <g id="ic_chevron_right">{children}</g>
    </Wrapper4>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper6>
      <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">{children}</div>
    </Wrapper6>
  );
}
type TagTextProps = {
  text: string;
};

function TagText({ text }: TagTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)] text-nowrap">{text}</p>
    </div>
  );
}
type TitleProps = {
  text: string;
  text1: string;
};

function Title({ text, text1 }: TitleProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-full">{text}</p>
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.52)] w-full">{text1}</p>
    </div>
  );
}
type ListTextProps = {
  text: string;
};

function ListText({ text }: ListTextProps) {
  return (
    <Wrapper>
      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">{text}</p>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <RowText text="DYNAFIT_피스테 쿨 피팅 평가" />
        <RowText text="K2_플라이 하이크 스페이스(LE)" />
        <RowText text="아이더 퀀텀 에어로 쿠쉬_스페이서" />
      </div>
    </Wrapper>
  );
}
type RowTextProps = {
  text: string;
};

function RowText({ text }: RowTextProps) {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] tracking-[-0.042px]">{text}</p>
      <Wrapper1>
        <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
      </Wrapper1>
    </div>
  );
}
type LabelButtonTextProps = {
  text: string;
};

function LabelButtonText({ text }: LabelButtonTextProps) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center min-h-[48px] px-[12px] py-[20px] relative shrink-0 w-[92px]">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type K2TableCellDataTextProps = {
  text: string;
};

function K2TableCellDataText({ text }: K2TableCellDataTextProps) {
  return (
    <div className="basis-0 grow h-[48px] min-h-[48px] min-w-px relative shrink-0">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type K2TableCellHeaderTextProps = {
  text: string;
};

function K2TableCellHeaderText({ text }: K2TableCellHeaderTextProps) {
  return (
    <div className="basis-0 grow h-[40px] min-h-[40px] min-w-px relative shrink-0">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type InlineLabelButtonTextProps = {
  text: string;
};

function InlineLabelButtonText({ text }: InlineLabelButtonTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[3px] shrink-0">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">{text}</p>
      <div className="relative shrink-0 size-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="ic_chevron_right">
            <path d={svgPaths.p2d457300} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
          </g>
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
    <div className="content-stretch flex gap-[2px] items-end justify-end relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0085ec] text-[34px] text-nowrap text-right tracking-[-0.34px]">{text}</p>
      <div className="content-stretch flex flex-col items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0 w-[11px]">
        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{"점"}</p>
      </div>
    </div>
  );
}
type ChartLabelProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function ChartLabel({ text, text1, additionalClassNames = "" }: ChartLabelProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[1.721px] items-center leading-[17px] not-italic relative text-[12px] text-nowrap w-[49px]", additionalClassNames)}>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c]">{text}</p>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#0085ec]">{text1}</p>
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
type CommentTextProps = {
  text: string;
};

function CommentText({ text }: CommentTextProps) {
  return (
    <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Wrapper7>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <Wrapper4>
              <g id="ic_thumb up">
                <path d={svgPaths.p3d297b00} fill="var(--fill-0, #009759)" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] text-[12px] text-nowrap">{"긍정"}</p>
          </div>
          <Helper1 />
          <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{"박성한"}</p>
        </div>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{text}</p>
      </Wrapper7>
    </div>
  );
}

function Helper1() {
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
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">{text1}</p>
    </div>
  );
}
type Dot1Props = {
  additionalClassNames?: string;
};

function Dot1({ additionalClassNames = "" }: Dot1Props) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <g id="dot">
        <g filter="url(#filter0_dd_1_4381)" id="Ellipse 11">
          <circle cx="10" cy="9" fill="var(--fill-0, #00B56B)" r="6" />
          <circle cx="10" cy="9" r="5.5" stroke="var(--stroke-0, white)" />
        </g>
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_dd_1_4381" width="20" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0666667 0 0 0 0.19 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4381" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0666667 0 0 0 0.2 0" />
          <feBlend in2="effect1_dropShadow_1_4381" mode="normal" result="effect2_dropShadow_1_4381" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_4381" mode="normal" result="shape" />
        </filter>
      </defs>
    </Wrapper2>
  );
}
type DotProps = {
  additionalClassNames?: string;
};

function Dot({ additionalClassNames = "" }: DotProps) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <g id="dot">
        <g filter="url(#filter0_dd_1_4352)" id="Ellipse 11">
          <circle cx="10" cy="9" fill="var(--fill-0, #FF253F)" r="6" />
          <circle cx="10" cy="9" r="5.5" stroke="var(--stroke-0, white)" />
        </g>
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_dd_1_4352" width="20" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0666667 0 0 0 0.19 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4352" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0666667 0 0 0 0.2 0" />
          <feBlend in2="effect1_dropShadow_1_4352" mode="normal" result="effect2_dropShadow_1_4352" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_4352" mode="normal" result="shape" />
        </filter>
      </defs>
    </Wrapper2>
  );
}
type TitleTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TitleText({ text, additionalClassNames = "" }: TitleTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center relative shrink-0", additionalClassNames)}>
      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}
type Helper1DepthMenuTextProps = {
  text: string;
};

function Helper1DepthMenuText({ text }: Helper1DepthMenuTextProps) {
  return (
    <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
      <K2TableCellDataText text="DYNAFIT_피스테런3.0 피팅 평가" />
      <K2TableCellDataText text="DYNAFIT_가드런맥스 피팅평가" />
      <Text1 text="시즌" />
      <div className="content-stretch flex h-[48px] items-center justify-center min-h-[48px] px-[12px] py-[16px] relative shrink-0" data-name="k2 Table cell data">
        <LabelButtonText text="비교 진행하기" />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="00 대시보드_01 기본">
      <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="GNB">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
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
                    <IcChevronDown>
                      <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </IcChevronDown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="LNB/contents">
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[20px] relative self-stretch shrink-0 w-[304px]" data-name="LNB">
          <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
            <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
              <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Wrapper3>
                <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                  <g id="ic_dashboard">
                    <path d={svgPaths.p1bc71000} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">대시보드</p>
              </Wrapper3>
            </div>
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_data">
                  <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">리포트</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
            <Helper1DepthMenuText text="설문" />
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g clipPath="url(#clip0_1_4414)" id="ic_survey">
                  <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_1_4414">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문지</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_list">
                  <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_comment">
                  <path d={svgPaths.p3937a8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문 응답</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
            <Helper1DepthMenuText text="관리" />
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_product">
                  <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_company">
                  <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_image">
                  <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">이미지 관리</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
            <Helper1DepthMenuText text="권한" />
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_idcard">
                  <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper5 additionalClassNames="relative shrink-0 size-[20px]">
                <g id="ic_group">
                  <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper5>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
            </Helper2DepthMenu>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-[1616px]" data-name="contents">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[744px]" data-name="text">
              <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                <p className="leading-[38px]">안녕하세요,</p>
              </div>
              <div className="content-stretch flex items-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]" data-name="name">
                <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[38px] text-nowrap">김분석</p>
                </div>
                <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[38px] text-nowrap">님</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[100px] items-center justify-end relative shrink-0" data-name="지표">
              <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap" data-name="지표">
                <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
                  <p className="mb-0">{`미열람 `}</p>
                  <p>리포트</p>
                </div>
                <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">2</p>
              </div>
              <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap" data-name="지표">
                <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
                  <p className="mb-0">{`진행중인 `}</p>
                  <p>설문</p>
                </div>
                <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">5</p>
              </div>
              <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap" data-name="지표">
                <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
                  <p className="mb-0">{`대기중인 `}</p>
                  <p>요청서</p>
                </div>
                <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">3</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full" data-name="contents">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="제품">
              <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="section title">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="제품 타이틀">
                  <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">헥타르 v2 (Y4) (Yellodddw)</p>
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <IcChevronDown>
                      <path d={svgPaths.p9819500} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                    </IcChevronDown>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">상세 리포트 보기</p>
                  <Wrapper1>
                    <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </Wrapper1>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="contents">
                <div className="basis-0 grow h-[404px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="review">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[20px] items-start pb-0 pt-[16px] px-[20px] relative size-full">
                      <div className="basis-0 content-stretch flex flex-col grow h-[388px] items-start justify-between min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0" data-name="통증부위">
                        <TitleText text="통증 부위" additionalClassNames="gap-[4px] w-[342px]" />
                        <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="제품 이미지">
                          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="img">
                            <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[225px]" data-name="image 4">
                              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
                            </div>
                            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.5px] mt-[71px] place-items-start relative" data-name="dot">
                              <div className="[grid-area:1_/_1] ml-[140px] mt-0 relative size-[24px]" data-name="dot">
                                <div className="absolute inset-[-12.5%_-16.67%_-20.83%_-16.67%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                                    <g id="dot">
                                      <g filter="url(#filter0_dd_1_4355)" id="Ellipse 11">
                                        <circle cx="16" cy="15" fill="var(--fill-0, #FF253F)" r="12" />
                                        <circle cx="16" cy="15" r="11.5" stroke="var(--stroke-0, white)" />
                                      </g>
                                      <g filter="url(#filter1_d_1_4355)" id="Ellipse 12">
                                        <circle cx="16" cy="15" fill="var(--fill-0, white)" r="6" />
                                      </g>
                                    </g>
                                    <defs>
                                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_dd_1_4355" width="32" x="0" y="0">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0666667 0 0 0 0.19 0" />
                                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4355" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="0.5" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.054902 0 0 0 0 0.0666667 0 0 0 0.2 0" />
                                        <feBlend in2="effect1_dropShadow_1_4355" mode="normal" result="effect2_dropShadow_1_4355" />
                                        <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_4355" mode="normal" result="shape" />
                                      </filter>
                                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter1_d_1_4355" width="20" x="6" y="9">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4355" />
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4355" mode="normal" result="shape" />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                              <Dot additionalClassNames="ml-[30px] mt-[13px]" />
                              <Dot additionalClassNames="ml-[41px] mt-[14px]" />
                              <Dot1 additionalClassNames="ml-[40px] mt-[53px]" />
                              <Dot1 additionalClassNames="ml-0 mt-[32px]" />
                              <Dot1 additionalClassNames="ml-[10px] mt-[51px]" />
                              <Dot1 additionalClassNames="ml-[139px] mt-[63px]" />
                              <Dot additionalClassNames="ml-[60px] mt-0" />
                            </div>
                            <div className="[grid-area:1_/_1] content-stretch flex gap-[12px] items-center ml-[63.5px] mt-[189px] relative" data-name="범례">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="bg-[#00b56b] rounded-[4px] shrink-0 size-[14px]" />
                                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">긍정</p>
                              </div>
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
                                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">부정</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="내용">
                          <div className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full" data-name="data">
                            <div className="bg-[#00b56b] content-stretch flex h-[32px] items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[216px]">
                              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px]">76%</p>
                            </div>
                            <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0">
                              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px]">24%</p>
                            </div>
                          </div>
                          <div className="relative rounded-[12px] shrink-0 w-full" data-name="info">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
                                <Helper text="총 응답수" text1="12건" />
                                <div className="h-[28px] relative shrink-0 w-0">
                                  <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                                      <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                                    </svg>
                                  </div>
                                </div>
                                <Helper text="가장 많은 응답 부위" text1="발등" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 bg-white content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="피드백">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="title">
                          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">사용자 피드백</p>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="comment">
                          <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="comment">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                            <Wrapper7>
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="상태/이름">
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="comment title">
                                  <Wrapper4>
                                    <g id="ic_thumb down">
                                      <path d={svgPaths.p36588100} fill="var(--fill-0, #FF253F)" id="Vector" />
                                    </g>
                                  </Wrapper4>
                                  <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ff253f] text-[12px] text-nowrap">부정</p>
                                </div>
                                <Helper1 />
                                <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">나성윤</p>
                              </div>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">착용감이 너무 딱딱하고 장시간 신으면 발이 아픕니다.</p>
                            </Wrapper7>
                          </div>
                          <CommentText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                          <CommentText text="사이즈가 정사이즈라 딱 맞고 편해요." />
                          <CommentText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                          <CommentText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                        </div>
                        <div className="absolute bg-gradient-to-b bottom-px from-[rgba(255,255,255,0)] h-[33px] left-0 opacity-40 to-[rgba(0,0,0,0.12)] w-[342px]" data-name="dimmed" />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="data">
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="1row">
                    <Wrapper>
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="title">
                        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{`기능성 `}</p>
                      </div>
                      <div className="content-stretch flex flex-col h-[222px] items-center justify-center relative shrink-0 w-full" data-name="radar chart">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="radar chart">
                          <div className="[grid-area:1_/_1] ml-[49px] mt-[21px] relative size-[172px]" data-name="chart">
                            <div className="absolute h-[172px] left-0 right-0 top-0" data-name="chart">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 172">
                                <g id="chart">
                                  <path d={svgPaths.p2bd3cf28} id="Polygon 63" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                                  <g id="Polygon 64">
                                    <path d={svgPaths.p68bca00} fill="var(--fill-0, white)" />
                                    <path d={svgPaths.p3b82f400} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                                  </g>
                                  <path d={svgPaths.pb596f00} id="Polygon 65" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                                  <g id="Polygon 66">
                                    <path d={svgPaths.p88e4b00} fill="var(--fill-0, white)" />
                                    <path d={svgPaths.p39b24f00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                                  </g>
                                  <path d={svgPaths.p104d0200} id="Polygon 67" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                                </g>
                              </svg>
                            </div>
                            <div className="absolute bg-white content-stretch flex flex-col items-start left-[41.86%] right-[41.86%] top-0" data-name="num">
                              <Text text="100" />
                              <Text text="75" />
                              <Text text="50" />
                              <Text text="25" />
                              <Text text="0" />
                            </div>
                          </div>
                          <ChartLabel text="탄성" text1="80" additionalClassNames="justify-center ml-[110px] mt-0" />
                          <ChartLabel text="통기성" text1="45" additionalClassNames="ml-[221px] mt-[51px]" />
                          <ChartLabel text="편안함" text1="55" additionalClassNames="justify-end ml-0 mt-[51px]" />
                          <ChartLabel text="유연성" text1="75" additionalClassNames="ml-[221px] mt-[146px]" />
                          <ChartLabel text="쿠셔닝" text1="95" additionalClassNames="justify-end ml-0 mt-[146px]" />
                          <ChartLabel text="안정성" text1="65" additionalClassNames="justify-center ml-[110px] mt-[197px]" />
                          <div className="[grid-area:1_/_1] aspect-[130/130.5] ml-[65px] mt-[35px] relative w-[130px]" data-name="blue">
                            <div className="absolute inset-0" style={{ "--fill-0": "rgba(78, 160, 255, 1)" } as React.CSSProperties}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 130.5">
                                <path d={svgPaths.pb9d0800} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.5" id="blue" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Wrapper>
                    <Wrapper>
                      <TitleText text="피팅감" additionalClassNames="w-full" />
                      <div className="content-stretch flex flex-col h-[222px] items-center justify-between relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="heatmap">
                          <Heatmap additionalClassNames="shrink-0">
                            <g id="heatmap">
                              <g id="ê¸¸ì´">
                                <path d={svgPaths.p13616b00} fill="var(--fill-0, #E2E2E2)" />
                                <path d={svgPaths.p25295800} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="0.858491" />
                              </g>
                              <g id="ê¸¸ì´ ìì­">
                                <mask height="182" id="mask0_1_4323" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="62" x="0" y="0">
                                  <g id="Vector 39">
                                    <path d={svgPaths.p89c2e00} fill="var(--fill-0, #E2E2E2)" />
                                    <path d={svgPaths.p282b9c00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="0.858491" />
                                  </g>
                                </mask>
                                <g mask="url(#mask0_1_4323)">
                                  <g id="Ellipse 43">
                                    <g filter="url(#filter0_f_1_4323)" id="Ellipse 35">
                                      <circle cx="33.5736" cy="25.7533" fill="url(#paint0_radial_1_4323)" r="30.9057" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g id="ë°ë±, ë°ë³¼, ë¤ê¿ì¹">
                                <path d={svgPaths.p3f159100} fill="var(--fill-0, #F4F3F3)" />
                                <path d={svgPaths.p15b24c80} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.02247" />
                              </g>
                              <g id="ë°ë±, ë°ë³¼, ë¤ê¿ì¹ ìì­">
                                <mask height="182" id="mask1_1_4323" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="62" x="0" y="0">
                                  <g id="Vector 30">
                                    <path d={svgPaths.p89c2e00} fill="var(--fill-0, #E2E2E2)" />
                                    <path d={svgPaths.p455ab00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.02247" />
                                  </g>
                                </mask>
                                <g mask="url(#mask1_1_4323)">
                                  <g id="Ellipse 39">
                                    <g filter="url(#filter1_f_1_4323)" id="Ellipse 35_2">
                                      <ellipse cx="38.7252" cy="181.569" fill="url(#paint1_radial_1_4323)" rx="24.0377" ry="24.467" />
                                    </g>
                                  </g>
                                  <g id="Ellipse 42">
                                    <g filter="url(#filter2_f_1_4323)" id="Ellipse 35_3">
                                      <ellipse cx="30.142" cy="74.6899" fill="url(#paint2_radial_1_4323)" rx="21.4623" ry="31.7642" />
                                    </g>
                                  </g>
                                  <g id="Ellipse 40">
                                    <g filter="url(#filter3_f_1_4323)" id="Ellipse 35_4">
                                      <ellipse cx="-2.05366" cy="51.9396" fill="url(#paint3_radial_1_4323)" rx="14.1651" ry="24.467" />
                                    </g>
                                  </g>
                                  <g id="Ellipse 41">
                                    <g filter="url(#filter4_f_1_4323)" id="Ellipse 35_5">
                                      <ellipse cx="62.3331" cy="51.9396" fill="url(#paint4_radial_1_4323)" rx="14.1651" ry="24.467" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <defs>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="75.5472" id="filter0_f_1_4323" width="75.5472" x="-4.19996" y="-12.0203">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_4323" stdDeviation="3.43396" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.1038" id="filter1_f_1_4323" width="65.2453" x="6.10259" y="148.517">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_4323" stdDeviation="4.29245" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80.6981" id="filter2_f_1_4323" width="60.0943" x="0.0947819" y="34.3409">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_4323" stdDeviation="4.29245" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.1038" id="filter3_f_1_4323" width="45.5" x="-24.8037" y="18.8878">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_4323" stdDeviation="4.29245" />
                              </filter>
                              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.1038" id="filter4_f_1_4323" width="45.5" x="39.5831" y="18.8878">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_4323" stdDeviation="4.29245" />
                              </filter>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(33.5736 25.7533) rotate(90) scale(30.9057)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4323" r="1">
                                <stop offset="0.25" stopColor="#FF0402" />
                                <stop offset="0.85" stopColor="#FFEC34" />
                                <stop offset="1" stopColor="white" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(38.7252 181.569) rotate(90) scale(24.467 24.0377)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_4323" r="1">
                                <stop offset="0.25" stopColor="#FF0402" />
                                <stop offset="0.85" stopColor="#FFEC34" />
                                <stop offset="1" stopColor="white" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(30.1419 74.6899) rotate(90) scale(31.7641 21.4623)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_4323" r="1">
                                <stop offset="0.25" stopColor="#FF0402" />
                                <stop offset="0.85" stopColor="#FFEC34" />
                                <stop offset="1" stopColor="white" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(-2.05366 51.9396) rotate(90) scale(24.467 14.1651)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_4323" r="1">
                                <stop offset="0.25" stopColor="#2976FB" />
                                <stop offset="0.845" stopColor="#4DFAD6" />
                                <stop offset="1" stopColor="white" />
                              </radialGradient>
                              <radialGradient cx="0" cy="0" gradientTransform="translate(62.3331 51.9396) rotate(90) scale(24.467 14.1651)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_4323" r="1">
                                <stop offset="0.25" stopColor="#2976FB" />
                                <stop offset="0.845" stopColor="#4DFAD6" />
                                <stop offset="1" stopColor="white" />
                              </radialGradient>
                            </defs>
                          </Heatmap>
                          <div className="flex items-center justify-center relative shrink-0">
                            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                              <Heatmap>
                                <g id="heatmap">
                                  <g id="ê¸¸ì´">
                                    <path d={svgPaths.p13616b00} fill="var(--fill-0, #E2E2E2)" />
                                    <path d={svgPaths.p25295800} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="0.858491" />
                                  </g>
                                  <g id="ê¸¸ì´ ìì­">
                                    <mask height="182" id="mask0_1_4396" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="62" x="0" y="0">
                                      <g id="Vector 39">
                                        <path d={svgPaths.p89c2e00} fill="var(--fill-0, #E2E2E2)" />
                                        <path d={svgPaths.p282b9c00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="0.858491" />
                                      </g>
                                    </mask>
                                    <g mask="url(#mask0_1_4396)">
                                      <g id="Ellipse 43">
                                        <g filter="url(#filter0_f_1_4396)" id="Ellipse 35">
                                          <circle cx="33.5736" cy="25.7533" fill="url(#paint0_radial_1_4396)" r="30.9057" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g id="ë°ë±, ë°ë³¼, ë¤ê¿ì¹">
                                    <path d={svgPaths.p3f159100} fill="var(--fill-0, #F4F3F3)" />
                                    <path d={svgPaths.p15b24c80} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.02247" />
                                  </g>
                                  <g id="ë°ë±, ë°ë³¼, ë¤ê¿ì¹ ìì­">
                                    <mask height="182" id="mask1_1_4396" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="62" x="0" y="0">
                                      <g id="Vector 30">
                                        <path d={svgPaths.p89c2e00} fill="var(--fill-0, #E2E2E2)" />
                                        <path d={svgPaths.p455ab00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.02247" />
                                      </g>
                                    </mask>
                                    <g mask="url(#mask1_1_4396)">
                                      <g id="Ellipse 39">
                                        <g filter="url(#filter1_f_1_4396)" id="Ellipse 35_2">
                                          <ellipse cx="38.7252" cy="181.569" fill="url(#paint1_radial_1_4396)" rx="24.0377" ry="24.467" />
                                        </g>
                                      </g>
                                      <g id="Ellipse 42">
                                        <g filter="url(#filter2_f_1_4396)" id="Ellipse 35_3">
                                          <ellipse cx="30.142" cy="74.6899" fill="url(#paint2_radial_1_4396)" rx="21.4623" ry="31.7642" />
                                        </g>
                                      </g>
                                      <g id="Ellipse 40">
                                        <g filter="url(#filter3_f_1_4396)" id="Ellipse 35_4">
                                          <ellipse cx="-2.05366" cy="51.9396" fill="url(#paint3_radial_1_4396)" rx="14.1651" ry="24.467" />
                                        </g>
                                      </g>
                                      <g id="Ellipse 41">
                                        <g filter="url(#filter4_f_1_4396)" id="Ellipse 35_5">
                                          <ellipse cx="62.3331" cy="51.9396" fill="url(#paint4_radial_1_4396)" rx="14.1651" ry="24.467" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="75.5472" id="filter0_f_1_4396" width="75.5472" x="-4.19996" y="-12.0203">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_1_4396" stdDeviation="3.43396" />
                                  </filter>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.1038" id="filter1_f_1_4396" width="65.2453" x="6.10259" y="148.517">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_1_4396" stdDeviation="4.29245" />
                                  </filter>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80.6981" id="filter2_f_1_4396" width="60.0943" x="0.0947819" y="34.3409">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_1_4396" stdDeviation="4.29245" />
                                  </filter>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.1038" id="filter3_f_1_4396" width="45.5" x="-24.8037" y="18.8878">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_1_4396" stdDeviation="4.29245" />
                                  </filter>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="66.1038" id="filter4_f_1_4396" width="45.5" x="39.5831" y="18.8878">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_1_4396" stdDeviation="4.29245" />
                                  </filter>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(33.5736 25.7533) rotate(90) scale(30.9057)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4396" r="1">
                                    <stop offset="0.25" stopColor="#FF0402" />
                                    <stop offset="0.85" stopColor="#FFEC34" />
                                    <stop offset="1" stopColor="white" />
                                  </radialGradient>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(38.7252 181.569) rotate(90) scale(24.467 24.0377)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_4396" r="1">
                                    <stop offset="0.25" stopColor="#FF0402" />
                                    <stop offset="0.85" stopColor="#FFEC34" />
                                    <stop offset="1" stopColor="white" />
                                  </radialGradient>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(30.1419 74.6899) rotate(90) scale(31.7641 21.4623)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_4396" r="1">
                                    <stop offset="0.25" stopColor="#FF0402" />
                                    <stop offset="0.85" stopColor="#FFEC34" />
                                    <stop offset="1" stopColor="white" />
                                  </radialGradient>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(-2.05366 51.9396) rotate(90) scale(24.467 14.1651)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_4396" r="1">
                                    <stop offset="0.25" stopColor="#2976FB" />
                                    <stop offset="0.845" stopColor="#4DFAD6" />
                                    <stop offset="1" stopColor="white" />
                                  </radialGradient>
                                  <radialGradient cx="0" cy="0" gradientTransform="translate(62.3331 51.9396) rotate(90) scale(24.467 14.1651)" gradientUnits="userSpaceOnUse" id="paint4_radial_1_4396" r="1">
                                    <stop offset="0.25" stopColor="#2976FB" />
                                    <stop offset="0.845" stopColor="#4DFAD6" />
                                    <stop offset="1" stopColor="white" />
                                  </radialGradient>
                                </defs>
                              </Heatmap>
                            </div>
                          </div>
                        </div>
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
                      </div>
                    </Wrapper>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="2row">
                    <Card>
                      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                        <TitleText text="착용 만족도" />
                        <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-[min-content]">{`“러닝 시 쿠셔닝이 매우 잘 느껴지며, 밑창이 탄탄하여 울퉁불퉁한 지면에서도 안정감 가짐.” `}</p>
                      </div>
                      <NumText text="82" />
                    </Card>
                    <Card>
                      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                        <TitleText text="디자인 만족도" />
                        <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-[min-content]">“단색으로 출시되는 타 러닝화에 비해 컬러 구성이 조화로움.”</p>
                      </div>
                      <NumText text="72" />
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="리포트">
              <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="section title">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center relative shrink-0" data-name="제품 타이틀">
                  <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[38px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">리포트 및 설문 현황</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full" data-name="리포트/설문">
                <Wrapper6 additionalClassNames="h-[323px]">
                  <div className="content-stretch flex flex-col gap-[20px] items-center px-[20px] py-[16px] relative size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
                      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">비교 리포트 추천</p>
                      <InlineLabelButtonText text="리포트 바로가기" />
                    </div>
                    <div className="relative rounded-[8px] shrink-0 w-full" data-name="table">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                          <K2TableCellHeaderText text="의뢰 리포트" />
                          <K2TableCellHeaderText text="추천 리포트" />
                          <div className="content-stretch flex gap-[2px] h-[40px] items-center min-h-[40px] px-[12px] py-[20px] relative shrink-0 w-[92px]" data-name="k2 Table cell header">
                            <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">매칭 구분</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[2px] h-[40px] items-center justify-center min-h-[40px] opacity-0 px-[16px] py-[20px] relative shrink-0 w-[124px]" data-name="k2 Table cell header">
                            <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">텍스트</p>
                            </div>
                          </div>
                        </div>
                        <TableRow />
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                          <K2TableCellDataText text="DYNAFIT_피스테런3.0 피팅 평가" />
                          <K2TableCellDataText text="DYNAFIT_가드런맥스 피팅평가" />
                          <Text1 text="제품" />
                          <div className="content-stretch flex h-[48px] items-center justify-center min-h-[48px] px-[12px] py-[16px] relative shrink-0" data-name="k2 Table cell data">
                            <LabelButtonText text="비교 진행하기" />
                          </div>
                        </div>
                        <TableRow />
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                          <K2TableCellDataText text="DYNAFIT_피스테런3.0 피팅 평가" />
                          <K2TableCellDataText text="DYNAFIT_가드런맥스 피팅평가" />
                          <Text1 text="브랜드" />
                          <div className="content-stretch flex h-[48px] items-center justify-center min-h-[48px] px-[12px] py-[16px] relative shrink-0" data-name="k2 Table cell data">
                            <LabelButtonText text="비교 진행하기" />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </Wrapper6>
                <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="list">
                    <ListText text="나의 관심 리포트" />
                    <ListText text="최근 확인 설문" />
                  </div>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="progress card">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
                          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">내가 의뢰한 설문</p>
                          <InlineLabelButtonText text="설문지 바로가기" />
                        </div>
                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="평가">
                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="진행중 평가">
                            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="info">
                              <Title text="헥타르 v2 (Y4) (Yellodddw) 평가" text1="경등산화 | 다이나핏 | 25SS" />
                              <TagText text="진행중" />
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="progress">
                              <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="bar">
                                <div className="bg-[#515353] h-[8px] max-w-[190px] rounded-[8px] shrink-0 w-full" />
                              </div>
                              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
                                <span className="leading-[25px]">{`68 / `}</span>
                                <span className="leading-[17px] text-[12px]">100</span>
                              </p>
                            </div>
                          </div>
                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="진행중 평가">
                            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="info">
                              <Title text="DYNAFIT_피스테 쿨 피팅 평가" text1="경등산화 | 다이나핏 | 25SS" />
                              <TagText text="진행중" />
                            </div>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="progress">
                              <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="bar">
                                <div className="bg-[#515353] h-[8px] max-w-[60px] rounded-[8px] shrink-0 w-[51px]" />
                              </div>
                              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
                                <span className="leading-[25px]">{`11 / `}</span>
                                <span className="leading-[17px] text-[12px]">100</span>
                              </p>
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
      </div>
    </div>
  );
}