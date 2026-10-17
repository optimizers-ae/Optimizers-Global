import React from 'react';

// ── Emirates Data ───────────────────────────────────────────────────────────
const EMIRATES_DATA = [
  // First Row: 4 Cards
  {
    id: 'dubai',
    number: '01',
    name: 'Dubai',
    category: 'HQ AND PRIMARY MARKET',
    description:
      "Dubai is our home base and the UAE's most competitive digital market. We deliver SEO, Google Ads, social media, and web development across every industry, from Downtown and Business Bay to JLT, Dubai Marina, and Al Quoz.",
    hasOrangeAccent: true,
  },
  {
    id: 'abu-dhabi',
    number: '02',
    name: 'Abu Dhabi',
    category: 'CAPITAL REGION',
    description:
      "Abu Dhabi's corporate, government, and tourism sectors demand a specific approach. We understand the market dynamics and build campaigns that match how Abu Dhabi buyers and businesses search and decide.",
    hasOrangeAccent: false,
  },
  {
    id: 'sharjah',
    number: '03',
    name: 'Sharjah',
    category: 'CULTURAL AND COMMERCIAL HUB',
    description:
      'Sharjah is a fast-growing market for education, retail, and manufacturing. Our local SEO and paid media strategies reflect how Sharjah consumers search and what influences purchasing decisions.',
    hasOrangeAccent: false,
  },
  {
    id: 'ajman',
    number: '04',
    name: 'Ajman',
    category: 'EMERGING MARKET',
    description:
      "Ajman's business community is growing across retail, real estate, and services. We help local businesses get found online and build a presence that competes across emirate borders.",
    hasOrangeAccent: true,
  },
  // Second Row: 3 Cards (Wider)
  {
    id: 'ras-al-khaimah',
    number: '05',
    name: 'Ras Al Khaimah',
    category: 'NORTHERN UAE',
    description:
      "RAK's tourism growth, industrial expansion, and local development create opportunities for strong digital marketing. We run SEO, paid media, and social campaigns for local and international audiences.",
    hasOrangeAccent: true,
  },
  {
    id: 'fujairah',
    number: '06',
    name: 'Fujairah',
    category: 'EAST COAST',
    description:
      "Fujairah's port economy and tourism sector are expanding. We serve businesses with SEO, social media, and performance campaigns built for the East Coast market and its distinct buyer audience.",
    hasOrangeAccent: true,
  },
  {
    id: 'umm-al-quwain',
    number: '07',
    name: 'Umm Al Quwain',
    category: 'NORTHERN EMIRATES',
    description:
      'Businesses in Umm Al Quwain benefit from marketing that captures local buyers and reaches neighboring emirates. We create campaigns that work without being location-limited.',
    hasOrangeAccent: true,
  },
];

