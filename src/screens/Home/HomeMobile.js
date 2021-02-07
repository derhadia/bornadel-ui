import { Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from '../../styles'
import SearchBox from '../../components/Header/SearchBox'
import BannerHomeMobileSlider from '../../components/BannerHomeMobileSlider/BannerHomeMobileSlider'
import SwiperCoverFlowAcademyMobile from "./SwiperCoverFlowAcademyMobile";
import SwiperCoverflow from "../PurchasingProcess/SwiperCoverflow";
import {fetchPost} from "../../config/Utils";
import Apis from "../../constants/Api";
import SwiperArticleMobile from "./SwiperArticleMobile";
import imgEdu from "../../assets/images/a3q.jpg";
import imgTeach from "../../assets/images/a2q.jpg";
import imgAcademy from "../../assets/images/a1q.jpg"
import {Link} from "react-router-dom";



export default function HomeMobile() {
    const classes = useStyles()
    const [similarItem, setSimilarItem] = useState([]);
    const [articles, setArticles] = useState([]);
    const [news, setNews] = useState([])



    useEffect(() => {
        fetchPost(Apis.GET_GetARTICLEHOMEPAG).then(({ responseJSON, status }) => {
            setArticles(responseJSON.data);
        })
    },[])

    useEffect(() => {
        fetchPost(Apis.GET_GetAllNEWHOMEPAFE).then(({ responseJSON, status }) => {
            setNews(responseJSON.data);
        })
    },[])

    useEffect(() => {
        fetchPost(Apis.Get_GetSimilarClassRooms + "?ClassRoomId=7").then(({ responseJSON, status }) => {
            if (status === 200) {
                setSimilarItem([responseJSON.data])
            }
        })
    },[]);

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
                <Grid item xs={4}>
                    <Grid className={classes.homeMobileImageBox} style={{backgroundImage: `url(${imgEdu})`, marginLeft: 3}}>
                        <Grid container justify="center">
                            <Link style={{display: "flex", justifyContent: "center"}} to="/register/Student">
                                <Button variant="contained" className={classes.educationButtonMobile1} >
                                    <Typography className={classes.SignInText}>ثبت نام</Typography>
                                    <span className={classes.educationButtonMobileIcon}/>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid className={classes.homeMobileImageBox} style={{backgroundImage: `url(${imgTeach})`, margin: "0 3px"}}>
                        <Grid container justify="center">
                            <Link style={{display: "flex", justifyContent: "center"}} to="/register/Teacher">
                                <Button variant="contained" className={classes.educationButtonMobile2} >
                                    <Typography className={classes.SignInText}>ثبت نام</Typography>
                                    <span className={classes.educationButtonMobileIcon}/>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid className={classes.homeMobileImageBox} style={{backgroundImage: `url(${imgAcademy})`, marginRight: 3}}>
                        <Grid container justify="center">
                            <Link style={{display: "flex", justifyContent: "center"}} to="/register/Academy">
                                <Button variant="contained" className={classes.educationButtonMobile3} >
                                    <Typography className={classes.SignInText}>ثبت نام</Typography>
                                    <span className={classes.educationButtonMobileIcon}/>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.academyPartMobile}>
                <Grid className={classes.titleAcademyMobile} s>آموزشگاه های برتر</Grid>
                <SwiperCoverFlowAcademyMobile />
            </Grid>
            <Grid container style={{padding: "10px 25px"}}>
                <Grid container style={{backgroundColor: "#ff0000", paddingBottom: 125, borderRadius: 8}}/>
            </Grid>
            <Grid container>
                <Grid className={classes.offersFailed}>
                    پیشنهادات ویژه
                </Grid>
                <Grid className="SwiperCoverflow homeMobile" container style={{padding: "0 15px", height: 309}}>
                    <SwiperCoverflow similarItem={similarItem} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid className={classes.offersFailed}>
                    بازدید های اخیر شما
                </Grid>
                <Grid className="SwiperCoverflow homeMobile" container style={{padding: "0 15px", height: 309}}>
                    <SwiperCoverflow similarItem={similarItem} />
                </Grid>
            </Grid>
            <Grid className="sliderArticle" container justify="center">
                <Grid style={{justifyContent: "center", marginTop: 50}} className={classes.titleAcademyMobile}>مقالات</Grid>
                <SwiperArticleMobile articles={articles}/>
            </Grid>
            <Grid className="sliderArticle" container justify="center" style={{marginBottom: 40}}>
                <Grid style={{justifyContent: "center", marginTop: 50}} className={classes.titleAcademyMobile}>اخبار</Grid>
                <SwiperArticleMobile articles={news}/>
            </Grid>
        </Grid>
    )
}
