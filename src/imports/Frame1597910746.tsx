import svgPaths from "./svg-e8jqhjhozb";
import clsx from "clsx";

function Frame1597910755Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-1/2 translate-y-[-50%]">
      <div className="flex-none rotate-[135deg]">{children}</div>
    </div>
  );
}

function Checkbox({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="checkbox">{children}</g>
      </svg>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text, children }: React.PropsWithChildren<Text4Props>) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-right tracking-[-0.042px] w-[24px]">{text}</p>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 680 1">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <Text4 text={text}>
      <path d="M0 0.5H680" id="Vector 9744" stroke="var(--stroke-0, #0C0F0F)" strokeDasharray="4 4" strokeOpacity="0.13" />
    </Text4>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <Text4 text={text}>
      <path d="M0 0.5H680" id="Vector 9743" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
    </Text4>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between not-italic relative shrink-0 text-nowrap w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">{text}</p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-right tracking-[-0.042px]">{text1}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center px-[8px] py-[4px] rounded-[5px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">{text}</p>
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
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.52)] text-center text-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start relative size-full">
      <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">기능성</p>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">개별응답보기</p>
          <div className="relative shrink-0 size-[16px]" data-name="ic_chevron_right">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_45_21137)" id="ic_chevron_right">
                <path d={svgPaths.p11a80500} fill="var(--fill-0, #2A2C2C)" id="Vector" />
              </g>
              <defs>
                <clipPath id="clip0_45_21137">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
            <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
              <Checkbox>
                <rect fill="var(--fill-0, #0085EC)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
                <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
              </Checkbox>
            </div>
            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">가드런 맥스</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
            <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
              <Checkbox>
                <rect fill="var(--fill-0, #9766F8)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
                <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
              </Checkbox>
            </div>
            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">피스테런 3.0</p>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
            <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
              <Checkbox>
                <rect fill="var(--fill-0, #E15634)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
                <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
              </Checkbox>
            </div>
            <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">스위프트인터벌</p>
          </div>
        </div>
        <div className="relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
              <div className="content-stretch flex gap-[10px] h-[352px] items-center justify-center relative shrink-0 w-[480px]">
                <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-start relative shrink-0 w-[240px]" data-name="chart">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="chart">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[240px]" data-name="chart">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
                        <g id="chart">
                          <g id="Polygon 63">
                            <path d={svgPaths.p9181ae0} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p1a956d00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          </g>
                          <g id="Polygon 64">
                            <path d={svgPaths.pee86800} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p53d7980} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          </g>
                          <path d={svgPaths.p5ebc640} id="Polygon 65" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          <g id="Polygon 66">
                            <path d={svgPaths.p288e6b80} fill="var(--fill-0, white)" />
                            <path d={svgPaths.p1d7bcb00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                          </g>
                          <path d={svgPaths.p2995c300} id="Polygon 67" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                        </g>
                      </svg>
                    </div>
                    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[4px] h-[96.774px] items-start ml-[112.26px] mt-[6px] relative w-[15.484px]">
                      <Text text="100" />
                      <Text text="75" />
                      <Text text="50" />
                      <Text text="25" />
                      <Text text="0" />
                    </div>
                    <div className="[grid-area:1_/_1] h-[204px] ml-[35.5px] mt-[17px] relative w-[169px]">
                      <div className="absolute inset-[0_0_-5.42%_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 215.067">
                          <g id="Group 1597909616">
                            <path d={svgPaths.p1218ae00} fill="var(--fill-0, #FF7350)" fillOpacity="0.3" id="Polygon 70" />
                            <path d={svgPaths.p2d219280} fill="var(--fill-0, #AF88FF)" fillOpacity="0.3" id="Polygon 72" />
                            <g id="Group 1597909615">
                              <path d={svgPaths.p395de880} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.3" id="Polygon 71" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" />
                              <g filter="url(#filter0_d_50_3568)" id="Ellipse 13">
                                <circle cx="84.5" cy="6" fill="var(--fill-0, white)" r="6" />
                                <circle cx="84.5" cy="6" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                              </g>
                              <g filter="url(#filter1_d_50_3568)" id="Ellipse 14">
                                <circle cx="58.5" cy="88" fill="var(--fill-0, white)" r="6" />
                                <circle cx="58.5" cy="88" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                              </g>
                              <g filter="url(#filter2_d_50_3568)" id="Ellipse 15">
                                <circle cx="37.5" cy="130" fill="var(--fill-0, white)" r="6" />
                                <circle cx="37.5" cy="130" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                              </g>
                              <g filter="url(#filter3_d_50_3568)" id="Ellipse 16">
                                <circle cx="84.5" cy="198" fill="var(--fill-0, white)" r="6" />
                                <circle cx="84.5" cy="198" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                              </g>
                              <g filter="url(#filter4_d_50_3568)" id="Ellipse 17">
                                <circle cx="149.5" cy="141" fill="var(--fill-0, white)" r="6" />
                                <circle cx="149.5" cy="141" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                              </g>
                              <g filter="url(#filter5_d_50_3568)" id="Ellipse 18">
                                <circle cx="149.5" cy="63.5" fill="var(--fill-0, white)" r="6" />
                                <circle cx="149.5" cy="63.5" r="5.30833" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.83" strokeWidth="1.38333" />
                              </g>
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter0_d_50_3568" width="23.0667" x="72.9667" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="5.53333" />
                              <feGaussianBlur stdDeviation="2.76667" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter1_d_50_3568" width="23.0667" x="46.9667" y="82">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="5.53333" />
                              <feGaussianBlur stdDeviation="2.76667" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter2_d_50_3568" width="23.0667" x="25.9667" y="124">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="5.53333" />
                              <feGaussianBlur stdDeviation="2.76667" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter3_d_50_3568" width="23.0667" x="72.9667" y="192">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="5.53333" />
                              <feGaussianBlur stdDeviation="2.76667" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter4_d_50_3568" width="23.0667" x="137.967" y="135">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="5.53333" />
                              <feGaussianBlur stdDeviation="2.76667" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                            </filter>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.0667" id="filter5_d_50_3568" width="23.0667" x="137.967" y="57.5">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="5.53333" />
                              <feGaussianBlur stdDeviation="2.76667" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_50_3568" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_50_3568" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Text1 text="탄성" additionalClassNames="justify-center left-[-41px] top-[53.5px]" />
                  <div className="absolute bg-[rgba(78,160,255,0.1)] content-stretch flex flex-col items-start left-[94px] px-[8px] py-[4px] rounded-[4px] top-[-36px]">
                    <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap text-right tracking-[-0.042px]">통기성</p>
                    </div>
                  </div>
                  <Text1 text="쿠셔닝" additionalClassNames="left-[-53px] top-[180.5px]" />
                  <Text1 text="편안함" additionalClassNames="left-[240px] top-[53.5px]" />
                  <Text1 text="유연성" additionalClassNames="left-[240px] top-[180.5px]" />
                  <Text1 text="안정성" additionalClassNames="justify-end left-[94px] top-[248px]" />
                </div>
                <div className="absolute content-stretch flex gap-[4px] items-center left-[231px] top-[40.5px]" data-name="tooltip">
                  <div className="relative shadow-[0px_1.469px_4.406px_0px_rgba(0,0,0,0.1),0px_1.469px_2.938px_-1.469px_rgba(0,0,0,0.1)] shrink-0 size-[47px]" data-name="Util / Cursor & Interaction">
                    <div className="absolute inset-[25.32%_24.62%_24.62%_28.33%]" data-name="Group">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1153 23.5271">
                        <g id="Group">
                          <path clipRule="evenodd" d={svgPaths.pc568000} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
                          <path clipRule="evenodd" d={svgPaths.p345da00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-[136px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                    <Helper text="매우나쁨" text1="2건" />
                    <Helper text="나쁨" text1="1건" />
                    <Helper text="보통" text1="5건" />
                    <Helper text="좋음" text1="11건" />
                    <Helper text="매우좋음" text1="8건" />
                    <Frame1597910755Helper>
                      <div className="relative size-[10px]" data-name="Beak">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                            <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, white)" id="Beak" />
                          </svg>
                        </div>
                      </div>
                    </Frame1597910755Helper>
                    <Frame1597910755Helper>
                      <div className="relative size-[10px]" data-name="Beak (Stroke)">
                        <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                            <path clipRule="evenodd" d="M0 10H10V0H8.75V8.75H0V10Z" fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" fillRule="evenodd" id="Beak (Stroke)" />
                          </svg>
                        </div>
                      </div>
                    </Frame1597910755Helper>
                  </div>
                </div>
              </div>
              <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-start pb-[48px] pt-[24px] px-[24px] relative w-full">
                    <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">통기성</p>
                    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                      <Text2 text="100" />
                      <Text3 text="75" />
                      <Text3 text="50" />
                      <Text3 text="25" />
                      <Text2 text="0" />
                    </div>
                    <div className="absolute content-stretch flex gap-[40px] items-end justify-center left-[calc(50%+20.5px)] top-[calc(50%+38.5px)] translate-x-[-50%] translate-y-[-50%] w-[583px]">
                      <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
                        <div className="bg-[#d4d4d4] h-[144px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                        <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50.5px] not-italic overflow-ellipsis overflow-hidden text-[#2a2c2c] text-[16px] text-center text-nowrap top-[61px] tracking-[-0.08px] translate-x-[-50%]">68</p>
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-[min-content]">카테고리 평균</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
                        <div className="bg-[#0085ec] h-[191px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-[min-content]">가드런 맥스</p>
                        <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50.5px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[84px] tracking-[-0.08px] translate-x-[-50%]">88</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] items-center justify-end relative shrink-0 w-[100px]">
                        <div className="bg-[#9766f8] h-[144px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                        <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50.5px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[61px] tracking-[-0.08px] translate-x-[-50%]">68</p>
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">피스테런3.0</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[16px] h-[146px] items-center justify-end relative shrink-0 w-[100px]">
                        <div className="basis-0 bg-[#e15634] grow min-h-px min-w-px rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-[80px]" data-name="bar" />
                        <p className="-webkit-box absolute font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] left-[50px] not-italic overflow-ellipsis overflow-hidden text-[16px] text-center text-nowrap text-white top-[47px] tracking-[-0.08px] translate-x-[-50%]">52</p>
                        <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">스위프트인터벌</p>
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