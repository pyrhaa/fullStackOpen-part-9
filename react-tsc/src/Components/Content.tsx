interface ContentProps {
  name: string;
  exerciseCount: number;
}

const Content = ({ content }: { content: ContentProps[] }): JSX.Element => {
  return (
    <div>
      {content.map((part) => (
        <div key={part.name}>
          <p>
            {part.name} {part.exerciseCount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Content;
