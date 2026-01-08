import clsx from "clsx";
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center pl-[24px] pr-0 py-0 relative", additionalClassNames)}>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-0 relative size-full">
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[17px] not-italic relative shrink-0 text-[12px] text-[rgba(12,15,15,0.52)] w-[66px]">평가 항목</p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
            <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(12,15,15,0.13)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0">
              <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-[rgba(12,15,15,0.83)] border-solid inset-0 pointer-events-none" />
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#2a2c2c] text-[16px] text-nowrap tracking-[-0.08px]">통증 부위</p>
            </div>
            <Text text="피팅감" additionalClassNames="shrink-0" />
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <Text text="기능성" additionalClassNames="w-full" />
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <Text text="만족도" additionalClassNames="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}