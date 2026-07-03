/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TECHNOLOGIES, TechItem } from "../data/copywriting";
import { Cpu, Camera, Eye, Zap, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export default function TechnologySuite() {
  const [activeTechId, setActiveTechId] = useState<string>(TECHNOLOGIES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case "tech-itero":
        return <Camera className="w-5 h-5 text-gold-400" />;
      case "tech-waterlase":
        return <Zap className="w-5 h-5 text-gold-400" />;
      case "tech-dsd":
        return <Eye className="w-5 h-5 text-gold-400" />;
      case "tech-cbct":
        return <Cpu className="w-5 h-5 text-gold-400" />;
      default:
        return <Cpu className="w-5 h-5 text-gold-400" />;
    }
  };

  const activeTech = TECHNOLOGIES.find((t) => t.id === activeTechId) || TECHNOLOGIES[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT SIDE: TECH LIST GRID */}
      <div className="lg:col-span-5 space-y-4">
        <div className="mb-2">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-1">Advanced Clinical Gear</p>
          <h3 className="text-2xl font-serif text-white font-medium">Tomorrow's Technology</h3>
        </div>

        <div className="space-y-3" id="tech-selector-list">
          {TECHNOLOGIES.map((tech) => {
            const isSelected = tech.id === activeTechId;
            return (
              <button
                key={tech.id}
                id={`tech-btn-${tech.id}`}
                onClick={() => setActiveTechId(tech.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between group ${
                  isSelected
                    ? "bg-gradient-to-r from-obsidian-900 to-obsidian-800 border-gold-400/40 shadow-lg shadow-gold-400/5"
                    : "bg-obsidian-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-obsidian-900/60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg transition-colors ${
                    isSelected ? "bg-gold-400/10 border border-gold-400/20" : "bg-slate-950 border border-slate-900"
                  }`}>
                    {getIcon(tech.id)}
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium transition-colors ${isSelected ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                      {tech.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{tech.brand}</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-500 transition-all ${
                  isSelected ? "translate-x-1 text-gold-400" : "group-hover:translate-x-0.5 group-hover:text-slate-400"
                }`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE: INTERACTIVE EXPLORER WINDOW */}
      <div className="lg:col-span-7 bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-gold-400/15 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px] group border-gold-glow">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-gradient-to-tr from-gold-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* TOP SPEC HEADER */}
        <div>
          <div className="flex justify-between items-center border-b border-slate-800/60 pb-4 mb-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 border border-gold-400/20 px-2.5 py-0.5 rounded-md">
                Active System Specs
              </span>
              <h4 className="text-xl font-serif text-white mt-1.5 font-medium">{activeTech.name}</h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{activeTech.brand}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-wider">Clinical Status</span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 justify-end mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Calibrated & Active
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {activeTech.description}
          </p>
        </div>

        {/* BOTTOM METRICS HIGHLIGHTS */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* COMFORT / PATIENT EXPERIENCE BENEFIT */}
            <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-start gap-3">
              <div className="p-1 rounded bg-gold-400/10 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Luxury Comfort Asset</span>
                <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                  {activeTech.experienceBenefit}
                </p>
              </div>
            </div>

            {/* PRECISION / CLINICAL METRIC */}
            <div className="bg-slate-950/60 border border-slate-800/50 p-4 rounded-xl flex items-start gap-3">
              <div className="p-1 rounded bg-gold-400/10 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Clinical Precision Metric</span>
                <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                  {activeTech.clinicalMetric}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
