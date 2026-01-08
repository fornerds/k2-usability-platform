import { useState } from "react";
import clsx from "clsx";

type ResponseData = {
  rating: string;
  comment: string;
  name: string;
  date: string;
};

type Product = {
  id: string;
  name: string;
};

const products: Product[] = [
  { id: "guard-run-max", name: "가드런 맥스" },
  { id: "fast-run-3", name: "피스테런 3.0" },
  { id: "swift-interval", name: "스위프트인터벌" }
];

const categories = [
  { key: "elasticity", label: "탄성" },
  { key: "cushioning", label: "쿠셔닝" },
  { key: "breathability", label: "통기성" },
  { key: "lightweight", label: "경량성" },
  { key: "flexibility", label: "유연성" },
  { key: "stability", label: "안정성" },
  { key: "comfort", label: "편안함" }
];

// Mock response data - same structure for all products
const mockResponses: Record<string, ResponseData[]> = {
  elasticity: [
    {
      rating: "매우 좋음",
      comment: "발바닥의 앞부분에서 러닝을 할때 앞으로 튀어나갈 수 있도록 해주는 느낌이 체감이 된다고 생각한다. 걸을때는 체감이 되거나 정도가 심하지 않은데 러닝을 할때는 그런점이 러닝할때 편하게해주고 앞꿈치에 통증도 없어서 좋았다.",
      name: "나윤성",
      date: "2025.2.28"
    },
    {
      rating: "좋음",
      comment: "신발을 신고 걸을때 큰 불편은 없었다. 다만 이 신발을 신고 크게 반발탄성에 도움이 된 부분도 없던것같다.",
      name: "박성한",
      date: "2025.2.28"
    },
    {
      rating: "다소 좋음",
      comment: "신발의 반발 탄성이 추진력을 준다기 보다는 딱딱한 느낌이 들게 해서 거슬리는 느낌이 들었다.",
      name: "박상윤",
      date: "2025.2.28"
    },
    {
      rating: "좋음",
      comment: "걷거나 달릴 때 앞으로 튀어나가는 듯한 느낌을 받아 반발 탄성이 매우 좋다고 느꼈음. 절반은 걷고 절반은 달려서 테스트를 진행하였는데 걸어서 테스트를 진행할 때에는 큰 변함없이 반발탄성을 느낄 수 있었으나 강하게 달려서 그런지 5km 쯤 되었을 때 반발탄성이 약해진다고 느꼈음.",
      name: "구현우",
      date: "2025.2.28"
    },
    {
      rating: "좋음",
      comment: "발을 감싸주는 느낌이 좋고, 장시간 착용해도 편안합니다. 다만 점프를 할때 발 뒤꿈치가 살짝 들리는 느낌이 들어요.",
      name: "최정훈",
      date: "2025.2.28"
    }
  ],
  cushioning: [
    {
      rating: "매우 좋음",
      comment: "쿠션감이 아주 뛰어나서 장시간 러닝해도 발이 편안했습니다.",
      name: "김민수",
      date: "2025.2.28"
    },
    {
      rating: "좋음",
      comment: "쿠션이 적당해서 좋습니다. 너무 푹신하지도 않고 딱딱하지도 않아요.",
      name: "이지은",
      date: "2025.2.28"
    }
  ],
  breathability: [
    {
      rating: "매우 좋음",
      comment: "통기성이 좋아서 발이 전혀 답답하지 않았습니다.",
      name: "정수현",
      date: "2025.2.28"
    },
    {
      rating: "좋음",
      comment: "여름에도 착용할 수 있을 정도로 통풍이 잘됩니다.",
      name: "박지훈",
      date: "2025.2.28"
    }
  ],
  lightweight: [
    {
      rating: "매우 좋음",
      comment: "정말 가볍습니다. 신고 있는지 모를 정도예요.",
      name: "강서연",
      date: "2025.2.28"
    }
  ],
  flexibility: [
    {
      rating: "좋음",
      comment: "발의 움직임에 잘 따라와서 자연스럽습니다.",
      name: "윤도현",
      date: "2025.2.28"
    }
  ],
  stability: [
    {
      rating: "매우 좋음",
      comment: "안정감이 뛰어나서 빠르게 달려도 발목이 안전하게 느껴집니다.",
      name: "송민호",
      date: "2025.2.28"
    }
  ],
  comfort: [
    {
      rating: "매우 좋음",
      comment: "전반적으로 매우 편안한 신발입니다. 추천합니다!",
      name: "한예슬",
      date: "2025.2.28"
    }
  ]
};

function ChromeWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#f0f2f9] h-[32px] relative shadow-[0px_1px_0px_0px_rgba(10,13,14,0.1)] shrink-0 w-full">
      <div className="absolute contents left-[8px] top-1/2 translate-y-[-50%]">
        <button
          onClick={onClose}
          className="absolute size-[12px] left-[8px] top-1/2 translate-y-[-50%] cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="#FF5F57" r="6" />
          </svg>
        </button>
        <div className="absolute size-[12px] left-[28px] top-1/2 translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="#FEBC2E" r="6" />
          </svg>
        </div>
        <div className="absolute size-[12px] left-[48px] top-1/2 translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="#28C840" r="6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#f9fafd]" />
    </div>
  );
}

function SegmentedControlDivider() {
  return (
    <div className="h-[16px] relative shrink-0 w-0">
      <div className="absolute inset-[-6.25%_-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18">
          <path d="M1 1V17" stroke="rgba(12,15,15,0.13)" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function ResponseRow({ response }: { response: ResponseData }) {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-start px-0 py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
            {response.rating}
          </p>
        </div>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] min-w-full text-[#2a2c2c] text-[14px] tracking-[-0.042px]">
          {response.comment}
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[140px]">
        <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden text-[14px] text-[rgba(12,15,15,0.52)] text-nowrap text-right tracking-[-0.042px]">
          {response.name}
        </p>
        <div className="h-[12px] relative shrink-0 w-0">
          <div className="absolute inset-[-8.33%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
              <path d="M1 1V13" stroke="rgba(12,15,15,0.13)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[14px] text-[rgba(12,15,15,0.52)] text-nowrap text-right tracking-[-0.042px]">
          {response.date}
        </p>
      </div>
    </div>
  );
}

export default function FunctionalityResponseModal({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("elasticity");
  const [selectedProduct, setSelectedProduct] = useState("guard-run-max");

  const responses = mockResponses[selectedCategory] || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 overflow-y-auto pointer-events-none">
      <div className="bg-white relative rounded-[4px] w-full max-w-[1200px] mt-[120px] mb-[40px] flex flex-col pointer-events-auto">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <ChromeWindow onClose={onClose} />
          <div className="relative shrink-0 w-full overflow-y-auto flex-1">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[32px] relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] text-[#2a2c2c] text-[26px] tracking-[-0.182px] w-full">
                    개별 응답 보기
                  </p>
                  
                  {/* Product Tabs Section */}
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                    <div className="relative rounded-[12px] shrink-0 w-full">
                      <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] w-full">
                        {products.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => setSelectedProduct(product.id)}
                            className={clsx(
                              "h-[44px] relative rounded-[8px] shrink-0",
                              selectedProduct === product.id ? "" : ""
                            )}
                          >
                            <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
                              <p
                                className={clsx(
                                  "leading-[22px] relative shrink-0 text-[16px] text-center text-nowrap tracking-[-0.08px]",
                                  selectedProduct === product.id
                                    ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#2a2c2c]"
                                    : "font-['Pretendard_Variable:SemiBold',sans-serif] text-[rgba(12,15,15,0.29)]"
                                )}
                              >
                                {product.name}
                              </p>
                            </div>
                            {selectedProduct === product.id && (
                              <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            )}
                          </button>
                        ))}
                      </div>
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    </div>

                    {/* Category Segmented Control */}
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      {categories.map((category, index) => (
                        <div key={category.key} className="contents">
                          {index > 0 && <SegmentedControlDivider />}
                          <button
                            onClick={() => setSelectedCategory(category.key)}
                            className={clsx(
                              "relative rounded-[7px] shrink-0",
                              selectedCategory === category.key ? "bg-white" : "bg-transparent"
                            )}
                          >
                            <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                              <p
                                className={clsx(
                                  "leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.042px]",
                                  selectedCategory === category.key
                                    ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#2a2c2c]"
                                    : "font-['Pretendard_Variable:Medium',sans-serif] text-[rgba(12,15,15,0.29)]"
                                )}
                              >
                                {category.label}
                              </p>
                            </div>
                            {selectedCategory === category.key && (
                              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Responses Section */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  {responses.map((response, index) => (
                    <ResponseRow key={index} response={response} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}