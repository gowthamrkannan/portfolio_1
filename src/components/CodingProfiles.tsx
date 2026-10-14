import React from 'react';
import { 
  GitBranch, 
  Link2, 
  Globe, 
  ExternalLink, 
  Code
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      name: 'GitHub',
      handle: 'gowthamrkannan',
      url: personalInfo.github,
      description: 'Public code repositories for Chit Management System, Java collections exercises, and Python automation scripts.',
      icon: GitBranch,
      badge: 'Active Repositories',
      color: 'from-slate-700 to-slate-900',
      accentColor: 'text-orange-400',
    },
    {
      name: 'LinkedIn Professional Profile',
      handle: 'gowtham-k-57b52a294',
      url: personalInfo.linkedin,
      description: 'Professional networking, internship milestones, technical posts, and recruiter communications.',
      icon: Link2,
      badge: 'Verified Identity',
      color: 'from-blue-900/60 to-slate-900',
      accentColor: 'text-blue-400',
    },
    {
      name: 'Live Web Portfolio',
      handle: 'portfolio-gowthamrkannan-7690',
      url: personalInfo.portfolio,
      description: 'Live deployed web demonstration showcasing previous iterations and interactive frontend components.',
      icon: Globe,
      badge: 'Deployed on Vercel',
      color: 'from-orange-950/40 to-slate-900',
      accentColor: 'text-amber-400',
    },
  ];

  return (
    <section className="py-20 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified <span className="text-gradient-orange">Coding Profiles</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Review live source code repositories, open-source commits, and professional connections.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-700/70 text-left group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-3 truncate">
                    @{item.handle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:translate-x-1 transition-transform">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