// ── Top-Left Circular Icons ────────────────────────────────────────────────
function EmirateCircularIcon({ id }) {
  switch (id) {
    case 'dubai':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Burj Khalifa icon */}
          <line x1="12" y1="2" x2="12" y2="7" />
          <path d="M11 7h2v3h-2z" />
          <path d="M10 10h4v4h-4z" />
          <path d="M9 14h6v5h-6z" />
          <line x1="7" y1="22" x2="17" y2="22" />
          <line x1="8" y1="19" x2="8" y2="22" />
          <line x1="16" y1="19" x2="16" y2="22" />
        </svg>
      );
    case 'abu-dhabi':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Mosque Dome Icon */}
          <path d="M12 3v2" />
          <path d="M7 11c0-3 2.2-5 5-5s5 2 5 5v5H7v-5z" />
          <path d="M4 10v6h2v-6H4z" />
          <path d="M18 10v6h2v-6h-2z" />
          <line x1="3" y1="20" x2="21" y2="20" />
          <path d="M10 16v4h4v-4" />
        </svg>
      );
    case 'sharjah':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Cultural Dome Icon */}
          <circle cx="12" cy="5" r="1" />
          <path d="M6 13c0-3.5 2.7-6 6-6s6 2.5 6 6v5H6v-5z" />
          <path d="M10 18v-3a2 2 0 0 1 4 0v3" />
          <line x1="4" y1="20" x2="20" y2="20" />
        </svg>
      );
    case 'ajman':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Fort Tower Icon */}
          <path d="M7 5h2v2h2V5h2v2h2V5h2v5H7V5z" />
          <path d="M8 10v10h8V10" />
          <path d="M10 20v-4h4v4" />
          <line x1="5" y1="21" x2="19" y2="21" />
        </svg>
      );
    case 'ras-al-khaimah':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Mountain Peaks Icon */}
          <path d="M3 19l6-11 5 8 3-4 4 7H3z" />
          <path d="M8 10l3 4" />
        </svg>
      );
    case 'fujairah':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Palm Tree Icon */}
          <path d="M12 21v-8" />
          <path d="M12 13c-1.5-3-5-3.5-7-2 2.5 2.5 4 2.5 7 2z" />
          <path d="M12 13c1.5-3 5-3.5 7-2-2.5 2.5-4 2.5-7 2z" />
          <path d="M12 11c-2-3-4-5-8-4 3 3 5 4 8 4z" />
          <path d="M12 11c2-3 4-5 8-4-3 3-5 4-8 4z" />
          <path d="M12 8c0-3 1-5 2-6-1 2-1 4-2 6z" />
        </svg>
      );
    case 'umm-al-quwain':
      return (
        <svg className="w-5 h-5 text-[#00C8E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Heritage Castle Icon */}
          <path d="M4 8h3v2h2V8h2v2h2V8h2v2h2V8h3v12H4V8z" />
          <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
          <circle cx="8" cy="13" r="1" />
          <circle cx="16" cy="13" r="1" />
        </svg>
      );
    default:
      return null;
  }
}

