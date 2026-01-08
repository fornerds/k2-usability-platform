import svgPaths from "./svg-88qcrpij8w";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("basis-0 grow max-w-[180px] min-w-px relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function PlusBold({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="plus_bold">{children}</g>
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full", additionalClassNames)}>
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full", additionalClassNames)}>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white relative rounded-[6px] size-full" data-name="modal">
      <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white relative shrink-0 w-full" data-name="Modal Header">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[2px] items-start pb-[16px] pl-[24px] pr-[100px] pt-[24px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="title-wrap">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2a2c2c] text-[20px] text-nowrap tracking-[-0.14px]">유형 가져오기</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[580px] items-start px-0 py-[20px] relative shrink-0 w-[752px]" data-name="content">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-[752px]" data-name="검색">
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Input">
                <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input-box">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-wrap">
                        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                          <p className="leading-[22px]">검색어 입력</p>
                        </div>
                      </div>
                      <Wrapper>
                        <g id="magnifying_glass_bold">
                          <path d={svgPaths.p1b322f00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                        </g>
                      </Wrapper>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="table">
              <div className="relative rounded-[8px] shrink-0 w-full" data-name="table">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 size-[52px]" data-name="k2 Table cell header">
                      <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                        <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="checkbox">
                            <div className="absolute bg-[rgba(12,15,15,0.1)] border border-[rgba(12,15,15,0.13)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Wrapper1 additionalClassNames="h-[52px] min-h-[52px]">
                      <Text text="구분" additionalClassNames="max-w-[inherit]" />
                    </Wrapper1>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <Text text="그룹명" />
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[140px]" data-name="k2 Table cell header">
                      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">ID</p>
                      </div>
                    </div>
                  </div>
                  {[...Array(10).keys()].map((_, i) => (
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
                        <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="checkbox">
                              <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Wrapper1 additionalClassNames="h-[56px] min-h-[56px]">
                        <Text1 text="아이더" additionalClassNames="max-w-[inherit]" />
                      </Wrapper1>
                      <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0" data-name="k2 Table cell data">
                        <div className="flex flex-row items-center min-h-[inherit] size-full">
                          <Text1 text="런닝화 피팅 평가 A1" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] h-[56px] items-center min-h-[56px] px-[12px] py-[20px] relative shrink-0 w-[140px]" data-name="k2 Table cell data">
                        <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-center text-nowrap tracking-[-0.042px]">
                          <p className="leading-[20px] overflow-ellipsis overflow-hidden">37</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex gap-[8px] items-center justify-center pb-0 pt-[20px] px-0 relative shrink-0" data-name="Pagination">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon Button">
                  <PlusBold>
                    <path d={svgPaths.p3a904d00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.19" id="Vector" />
                  </PlusBold>
                </div>
                <div className="bg-white h-[40px] min-w-[40px] relative rounded-[4px] shrink-0" data-name="input-box">
                  <div className="content-stretch flex h-full items-center justify-center min-w-[inherit] overflow-clip px-[8px] py-0 relative rounded-[inherit]">
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="input-wrap">
                      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                        <p className="leading-[22px]">1</p>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
                <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.08px]">
                  <p className="leading-[22px]">/</p>
                </div>
                <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                  <p className="leading-[22px]">123</p>
                </div>
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon Button">
                  <PlusBold>
                    <path d={svgPaths.p3a904d00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                  </PlusBold>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Modal Footer">
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end pb-[24px] pt-[16px] px-[24px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right-wrap">
                <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-center tracking-[-0.08px]">취소</p>
                </div>
                <div className="bg-[#1e2020] content-stretch flex gap-[2px] h-[40px] items-center justify-center min-w-[96px] px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px]">가져오기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_34px_48px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}