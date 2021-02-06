import {Button, Grid, Typography} from '@material-ui/core';
import React, {useContext, useState} from 'react';
import { CourseDetailContext } from '../../contexts/CourseDetailContext';
import useStyles from '../../styles';
import defaultImage from '../../assets/images/defaultImage.png';
import {convertToPersian} from "../../hadi/functions";

export default function QuestionsTab({handleSendQuestion, setQuestion, question}) {
    const classes = useStyles()
    let { questions } = useContext(CourseDetailContext)

    const handleChange = event => setQuestion(event.target.value)

    return (
        <Grid container className={classes.questionContainer}>
            <Grid container item className={classes.typingClass} >
                <Grid item className={classes.userImageQues}>

                </Grid>
                <Grid item className={classes.typingRect} >
                    <textarea onChange={handleChange} value={question} className={classes.typingFieldBox} placeholder="متن..." />
                    <Grid container justify="flex-end" className={classes.sendQuestion}>
                        <Button onClick={handleSendQuestion} variant="contained" color="primary" className={classes.sendQuestions} >ارسال پرسش</Button>
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
                                        <img className={classes.imageProfile} src={defaultImage} alt="" />
                                    </Grid>
                                    <Grid item className={classes.questionsTextRect}>
                                        <span className={classes.questionWriter}>{item.student_FullName}</span>
                                        <Grid className={classes.questionContent}>
                                            {item.question_Description}
                                        </Grid>
                                        <Grid container style={{justifyContent: "space-between"}}>
                                            <Grid item className={classes.questionDate}>تاریخ  {convertToPersian(item.question_DateTime)}</Grid>
                                             <Grid item style={{display: "flex", alignItems: "center"}}>
                                                 <Typography className={`${classes.typoComment} ${classes.thumbUp}`}>{convertToPersian(item.question_Like.toString())}</Typography>
                                                 <span className={classes.lineSpan}/>
                                                 <Typography className={`${classes.typoComment} ${classes.thumbDown}`}>{convertToPersian(item.question_DisLike.toString())}</Typography>
                                             </Grid>
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
                                                    <Grid container style={{justifyContent: "space-between"}}>
                                                        <Grid item className={classes.questionDate}>تاریخ  {convertToPersian(item2.question_DateTime)}</Grid>
                                                        <Grid item style={{display: "flex", alignItems: "center"}}>
                                                            <Typography className={`${classes.typoComment} ${classes.thumbUp}`}>{convertToPersian(item2.question_Like.toString())}</Typography>
                                                            <span className={classes.lineSpan}/>
                                                            <Typography className={`${classes.typoComment} ${classes.thumbDown}`}>{convertToPersian(item2.question_DisLike.toString())}</Typography>
                                                        </Grid>
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
