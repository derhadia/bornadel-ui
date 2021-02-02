import React, { useEffect, useState } from 'react'
import StudentStyle from '../../jss/StudentStyle';
import { Grid, Hidden } from '@material-ui/core';
import SideBar from '../SideBarComponent';
import routes from './routes';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { SetToken } from '../core/axiosHelper';
import './student.css';
import { Form } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';


export default function Student(props) {
    const [auth, setAuth] = useState('')
    const classes = StudentStyle();
    const [search, setSearch] = useState('');

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem("token");

        if (token && token != '') {
            SetToken(token);
            setAuth(token);
        } else {
            window.location.href = '/login';
        }
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const changeState = (pathName) =>{
        history.push(pathName);
    }

    return (
        <>
            {
                auth && auth != '' ?

                    <Grid container direction="row">
                        <Hidden mdDown>
                            <Grid item md={2} lg={2}>
                                <SideBar />
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item sm={12} xs={12} className="info-site d-flex align-items-center justify-content-center">
                                <div>
                                    برنادل سایت آموزش آنلاین
                                </div>
                            </Grid>
                            <Grid item sm={12} xs={12} className="d-flex align-items-center justify-content-center"
                                style={{ height: 100 }}>
                                <div className="search-panel">
                                    <SearchIcon className="icon-search" />
                                    <div class="divider-search"></div>
                                    <Form.Control
                                        type="text"
                                        name="search"
                                        placeholder="جستجو در برنادل ..."
                                        value={search}
                                        onChange={handleChange}
                                    />
                                </div>
                            </Grid>
                        </Hidden>
                        {
                            location.pathname === "/student" ?

                                <Hidden mdUp>
                                    <Grid sm={12} xs={12} className="d-flex justify-content-center align-items-center">
                                        <Grid xs={6} sm={6} className="user-title d-flex justify-content-center">سعید فلاح زاده</Grid>
                                    </Grid>
                                    <Grid xs={12} sm={12} className="d-flex justify-content-center align-items-center mt-4">
                                        <Grid xs={11} sm={11} className="panel-menu d-flex justify-content-between align-items-center"
                                        onClick={() => changeState('/student/profile')}>
                                            <Grid item xs={3} sm={3} className="d-flex mr-4">
                                                <span className={classes.ProfileIcon}></span>
                                                <span>پروفایل</span>
                                            </Grid>
                                            <Grid item xs={2} sm={2} className="ml-4 d-flex justify-content-end" style={{ position: "relative" }}>
                                                <RadioButtonUncheckedRoundedIcon className="circle-icon" />
                                                <ArrowRightAltIcon className="arrow-icon" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} sm={12} className="d-flex justify-content-center align-items-center mt-4">
                                        <Grid xs={11} sm={11} className="panel-menu d-flex justify-content-between align-items-center"
                                            onClick={() => changeState('/student/courseHistory')}>
                                            <Grid item xs={3} sm={3} className="d-flex mr-4">
                                                <span className={classes.HistoryIcon}></span>
                                                <span>سوابق دوره ها</span>
                                            </Grid>
                                            <Grid item xs={2} sm={2} className="ml-4 d-flex justify-content-end" style={{ position: "relative" }}>
                                                <RadioButtonUncheckedRoundedIcon className="circle-icon" />
                                                <ArrowRightAltIcon className="arrow-icon" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} sm={12} className="d-flex justify-content-center align-items-center mt-4">
                                        <Grid xs={11} sm={11} className="panel-menu d-flex justify-content-between align-items-center"
                                        onClick={() => changeState('/student/questions')}>
                                            <Grid item xs={4} sm={4} className="d-flex mr-4">
                                                <span className={classes.QuestionIcon}></span>
                                                <span>پرسش ها و کامنت ها</span>
                                            </Grid>
                                            <Grid item xs={2} sm={2} className="ml-4 d-flex justify-content-end" style={{ position: "relative" }}>
                                                <RadioButtonUncheckedRoundedIcon className="circle-icon" />
                                                <ArrowRightAltIcon className="arrow-icon" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} sm={12} className="d-flex justify-content-center align-items-center mt-4 mb-5">
                                        <Grid xs={11} sm={11} className="panel-menu d-flex justify-content-between align-items-center"
                                        onClick={() => changeState('/student/tickets')}>
                                            <Grid item xs={3} sm={3} className="d-flex mr-4">
                                                <span className={classes.TicketIcon}></span>
                                                <span>تیکت ها</span>
                                            </Grid>
                                            <Grid item xs={2} sm={2} className="ml-4 d-flex justify-content-end" style={{ position: "relative" }}>
                                                <RadioButtonUncheckedRoundedIcon className="circle-icon" />
                                                <ArrowRightAltIcon className="arrow-icon" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Hidden> : ''
                        }

                        <Grid>
                        </Grid>
                        <Grid item md={10} xs={12}>
                            <Grid container >
                                {/* <Hidden smDown> */}
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
                                {/* </Hidden> */}


                                <Grid item md={12} xs={12}>
                                    <Hidden mdDown>
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
                                    </Hidden>
                                    <Hidden mdUp>
                                        {
                                            routes.map((route, index) => {
                                                return <Route path={route.path} key={index}
                                                    render={(props) => React.createElement(route.component, { ...props })} />
                                            })
                                        }
                                    </Hidden>

                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid> :
                    ''
            }

        </>
    )
}
