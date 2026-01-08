import svgPaths from "./svg-j0ct2hw71o";
import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[36px] py-0 relative size-full">{children}</div>
    </div>
  );
}
type EmptyViewProps = {
  additionalClassNames?: string;
  text: string;
};

function EmptyView({ children, additionalClassNames = "", text }: React.PropsWithChildren<EmptyViewProps>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <Wrapper>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-center text-nowrap tracking-[-0.08px]">
            <p className="leading-[27px]">{text}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

function Helper2DepthMenu({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type InlineLabelButtonTextProps = {
  text: string;
};

function InlineLabelButtonText({ text }: InlineLabelButtonTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center opacity-0 relative rounded-[3px] shrink-0">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.13)] text-nowrap tracking-[-0.042px]">{text}</p>
      <div className="relative shrink-0 size-[14px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="ic_chevron_right">
            <path d={svgPaths.p2d457300} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.13" id="Vector" />
          </g>
        </svg>
      </div>
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

export default function Component0002EmptyCase() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="00 대시보드_02 empty case">
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
                    <div className="relative shrink-0 size-[16px]" data-name="ic_chevron_down">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="ic_chevron_down">
                          <path d={svgPaths.pdb64e00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="LNB/contents">
        <div className="flex flex-row items-center self-stretch">
          <div className="bg-white content-stretch flex flex-col gap-[8px] h-full items-start px-[16px] py-[20px] relative shrink-0 w-[304px]" data-name="LNB">
            <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="home">
              <div className="bg-[rgba(78,160,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="2depth menu">
                <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
                    <div className="relative shrink-0 size-[20px]" data-name="ic_dashboard">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="ic_dashboard">
                          <path d={svgPaths.p1bc71000} fill="var(--fill-0, #2A2C2C)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <p className="-webkit-box font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">대시보드</p>
                  </div>
                </div>
              </div>
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_data">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_data">
                      <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">리포트</p>
              </Helper2DepthMenu>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="설문">
              <Helper1DepthMenuText text="설문" />
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_survey">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g clipPath="url(#clip0_1_4414)" id="ic_survey">
                      <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4414">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문지</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_list">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_list">
                      <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">문항 유형</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_comment">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_comment">
                      <path d={svgPaths.p3937a8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">설문 응답</p>
              </Helper2DepthMenu>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="관리">
              <Helper1DepthMenuText text="관리" />
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_product">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_product">
                      <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">제품 관리</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_company">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_company">
                      <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">법인 관리</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_image">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_image">
                      <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">이미지 관리</p>
              </Helper2DepthMenu>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="권한">
              <Helper1DepthMenuText text="권한" />
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_idcard">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_idcard">
                      <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">사용자 권한</p>
              </Helper2DepthMenu>
              <Helper2DepthMenu>
                <div className="relative shrink-0 size-[20px]" data-name="ic_group">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="ic_group">
                      <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="-webkit-box font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">그룹 권한</p>
              </Helper2DepthMenu>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[48px] px-[52px] relative shrink-0 w-[1616px]" data-name="contents">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[744px]" data-name="text">
              <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">
                <p className="leading-[38px]">안녕하세요,</p>
              </div>
              <div className="content-stretch flex items-center leading-[0] not-italic relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]" data-name="name">
                <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[38px] text-nowrap">김분석</p>
                </div>
                <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center relative shrink-0">
                  <p className="leading-[38px] text-nowrap">님</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[100px] items-center justify-end relative shrink-0" data-name="지표">
              <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap" data-name="지표">
                <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
                  <p className="mb-0">{`미열람 `}</p>
                  <p>리포트</p>
                </div>
                <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">0</p>
              </div>
              <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap" data-name="지표">
                <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
                  <p className="mb-0">{`진행중인 `}</p>
                  <p>설문</p>
                </div>
                <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">0</p>
              </div>
              <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[12px] items-center justify-end not-italic relative rounded-[12px] shrink-0 text-nowrap" data-name="지표">
                <div className="-webkit-box leading-[17px] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(12,15,15,0.69)]">
                  <p className="mb-0">{`대기중인 `}</p>
                  <p>요청서</p>
                </div>
                <p className="-webkit-box leading-[38px] overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] tracking-[-0.26px]">0</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full" data-name="contents">
            <div className="h-[320px] relative rounded-[8px] shrink-0 w-full" data-name="Empty view">
              <Wrapper>
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                  <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-center text-nowrap tracking-[-0.08px]">
                    <p className="leading-[27px]">{"제품 평가를 위해 의뢰한 설문이 없습니다."}</p>
                  </div>
                </div>
                <div className="bg-[#1e2020] content-stretch flex gap-[4px] h-[48px] items-center justify-center px-[20px] py-0 relative rounded-[8px] shrink-0" data-name="Label Button">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">요청서 작성하기</p>
                </div>
              </Wrapper>
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="리포트">
              <div className="content-stretch flex items-center justify-between pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="section title">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center relative shrink-0" data-name="제품 타이틀">
                  <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[38px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[26px] text-nowrap tracking-[-0.26px]">리포트 및 설문 현황</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative rounded-[12px] shrink-0 w-full" data-name="리포트/설문">
                <div className="basis-0 bg-white grow h-[323px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="table card">
                  <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[20px] items-center px-[20px] py-[16px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
                        <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">비교 리포트 추천</p>
                        <InlineLabelButtonText text="리포트 바로가기" />
                      </div>
                      <EmptyView additionalClassNames="h-[249px]" text="추천 리포트가 없습니다." />
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="list">
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="list">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">나의 관심 리포트</p>
                          <EmptyView additionalClassNames="h-[76px]" text="관심 리포트가 없습니다." />
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="list">
                      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] tracking-[-0.08px] w-full">최근 확인 설문</p>
                          <EmptyView additionalClassNames="h-[76px]" text="최근 확인 설문이 없습니다." />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="progress card">
                    <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="flex flex-col items-center size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
                          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">내가 의뢰한 설문</p>
                          <InlineLabelButtonText text="설문지 바로가기" />
                        </div>
                        <EmptyView additionalClassNames="h-[91px]" text="의뢰한 설문이 없습니다." />
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