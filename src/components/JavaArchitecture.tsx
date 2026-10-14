import React, { useState } from 'react';
import { 
  Cpu, 
  Boxes, 
  Layers, 
  DatabaseZap, 
  Workflow, 
  ShieldAlert, 
  Copy, 
  Check, 
  Code2, 
  CheckCircle2, 
  Zap
} from 'lucide-react';
import { javaArchitecturePillars } from '../data/resumeData';

export const JavaArchitecture: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(javaArchitecturePillars[0].id);
  const [copied, setCopied] = useState(false);

  const activePillar =
    javaArchitecturePillars.find((p) => p.id === activePillarId) || javaArchitecturePillars[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activePillar.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const iconLookup: Record<string, React.ElementType> = {
    Boxes,
    Layers,
    DatabaseZap,
    Workflow,
    ShieldAlert,
  };

  return (
    <section id="architecture" className="py-24 relative bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Java Engineering Deep Dive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Java Architecture & <span className="text-gradient-orange">Design Patterns</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            How I architect enterprise Java backend code: prioritizing strict type safety, transaction atomicity, optimal collections, and database data integrity.
          </p>
        </div>

        {/* Pillar Selection Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {javaArchitecturePillars.map((pillar) => {
            const Icon = iconLookup[pillar.icon] || Boxes;
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-slate-800/90 border-orange-500/60 shadow-lg shadow-orange-500/10'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`text-xs font-bold font-heading truncate ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {pillar.title}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">{pillar.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Architecture Breakdown & Live Code Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Architectural Rationale & Key Takeaways */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-panel rounded-2xl p-6 space-y-4 border-l-4 border-l-orange-500">
              <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400">
                Architectural Breakdown
              </span>
              <h3 className="text-xl font-bold text-white font-heading">
                {activePillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activePillar.summary}
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-slate-400 font-mono font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Key Engineering Decisions
              </h4>
              <ul className="space-y-3">
                {activePillar.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recruiter Evaluation Badge */}
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center gap-3">
              <Zap className="w-5 h-5 text-orange-400 shrink-0" />
              <p className="text-xs text-slate-300">
                <span className="text-orange-300 font-semibold">Recruiter Takeaway:</span> Demonstrates real-world software design patterns beyond rote textbook theory.
              </p>
            </div>
          </div>

          {/* Right Column: Code Snippet Viewer */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl">
              
              {/* Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-orange-400" />
                    Implementation Pattern: {activePillar.title}
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
                  title="Copy Code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto max-h-[460px] leading-relaxed">
                <pre className="text-left">
                  <code>
                    {activePillar.codeSnippet.split('\n').map((line, idx) => (
                      <div key={idx} className="table-row">
                        <span className="table-cell pr-4 text-right select-none text-slate-600 text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="table-cell whitespace-pre">
                          {line.startsWith('//') || line.startsWith('--') ? (
                            <span className="text-slate-500 italic">{line}</span>
                          ) : line.includes('public class') || line.includes('CREATE TRIGGER') ? (
                            <span className="text-orange-400 font-semibold">{line}</span>
                          ) : line.includes('import') || line.includes('package') || line.includes('throws') ? (
                            <span className="text-amber-300">{line}</span>
                          ) : line.includes('synchronized') || line.includes('setAutoCommit') || line.includes('commit()') ? (
                            <span className="text-emerald-400 font-semibold">{line}</span>
                          ) : (
                            line
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Bottom footer status */}
              <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Java SE 17+ / MySQL 8.0 Compatible</span>
                <span className="text-orange-400">Production Tested Pattern</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
