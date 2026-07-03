/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal, Sparkles } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 bg-obsidian-900 border border-slate-800 px-3 py-1 rounded-full">
          Interactive Case Study
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.0 h-3.0" /> Invisalign & Micro-Contouring
        </span>
      </div>

      <div
        id="smile-slider-container"
        ref={containerRef}
        className="relative w-full max-w-2xl aspect-16/10 rounded-2xl overflow-hidden border border-gold-400/15 cursor-ew-resize select-none shadow-2xl group"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        {/* BEFORE IMAGE (Full Background - Tinted and slightly misaligned mock) */}
        <div className="absolute inset-0 w-full h-full bg-obsidian-900">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
            alt="Before Smile Alignment"
            className="w-full h-full object-cover grayscale-15 brightness-90 saturate-50 contrast-95 sepia-[20%]"
            referrerPolicy="no-referrer"
          />
          {/* Mock Orthodontic Spacing Overlays before correction */}
          <div className="absolute inset-0 bg-gold-900/5 mix-blend-color-burn" />
          <div className="absolute top-4 left-6 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-800/80 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Before Consultation
          </div>
        </div>

        {/* AFTER IMAGE (Cropped Foreground - Pristine, brilliant, aligned smile) */}
        <div
          className="absolute inset-0 h-full overflow-hidden transition-all duration-75 ease-out border-r border-gold-400/50"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-[672px] h-full max-w-none md:w-[672px] lg:w-[672px]" style={{ width: containerRef.current?.getBoundingClientRect().width }}>
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
              alt="After Smile Alignment"
              className="w-full h-full object-cover saturate-110 brightness-105"
              referrerPolicy="no-referrer"
            />
            {/* Soft gold tint overlay for premium glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/5 to-transparent mix-blend-overlay" />
            <div className="absolute top-4 right-6 bg-gold-950/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-gold-400/30 text-[10px] font-mono text-gold-400 uppercase tracking-widest">
              After Dr. Neha Singh (MDS)
            </div>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-600 cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-obsidian-950 border-2 border-gold-400 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-100 bg-gradient-to-tr from-obsidian-950 to-obsidian-900">
            <MoveHorizontal className="w-5 h-5 text-gold-400 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-4 flex justify-between text-xs font-mono text-slate-400 px-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-500" />
          <span>Slide Left to reveal Pre-Treatment (Minor Gaps & Warm Stain)</span>
        </div>
        <div className="flex items-center gap-1.5 text-gold-400">
          <span>Dr. Neha's Invisalign + Micro-Contouring Result</span>
          <div className="w-2 h-2 rounded-full bg-gold-400" />
        </div>
      </div>
    </div>
  );
}
