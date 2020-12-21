import React, { useContext, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'


export default function Class() {
    const classes = useStyles();
    let { courseDetailData, weekDay } = useContext(CourseDetailContext)

    return (
        <>
            <Grid container direction="column" justify="flex-start" item xs={3} className={classes.MarginTop}>
                <Typography className={classes.CourseDetailClassTitle}>کلاس</Typography>
                <Grid container className={classes.CourseDetailClassNameContainer1}>
                    <span className={classes.CourseDetailClassNameTitle}>ساعت و روز برگزاری : </span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_StartTime} </span>
                    <span className={classes.CourseDetailClassName}> الی </span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_EndTime} </span>
                </Grid>
                <Grid container item className={classes.CourseDetailClassNameContainer}>
                    {weekDay && weekDay.length > 0 ? weekDay.map((data) => {
                        return (
                            <>
                                <span className={classes.CourseDetailClassNameTitle1}>{data}</span>
                                <span className={classes.CourseDetailClassNameTitle1}>/ </span>
                            </>
                        )
                    })

                        : null}
                </Grid>
                <Grid container item className={classes.CourseDetailteacherNameContainer2}>
                    <span className={classes.CourseDetailClassNameTitle}> مجموع ساعات کلاس :</span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_SumTime}</span>
                    <span className={classes.CourseDetailClassName}>ساعت</span>

                </Grid>
                <Grid container item className={classes.CourseDetailClassNameContainer}>
                    <span className={classes.CourseDetailClassNameTitle}> تعداد جلسات :</span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_NumberSessions} </span>
                    <span className={classes.CourseDetailClassName}>جلسه</span>

                </Grid>
                <Grid container item className={classes.CourseDetailClassNameContainer}>
                    <span className={classes.CourseDetailClassNameTitle}> تاریخ شروع :</span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData .classRoom_DateTime} </span>

                </Grid>
            </Grid>
            <Grid item className={classes.verticalLine} xs={1}></Grid>
        </>
    )
}
