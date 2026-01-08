import svgPaths from "./svg-3kutik6x7t";
import clsx from "clsx";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
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
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
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
type InputBoxProps = {
  text: string;
};

function InputBox({ children, text }: React.PropsWithChildren<InputBoxProps>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
            <p className="leading-[22px]">{text}</p>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
}
type TextAreaProps = {
  text: string;
};

function TextArea({ children, text }: React.PropsWithChildren<TextAreaProps>) {
  return (
    <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
          <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
            <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] tracking-[-0.08px]">{text}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputBox1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="z-[2]">
      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">{children}</div>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper2>{children}</Wrapper2>
    </div>
  );
}
type LabelTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LabelText({ text, additionalClassNames = "" }: LabelTextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0", additionalClassNames)}>
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
type LabelProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Label({ text, text1, additionalClassNames = "" }: LabelProps) {
  return (
    <div className={clsx("content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px]", additionalClassNames)}>
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
      <Wrapper3 additionalClassNames="relative shrink-0">
        <g id="ic_dashboard">
          <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
        </g>
      </Wrapper3>
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">{text}</p>
    </Wrapper>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="02 문항유형_02 유형등록_01 기본">
      <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[1189px] items-start left-0 px-[16px] py-[20px] top-[60px] w-[304px]" data-name="LNB">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
          <Helper2DepthMenuText text="대시보드" />
          <Helper2DepthMenuText text="리포트" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
          <Helper1DepthMenuText text="설문" />
          <Wrapper>
            <Wrapper3 additionalClassNames="relative shrink-0">
              <g clipPath="url(#clip0_31_17872)" id="ic_survey">
                <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_31_17872">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문지</p>
          </Wrapper>
          <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
            <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <Wrapper2>
              <Wrapper3 additionalClassNames="relative shrink-0">
                <g clipPath="url(#clip0_24_13269)" id="ic_list">
                  <path d={svgPaths.p25da1f40} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_24_13269">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">문항 유형</p>
            </Wrapper2>
          </div>
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
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[536px] top-[168px] w-[1152px]" data-name="contents">
        <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-name="메인정보">
          <div className="content-stretch flex items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="page title input">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0" data-name="test">
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-[#2a2c2c] h-full shrink-0 w-px" data-name="cursor" />
              </div>
              <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[34px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.34px]">유형 제목 입력</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="정보입력">
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="form">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[552.5px]" data-name="입력필드">
                <Label text="유형 구분" text1="*" additionalClassNames="w-[208px]" />
                <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                  <InputBox1>
                    <InputWrapText text="피팅감" />
                    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                      <CaretDownBold />
                    </div>
                  </InputBox1>
                </div>
              </div>
              <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px opacity-0 relative shrink-0" data-name="입력필드">
                <Label text="유형 구분" text1="*" additionalClassNames="w-[208px]" />
                <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                  <InputBox1>
                    <InputWrapText text="피팅감" />
                    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                      <CaretDownBold />
                    </div>
                  </InputBox1>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="form">
              <LabelText text="유형 설명" additionalClassNames="w-[208px]" />
              <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0" data-name="Text Area">
                <TextArea text="등록하는 유형에 대한 설명, 특이사항, 주의점 등을 입력해주세요." />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-name="border">
          <div className="absolute inset-[-0.5px_-0.04%]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1153 1">
              <path d="M0.5 0.5H1152.5" id="border" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.19" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="문항정보">
          <LabelText text="노출 정보" additionalClassNames="w-[208px]" />
          <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="card">
            <div className="bg-white h-[498px] relative rounded-[12px] shrink-0 w-full" data-name="card">
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_6px_9px_0px_rgba(13,14,17,0.03)]" />
              <div className="size-full">
                <div className="content-stretch flex gap-[13px] items-start pl-[48px] pr-[40px] py-[32px] relative size-full">
                  <Wrapper3 additionalClassNames="absolute left-[14px] top-[39px]">
                    <g id="ic_drag">
                      <path d={svgPaths.p3eb30500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </Wrapper3>
                  <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="contents">
                    <div className="content-stretch flex items-center justify-between pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="page title input">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center relative shrink-0" data-name="test">
                        <div className="flex flex-row items-center self-stretch">
                          <div className="bg-[#2a2c2c] h-full shrink-0 w-px" data-name="cursor" />
                        </div>
                        <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.22px]">
                          <p className="leading-[34px] overflow-ellipsis overflow-hidden">문항 제목 입력</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="btn">
                        <Wrapper3 additionalClassNames="relative shrink-0">
                          <g id="ic_delete">
                            <path d={svgPaths.p1f7bfa00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                          </g>
                        </Wrapper3>
                        <Wrapper3 additionalClassNames="relative shrink-0">
                          <g id="ic_chevron_up">
                            <path d={svgPaths.p3a03b900} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                          </g>
                        </Wrapper3>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="form">
                      <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="row">
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="입력필드">
                          <Label text="최소 라벨" text1="*" additionalClassNames="w-[160px]" />
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                            <InputBox text="최소 라벨을 입력해주세요." />
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="입력필드">
                          <Label text="최대 라벨" text1="*" additionalClassNames="w-[160px]" />
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                            <InputBox text="최대 라벨을 입력해주세요." />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
                        <LabelText text="도움말 입력" additionalClassNames="w-[160px]" />
                        <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0" data-name="Text Area">
                          <TextArea text="문항에 대한 도움말을 입력해주세요." />
                        </div>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
                        <LabelText text="도움말 이미지" additionalClassNames="w-[160px]" />
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="field">
                          <div className="bg-white h-[108px] relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                                <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="input-text-wrap">
                                  <Wrapper3 additionalClassNames="relative shrink-0">
                                    <g id="ic_upload">
                                      <path d={svgPaths.pf03c8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                                    </g>
                                  </Wrapper3>
                                  <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">파일을 여기에 드래그하거나, 클릭하여 업로드하세요.</p>
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
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Wrapper5>
                <g id="ic_add">
                  <path d={svgPaths.p200f7672} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                </g>
              </Wrapper5>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">문항 추가</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-end px-[232px] py-[16px] right-0 top-[60px] w-[1616px]" data-name="top fixed">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_8px_12px_0px_rgba(13,14,17,0.04)]" />
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <Wrapper5>
                <g clipPath="url(#clip0_31_17822)" id="ic_import">
                  <path d={svgPaths.p3ed07b00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_31_17822">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </Wrapper5>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">유형 가져오기</p>
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
                <Wrapper5>
                  <g id="ic_chevron_down">
                    <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}