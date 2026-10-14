import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2
} from 'lucide-react';
import { education } from '../data/resumeData';

export const Education: React.FC = () => {
  const edu = education[0];

  return (
    <section id="education" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-orange">Coursework</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Structured foundation in computer science, software engineering principles, algorithms, and database systems.
          </p>
        </div>

        {/* Education Display Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden text-left">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-orange-400 font-semibold font-mono mt-0.5">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-1.5 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {edu.location}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Relevant Coursework Section */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Core Computer Science Curricula & Practical Labs</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {edu.courses.map((course, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-orange-500/30 transition-colors flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium leading-tight">
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Pillars Banner */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-bold text-white font-heading">
                  Strong Theoretical & Practical Foundation
                </p>
                <p className="text-[11px] text-slate-400">
                  Focusing on SDLC methodologies, clean data modeling, and robust object-oriented code structuring.
                </p>
              </div>

              <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-mono text-orange-300 border border-slate-700 whitespace-nowrap">
                Salem, India
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
