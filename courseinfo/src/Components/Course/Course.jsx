import Title from "./Title";
import Part from "./Part";

const Course = ({ course }) => {
  return (
    <>
      <Title name={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Course;
