import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-passue2w1h";
import headerSvgPaths from "../../imports/svg-60pogkpld3";
import imgShoe from "@/assets/a648cbd724b83230238b10f854f20e9672b6fd81.png";
import clsx from "clsx";
import FittingSection from "./FittingSection";
import SingleProductFunctionalitySection from "./SingleProductFunctionalitySection";
import SatisfactionSection from "./SatisfactionSection";
import SystemPopup from "../../imports/SystemPopup";

type ReportDetailPageProps = {
  onBackToList: () => void;
};

// Page Header Component
function PageHeader({ onSearchClick }: { onSearchClick: () => void }) {
  return (
    <div className="bg-white fixed top-[60px] left-[304px] right-0 h-[48px] z-40">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_8px_12px_0px_rgba(13,14,17,0.04)]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[52px] pr-[244px] py-0 relative size-full">
          <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[24px] items-center px-[12px] py-0 relative w-full">
                <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="basis-0 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
                    <p className="leading-[25px] overflow-ellipsis overflow-hidden">
                      피스테런 3.0
                    </p>
                  </div>
                </div>
                <button
                  onClick={onSearchClick}
                  className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] cursor-pointer hover:bg-[rgba(0,0,0,0.02)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <div className="relative shrink-0 size-[16px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <path
                          d={headerSvgPaths.p18195a80}
                          fill="var(--fill-0, #2A2C2C)"
                        />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-w-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative w-full">
        {children}
      </div>
    </div>
  );
}

