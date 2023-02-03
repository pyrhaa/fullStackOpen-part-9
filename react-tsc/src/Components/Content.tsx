import CoursePart from '../types';
import Part from './Part';

const Content = ({ content }: { content: CoursePart[] }): JSX.Element => {
  return (
    <div>
      {content.map((part) => (
        <div key={part.name}>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <Part part={part} />
        </div>
      ))}
    </div>
  );
};

export default Content;
