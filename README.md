# 👋 Hey, I'm Aarush

**Embedded IoT · Industrial Digitalisation · Backend Systems** | B.Tech ECE, VIT Chennai '27

[![Portfolio](https://img.shields.io/badge/Portfolio-itzgolly.github.io%2FPortfolio-c09866)](https://itzgolly.github.io/Portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aarush-blue?logo=linkedin)](https://www.linkedin.com/in/aarush-jagannathan)
[![Email](https://img.shields.io/badge/Email-aarushjagannathan%40gmail.com-red)](mailto:aarushjagannathan@gmail.com)

---

## 🎯 What I Do

Final-year Electronics and Computer Engineering student with industry internships at
**Daimler Truck** and **Zoho Corporation**. My work spans three areas that keep turning out to
be the same problem — getting reliable data out of something, and making it useful to whoever
has to act on it:

- 🏭 **Manufacturing digitalisation & data analytics** — Power BI, SQL, Advanced Excel, process mapping
- ⚡ **Embedded IoT firmware** — ESP32, Modbus RTU over RS485, MQTT over TLS
- 🧩 **Backend systems** — TypeScript, Express, PostgreSQL, REST API design
- 🔬 **Mixed-signal design** — 180 nm CMOS SAR ADC in Cadence Virtuoso / Spectre

---

## 🔥 Featured Projects

### 🧩 [ServiceDesk AI](https://github.com/ItzGOLLY/servicedesk-ai) — Multi-Channel Support Platform
**TypeScript · Express · PostgreSQL 16 + pgvector · React · Docker · Deployed and live**

A cloud-native customer support platform for small businesses. Every complaint — web or
WhatsApp — becomes a tracked ticket with an owner, a priority and a status.

- **~45 REST endpoints** with JWT authentication (bcrypt, httpOnly refresh-token cookies), role-based plus record-ownership authorisation, and schema-level request validation
- **PostgreSQL 16** data model with referential constraints, indexes and GIN full-text search; **161 automated tests** run against a real PostgreSQL using production migrations
- **Two-way WhatsApp intake** via Meta's WhatsApp Cloud API, with HMAC signature verification and database-level webhook idempotency — provider retries cannot duplicate tickets
- **AI that degrades gracefully** — classification, summaries and draft replies sit behind a provider abstraction with a deterministic rule-based fallback, so no core workflow depends on the model API
- **Knowledge-base RAG** — articles chunked, embedded and retrieved by cosine similarity over an HNSW index, answered with citations

🔗 [Live app](https://servicedesk-ai-two.vercel.app) · [API docs (Swagger)](https://servicedesk-api-ss2d.onrender.com/api/docs)

> BCSE408L Cloud Computing, VIT Chennai · two-person team · deployed on Vercel and Render.

---

### ⚡ [IoT Energy Monitoring System](https://github.com/ItzGOLLY/Iot-Energy-Monitor)
**Zoho Corporation — Internship Project · Shipped**

An ESP32 gateway reading a Schneider EM6400NG three-phase energy meter over **Modbus RTU on
RS485** (9600 baud, 8N1) and publishing **9 electrical parameters every 5 seconds** to Zoho IoT
Cloud over **MQTT with TLS**.

- Decoded the meter's Modbus holding-register map — voltage, current, active/reactive/apparent power, power factor, frequency; 32 device datapoints configured cloud-side
- Captive-portal Wi-Fi provisioning so a field installer commissions the device from a phone, no laptop and no reflash; credentials persist in ESP32 NVS
- Cloud connection secured with an embedded root CA certificate
- **Stack**: C / C++ (Arduino IDE), ModbusMaster, WiFiManager, Zoho IoT SDK, Preferences / NVS

> **Recruiter note**: a full IoT pipeline, from industrial sensor communication through to secure cloud telemetry. Built during my internship at Zoho on real metering hardware.

---

### 🔬 Ultra-Low-Power 10-bit SAR ADC
**VLSI Project-I · 180 nm CMOS · Cadence Virtuoso / Spectre · Review-I cleared September 2026**

- Comparative switching-energy study of four capacitive-DAC schemes — conventional, monotonic, Vcm-based and merge-and-split — on a single testbench, benchmarked in normalised CV²ref
- Literature survey across 20+ IEEE / JSSC papers to select a fabricated **7.6 nW, 1 kS/s** reference design as the baseline
- Evaluating against INL/DNL, ENOB and the Walden Figure of Merit

---

## 🛠️ Technical Skills

| Domain | Technologies |
|--------|-------------|
| **Languages** | Python, C, C++, SQL, TypeScript |
| **Data & Analytics** | Power BI, Advanced Excel (pivot models, weighted scoring matrices), data cleaning and structuring, dashboard design, KPI tracking |
| **Backend & Databases** | REST API design, Node.js / Express, PostgreSQL, JWT authentication, role-based access control, schema design, indexing, integration testing |
| **Embedded & IoT** | ESP32 / ESP32-S3, Modbus RTU over RS485, MQTT over TLS, UART / Serial, sensor integration, industrial energy metering, Arduino IDE |
| **Tools & Methods** | Git & GitHub, Linux, Postman, Cadence Virtuoso / Spectre, process mapping, requirement gathering, technical documentation |

---

## 💼 Experience

### **Digitalisation Intern — Supplier Quality Development** · Daimler India Commercial Vehicles (Daimler Truck AG)
*June – August 2026 | Oragadam Plant, Chennai*

- Tracked a **10-stage real-time data implementation rollout across 107 suppliers**, and built the **Power BI dashboard** the Supplier Quality Development team used to run and report it
- Designed a **Digital Transformation Priority Checklist** scoring suppliers on 5 criteria mapped to 6 priority tiers, weighting cost and ROI highest based on research into Indian MSME capital constraints
- Authored a **Supplier Digitalisation Handbook** and presented it at the **Qprime supplier development conclave** to an external supplier audience
- Converted handwritten supplier submissions into structured datasets; delivered a 5-tab Excel priority-matrix workbook and a supplier-facing HTML scoring tool

### **IoT Engineering Intern** · Zoho Corporation
*May – July 2025 | Chennai*

- Built an ESP32-based industrial IoT gateway reading a Schneider EM6400NG three-phase energy meter over Modbus RTU on RS485, publishing 9 electrical parameters every 5 seconds to Zoho IoT Cloud over MQTT with TLS
- Decoded the meter's Modbus holding-register map; configured 32 device datapoints cloud-side
- Implemented captive-portal Wi-Fi provisioning with credentials persisted in ESP32 NVS
- Secured the cloud connection with an embedded root CA certificate

---

## 🎓 Education

**B.Tech, Electronics and Computer Engineering** — Vellore Institute of Technology (VIT), Chennai
*2023 – 2027 · CGPA 7.91 / 10*

**Relevant coursework**: Data Structures & Algorithms, DBMS, Operating Systems, Computer
Networks, Object-Oriented Programming, Microcontrollers (8051), VLSI Design, Internet of Things.

Sri Chaitanya Techno School — Class XII: 89% · Class X: 90%

---

## 🏆 Achievement

Authored and presented the **Supplier Digitalisation Handbook** at Daimler Truck's Qprime
supplier development conclave, 2026.

---

## 📈 GitHub Stats

![Aarush's GitHub Stats](https://github-readme-stats.vercel.app/api?username=itzgolly&show_icons=true&theme=dark&hide_border=true)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=itzgolly&layout=compact&theme=dark&hide_border=true)

---

## 📫 Let's Talk

Looking for graduate roles starting 2027 — embedded and IoT, core and automotive engineering,
data and digitalisation, or backend development.

- **Portfolio**: [itzgolly.github.io/Portfolio](https://itzgolly.github.io/Portfolio/)
- **LinkedIn**: [aarush-jagannathan](https://www.linkedin.com/in/aarush-jagannathan)
- **Email**: [aarushjagannathan@gmail.com](mailto:aarushjagannathan@gmail.com)

---

## 📂 About This Repo

This repo **is** the portfolio site at
[itzgolly.github.io/Portfolio](https://itzgolly.github.io/Portfolio/) — plain HTML, CSS and
vanilla JavaScript, no build step, served straight from GitHub Pages.

| File | What it is |
|------|-----------|
| `index.html` | Page content and structure |
| `style.css` | Navy + gold theme, sampled from the portrait image |
| `script.js` | Sticky nav, scroll reveal, active-section highlight, education card flips |
| `profile-hero.jpg` / `profile-about.jpg` | Portrait and desk photos |
| `Aarush_Jagannathan_Resume.pdf` | Downloadable resume, linked from the hero |

### My other repositories

| Repo | What it is | Stack |
|------|-----------|-------|
| [`servicedesk-ai`](https://github.com/ItzGOLLY/servicedesk-ai) | Multi-channel customer support platform, deployed live | TypeScript, Express, PostgreSQL, React |
| [`Iot-Energy-Monitor`](https://github.com/ItzGOLLY/Iot-Energy-Monitor) | Zoho internship project — industrial energy gateway | ESP32, Modbus RTU, MQTT, C++ |
