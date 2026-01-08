import svgPaths from "../../../../imports/svg-v16cagnvmh";
import addIconSvgPaths from "../../../../imports/svg-zltnnv3ji4";
import uploadIconSvgPaths from "../../../../imports/svg-3kutik6x7t";

type IconWrapperProps = {
  children: React.ReactNode;
  size?: 14 | 16 | 20;
};

function IconWrapper({ children, size = 20 }: IconWrapperProps) {
  const sizeClass = size === 14 ? "size-[14px]" : size === 16 ? "size-[16px]" : "size-[20px]";
  const viewBox = size === 14 ? "0 0 14 14" : size === 16 ? "0 0 16 16" : "0 0 20 20";
  
  return (
    <div className={`relative shrink-0 ${sizeClass}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
        {children}
      </svg>
    </div>
  );
}

export function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return <IconWrapper size={20}>{children}</IconWrapper>;
}

export function Wrapper16({ children }: React.PropsWithChildren<{}>) {
  return <IconWrapper size={16}>{children}</IconWrapper>;
}

export function Wrapper14({ children }: React.PropsWithChildren<{}>) {
  return <IconWrapper size={14}>{children}</IconWrapper>;
}

export function ChevronDown() {
  return (
    <Wrapper16>
      <g id="ic_chevron_down">
        <path d="M4 6l4 4 4-4" stroke="var(--fill-0, #2A2C2C)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </Wrapper16>
  );
}

export function ChevronUp() {
  return (
    <Wrapper16>
      <g id="ic_chevron_up">
        <path d="M4 10l4-4 4 4" stroke="var(--fill-0, #2A2C2C)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </Wrapper16>
  );
}

export function ChevronRight() {
  return (
    <Wrapper16>
      <g id="ic_chevron_right">
        <path d={svgPaths.p35b8bc00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
      </g>
    </Wrapper16>
  );
}

export function AddIcon() {
  return (
    <Wrapper16>
      <g id="ic_add">
        <path d={addIconSvgPaths.p39b30680} fill="var(--fill-0, #FFFFFF)" fillOpacity="1" id="Vector" />
      </g>
    </Wrapper16>
  );
}

export function UploadIcon({ color = "#0C0F0F", opacity = "0.52" }: { color?: string; opacity?: string | number }) {
  return (
    <Wrapper20>
      <g id="ic_upload">
        <path d={uploadIconSvgPaths.p2d04cff0} fill={color} fillOpacity={opacity} id="Vector" />
      </g>
    </Wrapper20>
  );
}

export function DeleteIcon() {
  return (
    <Wrapper14>
      <g id="ic_delete">
        <path d={uploadIconSvgPaths.p1f7bfa00} fill="var(--fill-0, #0C0F0F)" fillOpacity="0.52" id="Vector" />
      </g>
    </Wrapper14>
  );
}

