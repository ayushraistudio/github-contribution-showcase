const axios = require('axios');

async function fetchData(username) {
  
  
  // 1. DEMO / UNIVERSAL PREVIEW LOGIC 
  
  if (username.toLowerCase() === 'demo' || username.toLowerCase() === 'your_username') {
    return {
      name: "YOUR NAME",            // Universal Name
      total_contributions: 1025,    // Demo Data
      active_days: 135,             // Demo Data
      current_streak: 105           // Demo Data
    };
  }

  // 2. REAL GITHUB DATA FETCHING 
  
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN is missing in Environment Variables");
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        name
        login
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
    }`;

  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      { query, variables: { login: username } },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    const user = response.data.data.user;
    if (!user) throw new Error("User not found");

    const displayName = user.name || user.login;
    const days = user.contributionsCollection.contributionCalendar.weeks
      .flatMap(week => week.contributionDays)
      .reverse();
    
    let activeDays = 0;
    let currentStreak = 0;
    let streakBroken = false;

    days.forEach((day, index) => {
      if (day.contributionCount > 0) {
        activeDays++;
        
        if (!streakBroken) currentStreak++;
      } else {
        
        if (index > 0) streakBroken = true;
      }
    });

    return {
      name: displayName,
      total_contributions: user.contributionsCollection.contributionCalendar.totalContributions,
      active_days: activeDays,
      current_streak: currentStreak 
    };

  } catch (error) {
    console.error("FetchData Error:", error.message);
    throw error;
  }
}

module.exports = { fetchData };
