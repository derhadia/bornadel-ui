import React, { useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'

export default function Academy() {
    const classes = useStyles();
    let { courseDetailData } = useContext(CourseDetailContext)

    return (
        <>
            <Grid container container direction="column" justify="flex-start" item className={classes.MarginTop}>
                <Typography className={classes.CourseDetailAcademyTitle}>آموزشگاه</Typography>
                <Grid container alignItems="center" className={classes.AcademyBoxContainer} >
                    <Grid item className={classes.CourseDetailAcademyImageContainer}>
                        <span className={classes.CourseDetailَAcademyImage}></span>
                    </Grid>
                    <Grid item className={classes.CourseDetailAcademyNameContainer3}>
                        <span className={classes.CourseDetailteacherNameTitle}>آموزشگاه : </span>
                        <span className={classes.CourseDetailteacherName}>{courseDetailData.academy_Name}</span>
                    </Grid>
                    <Grid item className={classes.CourseDetailteacherNameContainer9}>
                        <span className={classes.CourseDetailteacherNameTitle}>امتیاز آموزشگاه : </span>
                        <span className={classes.CourseDetailteacherNameNUM1}>{courseDetailData.academy_Score}</span>
                    </Grid>
                    <Grid item className={classes.CourseDetailteacherNameContainer9}>
                        <span className={classes.CourseDetailteacherNameTitle}>مدرک : </span>
                        <span className={classes.CourseDetailteacherName}> {courseDetailData.academy_HaveDocument === 0 ? "ندارد" : "دارد"} </span>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
