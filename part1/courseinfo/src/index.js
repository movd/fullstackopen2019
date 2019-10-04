import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = props => {
    return <h1>{props.course}</h1>;
  };

  const Content = props => {
    return (
      <div>
        <Part partName={part1} nExercises={exercises1}></Part>
        <Part partName={part2} nExercises={exercises2}></Part>
        <Part partName={part3} nExercises={exercises3}></Part>
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
      <Header course={course}></Header>
      <Content />
      <Total sumExercises={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
