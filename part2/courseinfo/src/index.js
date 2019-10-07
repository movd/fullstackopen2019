import React from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div className="Course">
      <Header title={name} />
      <Content parts={parts} />
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

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Lorem Ipsum",
        exercises: 3,
        id: 4
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
