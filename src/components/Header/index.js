import React, { useContext, useEffect, useState } from 'react';
import { Grid, Button, Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from '../../styles'
import Menu from '../Menu'
import Drawer from '@material-ui/core/Drawer';
import Navbar from './Navbar';
import SearchBox from './SearchBox';
import DrawerInside from './DrawerInside'
import { CoursesContext } from '../../contexts/CoursesContext'
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const classes = useStyles();
    const { mobileOpen, setMobileOpen,DeleteFilter } = useContext(CoursesContext)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        const container = window !== undefined ? () => window().document.body : undefined;

    }, [])
    return (
        <>
            <Hidden smDown>
                <header className={classes.header} >
                    <Grid container className={classes.Insideheader}>
                        <Grid item container className={classes.headerTop}>
                            <Grid item container className={classes.InsideheaderTop}>
                                <Grid item container alignItems="center" className={classes.headerTopRight} xs={8}>
                                    <Grid item className={classes.Bornadellogo} component={Link} to="/" onClick={() => DeleteFilter()}>
                                    </Grid>
                                    <SearchBox />
                                </Grid>
                                <Grid item container className={classes.headerTopLeft} justify="flex-end" xs={4}>
                                    <Button component={Link} to="/login" variant="outlined" className={classes.loginButton}>
                                        <span className={classes.loginIcon}></span>
                                        <span className={classes.loginText1}>ورود</span>
                                        <span className={classes.verticalLineLogin}></span>
                                        <span className={classes.loginText2}>ثبت نام</span>
                                    </Button>
                                    <Button classes={{ outlined: classes.basketIconBtn }} variant="outlined">
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Navbar />
                        <Menu />
                    </Grid>
                </header>
            </Hidden>
            <Hidden mdUp>
                <Grid container justify="space-between" alignItems="center" className={classes.HeaderMobileSize}>
                    <Drawer
                        container={window.document.body}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <DrawerInside />
                    </Drawer>
                    <Grid container item xs={2}>
                        <MenuIcon onClick={() => setMobileOpen(true)} />
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <Grid item className={classes.MobileBornadellogo} component={Link} to="/" onClick={() => DeleteFilter()}></Grid>

                    </Grid>
                    <Grid container justify="flex-end" item xs={4} >
                        <Grid component={Link} to="/login" className={ classes.MobileLoginBtn } ></Grid>
                        <Grid className={ classes.MobileVerticalLine } ></Grid>
                        <Grid className={ classes.MobilebasketIconBtn } ></Grid>
                    </Grid>

                </Grid>
            </Hidden>
        </>
    )
}
