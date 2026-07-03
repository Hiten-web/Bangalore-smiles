/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PatientReview {
  id: string;
  name: string;
  age: number;
  role: string;
  avatarSeed: string;
  stars: number;
  title: string;
  transformation: string;
  narrative: string;
  treatmentReceived: string;
  clinicalHighlight: string;
}

export interface TechItem {
  id: string;
  name: string;
  brand: string;
  experienceBenefit: string;
  clinicalMetric: string;
  description: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  painIndex: string;
  experienceType: string;
  longDescription: string;
  keyBenefits: string[];
}

export interface GallerySpace {
  id: string;
  title: string;
  subtitle: string;
  psychologicalTrigger: string;
  designHighlights: string[];
  description: string;
  imageUrl: string;
}

export const CLINIC_INFO = {
  brandName: "Bangalore Smiles Dental Care",
  leadSpecialist: {
    name: "Dr. Neha Singh",
    credentials: "MDS, Orthodontics & Invisalign Specialist",
    experience: "13+ Years of Clinical Artistry",
    bio: "Dr. Neha Singh is a highly revered Orthodontist and certified Invisalign specialist. Renowned for her meticulous handcraft, she combines facial esthetics with cutting-edge orthodontic frameworks to engineer perfectly proportioned, life-changing smiles. Her patient-first, laser-focused clinical precision has earned the clinic a stellar, undefeated 5-star reputation."
  },
  contact: {
    phone: "+91 9731212098",
    email: "concierge@bangaloresmiles.luxury",
    address: "Number 59, First Floor, Fourth Cross, 80 Feet Road, MCECHS Layout, Dr. Shivarama Karanth Nagar, Rachenahalli, RK Hegde Nagar, Bengaluru, Karnataka 560077",
    landmark: "Next to Rachenahalli Lake junction, RK Hegde Nagar vicinity",
    hours: "Monday - Saturday: 10:00 AM - 8:00 PM | Sunday: By Private Appointment Only"
  },
  metrics: {
    reviewsCount: 647,
    rating: "5.0 / 5.0",
    successRate: "99.8%",
    caseCompleted: "4,500+"
  }
};

export const COLOR_PALETTE = {
  obsidian: {
    hex: "#0A0A0B",
    name: "Obsidian Black Ink",
    role: "Primary background canvas representing absolute luxury, sterile prestige, and quiet confidence."
  },
  gold: {
    hex: "#C5A059",
    name: "Luxury Polished Gold",
    role: "Primary highlight representing high craftsmanship, bespoke artistry, and premium care standards."
  },
  neutral: {
    hex: "#F8FAFC",
    name: "Pristine Pearl Clinical",
    role: "Secondary background and typography canvas representing absolute cleanliness, safety, and high-fidelity lighting."
  }
};

