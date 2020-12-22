import React from 'react';
import TreeCheckbox from "../../components/Filters/TreeCheckbox/TreeCheckbox";
import TeacherFilter from "../../components/Filters/TeacherFilter";
import {Grid, Typography} from "@material-ui/core";
import DateArticle from "../Articels/dateArticle/DateArticle";
import Button from "@material-ui/core/Button";
import useStyle from "../../hadi";

const DrawerFilter = ({anchor, toggleDrawer}) => {
    const classes = useStyle();
    return (
        <Grid container>
            <TreeCheckbox />
            <TeacherFilter />
            <Grid item className={classes.groupFilter}>
                <Grid item className={classes.groupFilterHeader} >
                    <Typography className={classes.groupFilterHeaderText}>تاریخ مقاله</Typography>
                </Grid>
                <DateArticle />
            </Grid>
            <Grid container justify="center">
                <Button className={classes.handleBtnFilter} onClick={toggleDrawer(anchor, false)}>جستجوی پیشرفته</Button>
            </Grid>
        </Grid>
    );
};

export default DrawerFilter;