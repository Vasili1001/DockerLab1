const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const quotes = [
  'The only limit to our realization of tomorrow is our doubts of today.',
  'Do what you can, with what you have, where you are.',
  'The purpose of our lives is to be happy.',
  "Believe you can and you're halfway there.",
  'Act as if what you do makes a difference. It does.',
];

const facts = [
  'Bananas are berries, but strawberries are not.',
  'Octopuses have three hearts.',
  'Honey never spoils – archaeologists found 3000-year-old honey still edible.',
  'There are more stars in the universe than grains of sand on Earth.',
  'A day on Venus is longer than a year on Venus.',
];

// Возвращает случайную цитату
app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// Возвращает случайный факт
app.get('/api/fact', (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.json({ fact: randomFact });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