function Helper1() {
  return (
    <div className="h-[12px] relative shrink-0 w-0">
      <div
        className="absolute inset-[-8.33%_-1px]"
        style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 14"
        >
          <path
            d="M1 1V13"
            stroke="var(--stroke-0, #0C0F0F)"
            strokeLinecap="round"
            strokeOpacity="0.13"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function InfoHelper() {
  return (
    <div className="h-[28px] relative shrink-0 w-0">
      <div
        className="absolute inset-[-3.57%_-1px]"
        style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2 30"
        >
          <path
            d="M1 1V29"
            stroke="var(--stroke-0, #0C0F0F)"
            strokeLinecap="round"
            strokeOpacity="0.13"
            strokeWidth="2"
          />
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
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">
        {text}
      </p>
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">
        {text1}
      </p>
    </div>
  );
}

type CommentTextProps = {
  text: string;
  type: "긍정" | "부정";
  name: string;
};

function CommentText({ text, type, name }: CommentTextProps) {
  return (
    <div className="bg-white min-w-[200px] relative rounded-[8px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <Wrapper>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <Wrapper1>
              <g>
                <path
                  d={type === "긍정" ? svgPaths.p3d297b00 : svgPaths.p36588100}
                  fill={type === "긍정" ? "#009759" : "#FF253F"}
                />
              </g>
            </Wrapper1>
            <p
              className={`-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap ${
                type === "긍정" ? "text-[#009759]" : "text-[#ff253f]"
              }`}
            >
              {type}
            </p>
          </div>
          <Helper1 />
          <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[17px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">
            {name}
          </p>
        </div>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#2a2c2c] text-[12px] w-full">
          {text}
        </p>
      </Wrapper>
    </div>
  );
}

// Sticky Navigation Component
function StickyNavigation({ activeSection }: { activeSection: string }) {
  const sections = ["통증 부위", "피팅감", "기능성", "만족도"];

  return (
    <div className="sticky top-[156px] w-[180px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-0 relative">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)]">
          평가 항목
        </p>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0px_4px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none"
          />
          {sections.map((section) => (
            <div
              key={section}
              className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0 w-full"
            >
              {activeSection === section && (
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_0px_4px] border-[#2a2c2c] border-solid inset-0 pointer-events-none"
                />
              )}
              <a
                href={`#${section}`}
                className={`font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] ${
                  activeSection === section
                    ? "text-[#2a2c2c]"
                    : "text-[rgba(12,15,15,0.52)]"
                }`}
              >
                {section}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReportDetailPage({
  onBackToList,
}: ReportDetailPageProps) {
  const [activeSection, setActiveSection] = useState<string>("통증 부위");
  const [showSpecModal, setShowSpecModal] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const sectionOrder = ["통증 부위", "피팅감", "기능성", "만족도"];
    let visibleSections: string[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;

        if (entry.isIntersecting) {
          if (!visibleSections.includes(sectionId)) {
            visibleSections.push(sectionId);
          }
        } else {
          visibleSections = visibleSections.filter((id) => id !== sectionId);
        }
      });

      // Set the first visible section in order as active
      if (visibleSections.length > 0) {
        const firstVisible = sectionOrder.find((section) =>
          visibleSections.includes(section)
        );
        if (firstVisible) {
          setActiveSection(firstVisible);
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const mockComments = [
    {
      type: "부정" as const,
      name: "나성윤",
      text: "착용감이 너무 딱딱하고 장시간 신으면 발이 아픕니다.",
    },
    {
      type: "긍정" as const,
      name: "박성한",
      text: "길이 부분이 매우 만족스러웠다. 러닝을 진행하면서 발이 앞뒤로 움직이지 않고 신발이 발이 딱 맞는 느낌이 들고 빈공간 또한 크게 느껴지지 않고 편하다. 신발을 신고 길이에 대한 만족감과 개인적 편함이 느껴져 좋았다.",
    },
    {
      type: "긍정" as const,
      name: "박성한",
      text: "사이즈가 정사이즈라 딱 맞고 편해요.",
    },
    {
      type: "긍정" as const,
      name: "박성한",
      text: "디자인, 착용감, 내구성 모두 만족스럽습니다. 재구매 의향이 있어요!",
    },
    {
      type: "부정" as const,
      name: "나성윤",
      text: "디자인, 착용감, 내구성 모두 만족스럽습니다. 재구매 의향이 있어요! 다만 발볼이 다른 브랜드에 비해 좀 좁아요",
    },
    {
      type: "긍정" as const,
      name: "박성한",
      text: "발을 감싸주는 느낌이 좋고, 장시간 착용해도 편안합니다. 다만 점프를 할때 발 뒤꿈치가 살짝 들리는 느낌이 들어요.",
    },
  ];

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      {/* Fixed Page Header */}
      <PageHeader onSearchClick={() => setShowSpecModal(true)} />

      {/* Main Content with top padding to account for fixed header */}
      <div className="max-w-[inherit] size-full pt-[48px]">
        <div className="content-stretch flex gap-[48px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[52px] relative w-full">
          {/* Main Content */}
          <div className="flex-1 content-stretch flex flex-col gap-[60px] items-start relative">
            {/* Section 1: 통증 부위 */}
            <div
              id="통증 부위"
              ref={(el) => (sectionsRef.current["통증 부위"] = el)}
              className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full scroll-mt-[108px]"
            >
              <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
                />
                <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                  통증 부위
                </p>
              </div>

              <div className="relative rounded-[12px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[24px] items-center overflow-clip pb-0 pt-[24px] px-[24px] relative size-full">
                    {/* Left: Shoe Image */}
                    <div className="content-stretch flex flex-col items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[480px]">
                      <div className="relative shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
                        />
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pl-0 pr-[24px] py-0 relative w-full">
                            <div className="h-[240px] relative rounded-[12px] shrink-0 w-full">
                              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-0 relative size-full">
                                  <div className="content-stretch flex items-center justify-center relative shrink-0">
                                    <div className="absolute left-1/2 size-[288px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                      <img
                                        alt=""
                                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                                        src={imgShoe}
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute content-stretch flex gap-[24px] items-center left-1/2 top-[204px] translate-x-[-50%]">
                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                      <div className="relative shrink-0 size-[14px]">
                                        <svg
                                          className="block size-full"
                                          fill="none"
                                          preserveAspectRatio="none"
                                          viewBox="0 0 14 14"
                                        >
                                          <path
                                            d={svgPaths.p26976600}
                                            fill="#00B56B"
                                          />
                                        </svg>
                                      </div>
                                      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                                        긍정
                                      </p>
                                    </div>
                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                                      <div className="bg-[#ff253f] rounded-[4px] shrink-0 size-[14px]" />
                                      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                                        부정
                                      </p>
                                    </div>
                                  </div>

                                  {/* Heat dots on shoe */}
                                  <div className="absolute h-[78.4px] left-[26.67%] right-[26.77%] top-[calc(50%-17.5px)] translate-y-[-50%]">
                                    <div className="absolute inset-[0_-1.88%_-10.2%_-1.88%]">
                                      <svg
                                        className="block size-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 220.349 86.4"
                                      >
                                        <g>
                                          {/* Red dots */}
                                          <circle
                                            cx="82.8504"
                                            cy="26.7"
                                            fill="#FF253F"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="69.5496"
                                            cy="18.7"
                                            fill="#FF253F"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="61.95"
                                            cy="29.7"
                                            fill="#FF253F"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="210.649"
                                            cy="28.7"
                                            fill="#FF253F"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="168.85"
                                            cy="25.7"
                                            fill="#FF253F"
                                            r="5.7"
                                            stroke="white"
                                          />

                                          {/* Green dots */}
                                          <circle
                                            cx="50.5496"
                                            cy="69.7"
                                            fill="#00B56B"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="9.7"
                                            cy="47.7"
                                            fill="#00B56B"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="39.1492"
                                            cy="72.7"
                                            fill="#00B56B"
                                            r="5.7"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="112.3"
                                            cy="5.7"
                                            fill="#00B56B"
                                            r="5.7"
                                            stroke="white"
                                          />

                                          {/* Large red dot */}
                                          <circle
                                            cx="188.8"
                                            cy="14.6969"
                                            fill="#FF253F"
                                            r="11.4"
                                            stroke="white"
                                          />
                                          <circle
                                            cx="188.801"
                                            cy="14.7"
                                            fill="white"
                                            r="5.7"
                                          />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                              <div
                                aria-hidden="true"
                                className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                              />
                              <div className="flex flex-col justify-center size-full">
                                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[12px] relative w-full">
                                  <div className="content-stretch flex gap-[2px] h-[36px] items-start relative rounded-[8px] shrink-0 w-full">
                                    <div className="bg-[#00b56b] content-stretch flex h-full items-center justify-center relative rounded-bl-[2px] rounded-tl-[2px] shrink-0 w-[270px]">
                                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
                                        64%
                                      </p>
                                    </div>
                                    <div className="basis-0 bg-[#ff253f] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-br-[4px] rounded-tr-[4px] shrink-0">
                                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
                                        36%
                                      </p>
                                    </div>
                                  </div>
                                  <div className="h-[60px] relative shrink-0 w-full">
                                    <div className="flex flex-row items-center size-full">
                                      <div className="content-stretch flex gap-[16px] items-center px-[8px] py-0 relative size-full">
                                        <Helper text="총 응답수" text1="22건" />
                                        <InfoHelper />
                                        <Helper text="긍정" text1="15건" />
                                        <InfoHelper />
                                        <Helper text="부정" text1="8건" />
                                        <InfoHelper />
                                        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-[100px]">
                                          <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-full">
                                            가장 많은 응답 부위
                                          </p>
                                          <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">
                                            발등
                                          </p>
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

                    {/* Right: User Feedback */}
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <div className="basis-0 bg-white content-stretch flex flex-col gap-[12px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0">
                        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[18px] text-nowrap tracking-[-0.126px]">
                          사용자 피드백
                        </p>
                        <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px overflow-y-auto relative shrink-0 w-full max-h-[400px]">
                          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                            {mockComments.slice(0, 3).map((comment, index) => (
                              <CommentText
                                key={index}
                                text={comment.text}
                                type={comment.type}
                                name={comment.name}
                              />
                            ))}
                          </div>
                          <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                            {mockComments.slice(3).map((comment, index) => (
                              <CommentText
                                key={index}
                                text={comment.text}
                                type={comment.type}
                                name={comment.name}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]"
                />
              </div>
            </div>

            {/* Section 2: 피팅감 */}
            <div
              id="피팅감"
              ref={(el) => (sectionsRef.current["피팅감"] = el)}
              className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full scroll-mt-[108px]"
            >
              <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
                />
                <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                  피팅감
                </p>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.02)]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                    {"개별응답보기"}
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.35002 14.6663L4.16669 13.483L9.65002 7.99967L4.16669 2.51634L5.35002 1.33301L12.0167 7.99967L5.35002 14.6663Z"
                      fill="#2A2C2C"
                    />
                  </svg>
                </div>
              </div>

              <FittingSection onViewDetails={() => {}} />
            </div>

            {/* Section 3: 기능성 */}
            <div
              id="기능성"
              ref={(el) => (sectionsRef.current["기능성"] = el)}
              className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full scroll-mt-[108px]"
            >
              <SingleProductFunctionalitySection productName="피스테런3.0" />
            </div>

            {/* Section 4: 만족도 */}
            <div
              id="만족도"
              ref={(el) => (sectionsRef.current["만족도"] = el)}
              className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full scroll-mt-[108px]"
            >
              <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
                />
                <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                  만족도
                </p>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.02)]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                    {"개별응답보기"}
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.35002 14.6663L4.16669 13.483L9.65002 7.99967L4.16669 2.51634L5.35002 1.33301L12.0167 7.99967L5.35002 14.6663Z"
                      fill="#2A2C2C"
                    />
                  </svg>
                </div>
              </div>

              <SatisfactionSection />
            </div>
          </div>

          {/* Sticky Navigation */}
          <StickyNavigation activeSection={activeSection} />
        </div>
      </div>

      {/* Product Spec Modal */}
      {showSpecModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => !isMinimized && setShowSpecModal(false)}
        >
          <div
            className={clsx(
              "transition-all duration-300",
              isMinimized
                ? "fixed bottom-4 right-4 w-[320px] h-[48px]"
                : isMaximized
                ? "w-[calc(100vw-64px)] h-[calc(100vh-64px)]"
                : "w-[800px] h-[600px]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <SystemPopup
              onClose={() => setShowSpecModal(false)}
              onMinimize={() => {
                setIsMinimized(!isMinimized);
                setIsMaximized(false);
              }}
              onMaximize={() => {
                setIsMaximized(!isMaximized);
                setIsMinimized(false);
              }}
              isMinimized={isMinimized}
            />
          </div>
        </div>
      )}
    </div>
  );
}
