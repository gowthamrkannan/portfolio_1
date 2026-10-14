import React, { useState } from 'react';
import { 
  FolderGit2, 
  GitBranch,
  Database, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Workflow
} from 'lucide-react';
import { projects } from '../data/resumeData';
import type { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const flagshipProject = projects[0]; // Chit Management System
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient-orange">System Architectures</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Direct real-world applications showcasing Core Java, relational MySQL schema design, JDBC persistence, and automated validation scripts.
          </p>
        </div>

        {/* FLAGSHIP PROJECT HERO CARD */}
        <div className="mb-14">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-orange-500/30 shadow-2xl p-6 sm:p-8 lg:p-10">
            {/* Subtle Top Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image Preview with overlay */}
              <div className="lg:col-span-6 relative group rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl">
                <img
                  src={flagshipProject.image}
                  alt={flagshipProject.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/40">
                    Flagship RDBMS & Java System
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono bg-slate-900/90 px-2.5 py-1 rounded border border-white/10">
                    MySQL 8.0 + JDBC + Core Java
                  </span>
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold transition-colors cursor-pointer"
                  >
                    <span>View DB Schema</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold">
                    {flagshipProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-400 mt-1">
                    {flagshipProject.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {flagshipProject.summary}
                </p>

                {/* Problem vs Solution Comparison Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20">
                    <p className="font-semibold text-red-300 font-mono mb-1">Problem Addressed:</p>
                    <p className="text-slate-400 leading-relaxed">{flagshipProject.problemStatement}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <p className="font-semibold text-emerald-300 font-mono mb-1">Architectural Solution:</p>
                    <p className="text-slate-400 leading-relaxed">{flagshipProject.solution}</p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flagshipProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-orange-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs shadow-md shadow-orange-500/25 transition-all cursor-pointer"
                  >
                    <Database className="w-4 h-4" />
                    <span>Explore Relational Design & Triggers</span>
                  </button>

                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <GitBranch className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-700/60 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[11px] font-mono text-orange-300">
                    {project.period}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 text-left">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-heading">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="View on GitHub"
                >
                  <GitBranch className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAIL MODAL FOR CHIT MANAGEMENT SYSTEM */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-orange-500/40 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-slate-800/90 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base font-heading">
                    {selectedProject.title} — System Architecture
                  </h3>
                  <p className="text-xs text-orange-400 font-mono">
                    Relational Schema & JDBC Persistence Layer
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-left">
              
              {/* Architecture Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-orange-400 font-semibold mb-2">
                  System Architecture & Relational Design
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Database Design Details */}
              {selectedProject.databaseDesign && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <h5 className="text-xs font-mono font-bold text-white mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-orange-400" />
                      Core Normalized Tables
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                      {selectedProject.databaseDesign.tables.map((t, idx) => (
                        <li key={idx}>• {t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <h5 className="text-xs font-mono font-bold text-white mb-2 flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5 text-amber-400" />
                      Database Triggers
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
                      {selectedProject.databaseDesign.triggers.map((trg, idx) => (
                        <li key={idx} className="text-[11px]">• {trg}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                    <h5 className="text-xs font-mono font-bold text-white mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Data Integrity Guarantees
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
                      {selectedProject.databaseDesign.integrityConstraints.map((c, idx) => (
                        <li key={idx} className="text-[11px]">• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Full Feature Breakdown */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-orange-400 font-semibold mb-3">
                  Verified Feature Implementations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, fIdx) => (
                    <div key={fIdx} className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/60 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruiter Learning Outcomes */}
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/25">
                <h4 className="text-xs font-mono font-bold text-orange-300 mb-2">
                  Technical Takeaways & Interview Readiness
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.learningOutcomes.map((lo, lIdx) => (
                    <li key={lIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-orange-400 font-bold">✓</span>
                      <span>{lo}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-800/90 px-6 py-4 border-t border-slate-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Created using Eclipse IDE & MySQL Workbench
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
