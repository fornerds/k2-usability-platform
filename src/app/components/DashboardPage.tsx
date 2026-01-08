import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import svgPaths from "../../imports/svg-v16cagnvmh";
import radarSvgPaths from "../../imports/svg-rzxm9yvekt";
import heatmapSvgPaths from "../../imports/svg-quwtd7mpyd";
import imgImage4 from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";
import imgImage5 from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";
import ReportsPage from "./ReportsPage";
import ReportDetailPage from "./ReportDetailPage";
import ReportComparisonPage from "./ReportComparisonPage";
import QuestionTypesPage from "./QuestionTypesPage";
import QuestionTypeRegisterPage from "./QuestionTypeRegisterPage";
import SurveyListPage from "./SurveyListPage";
import SurveyCreatePage from "./SurveyCreatePage";
import SurveyDetailPage from "./SurveyDetailPage";
import CancelModal from "./CancelModal";
import SurveyAppliedModal from "./SurveyAppliedModal";
import SaveTypeModal from "./SaveTypeModal";
import React from "react";
import { DashboardLayout } from "./templates/DashboardLayout";
import {
  createDashboardIcon,
  createDataIcon,
  createSurveyIcon,
  createListIcon,
  createCommentIcon,
  createProductIcon,
  createCompanyIcon,
  createImageIcon,
  createIdCardIcon,
  createGroupIcon,
  type MenuSection,
} from "./ui/organisms/Sidebar";
import {
  ChevronRight,
  ChevronUp,
  Wrapper16,
  ChevronDown,
} from "./ui/atoms/Icon";

type StatCardProps = {
  label: string;
  value: number;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap font-medium">
      <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
        <p className="mb-0">{label.split(" ")[0]}</p>
        <p>{label.split(" ")[1]}</p>
      </div>
      <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">
        {value}
      </p>
    </div>
  );
}

type CommentCardProps = {
  type: "긍정" | "부정";
  author: string;
  text: string;
  highlighted?: boolean;
};

