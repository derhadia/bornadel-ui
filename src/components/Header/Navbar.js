import React, { useContext,useEffect } from 'react'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import useStyles from '../../styles'
import { Grid } from '@material-ui/core'
import {Link} from "react-router-dom";

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
                >
                    <Link style={{color: "inherit"}} to="/ArticleList">
                        مقالات
                    </Link>
                </Grid>
                <Grid item className={`${classes.news} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >
                    <Link style={{color: "inherit"}} to="/NewsList">
                        اخبار
                    </Link>
                </Grid>
                <Grid item className={`${classes.provision} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >  
                 <Link style={{color: "inherit"}} to="/provision">
                    قوانین سایت 
                 </Link> 
                </Grid>
                
                <Grid item className={`${classes.commonQuestion} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >
                    <Link style={{color: "inherit"}} to="/commonquestion">
                    سوالات متداول  
                 </Link>  
                </Grid>
                <Grid item className={`${classes.AboutUs} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={(e) => HandleUndeLineExit()}
                >
                    <Link style={{color: "inherit"}} to="/About">
                        درباره ما
                    </Link>
                </Grid>
                <Grid item className={`${classes.contactUs} ${classes.headerMenu}`}
                    onMouseEnter={(e) => { HandelUndeiLineEnter(e) }}
                    onMouseLeave={() => HandleUndeLineExit()}
                >
                    <Link style={{color: "inherit"}} to="/ContactUs">
                        تماس باما
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}
