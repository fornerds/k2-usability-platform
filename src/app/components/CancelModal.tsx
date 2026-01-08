type CancelModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">{children}</div>
    </div>
  );
}

export default function CancelModal({ onCancel, onConfirm }: CancelModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white relative rounded-[4px] w-[360px]">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pb-0 pt-[40px] px-[24px] relative w-full">
                <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="basis-0 grow leading-[34px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center tracking-[-0.154px] font-bold">
                    작성 취소
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                <p className="leading-[27px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px] w-full">
                  작성 중인 내용이 있습니다. 작성을 취소하고 해당 페이지를 나가시겠습니까?
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full">
            <div className="size-full">
              <div className="content-stretch flex gap-[8px] items-start pb-[16px] pt-[12px] px-[16px] relative w-full">
                <button
                  onClick={onCancel}
                  className="basis-0 bg-[rgba(255,255,255,0)] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <Wrapper>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-semibold">
                      취소
                    </p>
                  </Wrapper>
                </button>
                <button
                  onClick={onConfirm}
                  className="basis-0 bg-[#1e2020] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0 hover:bg-[#000] transition-colors"
                >
                  <Wrapper>
                    <p className="leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px] font-semibold">
                      나가기
                    </p>
                  </Wrapper>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}
