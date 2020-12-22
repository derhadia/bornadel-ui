import React, {useContext} from 'react';
import {ArticlesContext} from "../../../contexts/ArticlesContext";
import {Grid, Typography} from "@material-ui/core";
import useStyle from "../../../hadi";

const DateArticle = () => {
    const classes = useStyle();
    const {
        fromYear, toYear, toMonth, toDay, fromMonth, fromDay,
        handleFromDay, handleFromMonth, handleFromYear, handleToDay,
        handleToMonth, handleToYear
    } = useContext(ArticlesContext);

    return (
        <Grid container className={classes.dateStyle} direction="column">
            <Grid item className={classes.boxDate}>
                <Grid item xs={4}>
                    <Typography style={{fontSize: "13.5px", color: "#424750"}}>از تاریخ</Typography>
                </Grid>
                <Grid item xs={8} style={{display: "flex"}}>
                    <input
                        className={classes.dayStyle}
                        value={fromDay}
                        onChange={handleFromDay}
                        maxLength="2"
                    />
                    <input
                        className={classes.monthStyle}
                        value={fromMonth}
                        onChange={handleFromMonth}
                        maxLength="2"
                    />
                    <input
                        className={classes.yearStyle}
                        value={fromYear}
                        onChange={handleFromYear}
                        maxLength="4"
                    />
                </Grid>
            </Grid>
            <Grid item className={classes.boxDate}>
                <Grid item xs={4}>
                    <Typography style={{fontSize: "13.5px", color: "#424750"}}>تا تاریخ</Typography>
                </Grid>
                <Grid item xs={8} style={{display: "flex"}}>
                    <input
                        className={classes.dayStyle}
                        value={toDay}
                        onChange={handleToDay}
                        maxLength="2"
                    />
                    <input
                        className={classes.monthStyle}
                        value={toMonth}
                        onChange={handleToMonth}
                        maxLength="2"
                    />
                    <input
                        className={classes.yearStyle}
                        value={toYear}
                        onChange={handleToYear}
                        maxLength="4"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DateArticle;