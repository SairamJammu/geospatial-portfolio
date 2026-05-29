const projects = [
  {
    title: "Deep Learning Road Network Extraction",
    repo: "deep-learning-road-network-extraction",
    category: "Geospatial AI",
    language: "Python / PyTorch",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/deep-learning-road-network-extraction",
    image: "assets/images/road-extraction.png",
    summary:
      "Semantic segmentation project comparing U-Net, DeepLabV3+, PSPNet, and FPN for extracting road pixels from aerial imagery.",
    businessQuestion:
      "How can road networks be extracted from high-resolution aerial imagery to support mapping, planning, and infrastructure analysis?",
    decisionValue:
      "Shows practical geospatial AI skill: data preparation, segmentation modeling, metric comparison, and GIS-oriented interpretation.",
    tags: ["U-Net", "DeepLabV3+", "IoU 0.2954", "F1 0.4556", "Massachusetts Roads"],
    links: [
      { label: "GitHub", url: "https://github.com/SairamJammu/deep-learning-road-network-extraction" },
      { label: "Final Report", url: "https://github.com/SairamJammu/deep-learning-road-network-extraction/blob/main/reports/final-report.pdf" },
      { label: "Presentation", url: "https://github.com/SairamJammu/deep-learning-road-network-extraction/blob/main/reports/final-presentation.pdf" },
    ],
    featured: true,
  },
  {
    title: "Short-Term Traffic Forecasting",
    repo: "short-term-traffic-forecasting",
    category: "Forecasting + ML",
    language: "Python / PyTorch",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/short-term-traffic-forecasting",
    image: "https://raw.githubusercontent.com/SairamJammu/short-term-traffic-forecasting/main/results/figures/fig_full_benchmark_comparison.png",
    summary:
      "Spatiotemporal deep learning project forecasting Los Angeles highway speeds with METR-LA sensors, temporal baselines, and Graph WaveNet variants.",
    businessQuestion:
      "Can road-network graph structure improve 15, 30, and 60 minute traffic-speed forecasts compared with temporal-only models?",
    decisionValue:
      "Demonstrates graph neural network forecasting, benchmark thinking, model ablation, and transportation analytics communication.",
    tags: ["Graph WaveNet", "METR-LA", "207 sensors", "MAE@60 3.53", "MAPE@60 9.88%"],
    links: [
      { label: "GitHub", url: "https://github.com/SairamJammu/short-term-traffic-forecasting" },
      { label: "Notebook", url: "https://github.com/SairamJammu/short-term-traffic-forecasting/blob/main/notebooks/short_term_traffic_forecasting_final_project.ipynb" },
      { label: "Results", url: "https://github.com/SairamJammu/short-term-traffic-forecasting/tree/main/results" },
    ],
    featured: true,
  },
  {
    title: "GIS-Enhanced WOMart Sales Forecasting",
    repo: "womart-sales-forecasting-capstone",
    category: "Forecasting + ML",
    language: "R / XGBoost",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone",
    image: "assets/images/womart-forecasting.png",
    summary:
      "Retail forecasting capstone extended with simulated spatial coordinates, regional summaries, Leaflet maps, and forecast-ready outputs.",
    businessQuestion:
      "Where is demand likely to concentrate, and how can regional sales forecasts support inventory and planning decisions?",
    decisionValue:
      "Connects forecasting to action by adding GIS outputs that make demand patterns easier to interpret geographically.",
    tags: ["XGBoost", "R-squared 0.7521", "RMSE 9,279.50", "Leaflet", "GIS features"],
    links: [
      { label: "GitHub", url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone" },
      { label: "GIS Report", url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone/blob/main/report/WOMart-GIS-Sales-Forecasting.html" },
      { label: "Forecast Map", url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone/blob/main/gis-outputs/maps/forecast_sales_gis_map.html" },
    ],
    featured: true,
  },
  {
    title: "KNFS Operations and Sales Dashboard",
    repo: "knfs-operations-sales-dashboard",
    category: "BI & Dashboards",
    language: "Power BI / DAX",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard",
    image: "assets/images/knfs-dashboard.png",
    summary:
      "Power BI decision-support dashboard for sales, COGS, gross margin, inventory aging, reorder priorities, and department performance.",
    businessQuestion:
      "What is selling, what should be reordered, and how do sales, cost, inventory, and margin summarize store performance?",
    decisionValue:
      "Demonstrates end-to-end BI thinking: cleaned operating data, DAX measures, executive KPIs, and buyer-ready insights.",
    tags: ["Power BI", "DAX", "$223K sales", "$87K gross margin", "41% margin"],
    links: [
      { label: "GitHub", url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard" },
      { label: "Dashboard PBIX", url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard/blob/main/dashboard/KNFS_Dashboard.pbix" },
      { label: "Report", url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard/blob/main/Presentation/KNFS_Report.pdf" },
    ],
    featured: true,
  },
  {
    title: "IMDB Sentiment Neural Networks",
    repo: "imdb-sentiment-neural-networks",
    category: "NLP + Neural Networks",
    language: "Jupyter Notebook",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks",
    image: "assets/images/nlp-sentiment.png",
    summary:
      "Advanced machine learning coursework evidence set focused on IMDB sentiment analysis, neural-network concepts, and technical reporting.",
    businessQuestion:
      "How can text data be transformed into sentiment signals that support review analysis and classification workflows?",
    decisionValue:
      "Shows notebook experimentation, NLP preprocessing, neural-network modeling concepts, evaluation, and report communication.",
    tags: ["NLP", "Text classification", "Neural networks", "Jupyter", "Technical reports"],
    links: [
      { label: "GitHub", url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks" },
      { label: "Assignment Folder", url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks/tree/main/Assignment-2" },
    ],
    featured: false,
  },
];

const header = document.querySelector(".site-header");
const featuredProjects = document.querySelector("#featuredProjects");
const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const focusCards = document.querySelectorAll("[data-focus-filter]");
const typedRole = document.querySelector("#typedRole");
const heroCanvas = document.querySelector("#heroCanvas");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function projectCard(project, featured = false) {
  const card = document.createElement("article");
  card.className = featured ? "featured-card" : "project-card";
  card.dataset.category = project.category;

  card.innerHTML = `
    <div class="project-image" style="background-image: linear-gradient(rgba(7, 16, 19, 0.08), rgba(7, 16, 19, 0.42)), url('${project.image}')"></div>
    <div class="card-body">
      <div class="project-meta">
        <span>${project.category}</span>
        <span>${project.language}</span>
        <span>${project.updated}</span>
      </div>
      <h3><a class="project-title-link" href="${project.url}" target="_blank" rel="noreferrer">${project.title}</a></h3>
      <p>${project.summary}</p>
      <div class="impact-list">
        <p><strong>Business question:</strong> ${project.businessQuestion}</p>
        <p><strong>Decision value:</strong> ${project.decisionValue}</p>
      </div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-actions">
        ${project.links.map((link) => `<a class="card-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
      </div>
    </div>
  `;

  return card;
}

function renderProjects(filter = "all") {
  projectGrid.innerHTML = "";
  projects
    .filter((project) => filter === "all" || project.category === filter)
    .forEach((project) => projectGrid.appendChild(projectCard(project)));
}

function setActiveFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderProjects(filter);
}

projects
  .filter((project) => project.featured)
  .forEach((project) => featuredProjects.appendChild(projectCard(project, true)));

renderProjects();
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
});

focusCards.forEach((card) => {
  card.addEventListener("click", () => setActiveFilter(card.dataset.focusFilter));
});

const roles = [
  "Geospatial AI Analyst",
  "Business Intelligence Builder",
  "Forecasting and ML Practitioner",
  "Traffic Analytics Modeler",
  "Decision Analytics Professional",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typedRole) return;

  const currentRole = roles[roleIndex];
  typedRole.textContent = currentRole.slice(0, charIndex);

  if (!deleting && charIndex < currentRole.length) {
    charIndex += 1;
    window.setTimeout(typeRole, 75);
    return;
  }

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    window.setTimeout(typeRole, 1300);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(typeRole, 34);
    return;
  }

  deleting = false;
  roleIndex = (roleIndex + 1) % roles.length;
  window.setTimeout(typeRole, 240);
}

function animateHeroCanvas() {
  if (!heroCanvas) return;

  const context = heroCanvas.getContext("2d");
  const particles = Array.from({ length: 58 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 2.2 + 0.6,
    speed: Math.random() * 0.18 + 0.05,
    alpha: Math.random() * 0.4 + 0.25,
  }));

  function resize() {
    heroCanvas.width = heroCanvas.offsetWidth * window.devicePixelRatio;
    heroCanvas.height = heroCanvas.offsetHeight * window.devicePixelRatio;
  }

  function draw() {
    const width = heroCanvas.width;
    const height = heroCanvas.height;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.speed / 1000;
      particle.y -= particle.speed / 1600;

      if (particle.x > 1.05) particle.x = -0.05;
      if (particle.y < -0.05) particle.y = 1.05;

      const x = particle.x * width;
      const y = particle.y * height;
      context.beginPath();
      context.arc(x, y, particle.radius * window.devicePixelRatio, 0, Math.PI * 2);
      context.fillStyle = `rgba(53, 200, 181, ${particle.alpha})`;
      context.fill();

      const nextParticle = particles[(index + 7) % particles.length];
      const nextX = nextParticle.x * width;
      const nextY = nextParticle.y * height;
      const distance = Math.hypot(x - nextX, y - nextY);

      if (distance < 170 * window.devicePixelRatio) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(nextX, nextY);
        context.strokeStyle = `rgba(104, 164, 212, ${0.12 * (1 - distance / (170 * window.devicePixelRatio))})`;
        context.stroke();
      }
    });

    window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

typeRole();
animateHeroCanvas();
