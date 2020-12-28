import React, { useContext, useEffect, useState } from 'react'
import CoursesComponent from '../../components/CoursesComponent/CoursesComponent'
import useStyles from '../../styles'
import { fetchPost } from '../../config/Utils'
import { Grid, Typography } from '@material-ui/core'
import LevelFilter from '../../components/Filters/LevelFilter'
import GroupFilter from '../../components/Filters/GroupFilter'
import TeacherFilter from '../../components/Filters/TeacherFilter'
import StartHoursFilter from '../../components/Filters/StartHoursFilter'
import PriceFilter from '../../components/Filters/PriceFilter'
import AcademyFilter from '../../components/Filters/AcademyFilter'
import ReadyClassesSwitch from '../../components/Filters/SwitchReadyClasses'
import DegreeSwith from '../../components/Filters/SwitchDegree'
import LeftHeaderFilter from '../../components/Filters/LeftHeaderFilter/LeftHeaderFilter'
import Button from '@material-ui/core/Button';
import MyPagination from '../../components/Pagination/pagination'
import { CoursesContext } from '../../contexts/CoursesContext'
import { useParams } from "react-router-dom";
import Apis from '../../constants/Api'
import animateScrollTo from 'animated-scroll-to';


export default function Courses() {
    const classes = useStyles()
    const [widthAllcourses, setWidthAllcourses] = useState(0)
    const [applyFilterPosirion, setApplyFilterPosirion] = useState(0)
    const [apllyFilterWidth, setApllyFilterWidth] = useState(0)
    const [fixed, setFixed] = useState(false)
    const [nothingData, setNothingData] = useState(false)
    let { coursesData, setCoursesData, page, itemPerPage, minPrice, maxPrice, minTime,
        maxTime, selectedTeacher, selectedAcademy, checkedDegreeSwith, sortType
        , checkedReadyClasses, level, nothingMessage, setnothingMessage,
        setAcademy, setLevelData, setTeacher1, setFilterAcademy ,setDataPriceSort} = useContext(CoursesContext)

    let { id, title, type } = useParams()

    useEffect(() => {
        let CoursesContainer = document.querySelector('#CoursesContainer')
        setWidthAllcourses(CoursesContainer.offsetWidth)
        let FilterConteiner = document.querySelector('#CoursesContainerRight')
        let filterButtun = document.querySelector('#filterButtun')
        let CoursesContainerLeft = document.querySelector('#CoursesContainerLeft')
        setApllyFilterWidth(FilterConteiner.offsetWidth-20)
        setApplyFilterPosirion((FilterConteiner.offsetWidth-20)/2)
        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset + window.innerHeight - 110 === 1590 || window.pageYOffset + window.innerHeight - 110 > 1590) {
                setFixed(true)
                return
            }
            if (window.pageYOffset + window.innerHeight - 110 < 1600) {
                setFixed(false)
                return
            }
        })
    }, [])


    useEffect(() => {
        let body = {
            "record_ID": id,
            "record_Name": title && title.length > 0 ? title : "",
            "record_Type": type && type.length > 0 ? type : 1,
            "sort_Type": sortType,
            "educationSubject_ID": 0,
            "teacher_ID_List": selectedTeacher.toString().replaceAll(",", ";"),
            "academy_ID_List": selectedAcademy.toString().replaceAll(",", ";"),
            "classRoomLevel_ID_List": level.toString().replaceAll(",", ";"),
            "startTime_From": minTime,
            "startTime_To": maxTime,
            "price_From": minPrice,
            "price_To": maxPrice,
            "haveDocument": checkedDegreeSwith,
            "isActive": checkedReadyClasses
        }
        fetchPost(Apis.Get_GetAllSearchClassRoomList, body).then(({ responseJSON, status }) => {
            if (status === 200) {
                responseJSON.data.length === 0 ? setNothingData(true) : setNothingData(false)
                setCoursesData(responseJSON.data)

            }
        })
    }, [sortType])
    useEffect(() => {
        let body = {
            "record_ID": id,
            "record_Name": title && title.length > 0 ? title : "",
            "record_Type": type && type.length > 0 ? type : 1,
            "sort_Type": 1,
            "educationSubject_ID": 0,
            "teacher_ID_List": "",
            "academy_ID_List": "",
            "classRoomLevel_ID_List": "",
            "startTime_From": "",
            "startTime_To": "",
            "price_From": 0,
            "price_To": 0,
            "haveDocument": false,
            "isActive": false
        }
        fetchPost(Apis.Get_GetAllSearchClassRoomList, body).then(({ responseJSON, status }) => {
            if (status == 200) {
                responseJSON.data.length === 0 ? setNothingData(true) : setNothingData(false)
                setDataPriceSort(responseJSON.data.length > 0 ? responseJSON.data.map((item) => { return item.last_Price ? item.last_Price : item.classRoom_Price }) : "")

                setCoursesData(responseJSON.data)
            }
        })
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
    }, [id])


    let ApplyFilter = () => {
        if (maxTime < minTime) {
            let Options = {
                speed: 100,
                maxDuration: 2000,
                minDuration: 2000,
            }
            animateScrollTo(875, Options);
            return
        }
        let Options = {
            speed: 100,
            maxDuration: 3000,
            minDuration: 2000,

        }
        animateScrollTo(0, Options);
        let body = {
            "record_ID": id,
            "record_Name": title && title.length > 0 ? title : "",
            "record_Type": type && type.length > 0 ? type : 1,
            "sort_Type": sortType,
            "educationSubject_ID": 0,
            "teacher_ID_List": selectedTeacher.toString().replaceAll(",", ";"),
            "academy_ID_List": selectedAcademy.toString().replaceAll(",", ";"),
            "classRoomLevel_ID_List": level.toString().replaceAll(",", ";"),
            "startTime_From": minTime,
            "startTime_To": maxTime,
            "price_From": minPrice,
            "price_To": maxPrice,
            "haveDocument": checkedDegreeSwith,
            "isActive": checkedReadyClasses
        }
        fetchPost(Apis.Get_GetAllSearchClassRoomList, body).then(({ responseJSON, status }) => {
            if (status === 200) {
                setCoursesData(responseJSON.data)
                responseJSON.data.length === 0 ? setNothingData(true) : setNothingData(false)

            }
        })
    }
    return (
        <Grid container className={classes.CoursesContainer}>
            <Grid item container direction="column" className={classes.CoursesContainerRight}>
                <Grid item container direction="column" id="CoursesContainerRight">
                    <GroupFilter />
                    <LevelFilter />
                    <TeacherFilter />
                    <StartHoursFilter />
                    <PriceFilter />
                    <AcademyFilter />
                    <ReadyClassesSwitch />
                    <DegreeSwith />
                    <Grid item
                        container
                        justify="center"
                        className={classes.filterButtunContainer}
                        style={{width:apllyFilterWidth>0&&apllyFilterWidth}}
                        style={{ position: fixed ? "static" : "sticky", top: "auto", bottom: 15, }}
                    >
                        <Button variant="contained"
                            color="primary"
                            id="filterButtun"
                            className={classes.filterButtun}
                            // style={{right:applyFilterPosirion>0&&applyFilterPosirion,
                            // width:window.innerWidth<1280?150:null}}
                            onClick={() => ApplyFilter()}

                        >
                            اعمال فیلتر ها
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item direction="column" id="CoursesContainerLeft" className={classes.CoursesContainerLeft} >
                <Grid item container id="CoursesContainer" className={classes.CoursesContainerLeftHeader} >
                    <LeftHeaderFilter />
                </Grid>
                <Grid item container className={classes.coursesComponentDetail}>
                    {
                        coursesData && coursesData.length > 0 ?
                            coursesData.slice((page - 1) * itemPerPage, (page - 1) * itemPerPage + itemPerPage).map((data, index) => {
                                return (
                                    <Grid item
                                        alignItems="center" className={classes.coursesComponentDetailItem}
                                        style={{
                                            marginLeft:
                                                window.innerWidth > 1530 && (index + 1) % 6 === 0 ? 0 :
                                                    window.innerWidth > 1530 && (index + 1) % 6 !== 0 ? (((widthAllcourses) - (6 * 180)) / 5) / 2 :
                                                        widthAllcourses === 1025 && (index + 1) % 5 === 0 ? 0 :
                                                            widthAllcourses === 1025 && (index + 1) % 5 !== 0 ? 15 :
                                                                window.innerWidth > 1360 && (index + 1) % 5 === 0 ? 0 :
                                                                    window.innerWidth > 1360 && (index + 1) % 5 !== 0 ? (((widthAllcourses) - (900)) / 4) / 2 :
                                                                        window.innerWidth > 1300 && window.innerWidth < 1361 && (index + 1) % 5 === 0 ? 0 :
                                                                            window.innerWidth > 1300 && window.innerWidth < 1361 && (index + 1) % 5 !== 0 ? (((widthAllcourses) - (5 * 180)) / 4) / 2 :
                                                                                window.innerWidth > 1264 && window.innerWidth < 1301 && (index + 1) % 5 === 0 ? 0 :
                                                                                    window.innerWidth > 1264 && window.innerWidth < 1301 && (index + 1) % 5 !== 0 ? (((widthAllcourses) - (5 * 180)) / 4) / 2 :
                                                                                        window.innerWidth > 1020 && window.innerWidth < 1265 && (index + 1) % 4 === 0 ? 0 :
                                                                                            window.innerWidth > 1020 && window.innerWidth < 1265 && (index + 1) % 4 !== 0 ? (((widthAllcourses) - (4 * 166)) / 3) / 2 :
                                                                                                window.innerWidth > 820 && window.innerWidth < 1021 && (index + 1) % 3 === 0 ? 0 :
                                                                                                    window.innerWidth > 820 && window.innerWidth < 1021 && (index + 1) % 3 !== 0 ? (((widthAllcourses) - (3 * 166)) / 2) / 2 :
                                                                                                        window.innerWidth > 600 && window.innerWidth < 821 && (index + 1) % 2 === 0 ? 0 :
                                                                                                            (((widthAllcourses) - (2 * 166)) / 1) / 2


                                            ,

                                            marginRight:
                                                window.innerWidth > 1530 && index % 6 === 0 ? 0 :
                                                    window.innerWidth > 1530 && index % 6 !== 0 ? (((widthAllcourses) - (6 * 180)) / 5) / 2 :
                                                        widthAllcourses === 1025 && index % 5 === 0 ? 0 :
                                                            widthAllcourses === 1025 && index % 5 !== 0 ? 16 :
                                                                window.innerWidth > 1360 && index % 5 === 0 ? 0 :
                                                                    window.innerWidth > 1360 && index % 5 !== 0 ? Math.floor((((widthAllcourses) - (900)) / 4) / 2) :
                                                                        window.innerWidth > 1300 && window.innerWidth < 1361 && index % 5 === 0 ? 0 :
                                                                            window.innerWidth > 1300 && window.innerWidth < 1361 && index % 5 !== 0 ? Math.floor((((widthAllcourses) - (5 * 180)) / 4) / 2) :
                                                                                window.innerWidth > 1264 && window.innerWidth < 1301 && index % 5 === 0 ? 0 :
                                                                                    window.innerWidth > 1254 && window.innerWidth < 1301 && index % 5 !== 0 ? Math.floor((((widthAllcourses) - (5 * 180)) / 4) / 2) :
                                                                                        window.innerWidth > 1020 && window.innerWidth < 1265 && index % 4 === 0 ? 0 :
                                                                                            window.innerWidth > 1020 && window.innerWidth < 1265 && index % 4 !== 0 ? ((((widthAllcourses) - (4 * 166)) / 3) / 2) :
                                                                                                window.innerWidth > 820 && window.innerWidth < 1021 && index % 3 === 0 ? 0 :
                                                                                                    window.innerWidth > 820 && window.innerWidth < 1021 && index % 3 !== 0 ? (((widthAllcourses) - (3 * 166)) / 2) / 2 :
                                                                                                        window.innerWidth > 600 && window.innerWidth < 821 && index % 2 === 0 ? 0 :
                                                                                                            (((widthAllcourses) - (2 * 166)) / 1) / 2



                                        }}
                                    >
                                        <CoursesComponent
                                            data={data}
                                            id={data.classRoom_ID}
                                            teacherName={data.teacher_Name + ' ' + data.teacher_LastName}
                                            title={data.classRoom_Subject} date={data.classRoom_DateTime}
                                            photoIconLink={Apis.SHOWIMAGE + data.educationSubject_IconeLink}
                                            price={data.classRoom_Price}
                                            LastPrice={data.last_Price}
                                            Discoun={data.classRoom_Discount}
                                            minWidth={180}
                                            maxWidth={180}
                                            dir="rtl"
                                            deadLine={data.active}
                                            teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                            educationSubject={data.educationSubject_Name}
                                        />
                                    </Grid>
                                )
                            })
                            :
                            nothingData ?
                                <Grid item container justify="center" alignItems="center" className={classes.nothingMessage} >دوره ای وجود ندارد</Grid>
                                : null
                    }

                    {coursesData && coursesData.length > 0 ?
                        <Grid item container justify="center" alignItems="center" className={classes.CoursesContainerLeftHeader} >
                            <MyPagination />
                        </Grid>
                        : null
                    }

                </Grid>
            </Grid>
        </Grid >
    )
}
