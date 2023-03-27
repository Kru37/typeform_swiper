import React, { useState } from "react";
import Question from "../../../utils/question/Question";
import { industriesList } from "../../../data/data";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import styles from "./SelectionQuestion.module.css";
import ButtonContainer from "../../../utils/button/ButtonContainer";

const SelectionQuestion = (props) => {
  const [industries, setIndustries] = useState(industriesList);
  const [show, setShow] = useState(true);
  const [isError, setError] = useState(false);
  const [industry, setIndustry] = useState("");
  return (
    // Selection Question Container
    <div className={styles["selectionQuestion-container"]}>
      {/* Question */}
      <Question number={props.number} question={props.question} />
      {/* Question helper text */}
      <div className={styles["question-helperText"]}>
        <p>We will personalize your learning experience accordingly</p>
      </div>
      {/* Options */}
      <div className={styles["selectInput-wrapper"]}>
        <input
          type="text"
          name={props.name}
          value={industry}
          placeholder="Type or select an option"
        />
        <button className={styles.toggleBtn}>
          {show ? (
            <IoMdArrowDropup size={32} />
          ) : (
            <IoMdArrowDropdown size={32} />
          )}
        </button>
      </div>
      {/* Based on show status industry will be displayed */}
      {show && (
        <div className={styles.option}>
          <ul>
            {industries.map((data) => {
              return <li key={data}>{data}</li>;
            })}
          </ul>
        </div>
      )}
      {/* Based on error either error or button container will be displayed */}
      {isError ? <Error /> : <ButtonContainer btnText="OK" />}
    </div>
  );
};

export default SelectionQuestion;