// ── Architectural Background Line-Art SVGs ─────────────────────────────────
function ArchitecturalLineArt({ id }) {
  switch (id) {
    case 'dubai':
      return (
        <svg
          className="absolute bottom-0 right-1 w-[165px] sm:w-[180px] h-[180px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 180 180"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Burj Khalifa Needle & Spire */}
          <line x1="120" y1="12" x2="120" y2="40" strokeWidth="1.4" />
          {/* Tier setbacks */}
          <path d="M117 40h6v18h-6z" />
          <line x1="117" y1="46" x2="123" y2="46" />
          <line x1="117" y1="52" x2="123" y2="52" />
          <path d="M113 58h14v24h-14z" />
          <line x1="113" y1="64" x2="127" y2="64" />
          <line x1="113" y1="70" x2="127" y2="70" />
          <line x1="113" y1="76" x2="127" y2="76" />
          <path d="M108 82h24v32h-24z" />
          <line x1="108" y1="90" x2="132" y2="90" />
          <line x1="108" y1="98" x2="132" y2="98" />
          <line x1="108" y1="106" x2="132" y2="106" />
          <path d="M102 114h36v66h-36z" />
          <line x1="102" y1="124" x2="138" y2="124" />
          <line x1="102" y1="134" x2="138" y2="134" />
          <line x1="102" y1="144" x2="138" y2="144" />
          <line x1="102" y1="154" x2="138" y2="154" />
          <line x1="102" y1="164" x2="138" y2="164" />
          <line x1="102" y1="174" x2="138" y2="174" />
          <line x1="120" y1="114" x2="120" y2="180" strokeWidth="0.8" />
          {/* Flanking Downtown Skyscrapers */}
          <path d="M60 110l18-12v82H60z" />
          <line x1="66" y1="114" x2="66" y2="180" strokeWidth="0.8" />
          <line x1="72" y1="110" x2="72" y2="180" strokeWidth="0.8" />
          <line x1="60" y1="130" x2="78" y2="130" />
          <line x1="60" y1="150" x2="78" y2="150" />
          <line x1="60" y1="170" x2="78" y2="170" />
          <path d="M82 125h16v55H82z" />
          <line x1="90" y1="125" x2="90" y2="180" strokeWidth="0.8" />
          <line x1="82" y1="145" x2="98" y2="145" />
          <line x1="82" y1="165" x2="98" y2="165" />
          <path d="M142 128h22v52h-22z" />
          <line x1="142" y1="142" x2="164" y2="142" />
          <line x1="142" y1="158" x2="164" y2="158" />
          <line x1="153" y1="128" x2="153" y2="180" strokeWidth="0.8" />
          {/* Base ground line */}
          <line x1="45" y1="180" x2="175" y2="180" strokeWidth="1.5" />
        </svg>
      );

    case 'abu-dhabi':
      return (
        <svg
          className="absolute bottom-0 right-1 w-[185px] sm:w-[200px] h-[170px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 200 170"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Sheikh Zayed Grand Mosque Center Dome */}
          <line x1="100" y1="42" x2="100" y2="34" />
          <circle cx="100" cy="32" r="2.5" />
          <path d="M82 92c0-20 8-32 18-34 10 2 18 14 18 34" />
          {/* Center dome ribs */}
          <path d="M92 92c0-15 4-25 8-27" strokeWidth="0.8" />
          <path d="M108 92c0-15-4-25-8-27" strokeWidth="0.8" />
          {/* Left Dome */}
          <line x1="58" y1="64" x2="58" y2="58" />
          <circle cx="58" cy="56" r="2" />
          <path d="M46 95c0-14 5-22 12-24 7 2 12 10 12 24" />
          {/* Right Dome */}
          <line x1="142" y1="64" x2="142" y2="58" />
          <circle cx="142" cy="56" r="2" />
          <path d="M130 95c0-14 5-22 12-24 7 2 12 10 12 24" />
          {/* Left Minaret */}
          <line x1="22" y1="35" x2="22" y2="18" strokeWidth="1.4" />
          <path d="M18 35l4-8 4 8h-8z" />
          <path d="M17 35h10v12H17z" />
          <path d="M16 47h12v4H16z" />
          <path d="M18 51h8v45h-8z" />
          <path d="M16 96h12v4H16z" />
          <path d="M17 100h10v70H17z" />
          <line x1="22" y1="100" x2="22" y2="170" strokeWidth="0.8" />
          {/* Right Minaret */}
          <line x1="178" y1="35" x2="178" y2="18" strokeWidth="1.4" />
          <path d="M174 35l4-8 4 8h-8z" />
          <path d="M173 35h10v12h-10z" />
          <path d="M172 47h12v4h-12z" />
          <path d="M174 51h8v45h-8z" />
          <path d="M172 96h12v4h-12z" />
          <path d="M173 100h10v70h-10z" />
          <line x1="178" y1="100" x2="178" y2="170" strokeWidth="0.8" />
          {/* Colonnade & Islamic Arches Base */}
          <line x1="28" y1="95" x2="172" y2="95" strokeWidth="1.3" />
          <line x1="28" y1="103" x2="172" y2="103" strokeWidth="1" />
          {/* Row of Arches */}
          <path d="M35 170v-42c0-8 6-14 12-14s12 6 12 14v42" />
          <path d="M65 170v-42c0-8 6-14 12-14s12 6 12 14v42" />
          <path d="M95 170v-48c0-10 8-16 16-16s16 6 16 16v48" />
          <path d="M133 170v-42c0-8 6-14 12-14s12 6 12 14v42" />
          {/* Base Ground */}
          <line x1="10" y1="170" x2="190" y2="170" strokeWidth="1.5" />
        </svg>
      );

    case 'sharjah':
      return (
        <svg
          className="absolute bottom-0 right-1 w-[185px] sm:w-[200px] h-[170px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 200 170"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Sharjah Mosque Dome */}
          <line x1="100" y1="36" x2="100" y2="28" />
          <circle cx="100" cy="26" r="2.5" />
          <path d="M78 88c0-22 10-36 22-38 12 2 22 16 22 38" />
          <path d="M88 88c0-16 6-28 12-30" strokeWidth="0.8" />
          <path d="M112 88c0-16-6-28-12-30" strokeWidth="0.8" />
          {/* Slender Minaret 1 */}
          <line x1="42" y1="32" x2="42" y2="16" strokeWidth="1.4" />
          <path d="M39 32l3-8 3 8h-6z" />
          <path d="M38 32h8v16h-8z" />
          <path d="M36 48h12v4H36z" />
          <path d="M38 52h8v50h-8z" />
          <path d="M35 102h14v4H35z" />
          <path d="M37 106h10v64H37z" />
          {/* Slender Minaret 2 */}
          <line x1="158" y1="32" x2="158" y2="16" strokeWidth="1.4" />
          <path d="M155 32l3-8 3 8h-6z" />
          <path d="M154 32h8v16h-8z" />
          <path d="M152 48h12v4h-12z" />
          <path d="M154 52h8v50h-8z" />
          <path d="M151 102h14v4h-14z" />
          <path d="M153 106h10v64h-10z" />
          {/* Islamic Facade with Geometric Lattice */}
          <line x1="46" y1="92" x2="154" y2="92" strokeWidth="1.3" />
          <path d="M54 92v78" />
          <path d="M146 92v78" />
          {/* Center Grand Portal */}
          <path d="M75 170v-50c0-14 11-22 25-22s25 8 25 22v50" strokeWidth="1.3" />
          <path d="M82 170v-44c0-10 8-16 18-16s18 6 18 16v44" strokeWidth="0.9" />
          {/* Decorative Lattice cross-hatching */}
          <line x1="88" y1="120" x2="112" y2="120" strokeWidth="0.8" />
          <line x1="88" y1="130" x2="112" y2="130" strokeWidth="0.8" />
          <line x1="88" y1="140" x2="112" y2="140" strokeWidth="0.8" />
          {/* Ground Line */}
          <line x1="20" y1="170" x2="180" y2="170" strokeWidth="1.5" />
        </svg>
      );

    case 'ajman':
      return (
        <svg
          className="absolute bottom-0 right-1 w-[180px] sm:w-[190px] h-[170px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 190 170"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Ajman Fort Watchtower */}
          {/* Round crenellations / battlements */}
          <path d="M112 40h6v6h4v-6h6v6h4v-6h6v6h4v-6h6v12h-36V40z" strokeWidth="1.3" />
          <path d="M114 52h32v8h-32z" />
          {/* Tower shaft tapering downward */}
          <path d="M115 60l-3 110h38l-3-110z" strokeWidth="1.2" />
          {/* Observation slits and windows */}
          <rect x="127" y="72" width="6" height="12" rx="2" />
          <rect x="127" y="100" width="6" height="14" rx="2" />
          <circle cx="130" cy="132" r="3" />
          {/* Flagpole on tower */}
          <line x1="144" y1="40" x2="144" y2="20" strokeWidth="1.2" />
          <path d="M144 20l14 4-14 5v-9z" fill="rgba(0,200,232,0.15)" strokeWidth="1" />
          {/* Rampart Fortress Wall on Left */}
          <path d="M50 110h6v5h5v-5h6v5h5v-5h6v5h5v-5h6v5h5v-5h6v60H50v-60z" strokeWidth="1.2" />
          {/* Wooden Arched Gate */}
          <path d="M68 170v-30c0-8 6-14 14-14s14 6 14 14v30" strokeWidth="1.2" />
          <line x1="82" y1="126" x2="82" y2="170" strokeWidth="0.8" />
          <line x1="68" y1="145" x2="96" y2="145" strokeWidth="0.8" />
          {/* Ground Line */}
          <line x1="30" y1="170" x2="175" y2="170" strokeWidth="1.5" />
        </svg>
      );

    case 'ras-al-khaimah':
      return (
        <svg
          className="absolute bottom-0 right-0 w-[220px] sm:w-[240px] h-[160px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 240 160"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Jebel Jais Grand Mountain Peaks */}
          {/* Distant Highest Peak */}
          <path d="M80 160l48-115 32 60 22-35 58 90H80z" strokeWidth="1.3" />
          {/* Mountain Contour Strata Lines */}
          <path d="M128 45l-12 35-18 25" strokeWidth="0.8" />
          <path d="M128 45l18 35 14 25" strokeWidth="0.8" />
          <path d="M182 70l-8 28-14 22" strokeWidth="0.8" />
          <path d="M182 70l14 30 18 20" strokeWidth="0.8" />
          {/* Foreground Rugged Mountain Ridge */}
          <path d="M20 160l65-80 35 38 45-52 45 50 30-22v66H20z" strokeWidth="1.4" />
          <path d="M85 80l-20 40-15 40" strokeWidth="0.9" />
          <path d="M85 80l22 28" strokeWidth="0.9" />
          <path d="M165 66l-18 38-12 56" strokeWidth="0.9" />
          <path d="M165 66l22 36 18 58" strokeWidth="0.9" />
          {/* Mountain Pass Road / Switchback curves */}
          <path d="M40 155c25-8 45-2 65-10s35-2 55-8 30-4 40-8" strokeWidth="0.8" strokeDasharray="3 3" />
          {/* Coastal Shoreline Waves */}
          <path d="M10 158c20-2 35 2 55-1s35-2 55 1 40-2 60 1 35-2 55 1" strokeWidth="1" />
        </svg>
      );

    case 'fujairah':
      return (
        <svg
          className="absolute bottom-0 right-0 w-[220px] sm:w-[240px] h-[160px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 240 160"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Hajar Mountains Backdrop */}
          <path d="M30 160l50-80 35 40 40-55 45 50 40H30z" strokeWidth="1.2" />
          <path d="M80 80l18 26-10 54" strokeWidth="0.8" />
          <path d="M155 65l18 28 12 67" strokeWidth="0.8" />
          {/* Large Date Palm Tree 1 */}
          <path d="M190 160c-2-25 0-55 8-75" strokeWidth="2" />
          {/* Palm Fronds */}
          <path d="M198 85c-8-12-24-12-34-4 12 8 22 8 34 4z" strokeWidth="1" />
          <path d="M198 85c-4-16-16-24-28-20 8 12 18 16 28 20z" strokeWidth="1" />
          <path d="M198 85c8-18 22-22 30-14-10 10-18 16-30 14z" strokeWidth="1" />
          <path d="M198 85c12-10 28-6 34 6-12 4-22 2-34-6z" strokeWidth="1" />
          <path d="M198 85c0-18 8-28 14-30-2 12-4 22-14 30z" strokeWidth="1" />
          {/* Palm Tree 2 (Smaller) */}
          <path d="M165 160c-1-18 1-38 6-50" strokeWidth="1.6" />
          <path d="M171 110c-6-8-18-8-25-2 9 6 16 6 25 2z" strokeWidth="0.9" />
          <path d="M171 110c6-12 18-14 24-8-8 7-14 11-24 8z" strokeWidth="0.9" />
          <path d="M171 110c-2-12-12-16-20-13 6 8 13 11 20 13z" strokeWidth="0.9" />
          {/* Coastal water ripples & East Coast sea */}
          <line x1="20" y1="156" x2="230" y2="156" strokeWidth="1.2" />
          <path d="M40 148c15-2 30 2 45-1s25-2 40 1" strokeWidth="0.8" />
        </svg>
      );

    case 'umm-al-quwain':
      return (
        <svg
          className="absolute bottom-0 right-1 w-[185px] sm:w-[200px] h-[170px] pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300 z-0"
          viewBox="0 0 200 170"
          fill="none"
          stroke="#00C8E8"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Historical Stone Watchtower */}
          {/* Crenellations */}
          <path d="M130 52h5v5h4v-5h5v5h4v-5h5v5h4v-5h5v10h-32V52z" strokeWidth="1.3" />
          <path d="M132 62h28v6h-28z" />
          {/* Tower shaft */}
          <path d="M133 68l-3 102h34l-3-102z" strokeWidth="1.2" />
          {/* Loopholes / Windows */}
          <rect x="144" y="80" width="5" height="10" rx="1.5" />
          <rect x="144" y="104" width="5" height="12" rx="1.5" />
          <circle cx="146.5" cy="132" r="2.5" />
          {/* Date Palm Next to Tower */}
          <path d="M182 170c-2-22-1-48 4-65" strokeWidth="1.8" />
          <path d="M186 105c-6-10-18-10-26-3 9 6 17 6 26 3z" strokeWidth="0.9" />
          <path d="M186 105c6-14 18-16 25-10-9 8-15 13-25 10z" strokeWidth="0.9" />
          <path d="M186 105c-3-14-12-20-22-16 7 10 14 13 22 16z" strokeWidth="0.9" />
          <path d="M186 105c0-14 6-22 10-24-1 10-2 18-10 24z" strokeWidth="0.9" />
          {/* Coastal Shoreline and Water Lines */}
          <line x1="60" y1="170" x2="195" y2="170" strokeWidth="1.5" />
          <path d="M70 162c15-2 30 2 45-1s25-2 40 1" strokeWidth="0.8" />
        </svg>
      );

    default:
      return null;
  }
}