export const REVIEWS: PatientReview[] = [
  {
    id: "review-1",
    name: "Rohan Sen",
    age: 34,
    role: "Senior Director of Engineering, Tech Unicorn",
    avatarSeed: "rohan",
    stars: 5,
    title: "An Absolute Game-Changer for Busy Professionals",
    transformation: "Severe crowding corrected in 8 months with customized clear aligners.",
    narrative: "Being in tech leadership, my days are back-to-back meetings and global travel. Dr. Neha designed an ultra-efficient Invisalign itinerary that fit my lifestyle flawlessly. The use of 3D digital scanning meant I never had to suffer through messy, uncomfortable silicone paste. Her orthopedic precision is world-class, and she respected my time perfectly. I saw visible shifts within 6 weeks, and my teeth are now perfectly straight. Seamless, pain-free, and hyper-professional.",
    treatmentReceived: "Invisalign Premium SmartTrack",
    clinicalHighlight: "100% Digital workflow with iTero 5D modeling"
  },
  {
    id: "review-2",
    name: "Anya Kovalenko",
    age: 29,
    role: "International Expat & Creative Director",
    avatarSeed: "anya",
    stars: 5,
    title: "World-Class Cosmetic Artistry",
    transformation: "Bespoke smile makeover utilizing metal-free lithium disilicate crowns and laser gum symmetry.",
    narrative: "I fly in from London for my treatments, and I can say Dr. Neha’s clinical artistry surpasses clinics I’ve visited in Western Europe. I needed a complete smile makeover to correct an asymmetrical bite and uneven gum line. She took the time to map my entire facial harmony using Digital Smile Design. The result is stunning: metal-free premium ceramic crowns that capture light exactly like natural enamel. The care here is bespoke hospitality at its absolute finest.",
    treatmentReceived: "Digital Smile Design (DSD) & Premium Veneers",
    clinicalHighlight: "Custom-shaded lithium disilicate (E-Max) restorations"
  },
  {
    id: "review-3",
    name: "Mrs. Sarala Murthy",
    age: 67,
    role: "Retired Professor of Humanities",
    avatarSeed: "sarala",
    stars: 5,
    title: "Gentle, Painless, and Deeply Empathetic Care",
    transformation: "Full mouth rehabilitation using pain-free laser gum contouring and ceramic bridging.",
    narrative: "I have had severe dental phobia for over forty years, which led to a neglected bite and gum issues. Dr. Neha changed everything. She treated me like family. Her state-of-the-art Waterlase laser system meant my deep gum cleaning and tissue adjustment were entirely needle-free, silent, and bloodless. I felt zero heat and zero vibration. She explains every single movement with absolute warmth. For the first time in decades, I feel confident eating and laughing. She is an angel.",
    treatmentReceived: "Laser-Assisted Periodontal Therapy & Bridges",
    clinicalHighlight: "Waterlase iPlus Er,Cr:YSGG dental laser treatment"
  },
  {
    id: "review-4",
    name: "Vikram Malhotra",
    age: 41,
    role: "Managing Partner, Early-Stage Venture Capital",
    avatarSeed: "vikram",
    stars: 5,
    title: "Clinical Excellence Meets Private Lounge Comfort",
    transformation: "Advanced bone-guided implant placement and tooth replacement.",
    narrative: "I evaluate state-of-the-art technology for a living, and the setup at Bangalore Smiles is pristine. Dr. Neha operates with rare technical mastery. My single tooth replacement was planned on a 3D CBCT bone scan and guided with microscopic accuracy. There was virtually no swelling and I was back at work the very next morning. The clinic feels like a premium private lounge rather than a sterile hospital—absolute luxury, top-tier privacy, and outstanding precision.",
    treatmentReceived: "Computer-Guided Implant with Zirconia Crown",
    clinicalHighlight: "3D CBCT guided surgical placement"
  },
  {
    id: "review-5",
    name: "Aditi Rao",
    age: 24,
    role: "Bharatanatyam Artist & Performer",
    avatarSeed: "aditi",
    stars: 5,
    title: "The Ultimate Destination for Smile Aesthetics",
    transformation: "Non-extraction orthodontic realignment with aesthetic micro-contouring.",
    narrative: "As a classical dancer, facial expressions are my primary medium of performance. I had a prominent snaggletooth and minor gaps that made me self-conscious under stage lights. Dr. Neha mapped out a non-extraction plan that broadened my smile arch beautifully. She combined Invisalign with subtle tooth contouring to create absolute balance. Her artistic eye for dental proportions is phenomenal. I can now perform with complete, radiant confidence on stage.",
    treatmentReceived: "Orthodontic Arch Expansion & Polish",
    clinicalHighlight: "Micro-aesthetic tooth contouring"
  }
];

