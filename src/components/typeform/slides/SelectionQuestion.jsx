import React, { useEffect, useRef, useState } from "react";
import Question from "../../../utils/question/Question";
import { industriesList } from "../../../data/data";
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import styles from "./SelectionQuestion.module.css";
import ButtonContainer from "../../../utils/button/ButtonContainer";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { formAction } from "../../../store/formSlice";
import { useSwiper } from "swiper/react";
import Error from "../../../utils/error/Error";
const SelectionQuestion = (props) => {
  const [industries, setIndustries] = useState(industriesList);
  const showList = useSelector((state) => state.typeform.showList)
  const [completed, setCompleted] = useState(false);
  const [isError, setError] = useState(false);
  const [industry, setIndustry] = useState("");
  const dispatch = useDispatch();
  const optionRef = useRef(null);
const swiper = useSwiper()

  // Stores the value in the redux store
  const setInStore = (name, val) => {
    const found = industriesList.findIndex((data) => data === val);
    if (found !== -1) {
      setCompleted(true);

      dispatch(formAction.addData({ name, value: found }));
      dispatch(formAction.setProgress())
    }
  };
  // Debounce function to wait for sometime before adding
  const debouncedSetInStore = debounce((val) => setInStore(val), 500);
  // Function to filter the list according to the input
  const handleInputChange = (e) => {
    setCompleted(false);
    setError(false)
    setIndustry(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    const filteredList = industriesList.filter(
      (data) => data.toLowerCase().indexOf(searchValue) !== -1
    );
    setIndustries(filteredList);
    debouncedSetInStore(e.target.name, e.target.value);
  };
  const handleWheel = (e) => {
    const delta = e.deltaY;
    const ul = optionRef.current.querySelector("ul");
    ul.scrollTop += delta;
  };
  // To toggle the list
  const toggleList = () => {
   dispatch(formAction.toggleList())
  };
  // After selecting an industry from the list
  const handleListItemClick = (e) => {
    setIndustry(e.target.textContent);
    setCompleted(true);
    setError(false)
   
    dispatch(formAction.changeListstatus(false))
    // optimize
    dispatch(
      formAction.addData({ name: props.name, value: e.target.textContent })
    );
    dispatch(formAction.setProgress())
  };
  // To clear input
  const cancelSelection = () => {
    setIndustry('');
    setCompleted(false)
  }
  // To show list on input focus
  const focusList = () => {
    dispatch(formAction.changeListstatus(true))
  }

  const nextSlide = () => {
     if(completed){
       swiper.slideNext()
     }else{
       setError(true)
     }
  }

  return (
    // Selection Question Container

    <div className={styles["selectionQuestion-container"]} >
      {/* Question */}
      <Question number={props.number} question={props.question} />
      {/* Question helper text */}
      <div className={styles["question-helperText"]}>
        <p>We will personalize your learning experience accordingly</p>
      </div>
      {/* Options */}
      <div className="input-options-container">
      <div className={styles["selectInput-wrapper"]}>
        <input
          type="text"
          name={props.name}
          value={industry}
          placeholder="Type or select an option"
          onChange={handleInputChange}
          onFocus={focusList}
        />
        {completed ? (
          <button className={styles.toggleBtn} onClick={cancelSelection}>
            <IoMdClose size={28} />
          </button>
        ) : (
          <button className={styles.toggleBtn} onClick={toggleList}>
            {showList ? (
              <IoMdArrowDropup size={32} />
            ) : (
              <IoMdArrowDropdown size={32} />
            )}
          </button>
        )}
      </div>
      {/* Based on show status industry will be displayed */}
      {showList && (
        <div className={styles.option} onWheel={handleWheel} ref={optionRef}>
          <ul>
            {industries.map((data) => {
              return (
                <li key={data} onClick={handleListItemClick}>
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
      {/* Based on error either error or button container will be displayed */}
      {isError ? <Error /> : <ButtonContainer btnText="OK" nextSlide = {nextSlide}/>}
    </div>
  
  );
};

export default SelectionQuestion;
