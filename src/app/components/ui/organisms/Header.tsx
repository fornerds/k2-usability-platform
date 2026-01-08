import { useState } from "react";
import svgPaths from "../../../../imports/svg-v16cagnvmh";
import { ChevronDown } from "../atoms/Icon";

type HeaderProps = {
  userName?: string;
  userRole?: string;
  onUserMenuClick?: () => void;
};

export function Header({ userName = "김이투", userRole = "분석가", onUserMenuClick }: HeaderProps) {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="bg-white h-[60px] fixed top-0 left-0 right-0 z-50 shrink-0 w-full" data-name="GNB">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="logo">
            <div className="h-[22px] relative shrink-0 w-[79px]">
              <div className="absolute inset-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 22">
                  <path d={svgPaths.p1c055c72} fill="#1E2020" />
                </svg>
              </div>
            </div>
            <div className="h-[16px] relative shrink-0 w-0">
              <div className="absolute inset-[-3.13%_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 17">
                  <path d="M0.5 0.5V16.5" stroke="#0C0F0F" strokeLinecap="round" strokeOpacity="0.13" />
                </svg>
              </div>
            </div>
            <p className="-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px] font-bold">
              사용성 평가 플랫폼
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] h-[34px] items-start relative shrink-0 w-[160px]">
            <button
              onClick={() => {
                setUserDropdownOpen(!userDropdownOpen);
                onUserMenuClick?.();
              }}
              className="relative rounded-[30px] shrink-0 w-full hover:bg-gray-50 transition-colors"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none rounded-[30px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[6px] relative w-full">
                  <div className="content-stretch flex gap-[4px] items-center leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">
                    <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0 font-semibold">{userName}</p>
                    <p className="-webkit-box overflow-ellipsis overflow-hidden relative shrink-0">{userRole}</p>
                  </div>
                  <ChevronDown />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

