import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import styles from '../jss/question';
import './provision.css';

import { fetchPost } from '../../config/Utils';
import Api from '../../constants/Api';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const CommonQuestionComponent = () => {
    const classes = styles();

    const [questions, setQuestions] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        getAllCommonQuestions();
    }, []);

    const getAllCommonQuestions = () => {
        fetchPost(Api.GetAllCommonQuestion, {}).then(response => {
            if (response.success) {
                let res = response.responseJSON.data;
                setQuestions(res);
            }
        });
    };

    const handleChange = (questionId) => (event, isExpanded) => {
        setExpanded(isExpanded ? questionId : false);
    };

    return (
        <>
            <Grid container className="site-rule">

                
            <Grid item md={12} sm={12} className={classes.center} style={{width:"100%"}}>
                    <h2>سوالات متداول </h2><br />
                </Grid>


                <Grid item md={12} className="center" style={{width:"100%"}}>
                    <div className="Rectangle-15"></div>
                </Grid>

                <Grid item md={12} className="p-5" style={{margin:"auto" , width:"100%"}}>
                    {
                        questions.map(item => {
                            return (
                                <Accordion square expanded={expanded === item.commonQuestion_ID}
                                    onChange={handleChange(item.commonQuestion_ID)}>
                                    <AccordionSummary className={classes.accordionSummary}
                                        expandIcon={expanded === item.commonQuestion_ID ? <RemoveIcon color="secondary" /> : <AddIcon color="secondary" />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="pr-2">{item.commonQuestion_Question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {item.commonQuestion_Answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }

                </Grid>
            </Grid>
        </>
    )
}

export default CommonQuestionComponent;