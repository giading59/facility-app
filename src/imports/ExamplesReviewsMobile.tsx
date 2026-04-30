import svgPaths from "./svg-6t49w8smyj";
import imgImageAlbumArt from "figma:asset/054dfe02e425078fdd66113858fbed2e929f9c10.png";

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
    <div className="h-[40px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
            <div className="absolute inset-[16.67%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3573eb00} fill="var(--fill-0, #4A4459)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#e8def8] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[32px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function TrailingElements() {
  return <div className="content-stretch flex items-center justify-end overflow-clip shrink-0 size-[48px]" data-name="Trailing elements" />;
}

function TopAppBar() {
  return (
    <div className="content-stretch flex flex-col h-[116px] items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full z-[3]" data-name="Top app bar">
      <div aria-hidden="true" className="absolute bg-gradient-to-t from-[7.759%] from-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-tl-[16px] rounded-tr-[16px] to-[99.138%] to-[rgba(0,0,0,0.5)] via-[35%] via-[rgba(78,78,78,0.25)]" />
      <div className="content-stretch flex h-[52px] items-end justify-between px-[24px] py-[10px] relative shrink-0 w-[412px]" data-name="Status bar">
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
      <div className="content-stretch flex h-[64px] items-center justify-between px-[4px] py-[8px] relative shrink-0 w-[412px]" data-name="App bar">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Leading icon">
          <Content1 />
        </div>
        <TrailingElements />
      </div>
    </div>
  );
}

function TitleSubtitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full whitespace-nowrap" data-name="Title & subtitle">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[44px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[45px] text-ellipsis text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[52px] overflow-hidden text-ellipsis">Title</p>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[16px] opacity-80 overflow-hidden relative shrink-0 text-[#f5eff7] text-[12px] text-ellipsis tracking-[0.4px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Subtitle
      </p>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8.33%_12.5%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 15">
            <path d={svgPaths.p2d58a100} fill="var(--fill-0, #6750A4)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Add to my itinerary</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute bottom-[4.17%] left-1/4 right-[20.83%] top-[6.25%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 16.125">
            <path d={svgPaths.p3a300000} fill="var(--fill-0, #6750A4)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1d1b20] text-[14px] text-center tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">12 mins from hotel</p>
      </div>
    </div>
  );
}

function AssistiveChips() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[8px] items-start relative shrink-0" data-name="Assistive chips">
      <div className="bg-[#f7f2fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Assistive chip 01">
        <StateLayer1 />
      </div>
      <div className="bg-[#f7f2fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Assistive chip 02">
        <StateLayer2 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute bg-gradient-to-b from-[12.097%] from-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none to-[rgba(0,0,0,0.5)] via-[28.226%] via-[rgba(78,78,78,0.25)]" />
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-end p-[16px] relative w-full">
          <TitleSubtitle />
          <AssistiveChips />
        </div>
      </div>
    </div>
  );
}

function ImageAlbumArt() {
  return (
    <div className="absolute inset-0 z-[1]" data-name="Image (Album art)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#ece6f0] inset-0" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain size-full" src={imgImageAlbumArt} />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col h-[356px] isolate items-start justify-between relative rounded-[28px] shrink-0 w-full" data-name="Content">
      <TopAppBar />
      <Header1 />
      <ImageAlbumArt />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fef7ff] content-stretch flex flex-col items-start overflow-clip pb-[8px] relative rounded-tl-[28px] rounded-tr-[28px] shrink-0 w-full" data-name="Header">
      <Content />
    </div>
  );
}

function SeactionHeader() {
  return (
    <div className="bg-[#fef7ff] relative shrink-0 w-full" data-name="Seaction header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center leading-[0] px-[16px] py-[8px] relative text-center w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#1d1b20] text-[22px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[28px]">Section title</p>
          </div>
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center relative shrink-0 text-[#49454f] text-[14px] tracking-[0.1px] w-[412px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre-wrap">{`Within 5 miles  • $$-$$$`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 size-[20px] top-1/2 z-[3]" data-name="Icon">
            <div className="absolute inset-[8.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="icon" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px] z-[2]" data-name="Icon">
            <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
                <path d={svgPaths.p12294b00} fill="var(--fill-0, white)" id="icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.1px] whitespace-nowrap z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Label</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a4459] text-[14px] tracking-[0.1px] whitespace-nowrap z-[1]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Label</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentedButtonBlock() {
  return (
    <div className="bg-[#fef7ff] relative shrink-0 w-full" data-name="Segmented button block">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative w-full">
        <div className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px overflow-clip relative rounded-[20px]" data-name="Connected button group/Round/Small/2">
          <div className="bg-[#625b71] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[48px] overflow-clip relative rounded-[24px]" data-name="Segment 1">
            <StateLayer3 />
          </div>
          <div className="bg-[#e8def8] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-[48px] overflow-clip relative rounded-[8px]" data-name="Segment 2">
            <StateLayer4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[80px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[16px] size-full" src={imgImageAlbumArt} />
      </div>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Leading element">
      <Image />
    </div>
  );
}

function ReviewsStars() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Reviews stars">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 01">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 02">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 03">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 04">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 05">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeadlineAndReviews() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Headline and reviews">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1d1b20] text-[22px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] overflow-hidden text-ellipsis">List item</p>
      </div>
      <ReviewsStars />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Details">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#49454f] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`Category • $$ • 1.2 miles away  `}</p>
      </div>
    </div>
  );
}

function SupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Supporting text">
      <Details />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#49454f] text-[14px] text-ellipsis tracking-[0.25px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Content">
      <HeadlineAndReviews />
      <SupportingText />
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
            <path d={svgPaths.p7afb100} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-[24px] py-[12px] relative w-full">
        <LeadingElement />
        <Content2 />
        <TrailingElement />
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item">
      <StateLayer5 />
      <div className="relative shrink-0 w-full" data-name="Divider">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative w-full">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 1">
                  <line id="Divider" stroke="var(--stroke-0, #CAC4D0)" x2="380" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[80px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[16px] size-full" src={imgImageAlbumArt} />
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Leading element">
      <Image1 />
    </div>
  );
}

