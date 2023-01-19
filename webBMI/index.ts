import express from 'express';
import { calculateBmi } from '../bodyMass/bmiCalculator';
import { calculateExercises } from '../bodyMass/exerciseCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  try {
    const { height, weight } = _req.query;
    const validParameters: boolean =
      !isNaN(Number(height)) && !isNaN(Number(weight));

    if (!validParameters || !weight || !height) {
      return res
        .status(400)
        .json({
          error: 'malformatted parameters'
        })
        .end();
    }

    const bmi = calculateBmi(Number(height), Number(weight));

    return res.json({ weight, height, bmi });
  } catch (error) {
    console.log(error);

    return res.status(404).send(error);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
