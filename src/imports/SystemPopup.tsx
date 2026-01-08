import clsx from "clsx";
type Group81HelperProps = {
  additionalClassNames?: string;
  onClick?: () => void;
};

function Group81Helper({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<Group81HelperProps>) {
  return (
    <div 
      className={clsx("absolute size-[12px] top-1/2 translate-y-[-50%]", additionalClassNames, onClick && "cursor-pointer hover:opacity-80")}
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}
type CommentTitleTextProps = {
  text: string;
};

function CommentTitleText({ text }: CommentTitleTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[208px]">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

type SystemPopupProps = {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMinimized?: boolean;
};

export default function SystemPopup({ onClose, onMinimize, onMaximize, isMinimized = false }: SystemPopupProps = {}) {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="system popup">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#f0f2f9] h-[32px] relative shadow-[0px_1px_0px_0px_rgba(10,13,14,0.1)] shrink-0 w-full" data-name="Chrome Window">
          <div className="absolute contents left-[8px] top-1/2 translate-y-[-50%]">
            <Group81Helper additionalClassNames="left-[8px]" onClick={onClose}>
              <circle cx="6" cy="6" fill="var(--fill-0, #FF5F57)" id="Ellipse 37" r="6" />
            </Group81Helper>
            <Group81Helper additionalClassNames="left-[28px]" onClick={onMinimize}>
              <circle cx="6" cy="6" fill="var(--fill-0, #FEBC2E)" id="Ellipse 39" r="6" />
            </Group81Helper>
            <Group81Helper additionalClassNames="left-[48px]" onClick={onMaximize}>
              <circle cx="6" cy="6" fill="var(--fill-0, #28C840)" id="Ellipse 38" r="6" />
            </Group81Helper>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#f9fafd]" />
          {isMinimized && (
            <div className="flex items-center justify-center size-full">
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[14px] text-[#2a2c2c]">제품 스펙</p>
            </div>
          )}
        </div>
        {!isMinimized && (
          <div className="relative shrink-0 w-full" data-name="contents">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[32px] relative w-full">
                <div className="content-stretch flex flex-col items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="title/segmented">
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.182px] w-full">제품 스펙</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="info">
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="모델명" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">가드런맥스</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="브랜드" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">다이나핏</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="시즌" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">25SS</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="카테고리" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">경등산화</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="무게" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">256g</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="Heel 높이" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">12.5mm</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="Forefoot 높이" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">5.5mm</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="Drop 차이" />
                      <p className="-webkit-box basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">-</p>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex items-start px-0 py-[16px] relative shrink-0 w-full" data-name="spec">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                      <CommentTitleText text="주안점" />
                      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px]">
                        DYNAFIT_가드런맥스 피팅평가 진행
                        <br aria-hidden="true" />
                        <br aria-hidden="true" />
                        주안점 : 접지력 우수성 / 로드 및 트레일 러닝시 사용성 (로드50km, 트레일50km)
                        <br aria-hidden="true" />
                        (로드10km, 트레일5km 우선 테스트 진행 후 1차 회신 요청)
                        <br aria-hidden="true" />
                        <br aria-hidden="true" />
                        러닝시 접지력과 탄성 위주로 평가 부탁 드립니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}