export const TECHNOLOGIES: TechItem[] = [
  {
    id: "tech-itero",
    name: "iTero Element 5D",
    brand: "Align Technology, USA",
    experienceBenefit: "No messy, gag-inducing silicone impressions. Capture 6,000 frames per second of your bite comfortably.",
    clinicalMetric: "60-Second Real-Time 3D Dental Map with Near-Infrared Imaging for cavity screening.",
    description: "An intraoral scanner that maps your teeth in full 3D, projecting a real-time, highly accurate model of your jaw structure. Used to simulate your exact orthodontic transformation before treatment starts."
  },
  {
    id: "tech-waterlase",
    name: "Waterlase iPlus Laser",
    brand: "Biolase, USA",
    experienceBenefit: "No loud drills, no vibration, and often no local anesthesia needles required. Healing is twice as fast.",
    clinicalMetric: "HydroPhotonic technology combines water droplets and laser energy for heat-free soft and hard tissue shaping.",
    description: "An advanced laser system that cuts teeth, bone, and soft tissue without the heat or micro-fractures associated with traditional metal drills, ensuring a virtually pain-free, sterile treatment environment."
  },
  {
    id: "tech-dsd",
    name: "Digital Smile Design",
    brand: "DSD Global Architecture",
    experienceBenefit: "Co-author your own smile. See high-definition cinematic simulations of your future face and smile before we begin.",
    clinicalMetric: "Bespoke mathematical modeling aligning tooth contours with your unique pupillary and facial midline proportions.",
    description: "A state-of-the-art visual planning framework that uses high-speed digital portraits and structural analysis to customize tooth height, width, and alignment relative to your natural facial expressions."
  },
  {
    id: "tech-cbct",
    name: "Ultra-low CBCT 3D Imaging",
    brand: "Carestream Dental, France",
    experienceBenefit: "Ultra-fast, comfortable scanning standing up, with 90% less radiation than standard medical CT scanners.",
    clinicalMetric: "High-definition 3D bone densitometry with sub-millimeter anatomical detail.",
    description: "A cone-beam computed tomography scanner that generates high-fidelity, three-dimensional views of your teeth, bone thickness, nerve pathways, and sinus cavities for ultra-safe, high-precision implant surgery."
  }
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "treat-invisalign",
    title: "Invisalign® Premium Aligners",
    subtitle: "Advanced Orthodontic Correction",
    description: "Meticulous alignment using transparent, medical-grade SmartTrack aligners under certified specialist care.",
    timeline: "6 - 15 Months",
    painIndex: "Virtually Painless (Light pressure)",
    experienceType: "Invisible, Hygienic & 100% Removable",
    longDescription: "Dr. Neha Singh leverages over 13 years of orthodontic mastery to create bespoke tooth journeys. Utilizing SmartTrack material, these invisible aligners gently slide teeth into optimal positions. No metal wires, no emergency appointments, and complete dietary freedom.",
    keyBenefits: [
      "No food restrictions — remove aligners during meals",
      "Virtually invisible in professional and social settings",
      "Predictable 3D-planned tooth movements seen on day one",
      "Fewer office visits (every 6 to 8 weeks)"
    ]
  },
  {
    id: "treat-smile",
    title: "Cosmetic Smile Design & Veneers",
    subtitle: "Elite Smile Makeover",
    description: "A comprehensive cosmetic overhaul combining ultra-thin porcelain veneers, laser tissue shaping, and composite bonding.",
    timeline: "2 - 3 Sessions",
    painIndex: "Minimal (Managed with local anesthesia/laser)",
    experienceType: "Bespoke Aesthetic Symmetry",
    longDescription: "Correct discolorations, gaps, minor chips, and tooth proportions using handcrafted porcelain veneers (E-Max) or conservative cosmetic contouring. We design each tooth's length, translucency, and value to complement your natural skin tone and facial structure.",
    keyBenefits: [
      "Handcrafted lithium disilicate veneers for high durability and natural luster",
      "Correction of gaps, micro-chips, and deep tetracycline staining",
      "Gummy smile corrections using silent, sterile Waterlase laser",
      "Stain-resistant materials that retain radiance for 15+ years"
    ]
  },
  {
    id: "treat-implants",
    title: "Guided Implantology",
    subtitle: "State-of-the-Art Restorative Surgery",
    description: "Computer-guided replacement of missing teeth with surgical grade titanium implants and zirconia restorations.",
    timeline: "3 - 6 Months (Bespoke pacing)",
    painIndex: "None (Fully guided precision reduces discomfort)",
    experienceType: "Lifetime Structural Integrity",
    longDescription: "Using high-resolution 3D CBCT scans, Dr. Neha Singh plans the exact bone-depth and angulation of each implant digitally. A custom surgical guide is printed, facilitating micro-invasive, suture-less placement for lightning-fast recovery.",
    keyBenefits: [
      "Guided surgery prevents unnecessary tissue disruption",
      "Zirconia dental crowns customized for perfect bite pressure",
      "Prevents bone loss and preserves natural facial volume",
      "High-grade biocompatible titanium that fuses naturally with bone"
    ]
  },
  {
    id: "treat-gummy",
    title: "Laser Gummy Smile Correction",
    subtitle: "Advanced Soft-Tissue Sculpting",
    description: "Reshaping excessive or uneven gum display using state-of-the-art silent laser technology for a balanced, symmetrical frame.",
    timeline: "Single Session (45 Minutes)",
    painIndex: "Virtually Zero Pain (No scalpel, no sutures)",
    experienceType: "Immediate Cosmetic Symmetrization",
    longDescription: "An excess of gum tissue can overshadow naturally beautiful teeth. Utilizing our Waterlase laser, we gently vaporize microscopic layers of excess tissue with water-shielded laser energy. There is no bleeding, no scalpel, no stitches, and you can resume normal eating by evening.",
    keyBenefits: [
      "Instant, symmetrical frame for your smile",
      "Laser sterilizes as it cuts, eliminating post-operative infection risks",
      "No stitches or scalpels - normal speaking and chewing immediately",
      "Extremely comfortable, highly controlled procedure with microscopic margins"
    ]
  }
];

