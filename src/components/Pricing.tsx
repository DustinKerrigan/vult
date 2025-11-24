import { motion } from 'framer-motion';

export default function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Software access",
        "1 basic workflow included",
        "No custom workflows included",
        "Email + SMS + VoIP basics"
      ]
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For businesses ready to grow",
      features: [
        "Software access",
        "2 included workflows",
        "Advanced lead follow-up features",
        "KPI tracking & analytics",
        "Custom workflows available as add-ons"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$149",
      period: "/month",
      description: "Scale your operations with premium features",
      features: [
        "Software access",
        "5 workflows included",
        "Priority support",
        "AI-enhanced communication tools",
        "Advanced KPI & performance dashboards",
        "20% discount on custom workflow builds"
      ]
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Custom solutions for large organizations",
      features: [
        "Software access",
        "All workflows included",
        "2 fully custom workflows per year included",
        "Multi-location support",
        "Advanced AI routing & automation tools",
        "Custom KPI reporting & business intelligence"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-[rgba(91,183,255,0.1)] to-[rgba(15,27,45,0.7)] py-[80px] px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-['Manrope:Bold',sans-serif] font-bold text-[36px] text-[#0f1b2d] mb-[16px] text-center"
        >
          Simple, Transparent Pricing
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#0f1b2d] opacity-70 leading-[1.5] mb-[50px] text-center"
        >
          Plans start at $49/month. Choose the package that fits your business needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-[16px] p-[32px] shadow-lg hover:shadow-xl transition-shadow ${plan.popular ? 'ring-4 ring-[#1d7ce3]' : ''}`}
            >
              {plan.popular && (
                <div className="bg-[#1d7ce3] text-white font-['DM_Sans:Bold',sans-serif] font-bold text-[12px] rounded-[8px] px-[12px] py-[6px] inline-block mb-[16px]">
                  MOST POPULAR
                </div>
              )}
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[22px] text-[#0f1b2d] mb-[8px]">
                {plan.name}
              </p>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f1b2d] opacity-70 leading-[1.5] mb-[24px] min-h-[42px]">
                {plan.description}
              </p>

              <div className="space-y-[12px]">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-[10px]">
                    <svg className="w-[18px] h-[18px] text-[#1d7ce3] flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f1b2d] opacity-80 leading-[1.4]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Get Started Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-[50px]"
        >
          <button 
            className="bg-[#1d7ce3] text-white font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] h-[60px] px-[60px] rounded-[8px] hover:opacity-90 transition-all shadow-lg hover:shadow-xl" 
            style={{ fontVariationSettings: "'opsz' 14" }}
            onClick={() => scrollToSection('demo')}
          >
            Get Started
          </button>
        </motion.div>

        {/* Setup Fee Disclaimer */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-[#0f1b2d] opacity-40 text-center mt-[20px]"
        >
          *Simple one-time onboarding fee applies, not included in monthly pricing
        </motion.p>

        {/* Custom Workflow Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-[60px] max-w-[900px] mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1d7ce3] via-[#5bb7ff] to-[#1d7ce3] rounded-[20px] p-[40px] shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white opacity-5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-white opacity-5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-[12px] mb-[20px]">
                <svg className="w-[32px] h-[32px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[28px] text-white">
                  Custom Workflow Build-Outs
                </p>
              </div>
              
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-white opacity-90 leading-[1.6] mb-[24px]">
                Need something truly unique? Our team designs and builds tailored automation workflows engineered specifically for your business processes — no matter how complex.
              </p>

              <div className="grid md:grid-cols-2 gap-[20px] mb-[32px]">
                <div className="flex items-start gap-[12px]">
                  <svg className="w-[20px] h-[20px] text-white flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white leading-[1.5]">
                    Fully customized workflow design
                  </p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <svg className="w-[20px] h-[20px] text-white flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white leading-[1.5]">
                    Complex multi-step automation
                  </p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <svg className="w-[20px] h-[20px] text-white flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white leading-[1.5]">
                    Integration with existing systems
                  </p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <svg className="w-[20px] h-[20px] text-white flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white leading-[1.5]">
                    Advanced KPI tracking implementation
                  </p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <svg className="w-[20px] h-[20px] text-white flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white leading-[1.5]">
                    Dedicated workflow architect
                  </p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <svg className="w-[20px] h-[20px] text-white flex-shrink-0 mt-[2px]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white leading-[1.5]">
                    Ongoing optimization & support
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-[20px] pt-[24px] border-t border-white border-opacity-20">
                <div>
                  <p className="font-['Manrope:Bold',sans-serif] font-bold text-[32px] text-white mb-[4px]">
                    Price Varies by Complexity
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[15px] text-white opacity-80">
                    Let's discuss your specific needs and create a custom solution
                  </p>
                </div>
                <button 
                  className="bg-white text-[#1d7ce3] font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] h-[55px] px-[40px] rounded-[8px] hover:shadow-xl transition-all whitespace-nowrap" 
                  style={{ fontVariationSettings: "'opsz' 14" }}
                  onClick={() => scrollToSection('demo')}
                >
                  Discuss Your Needs
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}