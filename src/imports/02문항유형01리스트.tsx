import svgPaths from "./svg-zltnnv3ji4";
import clsx from "clsx";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("basis-0 grow max-w-[180px] min-w-px relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center max-w-[inherit] min-h-[inherit] size-full">{children}</div>
    </div>
  );
}

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
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] tracking-[-0.08px] w-full">
        <p className="leading-[22px]">{text}</p>
      </div>
    </div>
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
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute bg-white border border-[rgba(12,15,15,0.19)] border-solid inset-[12.5%] rounded-[3.5px]" data-name="Vector" />
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

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="02 문항유형_01 리스트">
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
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="LNB/Contents">
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[20px] relative self-stretch shrink-0 w-[304px]" data-name="LNB">
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
            <Helper2DepthMenu>
              <Wrapper2>
                <g id="ic_data">
                  <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                </g>
              </Wrapper2>
              <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">리포트</p>
            </Helper2DepthMenu>
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
            <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
              <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <Wrapper>
                <Wrapper2>
                  <g clipPath="url(#clip0_24_13269)" id="ic_list">
                    <path d={svgPaths.p25da1f40} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_13269">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </Wrapper2>
                <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">문항 유형</p>
              </Wrapper>
            </div>
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
        <div className="basis-0 grow max-w-[1616px] min-h-px min-w-px relative shrink-0" data-name="contents">
          <div className="max-w-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[80px] pt-[48px] px-[244px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="title/tab">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[47px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[34px] text-nowrap tracking-[-0.34px]">문항 유형</p>
                  <div className="bg-[#0085ec] content-stretch flex gap-[4px] h-[48px] items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                    <Wrapper1>
                      <g id="ic_add">
                        <path d={svgPaths.p39b30680} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">유형 등록</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="table">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="필터">
                  <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="필터">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="검색/필터">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Text Input">
                        <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="input-box">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
                              <Wrapper2>
                                <g id="ic_search">
                                  <path d={svgPaths.p378bce80} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                                </g>
                              </Wrapper2>
                              <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="input-wrap">
                                <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
                                  <p className="leading-[22px]">검색어 입력</p>
                                </div>
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
                  </div>
                  <div className="basis-0 content-stretch flex gap-[20px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
                    <div className="content-stretch flex gap-[2px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Inline Label Button">
                      <Wrapper1>
                        <g id="ic_delete">
                          <path d={svgPaths.p15ce7480} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector" />
                        </g>
                      </Wrapper1>
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.13)] text-nowrap tracking-[-0.08px]">삭제</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="table">
                  <div className="relative rounded-[8px] shrink-0 w-full" data-name="table">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                      <div className="bg-[#faf9f9] content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 size-[52px]" data-name="k2 Table cell header">
                          <div className="content-stretch flex h-[52px] items-center min-h-[52px] px-[12px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                            <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                              <Checkbox />
                            </div>
                          </div>
                        </div>
                        <Wrapper3 additionalClassNames="h-[52px] min-h-[52px]">
                          <Text text="유형 구분" additionalClassNames="max-w-[inherit]" />
                        </Wrapper3>
                        <div className="basis-0 grow h-[52px] min-h-[52px] min-w-px relative shrink-0" data-name="k2 Table cell header">
                          <div className="flex flex-row items-center min-h-[inherit] size-full">
                            <Text text="유형 제목" />
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[2px] h-[52px] items-center justify-center min-h-[52px] px-[16px] py-[20px] relative shrink-0 w-[140px]" data-name="k2 Table cell header">
                          <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">
                            <p className="leading-[20px] overflow-ellipsis overflow-hidden">ID</p>
                          </div>
                        </div>
                      </div>
                      {[...Array(10).keys()].map((_, i) => (
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table row">
                          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex h-[56px] items-center justify-center min-h-[56px] p-[16px] relative shrink-0 w-[52px]" data-name="k2 Table cell data">
                            <div className="content-stretch flex items-center min-h-[56px] px-[12px] py-0 relative shrink-0" data-name="Table Cell / 3) Checkbox">
                              <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                                <Checkbox />
                              </div>
                            </div>
                          </div>
                          <Wrapper3 additionalClassNames="h-[56px] min-h-[56px]">
                            <Text1 text="아이더" additionalClassNames="max-w-[inherit]" />
                          </Wrapper3>
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
                    <div className="content-stretch flex items-center relative shrink-0" data-name="btn left">
                      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                        <Wrapper1>
                          <g id="ic_chevron_double left">
                            <path d={svgPaths.p23c64f00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector" />
                            <path d={svgPaths.pe6c1080} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector_2" />
                          </g>
                        </Wrapper1>
                      </div>
                      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                        <Wrapper1>
                          <g id="ic_chevron_left">
                            <path d={svgPaths.p346d4600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector" />
                          </g>
                        </Wrapper1>
                      </div>
                    </div>
                    <div className="bg-[rgba(12,15,15,0.07)] content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]" data-name="1">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                        <p className="leading-[22px]">1</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[8px] shrink-0 size-[28px]">
                      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.29)] text-nowrap tracking-[-0.08px]">
                        <p className="leading-[22px]">2</p>
                      </div>
                    </div>
                    <Text2 text="3" />
                    <Text2 text="4" />
                    <Text2 text="5" />
                    <div className="content-stretch flex items-center relative shrink-0" data-name="btn right">
                      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                        <Wrapper1>
                          <g id="ic_chevron_right">
                            <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                          </g>
                        </Wrapper1>
                      </div>
                      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center px-0 py-[2px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Button">
                        <Wrapper1>
                          <g id="ic_chevron_double right">
                            <path d={svgPaths.pfb9ce00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector" />
                            <path d={svgPaths.p395ba780} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.69" id="Vector_2" />
                          </g>
                        </Wrapper1>
                      </div>
                    </div>
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