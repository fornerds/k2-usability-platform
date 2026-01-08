function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">{children}</div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white relative rounded-[4px] size-full" data-name="modal">
      <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Modal Header">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pb-0 pt-[40px] px-[24px] relative w-full">
              <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="title-wrap">
                <p className="basis-0 font-['Pretendard_Variable:Bold',sans-serif] grow leading-[34px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center tracking-[-0.154px]">섹션을 삭제 하시겠습니까?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="modal-body">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
              <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-full">삭제를 선택하면 해당 섹션은 즉시 삭제되며, 복구 할 수 없습니다.</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Modal Footer">
          <div className="size-full">
            <div className="content-stretch flex gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative w-full">
              <div className="basis-0 bg-[rgba(255,255,255,0)] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Label Button">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <Wrapper>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">취소</p>
                </Wrapper>
              </div>
              <div className="basis-0 bg-[#1e2020] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Label Button">
                <Wrapper>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">삭제</p>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}