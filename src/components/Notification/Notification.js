import React from 'react';
import PropTypes from "prop-types"
import classes from "./Notification.module.css"


const Notification = function ({message}) {
  return (
    <>
    <h2 className={classes.h2}>{message}</h2>
    </>
  );
};
export default Notification
Notification.propTypes={
 message: PropTypes.string.isRequired
  }