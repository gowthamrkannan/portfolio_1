import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  ShieldCheck
} from 'lucide-react';
import { certifications } from '../data/resumeData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Specialized Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-orange">Upskilling</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Continuous development through professional full-stack programs and verified internship certificates.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const isInProgress = cert.status === 'In Progress';
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-700/70 text-left relative overflow-hidden"
              >
                {/* Glowing top line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isInProgress
                      ? 'from-amber-500 to-orange-500'
                      : 'from-emerald-500 to-teal-500'
                  }`}
                />

                <div>
                  {/* Status & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {cert.issuer}
                    </span>
                    
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                        isInProgress
                          ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                          : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      }`}
                    >
                      {isInProgress ? (
                        <>
                          <Clock className="w-3 h-3 animate-pulse" />
                          <span>In Progress</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title & Year */}
                  <h3 className="text-lg font-bold text-white font-heading mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-orange-400 mb-4">
                    Awarded / Enrolled: {cert.year}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                    {cert.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-900/90 text-[10px] font-mono text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Recruiter Guarantee Banner */}
        <div className="max-w-4xl mx-auto mt-12 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center gap-3 text-xs text-slate-400 text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            All certifications, education credentials, and internship details strictly reflect verified resume documentation.
          </span>
        </div>

      </div>
    </section>
  );
};
