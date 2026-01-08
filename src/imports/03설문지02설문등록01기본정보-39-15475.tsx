import svgPaths from "./svg-pj8b1v3050";
import clsx from "clsx";
import imgImage42 from "@/assets/2810422a3e4bf45ca41efb9598ef17c6c1f4766f.png";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
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
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("bg-white h-[40px] relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Helper2DepthMenu({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function InputBox1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-0 py-0 relative size-full">{children}</div>
    </Wrapper1>
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

function InputBox({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="z-[2]">
      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">{children}</div>
    </Wrapper1>
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
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}

function CaretDownBold() {
  return (
    <div className="absolute left-[11px] size-[18px] top-[11px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="caret_down_bold">
          <path d={svgPaths.p3bfd5480} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
type InputWrapTextProps = {
  text: string;
  additionalClassNames?: string;
};

function InputWrapText({ text, additionalClassNames = "" }: InputWrapTextProps) {
  return (
    <div className={clsx("basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0", additionalClassNames)}>
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
    <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-[208px]">
      <p className="relative shrink-0 text-[#2a2c2c]">{text}</p>
      <p className="relative shrink-0 text-[#4ea0ff]">{text1}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="03 설문지_02 설문등록_01 기본정보">
      <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-between left-0 px-[36px] py-[16px] top-0 w-[1920px]" data-name="GNB">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center relative shrink-0 w-[94px]" data-name="logo">
          <div className="h-[28px] relative shrink-0 w-[93.333px]" data-name="image 42">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[387.88%] left-[-7.5%] max-w-none top-[-142.42%] w-[116.67%]" src={imgImage42} />
            </div>
          </div>
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
      <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[536px] top-[168px] w-[1153px]" data-name="contents">
        <div className="content-stretch flex items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="title input">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center relative shrink-0" data-name="test">
            <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] text-nowrap tracking-[-0.34px]">DYNAFIT_가드런보아GTX</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="제품 구분" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                <InputBox>
                  <InputWrapText text="신발" additionalClassNames="overflow-clip" />
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                    <CaretDownBold />
                  </div>
                </InputBox>
              </div>
            </div>
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="브랜드" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                <InputBox>
                  <InputWrapText text="다이나핏" additionalClassNames="overflow-clip" />
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                    <CaretDownBold />
                  </div>
                </InputBox>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="카테고리" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                <InputBox>
                  <InputWrapText text="트레일 러닝" additionalClassNames="overflow-clip" />
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                    <CaretDownBold />
                  </div>
                </InputBox>
              </div>
            </div>
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="시즌" text1="*" />
              <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                  <InputBox>
                    <InputWrapText text="2025" additionalClassNames="overflow-clip" />
                    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                      <CaretDownBold />
                    </div>
                  </InputBox>
                </div>
                <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex h-[40px] items-start overflow-clip p-[4px] relative rounded-[6px] shrink-0 w-[120px]" data-name="Segmented Control">
                  <SegmentedControlItem additionalClassNames="bg-white shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)]">
                    <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">SS</p>
                  </SegmentedControlItem>
                  <SegmentedControlItem>
                    <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-center text-nowrap tracking-[-0.042px]">FW</p>
                  </SegmentedControlItem>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="사이즈" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                <InputBox>
                  <InputWrapText text="270" additionalClassNames="overflow-clip" />
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                    <CaretDownBold />
                  </div>
                </InputBox>
              </div>
            </div>
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="법인" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                <InputBox>
                  <InputWrapText text="(주)다이나핏코리아" additionalClassNames="overflow-clip" />
                  <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                    <CaretDownBold />
                  </div>
                </InputBox>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="무게" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                <InputBox1>
                  <InputWrapText text="29.09" />
                  <div className="content-stretch flex items-center justify-center overflow-clip shrink-0 size-[40px]" data-name="button" />
                </InputBox1>
              </div>
            </div>
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="힐 높이" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                <InputBox1>
                  <InputWrapText text="36.5" />
                  <div className="content-stretch flex items-center justify-center overflow-clip shrink-0 size-[40px]" data-name="button" />
                </InputBox1>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="높이" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                <InputBox1>
                  <InputWrapText text="37" />
                  <div className="content-stretch flex items-center justify-center overflow-clip shrink-0 size-[40px]" data-name="button" />
                </InputBox1>
              </div>
            </div>
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              <LabelWrap text="목표거리" text1="*" />
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                <InputBox1>
                  <InputWrapText text="100" />
                  <div className="content-stretch flex items-center justify-center overflow-clip shrink-0 size-[40px]" data-name="button" />
                </InputBox1>
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
                      <div className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px]">
                        <p className="mb-0">{`필드테스트 주안점 `}</p>
                        <p className="mb-0">- 기본 피팅 (1차 피팅 감)</p>
                        <p className="mb-0">- 성능 (2차 기능성, 쿠셔닝, 반발 탄성, 100km 로드 러닝)</p>
                        <p>- 방수기능, 산악환경 접지력 추가 확인 필요</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
            <Text text="대표 이미지" />
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="field">
              <div className="bg-white h-[108px] relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                        <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="ic-fileformat-jpg">
                          <div className="absolute inset-[0_6.25%]" data-name="img">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16.0002">
                              <g id="img">
                                <path d={svgPaths.p14c73700} fill="var(--fill-0, #7A91FF)" id="Vector" />
                                <path d={svgPaths.p22fe7700} fill="var(--fill-0, #4660D8)" id="Vector_2" />
                                <path d={svgPaths.p5de5a00} fill="var(--fill-0, white)" id="Union" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]" data-name="image text">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] relative shrink-0 text-[#2a2c2c]">help/ image/ 001</p>
                          <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">12.6 KB</p>
                        </div>
                      </div>
                      <Wrapper2>
                        <g id="ic_close">
                          <path d={svgPaths.p6140b00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                        </g>
                      </Wrapper2>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="btn">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <Wrapper3>
                      <g clipPath="url(#clip0_34_20480)" id="ic_upload">
                        <path d={svgPaths.p1a103880} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                      </g>
                      <defs>
                        <clipPath id="clip0_34_20480">
                          <rect fill="white" height="14" width="14" />
                        </clipPath>
                      </defs>
                    </Wrapper3>
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">파일 추가</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-end leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]">
                    <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">총</p>
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#2a2c2c]">0KB</p>
                    <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">/50MB</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <Wrapper3>
                    <g id="ic_delete">
                      <path d={svgPaths.p10611500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.19" id="Vector" />
                    </g>
                  </Wrapper3>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.19)] text-nowrap tracking-[-0.042px]">전체 삭제</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[874px] items-start left-0 px-[16px] py-[20px] top-[60px] w-[304px]" data-name="LNB">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_dashboard">
                <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">대시보드</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_data">
                <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">리포트</p>
          </Helper2DepthMenu>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
          <Helper1DepthMenuText text="설문" />
          <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
            <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <Wrapper>
              <Wrapper4>
                <g clipPath="url(#clip0_39_9413)" id="ic_survey">
                  <path d={svgPaths.p1f73a180} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_39_9413">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper4>
              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">설문지</p>
            </Wrapper>
          </div>
          <Helper2DepthMenu>
            <Wrapper4>
              <g clipPath="url(#clip0_39_9410)" id="ic_list">
                <path d={svgPaths.p25da1f40} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_39_9410">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_comment">
                <path d={svgPaths.p129f0e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문 응답</p>
          </Helper2DepthMenu>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
          <Helper1DepthMenuText text="관리" />
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_product">
                <path d={svgPaths.p15564180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_company">
                <path d={svgPaths.p3ae07600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_image">
                <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">이미지 관리</p>
          </Helper2DepthMenu>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
          <Helper1DepthMenuText text="권한" />
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_idcard">
                <path d={svgPaths.p344d6000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper4>
              <g id="ic_group">
                <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper4>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
          </Helper2DepthMenu>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-between px-[232px] py-[16px] right-0 top-[60px] w-[1616px]" data-name="top fixed">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.04)]" />
        <div className="relative shrink-0" data-name="Tabs">
          <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit]">
            <div className="h-[60px] relative rounded-[8px] shrink-0" data-name="_Tab Item">
              <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center text-nowrap tracking-[-0.22px]">기본정보</p>
              </div>
              <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0" data-name="_Tab Item">
              <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.22px]">질문</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0)] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <Wrapper2>
                <g id="ic_history">
                  <path d={svgPaths.p9468f00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                </g>
              </Wrapper2>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">이력</p>
            </div>
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <Wrapper2>
                <g id="ic_delete">
                  <path d={svgPaths.p15ce7480} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                </g>
              </Wrapper2>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">삭제</p>
            </div>
          </div>
          <div className="h-[28px] relative shrink-0 w-0">
            <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">저장</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}