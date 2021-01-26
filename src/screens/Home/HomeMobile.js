import { Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from '../../styles'
import SearchBox from '../../components/Header/SearchBox'
import BannerHomeMobileSlider from '../../components/BannerHomeMobileSlider/BannerHomeMobileSlider'


export default function HomeMobile() {
    const classes = useStyles()
    const [imgeBox, setImgeBox] = useState()
    useEffect(() => {
        let imgeBox = document.querySelector(".imgeBox")
        setImgeBox(imgeBox.offsetWidth)
    }, [])
    return (
        <Grid container className={classes.homeMobileContainer}>
            <Grid container justify="center" className={classes.homeMobileHeader}>
                <span>برنادل سایت آموزش آنلاین</span>
            </Grid>
            <Grid container justify="center" className={classes.SearchMobileContainer} >
                <SearchBox />
            </Grid>
            <Grid container className={classes.bannerTopMobile}>
                <BannerHomeMobileSlider />
            </Grid>
            <Grid container justify="center" className={classes.threeImageBox}>
                <Grid item xs={4} className={`${classes.homeMobileImageBox} imgeBox`}>
                    <Grid item container style={{ height: imgeBox * 1 }} className={classes.imageRectBoxMobile}></Grid>
                    <Grid container justify="center">
                        <Button variant="contained" className={classes.educationButtonMobile1} >
                            <Typography className={classes.SignInText}>ثبت نام</Typography>
                            <span className={classes.educationButtonMobileIcon}></span>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={4} className={`${classes.homeMobileImageBox} imgeBox`}>
                    <Grid item container style={{ height: imgeBox * 1 }} className={classes.imageRectBoxMobile}></Grid>
                    <Grid container justify="center">
                        <Button variant="contained" className={classes.educationButtonMobile2} >
                            <Typography className={classes.SignInText}>ثبت نام</Typography>
                            <span className={classes.educationButtonMobileIcon}></span>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={4} className={`${classes.homeMobileImageBox} imgeBox`}>
                    <Grid item container style={{ height: imgeBox * 1 }} className={classes.imageRectBoxMobile}></Grid>
                    <Grid container justify="center">
                        <Button variant="contained" className={classes.educationButtonMobile3} >
                            <Typography className={classes.SignInText}>ثبت نام</Typography>
                            <span className={classes.educationButtonMobileIcon}></span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
