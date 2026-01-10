// index.js
import fs from "fs";
import { getGitHubData } from "./src/fetchData.js";
import { generateSVG } from "./src/generateTrophy.js";

async function main() {
  try {
    // Username will be automatically detected inside fetchData.js
    // using process.env.GITHUB_REPOSITORY_OWNER
    const data = await getGitHubData();

    const svg = generateSVG(data);
    fs.writeFileSync("trophy.svg", svg);

    console.log("✅ trophy.svg written successfully");
  } catch (err) {
    console.error("❌ Error:", err.message);

    // Fallback SVG so README never breaks
    const errSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="80">
        <rect width="100%" height="100%" fill="#222"/>
        <text x="10" y="45" fill="#fff" font-size="14">
          Error: ${String(err.message).slice(0, 120)}
        </text>
      </svg>
    `;

    fs.writeFileSync("trophy.svg", errSvg);
  }
}

main();
