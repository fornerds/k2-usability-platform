import { useState } from "react";
import svgPaths from "../../imports/svg-pj8b1v3050";
import imgImage42 from "@/assets/2810422a3e4bf45ca41efb9598ef17c6c1f4766f.png";
import DeleteSurveyDetailModal from "./DeleteSurveyDetailModal";

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

type SurveyDetailPageProps = {
  onBackToList: () => void;
  surveyData?: {
    title: string;
    productType: string;
    brand: string;
    category: string;
    year: string;
    season: string;
    series: string;
    insole: string;
    weight: string;
    height: string;
    heelHeight: string;
    grade: string;
    surveyGuide: string;
  };
};

export default function SurveyDetailPage({ onBackToList, surveyData }: SurveyDetailPageProps) {
  const [activeTab, setActiveTab] = useState<"기본정보" | "질문">("기본정보");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Mock data for demonstration
  const defaultData = {
    title: "DYNAFIT_가드킨보아GTX",
    productType: "신발",
    brand: "다이나핏",
    category: "트레일 러닝",
    year: "2025",
    season: "SS",
    series: "270",
    insole: "(여)다이나핏보아라이더",
    weight: "29.09",
    height: "37",
    heelHeight: "36.5",
    grade: "100",
    surveyGuide: "필드레스트 준비과정\n- 기본 착용 (1차 피팅 후)\n- 양팔 (2개 기준), 우피팅, 반팔 목걸, 100mm 흔드 구착)\n- 목주기능, 신발컴프 접시에 추가 하첨 필요"
  };

  const data = surveyData || defaultData;

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[52px] relative w-full">
          {/* Title */}
          <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0">
              <p className="leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] text-nowrap tracking-[-0.34px] font-bold">
                {data.title}
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
                onClick={onBackToList}
                className="bg-white content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  목록
                </p>
              </button>
              <button 
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-white content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="leading-[22px] not-italic relative shrink-0 text-[rgba(12,15,15,0.69)] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                  삭제
                </p>
              </button>
              <button 
                onClick={() => setIsEditMode(!isEditMode)}
                className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#0074d9] transition-colors"
              >
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                  수정
                </p>
              </button>
            </div>
          </div>

          {/* Form Content */}
          {activeTab === "기본정보" && (
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              {/* Row 1: 제품 구분 and 브랜드 */}
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      제품 구분
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-clip">
                            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                              <p className="leading-[22px]">{data.productType}</p>
                            </div>
                          </div>
                          {isEditMode && (
                            <div className="overflow-clip relative shrink-0 size-[40px]">
                              <div className="absolute left-[11px] size-[18px] top-[11px]">
                                <Wrapper18>
                                  <g id="caret_down_bold">
                                    <path d={svgPaths.p3bfd5480} fill="#0C0F0F" fillOpacity="0.52" />
                                  </g>
                                </Wrapper18>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>

                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      브랜드
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-clip">
                            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                              <p className="leading-[22px]">{data.brand}</p>
                            </div>
                          </div>
                          {isEditMode && (
                            <div className="overflow-clip relative shrink-0 size-[40px]">
                              <div className="absolute left-[11px] size-[18px] top-[11px]">
                                <Wrapper18>
                                  <g id="caret_down_bold">
                                    <path d={svgPaths.p3bfd5480} fill="#0C0F0F" fillOpacity="0.52" />
                                  </g>
                                </Wrapper18>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: 카테고리 and 시즌 */}
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      카테고리
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-clip">
                            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                              <p className="leading-[22px]">{data.category}</p>
                            </div>
                          </div>
                          {isEditMode && (
                            <div className="overflow-clip relative shrink-0 size-[40px]">
                              <div className="absolute left-[11px] size-[18px] top-[11px]">
                                <Wrapper18>
                                  <g id="caret_down_bold">
                                    <path d={svgPaths.p3bfd5480} fill="#0C0F0F" fillOpacity="0.52" />
                                  </g>
                                </Wrapper18>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>

                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      시즌
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                      <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-clip">
                              <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                                <p className="leading-[22px]">{data.year}</p>
                              </div>
                            </div>
                            {isEditMode && (
                              <div className="overflow-clip relative shrink-0 size-[40px]">
                                <div className="absolute left-[11px] size-[18px] top-[11px]">
                                  <Wrapper18>
                                    <g id="caret_down_bold">
                                      <path d={svgPaths.p3bfd5480} fill="#0C0F0F" fillOpacity="0.52" />
                                    </g>
                                  </Wrapper18>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                    </div>
                    <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex h-[40px] items-start overflow-clip p-[4px] relative rounded-[6px] shrink-0 w-[120px]">
                      <div className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 ${data.season === "SS" ? "bg-white shadow-sm" : ""}`}>
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">
                            <p className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.042px] ${
                              data.season === "SS" ? "text-[#2a2c2c] font-semibold" : "text-[rgba(12,15,15,0.71)] font-medium"
                            }`}>
                              SS
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0 ${data.season === "FW" ? "bg-white shadow-sm" : ""}`}>
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[8px] py-0 relative size-full">
                            <p className={`basis-0 grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.042px] ${
                              data.season === "FW" ? "text-[#2a2c2c] font-semibold" : "text-[rgba(12,15,15,0.71)] font-medium"
                            }`}>
                              FW
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: 시리즈 and 발판 */}
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      시리즈
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-clip">
                            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                              <p className="leading-[22px]">{data.series}</p>
                            </div>
                          </div>
                          {isEditMode && (
                            <div className="overflow-clip relative shrink-0 size-[40px]">
                              <div className="absolute left-[11px] size-[18px] top-[11px]">
                                <Wrapper18>
                                  <g id="caret_down_bold">
                                    <path d={svgPaths.p3bfd5480} fill="#0C0F0F" fillOpacity="0.52" />
                                  </g>
                                </Wrapper18>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>

                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      발판
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center pl-[12px] pr-0 py-0 relative size-full">
                          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 overflow-clip">
                            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                              <p className="leading-[22px]">{data.insole}</p>
                            </div>
                          </div>
                          {isEditMode && (
                            <div className="overflow-clip relative shrink-0 size-[40px]">
                              <div className="absolute left-[11px] size-[18px] top-[11px]">
                                <Wrapper18>
                                  <g id="caret_down_bold">
                                    <path d={svgPaths.p3bfd5480} fill="#0C0F0F" fillOpacity="0.52" />
                                  </g>
                                </Wrapper18>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: 무게 and 힐 높이 */}
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      무게
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                          <div className="basis-0 grow min-h-px min-w-px">
                            <p className="leading-[22px] text-[#2a2c2c] text-[16px] tracking-[-0.08px]">{data.weight}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>

                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      힐 높이
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                          <div className="basis-0 grow min-h-px min-w-px">
                            <p className="leading-[22px] text-[#2a2c2c] text-[16px] tracking-[-0.08px]">{data.heelHeight}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: 높이 and 등급/기타 */}
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      높이
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                          <div className="basis-0 grow min-h-px min-w-px">
                            <p className="leading-[22px] text-[#2a2c2c] text-[16px] tracking-[-0.08px]">{data.height}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>

                <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[2px] h-[40px] items-center relative shrink-0 w-[208px]">
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      등급/기타
                    </p>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#4ea0ff] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      *
                    </p>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                          <div className="basis-0 grow min-h-px min-w-px">
                            <p className="leading-[22px] text-[#2a2c2c] text-[16px] tracking-[-0.08px]">{data.grade}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 설문 안내 */}
              <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[2px] items-start pt-[10px] relative shrink-0 w-[208px]">
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    설문 안내
                  </p>
                </div>
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-white min-h-[134px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-start overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
                        <div className="basis-0 grow min-h-px min-w-px">
                          <p className="leading-[22px] text-[#2a2c2c] text-[16px] tracking-[-0.08px] whitespace-pre-wrap">
                            {data.surveyGuide}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>

              {/* 대표 이미지 */}
              <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[2px] items-start pt-[10px] relative shrink-0 w-[208px]">
                  <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                    대표 이미지
                  </p>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                    <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex gap-[6px] h-[24px] items-center px-[6px] py-0 relative rounded-[4px] shrink-0">
                      <Wrapper16>
                        <g id="file_bold">
                          <path d={svgPaths.pb13a4e00} fill="#4EA0FF" />
                        </g>
                      </Wrapper16>
                      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0085ec] text-[13px] text-nowrap tracking-[-0.13px]">
                        <p className="leading-[18px] overflow-ellipsis overflow-hidden text-left">
                          help/ image/ 001
                        </p>
                      </div>
                      <p className="leading-[18px] not-italic relative shrink-0 text-[13px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.13px]">
                        12.6 KB
                      </p>
                      <button className="relative shrink-0 size-[16px] hover:opacity-70 transition-opacity">
                        <Wrapper16>
                          <g id="x_bold">
                            <path d={svgPaths.p8a57c00} fill="rgba(12, 15, 15, 0.52)" />
                          </g>
                        </Wrapper16>
                      </button>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <button className="bg-white content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                        + 파일 추가
                      </p>
                    </button>
                    <button className="bg-white content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <Wrapper16>
                        <g id="eye_bold">
                          <path d={svgPaths.p12b1ae00} fill="rgba(12, 15, 15, 0.69)" />
                        </g>
                      </Wrapper16>
                      <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                        OKR 이미지
                      </p>
                    </button>
                  </div>
                  <p className="leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.042px]">
                    또는 이미지를 드래그 또는 붙여넣어주세요
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "질문" && (
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center min-h-[400px] relative shrink-0 w-full">
              <p className="text-[18px] text-[rgba(12,15,15,0.52)] tracking-[-0.09px]">
                질문 탭 내용이 여기에 표시됩니다.
              </p>
            </div>
          )}
        </div>
      </div>
      {isDeleteModalOpen && (
        <DeleteSurveyDetailModal 
          onCancel={() => setIsDeleteModalOpen(false)} 
          onConfirm={() => {
            // 여기서 실제 삭제 로직을 처리하고 목록으로 돌아갑니다
            setIsDeleteModalOpen(false);
            onBackToList();
          }} 
        />
      )}
    </div>
  );
}