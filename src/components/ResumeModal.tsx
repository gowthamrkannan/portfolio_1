import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';
import { personalInfo, experiences } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawResumeText = `Gowtham K
Salem, Tamil Nadu | +91-6384017574 | gowthamrkannan@gmail.com
linkedin.com/in/gowtham-k-57b52a294 | github.com/gowthamrkannan | portfolio-gowthamrkannan-7690.vercel.app

PROFESSIONAL SUMMARY
Java Full Stack Developer with hands-on knowledge of Core Java, Object-Oriented Programming, Collections, Data Structures, and Exception Handling. Skilled in developing database-driven applications using Java and MySQL. Familiar with HTML5, CSS3, Bootstrap, Git, and GitHub. Strong problem-solving, analytical, debugging, and database development skills.

EDUCATION
AVS College of Arts & Science, Salem, India
B.Sc. Computer Science (2022 – 2026)

TECHNICAL SKILLS
- Programming: Java, SQL
- Java: Core Java, OOP, Collections, Data Structures, Exception Handling
- Web: HTML5, CSS3, Bootstrap 5
- Backend: Java
- Database: MySQL, DBMS, Relational Database Design
- Tools: Git, GitHub, Eclipse, VS Code
- Core Concepts: SDLC, Debugging, Problem Solving, Database Connectivity, Object-Oriented Design

EXPERIENCE
VK Software Solution — Machine Learning Intern (Remote) | Jan 2025 – Feb 2025
- Processed and prepared structured datasets using Python for Machine Learning workflows, including data cleaning and preprocessing.
- Analyzed dataset features and supported evaluation of Machine Learning models by validating inputs and outputs.
- Developed Python scripts for data preprocessing and performed validation checks to improve data quality.
- Debugged data processing workflows and documented implementation steps for reproducible development activities.

CSK Academy — Python Intern (Remote) | Jul 2024 – Aug 2024
- Developed Python programs and automation scripts using functions, data structures, exception handling, and file operations.
- Implemented programming exercises involving lists, dictionaries, strings, loops, functions, and object-oriented concepts.
- Applied problem-solving and debugging techniques to improve program correctness and implementation quality.
- Maintained technical documentation for programming tasks and development activities.

PROJECTS
Chit Management System | Java, MySQL, SQL, JDBC
- Designed and implemented a relational database system to manage customers, monthly collections, bidding details, and payout records.
- Developed Java-based database operations using JDBC for connecting the application with MySQL and performing CRUD operations.
- Implemented SQL queries using joins, aggregations, subqueries, and filtering to generate transaction and customer reports.
- Created database triggers to support automated transaction-related operations and improve data consistency.
- Applied primary keys, foreign keys, normalization, and relational database design principles to maintain data integrity.

CERTIFICATIONS & TRAINING
- Java Full Stack Development Training – In Progress
- Machine Learning Internship Certification – VK Software Solution, 2025
- Python Development Internship Certification – CSK Academy, 2024

ADDITIONAL INFORMATION
- Soft Skills: Problem Solving, Analytical Thinking, Communication, Team Collaboration, Adaptability
- Languages: English, Tamil`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-800/90 px-6 py-4 border-b border-slate-700 flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base font-heading">
                ATS-Optimized Resume Document
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Candidate: Gowtham K | Java Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-mono transition-colors cursor-pointer"
              title="Copy ATS Plain Text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-200 font-sans text-left space-y-6">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Gowtham K
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-mono flex flex-wrap items-center justify-center gap-3">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`tel:${personalInfo.phone}`} className="text-orange-400 hover:underline">
                {personalInfo.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-orange-400 hover:underline">
                {personalInfo.email}
              </a>
            </p>
            <p className="text-xs font-mono text-slate-400 flex flex-wrap items-center justify-center gap-3 pt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-orange-400">
                linkedin.com/in/gowtham-k-57b52a294
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-orange-400">
                github.com/gowthamrkannan
              </a>
              <span>•</span>
              <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-orange-400">
                portfolio-gowthamrkannan-7690.vercel.app
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-sm">
              <div>
                <p className="font-bold text-white">AVS College of Arts & Science</p>
                <p className="text-slate-400">Bachelor of Science (B.Sc.) in Computer Science</p>
              </div>
              <div className="text-right text-xs font-mono text-slate-400">
                <p>Salem, India</p>
                <p className="text-orange-400 font-semibold">2022 – 2026</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p><span className="font-bold text-white">Programming:</span> Java, SQL</p>
              <p><span className="font-bold text-white">Java:</span> Core Java, OOP, Collections, Data Structures, Exception Handling</p>
              <p><span className="font-bold text-white">Web:</span> HTML5, CSS3, Bootstrap 5</p>
              <p><span className="font-bold text-white">Backend:</span> Java</p>
              <p><span className="font-bold text-white">Database:</span> MySQL, DBMS, Relational Database Design</p>
              <p><span className="font-bold text-white">Tools:</span> Git, GitHub, Eclipse, VS Code</p>
              <p><span className="font-bold text-white">Core Concepts:</span> SDLC, Debugging, Problem Solving, Database Connectivity, Object-Oriented Design</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Experience / Internships
            </h2>
            
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between items-baseline font-bold text-white">
                  <span>{exp.company} — <span className="font-normal text-slate-300">{exp.role}</span></span>
                  <span className="font-mono text-xs text-orange-400">{exp.period}</span>
                </div>
                <p className="text-[11px] font-mono text-slate-400">{exp.location}</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                  {exp.description.map((line, lIdx) => (
                    <li key={lIdx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Projects
            </h2>

            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline font-bold text-white">
                <span>Chit Management System</span>
                <span className="font-mono text-xs text-slate-400">Java, MySQL, SQL, JDBC</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Designed and implemented a relational database system to manage customers, monthly collections, bidding details, and payout records.</li>
                <li>Developed Java-based database operations using JDBC for connecting the application with MySQL and performing CRUD operations.</li>
                <li>Implemented SQL queries using joins, aggregations, subqueries, and filtering to generate transaction and customer reports.</li>
                <li>Created database triggers to support automated transaction-related operations and improve data consistency.</li>
                <li>Applied primary keys, foreign keys, normalization, and relational database design principles to maintain data integrity.</li>
              </ul>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Certifications & Training
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300">
              <li>Java Full Stack Development Training – In Progress</li>
              <li>Machine Learning Internship Certification – VK Software Solution, 2025</li>
              <li>Python Development Internship Certification – CSK Academy, 2024</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-slate-800 pb-1">
              Additional Information
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white">Soft Skills:</span> Problem Solving, Analytical Thinking, Communication, Team Collaboration, Adaptability
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white">Languages:</span> English, Tamil
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
