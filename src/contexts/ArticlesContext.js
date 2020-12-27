import React, {createContext, useEffect, useState} from 'react'
import {fetchPost} from "../config/Utils";
import Apis from "../constants/Api";

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
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [teacher1, setTeacher1] = useState([]);
    const [teacher2, setTeacher2] = useState([]);
    const [filteTeacher, setFilterTeacher] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [sortType, setSortType] = useState(1);
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);
    const [ids, setIds] = useState([]);

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




    return (
        <ArticlesContext.Provider value={{
            fromDate, setFromDate, toDate, setToDate, teacher2,
            filteTeacher, setFilterTeacher,setIds, ids,
            setTeacher1, selectTH, sortType, setSortType, setData, data,
            selectedTeacher, items, setItems
        }} >
            {children}
        </ArticlesContext.Provider>
    )
}




