import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyle from "../../hadi";
import TreeLevel from "../../components/Filters/TreeCheckbox/TreeLevel";
import DatePickerT from "../Articels/DatePicker/DatePickerT";
import ArticleTeacherFilter from "../../components/Filters/ArtcileTeacherFilter";

const DrawerFilter = ({anchor, toggleDrawer, ids, setIds, items, handleFiltering}) => {
    const classes = useStyle();
    return (
        <Grid container>
            <TreeLevel
                items={items}
                setIds={setIds}
                ids={ids}
            />
            <ArticleTeacherFilter />
            <Grid item className={classes.groupFilter}>
                <Grid item className={classes.groupFilterHeader} >
                    <Typography className={classes.groupFilterHeaderText}>تاریخ مقاله</Typography>
                </Grid>
                <DatePickerT />
            </Grid>
            <Grid container justify="center">
                <Button
                    className={classes.handleBtnFilter}
                    onClick={toggleDrawer(anchor, false)}
                >
                    جستجوی پیشرفته
                </Button>
            </Grid>
        </Grid>
    );
};

export default DrawerFilter;
