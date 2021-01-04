import { Grid } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import useStyles from '../../styles'
import TeacherDetailTab from './TeacherDetailTab'
import AcademyDetailTab from './AcademyDetailTab'
import DownloadLink from './DownloadLink'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'

export default function TeacherAcademyDetail() {
    const classes = useStyles();
    const [activeHeader, setActiveHeader] = useState(1)
    let { courseDetailData } = useContext(CourseDetailContext)
    let SetActive = (Num) => {
        setActiveHeader(Num)
    }
    return (
        <Grid item direction="column" container className={classes.teacherANDAcademyDetail}>
            <Grid container item>
                <span onClick={() => SetActive(1)} className={activeHeader === 1 ? classes.ActiveTeacher : classes.CourseDetailteacherDetail}>مدرس</span>
                <span onClick={() => { return courseDetailData && courseDetailData.academy_ID === null || courseDetailData.academy_ID === 0 ? "" : SetActive(2) }}
                    className={`${activeHeader === 2 ? classes.ActiveAcademy : classes.CourseDetailAcademyDetail} ${courseDetailData && courseDetailData.academy_ID === null || courseDetailData.academy_ID === 0 ? classes.academyDisable : null}`}
                >آموزشگاه</span>
                <span onClick={() => SetActive(3)} className={activeHeader === 3 ? classes.ActiveDownload : classes.CourseDetailِDownloadDetail}>لینک های دانلود</span>
                <Grid className={classes.ExtraWidth} item></Grid>
            </Grid>

            {
                activeHeader === 1 ?
                    <Grid container item className={classes.TabDatas}>
                        <TeacherDetailTab />
                    </Grid>
                    : activeHeader === 2 ?
                        <Grid container item className={classes.TabDatas}>
                            <AcademyDetailTab />
                        </Grid>
                        : activeHeader === 3 ?
                            <DownloadLink />
                            : null
            }
        </Grid>
    )
}
