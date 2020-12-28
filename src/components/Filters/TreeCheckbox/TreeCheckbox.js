import React, {useContext, useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Grid} from "@material-ui/core";
import useStyles from "../../../styles";
import "../../../hadi/style.css"
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';


export default function TreeCheckbox({items}) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    return (
        <Grid style={{overflow: "scroll"}} item className={classes.teacherFilter}>
            <Typography className={classes.teacherFilterTitle}>دسته بندی</Typography>
            {
                items.map((item, index) => {
                    if (item.educationSubject_EducationSubject_Ref === null) {
                        return (
                            <Accordion key={index} style={{boxShadow: "unset"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-label="Expand"
                                    aria-controls="additional-actions1-content"
                                    id="additional-actions1-header"
                                >
                                    <FormControlLabel
                                        aria-label="Acknowledge"
                                        onClick={(event) => event.stopPropagation()}
                                        onFocus={(event) => event.stopPropagation()}
                                        control={<Checkbox/>}
                                        label={`${(item.educationSubject_Name)}`}
                                    />
                                    {
                                        items.map((second, index) => {
                                            if (second.educationSubject_EducationSubject_Ref === item.educationSubject_ID) {
                                                return (
                                                    <Accordion key={index} style={{boxShadow: "unset"}}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon/>}
                                                            aria-label="Expand"
                                                            aria-controls="additional-actions1-content"
                                                            id="additional-actions1-header"
                                                        >
                                                            <FormControlLabel
                                                                aria-label="Acknowledge"
                                                                onClick={(event) => event.stopPropagation()}
                                                                onFocus={(event) => event.stopPropagation()}
                                                                control={<Checkbox/>}
                                                                label={`${(second.educationSubject_Name)}`}
                                                            />
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <FormControl component="fieldset">
                                                                <FormGroup aria-label="position" row>
                                                                    <FormControlLabel
                                                                        value="start"
                                                                        control={<Checkbox color="primary"/>}
                                                                        label={
                                                                            `${second.educationSubject_Name}`
                                                                        }
                                                                        labelPlacement="end"
                                                                    />
                                                                </FormGroup>
                                                            </FormControl>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                )}
                                        })
                                    }
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl component="fieldset">
                                        <FormGroup aria-label="position" row>
                                            <FormControlLabel
                                                value="start"
                                                control={<Checkbox color="primary"/>}
                                                label={
                                                    `${item.educationSubject_Name}`
                                                }
                                                labelPlacement="end"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                        )
                    }})

            }
        </Grid>
    );
}
