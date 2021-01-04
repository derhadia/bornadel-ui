import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import useStyles from '../../styles'

export default function AcademyDetailTab() {
    const classes = useStyles()
    let { courseDetailData,academyTabData } = useContext(CourseDetailContext)
    return (
        <Grid container>
            <Grid container alignItems="center" item className={classes.teacherTabContainer}>
                <Grid item className={classes.teacherImageTabs}>
                    <img src={`https://api.bornadel.com/${academyTabData.length > 0 ? academyTabData[0].academy_PhotoLink : null}`} alt={academyTabData.length > 0 ? academyTabData[0].teacher_Name : null}
                        className={classes.teacherImageTabsItem} />
                </Grid>
                <Grid item className={classes.teacherNameTabscontainer}>
                    <Grid item className={classes.teacherNameTabs}>{academyTabData.length > 0 ? academyTabData[0].academy_Name : null}</Grid>
                    <Grid item className={classes.teacherScoreTabs}>امتیاز: {courseDetailData.length > 0 ? courseDetailData.academy_Score : null}</Grid>
                </Grid>
            </Grid>
            <Grid container item className={classes.academyManagementTab}>
                <Grid item className={classes.academyManagerName}>نام مدیر آموزشگاه :</Grid>
                <Grid item className={classes.academyManagerNameText}>{academyTabData.academy_ManagerName}</Grid>
            </Grid>
            <Grid container item className={classes.academyManagementTab}>
                <Grid item className={classes.academyManagerName}>سایت آموزشگاه :</Grid>
                <Grid item className={classes.academyManagerNameText}>{academyTabData.academy_Site}</Grid>
            </Grid>
            <Grid container item className={classes.academyManagementTab}>
                <Grid item className={classes.academyManagerName}>آدرس آموزشگاه :</Grid>
                <Grid item className={classes.academyManagerNameText}>{academyTabData.academy_Address}</Grid>
            </Grid>
        </Grid>
    )
}
