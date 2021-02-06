import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import useStyles from '../../styles'

export default function TeacherDetailTab() {
    const classes = useStyles()
    let { teacherTabData, teachrDipTabData, teachrDocTabData } = useContext(CourseDetailContext)
    return (
        <Grid container>
            <Grid container alignItems="center" item className={classes.teacherTabContainer}>
                <Grid item className={classes.teacherImageTabs}>
                    <img
                        src={`https://api.bornadel.com/${teacherTabData.length > 0 ? teacherTabData[0].teacher_PhotoLink : null}`}
                        alt={teacherTabData.length > 0 ? teacherTabData[0].teacher_Name : null}
                        className={classes.teacherImageTabsItem}
                    />
                </Grid>
                <Grid item className={classes.teacherNameTabscontainer}>
                    <Grid item className={classes.teacherNameTabs}>{teacherTabData.length > 0 ? teacherTabData[0].teacher_Name + " " + teacherTabData[0].teacher_LastName : null}</Grid>
                    <Grid item className={classes.teacherScoreTabs}>امتیاز: {teacherTabData.length > 0 ? teacherTabData[0].teacher_Score : null}</Grid>
                </Grid>
            </Grid>
            {/*<Grid container>*/}
            {/*    <Grid item className={classes.diplomaTitle}>مدارک تحصیلی</Grid>*/}
            {/*    {teachrDipTabData && teachrDipTabData.map((item, index) => {*/}
            {/*        return (*/}
            {/*            <Grid key={index} container className={classes.doplomaText}>{item.teacherDiploma_University}</Grid>*/}
            {/*        )*/}
            {/*    })*/}
            {/*    }*/}
            {/*</Grid>*/}
            <Grid container className={classes.teacherEvidence}>
                <Grid item className={classes.doclomaTitle}>مدارک تحصیلی</Grid>
                {
                    teachrDocTabData && teachrDocTabData.map((item, index) => {
                        return (
                            <Grid container key={index}>
                                <Grid  className={classes.doclomaText}>{item.teacherDoc_DocumentName}</Grid>
                                <a rel="noopener noreferrer" href={item.teacherDoc_Link} target="_blank" download className={classes.downloadLink}> دانلود</a>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}
