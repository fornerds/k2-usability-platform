import svgPaths from "./svg-tap138n8f8";
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
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
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

function InputBox1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-0 py-0 relative size-full">{children}</div>
    </Wrapper>
  );
}
type TextAreaProps = {
  text: string;
  text1: string;
  text2: string;
};

function TextArea({ children, text, text1, text2 }: React.PropsWithChildren<TextAreaProps>) {
  return (
    <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
          <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
            <div className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px]">
              <p className="mb-0">{text}</p>
              <p className="mb-0">{text1}</p>
              <p>{text2}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputBox({ children }: React.PropsWithChildren<{}>) {
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

function IcClose() {
  return (
    <Wrapper2>
      <g id="ic_close">
        <path d={svgPaths.p6140b00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
      </g>
    </Wrapper2>
  );
}
type ImageTextProps = {
  text: string;
  text1: string;
};

function ImageText({ text, text1 }: ImageTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] relative shrink-0 text-[#2a2c2c]">{text}</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">{text1}</p>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute inset-[0_6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16.0002">
        <g id="img">
          <path d={svgPaths.p14c73700} fill="var(--fill-0, #7A91FF)" id="Vector" />
          <path d={svgPaths.p22fe7700} fill="var(--fill-0, #4660D8)" id="Vector_2" />
          <path d={svgPaths.p5de5a00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}
type IcDragProps = {
  additionalClassNames?: string;
};

function IcDrag({ additionalClassNames = "" }: IcDragProps) {
  return (
    <Wrapper3 additionalClassNames={clsx("absolute left-[14px] size-[20px]", additionalClassNames)}>
      <g id="ic_drag">
        <path d={svgPaths.p4f8ca00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
      </g>
    </Wrapper3>
  );
}

function IcDelete() {
  return (
    <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
      <g id="ic_delete">
        <path d={svgPaths.p2f8cb780} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
      </g>
    </Wrapper3>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[22px] text-nowrap tracking-[-0.22px]">
        <p className="leading-[34px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
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

function TabHelper() {
  return (
    <div className="h-[16px] relative shrink-0 w-0">
      <div className="absolute inset-[-6.25%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18">
          <path d="M1 1V17" id="Vector 24" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.19" strokeWidth="2" />
        </svg>
      </div>
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

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="03 설문지_03 수정상태">
      <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[1311px] items-start left-0 px-[16px] py-[20px] top-[60px] w-[304px]" data-name="LNB">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g id="ic_dashboard">
                <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">대시보드</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
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
              <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
                <g clipPath="url(#clip0_39_9413)" id="ic_survey">
                  <path d={svgPaths.p1f73a180} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_39_9413">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper3>
              <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">설문지</p>
            </Wrapper1>
          </div>
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g clipPath="url(#clip0_39_9410)" id="ic_list">
                <path d={svgPaths.p25da1f40} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_39_9410">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g id="ic_comment">
                <path d={svgPaths.p129f0e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문 응답</p>
          </Helper2DepthMenu>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
          <Helper1DepthMenuText text="관리" />
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g id="ic_product">
                <path d={svgPaths.p15564180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g id="ic_company">
                <path d={svgPaths.p3ae07600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
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
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g id="ic_idcard">
                <path d={svgPaths.p344d6000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
          </Helper2DepthMenu>
          <Helper2DepthMenu>
            <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
              <g id="ic_group">
                <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
              </g>
            </Wrapper3>
            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
          </Helper2DepthMenu>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-between px-[232px] py-[16px] right-0 top-[60px] w-[1616px]" data-name="top fixed">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.04)]" />
        <div className="relative shrink-0" data-name="Tabs">
          <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit]">
            <div className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0" data-name="_Tab Item">
              <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.22px]">기본정보</p>
            </div>
            <div className="h-[60px] relative rounded-[8px] shrink-0" data-name="_Tab Item">
              <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center text-nowrap tracking-[-0.22px]">질문</p>
              </div>
              <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0)] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btn">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <Wrapper2>
                <g clipPath="url(#clip0_31_18074)" id="ic_import">
                  <path d={svgPaths.p3ed07b00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_31_18074">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </Wrapper2>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">설문 가져오기</p>
            </div>
            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
              <Wrapper2>
                <g id="ic_preview">
                  <path d={svgPaths.p30cd0c80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                </g>
              </Wrapper2>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px]">미리보기</p>
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
      <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[536px] top-[168px] w-[1152px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1152px]" data-name="2depth Tab">
          <div className="content-stretch flex items-center relative shrink-0" data-name="tab">
            <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="2depth tab">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit]">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic relative shrink-0 text-[18px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.126px]">섹션 1</p>
              </div>
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
            </div>
            <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="2depth tab">
              <div className="content-stretch flex gap-[12px] items-center overflow-clip pl-[24px] pr-[20px] py-[12px] relative rounded-[inherit]">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#2a2c2c] text-[18px] text-center text-nowrap tracking-[-0.126px]">섹션 2</p>
                <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
                  <g id="ic_close">
                    <path d={svgPaths.p23bcfd80} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                </Wrapper3>
              </div>
              <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
            </div>
            <TabHelper />
            <TabHelper />
            <div className="h-[49px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="2depth tab">
              <div className="content-stretch flex gap-[12px] h-full items-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon Button">
                  <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
                    <g id="ic_add">
                      <path d={svgPaths.p34717600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </Wrapper3>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
            </div>
          </div>
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 content-stretch flex gap-[4px] grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="btn">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none" />
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <Wrapper4>
                  <g id="ic_import">
                    <path d={svgPaths.p30db5180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px]">유형 가져오기</p>
              </div>
              <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                <Wrapper4>
                  <g id="ic_write">
                    <path d={svgPaths.p194d8d00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                  </g>
                </Wrapper4>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px]">유형 지정</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-name="contents">
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-name="메인정보">
            <div className="content-stretch flex items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="title input">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center relative shrink-0" data-name="test">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] text-nowrap tracking-[-0.34px]">기능성 평가_신발 공통</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="정보입력">
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="form">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[552.5px]" data-name="입력필드">
                  <Label text="유형 구분" text1="*" additionalClassNames="w-[208px]" />
                  <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                    <InputBox>
                      <InputWrapText text="기능성" additionalClassNames="overflow-clip" />
                      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                        <CaretDownBold />
                      </div>
                    </InputBox>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px opacity-0 relative shrink-0" data-name="입력필드">
                  <Label text="유형 구분" text1="*" additionalClassNames="w-[208px]" />
                  <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Select">
                    <InputBox>
                      <InputWrapText text="피팅감" additionalClassNames="overflow-clip" />
                      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Touch Target">
                        <CaretDownBold />
                      </div>
                    </InputBox>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="form">
                <LabelText text="유형 설명" additionalClassNames="w-[208px]" />
                <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0" data-name="Text Area">
                  <TextArea text="[평가기준]신발 뒤꿈치 부분의 쿠셔닝 정도를 평가" text1="[평가방법]신발 뒤꿈치 부분에 체중을 실어 수차례 눌러봤을 때 느낌이 말랑한지 딱딱한지 확인" text2="[답변예시]발 뒤꿈치에 체중을 실어 수차례 눌러봤을 때 신발의 바닥면이 푹푹 꺼지는 듯한 느낌이 발생. 산행을 할 때는 그런 느낌이 적었음" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="문항정보">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="title">
              <div className="basis-0 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                <p className="leading-[47px] overflow-ellipsis overflow-hidden">문항 리스트</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="card">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card">
                <div className="bg-white content-stretch flex gap-[13px] h-[66px] items-start pl-[48px] pr-[40px] py-[16px] relative rounded-[12px] shrink-0 w-[1153px]" data-name="card">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                    <Text text="경량성(Lightness)" />
                    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[425px]">
                      <IcDelete />
                      <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
                        <g id="ic_chevron_down">
                          <path d={svgPaths.p11faa980} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                        </g>
                      </Wrapper3>
                    </div>
                  </div>
                  <IcDrag additionalClassNames="top-[23px]" />
                </div>
                <div className="bg-white content-stretch flex gap-[13px] h-[498px] items-start pl-[48px] pr-[40px] py-[32px] relative rounded-[12px] shrink-0 w-[1153px]" data-name="card">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.06)]" />
                  <IcDrag additionalClassNames="top-[39px]" />
                  <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="contents">
                    <div className="content-stretch flex items-center justify-between pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="title input">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
                      <Text text="유연성(Flexibility)" />
                      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="btn">
                        <IcDelete />
                        <Wrapper3 additionalClassNames="relative shrink-0 size-[20px]">
                          <g id="ic_chevron_up">
                            <path d={svgPaths.p39947c00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                          </g>
                        </Wrapper3>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="form">
                      <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="row">
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="입력필드">
                          <Label text="최소 라벨" text1="*" additionalClassNames="w-[160px]" />
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                            <InputBox1>
                              <InputWrapText text="나쁨" />
                              <div className="content-stretch flex items-center justify-center overflow-clip shrink-0 size-[40px]" data-name="button" />
                            </InputBox1>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="입력필드">
                          <Label text="최대 라벨" text1="*" additionalClassNames="w-[160px]" />
                          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                            <InputBox1>
                              <InputWrapText text="좋음" />
                              <div className="content-stretch flex items-center justify-center overflow-clip shrink-0 size-[40px]" data-name="button" />
                            </InputBox1>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
                        <LabelText text="도움말 입력" additionalClassNames="w-[160px]" />
                        <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0" data-name="Text Area">
                          <TextArea text="[평가기준]신발의 앞부분이 잘 굽혀지는지, 굽히는데 힘이 많이 들어가는지 평가" text1="[평가방법]신발을 착용 후 걷거나 발 뒤꿈치를 드는 동작을 할 때 부드럽게 발이 굽혀지는지 확인" text2="[답변예시]발 뒤꿈치를 들 때 앞부분이 부드럽게 굽혀지고 걸을 때도 어색한 느낌없이 부드럽게 굽힘 동작이 발생함" />
                        </div>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
                        <LabelText text="도움말 이미지" additionalClassNames="w-[160px]" />
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="field">
                          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                            <div className="overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                                    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="ic-fileformat-jpg">
                                      <Img />
                                    </div>
                                    <ImageText text="help/ image/ 001" text1="12.6 KB" />
                                  </div>
                                  <IcClose />
                                </div>
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                                    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="ic-fileformat-jpg">
                                      <Img />
                                    </div>
                                    <ImageText text="help/ image/ 002" text1="12.6 KB" />
                                  </div>
                                  <IcClose />
                                </div>
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                                    <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="ic-fileformat-jpg">
                                      <Img />
                                    </div>
                                    <ImageText text="help/ image/ 003" text1="12.6 KB" />
                                  </div>
                                  <IcClose />
                                </div>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          </div>
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="btn">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                              <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                <Wrapper4>
                                  <g id="ic_upload">
                                    <path d={svgPaths.p2d04cff0} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                                  </g>
                                </Wrapper4>
                                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">파일 추가</p>
                              </div>
                              <div className="content-stretch flex gap-[4px] items-center justify-end leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]">
                                <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">총</p>
                                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#2a2c2c]">37.8KB</p>
                                <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">/50MB</p>
                              </div>
                            </div>
                            <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                              <Wrapper4>
                                <g id="ic_delete">
                                  <path d={svgPaths.p10611500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.71" id="Vector" />
                                </g>
                              </Wrapper4>
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px]">전체 삭제</p>
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
                <Wrapper2>
                  <g clipPath="url(#clip0_39_9422)" id="ic_add">
                    <path d={svgPaths.p2a6e0600} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_39_9422">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </Wrapper2>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">문항 추가</p>
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
                <Wrapper2>
                  <g id="ic_chevron_down">
                    <path d={svgPaths.p9819500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}