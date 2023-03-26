import React from "react";
import styles from "./ButtonContainer.module.css"
const ButtonContainer = (props) => {
  return (
    <div className={styles["btn-container"]}>
      {/* To go to next slide */}
      <button className={styles["agree-btn"]}>{props.btnText}</button>
      <div className={styles["helpertext-container"]}>
        <div className={styles["helpertext"]}>
          press
          <strong>Enter ↵</strong>
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
