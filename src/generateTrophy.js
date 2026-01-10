function generateTrophy(data, theme) {
  const displayName = data.name || "GitHub User";

  const themes = {
    // 🟢 NEON THEME (Fixed)
    neon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#0f2027" />
            <stop offset="100%" style="stop-color:#2c5364" />
          </linearGradient>
          <style>
            .title { font-family: sans-serif; font-weight: bold; font-size: 22px; fill: white; text-transform: uppercase; }
            .label { font-family: sans-serif; font-size: 14px; fill: #aeaeae; text-transform: uppercase; }
            .num { font-family: sans-serif; font-weight: 800; font-size: 40px; fill: white; }
          </style>
        </defs>
        <rect x="10" y="10" width="780" height="230" rx="15" fill="url(#bgGradient)" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
        <text x="400" y="50" text-anchor="middle" class="title">⚡ ${displayName.toUpperCase()} STATS ⚡</text>
        <g transform="translate(50, 90)">
          <rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#00ffcc" stroke-width="2"/>
          <text x="80" y="35" text-anchor="middle" class="label" fill="#00ffcc">Active Days</text>
          <text x="80" y="85" text-anchor="middle" class="num">${data.active_days}</text>
        </g>
        <g transform="translate(290, 80)">
          <rect width="220" height="130" rx="12" fill="rgba(0,0,0,0.5)" stroke="#ff00cc" stroke-width="3"/>
          <text x="110" y="40" text-anchor="middle" class="label" fill="#ff00cc">Contributions</text>
          <text x="110" y="95" text-anchor="middle" class="num" style="font-size: 50px;">${data.total_contributions}</text>
        </g>
        <g transform="translate(590, 90)">
          <rect width="160" height="110" rx="10" fill="rgba(0,0,0,0.3)" stroke="#ff5e00" stroke-width="2"/>
          <text x="80" y="35" text-anchor="middle" class="label" fill="#ff5e00">Streak</text>
          <text x="80" y="85" text-anchor="middle" class="num">${data.current_streak}</text>
        </g>
      </svg>`,

    // 🟣 CYBERPUNK THEME
    cyberpunk: `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
        <rect width="800" height="250" fill="#000" />
        <text x="400" y="60" fill="#0ff" text-anchor="middle" font-family="monospace" font-size="25" font-weight="bold"> { SYSTEM_STATS: ${displayName.toUpperCase()} } </text>
        <text x="400" y="150" fill="#f0f" text-anchor="middle" font-family="monospace" font-size="60" font-weight="bold">${data.total_contributions}</text>
        <text x="400" y="200" fill="#0ff" text-anchor="middle" font-family="monospace" font-size="20">CONTRIBUTIONS_LOADED...</text>
      </svg>`,

    // 🟡 LUXURY GOLD THEME
    gold: `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="250" viewBox="0 0 800 250">
        <rect width="800" height="250" fill="#1a1a1a" />
        <rect x="10" y="10" width="780" height="230" fill="none" stroke="#d4af37" stroke-width="4" rx="10"/>
        <text x="400" y="60" fill="#d4af37" text-anchor="middle" font-family="serif" font-size="30" font-style="italic">${displayName}</text>
        <text x="400" y="140" fill="#fff" text-anchor="middle" font-family="serif" font-size="50" font-weight="bold">${data.total_contributions}</text>
        <text x="400" y="190" fill="#d4af37" text-anchor="middle" font-family="serif" font-size="20" letter-spacing="5">GOLDEN CONTRIBUTIONS</text>
      </svg>`
  };

  return themes[theme] || themes.neon;
}

module.exports = { generateTrophy };
