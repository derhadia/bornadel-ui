import React from 'react'
import '../node_modules/bootstrap-v4-rtl/dist/css/bootstrap.min.css'
import Rtl from './components/RTL'
import ThemeProvider from './components/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import MasterLayout from './screens/MasterLayout'
import AlertContextProvider from './contexts/AlertContext'
import CoursesContextProvider from './contexts/CoursesContext'
import HomePageContextProvider from './contexts/HomePageContext'
import CourseDetailContextProvider from './contexts/CourseDetailContext'
import toastr from 'toastr';
import './assets/styles/toastr.css';
import ArticleContextProvider from "./contexts/ArticlesContext";
import NewsContextProvider from "./contexts/NewsContext"
toastr.options = {
  "positionClass": "toast-bottom-left"
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Rtl>
          <AlertContextProvider>
            <CoursesContextProvider>
              <HomePageContextProvider>
                <CourseDetailContextProvider>
                  <ArticleContextProvider>
                    <NewsContextProvider>
                      <CssBaseline />
                      <MasterLayout />
                    </NewsContextProvider>
                  </ArticleContextProvider>
                </CourseDetailContextProvider>
              </HomePageContextProvider>
            </CoursesContextProvider>
          </AlertContextProvider>
        </Rtl>
      </ThemeProvider>
    </BrowserRouter>
  );
}
