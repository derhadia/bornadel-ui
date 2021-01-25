import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SideBarStyle from '../jss/SideBarStyle';
import StudentStyle from '../jss/StudentStyle';
import { Grid } from '@material-ui/core';

export default function SideBar(props) {
    const classes = SideBarStyle();
    const classesPanel = StudentStyle();

    const [activeMenu, setActiveMenu] = useState(1);

    return (
        <>
            <Grid container item direction="column" id="sidebar" alignItems="flex-start" className={classes.SideBarContainer}>
                <Grid container justify="center" item>
                    <Grid container item justify="center" className={classes.SideBarProfile}><h5>سعید فلاح زاده</h5></Grid>
                </Grid>
                <Grid component={Link} to="/student/profile" container item
                    onClick={() => setActiveMenu(1)}
                    className={`${activeMenu === 1 ? classesPanel.SideBarProfileActive : classesPanel.SideBarProfile} ${classes.SidebarMenu}`}>
                    پروفایل
                    </Grid>
                <Grid component={Link} to="/student/courseHistory" container item
                    onClick={() => setActiveMenu(2)}
                    className={`${activeMenu === 2 ? classesPanel.SideBarHistoryActive : classesPanel.SideBarHistory} ${classes.SidebarMenu}`}>
                    سوابق دوره ها
                    </Grid>
                <Grid component={Link} to="/student/questions" container item
                    onClick={() => setActiveMenu(3)}
                    className={`${activeMenu === 3 ? classesPanel.SideBarQuestionActive : classesPanel.SideBarQuestion} ${classes.SidebarMenu}`}>
                    پرسش و کامنت ها
                    </Grid>
                <Grid component={Link} to="/student/tickets" container item
                    onClick={() => setActiveMenu(4)}
                    className={`${activeMenu === 4 ? classesPanel.SideBarTicketActive : classesPanel.SideBarTicket} ${classes.SidebarMenu}`}>
                    تیکت ها
                    </Grid>
            </Grid>
        </>
    )
}
