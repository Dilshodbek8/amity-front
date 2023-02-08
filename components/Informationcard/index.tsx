import React from "react";
import classes from "./infocard.module.scss";
const Informationcard = () => {
  return (
    <>
      <div className="container">
        <div className={classes.wrapAll}>
          <div className={classes.card}>
            {/* <div className={classes.title}>
              <h2>83%</h2>
              <p>of recent graduates started new jobs</p>
              <span></span>
            </div> */}
          </div>
          <div className={classes.card2}>
            {/* <div className={classes.title}>
              <h2>134</h2>
              <p>Degree programs</p>
              <span></span>
            </div> */}
          </div>
          <div className={classes.card3}>
            {/* <div className={classes.title}>
              <h2>#1</h2>
              <p>Most international university</p>
              <span></span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Informationcard;
