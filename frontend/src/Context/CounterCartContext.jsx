import { createContext, useContext, useState } from "react";
import SlideProvider from "./SlideContext";

const CounterContext = createContext(null)
const setCounterContext = createContext(null)

// eslint-disable-next-line react/prop-types
export default function CounterProvider({children}) {
    const [counter,setCounter]=useState(0)
    return(
        <SlideProvider>
        <setCounterContext.Provider value={setCounter}>
        <CounterContext.Provider value={counter}>
            {children}
        </CounterContext.Provider>
        </setCounterContext.Provider>
        </SlideProvider>
    )
}


export const useCounter =()=>{
    return useContext(CounterContext)
}

export const useSetCounter =()=>{
    return useContext(setCounterContext)
}