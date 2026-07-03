/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Clock, Smile, Sparkle, Phone, Mail, User, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { CLINIC_INFO } from "../data/copywriting";

interface BookingConciergeProps {
  preselectedTreatmentId?: string;
  onSuccess: (summary: string) => void;
}

export default function BookingConcierge({ preselectedTreatmentId, onSuccess }: BookingConciergeProps) {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [aroma, setAroma] = useState<string>("Sandalwood");
  const [anxiety, setAnxiety] = useState<number>(3); // 1-5 scale
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [privateRoom, setPrivateRoom] = useState<boolean>(true);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [receiptId, setReceiptId] = useState<string>("");

  useEffect(() => {
    if (preselectedTreatmentId) {
      if (preselectedTreatmentId === "treat-invisalign") setGoal("Invisalign® Premium Aligners");
      else if (preselectedTreatmentId === "treat-smile") setGoal("Cosmetic Smile Design & Veneers");
      else if (preselectedTreatmentId === "treat-implants") setGoal("Guided Implantology");
      else if (preselectedTreatmentId === "treat-gummy") setGoal("Laser Gummy Smile Correction");
      setStep(2); // Jump directly to scheduling
    }
  }, [preselectedTreatmentId]);

  // Generate mock dates for the next 7 days in July 2026
  const getMockDates = () => {
    const dates = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const baseDate = new Date(2026, 6, 3); // July 3, 2026

    for (let i = 0; i < 7; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      const isSunday = d.getDay() === 0;
      dates.push({
        raw: d.toISOString().split("T")[0],
        dayName: daysOfWeek[d.getDay()],
        dayNum: d.getDate(),
        month: "July",
        isSunday
      });
    }
    return dates;
  };

  const mockDates = getMockDates();

  const timeSlots = [
    { label: "10:30 AM", type: "Morning Executive", note: "Recommended for Smile Consults" },
    { label: "11:45 AM", type: "VIP Private Slot", note: "Reserved for Dr. Neha Direct" },
    { label: "2:00 PM", type: "Quiet Midday", note: "Calm clinical atmosphere" },
    { label: "4:30 PM", type: "Afternoon Aesthetic", note: "Invisalign scanning suite" },
    { label: "6:15 PM", type: "Evening Luxury", note: "Sunset consult with skyline views" }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const uniqueReceipt = `BSDC-2026-${randomNum}`;
    setReceiptId(uniqueReceipt);
    setIsBooked(true);

    const summaryText = `${name} requested an appointment for ${goal || "Consultation"} on ${selectedDate} at ${selectedTime}. Aroma: ${aroma}, Anxiety score: ${anxiety}/5. Receipt Code: ${uniqueReceipt}`;
    onSuccess(summaryText);
  };

  const getAnxietyLabel = (level: number) => {
    switch (level) {
      case 1: return "Absolute Calm (Experienced Patient)";
      case 2: return "Mildly Anxious (Prefer gentle approach)";
      case 3: return "Moderately Anxious (Standard comfort checks)";
      case 4: return "Anxious (Request active verbal guidance)";
      case 5: return "Highly Anxious (Slight dental phobia - request full painless laser focus)";
      default: return "Comfort Check Enabled";
    }
  };

  const currentStepPercentage = (step / 4) * 100;

  return (
    <div className="bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-gold-400/15 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden max-w-3xl mx-auto border-gold-glow">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-56 h-56 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {!isBooked ? (
        <div className="space-y-6">
          {/* HEADER & STEPS INDICATOR */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/80 pb-4 gap-3">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold-400" /> Private Client Service
              </span>
              <h3 className="text-xl font-serif text-white mt-1">Consultation Concierge</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500">Step {step} of 4</span>
              <div className="w-24 bg-slate-850 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-gold-500 to-gold-400 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${currentStepPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* STEP 1: GOAL SELECTION */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-center md:text-left mb-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">What is your cosmetic or clinical goal?</h4>
                <p className="text-xs text-slate-400 mt-1">Select the treatment field you would like to explore with Dr. Neha Singh.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3" id="booking-goals-list">
                {[
                  { name: "Invisalign® Premium Aligners", subtitle: "Invisible Arch Correction" },
                  { name: "Cosmetic Smile Design & Veneers", subtitle: "Handcrafted Veneers & Symmetry" },
                  { name: "Guided Implantology", subtitle: "Guided Tooth Replacement" },
                  { name: "Laser Gummy Smile Correction", subtitle: "Soft-Tissue Aesthetic Sculpting" },
                  { name: "General Multispecialty Care", subtitle: "Routine Diagnostics & Hygiene" }
                ].map((g) => (
                  <button
                    key={g.name}
                    type="button"
                    onClick={() => {
                      setGoal(g.name);
                      setStep(2);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group ${
                      goal === g.name
                        ? "bg-gradient-to-r from-obsidian-950 to-gold-950/10 border-gold-400 text-white shadow-lg shadow-gold-400/5"
                        : "bg-slate-950/40 border-slate-850 text-slate-300 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold block">{g.name}</span>
                      <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider mt-0.5">{g.subtitle}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-600 transition-all ${
                      goal === g.name ? "text-gold-400 translate-x-1" : "group-hover:translate-x-0.5 group-hover:text-slate-400"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: SCHEDULING DATE AND TIME */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Select Preferred Date & Session Time</h4>
                <p className="text-xs text-slate-400 mt-1">Appointments are carefully paced to ensure complete patient privacy.</p>
              </div>

              {/* DATE GRID PICKER */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">Available July 2026 Dates</span>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2" id="booking-date-picker">
                  {mockDates.map((d) => (
                    <button
                      key={d.raw}
                      type="button"
                      disabled={d.isSunday}
                      onClick={() => {
                        setSelectedDate(d.raw);
                        setSelectedTime(""); // Reset time on date change
                      }}
                      className={`p-2 rounded-lg border flex flex-col items-center transition-all ${
                        d.isSunday 
                          ? "bg-slate-950/20 border-slate-900/40 opacity-40 cursor-not-allowed" 
                          : selectedDate === d.raw
                            ? "bg-gradient-to-b from-gold-950/30 to-gold-950/10 border-gold-400 text-white"
                            : "bg-slate-950/50 border-slate-850 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-[9px] font-mono uppercase tracking-widest">{d.dayName}</span>
                      <span className="text-base font-serif font-semibold mt-0.5">{d.dayNum}</span>
                      <span className="text-[9px] font-mono opacity-60 uppercase">{d.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* TIME SLOTS PICKER */}
              {selectedDate && (
                <div className="space-y-2 animate-fade-in">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Select Your Specific Consult Block</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2" id="booking-time-picker">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.label}
                        type="button"
                        onClick={() => setSelectedTime(slot.label)}
                        className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                          selectedTime === slot.label
                            ? "bg-gold-400/10 border-gold-400 text-white shadow-md shadow-gold-400/5"
                            : "bg-slate-950/40 border-slate-850 hover:border-slate-700 text-slate-300"
                        }`}
                      >
                        <div>
                          <span className="text-xs font-semibold block flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-gold-400" /> {slot.label}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{slot.type}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gold-400/60">{slot.note}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-850">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Goals
                </button>
                <button
                  type="button"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                  className="bg-gold-400/10 hover:bg-gold-400/20 text-gold-400 border border-gold-400/20 disabled:opacity-40 disabled:pointer-events-none px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  Configure Hospitality <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: HOSPITALITY CUSTOMIZATION */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Sensory Personalization Suite</h4>
                <p className="text-xs text-slate-400 mt-1">We adjust clinic sensory indicators specifically to your peace-of-mind settings.</p>
              </div>

              {/* AROMA PROFILE */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Choose Private Suite Aromatherapy Profile</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { name: "Sandalwood", desc: "Deep, soothing wooden elements" },
                    { name: "White Tea", desc: "Crisp, calming green aroma" },
                    { name: "French Lavender", desc: "Aromatic floral sleep notes" },
                    { name: "Unscented", desc: "Absolute sterile neutral environment" }
                  ].map((a) => (
                    <button
                      key={a.name}
                      type="button"
                      onClick={() => setAroma(a.name)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        aroma === a.name
                          ? "bg-gold-400/15 border-gold-400 text-white"
                          : "bg-slate-950/30 border-slate-850 hover:border-slate-700 text-slate-300"
                      }`}
                    >
                      <span className="text-xs font-semibold block">{a.name}</span>
                      <span className="text-[9px] text-slate-500 block mt-0.5 leading-tight">{a.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* ANXIETY MITIGATION PROFILE */}
              <div className="space-y-3 bg-slate-950/40 border border-slate-850 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Anxiety Sensitivity Index</span>
                  <span className="text-[10px] font-mono text-gold-400 font-semibold uppercase">{anxiety}/5 Scale</span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={anxiety}
                  onChange={(e) => setAnxiety(Number(e.target.value))}
                  className="w-full accent-gold-400 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                  id="booking-anxiety-slider"
                />
                
                <div className="flex justify-between text-[9px] font-mono text-slate-500 uppercase">
                  <span>Experienced / Serene</span>
                  <span>Requires full phobia focus</span>
                </div>

                <div className="bg-obsidian-950/80 border border-gold-400/10 p-3 rounded-lg mt-1 flex items-start gap-2.5">
                  <Smile className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white block mb-0.5">Custom Care Mode:</span>
                    {getAnxietyLabel(anxiety)}
                  </div>
                </div>
              </div>

              {/* PRIVATE ROOM OVERRIDE */}
              <div className="flex items-center justify-between p-3.5 bg-slate-950/40 border border-slate-850 rounded-xl">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="private-room-checkbox"
                    checked={privateRoom}
                    onChange={(e) => setPrivateRoom(e.target.checked)}
                    className="mt-1 accent-gold-400 rounded cursor-pointer"
                  />
                  <label htmlFor="private-room-checkbox" className="cursor-pointer select-none">
                    <span className="text-xs font-semibold text-white block">Request Private Clinical Operatory Suite</span>
                    <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">Guarantees visual and physical isolation from other patients during your session.</span>
                  </label>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-850">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Scheduling
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-gold-400 hover:bg-gold-300 text-obsidian-950 px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  Patient Identity <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT INFORMATION & CONFIRMATION */}
          {step === 4 && (
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Patient Contact Verification</h4>
                <p className="text-xs text-slate-400 mt-1">Our concierge team will verify your clinical timeline over secure phone channels.</p>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950/80 border border-slate-850 focus:border-gold-400 focus:outline-none rounded-xl py-2.5 pl-10 pr-4 text-xs text-white"
                      id="booking-name-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-1">WhatsApp / Contact Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-950/80 border border-slate-850 focus:border-gold-400 focus:outline-none rounded-xl py-2.5 pl-10 pr-4 text-xs text-white"
                        id="booking-phone-input"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Confidential Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        placeholder="e.g. contact@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950/80 border border-slate-850 focus:border-gold-400 focus:outline-none rounded-xl py-2.5 pl-10 pr-4 text-xs text-white"
                        id="booking-email-input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* APPOINTMENT SUMMARY CARD VIEW */}
              <div className="p-4 bg-slate-950 border border-slate-850/80 rounded-xl space-y-2.5">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Private Session Itinerary</span>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">CLINICAL GOAL</span>
                    <span className="font-semibold text-white mt-0.5 block">{goal || "Aesthetic Assessment"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">TIMING & DATE</span>
                    <span className="font-semibold text-white mt-0.5 block">{selectedDate ? `July ${selectedDate.split("-")[2]}, 2026` : "Not set"} at {selectedTime || "Not set"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">SENSORY AROMA</span>
                    <span className="font-semibold text-white mt-0.5 block">{aroma}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono">PRIVACY SUITE</span>
                    <span className="font-semibold text-white mt-0.5 block">{privateRoom ? "Guaranteed Private Room" : "Standard Private Lounge"}</span>
                  </div>
                </div>
              </div>

              {/* DISCLAIMER AND SUBMIT */}
              <div className="space-y-4 pt-2">
                <p className="text-[10px] text-slate-500 leading-relaxed flex items-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                  Your medical data is securely stored under strict HIPAA privacy protocols. Dr. Neha Singh’s private clinical concierge will send you a WhatsApp confirmation to complete the pre-qualification questionnaire within 30 minutes.
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-slate-850">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Sensory
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-obsidian-950 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-gold-400/10 flex items-center gap-2"
                  >
                    Authorize VIP Booking <Sparkle className="w-4 h-4 text-obsidian-950" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* APPOINTMENT BOOKED RECEIPT SCREEN */
        <div className="text-center py-6 space-y-6 animate-fade-in" id="booking-success-receipt">
          <div className="w-16 h-16 rounded-full bg-gold-400/10 border-2 border-gold-400 flex items-center justify-center mx-auto shadow-lg shadow-gold-400/5">
            <ShieldCheck className="w-8 h-8 text-gold-400 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">VIP Pre-Qualification Confirmed</span>
            <h3 className="text-2xl font-serif text-white font-medium">Your Private Lounge Is Prepared</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Welcome, <span className="font-bold text-slate-200">{name}</span>. Your clinical consultation itinerary has been registered directly on Dr. Neha Singh's appointment dashboard.
            </p>
          </div>

          {/* DELIBERATELY COMPREHENSIVE GOLD AND BLACK RECEIPT CARD */}
          <div className="max-w-md mx-auto bg-slate-950 border border-gold-400/25 rounded-2xl p-5 text-left font-mono text-[11px] text-slate-400 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-3 text-[9px] text-slate-600 uppercase tracking-wider">OFFICIAL RECEPTACLE</div>
            <div className="border-b border-dashed border-slate-850 pb-3 mb-3 text-center">
              <span className="text-xs text-white tracking-widest font-bold font-serif">BANGALORE SMILES DENTAL CARE</span>
              <p className="text-[9px] text-slate-500 mt-1 uppercase">DR. SHIVARAMA KARANTH NAGAR, BENGALURU</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>RECEIPT NUMBER:</span>
                <span className="text-gold-400 font-bold">{receiptId}</span>
              </div>
              <div className="flex justify-between">
                <span>PATIENT NAME:</span>
                <span className="text-slate-200">{name.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>AUTHORIZED CONTACT:</span>
                <span className="text-slate-200">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span>CLINICAL FOCUS:</span>
                <span className="text-slate-200">{goal.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>SESSION TIMING:</span>
                <span className="text-slate-200">{selectedDate ? `JULY ${selectedDate.split("-")[2]}, 2026` : ""} AT {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>AROMATHERAPY PROFILE:</span>
                <span className="text-slate-200">{aroma.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>PRIVATE SUITE ASSIGNED:</span>
                <span className="text-emerald-400 font-bold">{privateRoom ? "YES - EXECUTIVE" : "STANDARD PRIVACY"}</span>
              </div>
            </div>

            <div className="border-t border-dashed border-slate-850 pt-3 mt-4 text-center text-[10px] text-slate-500 space-y-1">
              <p className="text-gold-400/80 font-semibold">★ Undefeated 5.0 Rating (647 Reviews)</p>
              <p>PLEASE SHOW THIS CODES RECEIPT TO THE RECEPTION CONCIERGE</p>
              <p className="text-[8px] text-slate-600 mt-1">ISSUED UNDER STRICT SECURITY STANDARDS. LANDLINE: +91 9731212098</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsBooked(false);
                setStep(1);
                setGoal("");
                setSelectedDate("");
                setSelectedTime("");
                setName("");
                setPhone("");
                setEmail("");
              }}
              className="text-xs font-mono text-slate-500 hover:text-gold-400 hover:underline transition-colors"
            >
              Request Another Session / New Patient Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
