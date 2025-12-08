import { useState } from 'react';
import { motion , AnimatePresence} from 'framer-motion';

export default function ContactForm() {
 
  const [showFlash, setShowFlash] = useState(false);

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log('Form submitted with data:', {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      company: data.get('company'),
      message: data.get('message')
    });
    try {
    await fetch('https://136.114.245.138:5001/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: data.get('name'),
              email: data.get('email'),
              phone: data.get('phone'),
              company: data.get('company'),
              message: data.get('message')
      })
    });
      console.log('Form sent successfully');
      (e.target as HTMLFormElement).reset(); //clear form
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 3000); // hide submit animation after 3 seconds
  } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div id="demo" className="bg-gradient-to-b from-[rgba(15,27,45,0.7)] via-[rgba(15,27,45,0.85)] to-[rgba(15,27,45,0.95)] py-[80px] px-[60px]">
      <div className="max-w-[800px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-[50px]">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-['Manrope:Bold',sans-serif] font-bold text-[42px] text-white mb-[16px]"
          >
            Book A Demo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-white opacity-70 leading-[1.6]"
          >
            Let's find the perfect solution for your business. Our team will consult with you to understand your unique needs and recommend the plan that fits you best.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-[24px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white mb-[8px]">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full h-[50px] px-[20px] bg-white bg-opacity-10 border border-white border-opacity-20 rounded-[8px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black placeholder-gray placeholder-opacity-40 focus:outline-none focus:border-[#1d7ce3] focus:border-opacity-60 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white mb-[8px]">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full h-[50px] px-[20px] bg-white bg-opacity-10 border border-white border-opacity-20 rounded-[8px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black placeholder-gray placeholder-opacity-40 focus:outline-none focus:border-[#1d7ce3] focus:border-opacity-60 transition-all"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white mb-[8px]">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full h-[50px] px-[20px] bg-white bg-opacity-10 border border-white border-opacity-20 rounded-[8px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black placeholder-gray placeholder-opacity-40 focus:outline-none focus:border-[#1d7ce3] focus:border-opacity-60 transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white mb-[8px]">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full h-[50px] px-[20px] bg-white bg-opacity-10 border border-white border-opacity-20 rounded-[8px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black placeholder-gray placeholder-opacity-40 focus:outline-none focus:border-[#1d7ce3] focus:border-opacity-60 transition-all"
              placeholder="Enter your company name"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-['Inter:Bold',sans-serif] font-bold text-[16px] text-white mb-[8px]">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-[20px] py-[16px] bg-white bg-opacity-10 border border-white border-opacity-20 rounded-[8px] font-['Inter:Bold',sans-serif] font-bold text-[16px] text-black placeholder-gray placeholder-opacity-40 focus:outline-none focus:border-[#1d7ce3] focus:border-opacity-60 transition-all resize-none"
              placeholder="Tell us about your business and what you're looking for"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1d7ce3] text-white font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] h-[55px] rounded-[8px] hover:bg-opacity-90 transition-opacity shadow-lg"
            style={{ fontVariationSettings: "'opsz' 14" ,
                     cursor: 'pointer'
            }}
          >
            Submit Request
          </button>
        </motion.form>
          <AnimatePresence>
            {showFlash && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'fixed',
                  top: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  zIndex: 50
                }}
              >
                Submitted
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
  );
}