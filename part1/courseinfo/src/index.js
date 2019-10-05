import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  const Header = ({ course }) => <h1>{course}</h1>;

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(({ name, exercises }, idx) => (
          <Part name={name} exercises={exercises} key={idx} />
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
    let sumExercises =
      parts[0].exercises + parts[1].exercises + parts[2].exercises;
    return <p>Number of exercises {sumExercises}</p>;
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
