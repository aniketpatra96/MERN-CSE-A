import { createContext, useState, useContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [ count, setCount ] = useState(100)
    return(
        <CounterContext.Provider value={{count, setCount, name: "Sam"}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export const useCount = () =>{
    const counterContext = useContext(CounterContext)
    return counterContext
}