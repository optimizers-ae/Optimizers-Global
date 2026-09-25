import React, { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+971', name: 'UAE' },
  { code: '+1', name: 'USA/Canada' },
  { code: '+44', name: 'UK' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+974', name: 'Qatar' },
  { code: '+968', name: 'Oman' },
  { code: '+965', name: 'Kuwait' },
  { code: '+973', name: 'Bahrain' },
  { code: '+91', name: 'India' },
  { code: '+92', name: 'Pakistan' },
  { code: '+65', name: 'Singapore' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+61', name: 'Australia' },
];

const SERVICES = [
  'Social Media Marketing',
  'Lead Generation',
  'Performance Marketing',
  'Content Creation',
  'Branding & Design',
  'Web Development',
  'SEO & Google Ads',
  'Other',
];

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    countryCode: '+971',
    phone: '',
    service: '',
    goals: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (!formData.service) newErrors.service = 'Please select a service.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      service: true,
      goals: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      /**
       * BACKEND INTEGRATION POINT:
       * When backend endpoint is ready, submit formData via fetch/axios here.
       * Example:
       * await fetch('/api/consultation', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData),
       * });
       */
      console.log('Consultation request submitted:', formData);
      // Per instructions: no fake success message is displayed when there is no backend integration.
    }
  };

  return (
    <section className="w-full bg-[#FAF9F6] text-[#04090C] py-16 sm:py-20 lg:py-[78px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-14 xl:gap-20">
        
        {/* Left Column: Heading & Description */}
        <div className="w-full lg:w-[46%] flex flex-col justify-start">
          {/* Eyebrow */}
          <div className="font-sans-clean font-bold text-[#01A3C5] text-[15px] sm:text-[16px] tracking-[0.28em] uppercase mb-6 sm:mb-8">
            FREE CONSULTATION
          </div>

          {/* Large Black Editorial Serif Headline */}
          <h2 className="font-playfair text-[#04090C] font-bold text-[44px] sm:text-[76px] md:text-[96px] lg:text-[115px] xl:text-[100px] leading-[0.90] tracking-[-0.03em] select-none">
            <span className="block">Let's</span>
            <span className="block">make your</span>
            <span className="block italic font-normal">next move</span>
            <span className="block">
              count<span className="text-[#01A3C5]">.</span>
            </span>
          </h2>

          {/* Description */}
          <p className="font-sans-clean text-[#04090C]/85 font-normal text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[30px] leading-[1.4] mt-8 sm:mt-10 lg:mt-14 max-w-[480px]">
            Tell us about your goals. We'll build a strategy<br className="hidden sm:block" /> to move you forward.
          </p>
        </div>

        {/* Right Column: Form Card */}
        <div className="w-full lg:w-[48%] bg-[#FFFFFF] border border-[#D5D9DD] rounded-[14px] p-6 sm:p-8 md:p-9 lg:p-[20px] shadow-none">
          <form onSubmit={handleSubmit} className="space-y-[20px]" noValidate>
            
            {/* Row 1: Your name & Work email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-[22px]">
              <div>
                <label htmlFor="consultation-name" className="block font-sans-clean font-bold text-[15px] text-[#04090C] mb-2">
                  Your name
                </label>
                <input
                  id="consultation-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full h-[52px] border ${
                    errors.name && touched.name ? 'border-red-500' : 'border-[#D5D9DD]'
                  } rounded-[12px] px-5 bg-white text-[#04090C] text-[15px] placeholder:text-[#8C949E] focus:outline-none focus:border-[#01A3C5] focus:ring-1 focus:ring-[#01A3C5] transition-all`}
                />
                {errors.name && touched.name && (
                  <span className="text-red-500 text-xs mt-1 block font-sans-clean">{errors.name}</span>
                )}
              </div>

              <div>
                <label htmlFor="consultation-email" className="block font-sans-clean font-bold text-[15px] text-[#04090C] mb-2">
                  Work email
                </label>
                <input
                  id="consultation-email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full h-[52px] border ${
                    errors.email && touched.email ? 'border-red-500' : 'border-[#D5D9DD]'
                  } rounded-[12px] px-5 bg-white text-[#04090C] text-[15px] placeholder:text-[#8C949E] focus:outline-none focus:border-[#01A3C5] focus:ring-1 focus:ring-[#01A3C5] transition-all`}
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 text-xs mt-1 block font-sans-clean">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Row 2: Company & Phone / WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-[22px]">
              <div>
                <label htmlFor="consultation-company" className="block font-sans-clean font-bold text-[15px] text-[#04090C] mb-2">
                  Company
                </label>
                <input
                  id="consultation-company"
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full h-[52px] border border-[#D5D9DD] rounded-[12px] px-5 bg-white text-[#04090C] text-[15px] placeholder:text-[#8C949E] focus:outline-none focus:border-[#01A3C5] focus:ring-1 focus:ring-[#01A3C5] transition-all"
                />
              </div>

              <div>
                <label htmlFor="consultation-phone" className="block font-sans-clean font-bold text-[15px] text-[#04090C] mb-2">
                  Phone / WhatsApp
                </label>
                <div
                  className={`flex items-center h-[52px] border ${
                    errors.phone && touched.phone ? 'border-red-500' : 'border-[#D5D9DD]'
                  } rounded-[12px] px-4 bg-white focus-within:border-[#01A3C5] focus-within:ring-1 focus-within:ring-[#01A3C5] transition-all`}
                >
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    aria-label="Country calling code"
                    className="bg-transparent border-none text-[#04090C] font-semibold text-[14px] focus:outline-none cursor-pointer pr-1 shrink-0"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="w-[1px] h-5 bg-[#D5D9DD] mx-2.5 shrink-0" />
                  <input
                    id="consultation-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="w-full h-full bg-transparent border-none text-[#04090C] text-[15px] placeholder:text-[#8C949E] focus:outline-none px-1"
                  />
                </div>
                {errors.phone && touched.phone && (
                  <span className="text-red-500 text-xs mt-1 block font-sans-clean">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Row 3: Service of interest */}
            <div>
              <label htmlFor="consultation-service" className="block font-sans-clean font-bold text-[15px] text-[#04090C] mb-2">
                Service of interest
              </label>
              <div className="relative">
                <select
                  id="consultation-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full h-[52px] border ${
                    errors.service && touched.service ? 'border-red-500' : 'border-[#D5D9DD]'
                  } rounded-[12px] px-5 bg-white text-[15px] appearance-none focus:outline-none focus:border-[#01A3C5] focus:ring-1 focus:ring-[#01A3C5] transition-all cursor-pointer ${
                    formData.service ? 'text-[#04090C]' : 'text-[#8C949E]'
                  }`}
                >
                  <option value="" disabled hidden>
                    Select a service
                  </option>
                  {SERVICES.map((srv) => (
                    <option key={srv} value={srv} className="text-[#04090C]">
                      {srv}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C949E]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              {errors.service && touched.service && (
                <span className="text-red-500 text-xs mt-1 block font-sans-clean">{errors.service}</span>
              )}
            </div>

            {/* Row 4: Tell us about your goals */}
            <div>
              <label htmlFor="consultation-goals" className="block font-sans-clean font-bold text-[15px] text-[#04090C] mb-2">
                Tell us about your goals
              </label>
              <textarea
                id="consultation-goals"
                name="goals"
                placeholder="Share your goals, challenges, or project details..."
                value={formData.goals}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full h-[110px] border border-[#D5D9DD] rounded-[12px] p-5 bg-white text-[#04090C] text-[15px] placeholder:text-[#8C949E] focus:outline-none focus:border-[#01A3C5] focus:ring-1 focus:ring-[#01A3C5] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[64px] bg-[#04090C] hover:bg-[#0d1418] text-white font-semibold text-[17px] sm:text-[18px] rounded-[12px] flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer group active:scale-[0.995]"
            >
              <span>Start the conversation</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#01A3C5"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;