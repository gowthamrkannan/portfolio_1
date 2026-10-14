import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Search, 
  Coffee, 
  Boxes, 
  Layers, 
  Binary, 
  ShieldAlert, 
  DatabaseZap, 
  Database, 
  FileCode2, 
  Zap, 
  Workflow, 
  Code, 
  Palette, 
  Layout, 
  GitBranch, 
  Terminal, 
  Bug, 
  FileSpreadsheet
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

// Map string icon names to Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  Coffee,
  Boxes,
  Layers,
  Binary,
  ShieldAlert,
  DatabaseZap,
  Database,
  FileCode2,
  Zap,
  Workflow,
  Code,
  Palette,
  Layout,
  GitBranch,
  Terminal,
  Bug,
  FileSpreadsheet,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allCategories = ['All', ...skillCategories.map((c) => c.name)];

  const filteredSkills = useMemo(() => {
    let list: Array<{
      categoryName: string;
      name: string;
      level: number;
      experience: string;
      highlight: string;
      tags: string[];
      iconName: string;
    }> = [];

    skillCategories.forEach((cat) => {
      if (selectedCategory === 'All' || selectedCategory === cat.name) {
        cat.skills.forEach((skill) => {
          list.push({
            categoryName: cat.name,
            ...skill,
          });
        });
      }
    });

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.highlight.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="text-gradient-orange">Skill Matrix</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Core Java fundamentals, relational database mastery, and practical frontend toolsets verified across academic projects and remote internships.
          </p>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, tag, or concept..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.iconName] || Coffee;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between border border-slate-700/60 transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Icon, Name & Level Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm font-heading">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.categoryName}
                        </span>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-800 border border-slate-700 text-orange-300 shrink-0">
                      {skill.experience}
                    </span>
                  </div>

                  {/* Practical Description Highlight */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {skill.highlight}
                  </p>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-orange-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-400"
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

        {/* Empty state if search returns nothing */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-orange-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
