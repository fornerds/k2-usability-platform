import { useState } from "react";
import svgPaths from "../../imports/svg-l6lappgr9x";
import SurveyQuestionTab from "./SurveyQuestionTab";
import ImportSurveyModal from "./ImportSurveyModal";
import { UploadIcon, DeleteIcon } from "./ui/atoms/Icon";

// SVG Wrappers
function Wrapper16({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper18({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}

type SurveyCreatePageProps = {
  onShowModal: () => void;
  onFormDirtyChange?: (isDirty: boolean) => void;
  onSaveTypeClick?: () => void;
};

export default function SurveyCreatePage({ onShowModal, onFormDirtyChange, onSaveTypeClick }: SurveyCreatePageProps) {
  const [activeTab, setActiveTab] = useState<"기본정보" | "질문">("기본정보");
  const [showImportModal, setShowImportModal] = useState(false);
  const [formData, setFormData] = useState({
    productType: "",
    category: "",
    series: "",
    weight: "",
    height: "",
    brand: "",
    year: "2025",
    season: "SS",
    insole: "",
    heelHeight: "",
    grade: "",
    surveyGuide: "",
  });
  const [isBasicInfoDirty, setIsBasicInfoDirty] = useState(false);
  const [isQuestionDirty, setIsQuestionDirty] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (!isBasicInfoDirty) {
      setIsBasicInfoDirty(true);
      onFormDirtyChange?.(true);
    }
  };

  const handleQuestionDirtyChange = (isDirty: boolean) => {
    setIsQuestionDirty(isDirty);
    onFormDirtyChange?.(isDirty || isBasicInfoDirty);
  };

  const handleRegister = () => {
    setIsBasicInfoDirty(false);
    setIsQuestionDirty(false);
    onFormDirtyChange?.(false);
    onShowModal();
  };

  const handleImport = (selectedIds: number[]) => {
    console.log("Importing surveys:", selectedIds);
    setShowImportModal(false);
    // 여기서 실제로 선택된 설문 데이터를 가져와서 폼에 적용할 수 있습니다
  };

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[52px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="leading-[41px] not-italic relative shrink-0 text-[#2a2c2c] text-[28px] text-nowrap tracking-[-0.196px] font-bold">
                설문 제목 입력 (모델명)
              </p>
            </div>
          </div>

          {/* Tabs and Action Buttons */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {/* Tabs */}
            <div className="content-stretch flex items-center relative shrink-0">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
              <button
                onClick={() => setActiveTab("기본정보")}
                className={`content-stretch flex h-[48px] items-center justify-center overflow-clip px-[20px] py-0 relative shrink-0 ${
                  activeTab === "기본정보" ? "border-b-2 border-[#2a2c2c]" : ""
                }`}
              >
                <p className={`leading-[27px] not-italic relative shrink-0 text-[18px] text-center text-nowrap tracking-[-0.09px] font-semibold ${
                  activeTab === "기본정보" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                }`}>
                  기본정보
                </p>
              </button>
              <button
                onClick={() => setActiveTab("질문")}
                className={`content-stretch flex h-[48px] items-center justify-center overflow-clip px-[20px] py-0 relative shrink-0 ${
                  activeTab === "질문" ? "border-b-2 border-[#2a2c2c]" : ""
                }`}
              >
                <p className={`leading-[27px] not-italic relative shrink-0 text-[18px] text-center text-nowrap tracking-[-0.09px] font-semibold ${
                  activeTab === "질문" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                }`}>
                  질문
                </p>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <button
                onClick={() => setShowImportModal(true)}
                className="bg-white content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <Wrapper16>
                  <g id="copy_bold">
                    <path d={svgPaths.p17a57880} fill="#2A2C2C" />
                  </g>
                </Wrapper16>
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  설문 가져오기
                </p>
              </button>
              <button className="bg-white content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <Wrapper16>
                  <g id="eye_bold">
                    <path d={svgPaths.p12b1ae00} fill="#2A2C2C" />
                  </g>
                </Wrapper16>
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  미리보기
                </p>
              </button>
              <button className="bg-white content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  임시저장
                </p>
              </button>
              <button
                onClick={handleRegister}
                className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#0074d9] transition-colors"
              >
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                  등록
                </p>
              </button>
            </div>
          </div>

          {/* Form Content */}
          {activeTab === "기본정보" && (
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {/* Row 1: 제품·구분 and 브랜드 */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      제품·구분
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <select
                          value={formData.productType}
                          onChange={(e) => handleInputChange("productType", e.target.value)}
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                        >
                          <option value="">마인칸</option>
                          <option value="option1">옵션 1</option>
                          <option value="option2">옵션 2</option>
                        </select>
                        <div className="content-stretch flex h-full items-center justify-center px-[12px] py-0 relative shrink-0">
                          <Wrapper18>
                            <g id="caret_down_bold">
                              <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </Wrapper18>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      브랜드
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <select
                          value={formData.brand}
                          onChange={(e) => handleInputChange("brand", e.target.value)}
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                        >
                          <option value="">아식스</option>
                          <option value="nike">나이키</option>
                          <option value="adidas">아디다스</option>
                        </select>
                        <div className="content-stretch flex h-full items-center justify-center px-[12px] py-0 relative shrink-0">
                          <Wrapper18>
                            <g id="caret_down_bold">
                              <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </Wrapper18>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>

              {/* Row 2: 카테고리 and 사진 */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      카테고리
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <select
                          value={formData.category}
                          onChange={(e) => handleInputChange("category", e.target.value)}
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                        >
                          <option value="">3기능성 워킹 인피</option>
                          <option value="category1">카테고리 1</option>
                          <option value="category2">카테고리 2</option>
                        </select>
                        <div className="content-stretch flex h-full items-center justify-center px-[12px] py-0 relative shrink-0">
                          <Wrapper18>
                            <g id="caret_down_bold">
                              <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </Wrapper18>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      사진
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[120px]">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                          <select
                            value={formData.year}
                            onChange={(e) => handleInputChange("year", e.target.value)}
                            className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                          >
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                          </select>
                          <div className="content-stretch flex h-full items-center justify-center px-[12px] py-0 relative shrink-0">
                            <Wrapper18>
                              <g id="caret_down_bold">
                                <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                              </g>
                            </Wrapper18>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>

                    <div className="bg-[#faf9f9] content-stretch flex gap-[4px] h-[40px] items-center relative rounded-[8px] shrink-0">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <button
                        onClick={() => handleInputChange("season", "SS")}
                        className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 ${
                          formData.season === "SS" ? "bg-white shadow-sm" : ""
                        }`}
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">
                            <p className={`leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold ${
                              formData.season === "SS" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.52)]"
                            }`}>
                              SS
                            </p>
                          </div>
                        </div>
                      </button>
                      <button
                        onClick={() => handleInputChange("season", "FW")}
                        className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 ${
                          formData.season === "FW" ? "bg-white shadow-sm" : ""
                        }`}
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">
                            <p className={`leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] font-semibold ${
                              formData.season === "FW" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.52)]"
                            }`}>
                              FW
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: 시리즈 and 발판 */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      시리즈
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <select
                          value={formData.series}
                          onChange={(e) => handleInputChange("series", e.target.value)}
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                        >
                          <option value="">270</option>
                          <option value="series1">시리즈 1</option>
                          <option value="series2">시리즈 2</option>
                        </select>
                        <div className="content-stretch flex h-full items-center justify-center px-[12px] py-0 relative shrink-0">
                          <Wrapper18>
                            <g id="caret_down_bold">
                              <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </Wrapper18>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      발판
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                        <select
                          value={formData.insole}
                          onChange={(e) => handleInputChange("insole", e.target.value)}
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] tracking-[-0.08px] appearance-none"
                        >
                          <option value="">공목발판</option>
                          <option value="insole1">발판 1</option>
                          <option value="insole2">발판 2</option>
                        </select>
                        <div className="content-stretch flex h-full items-center justify-center px-[12px] py-0 relative shrink-0">
                          <Wrapper18>
                            <g id="caret_down_bold">
                              <path d={svgPaths.p156e6372} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </Wrapper18>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>

              {/* Row 4: 무게 and 힐 높이 */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    무게
                  </p>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                        <input
                          type="text"
                          value={formData.weight}
                          onChange={(e) => handleInputChange("weight", e.target.value)}
                          placeholder="무게를 입력해주세요"
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      힐 높이
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
                          value={formData.heelHeight}
                          onChange={(e) => handleInputChange("heelHeight", e.target.value)}
                          placeholder="힐을 입력해주세요"
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>

              {/* Row 5: 높이 and 등급/기타 */}
              <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    높이
                  </p>
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                        <input
                          type="text"
                          value={formData.height}
                          onChange={(e) => handleInputChange("height", e.target.value)}
                          placeholder="높이를 입력해주세요"
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>

                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      등급/기타
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
                          value={formData.grade}
                          onChange={(e) => handleInputChange("grade", e.target.value)}
                          placeholder="등급/기타를 입력해주세요"
                          className="basis-0 grow min-h-px min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                        />
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>

              {/* 설문 안내 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  설문 안내
                </p>
                <div className="bg-white min-h-[120px] relative rounded-[8px] shrink-0 w-full">
                  <div className="flex flex-row items-start overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
                      <textarea
                        value={formData.surveyGuide}
                        onChange={(e) => handleInputChange("surveyGuide", e.target.value)}
                        placeholder="블록별로 설문에 대한 안내 문구 및 볼드 등의 서식정보를 입력해주세요"
                        className="basis-0 grow min-h-[96px] min-w-px bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px] resize-none"
                      />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>

              {/* 대표 이미지 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  대표 이미지
                </p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  {/* Upload Area */}
                  <div className="bg-white h-[108px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                        <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
                          <UploadIcon />
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
                        <UploadIcon color="#2A2C2C" opacity={1} />
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
                      <DeleteIcon />
                      <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.19)] text-nowrap tracking-[-0.042px] font-semibold">
                        전체 삭제
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "질문" && (
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <SurveyQuestionTab
                onSaveTypeClick={onSaveTypeClick}
                onFormDirtyChange={handleQuestionDirtyChange}
              />
            </div>
          )}
        </div>
      </div>
      {showImportModal && (
        <ImportSurveyModal
          onCancel={() => setShowImportModal(false)}
          onImport={handleImport}
        />
      )}
    </div>
  );
}