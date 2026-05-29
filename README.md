# Sairam Jammu GIS / GeoAI Portfolio

Professional GitHub Pages portfolio for Sairam Jammu's GIS, GeoAI, spatial machine learning, geospatial data quality, and business analytics work.

Live site: [sairamjammu.github.io/geospatial-portfolio](https://sairamjammu.github.io/geospatial-portfolio/)

## Positioning

The site is designed for GIS, geospatial analytics, spatial data quality, and GeoAI-focused roles. It emphasizes:

- GIS and spatial analysis
- Python geospatial workflows
- GeoAI and spatial machine learning
- Spatial data quality and map intelligence
- Prior Apple Maps / large-scale map data validation experience

## Featured Portfolio Areas

| Area | Evidence |
|---|---|
| Flagship GeoAI Traffic Intelligence Platform | METR-LA traffic forecasting, graph-based modeling ideas, sensor maps, weather and road context |
| Road Network Extraction | Semantic segmentation and remote sensing workflow |
| GIS-Enhanced Sales Forecasting | Retail forecasting with map outputs and regional summaries |
| BI Dashboards | Power BI decision-support dashboarding |
| NLP / Neural Networks | Machine learning coursework reframed as documented evidence |

## Repository Structure

| File | Purpose |
|---|---|
| `index.html` | Main portfolio page with hero, What I Do, flagship project, project cards, about, skills, and contact sections |
| `styles.css` | Responsive dark visual system and project/case-study styling |
| `script.js` | Project card rendering, filters, typed role text, and hero canvas motion |
| `case-studies/traffic-forecasting.html` | Reusable case-study layout using the traffic forecasting project as the first sample |
| `assets/images/` | Portfolio visuals and project screenshots |

## Local Preview

Because the site is static HTML/CSS/JavaScript, you can preview it directly by opening `index.html` in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages Deployment

This repository is deployed with GitHub Pages from the `main` branch. To deploy updates:

```bash
git add .
git commit -m "Update GIS GeoAI portfolio"
git push origin main
```

GitHub Pages will rebuild automatically after the push.

## Placeholder Items To Replace

- Resume button link in the contact section
- Live demo links for project cards
- Dashboard screenshot placeholders in the traffic case study
- Any future Streamlit/Folium prototype link for the traffic intelligence project
