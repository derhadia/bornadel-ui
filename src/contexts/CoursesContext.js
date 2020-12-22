import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchPost } from '../config/Utils'
import Apis from '../constants/Api'

const CoursesContext = createContext({
    priceStart: [],
    setPriceStart: () => { },
    priceEnd: [],
    setPriceEnd: () => { },
    coursesData: [],
    setCoursesData: () => { },
    page: 1,
    setPage: () => { },
    itemPerPage: 36,
    teacher: [],
    setTeacher: () => { },
    minTime: '',
    setMinTime: () => { },
    maxTime: '',
    setMaxTime: () => { }
})
export { CoursesContext }

let itemPerPage = window.innerWidth > 1279 ? 25 : 20

export default function CoursesContextProvider({ children }) {

    const [page, setPage] = useState(1)
    const [coursesData, setCoursesData] = useState([])
    const [dataPriceSort, setDataPriceSort] = useState([])
    const [teacher1, setTeacher1] = useState([])
    const [teacher2, setTeacher2] = useState([])
    const [filteTeacher, setFilterTeacher] = useState([])
    const [academy, setAcademy] = useState([])
    const [filteAcademy, setFilterAcademy] = useState([])
    const [selectedTeacher, setSelectedTeacher] = useState([])
    const [selectedAcademy, setSelectedAcademy] = useState([])
    const [minTime, setMinTime] = useState('')
    const [maxTime, setMaxTime] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [checkedReadyClasses, setCheckedReadyClasses] = useState(false)
    const [checkedDegreeSwith, setCheckedDegreeSwith] = useState(false)
    const [level, setLevel] = useState([])
    const [levelData, setLevelData] = useState([])
    const [sortType, setSortType] = useState(1)
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)


    useEffect(() => {
        let body1 = {
            "classRoomLevel_ID": 0
        }
        fetchPost(Apis.Get_GetAllClassroomLevel, body1).then(({ responseJSON, status }) => {
            setLevelData(responseJSON.data)
        })
        let body2 = {
            "teacher_ID": 0,
            "teacher_Academy_Ref": 0,
            "teacher_AspNetUsers_Ref": 0
        }
        fetchPost(Apis.Get_GetAllTeacher, body2).then(({ responseJSON, status }) => {
            setTeacher1(responseJSON.data)
            // setFilterTeacher(responseJSON.data)
        })
        let body3 = {
            "academy_ID": 0,
            "academy_AspNetUsers_Ref": 0,
            "academy_Name": ""
        }
        let approveEnum = 1
        fetchPost(Apis.Get_GetAllAcademy + "?approveEnum=" + approveEnum, body3).then(({ responseJSON, status }) => {
            setAcademy(responseJSON.data)
            setFilterAcademy(responseJSON.data)
        })
    }, [])
    useEffect(() => {
        setDataPriceSort(coursesData.map((item) => { return item.last_Price ? item.last_Price : item.classRoom_Price }))
    }, [coursesData])

    //=================merg teacher name & last name==================

    useEffect(() => {
        setTeacher2(teacher1.map((item) => { return [`${item.teacher_ID}`, `${item.teacher_Name + " " + item.teacher_LastName}`] }))
        setFilterTeacher(teacher1.map((item) => { return [item.teacher_ID, `${item.teacher_Name + " " + item.teacher_LastName}`] }))
    }, [teacher1])


    //==================grt min price and max price===================

    useEffect(() => {
        let a = dataPriceSort && dataPriceSort.length > 0 ? dataPriceSort.sort((a, b) => {
            if (a > b) {
                return 1
            } else {
                return -1
            }
        }) : []
        let b = [...a]
        if (b.length > 0) {
            let sPrice = b[0]
            let EPrice = b[b.length - 1]
            setMinPrice(sPrice)
            setMinValue(sPrice)
            setMaxPrice(EPrice)
            setMaxValue(EPrice)
        }
    }, [dataPriceSort])

    let selectAC = (active, id) => {
        if (!active) {
            setSelectedAcademy([...selectedAcademy, id])
        } else {
            setSelectedAcademy(selectedAcademy.filter((sr) => {
                if (sr === id) {
                    return false
                }
                return true
            }))
        }
    }
    let selectTH = (active, id) => {
        if (!active) {
            setSelectedTeacher([...selectedTeacher, id])
        } else {
            setSelectedTeacher(selectedTeacher.filter((sr) => {
                if (sr === id) {
                    return false
                }
                return true
            }))
        }
    }
    let selectLE = (active, id) => {
        if (!active) {
            setLevel([...level, id])
        } else {
            setLevel(level.filter((sr) => {
                if (sr === id) {
                    return false
                }
                return true
            }))
        }
    }

    return (
        <CoursesContext.Provider value={{
            coursesData, setCoursesData, teacher2, minPrice, setMinPrice, maxPrice, setMaxPrice,
            page, setPage, itemPerPage, filteTeacher, setFilterTeacher
            , selectedTeacher, setSelectedTeacher, sortType, setSortType, level, setLevel,
            minTime, setMinTime, maxTime, setMaxTime, academy, setAcademy, filteAcademy, setFilterAcademy,
            selectedAcademy, setSelectedAcademy, checkedReadyClasses, setCheckedReadyClasses, selectLE,
            checkedDegreeSwith, setCheckedDegreeSwith, minValue, maxValue, levelData, selectAC, selectTH
        }} >
            {children}
        </CoursesContext.Provider>
    )
}




