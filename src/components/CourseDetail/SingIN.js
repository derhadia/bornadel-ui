import React, {useContext, useEffect, useState} from 'react';
import { Grid, Button } from '@material-ui/core';
import useStyles from '../../styles';
import {Link, useHistory} from "react-router-dom";
import {CoursesContext} from "../../contexts/CoursesContext";

export default function SingIN({data: state}) {
    const {coursesData, data, setData} = useContext(CoursesContext)
    const classes = useStyles();

    const history = useHistory();

    const logIn = localStorage.getItem("token")

    let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


    const addItem = item => {
       oldItems.push(item)
        localStorage.setItem('itemsArray', JSON.stringify(oldItems));
       setData(JSON.parse(localStorage.getItem("itemsArray")))
    }







    return (
        <>
            <Grid container direction="column" className={classes.CourseLogoANDregisterContainer} item >
                <Grid container direction="column" item className={classes.CourseLogoANDregisterBox}>
                    <Grid item className={classes.CourseLogoANDregisterShareLogo} ></Grid>
                    <span className={classes.CourseLogoANDregisterBellLogo} ></span>
                    <Grid className={classes.CourseLogoANDregisterLogo} ></Grid>
                    <span className={classes.CourseLogoANDregisterTitle} >Adobe Photosope CC</span>
                    <span  className={classes.CourseLogoANDregisterCircle}></span>
                </Grid>
                <Grid container item className={classes.CourseLogoANDregisterButtonContainer}>
                    <Link
                        to={{
                            pathname: "/Cart",
                            state: {state},
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => addItem(state)}
                            className={classes.CourseLogoANDregisterButton}
                        >
                            ثبت نام در دوره
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}
