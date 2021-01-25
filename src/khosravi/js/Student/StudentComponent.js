import React, { useState } from 'react'
import StudentStyle from '../../jss/StudentStyle';
import { Grid } from '@material-ui/core';
import SideBar from '../SideBarComponent';
import routes from './routes';
import { Switch, Route, Redirect} from 'react-router-dom';

export default function Student(props) {
    
    const classes = StudentStyle();
    

    return (
        <>
            <Grid container direction="row" style={{ maxWidth: 1366, height: "60vh" }}>
                <SideBar />
                <Switch>
                    <Route exact path="/student">
                        <Redirect to="/student/profile" />
                    </Route>
                    {
                        routes.map((route, index) => {
                           return  <Route path={route.path} key={index}
                                render={(props) => React.createElement(route.component, { ...props })} />
                        })
                    }
                </Switch>
                <Grid container item direction="column" style={{ flex: 1 }}>
                    <Grid container item alignItems="center" justify="space-between" className={classes.StudentAppBar}>
                        <Grid container alignItems="center" justify="center" item>
                            <Grid item className={classes.StudentScoreContainer}>

                            </Grid>
                            <Grid container item justify="flex-end" className={classes.StudentAppBarICONContainer}>
                                <Grid item className={classes.StudentAppBarICON1}></Grid>
                                <Grid item className={classes.StudentAppBarICON2}></Grid>
                                <Grid item className={classes.StudentAppBarICON3}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
