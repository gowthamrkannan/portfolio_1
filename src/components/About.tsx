import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Languages, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle, 
  Copy, 
  Check, 
  Layers, 
  Database, 
  Code, 
  Workflow
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export const About: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const technicalStrengths = [
    {
      title: 'Object-Oriented Software Engineering',
      desc: 'Deep grasp of OOP paradigms—encapsulation, abstraction, inheritance hierarchies, and runtime polymorphism—translating business logic into maintainable Java structures.',
      icon: Code,
    },
    {
      title: 'Database Architecture & JDBC Persistence',
      desc: 'Hands-on competence in normalized relational database design (MySQL), complex multi-table joins, automated database triggers, and JDBC transaction safety.',
      icon: Database,
    },
    {
      title: 'Algorithmic Thinking & Data Structures',
      desc: 'Solid mastery over Collections (List, Set, Map), custom sorting comparators, array manipulation, and memory-conscious data organization.',
      icon: Layers,
    },
    {
      title: 'Debugging, Verification & Data Workflows',
      desc: 'Proven internship track record in debugging multi-step scripts, validating inputs/outputs, and maintaining clean reproducible technical documentation.',
      icon: Workflow,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Reliability Systems with <span className="text-gradient-orange">Core Java & MySQL</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            A developer who cares about relational consistency, robust error trapping, and clean object-oriented architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual & Quick Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800/50 p-2 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src="/hero-java.jpg"
                  alt="Gowtham K - Java Developer Workstation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-base font-heading">Gowtham K</p>
                      <p className="text-orange-400 text-xs font-mono">B.Sc. Computer Science (2022–2026)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold">
                      Campus Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Info Card */}
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-mono font-semibold">
                Verified Candidate Details
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Location</span>
                  </div>
                  <span className="font-medium text-white">{personalInfo.location}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Education</span>
                  </div>
                  <span className="font-medium text-white text-right text-xs sm:text-sm">
                    AVS College of Arts & Science
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Languages className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Languages</span>
                  </div>
                  <span className="font-medium text-white">{personalInfo.languages.join(', ')}</span>
                </div>

                {/* Email with copy */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono truncate max-w-[170px]">
                      {personalInfo.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono">{personalInfo.phone}</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Career Objective, Technical Pillars */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Professional Summary */}
            <div className="glass-panel rounded-2xl p-8 space-y-4 border-l-4 border-l-orange-500">
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" />
                Professional Summary & Career Objective
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {personalInfo.summary}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm pt-2">
                Targeting opportunities in software engineering, backend systems, and enterprise Java development where I can apply my deep foundation in Core Java, JDBC, and SQL normalization to build performant, maintainable software.
              </p>
            </div>

            {/* 4 Technical Pillars */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-mono font-semibold">
                Core Engineering Strengths
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalStrengths.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="glass-panel glass-panel-hover rounded-xl p-5 space-y-2.5 border border-slate-700/60"
                    >
                      <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-white font-semibold text-sm font-heading">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills Ribbon */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-3">
                Analytical & Professional Aptitude
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-200 hover:border-orange-500/40 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
