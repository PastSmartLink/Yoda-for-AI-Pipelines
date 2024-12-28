# Yoda Scraping Code

**Yoda Scraping Code** is a web scraping application designed to extract structured grant data from the [EU Funding & Tenders Portal](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home) and [CORDIS Portal](https://cordis.europa.eu/projects/en). Targeted industries include IT, Automation, Artificial Intelligence (AI), Software Development, Data Science, Cybersecurity, Blockchain, IoT, Game Development, and EdTech.

## 🚀 Features

- **Targeted Scraping:** Extracts grant information based on user-defined keywords and industries.
- **Interactive Visualizations:** Utilizes Chart.js to display grants distribution by industry.
- **Downloadable Data:** Allows users to download scraped data in CSV, JSON, or TXT formats.
- **Secure and Efficient:** Implements rate limiting, secure headers, and user-agent rotation to ensure reliable scraping.
- **Responsive Design:** Ensures a seamless user experience across devices.

## 🛠️ Technologies Used

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express.js](https://expressjs.com/)
  - [Puppeteer Core](https://pptr.dev/)
  - [Bright Data](https://brightdata.com/)
  - [Express Rate Limit](https://github.com/nfriedly/express-rate-limit)
  - [Helmet](https://helmetjs.github.io/)

- **Frontend:**
  - HTML5 & CSS3
  - JavaScript
  - [Chart.js](https://www.chartjs.org/)

## 📚 Setup and Installation

### Prerequisites

- **Node.js and npm:** [Download and install](https://nodejs.org/en/download/).
- **Bright Data Account:** [Sign up](https://brightdata.com/) to obtain proxy credentials.
- **Git:** [Download and install](https://git-scm.com/downloads) (optional but recommended).

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/yoda-scraping-code.git
   cd yoda-scraping-code
