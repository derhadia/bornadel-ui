import { Button, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import useStyles from '../../styles'
import defaultImage from '../../assets/images/defaultImage.png'

export default function QuestionsTab() {
    const classes = useStyles()
    let { questions } = useContext(CourseDetailContext)

    return (
        <Grid container className={classes.questionContainer}>
            <Grid container item className={classes.typingClass} >
                <Grid item className={classes.userImageQues}>

                </Grid>
                <Grid item className={classes.typingRect} >
                    <textarea className={classes.typingFieldBox} placeholder="متن..." />
                    <Grid container justify="flex-end" className={classes.sendQuestion}>
                        <Button variant="contained" color="primary" className={classes.sendQuestions} >ارسال پرسش</Button>
                    </Grid>
                </Grid>
            </Grid>
            {questions && questions.map((item, index) => {
                return (
                    <Grid container key={index}>
                        {item.question_IsQuestion ?
                            <Grid container className={classes.questions}>
                                <Grid item className={classes.questionsTextContainer}>
                                    <Grid item className={classes.userImageQues2}>
                                        <img className={classes.imageProfile} src={defaultImage} />
                                    </Grid>
                                    <Grid item className={classes.questionsTextRect}>
                                        <span className={classes.questionWriter}>{item.student_FullName}</span>
                                        <Grid className={classes.questionContent}>
                                            {item.question_Description}
                                        </Grid>
                                        <Grid container >
                                            <Grid item className={classes.questionDate}>تاریخ  {item.question_DateTime}</Grid>
                                            {/* <Grid item className={classes.}></Grid> */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            : null
                        }
                        {questions && questions.map((item2, index2) => {
                            return (
                                <Grid container key={index2}>
                                    {item2.question_Question_Ref === item.question_ID ?
                                        <Grid container justify="flex-end" className={classes.answer}>
                                            <Grid item className={classes.answerTextContainer}>
                                                <Grid item className={classes.userImageQues2}>
                                                    <img className={classes.imageProfile} src={defaultImage} />
                                                </Grid>
                                                <Grid item className={classes.questionsTextRect}>
                                                    <span className={classes.questionWriter}>{item2.student_FullName}</span>
                                                    <Grid className={classes.questionContent}>
                                                        {item2.question_Description}
                                                    </Grid>
                                                    <Grid container >
                                                        <Grid item className={classes.questionDate}>تاریخ  {item2.question_DateTime}</Grid>
                                                        {/* <Grid item className={classes.}></Grid> */}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        : null
                                    }
                                </Grid>
                            )
                        })

                        }
                    </Grid>
                )
            })
            }
        </Grid>
    )
}
