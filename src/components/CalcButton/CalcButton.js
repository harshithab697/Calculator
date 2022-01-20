import './CalcButton.css';
import React from 'react';

const CalcButton = (props) => {
    const isOperator = val => {
        if (props.position % 4 === 0) {
            return "operator row_calc"
        } else if (props.position % 3 === 0) {
            return "first_row row_calc"
        } else {
            return "button row_calc"
        }
    }
    return (
        <>
            <div className={isOperator(props.position)} onClick={()=>{props.onclick(props.value, props.children)}}>
                {props.children}
            </div>
        </>
    );
}
export default React.memo(CalcButton);