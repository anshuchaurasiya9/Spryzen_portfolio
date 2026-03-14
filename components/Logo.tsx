
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Simulation of the lightning bolt logo */}
      <div className="relative w-10 h-10 flex items-center justify-center">
         <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            <path 
              d="M35 15 L75 15 L55 45 L85 45 L30 90 L45 55 L15 55 Z" 
              fill="url(#logoGradient)"
            />
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
         </svg>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="font-outfit font-bold text-xl tracking-wider text-white">SPRYZEN</span>
        <span className="text-[10px] tracking-[0.25em] font-medium text-cyan-400">TECHNOLOGIES</span>
      </div>
    </div>
  );
};
