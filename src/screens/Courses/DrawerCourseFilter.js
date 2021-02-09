import React, {useState} from 'react';
import {Divider, Grid} from "@material-ui/core";
import useStyle from "../../hadi";
import TeacherFilterMobile from "./TeacherFilterMobile";
import StartHoursFilter from "../../components/Filters/StartHoursFilter";
import PriceFilter from "../../components/Filters/PriceFilter";
import AcademyFilterMobile from "./AcademyFilterMobile";
import ReadyClassesSwitch from "../../components/Filters/SwitchReadyClasses";
import DegreeSwith from "../../components/Filters/SwitchDegree";
import Button from "@material-ui/core/Button";
import LevelFilter from "../../components/Filters/LevelFilter";

const DrawerCourseFilter = ({setState, anchor, toggleDrawer}) => {
    const classes = useStyle()
    const [typeMobile] = useState(true)
    return (
        <Grid container>
            <span
                onClick={() => setState({drawer: false})}
                className={classes.closeDrawer}
            >
                X
            </span>
            <Grid container style={{padding: "12px 17px"}}>
                <LevelFilter/>
            </Grid>
            <Divider />
            <Grid container style={{padding: "12px 17px"}}>
                <TeacherFilterMobile />
            </Grid>
            <Divider />
            <Grid container style={{padding: "12px 17px"}}>
                <StartHoursFilter/>
            </Grid>
            <Divider />
            <Grid container style={{padding: "12px 17px"}}>
                <PriceFilter/>
            </Grid>
            <Divider />
            <Grid container style={{padding: "12px 17px"}}>
                <AcademyFilterMobile typeMobile={typeMobile}/>
            </Grid>
            <Divider />
            <Grid container style={{padding: "12px 17px"}}>
                <ReadyClassesSwitch/>
            </Grid>
            <Grid container style={{padding: "12px 17px", marginBottom: 100}}>
                <DegreeSwith/>
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

export default DrawerCourseFilter;