function ReviewsStars1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Reviews stars">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 01">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 02">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 03">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 04">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 05">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeadlineAndReviews1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Headline and reviews">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1d1b20] text-[22px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] overflow-hidden text-ellipsis">List item</p>
      </div>
      <ReviewsStars1 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Details">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#49454f] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`Category • $$ • 1.2 miles away  `}</p>
      </div>
    </div>
  );
}

function SupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Supporting text">
      <Details1 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#49454f] text-[14px] text-ellipsis tracking-[0.25px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Content">
      <HeadlineAndReviews1 />
      <SupportingText1 />
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
            <path d={svgPaths.p7afb100} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-[24px] py-[12px] relative w-full">
        <LeadingElement1 />
        <Content3 />
        <TrailingElement1 />
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item">
      <StateLayer6 />
      <div className="relative shrink-0 w-full" data-name="Divider">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative w-full">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 1">
                  <line id="Divider" stroke="var(--stroke-0, #CAC4D0)" x2="380" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[80px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#ece6f0] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none mix-blend-luminosity object-contain rounded-[16px] size-full" src={imgImageAlbumArt} />
      </div>
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Leading element">
      <Image2 />
    </div>
  );
}

function ReviewsStars2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Reviews stars">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 01">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 02">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 03">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 04">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Review star 05">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.8333">
            <path d={svgPaths.p19b15200} fill="var(--fill-0, #625B71)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeadlineAndReviews2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Headline and reviews">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1d1b20] text-[22px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px] overflow-hidden text-ellipsis">List item</p>
      </div>
      <ReviewsStars2 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Details">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#49454f] text-[14px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`Category • $$ • 1.2 miles away  `}</p>
      </div>
    </div>
  );
}

function SupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Supporting text">
      <Details2 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#49454f] text-[14px] text-ellipsis tracking-[0.25px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Content">
      <HeadlineAndReviews2 />
      <SupportingText2 />
    </div>
  );
}

function TrailingElement2() {
  return (
    <div className="content-stretch flex gap-[10px] h-[64px] items-start relative shrink-0" data-name="Trailing element">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.35">
            <path d={svgPaths.p7afb100} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="content-stretch flex gap-[16px] items-start pl-[16px] pr-[24px] py-[12px] relative w-full">
        <LeadingElement2 />
        <Content4 />
        <TrailingElement2 />
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[88px] relative shrink-0 w-full" data-name="List item">
      <StateLayer7 />
      <div className="relative shrink-0 w-full" data-name="Divider">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative w-full">
            <div className="h-0 relative shrink-0 w-full" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 1">
                  <line id="Divider" stroke="var(--stroke-0, #CAC4D0)" x2="380" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#49454f] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">View 231 restaurants</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[100px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <StateLayer8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cac4d0] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function SingleLargeButton() {
  return (
    <div className="bg-[#fef7ff] relative shrink-0 w-full" data-name="Single large button">
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Button 1">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2687f5c0} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1b831700} fill="var(--fill-0, #4A4459)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#e8def8] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1b831700} fill="var(--fill-0, #4A4459)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2687f5c0} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex gap-[10px] h-[32px] isolate items-center justify-center py-[4px] relative shrink-0 w-[56px]" data-name="State layer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-0 overflow-clip size-[24px] top-1/2 z-[2]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1b831700} fill="var(--fill-0, #4A4459)" id="icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Icon">
        <div className="absolute inset-[8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2687f5c0} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[16px] shrink-0" data-name="Icon container">
      <StateLayer11 />
    </div>
  );
}

export default function ExamplesReviewsMobile() {
  return (
    <div className="bg-[#fef7ff] relative rounded-[28px] size-full" data-name="Examples/Reviews-Mobile">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <SeactionHeader />
        <SegmentedButtonBlock />
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <SingleLargeButton />
        <div className="bg-[#f3edf7] content-stretch flex h-[64px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Navigation Bar: Vertical items">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Nav item 01">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center py-[6px] relative size-full">
                  <IconContainer />
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#625b71] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Label
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Nav item 02">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center py-[6px] relative size-full">
                  <IconContainer1 />
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#49454f] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Label
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <div className="cursor-pointer flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Nav item 03">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center py-[6px] relative size-full">
                  <IconContainer2 />
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] min-w-full relative shrink-0 text-[#49454f] text-[12px] text-center tracking-[0.5px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Label
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f3edf7] h-[24px] relative shrink-0 w-full" data-name="Gesture bar">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1d1b20] h-[4px] left-1/2 rounded-[12px] top-1/2 w-[108px]" data-name="handle" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[#cac4d0] border-solid inset-[-8px] pointer-events-none rounded-[36px]" />
    </div>
  );
}