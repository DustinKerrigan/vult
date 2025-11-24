import Logo from './Logo';

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-[rgba(15,27,45,0.95)] to-[#0f1b2d] py-[60px] px-[60px]">
      <div className="max-w-[1192px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-[40px] mb-[40px]">
          {/* Left Section - Brand */}
          <div className="flex-1 max-w-[500px]">
            <div className="mb-[16px]">
              <Logo className="w-[160px] h-[40px] text-white" />
            </div>
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-70 leading-[1.6]">
              Simple systems that help businesses run smoother and grow faster.
            </p>
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col gap-[16px]">
            <a href="#contact" className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#1d7ce3] transition-all">
              Contact
            </a>
            <a href="mailto:Info@vultsystems.com" className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#1d7ce3] transition-all">
              Info@vultsystems.com
            </a>
            <a href="#privacy" className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#1d7ce3] transition-all">
              Privacy Policy
            </a>
            <a href="#terms" className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white opacity-70 hover:opacity-100 hover:text-[#1d7ce3] transition-all">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 mb-[30px]"></div>

        {/* Bottom Row - Copyright */}
        <div className="text-center">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-white opacity-60">
            © 2025 Vult Systems. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}