import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Courses from '../screens/Courses/Courses'
import CourseDetail from '../screens/CourseDetail'
import AcademyPanel from '../screens/AcademyPanel'
import ArticlesList from "../screens/Articels/ArticlesList";
import ArticleDetail from "../screens/ArticleDetails";

export default function Index() {
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Courses/:id/:title/:type" component={Courses} />
            <Route path="/Courses/:id" component={Courses} />
            <Route path="/CourseDetail/:id/:title" component={CourseDetail} />
            <Route path="/AcademyPanel" component={AcademyPanel} />
            <Route path="/ArticleList" component={ArticlesList} />
            <Route path="/ArticleDetail/:id" component={ArticleDetail} />
        </Switch>
    )
}
