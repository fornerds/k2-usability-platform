import svgPaths from "./svg-h0v0sttpza";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function SocialLoginButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}
type InputBoxProps = {
  text: string;
};

function InputBox({ children, text }: React.PropsWithChildren<InputBoxProps>) {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
          <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
            <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(12,15,15,0.52)] text-nowrap tracking-[-0.08px]">
              <p className="leading-[22px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type LabelButtonTextProps = {
  text: string;
};

function LabelButtonText({ text }: LabelButtonTextProps) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 w-[108px]">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px]">{text}</p>
    </div>
  );
}

function PlusBold() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="plus_bold" opacity="0">
          <path d={svgPaths.p2da0e800} fill="var(--fill-0, #2A2C2C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DividerHelper() {
  return (
    <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.5 1">
          <line id="Line 13" stroke="var(--stroke-0, #0C0F0F)" strokeOpacity="0.19" x2="169.5" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="05 로그인">
      <div className="absolute bg-white content-stretch flex flex-col gap-[48px] items-center left-1/2 rounded-[12px] top-[calc(50%-34px)] translate-x-[-50%] translate-y-[-50%] w-[396px]" data-name="contents">
        <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[168px]">
          <div className="h-[48px] relative shrink-0 w-full" data-name="CI">
            <div className="absolute h-[48px] left-0 top-0 w-[168px]" data-name="logo">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 48">
                  <path d={svgPaths.p3c996a80} fill="var(--fill-0, #1E2020)" id="logo" />
                </svg>
              </div>
            </div>
          </div>
          <p className="-webkit-box font-['Pretendard_Variable:Bold',sans-serif] leading-[34px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[22px] text-center tracking-[-0.154px] w-full">사용성 평가 플랫폼</p>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="form">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="로그인">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="입력 폼">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
                <InputBox text="아이디를 입력해 주세요" />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Input">
                <InputBox text="비밀번호를 입력해 주세요" />
              </div>
              <div className="bg-[#0085ec] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Label Button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">
                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">로그인</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="check box">
              <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Checkbox">
                <Wrapper>
                  <g id="checkbox">
                    <rect fill="var(--fill-0, #0085EC)" height="18" id="Vector" rx="3.5" width="18" x="3" y="3" />
                    <path clipRule="evenodd" d={svgPaths.p1b3c6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                  </g>
                </Wrapper>
              </div>
              <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[14px] text-nowrap tracking-[-0.042px]">
                <p className="leading-[20px] overflow-ellipsis overflow-hidden">자동로그인</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="divider">
            <DividerHelper />
            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(12,15,15,0.52)] text-center text-nowrap tracking-[-0.042px]">또는</p>
            <DividerHelper />
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="소셜 로그인/가입">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="소셜 로그인">
              <SocialLoginButton>
                <div className="relative shrink-0 size-[24px]" data-name="naver_color">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(3, 199, 90, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="naver_color">
                        <rect fill="var(--fill-0, #03C75A)" height="24" rx="2.66667" width="24" />
                        <path d={svgPaths.p67b0580} fill="var(--fill-0, white)" id="Path" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">네이버로 로그인</p>
                <PlusBold />
              </SocialLoginButton>
              <SocialLoginButton>
                <div className="relative shrink-0 size-[24px]" data-name="kakao_color">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(254, 229, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="kakao_color">
                        <rect fill="var(--fill-0, #FEE500)" height="24" rx="3.13044" width="24" />
                        <path clipRule="evenodd" d={svgPaths.p34904080} fill="var(--fill-0, black)" fillRule="evenodd" id="Path" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">카카오로 로그인</p>
                <PlusBold />
              </SocialLoginButton>
              <SocialLoginButton>
                <Wrapper>
                  <g clipPath="url(#clip0_1_1341)" id="facebook_color">
                    <path d={svgPaths.p3d66d500} fill="var(--fill-0, #0866FF)" id="c" />
                    <path d={svgPaths.p99f6780} fill="var(--fill-0, white)" id="d" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1341">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </Wrapper>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">페이스북으로 로그인</p>
                <PlusBold />
              </SocialLoginButton>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text button">
              <LabelButtonText text="회원가입" />
              <div className="h-[16px] relative shrink-0 w-0">
                <div className="absolute inset-[-6.25%_-1px]" style={{ "--stroke-0": "rgba(12, 15, 15, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18">
                    <path d="M1 1V17" id="Vector 19" stroke="var(--stroke-0, #0C0F0F)" strokeLinecap="round" strokeOpacity="0.13" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <LabelButtonText text="비밀번호 찾기" />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-center left-[221px] size-[40px] top-[472px]" data-name="login Tooltip">
          <div className="absolute content-stretch flex flex-col h-[40px] items-start justify-center right-[-124px] top-1/2 translate-y-[-50%] w-[116px]" data-name="tooltip-wrapper">
            <div className="bg-[#1e2020] content-stretch flex items-center justify-center max-w-[240px] px-[12px] py-[10px] relative rounded-[6px] shadow-[0px_0px_1px_0px_rgba(13,14,17,0.2),0px_4px_10px_0px_rgba(13,14,17,0.18)] shrink-0" data-name="tooltip">
              <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white tracking-[-0.042px]">최근 로그인</p>
              <div className="absolute flex items-center justify-center left-[-7px] size-[14.142px] top-[calc(50%+0.5px)] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[135deg]">
                  <div className="relative size-[10px]" data-name="Beak">
                    <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 32, 32, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                        <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, #1E2020)" id="Beak" />
                      </svg>
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