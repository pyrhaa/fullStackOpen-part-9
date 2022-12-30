interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parseArgs = (args: Array<string>): Array<number> => {
  if (args.length < 4)
    throw new Error('Please provide both a target and some amount of days');
  if (isNaN(Number(args[2]))) {
    throw new Error(
      'Target must be a number. Use the format: npm run calculateExercises <target> <day 1> <day 2> ... <day n>.'
    );
  }

  const userData = args.filter((_arg, i) => i > 1);
  return userData.map((arg) => {
    if (isNaN(Number(arg))) {
      throw new Error('Exercise amount must be a number');
    }
    return Number(arg);
  });
};

const calculateExercises = (exercices: Array<number>): Result => {
  const periodLength: number = exercices.length;
  const trainingDays: number = exercices.filter(
    (exerciseHour) => exerciseHour > 0
  ).length;

  const average: number =
    exercices.reduce((a, b) => a + b, 0) / exercices.length;

  let rating: number;
  let ratingDescription: string;
  const target = exercices[0];
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

function exosResultat() {
  try {
    const data = parseArgs(process.argv);
    console.log(data);
    console.log(calculateExercises(data));
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
}

exosResultat();
