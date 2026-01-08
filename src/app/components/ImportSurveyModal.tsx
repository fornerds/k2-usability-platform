import { useState } from "react";
import svgPaths from "../../imports/svg-gbdt92gcs9";
import imgImage4 from "@/assets/bbafd45378bb9aa2bbcd68e95d93c0810380d57f.png";
import imgImage5 from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";

type ImportSurveyModalProps = {
  onCancel: () => void;
  onImport: (selectedIds: number[]) => void;
};

type SurveyItem = {
  id: number;
  name: string;
  brand: string;
  category: string;
  size: string;
  createdDate: string;
  status: "진행 중" | "종료";
  image?: string;
};

const mockSurveys: SurveyItem[] = [
  { id: 1, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage4 },
  { id: 2, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage5 },
  { id: 3, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "종료", image: imgImage4 },
  { id: 4, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "종료", image: imgImage5 },
  { id: 5, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage4 },
  { id: 6, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage5 },
  { id: 7, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage4 },
  { id: 8, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage5 },
  { id: 9, name: "퀀텀 포스 (W3) (Off White)", brand: "아이더", category: "22SS", size: "경등산화", createdDate: "2024. 08. 05.", status: "진행 중", image: imgImage4 },
];

export default function ImportSurveyModal({ onCancel, onImport }: ImportSurveyModalProps) {
  const [activeTab, setActiveTab] = useState<"신발" | "의류" | "용품">("신발");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectAll = () => {
    if (selectedIds.length === mockSurveys.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(mockSurveys.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleImport = () => {
    onImport(selectedIds);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-[100px]">
      <div className="bg-white relative rounded-[6px] w-[800px] max-h-[calc(100vh-200px)] flex flex-col">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit] w-full flex-1">
          {/* Modal Header */}
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[2px] items-start pb-[16px] pl-[24px] pr-[100px] pt-[24px] relative w-full">
                <div className="content-stretch flex items-center relative shrink-0 w-full">
                  <p className="leading-[28px] not-italic relative shrink-0 text-[#2a2c2c] text-[20px] text-nowrap tracking-[-0.14px] font-bold">
                    설문 가져오기
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col items-start px-0 py-[20px] relative shrink-0 w-[752px] overflow-auto">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              {/* Tabs */}
              <div className="relative rounded-[12px] shrink-0 w-full">
                <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] w-full">
                  <button
                    onClick={() => setActiveTab("신발")}
                    className={`h-[60px] relative rounded-[8px] shrink-0 ${
                      activeTab === "신발" ? "border-b-2 border-[rgba(12,15,15,0.83)]" : ""
                    }`}
                  >
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                      <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.22px] font-bold ${
                        activeTab === "신발" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                      }`}>
                        신발
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("의류")}
                    className={`h-[60px] relative rounded-[8px] shrink-0 ${
                      activeTab === "의류" ? "border-b-2 border-[rgba(12,15,15,0.83)]" : ""
                    }`}
                  >
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                      <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.22px] font-bold ${
                        activeTab === "의류" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                      }`}>
                        의류
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab("용품")}
                    className={`h-[60px] relative rounded-[8px] shrink-0 ${
                      activeTab === "용품" ? "border-b-2 border-[rgba(12,15,15,0.83)]" : ""
                    }`}
                  >
                    <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                      <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.22px] font-bold ${
                        activeTab === "용품" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                      }`}>
                        용품
                      </p>
                    </div>
                  </button>
                </div>
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>

              {/* Search */}
              <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="검색어 입력"
                            className="w-full leading-[22px] text-[16px] tracking-[-0.08px] outline-none placeholder:text-[rgba(12,15,15,0.52)]"
                          />
                        </div>
                        <div className="relative shrink-0 size-[20px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="magnifying_glass_bold">
                              <path d={svgPaths.p1b322f00} fill="#0C0F0F" fillOpacity="0.52" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="relative rounded-[8px] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  {/* Table Header */}
                  <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 size-[52px]">
                      <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0">
                        <button
                          onClick={handleSelectAll}
                          className="content-stretch flex items-center relative rounded-[8px] shrink-0"
                        >
                          <div className="overflow-clip relative shrink-0 size-[24px]">
                            <div
                              className={`absolute inset-[12.5%] rounded-[3.5px] border border-[rgba(12,15,15,0.13)] border-solid ${
                                selectedIds.length === mockSurveys.length
                                  ? "bg-[#0085ec]"
                                  : "bg-[rgba(12,15,15,0.1)]"
                              }`}
                            />
                            {selectedIds.length === mockSurveys.length && (
                              <svg className="absolute inset-[25%] size-[50%]" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[52px] items-center min-h-[52px] min-w-[260px] px-[12px] py-[20px] relative shrink-0 w-[260px]">
                      <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">제품</p>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">브랜드</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">카테고리</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">사이즈</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">생성일</p>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-center relative shrink-0">
                            <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[18px]">
                              <div className="relative shrink-0 size-[12px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <g id="caret_up_down_fill">
                                    <path d={svgPaths.p332e8e80} fill="#0C0F0F" fillOpacity="0.29" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[80px]">
                      <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">상태</p>
                      </div>
                    </div>
                  </div>

                  {/* Table Rows */}
                  {mockSurveys.map((item) => (
                    <div key={item.id} className="content-stretch flex items-center relative shrink-0 w-full">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]">
                        <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0">
                          <button
                            onClick={() => handleSelectItem(item.id)}
                            className="content-stretch flex items-center relative rounded-[8px] shrink-0"
                          >
                            <div className="overflow-clip relative shrink-0 size-[24px]">
                              <div
                                className={`absolute inset-[12.5%] rounded-[3.5px] border border-[rgba(12,15,15,0.19)] border-solid ${
                                  selectedIds.includes(item.id) ? "bg-[#0085ec]" : "bg-white"
                                }`}
                              />
                              {selectedIds.includes(item.id) && (
                                <svg className="absolute inset-[25%] size-[50%]" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-[260px] relative shrink-0">
                        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] min-w-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="relative rounded-[2px] shrink-0 size-[32px]">
                              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
                                <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0 rounded-[2px]" />
                                {item.image && (
                                  <div className="absolute inset-0 overflow-hidden rounded-[2px]">
                                    <img alt="" className="absolute max-w-none object-cover size-full" src={item.image} />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.brand}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.size}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                            <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                              <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.createdDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]">
                        <div
                          className={`content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0 ${
                            item.status === "진행 중"
                              ? "bg-[rgba(0,180,118,0.1)]"
                              : "bg-[rgba(12,15,15,0.07)]"
                          }`}
                        >
                          <p
                            className={`leading-[17px] not-italic relative shrink-0 text-[12px] text-nowrap font-semibold ${
                              item.status === "진행 중" ? "text-[#009762]" : "text-[rgba(12,15,15,0.71)]"
                            }`}
                          >
                            {item.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-white relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex items-center justify-end pb-[24px] pt-[16px] px-[24px] relative w-full">
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
                    onClick={handleImport}
                    className="bg-[#1e2020] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#0a0a0a] transition-colors"
                  >
                    <p className="basis-0 grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] font-semibold">
                      가져오기
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
