import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Courses from '../screens/Courses/Courses'
import CourseDetail from '../screens/CourseDetail'
import AcademyPanel from '../screens/AcademyPanel'

import LoginComponent from '../khosravi/js/LoginComponent'
import RegisterComponent from '../khosravi/js/RegisterComponent'



export default function Index() {
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/Courses/:id/:title/:type" component={Courses} />
            <Route path="/Courses/:id" component={Courses} />
            <Route path="/CourseDetail/:id/:title" component={CourseDetail} />
            <Route path="/AcademyPanel" component={AcademyPanel} />
        </Switch>
    )
}
