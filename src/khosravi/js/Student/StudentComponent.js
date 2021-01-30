import React, { useEffect, useState } from 'react'
import StudentStyle from '../../jss/StudentStyle';
import { Grid } from '@material-ui/core';
import SideBar from '../SideBarComponent';
import routes from './routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SetToken } from '../core/axiosHelper';

export default function Student(props) {
    const [auth , setAuth] = useState('')
    const classes = StudentStyle();
    
    useEffect(() => {
        let token = localStorage.getItem("token");
 
        if(token && token != ''){
            SetToken(token);
            setAuth(token);
        }else{
            window.location.href = '/login';
        }
    },[]);
    
    return (
        <>
        {
            auth && auth != '' ? 
            
            <Grid container direction="row" style={{ maxWidth: 1366, minHeight: "60vh" }}>

            <Grid item md={2} xs={12}>
                <SideBar />
            </Grid>

            <Grid item md={10} xs={12}>
                <Grid container >
                    <Grid item md={12} xs={12} alignItems="center" justify="space-between" className={classes.StudentAppBar}>
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

                    <Grid item md={12} xs={12}>
                        <Switch>
                            <Route exact path="/student">
                                <Redirect to="/student/profile" />
                            </Route>
                            {
                                routes.map((route, index) => {
                                    return <Route path={route.path} key={index}
                                        render={(props) => React.createElement(route.component, { ...props })} />
                                })
                            }
                        </Switch>
                    </Grid>

                </Grid>

            </Grid>

        </Grid> : 
            ''
        }
           
        </>
    )
}
