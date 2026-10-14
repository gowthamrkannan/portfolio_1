import type {
  ProjectItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from '../types';

export const personalInfo = {
  name: 'Gowtham K',
  role: 'Java Full Stack Developer',
  tagline: 'Building robust, transactional backend systems with Core Java, JDBC, and relational MySQL architecture.',
  location: 'Salem, Tamil Nadu, India',
  phone: '+91-6384017574',
  email: 'gowthamrkannan@gmail.com',
  linkedin: 'https://linkedin.com/in/gowtham-k-57b52a294',
  github: 'https://github.com/gowthamrkannan',
  portfolio: 'https://portfolio-gowthamrkannan-7690.vercel.app',
  summary:
    'Java Full Stack Developer with hands-on knowledge of Core Java, Object-Oriented Programming, Collections, Data Structures, and Exception Handling. Skilled in developing database-driven applications using Java and MySQL. Familiar with HTML5, CSS3, Bootstrap, Git, and GitHub. Strong problem-solving, analytical, debugging, and database development skills.',
  languages: ['English', 'Tamil'],
  softSkills: [
    'Problem Solving',
    'Analytical Thinking',
    'Communication',
    'Team Collaboration',
    'Adaptability',
    'Debugging & Troubleshooting',
  ],
  status: 'Open to Software Engineer, Java Developer, and Backend Entry-Level Roles',
};

export const heroStats = [
  { label: 'Core Tech', value: 'Java & MySQL' },
  { label: 'Internships', value: '2 Completed' },
  { label: 'Relational DBMS', value: 'JDBC & Triggers' },
  { label: 'Degree', value: 'B.Sc. CS 2026' },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Core Java & Backend',
    description: 'Fundamental object-oriented design, collections algorithms, and resilient exception handling',
    skills: [
      {
        name: 'Core Java',
        level: 90,
        experience: 'Comprehensive',
        highlight: 'OOP principles, robust syntax, memory management, JVM architecture',
        tags: ['Java 8/11/17', 'Clean Code', 'Modular Design'],
        iconName: 'Coffee',
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        level: 92,
        experience: 'Advanced',
        highlight: 'Encapsulation, inheritance hierarchies, runtime polymorphism, interface abstraction',
        tags: ['Encapsulation', 'Polymorphism', 'Abstraction', 'Inheritance'],
        iconName: 'Boxes',
      },
      {
        name: 'Collections Framework',
        level: 88,
        experience: 'Hands-on',
        highlight: 'ArrayList, LinkedList, HashMap, HashSet, Iterators, Custom Comparators',
        tags: ['List', 'Map', 'Set', 'Generics', 'Time Complexity'],
        iconName: 'Layers',
      },
      {
        name: 'Data Structures & Algorithms',
        level: 85,
        experience: 'Solid Foundation',
        highlight: 'Array manipulation, linked structures, hashing techniques, searching & sorting',
        tags: ['Arrays', 'Stacks', 'Queues', 'Hashing', 'Sorting'],
        iconName: 'Binary',
      },
      {
        name: 'Exception Handling',
        level: 90,
        experience: 'Thorough',
        highlight: 'Checked/unchecked exceptions, try-catch-finally, custom business exceptions',
        tags: ['Try-Catch', 'Custom Exceptions', 'Resilience'],
        iconName: 'ShieldAlert',
      },
      {
        name: 'JDBC (Java Database Connectivity)',
        level: 88,
        experience: 'Production-ready',
        highlight: 'DriverManager, Connection handling, PreparedStatement, ResultSet, transactions',
        tags: ['Connection Pooling', 'PreparedStatements', 'CRUD'],
        iconName: 'DatabaseZap',
      },
    ],
  },
  {
    name: 'Database & SQL Architecture',
    description: 'Relational schema design, normalization, triggers, and query performance',
    skills: [
      {
        name: 'MySQL & Relational DBMS',
        level: 88,
        experience: 'In-depth',
        highlight: 'Schema normalization (1NF, 2NF, 3NF), index optimization, foreign key constraints',
        tags: ['MySQL 8.0', 'Constraints', 'Data Integrity'],
        iconName: 'Database',
      },
      {
        name: 'SQL (Complex Joins & Aggregations)',
        level: 90,
        experience: 'Advanced',
        highlight: 'INNER/LEFT/RIGHT joins, GROUP BY, HAVING, subqueries, analytical reports',
        tags: ['Joins', 'Subqueries', 'Aggregations', 'Reports'],
        iconName: 'FileCode2',
      },
      {
        name: 'Database Triggers & Procedures',
        level: 85,
        experience: 'Hands-on',
        highlight: 'Automated ledger balance reconciliation, audit logging, constraint enforcement',
        tags: ['Triggers', 'Audit Trails', 'Data Consistency'],
        iconName: 'Zap',
      },
      {
        name: 'Relational Database Design',
        level: 88,
        experience: 'Architectural',
        highlight: 'Entity-Relationship modeling, primary keys, cascading rules, normalization',
        tags: ['ER Diagrams', 'Normalization', 'Relational Schemas'],
        iconName: 'Workflow',
      },
    ],
  },
  {
    name: 'Web & Frontend Development',
    description: 'Responsive user interfaces, modern semantic layouts, and clean responsive design',
    skills: [
      {
        name: 'HTML5',
        level: 90,
        experience: 'Proficient',
        highlight: 'Semantic HTML, accessibility standards, form validations, SEO markup',
        tags: ['Semantic Web', 'Accessibility', 'Forms'],
        iconName: 'Code',
      },
      {
        name: 'CSS3',
        level: 85,
        experience: 'Proficient',
        highlight: 'Flexbox, CSS Grid, custom keyframe animations, glassmorphism, responsive queries',
        tags: ['Flexbox', 'Grid', 'Transitions', 'Media Queries'],
        iconName: 'Palette',
      },
      {
        name: 'Bootstrap 5',
        level: 88,
        experience: 'Extensive',
        highlight: 'Mobile-first grid system, utility classes, responsive cards, modals, navigation',
        tags: ['Grid System', 'Components', 'Responsive UI'],
        iconName: 'Layout',
      },
    ],
  },
  {
    name: 'Tools, Workflows & Methodologies',
    description: 'Version control, developer IDEs, debugging workflows, and SDLC phases',
    skills: [
      {
        name: 'Git & GitHub',
        level: 88,
        experience: 'Daily Driver',
        highlight: 'Branching, commit conventions, merge conflict resolution, pull request workflows',
        tags: ['Branching', 'Pull Requests', 'Version Control'],
        iconName: 'GitBranch',
      },
      {
        name: 'Eclipse IDE & VS Code',
        level: 90,
        experience: 'Advanced',
        highlight: 'Project configuration, build paths, debugging breakpoints, extension tooling',
        tags: ['Eclipse', 'VS Code', 'Interactive Debugging'],
        iconName: 'Terminal',
      },
      {
        name: 'SDLC & Debugging',
        level: 85,
        experience: 'Structured',
        highlight: 'Requirement analysis, debugging runtime exceptions, stack trace evaluation',
        tags: ['SDLC', 'Stack Trace', 'Root Cause Analysis'],
        iconName: 'Bug',
      },
      {
        name: 'Python (Scripting & Data)',
        level: 82,
        experience: 'Internship Verified',
        highlight: 'Data cleaning, automation scripts, preprocessing checks, file operations',
        tags: ['Automation', 'Data Cleaning', 'File I/O'],
        iconName: 'FileSpreadsheet',
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'chit-management-system',
    title: 'Chit Management System',
    subtitle: 'Enterprise Relational Database & JDBC Java Application',
    category: 'Full Stack Java & RDBMS',
    period: 'Academic & Personal Project',
    image: '/chit-system.jpg',
    summary:
      'A comprehensive Java and MySQL financial application engineered to automate chit fund operations, monthly collections, auction biddings, customer ledger tracking, and automated payout disbursement.',
    problemStatement:
      'Traditional chit fund groups suffer from severe manual bookkeeping errors, bid miscalculations, delayed ledger reconciliations, lack of audit trails, and data inconsistencies during monthly auction settlements.',
    solution:
      'Engineered a robust multi-tier architecture using Core Java and MySQL. Designed normalized 3NF relational schemas, integrated JDBC PreparedStatements for safe transaction handling, and programmed database triggers to automate balance updates and ensure ACID compliance.',
    techStack: ['Java', 'MySQL', 'JDBC', 'SQL', 'Eclipse IDE', 'Relational DBMS'],
    features: [
      'Customer Ledger Management: CRUD operations for chit subscriber profiles and subscription installments.',
      'Monthly Collection Engine: Tracks installment payments, due dates, penalty fees, and payment vouchers.',
      'Auction & Bidding System: Records monthly auction bids, calculates dividend distributions, and determines prize money.',
      'Automated Database Triggers: Triggers fire on installment inserts to instantly recalculate balance ledgers and prevent manual discrepancies.',
      'Reporting & Analytics: Multi-table SQL joins and aggregations generating balance sheets, overdue borrower lists, and auction summaries.',
      'Data Integrity & Security: Enforced primary/foreign keys, unique constraints, and parameterized JDBC queries to prevent SQL injection.',
    ],
    databaseDesign: {
      tables: ['tbl_customers', 'tbl_chit_groups', 'tbl_monthly_collections', 'tbl_bidding_records', 'tbl_payout_ledger'],
      triggers: [
        'trg_after_collection_insert (auto updates customer outstanding balance)',
        'trg_after_bidding_finalize (calculates auction dividend distribution per member)',
      ],
      integrityConstraints: [
        'Foreign key cascade on customer group allocation',
        'Check constraints on non-negative bid amounts',
        'Primary key auto-increment indexing for high lookup throughput',
      ],
    },
    learningOutcomes: [
      'Mastered end-to-end JDBC lifecycle: Connection management, Statements, and transactional rollback mechanisms.',
      'Gained deep proficiency in SQL query optimization with multi-table joins, subqueries, and grouping.',
      'Implemented real-world database triggers that eliminated manual ledger reconciliation errors by 100%.',
      'Engineered clean OOP architecture separating database persistence logic from business domain models.',
    ],
    githubUrl: 'https://github.com/gowthamrkannan/chit-management-system',
  },
  {
    id: 'python-ml-data-pipeline',
    title: 'Python Data Preprocessing & ML Workflow Toolkit',
    subtitle: 'Data Engineering & Validation Suite',
    category: 'Python & Data Engineering',
    period: 'Jan 2025 – Feb 2025',
    image: '/python-ml-pipeline.jpg',
    summary:
      'Developed during internship at VK Software Solution: An automated data preprocessing and validation pipeline designed to clean, transform, and evaluate structured datasets for Machine Learning models.',
    problemStatement:
      'Machine learning model training frequently fails or produces skewed results due to unhandled null values, mismatched feature data types, extreme outliers, and non-reproducible manual data cleaning steps.',
    solution:
      'Developed modular Python scripts to parse raw CSV/JSON datasets, execute missing-value imputations, normalize features, generate data quality reports, and validate model inputs/outputs against baseline thresholds.',
    techStack: ['Python', 'Data Cleaning', 'Data Validation', 'Scripting', 'ML Workflows'],
    features: [
      'Automated Missing Value Imputation: Detected null values and applied mean/median/custom imputation strategies.',
      'Feature Validation Scripts: Automated checks ensuring all feature datatypes and boundary ranges match model specs.',
      'Dataset Profiling: Generated descriptive statistics and distribution summaries before feeding data to ML algorithms.',
      'Model Evaluation Support: Validated prediction outputs against expected ground truth labels for accuracy scoring.',
      'Reproducible Documentation: Authored step-by-step developer guides and execution manuals for team collaboration.',
    ],
    learningOutcomes: [
      'Gained hands-on experience handling multi-thousand-row structured datasets under real industry deadlines.',
      'Understood how data quality directly influences predictive model performance.',
      'Strengthened debugging skills across Python data manipulation and automated verification scripts.',
    ],
    githubUrl: 'https://github.com/gowthamrkannan',
  },
  {
    id: 'python-automation-toolkit',
    title: 'Python Automation & Data Structures Toolkit',
    subtitle: 'Modular Programming & File Processing Engine',
    category: 'Automation & Scripting',
    period: 'Jul 2024 – Aug 2024',
    image: '/python-ml-pipeline.jpg',
    summary:
      'Developed during internship at CSK Academy: A modular suite of Python automation programs and data structure utilities implementing file parsing, dictionary manipulation, and robust exception handling.',
    problemStatement:
      'Repetitive system operations and manual file manipulation require modular automation scripts to eliminate repetitive manual interventions and handle unexpected input formats gracefully.',
    solution:
      'Constructed clean, reusable Python modules utilizing object-oriented principles, custom file handlers, dictionary-based lookups, and structured try-except error traps.',
    techStack: ['Python', 'OOP', 'Data Structures', 'File Handling', 'Exception Handling'],
    features: [
      'Automated File Processing: Reads, sanitizes, and writes structured records across local files with error trapping.',
      'Data Structure Implementation: Exercises utilizing dictionaries, lists, sets, and custom class abstractions.',
      'Resilient Error Handling: Structured try-except-finally blocks preventing script crashes on corrupt inputs.',
      'Technical Documentation: Created clear inline comments and markdown development logs for every utility.',
    ],
    learningOutcomes: [
      'Mastered Python data structures (lists, dictionaries, tuples, sets) and OOP implementations.',
      'Learned defensive programming through file I/O safety and custom exception boundaries.',
    ],
    githubUrl: 'https://github.com/gowthamrkannan',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'vk-software-solution',
    role: 'Machine Learning Intern',
    company: 'VK Software Solution',
    location: 'Remote',
    period: 'Jan 2025 – Feb 2025',
    type: 'Internship',
    description: [
      'Processed and prepared structured datasets using Python for Machine Learning workflows, including data cleaning and preprocessing.',
      'Analyzed dataset features and supported evaluation of Machine Learning models by validating inputs and outputs.',
      'Developed Python scripts for data preprocessing and performed validation checks to improve data quality.',
      'Debugged data processing workflows and documented implementation steps for reproducible development activities.',
    ],
    techUsed: ['Python', 'Data Cleaning', 'Feature Analysis', 'Validation Checks', 'Debugging', 'Documentation'],
    verifiedCredential: 'VK Software Solution Internship Certification (2025)',
  },
  {
    id: 'csk-academy',
    role: 'Python Intern',
    company: 'CSK Academy',
    location: 'Remote',
    period: 'Jul 2024 – Aug 2024',
    type: 'Internship',
    description: [
      'Developed Python programs and automation scripts using functions, data structures, exception handling, and file operations.',
      'Implemented programming exercises involving lists, dictionaries, strings, loops, functions, and object-oriented concepts.',
      'Applied problem-solving and debugging techniques to improve program correctness and implementation quality.',
      'Maintained technical documentation for programming tasks and development activities.',
    ],
    techUsed: ['Python', 'OOP', 'Data Structures', 'File Operations', 'Exception Handling', 'Debugging'],
    verifiedCredential: 'CSK Academy Internship Certification (2024)',
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science',
    institution: 'AVS College of Arts & Science',
    location: 'Salem, Tamil Nadu, India',
    period: '2022 – 2026',
    field: 'Computer Science',
    status: 'Final Year Student (Expected 2026)',
    courses: [
      'Core Java & Object-Oriented Programming',
      'Database Management Systems (DBMS) & SQL',
      'Data Structures & Algorithms',
      'Web Technologies (HTML, CSS, JavaScript)',
      'Operating Systems & System Architecture',
      'Software Engineering & SDLC',
      'Computer Networks & Protocols',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'Java Full Stack Development Training',
    issuer: 'Professional Training Program',
    year: '2025 – 2026',
    status: 'In Progress',
    description:
      'Intensive training encompassing Core Java, Advanced Java, Object-Oriented Design, JDBC database integration, SQL optimization, and Full Stack web architecture.',
    tags: ['Core Java', 'JDBC', 'MySQL', 'Full Stack', 'OOP'],
  },
  {
    title: 'Machine Learning Internship Certification',
    issuer: 'VK Software Solution',
    year: '2025',
    status: 'Completed',
    description:
      'Verified certification honoring successful completion of dataset preprocessing, feature engineering analysis, and ML workflow validation scripts.',
    tags: ['Machine Learning', 'Data Preprocessing', 'Python', 'Feature Analysis'],
  },
  {
    title: 'Python Development Internship Certification',
    issuer: 'CSK Academy',
    year: '2024',
    status: 'Completed',
    description:
      'Verified certification awarded for Python program engineering, data structures implementation, exception handling, and automation scripting.',
    tags: ['Python', 'Automation', 'Data Structures', 'OOP'],
  },
];

export const javaArchitecturePillars = [
  {
    id: 'oop',
    title: 'Object-Oriented Architecture',
    subtitle: 'Clean modularity, encapsulation, and domain design',
    icon: 'Boxes',
    summary:
      'Designing robust software entities by encapsulating mutable state, abstracting implementation details through interfaces, and utilizing polymorphism for clean extensibility.',
    points: [
      'Encapsulation: Private fields with validated getters/setters protecting internal business states.',
      'Polymorphism: Interface-based programming (DAO pattern) enabling flexible data layer swapping.',
      'Inheritance & Code Reuse: Abstract base entities for common database metadata (e.g., createdAt, updatedAt).',
    ],
    codeSnippet: `// Example Domain Entity with Encapsulation & Validation
public class Customer {
    private final int id;
    private String fullName;
    private String phoneNumber;
    private double currentBalance;

    public Customer(int id, String fullName, String phoneNumber) {
        if (fullName == null || fullName.trim().isEmpty()) {
            throw new IllegalArgumentException("Customer name cannot be empty");
        }
        this.id = id;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.currentBalance = 0.0;
    }

    public synchronized void recordPayment(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Payment amount must be greater than zero");
        }
        this.currentBalance += amount;
    }

    // Getters with immutable guarantees
    public int getId() { return id; }
    public String getFullName() { return fullName; }
    public double getCurrentBalance() { return currentBalance; }
}`,
  },
  {
    id: 'collections',
    title: 'Collections & Algorithmic Efficiency',
    subtitle: 'Choosing optimal data structures for speed & memory',
    icon: 'Layers',
    summary:
      'Leveraging the Java Collections Framework to optimize memory access patterns, fast lookups (O(1) HashMap), ordered sets, and deterministic data sorting.',
    points: [
      'HashMap for O(1) average lookup times of customer profiles by unique ID.',
      'ArrayList for fast indexed reads during report generation and tabular renders.',
      'Custom Comparator implementations for sorting auction bids by timestamp and descending bid value.',
    ],
    codeSnippet: `// Processing Auction Bids with Collections & Custom Comparator
import java.util.*;

public class AuctionBiddingEngine {
    private final Map<Integer, Customer> customerCache = new HashMap<>();
    private final List<BidRecord> activeBids = new ArrayList<>();

    public void addBid(BidRecord bid) {
        activeBids.add(bid);
    }

    public Optional<BidRecord> getHighestBidder() {
        return activeBids.stream()
            .max(Comparator.comparingDouble(BidRecord::getBidAmount)
                           .thenComparing(BidRecord::getTimestamp));
    }

    public void displaySortedBids() {
        activeBids.sort((b1, b2) -> Double.compare(b2.getBidAmount(), b1.getBidAmount()));
        for (BidRecord record : activeBids) {
            System.out.println(record);
        }
    }
}`,
  },
  {
    id: 'jdbc',
    title: 'JDBC & Transaction Resilience',
    subtitle: 'ACID guarantees, prepared statements, and safe connection lifecycle',
    icon: 'DatabaseZap',
    summary:
      'Architecting resilient database persistence using JDBC DriverManager, PreparedStatements to eliminate SQL Injection, and explicit transaction commits with rollback safety.',
    points: [
      'PreparedStatements with parameterized query tokens preventing SQL injection vulnerabilities.',
      'Auto-commit disabled during multi-step ledger entries ensuring all-or-nothing atomicity.',
      'Try-with-resources syntax ensuring connections and statement cursors close safely without leaks.',
    ],
    codeSnippet: `// Resilient JDBC Transaction Execution with Rollback
public class ChitFundDAO {
    private final Connection connection;

    public ChitFundDAO(Connection connection) {
        this.connection = connection;
    }

    public boolean recordMonthlyInstallment(int customerId, double amount, int month) {
        String insertSql = "INSERT INTO tbl_monthly_collections (customer_id, amount, month_no) VALUES (?, ?, ?)";
        String updateLedgerSql = "UPDATE tbl_payout_ledger SET total_paid = total_paid + ? WHERE customer_id = ?";

        try {
            connection.setAutoCommit(false); // Begin Transaction

            try (PreparedStatement insertStmt = connection.prepareStatement(insertSql);
                 PreparedStatement updateStmt = connection.prepareStatement(updateLedgerSql)) {
                
                insertStmt.setInt(1, customerId);
                insertStmt.setDouble(2, amount);
                insertStmt.setInt(3, month);
                insertStmt.executeUpdate();

                updateStmt.setDouble(1, amount);
                updateStmt.setInt(2, customerId);
                updateStmt.executeUpdate();

                connection.commit(); // Commit Transaction
                return true;
            } catch (SQLException ex) {
                connection.rollback(); // Rollback on Failure
                System.err.println("Transaction rolled back: " + ex.getMessage());
                throw ex;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}`,
  },
  {
    id: 'triggers',
    title: 'MySQL Triggers & Relational Design',
    subtitle: 'Automated data consistency and 3NF normalization',
    icon: 'Workflow',
    summary:
      'Designing relational schemas adhering to third normal form (3NF) and writing server-side MySQL triggers that guarantee mathematical ledger balances without depending solely on client logic.',
    points: [
      'AFTER INSERT triggers guaranteeing instant audit record generation upon payment.',
      'Foreign key cascading rules preventing orphaned transaction logs.',
      'Indexes on foreign keys (customer_id, group_id) for instantaneous joins across tens of thousands of rows.',
    ],
    codeSnippet: `-- MySQL Database Trigger for Chit Management System
DELIMITER $$

CREATE TRIGGER trg_after_collection_insert
AFTER INSERT ON tbl_monthly_collections
FOR EACH ROW
BEGIN
    -- Automatically recalculate customer total outstanding balance
    UPDATE tbl_payout_ledger
    SET 
        total_installments_paid = total_installments_paid + 1,
        total_amount_collected = total_amount_collected + NEW.amount,
        last_payment_date = CURRENT_TIMESTAMP
    WHERE customer_id = NEW.customer_id;

    -- Insert into immutable audit log
    INSERT INTO tbl_audit_trail (event_type, customer_id, amount_recorded, event_time)
    VALUES ('INSTALLMENT_CREDITED', NEW.customer_id, NEW.amount, NOW());
END$$

DELIMITER ;`,
  },
];

export const interactiveTerminalTabs = [
  {
    id: 'service',
    fileName: 'ChitFundService.java',
    language: 'java',
    code: `package com.gowtham.chitfund.service;

import com.gowtham.chitfund.model.Customer;
import com.gowtham.chitfund.dao.ChitFundDAO;
import java.sql.SQLException;

public class ChitFundService {
    private final ChitFundDAO dao;

    public ChitFundService(ChitFundDAO dao) {
        this.dao = dao;
    }

    public void processMonthlyAuction(int groupId, int winnerCustomerId, double bidDiscount) {
        System.out.println(">> Initializing auction settlement for Group #" + groupId);
        
        try {
            // 1. Calculate dividend per subscriber
            double dividendPerMember = bidDiscount / 25.0; // 25 members in standard group
            System.out.printf(">> Calculated Dividend: ₹%.2f per member%n", dividendPerMember);

            // 2. Persist auction payout record atomically
            boolean isSaved = dao.saveAuctionResult(groupId, winnerCustomerId, bidDiscount);
            
            if (isSaved) {
                System.out.println(">> [SUCCESS] Auction results committed to MySQL database.");
                System.out.println(">> [TRIGGER] Customer payout ledger updated automatically.");
            }
        } catch (SQLException e) {
            System.err.println(">> [ERROR] Database transaction failed: " + e.getMessage());
        }
    }
}`,
  },
  {
    id: 'db',
    fileName: 'DBConnection.java',
    language: 'java',
    code: `package com.gowtham.chitfund.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/chit_fund_db?useSSL=false";
    private static final String USER = "root";
    private static final String PASS = "admin@123";
    private static Connection connection = null;

    private DBConnection() {} // Singleton

    public static Connection getConnection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(URL, USER, PASS);
                System.out.println(">> [CONNECTED] Active connection established with MySQL Server.");
            } catch (ClassNotFoundException e) {
                throw new SQLException("MySQL JDBC Driver not found", e);
            }
        }
        return connection;
    }
}`,
  },
  {
    id: 'query',
    fileName: 'MonthlyReportQuery.sql',
    language: 'sql',
    code: `-- Analytical Monthly Performance Query with Multi-Table Joins
SELECT 
    c.customer_id,
    c.full_name,
    cg.group_name,
    COUNT(mc.collection_id) AS total_months_paid,
    SUM(mc.amount) AS total_contributed,
    pl.current_outstanding_balance,
    CASE 
        WHEN pl.current_outstanding_balance = 0 THEN 'CLEARED'
        WHEN pl.current_outstanding_balance > 0 THEN 'REGULAR'
        ELSE 'OVERDUE'
    END AS account_status
FROM tbl_customers c
INNER JOIN tbl_chit_groups cg ON c.group_id = cg.group_id
LEFT JOIN tbl_monthly_collections mc ON c.customer_id = mc.customer_id
LEFT JOIN tbl_payout_ledger pl ON c.customer_id = pl.customer_id
WHERE cg.is_active = 1
GROUP BY c.customer_id, c.full_name, cg.group_name, pl.current_outstanding_balance
ORDER BY total_contributed DESC;`,
  },
];
