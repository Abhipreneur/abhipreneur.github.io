// ==========================================================================
//  ABHISHEK NIGAM PORTFOLIO — ENHANCED SCRIPT
//  Original functionality: project rendering, view toggle, filters, modal
//  NEW additions (clearly marked):
//  [NEW] Scroll progress bar
//  [NEW] Typed / rotating hero subtitle animation
//  [NEW] Counter animation for About stats
//  [NEW] Scroll-spy active nav highlighting
//  [NEW] Mobile hamburger menu
//  [NEW] Nav container class on scroll
// ==========================================================================


// --- 1. Massive Portfolio Data (unchanged) ---
const projectsData = [
    // --- MACHINE LEARNING & DEEP LEARNING & AI ---
    {
        id: 24, skills: ["ml"], domains: ["fraud"], skillLabel: "Machine Learning", domainLabel: "Fraud Analytics",
        title: "Identity Fraud Detection Engine",
        shortDesc: "Built an end-to-end pipeline using Python and XGBoost to detect synthetic identity fraud across 1M+ applications.",
        problem: "Financial institution faced significant losses due to undetectable synthetic identity fraud applications.",
        approach: "Engineered identity linkage, behavioral, and temporal features using Python. Trained an XGBoost model.",
        techStack: ["Python", "XGBoost", "Machine Learning"],
        outcomes: [
            "Achieved 59.3% FDR @ 3% cutoff on out-of-time data with strong KS and low false positives.",
            "Optimized thresholds for $3.2B projected annualized net savings."
        ],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },
    {
        id: 25, skills: ["ml", "dl"], domains: ["fraud"], skillLabel: "Deep Learning", domainLabel: "Fraud Analytics",
        title: "Unsupervised Property Tax Fraud Detection",
        shortDesc: "Scalable unsupervised anomaly detection framework using PCA and Autoencoders on 1M+ NYC property tax records.",
        problem: "Manual audits were failing to surface complex, hidden valuation inconsistencies in massive property datasets.",
        approach: "Performed data cleaning and normalization by ZIP code. Deployed PCA and deep learning Autoencoders to generate anomaly scores.",
        techStack: ["Python", "Autoencoders", "PCA", "Deep Learning"],
        outcomes: [
            "Successfully prioritized high-risk properties for audit.",
            "Surfaced deep, non-linear valuation inconsistencies previously missed by rules-based systems."
        ],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },
    {
        id: 1, skills: ["ai", "python"], domains: ["finance"], skillLabel: "Agentic AI", domainLabel: "Financial Analytics",
        title: "Autonomous Financial Analysis Agent",
        shortDesc: "Built an autonomous financial research agent using Python and Llama 3.1.",
        problem: "Manual financial research compilation was highly time-consuming and prone to delays.",
        approach: "Built a multi-step agentic pipeline with tool-use, memory, and a Streamlit front-end.",
        techStack: ["Python", "Streamlit", "Llama 3.1", "Agentic Pipelines"],
        outcomes: ["Generated structured analyst-style investment summaries with zero manual intervention.", "Reduced research compilation time from hours to mere minutes."],
        links: [
            { url: "#", icon: "fab fa-youtube", text: "Watch YouTube Demo", type: "primary" },
            { url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }
        ]
    },
    {
        id: 14, skills: ["ml", "dl"], domains: ["finance"], skillLabel: "Machine Learning", domainLabel: "Financial Analytics",
        title: "Asset Return Forecasting",
        shortDesc: "Intraday trading forecasting using SVM, RF, XGBoost, CatBoost, LightGBM, TensorFlow & CNN.",
        problem: "Predicting volatile intraday asset returns required complex, multi-model time-series analysis.",
        approach: "Deployed an ensemble of traditional ML models alongside deep learning CNNs to analyze financial indicators.",
        techStack: ["Python", "XGBoost", "TensorFlow", "CNNs"],
        outcomes: ["Successfully modeled complex temporal dependencies in intraday trading.", "Provided a comparative framework for model performance in high-frequency data."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },
    {
        id: 17, skills: ["ml"], domains: ["customer"], skillLabel: "Machine Learning", domainLabel: "Customer Analytics",
        title: "Telecom Customer Churn Modeling",
        shortDesc: "Machine learning churn modeling for multiple telecommunications datasets.",
        problem: "High customer attrition rates required proactive identification of at-risk accounts.",
        approach: "Trained predictive classification models on historical usage and billing data.",
        techStack: ["Python", "Scikit-Learn", "Predictive Modeling"],
        outcomes: ["Identified core drivers of churn.", "Enabled targeted retention campaigns for high-risk cohorts."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },
    {
        id: 18, skills: ["ml"], domains: ["customer", "supply"], skillLabel: "Machine Learning", domainLabel: "Marketing Analytics",
        title: "Decathlon: Next Product to Buy",
        shortDesc: "Predictive ML modeling to forecast subsequent product purchase behavior.",
        problem: "Needed to optimize cross-selling strategies by predicting what customers would buy next.",
        approach: "Analyzed historical transaction sequences to build a recommendation engine.",
        techStack: ["Python", "Machine Learning", "Recommendation Systems"],
        outcomes: ["Improved targeting for promotional campaigns.", "Mapped standard customer journey pathways across product categories."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },

    // --- POWER BI & SQL ---
    {
        id: 5, skills: ["powerbi"], domains: ["supply", "customer"], skillLabel: "Power BI", domainLabel: "Supply Chain & Pricing",
        title: "Commercial Sales & Liquor Distribution",
        shortDesc: "Executive Power BI dashboard analyzing U.S. liquor sales performance across multiple channels.",
        problem: "Lack of clear visibility into multi-year sales performance and distribution execution risks.",
        approach: "Designed a star-schema model with Power Query and DAX time intelligence. Enabled interactive Pareto (80/20) analysis.",
        techStack: ["Power BI", "DAX", "Power Query"],
        outcomes: ["Identified key distribution gaps across retail and warehouse channels.", "Highlighted execution risks for suppliers via conditional formatting."],
        links: [
            { url: "#", icon: "fas fa-chart-bar", text: "Live Power BI", type: "primary" },
            { url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }
        ]
    },
    {
        id: 4, skills: ["sql"], domains: ["fraud", "supply"], skillLabel: "Advanced SQL", domainLabel: "Fraud Analytics",
        title: "Discount Abuse & Revenue Leakage",
        shortDesc: "Multi-layer SQL framework identifying discount stacking across 200,000+ rows.",
        problem: "Undetected duplicate order abuse and unauthorized pricing overrides causing financial loss.",
        approach: "Designed a detection framework using window functions, CTEs, and self-joins.",
        techStack: ["Advanced SQL", "CTEs", "Window Functions"],
        outcomes: ["Flagged $2.1M in potential annual revenue leakage.", "Enabled data-driven corrective action categorized by financial impact."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },
    {
        id: 6, skills: ["sql"], domains: ["supply"], skillLabel: "Advanced SQL", domainLabel: "Supply Chain Analytics",
        title: "Order Fulfillment & Logistics Quality",
        shortDesc: "SQL-driven analysis of supply chain bottlenecks and order fulfillment timelines.",
        problem: "Inefficiencies in the logistics pipeline were causing delayed deliveries and SLA breaches.",
        approach: "Wrote complex SQL queries to track order lifecycles from warehouse to delivery.",
        techStack: ["SQL", "Data Modeling"],
        outcomes: ["Identified specific warehouse nodes causing delays.", "Provided metrics to renegotiate vendor logistics contracts."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },

    // --- TABLEAU ---
    {
        id: 2, skills: ["tableau", "sql"], domains: ["customer"], skillLabel: "Tableau", domainLabel: "Marketing Analytics",
        title: "Marketing Funnel Optimization",
        shortDesc: "End-to-end automated Tableau dashboard to optimize marketing channels.",
        problem: "Fragmented CRM data made tracking ROI difficult, causing high CAC.",
        approach: "Partnered with Sales to build a reliable proxy attribution model based on top-of-funnel metrics.",
        techStack: ["Tableau", "SQL", "Google Ads API"],
        outcomes: ["Reduced Customer Acquisition Cost (CAC) by 44%.", "Identified $150K+ in annualized cost optimizations."],
        links: [
            { url: "#", icon: "fas fa-chart-line", text: "Live Tableau", type: "primary" },
            { url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }
        ]
    },
    {
        id: 11, skills: ["tableau"], domains: ["operations"], skillLabel: "Tableau", domainLabel: "Operations & HR",
        title: "H-1B Visa Petitions Dashboard",
        shortDesc: "Tableau dashboard showing FY 2025 H-1B trends by employer, industry, and geography.",
        problem: "Lack of transparent benchmarking data for foreign worker wages and approval rates.",
        approach: "Processed government petition datasets into an interactive geographic and industry-level dashboard.",
        techStack: ["Tableau", "Data Visualization"],
        outcomes: ["Revealed major wage compression trends in the tech sector.", "Identified top 50 employers hoarding visa applications."],
        links: [
            { url: "#", icon: "fas fa-chart-line", text: "Live Tableau", type: "primary" },
            { url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }
        ]
    },
    {
        id: 12, skills: ["powerbi"], domains: ["finance"], skillLabel: "Power BI", domainLabel: "Financial Analytics",
        title: "Investment Risk Dashboard",
        shortDesc: "Real-time Power BI risk monitoring dashboard for investment portfolio management.",
        problem: "Analysts lacked a consolidated view of portfolio risk exposures and performance metrics.",
        approach: "Built an automated ETL pipeline with Power Query and DAX measures for real-time risk KPIs.",
        techStack: ["Power BI", "DAX", "Power Query", "ETL"],
        outcomes: ["Improved reporting efficiency by 40%.", "Saved over 1,000 analyst hours annually through automation."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    },
    {
        id: 13, skills: ["tableau"], domains: ["supply"], skillLabel: "Tableau", domainLabel: "Supply Chain Analytics",
        title: "Real Estate Demand Forecasting",
        shortDesc: "Demand forecasting model and analytics dashboard for Indian real estate market.",
        problem: "Property developers lacked data-driven insight into demand patterns and project timing.",
        approach: "Built forecasting models and Tableau dashboards to visualize demand by geography and segment.",
        techStack: ["Tableau", "Python", "Forecasting"],
        outcomes: ["Improved planning accuracy by 25%.", "Reduced reliance on broker channels, cutting CAC by 40%."],
        links: [{ url: "#", icon: "fab fa-github", text: "View GitHub Repo", type: "secondary" }]
    }
];


// ============================================================
// [NEW] SCROLL PROGRESS BAR
// ============================================================
const scrollProgressBar = document.getElementById('scroll-progress');

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgressBar.style.width = progress + '%';
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });


// ============================================================
// [NEW] TYPED / ROTATING HERO SUBTITLE
// Cycles through role descriptors with a typewriter effect
// ============================================================
const typedWords = ["AI Professional", "Data Strategist", "BI Developer", "ML Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.querySelector('.typed-word');

function typeWriter() {
    if (!typedEl) return;
    const currentWord = typedWords[wordIndex];

    if (isDeleting) {
        typedEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 60 : 95;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typedWords.length;
        delay = 400;
    }

    setTimeout(typeWriter, delay);
}
// Start typing after a brief delay to let the page settle
setTimeout(typeWriter, 800);


// ============================================================
// [NEW] COUNTER ANIMATION FOR ABOUT STATS
// Animates numbers up when the section scrolls into view
// ============================================================
function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(update);
}

function animateDollarCounter(el) {
    const target = parseFloat(el.dataset.target);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (eased * target).toFixed(1);
        el.textContent = '$' + current + 'M';
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = '$' + target + 'M';
    }
    requestAnimationFrame(update);
}

// Use IntersectionObserver so counters only fire once when visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains('counter')) animateCounter(el);
            if (el.classList.contains('counter-dollar')) animateDollarCounter(el);
            counterObserver.unobserve(el); // fire only once
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter, .counter-dollar').forEach(el => counterObserver.observe(el));


// ============================================================
// [NEW] SCROLL SPY — Active nav link based on scroll position
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const navContainer = document.querySelector('.nav-container');

function updateActiveNav() {
    // Navbar shadow/class on scroll
    if (window.scrollY > 60) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }

    // Highlight nav link for current section
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === currentSection);
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav(); // run once on load


// ============================================================
// [NEW] MOBILE HAMBURGER MENU
// ============================================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileMenu.classList.add('open');
    hamburgerBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    document.body.style.overflow = '';
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);

// Close menu when a mobile link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});


// ============================================================
// 2. Project Rendering (original logic, unchanged)
// ============================================================
const grid = document.getElementById('projects-grid');
const skillFilters = document.getElementById('filters-skill');
const domainFilters = document.getElementById('filters-domain');
let currentView = 'skill';
let currentFilter = 'all';

function renderProjects() {
    grid.innerHTML = '';

    const filteredProjects = projectsData.filter(p => {
        if (currentFilter === 'all') return true;
        if (currentView === 'skill')  return p.skills.includes(currentFilter);
        if (currentView === 'domain') return p.domains.includes(currentFilter);
    });

    filteredProjects.forEach((project, index) => {
        const delayClass = index % 2 !== 0 ? 'delay-1' : '';
        const topLabel = currentView === 'skill' ? project.skillLabel : project.domainLabel;

        const card = document.createElement('div');
        card.className = `project-card glass-card reveal ${delayClass}`;
        card.innerHTML = `
            <div class="project-category">${topLabel}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.shortDesc}</p>
            <div class="read-more-btn">Explore Deep Dive <i class="fas fa-arrow-right"></i></div>
        `;
        card.onclick = () => openModal(project.id);
        grid.appendChild(card);
    });

    observeElements();
}


// --- 3. View Toggle Logic (unchanged) ---
document.getElementById('btn-skill-view').addEventListener('click', (e) => {
    document.getElementById('btn-domain-view').classList.remove('active');
    e.target.classList.add('active');
    skillFilters.style.display = 'flex';
    domainFilters.style.display = 'none';
    currentView = 'skill';
    resetFilterButtons(skillFilters);
    currentFilter = 'all';
    renderProjects();
});

document.getElementById('btn-domain-view').addEventListener('click', (e) => {
    document.getElementById('btn-skill-view').classList.remove('active');
    e.target.classList.add('active');
    skillFilters.style.display = 'none';
    domainFilters.style.display = 'flex';
    currentView = 'domain';
    resetFilterButtons(domainFilters);
    currentFilter = 'all';
    renderProjects();
});

function resetFilterButtons(container) {
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    container.querySelector('[data-filter="all"]').classList.add('active');
}


// --- 4. Sub-Filter Click Logic (unchanged) ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderProjects();
    });
});


