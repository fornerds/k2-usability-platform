import svgPaths from "./svg-i2bhmaxcda";
import clsx from "clsx";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("h-[212px] relative w-[72px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0001 212">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type SegmentedControlItemProps = {
  additionalClassNames?: string;
};

function SegmentedControlItem({ children, additionalClassNames = "" }: React.PropsWithChildren<SegmentedControlItemProps>) {
  return (
    <div className={clsx("basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 cursor-pointer", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ContentsTabsDivider() {
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
type ContentsTabItemTextProps = {
  text: string;
};

function ContentsTabItemText({ text }: ContentsTabItemTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.29)] text-justify text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] size-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tab/범례">
        <div className="content-stretch flex items-center relative shrink-0" data-name="contents Tabs">
          <div className="bg-white relative rounded-[7px] shrink-0" data-name="_contents Tab Item">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-justify text-nowrap tracking-[-0.042px]">신발 길이</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
          </div>
          <ContentsTabItemText text="발볼 둘레" />
          <ContentsTabsDivider />
          <ContentsTabItemText text="발등" />
          <ContentsTabsDivider />
          <ContentsTabItemText text="발 뒤꿈치" />
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
            <SegmentedControlItem additionalClassNames="bg-white shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)]">
              <Wrapper1>
                <g id="ic_image">
                  <path d={svgPaths.pc98f9f0} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                </g>
              </Wrapper1>
            </SegmentedControlItem>
            <SegmentedControlItem>
              <Wrapper1>
                <g id="ic_tune">
                  <path d={svgPaths.p34a10e80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper1>
            </SegmentedControlItem>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full">
        <Wrapper>
          <div className="content-stretch flex flex-col gap-[24px] h-[299px] items-center justify-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] h-[212px] items-center relative shrink-0" data-name="heatmap">
              <Wrapper2 additionalClassNames="shrink-0">
                <g id="Group 1597909599">
                  <g id="Vector 37">
                    <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                    <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                  </g>
                  <g id="Mask group">
                    <mask height="212" id="mask0_50_3580" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                      <g id="Vector 39">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                    </mask>
                    <g mask="url(#mask0_50_3580)">
                      <g id="Ellipse 43">
                        <g filter="url(#filter0_f_50_3580)" id="Ellipse 35">
                          <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3580)" r="37.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Vector 38">
                    <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                    <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3580" width="91" x="-3" y="-14">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_50_3580" stdDeviation="4" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3580" r="1">
                    <stop offset="0.25" stopColor="#2873FB" />
                    <stop offset="0.7" stopColor="#1CC6FA" />
                    <stop offset="0.845" stopColor="#49FFF9" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </Wrapper2>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <Wrapper2>
                    <g id="Group 1597909605">
                      <g id="Vector 37">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g id="Mask group">
                        <mask height="212" id="mask0_50_3748" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g id="Vector 39">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_50_3748)">
                          <g id="Ellipse 43">
                            <g filter="url(#filter0_f_50_3748)" id="Ellipse 35">
                              <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3748)" r="37.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Vector 38">
                        <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                        <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3748" width="91" x="-3" y="-14">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_50_3748" stdDeviation="4" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3748" r="1">
                        <stop offset="0.25" stopColor="#2873FB" />
                        <stop offset="0.7" stopColor="#1CC6FA" />
                        <stop offset="0.845" stopColor="#49FFF9" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="content-stretch flex flex-col gap-[24px] h-[299px] items-center justify-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] h-[212px] items-center relative shrink-0" data-name="heatmap">
              <Wrapper2 additionalClassNames="shrink-0">
                <g id="Group 1597909599">
                  <g id="Vector 37">
                    <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                    <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                  </g>
                  <g id="Mask group">
                    <mask height="212" id="mask0_50_3713" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                      <g id="Vector 39">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                    </mask>
                    <g mask="url(#mask0_50_3713)">
                      <g id="Ellipse 43">
                        <g filter="url(#filter0_f_50_3713)" id="Ellipse 35">
                          <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3713)" r="37.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Vector 38">
                    <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                    <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3713" width="91" x="-3" y="-14">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_50_3713" stdDeviation="4" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3713" r="1">
                    <stop offset="0.25" stopColor="#00FF00" />
                    <stop offset="0.7" stopColor="#1CFAB0" />
                    <stop offset="0.845" stopColor="#B0FF49" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </Wrapper2>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <Wrapper2>
                    <g id="Group 1597909605">
                      <g id="Vector 37">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g id="Mask group">
                        <mask height="212" id="mask0_50_3679" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g id="Vector 39">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_50_3679)">
                          <g id="Ellipse 43">
                            <g filter="url(#filter0_f_50_3679)" id="Ellipse 35">
                              <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3679)" r="37.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Vector 38">
                        <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                        <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3679" width="91" x="-3" y="-14">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_50_3679" stdDeviation="4" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3679" r="1">
                        <stop offset="0.25" stopColor="#00FF00" />
                        <stop offset="0.7" stopColor="#1CFAB0" />
                        <stop offset="0.845" stopColor="#B0FF49" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="content-stretch flex flex-col gap-[24px] h-[296px] items-center justify-center overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] h-[212px] items-center relative shrink-0" data-name="heatmap">
              <Wrapper2 additionalClassNames="shrink-0">
                <g id="Group 1597909599">
                  <g id="Vector 37">
                    <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                    <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                  </g>
                  <g id="Mask group">
                    <mask height="212" id="mask0_50_3740" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                      <g id="Vector 39">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                    </mask>
                    <g mask="url(#mask0_50_3740)">
                      <g id="Ellipse 43">
                        <g filter="url(#filter0_f_50_3740)" id="Ellipse 35">
                          <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3740)" r="37.5" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Vector 38">
                    <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                    <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3740" width="91" x="-3" y="-14">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_50_3740" stdDeviation="4" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3740" r="1">
                    <stop offset="0.25" stopColor="#FF0000" />
                    <stop offset="0.7" stopColor="#FA9E1C" />
                    <stop offset="0.845" stopColor="#FFF649" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </Wrapper2>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <Wrapper2>
                    <g id="Group 1597909605">
                      <g id="Vector 37">
                        <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                        <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                      <g id="Mask group">
                        <mask height="212" id="mask0_50_3539" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="72" x="0" y="0">
                          <g id="Vector 39">
                            <path d={svgPaths.p31d4e8e0} fill="var(--fill-0, #E2E2E2)" />
                            <path d={svgPaths.p16ecc380} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                          </g>
                        </mask>
                        <g mask="url(#mask0_50_3539)">
                          <g id="Ellipse 43">
                            <g filter="url(#filter0_f_50_3539)" id="Ellipse 35">
                              <circle cx="42.5" cy="31.5" fill="url(#paint0_radial_50_3539)" r="37.5" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Vector 38">
                        <path d={svgPaths.p60b5100} fill="var(--fill-0, #F4F3F3)" />
                        <path d={svgPaths.p3ae07000} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" strokeWidth="1.19101" />
                      </g>
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="91" id="filter0_f_50_3539" width="91" x="-3" y="-14">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_50_3539" stdDeviation="4" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(42.5 31.5) rotate(90) scale(37.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_50_3539" r="1">
                        <stop offset="0.25" stopColor="#FF0000" />
                        <stop offset="0.7" stopColor="#FA9E1C" />
                        <stop offset="0.845" stopColor="#FFF649" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}