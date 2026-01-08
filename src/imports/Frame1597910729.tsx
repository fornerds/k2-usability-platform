import svgPaths from "./svg-4icwum0szj";
import clsx from "clsx";
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("h-[212px] relative w-[72px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0001 212">
        {children}
      </svg>
    </div>
  );
}
type DotBackgroundImageProps = {
  additionalClassNames?: string;
};

function DotBackgroundImage({ additionalClassNames = "" }: DotBackgroundImageProps) {
  return (
    <div className={clsx("absolute h-[10px] top-[calc(50%-0.5px)] translate-y-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="dot">
          <circle cx="5" cy="5" fill="var(--fill-0, #1E2020)" id="Ellipse 8" r="5" />
        </g>
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#1e2020] content-stretch flex flex-col items-center px-[10px] py-[4px] rounded-[4px] top-[48px] translate-x-[-50%]", additionalClassNames)}>
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
        <div className="absolute content-stretch flex h-[12px] items-center justify-between left-0 opacity-60 px-[12px] py-0 top-[4px] w-[768px]">
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
        <div className="absolute bg-white h-[20px] left-[234px] top-0 w-[4px]" />
        <div className="absolute bg-white h-[20px] left-[531px] top-0 w-[4px]" />
      </div>
      <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] items-center justify-between leading-[17px] not-italic relative shrink-0 text-[12px] text-center w-full">
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
  );
}

function Frame1597910750BackgroundImage() {
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
type Helper2DepthTabItemBackgroundImageAndTextProps = {
  text: string;
};

function Helper2DepthTabItemBackgroundImageAndText({ text }: Helper2DepthTabItemBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] size-full">
      <div className="content-stretch flex items-center relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0">
          <div className="bg-white relative rounded-[7px] shrink-0" data-name="_2depth Tab Item">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">전체</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
          </div>
          <Helper2DepthTabItemBackgroundImageAndText text="신발 길이" />
          <Frame1597910750BackgroundImage />
          <Helper2DepthTabItemBackgroundImageAndText text="발볼 둘레" />
          <Frame1597910750BackgroundImage />
          <Helper2DepthTabItemBackgroundImageAndText text="발등" />
          <Frame1597910750BackgroundImage />
          <Helper2DepthTabItemBackgroundImageAndText text="발 뒤꿈치" />
        </div>
      </div>
      <div className="relative rounded-[12px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
            <div className="h-[324px] relative shrink-0 w-[480px]">
              <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[calc(50%+0.5px)] px-[12px] py-[8px] rounded-[8px] top-[267px] translate-x-[-50%]" data-name="label">
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="bg-[#2976fb] rounded-[4px] shrink-0 size-[14px]" />
                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">헐거움</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="bg-[#00e613] rounded-[4px] shrink-0 size-[14px]" />
                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">적당함</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                    <div className="bg-[#ff0402] rounded-[4px] shrink-0 size-[14px]" />
                    <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">압박감</p>
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[12px] h-[212px] items-center left-[162px] top-[40px]" data-name="heatmap">
                  <BackgroundImage1 additionalClassNames="shrink-0">
                    <g id="Group 1597909599">
                      <g id="Vector 37">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g id="Mask group">
                        <mask height="212" id="mask0_43_20149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g id="Vector 39">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_43_20149)">
                          <g id="Ellipse 43">
                            <g filter="url(#filter0_f_43_20149)" id="Ellipse 35">
                              <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_43_20149)" r="37.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Vector 38">
                        <path d={svgPaths.p23bae100} fill="var(--fill-0, #F4F3F3)" />
                        <path d={svgPaths.pb1ff8c0} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g id="Mask group_2">
                        <mask height="212" id="mask1_43_20149" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g id="Vector 30">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.pcb25f80} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask1_43_20149)">
                          <g id="Ellipse 39">
                            <g filter="url(#filter1_f_43_20149)" id="Ellipse 35_2">
                              <circle cx="45.5" cy="212.5" fill="url(#paint1_radial_43_20149)" r="28.5" />
                            </g>
                          </g>
                          <g id="Ellipse 42">
                            <g filter="url(#filter2_f_43_20149)" id="Ellipse 35_3">
                              <ellipse cx="34" cy="86" fill="url(#paint2_radial_43_20149)" rx="27" ry="38" />
                            </g>
                          </g>
                          <g id="Ellipse 40">
                            <g filter="url(#filter3_f_43_20149)" id="Ellipse 35_4">
                              <ellipse cx="-5.5" cy="60.5" fill="url(#paint3_radial_43_20149)" rx="16.5" ry="28.5" />
                            </g>
                          </g>
                          <g id="Ellipse 41">
                            <g filter="url(#filter4_f_43_20149)" id="Ellipse 35_5">
                              <ellipse cx="72.5" cy="60.5" fill="url(#paint4_radial_43_20149)" rx="16.5" ry="28.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_43_20149" width="91" x="-3" y="-14">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="4" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter1_f_43_20149" width="77" x="7" y="174">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96" id="filter2_f_43_20149" width="74" x="-3" y="38">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter3_f_43_20149" width="53" x="-32" y="22">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter4_f_43_20149" width="53" x="46" y="22">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_43_20149" stdDeviation="5" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#00FF00" />
                        <stop offset="0.7" stopColor="#1CFAB0" />
                        <stop offset="0.845" stopColor="#B0FF49" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(45.5 212.5) rotate(90) scale(28.5)" gradientUnits="userSpaceOnUse" id="paint1_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#00FF00" />
                        <stop offset="0.7" stopColor="#1CFAB0" />
                        <stop offset="0.845" stopColor="#B0FF49" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(34 86) rotate(90) scale(38 27)" gradientUnits="userSpaceOnUse" id="paint2_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#FF0000" />
                        <stop offset="0.7" stopColor="#FA9E1C" />
                        <stop offset="0.845" stopColor="#FFF649" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(-5.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint3_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#2873FB" />
                        <stop offset="0.7" stopColor="#1CC6FA" />
                        <stop offset="0.845" stopColor="#49FFF9" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(72.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint4_radial_43_20149" r="1">
                        <stop offset="0.25" stopColor="#2873FB" />
                        <stop offset="0.7" stopColor="#1CC6FA" />
                        <stop offset="0.845" stopColor="#49FFF9" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </BackgroundImage1>
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                      <BackgroundImage1>
                        <g id="Group 1597909605">
                          <g id="Vector 37">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.p35cacb00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          </g>
                          <g id="Mask group">
                            <mask height="212" id="mask0_43_20109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                              <g id="Vector 39">
                                <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                <path d={svgPaths.p35cacb00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                              </g>
                            </mask>
                            <g mask="url(#mask0_43_20109)">
                              <g id="Ellipse 43">
                                <g filter="url(#filter0_f_43_20109)" id="Ellipse 35">
                                  <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_43_20109)" r="37.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Vector 38">
                            <path d={svgPaths.p23bae100} fill="var(--fill-0, #F4F3F3)" />
                            <path d={svgPaths.pb1ff8c0} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                          <g id="Mask group_2">
                            <mask height="212" id="mask1_43_20109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                              <g id="Vector 30">
                                <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                                <path d={svgPaths.pcb25f80} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                              </g>
                            </mask>
                            <g mask="url(#mask1_43_20109)">
                              <g id="Ellipse 39">
                                <g filter="url(#filter1_f_43_20109)" id="Ellipse 35_2">
                                  <circle cx="45.5" cy="212.5" fill="url(#paint1_radial_43_20109)" r="28.5" />
                                </g>
                              </g>
                              <g id="Ellipse 42">
                                <g filter="url(#filter2_f_43_20109)" id="Ellipse 35_3">
                                  <ellipse cx="34" cy="86" fill="url(#paint2_radial_43_20109)" rx="27" ry="38" />
                                </g>
                              </g>
                              <g id="Ellipse 40">
                                <g filter="url(#filter3_f_43_20109)" id="Ellipse 35_4">
                                  <ellipse cx="-5.5" cy="60.5" fill="url(#paint3_radial_43_20109)" rx="16.5" ry="28.5" />
                                </g>
                              </g>
                              <g id="Ellipse 41">
                                <g filter="url(#filter4_f_43_20109)" id="Ellipse 35_5">
                                  <ellipse cx="72.5" cy="60.5" fill="url(#paint4_radial_43_20109)" rx="16.5" ry="28.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_43_20109" width="91" x="-3" y="-14">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="4" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter1_f_43_20109" width="77" x="7" y="174">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96" id="filter2_f_43_20109" width="74" x="-3" y="38">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter3_f_43_20109" width="53" x="-32" y="22">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="77" id="filter4_f_43_20109" width="53" x="46" y="22">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_43_20109" stdDeviation="5" />
                          </filter>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#00FF00" />
                            <stop offset="0.7" stopColor="#1CFAB0" />
                            <stop offset="0.845" stopColor="#B0FF49" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(45.5 212.5) rotate(90) scale(28.5)" gradientUnits="userSpaceOnUse" id="paint1_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#00FF00" />
                            <stop offset="0.7" stopColor="#1CFAB0" />
                            <stop offset="0.845" stopColor="#B0FF49" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(34 86) rotate(90) scale(38 27)" gradientUnits="userSpaceOnUse" id="paint2_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#FF0000" />
                            <stop offset="0.7" stopColor="#FA9E1C" />
                            <stop offset="0.845" stopColor="#FFF649" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(-5.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint3_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#2873FB" />
                            <stop offset="0.7" stopColor="#1CC6FA" />
                            <stop offset="0.845" stopColor="#49FFF9" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(72.5 60.5) rotate(90) scale(28.5 16.5)" gradientUnits="userSpaceOnUse" id="paint4_radial_43_20109" r="1">
                            <stop offset="0.25" stopColor="#2873FB" />
                            <stop offset="0.7" stopColor="#1CC6FA" />
                            <stop offset="0.845" stopColor="#49FFF9" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </BackgroundImage1>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative rounded-[12px] shrink-0">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">신발 길이</p>
                <BackgroundImage />
                <div className="absolute contents left-1/2 top-[29px] translate-x-[-50%]">
                  <BackgroundImageAndText text="0" additionalClassNames="left-1/2" />
                  <div className="absolute bg-[#1e2020] h-[16px] left-1/2 rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                  <DotBackgroundImage additionalClassNames="left-[49.35%] right-[49.35%]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발볼 둘레</p>
                <BackgroundImage />
                <div className="absolute contents left-[calc(50%-223px)] top-[29px] translate-x-[-50%]">
                  <BackgroundImageAndText text="-30" additionalClassNames="left-[calc(50%-223px)]" />
                  <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%-223px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                  <DotBackgroundImage additionalClassNames="left-[20.31%] right-[78.39%]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발등</p>
                <BackgroundImage />
                <div className="absolute contents left-[calc(50%+299px)] top-[29px] translate-x-[-50%]">
                  <BackgroundImageAndText text="40" additionalClassNames="left-[calc(50%+299px)]" />
                  <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+299px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                  <DotBackgroundImage additionalClassNames="left-[88.28%] right-[10.42%]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발 뒤꿈치</p>
                <BackgroundImage />
                <div className="absolute contents left-[calc(50%+75px)] top-[29px] translate-x-[-50%]">
                  <BackgroundImageAndText text="10" additionalClassNames="left-[calc(50%+75px)]" />
                  <div className="absolute bg-[#1e2020] h-[16px] left-[calc(50%+75px)] rounded-[4px] top-[36px] translate-x-[-50%] w-[2px]" />
                  <DotBackgroundImage additionalClassNames="left-[59.11%] right-[39.58%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}