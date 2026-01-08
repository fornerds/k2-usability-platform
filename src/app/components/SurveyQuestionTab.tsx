import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-ddk9d4zuay";
import DeleteSectionModal from "./DeleteSectionModal";

// SVG Wrappers
function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

type SectionData = {
  id: number;
  title: string;
  sectionTitle: string;
  questionType: string;
  questionDescription: string;
  questions: {
    id: number;
    title: string;
    minLabel: string;
    maxLabel: string;
    helpText: string;
    isExpanded: boolean;
  }[];
};

type SurveyQuestionTabProps = {
  onSaveTypeClick?: () => void;
  onFormDirtyChange?: (isDirty: boolean) => void;
};

export default function SurveyQuestionTab({ onSaveTypeClick, onFormDirtyChange }: SurveyQuestionTabProps) {
  const [activeSection, setActiveSection] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState<number | null>(null);
  const [sections, setSections] = useState<SectionData[]>([
    {
      id: 1,
      title: "섹션 1",
      sectionTitle: "",
      questionType: "피팅감",
      questionDescription: "",
      questions: [
        {
          id: 1,
          title: "",
          minLabel: "",
          maxLabel: "",
          helpText: "",
          isExpanded: true,
        },
      ],
    },
  ]);

  // Check if form has been modified
  useEffect(() => {
    const hasContent = sections.some((section) => {
      return (
        section.sectionTitle.trim() !== "" ||
        section.questionDescription.trim() !== "" ||
        section.questions.some(
          (q) =>
            q.title.trim() !== "" ||
            q.minLabel.trim() !== "" ||
            q.maxLabel.trim() !== "" ||
            q.helpText.trim() !== ""
        )
      );
    }) || sections.length > 1;

    onFormDirtyChange?.(hasContent);
  }, [sections, onFormDirtyChange]);

  const getCurrentSection = () => {
    return sections.find((s) => s.id === activeSection) || sections[0];
  };

  const updateSection = (updates: Partial<SectionData>) => {
    setSections(
      sections.map((section) =>
        section.id === activeSection ? { ...section, ...updates } : section
      )
    );
  };

  const addSection = () => {
    const newSection: SectionData = {
      id: Math.max(...sections.map((s) => s.id)) + 1,
      title: `섹션 ${sections.length + 1}`,
      sectionTitle: "",
      questionType: "피팅감",
      questionDescription: "",
      questions: [
        {
          id: 1,
          title: "",
          minLabel: "",
          maxLabel: "",
          helpText: "",
          isExpanded: true,
        },
      ],
    };
    setSections([...sections, newSection]);
    setActiveSection(newSection.id);
  };

  const removeSection = (id: number) => {
    if (sections.length > 1) {
      const newSections = sections.filter((section) => section.id !== id);
      setSections(newSections);
      if (activeSection === id) {
        setActiveSection(newSections[0].id);
      }
    }
  };

  const addQuestion = () => {
    const currentSection = getCurrentSection();
    const newQuestion = {
      id: Math.max(...currentSection.questions.map((q) => q.id), 0) + 1,
      title: "",
      minLabel: "",
      maxLabel: "",
      helpText: "",
      isExpanded: true,
    };
    updateSection({
      questions: [...currentSection.questions, newQuestion],
    });
  };

  const updateQuestion = (questionId: number, updates: any) => {
    const currentSection = getCurrentSection();
    updateSection({
      questions: currentSection.questions.map((q) =>
        q.id === questionId ? { ...q, ...updates } : q
      ),
    });
  };

  const toggleQuestion = (questionId: number) => {
    const currentSection = getCurrentSection();
    updateSection({
      questions: currentSection.questions.map((q) =>
        q.id === questionId ? { ...q, isExpanded: !q.isExpanded } : q
      ),
    });
  };

  const currentSection = getCurrentSection();

  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      {/* Section Tabs and Action Buttons */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 cursor-pointer"
              onClick={() => setActiveSection(section.id)}
            >
              <div className="content-stretch flex gap-[12px] items-center overflow-clip pl-[24px] pr-[20px] py-[12px] relative rounded-[inherit]">
                <p
                  className={`leading-[25px] not-italic relative shrink-0 text-[18px] text-center text-nowrap tracking-[-0.126px] font-bold ${
                    activeSection === section.id
                      ? "text-[#2a2c2c]"
                      : "text-[rgba(12,15,15,0.29)]"
                  }`}
                >
                  {section.title}
                </p>
                {activeSection === section.id && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSectionToDelete(section.id);
                      setShowDeleteModal(true);
                    }}
                    className="relative shrink-0"
                  >
                    <Wrapper2>
                      <g id="ic_close">
                        <path d={svgPaths.p23bcfd80} fill="#2A2C2C" />
                      </g>
                    </Wrapper2>
                  </button>
                )}
              </div>
              <div
                aria-hidden="true"
                className={`absolute border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px] ${
                  activeSection === section.id
                    ? "border-[1px_1px_0px] border-[rgba(12,15,15,0.83)]"
                    : "border-[0px_0px_1px] border-[rgba(12,15,15,0.83)]"
                }`}
              />
            </div>
          ))}
          <div className="h-[49px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
            <div className="content-stretch flex gap-[12px] h-full items-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
              <button
                onClick={addSection}
                className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px] hover:bg-gray-50 transition-colors"
              >
                <Wrapper2>
                  <g id="ic_add">
                    <path d={svgPaths.p34717600} fill="#0C0F0F" fillOpacity="0.52" />
                  </g>
                </Wrapper2>
              </button>
            </div>
            <div
              aria-hidden="true"
              className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]"
            />
          </div>
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 content-stretch flex gap-[4px] grow h-full items-center justify-end min-h-px min-w-px relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none"
            />
            <button className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
              <Wrapper3>
                <g id="ic_import">
                  <path d={svgPaths.p30db5180} fill="#0C0F0F" fillOpacity="0.71" />
                </g>
              </Wrapper3>
              <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px] font-semibold">
                유형 가져오기
              </p>
            </button>
            <button
              onClick={onSaveTypeClick}
              className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
            >
              <Wrapper3>
                <g id="ic_write">
                  <path d={svgPaths.p194d8d00} fill="#0C0F0F" fillOpacity="0.71" />
                </g>
              </Wrapper3>
              <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.71)] text-nowrap tracking-[-0.042px] font-semibold">
                유형 저장
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
        {/* 메인정보 */}
        <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
          {/* Section Title Input */}
          <div className="content-stretch flex items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full">
            <div
              aria-hidden="true"
              className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
            />
            <input
              type="text"
              value={currentSection.sectionTitle}
              onChange={(e) => updateSection({ sectionTitle: e.target.value })}
              placeholder="유형 제목 입력"
              className="leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[34px] text-[rgba(12,15,15,0.29)] placeholder:text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.34px] font-bold bg-transparent outline-none"
            />
          </div>

          {/* 정보입력 */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[552.5px]">
                <div className="content-stretch flex gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold w-[208px]">
                  <p className="relative shrink-0 text-[#2a2c2c]">유형 구분</p>
                  <p className="relative shrink-0 text-[#4ea0ff]">*</p>
                </div>
                <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full z-[2]">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <select
                          value={currentSection.questionType}
                          onChange={(e) => updateSection({ questionType: e.target.value })}
                          className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                        >
                          <option value="피팅감">피팅감</option>
                          <option value="착용감">착용감</option>
                          <option value="만족도">만족도</option>
                        </select>
                        <div className="overflow-clip relative shrink-0 size-[40px]">
                          <div className="absolute left-[11px] size-[18px] top-[11px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 18 18"
                            >
                              <g id="caret_down_bold">
                                <path
                                  d={svgPaths.p3bfd5480}
                                  fill="#0C0F0F"
                                  fillOpacity="0.52"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  유형 설명
                </p>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0">
                <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full">
                  <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
                      <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
                        <textarea
                          value={currentSection.questionDescription}
                          onChange={(e) =>
                            updateSection({ questionDescription: e.target.value })
                          }
                          placeholder="등록하는 유형에 대한 설명, 특이사항, 주의점 등을 입력해주세요."
                          className="basis-0 grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px] bg-transparent outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.5px_-0.04%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1153 1"
            >
              <path
                d="M0.5 0.5H1152.5"
                stroke="#0C0F0F"
                strokeLinecap="round"
                strokeOpacity="0.19"
              />
            </svg>
          </div>
        </div>

        {/* 문항정보 */}
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
            <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
              노출 정보
            </p>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-px relative shrink-0">
            {/* Question Cards */}
            {currentSection.questions.map((question) => (
              <div
                key={question.id}
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_6px_9px_0px_rgba(13,14,17,0.03)]"
                  />
                  <div className="size-full">
                    <div className="content-stretch flex gap-[13px] items-start pl-[48px] pr-[40px] py-[32px] relative size-full">
                      {/* Drag Icon */}
                      <div className="absolute left-[14px] top-[39px]">
                        <Wrapper2>
                          <g id="ic_drag">
                            <path d={svgPaths.p3eb30500} fill="#0C0F0F" fillOpacity="0.52" />
                          </g>
                        </Wrapper2>
                      </div>

                      {/* Contents */}
                      <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0">
                        {/* Question Title with Toggle */}
                        <div className="content-stretch flex items-center justify-between pb-[8px] pt-0 px-0 relative shrink-0 w-full">
                          <div
                            aria-hidden="true"
                            className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none"
                          />
                          <input
                            type="text"
                            value={question.title}
                            onChange={(e) =>
                              updateQuestion(question.id, { title: e.target.value })
                            }
                            placeholder="문항 제목 입력"
                            className="flex flex-col justify-center leading-[34px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] placeholder:text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.22px] font-bold bg-transparent outline-none"
                          />
                          <button
                            onClick={() => toggleQuestion(question.id)}
                            className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0"
                          >
                            <Wrapper2>
                              <g id="ic_chevron_up">
                                <path
                                  d={svgPaths.p3a03b900}
                                  fill="#2A2C2C"
                                  style={{
                                    transform: question.isExpanded
                                      ? "rotate(0deg)"
                                      : "rotate(180deg)",
                                    transition: "transform 0.3s",
                                  }}
                                />
                              </g>
                            </Wrapper2>
                          </button>
                        </div>

                        {/* Form Fields - only show when expanded */}
                        {question.isExpanded && (
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            {/* Min/Max Labels Row */}
                            <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                              <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold w-[160px]">
                                  <p className="relative shrink-0 text-[#2a2c2c]">최소 라벨</p>
                                  <p className="relative shrink-0 text-[#4ea0ff]">*</p>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                                        <input
                                          type="text"
                                          value={question.minLabel}
                                          onChange={(e) =>
                                            updateQuestion(question.id, {
                                              minLabel: e.target.value,
                                            })
                                          }
                                          placeholder="최소 라벨을 입력해주세요."
                                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                                <div className="content-stretch flex gap-[2px] h-[40px] items-center leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold w-[160px]">
                                  <p className="relative shrink-0 text-[#2a2c2c]">최대 라벨</p>
                                  <p className="relative shrink-0 text-[#4ea0ff]">*</p>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                                        <input
                                          type="text"
                                          value={question.maxLabel}
                                          onChange={(e) =>
                                            updateQuestion(question.id, {
                                              maxLabel: e.target.value,
                                            })
                                          }
                                          placeholder="최대 라벨을 입력해주세요."
                                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                                        />
                                      </div>
                                    </div>
                                    <div
                                      aria-hidden="true"
                                      className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* 도움말 입력 */}
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[160px]">
                                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                                  도움말 입력
                                </p>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col grow h-[132px] items-start min-h-px min-w-px relative shrink-0">
                                <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full">
                                  <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                                    <div className="content-stretch flex flex-col gap-[12px] items-start min-h-[inherit] p-[12px] relative size-full">
                                      <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full">
                                        <textarea
                                          value={question.helpText}
                                          onChange={(e) =>
                                            updateQuestion(question.id, {
                                              helpText: e.target.value,
                                            })
                                          }
                                          placeholder="문항에 대한 도움말을 입력해주세요."
                                          className="basis-0 grow leading-[27px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px] bg-transparent outline-none resize-none"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* 도움말 이미지 */}
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[160px]">
                                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                                  도움말 이미지
                                </p>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                                <div className="bg-white h-[108px] relative rounded-[8px] shrink-0 w-full">
                                  <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                                    <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                                      <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
                                        <Wrapper2>
                                          <g id="ic_upload">
                                            <path
                                              d={svgPaths.pf03c8f0}
                                              fill="#0C0F0F"
                                              fillOpacity="0.52"
                                            />
                                          </g>
                                        </Wrapper2>
                                        <p className="leading-[27px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                                          파일을 여기에 드래그하거나, 클릭하여 업로드하세요.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    aria-hidden="true"
                                    className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                                  />
                                </div>
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[308px]">
                                    <button className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                                      <div
                                        aria-hidden="true"
                                        className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
                                      />
                                      <Wrapper3>
                                        <g id="ic_upload">
                                          <path d={svgPaths.p2d04cff0} fill="#2A2C2C" />
                                        </g>
                                      </Wrapper3>
                                      <p className="leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                                        파일 추가
                                      </p>
                                    </button>
                                    <div className="content-stretch flex gap-[4px] items-center justify-end leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]">
                                      <p className="relative shrink-0 text-[rgba(12,15,15,0.52)]">
                                        총
                                      </p>
                                      <p className="relative shrink-0 text-[#2a2c2c] font-semibold">
                                        0KB
                                      </p>
                                      <p className="relative shrink-0 text-[rgba(12,15,15,0.52)]">
                                        /50MB
                                      </p>
                                    </div>
                                  </div>
                                  <button className="content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 opacity-50 cursor-not-allowed">
                                    <Wrapper3>
                                      <g id="ic_delete">
                                        <path
                                          d={svgPaths.p10611500}
                                          fill="#0C0F0F"
                                          fillOpacity="0.19"
                                        />
                                      </g>
                                    </Wrapper3>
                                    <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.19)] text-nowrap tracking-[-0.042px] font-semibold">
                                      전체 삭제
                                    </p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 문항 추가 버튼 */}
            <button
              onClick={addQuestion}
              className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]"
              />
              <Wrapper4>
                <g id="ic_add">
                  <path d={svgPaths.p200f7672} fill="#2A2C2C" />
                </g>
              </Wrapper4>
              <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                문항 추가
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Delete Section Modal */}
      {showDeleteModal && (
        <DeleteSectionModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            if (sectionToDelete !== null) {
              removeSection(sectionToDelete);
              setShowDeleteModal(false);
            }
          }}
        />
      )}
    </div>
  );
}