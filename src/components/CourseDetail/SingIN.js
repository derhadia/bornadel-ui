import React, {useContext} from 'react';
import { Grid, Button } from '@material-ui/core';
import useStyles from '../../styles';
import {Link, useHistory} from "react-router-dom";
import {CoursesContext} from "../../contexts/CoursesContext";
import {find} from 'lodash';
import Apis from "../../constants/Api"

export default function SingIN({data: state}) {
    const {setData} = useContext(CoursesContext)
    const classes = useStyles();

    const history = useHistory();

    const logIn = localStorage.getItem("token")

    let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


    const id = find(oldItems, ["classRoom_ID", state.classRoom_ID])



    const addItem = item => {
        if (!id) {
            oldItems.push(item)
        }

        localStorage.setItem('itemsArray', JSON.stringify(oldItems));
       setData(JSON.parse(localStorage.getItem("itemsArray")))
    }






    return (
        <>
            <Grid container direction="column" className={classes.CourseLogoANDregisterContainer} item >
                <Grid container direction="column" item className={classes.CourseLogoANDregisterBox}>
                    <Grid item className={classes.CourseLogoANDregisterShareLogo}/>
                    <span className={classes.CourseLogoANDregisterBellLogo} />
                    <Grid className={classes.CourseLogoANDregisterLogo}>
                        <img style={{width: "100%"}} src={Apis.SHOWIMAGE + state.educationSubject_IconeLink} alt=""/>
                    </Grid>
                    <span className={classes.CourseLogoANDregisterTitle} >Adobe Photosope CC</span>
                    <span  className={classes.CourseLogoANDregisterCircle}/>
                </Grid>
                <Grid container item className={classes.CourseLogoANDregisterButtonContainer}>
                    <Link
                        to={{
                            pathname: "/Cart",
                            state: {state},
                        }}
                        className={classes.linkBtnHover}
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
