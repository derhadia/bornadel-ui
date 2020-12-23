import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'

export default function Teacher() {
    const classes = useStyles();
    let { courseDetailData, fiveLastCourse } = useContext(CourseDetailContext)

    return (
        <>
            <Grid container direction="column" justify="flex-start" item xs={3} className={classes.MarginTop}>
                <Typography className={classes.CourseDetailClassTitle}>مدرس</Typography>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>مدرس : </span>
                    <span className={classes.CourseDetailteacherName}>{courseDetailData.teacher_FullName}</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>امتیاز مدرس : </span>
                    <span className={classes.CourseDetailteacherNameNUM1}>{courseDetailData.teacher_Score}</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <Typography className={classes.CourseDetailteacherFiveCourse}>سوابق کاری و رزومه مدرس</Typography>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameNUM2}> 5 </span>
                    <span className={classes.CourseDetailteacherNameTitle}>دوره آخر مدرس :</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer2}>
                    {fiveLastCourse && fiveLastCourse.length > 0 ? fiveLastCourse.map((data, index) => {
                        return (
                            <>
                                <Typography className={classes.CourseDetailteacherFiveCourse}>{data.classRoom_Subject}</Typography>
                                <span className={classes.CourseDetailClassNameTitle}>{index === fiveLastCourse.length - 1 ? "" : "/"}</span>
                            </>
                        )
                    }) : null}
                </Grid>
            </Grid>
            <Grid item className={classes.verticalLine} xs={1}></Grid>
        </>
    )
}
