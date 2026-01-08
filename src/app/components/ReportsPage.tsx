import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-fis8uv633v";
import svgPathsFilter from "../../imports/svg-yfrjnf7tik";
import svgPathsSearch from "../../imports/svg-rox3zw4xa4";
import FilterModal, { FilterState } from "./FilterModal";
import productImage from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";

// Types
type Report = {
  id: string;
  name: string;
  brand: string;
  size: string;
  category: string;
  date: string;
  status: string;
  image: string;
};

type Tab = "신발" | "의류" | "용품";

// Checkbox Component
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button onClick={onChange} className="overflow-clip relative shrink-0 size-[24px]">
      {checked ? (
        <div className="absolute bg-[#0085ec] border-2 border-[#0085ec] inset-[12.5%] rounded-[3.5px] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) : (
        <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" />
      )}
    </button>
  );
}

// Clear All Checkbox Component (minus sign when active)
function ClearAllCheckbox({ hasSelection, onChange }: { hasSelection: boolean; onChange: () => void }) {
  return (
    <button onClick={onChange} className="overflow-clip relative shrink-0 size-[24px]">
      {hasSelection ? (
        <>
          <div className="absolute bg-[#0085ec] inset-[12.5%] rounded-[3.5px]" />
          <div className="absolute bg-white h-[1.8px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[10px]" />
        </>
      ) : (
        <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" />
      )}
    </button>
  );
}

