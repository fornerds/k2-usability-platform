import svgPaths from "../../../../imports/svg-v16cagnvmh";
import { MenuItem } from "../molecules/MenuItem";
import { Wrapper } from "../atoms/Icon";

export type MenuItemConfig = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

export type MenuSection = {
  title?: string;
  items: MenuItemConfig[];
};

type SidebarProps = {
  sections: MenuSection[];
  activeMenuId?: string;
  onMenuClick?: (menuId: string) => void;
};

export function Sidebar({ sections, activeMenuId, onMenuClick }: SidebarProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[20px] fixed left-0 top-[60px] bottom-0 z-40 shrink-0 w-[304px] overflow-y-auto">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,15,15,0.19)] border-solid inset-0 pointer-events-none" />
      
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {section.title && (
            <div className="content-stretch flex items-center px-0 py-[8px] relative shrink-0 w-full">
              <p className="-webkit-box leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(12,15,15,0.69)] text-nowrap tracking-[-0.042px] font-medium">
                {section.title}
              </p>
            </div>
          )}
          {section.items.map((item) => (
            <MenuItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeMenuId === item.id}
              onClick={() => {
                item.onClick?.();
                onMenuClick?.(item.id);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// 메뉴 아이콘 생성 헬퍼 함수들
export function createDashboardIcon() {
  return (
    <Wrapper>
      <g id="ic_dashboard">
        <path d={svgPaths.p1bc71000} fill="var(--fill-0, #2A2C2C)" />
      </g>
    </Wrapper>
  );
}

export function createDataIcon() {
  return (
    <Wrapper>
      <g id="ic_data">
        <path d={svgPaths.p33913670} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createSurveyIcon() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_1_4414)" id="ic_survey">
        <path d={svgPaths.p1f73a180} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
      <defs>
        <clipPath id="clip0_1_4414">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}

export function createListIcon() {
  return (
    <Wrapper>
      <g id="ic_list">
        <path d={svgPaths.p1dda8fa0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createCommentIcon() {
  return (
    <Wrapper>
      <g id="ic_comment">
        <path d={svgPaths.p3937a8f0} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createProductIcon() {
  return (
    <Wrapper>
      <g id="ic_product">
        <path d={svgPaths.p11912200} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createCompanyIcon() {
  return (
    <Wrapper>
      <g id="ic_company">
        <path d={svgPaths.p36651000} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createImageIcon() {
  return (
    <Wrapper>
      <g id="ic_image">
        <path d={svgPaths.p12b1ae00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createIdCardIcon() {
  return (
    <Wrapper>
      <g id="ic_idcard">
        <path d={svgPaths.p370d3600} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

export function createGroupIcon() {
  return (
    <Wrapper>
      <g id="ic_group">
        <path d={svgPaths.pc618800} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" />
      </g>
    </Wrapper>
  );
}