// ── Reusable Emirate Card Component ─────────────────────────────────────────
function EmirateCard({ emirate, isWide = false }) {
  return (
    <article
      className="group relative flex flex-col justify-between rounded-[20px] border border-[#00C8E8]/50 bg-[#06151D] p-6 sm:p-7 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#00C8E8] shadow-[0_4px_20px_rgba(2,12,16,0.6),0_0_15px_rgba(0,200,232,0.06)] hover:shadow-[0_16px_36px_rgba(0,200,232,0.18)] min-h-[295px] sm:min-h-[310px]"
    >
      {/* ── Orange Top-Left Corner Accent & Glow ── */}
      {emirate.hasOrangeAccent && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 -left-8 w-24 h-24 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 121, 0, 0.45) 0%, rgba(255, 121, 0, 0.12) 45%, transparent 70%)',
              filter: 'blur(16px)',
            }}
          />
          {/* Precise Orange Corner Outline Accent */}
          <svg
            className="absolute top-0 left-0 w-14 h-14 pointer-events-none z-20"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path
              d="M 0 28 L 0 20 C 0 8.954 8.954 0 20 0 L 28 0"
              stroke="#FF7900"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </>
      )}

      {/* ── Lower-Right Cyan Atmospheric Glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 232, 0.24) 0%, rgba(0, 200, 232, 0.05) 50%, transparent 70%)',
          filter: 'blur(22px)',
        }}
      />

      {/* ── Large Semi-Transparent Number (Pinned at Top-Right) ── */}
      <span className="absolute top-5 right-5 sm:top-6 sm:right-6 font-neue text-[38px] sm:text-[42px] font-black tracking-tight text-[#3B5B6B]/40 group-hover:text-[#00C8E8]/35 transition-colors duration-300 select-none leading-none pointer-events-none z-10">
        {emirate.number}
      </span>

      {/* ── Architectural Line-Art SVG in Background ── */}
      <ArchitecturalLineArt id={emirate.id} />

      {/* ── Card Content Container (z-10 ensures full readability) ── */}
      <div className={`relative z-10 flex flex-col h-full justify-between ${isWide ? 'lg:max-w-[62%]' : ''}`}>
        {/* Top Header Row: Circular Icon */}
        <div className="flex items-center justify-between mb-4">
          {/* Circular Cyan Outline Icon */}
          <div className="w-10 h-10 rounded-full border border-[#00C8E8] bg-[#020C10]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_12px_rgba(0,200,232,0.25)] group-hover:scale-105 transition-transform duration-300">
            <EmirateCircularIcon id={emirate.id} />
          </div>
        </div>

        {/* Emirate City Name & Small Cyan Category Label */}
        <div className="mb-2.5">
          <h3 className="font-neue text-[21px] sm:text-[23px] font-bold text-white tracking-tight leading-snug">
            {emirate.name}
          </h3>
          <p className="text-[#00C8E8] text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase font-neue mt-1">
            {emirate.category}
          </p>
        </div>

        {/* Supporting Description with Clean Readability */}
        <p className="text-[#91A5B1] text-[12px] sm:text-[12.5px] leading-[1.65] font-normal font-poppins mt-auto">
          {emirate.description}
        </p>
      </div>
    </article>
  );
}

