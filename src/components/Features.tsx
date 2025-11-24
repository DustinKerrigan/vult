import { Zap, Calendar, BarChart3, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Communication",
      description: "Engage leads instantly with automated messaging and follow-ups that feel personal."
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book appointments seamlessly with integrated calendar management and reminders."
    },
    {
      icon: Zap,
      title: "Powerful Automation",
      description: "Save hours every week with intelligent workflows that run on autopilot."
    },
    {
      icon: BarChart3,
      title: "Track Performance",
      description: "Monitor your growth with real-time analytics, KPI dashboards, and actionable insights."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-white to-[rgba(91,183,255,0.1)] py-[80px] px-[60px]">
      <div className="max-w-[1192px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-['Manrope:Bold',sans-serif] font-bold text-[36px] text-[#0f1b2d] mb-[16px]"
        >
          What We Offer
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#0f1b2d] opacity-70 leading-[1.5] mb-[50px]"
        >
          Streamline your operations with our comprehensive suite of tools.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex gap-[20px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-[60px] h-[60px] bg-[#1d7ce3] rounded-[8px] flex items-center justify-center">
                  <feature.icon className="w-[30px] h-[30px] text-white" strokeWidth={2} />
                </div>
              </div>
              <div>
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[20px] text-[#0f1b2d] mb-[12px]">
                  {feature.title}
                </p>
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#0f1b2d] opacity-70 leading-[1.5]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}