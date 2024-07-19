import Title from "./Title";
import Part from "./Part";

const Course = ({ course }) => {
  const countAll = () => {
    let sum = 0;
    course.parts.forEach((part) => {
      sum += part.exercises;
    });
    return sum;
  };

  return (
    <>
      <Title name={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <b>total of {countAll()} exercises</b>
    </>
  );
};

export default Course;
