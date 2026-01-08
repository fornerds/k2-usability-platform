import { useState, useEffect, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Wrapper, Wrapper16, Wrapper14, UploadIcon, DeleteIcon } from "./ui/atoms/Icon";
import svgPaths from "../../imports/svg-3kutik6x7t";
import topFixedSvgPaths from "../../imports/svg-ocqovedvpn";
import ImportTypeModal from "./ImportTypeModal";

type Question = {
  id: string;
  title: string;
  minLabel: string;
  maxLabel: string;
  description: string;
  collapsed: boolean;
};

type QuestionItemProps = {
  question: Question;
  index: number;
  moveQuestion: (dragIndex: number, hoverIndex: number) => void;
  onUpdate: (id: string, field: keyof Question, value: string | boolean) => void;
  onDelete: (id: string) => void;
  errors: { [key: string]: boolean };
};

const ItemType = "QUESTION";

function QuestionItem({ question, index, moveQuestion, onUpdate, onDelete, errors }: QuestionItemProps) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveQuestion(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`relative rounded-[8px] shrink-0 w-full ${isDragging ? "opacity-50" : ""}`}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full gap-[20px]">
        {/* Question Header */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Wrapper16>
              <g id="ic_drag" className="cursor-move">
                <path d={svgPaths.p3eb30500} fill="#0C0F0F" fillOpacity="0.52" />
              </g>
            </Wrapper16>
            <input
              type="text"
              value={question.title}
              onChange={(e) => onUpdate(question.id, "title", e.target.value)}
              placeholder="문항 제목 입력"
              className="bg-transparent outline-none leading-[22px] text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px] font-semibold"
            />
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <button 
              onClick={() => onDelete(question.id)}
              className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 transition-colors"
            >
              <Wrapper>
                <g id="ic_delete">
                  <path d={svgPaths.p1f7bfa00} fill="#0C0F0F" fillOpacity="0.52" />
                </g>
              </Wrapper>
            </button>
            <button 
              onClick={() => onUpdate(question.id, "collapsed", !question.collapsed)}
              className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 transition-colors"
            >
              <Wrapper14>
                <g id={question.collapsed ? "caret_down" : "caret_up"}>
                  <path d={question.collapsed ? svgPaths.pdb64e00 : svgPaths.p3a03b900} fill="#0C0F0F" fillOpacity="0.52" />
                </g>
              </Wrapper14>
            </button>
          </div>
        </div>

        {/* Collapsible Content */}
        {!question.collapsed && (
          <>
            {/* Response Section */}
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              {/* Left Column */}
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    최소 라벨
                  </p>
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    *
                  </p>
                </div>
                <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                      <input
                        type="text"
                        value={question.minLabel}
                        onChange={(e) => onUpdate(question.id, "minLabel", e.target.value)}
                        placeholder="최소 라벨을 입력하세요."
                        className="w-full bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${errors[`minLabel_${question.id}`] ? 'border-[#ff253f]' : 'border-[rgba(12,15,15,0.19)]'}`} />
                </div>
                {errors[`minLabel_${question.id}`] && (
                  <div className="content-stretch flex gap-[2px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                    <p className="leading-[20px] not-italic relative shrink-0 text-[#ff253f] text-[14px] tracking-[-0.042px]">
                      필수 정보를 미입력하였습니다.
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    최대 라벨
                  </p>
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    *
                  </p>
                </div>
                <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                      <input
                        type="text"
                        value={question.maxLabel}
                        onChange={(e) => onUpdate(question.id, "maxLabel", e.target.value)}
                        placeholder="최대 라벨을 입력하세요."
                        className="w-full bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${errors[`maxLabel_${question.id}`] ? 'border-[#ff253f]' : 'border-[rgba(12,15,15,0.19)]'}`} />
                </div>
                {errors[`maxLabel_${question.id}`] && (
                  <div className="content-stretch flex gap-[2px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                    <p className="leading-[20px] not-italic relative shrink-0 text-[#ff253f] text-[14px] tracking-[-0.042px]">
                      필수 정보를 미입력하였습니다.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Description Field */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  도움말 입력
                </p>
              </div>
              <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full">
                <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
                    <textarea
                      value={question.description}
                      onChange={(e) => onUpdate(question.id, "description", e.target.value)}
                      placeholder="문항에 대한 도움말을 입력해주세요."
                      className="w-full h-full resize-none bg-transparent outline-none leading-[27px] text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Image Upload */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  도움말 이미지
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                {/* Upload Area */}
                <div className="bg-white h-[108px] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                      <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
                        <Wrapper>
                          <UploadIcon />
                        </Wrapper>
                        <p className="leading-[27px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                          파일을 여기에 드래그하거나, 클릭하여 업로드하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>

                {/* Buttons and Info */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[308px]">
                    <button className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <Wrapper14>
                          <UploadIcon color="#2A2C2C" opacity={1} />
                      </Wrapper14>
                      <p className="leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                        파일 추가
                      </p>
                    </button>
                    <div className="content-stretch flex gap-[4px] items-center justify-end leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]">
                      <p className="relative shrink-0 text-[rgba(12,15,15,0.52)]">총</p>
                      <p className="relative shrink-0 text-[#2a2c2c] font-semibold">0KB</p>
                      <p className="relative shrink-0 text-[rgba(12,15,15,0.52)]">/50MB</p>
                    </div>
                  </div>
                  <button className="content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 cursor-not-allowed">
                    <Wrapper14>
                      <DeleteIcon />
                    </Wrapper14>
                    <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.19)] text-nowrap tracking-[-0.042px] font-semibold">
                      전체 삭제
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type QuestionTypeRegisterPageProps = {
  onDirtyChange?: (isDirty: boolean) => void;
};

function QuestionTypeRegisterPageContent({ onDirtyChange }: QuestionTypeRegisterPageProps) {
  const [pageTitle, setPageTitle] = useState("");
  const [category, setCategory] = useState("피팅감");
  const [description, setDescription] = useState("");
  
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      title: "",
      minLabel: "",
      maxLabel: "",
      description: "",
      collapsed: false,
    },
  ]);

  // Modal state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Error states
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    pageTitle: false,
  });

  // Check if form is dirty (has any content)
  useEffect(() => {
    const hasQuestionData = questions.some(
      (q) => q.title || q.minLabel || q.maxLabel || q.description
    );
    const isDirty = !!(pageTitle || description || hasQuestionData);
    onDirtyChange?.(isDirty);
  }, [pageTitle, description, questions, onDirtyChange]);

  const moveQuestion = useCallback((dragIndex: number, hoverIndex: number) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      const [removed] = newQuestions.splice(dragIndex, 1);
      newQuestions.splice(hoverIndex, 0, removed);
      return newQuestions;
    });
  }, []);

  const updateQuestion = useCallback((id: string, field: keyof Question, value: string | boolean) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  }, []);

  const deleteQuestion = useCallback((id: string) => {
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  }, []);

  const addQuestion = useCallback(() => {
    const newId = String(Date.now());
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        id: newId,
        title: "",
        minLabel: "",
        maxLabel: "",
        description: "",
        collapsed: false,
      },
    ]);
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: boolean } = {
      pageTitle: !pageTitle.trim(),
    };

    // Validate each question
    questions.forEach((question) => {
      newErrors[`minLabel_${question.id}`] = !question.minLabel.trim();
      newErrors[`maxLabel_${question.id}`] = !question.maxLabel.trim();
    });

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error);
  };

  const handleRegister = () => {
    if (validateForm()) {
      console.log("Form is valid, registering...");
      alert("유형이 등록되었습니다.");
    } else {
      console.log("Form has errors");
    }
  };

  const handleImport = (selectedIds: number[]) => {
    console.log("Importing types with IDs:", selectedIds);
    alert(`${selectedIds.length}개의 유형을 가져왔습니다.`);
    setIsImportModalOpen(false);
  };

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      {/* Import Modal */}
      <ImportTypeModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImport}
      />

      {/* Top Fixed Bar */}
      <div className="absolute bg-white flex h-[60px] items-center justify-end left-0 right-0 top-0 z-10">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_8px_12px_0px_rgba(13,14,17,0.04)]" />
        <div className="content-stretch flex items-center justify-end px-[52px] py-[16px] relative size-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex items-center relative shrink-0">
              <button 
                onClick={() => setIsImportModalOpen(true)}
                className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
              >
                <Wrapper16>
                  <g clipPath="url(#clip0_import)" id="ic_import">
                    <path d={topFixedSvgPaths.p3ed07b00} fill="#0C0F0F" fillOpacity="0.71" />
                  </g>
                  <defs>
                    <clipPath id="clip0_import">
                      <rect fill="white" height="16" width="16" />
                    </clipPath>
                  </defs>
                </Wrapper16>
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.08px] font-semibold">
                  유형 가져오기
                </p>
              </button>
            </div>
            <div className="h-[28px] relative shrink-0 w-0">
              <div className="absolute inset-[-3.57%_-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 30">
                  <path d="M1 1V29" stroke="#0C0F0F" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <button className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  임시저장
                </p>
              </button>
              <button
                className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#0074d9] transition-colors"
                onClick={handleRegister}
              >
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                  등록
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[80px] pt-[108px] px-[244px] relative w-full">
          {/* Page Title Input */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full">
              <div
                aria-hidden="true"
                className={`absolute border-[0px_0px_1px] border-solid inset-0 pointer-events-none ${
                  errors.pageTitle ? "border-[#ff253f]" : "border-[rgba(12,15,15,0.19)]"
                }`}
              />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <input
                  type="text"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                  placeholder="유형 제목 입력"
                  className="bg-transparent outline-none leading-[47px] text-[34px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.29)] tracking-[-0.34px] font-bold"
                />
              </div>
            </div>
            {errors.pageTitle && (
              <div className="content-stretch flex gap-[2px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                <p className="leading-[20px] not-italic relative shrink-0 text-[#ff253f] text-[14px] tracking-[-0.042px]">
                  필수 정보를 미입력하였습니다.
                </p>
              </div>
            )}
          </div>

          {/* Main Form */}
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
            {/* Category Selection */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  유형 구분
                </p>
                <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  *
                </p>
              </div>
              <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative shrink-0">
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-transparent outline-none appearance-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] font-normal pr-[40px]"
                      >
                        <option value="피팅감">피팅감</option>
                        <option value="기능성">기능성</option>
                        <option value="통증 부위">통증 부위</option>
                        <option value="종합 평가">종 평가</option>
                      </select>
                    </div>
                    <div className="absolute right-[11px] size-[18px] top-[11px] pointer-events-none">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Description */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  유형 설명
                </p>
              </div>
              <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full">
                <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="문항에는 응답에 대한 설명, 특이사항, 주의점과 등을 입력해주세요."
                      className="w-full h-full resize-none bg-transparent outline-none leading-[27px] text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Question Section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  노출 항목
                </p>
              </div>

              {/* Question List */}
              {questions.map((question, index) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  index={index}
                  moveQuestion={moveQuestion}
                  onUpdate={updateQuestion}
                  onDelete={deleteQuestion}
                  errors={errors}
                />
              ))}

              {/* Add Question Button */}
              <button
                onClick={addQuestion}
                className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <Wrapper16>
                  <g id="ic_add">
                    <path d={svgPaths.p200f7672} fill="#2A2C2C" />
                  </g>
                </Wrapper16>
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  문항 추가
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuestionTypeRegisterPage(props: QuestionTypeRegisterPageProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <QuestionTypeRegisterPageContent {...props} />
    </DndProvider>
  );
}