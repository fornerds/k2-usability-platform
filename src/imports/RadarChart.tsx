import svgPaths from "./svg-rzxm9yvekt";
import clsx from "clsx";
type ChartLabelProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function ChartLabel({ text, text1, additionalClassNames = "" }: ChartLabelProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[1.721px] items-center leading-[17px] not-italic relative text-[12px] text-nowrap w-[49px]", additionalClassNames)}>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c]">{text}</p>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#0085ec]">{text1}</p>
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
          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.29)] text-center text-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function RadarChart() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="radar chart">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="radar chart">
        <div className="[grid-area:1_/_1] ml-[49px] mt-[21px] relative size-[172px]" data-name="chart">
          <div className="absolute h-[172px] left-0 right-0 top-0" data-name="chart">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 172">
              <g id="chart">
                <path d={svgPaths.p2bd3cf28} id="Polygon 63" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                <g id="Polygon 64">
                  <path d={svgPaths.p68bca00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p3b82f400} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                </g>
                <path d={svgPaths.pb596f00} id="Polygon 65" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                <g id="Polygon 66">
                  <path d={svgPaths.p88e4b00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p39b24f00} stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
                </g>
                <path d={svgPaths.p104d0200} id="Polygon 67" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.13" />
              </g>
            </svg>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-start left-[41.86%] right-[41.86%] top-0" data-name="num">
            <Text text="100" />
            <Text text="75" />
            <Text text="50" />
            <Text text="25" />
            <Text text="0" />
          </div>
        </div>
        <ChartLabel text="탄성" text1="80" additionalClassNames="justify-center ml-[110px] mt-0" />
        <ChartLabel text="통기성" text1="45" additionalClassNames="ml-[221px] mt-[51px]" />
        <ChartLabel text="편안함" text1="55" additionalClassNames="justify-end ml-0 mt-[51px]" />
        <ChartLabel text="유연성" text1="75" additionalClassNames="ml-[221px] mt-[146px]" />
        <ChartLabel text="쿠셔닝" text1="95" additionalClassNames="justify-end ml-0 mt-[146px]" />
        <ChartLabel text="안정성" text1="65" additionalClassNames="justify-center ml-[110px] mt-[197px]" />
        <div className="[grid-area:1_/_1] aspect-[130/130.5] ml-[65px] mt-[35px] relative w-[130px]" data-name="blue">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(78, 160, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 130.5">
              <path d={svgPaths.pb9d0800} fill="var(--fill-0, #4EA0FF)" fillOpacity="0.5" id="blue" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}