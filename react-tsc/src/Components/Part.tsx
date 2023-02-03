import assertNever from '../helpers';
import CoursePart from '../types';

const Part = ({ part }: { part: CoursePart }): JSX.Element => {
  switch (part.type) {
    case 'normal':
      return (
        <div>
          <span>{part.description}</span>
        </div>
      );
    case 'groupProject':
      return <div>project exercises {part.groupProjectCount}</div>;
    case 'submission':
      return (
        <div>
          <span>{part.description}</span>
          <br />
          submit to{' '}
          <a href={part.exerciseSubmissionLink}>
            {part.exerciseSubmissionLink}
          </a>
        </div>
      );
    case 'special':
      return (
        <div>
          <span>{part.description}</span>
          <br />
          <span>requirements: {part.requirements.join(', ')}</span>
        </div>
      );

    default:
      return assertNever(part);
  }
};

export default Part;
