import svgPaths from "./svg-bo88lszrz8";
import imgImage from "figma:asset/054dfe02e425078fdd66113858fbed2e929f9c10.png";

function Wifi() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[17px]" data-name="Wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Wifi">
          <g id="Path" />
          <g id="Rectangle" />
          <g id="Path_2" />
          <path d={svgPaths.p34567080} fill="var(--fill-0, #1D1B20)" id="Path_3" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="col-1 ml-[16px] mt-0 relative row-1 size-[17px]" data-name="Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Signal">
          <g id="Path" />
          <path d={svgPaths.p112c6500} fill="var(--fill-0, #1D1B20)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="col-1 h-[15px] ml-[38px] mt-px relative row-1 w-[8px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
        <g id="Battery">
          <path d={svgPaths.p2dfd100} fill="var(--fill-0, #1D1B20)" id="Base" opacity="0.3" />
          <path d={svgPaths.p2657cc00} fill="var(--fill-0, #1D1B20)" id="Charge" />
        </g>
      </svg>
    </div>
  );
}

function RightIcons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="right icons">
      <Wifi />
      <Signal />
      <Battery />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[16.67%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3573eb00} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%_20.83%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.p5790180} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[16.67%_41.67%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
            <path d={svgPaths.p3f25c480} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function TrailingElements() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing action 2">
        <Content1 />
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Trailing action 1">
        <Content2 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[28px] shrink-0 size-[136px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[28px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[28px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[28px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function HeadlineSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-full" data-name="Headline + Supporting text">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#1d1b20] text-[24px] text-ellipsis w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Headline</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#49454f] text-[16px] text-ellipsis tracking-[0.15px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">supporting text</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Download</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#6750a4] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function TextColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Text column">
      <HeadlineSupportingText />
      <div className="content-stretch cursor-pointer flex h-[40px] items-center justify-center relative shrink-0" data-name="Button">
        <Content3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fef7ff] relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex gap-[24px] items-start px-[16px] py-[8px] relative w-full">
        <Image />
        <TextColumn />
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="bg-[#fef7ff] relative shrink-0 w-full" data-name="Text content">
      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] px-[16px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#49454f] text-[11px] tracking-[0.5px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Published date</p>
        </div>
        <div className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#1d1b20] text-[14px] tracking-[0.25px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
          <p className="leading-[20px] mb-0">&nbsp;</p>
          <p className="leading-[20px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1b831700} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function TitleHeader() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Title header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[32px]">Section title</p>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon button - standard">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[120px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[16px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start relative shrink-0 w-full" data-name="Title+description">
      <p className="leading-[28px] relative shrink-0 text-[#1d1b20] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
      <p className="leading-[20px] max-h-[52px] overflow-hidden relative shrink-0 text-[#49454f] text-[14px] text-ellipsis tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description duis aute irure dolor in reprehenderit in voluptate velit.
      </p>
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-h-px min-w-px relative" data-name="Leading">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pfdc7880} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#49454f] text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#49454f] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px overflow-hidden relative text-[#49454f] text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23 min
      </p>
    </div>
  );
}

function LeadingTrailingIcons() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Leading & Trailing icons">
      <Leading />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d="M0 14V0L11 7L0 14Z" fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative self-stretch" data-name="Content">
      <TitleDescription />
      <LeadingTrailingIcons />
    </div>
  );
}

function TextAndImage() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text and image">
      <Image1 />
      <Content5 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="List item 01">
      <TextAndImage />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[120px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[16px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function TitleDescription1() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start relative shrink-0 w-full" data-name="Title+description">
      <p className="leading-[28px] relative shrink-0 text-[#1d1b20] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
      <p className="leading-[20px] max-h-[52px] overflow-hidden relative shrink-0 text-[#49454f] text-[14px] text-ellipsis tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description duis aute irure dolor in reprehenderit in voluptate velit.
      </p>
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-h-px min-w-px relative" data-name="Leading">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pfdc7880} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#49454f] text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#49454f] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px overflow-hidden relative text-[#49454f] text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23 min
      </p>
    </div>
  );
}

function LeadingTrailingIcons1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Leading & Trailing icons">
      <Leading1 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d="M0 14V0L11 7L0 14Z" fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative self-stretch" data-name="Content">
      <TitleDescription1 />
      <LeadingTrailingIcons1 />
    </div>
  );
}

function TextAndImage1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text and image">
      <Image2 />
      <Content6 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="List item 02">
      <TextAndImage1 />
    </div>
  );
}

