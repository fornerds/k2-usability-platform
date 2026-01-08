import svgPaths from "./svg-l6lappgr9x";
import clsx from "clsx";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
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
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("bg-white h-[40px] relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type InputBoxProps = {
  text: string;
};

function InputBox({ children, text }: React.PropsWithChildren<InputBoxProps>) {
  return (
    <Wrapper>
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
            <p className="leading-[22px]">{text}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
type SegmentedControlItemProps = {
  additionalClassNames?: string;
};

function SegmentedControlItem({ children, additionalClassNames = "" }: React.PropsWithChildren<SegmentedControlItemProps>) {
  return (
    <div className={clsx("basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function InputBox1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper additionalClassNames="z-[2]">
      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">{children}</div>
    </Wrapper>
  );
}

function Helper2DepthMenu({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[192px]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}

function CaretDownBold() {
  return (
    <div className="absolute left-[11px] size-[18px] top-[11px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="caret_down_bold">
          <path d={svgPaths.p156e6372} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type InputWrapTextProps = {
  text: string;
};

function InputWrapText({ text }: InputWrapTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
  );
}
type LabelWrapProps = {
  text: string;
  text1: string;
};

function LabelWrap({ text, text1 }: LabelWrapProps) {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-[192px]">
      <p className="relative shrink-0 text-[#2a2c2c]">{text}</p>
      <p className="relative shrink-0 text-[#4ea0ff]">{text1}</p>
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

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="03 설문지_02 설문등록_01 기본정보">
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
                    <Wrapper2>
                      <g id="ic_chevron_down">
                        <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                      </g>
                    </Wrapper2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="LNB/contents">
        <div className="bg-white content-stretch flex flex-col gap-[8px] h-full items-start px-[16px] py-[20px] relative shrink-0 w-[304px]" data-name="LNB">
          <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_dashboard">
                  <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">대시보드</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_data">
                  <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">리포트</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
            <Helper1DepthMenuText text="설문" />
            <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
              <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Wrapper1>
                <Wrapper3>
                  <g id="ic_survey">
                    <path d={svgPaths.p17a57880} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                </Wrapper3>
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">설문지</p>
              </Wrapper1>
            </div>
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_list">
                  <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_comment">
                  <path d={svgPaths.p3937a8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문 응답</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
            <Helper1DepthMenuText text="관리" />
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_product">
                  <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_company">
                  <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_image">
                  <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">이미지 관리</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
            <Helper1DepthMenuText text="권한" />
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_idcard">
                  <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper3>
                <g id="ic_group">
                  <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
            </Helper2DepthMenu>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow h-full items-start max-w-[1616px] min-h-px min-w-px relative shrink-0" data-name="contents">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[36px] h-[820px] items-start ml-0 mt-[60px] pb-[80px] pt-[48px] px-[244px] relative w-[1616px]" data-name="contents">
              <div className="content-stretch flex items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="page title input">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center relative shrink-0" data-name="test">
                  <div className="flex flex-row items-center self-stretch">
                    <div className="bg-[#2a2c2c] h-full shrink-0 w-px" data-name="cursor" />
                  </div>
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[34px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.34px]">설문 제목 입력 (모델명)</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="제품 구분" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                      <InputBox1>
                        <InputWrapText text="피팅감" />
                        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                          <CaretDownBold />
                        </div>
                      </InputBox1>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="브랜드" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                      <InputBox1>
                        <InputWrapText text="아식스" />
                        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                          <CaretDownBold />
                        </div>
                      </InputBox1>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="카테고리" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                      <InputBox1>
                        <InputWrapText text="고기능성 위장 외피" />
                        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                          <CaretDownBold />
                        </div>
                      </InputBox1>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="시즌" text1="*" />
                    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                        <InputBox1>
                          <InputWrapText text="2025" />
                          <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                            <CaretDownBold />
                          </div>
                        </InputBox1>
                      </div>
                      <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex h-[40px] items-start overflow-clip p-[4px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Segmented Control">
                        <SegmentedControlItem additionalClassNames="bg-white shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)]">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">SS</p>
                        </SegmentedControlItem>
                        <SegmentedControlItem>
                          <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-center text-nowrap tracking-[-0.042px]">FW</p>
                        </SegmentedControlItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="사이즈" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                      <InputBox1>
                        <InputWrapText text="270" />
                        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                          <CaretDownBold />
                        </div>
                      </InputBox1>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="법인" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                      <InputBox1>
                        <InputWrapText text="공통법인" />
                        <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                          <CaretDownBold />
                        </div>
                      </InputBox1>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="무게" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                      <InputBox text="무게를 입력해주세요." />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="힐 높이" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                      <InputBox text="힐을 입력해주세요." />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="높이" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                      <InputBox text="높이를 입력해주세요." />
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <LabelWrap text="목표거리" text1="*" />
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                      <InputBox text="목표거리를 입력해주세요." />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <Text text="설문 안내" />
                  <div className="basis-0 content-stretch flex flex-col grow h-[160px] items-start min-h-px min-w-px relative shrink-0" data-name="Text Area">
                    <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
                          <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="input-text-wrap">
                            <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] tracking-[-0.08px]">등록하는 설문에 대한 진행 안내 및 관련 특이 사항등을 입력해주세요.</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="문항정보">
                  <Text text="대표 이미지" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field">
                      <div className="bg-white h-[108px] relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                            <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="input-text-wrap">
                              <Wrapper3>
                                <g id="ic_upload">
                                  <path d={svgPaths.p2de34800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                                </g>
                              </Wrapper3>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">통증부위 이미지를 드래그 또는 클릭하여 업로드하세요.</p>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="btn">
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[308px]">
                          <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            <Wrapper4>
                              <g id="ic_upload">
                                <path d={svgPaths.p2d04cff0} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                              </g>
                            </Wrapper4>
                            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">파일 추가</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-end leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]" data-name="data byte">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">총</p>
                            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#2a2c2c]">0KB</p>
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">/50MB</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                          <Wrapper4>
                            <g id="ic_delete">
                              <path d={svgPaths.p10611500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.19" id="Vector" />
                            </g>
                          </Wrapper4>
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.19)] text-nowrap tracking-[-0.042px]">전체 삭제</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_1] bg-white content-stretch flex h-[60px] items-center justify-between ml-0 mt-0 px-[232px] py-[16px] relative w-[1616px]" data-name="top fixed">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_8px_12px_0px_rgba(13,14,17,0.04)]" />
              <div className="relative shrink-0" data-name="page Tabs">
                <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit]">
                  <div className="h-[60px] relative rounded-[8px] shrink-0" data-name="_page Tab Item">
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center text-nowrap tracking-[-0.154px]">기본정보</p>
                    </div>
                    <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0" data-name="_page Tab Item">
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.154px]">질문</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0)] border-solid inset-0 pointer-events-none" />
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="btn">
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="text buttons">
                  <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inline Label Button">
                    <Wrapper2>
                      <g clipPath="url(#clip0_39_3818)" id="ic_import">
                        <path d={svgPaths.p3ed07b00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                      </g>
                      <defs>
                        <clipPath id="clip0_39_3818">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </Wrapper2>
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.08px]">설문 가져오기</p>
                  </div>
                  <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inline Label Button">
                    <Wrapper2>
                      <g id="ic_preview">
                        <path d={svgPaths.p30cd0c80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                      </g>
                    </Wrapper2>
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.08px]">미리보기</p>
                  </div>
                </div>
                <div className="h-[28px] relative shrink-0 w-0">
                  <div className="absolute inset-[-1.79%_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 29">
                      <path d="M0.5 0.5V28.5" id="divider" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" />
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">임시저장</p>
                  </div>
                  <div className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">등록</p>
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