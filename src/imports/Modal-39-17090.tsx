import svgPaths from "./svg-gbdt92gcs9";
import clsx from "clsx";
import imgImage4 from "@/assets/bbafd45378bb9aa2bbcd68e95d93c0810380d57f.png";
import imgImage5 from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[56px] min-h-[56px] min-w-[260px] relative shrink-0">
      <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] min-w-[inherit] px-[12px] py-[20px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TagTextProps = {
  text: string;
};

function TagText({ text }: TagTextProps) {
  return (
    <div className="bg-[rgba(0,180,118,0.1)] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#009762] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}
type K2TableCellDataTextProps = {
  text: string;
};

function K2TableCellDataText({ text }: K2TableCellDataTextProps) {
  return (
    <div className="basis-0 grow h-[56px] min-h-[56px] min-w-px relative shrink-0">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type K2TableCellDataImageAndTextProps = {
  text: string;
};

function K2TableCellDataImageAndText({ text }: K2TableCellDataImageAndTextProps) {
  return (
    <Wrapper>
      <div className="relative rounded-[2px] shrink-0 size-[32px]" data-name="image 4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0 rounded-[2px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2px]">
            <img alt="" className="absolute h-[133.46%] left-0 max-w-none top-[-13.11%] w-full" src={imgImage4} />
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper>
  );
}

function Checkbox() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex gap-[2px] h-[52px] items-center min-h-[52px] py-[20px] relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type TabItemTextProps = {
  text: string;
};

function TabItemText({ text }: TabItemTextProps) {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.22px]">{text}</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
        <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
            <Checkbox />
          </div>
        </div>
      </div>
      <K2TableCellDataImageAndText text="퀀텀 포스 (W3) (Off White)" />
      <K2TableCellDataText text="아이더" />
      <K2TableCellDataText text="22SS" />
      <K2TableCellDataText text="경등산화" />
      <K2TableCellDataText text="2024. 08. 05." />
      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]" data-name="k2 Table cell data">
        <TagText text="진행 중" />
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
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2a2c2c] text-[20px] text-nowrap tracking-[-0.14px]">설문 가져오기</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[580px] items-start px-0 py-[20px] relative shrink-0 w-[752px]" data-name="content">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="relative rounded-[12px] shrink-0 w-full" data-name="Tabs">
              <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] w-full">
                <div className="h-[60px] relative rounded-[8px] shrink-0" data-name="_Tab Item">
                  <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                    <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center text-nowrap tracking-[-0.22px]">신발</p>
                  </div>
                  <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <TabItemText text="의류" />
                <TabItemText text="용품" />
              </div>
              <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
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
                        <div className="relative shrink-0 size-[20px]" data-name="magnifying_glass_bold">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="magnifying_glass_bold">
                              <path d={svgPaths.p1b322f00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
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
                    <Text1 text="제품" additionalClassNames="min-w-[260px] px-[12px] w-[260px]" />
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <Text text="브랜드" />
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <Text text="카테고리" />
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <Text text="사이즈" />
                      </div>
                    </div>
                    <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                      <div className="flex flex-row items-center min-h-[inherit] size-full">
                        <div className="content-stretch flex gap-[2px] items-center min-h-[inherit] px-[12px] py-[20px] relative size-full">
                          <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">생성일</p>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="button-wrapper">
                            <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[18px]" data-name="_Table Cell / Sort Button">
                              <div className="relative shrink-0 size-[12px]" data-name="caret_up_down_fill">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <g id="caret_up_down_fill">
                                    <path d={svgPaths.p332e8e80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.29" id="Vector" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text1 text="상태" additionalClassNames="justify-center px-[16px] w-[80px]" />
                  </div>
                  <TableRow />
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                    <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
                      <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                        <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                          <Checkbox />
                        </div>
                      </div>
                    </div>
                    <Wrapper>
                      <div className="relative shrink-0 size-[32px]" data-name="image 4">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                          <div className="absolute bg-[rgba(193,193,193,0.2)] inset-0" />
                          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage5} />
                        </div>
                      </div>
                      <div className="basis-0 flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                        <p className="leading-[20px] overflow-ellipsis overflow-hidden">퀀텀 포스 (W3) (Off White)</p>
                      </div>
                    </Wrapper>
                    <K2TableCellDataText text="아이더" />
                    <K2TableCellDataText text="22SS" />
                    <K2TableCellDataText text="경등산화" />
                    <K2TableCellDataText text="2024. 08. 05." />
                    <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]" data-name="k2 Table cell data">
                      <TagText text="진행 중" />
                    </div>
                  </div>
                  {[...Array(2).keys()].map((_, i) => (
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
                        <div className="content-stretch flex items-center min-h-[44px] px-[8px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                          <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                            <Checkbox />
                          </div>
                        </div>
                      </div>
                      <K2TableCellDataImageAndText text="퀀텀 포스 (W3) (Off White)" />
                      <K2TableCellDataText text="아이더" />
                      <K2TableCellDataText text="22SS" />
                      <K2TableCellDataText text="경등산화" />
                      <K2TableCellDataText text="2024. 08. 05." />
                      <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] px-[12px] py-[16px] relative shrink-0 w-[80px]" data-name="k2 Table cell data">
                        <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Tag">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[12px] text-[rgba(12,15,15,0.71)] text-nowrap">종료</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <TableRow />
                  <TableRow />
                  <TableRow />
                  <TableRow />
                  <TableRow />
                  <TableRow />
                </div>
                <div aria-hidden="true" className="absolute border-[1px_1px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
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