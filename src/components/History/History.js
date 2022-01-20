import { useContext } from 'react'
import { CalculatorContext } from "../../App";


const History = (props) => {
    const {history} = useContext(CalculatorContext);
    const values = history.map((number)=>{
        return <li>{number}</li>;
    });
    return (
        <>
        <ul className='historylist'>
            {values}
        </ul>
        </>
    )
}
export default History;