import { Button, Grid } from '@material-ui/core'
import React, {useContext, useState} from 'react'
import useStyles from '../../styles'
import defaultImage from '../../assets/images/defaultImage.png'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
export default function CommentTab({handleSendComment, comment, setComment}) {
    const classes = useStyles()

    let { comments } = useContext(CourseDetailContext);

    const handleChange = event => setComment(event.target.value)

    return (
        <Grid container className={classes.commentContainer}>
            <Grid container item className={classes.typingClass} >
                <Grid item className={classes.userImageQues}>
                </Grid>
                <Grid item className={classes.typingRect} >
                    <textarea onChange={handleChange} value={comment} className={classes.typingFieldBox} placeholder="متن..." />
                    <Grid container justify="flex-end" className={classes.sendQuestion}>
                        <Button onClick={handleSendComment} variant="contained" color="primary" className={classes.sendQuestions} >ارسال نظر</Button>
                    </Grid>
                </Grid>
            </Grid>
            {comments && comments.map((item, index) => {
                return (
                    <Grid container key={index}>
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
                    </Grid>
                )
            })
            }
        </Grid>
    )
}
