/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUpRight, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  HeartHandshake, 
  BookOpen, 
  Laptop, 
  Calendar,
  Mail,
  ShieldAlert,
  ChevronLeft
} from "lucide-react";

import { CLINIC_INFO, COLOR_PALETTE, REVIEWS, TREATMENTS, GALLERY_SPACES } from "./data/copywriting";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import TechnologySuite from "./components/TechnologySuite";
import TreatmentExplorer from "./components/TreatmentExplorer";
import BookingConcierge from "./components/BookingConcierge";
import BlueprintDocument from "./components/BlueprintDocument";

export default function App() {
  const [viewMode, setViewMode] = useState<"preview" | "blueprint">("preview");
  const [preselectedTreatmentId, setPreselectedTreatmentId] = useState<string>("");
  const [activeGallerySpaceId, setActiveGallerySpaceId] = useState<string>(GALLERY_SPACES[0].id);
  const [lastNotification, setLastNotification] = useState<string>("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectTreatment = (treatmentId: string) => {
    setPreselectedTreatmentId(treatmentId);
    setTimeout(() => {
      scrollToSection("booking-section");
    }, 100);
  };

  const handleBookingSuccess = (summary: string) => {
    setLastNotification(summary);
    // Display a beautiful temporary success notification or scroll to it
    setTimeout(() => {
      scrollToSection("booking-section");
    }, 100);
  };

  const activeGallerySpace = GALLERY_SPACES.find((s) => s.id === activeGallerySpaceId) || GALLERY_SPACES[0];

  return (
    <div className="min-h-screen bg-obsidian-950 bg-mesh relative selection:bg-gold-400/30 selection:text-white flex flex-col justify-between">
      
      {/* PERSISTENT ULTRA-LUXURY UTILITY BANNER */}
      <div className="bg-gradient-to-r from-obsidian-950 via-gold-900/10 to-obsidian-950 border-b border-gold-400/10 text-slate-400 text-[11px] py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 z-50">
        <div className="flex items-center gap-3 font-mono">
          <span className="flex items-center gap-1 text-gold-400 font-semibold uppercase">
            <Award className="w-3.5 h-3.5" /> MDS SPECIALIST DIRECTORY
          </span>
          <span className="hidden md:inline">|</span>
          <span className="text-slate-300">Dr. Neha Singh, MDS (13+ Years Experience)</span>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <span className="flex items-center gap-1 text-gold-400">
            <Star className="w-3 h-3 fill-current" /> 5.0 Rating (647 Verified Reviews)
          </span>
          <span className="hidden md:inline text-slate-700">•</span>
          <a href="tel:+919731212098" className="hover:text-gold-400 transition-colors flex items-center gap-1 font-semibold">
            <Phone className="w-3 h-3 text-gold-400" /> +91 9731212098
          </a>
        </div>
      </div>

      {/* FLOATING GLASS NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-obsidian-950/75 border-b border-slate-900/80 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* CLINIC BRANDING LOGO */}
          <button 
            onClick={() => {
              setViewMode("preview");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-left group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-gold-600 to-gold-400 p-0.5 flex items-center justify-center shadow-lg shadow-gold-400/5 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[7px] bg-obsidian-950 flex items-center justify-center">
                <span className="text-sm font-serif font-bold text-gold-400">B</span>
              </div>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block leading-none">BANGALORE</span>
              <span className="text-sm font-serif font-bold text-white tracking-tight leading-none">Smiles Dental</span>
            </div>
          </button>

          {/* DUAL MODE CONTROLS: BRAND PREVIEW VS SPECIFICATION BLUEPRINT */}
          <div className="flex bg-slate-950/90 border border-slate-850 p-1 rounded-full shadow-inner max-w-sm">
            <button
              id="toggle-preview-mode"
              onClick={() => setViewMode("preview")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                viewMode === "preview"
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Preview</span>
            </button>
            <button
              id="toggle-blueprint-mode"
              onClick={() => setViewMode("blueprint")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                viewMode === "blueprint"
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Brand Spec Blueprint</span>
            </button>
          </div>

          {/* QUICK BOOKING TRIGGER */}
          <button
            id="nav-booking-cta"
            onClick={() => {
              setViewMode("preview");
              setTimeout(() => {
                scrollToSection("booking-section");
              }, 100);
            }}
            className="bg-slate-900 hover:bg-slate-850 text-gold-400 border border-gold-400/25 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-350 hover:border-gold-400 shadow-md flex items-center gap-1.5"
          >
            Concierge Desk <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* CORE FRAMEWORK CONTAINER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {viewMode === "preview" ? (
            
            /* ==============================================================
               PATIENT VIEW: LUXURY WEBSITE PREVIEW
               ============================================================== */
            <motion.div
              key="patient-preview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-24 pb-24"
            >
              
              {/* PRESTIGE HERO SECTION */}
              <section className="relative pt-12 md:pt-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero-section">
                
                {/* HERO COPY & CALL-TO-ACTIONS */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 px-3.5 py-1.5 rounded-full text-gold-400 animate-fade-in shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-xs font-mono font-medium uppercase tracking-widest">
                      Bespoke Dentistry Architecture
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-serif text-white font-medium tracking-tight leading-[1.08] text-gold-gradient">
                    Artistry in Every Smile.<br />
                    Excellence in Every Detail.
                  </h1>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Under the meticulous care of <strong className="text-white">Dr. Neha Singh (MDS)</strong>, we craft proportioned, harmonious smile makeovers in Bengaluru. Experience pain-free clinical perfection backed by a flawless 5-star patient rating.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                    <button
                      id="hero-primary-cta"
                      onClick={() => scrollToSection("booking-section")}
                      className="w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-obsidian-950 px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-gold-400/10 hover:-translate-y-0.5"
                    >
                      Schedule Private Consultation
                    </button>
                    <button
                      id="hero-secondary-cta"
                      onClick={() => scrollToSection("treatments-section")}
                      className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 hover:border-slate-700 px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Explore Treatment Suite
                    </button>
                  </div>

                  {/* MINI REPUTATION BADGES */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900/60 max-w-md mx-auto lg:mx-0">
                    <div>
                      <span className="text-2xl font-serif text-white font-bold block">5.0 ★</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mt-1">647 Verified Reviews</span>
                    </div>
                    <div>
                      <span className="text-2xl font-serif text-white font-bold block">13+ Yrs</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mt-1">Clinical Artistry</span>
                    </div>
                    <div>
                      <span className="text-2xl font-serif text-white font-bold block">100%</span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mt-1">Digital Diagnostics</span>
                    </div>
                  </div>
                </div>

                {/* HERO BRAND COVER IMAGE PANEL */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />
                  <div className="relative w-full max-w-sm aspect-4/5 rounded-3xl overflow-hidden border border-gold-400/15 shadow-2xl shadow-gold-400/5 group border-gold-glow">
                    <img 
                      src="https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=800" 
                      alt="Dr. Neha Singh MDS Consultation Room" 
                      className="w-full h-full object-cover saturate-105 group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                    
                    {/* Floating Credentials Overlay Card */}
                    <div className="absolute bottom-6 left-6 right-6 bg-obsidian-950/95 backdrop-blur-md border border-slate-800 p-4 rounded-2xl space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-gold-400/10">
                          <Award className="w-4 h-4 text-gold-400" />
                        </div>
                        <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-semibold">Specialist Orthodontics</span>
                      </div>
                      <h3 className="text-base font-serif text-white font-bold">Dr. Neha Singh, MDS</h3>
                      <p className="text-[10px] text-slate-400 leading-normal">
                        Certified Invisalign Specialist with over 13 years of perfecting smile mechanics and aesthetic symmetry.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* INTERACTIVE CASE STUDY: BEFORE/AFTER SLIDER */}
              <section className="max-w-7xl mx-auto px-4" id="slider-section">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full">
                    Aesthetic Symmetrization
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white font-medium mt-3 tracking-tight">
                    Experience the Perfect Alignment
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2.5">
                    Drag the gold slider bar to preview a complete dental bite correction. We align facial dimensions using bespoke digital smile parameters.
                  </p>
                </div>

                <BeforeAfterSlider />
              </section>

              {/* THE MULTISPECIALTY TREATMENT CONNOISSEUR MENU */}
              <section className="max-w-7xl mx-auto px-4" id="treatments-section">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block">Expert Clinical Pathways</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white font-medium mt-2 tracking-tight">
                    The Treatment Connoisseur Menu
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    Indulge in specialized treatments executed with surgical precision and absolute sensory tranquility.
                  </p>
                </div>

                <div className="bg-obsidian-900/30 border border-slate-900 rounded-3xl p-6 lg:p-8">
                  <TreatmentExplorer onSelectTreatment={handleSelectTreatment} />
                </div>
              </section>

              {/* "TOMORROW'S TECHNOLOGY" SUITE */}
              <section className="max-w-7xl mx-auto px-4" id="tech-section">
                <div className="bg-gradient-to-tr from-obsidian-950 via-obsidian-900 to-obsidian-950 border border-slate-900 rounded-3xl p-6 lg:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
                  <TechnologySuite />
                </div>
              </section>

              {/* 5-STAR EMOTIONAL TESTIMONIALS CAROUSEL */}
              <section className="max-w-7xl mx-auto px-4" id="testimonials-section">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full">
                    Undefeated Patient Serene
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white font-medium mt-3 tracking-tight">
                    Trust Backed by 647 Verified Reviews
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    Read the real transformations, complete with executive schedules, pain-free adjustments, and Dr. Neha's bespoke hospitality.
                  </p>
                </div>

                {/* TESTIMONIALS MASONRY-STYLE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="reviews-grid">
                  {REVIEWS.map((rev) => (
                    <div 
                      key={rev.id} 
                      className="bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-xl hover:border-gold-400/20 transition-all duration-300 relative group"
                    >
                      <span className="absolute top-6 right-6 text-gold-400/10 text-6xl font-serif pointer-events-none">“</span>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-1 text-gold-400 text-xs">
                          {[...Array(rev.stars)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current text-gold-400" />
                          ))}
                        </div>
                        
                        <h4 className="text-sm font-semibold text-white font-serif">{rev.title}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed italic">
                          "{rev.narrative}"
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white block">{rev.name}</span>
                          <span className="text-[10px] text-slate-500 block font-mono uppercase mt-0.5 leading-none">{rev.role.split(",")[0]}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] font-mono text-gold-400 bg-gold-400/10 border border-gold-400/20 px-2 py-0.5 rounded uppercase font-semibold">
                            {rev.treatmentReceived.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ARCHITECTURAL SENSORY GALLERY */}
              <section className="max-w-7xl mx-auto px-4" id="gallery-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* GALLERY INFO SIDE */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block">Rachenahalli Studio</span>
                      <h2 className="text-3xl md:text-4xl font-serif text-white font-medium mt-2 tracking-tight">
                        Exquisite Spaces, Calming Design
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2.5">
                        Our clinic at Dr. Shivarama Karanth Nagar is architecturally curated to neutralize dental anxiety completely. Explore our sensory-designed spaces.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2" id="gallery-selector-list">
                      {GALLERY_SPACES.map((space) => {
                        const isActive = space.id === activeGallerySpaceId;
                        return (
                          <button
                            key={space.id}
                            id={`gallery-btn-${space.id}`}
                            onClick={() => setActiveGallerySpaceId(space.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between group ${
                              isActive
                                ? "bg-obsidian-900 border-gold-400/30 text-white"
                                : "bg-transparent border-slate-900 text-slate-400 hover:border-slate-850 hover:text-white"
                            }`}
                          >
                            <div>
                              <span className="text-xs font-semibold block">{space.title}</span>
                              <span className="text-[10px] font-mono text-slate-500 block uppercase mt-0.5">{space.subtitle}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 text-slate-500 transition-all ${
                              isActive ? "translate-x-1 text-gold-400" : "group-hover:translate-x-0.5"
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* GALLERY DISPLAY SIDE */}
                  <div className="lg:col-span-7 bg-obsidian-900/40 border border-slate-900 rounded-3xl p-4 md:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="aspect-16/10 rounded-2xl overflow-hidden border border-slate-850 relative group shadow-lg">
                      <img 
                        src={activeGallerySpace.imageUrl} 
                        alt={activeGallerySpace.title} 
                        className="w-full h-full object-cover saturate-105" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-5 left-5 right-5 text-left">
                        <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest font-semibold block">Sensory Profile</span>
                        <h4 className="text-base font-serif text-white font-medium mt-0.5">{activeGallerySpace.title}</h4>
                      </div>
                    </div>

                    <div className="pt-5 space-y-4 text-left">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeGallerySpace.description}
                      </p>

                      <div className="bg-slate-950/60 border border-slate-850 p-4 rounded-xl">
                        <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest block font-bold">Psychological Calming Trigger</span>
                        <p className="text-xs text-slate-400 italic mt-1 leading-relaxed">
                          "{activeGallerySpace.psychologicalTrigger}"
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Design Elements</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeGallerySpace.designHighlights.map((hl, i) => (
                            <span key={i} className="text-[9px] bg-slate-950 border border-slate-850 px-2.5 py-1 rounded text-slate-300 font-mono">
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* THE PRIVATE CONSULTATION CONCIERGE SCHEDULER */}
              <section className="max-w-7xl mx-auto px-4 scroll-mt-24" id="booking-section">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full">
                    Exclusive Appointment Booking
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif text-white font-medium mt-3 tracking-tight">
                    Authorized Consultation Desk
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2.5">
                    Select your preferred treatment goal, customize your sensory requirements, and authorize your medical check-in.
                  </p>
                </div>

                <BookingConcierge 
                  preselectedTreatmentId={preselectedTreatmentId} 
                  onSuccess={handleBookingSuccess} 
                />
              </section>

            </motion.div>
          ) : (
            
            /* ==============================================================
               BLUEPRINT VIEW: INTERACTIVE BRAND SPEC & DOCUMENTATION
               ============================================================== */
            <motion.div
              key="brand-blueprint"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-10"
            >
              <div className="border-b border-slate-850 pb-6">
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">Million-Dollar Dental Blueprint</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white font-medium">Strategic Specifications Document</h2>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  Fully compiled, production-ready copywriting assets, color metrics, interactive diagrams, and front-end engineering behavioral mappings.
                </p>
              </div>

              <BlueprintDocument />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* COMPREHENSIVE LUXURY CLINIC FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* FOOTER COLOUMN 1: BRAND DETAIL */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gold-400 p-0.5 flex items-center justify-center">
                <span className="text-xs font-serif font-bold text-obsidian-950">B</span>
              </div>
              <h4 className="text-base font-serif text-white font-bold">{CLINIC_INFO.brandName}</h4>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An elite, multidisciplinary private dental studio led by certified specialist Dr. Neha Singh (MDS). Committed to uncompromised medical safety, digital dental artistry, and five-star patient comfort.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Clinic Landline & WhatsApp</span>
              <a href="tel:+919731212098" className="text-sm font-semibold text-white hover:text-gold-400 transition-colors mt-0.5 block">
                {CLINIC_INFO.contact.phone}
              </a>
              <a href="mailto:concierge@bangaloresmiles.luxury" className="text-xs text-slate-500 hover:text-gold-400 transition-colors block mt-0.5">
                {CLINIC_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* FOOTER COLOUMN 2: SPECIFIC CLINIC FOOTPRINT LOCATION */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-mono text-gold-400 uppercase tracking-widest">Clinic Footprint</h4>
            
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-slate-200 block">Bangalore Smiles Studio</span>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                  {CLINIC_INFO.contact.address}
                </p>
                <span className="text-[10px] font-mono text-gold-400/80 block mt-1.5 uppercase tracking-wide">
                  LANDMARK: {CLINIC_INFO.contact.landmark}
                </span>
              </div>
            </div>

            <div className="flex gap-2.5 items-start pt-1.5">
              <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Bespoke Hours</span>
                <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                  {CLINIC_INFO.contact.hours}
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER COLOUMN 3: LANDMARK INTEGRATIVE MAP GUIDE */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono text-gold-400 uppercase tracking-widest">Landmark Route Guide</h4>
            
            {/* Custom Interactive Landmark Map representation using custom styling */}
            <div className="bg-obsidian-900 border border-slate-850 p-3 rounded-xl space-y-2 relative overflow-hidden" id="footer-map-card">
              <div className="h-24 rounded-lg bg-slate-950 border border-slate-900 relative flex items-center justify-center overflow-hidden">
                {/* Custom Minimalist Map Vector drawing */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute w-1 bg-gold-400 h-full left-1/3 rotate-12" />
                  <div className="absolute h-1 bg-gold-400 w-full top-1/2 -rotate-6" />
                  <div className="absolute w-8 h-8 rounded-full border border-gold-400 left-12 top-4" />
                </div>
                
                <div className="text-center z-10">
                  <MapPin className="w-5 h-5 text-gold-400 mx-auto animate-bounce" />
                  <span className="text-[9px] font-mono text-slate-400 block mt-1.5">Rachenahalli 80ft Road</span>
                </div>
              </div>
              <div className="text-[9px] font-mono text-slate-500 leading-tight">
                Located on the active 80 Feet Road of MCECHS Layout. Offers ample private driveway parking with wheelchair access.
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA & RIGHTS RESERVED */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-600">
          <p>© 2026 Bangalore Smiles Dental Care. Handcrafted under elite medical standards. All rights reserved.</p>
          <p>MDS SPECIALIST REGISTRATION: KSD-12948-B | certified invisalign provider</p>
        </div>
      </footer>

    </div>
  );
}
