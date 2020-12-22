import React from 'react';
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


export default function TreeCheckbox() {
    const classes = useStyles()

    return (
        <Grid item className={classes.teacherFilter}>
            <Typography className={classes.teacherFilterTitle}>دسته بندی</Typography>
            <Accordion style={{boxShadow: "unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="کسب و کار"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="کسب و کار"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow: "unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="صنعت چاپ"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="سابلیمیشن"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="افست"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow: "unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="صنایع دستی"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="فرشبافی"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow: "unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="کسب و کار"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="کسب و کار"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow: "unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="صنعت چاپ"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="سابلیمیشن"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="افست"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{boxShadow: "unset"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="صنایع دستی"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Checkbox color="primary" />}
                                label="فرشبافی"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}