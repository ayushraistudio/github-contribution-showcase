const { fetchData } = require('../src/fetchData');
const { generateTrophy } = require('../src/generateTrophy');

module.exports = async (req, res) => {
  // URL parameters se username aur theme nikalna
  const { username, theme = 'neon' } = req.query;

  if (!username) {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(400).send('Error: Please provide a username! Example: ?username=ayushraistudio');
  }

  try {
    // 1. Data fetch karna
    const stats = await fetchData(username);
    
    // 2. SVG generate karna
    const svg = generateTrophy(stats, theme);

    // 3. Response bhejna (As an Image)
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=1800'); // 30 min cache
    
    return res.status(200).send(svg);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error generating trophy');
  }
};
