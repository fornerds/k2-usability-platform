import { useState } from "react";
import addIconSvgPaths from "../../imports/svg-zltnnv3ji4";
import svgPaths from "../../imports/svg-txmzvikcft";
import imgImage5 from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";
import DeleteSurveyModal from "./DeleteSurveyModal";
import { AddIcon } from "./ui/atoms/Icon";

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

type SurveyData = {
  id: number;
  name: string;
  brand: string;
  participants: number;
  category: string;
  startDate: string;
  status: string;
  responses: string;
};

const mockData: SurveyData[] = [
  { id: 1, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "진행 중", responses: "32/100" },
  { id: 2, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "진행 중", responses: "32/100" },
  { id: 3, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "진행 중", responses: "32/100" },
  { id: 4, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "진행 중", responses: "32/100" },
  { id: 5, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "종료", responses: "32/100" },
  { id: 6, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "종료", responses: "32/100" },
  { id: 7, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "진행 중", responses: "32/100" },
  { id: 8, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "진행 중", responses: "32/100" },
  { id: 9, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "종료", responses: "32/100" },
  { id: 10, name: "런닝 조스 (W3) (Off White)", brand: "아이더", participants: 2255, category: "경량신발", startDate: "2024. 08. 05.", status: "종료", responses: "32/100" },
];

type SurveyListPageProps = {
  onCreateClick: () => void;
  onItemClick?: () => void;
};

