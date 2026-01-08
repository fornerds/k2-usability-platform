import { useState } from "react";
import { AddIcon } from "./ui/atoms/Icon";
import svgPaths from "../../imports/svg-zltnnv3ji4";
import filterSvgPaths from "../../imports/svg-zpbuay9xf5";

// SVG Wrappers
function Wrapper20({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper16({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

// Components
type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
};

function Checkbox({ checked, onChange }: CheckboxProps) {
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

type DeleteModalProps = {
  count: number;
  onCancel: () => void;
  onConfirm: () => void;
};

function DeleteModal({ count, onCancel, onConfirm }: DeleteModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-[4px] w-[400px]">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit]">
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-0 pt-[40px] px-[24px] relative w-full">
                <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="basis-0 grow leading-[34px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center tracking-[-0.154px] font-bold">
                    {count}개의 유형을 삭제 하시겠습니까?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <div className="leading-[27px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-full font-normal">
                  <p className="mb-0">삭제를 선택하면 해당 유형은 즉시 삭제되며, </p>
                  <p>복구 할 수 없습니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative w-full">
                <button
                  onClick={onCancel}
                  className="basis-0 bg-[rgba(255,255,255,0)] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">
                      <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                        취소
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  onClick={onConfirm}
                  className="basis-0 bg-[#1e2020] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#2a2c2c] transition-colors"
                >
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">
                      <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                        삭제
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}

type FilterModalProps = {
  onCancel: () => void;
  onApply: (filters: Set<string>) => void;
};

function FilterModal({ onCancel, onApply }: FilterModalProps) {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set(["기능성", "종합 평가"]));

  const filters = ["피팅감", "기능성", "통증 부위", "종합 평가"];

  const handleToggleFilter = (filter: string) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }
    setSelectedFilters(newFilters);
  };

  const handleReset = () => {
    setSelectedFilters(new Set());
  };

  const handleApply = () => {
    onApply(selectedFilters);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-[6px] w-[520px]">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit]">
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
          
          {/* Modal Content */}
          <div className="relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start pb-[28px] pt-0 px-0 relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full font-bold">
                    유형 구분
                  </p>
                  <div className="content-center flex flex-wrap gap-[12px] items-center justify-between relative shrink-0 w-full">
                    {filters.map((filter) => (
                      <div key={filter} className="basis-0 content-stretch flex gap-[8px] grow items-center max-w-[188px] min-h-px min-w-[176px] relative shrink-0">
                        <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
                          <Checkbox
                            checked={selectedFilters.has(filter)}
                            onChange={() => handleToggleFilter(filter)}
                          />
                        </div>
                        <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{filter}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pb-[24px] pt-[16px] px-[24px] relative w-full">
                <button 
                  onClick={handleReset}
                  className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0 hover:bg-gray-50 px-[8px] py-[8px] transition-colors"
                >
                  <Wrapper16>
                    <g clipPath="url(#clip0_5_4957)">
                      <path d={filterSvgPaths.p38ed0f00} fill="#2A2C2C" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_4957">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </Wrapper16>
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    초기화
                  </p>
                </button>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <button
                    onClick={onCancel}
                    className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <p className="basis-0 grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] font-semibold">
                      취소
                    </p>
                  </button>
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

type QuestionType = {
  id: string;
  category: string;
  title: string;
  questionId: string;
};

type QuestionTypesPageProps = {
  onRegisterClick?: () => void;
};

export default function QuestionTypesPage({ onRegisterClick }: QuestionTypesPageProps) {
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>([
    { id: "Q001", category: "객관식", title: "만족도 평가 (5점 척도)", questionId: "Q001" },
    { id: "Q002", category: "주관식", title: "제품 개선 의견", questionId: "Q002" },
    { id: "Q003", category: "객관식", title: "착용감 평가", questionId: "Q003" },
  ]);

  const totalPages = 5;

  const handleCheckQuestion = (id: string) => {
    const newSelected = new Set(selectedQuestions);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedQuestions(newSelected);
  };

  const handleCheckAll = () => {
    if (selectedQuestions.size === questionTypes.length && questionTypes.length > 0) {
      setSelectedQuestions(new Set());
    } else {
      setSelectedQuestions(new Set(questionTypes.map(q => q.id)));
    }
  };

  const handleDelete = () => {
    if (selectedQuestions.size === 0) return;
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setQuestionTypes(prev => prev.filter(q => !selectedQuestions.has(q.id)));
    setSelectedQuestions(new Set());
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleOpenFilter = () => {
    setShowFilterModal(true);
  };

  const handleCancelFilter = () => {
    setShowFilterModal(false);
  };

  const handleApplyFilter = (filters: Set<string>) => {
    console.log("Applied filters:", Array.from(filters));
    setShowFilterModal(false);
  };

  return (
    <div className="basis-0 grow max-w-[1616px] min-h-px min-w-px relative shrink-0">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[244px] relative w-full">
          {/* Title */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <p className="-webkit-box leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] text-nowrap tracking-[-0.34px] font-bold">
                문항 유형
              </p>
              <button
                className="bg-[#0085ec] content-stretch flex gap-[4px] h-[48px] items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#0070cc] transition-colors"
                onClick={onRegisterClick}
              >
                <AddIcon />
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                  유형 등록
                </p>
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            {/* Filters */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {/* Search Input */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                          <Wrapper20>
                            <g id="ic_search">
                              <path d={svgPaths.p378bce80} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </Wrapper20>
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                            <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="검색어 입력"
                              className="w-full bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>

                  {/* Filter Button */}
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[78px]">
                    <button
                      onClick={handleOpenFilter}
                      className="bg-[rgba(255,255,255,0)] h-[40px] relative rounded-[8px] shrink-0 w-full hover:bg-gray-50 transition-colors"
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-0 relative size-full">
                          <Wrapper16>
                            <g id="ic_tune">
                              <path d={svgPaths.p2423ab00} fill="#2A2C2C" />
                            </g>
                          </Wrapper16>
                          <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                            필터
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Delete Button */}
              <div className="basis-0 content-stretch flex gap-[20px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
                <button
                  onClick={handleDelete}
                  disabled={selectedQuestions.size === 0}
                  className={`content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0 px-[8px] py-[8px] transition-colors ${
                    selectedQuestions.size === 0
                      ? "cursor-not-allowed"
                      : "hover:bg-gray-50 cursor-pointer"
                  }`}
                >
                  <Wrapper16>
                    <g id="ic_delete">
                      <path
                        d={svgPaths.p15ce7480}
                        fill="#0C0F0F"
                        fillOpacity={selectedQuestions.size === 0 ? "0.13" : "0.69"}
                      />
                    </g>
                  </Wrapper16>
                  <p className={`leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold ${
                    selectedQuestions.size === 0 ? "text-[rgba(12,15,15,0.13)]" : "text-[#2a2c2c]"
                  }`}>
                    삭제
                  </p>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  {/* Table Header */}
                  <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 size-[52px]">
                      <div className="content-stretch flex h-[52px] items-center min-h-[52px] px-[12px] py-0 relative shrink-0">
                        <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
                          <Checkbox
                            checked={questionTypes.length > 0 && selectedQuestions.size === questionTypes.length}
                            onChange={handleCheckAll}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] max-w-[180px] min-h-[52px] min-w-px relative shrink-0">
                      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center max-w-[inherit] min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">유형 구분</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">유형 제목</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[140px]">
                      <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">ID</p>
                      </div>
                    </div>
                  </div>

                  {/* Table Rows */}
                  {questionTypes.map((question) => (
                    <div key={question.id} className="bg-white content-stretch flex items-center relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 size-[52px]">
                        <div className="content-stretch flex h-[52px] items-center min-h-[52px] px-[12px] py-0 relative shrink-0">
                          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
                            <Checkbox
                              checked={selectedQuestions.has(question.id)}
                              onChange={() => handleCheckQuestion(question.id)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[52px] max-w-[180px] min-h-[52px] min-w-px relative shrink-0">
                        <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[2px] items-center max-w-[inherit] min-h-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{question.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{question.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[140px]">
                        <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                          <p className="leading-[20px] overflow-ellipsis overflow-hidden">{question.questionId}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>

              {/* Pagination */}
              <div className="content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <button
                    disabled
                    className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Wrapper16>
                      <g id="ic_chevron_double_left">
                        <path d={svgPaths.p23c64f00} fill="#0C0F0F" fillOpacity="0.13" />
                        <path d={svgPaths.pe6c1080} fill="#0C0F0F" fillOpacity="0.13" />
                      </g>
                    </Wrapper16>
                  </button>
                  <button
                    disabled
                    className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Wrapper16>
                      <g id="ic_chevron_left">
                        <path d={svgPaths.p346d4600} fill="#0C0F0F" fillOpacity="0.13" />
                      </g>
                    </Wrapper16>
                  </button>
                </div>
                <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-normal">
                    <p className="leading-[22px]">1</p>
                  </div>
                </div>
                {[2, 3, 4, 5].map((page) => (
                  <div key={page} className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.08px] font-normal">
                      <p className="leading-[22px]">{page}</p>
                    </div>
                  </div>
                ))}
                <div className="content-stretch flex items-center relative shrink-0">
                  <button className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] hover:bg-gray-50 transition-colors">
                    <Wrapper16>
                      <g id="ic_chevron_right">
                        <path d={svgPaths.p35b8bc00} fill="#0C0F0F" fillOpacity="0.69" />
                      </g>
                    </Wrapper16>
                  </button>
                  <button className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px] hover:bg-gray-50 transition-colors">
                    <Wrapper16>
                      <g id="ic_chevron_double_right">
                        <path d={svgPaths.pfb9ce00} fill="#0C0F0F" fillOpacity="0.69" />
                        <path d={svgPaths.p395ba780} fill="#0C0F0F" fillOpacity="0.69" />
                      </g>
                    </Wrapper16>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          count={selectedQuestions.size}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
      {showFilterModal && (
        <FilterModal
          onCancel={handleCancelFilter}
          onApply={handleApplyFilter}
        />
      )}
    </div>
  );
}