import svgPaths from "./svg-passue2w1h";
import imgImage4 from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-w-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative w-full">{children}</div>
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
      <Wrapper>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <Wrapper1>
              <g id="ic_thumb up">
                <path d={svgPaths.p3d297b00} fill="var(--fill-0, #009759)" id="Vector" />
              </g>
            </Wrapper1>
            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#009759] text-[12px] text-nowrap">{"긍정"}</p>
          </div>
          <Helper1 />
          <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{"박성한"}</p>
        </div>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{text}</p>
      </Wrapper>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <Wrapper>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <Wrapper1>
            <g id="ic_thumb down">
              <path d={svgPaths.p36588100} fill="var(--fill-0, #FF253F)" id="Vector" />
            </g>
          </Wrapper1>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ff253f] text-[12px] text-nowrap">{"부정"}</p>
        </div>
        <Helper1 />
        <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{"나성윤"}</p>
      </div>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{text}</p>
    </Wrapper>
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

function InfoHelper() {
  return (
    <div className="h-[28px] relative shrink-0 w-0">
      <div className="absolute inset-[-3.57%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
          <path d="M1 1V29" id="Vector 9742" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
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

export default function Contents() {
  return (
    <div className="relative rounded-[12px] size-full" data-name="contents">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center overflow-clip pb-0 pt-[24px] px-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[480px]">
            <div className="relative shrink-0 w-full" data-name="통증부위">
              <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pl-0 pr-[24px] py-0 relative w-full">
                  <div className="h-[240px] relative rounded-[12px] shrink-0 w-full" data-name="img">
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <div className="absolute left-1/2 size-[288px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image 4">
                            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
                          </div>
                        </div>
                        <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[204px] translate-x-[-50%]" data-name="label">
                          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                            <div className="relative shrink-0 size-[14px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p26976600} fill="var(--fill-0, #00B56B)" id="Rectangle 34635940" />
                              </svg>
                            </div>
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">긍정</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                            <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">부정</p>
                          </div>
                        </div>
                        <div className="absolute h-[78.4px] left-[26.67%] right-[26.77%] top-[calc(50%-17.5px)] translate-y-[-50%]">
                          <div className="absolute inset-[0_-1.88%_-10.2%_-1.88%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220.349 86.4">
                              <g id="Group 1597909515">
                                <g filter="url(#filter0_d_43_20167)" id="Ellipse 1">
                                  <circle cx="82.8504" cy="26.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                  <circle cx="82.8504" cy="26.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter1_d_43_20167)" id="Ellipse 2">
                                  <circle cx="69.5496" cy="18.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                  <circle cx="69.5496" cy="18.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter2_d_43_20167)" id="Ellipse 9">
                                  <circle cx="61.95" cy="29.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                  <circle cx="61.95" cy="29.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter3_d_43_20167)" id="Ellipse 3">
                                  <circle cx="50.5496" cy="69.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                  <circle cx="50.5496" cy="69.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter4_d_43_20167)" id="Ellipse 7">
                                  <circle cx="210.649" cy="28.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                  <circle cx="210.649" cy="28.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter5_d_43_20167)" id="Ellipse 11">
                                  <circle cx="168.85" cy="25.7" fill="var(--fill-0, #FF253F)" r="5.7" />
                                  <circle cx="168.85" cy="25.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter6_d_43_20167)" id="Ellipse 5">
                                  <circle cx="9.7" cy="47.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                  <circle cx="9.7" cy="47.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter7_d_43_20167)" id="Ellipse 6">
                                  <circle cx="39.1492" cy="72.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                  <circle cx="39.1492" cy="72.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g filter="url(#filter8_d_43_20167)" id="Ellipse 4">
                                  <circle cx="112.3" cy="5.7" fill="var(--fill-0, #00B56B)" r="5.7" />
                                  <circle cx="112.3" cy="5.7" r="5.2" stroke="var(--stroke-0, white)" />
                                </g>
                                <g id="Group 1597909595">
                                  <g filter="url(#filter9_d_43_20167)" id="Ellipse 8">
                                    <circle cx="188.8" cy="14.6969" fill="var(--fill-0, #FF253F)" r="11.4" />
                                    <circle cx="188.8" cy="14.6969" r="10.9" stroke="var(--stroke-0, white)" />
                                  </g>
                                  <g filter="url(#filter10_d_43_20167)" id="Ellipse 12">
                                    <circle cx="188.801" cy="14.7" fill="var(--fill-0, white)" r="5.7" />
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter0_d_43_20167" width="19.4" x="73.1504" y="21">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter1_d_43_20167" width="19.4" x="59.8496" y="13">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter2_d_43_20167" width="19.4" x="52.25" y="24">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter3_d_43_20167" width="19.4" x="40.8496" y="64">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter4_d_43_20167" width="19.4" x="200.949" y="23">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter5_d_43_20167" width="19.4" x="159.15" y="20">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter6_d_43_20167" width="19.4" x="0" y="42">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter7_d_43_20167" width="19.4" x="29.4492" y="67">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter8_d_43_20167" width="19.4" x="102.6" y="0">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.8" id="filter9_d_43_20167" width="30.8" x="173.4" y="3.29688">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.4" id="filter10_d_43_20167" width="19.4" x="179.101" y="9">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                  <feOffset dy="4" />
                                  <feGaussianBlur stdDeviation="2" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_20167" />
                                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_20167" mode="normal" result="shape" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="피드백 정보">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative w-full">
                        <div className="content-stretch flex gap-[2px] h-[36px] items-start relative rounded-[8px] shrink-0 w-full" data-name="data">
                          <div className="bg-[#00b56b] content-stretch flex h-full items-center justify-center relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[270px]">
                            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">64%</p>
                          </div>
                          <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0">
                            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">36%</p>
                          </div>
                        </div>
                        <div className="h-[60px] relative shrink-0 w-full" data-name="info">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
                              <Helper text="총 응답수" text1="22건" />
                              <InfoHelper />
                              <Helper text="긍정" text1="15건" />
                              <InfoHelper />
                              <Helper text="부정" text1="8건" />
                              <InfoHelper />
                              <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[100px]">
                                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">가장 많은 응답 부위</p>
                                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">발등</p>
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
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 bg-white content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="피드백">
              <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">사용자 피드백</p>
              <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="comment">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                    <Text text="착용감이 너무 딱딱하고 장시간 신으면 발이 아픕니다." />
                  </div>
                  <CommentText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                  <CommentText text="사이즈가 정사이즈라 딱 맞고 편해요." />
                  <CommentText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                  <CommentText text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다." />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <CommentText text="디자인, 착용감, 내구성 모두 만족스럽습니다. 재구매 의향이 있어요!" />
                  <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full" data-name="comment">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <Text text="디자인, 착용감, 내구성 모두 만족스럽습니다. 재구매 의향이 있어요! 다만 발볼이 다른 브랜드에 비해 좀 좁아요" />
                  </div>
                  <CommentText text="발을 감싸주는 느낌이 좋고, 장시간 착용해도 편안합니다. 다만 점프를 할때 발 뒤꿈치가 살짝 들리는 느낌이 들어요." />
                  {[...Array(2).keys()].map((_, i) => (
                    <CommentText text="무게가 꽤 있어서 장시간 신기엔 부담됩니다." />
                  ))}
                </div>
              </div>
              <div className="absolute bg-gradient-to-b bottom-px from-[rgba(255,255,255,0)] h-[33px] left-0 opacity-[0.48] to-[rgba(0,0,0,0.12)] w-[768px]" data-name="dimmed" />
            </div>
          </div>
          <div className="absolute bg-[#b8b9b9] h-[100px] right-[20px] rounded-[100px] top-[78px] w-[8px]" data-name="Scrollbar" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}