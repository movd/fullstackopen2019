import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad }) => {
  let count = good + neutral + bad;
  let total = 1 * good + 0 * neutral + -1 * bad;
  let average = count && total / count;
  let positive = `${count && (good / count) * 100} %`;
  return (
    <table className="Statistics">
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={count} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />

      <h2>statistics</h2>
      {good || neutral || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
