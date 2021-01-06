import { Collapse, Grid, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext';
import useStyles from '../../styles'
import ClassListDrawer from './ClassListDrawer'
export default function DrawerInside() {
    const classes = useStyles();
    let { firstlayout, SecondLayer, filterSecondmenu, ThirdLayer, filterThirdmenu } = useContext(MasteLayoutContext)
    const [classListCollaps, setClassListCollaps] = useState(false)


    return (
        <Grid container className={classes.DrawerInsideContainer}>
            <Grid container item component={Link} to="/" className={classes.MobileBornadellogoContainer} >
                <Grid item className={classes.MobileBornadellogo2}  ></Grid>
            </Grid>
            <Grid container alignItems="center" item
                className={`${classes.MobileclassList} ${classes.MobileHeaderMenu}`}
                onClick={() => { setClassListCollaps(!classListCollaps) }}>
                <span>  لیست کلاسها</span>
                <span className={classListCollaps ? classes.MobilearrowUpMenuItem : classes.MobilearrowDownMenuItem}></span>
            </Grid>
            <Collapse in={classListCollaps}>
                <ClassListDrawer />
            </Collapse>
            <Grid container alignItems="center" item className={`${classes.Mobilearticles} ${classes.MobileHeaderMenu}`}>
                <Link style={{color: "inherit"}} to="/ArticleList">مقالات</Link>
            </Grid>
            <Grid container alignItems="center" item className={`${classes.Mobilenews} ${classes.MobileHeaderMenu}`}>
                <Link style={{color: "inherit"}} to="/NewsList">اخبار</Link>
            </Grid>
            <Grid container alignItems="center" item className={`${classes.Mobileprovision} ${classes.MobileHeaderMenu}`}>قوانین سایت</Grid>
            <Grid container alignItems="center" item className={`${classes.MobilecommonQuestion} ${classes.MobileHeaderMenu}`}>سوالات متداول</Grid>
            <Grid container alignItems="center" item className={`${classes.MobileAboutUs} ${classes.MobileHeaderMenu}`}>
                <Link style={{color: "inherit"}} to="/About">درباره ما</Link>
            </Grid>
            <Grid container alignItems="center" item className={`${classes.MobilecontactUs} ${classes.MobileHeaderMenu}`}>
                <Link style={{color: "inherit"}} to="ContactUs">تماس باما</Link>
            </Grid>
        </Grid >
    )
}
