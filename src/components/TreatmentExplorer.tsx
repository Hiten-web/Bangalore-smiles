/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TREATMENTS, TreatmentItem } from "../data/copywriting";
import { Clock, HelpCircle, ArrowUpRight, CheckCircle, Shield } from "lucide-react";

interface TreatmentExplorerProps {
  onSelectTreatment: (treatmentId: string) => void;
}

export default function TreatmentExplorer({ onSelectTreatment }: TreatmentExplorerProps) {
  const [activeTab, setActiveTab] = useState<string>(TREATMENTS[0].id);

  const activeTreatment = TREATMENTS.find((t) => t.id === activeTab) || TREATMENTS[0];

  return (
    <div className="space-y-6">
      {/* EXQUISITE TABS CONTROL */}
      <div className="flex border-b border-slate-800/80 overflow-x-auto no-scrollbar scroll-smooth gap-2 pb-px" id="treatment-tab-bar">
        {TREATMENTS.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              id={`treatment-tab-${t.id}`}
              onClick={() => setActiveTab(t.id)}
              className={`whitespace-nowrap pb-4 px-4 text-sm font-medium transition-all duration-300 relative ${
                isActive 
                  ? "text-gold-400 font-semibold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.title.split("®")[0].split("&")[0]}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* EXPANDED TAB DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
        {/* SUBHEADER AND MAIN COPY */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {activeTreatment.subtitle}
              </span>
              <h3 className="text-3xl font-serif text-white font-medium tracking-tight">
                {activeTreatment.title}
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              {activeTreatment.longDescription}
            </p>

            {/* INTEGRATED KEY BENEFITS */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block">Core Clinical Outcomes</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeTreatment.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-obsidian-900/30 border border-slate-850 p-2.5 rounded-lg">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-850 flex items-center gap-4">
            <button
              id={`book-treatment-${activeTreatment.id}`}
              onClick={() => onSelectTreatment(activeTreatment.id)}
              className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-obsidian-950 px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold-400/5 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Request Private Session <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-500">Includes 3D Imaging consultation</span>
          </div>
        </div>

        {/* EXPERIENCE & TIMELINE SIDEBAR CARDS */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-slate-850 rounded-xl p-5 space-y-4">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Treatment Schedule</h4>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-400/20">
                <Clock className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Estimated Timeline</span>
                <span className="text-sm font-semibold text-white">{activeTreatment.timeline}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-400/20">
                <Shield className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Comfort Standard</span>
                <span className="text-sm font-semibold text-white">{activeTreatment.experienceType}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-obsidian-900 to-gold-950/10 border border-gold-400/10 rounded-xl p-5 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-xl" />
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-mono text-gold-400 uppercase tracking-widest">Pain-Free Safety Profile</h4>
              <HelpCircle className="w-3.5 h-3.5 text-slate-500 hover:text-gold-400 cursor-help" />
            </div>

            <div className="pt-1">
              <span className="text-2xl font-serif text-white font-medium block">{activeTreatment.painIndex}</span>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-2">
                We integrate computer-guided micro-surgery, Biolase Waterlase therapy, and active topical anesthetics to maintain near-zero pain thresholds for our clients.
              </p>
            </div>

            <div className="pt-2">
              <div className="w-full bg-slate-900 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-gold-500 to-gold-400 h-1 rounded-full transition-all duration-500" 
                  style={{ width: activeTreatment.id === "treat-invisalign" ? "95%" : activeTreatment.id === "treat-gummy" ? "90%" : "85%" }} 
                />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1 uppercase">
                <span>Maximum Comfort</span>
                <span>Zero Anesthesia Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
