import svgPaths from "./svg-vr0tuo8uyq";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type InputBoxProps = {
  text: string;
};

function InputBox({ children, text }: React.PropsWithChildren<InputBoxProps>) {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-0 py-0 relative size-full">
          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
              <p className="leading-[22px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ff253f] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IcClose() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_close">
          <path d={svgPaths.p2f82b000} fill="var(--fill-0, #2A2C2C)" id="Vector" />
        </g>
      </svg>
    </div>
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

function Jpg() {
  return (
    <div className="absolute h-[3.633px] left-[3.33px] top-[7.33px] w-[9.127px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.12728 3.63285">
        <g id="JPG">
          <path d={svgPaths.p1f52b000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p10597000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2d7d4800} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute inset-[0_8.33%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.0004">
        <g id="img">
          <path d={svgPaths.p2da34100} fill="var(--fill-0, #4EA0FF)" id="Vector" />
          <path d={svgPaths.p1afdbe80} fill="var(--fill-0, #005397)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[144px]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}
type HelperTextTextProps = {
  text: string;
};

function HelperTextText({ text }: HelperTextTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ff253f] text-[14px] tracking-[-0.042px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type LabelProps = {
  text: string;
  text1: string;
};

function Label({ text, text1 }: LabelProps) {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-[144px]">
      <p className="relative shrink-0 text-[#2a2c2c]">{text}</p>
      <p className="relative shrink-0 text-[#4ea0ff]">{text1}</p>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="card">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_6px_9px_0px_rgba(13,14,17,0.03)]" />
      <div className="size-full">
        <div className="content-stretch flex gap-[13px] items-start pl-[48px] pr-[40px] py-[32px] relative size-full">
          <Wrapper additionalClassNames="absolute left-[14px] top-[39px]">
            <g id="ic_drag">
              <path d={svgPaths.p3eb30500} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
            </g>
          </Wrapper>
          <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="contents">
            <div className="content-stretch flex items-center justify-between pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="page title input">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center relative shrink-0" data-name="test">
                <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[22px] text-nowrap tracking-[-0.154px]">
                  <p className="leading-[34px] overflow-ellipsis overflow-hidden">발가락, 발볼 영역(Toe box)</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="btn">
                <Wrapper additionalClassNames="relative shrink-0">
                  <g id="ic_delete">
                    <path d={svgPaths.p1f7bfa00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </g>
                </Wrapper>
                <Wrapper additionalClassNames="relative shrink-0">
                  <g id="ic_chevron_up">
                    <path d={svgPaths.p3a03b900} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                </Wrapper>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="form">
              <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="row">
                <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="입력필드">
                  <Label text="최소 라벨" text1="*" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                    <InputBox text="최소라벨을 입력해주세요" />
                    <HelperTextText text="필수 정보를 미입력하였습니다." />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="입력필드">
                  <Label text="최대 라벨" text1="*" />
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                    <InputBox text="최대라벨을 입력해주세요" />
                    <HelperTextText text="필수 정보를 미입력하였습니다." />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
                <LabelText text="도움말 입력" />
                <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0" data-name="Text Area">
                  <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                    <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
                        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="input-text-wrap">
                          <div className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px]">
                            <p className="mb-0">[평가기준]발 뒤꿈치부터 발가락 앞 부분까지의 피팅감</p>
                            <p className="mb-0">[평가방법]발 뒤꿈치를 신발 뒤에 밀착시켜 고정한 뒤 신발 앞부분 공간에 발가락 끝이 여유있는지 확인</p>
                            <p>[답변예시]뒤꿈치를 밀착해서 신었음에도 불구하고 두번째 발가락 끝이 신발 끝에 닿는 느낌</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="row">
                <LabelText text="도움말 이미지" />
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="field">
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="text-area">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                            <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="image_jpg">
                              <Img />
                              <Jpg />
                            </div>
                            <ImageText text="help/ image/ 001" text1="12.6 KB" />
                          </div>
                          <IcClose />
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                            <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="image_jpg">
                              <Img />
                              <Jpg />
                            </div>
                            <ImageText text="help/ image/ 002" text1="12.6 KB" />
                          </div>
                          <IcClose />
                        </div>
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="img">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="image info">
                            <div className="bg-[rgba(255,255,255,0)] overflow-clip relative shrink-0 size-[16px]" data-name="image_jpg">
                              <Img />
                              <Jpg />
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
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[308px]">
                      <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <Wrapper1>
                          <g clipPath="url(#clip0_34_20480)" id="ic_upload">
                            <path d={svgPaths.p1a103880} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_34_20480">
                              <rect fill="white" height="14" width="14" />
                            </clipPath>
                          </defs>
                        </Wrapper1>
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">파일 추가</p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-end leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]" data-name="data byte">
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">총</p>
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#2a2c2c]">37.8KB</p>
                        <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-[rgba(12,15,15,0.52)]">/50MB</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[3px] shrink-0" data-name="Inline Label Button">
                      <Wrapper1>
                        <g clipPath="url(#clip0_34_20456)" id="ic_delete">
                          <path d={svgPaths.pa683700} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_34_20456">
                            <rect fill="white" height="14" width="14" />
                          </clipPath>
                        </defs>
                      </Wrapper1>
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">전체 삭제</p>
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