export const mainNavItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/#services', isDropdown: true },
  { label: 'Contact', path: '/contact' },
];

export const servicesDropdownData = [
  {
    category: '1. Web Development',
    slug: 'web-development',
    items: [
      { label: 'WordPress Development', path: '/services/wordpress-development' },
      { label: 'Shopify Development', path: '/services/shopify-development' },
      { label: 'Custom Web Development', path: '/services/custom-web-development' },
    ],
  },
  {
    category: '2. Search Engine Optimization (SEO)',
    slug: 'seo',
    items: [
      { label: 'On Page SEO', path: '/services/on-page-seo' },
      { label: 'OFF-PAGE SEO', path: '/services/off-page-seo' },
      { label: 'International SEO Services', path: '/services/international-seo' },
      { label: 'Local SEO Service', path: '/services/local-seo' },
      { label: 'E-Commerce SEO Services', path: '/services/e-commerce-seo' },
      { label: 'Semantic Content Writing Services', path: '/services/semantic-content-writing' },
      { label: 'Keyword Research', path: '/services/keyword-research' },
      { label: 'AI SEO SERVICES (AEO / GEO / LLM SEO)', path: '/services/ai-seo' },
      { label: 'TECHNICAL SEO', path: '/services/technical-seo' },
    ],
  },
  {
    category: '3. Social Media Marketing',
    slug: 'social-media-marketing',
    items: [
      { label: 'Facebook Marketing', path: '/services/facebook-marketing' },
      { label: 'Instagram Marketing', path: '/services/instagram-marketing' },
      { label: 'Snapchat Marketing', path: '/services/snapchat-marketing' },
      { label: 'TikTok Marketing', path: '/services/tiktok-marketing' },
      { label: 'YouTube Marketing', path: '/services/youtube-marketing' },
      { label: 'LinkedIn Marketing', path: '/services/linkedin-marketing' },
    ],
  },
  {
    category: '4. Performance Marketing Service',
    slug: 'performance-marketing',
    items: [
      { label: 'Social Media Ads', path: '/services/social-media-ads' },
      { label: 'WhatsApp Marketing', path: '/services/whatsapp-marketing' },
      { label: 'Email Marketing', path: '/services/email-marketing' },
      { label: 'Google Ads', path: '/services/google-ads' },
    ],
  },
  {
    category: '5. Branding & Design Services',
    slug: 'branding-design',
    items: [
      { label: 'Business Branding & Designing', path: '/services/business-branding-designing' },
      { label: 'Graphic Designing', path: '/services/graphic-designing' },
      { label: 'Content Creation & Reels', path: '/services/content-creation-reels' },
      { label: 'Video Editing', path: '/services/video-editing' },
    ],
  },
];
