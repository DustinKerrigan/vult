import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-white via-[rgba(91,183,255,0.05)] to-white py-[80px] px-[60px]">
      <div className="max-w-[1192px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-['Manrope:Bold',sans-serif] font-bold text-[36px] text-[#0f1b2d] mb-[16px] text-center"
        >
          The Vult Systems Difference
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#0f1b2d] opacity-70 leading-[1.5] mb-[50px] text-center max-w-[800px] mx-auto"
        >
          Our software combined with expertly designed workflows doesn't just manage leads—it transforms them into revenue.
        </motion.p>

        {/* Visual Workflow Diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1d7ce3] to-[#5bb7ff] rounded-[20px] p-[50px] text-white"
        >
          <p className="font-['Manrope:Bold',sans-serif] font-bold text-[28px] mb-[40px] text-center">
            How It Works: From Lead to Revenue
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] relative">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[24px] relative">
              <div className="w-[40px] h-[40px] bg-white text-[#1d7ce3] rounded-full flex items-center justify-center font-['Manrope:Bold',sans-serif] font-bold text-[20px] mb-[16px]">
                1
              </div>
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[18px] mb-[8px]">Lead Arrives</p>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] opacity-90 leading-[1.4]">
                Phone call, form, or SMS inquiry
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute top-[50%] -right-[10px] translate-y-[-50%] text-white">
                <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[24px] relative">
              <div className="w-[40px] h-[40px] bg-white text-[#1d7ce3] rounded-full flex items-center justify-center font-['Manrope:Bold',sans-serif] font-bold text-[20px] mb-[16px]">
                2
              </div>
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[18px] mb-[8px]">Instant Response</p>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] opacity-90 leading-[1.4]">
                Automated text-back in seconds
              </p>
              <div className="hidden md:block absolute top-[50%] -right-[10px] translate-y-[-50%] text-white">
                <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[24px] relative">
              <div className="w-[40px] h-[40px] bg-white text-[#1d7ce3] rounded-full flex items-center justify-center font-['Manrope:Bold',sans-serif] font-bold text-[20px] mb-[16px]">
                3
              </div>
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[18px] mb-[8px]">Smart Nurture</p>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] opacity-90 leading-[1.4]">
                Custom workflows keep them engaged
              </p>
              <div className="hidden md:block absolute top-[50%] -right-[10px] translate-y-[-50%] text-white">
                <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[24px]">
              <div className="w-[40px] h-[40px] bg-white text-[#1d7ce3] rounded-full flex items-center justify-center font-['Manrope:Bold',sans-serif] font-bold text-[20px] mb-[16px]">
                4
              </div>
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[18px] mb-[8px]">Deal Closed</p>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] opacity-90 leading-[1.4]">
                More revenue, less manual work
              </p>
            </div>
          </div>

          <div className="mt-[40px] text-center">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] opacity-90">
              Every workflow is custom-designed to maximize your conversion rate and revenue potential.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}