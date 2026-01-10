const fetch = require("node-fetch");
const fs = require("fs");

// GitHub Actions environment se username uthayega
const username = process.env.GITHUB_REPOSITORY_OWNER || "ayushraistudio";

async function fetchGitHubData() {
  console.log("Fetching Data & Calculating Streak for:", username);
  const token = process.env.GH_TOKEN;

  // GraphQL Query to get daily contribution history AND User Name
  const query = `
    query {
      user(login: "${username}") {
        name  
        createdAt
        repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
          totalCount
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL Error:", result.errors);
      return;
    }

    const userData = result.data.user;
    const calendar = userData.contributionsCollection.contributionCalendar;

    // 1. Total Contributions
    const totalContributions = calendar.totalContributions;

    // 2. Active Days Count
    let activeDaysCount = 0;
    
    // 3. 🔥 Logic to Calculate Current Streak
    let currentStreak = 0;
    let daysArray = [];

    // Flatten the weeks into a single array of days
    calendar.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        daysArray.push(day);
        if (day.contributionCount > 0) activeDaysCount++;
      });
    });

    // Reverse array to check from today backwards
    daysArray.reverse();

    const today = new Date().toISOString().split('T')[0];

    for (let i = 0; i < daysArray.length; i++) {
      const day = daysArray[i];
      
     
      if (day.contributionCount > 0) {
        currentStreak++;
      } else {
       
        if (day.date === today) {
          continue;
        }
       
        break;
      }
    }

    console.log(`✅ Data Fetched for ${username} | Streak: ${currentStreak}, Contributions: ${totalContributions}`);

    const data = {
      // Agar user ne naam set kiya hai to wo lo, nahi to username lo
      name: userData.name || username, 
      public_repos: userData.repositories.totalCount, 
      total_contributions: totalContributions,
      active_days: activeDaysCount,
      current_streak: currentStreak 
    };

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    console.log("✅ data.json updated successfully!");

  } catch (error) {
    console.error("Error fetching data:", error);
    process.exit(1);
  }
}

fetchGitHubData();
