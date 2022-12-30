import express from 'express';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  try {
    return res.send('Hello Full Stack!');
  } catch (error) {
    return res.status(404).send({
      error: 'malformatted parameters'
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