function CommentCard({
  type,
  author,
  text,
  highlighted = false,
}: CommentCardProps) {
  const isPositive = type === "긍정";

  return (
    <div
      className={`bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full ${
        highlighted
          ? "shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]"
          : ""
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute border ${
          highlighted
            ? "border-[rgba(12,15,15,0.83)]"
            : "border-[rgba(12,15,15,0.13)]"
        } border-solid inset-0 pointer-events-none rounded-[8px]`}
      />
      <div className="min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <Wrapper16>
                <g id={isPositive ? "ic_thumb up" : "ic_thumb down"}>
                  <path
                    d={isPositive ? svgPaths.p3d297b00 : svgPaths.p36588100}
                    fill={`var(--fill-0, ${
                      isPositive ? "#009759" : "#FF253F"
                    })`}
                    id="Vector"
                  />
                </g>
              </Wrapper16>
              <p
                className={`-webkit-box leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap font-semibold ${
                  isPositive ? "text-[#009759]" : "text-[#ff253f]"
                }`}
              >
                {type}
              </p>
            </div>
            <div className="h-[12px] relative shrink-0 w-0">
              <div className="absolute inset-[-8.33%_-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 2 14"
                >
                  <path
                    d="M1 1V13"
                    stroke="#0C0F0F"
                    strokeLinecap="round"
                    strokeOpacity="0.13"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <p className="-webkit-box basis-0 grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] font-medium">
              {author}
            </p>
          </div>
          <p className="leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

type ReportCardProps = {
  title: string;
  items: string[];
  onViewAll?: () => void;
};

function ReportCard({ title, items, onViewAll }: ReportCardProps) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
          <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
            {title}
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={onViewAll}
                className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full hover:bg-gray-50 transition-colors rounded-[4px] p-[4px]"
              >
                <p className="-webkit-box basis-0 grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] tracking-[-0.042px] text-left font-medium">
                  {item}
                </p>
                <ChevronRight />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type Product = {
  name: string;
  image: string;
};

type ProductDropdownProps = {
  products: Product[];
  selectedProduct: string;
  onSelect: (productName: string) => void;
  onClose: () => void;
};

function ProductDropdown({
  products,
  selectedProduct,
  onSelect,
  onClose,
}: ProductDropdownProps) {
  return (
    <div className="absolute left-0 top-[calc(100%+8px)] z-50">
      <div className="bg-white max-h-[264px] min-w-[120px] rounded-[8px] w-[340px] shadow-[0px_10px_15px_-3px_rgba(13,14,17,0.1)]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(9,13,19,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
        />
        <div className="content-stretch flex flex-col items-center max-h-[inherit] min-w-[inherit] overflow-y-auto p-[4px] relative rounded-[inherit] size-full">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => {
                onSelect(product.name);
                onClose();
              }}
              className={`bg-[rgba(255,255,255,0)] h-[44px] relative shrink-0 w-full hover:bg-gray-50 transition-colors rounded-[4px] ${
                product.name === selectedProduct ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[6px] items-center px-[12px] py-0 relative size-full">
                  <div className="pointer-events-none relative rounded-[2px] shrink-0 size-[24px]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-[2px]"
                    >
                      <div className="absolute bg-white inset-0 rounded-[2px]" />
                      <img
                        alt={product.name}
                        className="absolute max-w-none object-50%-50% object-cover rounded-[2px] size-full"
                        src={product.image}
                      />
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 rounded-[2px]"
                    />
                  </div>
                  <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#090d13] text-[13px] text-nowrap tracking-[-0.13px]">
                    <p className="leading-[1.3] overflow-ellipsis overflow-hidden text-left">
                      {product.name}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Radar Chart Component
type ChartLabelProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function ChartLabel({
  text,
  text1,
  additionalClassNames = "",
}: ChartLabelProps) {
  return (
    <div
      className={`[grid-area:1_/_1] content-stretch flex gap-[1.721px] items-center leading-[17px] not-italic relative text-[12px] text-nowrap w-[49px] font-semibold ${additionalClassNames}`}
    >
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c]">
        {text}
      </p>
      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#0085ec]">
        {text1}
      </p>
    </div>
  );
}

function ChartText({ text }: { text: string }) {
  return (
    <div className="bg-white h-[16px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative size-full">
          <p className="-webkit-box leading-[16px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.29)] text-center text-nowrap font-semibold">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function RadarChart() {
  const radarPathRef = useRef<SVGPathElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  // Radar chart data: [탄성, 통기성, 편안함, 유연성, 쿠셔닝, 안정성]
  const data = [80, 45, 55, 75, 95, 65];
  const centerX = 65;
  const centerY = 65;
  const numPoints = 6;

  useEffect(() => {
    if (!radarPathRef.current || isAnimated) return;

    // Use the original path as the target
    const targetPath = radarSvgPaths.pb9d0800;

    // Calculate points for radar chart starting from center
    const angleStep = (2 * Math.PI) / numPoints;

    // Create start path (all points at center)
    const startPoints = data.map(() => [centerX, centerY]);
    const startPath =
      startPoints.reduce((path, point, i) => {
        return path + (i === 0 ? "M" : "L") + `${point[0]},${point[1]}`;
      }, "") + "Z";

    // Animate from center (0) to actual value
    const path = d3.select(radarPathRef.current);
    path
      .attr("d", startPath)
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .attrTween("d", function () {
        const interpolate = d3.interpolateString(startPath, targetPath);
        return function (t: number) {
          return interpolate(t);
        };
      })
      .on("end", () => setIsAnimated(true));
  }, [isAnimated]);

  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] ml-[49px] mt-[21px] relative size-[172px]">
          <div className="absolute h-[172px] left-0 right-0 top-0">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 172 172"
            >
              <g id="chart">
                <path
                  d={radarSvgPaths.p2bd3cf28}
                  stroke="#0C0F0F"
                  strokeOpacity="0.13"
                />
                <g>
                  <path d={radarSvgPaths.p68bca00} fill="white" />
                  <path
                    d={radarSvgPaths.p3b82f400}
                    stroke="#0C0F0F"
                    strokeOpacity="0.13"
                  />
                </g>
                <path
                  d={radarSvgPaths.pb596f00}
                  stroke="#0C0F0F"
                  strokeOpacity="0.13"
                />
                <g>
                  <path d={radarSvgPaths.p88e4b00} fill="white" />
                  <path
                    d={radarSvgPaths.p39b24f00}
                    stroke="#0C0F0F"
                    strokeOpacity="0.13"
                  />
                </g>
                <path
                  d={radarSvgPaths.p104d0200}
                  stroke="#0C0F0F"
                  strokeOpacity="0.13"
                />
              </g>
            </svg>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col items-start left-[41.86%] right-[41.86%] top-0">
            <ChartText text="100" />
            <ChartText text="75" />
            <ChartText text="50" />
            <ChartText text="25" />
            <ChartText text="0" />
          </div>
        </div>
        <ChartLabel
          text="탄성"
          text1="80"
          additionalClassNames="justify-center ml-[110px] mt-0"
        />
        <ChartLabel
          text="통기성"
          text1="45"
          additionalClassNames="ml-[221px] mt-[51px]"
        />
        <ChartLabel
          text="편안함"
          text1="55"
          additionalClassNames="justify-end ml-0 mt-[51px]"
        />
        <ChartLabel
          text="유연성"
          text1="75"
          additionalClassNames="ml-[221px] mt-[146px]"
        />
        <ChartLabel
          text="쿠셔닝"
          text1="95"
          additionalClassNames="justify-end ml-0 mt-[146px]"
        />
        <ChartLabel
          text="안정성"
          text1="65"
          additionalClassNames="justify-center ml-[110px] mt-[197px]"
        />
        <div className="[grid-area:1_/_1] aspect-[130/130.5] ml-[65px] mt-[35px] relative w-[130px]">
          <div className="absolute inset-0">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 130 130.5"
            >
              <path
                ref={radarPathRef}
                d={radarSvgPaths.pb9d0800}
                fill="#4EA0FF"
                fillOpacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Heatmap Component
type HeatmapShoeProps = {
  additionalClassNames?: string;
  maskId0: string;
  maskId1: string;
  filterId0: string;
  filterId1: string;
  filterId2: string;
  filterId3: string;
  filterId4: string;
  gradientId0: string;
  gradientId1: string;
  gradientId2: string;
  gradientId3: string;
  gradientId4: string;
};

const HeatmapShoe = React.forwardRef<SVGSVGElement, HeatmapShoeProps>(
  (
    {
      additionalClassNames = "",
      maskId0,
      maskId1,
      filterId0,
      filterId1,
      filterId2,
      filterId3,
      filterId4,
      gradientId0,
      gradientId1,
      gradientId2,
      gradientId3,
      gradientId4,
    },
    ref
  ) => {
    return (
      <div className={`h-[182px] relative w-[62px] ${additionalClassNames}`}>
        <svg
          ref={ref}
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 62 182"
        >
          <g>
            <g>
              <path d={heatmapSvgPaths.p13616b00} fill="#E2E2E2" />
              <path
                d={heatmapSvgPaths.p25295800}
                stroke="#0C0F0F"
                strokeOpacity="0.13"
                strokeWidth="0.858491"
              />
            </g>
            <g>
              <mask
                height="182"
                id={maskId0}
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="62"
                x="0"
                y="0"
              >
                <g>
                  <path d={heatmapSvgPaths.p89c2e00} fill="#E2E2E2" />
                  <path
                    d={heatmapSvgPaths.p282b9c00}
                    stroke="#0C0F0F"
                    strokeOpacity="0.13"
                    strokeWidth="0.858491"
                  />
                </g>
              </mask>
              <g mask={`url(#${maskId0})`}>
                <g>
                  <g filter={`url(#${filterId0})`}>
                    <circle
                      cx="33.5736"
                      cy="25.7533"
                      fill={`url(#${gradientId0})`}
                      r="30.9057"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <path d={heatmapSvgPaths.p3f159100} fill="#F4F3F3" />
              <path
                d={heatmapSvgPaths.p15b24c80}
                stroke="#0C0F0F"
                strokeOpacity="0.13"
                strokeWidth="1.02247"
              />
            </g>
            <g>
              <mask
                height="182"
                id={maskId1}
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="62"
                x="0"
                y="0"
              >
                <g>
                  <path d={heatmapSvgPaths.p89c2e00} fill="#E2E2E2" />
                  <path
                    d={heatmapSvgPaths.p455ab00}
                    stroke="#0C0F0F"
                    strokeOpacity="0.13"
                    strokeWidth="1.02247"
                  />
                </g>
              </mask>
              <g mask={`url(#${maskId1})`}>
                <g>
                  <g filter={`url(#${filterId1})`}>
                    <ellipse
                      cx="38.7252"
                      cy="181.569"
                      fill={`url(#${gradientId1})`}
                      rx="24.0377"
                      ry="24.467"
                    />
                  </g>
                </g>
                <g>
                  <g filter={`url(#${filterId2})`}>
                    <ellipse
                      cx="30.142"
                      cy="74.6899"
                      fill={`url(#${gradientId2})`}
                      rx="21.4623"
                      ry="31.7642"
                    />
                  </g>
                </g>
                <g>
                  <g filter={`url(#${filterId3})`}>
                    <ellipse
                      cx="-2.05366"
                      cy="51.9396"
                      fill={`url(#${gradientId3})`}
                      rx="14.1651"
                      ry="24.467"
                    />
                  </g>
                </g>
                <g>
                  <g filter={`url(#${filterId4})`}>
                    <ellipse
                      cx="62.3331"
                      cy="51.9396"
                      fill={`url(#${gradientId4})`}
                      rx="14.1651"
                      ry="24.467"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="75.5472"
              id={filterId0}
              width="75.5472"
              x="-4.19996"
              y="-12.0203"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="3.43396"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="66.1038"
              id={filterId1}
              width="65.2453"
              x="6.10259"
              y="148.517"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="4.29245"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="80.6981"
              id={filterId2}
              width="60.0943"
              x="0.0947819"
              y="34.3409"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="4.29245"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="66.1038"
              id={filterId3}
              width="45.5"
              x="-24.8037"
              y="18.8878"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="4.29245"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="66.1038"
              id={filterId4}
              width="45.5"
              x="39.5831"
              y="18.8878"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="4.29245"
              />
            </filter>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(33.5736 25.7533) rotate(90) scale(30.9057)"
              gradientUnits="userSpaceOnUse"
              id={gradientId0}
              r="1"
            >
              <stop offset="0.25" stopColor="#FF0402" />
              <stop offset="0.85" stopColor="#FFEC34" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(38.7252 181.569) rotate(90) scale(24.467 24.0377)"
              gradientUnits="userSpaceOnUse"
              id={gradientId1}
              r="1"
            >
              <stop offset="0.25" stopColor="#FF0402" />
              <stop offset="0.85" stopColor="#FFEC34" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(30.1419 74.6899) rotate(90) scale(31.7641 21.4623)"
              gradientUnits="userSpaceOnUse"
              id={gradientId2}
              r="1"
            >
              <stop offset="0.25" stopColor="#FF0402" />
              <stop offset="0.85" stopColor="#FFEC34" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(-2.05366 51.9396) rotate(90) scale(24.467 14.1651)"
              gradientUnits="userSpaceOnUse"
              id={gradientId3}
              r="1"
            >
              <stop offset="0.25" stopColor="#2976FB" />
              <stop offset="0.845" stopColor="#4DFAD6" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(62.3331 51.9396) rotate(90) scale(24.467 14.1651)"
              gradientUnits="userSpaceOnUse"
              id={gradientId4}
              r="1"
            >
              <stop offset="0.25" stopColor="#2976FB" />
              <stop offset="0.845" stopColor="#4DFAD6" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

HeatmapShoe.displayName = "HeatmapShoe";

function HeatmapComponent() {
  const leftShoeRef = useRef<SVGSVGElement>(null);
  const rightShoeRef = useRef<SVGSVGElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isAnimated) return;

    // Animate heatmap gradients from mosaic (opacity 0) to full visibility
    const animateHeatmap = (svgRef: React.RefObject<SVGSVGElement | null>) => {
      if (!svgRef.current) return;

      const svg = d3.select(svgRef.current);

      // Select all gradient circles/ellipses within filter groups
      const gradients = svg.selectAll("g[filter] circle, g[filter] ellipse");

      // Start with opacity 0 (mosaic effect - invisible)
      gradients
        .attr("opacity", 0)
        .transition()
        .duration(2000)
        .delay((_, i) => i * 200) // Stagger animation
        .ease(d3.easeCubicOut)
        .attr("opacity", 1);
    };

    // Animate both shoes with slight delay
    const timer1 = setTimeout(() => animateHeatmap(leftShoeRef), 100);
    const timer2 = setTimeout(() => animateHeatmap(rightShoeRef), 400);

    const timer3 = setTimeout(() => setIsAnimated(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isAnimated]);

  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative size-full">
      <HeatmapShoe
        ref={leftShoeRef}
        additionalClassNames="shrink-0"
        maskId0="mask0_left"
        maskId1="mask1_left"
        filterId0="filter0_left"
        filterId1="filter1_left"
        filterId2="filter2_left"
        filterId3="filter3_left"
        filterId4="filter4_left"
        gradientId0="gradient0_left"
        gradientId1="gradient1_left"
        gradientId2="gradient2_left"
        gradientId3="gradient3_left"
        gradientId4="gradient4_left"
      />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <HeatmapShoe
            ref={rightShoeRef}
            maskId0="mask0_right"
            maskId1="mask1_right"
            filterId0="filter0_right"
            filterId1="filter1_right"
            filterId2="filter2_right"
            filterId3="filter3_right"
            filterId4="filter4_right"
            gradientId0="gradient0_right"
            gradientId1="gradient1_right"
            gradientId2="gradient2_right"
            gradientId3="gradient3_right"
            gradientId4="gradient4_right"
          />
        </div>
      </div>
    </div>
  );
}

// Dot Component for Pain Points
type DotProps = {
  className?: string;
  type?: "Negative" | "Positive";
  state?: "Default" | "Selected";
};

function Dot({ className, type = "Negative", state = "Default" }: DotProps) {
  const isNegativeAndDefault = type === "Negative" && state === "Default";
  const isNegativeAndSelected = type === "Negative" && state === "Selected";
  const isPositiveAndDefault = type === "Positive" && state === "Default";

  const size = state === "Selected" ? "size-[24px]" : "size-[12px]";
  const fillColor = type === "Positive" ? "#00b56b" : "#ff253f";
  const strokeColor = "#ffffff";

  return (
    <div className={`${size} ${className || ""} relative`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r={state === "Selected" ? "10" : "5"}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="1"
        />
        {isNegativeAndSelected && (
          <circle cx="12" cy="12" r="4" fill="#ffffff" />
        )}
      </svg>
    </div>
  );
}

// Empty View Component
type EmptyViewProps = {
  text: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  height?: string;
};

function EmptyView({
  text,
  showButton = false,
  buttonText,
  onButtonClick,
  height = "h-[249px]",
}: EmptyViewProps) {
  return (
    <div className={`relative rounded-[8px] shrink-0 w-full ${height}`}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[36px] py-0 relative size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-center text-nowrap tracking-[-0.08px]">
              <p className="leading-[27px]">{text}</p>
            </div>
          </div>
          {showButton && buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-[#1e2020] content-stretch flex gap-[4px] h-[48px] items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#2a2c2c] transition-colors"
            >
              <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                {buttonText}
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

type AnimatedProgressBarProps = {
  progress: number;
  total: number;
};

function AnimatedProgressBar({ progress, total }: AnimatedProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const targetWidth = (progress / total) * 100;

  useEffect(() => {
    if (!barRef.current) return;

    const bar = d3.select(barRef.current);
    bar
      .style("width", "0%")
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .style("width", `${targetWidth}%`);
  }, [targetWidth]);

  return (
    <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full">
      <div
        ref={barRef}
        className="bg-[#515353] h-[8px] rounded-[8px] shrink-0"
      />
    </div>
  );
}

export default function DashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("대시보드");
  const [questionTypePage, setQuestionTypePage] = useState<"list" | "register">(
    "list"
  );
  const [surveyPage, setSurveyPage] = useState<"list" | "create" | "detail">(
    "list"
  );
  const [reportPage, setReportPage] = useState<
    "list" | "detail" | "comparison"
  >("list");
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [comparisonProducts, setComparisonProducts] = useState<string[]>([]);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(
    "헥타르 v2 (Y4) (Yellodddw)"
  );
  const [isRegisterFormDirty, setIsRegisterFormDirty] = useState(false);
  const [isSurveyFormDirty, setIsSurveyFormDirty] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(
    null
  );
  const [showSurveyAppliedModal, setShowSurveyAppliedModal] = useState(false);
  const [showSaveTypeModal, setShowSaveTypeModal] = useState(false);

  // 메뉴 설정
  const menuSections: MenuSection[] = [
    {
      items: [
        {
          id: "대시보드",
          label: "대시보드",
          icon: createDashboardIcon(),
        },
        {
          id: "리포트",
          label: "리포트",
          icon: createDataIcon(),
        },
      ],
    },
    {
      title: "설문",
      items: [
        {
          id: "설문지",
          label: "설문지",
          icon: createSurveyIcon(),
        },
        {
          id: "문항 유형",
          label: "문항 유형",
          icon: createListIcon(),
        },
        {
          id: "설문 응답",
          label: "설문 응답",
          icon: createCommentIcon(),
        },
      ],
    },
    {
      title: "관리",
      items: [
        {
          id: "제품 관리",
          label: "제품 관리",
          icon: createProductIcon(),
        },
        {
          id: "법인 관리",
          label: "법인 관리",
          icon: createCompanyIcon(),
        },
        {
          id: "이미지 관리",
          label: "이미지 관리",
          icon: createImageIcon(),
        },
      ],
    },
    {
      title: "권한",
      items: [
        {
          id: "사용자 권한",
          label: "사용자 권한",
          icon: createIdCardIcon(),
        },
        {
          id: "그룹 권한",
          label: "그룹 권한",
          icon: createGroupIcon(),
        },
      ],
    },
  ];

  // Mock data - 이 배열을 빈 배열 []로 변경하면 Empty State가 표시됩니다
  const products: Product[] = [
    { name: "헥타르 v2 (Y4) (Yellodddw)", image: imgImage4 },
    { name: "DYNAFIT_피스테 쿨", image: imgImage5 },
    { name: "DYNAFIT_가드런맥스", image: imgImage5 },
    { name: "DYNAFIT_피스테런3.0", image: imgImage5 },
    { name: "K2_플라이 하이크 스페이스(LE)", image: imgImage5 },
    { name: "아이더 퀀텀 에어로 쿠쉬_스페이서", image: imgImage5 },
  ];

  // Empty State 테스트: 위 배열을 아래 주석을 해제하고 위를 주석처리하면 빈 상태를 볼 수 있습니다
  // const products: Product[] = [];

  // 데이터 존재 여부 확인
  const hasProducts = products.length > 0;

  const handleMenuClick = (menu: string) => {
    // Check if we're leaving the register page with unsaved changes
    if (
      questionTypePage === "register" &&
      isRegisterFormDirty &&
      menu !== selectedMenu
    ) {
      setPendingNavigation(menu);
      setShowCancelModal(true);
      return;
    }

    // Check if we're leaving the survey create page with unsaved changes
    if (
      selectedMenu === "설문지" &&
      surveyPage === "create" &&
      isSurveyFormDirty &&
      menu !== selectedMenu
    ) {
      setPendingNavigation(menu);
      setShowCancelModal(true);
      return;
    }

    setSelectedMenu(menu);
    console.log(`메뉴 선택: ${menu}`);

    // Reset to list page when clicking on each menu
    if (menu === "리포트") {
      setReportPage("list");
      setSelectedReportId(null);
    } else if (menu === "설문지") {
      setSurveyPage("list");
      setIsSurveyFormDirty(false);
    } else if (menu === "문항 유형") {
      setQuestionTypePage("list");
      setIsRegisterFormDirty(false);
    } else {
      // Reset all sub-pages when leaving to other menus
      setQuestionTypePage("list");
      setSurveyPage("list");
      setReportPage("list");
      setIsRegisterFormDirty(false);
      setIsSurveyFormDirty(false);
      setSelectedReportId(null);
    }
  };

  const handleCancelModalClose = () => {
    setShowCancelModal(false);
    setPendingNavigation(null);
  };

  const handleCancelModalConfirm = () => {
    if (pendingNavigation) {
      setSelectedMenu(pendingNavigation);
      setQuestionTypePage("list");
      setSurveyPage("list");
      setIsRegisterFormDirty(false);
      setIsSurveyFormDirty(false);
    }
    setShowCancelModal(false);
    setPendingNavigation(null);
  };

  const handleReportView = () => {
    setSelectedMenu("리포트");
    setReportPage("detail");
  };

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
    console.log(`선택된 제품: ${productName}`);
  };

  const handleCreateRequest = () => {
    console.log("요청서 작성하기");
    alert("요청서 작성 페이지로 이동합니다.");
  };

  return (
    <DashboardLayout
      menuSections={menuSections}
      activeMenuId={selectedMenu}
      onMenuClick={handleMenuClick}
      userName="김이투"
      userRole="분석가"
    >
      {/* GNB - Fixed at top - REMOVED: Now handled by DashboardLayout */}
      {/* LNB - Fixed on left side - REMOVED: Now handled by DashboardLayout */}
      {/* Contents - Add left margin for LNB */}
      {/* <div className="ml-[304px] flex-1">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="logo">
              <div className="h-[22px] relative shrink-0 w-[79px]">
                <div className="absolute inset-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 22">
                    <path d={svgPaths.p1c055c72} fill="#1E2020" />
                  </svg>
                </div>
              </div>
              <div className="h-[16px] relative shrink-0 w-0">
                <div className="absolute inset-[-3.13%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
                    <path d="M0.5 0.5V16.5" stroke="#0C0F0F" strokeLinecap="round" strokeOpacity="0.13" />
                  </svg>
                </div>
              </div>
              <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-bold">
                사용성 평가 플랫폼
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] h-[34px] items-start relative shrink-0 w-[160px]">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="relative rounded-[30px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[30px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[6px] relative w-full">
                    <div className="content-stretch flex gap-[4px] items-center leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 font-semibold">김이투</p>
                      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0">��석가</p>
                    </div>
                    <ChevronDown />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LNB/Contents */}
      {/* <div className="content-stretch flex items-start justify-between relative shrink-0 w-full mt-[60px]"> */}
      {/* LNB - Fixed on left side */}
      {/* <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[20px] fixed left-0 top-[60px] bottom-0 z-40 shrink-0 w-[304px] overflow-y-auto">
          <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_dashboard">
                    <path d={svgPaths.p1bc71000} fill="var(--fill-0, #2A2C2C)" />
                  </g>
                </Wrapper>
              }
              label="대시보드"
              isActive={selectedMenu === "대시보드"}
              onClick={() => handleMenuClick("대시보드")}
            />
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_data">
                    <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="리포트"
              isActive={selectedMenu === "리포트"}
              onClick={() => handleMenuClick("리포트")}
            />
          </div>

          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
              <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-medium">
                설문
              </p>
            </div>
            <MenuItem
              icon={
                <Wrapper>
                  <g clipPath="url(#clip0_1_4414)" id="ic_survey">
                    <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4414">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </Wrapper>
              }
              label="설문지"
              isActive={selectedMenu === "설문지"}
              onClick={() => handleMenuClick("설문지")}
            />
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_list">
                    <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="문항 유형"
              isActive={selectedMenu === "문항 유형"}
              onClick={() => handleMenuClick("문항 유형")}
            />
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_comment">
                    <path d={svgPaths.p3937a8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="설문 응답"
              isActive={selectedMenu === "설문 응답"}
              onClick={() => handleMenuClick("설문 응답")}
            />
          </div>

          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
              <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-medium">
                관리
              </p>
            </div>
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_product">
                    <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="제품 관리"
              isActive={selectedMenu === "제품 관리"}
              onClick={() => handleMenuClick("제품 관리")}
            />
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_company">
                    <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="법인 관리"
              isActive={selectedMenu === "법인 관리"}
              onClick={() => handleMenuClick("법인 관리")}
            />
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_image">
                    <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="이미지 관리"
              isActive={selectedMenu === "이미지 관리"}
              onClick={() => handleMenuClick("이미�� 관리")}
            />
          </div>

          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
              <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-medium">
                권한
              </p>
            </div>
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_idcard">
                    <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="사용자 권한"
              isActive={selectedMenu === "사용자 권한"}
              onClick={() => handleMenuClick("사용자 권한")}
            />
            <MenuItem
              icon={
                <Wrapper>
                  <g id="ic_group">
                    <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
                  </g>
                </Wrapper>
              }
              label="그룹 권한"
              isActive={selectedMenu === "그룹 권한"}
              onClick={() => handleMenuClick("그룹 권���")}
            />
          </div>
        </div> */}

      {/* Contents */}
      {selectedMenu === "리포트" ? (
        reportPage === "detail" ? (
          <ReportDetailPage onBackToList={() => setReportPage("list")} />
        ) : reportPage === "comparison" ? (
          <ReportComparisonPage
            products={comparisonProducts}
            onBackToList={() => setReportPage("list")}
          />
        ) : (
          <ReportsPage
            onReportClick={(reportId) => {
              setSelectedReportId(reportId);
              setReportPage("detail");
            }}
            onCompareReports={(reportIds) => {
              // Get product names from report IDs
              const products = reportIds.map((id) => {
                const reportIndex = parseInt(id);
                const mockProducts = [
                  "피스테런 3.0",
                  "가드런 맥스",
                  "스칼로운선팀",
                ];
                return mockProducts[reportIndex - 1] || `제품 ${reportIndex}`;
              });
              setComparisonProducts(products);
              setReportPage("comparison");
            }}
          />
        )
      ) : selectedMenu === "설문지" ? (
        surveyPage === "create" ? (
          <SurveyCreatePage
            onShowModal={() => setShowSurveyAppliedModal(true)}
            onFormDirtyChange={setIsSurveyFormDirty}
            onSaveTypeClick={() => setShowSaveTypeModal(true)}
          />
        ) : surveyPage === "detail" ? (
          <SurveyDetailPage onBackToList={() => setSurveyPage("list")} />
        ) : (
          <SurveyListPage
            onCreateClick={() => setSurveyPage("create")}
            onItemClick={() => setSurveyPage("detail")}
          />
        )
      ) : selectedMenu === "문항 유형" ? (
        questionTypePage === "register" ? (
          <QuestionTypeRegisterPage onDirtyChange={setIsRegisterFormDirty} />
        ) : (
          <QuestionTypesPage
            onRegisterClick={() => setQuestionTypePage("register")}
          />
        )
      ) : selectedMenu === "설문 응답" ? (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          <div className="h-[400px] relative rounded-[8px] shrink-0 w-full">
            <EmptyView text="해당 서비스는 준비중입니다." height="h-full" />
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      ) : selectedMenu === "제품 관리" ? (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          <div className="h-[400px] relative rounded-[8px] shrink-0 w-full">
            <EmptyView text="해당 서비스는 준비중입니다." height="h-full" />
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      ) : selectedMenu === "법인 관리" ? (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          <div className="h-[400px] relative rounded-[8px] shrink-0 w-full">
            <EmptyView text="해당 서비스는 준비중입니다." height="h-full" />
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      ) : selectedMenu === "이미지 관리" ? (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          <div className="h-[400px] relative rounded-[8px] shrink-0 w-full">
            <EmptyView text="해당 서비스는 준비중입니다." height="h-full" />
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      ) : selectedMenu === "사용자 권한" ? (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          <div className="h-[400px] relative rounded-[8px] shrink-0 w-full">
            <EmptyView text="해당 서비스는 준비중입니다." height="h-full" />
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      ) : selectedMenu === "그룹 권한" ? (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          <div className="h-[400px] relative rounded-[8px] shrink-0 w-full">
            <EmptyView text="해당 서비스는 준비중입니다." height="h-full" />
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-full">
          {/* Title */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[744px]">
              <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                <p className="leading-[38px]">안녕하세요,</p>
              </div>
              <div className="content-stretch flex items-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                <div className="flex flex-col justify-center relative shrink-0 font-bold">
                  <p className="leading-[38px] text-nowrap">김분석</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[38px] text-nowrap">님</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[100px] items-center justify-end relative shrink-0">
              <StatCard label="미열람 리포트" value={hasProducts ? 2 : 0} />
              <StatCard label="진행중인 설문" value={hasProducts ? 5 : 0} />
              <StatCard label="대기중인 요청서" value={hasProducts ? 3 : 0} />
            </div>
          </div>

          {/* Product Section or Empty State */}
          {!hasProducts ? (
            <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
              {/* Empty State */}
              <div className="h-[320px] relative rounded-[8px] shrink-0 w-full">
                <EmptyView
                  text="제품 평가를 위해 의뢰한 설문이 없습니다."
                  showButton
                  buttonText="요청서 작성하기"
                  onButtonClick={handleCreateRequest}
                  height="h-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                />
              </div>

              {/* Empty Reports Section */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full">
                  <div
                    aria-hidden="true"
                    className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none"
                  />
                  <div className="content-stretch flex items-center relative shrink-0">
                    <p className="-webkit-box leading-[38px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px] font-bold">
                      리포트 및 설문 현황
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full">
                  {/* 비교 리포트 추천 */}
                  <div className="basis-0 bg-white grow h-[323px] min-h-px min-w-px relative rounded-[12px] shrink-0">
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                    />
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col gap-[20px] items-center px-[20px] py-[16px] relative size-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                          <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-bold">
                            비교 리포트 추천
                          </p>
                        </div>
                        <EmptyView
                          text="추천 리포트가 없습니다."
                          height="h-[249px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
                    {/* 관심 리포트 & 최근 확인 설문 */}
                    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                      <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                        />
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                            <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
                              나의 관심 리포트
                            </p>
                            <EmptyView
                              text="관심 리포트가 없습니다."
                              height="h-[76px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                        />
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                            <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
                              최근 확인 설문
                            </p>
                            <EmptyView
                              text="최근 확인 설문이 없습니다."
                              height="h-[76px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 내가 의뢰한 설문 */}
                    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                      />
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                            <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-bold">
                              내가 의뢰한 설문
                            </p>
                          </div>
                          <EmptyView
                            text="의뢰한 설문이 없습니다."
                            height="h-[91px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none"
                />
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                  <p className="-webkit-box leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px] font-bold">
                    {selectedProduct}
                  </p>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setProductDropdownOpen(!productDropdownOpen)
                      }
                      className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] hover:bg-gray-50 transition-colors"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                      {productDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {productDropdownOpen && (
                      <ProductDropdown
                        products={products}
                        selectedProduct={selectedProduct}
                        onSelect={handleProductSelect}
                        onClose={() => setProductDropdownOpen(false)}
                      />
                    )}
                  </div>
                </div>
                <button
                  onClick={handleReportView}
                  className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    상세 리포트 보기
                  </p>
                  <ChevronRight />
                </button>
              </div>

              {/* Product Review & Charts Section - Wrapped Container */}
              <div className="content-stretch flex gap-[24px] items-center relative size-full">
                {/* Review Section (통증 부위 + 피드백) */}
                <div className="border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex gap-[20px] h-[404px] items-start overflow-clip pb-0 pt-[16px] px-[20px] relative rounded-[12px] shrink-0 w-[684px]">
                  {/* 통증 부위 */}
                  <div
                    className="content-stretch flex flex-[1_0_0] flex-col h-[388px] items-start justify-between min-h-px min-w-px pb-[24px] pt-0 px-0 relative shrink-0"
                    data-name="통증부위"
                  >
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[342px]">
                      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[#2a2c2c] tracking-[-0.08px]">
                        통증 부위
                      </p>
                    </div>
                    <div
                      className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative shrink-0 w-full"
                      data-name="제품 이미지"
                    >
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
                        <div className="col-[1] ml-0 mt-0 relative row-[1] size-[225px]">
                          <img
                            alt="제품 이미지"
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                            src={imgImage4}
                          />
                        </div>
                        <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-[30.5px] mt-[71px] relative row-[1]">
                          <Dot
                            className="col-[1] ml-[140px] mt-0 relative row-[1]"
                            state="Selected"
                          />
                          <Dot className="col-[1] ml-[30px] mt-[13px] relative row-[1]" />
                          <Dot className="col-[1] ml-[41px] mt-[14px] relative row-[1]" />
                          <Dot
                            className="col-[1] ml-[40px] mt-[53px] relative row-[1]"
                            type="Positive"
                          />
                          <Dot
                            className="col-[1] ml-0 mt-[32px] relative row-[1]"
                            type="Positive"
                          />
                          <Dot
                            className="col-[1] ml-[10px] mt-[51px] relative row-[1]"
                            type="Positive"
                          />
                          <Dot
                            className="col-[1] ml-[139px] mt-[63px] relative row-[1]"
                            type="Positive"
                          />
                          <Dot className="col-[1] ml-[60px] mt-0 relative row-[1]" />
                        </div>
                        <div className="col-[1] content-stretch flex gap-[12px] items-center ml-[63.5px] mt-[189px] relative row-[1]">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#00b56b] rounded-[4px] shrink-0 size-[14px]" />
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] tracking-[-0.042px]">
                              긍정
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] tracking-[-0.042px]">
                              부정
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[2px] items-start relative rounded-[8px] shrink-0 w-full">
                        <div className="bg-[#00b56b] content-stretch flex h-[32px] items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[216px]">
                          <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px] font-semibold">
                            76%
                          </p>
                        </div>
                        <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-[32px] items-center justify-center min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0">
                          <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px] font-semibold">
                            24%
                          </p>
                        </div>
                      </div>
                      <div className="relative rounded-[12px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                        />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
                              <p className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full font-medium">
                                총 응답수
                              </p>
                              <p className="-webkit-box leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-semibold">
                                12건
                              </p>
                            </div>
                            <div className="h-[28px] relative shrink-0 w-0">
                              <div className="absolute inset-[-3.57%_-1px]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 2 30"
                                >
                                  <path
                                    d="M1 1V29"
                                    stroke="#0C0F0F"
                                    strokeLinecap="round"
                                    strokeOpacity="0.13"
                                    strokeWidth="2"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
                              <p className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full font-medium">
                                가장 많은 응답 부위
                              </p>
                              <p className="-webkit-box leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-semibold">
                                발등
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 피드백 */}
                  <div
                    className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px overflow-hidden relative shrink-0"
                    data-name="피드백"
                  >
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                        사용자 피드백
                      </p>
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full overflow-y-auto pr-[4px] feedback-scroll">
                      <CommentCard
                        type="부정"
                        author="나성윤"
                        text="착용감이 너무 딱딱하고 장시간 신으면 발이 아픕니다."
                        highlighted
                      />
                      <CommentCard
                        type="긍정"
                        author="박성한"
                        text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다."
                      />
                      <CommentCard
                        type="긍정"
                        author="박성한"
                        text="사이즈가 정사이즈라 딱 맞고 편해요."
                      />
                      <CommentCard
                        type="긍정"
                        author="박성한"
                        text="길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편했다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다."
                      />
                    </div>
                    <div
                      className="absolute bg-gradient-to-b bottom-px from-[rgba(255,255,255,0)] h-[33px] left-0 opacity-40 to-[rgba(0,0,0,0.12)] w-[342px] pointer-events-none"
                      data-name="dimmed"
                    />
                  </div>
                </div>
                {/* Data Section (기능성 + 피팅감 + 만족도) */}
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative shrink-0"
                  data-name="data"
                >
                  {/* 1row: 기능성 + 피팅감 */}
                  <div
                    className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
                    data-name="1row"
                  >
                    {/* 기능성 */}
                    <div
                      className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-[345px] min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0"
                      data-name="data card"
                    >
                      <div
                        className="content-stretch flex items-center relative shrink-0 w-full"
                        data-name="title"
                      >
                        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[#2a2c2c] tracking-[-0.08px]">
                          기능성
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col h-[222px] items-center justify-center relative shrink-0 w-full"
                        data-name="radar chart"
                      >
                        <RadarChart />
                      </div>
                    </div>

                    {/* 피팅감 */}
                    <div
                      className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-w-[345px] min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0"
                      data-name="data card"
                    >
                      <div
                        className="content-stretch flex items-center relative shrink-0 w-full"
                        data-name="title"
                      >
                        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[#2a2c2c] tracking-[-0.08px]">
                          피팅감
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-[222px] items-center justify-between relative shrink-0 w-full">
                        <div
                          className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full"
                          data-name="heatmap"
                        >
                          <HeatmapComponent />
                        </div>
                        <div
                          className="content-stretch flex gap-[24px] items-center relative shrink-0"
                          data-name="label"
                        >
                          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                            <div className="bg-[#2976fb] rounded-[4px] shrink-0 size-[14px]" />
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] tracking-[-0.042px]">
                              헐거움
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                            <div className="bg-[#05fe1b] rounded-[4px] shrink-0 size-[14px]" />
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] tracking-[-0.042px]">
                              적당함
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                            <div className="bg-[#ff0402] rounded-[4px] shrink-0 size-[14px]" />
                            <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] tracking-[-0.042px]">
                              압박감
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2row: 착용 만족도 + 디자인 만족도 */}
                  <div
                    className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full"
                    data-name="2row"
                  >
                    {/* 착용 만족도 */}
                    <div
                      className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] gap-[32px] items-center min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0 min-w-[465px]"
                      data-name="card"
                    >
                      <div
                        className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative shrink-0"
                        data-name="text"
                      >
                        <div
                          className="content-stretch flex items-center relative shrink-0"
                          data-name="title"
                        >
                          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[#2a2c2c] tracking-[-0.08px]">
                            착용 만족도
                          </p>
                        </div>
                        <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-[min-content] whitespace-pre-wrap">
                          "러닝 시 쿠셔닝이 매우 잘 느껴지며, 밑창이 탄탄하여
                          울퉁불퉁한 지면에서도 안정감 가짐."
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[2px] items-end justify-end relative shrink-0"
                        data-name="num"
                      >
                        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[34px] text-[#0085ec] text-right tracking-[-0.34px]">
                          82
                        </p>
                        <div className="content-stretch flex flex-col items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0 w-[11px]">
                          <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[#2a2c2c] w-full font-medium whitespace-pre-wrap">
                            점
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 디자인 만족도 */}
                    <div
                      className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] gap-[32px] items-center min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0 min-w-[465px]"
                      data-name="card"
                    >
                      <div
                        className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative shrink-0"
                        data-name="text"
                      >
                        <div
                          className="content-stretch flex items-center relative shrink-0"
                          data-name="title"
                        >
                          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[#2a2c2c] tracking-[-0.08px]">
                            디자인 만족도
                          </p>
                        </div>
                        <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-[min-content] whitespace-pre-wrap">
                          "단색으로 출시되는 타 러닝화에 비해 컬러 구성이
                          조화로움."
                        </p>
                      </div>
                      <div
                        className="content-stretch flex gap-[2px] items-end justify-end relative shrink-0"
                        data-name="num"
                      >
                        <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[34px] text-[#0085ec] text-right tracking-[-0.34px]">
                          72
                        </p>
                        <div className="content-stretch flex flex-col items-center justify-center pb-[8px] pt-0 px-0 relative shrink-0 w-[11px]">
                          <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[#2a2c2c] w-full font-medium whitespace-pre-wrap">
                            점
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reports Section - Only shown when hasProducts is true */}
          {hasProducts && (
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <div className="border-[rgba(12,15,15,0.13)] border-b border-l-0 border-r-0 border-solid border-t-0 content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full">
                <div className="content-stretch flex items-center relative shrink-0">
                  <p className="-webkit-box leading-[38px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px] font-bold">
                    리포트 및 설문 현황
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full">
                {/* 비교 리포트 추천 테이블 */}
                <div className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-[323px] items-center min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] font-bold">
                      비교 리포트 추천
                    </p>
                    <button
                      onClick={handleReportView}
                      className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[3px] shrink-0 hover:opacity-80 transition-opacity"
                    >
                      <p className="leading-[20px] not-italic relative shrink-0 text-[rgba(12,15,15,0.69)] text-[14px] tracking-[-0.042px] font-semibold">
                        리포트 바로가기
                      </p>
                      <ChevronRight />
                    </button>
                  </div>
                  <div className="border border-[rgba(12,15,15,0.13)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                    {/* Table Header */}
                    <div className="bg-[#faf9f9] border-[rgba(12,15,15,0.13)] border-b border-l-0 border-r-0 border-solid border-t-0 content-stretch flex items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[2px] h-[40px] items-center min-h-[40px] min-w-px px-[12px] py-[20px] relative shrink-0">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] font-semibold">
                          의뢰 리포트
                        </p>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[2px] h-[40px] items-center min-h-[40px] min-w-px px-[12px] py-[20px] relative shrink-0">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] font-semibold">
                          추천 리포트
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[2px] h-[40px] items-center min-h-[40px] px-[12px] py-[20px] relative shrink-0 w-[92px]">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] font-semibold">
                          매칭 구분
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[2px] h-[40px] items-center justify-center min-h-[40px] px-[16px] py-[20px] relative shrink-0 w-[124px]" />
                    </div>
                    {/* Table Rows */}
                    {[
                      {
                        request: "DYNAFIT_피스테런3.0 피팅 평가",
                        recommend: "DYNAFIT_가드런맥스 피팅평가",
                        match: "시즌",
                      },
                      {
                        request: "DYNAFIT_피스테런3.0 피팅 평가",
                        recommend: "DYNAFIT_가드런맥스 피팅평가",
                        match: "제품",
                      },
                      {
                        request: "DYNAFIT_피스테런3.0 피팅 평가",
                        recommend: "DYNAFIT_가드런맥스 피팅평가",
                        match: "시즌",
                      },
                      {
                        request: "DYNAFIT_피스테런3.0 피팅 평가",
                        recommend: "DYNAFIT_가드런맥스 피팅평가",
                        match: "브랜드",
                      },
                    ].map((row, idx) => (
                      <div
                        key={idx}
                        className={`border-[rgba(12,15,15,0.13)] ${
                          idx < 3
                            ? "border-b border-l-0 border-r-0 border-solid border-t-0"
                            : ""
                        } content-stretch flex items-center relative shrink-0 w-full`}
                      >
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center min-h-[48px] min-w-px px-[12px] py-[20px] relative shrink-0">
                          <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] font-semibold">
                            {row.request}
                          </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[48px] items-center min-h-[48px] min-w-px px-[12px] py-[20px] relative shrink-0">
                          <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] font-semibold">
                            {row.recommend}
                          </p>
                        </div>
                        <div className="content-stretch flex gap-[12px] h-[48px] items-center min-h-[48px] px-[12px] py-[20px] relative shrink-0 w-[92px]">
                          <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] font-semibold">
                            {row.match}
                          </p>
                        </div>
                        <div className="content-stretch flex h-[48px] items-center justify-center min-h-[48px] px-[12px] py-[16px] relative shrink-0">
                          <button className="bg-[rgba(255,255,255,0)] border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                            <p className="leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] font-semibold">
                              비교 진행하기
                            </p>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 나의 관심 리포트 & 최근 확인 설문 */}
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                    <div className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0">
                      <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] font-bold w-full">
                        나의 관심 리포트
                      </p>
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        {[
                          "DYNAFIT_피스테 쿨 피팅 평가",
                          "K2_플라이 하이크 스페이스(LE)",
                          "아이더 퀀텀 에어로 쿠쉬_스페이서",
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full hover:opacity-80 transition-opacity"
                          >
                            <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] tracking-[-0.042px] font-medium">
                              {item}
                            </p>
                            <ChevronRight />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-h-px min-w-px px-[20px] py-[16px] relative rounded-[12px] shrink-0">
                      <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] font-bold w-full">
                        최근 확인 설문
                      </p>
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        {[
                          "DYNAFIT_피스테 쿨 피팅 평가",
                          "K2_플라이 하이크 스페이스(LE)",
                          "아이더 퀀텀 에어로 쿠쉬_스페이서",
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full hover:opacity-80 transition-opacity"
                          >
                            <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] tracking-[-0.042px] font-medium">
                              {item}
                            </p>
                            <ChevronRight />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* 내가 의뢰한 설문 */}
                  <div className="bg-white border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] font-bold">
                        내가 의뢰한 설문
                      </p>
                      <button
                        onClick={handleReportView}
                        className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[3px] shrink-0 hover:opacity-80 transition-opacity"
                      >
                        <p className="leading-[20px] not-italic relative shrink-0 text-[rgba(12,15,15,0.69)] text-[14px] tracking-[-0.042px] font-semibold">
                          설문지 바로가기
                        </p>
                        <ChevronRight />
                      </button>
                    </div>
                    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                      {[
                        {
                          title: "헥타르 v2 (Y4) (Yellodddw) 평가",
                          desc: "경등산화 | 다이나핏 | 25SS",
                          progress: 68,
                          total: 100,
                        },
                        {
                          title: "DYNAFIT_피스테 쿨 피팅 평가",
                          desc: "경등산화 | 다이나핏 | 25SS",
                          progress: 11,
                          total: 100,
                        },
                      ].map((survey, idx) => (
                        <div
                          key={idx}
                          className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[6px] shrink-0"
                        >
                          <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative shrink-0 whitespace-nowrap">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#2a2c2c] tracking-[-0.042px] font-semibold w-full">
                                {survey.title}
                              </p>
                              <p className="leading-[16px] overflow-ellipsis overflow-hidden relative shrink-0 text-[11px] text-[rgba(12,15,15,0.52)] w-full font-medium">
                                {survey.desc}
                              </p>
                            </div>
                            <div className="border border-[rgba(12,15,15,0.19)] border-solid content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
                              <p className="leading-[17px] not-italic relative shrink-0 text-[rgba(12,15,15,0.69)] text-[12px] font-semibold">
                                진행중
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <AnimatedProgressBar
                              progress={survey.progress}
                              total={survey.total}
                            />
                            <p className="-webkit-box leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] tracking-[-0.126px] font-semibold">
                              <span className="leading-[25px]">
                                {survey.progress} /{" "}
                              </span>
                              <span className="leading-[17px] text-[12px]">
                                {survey.total}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <CancelModal
          onCancel={handleCancelModalClose}
          onConfirm={handleCancelModalConfirm}
        />
      )}

      {/* Survey Applied Modal */}
      {showSurveyAppliedModal && (
        <SurveyAppliedModal
          onClose={() => setShowSurveyAppliedModal(false)}
          onConfirm={() => setShowSurveyAppliedModal(false)}
        />
      )}

      {/* Save Type Modal */}
      {showSaveTypeModal && (
        <SaveTypeModal
          onCancel={() => setShowSaveTypeModal(false)}
          onConfirm={(title) => {
            console.log("Saved type with title:", title);
            setShowSaveTypeModal(false);
          }}
        />
      )}
    </DashboardLayout>
  );
}