// --- 5. Dynamic Modal Logic (unchanged) ---
const modal = document.getElementById('project-modal');
const modalBody = document.querySelector('.modal-body');

window.openModal = function(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    let actionButtonsHtml = '';
    if (project.links && project.links.length > 0) {
        actionButtonsHtml = project.links.map(link => {
            const btnClass = link.type === 'primary' ? 'primary-btn' : 'secondary-btn';
            return `<a href="${link.url}" target="_blank" class="btn ${btnClass}" style="padding: 12px 25px;"><i class="${link.icon}" style="margin-right: 8px;"></i>${link.text}</a>`;
        }).join('');
    }

    modalBody.innerHTML = `
        <h2 style="font-size: 2rem; margin-bottom: 14px; font-family: var(--font-display); letter-spacing: -1px;" class="gradient-text">${project.title}</h2>
        
        <div style="margin-bottom: 28px; display:flex; gap:8px; flex-wrap:wrap;">
            ${project.techStack.map(t => `<span style="background:rgba(29,78,216,0.06);padding:6px 14px;border-radius:8px;font-size:0.83rem;border:1px solid rgba(29,78,216,0.18);color:var(--accent-1);font-weight:600;">${t}</span>`).join('')}
        </div>
        
        <div style="margin-bottom: 24px;">
            <h4 style="color:var(--accent-1);margin-bottom:8px;font-size:1rem;font-weight:700;"><i class="fas fa-exclamation-circle" style="margin-right:8px;"></i>The Challenge</h4>
            <p style="color:var(--text-muted);line-height:1.75;font-size:0.95rem;">${project.problem}</p>
        </div>
        
        <div style="margin-bottom: 24px;">
            <h4 style="color:var(--accent-1);margin-bottom:8px;font-size:1rem;font-weight:700;"><i class="fas fa-tools" style="margin-right:8px;"></i>The Architecture</h4>
            <p style="color:var(--text-muted);line-height:1.75;font-size:0.95rem;">${project.approach}</p>
        </div>
        
        <div style="margin-bottom: 32px;">
            <h4 style="color:var(--accent-1);margin-bottom:8px;font-size:1rem;font-weight:700;"><i class="fas fa-chart-line" style="margin-right:8px;"></i>Business Impact</h4>
            <ul style="color:var(--text-muted);line-height:1.75;padding-left:20px;font-size:0.95rem;">
                ${project.outcomes.map(o => `<li style="margin-bottom:6px;">${o}</li>`).join('')}
            </ul>
        </div>
        
        <div style="display:flex;gap:14px;flex-wrap:wrap;">
            ${actionButtonsHtml}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});


// --- 6. Scroll Reveal Animations (original observer, unchanged) ---
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// --- 7. Initialize ---
renderProjects();
observeElements();
