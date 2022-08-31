import React, {useState} from 'react'

export default function App(){

    const [number, setNumber] = useState(0)

    // const add = () => {
    //     setNumber(number + 1)
    // }

    // const remove = () => {
    //     setNumber(number - 1)
    // }

    return(
        < >
            <h1>{number}</h1>
            {/* <button onClick={() => {add()}}>Somar</button>
            <button onClick={() => {remove()}}>Remover</button> */}
            {/* ou */}
            <button onClick={() => setNumber(number + 1)}>Somar</button>
            <button onClick={() => setNumber(number - 1)}>Remover</button>
        </>
    )
}