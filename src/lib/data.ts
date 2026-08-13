export const profile = {
  name: "Nguyen Trong Triet",
  title: "Data Analyst — Business Intelligence",
  location: "Ho Chi Minh City, Vietnam",
  email: "job.nguyentrongtriet@gmail.com",
  phone: "+84 772 086 453",
  phoneHref: "+84772086453",
  site: "nguyentrongtriet.vercel.app",
  resumeHref: "/files/Nguyen-Trong-Triet-Resume.pdf",
  summary:
    "Data Analyst with 2+ years across HR, Retail, and Operations — turning recruitment funnels, store performance, and inventory data into reporting systems and decisions, from SQL Server stored procedures and Power BI dashboards to demand-driven inventory models.",
  socials: [
    { label: "Email", href: "mailto:job.nguyentrongtriet@gmail.com" },
    { label: "Phone", href: "tel:+84772086453" },
  ],
} as const;

export const skillGroups = [
  {
    label: "Languages & Tools",
    skills: ["Python", "SQL", "Power BI", "Excel (Advanced, VBA)", "Google Sheets"],
  },
  {
    label: "Analysis",
    skills: [
      "Data Cleaning & Preparation",
      "Data Analysis & Exploration",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    label: "Machine Learning",
    skills: ["Model Development", "Experimentation", "Feature Engineering"],
  },
  {
    label: "Software Engineering",
    skills: ["Fullstack Websites", "Landing Pages"],
  },
] as const;

export const experience = [
  {
    company: "Ginkgo JSC",
    role: "Retail Data Analyst",
    period: "May 2026 — Present",
    current: true,
    domains: ["Retail", "Operations"],
    highlights: [
      "Partnered with IT to implement the Retail Pro ERP/POS system — SKU master data creation, pricing configuration, UAT, and end-to-end deployment.",
      "Wrote SQL Server stored procedures for the eBiz platform to automate operational reporting, and configured advanced SLICeR Krunch reports for inventory, sales, and merchandising analytics.",
      "Built Power BI dashboards on the Retail Pro Oracle database to monitor sales, inventory, sell-through, and stock aging KPIs.",
      "Built size-selling ratio and stock-movement reports that reduced broken-size inventory and excess stock risk, and fed demand-driven production plans.",
      "Designed store-level merchandise allocation plans and Min-Max / Dream Inventory models to keep replenishment healthy across the network.",
      "Optimized inter-store stock transfers by balancing slow- and fast-moving products, improving availability and sell-through.",
    ],
  },
  {
    company: "Thinh The Vinh Hoa JSC (Maycha)",
    role: "Data Analyst",
    period: "Dec 2025 — May 2026",
    current: false,
    domains: ["HR", "Operations"],
    highlights: [
      "Processed and consolidated 3,000+ recruitment records/month, improving data accuracy by 90% and cutting manual reconciliation.",
      "Built a Power BI Recruitment Dashboard tracking funnel performance and TA KPIs, reducing reporting time by 80%.",
      "Standardized the data pipeline and integrated the 1Office API, cutting data retrieval time by 80%.",
      "Partnered with Finance on a Sales-per-Labor-Hour productivity metric to drive data-driven shift scheduling.",
      "Supported end-to-end HRIS implementation, validating data integrity across the recruitment-to-employee lifecycle.",
      "Built a recruitment website integrated with the 1Office API to automate candidate data sync into the ATS.",
    ],
  },
  {
    company: "KFC Vietnam",
    role: "Data Analyst",
    period: "Dec 2024 — Dec 2025",
    current: false,
    domains: ["HR"],
    highlights: [
      "Designed Power BI dashboards tracking employee engagement and restaurant staff satisfaction for the corporate office.",
      "Built KPI tracking dashboards for the Talent Acquisition team to manage recruitment progress and quality.",
      "Automated generation and distribution of 300+ reports via Python and VBA, cutting manual HR workload and errors.",
      "Transformed manual Excel reporting into two automated systems: a real-time Power BI view for HR managers, and a Python-generated Excel pipeline distributed to restaurant units.",
    ],
  },
] as const;

export const projects = [
  {
    slug: "retail-operations",
    title: "Retail Operations Performance Dashboard",
    org: "Ginkgo JSC",
    tools: ["Power BI", "SQL (Oracle)", "Retail Pro"],
    summary:
      "Multi-store retail performance dashboard covering sales, targets, and product mix across cities and hours.",
    description:
      "Consolidates orders, sales, and refunds from the Retail Pro Oracle database into one Power BI model, tracking target achievement by store and area and surfacing best-selling products and peak trading hours to support replenishment and staffing decisions.",
    metrics: [
      { label: "Orders", value: "59,244", delta: "+89.2% YoY" },
      { label: "Net Sales", value: "79.53bn ₫", delta: "+103.6% YoY" },
      { label: "Sales achievement", value: "99.89%", delta: "of target" },
      { label: "AOV", value: "1.34M ₫", delta: "+7.6% YoY" },
    ],
    images: [
      {
        full: "/images/projects/retail-1-full.jpg",
        thumb: "/images/projects/retail-1-thumb.jpg",
        alt: "Ginkgo JSC retail operations Power BI dashboard showing orders, net sales, sales achievement versus target, top-performing areas and stores, product mix, and hourly sales trends.",
        width: 1600,
        height: 2483,
        caption: "Full report — sales, targets, product mix, and hourly trends",
      },
    ],
  },
  {
    slug: "recruitment-performance",
    title: "Recruitment Performance Dashboard",
    org: "KFC Vietnam",
    tools: ["Power BI", "1Office API"],
    summary:
      "Recruitment funnel dashboard for the Talent Acquisition team — offering, onboarding, and lead-time tracking by recruiter and store.",
    description:
      "Tracks the full hiring funnel from request to onboarding across recruiters, area managers, and stores, with offering and onboarding rates broken down by PIC to flag pending requests and lead-time outliers for the TA team.",
    metrics: [
      { label: "Offering rate (system)", value: "72.97%" },
      { label: "Onboarding rate", value: "59.07%" },
      { label: "Avg. lead time", value: "19.2 days" },
      { label: "Funnel volume", value: "21,091", delta: "applications" },
    ],
    images: [
      {
        full: "/images/projects/recruitment-1-full.jpg",
        thumb: "/images/projects/recruitment-1-thumb.jpg",
        alt: "KFC Vietnam recruitment Power BI dashboard overview showing offering rate, onboarding rate, average lead time, recruitment funnel from request to onboarding, and pending hiring requests by recruiter and store.",
        width: 1600,
        height: 925,
        caption: "Overview — funnel, offering & onboarding rates, pending requests",
      },
      {
        full: "/images/projects/recruitment-2-full.jpg",
        thumb: "/images/projects/recruitment-2-thumb.jpg",
        alt: "Recruitment dashboard comparison view showing offering and onboarding rate by operations manager, percent of internal candidates by PIC over time, and total stores by area manager.",
        width: 1600,
        height: 925,
        caption: "By manager — offering/onboarding rate by OM and store coverage by AM",
      },
      {
        full: "/images/projects/recruitment-3-full.jpg",
        thumb: "/images/projects/recruitment-3-thumb.jpg",
        alt: "Recruitment dashboard department breakdown showing open, offering, cancelled, and onboarding requests by department, average lead time by manager level, and offering versus onboarding rate by PIC.",
        width: 1600,
        height: 925,
        caption: "By department — request status, lead time, and PIC performance",
      },
      {
        full: "/images/projects/recruitment-4-full.jpg",
        thumb: "/images/projects/recruitment-4-thumb.jpg",
        alt: "Recruitment dashboard sourcing view showing year-over-year offering and onboarding rate, average lead time by manager level, candidate approach volume by source, and onboarding share by source.",
        width: 1600,
        height: 925,
        caption: "By source — year-over-year rates and candidate sourcing mix",
      },
    ],
  },
] as const;

export const certifications = [
  {
    title: "SQL (Advanced) Certificate",
    issuer: "HackerRank",
    year: "2024",
    image: "/images/certs/sql-hackerrank.jpg",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certs/google-da.jpg",
  },
  {
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Coursera",
    year: "2025",
    image: "/images/certs/google-bi.jpg",
  },
] as const;

export const languageScore = {
  title: "TOEIC",
  score: "685 / 990",
  year: "2025",
} as const;

export const education = {
  school: "Sai Gon University",
  period: "2020 — 2025",
  degree: "Engineer of Computer Science",
  major: "Major: Computer Science",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;
