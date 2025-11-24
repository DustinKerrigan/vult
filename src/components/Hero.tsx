import AnimatedHero3D from './AnimatedHero3D';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[800px] bg-gradient-to-b from-[#1d7ce3] via-[#1d7ce3] to-white overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(91,183,255,0.3)] via-[#1d7ce3] to-transparent" />
      
      {/* 3D Animated Hero Visual */}
      <AnimatedHero3D />
      
      {/* Content Container */}
      <div className="relative max-w-[1192px] mx-auto px-[60px] pt-[180px] pb-[120px]">
        {/* Heading */}
        <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-[48px] leading-[1.3] text-white mb-[30px] max-w-[900px]">
          Simplified Automated Systems That Help Your Business Streamline Growth.
        </h1>
        
        {/* Subheading */}
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[24px] leading-[1.5] text-white mb-[40px] max-w-[700px]">
          Smart communication tools + automations that help you capture more leads, book more appointments, save time, and track performance — all in one place.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-[20px]">
          <button 
            className="bg-[#1d7ce3] text-white font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] h-[55px] px-[40px] rounded-[8px] hover:opacity-90 transition-opacity" 
            style={{ fontVariationSettings: "'opsz' 14" }}
            onClick={() => scrollToSection('pricing')}
          >
            Get Pricing
          </button>
          <button 
            className="bg-[#1d7ce3] text-white font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] h-[55px] px-[40px] rounded-[8px] hover:opacity-90 transition-opacity" 
            style={{ fontVariationSettings: "'opsz' 14" }}
            onClick={() => scrollToSection('demo')}
          >
            Book A Demo
          </button>
        </div>
      </div>
    </div>
  );
}