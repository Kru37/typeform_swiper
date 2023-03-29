import React , {useState} from 'react'
import { optionList } from '../../../data/data'
import Question from '../../../utils/question/Question'
import styles from './MultipleSelect.module.css'
import {MdOutlineRadioButtonChecked , MdOutlineRadioButtonUnchecked} from 'react-icons/md'
const MultipleSelect = (props) => {
    const [value, setValue] = useState()
  return (
    <div className={styles['multipleSelect-container']}>
        {/* Question */}
        <Question number = {props.number} question = {props.question} />
        {/* Info */}
        {props.children}
        {/* Option List */}
        <div className={styles.optionList} >
            {optionList.map((data) => {
                return (
                    <div key={data.key} className= {styles["optionList-item"]}>
                        <div className={styles['optionItemLabel']}>
                        <div className={styles["key-wrapper"]}>
                            <span>{data.key}</span>
                        </div>
                        <div className={styles.optionValue}>
                            <span>{data.value}</span>
                        </div>
                        </div>
                        <div className={styles.checkbox}>
                        {data.value === value ? <MdOutlineRadioButtonChecked/> : <MdOutlineRadioButtonUnchecked/>}
                        </div>
                    
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MultipleSelect