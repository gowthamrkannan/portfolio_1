import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Terminal
} from 'lucide-react';
import { experiences } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship <span className="text-gradient-orange">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Hands-on technical contributions in data preprocessing, pipeline debugging, automation scripts, and reproducible documentation.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500/50 to-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-orange-500 flex items-center justify-center z-10 shadow-lg shadow-orange-500/20">
                    <Terminal className="w-4 h-4 text-orange-400" />
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left">
                    <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-700/70 relative">
                      
                      {/* Top Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-mono font-semibold">
                          {exp.type}
                        </span>
                        
                        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-orange-400" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white font-heading">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-orange-400 font-mono mt-0.5 mb-4">
                        {exp.company}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.description.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Credential Badge */}
                      {exp.verifiedCredential && (
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-xs text-slate-300 mb-4">
                          <Award className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-mono text-[11px] truncate">{exp.verifiedCredential}</span>
                        </div>
                      )}

                      {/* Tech Used Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
                        {exp.techUsed.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-400 border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