// Tag Component
function StatusTag({ status }: { status: string }) {
  if (status === "완료") {
    return (
      <div className="bg-[rgba(12,15,15,0.1)] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
        <p className="leading-[17px] not-italic relative shrink-0 text-[rgba(12,15,15,0.52)] text-[12px] text-nowrap font-semibold">완료</p>
      </div>
    );
  }
  return (
    <div className="bg-[rgba(78,160,255,0.1)] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="leading-[17px] not-italic relative shrink-0 text-[#0085ec] text-[12px] text-nowrap font-semibold">대응 중</p>
    </div>
  );
}

// Table Row Component
type TableRowProps = {
  report: Report;
  checked: boolean;
  onCheckChange: () => void;
  onClick?: () => void;
};

function TableRow({ report, checked, onCheckChange, onClick }: TableRowProps) {
  return (
    <div 
      onClick={onClick}
      className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
      
      {/* Checkbox */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]"
      >
        <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0">
          <Checkbox checked={checked} onChange={onCheckChange} />
        </div>
      </div>

      {/* Product Name with Image */}
      <div className="basis-0 grow min-w-[320px] h-[56px] min-h-[56px] relative shrink-0">
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] min-w-[inherit] px-[12px] py-[20px] relative size-full">
            <div className="relative rounded-[2px] shrink-0 size-[32px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
                <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0 rounded-[2px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[2px]">
                  <img alt="" className="absolute h-[133.46%] left-0 max-w-none top-[-13.11%] w-full" src={report.image} />
                </div>
              </div>
            </div>
            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{report.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{report.brand}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{report.size}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{report.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{report.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
            <StatusTag status={report.status} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Table Header Component
type TableHeaderProps = {
  hasSelection: boolean;
  onClearAll: () => void;
};

function TableHeader({ hasSelection, onClearAll }: TableHeaderProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
      
      {/* Clear All Checkbox Header */}
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]">
        <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0">
          <ClearAllCheckbox hasSelection={hasSelection} onChange={onClearAll} />
        </div>
      </div>

      {/* Product Name */}
      <div className="basis-0 grow min-w-[320px] h-[56px] min-h-[56px] relative shrink-0">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">제품명</p>
        </div>
      </div>

      {/* Brand */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">브랜드</p>
        </div>
      </div>

      {/* Size */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">사이즈</p>
        </div>
      </div>

      {/* Category */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">카테고리</p>
        </div>
      </div>

      {/* Date with Sort */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">생성일</p>
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" viewBox="0 0 16 16">
              <path d={svgPaths.p9819500} fill="rgba(12,15,15,0.69)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <p className="leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">상태</p>
        </div>
      </div>
    </div>
  );
}

// Bottom Panel Component
type BottomPanelProps = {
  selectedReports: Report[];
  isExpanded: boolean;
  onToggleExpand: () => void;
  onCompare: () => void;
  onRemoveReport: (reportId: string) => void;
  onClearAll: () => void;
  showInitialTooltip: boolean;
  onCloseTooltip: () => void;
};

function BottomPanel({ selectedReports, isExpanded, onToggleExpand, onCompare, onRemoveReport, onClearAll, showInitialTooltip, onCloseTooltip }: BottomPanelProps) {
  return (
    <div className="bg-white relative w-full">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_-4px_10px_0px_rgba(13,14,17,0.04)]" />
      
      {/* Initial Tooltip - Show for 5 seconds on page load, positioned above "리포트 0" */}
      {showInitialTooltip && selectedReports.length === 0 && !isExpanded && (
        <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start justify-end left-[calc(50%-524px)] top-[-48px] translate-x-[-50%]">
          <div className="bg-[#1e2020] content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)] shrink-0">
            <p className="leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.042px] font-normal">
              분석하고 싶은 리포트를 선택해서 비교할 수 있어요
            </p>
            <button
              onClick={onCloseTooltip}
              className="relative shrink-0 size-[16px] hover:opacity-70 transition-opacity"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M3.6 13.3333L2.66667 12.4L7.06667 8L2.66667 3.6L3.6 2.66667L8 7.06667L12.4 2.66667L13.3333 3.6L8.93333 8L13.3333 12.4L12.4 13.3333L8 8.93333L3.6 13.3333Z" fill="white" />
              </svg>
            </button>
          </div>
          {/* Beak (arrow pointing down) */}
          <div className="absolute flex items-center justify-center left-[13.86px] size-[14.142px] top-[calc(50%+20px)] translate-y-[-50%]">
            <div className="flex-none rotate-[135deg]">
              <div className="relative size-[10px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path d="M0 0H10V10H0V0Z" fill="#1E2020" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selection Toast Message - Only show when not expanded and has selections */}
      {!isExpanded && selectedReports.length > 0 && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-[12px] bg-[#1e2020] px-[24px] py-[12px] rounded-[8px] shadow-lg flex items-center gap-[8px]">
          <p className="leading-[22px] not-italic text-[14px] text-white text-nowrap tracking-[-0.042px] font-medium">
            분석 리스트에 리포트를 선택하여 최대 3개까지 담을 수 있습니다
          </p>
          <button
            onClick={onClearAll}
            className="text-white hover:text-gray-300 shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[16px] px-[232px] relative size-full">
          {/* Header - Always Visible */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="content-stretch flex gap-[3px] items-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.126px]">
                <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
                  <p className="leading-[25px] overflow-ellipsis overflow-hidden text-[18px] text-nowrap text-[#2a2c2c] font-bold">리포트</p>
                </div>
                <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0">
                  <p className="leading-[25px] overflow-ellipsis overflow-hidden text-[18px] text-nowrap text-[rgba(12,15,15,0.29)] font-semibold">{selectedReports.length}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              {/* Always show Compare Button */}
              <button
                onClick={onCompare}
                disabled={selectedReports.length === 0}
                className={`content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 transition-colors ${
                  selectedReports.length === 0
                    ? "bg-[rgba(12,15,15,0.1)] cursor-not-allowed"
                    : "bg-[#0085ec] hover:bg-[#0070cc]"
                }`}
              >
                <p className={`leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold ${
                  selectedReports.length === 0 ? "text-[rgba(12,15,15,0.13)]" : "text-white"
                }`}>
                  비교 분석
                </p>
              </button>
              <div className="h-[28px] relative shrink-0 w-0">
                <div className="absolute inset-[-3.57%_-1px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                    <path d="M1 1V29" stroke="#0C0F0F" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <button
                onClick={onToggleExpand}
                className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0 hover:bg-gray-50 px-[8px] py-[8px] transition-colors"
              >
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.08px] font-semibold">
                  {isExpanded ? "닫기" : "열기"}
                </p>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    {isExpanded ? (
                      <path d={svgPaths.p9819500} fill="#2A2C2C" />
                    ) : (
                      <path d="M1.425 10.7417L2.60833 11.925L8.09167 6.44167L13.575 11.925L14.7583 10.7417L8.09167 4.075L1.425 10.7417Z" fill="#2A2C2C" />
                    )}
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            selectedReports.length === 0 ? (
              <div className="content-stretch flex h-[165px] items-center relative shrink-0 w-full">
                <div className="basis-0 flex flex-col grow h-[165px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-center tracking-[-0.08px] font-medium">
                  <p className="leading-[27px]">리스트에서 최대 3개까지 제품 선택 후 비교 분석할 수 있습니다.</p>
                </div>
              </div>
            ) : (
              <div className="content-stretch flex gap-[12px] h-[165px] items-center relative shrink-0 w-full">
                {selectedReports.map((report) => (
                  <div key={report.id} className="bg-white relative rounded-[8px] shrink-0 w-[148px]">
                    <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit]">
                      <div className="relative w-full h-[116px]">
                        <div className="absolute inset-0">
                          <img 
                            alt={report.name} 
                            className="absolute inset-0 object-cover size-full" 
                            src={report.image} 
                          />
                        </div>
                        {/* Delete Button */}
                        <button
                          onClick={() => onRemoveReport(report.id)}
                          className="absolute right-[8px] size-[16px] top-[8px] hover:opacity-80 transition-opacity"
                        >
                          <div className="absolute inset-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <rect fill="#1E2020" height="16" rx="8" width="16" />
                                <path d="M5 5L11 11" stroke="white" />
                                <path d="M11 5L5 11" stroke="white" />
                              </g>
                            </svg>
                          </div>
                        </button>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
                            <div className="-webkit-box basis-0 flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[12px] font-semibold">
                              <p className="leading-[17px] line-clamp-2">{report.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

// Pagination Component
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1);

  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="content-stretch flex items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="rgba(12,15,15,0.69)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] transition-colors ${
            currentPage === page
              ? "bg-[rgba(12,15,15,0.1)]"
              : "hover:bg-gray-100"
          }`}
        >
          <div className={`flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[-0.08px] w-full ${
            currentPage === page ? "text-[#2a2c2c] font-semibold" : "text-[rgba(12,15,15,0.29)] font-normal"
          }`}>
            <p className="leading-[22px]">{page}</p>
          </div>
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="content-stretch flex items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="rgba(12,15,15,0.69)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="content-stretch flex items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L8 8L4 4M8 12L12 8L8 4" stroke="rgba(12,15,15,0.69)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

// Main Reports Page Component
export default function ReportsPage({ 
  onReportClick,
  onCompareReports 
}: { 
  onReportClick?: (reportId: string) => void;
  onCompareReports?: (reportIds: string[]) => void;
}) {
  const [selectedTab, setSelectedTab] = useState<Tab>("신발");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMyReportsOnly, setShowMyReportsOnly] = useState(false);
  const [selectedReports, setSelectedReports] = useState<Set<string>>(new Set());
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showInitialTooltip, setShowInitialTooltip] = useState(true);
  const [filterState, setFilterState] = useState<FilterState>({ category: "", brand: "" });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse recent searches:", e);
      }
    }
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Mock data
  const mockReports: Report[] = Array.from({ length: 10 }, (_, i) => ({
    id: `report-${i + 1}`,
    name: "헥타르 포스 (W3) (Off White)",
    brand: "아이더",
    size: "225S",
    category: "경량산행",
    date: "2024. 08. 05.",
    status: i % 3 === 0 ? "대응 중" : "완료",
    image: productImage,
  }));

  // Filter reports based on search query (for demo purposes - empty when searching specific terms)
  const filteredReports = searchQuery.trim() !== "" ? [] : mockReports;

  const totalPages = 5;

  const handleCheckReport = (reportId: string) => {
    const newSelected = new Set(selectedReports);
    if (newSelected.has(reportId)) {
      newSelected.delete(reportId);
    } else {
      if (newSelected.size < 3) {
        newSelected.add(reportId);
      } else {
        alert("최대 3개까지만 선택할 수 있습니다.");
        return;
      }
    }
    setSelectedReports(newSelected);
    
    // Auto-expand panel when first item is selected
    if (newSelected.size > 0 && !isPanelExpanded) {
      setIsPanelExpanded(true);
    }
  };

  const handleCompare = () => {
    if (selectedReports.size === 0) return;
    const reportIds = Array.from(selectedReports);
    if (onCompareReports) {
      onCompareReports(reportIds);
    }
  };

  const handleRemoveReport = (reportId: string) => {
    const newSelected = new Set(selectedReports);
    newSelected.delete(reportId);
    setSelectedReports(newSelected);
  };

  const handleClearAll = () => {
    setSelectedReports(new Set());
  };

  const handleCheckAll = () => {
    // Check if all reports are already selected
    const allSelected = mockReports.every((report) => selectedReports.has(report.id));
    
    if (allSelected) {
      // Deselect all
      setSelectedReports(new Set());
    } else {
      // Select up to 3 reports
      if (mockReports.length <= 3) {
        // If 3 or fewer reports, select all
        const allIds = new Set(mockReports.map((report) => report.id));
        setSelectedReports(allIds);
      } else {
        // If more than 3 reports, select first 3
        const firstThree = new Set(mockReports.slice(0, 3).map((report) => report.id));
        setSelectedReports(firstThree);
        alert("최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };

  const handleToggleExpand = () => {
    setIsPanelExpanded(!isPanelExpanded);
  };

  const handleCloseTooltip = () => {
    setShowInitialTooltip(false);
  };

  const handleFilterChange = (newFilterState: FilterState) => {
    setFilterState(newFilterState);
  };

  const handleSearch = (query: string) => {
    if (query.trim() === "") return;

    // Add to recent searches
    const updatedSearches = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 6);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

    // Perform search
    console.log("Searching for:", query);
    setIsSearchFocused(false);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const handleRecentSearchClick = (search: string) => {
    setSearchQuery(search);
    handleSearch(search);
  };

  return (
    <div className="flex flex-col relative size-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[52px] pt-[32px] px-[232px] relative">
          {/* Page Title */}
          <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            <p className="-webkit-box leading-[38px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px] font-bold">
              리포트
            </p>
          </div>

          {/* Tabs */}
          <div className="content-stretch flex items-center relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            {(["신발", "의류", "용품"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0"
              >
                <div aria-hidden="true" className={`absolute border-[0px_0px_2px] border-solid inset-0 pointer-events-none ${
                  selectedTab === tab ? "border-[#0085ec]" : "border-transparent"
                }`} />
                <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.154px] ${
                  selectedTab === tab ? "text-[#0085ec] font-bold" : "text-[rgba(12,15,15,0.29)] font-bold"
                }`}>
                  {tab}
                </p>
              </button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="content-stretch flex items-center justify-between pt-[20px] relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
              {/* Search/Filter Group */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {/* Search Input with Dropdown */}
                <div ref={searchRef} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[320px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className={`bg-white h-[40px] relative rounded-[8px] shrink-0 w-full ${isSearchFocused ? "z-10" : ""}`}>
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <path d={svgPathsSearch.p179c2600} fill="#0C0F0F" fillOpacity="0.52" />
                            </svg>
                          </div>
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onFocus={() => setIsSearchFocused(true)}
                              placeholder="검색어 입력"
                              className="w-full bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                              onKeyDown={handleSearchKeyDown}
                            />
                          </div>
                          {searchQuery && (
                            <button
                              onClick={() => setSearchQuery("")}
                              className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[40px] -mr-[12px]"
                            >
                              <div className="relative shrink-0 size-[20px]">
                                <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                  <path d="M10 18.3334C5.39763 18.3334 1.66669 14.6025 1.66669 10.0001C1.66669 5.39771 5.39763 1.66675 10 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001C18.3334 14.6025 14.6024 18.3334 10 18.3334ZM10 9.05814L7.64302 6.70117L6.70135 7.64284L9.05833 10.0001L6.70135 12.3571L7.64302 13.2987L10 10.9418L12.357 13.2987L13.2987 12.3571L10.9417 10.0001L13.2987 7.64284L12.357 6.70117L10 9.05814Z" fill="#0C0F0F" fillOpacity="0.52" />
                                </svg>
                              </div>
                            </button>
                          )}
                        </div>
                      </div>
                      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isSearchFocused ? "border-[#0085ec] shadow-[0px_0px_0px_4px_rgba(78,160,255,0.5)]" : "border-[rgba(12,15,15,0.19)]"}`} />
                    </div>
                  </div>
                  
                  {/* Recent Searches Dropdown */}
                  {isSearchFocused && recentSearches.length > 0 && (
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="bg-white max-h-[240px] relative rounded-[8px] shrink-0 w-full">
                        <div className="max-h-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start max-h-[inherit] p-[6px] relative w-full">
                            {/* Header */}
                            <div className="relative shrink-0 w-full">
                              <div className="size-full">
                                <div className="content-stretch flex items-start pb-[4px] pt-[12px] px-[12px] relative w-full">
                                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.14px] font-bold">
                                    <p className="leading-[1.3]">최근 검색어</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Recent Search Items */}
                            {recentSearches.map((search, index) => (
                              <button
                                key={index}
                                onClick={() => handleRecentSearchClick(search)}
                                className="bg-[rgba(255,255,255,0)] h-[48px] relative rounded-[4px] shrink-0 w-full hover:bg-[rgba(12,15,15,0.05)] transition-colors"
                              >
                                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                                    <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                                      <p className="leading-[22px] overflow-ellipsis overflow-hidden text-left">{search}</p>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_1px_0px_rgba(12,15,15,0.2),0px_18px_27px_0px_rgba(12,15,15,0.1)]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Filter Button */}
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[78px]">
                  <button
                    onClick={() => setIsFilterModalOpen(true)}
                    className="bg-[rgba(255,255,255,0)] h-[40px] relative rounded-[8px] shrink-0 w-full hover:bg-gray-50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-0 relative size-full">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={svgPathsFilter.p2423ab00} fill="#2A2C2C" />
                          </svg>
                        </div>
                        <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">필터</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="h-[28px] relative shrink-0 w-0">
                <div className="absolute inset-[-1.79%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 29">
                    <path d="M0.5 0.5V28.5" stroke="#0C0F0F" strokeLinecap="round" strokeOpacity="0.13" />
                  </svg>
                </div>
              </div>

              {/* Switch */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">내 의뢰만 보기</p>
                <div className="content-stretch flex items-center relative shrink-0">
                  <button
                    onClick={() => setShowMyReportsOnly(!showMyReportsOnly)}
                    className="h-[26px] relative shrink-0 w-[48px]"
                  >
                    <div className={`absolute inset-0 rounded-[9999px] transition-colors ${
                      showMyReportsOnly ? "bg-[#0085ec]" : "bg-[rgba(12,15,15,0.07)]"
                    }`}>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                    </div>
                    <div className={`absolute bg-white left-px rounded-[34.909px] size-[24px] top-px transition-transform ${
                      showMyReportsOnly ? "translate-x-[22px]" : "translate-x-0"
                    }`}>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-[-1px] pointer-events-none rounded-[35.909px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          {filteredReports.length === 0 && searchQuery.trim() !== "" ? (
            // Empty State
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {/* Search Result Count */}
              <div className="content-stretch flex gap-[1.721px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c]">검색결과</p>
                <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#0085ec]">0</p>
              </div>
              
              {/* Empty View */}
              <div className="h-[320px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[36px] py-0 relative size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-center text-nowrap tracking-[-0.08px] font-normal">
                        <p className="leading-[27px]">검색 결과가 없습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          ) : (
            // Table with Data
            <>
              <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start relative size-full">
                    <TableHeader
                      hasSelection={selectedReports.size > 0}
                      onClearAll={handleClearAll}
                    />
                    {filteredReports.map((report) => (
                      <TableRow
                        key={report.id}
                        report={report}
                        checked={selectedReports.has(report.id)}
                        onCheckChange={() => handleCheckReport(report.id)}
                        onClick={() => onReportClick?.(report.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>

          {/* Pagination */}
          <div className="content-stretch flex items-center justify-center pt-[20px] relative shrink-0 w-full">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Panel - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomPanel
          selectedReports={mockReports.filter((report) => selectedReports.has(report.id))}
          isExpanded={isPanelExpanded}
          onToggleExpand={handleToggleExpand}
          onCompare={handleCompare}
          onRemoveReport={handleRemoveReport}
          onClearAll={handleClearAll}
          showInitialTooltip={showInitialTooltip}
          onCloseTooltip={handleCloseTooltip}
        />
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleFilterChange}
      />
    </div>
  );
}