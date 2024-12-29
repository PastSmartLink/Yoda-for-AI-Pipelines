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

*This is a submission for the [Bright Data Web Scraping Challenge](https://dev.to/challenges/brightdata): Scrape Data from Complex, Interactive Websites*

## What I Built

I created **Yoda’s EU Grant Finder for Solopreneurs**, a curated dataset (and minimal front-end demo) that pulls relevant EU funding opportunities specifically tailored to solo entrepreneurs and microbusinesses. 

- **Core Value**: It’s tough for small innovators to find relevant grants amidst vast, complex EU portals. This tool scrapes key information — titles, deadlines, eligibility criteria, funding amounts, and official links — and serves it in a clean, easy-to-download CSV (and JSON) format.  
- **MVP Scope**: Focuses on a handful of tech-oriented and innovation-focused EU grants. Demonstrates proof-of-concept with potential to expand into a fully-fledged, AI-driven recommendation platform.

## Demo

You can see a few screenshots of the working prototype below (from my local dev environment). More on [Github](https://github.com/PastSmartLink/Yoda-for-AI-Pipelines)
It includes a basic UI where users can:

- Filter grants by industry (e.g., AI, Urban Innovation, etc.).  
- Search by keyword (e.g., “research,” “green tech,” “blockchain”).  
- View an interactive bar chart of *approximate* funding values.  
- Download the data as CSV with a single click.  

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gye9b2raj59ind4cfolx.jpg)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ol6oe3iswr3wjwkqixto.jpg)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e1ytlf1hn2k6t877x7vu.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lku7ynfik0vt220qbntd.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zb1kjgqjesa3bwazh6w7.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zcf6k5nj6ckrgq0nrr6e.jpg)

> *“May the grants and funds be with you!”*

You can explore the public-facing code samples in my [GitHub repository](https://github.com/PastSmartLink/Yoda-for-AI-Pipelines), although I’m not pushing all code just yet, as I plan to expand this into a commercial AI pipeline integration.

## How I Used Bright Data

### The Challenge
EU funding portals (like the [Funding & Tenders Portal](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home) or [CORDIS](https://cordis.europa.eu/)) are laden with complex pagination, filter options, and dynamic elements. Building a custom scraper often requires:

- Handling JavaScript-driven pagination.  
- Navigating multi-step search forms.  
- Parsing unstructured text spread across multiple iframes or tables.  

### The Solution
1. **Bright Data’s Web Scraper**  
   - I used Bright Data to efficiently handle dynamic content. Their built-in flow for rotating proxies helped avoid potential IP blocks and ensure uninterrupted data extraction.

2. **Automated Scheduling & Pagination**  
   - By combining Bright Data’s capabilities with my Node.js scripts, I iterated through multiple pages (often behind session tokens).  

3. **Data Cleaning & Normalization**  
   - Titles, deadlines, and funding amounts often appeared in varying formats. I wrote a small pipeline to standardize them (e.g., turning `31-12-2023` into `2023-12-31`).  
   - Where official data was missing or in progress, I labeled it as `N/A`.

4. **Accessibility**  
   - Once scraped, the data was saved into both CSV and JSON formats for maximum reuse potential.  
   - The front-end interface (using plain JavaScript / chart libraries) references these files, offering a quick snapshot of which grants might be relevant.

### Why It Fits Prompt #1
- My primary deliverable is **a brand-new, solopreneur-focused dataset** — something that doesn’t currently exist in a single, easily downloadable location.  
- It demonstrates Bright Data’s robust scraping capabilities to build a meaningful resource for an underserved audience.

#### (Qualifying for Other Prompts Too?)
- **Prompt #2**: I provide a minimal front-end with an interactive chart. A future expansion could deepen these insights (like advanced analytics or AI recommendations).  
- **Prompt #3**: My scraping overcame complex, dynamic pages with multiple filtering options — but the dataset creation (Prompt #1) remains the central focus.

## Technical Highlights

- **Front-End**: A lightweight React/Vanilla JS interface (run via `npx live-server`) that visualizes the data in bar charts and searchable tables.  
- **Back-End**: Node.js scripts for scraping (run via `npm run dev`), leveraging Bright Data to handle concurrency, proxies, and session-based pages.  
- **Data Visualization**: Simple charting library (Chart.js or D3) for dynamic bar graphs.  
- **Branding**: Yoda-themed design and microcopy for a fun, memorable user experience.  

> **Future Plans**  
> - **AI Integration**: Tying this data into my “Yoda AI Pipeline” for personalized grant recommendations.  
> - **Expanding Sources**: Adding more EU programs (Horizon Europe, Startup Europe) plus local government grants.  
> - **Commercialization**: Offering deeper data analysis or specialized filtering for a subscription fee or via one-time dataset purchases.

## Team & Credits

- **Developer**: [Hans Schulte](https://x.com/pastsmartlink)  
- **Email**: [pastsmartlink@gmail.com](mailto:pastsmartlink@gmail.com)  
- **GitHub**: [PastSmartLink](https://github.com/PastSmartLink)  
- **DEV.to**: [@PastSmartLink](https://dev.to/pastsmartlink)  

No other teammates have contributed code directly, though the Bright Data community has been a great resource for best practices. 

> One byte is equivalent to eight bits. No bits or bytes were harmed during the making of this scraping development!

## Conclusion

**Yoda’s EU Grant Finder for Solopreneurs** aims to simplify the journey for small innovators who are typically overlooked. By leveraging Bright Data’s web scraping capabilities, we’ve transformed fragmented, hard-to-find data into a concise dataset — the perfect launchpad for future AI pipelines, real-time updates, and commercial data sharing.

> *“Follow me on [X.com/pastsmartlink](https://x.com/pastsmartlink). May the Force (and Funding) be with you!”*

Thanks for checking out my submission! Questions or feedback? Feel free to reach out via email or on social media.

[Yoda for AI Pipelines](https://github.com/PastSmartLink/Yoda-for-AI-Pipelines)
[Frontend showcase](https://github.com/PastSmartLink/frontend-showcase)

In the mid-2000s, it was clear that Europe’s next wave of innovation would involve **data-driven insights** and community-focused solutions. Today, this vision is stronger than ever: entrepreneurs across the EU use powerful tools like **web scraping** and **machine learning** to tackle societal challenges.

A big part of this shift is the **increased accessibility of public data**, supported by initiatives like the [**Bright Initiative**](https://brightinitiative.com/). Through community engagement, education, and philanthropy, programs like this ensure that data technology serves not just large organizations but also **small businesses and solopreneurs**.

My project, **Yoda’s EU Grant Finder for Solopreneurs**, aligns with this vision. It scrapes and consolidates EU funding info so even **micro-entrepreneurs** can spot and apply for relevant grants—leveling the playing field by giving them equal access to critical resources.

When data is open and responsibly used, **every** innovator has a shot at turning big ideas into real impact. By uniting tech, open data, and social responsibility, we’re shaping a more inclusive, forward-thinking Europe—one grant at a time.

> May the Force (and Funding) be with you!

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aryqeh99a4y6ifevbg9c.png)


