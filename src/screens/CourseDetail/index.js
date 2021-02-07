import React, {useContext, useEffect, useState} from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { useParams } from "react-router-dom";
import { fetchPost } from '../../config/Utils'
import Apis from '../../constants/Api'
import Class from '../../components/CourseDetail/Class'
import Teacher from '../../components/CourseDetail/Teacher'
import Academy from '../../components/CourseDetail/Academy'
import SingIN from '../../components/CourseDetail/SingIN'
import TeacherAcademyDetail from '../../components/CourseDetail/TeacherAcademyDetail'
import QuestionANDComent from '../../components/CourseDetail/QuestionANDComent'
import SimilarItem from '../../components/CourseDetail/SimilarItem'
import ImageUnderSimilar from '../../components/CourseDetail/ImageUnderSimilar'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import SwiperCoverflow from "../PurchasingProcess/SwiperCoverflow";


export default function CourseDetail() {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);
    let { id } = useParams()
    let { setComments,setQuestions,setDownloadLink, setAcademyTabData, setTeachrDocTabData, setTeachrDipTabData, setTeacherTabData, courseDetailData, setCourseDetailData, setWeekDay, setFiveLastCourse, setSimilarItem, similarItem } = useContext(CourseDetailContext)

    useEffect(() => {
        fetchPost(Apis.Get_GetSimilarClassRooms + "?ClassRoomId=7").then(({ responseJSON, status }) => {
            if (status === 200) {
                setSimilarItem([responseJSON.data])
            }
        })
    },[]);

    useEffect(() => {
        fetchPost(Apis.Get_GetClassRoomDetail + "?ClassRoomId=" + id).then(({ responseJSON, status }) => {
            if (status === 200) {
                setCourseDetailData(responseJSON.data[0])
                console.log(responseJSON.data[0]);

                let TeacherBody = {

                    "teacher_ID": responseJSON.data[0].teacher_ID,
                    "teacher_Academy_Ref": 0,
                    "teacher_AspNetUsers_Ref": 0
                }
                fetchPost(Apis.Get_TeacherGetAll, TeacherBody).then(({ responseJSON, status }) => {
                    if (status === 200) {
                        setTeacherTabData(responseJSON.data)
                    }
                })
                let TeacherDipBody = {
                    "teacherDiploma_ID": 0,
                    "teacherDiploma_Teacher_Ref": responseJSON.data[0].teacher_ID
                }
                fetchPost(Apis.Get_TeacherDiplomaGetAll, TeacherDipBody).then(({ responseJSON, status }) => {
                    if (status === 200) {
                        setTeachrDipTabData(responseJSON.data)
                    }
                })
                let TeacherDocBody = {
                    "teacherDoc_ID": 0,
                    "teacherDoc_Teacher_Ref": responseJSON.data[0].teacher_ID
                }
                fetchPost(Apis.Get_TeacherDocGetAll, TeacherDocBody).then(({ responseJSON, status }) => {
                    if (status === 200) {
                        setTeachrDocTabData(responseJSON.data)
                    }
                })
                let acdemyBody = {
                    "academy_ID": responseJSON.data[0].academy_ID,
                    "academy_AspNetUsers_Ref": 0,
                    "academy_Name": ""
                }
                if (responseJSON.data[0].academy_ID !== null && responseJSON.data[0].academy_ID !== 0) {
                    fetchPost(Apis.Get_AcademyGetAll + "?approveEnum=Approve", acdemyBody).then(({ responseJSON, status }) => {
                        if (status === 200) {
                            setAcademyTabData(responseJSON.data)
                        }
                    })
                }
                let DownloadLink = {
                    "classRoomDoc_ID": 0,
                    "classRoomDoc_ClassRoom_Ref": responseJSON.data[0].ClassRoom_ID
                }
                fetchPost(Apis.Get_ClassRoomDoc + "?approveEnum=Approve", DownloadLink).then(({ responseJSON, status }) => {
                    if (status === 200) {
                        setDownloadLink(responseJSON.data)
                    }
                })
                let QuestionBody = {
                    "question_ID": 0,
                    "question_Student_Ref": 0,
                    "question_ClassRoom_Ref": responseJSON.data[0].ClassRoom_ID,
                    "question_Academy_Ref": 0,
                    "question_Teacher_Ref": 0,
                    "question_Article_Ref": 0
                }
                fetchPost(Apis.Get_QuestionGetAll + "?approveEnum=Approve&archiveEnum=All&questionEnum=Question&haveAnswerEnum=All", QuestionBody).then(({ responseJSON, status }) => {
                    if (status === 200) {
                        setQuestions(responseJSON.data)
                    }
                })
                let CommentBody = {
                    "question_ID": 0,
                    "question_Student_Ref": 0,
                    "question_ClassRoom_Ref": responseJSON.data[0].classRoom_ID,
                    "question_Academy_Ref": 0,
                    "question_Teacher_Ref": 0,
                    "question_Article_Ref": 0
                }

                fetchPost(Apis.Get_QuestionGetAll + "?approveEnum=Approve&archiveEnum=All&questionEnum=NotQuestion&haveAnswerEnum=All", CommentBody).then(({ responseJSON, status }) => {
                    if (status === 200) {
                        console.log(responseJSON.data);
                        setComments(responseJSON.data)
                    }
                })

                fetchPost(Apis.Get_Get5PreviouseTeacherClassRoom + "?ClassRoomId=" + id + "&Teacher_ID=" + responseJSON.data[0].teacher_ID).then(({ responseJSON, status }) => {
                    setFiveLastCourse(responseJSON.data);
                })
            }
        })
        fetchPost(Apis.Get_GetClassRoomDetailWeekDay + "?ClassRoomId=" + id).then(({ responseJSON, status }) => {
            if (status === 200) setWeekDay([responseJSON.data[0].weekDay]);
        })
        fetchPost(Apis.Get_GetSimilarClassRooms + "?ClassRoomId=" + id).then(({ responseJSON, status }) => {
            if (status === 200) {
                setSimilarItem([responseJSON.data])
            }
        })

    }, [id])

    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    const isMobile = width < 900;

    return (
        <Grid container justify="center" className={classes.CourseDetailContainer}>
            <Grid item container direction="column" className={classes.CourseDetailBox}>

                <Grid item container direction="row" alignItems="flex-start" className={classes.CourseDetailElements}>
                    <Grid item container className={classes.CourseDetailTextcontainer}>
                        <Typography className={classes.CourseDetailText}>{courseDetailData && courseDetailData.classRoom_Subject}</Typography>
                    </Grid>
                    <Grid container item xl={9} lg={9} md={9} sm={12} xs={12} direction="column" className={classes.deskCourseDetail}>
                        <Class />
                        <Teacher />
                        {(courseDetailData && courseDetailData.academy_ID === null )|| courseDetailData.academy_ID === 0 ? null
                            : <Academy />}
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12} className={classes.coursePartDetailMobile}>
                        <SingIN data={courseDetailData} />
                    </Grid>
                </Grid >
            </Grid>
            <TeacherAcademyDetail />
            <QuestionANDComent />
            {
                !isMobile ?
                    <SimilarItem /> :
                    <SwiperCoverflow  similarItem={similarItem}/>
            }

            <ImageUnderSimilar />
        </Grid>
    )
}
