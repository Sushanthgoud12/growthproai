const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
    "Your Go-To Spot for Quality Service!",
    "Discover Excellence with Us!",
    "Why We're the Talk of the Town in 2025!",
    "Unmatched Value and Experience Await!",
    "Setting New Standards for Businesses!"
];

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.post('/business-data', (req, res) => {
    const { name, location } = req.body;

    if (!name || !location) {
        return res.status(400).json({ error: 'Name and Location are required' });
    }

    const data = {
        rating: (Math.random() * (5 - 3) + 3).toFixed(1),
        reviews: Math.floor(Math.random() * 500) + 1,
        headline: `Why ${name} is ${location}'s Best Business in 2025`
    };

    res.json(data);
});

app.get('/regenerate-headline', (req, res) => {
    const { name, location } = req.query;

    if (!name || !location) {
        return res.status(400).json({ error: 'Name and Location are required' });
    }

    const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];

    res.json({
        headline: `${randomHeadline} — ${name} in ${location}`
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
