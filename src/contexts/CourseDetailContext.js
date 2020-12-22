import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchPost } from '../config/Utils'
import Apis from '../constants/Api'

const CourseDetailContext = createContext({
    courseDetailData: [],
    setCourseDetailData: () => { },

})

export { CourseDetailContext }


export default function CourseDetailContextProvider({ children }) {

    const [courseDetailData, setCourseDetailData] = useState([])
    const [weekDay, setWeekDay] = useState([])
    const [fiveLastCourse, setFiveLastCourse] = useState([])
    const [similarItem,setSimilarItem]=useState([])
    return (
        <CourseDetailContext.Provider value={{
            courseDetailData, setCourseDetailData, weekDay, setWeekDay, fiveLastCourse, setFiveLastCourse,
            similarItem,setSimilarItem,
        }} >
            {children}
        </CourseDetailContext.Provider>
    )
}




