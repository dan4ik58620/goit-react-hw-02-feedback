import React from "react";
import PropTypes from "prop-types";
import classes from "./Feedback.module.css";

const Feedback = function ({ onLeft }) {
  return (
    <div className={classes.cont}>
      <button
        className={classes.btn}
        name="good"
        type="button"
        onClick={onLeft}
      >
        Good
      </button>
      <button
        className={classes.btn}
        name="neutral"
        type="button"
        onClick={onLeft}
      >
        Neutral
      </button>
      <button className={classes.btn}  name="bad" type="button" onClick={onLeft}>
        Bad
      </button>
    </div>
  );
};
export default Feedback;

Feedback.propTypes = {
  onLeft: PropTypes.func.isRequired,
};
