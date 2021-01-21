import React, { Component } from "react";
import classes from "./App.module.css";
import Statistics from "./components/Statistics/Statistics";
import Feedback from "./components/Feedback/Feedback";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  toSetState = (elem) => {
    this.setState((prevState) => ({
      [elem.target.name]: prevState[elem.target.name] + 1,
    }));
  };

  countFeedback = function () {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPercentage = function () {
    return Math.floor((this.state.good * 100) / this.countFeedback());
  };
  render() {
    const total = this.countFeedback();
    return (
      <div className={classes.box}>
        <Section title="Please leave feedback">
          <Feedback onLeft={this.toSetState} />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countFeedback()}
              percentage={this.countPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
