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
    const [teacherTabData,setTeacherTabData]=useState([])
    const [teachrDipTabData,setTeachrDipTabData]=useState([])
    const [teachrDocTabData,setTeachrDocTabData]=useState([])
    const [academyTabData,setAcademyTabData]=useState([])
    const [downloadLink,setDownloadLink]=useState([])
    const [questions,setQuestions]=useState([])
    const [comments,setComments]=useState([])


    return (
        <CourseDetailContext.Provider value={{
            courseDetailData, setCourseDetailData, weekDay, setWeekDay, fiveLastCourse, setFiveLastCourse,
            similarItem,setSimilarItem,teacherTabData,setTeacherTabData,teachrDipTabData,setTeachrDipTabData,
            teachrDocTabData,setTeachrDocTabData,academyTabData,setAcademyTabData,downloadLink,setDownloadLink,
            questions,setQuestions,comments,setComments

        }} >
            {children}
        </CourseDetailContext.Provider>
    )
}




