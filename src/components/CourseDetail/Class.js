import React, { useContext, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'


export default function Class() {
    const classes = useStyles();
    let { courseDetailData, weekDay } = useContext(CourseDetailContext)

    return (
        <>
            <Grid container direction="column" justify="flex-start" item className={classes.MarginTop}>
                <Typography className={classes.CourseDetailClassTitle}>کلاس</Typography>
                <Grid container className={classes.CourseDetailClassNameContainer1}>
                    <span className={classes.CourseDetailClassNameTitle}>ساعت و روز برگزاری : </span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_StartTime} </span>
                    <span className={classes.CourseDetailClassName4}> الی </span>
                    <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_EndTime} </span>
                    <Grid item className={classes.CourseDetailClassNameContainer}>
                        {weekDay && weekDay.length > 0 ? weekDay.map((data,index) => {
                            return (
                                <Grid key={index}>
                                    <span  className={classes.CourseDetailClassNameTitle1}>{data}</span>
                                    <span className={classes.CourseDetailClassNameTitle1}>/ </span>
                                </ Grid>
                            )
                        })

                            : null}
                    </Grid>
                </Grid>
                <Grid container alignItems="center" className={classes.classPadding}>
                    <Grid container className={classes.classBorderBottom}>
                        <Grid item className={classes.CourseDetailClassNameContainer3}>
                            <span className={classes.CourseDetailClassNameTitle}> تاریخ شروع :</span>
                            <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_DateTime} </span>
                        </Grid>
                        <Grid item className={classes.CourseDetailteacherNameContainer2}>
                            <span className={classes.CourseDetailClassNameTitle6}> مجموع ساعات کلاس :</span>
                            <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_SumTime}</span>
                            <span className={classes.CourseDetailClassName4}>ساعت</span>
                        </Grid>
                        <Grid item className={classes.CourseDetailClassNameContainer2}>
                            <span className={classes.CourseDetailClassNameTitle}> تعداد جلسات :</span>
                            <span className={classes.CourseDetailClassNameNUM}> {courseDetailData.classRoom_NumberSessions} </span>
                            <span className={classes.CourseDetailClassName4}>جلسه</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.verticalLine} xs={1}></Grid>
        </>
    )
}
