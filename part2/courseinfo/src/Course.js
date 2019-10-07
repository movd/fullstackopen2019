import React from "react";

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div className="Course">
      <Header title={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => (
        <Part name={name} exercises={exercises} key={id} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  const sumExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <strong>total {sumExercises} of exercises</strong>
    </p>
  );
};

export default Course;
