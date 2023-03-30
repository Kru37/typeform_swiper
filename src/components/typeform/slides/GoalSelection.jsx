// import React from 'react'

// const GoalSelection = () => {
//   return (
//     <div className={styles["multipleSelect-container"]}>
//     {/* Question */}
//     <Question number={props.number} question={props.question} />
//     {/* Info */}
//     {props.children}
//     {/* Option List */}
//     <div className={styles.optionList}>
//       {optionList.map((data) => {
//         return (
//           //single list item
//           <div
//             key={data.key}
//             className={`${styles["optionList-item"]} ${
//               data.value === value ? styles["optionList-item-active"] : ""
//             }`}
//             onClick={() => handleSelect(data.value)}
//           >
//             <div className={styles["optionItemLabel"]}>
//               <div className={styles["key-wrapper"]}>
//                 <span>{data.key}</span>
//               </div>
//               <div className={styles.optionValue}>
//                 <span>{data.value}</span>
//               </div>
//             </div>
//             <div className={styles.checkbox}>
//               {data.value === value ? (
//                 <MdOutlineRadioButtonChecked />
//               ) : (
//                 <MdOutlineRadioButtonUnchecked />
//               )}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//        {/*if error is present error component will be shown else button container*/}
//        { isError ? <Error/> : <ButtonContainer btnText = "OK" nextSlide = {nextSlide}/>}
//   </div>
//   )
// }

// export default GoalSelection