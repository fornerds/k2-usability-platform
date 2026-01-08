import { useState } from "react";
import svgPaths from "../../imports/svg-eusl4tclrr";

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
};

export type FilterState = {
  brands: Set<string>;
  season: "SS" | "FW";
  year: string;
  categories: Set<string>;
};

const BRANDS = [
  "나이키",
  "네파",
  "노스페이스",
  "아이더 세이프티",
  "뉴발란스",
  "블랙야크",
  "케이투 세이프티",
  "데상트",
  "부룩스",
  "살로몬",
  "아디다스",
];

const CATEGORIES = [
  "경등산화",
  "골프화",
  "트레킹화",
  "하이킹",
  "워킹화",
  "슬리퍼",
  "방한화",
  "안전화",
  "안전장화",
  "스니커즈",
];

const YEARS = ["2024", "2023", "2022", "2021", "2020"];

// Checkbox Component
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button onClick={onChange} className="overflow-clip relative shrink-0 size-[24px]">
      {checked ? (
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <rect fill="#0085EC" height="18" rx="3.5" width="18" x="3" y="3" />
            <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="white" fillRule="evenodd" />
          </svg>
        </div>
      ) : (
        <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" />
      )}
    </button>
  );
}

export default function FilterModal({ isOpen, onClose, onApply }: FilterModalProps) {
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set(["네파", "아이더 세이프티"]));
  const [selectedSeason, setSelectedSeason] = useState<"SS" | "FW">("SS");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(["경등산화", "트레킹화"]));
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  if (!isOpen) return null;

  const toggleBrand = (brand: string) => {
    const newBrands = new Set(selectedBrands);
    if (newBrands.has(brand)) {
      newBrands.delete(brand);
    } else {
      newBrands.add(brand);
    }
    setSelectedBrands(newBrands);
  };

  const toggleCategory = (category: string) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
  };

  const handleReset = () => {
    setSelectedBrands(new Set());
    setSelectedSeason("SS");
    setSelectedYear("2024");
    setSelectedCategories(new Set());
  };

  const handleApply = () => {
    onApply({
      brands: selectedBrands,
      season: selectedSeason,
      year: selectedYear,
      categories: selectedCategories,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-0 py-[60px]">
      {/* Dim Background */}
      <div className="absolute bg-[rgba(12,15,15,0.52)] inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="bg-white max-w-[800px] relative rounded-[6px] shrink-0 w-full z-[2]">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
          {/* Modal Header */}
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-start pb-[16px] pl-[24px] pr-[100px] pt-[24px] relative w-full">
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <p className="leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-nowrap tracking-[-0.154px] font-bold">
                    필터
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col gap-[28px] items-start px-0 py-[24px] relative shrink-0 w-[752px]">
            {/* 브랜드 */}
            <div className="content-stretch flex flex-col gap-[12px] items-start pb-[28px] pt-0 px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
              <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
                브랜드
              </p>
              <div className="content-center flex flex-wrap gap-[12px] items-center justify-between relative shrink-0 w-full">
                {BRANDS.map((brand) => (
                  <div
                    key={brand}
                    className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[188px] relative shrink-0"
                  >
                    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
                      <Checkbox checked={selectedBrands.has(brand)} onChange={() => toggleBrand(brand)} />
                    </div>
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">{brand}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 시즌 */}
            <div className="content-stretch flex flex-col gap-[12px] items-start pb-[28px] pt-0 px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
              <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
                시즌
              </p>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
                {/* Segmented Control */}
                <div className="basis-0 bg-[rgba(12,15,15,0.07)] grow h-[40px] min-h-px min-w-px relative rounded-[6px] shrink-0">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-start p-[4px] relative size-full">
                      {/* SS */}
                      <button
                        onClick={() => setSelectedSeason("SS")}
                        className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 ${
                          selectedSeason === "SS"
                            ? "bg-white shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)]"
                            : ""
                        }`}
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">
                            <p
                              className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.042px] ${
                                selectedSeason === "SS" ? "text-[#2a2c2c] font-semibold" : "text-[rgba(12,15,15,0.69)] font-medium"
                              }`}
                            >
                              SS
                            </p>
                          </div>
                        </div>
                      </button>
                      {/* FW */}
                      <button
                        onClick={() => setSelectedSeason("FW")}
                        className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 ${
                          selectedSeason === "FW"
                            ? "bg-white shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_10px_16px_0px_rgba(13,14,17,0.17)]"
                            : ""
                        }`}
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">
                            <p
                              className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.042px] ${
                                selectedSeason === "FW" ? "text-[#2a2c2c] font-semibold" : "text-[rgba(12,15,15,0.69)] font-medium"
                              }`}
                            >
                              FW
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Year Select */}
                <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full z-[2]">
                    <button
                      onClick={() => setShowYearDropdown(!showYearDropdown)}
                      className="flex flex-row items-center overflow-clip rounded-[inherit] size-full w-full"
                    >
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0">
                          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-normal">
                            <p className="leading-[22px]">{selectedYear}</p>
                          </div>
                        </div>
                        <div className="overflow-clip relative shrink-0 size-[40px]">
                          <div className="absolute left-[11px] size-[18px] top-[11px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    
                    {/* Dropdown */}
                    {showYearDropdown && (
                      <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid mt-[4px] rounded-[8px] shadow-lg top-full w-full z-10">
                        {YEARS.map((year) => (
                          <button
                            key={year}
                            onClick={() => {
                              setSelectedYear(year);
                              setShowYearDropdown(false);
                            }}
                            className="w-full px-[12px] py-[8px] text-left hover:bg-gray-50 text-[16px] text-[#2a2c2c]"
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 카테고리 */}
            <div className="content-stretch flex flex-col gap-[12px] items-start pb-[28px] pt-0 px-0 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
              <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
                카테고리
              </p>
              <div className="content-center flex flex-wrap gap-[12px] items-center justify-between relative shrink-0 w-full">
                {CATEGORIES.map((category) => (
                  <div
                    key={category}
                    className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[188px] relative shrink-0"
                  >
                    <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
                      <Checkbox checked={selectedCategories.has(category)} onChange={() => toggleCategory(category)} />
                    </div>
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">{category}</p>
                    </div>
                  </div>
                ))}
                {/* Spacers for alignment */}
                <div className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[188px] opacity-0 relative shrink-0" />
                <div className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[188px] opacity-0 relative shrink-0" />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pb-[24px] pt-[16px] px-[24px] relative w-full">
                {/* 초기화 */}
                <button onClick={handleReset} className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0 hover:bg-gray-50 px-[8px] py-[8px] transition-colors">
                  <div className="relative shrink-0 size-[16px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00008 13.3333C6.51119 13.3333 5.25008 12.8166 4.21675 11.7833C3.18341 10.75 2.66675 9.48885 2.66675 7.99996C2.66675 6.51107 3.18341 5.24996 4.21675 4.21663C5.25008 3.18329 6.51119 2.66663 8.00008 2.66663C8.76675 2.66663 9.50008 2.82496 10.2001 3.14163C10.9001 3.45829 11.5001 3.91107 12.0001 4.49996V2.66663H13.3334V7.33329H8.66675V5.99996H11.4667C11.1112 5.37774 10.6251 4.88885 10.0084 4.53329C9.39175 4.17774 8.7223 3.99996 8.00008 3.99996C6.88897 3.99996 5.94453 4.38885 5.16675 5.16663C4.38897 5.9444 4.00008 6.88885 4.00008 7.99996C4.00008 9.11107 4.38897 10.0555 5.16675 10.8333C5.94453 11.6111 6.88897 12 8.00008 12C8.85564 12 9.62786 11.7555 10.3167 11.2666C11.0056 10.7777 11.489 10.1333 11.7667 9.33329H13.1667C12.8556 10.5111 12.2223 11.4722 11.2667 12.2166C10.3112 12.9611 9.2223 13.3333 8.00008 13.3333Z" fill="#2A2C2C"/>
                  </svg>
                  </div>
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    초기화
                  </p>
                </button>

                {/* Right Buttons */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {/* 취소 */}
                  <button
                    onClick={onClose}
                    className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <p className="basis-0 grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] font-semibold">
                      취소
                    </p>
                  </button>
                  {/* 적용 */}
                  <button
                    onClick={handleApply}
                    className="bg-[#1e2020] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#2a2c2c] transition-colors"
                  >
                    <p className="basis-0 grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] font-semibold">
                      적용
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}