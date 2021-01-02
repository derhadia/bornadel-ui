import React, {createContext, useEffect, useState} from 'react'
import {fetchPost} from "../config/Utils";
import Apis from "../constants/Api";

const NewsContext = createContext({
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

export { NewsContext }


export default function NewContextProvider({ children }) {
    const [state, setState] = useState({
        toDate: "",
        toDateFormatted: ""
    });

    const [item, setItem] = useState({
        fromDate: "",
        fromDateFormatted: "",
    })
    const [teacher1, setTeacher1] = useState([]);
    const [teacher2, setTeacher2] = useState([]);
    const [filteTeacher, setFilterTeacher] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [sortType, setSortType] = useState(1);
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState("");
    const [check, setCheck] = useState({})

    useEffect(() => {
        let body2 = {
            "teacher_ID": 0,
            "teacher_Academy_Ref": 0,
            "teacher_AspNetUsers_Ref": 0
        };
        fetchPost(Apis.Get_GetAllTeacher, body2).then(({ responseJSON, status }) => {
            setTeacher1(responseJSON.data)
        })
    },[setTeacher1]);


    //=================merge teacher name & last name==================

    useEffect(() => {
        setTeacher2(teacher1 && teacher1.map((item) => {
            return [`${item.teacher_ID}`, `${item.teacher_Name + " " + item.teacher_LastName}`]
        }))
        setFilterTeacher(teacher1 && teacher1.map((item) => {
            return [item.teacher_ID, `${item.teacher_Name + " " + item.teacher_LastName}`]
        }))
    }, [teacher1])


    let selectTH = (active, id) => {
        if (!active) {
            setSelectedTeacher([...selectedTeacher, id])
        } else {
            setSelectedTeacher(selectedTeacher.filter((sr) => {
                return sr !== id;
            }))
        }
    };

    const handleChangeDate = (event) => {
        const newState = {};
        const t = event.target;
        newState[t.name] = t.value;
        newState[t.name+'Formatted'] = t.formatted ? t.formatted : '';
        setState(newState);
    };

    const handleChangeFrom = (event) => {
        const newState = {};
        const t = event.target;
        newState[t.name] = t.value;
        newState[t.name+'Formatted'] = t.formatted ? t.formatted : '';
        setItem(newState);
    };



    return (
        <NewsContext.Provider value={{
            teacher2, filteTeacher, setFilterTeacher,setIds, ids,
            setTeacher1, selectTH, sortType, setSortType, setData, data,
            selectedTeacher, items, setItems, handleChangeDate, state,
            handleChangeFrom, item, setCheck, check
        }} >
            {children}
        </NewsContext.Provider>
    )
}




