const fetch = require("node-fetch");
const fs = require("fs");

const username = "ayushraistudio";

async function fetchGitHubData() {
  console.log("Fetching Data & Calculating Streak for:", username);
  const token = process.env.GH_TOKEN;

  // GraphQL Query to get daily contribution history
  const query = `
    query {
      user(login: "${username}") {
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
      
      // Agar contribution hai to streak badhao
      if (day.contributionCount > 0) {
        currentStreak++;
      } else {
        // Agar aaj 0 contribution hai, to streak mat todo (abhi din baaki hai)
        if (day.date === today) {
          continue;
        }
        // Agar kal ya usse pehle 0 tha, to streak break
        break;
      }
    }

    console.log(`✅ Data Fetched: Streak: ${currentStreak}, Contributions: ${totalContributions}`);

    const data = {
      public_repos: userData.repositories.totalCount, // Data fetch kar rahe hain par display nahi karenge
      total_contributions: totalContributions,
      active_days: activeDaysCount,
      current_streak: currentStreak // Yeh naya data hai
    };

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    console.log("✅ data.json updated successfully!");

  } catch (error) {
    console.error("Error fetching data:", error);
    process.exit(1);
  }
}

fetchGitHubData();

