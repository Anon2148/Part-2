import Title from "./Title";
import Part from "./Part";

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => {
    console.log("what is happening", s, p);
    return s + p.exercises;
  }, 0);

  return (
    <>
      <Title name={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <b>total of {total} exercises</b>
    </>
  );
};

export default Course;
