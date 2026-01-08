import clsx from "clsx";
type Group81HelperProps = {
  additionalClassNames?: string;
};

function Group81Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Group81HelperProps>) {
  return (
    <div className={clsx("absolute size-[12px] top-1/2 translate-y-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <CommentTitleText text="좋음" />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">{text}</p>
    </div>
  );
}
type NameProps = {
  text: string;
  text1: string;
};

function Name({ text, text1 }: NameProps) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[140px]">
      <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.52)] text-nowrap text-right tracking-[-0.042px]">{text}</p>
      <div className="h-[12px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 14">
            <path d="M1 1V13" id="Vector 9740" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.52)] text-nowrap text-right tracking-[-0.042px]">{text1}</p>
    </div>
  );
}
type CommentTitleTextProps = {
  text: string;
};

function CommentTitleText({ text }: CommentTitleTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

function SegmentedControlHelper() {
  return (
    <div className="h-[16px] relative shrink-0 w-0">
      <div className="absolute inset-[-6.25%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18">
          <path d="M1 1V17" id="Vector 19" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type SegmentedItemTextProps = {
  text: string;
};

function SegmentedItemText({ text }: SegmentedItemTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}
type PageTabItemTextProps = {
  text: string;
};

function PageTabItemText({ text }: PageTabItemTextProps) {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-center overflow-clip px-[12px] py-0 relative shrink-0">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}

export default function SystemPopup() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="system popup">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#f0f2f9] h-[32px] relative shadow-[0px_1px_0px_0px_rgba(10,13,14,0.1)] shrink-0 w-full" data-name="Chrome Window">
          <div className="absolute contents left-[8px] top-1/2 translate-y-[-50%]">
            <Group81Helper additionalClassNames="left-[8px]">
              <circle cx="6" cy="6" fill="var(--fill-0, #FF5F57)" id="Ellipse 37" r="6" />
            </Group81Helper>
            <Group81Helper additionalClassNames="left-[48px]">
              <circle cx="6" cy="6" fill="var(--fill-0, #28C840)" id="Ellipse 38" r="6" />
            </Group81Helper>
            <Group81Helper additionalClassNames="left-[28px]">
              <circle cx="6" cy="6" fill="var(--fill-0, #FEBC2E)" id="Ellipse 39" r="6" />
            </Group81Helper>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#f9fafd]" />
        </div>
        <div className="relative shrink-0 w-full" data-name="contents">
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[32px] relative w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="title/segmented">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.182px] w-full">개별 응답 보기</p>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <div className="relative rounded-[12px] shrink-0 w-full" data-name="page Tabs">
                    <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] w-full">
                      <div className="h-[44px] relative rounded-[8px] shrink-0" data-name="_page Tab Item">
                        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-0 relative rounded-[inherit]">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center text-nowrap tracking-[-0.08px]">가드런 맥스</p>
                        </div>
                        <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <PageTabItemText text="피스테런 3.0" />
                      <PageTabItemText text="스위프트인터벌" />
                    </div>
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="segmented control">
                    <div className="bg-white relative rounded-[7px] shrink-0" data-name="_segmented Item">
                      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">탄성</p>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[7px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_1px_4px_0px_rgba(13,14,17,0.19)]" />
                    </div>
                    <SegmentedItemText text="쿠셔닝" />
                    <SegmentedControlHelper />
                    <SegmentedItemText text="통기성" />
                    <SegmentedControlHelper />
                    <SegmentedItemText text="경량성" />
                    <SegmentedControlHelper />
                    <SegmentedItemText text="유연성" />
                    <SegmentedControlHelper />
                    <SegmentedItemText text="안정성" />
                    <SegmentedControlHelper />
                    <SegmentedItemText text="편안함" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="comment">
                <div className="bg-white content-stretch flex gap-[24px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="row">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                    <CommentTitleText text="매우 좋음" />
                    <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">발바닥의 앞부분에서 러닝을 할때 앞으로 튀어나갈 수 있도록 해주는 느낌이 체감이 된다고 생각한다. 걸을때는 체감이 되거나 정도가 심하지 않은데 러닝을 할때는 그런점이 러닝할때 편하게해주고 앞꿈치에 통증도 없어서 좋았다.</p>
                  </div>
                  <Name text="나윤성" text1="2025.2.28" />
                </div>
                <div className="bg-white content-stretch flex gap-[24px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="row">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                    <CommentTitleText text="좋음" />
                    <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">신발을 신고 걸을때 큰 불편은 없었다. 다만 이 신발을 신고 크게 반발탄성에 도움이 된 부분도 없던것같다.</p>
                  </div>
                  <Name text="박성한" text1="2025.2.28" />
                </div>
                <div className="bg-white content-stretch flex gap-[24px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="row">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="text">
                    <CommentTitleText text="다소 좋음" />
                    <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] tracking-[-0.042px] w-[min-content]">신발의 반발 탄성이 추진력을 준다기 보다는 딱딱한 느낌이 들게 해서 거슬리는 느낌이 들었다.</p>
                  </div>
                  <Name text="박상윤" text1="2025.2.28" />
                </div>
                <div className="bg-white content-stretch flex gap-[24px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="row">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <TextText text="걷거나 달릴 때 앞으로 튀어나가는 듯한 느낌을 받아 반발 탄성이 매우 좋다고 느꼈음. 절반은 걷고 절반은 달려서 테스트를 진행하였는데 걸어서 테스트를 진행할 때에는 큰 변함없이 반발탄성을 느낄 수 있었으나 강하게 달려서 그런지 5km 쯤 되었을 때 반발탄성이 약해진다고 느꼈음." />
                  <Name text="구현우" text1="2025.2.28" />
                </div>
                <div className="bg-white content-stretch flex gap-[24px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="row">
                  <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                  <TextText text="발을 감싸주는 느낌이 좋고, 장시간 착용해도 편안합니다. 다만 점프를 할때 발 뒤꿈치가 살짝 들리는 느낌이 들어요." />
                  <Name text="최정훈" text1="2025.2.28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}