import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Courses from '../screens/Courses/Courses'
import CourseDetail from '../screens/CourseDetail'
import AcademyPanel from '../screens/AcademyPanel'

import LoginComponent from '../khosravi/js/LoginComponent'
import RegisterComponent from '../khosravi/js/RegisterComponent'


import ArticlesList from "../screens/Articels/ArticlesList";
import ArticleDetail from "../screens/ArticleDetails";
import NewsList from "../screens/NewsList";

export default function Index() {

    useEffect(() => {
        console.log("54454445544544554154454545454554555454")
    })
     
    return (
        // <ScrollToTop />
        // <Header />
        // <main className={classes.main} >
        //   <Grid container justify="center" className={classes.Insidermain}>
        //     <Index />
        //   </Grid>
        // </main>
        // <Footer />

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/Courses/:id/:title/:type" component={Courses} />
            <Route path="/Courses/:id" component={Courses} />
            <Route path="/CourseDetail/:id/:title" component={CourseDetail} />
            <Route path="/AcademyPanel" component={AcademyPanel} />
            <Route path="/ArticleList" component={ArticlesList} />
            <Route path="/ArticleDetail/:id" component={ArticleDetail} />
            <Route path="/NewsList" component={NewsList} />
        </Switch>
    )
}
