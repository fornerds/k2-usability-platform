import svgPaths from "./svg-chgieue3kg";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Helper2DepthMenu({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
type PannelTitleTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PannelTitleText({ text, additionalClassNames = "" }: PannelTitleTextProps) {
  return (
    <div className={clsx("flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0", additionalClassNames)}>
      <p className="leading-[25px] overflow-ellipsis overflow-hidden text-[18px] text-nowrap">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <div className="h-[28px] relative shrink-0 w-0">
      <div className="absolute inset-[-1.79%_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 29">
          <path d="M0.5 0.5V28.5" id="divider" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" />
        </svg>
      </div>
    </div>
  );
}
type PageTabItemTextProps = {
  text: string;
};

function PageTabItemText({ text }: PageTabItemTextProps) {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center overflow-clip px-[24px] py-0 relative shrink-0">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[22px] text-[rgba(12,15,15,0.29)] text-center text-nowrap tracking-[-0.154px]">{text}</p>
    </div>
  );
}
type Helper1DepthMenuTextProps = {
  text: string;
};

function Helper1DepthMenuText({ text }: Helper1DepthMenuTextProps) {
  return (
    <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
      <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

export default function Component0106EmptyCase() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="01 리포트_06 empty case">
      <div className="bg-white h-[60px] relative shrink-0 w-full" data-name="GNB">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="logo">
              <div className="h-[22px] relative shrink-0 w-[79px]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 22">
                    <path d={svgPaths.p1c055c72} fill="var(--fill-0, #1E2020)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="h-[16px] relative shrink-0 w-0">
                <div className="absolute inset-[-3.13%_-0.5px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
                    <path d="M0.5 0.5V16.5" id="Vector 19" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" />
                  </svg>
                </div>
              </div>
              <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">사용성 평가 플랫폼</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] h-[34px] items-start relative shrink-0 w-[160px]" data-name="gnb user select">
              <div className="relative rounded-[30px] shrink-0 w-full" data-name="select">
                <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[30px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[6px] relative w-full">
                    <div className="content-stretch flex gap-[4px] items-center leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]" data-name="text">
                      <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">김이투</p>
                      <p className="-webkit-box font-['Pretendard_Variable:Regular',sans-serif] overflow-ellipsis overflow-hidden relative shrink-0">분석가</p>
                    </div>
                    <Wrapper1>
                      <g id="ic_chevron_down">
                        <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                      </g>
                    </Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="LNB/Contents">
        <div className="bg-white content-stretch flex flex-col gap-[8px] h-full items-start px-[16px] py-[20px] relative shrink-0 w-[304px]" data-name="LNB">
          <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_dashboard">
                  <path d={svgPaths.p1bc71000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">대시보드</p>
            </Helper2DepthMenu>
            <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
              <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Wrapper>
                <Wrapper2>
                  <g clipPath="url(#clip0_4_9912)" id="ic_data">
                    <path d={svgPaths.pbeab100} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_9912">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </Wrapper2>
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">리포트</p>
              </Wrapper>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
            <Helper1DepthMenuText text="설문" />
            <Helper2DepthMenu>
              <Wrapper2>
                <g clipPath="url(#clip0_1_4414)" id="ic_survey">
                  <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_1_4414">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문지</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_list">
                  <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_comment">
                  <path d={svgPaths.p3937a8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문 응답</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
            <Helper1DepthMenuText text="관리" />
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_product">
                  <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_company">
                  <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_image">
                  <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">이미지 관리</p>
            </Helper2DepthMenu>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
            <Helper1DepthMenuText text="권한" />
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_idcard">
                  <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
            </Helper2DepthMenu>
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_group">
                  <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
            </Helper2DepthMenu>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0 w-[1616px]" data-name="contents">
          <div className="relative shrink-0 w-full" data-name="contents">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] pt-[48px] px-[244px] relative w-full">
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="title/tab">
                  <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] tracking-[-0.34px] w-full">리포트</p>
                  <div className="relative rounded-[12px] shrink-0 w-full" data-name="page Tabs">
                    <div className="content-stretch flex items-end overflow-clip relative rounded-[inherit] w-full">
                      <div className="h-[60px] relative rounded-[8px] shrink-0" data-name="_page Tab Item">
                        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-0 relative rounded-[inherit]">
                          <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2a2c2c] text-[22px] text-center text-nowrap tracking-[-0.154px]">신발</p>
                        </div>
                        <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                      <PageTabItemText text="의류" />
                      <PageTabItemText text="용품" />
                    </div>
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="table">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="필터">
                    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="필터">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="검색/필터">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Text Input">
                          <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input-box">
                            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-0 py-0 relative size-full">
                                <Wrapper2>
                                  <g id="ic_search">
                                    <path d={svgPaths.p378bce80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                                  </g>
                                </Wrapper2>
                                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-wrap">
                                  <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                                    <p className="leading-[22px]">경등산화</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[40px]" data-name="button">
                                  <Wrapper2>
                                    <g id="x_circle_fill">
                                      <path d={svgPaths.p1157dd00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                                    </g>
                                  </Wrapper2>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[78px]" data-name="filter btn">
                          <div className="bg-[rgba(255,255,255,0)] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Label Button">
                            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex gap-[2px] items-center justify-center px-[16px] py-0 relative size-full">
                                <Wrapper1>
                                  <g id="ic_tune">
                                    <path d={svgPaths.p2423ab00} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                                  </g>
                                </Wrapper1>
                                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">필터</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Helper />
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="switch">
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">내 의뢰만 보기</p>
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Switch">
                          <div className="h-[26px] relative shrink-0 w-[48px]" data-name="Switch">
                            <div className="absolute bg-[rgba(12,15,15,0.07)] inset-0 rounded-[9999px]" data-name="Track">
                              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                            </div>
                            <div className="absolute bg-white left-px rounded-[34.909px] size-[24px] top-px" data-name="Knob">
                              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-[-1px] pointer-events-none rounded-[35.909px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex font-['Pretendard_Variable:SemiBold',sans-serif] gap-[1.721px] items-center justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[-0.042px]" data-name="chart label">
                      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c]">검색결과</p>
                      <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 text-[#0085ec]">0</p>
                    </div>
                    <div className="h-[320px] relative rounded-[8px] shrink-0 w-full" data-name="Empty view">
                      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[36px] py-0 relative size-full">
                          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                            <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-center text-nowrap tracking-[-0.08px]">
                              <p className="leading-[27px]">검색 결과가 없습니다.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="bottom pannel">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_-8px_12px_0px_rgba(13,14,17,0.04)]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[244px] py-[16px] relative w-full">
                <div className="content-stretch flex gap-[3px] items-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap tracking-[-0.126px]" data-name="pannel title">
                  <PannelTitleText text="리포트" additionalClassNames="font-['Pretendard_Variable:Bold',sans-serif] text-[#2a2c2c]" />
                  <PannelTitleText text="0" additionalClassNames="font-['Pretendard_Variable:SemiBold',sans-serif] text-[rgba(12,15,15,0.29)]" />
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="btn">
                  <div className="bg-[rgba(12,15,15,0.1)] content-stretch flex gap-[2px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.13)] text-nowrap tracking-[-0.08px]">비교 분석</p>
                  </div>
                  <Helper />
                  <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inline Label Button">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.08px]">열기</p>
                    <Wrapper1>
                      <g clipPath="url(#clip0_4_9882)" id="ic_chevron_up">
                        <path d={svgPaths.p3fb6a700} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_9882">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}