export const GALLERY_SPACES: GallerySpace[] = [
  {
    id: "space-lounge",
    title: "The Welcome Lounge",
    subtitle: "Sensing Calm",
    psychologicalTrigger: "Immediately neutralizes the typical clinical 'white coat' anxiety through residential luxury styling, organic aromatherapy, and ambient soundproofing.",
    designHighlights: [
      "Custom Italian-molded soft beige leather armchairs",
      "Low-frequency calming soundscapes and custom white noise filters",
      "Scent profile of organic sandalwood and fresh white tea",
      "Hospitality station serving artisanal espresso and chilled lavender water"
    ],
    description: "A sophisticated waiting lounge modeled after five-star residential lobbies. It features warm indirect lighting, acoustic wood-paneled walls, and deep-seated comfort to transition you from busy Bengaluru roads to a state of absolute clinical serene.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "space-operatory",
    title: "The Private Operatory Suites",
    subtitle: "Uncompromised Precision & Privacy",
    psychologicalTrigger: "Evokes sterile safety and absolute personal confidentiality. Complete visual isolation protects your clinical journey.",
    designHighlights: [
      "Fully integrated, premium ergonomic Belmont dental operatories",
      "Active high-efficiency particulate air (HEPA) micro-filtration",
      "Ceiling-mounted ultra-high-definition entertainment screens",
      "Active noise-canceling headphones to replace clinical auditory stimuli"
    ],
    description: "Our treatment suites are entirely walled and independent. Equipped with state-of-the-art sanitation and luxury clinical units, these suites ensure your procedure is completed in absolute sterile solitude with cinematic, stress-reducing distractions.",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "space-studio",
    title: "The Digital Smile Studio",
    subtitle: "The Aesthetic Laboratory",
    psychologicalTrigger: "Involves the patient as an active designer of their look, creating excitement and erasing fear of unpredictable treatment outcomes.",
    designHighlights: [
      "Cinematic 4K color-calibrated modeling displays",
      "Integrated intraoral scanning terminals for instant feedback",
      "Digital facial-proportion mapping tools",
      "High-contrast portrait studio lighting setup for high-definition photography"
    ],
    description: "The space where clinical orthopedics merges with luxury cosmetic consulting. Here, Dr. Neha Singh displays 3D models of your teeth and maps your smile arch, letting you co-design, preview, and approve your bite transformation before we even begin.",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
  }
];