function Image3() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[120px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[16px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function TitleDescription2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-start relative shrink-0 w-full" data-name="Title+description">
      <p className="leading-[28px] relative shrink-0 text-[#1d1b20] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
      <p className="leading-[20px] max-h-[52px] overflow-hidden relative shrink-0 text-[#49454f] text-[14px] text-ellipsis tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description duis aute irure dolor in reprehenderit in voluptate velit.
      </p>
    </div>
  );
}

function Leading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-h-px min-w-px relative" data-name="Leading">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pfdc7880} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#49454f] text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#49454f] text-[12px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        •
      </p>
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px overflow-hidden relative text-[#49454f] text-[12px] text-ellipsis tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23 min
      </p>
    </div>
  );
}

function LeadingTrailingIcons2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Leading & Trailing icons">
      <Leading2 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d="M0 14V0L11 7L0 14Z" fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative self-stretch" data-name="Content">
      <TitleDescription2 />
      <LeadingTrailingIcons2 />
    </div>
  );
}

function TextAndImage2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Text and image">
      <Image3 />
      <Content7 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="List item 03">
      <TextAndImage2 />
    </div>
  );
}

function Column() {
  return (
    <div className="relative shrink-0 w-full" data-name="column 01">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function SimpleCardGrid() {
  return (
    <div className="bg-[#fef7ff] content-stretch flex flex-col items-start overflow-clip pb-[32px] relative shrink-0 w-full" data-name="Simple card grid">
      <TitleHeader />
      <Column />
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute content-stretch flex inset-[0_80.3%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 4">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="var(--stroke-0, #6750A4)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-4.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 4">
              <path d="M2 2H12.25H32.75H43" id="wave-increment" stroke="var(--stroke-0, #6750A4)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_19.7%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#e8def8] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[-0.21px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#6750a4] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Container">
      <ActiveIndicator />
      <TrackAndStop />
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ece6f0] inset-0" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain size-full" src={imgImage} />
      </div>
    </div>
  );
}

function TrackInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Track info">
      <p className="leading-[20px] relative shrink-0 text-[#1d1b20] text-[14px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Title
      </p>
      <p className="leading-[16px] relative shrink-0 text-[#49454f] text-[12px] tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Artist
      </p>
    </div>
  );
}

function PlaybackControls() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Playback controls">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pause">
        <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p3113d840} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="skip_next_filled">
        <div className="absolute bottom-1/4 left-[22.92%] right-[22.92%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p3a90ea00} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="absolute bg-[#f3edf7] content-stretch flex gap-[16px] inset-[4px_0_0_0] items-center pr-[20px]" data-name="Content">
      <Image4 />
      <TrackInfo />
      <PlaybackControls />
    </div>
  );
}

function CompactMediaPlayer() {
  return (
    <div className="bg-[#fef7ff] h-[68px] relative shrink-0 w-full" data-name="Compact media player">
      <div className="-translate-y-1/2 absolute content-stretch flex items-start left-0 pl-[2px] right-0 top-[calc(50%-32px)]" data-name="Linear-determinate progress indicator">
        <Container />
      </div>
      <Content8 />
    </div>
  );
}

export default function ExamplesDetailedViewMobile() {
  return (
    <div className="bg-[#fef7ff] relative rounded-[28px] size-full" data-name="Examples/Detailed view-Mobile">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[52px] relative shrink-0 w-full" data-name="Status bar">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex items-end justify-between px-[24px] py-[10px] relative size-full">
              <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss02', 'dlig', 'lnum', 'pnum'" }}>
                <p className="leading-[20px]">9:30</p>
              </div>
              <RightIcons />
              <div className="-translate-x-1/2 absolute left-1/2 size-[24px] top-[18px]" data-name="Camera Cutout">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p34df7200} fill="var(--fill-0, #1D1B20)" fillRule="evenodd" id="Camera Cutout" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[64px] items-center justify-between px-[4px] py-[8px] relative shrink-0 w-[412px]" data-name="App bar">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Leading icon">
            <Content />
          </div>
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center left-[56px] right-[56px] top-1/2" data-name="Text content">
            <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1d1b20] text-[22px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px] overflow-hidden text-ellipsis">Label</p>
            </div>
          </div>
          <TrailingElements />
        </div>
        <Header />
        <TextContent />
        <SimpleCardGrid />
        <CompactMediaPlayer />
        <div className="bg-[#f3edf7] h-[24px] relative shrink-0 w-full" data-name="Gesture bar">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1b20] h-[4px] left-1/2 rounded-[12px] top-1/2 w-[108px]" data-name="handle" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#cac4d0] border-solid inset-[-8px] pointer-events-none rounded-[36px]" />
    </div>
  );
}