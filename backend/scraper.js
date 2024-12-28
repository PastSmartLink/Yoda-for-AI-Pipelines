const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Load the .env file

const OUTPUT_PATH = './output';

// Ensure OUTPUT_PATH exists
if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH, { recursive: true });
    console.log(`Created output directory at: ${OUTPUT_PATH}`);
}

const scrapeCORDIS = async (keywords) => {
    if (!process.env.CORDIS_SEARCH_URL) {
        console.error('CORDIS_SEARCH_URL is not defined in .env file. Exiting...');
        return;
    }

    const searchURL = process.env.CORDIS_SEARCH_URL.replace('%s', keywords.split(' ').join('%20'));
    console.log(`🔍 Constructed Search URL: ${searchURL}`);

    try {
        const browser = await puppeteer.launch({ headless: true });
        console.log('🚀 Browser launched.');

        const page = await browser.newPage();
        console.log('📄 New page created.');

        // Log network activity
        page.on('request', request => {
            console.log(`🔗 Request: ${request.url()}`);
        });

        console.log('🌐 Navigating to CORDIS Search URL...');
        await page.goto(searchURL, { waitUntil: 'networkidle2', timeout: 300000 });
        console.log('✅ Page navigation completed.');

        console.log('🔄 Waiting for results to load...');
        try {
            await page.waitForSelector('.c-card__main-link', { visible: true, timeout: 300000 });
        } catch (error) {
            console.error('❌ Timeout waiting for results. Capturing screenshot...');
            const errorScreenshotPath = path.join(OUTPUT_PATH, 'error_screenshot.png');
            await page.screenshot({ path: errorScreenshotPath, fullPage: true });
            console.log(`📸 Error screenshot saved as "${errorScreenshotPath}".`);
            throw new Error('Results did not load in time.');
        }

        console.log('📄 Scraping results...');
        const results = await page.$$eval('.c-card__main-link', links =>
            links.map(link => ({
                title: link.textContent.trim(),
                url: link.href,
            }))
        );

        console.log(`✅ Found ${results.length} results.`);

        // Save results to JSON file
        const resultsPath = path.join(OUTPUT_PATH, 'results.json');
        fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
        console.log(`💾 Results saved to "${resultsPath}".`);

        // Capture a screenshot of the final page
        const successScreenshotPath = path.join(OUTPUT_PATH, 'success_screenshot.png');
        await page.screenshot({ path: successScreenshotPath, fullPage: true });
        console.log(`📸 Screenshot saved as "${successScreenshotPath}".`);

        await browser.close();
        console.log('🖥 Browser closed.');
        return results;
    } catch (error) {
        console.error('❌ Error during scraping:', error.message);
        throw error;
    }
};

// Example usage:
(async () => {
    try {
        const keywords = 'quantum computing'; // Example keywords
        await scrapeCORDIS(keywords);
        console.log('✅ Scraping completed.');
    } catch (error) {
        console.error('❌ Main error:', error.message);
    }
})();