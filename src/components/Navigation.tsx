import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsDropdownOpen(false);
    }
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'Industries', id: 'industries' },
    { label: 'Contact', id: 'footer' }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: isScrolled ? '#000000' : 'transparent' }}
    >
      <div className="max-w-[1440px] mx-auto px-[60px] h-[80px] flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:opacity-80 transition-opacity drop-shadow-lg"
          style={{ cursor: 'pointer' }}
        >
          <Logo className="w-[160px] h-[40px] text-white" />
        </button>

        {/* Navigation Items */}
        <div className="flex items-center gap-[40px]">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-[32px]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg"
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-[8px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-90 hover:opacity-100 transition-opacity drop-shadow-lg"
              style={{ cursor: 'pointer' }}
            >
              Menu
              <ChevronDown className={`w-[20px] h-[20px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-[40px] right-0 bg-[#1d7ce3] rounded-[8px] border border-white border-opacity-20 min-w-[200px] py-[8px] shadow-xl">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-[20px] py-[12px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-90 hover:opacity-100 hover:bg-white hover:bg-opacity-10 transition-all"
                    style={{ cursor: 'pointer' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-[16px]">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-[#1d7ce3] font-['DM_Sans:Bold',sans-serif] font-bold text-[16px] h-[45px] px-[24px] rounded-[8px] hover:bg-opacity-90 transition-opacity whitespace-nowrap shadow-md" 
              style={{ fontVariationSettings: "'opsz' 14", cursor: 'pointer' }}
            >
              Get Pricing
            </button>
            <button 
              className="bg-[rgba(15,27,45,0.9)] text-white font-['DM_Sans:Bold',sans-serif] font-bold text-[16px] h-[45px] px-[24px] rounded-[8px] hover:bg-[rgba(15,27,45,1)] transition-all whitespace-nowrap border border-white border-opacity-30" 
              style={{ fontVariationSettings: "'opsz' 14", cursor: 'pointer' }}
              onClick={() => scrollToSection('demo')}
            >
              Book A Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}