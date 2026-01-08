import { Header } from "../ui/organisms/Header";
import { Sidebar, type MenuSection } from "../ui/organisms/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
  menuSections: MenuSection[];
  activeMenuId?: string;
  onMenuClick?: (menuId: string) => void;
  userName?: string;
  userRole?: string;
  onUserMenuClick?: () => void;
};

export function DashboardLayout({
  children,
  menuSections,
  activeMenuId,
  onMenuClick,
  userName,
  userRole,
  onUserMenuClick,
}: DashboardLayoutProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="대시보드">
      {/* GNB - Fixed at top */}
      <Header userName={userName} userRole={userRole} onUserMenuClick={onUserMenuClick} />

      {/* LNB/Contents */}
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full mt-[60px]">
        {/* LNB - Fixed on left side */}
        <Sidebar sections={menuSections} activeMenuId={activeMenuId} onMenuClick={onMenuClick} />

        {/* Contents - Add left margin for LNB */}
        <div className="ml-[304px] flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

