import { useContext, useState } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import React from 'react';

const TextInput = (props) => {
    const [count, setCount] = useState("");

    return (
        <>
            <InputGroup size="lg" className="calc_input ">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" style={{ "textAlign": "right" }} onChange={(event) => (props.onchange(event))} value ={props.value}/>
            </InputGroup>
        </>
    )
}
export default React.memo(TextInput);