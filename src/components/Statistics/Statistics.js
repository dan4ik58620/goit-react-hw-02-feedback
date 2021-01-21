import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <ul className={classes.li}>
        <li>
          <p className={classes.good}>Good: {good}</p>
        </li>
        <li>
          <p className={classes.neutral}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={classes.bad}>Bad: {bad}</p>
        </li>
        <li>
          <p className={classes.total}>Total: {total}</p>
        </li>
        <li>
          <p className={classes.feedback}>Positive feedback: {percentage} % </p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
