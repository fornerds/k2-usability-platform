import React from "react";

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

// Helper function to recursively update SVG path colors
function updateIconColor(element: React.ReactNode, isActive: boolean): React.ReactNode {
  if (!React.isValidElement(element)) {
    return element;
  }

  const children = React.Children.map(element.props.children, (child: React.ReactNode) => {
    return updateIconColor(child, isActive);
  });

  // Update path elements
  if (element.type === 'path') {
    return React.cloneElement(element as React.ReactElement<any>, {
      fill: isActive ? "#2A2C2C" : "#0C0F0F",
      fillOpacity: isActive ? "1" : "0.52",
    });
  }

  // Clone element with updated children
  return React.cloneElement(element as React.ReactElement<any>, {
    children,
  });
}

export function MenuItem({ icon, label, isActive = false, onClick }: MenuItemProps) {
  // Clone icon and update fill color based on active state
  const iconWithColor = updateIconColor(icon, isActive);

  return (
    <button
      onClick={onClick}
      className={`relative rounded-[8px] shrink-0 w-full transition-colors ${
        isActive ? "bg-[rgba(78,160,255,0.1)]" : "hover:bg-gray-50"
      }`}
    >
      {isActive && (
        <div aria-hidden="true" className="absolute border border-[#0085ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
          {iconWithColor}
          <p className={`-webkit-box leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap tracking-[-0.08px] ${
            isActive ? "text-[#2a2c2c] font-semibold" : "text-[rgba(12,15,15,0.52)] font-medium"
          }`}>
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}

