interface Params {
  value1: number[];
  value2: number;
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArgs = (args: Array<string>): Params => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  const exercices: number[] = args[2]
    .slice(1, -1)
    .split(',')
    .map((e) => parseFloat(e));
  const target: number = parseFloat(args[3]);

  if (!exercices.some(isNaN) && !isNaN(target)) {
    return {
      value1: exercices,
      value2: target
    };
  } else {
    throw new Error('Provided values were not corrects!');
  }
};

const calculateExercises = (exercices: number[], target: number): Result => {
  const periodLength: number = exercices.length;
  const trainingDays: number = exercices.filter(
    (exerciseHour) => exerciseHour > 0
  ).length;

  const average: number =
    exercices.reduce((a, b) => a + b, 0) / exercices.length;

  let rating: number;
  let ratingDescription: string;
  if (average < target) {
    rating = 1;
    ratingDescription = `Too bad you didn't reach your exercise goals this week, try again next week`;
  } else if (target === average) {
    rating = 2;
    ratingDescription = `not too bad but could be better`;
  } else if (average > target) {
    rating = 3;
    ratingDescription = `Well done!`;
  }
  return {
    periodLength,
    trainingDays,
    success: average >= target,
    rating,
    ratingDescription,
    target,
    average
  };
};

try {
  const { value1, value2 } = parseArgs(process.argv);
  console.log(calculateExercises(value1, value2));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

//dont forget to avoid zsh no matches, you to enter in the console the parameters like this: npm run exos '[1,2,4,7,2,5]' 3
//So the array argument needs quotes
