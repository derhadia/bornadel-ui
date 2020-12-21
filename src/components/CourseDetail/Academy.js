import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'

export default function Academy() {
    const classes = useStyles();
    let { courseDetailData } = useContext(CourseDetailContext)

    return (
        <>
            <Grid container container direction="column" justify="flex-start" item xs={2} className={classes.MarginTop}>
                <Typography className={classes.CourseDetailAcademyTitle}>آموزشگاه</Typography>
                <Grid container className={classes.CourseDetailAcademyNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>آموزشگاه : </span>
                    <span className={classes.CourseDetailteacherName}>{courseDetailData.academy_Name}</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>امتیاز آموزشگاه : </span>
                    <span className={classes.CourseDetailteacherNameNUM1}>{courseDetailData.academy_Score}</span>
                </Grid>
                <Grid container className={classes.CourseDetailteacherNameContainer}>
                    <span className={classes.CourseDetailteacherNameTitle}>مدرک : </span>
                    <span className={classes.CourseDetailteacherName}> {courseDetailData.academy_HaveDocument === 0 ? "ندارد" : "دارد"} </span>
                </Grid>
                <Grid container className={classes.CourseDetailAcademyImageContainer}>
                    <span className={classes.CourseDetailَAcademyImage}></span>
                </Grid>
            </Grid>
        </>
    )
}
