import React, { useContext, useEffect } from 'react'
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


export default function CourseDetail() {
    const classes = useStyles();
    let { id } = useParams()
    let { setCourseDetailData, setWeekDay, setFiveLastCourse, setSimilarItem } = useContext(CourseDetailContext)

    useEffect(() => {
        fetchPost(Apis.Get_GetClassRoomDetail + "?ClassRoomId=" + id).then(({ responseJSON, status }) => {
            if (status === 200) {
                setCourseDetailData(responseJSON.data[0])
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
    return (
        <Grid container justify="center" className={classes.CourseDetailContainer}>
            <Grid item container direction="column" className={classes.CourseDetailBox}>
                <Grid item container className={classes.CourseDetailTextcontainer}>
                    <Typography className={classes.CourseDetailText}>طراحی بیت مپ با فتوشاپ</Typography>
                </Grid>
                <Grid item container direction="row" alignItems="flex-start" className={classes.CourseDetailElements}>
                    <Class />
                    <Teacher />
                    <Academy />
                    <SingIN />
                </Grid >
            </Grid>
            <TeacherAcademyDetail />
            <QuestionANDComent />
            <SimilarItem />
            <ImageUnderSimilar />
        </Grid>
    )
}
