import svgPaths from "./svg-ieepuppe65";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[212px] relative w-[72px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.0001 212">
        {children}
      </svg>
    </div>
  );
}

export default function Heatmap() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full" data-name="heatmap">
      <Wrapper additionalClassNames="shrink-0">
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
      </Wrapper>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Wrapper>
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
          </Wrapper>
        </div>
      </div>
    </div>
  );
}