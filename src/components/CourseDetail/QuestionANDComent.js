import { Grid } from '@material-ui/core';
import React, {useCallback, useContext, useState} from 'react';
import useStyles from '../../styles';
import QuestionsTab from './QuestionsTab';
import CommentTab from './CommentTab';
import {useHistory} from "react-router-dom";
import {CourseDetailContext} from "../../contexts/CourseDetailContext";

export default function TeacherAcademyDetail() {
    const classes = useStyles();
    const [activeHeader, setActiveHeader] = useState(1);
    const [question, setQuestion] = useState("");
    const [comment, setComment] = useState("")

    let { comments } = useContext(CourseDetailContext);
    const history = useHistory()

    let SetActive = (Num) => {
        setActiveHeader(Num)
    }

    const handleSendComment = useCallback(() => {
        const logIn = localStorage.getItem("token")
        if (comment.length > 10 && !logIn) {
            history.push("/login")
        }
    },[comment.length, history]);

    const handleSendQuestion = useCallback(() => {
        const logIn = localStorage.getItem("token")
        if (question.length > 10 && !logIn) {
            history.push("/login")
        }
    },[question.length, history]);

    return (
        <Grid item direction="column" container className={classes.teacherANDAcademyDetail}>

            <Grid item container>
                <Grid item sm={4} xs={4} onClick={() => SetActive(1)} className={activeHeader === 1 ? classes.ActiveQuestion : classes.CourseDetailQuestion}>پرسش وپاسخ</Grid>
                <Grid item xs={4} sm={4} onClick={() => SetActive(2)} className={activeHeader === 2 ? classes.ActiveComent : classes.CourseDetailComent}>نظر کاربران</Grid>
                <Grid xs={4} sm={4} className={classes.ExtraWidthComment} item/>
            </Grid>
            {
                activeHeader === 1 ?
                    <Grid container item className={classes.TabDatas}>
                        <QuestionsTab
                            setQuestion={setQuestion}
                            question={question}
                            handleSendQuestion={handleSendQuestion}
                        />
                    </Grid>
                    : activeHeader === 2 ?
                        <Grid container item className={classes.TabDatas}>
                            <CommentTab setComment={setComment} comment={comment} handleSendComment={handleSendComment}/>
                        </Grid>
                        : null
            }
        </Grid>
    )
}