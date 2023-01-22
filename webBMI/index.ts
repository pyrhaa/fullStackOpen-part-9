import express from 'express';
import { calculateBmi } from '../bodyMass/bmiCalculator';
// import { calculateExercises } from '../bodyMass/exerciseCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

app.post('/exercices', (_req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = _req.body;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const validParameter1: boolean = daily_exercises.every((el: number) => {
      return typeof el === 'number';
    });
    const validParameter2 = !isNaN(Number(target));

    if (!daily_exercises || !target) {
      return res.status(400).send({ error: 'parameters missing' });
    }
    if (!validParameter1 || !validParameter2) {
      return res.status(400).send({ error: 'malformatted parameters' });
    }

    console.log('daily: ', daily_exercises, 'target: ', target);

    return null;
  } catch (error) {
    console.log(error);

    return res.status(404).send(error);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
