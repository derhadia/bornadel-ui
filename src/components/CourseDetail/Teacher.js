import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'

export default function Teacher() {
    const classes = useStyles();
    let { courseDetailData, fiveLastCourse } = useContext(CourseDetailContext)

    return (
        <>
            <Grid container direction="column" justify="flex-start" item className={classes.MarginTop}>
                <Typography className={classes.CourseDetailClassTitle}>مدرس</Typography>
                <Grid container >
                    <Grid className={classes.CourseDetailteacherNameContainer}>
                        <span className={classes.CourseDetailteacherNameTitle}>مدرس : </span>
                        <span className={classes.CourseDetailteacherName}>{courseDetailData.teacher_FullName}</span>
                    </Grid>
                    <Grid className={classes.CourseDetailteacherNameContainer5}>
                        <span className={classes.CourseDetailteacherNameTitle7}>امتیاز مدرس : </span>
                        <span className={classes.CourseDetailteacherNameNUM1}>{courseDetailData.teacher_Score}</span>
                    </Grid>
                    <Grid className={classes.CourseDetailteacherNameContainer}>
                        <Typography className={classes.CourseDetailteacherFiveCourse}>سوابق کاری و رزومه مدرس</Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.classPadding}>
                    <Grid container className={classes.CourseDetailteacherNameContainer8}>
                        <span className={classes.CourseDetailteacherNameNUM2}> 5 </span>
                        <span className={classes.CourseDetailteacherNameTitle7}>دوره آخر مدرس :</span>
                        <Grid item className={classes.CourseDetailteacherNameContainer2}>
                            {fiveLastCourse && fiveLastCourse.length > 0 ? fiveLastCourse.map((data, index) => {
                                return (
                                    <Grid key={index}>
                                        <Typography className={classes.CourseDetailteacherFiveCourse}>{data.classRoom_Subject}</Typography>
                                        <span className={classes.CourseDetailClassNameTitle}>{index === fiveLastCourse.length - 1 ? "" : "/"}</span>
                                    </Grid >
                                )
                            }) : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.verticalLine} xs={1}></Grid>
        </>
    )
}
