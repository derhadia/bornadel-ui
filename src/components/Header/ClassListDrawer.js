import { Collapse, Grid, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CoursesContext } from '../../contexts/CoursesContext';
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext';
import useStyles from '../../styles'

export default function DrawerInside() {
    const classes = useStyles();
    let { firstlayout, SecondLayer, filterSecondmenu, ThirdLayer, filterThirdmenu } = useContext(MasteLayoutContext)
    let { mobileOpen, setMobileOpen } = useContext(CoursesContext)
    const [activeFirstCollapse, setActiveFirstCollapse] = useState(-1)
    const [activeSecondCollapse, setActiveSecondCollapse] = useState(-1)

    let handleFirstCollapse = (id) => {
        if (activeFirstCollapse === id) {
            setActiveFirstCollapse(-1)
            return
        }
        setActiveFirstCollapse(id)
    }


    let handleSecondCollapse = (id) => {
        if (activeSecondCollapse === id) {
            setActiveSecondCollapse(-1)
            return
        }
        setActiveSecondCollapse(id)
    }
    return (
        <Grid container className={classes.DrawerInsideContainer}>
            {
                firstlayout && firstlayout.map((item, index) => {
                    return (
                        <>
                            <Grid
                                key={index}
                                container
                                item
                                justify="flex-start"
                                alignItems="center"
                                className={classes.MobileMenuItem}
                                onClick={() => {
                                    SecondLayer(item.educationSubject_ID)
                                    handleFirstCollapse(index)
                                    handleSecondCollapse(-1)
                                }}
                            >
                                <img className={classes.MenuItemLogo} src={item.educationSubject_IconeLink} />
                                <Typography className={classes.MobileMenuItemText}>{item.educationSubject_Name}</Typography>
                                <span className={activeFirstCollapse === index ? classes.MobilearrowUpMenuItem : classes.MobilearrowDownMenuItem}></span>
                            </Grid>
                            <Collapse in={activeFirstCollapse === index} className={classes.backgroundCollapse}>
                                <Grid container justify="flex-start" alignItems="center" onClick={() => setMobileOpen(false)}>
                                    <Typography component={Link} to={`/Courses/${item.educationSubject_ID}`} className={classes.MobileMenuItemText}>
                                        همه موارد این دسته
                                    </Typography>
                                    <span className={classes.MobilearrowMenuItem}></span>
                                </Grid>
                                {
                                    filterSecondmenu && filterSecondmenu.map((fm, index) => {
                                        return (
                                            <>
                                                <Grid container alignItems="center"
                                                    key={index}
                                                    onClick={() => {
                                                        ThirdLayer(fm.educationSubject_ID)
                                                        handleSecondCollapse(index)
                                                    }}
                                                >
                                                    <Typography className={classes.MobileMenuItemText}>{fm.educationSubject_Name}</Typography>
                                                    <span className={activeSecondCollapse === index ? classes.MobilearrowUpMenuItem : classes.MobilearrowDownMenuItem}></span>
                                                </Grid>
                                                <Collapse in={activeSecondCollapse === index}>
                                                    <Grid container justify="flex-start" alignItems="center" onClick={() => setMobileOpen(false)}>
                                                        <Typography component={Link} to={`/Courses/${fm.educationSubject_ID}`} className={classes.MobileMenuItemText}>
                                                            همه موارد این دسته
                                                        </Typography>
                                                        <span className={classes.MobilearrowMenuItem}></span>
                                                    </Grid>
                                                    {
                                                        filterThirdmenu && filterThirdmenu.map((tm, index) => {
                                                            return (
                                                                <Grid item className={classes.MobilethirdLayercontainer} key={index}
                                                                    component={Link} to={`/Courses/${tm.educationSubject_ID}`}
                                                                    onClick={() => { setMobileOpen(false) }}
                                                                >
                                                                    <Typography className={classes.MobileMenuItemText2}>{tm.educationSubject_Name}</Typography>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                    <Grid container className={classes.horizantalLine} ></Grid>
                                                </Collapse>
                                            </>
                                        )
                                    })
                                }
                            </Collapse>
                        </>
                    )
                })
            }
        </Grid>
    )
}
