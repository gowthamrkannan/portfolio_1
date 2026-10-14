import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Terminal as TerminalIcon, 
  Play, 
  FileText, 
  ArrowRight, 
  Database, 
  Copy, 
  Check, 
  Code2
} from 'lucide-react';
import { heroStats, interactiveTerminalTabs } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    'Java Full Stack Developer',
    'Core Java & OOP Specialist',
    'JDBC & MySQL Database Developer',
    'Data Structures & Problem Solver',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTabId, setActiveTabId] = useState(interactiveTerminalTabs[0].id);
  const [isExecuting, setIsExecuting] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    '>> JVM initialized: OpenJDK 17.0.9 (64-Bit Server VM)',
    '>> Classpath loaded: com.gowtham.chitfund.*',
    '>> Ready for interactive execution. Click [Run Code] below.',
  ]);
  const [copiedCode, setCopiedCode] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const activeTab = interactiveTerminalTabs.find((t) => t.id === activeTabId) || interactiveTerminalTabs[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunCode = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setConsoleLogs([
      `>> Compiling ${activeTab.fileName}...`,
      '>> Checking syntax and types: 0 errors, 0 warnings.',
    ]);

    setTimeout(() => {
      if (activeTab.id === 'service') {
        setConsoleLogs((prev) => [
          ...prev,
          '>> [JDBC] Establishing connection pool to MySQL on port 3306...',
          '>> [SERVICE] Initializing auction settlement for Group #A123',
          '>> [CALCULATION] 25 active subscribers: Dividend = ₹18,000 / 25 = ₹720.00 / member',
          '>> [SQL] Executing INSERT INTO tbl_bidding_records VALUES (...)',
          '>> [TRIGGER] trg_after_collection_insert fired: Customer ledgers updated in 12ms',
          '>> [SUCCESS] Transaction committed. Status: 200 OK (Clean Exit)',
        ]);
      } else if (activeTab.id === 'db') {
        setConsoleLogs((prev) => [
          ...prev,
          '>> [LOAD] Loading JDBC Driver class: com.mysql.cj.jdbc.Driver',
          '>> [CONNECT] Attempting handshake: jdbc:mysql://localhost:3306/chit_fund_db',
          '>> [AUTH] User root authenticated with caching_sha2_password',
          '>> [CONNECTION] Connection #1 initialized with autoCommit = false',
          '>> [HEALTH] Ping duration: 4ms. Active and ready for queries.',
        ]);
      } else {
        setConsoleLogs((prev) => [
          ...prev,
          '>> [QUERY PLAN] Optimizing SQL join tree across 4 relational tables...',
          '>> [INDEX SCAN] Using PRIMARY KEY index on tbl_customers (customer_id)',
          '>> [EXECUTE] Scanning 25 records with GROUP BY and HAVING clauses',
          '>> [RESULT] 25 rows retrieved in 8ms: Top contributor total_paid = ₹45,000',
          '>> [STATUS] All accounts verified against balance constraints.',
        ]);
      }
      setIsExecuting(false);
    }, 900);
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Actively Seeking Java & Backend Developer Opportunities</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400 font-mono mb-2">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Gowtham <span className="text-gradient-orange">K</span>
              </h1>
              
              <div className="h-12 sm:h-14 mt-2 flex items-center">
                <span className="font-heading text-xl sm:text-3xl text-orange-400 font-bold">
                  {displayText}
                </span>
                <span className="w-0.5 h-7 sm:h-8 bg-orange-500 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Specialized in crafting resilient, high-integrity backend architectures using{' '}
              <span className="text-white font-medium">Core Java</span>,{' '}
              <span className="text-white font-medium">JDBC</span>, and{' '}
              <span className="text-white font-medium">MySQL Relational Database Design</span>. 
              Proven ability in transactional systems, triggers, and algorithmic data structures with 2 completed industry internships.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download ATS Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-orange-500/50 text-slate-200 font-semibold text-sm shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Chit Management Project</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-white/20 text-slate-300 text-sm font-medium transition-all duration-200"
              >
                <span>Contact Gowtham</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
              {heroStats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-orange-500/30 transition-colors"
                >
                  <p className="text-lg font-bold text-white font-heading">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Java IDE Terminal */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-amber-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

            {/* Floating Java Badges */}
            <div className="absolute -top-5 -left-4 z-20 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-orange-500/40 px-3 py-1.5 rounded-lg shadow-xl shadow-black/40 animate-float">
              <Coffee className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-mono font-semibold text-orange-200">Java 17 & JDBC</span>
            </div>

            <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-lg shadow-xl shadow-black/40 animate-float-reverse">
              <Database className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-semibold text-amber-200">MySQL & Triggers</span>
            </div>

            {/* Terminal Window */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              {/* Window Header */}
              <div className="bg-slate-800/90 px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-orange-400" />
                    Interactive Java Studio
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-700/60 transition-colors"
                    title="Copy Code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={handleRunCode}
                    disabled={isExecuting}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className={`w-3 h-3 ${isExecuting ? 'animate-spin' : ''}`} />
                    <span>{isExecuting ? 'Running...' : 'Run Code'}</span>
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center bg-slate-950/70 border-b border-slate-800 px-2 overflow-x-auto">
                {interactiveTerminalTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-3 py-2 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                      activeTabId === tab.id
                        ? 'border-orange-500 text-orange-300 bg-slate-900/80'
                        : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-orange-400" />
                    {tab.fileName}
                  </button>
                ))}
              </div>

              {/* Code Display Area */}
              <div className="p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[290px] bg-slate-950/90 leading-relaxed">
                <pre className="text-left">
                  <code>
                    {activeTab.code.split('\n').map((line, idx) => (
                      <div key={idx} className="table-row">
                        <span className="table-cell pr-4 text-right select-none text-slate-600 text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="table-cell whitespace-pre">
                          {line.startsWith('//') || line.startsWith('--') ? (
                            <span className="text-slate-500 italic">{line}</span>
                          ) : line.includes('public class') || line.includes('SELECT') || line.includes('CREATE TRIGGER') ? (
                            <span className="text-orange-400 font-semibold">{line}</span>
                          ) : line.includes('import') || line.includes('package') || line.includes('FROM') || line.includes('WHERE') ? (
                            <span className="text-amber-300">{line}</span>
                          ) : line.includes('System.out') || line.includes('INSERT') || line.includes('UPDATE') ? (
                            <span className="text-emerald-300">{line}</span>
                          ) : (
                            line
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Simulated Console Log Area */}
              <div className="bg-slate-950 border-t border-slate-800 p-3 font-mono text-[11px] max-h-36 overflow-y-auto text-left">
                <div className="flex items-center justify-between text-slate-500 text-[10px] mb-1.5 uppercase tracking-wider">
                  <span>Standard Output (Console)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    JVM Live
                  </span>
                </div>
                <div className="space-y-1">
                  {consoleLogs.map((log, index) => (
                    <div 
                      key={index} 
                      className={`${
                        log.includes('[ERROR]') 
                          ? 'text-red-400' 
                          : log.includes('[SUCCESS]') || log.includes('[CONNECTED]') 
                          ? 'text-emerald-400 font-semibold' 
                          : log.includes('[TRIGGER]') || log.includes('[JDBC]')
                          ? 'text-amber-300'
                          : 'text-slate-400'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
