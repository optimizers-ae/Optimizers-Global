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
    <section
      className="w-full relative overflow-hidden text-white py-16 sm:py-20 lg:py-[78px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
      style={{ background: '#030D12' }}
    >
      {/* ── Gradient Blooms ── */}
      {/* Primary blue bloom — top-right, dominant */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(1,163,197,0.38) 0%, rgba(1,163,197,0.12) 42%, transparent 72%)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
        }}
      />
      {/* Secondary blue bloom — center-right, layered depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(1,163,197,0.22) 0%, transparent 68%)',
          filter: 'blur(32px)',
          pointerEvents: 'none',
        }}
      />
      {/* Warm orange accent bloom — bottom-left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-8%',
          left: '-4%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.28) 0%, rgba(249,115,22,0.08) 45%, transparent 70%)',
          filter: 'blur(56px)',
          pointerEvents: 'none',
        }}
      />
      {/* Subtle orange mid-left warmth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 65%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-[1500px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-14 xl:gap-20">
        
        {/* Left Column: Heading & Description */}
        <div className="w-full lg:w-[46%] flex flex-col justify-start">
          {/* Eyebrow */}
          <div className="font-sans-clean font-bold text-[#01A3C5] text-[15px] sm:text-[16px] tracking-[0.28em] uppercase mb-6 sm:mb-8">
            FREE CONSULTATION
          </div>

          {/* Large Editorial Serif Headline */}
          <h2 className="font-playfair text-white font-bold text-[44px] sm:text-[76px] md:text-[96px] lg:text-[115px] xl:text-[100px] leading-[0.90] tracking-[-0.03em] select-none">
            <span className="block">Let's</span>
            <span className="block">make your</span>
            <span
              className="block italic font-normal font-playfair"
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontOpticalSizing: 'auto',
              }}
            >next move</span>
            <span className="block">
              count<span className="text-[#01A3C5]">.</span>
            </span>
          </h2>

          {/* Description */}
          <p className="font-sans-clean font-normal text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[30px] leading-[1.4] mt-8 sm:mt-10 lg:mt-14 max-w-[480px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Tell us about your goals. We'll build a strategy<br className="hidden sm:block" /> to move you forward.
          </p>
        </div>

        {/* Right Column: Form Card — glassmorphism dark panel */}
        <div
          className="w-full lg:w-[48%] rounded-[18px] p-6 sm:p-8 md:p-9 lg:p-[28px]"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.10)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            boxShadow: '0 8px 40px rgba(1,163,197,0.10), 0 2px 12px rgba(0,0,0,0.40)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-[20px]" noValidate>
            
            {/* Row 1: Your name & Work email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-[22px]">
              <div>
                <label htmlFor="consultation-name" className="block font-sans-clean font-bold text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
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
                  className={`w-full h-[52px] rounded-[12px] px-5 text-[15px] transition-all focus:outline-none ${
                    errors.name && touched.name ? 'border border-red-400' : ''
                  }`}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: errors.name && touched.name ? '1px solid rgba(248,113,113,0.8)' : '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    caretColor: '#01A3C5',
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(1,163,197,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(1,163,197,0.12)'; }}
                  onBlurCapture={e => { if (!(errors.name && touched.name)) { e.target.style.border = '1px solid rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; } }}
                />
                {errors.name && touched.name && (
                  <span className="text-red-400 text-xs mt-1 block font-sans-clean">{errors.name}</span>
                )}
              </div>

              <div>
                <label htmlFor="consultation-email" className="block font-sans-clean font-bold text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
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
                  className="w-full h-[52px] rounded-[12px] px-5 text-[15px] transition-all focus:outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: errors.email && touched.email ? '1px solid rgba(248,113,113,0.8)' : '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    caretColor: '#01A3C5',
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(1,163,197,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(1,163,197,0.12)'; }}
                  onBlurCapture={e => { if (!(errors.email && touched.email)) { e.target.style.border = '1px solid rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; } }}
                />
                {errors.email && touched.email && (
                  <span className="text-red-400 text-xs mt-1 block font-sans-clean">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Row 2: Company & Phone / WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-[22px]">
              <div>
                <label htmlFor="consultation-company" className="block font-sans-clean font-bold text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
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
                  className="w-full h-[52px] rounded-[12px] px-5 text-[15px] transition-all focus:outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    caretColor: '#01A3C5',
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(1,163,197,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(1,163,197,0.12)'; }}
                  onBlurCapture={e => { e.target.style.border = '1px solid rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label htmlFor="consultation-phone" className="block font-sans-clean font-bold text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Phone / WhatsApp
                </label>
                <div
                  className={`flex items-center h-[52px] rounded-[12px] px-4 transition-all`}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: errors.phone && touched.phone ? '1px solid rgba(248,113,113,0.8)' : '1px solid rgba(255,255,255,0.12)',
                  }}
                  onFocusCapture={e => { e.currentTarget.style.border = '1px solid rgba(1,163,197,0.7)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(1,163,197,0.12)'; }}
                  onBlurCapture={e => { if (!(errors.phone && touched.phone)) { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; } }}
                >
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    aria-label="Country calling code"
                    className="bg-transparent border-none font-semibold text-[14px] focus:outline-none cursor-pointer pr-1 shrink-0"
                    style={{ color: 'rgba(255,255,255,0.85)' }}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code} style={{ background: '#0d1e26', color: '#fff' }}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="w-[1px] h-5 mx-2.5 shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  <input
                    id="consultation-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="w-full h-full bg-transparent border-none text-[15px] focus:outline-none px-1"
                    style={{ color: '#ffffff', caretColor: '#01A3C5' }}
                  />
                </div>
                {errors.phone && touched.phone && (
                  <span className="text-red-400 text-xs mt-1 block font-sans-clean">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Row 3: Service of interest */}
            <div>
              <label htmlFor="consultation-service" className="block font-sans-clean font-bold text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
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
                  className="w-full h-[52px] rounded-[12px] px-5 text-[15px] appearance-none focus:outline-none transition-all cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: errors.service && touched.service ? '1px solid rgba(248,113,113,0.8)' : '1px solid rgba(255,255,255,0.12)',
                    color: formData.service ? '#ffffff' : 'rgba(255,255,255,0.40)',
                  }}
                  onFocus={e => { e.target.style.border = '1px solid rgba(1,163,197,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(1,163,197,0.12)'; }}
                  onBlurCapture={e => { if (!(errors.service && touched.service)) { e.target.style.border = '1px solid rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; } }}
                >
                  <option value="" disabled hidden style={{ background: '#0d1e26' }}>
                    Select a service
                  </option>
                  {SERVICES.map((srv) => (
                    <option key={srv} value={srv} style={{ background: '#0d1e26', color: '#fff' }}>
                      {srv}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'rgba(255,255,255,0.40)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              {errors.service && touched.service && (
                <span className="text-red-400 text-xs mt-1 block font-sans-clean">{errors.service}</span>
              )}
            </div>

            {/* Row 4: Tell us about your goals */}
            <div>
              <label htmlFor="consultation-goals" className="block font-sans-clean font-bold text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Tell us about your goals
              </label>
              <textarea
                id="consultation-goals"
                name="goals"
                placeholder="Share your goals, challenges, or project details..."
                value={formData.goals}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full h-[110px] rounded-[12px] p-5 text-[15px] focus:outline-none transition-all resize-none"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  caretColor: '#01A3C5',
                }}
                onFocus={e => { e.target.style.border = '1px solid rgba(1,163,197,0.7)'; e.target.style.boxShadow = '0 0 0 3px rgba(1,163,197,0.12)'; }}
                onBlurCapture={e => { e.target.style.border = '1px solid rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Submit Button — blue-to-orange gradient */}
            <button
              type="submit"
              className="w-full h-[64px] text-white font-semibold text-[17px] sm:text-[18px] rounded-[12px] flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer group active:scale-[0.995]"
              style={{
                background: 'linear-gradient(100deg, #01A3C5 0%, #0280a0 40%, #c2560a 100%)',
                boxShadow: '0 4px 24px rgba(1,163,197,0.30)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 32px rgba(1,163,197,0.45), 0 2px 12px rgba(249,115,22,0.20)'; e.currentTarget.style.filter = 'brightness(1.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(1,163,197,0.30)'; e.currentTarget.style.filter = 'none'; }}
            >
              <span>Start the conversation</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.90)"
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