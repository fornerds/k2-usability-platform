import svgPaths from "./svg-aavsgonuu1";
import imgImage4 from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";
import imgImage5 from "@/assets/864a3c9bc3adad5251021636f6ef8e09449470b8.png";
import imgImage6 from "@/assets/7885c67f6aac708b6cd51cb2d7a30e37c72e817d.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <Wrapper1>{children}</Wrapper1>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
    </div>
  );
}

function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function Img({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[220px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute h-[65.094px] left-[27.83%] right-[33.25%] top-[calc(50%-7px)] translate-y-[-50%]">
      <div className="absolute inset-[0_-2.62%_-12.29%_-2.62%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 160.546 73.0943"
        >
          <g id="Group 1597909515">
            <g filter="url(#filter0_d_50_3729)" id="Ellipse 1">
              <circle
                cx="81.6595"
                cy="5.54717"
                fill="var(--fill-0, #FF253F)"
                r="5.54717"
              />
              <circle
                cx="81.6595"
                cy="5.54717"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter1_d_50_3729)" id="Ellipse 2">
              <circle
                cx="65.0189"
                cy="7.54717"
                fill="var(--fill-0, #FF253F)"
                r="5.54717"
              />
              <circle
                cx="65.0189"
                cy="7.54717"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter2_d_50_3729)" id="Ellipse 9">
              <circle
                cx="51.1507"
                cy="16.5472"
                fill="var(--fill-0, #FF253F)"
                r="5.54717"
              />
              <circle
                cx="51.1507"
                cy="16.5472"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter3_d_50_3729)" id="Ellipse 3">
              <circle
                cx="40.056"
                cy="56.5472"
                fill="var(--fill-0, #00B56B)"
                r="5.54717"
              />
              <circle
                cx="40.056"
                cy="56.5472"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter4_d_50_3729)" id="Ellipse 7">
              <circle
                cx="150.999"
                cy="5.54717"
                fill="var(--fill-0, #FF253F)"
                r="5.54717"
              />
              <circle
                cx="150.999"
                cy="5.54717"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter5_d_50_3729)" id="Ellipse 11">
              <circle
                cx="145.452"
                cy="19.5472"
                fill="var(--fill-0, #FF253F)"
                r="5.54717"
              />
              <circle
                cx="145.452"
                cy="19.5472"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter6_d_50_3729)" id="Ellipse 5">
              <circle
                cx="9.54717"
                cy="34.5472"
                fill="var(--fill-0, #00B56B)"
                r="5.54717"
              />
              <circle
                cx="9.54717"
                cy="34.5472"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter7_d_50_3729)" id="Ellipse 6">
              <circle
                cx="28.9622"
                cy="59.5472"
                fill="var(--fill-0, #00B56B)"
                r="5.54717"
              />
              <circle
                cx="28.9622"
                cy="59.5472"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
            <g filter="url(#filter8_d_50_3729)" id="Ellipse 4">
              <circle
                cx="64.095"
                cy="56.5472"
                fill="var(--fill-0, #00B56B)"
                r="5.54717"
              />
              <circle
                cx="64.095"
                cy="56.5472"
                r="5.04717"
                stroke="var(--stroke-0, white)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter0_d_50_3729"
              width="19.0943"
              x="72.1123"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter1_d_50_3729"
              width="19.0943"
              x="55.4717"
              y="2"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter2_d_50_3729"
              width="19.0943"
              x="41.6035"
              y="11"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter3_d_50_3729"
              width="19.0943"
              x="30.5088"
              y="51"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter4_d_50_3729"
              width="19.0943"
              x="141.452"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter5_d_50_3729"
              width="19.0943"
              x="135.905"
              y="14"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter6_d_50_3729"
              width="19.0943"
              x="0"
              y="29"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter7_d_50_3729"
              width="19.0943"
              x="19.415"
              y="54"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.0943"
              id="filter8_d_50_3729"
              width="19.0943"
              x="54.5479"
              y="51"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_50_3729"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_50_3729"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[16px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g id="ic_thumb down">
                <path
                  d={svgPaths.p36588100}
                  fill="var(--fill-0, #FF253F)"
                  id="Vector"
                />
              </g>
            </svg>
          </div>
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ff253f] text-[12px] text-nowrap">
            {"부정"}
          </p>
        </div>
        <div className="h-[12px] relative shrink-0 w-0">
          <div
            className="absolute inset-[-8.33%_-1px]"
            style={
              { "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties
            }
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 2 14"
            >
              <path
                d="M1 1V13"
                id="Vector 9740"
                stroke="var(--stroke-0, #0C0F0F)"
                strokeLinecap="round"
                strokeOpacity="0.13"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">
          {"박성한"}
        </p>
      </div>
      <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[12px] w-full">{`“신발의 반발 탄성이 추진력을 준다기 보다는 딱딱한 느낌이 들게 해서 거슬리는 느낌이 들었다.” `}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-[36px] items-center justify-center min-h-px min-w-px relative rounded-br-[2px] rounded-tr-[2px] shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        {text}
      </p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="bg-[#00b56b] content-stretch flex h-[36px] items-center justify-center relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[272px]">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="bg-[#00b56b] rounded-[4px] shrink-0 size-[14px]" />
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        {text}
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative rounded-[12px] size-full">
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
        <Wrapper1>
          <Img>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div
                className="relative shrink-0 size-[240px]"
                data-name="image 4"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgImage4}
                />
              </div>
            </div>
            <div
              className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[184px] translate-x-[-50%]"
              data-name="label"
            >
              <Text text="긍정" />
              <Text1 text="부정" />
            </div>
            <div className="absolute h-[65.094px] left-[27.83%] right-[28.3%] top-[calc(50%-7px)] translate-y-[-50%]">
              <div className="absolute inset-[0_-2.33%_-12.29%_-2.33%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 179.962 73.0943"
                >
                  <g id="Group 1597909515">
                    <g filter="url(#filter0_d_50_3756)" id="Ellipse 1">
                      <circle
                        cx="81.6595"
                        cy="5.54717"
                        fill="var(--fill-0, #FF253F)"
                        r="5.54717"
                      />
                      <circle
                        cx="81.6595"
                        cy="5.54717"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter1_d_50_3756)" id="Ellipse 2">
                      <circle
                        cx="65.0189"
                        cy="7.54717"
                        fill="var(--fill-0, #FF253F)"
                        r="5.54717"
                      />
                      <circle
                        cx="65.0189"
                        cy="7.54717"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter2_d_50_3756)" id="Ellipse 9">
                      <circle
                        cx="51.1507"
                        cy="16.5472"
                        fill="var(--fill-0, #FF253F)"
                        r="5.54717"
                      />
                      <circle
                        cx="51.1507"
                        cy="16.5472"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter3_d_50_3756)" id="Ellipse 3">
                      <circle
                        cx="40.056"
                        cy="56.5472"
                        fill="var(--fill-0, #00B56B)"
                        r="5.54717"
                      />
                      <circle
                        cx="40.056"
                        cy="56.5472"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter4_d_50_3756)" id="Ellipse 7">
                      <circle
                        cx="150.999"
                        cy="5.54717"
                        fill="var(--fill-0, #FF253F)"
                        r="5.54717"
                      />
                      <circle
                        cx="150.999"
                        cy="5.54717"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter5_d_50_3756)" id="Ellipse 11">
                      <circle
                        cx="145.452"
                        cy="19.5472"
                        fill="var(--fill-0, #FF253F)"
                        r="5.54717"
                      />
                      <circle
                        cx="145.452"
                        cy="19.5472"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter6_d_50_3756)" id="Ellipse 5">
                      <circle
                        cx="9.54717"
                        cy="34.5472"
                        fill="var(--fill-0, #00B56B)"
                        r="5.54717"
                      />
                      <circle
                        cx="9.54717"
                        cy="34.5472"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter7_d_50_3756)" id="Ellipse 6">
                      <circle
                        cx="28.9622"
                        cy="59.5472"
                        fill="var(--fill-0, #00B56B)"
                        r="5.54717"
                      />
                      <circle
                        cx="28.9622"
                        cy="59.5472"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g filter="url(#filter8_d_50_3756)" id="Ellipse 4">
                      <circle
                        cx="64.095"
                        cy="56.5472"
                        fill="var(--fill-0, #00B56B)"
                        r="5.54717"
                      />
                      <circle
                        cx="64.095"
                        cy="56.5472"
                        r="5.04717"
                        stroke="var(--stroke-0, white)"
                      />
                    </g>
                    <g id="Group 1597909595">
                      <g filter="url(#filter9_d_50_3756)" id="Ellipse 8">
                        <circle
                          cx="164.868"
                          cy="11.5475"
                          fill="var(--fill-0, #FF253F)"
                          r="11.0943"
                        />
                        <circle
                          cx="164.868"
                          cy="11.5475"
                          r="10.5943"
                          stroke="var(--stroke-0, white)"
                        />
                      </g>
                      <g filter="url(#filter10_d_50_3756)" id="Ellipse 12">
                        <circle
                          cx="164.867"
                          cy="11.5472"
                          fill="var(--fill-0, white)"
                          r="5.54717"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter0_d_50_3756"
                      width="19.0943"
                      x="72.1123"
                      y="0"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter1_d_50_3756"
                      width="19.0943"
                      x="55.4717"
                      y="2"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter2_d_50_3756"
                      width="19.0943"
                      x="41.6035"
                      y="11"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter3_d_50_3756"
                      width="19.0943"
                      x="30.5088"
                      y="51"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter4_d_50_3756"
                      width="19.0943"
                      x="141.452"
                      y="0"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter5_d_50_3756"
                      width="19.0943"
                      x="135.905"
                      y="14"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter6_d_50_3756"
                      width="19.0943"
                      x="0"
                      y="29"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter7_d_50_3756"
                      width="19.0943"
                      x="19.415"
                      y="54"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter8_d_50_3756"
                      width="19.0943"
                      x="54.5479"
                      y="51"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="30.1887"
                      id="filter9_d_50_3756"
                      width="30.1887"
                      x="149.773"
                      y="0.453125"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="19.0943"
                      id="filter10_d_50_3756"
                      width="19.0943"
                      x="155.32"
                      y="6"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="effect1_dropShadow_50_3756"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_50_3756"
                        mode="normal"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </Img>
          <Card>
            <div
              className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full"
              data-name="data"
            >
              <Text2 text="76%" />
              <Text3 text="24%" />
            </div>
            <Comment />
          </Card>
        </Wrapper1>
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
      </div>
      <Wrapper>
        <Img>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div
              className="relative rounded-[2px] shrink-0 size-[240px]"
              data-name="image 4"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
                <img
                  alt=""
                  className="absolute h-[133.46%] left-0 max-w-none top-[-13.11%] w-full"
                  src={imgImage5}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[184px] translate-x-[-50%]"
            data-name="label"
          >
            <Text text="긍정" />
            <Text1 text="부정" />
          </div>
          <Helper />
        </Img>
        <Card>
          <div
            className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full"
            data-name="data"
          >
            <Text2 text="76%" />
            <Text3 text="24%" />
          </div>
          <Comment />
        </Card>
      </Wrapper>
      <Wrapper>
        <Img>
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className="relative shrink-0 size-[240px]" data-name="image 4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[133.46%] left-0 max-w-none top-[-17.05%] w-full"
                  src={imgImage6}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[184px] translate-x-[-50%]"
            data-name="label"
          >
            <Text text="긍정" />
            <Text1 text="부정" />
          </div>
          <Helper />
        </Img>
        <Card>
          <div
            className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full"
            data-name="data"
          >
            <Text2 text="76%" />
            <Text3 text="24%" />
          </div>
          <Comment />
        </Card>
      </Wrapper>
    </div>
  );
}
