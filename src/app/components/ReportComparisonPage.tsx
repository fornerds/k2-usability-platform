import { useState } from "react";
import clsx from "clsx";
import SystemPopup from "../../imports/SystemPopup";
import AnalystTopFixed from "../../imports/AnalystTopFixed-50-3922";
import PainPointCards from "../../imports/Frame1597910723";
import SatisfactionSection from "../../imports/Frame1597910729-50-6145";
import FunctionalitySection from "./FunctionalitySection";
import FittingSectionImageView from "../../imports/Frame1597910745-54-10955";
import FittingSectionGraphView from "../../imports/Frame1597910745-54-11383-interactive";

type ReportComparisonPageProps = {
  products: string[]; // 비교할 제품명 리스트 (2-3개)
  onBackToList: () => void;
};

// Wrapper component to make AnalystTopFixed interactive
function ComparisonHeader({ 
  products, 
  onSearchClick 
}: { 
  products: string[]; 
  onSearchClick: () => void;
}) {
  return (
    <div 
      className="bg-white fixed top-[60px] left-[304px] right-0 h-[48px] z-40"
      onClick={(e) => {
        // Check if click is on search button
        const target = e.target as HTMLElement;
        if (target.closest('[data-search-btn]')) {
          onSearchClick();
        }
      }}
    >
      <AnalystTopFixed />
    </div>
  );
}

// Section Title Component
function SectionTitle({ 
  title, 
  showButton = false,
  onButtonClick
}: { 
  title: string; 
  showButton?: boolean;
  onButtonClick?: () => void;
}) {
  return (
    <div className="content-stretch flex items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
      <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[40px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
        {title}
      </p>
      {showButton && (
        <button 
          onClick={onButtonClick}
          className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(0,0,0,0.02)]"
        >
          <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
            개별응답보기
          </p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.35002 14.6663L4.16669 13.483L9.65002 7.99967L4.16669 2.51634L5.35002 1.33301L12.0167 7.99967L5.35002 14.6663Z" fill="#2A2C2C"/>
          </svg>
        </button>
      )}
    </div>
  );
}

// Fitting Section Wrapper with toggle
function FittingSectionWithToggle() {
  const [viewMode, setViewMode] = useState<"image" | "graph">("image");

  return (
    <div 
      className="w-full"
      onClick={(e) => {
        // Check if segmented control item was clicked
        const target = e.target as HTMLElement;
        const segmentedControl = target.closest('[data-name="Segmented Control"]');
        
        if (segmentedControl) {
          const children = Array.from(segmentedControl.children);
          const clickedElement = children.find(child => child.contains(target));
          const clickedIndex = children.indexOf(clickedElement!);
          
          if (clickedIndex === 0) {
            setViewMode("image");
          } else if (clickedIndex === 1) {
            setViewMode("graph");
          }
        }
      }}
    >
      {viewMode === "image" ? (
        <FittingSectionImageView />
      ) : (
        <FittingSectionGraphView />
      )}
    </div>
  );
}

export default function ReportComparisonPage({ products, onBackToList }: ReportComparisonPageProps) {
  const [showSpecModal, setShowSpecModal] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("통증 부위");

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -108; // Account for fixed header (60px GNB + 48px page header)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      {/* Fixed Page Header */}
      <ComparisonHeader 
        products={products} 
        onSearchClick={() => setShowSpecModal(true)} 
      />
      
      {/* Main Content with top padding to account for fixed header */}
      <div className="max-w-[inherit] size-full pt-[48px]">
        <div className="flex">
          {/* Side Navigation - Fixed */}
          <div 
            className="fixed left-[304px] top-[108px] w-[240px] h-[calc(100vh-108px)] z-30"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              const sectionButton = target.closest('[data-section]');
              if (sectionButton) {
                const sectionId = sectionButton.getAttribute('data-section');
                if (sectionId) {
                  scrollToSection(sectionId);
                }
              }
            }}
          >
            {/* Side Navigation content can be added here if needed */}
          </div>

          {/* Main Content Area - With left margin for side nav */}
          <div className="ml-[240px] flex-1">
            <div className="content-stretch flex flex-col gap-[60px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[52px] relative w-full">
              
              {/* Section 1: 통증 부위 */}
              <div id="통증 부위" className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <SectionTitle title="통증 부위" />
                <div className="w-full">
                  <PainPointCards />
                </div>
              </div>

              {/* Section 2: 피팅감 - With Toggle */}
              <div id="피팅감" className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <FittingSectionWithToggle />
              </div>

              {/* Section 3: 기능성 */}
              <div id="기능성" className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <FunctionalitySection />
              </div>

              {/* Section 4: 만족도 */}
              <div id="만족도" className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <SectionTitle 
                  title="만족도" 
                  showButton={true}
                  onButtonClick={() => console.log("개별응답보기")}
                />
                <div className="w-full h-[500px]">
                  <SatisfactionSection />
                </div>
              </div>
            </div>
          </div>
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
