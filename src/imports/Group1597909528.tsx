import imgImage5 from "@/assets/aeac79edef148e35a8edcdbe0929c11d8355f8cc.png";
type ContextMenuItemImageAndTextProps = {
  text: string;
};

function ContextMenuItemImageAndText({ text }: ContextMenuItemImageAndTextProps) {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[44px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[12px] py-0 relative size-full">
          <div className="pointer-events-none relative rounded-[2px] shrink-0 size-[24px]" data-name="image 5">
            <div aria-hidden="true" className="absolute inset-0 rounded-[2px]">
              <div className="absolute bg-white inset-0 rounded-[2px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgImage5} />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(12,15,15,0.13)] border-solid inset-0 rounded-[2px]" />
          </div>
          <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#090d13] text-[13px] text-nowrap tracking-[-0.13px]">
            <p className="leading-[1.3] overflow-ellipsis overflow-hidden">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <div className="absolute bg-white h-[202px] max-h-[264px] min-w-[120px] right-0 rounded-[2px] top-0 w-[270px]" data-name="❖ Context Menu">
        <div className="content-stretch flex flex-col items-center max-h-[inherit] min-w-[inherit] overflow-clip p-[4px] relative rounded-[inherit] size-full">
          <ContextMenuItemImageAndText text="아이더 퀀텀나노" />
          <ContextMenuItemImageAndText text="다이나핏 피스테 스피드" />
          <ContextMenuItemImageAndText text="아이더 랩터와이드" />
          <ContextMenuItemImageAndText text="다이나핏 가드런보아GTX" />
          <ContextMenuItemImageAndText text="네파 휘슬러" />
          <div className="absolute content-stretch flex h-[264px] items-start justify-end left-[108px] pl-0 pr-[4px] py-[16px] top-[-3px] w-[160px]" data-name="Util / Scroll view">
            <div className="bg-[rgba(102,102,102,0.8)] h-[80px] rounded-[100px] shrink-0 w-[7px]" data-name="Scrollbar" />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(9,13,19,0.19)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_10px_15px_-3px_rgba(13,14,17,0.1)]" />
      </div>
    </div>
  );
}