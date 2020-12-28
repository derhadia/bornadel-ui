import React, { useContext,useEffect } from 'react'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import useStyles from '../../styles'
import { Grid } from '@material-ui/core'

export default function Navbar() {
    const classes = useStyles();

    let { setElement, linwWidth, underLinePlace, HandleHiddenMenu, HandleShowMenu, ShowCloseIcon,
        underLuneScale, HandelUndeiLineEnter, HandleUndeLineExit, SetSearchText, setShowSearchBox,
        ShowSearchBox, search, setSearch,
        searchData } = useContext(MasteLayoutContext)
    useEffect(() => {
        var line = document.getElementById("redUnderLuneMenu")
        setElement(line);
    }, [])

    return (
        <Grid container className={classes.headerNavbar}>
            <Grid container item xs={12} wrap="nowrap" className={classes.headerInsideNavbar}>
                <Grid item className={classes.redUnderLuneMenu} id="redUnderLuneMenu"
                    style={{ width: `${linwWidth}px`, left: `${underLinePlace}px`, transform: `scale(${underLuneScale})`, transition: "all 0.3s" }}></Grid>
                <Grid item className={`${classes.classList} ${classes.headerMenu}`}
                    onMouseEnter={(e) => {
                        HandleShowMenu()
                        HandelUndeiLineEnter(e)
                    }}
                    onMouseLeave={() => {
                        HandleHiddenMenu()
                        HandleUndeLineExit()
                    }}
                >
                    لیست کلاسها
                {/* <div style={{position:"absolute",width:"30px",height:25,backgroundColor:"#f00"}}></div> */}
                </Grid>
                <Grid item className={`${classes.articles} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >مقالات</Grid>
                <Grid item className={`${classes.news} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >اخبار</Grid>
                <Grid item className={`${classes.provision} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >قوانین سایت</Grid>
                <Grid item className={`${classes.commonQuestion} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >سوالات متداول</Grid>
                <Grid item className={`${classes.AboutUs} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={(e) => HandleUndeLineExit()}
                >درباره ما</Grid>
                <Grid item className={`${classes.contactUs} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >تماس باما</Grid>
            </Grid>
        </Grid>
    )
}
