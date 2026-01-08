import svgPaths from "./svg-4zyykg4vha";
import clsx from "clsx";
import imgImage4 from "@/assets/bbafd45378bb9aa2bbcd68e95d93c0810380d57f.png";
import imgImage5 from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
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
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("basis-0 grow min-w-[320px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Helper2DepthMenu({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2 additionalClassNames="h-[56px] min-h-[56px]">
      <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] min-w-[inherit] px-[12px] py-[20px] relative size-full">{children}</div>
    </Wrapper2>
  );
}
type PannelTitleTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PannelTitleText({ text, additionalClassNames = "" }: PannelTitleTextProps) {
  return (
    <div className={clsx("flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0", additionalClassNames)}>
      <p className="leading-[25px] overflow-ellipsis overflow-hidden text-[18px] text-nowrap">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] tracking-[-0.08px] w-full">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
  );
}
type TagTextProps = {
  text: string;
};

function TagText({ text }: TagTextProps) {
  return (
    <div className="bg-[rgba(78,160,255,0.1)] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#0085ec] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}
type K2TableCellDataTextProps = {
  text: string;
};

function K2TableCellDataText({ text }: K2TableCellDataTextProps) {
  return (
    <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
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
type K2TableCellDataImageAndTextProps = {
  text: string;
};

function K2TableCellDataImageAndText({ text }: K2TableCellDataImageAndTextProps) {
  return (
    <Wrapper>
      <div className="relative rounded-[2px] shrink-0 size-[32px]" data-name="image 4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0 rounded-[2px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2px]">
            <img alt="" className="absolute h-[133.46%] left-0 max-w-none top-[-13.11%] w-full" src={imgImage4} />
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper>
  );
}

function Checkbox() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full", additionalClassNames)}>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-[28px] relative shrink-0 w-0">
      <div className="absolute inset-[-1.79%_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 29">
          <path d="M0.5 0.5V28.5" id="divider" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" />
        </svg>
      </div>
    </div>
  );
}
type PageTabItemTextProps = {
  text: string;
};

function PageTabItemText({ text }: PageTabItemTextProps) {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.154px]">{text}</p>
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
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
        <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
            <Checkbox />
          </div>
        </div>
      </div>
      <K2TableCellDataImageAndText text="퀀텀 포스 (W3) (Off White)" />
      <K2TableCellDataText text="아이더" />
      <K2TableCellDataText text="22SS" />
      <K2TableCellDataText text="경등산화" />
      <K2TableCellDataText text="2024. 08. 05." />
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]" data-name="k2 Table cell data">
        <TagText text="진행 중" />
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
        <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
            <Checkbox />
          </div>
        </div>
      </div>
      <K2TableCellDataImageAndText text="퀀텀 포스 (W3) (Off White)" />
      <K2TableCellDataText text="아이더" />
      <K2TableCellDataText text="22SS" />
      <K2TableCellDataText text="경등산화" />
      <K2TableCellDataText text="2024. 08. 05." />
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]" data-name="k2 Table cell data">
        <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Tag">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)] text-nowrap">종료</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col h-[1159px] items-start left-[-208px] w-[1920px]" data-name="01 리포트_01 선택 전">
        <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="GNB">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="logo">
                <Wrapper3 additionalClassNames="h-[22px] shrink-0 w-[79px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 22">
                    <path d={svgPaths.p1c055c72} fill="var(--fill-0, #1E2020)" id="Vector" />
                  </svg>
                </Wrapper3>
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
                      <Wrapper4>
                        <g id="ic_chevron_down">
                          <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                        </g>
                      </Wrapper4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="LNB/Contents">
          <div className="bg-white content-stretch flex flex-col gap-[8px] h-full items-start px-[16px] py-[20px] relative shrink-0 w-[304px]" data-name="LNB">
            <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
              <Helper2DepthMenu>
                <Wrapper5>
                  <g id="ic_dashboard">
                    <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">대시보드</p>
              </Helper2DepthMenu>
              <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
                <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <Wrapper1>
                  <Wrapper5>
                    <g clipPath="url(#clip0_4_9912)" id="ic_data">
                      <path d={svgPaths.pbeab100} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_9912">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </Wrapper5>
                  <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">리포트</p>
                </Wrapper1>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
              <Helper1DepthMenuText text="설문" />
              <Helper2DepthMenu>
                <Wrapper5>
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
                <Wrapper5>
                  <g id="ic_list">
                    <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <Wrapper5>
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
                <Wrapper5>
                  <g id="ic_product">
                    <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <Wrapper5>
                  <g id="ic_company">
                    <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <Wrapper5>
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
                <Wrapper5>
                  <g id="ic_idcard">
                    <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <Wrapper5>
                  <g id="ic_group">
                    <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
              </Helper2DepthMenu>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[1616px]" data-name="contents">
            <div className="relative shrink-0 w-full" data-name="contents">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] pt-[48px] px-[244px] relative w-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="title/tab">
                    <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] tracking-[-0.34px] w-full">리포트</p>
                    <div className="relative rounded-[12px] shrink-0 w-full" data-name="page Tabs">
                      <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] w-full">
                        <div className="h-[60px] relative rounded-[8px] shrink-0" data-name="_page Tab Item">
                          <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                            <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center text-nowrap tracking-[-0.154px]">신발</p>
                          </div>
                          <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                        <PageTabItemText text="의류" />
                        <PageTabItemText text="용품" />
                      </div>
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="table">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="필터">
                      <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="필터">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="검색/필터">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Text Input">
                            <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input-box">
                              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                                  <Wrapper5>
                                    <g id="ic_search">
                                      <path d={svgPaths.p378bce80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                                    </g>
                                  </Wrapper5>
                                  <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-wrap">
                                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                                      <p className="leading-[22px]">검색어 입력</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[78px]" data-name="filter btn">
                            <div className="bg-[rgba(255,255,255,0)] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Label Button">
                              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-0 relative size-full">
                                  <Wrapper4>
                                    <g id="ic_tune">
                                      <path d={svgPaths.p2423ab00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                                    </g>
                                  </Wrapper4>
                                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">필터</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Helper />
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="switch">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">내 의뢰만 보기</p>
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Switch">
                            <div className="h-[26px] relative shrink-0 w-[48px]" data-name="Switch">
                              <div className="absolute bg-[rgba(12,15,15,0.07)] inset-0 rounded-[9999px]" data-name="Track">
                                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                              </div>
                              <div className="absolute bg-white left-px rounded-[34.909px] size-[24px] top-px" data-name="Knob">
                                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-[-1px] pointer-events-none rounded-[35.909px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="table/pagenation">
                      <div className="relative rounded-[8px] shrink-0 w-full" data-name="table">
                        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                          <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                            <div className="content-stretch flex items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 size-[52px]" data-name="k2 Table cell header">
                              <div className="content-stretch flex h-[52px] items-center min-h-[52px] px-[12px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                                <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="checkbox">
                                    <div className="absolute bg-[rgba(12,15,15,0.1)] border border-[rgba(12,15,15,0.13)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Wrapper2 additionalClassNames="h-[52px] min-h-[52px]">
                              <Text text="제품" additionalClassNames="min-w-[inherit]" />
                            </Wrapper2>
                            <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                              <div className="flex flex-row items-center min-h-[inherit] size-full">
                                <Text text="브랜드" />
                              </div>
                            </div>
                            <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                              <div className="flex flex-row items-center min-h-[inherit] size-full">
                                <Text text="시즌" />
                              </div>
                            </div>
                            <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                              <div className="flex flex-row items-center min-h-[inherit] size-full">
                                <Text text="카테고리" />
                              </div>
                            </div>
                            <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                              <div className="flex flex-row items-center min-h-[inherit] size-full">
                                <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                                  <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
                                    <p className="leading-[20px] overflow-ellipsis overflow-hidden">생성일</p>
                                  </div>
                                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="button-wrapper">
                                    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[18px]" data-name="_Table Cell / Sort Button">
                                      <div className="relative shrink-0 size-[12px]" data-name="caret_up_down_fill">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                          <g id="caret_up_down_fill">
                                            <path d={svgPaths.p332e8e80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.29" id="Vector" />
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[80px]" data-name="k2 Table cell header">
                              <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
                                <p className="leading-[20px] overflow-ellipsis overflow-hidden">상태</p>
                              </div>
                            </div>
                          </div>
                          <TableRow />
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                            <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
                              <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                                <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                                  <Checkbox />
                                </div>
                              </div>
                            </div>
                            <Wrapper>
                              <div className="relative shrink-0 size-[32px]" data-name="image 4">
                                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                                  <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0" />
                                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage5} />
                                </div>
                              </div>
                              <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                                <p className="leading-[20px] overflow-ellipsis overflow-hidden">퀀텀 포스 (W3) (Off White)</p>
                              </div>
                            </Wrapper>
                            <K2TableCellDataText text="아이더" />
                            <K2TableCellDataText text="22SS" />
                            <K2TableCellDataText text="경등산화" />
                            <K2TableCellDataText text="2024. 08. 05." />
                            <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]" data-name="k2 Table cell data">
                              <TagText text="진행 중" />
                            </div>
                          </div>
                          <TableRow1 />
                          <TableRow1 />
                          <TableRow />
                          <TableRow1 />
                          <TableRow1 />
                          <TableRow />
                          <TableRow />
                          <TableRow />
                        </div>
                        <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0" data-name="Pagination">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="btn left">
                          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                            <Wrapper4>
                              <g id="ic_chevron_double left">
                                <path d={svgPaths.p23c64f00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector" />
                                <path d={svgPaths.pe6c1080} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector_2" />
                              </g>
                            </Wrapper4>
                          </div>
                          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                            <Wrapper4>
                              <g id="ic_chevron_left">
                                <path d={svgPaths.p346d4600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector" />
                              </g>
                            </Wrapper4>
                          </div>
                        </div>
                        <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]" data-name="1">
                          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                            <p className="leading-[22px]">1</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
                          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.08px]">
                            <p className="leading-[22px]">2</p>
                          </div>
                        </div>
                        <Text1 text="3" />
                        <Text1 text="4" />
                        <Text1 text="5" />
                        <div className="content-stretch flex items-center relative shrink-0" data-name="btn right">
                          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                            <Wrapper4>
                              <g id="ic_chevron_right">
                                <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                              </g>
                            </Wrapper4>
                          </div>
                          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                            <Wrapper4>
                              <g id="ic_chevron_double right">
                                <path d={svgPaths.pfb9ce00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                                <path d={svgPaths.p395ba780} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector_2" />
                              </g>
                            </Wrapper4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-full" data-name="bottom pannel">
              <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_-8px_12px_0px_rgba(13,14,17,0.04)]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[244px] py-[16px] relative w-full">
                  <div className="content-stretch flex gap-[3px] items-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.126px]" data-name="pannel title">
                    <PannelTitleText text="리포트" additionalClassNames="font-['Pretendard_Variable:Bold',sans-serif] text-[#2a2c2c]" />
                    <PannelTitleText text="0" additionalClassNames="font-['Pretendard_Variable:SemiBold',sans-serif] text-[rgba(12,15,15,0.29)]" />
                  </div>
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="btn">
                    <div className="bg-[rgba(12,15,15,0.1)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.13)] text-nowrap tracking-[-0.08px]">비교 분석</p>
                    </div>
                    <Helper />
                    <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inline Label Button">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.08px]">열기</p>
                      <Wrapper4>
                        <g id="ic_chevron_up">
                          <path d={svgPaths.p18576f80} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                        </g>
                      </Wrapper4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-center left-[244px] size-[40px] top-[1019px]" data-name="Tooltip">
              <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start justify-end left-[calc(50%+140.5px)] top-[-48px] translate-x-[-50%]" data-name="tooltip-wrapper">
                <div className="bg-[#1e2020] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)] shrink-0" data-name="tooltip">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px]">분석하고 싶은 리포트를 선택해서 비교할 수 있어요</p>
                  <Wrapper4>
                    <g id="ic_close">
                      <path d={svgPaths.p2390fef0} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </Wrapper4>
                </div>
                <div className="absolute flex items-center justify-center left-[13.86px] size-[14.142px] top-[calc(50%+20px)] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[135deg]">
                    <Wrapper3 additionalClassNames="size-[10px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, #1E2020)" id="Beak" />
                      </svg>
                    </Wrapper3>
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