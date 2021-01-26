import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Courses from '../screens/Courses/Courses'
import CourseDetail from '../screens/CourseDetail'
import AcademyPanel from '../screens/AcademyPanel'

import LoginComponent from '../khosravi/js/LoginComponent'
import RegisterComponent from '../khosravi/js/RegisterComponent'
import ProvisionComponent from '../khosravi/js/ProvisionComponent'
import CommonQuestionComponent from '../khosravi/js/CommonQuestionComponent'
import Student from '../khosravi/js/Student/StudentComponent'


import ArticlesList from "../screens/Articels/ArticlesList";
import ArticleDetail from "../screens/ArticleDetails";
import NewsList from "../screens/NewsList";
import NewsDetail from "../screens/NewsDetail";
import About from "../screens/About/About";
import ContactUs from "../screens/ContactUs/ContactUs";


export default function Index() {

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
            <Route path="/provision" component={ProvisionComponent} />
            <Route path="/commonquestion" component={CommonQuestionComponent} />
            <Route path="/Courses/:id/:title/:type" component={Courses} />
            <Route path="/Courses/:id" component={Courses} />
            <Route path="/CourseDetail/:id/:title" component={CourseDetail} />
            <Route path="/AcademyPanel" component={AcademyPanel} />
            <Route path="/ArticleList" component={ArticlesList} />
            <Route path="/ArticleDetail/:id" component={ArticleDetail} />
            <Route path="/NewsList" component={NewsList} />
            <Route path="/NewsDetail/:id" component={NewsDetail} />
            <Route path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/student" component={Student} />
        </Switch>
    )
}
