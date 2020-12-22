import React, { createContext, useState } from 'react'

const ArticlesContext = createContext({
    fromDay: "",
    setFromDay: () => { },
    fromMonth: "",
    setFromMonth: () => { },
    fromYear: "",
    setFromYear: () => { },
    toDay: "",
    setToDay: () => {},
    toMonth: "",
    setToMonth: () => {},
    toYear: "",
    setToYear: () => {}
})

export { ArticlesContext }


export default function ArticleContextProvider({ children }) {
    const [fromDay, setFromDay] = useState("");
    const [fromMonth, setFromMonth] = useState("");
    const [fromYear, setFromYear] = useState("");
    const [toDay, setToDay] = useState("");
    const [toMonth, setToMonth] = useState("");
    const [toYear, setToYear] = useState("");

    const handleFromDay = event => {
        let reg = /^[0-9\b]+$/;
        let value = event.target.value;
        if (value === "" || reg.test(value)){
            setFromDay(value)
        }
    };
    const handleFromMonth = event => {
        let reg = /^[0-9\b]+$/;
        let value = event.target.value;
        if (value === "" || reg.test(value)){
            setFromMonth(value)
        }
    };
    const handleFromYear = event => {
        let reg = /^[0-9\b]+$/;
        let value = event.target.value;
        if (value === "" || reg.test(value)){
            setFromYear(value)
        }
    };
    const handleToDay = event => {
        let reg = /^[0-9\b]+$/;
        let value = event.target.value;
        if (value === "" || reg.test(value)){
            setToDay(value)
        }
    };
    const handleToMonth = event => {
        let reg = /^[0-9\b]+$/;
        let value = event.target.value;
        if (value === "" || reg.test(value)){
            setToMonth(value)
        }
    };
    const handleToYear = event => {
        let reg = /^[0-9\b]+$/;
        let value = event.target.value;
        if (value === "" || reg.test(value)){
            setToYear(value)
        }
    };


    return (
        <ArticlesContext.Provider value={{
            handleFromDay, handleFromMonth, handleFromYear, handleToDay,
            handleToMonth, handleToYear, fromDay, fromMonth, fromYear,
            toDay, toMonth, toYear
        }} >
            {children}
        </ArticlesContext.Provider>
    )
}




