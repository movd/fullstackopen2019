import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  const Header = props => {
    return <h1>{props.course}</h1>;
  };

  const Content = props => {
    return (
      <div>
        <Part partName={part1.name} nExercises={part1.exercises} />
        <Part partName={part2.name} nExercises={part2.exercises} />
        <Part partName={part3.name} nExercises={part3.exercises} />
      </div>
    );
  };

  const Part = props => {
    return (
      <p>
        {props.partName} {props.nExercises}
      </p>
    );
  };

  const Total = props => {
    return <p>Number of exercises {props.sumExercises}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        sumExercises={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