export default function SurveyListPage({ onCreateClick, onItemClick }: SurveyListPageProps) {
  const [activeTab, setActiveTab] = useState<"신발" | "의류" | "용품">("신발");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const filteredData = mockData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = showCompleted || item.status !== "종료";
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredData.length / 10));
  const paginatedData = filteredData.slice((currentPage - 1) * 10, currentPage * 10);

  const handleSelectAll = () => {
    if (selectedIds.length === paginatedData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedData.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isAllSelected = paginatedData.length > 0 && selectedIds.length === paginatedData.length;

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[52px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="leading-[41px] not-italic relative shrink-0 text-[#2a2c2c] text-[28px] text-nowrap tracking-[-0.196px] font-bold">
                설문지
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <button 
                onClick={onCreateClick}
                className="bg-[#0085ec] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-[#0074d9] transition-colors">
                <AddIcon />
                <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                  설문지 등록
                </p>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
              <button
                onClick={() => setActiveTab("신발")}
                className={`content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0 ${
                  activeTab === "신발" ? "border-b-2 border-[#2a2c2c]" : ""
                }`}
              >
                <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.154px] font-bold ${
                  activeTab === "신발" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                }`}>
                  신발
                </p>
              </button>
              <button
                onClick={() => setActiveTab("의류")}
                className={`content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0 ${
                  activeTab === "의류" ? "border-b-2 border-[#2a2c2c]" : ""
                }`}
              >
                <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.154px] font-bold ${
                  activeTab === "의류" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                }`}>
                  의류
                </p>
              </button>
              <button
                onClick={() => setActiveTab("용품")}
                className={`content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0 ${
                  activeTab === "용품" ? "border-b-2 border-[#2a2c2c]" : ""
                }`}
              >
                <p className={`leading-[34px] not-italic relative shrink-0 text-[22px] text-center text-nowrap tracking-[-0.154px] font-bold ${
                  activeTab === "용품" ? "text-[#2a2c2c]" : "text-[rgba(12,15,15,0.29)]"
                }`}>
                  용품
                </p>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            {/* Search */}
            <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[296px]">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                  <Wrapper16>
                    <g id="magnifying_glass_bold">
                      <path d={svgPaths.p378bce80} fill="#0C0F0F" fillOpacity="0.52" />
                    </g>
                  </Wrapper16>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="검색어 입력"
                    className="w-full bg-transparent outline-none text-[16px] text-[#2a2c2c] placeholder:text-[rgba(12,15,15,0.52)] tracking-[-0.08px]"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>

            {/* Filter Button */}
            <button className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Wrapper16>
                <g id="funnel_simple_bold">
                  <path d={svgPaths.p2423ab00} fill="#2A2C2C" />
                </g>
              </Wrapper16>
              <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                필터
              </p>
            </button>

            {/* Spacer */}
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0" />

            {/* Toggle */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                진행 중만 보기
              </p>
              <button
                onClick={() => setShowCompleted(!showCompleted)}
                className="relative shrink-0 w-[44px] h-[24px] rounded-full transition-colors"
                style={{ backgroundColor: showCompleted ? "rgba(12, 15, 15, 0.19)" : "#0085ec" }}
              >
                <div
                  className="absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow transition-transform"
                  style={{ transform: showCompleted ? "translateX(2px)" : "translateX(22px)" }}
                />
              </button>
            </div>

            {/* Export CSV */}
            <button className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors">
              <Wrapper16>
                <g id="file_arrow_down_bold">
                  <path d={svgPaths.p1228f700} fill="#0C0F0F" fillOpacity="0.52" />
                </g>
              </Wrapper16>
              <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                CSV 다운로드
              </p>
            </button>

            {/* Delete Button */}
            <button 
              disabled={selectedIds.length === 0}
              className="content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setShowDeleteModal(true)}
            >
              <Wrapper16>
                <g id="trash_bold">
                  <path d={svgPaths.p15ce7480} fill="#0C0F0F" fillOpacity="0.52" />
                </g>
              </Wrapper16>
              <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                삭제
              </p>
            </button>
          </div>

          {/* Table */}
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="relative rounded-[8px] shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                {/* Table Header */}
                <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex h-[52px] items-center justify-center min-h-[52px] p-[16px] relative shrink-0 w-[52px]">
                    <div className="content-stretch flex items-center min-h-[52px] px-[12px] py-0 relative shrink-0">
                      <button
                        onClick={handleSelectAll}
                        className="content-stretch flex items-center relative rounded-[8px] shrink-0"
                      >
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div
                            className={`absolute inset-[12.5%] rounded-[3.5px] ${
                              isAllSelected
                                ? "bg-[#0085ec] border-[#0085ec]"
                                : "bg-[rgba(12,15,15,0.1)]"
                            } border border-[rgba(12,15,15,0.13)] border-solid`}
                          />
                          {isAllSelected && (
                            <svg className="absolute inset-[25%] size-[50%]" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="basis-0 grow h-[52px] min-h-[52px] min-w-[320px] relative shrink-0">
                    <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
                      <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                        <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                          <p className="leading-[20px] overflow-ellipsis overflow-hidden">제품</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[120px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">브랜드</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[80px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">지원</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[120px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">카테고리</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[140px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">등록일</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[100px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">상태</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[120px]">
                    <div className="flex flex-col justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-semibold">
                      <p className="leading-[20px] overflow-ellipsis overflow-hidden">응답률</p>
                    </div>
                  </div>
                </div>

                {/* Table Rows */}
                {paginatedData.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={(e) => {
                      // Only navigate if not clicking the checkbox
                      if (!(e.target as HTMLElement).closest('button[data-checkbox]')) {
                        onItemClick?.();
                      }
                    }}
                    className="content-stretch flex items-center relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]">
                      <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0">
                        <button
                          data-checkbox
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectItem(item.id);
                          }}
                          className="content-stretch flex items-center relative rounded-[8px] shrink-0"
                        >
                          <div className="overflow-clip relative shrink-0 size-[24px]">
                            <div
                              className={`absolute inset-[12.5%] rounded-[3.5px] ${
                                selectedIds.includes(item.id)
                                  ? "bg-[#0085ec] border-[#0085ec]"
                                  : "bg-white"
                              } border border-[rgba(12,15,15,0.19)] border-solid`}
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
                    <div className="basis-0 grow h-[56px] min-h-[56px] min-w-[320px] relative shrink-0">
                      <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
                        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] min-w-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="relative shrink-0 size-[32px]">
                            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                              <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0" />
                              <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage5} />
                            </div>
                          </div>
                          <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px] font-semibold">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[56px] items-center min-h-[56px] px-[12px] py-[20px] relative shrink-0 w-[120px]">
                      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.brand}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[56px] items-center min-h-[56px] px-[12px] py-[20px] relative shrink-0 w-[80px]">
                      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.participants}</p>
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
                    <div className="content-stretch flex gap-[12px] h-[56px] items-center min-h-[56px] px-[12px] py-[20px] relative shrink-0 w-[140px]">
                      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.startDate}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[20px] relative shrink-0 w-[100px]">
                      <div className={`content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0 ${
                        item.status === "진행 중" ? "bg-[rgba(78,160,255,0.1)]" : "bg-gray-100"
                      }`}>
                        <p className={`leading-[17px] not-italic relative shrink-0 text-[12px] text-nowrap font-semibold ${
                          item.status === "진행 중" ? "text-[#0085ec]" : "text-gray-600"
                        }`}>
                          {item.status}
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[56px] items-center min-h-[56px] px-[12px] py-[20px] relative shrink-0 w-[120px]">
                      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px] font-semibold">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{item.responses}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>

            {/* Pagination */}
            <div className="content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                  <p className="leading-[22px] text-[rgba(12,15,15,0.29)]">«</p>
                </div>
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                  <p className="leading-[22px] text-[rgba(12,15,15,0.29)]">‹</p>
                </div>
              </button>
              <button className="bg-[#1e2020] content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                  <p className="leading-[22px] text-white">{currentPage}</p>
                </div>
              </button>
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                    <p className="leading-[22px] text-[rgba(12,15,15,0.29)]">{currentPage + 1}</p>
                  </div>
                </button>
              )}
              {currentPage + 1 < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 2)}
                  className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                    <p className="leading-[22px] text-[rgba(12,15,15,0.29)]">{currentPage + 2}</p>
                  </div>
                </button>
              )}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                  <p className="leading-[22px] text-[rgba(12,15,15,0.29)]">›</p>
                </div>
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] w-full">
                  <p className="leading-[22px] text-[rgba(12,15,15,0.29)]">»</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteSurveyModal
          count={selectedIds.length}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => {
            // 실제로는 여기서 서버에 삭제 요청을 보냅니다
            setSelectedIds([]);
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
}