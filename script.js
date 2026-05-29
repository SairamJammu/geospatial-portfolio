const projects = [
  {
    title: "GeoAI Traffic Intelligence Platform",
    repo: "short-term-traffic-forecasting",
    category: "Forecasting + ML",
    language: "Python / PyTorch / GIS",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/short-term-traffic-forecasting",
    image: "https://raw.githubusercontent.com/SairamJammu/short-term-traffic-forecasting/main/results/figures/fig_full_benchmark_comparison.png",
    problem:
      "Urban traffic forecasting needs models that understand both time patterns and how congestion moves through connected roads.",
    data:
      "METR-LA traffic speed readings from 207 Los Angeles highway sensors, 5-minute intervals, adjacency data, weather features, and road metadata.",
    methods:
      "Python, PyTorch, LSTM, GRU, TCN, Graph WaveNet-style graph modeling, MAE/RMSE/MAPE evaluation, Plotly/Folium-style GIS visualization concepts.",
    output:
      "Traffic sensor map, benchmark charts, horizon comparison, notebook, presentation assets, and a planned dashboard prototype.",
    why:
      "Supports congestion analysis, transportation planning, sensor network monitoring, and location-aware urban decision-making.",
    tags: ["Graph WaveNet", "METR-LA", "207 sensors", "MAE@60 3.53", "MAPE@60 9.88%"],
    links: [
      { label: "View Code", url: "https://github.com/SairamJammu/short-term-traffic-forecasting" },
      { label: "View Notebook", url: "https://github.com/SairamJammu/short-term-traffic-forecasting/tree/main/notebooks" },
      { label: "Read Case Study", url: "case-studies/traffic-forecasting.html" },
      { label: "View Results", url: "https://github.com/SairamJammu/short-term-traffic-forecasting/tree/main/results" },
    ],
  },
  {
    title: "Deep Learning Road Network Extraction",
    repo: "deep-learning-road-network-extraction",
    category: "Geospatial AI",
    language: "Python / PyTorch",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/deep-learning-road-network-extraction",
    image: "assets/images/road-extraction.png",
    problem:
      "Manual road digitization from aerial imagery is slow, expensive, and difficult to scale for large mapping programs.",
    data:
      "Road imagery and mask pairs used to train and evaluate semantic segmentation models for road extraction.",
    methods:
      "U-Net, DeepLabV3+, PSPNet, FPN, PyTorch, OpenCV-style preprocessing, IoU/F1 evaluation, and image-mask comparison.",
    output:
      "Model comparison, segmentation outputs, project report, and presentation evidence for automated road extraction.",
    why:
      "Shows practical GeoAI capability for map production, feature extraction, and infrastructure intelligence.",
    tags: ["U-Net", "DeepLabV3+", "IoU 0.2954", "F1 0.4556", "Remote sensing"],
    links: [
      { label: "View Code", url: "https://github.com/SairamJammu/deep-learning-road-network-extraction" },
      { label: "View Report", url: "https://github.com/SairamJammu/deep-learning-road-network-extraction/blob/main/reports/final-report.pdf" },
      { label: "View Presentation", url: "https://github.com/SairamJammu/deep-learning-road-network-extraction/blob/main/reports/final-presentation.pdf" },
    ],
  },
  {
    title: "GIS-Enhanced WOMart Sales Forecasting",
    repo: "womart-sales-forecasting-capstone",
    category: "Forecasting + ML",
    language: "R / XGBoost / GIS",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone",
    image: "assets/images/womart-forecasting.png",
    problem:
      "Retail forecasting is more useful when decision makers can see where demand is concentrated, not only tabular predictions.",
    data:
      "Retail sales records with engineered regional and simulated spatial features for map-based forecasting outputs.",
    methods:
      "R, XGBoost, validation metrics, feature importance, Leaflet maps, regional summaries, and GIS-style output tables.",
    output:
      "Forecast report, interactive maps, feature importance, regional forecast summaries, and exported decision tables.",
    why:
      "Connects forecasting to location intelligence for inventory planning, regional performance review, and store strategy.",
    tags: ["XGBoost", "R-squared 0.7521", "RMSE 9,279.50", "Leaflet", "GIS outputs"],
    links: [
      { label: "View Code", url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone" },
      { label: "View Report", url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone/blob/main/report/WOMart-GIS-Sales-Forecasting.html" },
      { label: "View GIS Outputs", url: "https://github.com/SairamJammu/womart-sales-forecasting-capstone/tree/main/gis-outputs" },
    ],
  },
  {
    title: "KNFS Operations and Sales Dashboard",
    repo: "knfs-operations-sales-dashboard",
    category: "BI & Dashboards",
    language: "Power BI / DAX",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard",
    image: "assets/images/knfs-dashboard.png",
    problem:
      "Operational teams need a clear view of sales, cost, inventory, and reorder priorities without manually reviewing spreadsheets.",
    data:
      "Sales, cost, inventory, department, and product-level operating data transformed for Power BI reporting.",
    methods:
      "Power BI, DAX measures, KPI design, data modeling, dashboard layout, inventory aging, and margin analysis.",
    output:
      "Executive dashboard, KPIs, report package, and buyer-focused recommendations for inventory and sales decisions.",
    why:
      "Demonstrates business intelligence work that turns raw operating data into decisions managers can act on.",
    tags: ["Power BI", "DAX", "$223K sales", "$87K gross margin", "41% margin"],
    links: [
      { label: "View Code", url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard" },
      { label: "View Report", url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard/blob/main/Presentation/KNFS_Report.pdf" },
      { label: "View Dashboard File", url: "https://github.com/SairamJammu/knfs-operations-sales-dashboard/blob/main/dashboard/KNFS_Dashboard.pbix" },
    ],
  },
  {
    title: "IMDB Sentiment Neural Networks",
    repo: "imdb-sentiment-neural-networks",
    category: "NLP + Neural Networks",
    language: "Jupyter Notebook",
    updated: "May 2026",
    url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks",
    image: "assets/images/nlp-sentiment.png",
    problem:
      "Text reviews can contain useful opinion signals, but they must be converted into structured features for classification.",
    data:
      "IMDB movie review text used for sentiment classification experimentation and technical reporting.",
    methods:
      "Notebook-based preprocessing, neural-network concepts, text classification workflow, and model evaluation.",
    output:
      "Coursework notebook, report artifacts, and documented model experimentation.",
    why:
      "Shows ability to structure machine learning experiments and communicate technical results clearly.",
    tags: ["NLP", "Text classification", "Neural networks", "Jupyter", "Model reporting"],
    links: [
      { label: "View Code", url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks" },
      { label: "View Assignment", url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks/tree/main/Assignment-2" },
      { label: "View Repository Files", url: "https://github.com/SairamJammu/imdb-sentiment-neural-networks" },
    ],
  },
];

const header = document.querySelector(".site-header");
const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const typedRole = document.querySelector("#typedRole");
const heroCanvas = document.querySelector("#heroCanvas");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function projectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.category = project.category;

  card.innerHTML = `
    <div class="project-image" style="background-image: linear-gradient(rgba(7, 16, 19, 0.08), rgba(7, 16, 19, 0.42)), url('${project.image}')">
      <span class="image-label">${project.repo === "short-term-traffic-forecasting" ? "Map + forecast preview" : "Project screenshot preview"}</span>
    </div>
    <div class="card-body">
      <div class="project-meta">
        <span>${project.category}</span>
        <span>${project.language}</span>
        <span>${project.updated}</span>
      </div>
      <h3><a class="project-title-link" href="${project.url}" target="_blank" rel="noreferrer">${project.title}</a></h3>
      <div class="case-fields">
        <p><strong>Problem:</strong> ${project.problem}</p>
        <p><strong>Data:</strong> ${project.data}</p>
        <p><strong>Methods / Tools:</strong> ${project.methods}</p>
        <p><strong>Output / Result:</strong> ${project.output}</p>
        <p><strong>Why it matters:</strong> ${project.why}</p>
      </div>
      <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-actions">
        ${project.links
          .map((link) => `<a class="card-link" href="${link.url}" ${link.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${link.label}</a>`)
          .join("")}
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

renderProjects();
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
});

const roles = [
  "Geospatial Data Analyst",
  "GeoAI Project Builder",
  "Spatial ML Learner",
  "GIS + Python Analyst",
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
  const particles = Array.from({ length: 54 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 2.1 + 0.6,
    speed: Math.random() * 0.16 + 0.04,
    alpha: Math.random() * 0.35 + 0.22,
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