// ── Main Export Component ──────────────────────────────────────────────────
export default function UAEFootprintSection() {
  const row1 = EMIRATES_DATA.slice(0, 4); // 4 Cards
  const row2 = EMIRATES_DATA.slice(4, 7); // 3 Cards (Wider)

  return (
    <section
      id="our-coverage"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Subtle Technical Grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #00C8E8 1px, transparent 1px), linear-gradient(to bottom, #00C8E8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Background Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-[-8%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 232, 0.08) 0%, rgba(0, 200, 232, 0.01) 45%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-6%] w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.06) 0%, rgba(255, 121, 0, 0.01) 45%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* ── Main Section Container (1440px max) ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* ══════════════════════════════════════════════════════════════
            UPPER AREA: HEADING (LEFT) & SUPPORTING DESCRIPTION (RIGHT)
           ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 sm:gap-10 mb-12 sm:mb-14 lg:mb-16">
          {/* Top-Left: Small Uppercase Cyan Label + Main Headline */}
          <div className="max-w-[700px]">
            {/* Small Label with Horizontal Cyan Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#00C8E8] shrink-0" />
              <p className="text-[#00C8E8] text-[11.5px] sm:text-[12px] font-bold tracking-[0.22em] uppercase font-neue">
                OUR COVERAGE
              </p>
            </div>

            {/* Main Editorial Headline — Exact Line Composition */}
            <h2 className="font-neue font-black text-[46px] sm:text-[56px] md:text-[64px] lg:text-[70px] leading-[1.04] tracking-[-0.035em]">
              <span className="block text-white">Digital</span>
              <span className="block text-white">marketing</span>
              <span className="block text-white">services across</span>
              <span className="block text-[#00C8E8]">all 7 UAE</span>
              <span className="block text-[#00C8E8]">Emirates</span>
            </h2>
          </div>

          {/* Center-Right: Supporting Paragraph with Cyan / Orange Accent Divider */}
          <div className="lg:max-w-[480px] flex items-start gap-4 pb-2 lg:pb-3">
            {/* Thin vertical line with vibrant orange accent */}
            <div className="flex flex-col items-center shrink-0 self-stretch py-1 w-2">
              <div className="w-[1.5px] h-3 bg-[#00C8E8]/35" />
              <div className="w-[3px] h-8 bg-[#FF7900] rounded-full my-0.5 shadow-[0_0_12px_rgba(255,121,0,0.8)]" />
              <div className="w-[1.5px] flex-1 min-h-[26px] bg-[#00C8E8]/25" />
            </div>

            <p className="text-[#91A5B1] text-[14px] sm:text-[14.5px] lg:text-[15px] leading-[1.68] font-normal font-poppins">
              We are a UAE-based agency with on-ground experience in every emirate. Your location is where your buyers live, your competitors operate, and your local search presence needs to be strongest. We bring emirate-specific knowledge to every campaign.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            LOWER AREA: SEVEN EMIRATES CARD GRID (4 + 3 ARRANGEMENT)
           ══════════════════════════════════════════════════════════════ */}
        <div className="space-y-4 sm:space-y-5">
          {/* Row 1 — Four Cards (Dubai, Abu Dhabi, Sharjah, Ajman) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {row1.map((emirate) => (
              <EmirateCard key={emirate.id} emirate={emirate} isWide={false} />
            ))}
          </div>

          {/* Row 2 — Three Wider Cards (Ras Al Khaimah, Fujairah, Umm Al Quwain) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {row2.map((emirate) => (
              <EmirateCard key={emirate.id} emirate={emirate} isWide={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Named alias export as well
export { UAEFootprintSection as UAECoverageSection };
