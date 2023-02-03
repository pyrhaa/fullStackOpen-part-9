interface ContentProps {
  name: string;
  exerciseCount: number;
}
const Total = ({ content }: { content: ContentProps[] }): JSX.Element => {
  return (
    <p>
      {' '}
      Number of exercises{' '}
      {content.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
