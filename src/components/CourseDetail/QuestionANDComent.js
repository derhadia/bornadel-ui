import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from '../../styles'
import QuestionsTab from './QuestionsTab'
import CommentTab from './CommentTab'

export default function TeacherAcademyDetail() {
    const classes = useStyles();
    const [activeHeader, setActiveHeader] = useState(1)
    let SetActive = (Num) => {
        setActiveHeader(Num)
    }
    return (
        <Grid item direction="column" container className={classes.teacherANDAcademyDetail}>

            <Grid item container className={classes.teacherANDAcademyDetail}>
                <span onClick={() => SetActive(1)} className={activeHeader === 1 ? classes.ActiveQuestion : classes.CourseDetailQuestion}>پرسش وپاسخ</span>
                <span onClick={() => SetActive(2)} className={activeHeader === 2 ? classes.ActiveComent : classes.CourseDetailComent}>نظر کاربران</span>
                <Grid className={classes.ExtraWidth} item></Grid>
            </Grid>
            {
                activeHeader === 1 ?
                    <Grid container item className={classes.TabDatas}>
                        <QuestionsTab />
                    </Grid>
                    : activeHeader === 2 ?
                        <Grid container item className={classes.TabDatas}>
                            <CommentTab />
                        </Grid>
                        : null
            }
        </Grid>
    )
}