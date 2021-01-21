import React from "react";
import PropTypes from "prop-types";
import classes from "./Section.module.css";

const Section = function ({ title, children }) {
  return (
    <section>
      <h1 className={classes.h1}>{title}</h1>
      {children}
    </section>
  );
};
export default Section;

Section.defaultProps = {
  title: "Statistics",
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
