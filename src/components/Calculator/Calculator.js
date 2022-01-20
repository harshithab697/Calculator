import { useEffect, useState, useCallback, useContext } from "react";
import CalcButton from "../CalcButton/CalcButton";
import { CalculatorContext } from "../../App";
import TextInput from "../TextInput";
import { create, all } from 'mathjs';
import React from 'react';

const Calculator = () => {
    const [negationvalue, setNegationValue] = useState(false)

    const [onestate, setOneState] = useState({
        real: "",
        display: ""
    })

    const math = create(all, {})
    const { setHistory } = useContext(CalculatorContext);

    const addExpression = (value, displayValue) => {
        setOneState((prev) => ({
            real: prev.real + value,
            display: prev.display + displayValue
        }))
    }
    const clearInput = () => {
        setOneState({
            real: "",
            display: ""
        })
    }
    const getInput = (e) => {
        setOneState({
            real: e.target.value,
            display: e.target.value
        })
    }


    const submitExpression = () => {
        try {
            let result;

            result = math.evaluate(onestate.real)
            setOneState({
                real: result,
                display: result
            })
            setHistory((prev) => ([...prev, result]))
        } catch {
            console.log("invalid expression")
        }
    }

    const specialExpression = () => {
        setNegationValue(!negationvalue)
    }

    const addSquareRootExpression = (value, displayValue) => {
    }

    useEffect(() => {
        if (negationvalue === true) {
            setOneState((prev) => ({
                real: "-".concat(prev.real),
                display: "-".concat(prev.display)
            }))
        } else {
            setOneState((prev) => ({
                real: prev.real.substring(1,),
                display: prev.display.substring(1,)
            }))
        }
    }, [negationvalue])


    return (
        <>
            <div className="calculator">
                <TextInput value={onestate.display} onchange={getInput} />
                <div className="calc-wrapper">

                    <CalcButton position={3} onclick={clearInput}>CE</CalcButton>
                    <CalcButton position={3} onclick={addSquareRootExpression} value={"√"}>√x</CalcButton>
                    <CalcButton position={3} onclick={addExpression} value={"%"}>&#37;</CalcButton>
                    <CalcButton position={4} onclick={addExpression} value={"/"}>&#247;</CalcButton>


                    <CalcButton onclick={addExpression} value={7}>7</CalcButton>
                    <CalcButton onclick={addExpression} value={8}>8</CalcButton>
                    <CalcButton onclick={addExpression} value={9}>9</CalcButton>
                    <CalcButton position={4} onclick={addExpression} value={"*"}>&#215;</CalcButton>


                    <CalcButton onclick={addExpression} value={4}>4</CalcButton>
                    <CalcButton onclick={addExpression} value={5}>5</CalcButton>
                    <CalcButton onclick={addExpression} value={6}>6</CalcButton>
                    <CalcButton onclick={addExpression} position={4} value={"-"}>&#8722;</CalcButton>


                    <CalcButton onclick={addExpression} value={3}>3</CalcButton>
                    <CalcButton onclick={addExpression} value={2}>2</CalcButton>
                    <CalcButton onclick={addExpression} value={1}>1</CalcButton>
                    <CalcButton onclick={addExpression} position={4} value={"+"}>&#43;</CalcButton>


                    <CalcButton onclick={addExpression} value={0}>0</CalcButton>
                    <CalcButton onclick={addExpression} value={"."}>.</CalcButton>
                    <CalcButton onclick={specialExpression} value={"negation"}>+/-</CalcButton>
                    <CalcButton onclick={submitExpression} position={4}>&#8316;</CalcButton>


                </div>
            </div>
        </>
    )
}
export default React.memo(Calculator);