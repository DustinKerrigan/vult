import { Building2, Home, Briefcase, Scissors, Heart, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      name: "Real Estate",
      description: "Connect with buyers and sellers faster"
    },
    {
      icon: Home,
      name: "Home Services",
      description: "Schedule jobs and follow up automatically"
    },
    {
      icon: Briefcase,
      name: "Professional Services",
      description: "Manage client relationships effortlessly"
    },
    {
      icon: Scissors,
      name: "Beauty & Wellness",
      description: "Fill your appointment book consistently"
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Improve patient communication and care"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Engage students and parents effectively"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[rgba(91,183,255,0.1)] via-[#1d7ce3] to-white py-[80px] px-[60px]">
      <div className="max-w-[1192px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-['Manrope:Bold',sans-serif] font-bold text-[36px] text-white mb-[16px] text-center"
        >
          Built For Your Industry
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-white opacity-90 leading-[1.5] mb-[50px] text-center"
        >
          Tailored solutions for businesses across every sector.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[rgba(15,27,45,0.9)] rounded-[20px] p-[40px] hover:bg-[rgba(15,27,45,1)] transition-colors"
            >
              <div className="w-[60px] h-[60px] bg-[#1d7ce3] rounded-[8px] flex items-center justify-center mb-[24px]">
                <industry.icon className="w-[30px] h-[30px] text-white" strokeWidth={2} />
              </div>
              
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[22px] text-white mb-[12px]">
                {industry.name}
              </p>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-white opacity-80 leading-[1.5]">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}