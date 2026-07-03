/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Book, Compass, FileText, Settings, Key, Eye, HelpCircle, CheckCircle, Smartphone, MapPin } from "lucide-react";
import { CLINIC_INFO, COLOR_PALETTE, REVIEWS, TECHNOLOGIES, TREATMENTS, GALLERY_SPACES } from "../data/copywriting";

export default function BlueprintDocument() {
  const [activeSection, setActiveSection] = useState<string>("sec-1");

  const sections = [
    { id: "sec-1", title: "1. Brand & Visual Guidelines", icon: <Compass className="w-4 h-4" /> },
    { id: "sec-2", title: "2. Strategic Architecture", icon: <FileText className="w-4 h-4" /> },
    { id: "sec-3", title: "3. Copywriting & Social Proof", icon: <Book className="w-4 h-4" /> },
    { id: "sec-4", title: "4. Micro-Interaction Engineering", icon: <Settings className="w-4 h-4" /> },
    { id: "sec-5", title: "5. Architectural Space Briefs", icon: <MapPin className="w-4 h-4" /> }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* SIDEBAR NAVIGATION INDEX */}
      <div className="lg:col-span-3 space-y-2 bg-obsidian-900 border border-slate-850 p-4 rounded-xl">
        <h4 className="text-[10px] font-mono text-gold-400 uppercase tracking-widest px-3 mb-2">Specifications Map</h4>
        {sections.map((sec) => {
          const isSelected = sec.id === activeSection;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all ${
                isSelected 
                  ? "bg-gradient-to-r from-gold-950/40 to-obsidian-950 border border-gold-400/30 text-gold-400 font-semibold"
                  : "text-slate-400 hover:text-white hover:bg-slate-950/40 border border-transparent"
              }`}
            >
              {sec.icon}
              <span>{sec.title}</span>
            </button>
          );
        })}

        <div className="pt-4 border-t border-slate-850 mt-4 text-[10px] text-slate-500 space-y-2 px-3">
          <p className="font-mono">PROJECT: Million-Dollar Dental Blueprint</p>
          <p className="font-mono">CLINIC: Bangalore Smiles</p>
          <p className="font-mono">RELEASE: v1.0.0 (Production-ready)</p>
        </div>
      </div>

      {/* DETAILED CONTENT CONTAINER */}
      <div className="lg:col-span-9 bg-slate-950 border border-slate-850/80 rounded-2xl p-6 lg:p-8 space-y-8 max-h-[800px] overflow-y-auto no-scrollbar scroll-smooth">
        
        {/* SECTION 1: VISUAL IDENTITY & LUXURY BRAND GUIDELINES */}
        {activeSection === "sec-1" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Section 1.0</span>
              <h3 className="text-2xl font-serif text-white font-medium mt-1">Visual Identity & Luxury Brand Guidelines</h3>
              <p className="text-xs text-slate-400 mt-1">Establishing sensory and visual superiority over traditional cold clinical setups.</p>
            </div>

            {/* COLOR PALETTE SPECS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">A. Elite Chromatic Matrix</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than standard medical blue (which triggers clinical coldness), we use Obsidian Black Ink representing supreme safety, paired with Luxury Polished Gold mimicking delicate precision and bespoke luxury.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-obsidian-900 border border-slate-850 p-3 rounded-xl space-y-3">
                  <div className="w-full h-12 rounded-lg bg-obsidian-950 border border-slate-800" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Obsidian Black Ink</span>
                    <span className="text-[10px] font-mono text-gold-400 mt-0.5 block">#0A0A0B / #121214</span>
                    <p className="text-[10px] text-slate-500 leading-tight mt-1">Ratio: 65% (Background Canvas, Glassmorphisms, Dark space layouts)</p>
                  </div>
                </div>

                <div className="bg-obsidian-900 border border-slate-850 p-3 rounded-xl space-y-3">
                  <div className="w-full h-12 rounded-lg bg-gold-400 border border-gold-300/20" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Luxury Polished Gold</span>
                    <span className="text-[10px] font-mono text-gold-400 mt-0.5 block">#C5A059</span>
                    <p className="text-[10px] text-slate-500 leading-tight mt-1">Ratio: 10% (Action CTAs, custom hover states, border-glows, badges)</p>
                  </div>
                </div>

                <div className="bg-obsidian-900 border border-slate-850 p-3 rounded-xl space-y-3">
                  <div className="w-full h-12 rounded-lg bg-slate-50 border border-slate-200" />
                  <div>
                    <span className="text-xs font-semibold text-white block">Pristine Pearl Clinical</span>
                    <span className="text-[10px] font-mono text-gold-400 mt-0.5 block">#F8FAFC / #FFFFFF</span>
                    <p className="text-[10px] text-slate-500 leading-tight mt-1">Ratio: 25% (Readable typography, structural grid dividers, HEPA filters)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TYPOGRAPHY PAIRINGS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">B. High-Authority Typography Pairing</h4>
              <div className="bg-obsidian-900 border border-slate-850 p-4 rounded-xl space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">DISPLAY HEADINGS (H1, H2, H3)</span>
                  <span className="font-serif text-lg text-white font-medium block mt-1">Playfair Display (Serif, Georgia alternative)</span>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                    Evokes the timeless, bespoke nature of high-end clinical orthodontics, shifting dental care from "surgery" to "cosmetic dentistry design."
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">BODY & FUNCTIONAL ACTIONS</span>
                  <span className="font-sans text-xs text-white font-semibold block mt-1">Inter (Sans-serif) / System UI Stack</span>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                    Ensures pristine clinical clarity, clean readability at micro-levels, and an aesthetic mirroring modern Apple or luxury retail interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGERY PROTOCOLS */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">C. Imagery Strategy & Sensory Tone</h4>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-2 leading-relaxed bg-obsidian-900/40 p-4 rounded-xl border border-slate-850">
                <li><strong className="text-white">Shallow Depth of Field:</strong> Architectural photography focusing on structural hygiene materials, tactile leather textures, and modern clinical machinery with beautiful bokeh.</li>
                <li><strong className="text-white">Warm-Lit Ambience:</strong> Replaces cold fluorescents with warm backlighting and architectural uplights to trigger immediate calm.</li>
                <li><strong className="text-white">Authentic Patient Smiles:</strong> Rejects plastic, overly saturated stock-photos in favor of high-fidelity clinical portraits capturing authentic relief and luxury transformations.</li>
              </ul>
            </div>
          </div>
        )}

        {/* SECTION 2: GLOBAL ARCHITECTURE & CHECKLIST */}
        {activeSection === "sec-2" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Section 2.0</span>
              <h3 className="text-2xl font-serif text-white font-medium mt-1">Global Architecture & The \"Million-Dollar\" Feature Checklist</h3>
              <p className="text-xs text-slate-400 mt-1">Strategic structure designed to convert high-net-worth individuals searching for premium dentistry.</p>
            </div>

            {/* HIGH CONVERTING LANDING CHECKLIST */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">A. Essential Conversion Elements</h4>
              
              <div className="space-y-3" id="blueprint-checklist">
                {[
                  { title: "Floating Premium Glass Header", desc: "Maintains a constant touchpoint for booking and clinical credentials, with a 5.0 Star badge in view." },
                  { title: "The Prestige Hook (Hero Heading)", desc: "Framed around confidence, artistry, and MDS authority over standard 'painless dentist' clichés." },
                  { title: "Before/After Tactile Slide Simulator", desc: "A psychological hook showing direct physical evidence of transformation with a modern, high-end feel." },
                  { title: "Interactive 'Tomorrow's Technology' Drawer", desc: "Highlights multi-million clinical investments (Itero scanner, Biolase Waterlase) as comfort assets for the patient." },
                  { title: "The Treatment Connoisseur Grid", desc: "Provides timeline and pain metrics clearly to manage customer expectations and lower barriers to entry." },
                  { title: "5-Star Emotion-Driven Testimonials Carousel", desc: "Focuses on personal, long-form narratives detailing how Dr. Neha’s clinical mastery transformed their lives." },
                  { title: "Sensory Customization Concierge (Booking)", desc: "A bespoke booking wizard capturing comfort preferences, aromatherapy scent selections, and anxiety ratings." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-obsidian-900 border border-slate-850 p-3.5 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-white block">{item.title}</span>
                      <p className="text-[10px] text-slate-400 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: HIGH-FIDELITY COPYWRITING HANDBOOK */}
        {activeSection === "sec-3" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Section 3.0</span>
              <h3 className="text-2xl font-serif text-white font-medium mt-1">High-Fidelity Copywriting Handbook</h3>
              <p className="text-xs text-slate-400 mt-1">Word-for-word copy assets representing the highest conversion standards of luxury copywriting.</p>
            </div>

            {/* VALUE PROPOSITIONS */}
            <div className="space-y-3 bg-obsidian-900 border border-slate-850 p-4 rounded-xl">
              <h4 className="text-xs font-mono text-gold-400 uppercase tracking-wider">A. Elite Taglines & Value Propositions</h4>
              <div className="space-y-3 pt-1 text-xs">
                <div>
                  <span className="text-[9px] text-slate-500 font-mono block">HERO DISPLAY HEADLINE:</span>
                  <p className="text-sm font-serif text-white font-medium mt-1">"Artistry in Every Smile. Excellence in Every Detail."</p>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 font-mono block">HERO COGNITIVE SUBHEADLINE:</span>
                  <p className="text-slate-300 leading-relaxed mt-1">
                    "Under the meticulous care of Dr. Neha Singh (MDS), we craft bespoke orthodontic and cosmetic dental transformations. Experience pain-free clinical perfection in the heart of Bengaluru."
                  </p>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 font-mono block">TECHNOLOGY VALUE CAPTION:</span>
                  <p className="text-slate-300 leading-relaxed mt-1">
                    "We invest in Tomorrow’s Technology so that your dental transformations require zero scalpel incisions, zero vibrating metal drills, and zero anxiety-triggering waiting cycles."
                  </p>
                </div>
              </div>
            </div>

            {/* DETAILED TESTIMONIAL PERSONAS */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-white uppercase tracking-wider">B. The 5 Emotional Testimonials (Word-For-Word)</h4>
              
              <div className="space-y-4">
                {REVIEWS.map((rev) => (
                  <div key={rev.id} className="bg-obsidian-900 border border-slate-850 rounded-xl p-5 space-y-3">
                    <div className="flex justify-between items-start border-b border-slate-800 pb-2">
                      <div>
                        <span className="text-xs font-semibold text-white block">{rev.name} <span className="text-[10px] text-slate-500">({rev.age})</span></span>
                        <span className="text-[10px] font-mono text-gold-400 mt-0.5 block">{rev.role}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-gold-400">★★★★★ 5.0</span>
                        <span className="text-[9px] font-mono text-slate-500 block uppercase mt-0.5">Verified Case</span>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-white italic">"{rev.title}"</p>
                    <p className="text-xs text-slate-300 leading-relaxed">"{rev.narrative}"</p>

                    <div className="flex flex-wrap gap-4 pt-1.5 text-[9px] font-mono">
                      <div>
                        <span className="text-slate-500">TREATMENT:</span> <span className="text-slate-300">{rev.treatmentReceived.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">CLINICAL HIGHLIGHT:</span> <span className="text-gold-400/80">{rev.clinicalHighlight.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">TRANSFORMATION:</span> <span className="text-slate-300">{rev.transformation.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: MICRO-INTERACTION ENGINEERING */}
        {activeSection === "sec-4" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Section 4.0</span>
              <h3 className="text-2xl font-serif text-white font-medium mt-1">High-End Micro-Interactions & Experience Engineering</h3>
              <p className="text-xs text-slate-400 mt-1">Technical blueprint detailing Framer Motion mappings and horizontal touch equations.</p>
            </div>

            {/* SMILE SLIDER SPECS */}
            <div className="space-y-3 bg-obsidian-900 border border-slate-850 p-5 rounded-xl space-y-4">
              <div>
                <h4 className="text-xs font-mono text-gold-400 uppercase tracking-wider flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5" /> Case Study: Before/After Slider Mathematics
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mt-1.5">
                  The slider relies on a responsive React container ref capturing mouse coordinate offsets. It updates a dynamic inline crop-width styled as percentage.
                </p>
              </div>

              <div className="space-y-2 text-[10px] font-mono text-slate-400 bg-slate-950 p-4 rounded-lg border border-slate-900">
                <span className="text-gold-400 font-semibold block uppercase">A. HORIZONTAL OFFSET CALCULATIONS (TypeScript):</span>
                <p>{"1. const rect = containerRef.current.getBoundingClientRect();"}</p>
                <p>{"2. const x = clientX - rect.left;"}</p>
                <p>{"3. const positionPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));"}</p>
                <p className="text-slate-500 mt-2">// This prevents boundary spills while ensuring touch-pad responsive tracking on all devices.</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">B. TRANSITION SPECS (Framer Motion / Motion React):</span>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  <li><strong>Slide-In Layout:</strong> <code className="text-[10px] font-mono text-gold-400">initial={`{opacity: 0, y: 15}`} animate={`{opacity: 1, y: 0}`} transition={`{duration: 0.6, ease: 'easeOut'}`}</code></li>
                  <li><strong>Active Hover State:</strong> Hovering Treatment Explorer tabs triggers an active underline transition with spring stiffness: <code className="text-[10px] font-mono text-gold-400">type: 'spring', stiffness: 350, damping: 30</code></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: ARCHITECTURAL GALLERY FRAMEWORK */}
        {activeSection === "sec-5" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">Section 5.0</span>
              <h3 className="text-2xl font-serif text-white font-medium mt-1">Architectural Gallery Framework (Rachenahalli Studio)</h3>
              <p className="text-xs text-slate-400 mt-1">Psychological mapping of clinical interiors to trust and high-end hospital conversion metrics.</p>
            </div>

            <div className="space-y-4">
              {GALLERY_SPACES.map((space) => (
                <div key={space.id} className="bg-obsidian-900 border border-slate-850 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
                  <div className="md:col-span-4 h-48 md:h-auto relative">
                    <img 
                      src={space.imageUrl} 
                      alt={space.title} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-obsidian-900" />
                  </div>
                  
                  <div className="md:col-span-8 p-5 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest block">{space.subtitle}</span>
                      <h4 className="text-lg font-serif text-white font-medium mt-0.5">{space.title}</h4>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{space.description}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="text-[10px] text-slate-400">
                        <span className="font-mono text-gold-400 block mb-1">PSYCHOLOGICAL CONVERSION TRIGGER:</span>
                        <p className="italic leading-relaxed">"{space.psychologicalTrigger}"</p>
                      </div>

                      <div className="pt-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Luxury Design Elements</span>
                        <div className="flex flex-wrap gap-1.5">
                          {space.designHighlights.map((hl, i) => (
                            <span key={i} className="text-[8px] bg-slate-950 border border-slate-850 px-2 py-0.5 rounded text-slate-400">{hl}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
