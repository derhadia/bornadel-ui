import React, {useCallback, useEffect, useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";
import Apis from "../../constants/Api";
import {fetchPost} from "../../config/Utils";
import {convertToPersian} from "../../hadi/functions"
import {green} from "@material-ui/core/colors";
import moment from "jalali-moment";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function NewsDetail(props) {
    const classes = useStyles();
    const history = useHistory();
    const [items, setItems] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const data = props.location.state.data;
    const dataDetail = props.location.state.item;

    const url = Apis.Get_AllQuestion



    const img = Apis.SHOWIMAGE + (data ? data : dataDetail).news_PhotoLink;


    useEffect(() => {
        let body = {
            "news_ID": 0
        }
        fetchPost(Apis.GetAllNews + "?approveEnum=approve",body).then(({responseJSON, status}) => {
            setItems(responseJSON.data)
        })
    },[setItems]);

    const handleSendComment = useCallback(() => {
        const logIn = localStorage.getItem("token")
        if (comment.length > 10 && !logIn) {
            history.push("/login")
        }
    },[comment.length, history]);

    const handleChangeComment = event => {
        setComment(event.target.value)
    }

    return (
        <Grid
            container
            justify="space-between"
            className={classes.ArticlesContainer}
        >
            <Grid xl={8} lg={8} md={8} sm={12} xs={12}
                  className={classes.ArticlesContainerRight} container item >
                <Grid
                    item
                    container
                    className={classes.NewsContainer}
                    style={{height: "fit-content"}}
                >
                    <Grid style={{width: "100%"}} item md={12} className={classes.boxDetailProf}>
                        <Grid style={{padding: "0 15px"}}>
                            <Typography component="h3" variant="h3">
                                {(data ? data : dataDetail).news_Title}
                            </Typography>
                        </Grid>
                        <Grid style={{width: "100%"}} className={classes.boxDetailMobileSize}>
                            <Grid
                                item
                                className={classes.detailProf}
                            >
                                <img src={img} style={{width: "100%", height: "100%"}} alt=""/>
                            </Grid>
                            <Grid item>
                                <Typography component="h3" variant="h3">
                                    {(data ? data : dataDetail).fullName}
                                </Typography>
                            </Grid>
                            <Grid className={classes.dateBox} item>
                                <Grid item className={classes.articleDate}>
                                    <Typography className={classes.calendarIcon}>
                                        تاریخ انتشار : {
                                        convertToPersian(moment((data ? data : dataDetail).news_DateTime.substr(0,10), "DD-MM-YYYY").format("jYYYY/jMM/jDD"))
                                    }
                                    </Typography>
                                </Grid>
                                <Grid item className={`${classes.articleDate} ${classes.shareIconBig}`}/>
                            </Grid>
                            <Grid
                                className="description"
                                dangerouslySetInnerHTML={{__html: (data ? data : dataDetail).news_Des}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container className={classes.parentBoxComment}>
                    <Grid item xl={2} lg={2} md={2} sm={2} className={classes.parentYellowCircle}>
                        <div className={classes.circleArticle}/>
                    </Grid>
                    <Grid item xl={10} lg={10} md={10} sm={10} style={{width: "100%"}}>
                        <Grid>
                            <textarea
                                className={classes.areaMsg}
                                rows="10"
                                onChange={handleChangeComment}
                                value={comment}
                                maxLength="1000"
                            />
                        </Grid>
                        <Grid style={{width: "100%", textAlign: "center"}} item className="comment">
                            {/*<input className={classes.formControl} placeholder="نام و نام خانوادگی" type="text"/>*/}
                            {/*<input className={classes.formControl} placeholder="ایمیل" type="text"/>*/}
                            <ThemeProvider theme={theme}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.btnSendComment}
                                    style={{outline: "none", fontFamily: "yekan"}}
                                    onClick={handleSendComment}
                                >
                                    ارسال دیدگاه
                                </Button>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>دیدگاه ها</Typography>
                    </Grid>
                    {
                        comments.map((comment, index) => (
                            <Grid
                                key={index}
                                container
                                item
                                className={classes.NewsContainer}
                                style={{flexDirection: "row", minHeight: "unset"}}
                            >
                                <Grid container style={{flexDirection: "row", minHeight: "unset"}} >
                                    <Grid item md={1}>
                                        <div className={classes.cirTinyArticle}/>
                                    </Grid>
                                    <Grid md={11} item>
                                        <Typography component="h3" variant="h3">علیرضا سروستانی</Typography>
                                        <Typography
                                            style={{
                                                fontSize: "13.5px"
                                            }}
                                        >
                                            {comment.article_Summary}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justify="space-between">
                                    <Grid item md={3} style={{display: "flex", alignItems: "center"}}>
                                        <Typography className={`${classes.typoComment} ${classes.thumbUp}`}>{comment.question_Like}</Typography>
                                        <span className={classes.lineSpan}/>
                                        <Typography className={`${classes.typoComment} ${classes.thumbDown}`}>{comment.question_DisLike}</Typography>
                                    </Grid>
                                    <Grid item md={3} className={classes.viewAllComment}>
                                        <Typography className={`${classes.typoComment} ${classes.arrowDownIcon}`}>مشاهده همه دیدگاه ها</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        ))
                    }

                </Grid>
                <Grid container className={classes.redBoxArticle}/>
                {/*<Grid container style={{alignItems: "flex-start"}} className={classes.NewsContainer}>*/}
                {/*    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>*/}
                {/*        <Typography*/}
                {/*            className={classes.ArticleHeaderText}*/}
                {/*        >*/}
                {/*            ممکن است علاقه مند باشید*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}
                {/*    <Grid container>*/}
                {/*        <Grid item xs={2} style={{padding: "0 10px"}}>*/}
                {/*            <div className={classes.yellowBox}/>*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={10}>*/}
                {/*            <Grid>*/}
                {/*                <Typography component="h3" variant="h3">*/}
                {/*                    <Link style={{color: "inherit"}} to="/articleDetail">موج سوم کرونا چه تأثیری میتواند بر کشور داشته باشد؟ </Link>*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*            <Grid*/}
                {/*                container*/}
                {/*                direction="row"*/}
                {/*                className={classes.detailNews}*/}
                {/*            >*/}
                {/*                <Grid item style={{display: "flex", alignItems: "center"}}>*/}
                {/*                    <span className={classes.tinyCircle}/>*/}
                {/*                    <Typography className={classes.userStyle} >مصطفی کاظمی</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item>*/}
                {/*                    <Typography style={{color: "#dcdcdc", fontSize: "12px"}}>یکشنبه 26/6/1397</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item>*/}
                {/*                    <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*            <Grid>*/}
                {/*                <Typography style={{fontSize: "14.5px", color: "#646464"}}>*/}
                {/*                    دور از انتظار نیست که جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن دور از انتظار نیست که*/}
                {/*                    جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*            <Grid style={{display: "flex", justifyContent: "flex-end"}}>*/}
                {/*                <Typography*/}
                {/*                    className={classes.multiArrow}*/}
                {/*                >*/}
                {/*                    ادامه خبر*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*    <Divider style={{width :"100%", margin: "10px 0"}} variant="middle" />*/}
                {/*    <Grid container>*/}
                {/*        <Grid item xs={2} style={{padding: "0 10px"}}>*/}
                {/*            <div className={classes.yellowBox}/>*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={10}>*/}
                {/*            <Grid>*/}
                {/*                <Typography>*/}
                {/*                    <Link style={{color: "inherit"}} to="/articleDetail">موج سوم کرونا چه تأثیری میتواند بر کشور داشته باشد؟ </Link>*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*            <Grid*/}
                {/*                container*/}
                {/*                direction="row"*/}
                {/*                className={classes.detailNews}*/}
                {/*            >*/}
                {/*                <Grid item style={{display: "flex", alignItems: "center"}}>*/}
                {/*                    <span className={classes.tinyCircle}/>*/}
                {/*                    <Typography className={classes.userStyle} >مصطفی کاظمی</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item>*/}
                {/*                    <Typography style={{color: "#dcdcdc", fontSize: "12px"}}>یکشنبه 26/6/1397</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item>*/}
                {/*                    <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*            <Grid>*/}
                {/*                <Typography style={{fontSize: "14.5px", color: "#646464"}}>*/}
                {/*                    دور از انتظار نیست که جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن دور از انتظار نیست که*/}
                {/*                    جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*            <Grid style={{display: "flex", justifyContent: "flex-end"}}>*/}
                {/*                <Typography*/}
                {/*                    className={classes.multiArrow}*/}
                {/*                >*/}
                {/*                    ادامه خبر*/}
                {/*                </Typography>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Grid>
            <Grid
                style={{alignContent: "flex-start"}}
                container
                justify="flex-end"
                item
                className={classes.ArticlesContainerLeft}
                md={4}
                sm={12}
                xs={12}
                lg={4}
                xl={4}
            >
                <Grid
                    container
                    item justify="center"
                    className={classes.parentSideBox}
                >
                    <Grid style={{width: "100%"}} md={12} item>
                        <div className={classes.boxDetail}/>
                    </Grid>
                    <Grid style={{width: "100%"}} md={12} item>
                        <div className={classes.boxDetail}/>
                    </Grid>
                </Grid>
                <Grid style={{marginBottom: "21px"}} container className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>تازه های خبری</Typography>
                    </Grid>
                    {
                        items.map((item, index) => (
                            <Grid
                                style={{color: "inherit"}}
                                component={Link}
                                to={{
                                    pathname: `/NewsDetail/${item.news_ID}`,
                                    state: {item}
                                }}
                                key={index}
                            >
                                <Grid container>
                                    <Grid>
                                        <Typography component="h3" variant="h3">
                                            {item.news_Title}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        className={classes.detailNews}
                                    >
                                        <Grid item style={{display: "flex", alignItems: "center"}}>
                                            <Typography className={classes.userStyle} >{item.fullName}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{color: "rgb(120,120,120)", fontSize: "14px", fontWeight: 700}}>
                                                {
                                                    convertToPersian(moment((item.news_DateTime).substr(0,10), "DD-MM-YYYY").format("jYYYY/jMM/jDD"))
                                                }
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Typography style={{fontSize: "14.5px", color: "#646464"}}>
                                            {item.news_Summary}
                                        </Typography>
                                    </Grid>
                                    <Grid style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                                        <Typography
                                            className={classes.multiArrow}
                                        >
                                            ادامه خبر
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }

                </Grid>
                <Grid container className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>اخبار موسسات و آموزشگاه ها</Typography>
                    </Grid>
                    {
                        items.map((item, index) => (
                            <Grid
                                component={Link}
                                style={{color: "inherit"}}
                                to={{
                                    pathname: `/NewsDetail/${item.news_ID}`,
                                    state: {item}
                                }}
                                key={index}
                            >
                                <Grid container>
                                    <Grid>
                                        <Typography component="h3" variant="h3">
                                            {item.news_Title}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        className={classes.detailNews}
                                    >
                                        <Grid item style={{display: "flex", alignItems: "center"}}>
                                            <Typography className={classes.userStyle} >{item.fullName}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{color: "rgb(190,190,190)", fontSize: "12px"}}>
                                                {
                                                    convertToPersian(moment((item.news_DateTime).substr(0,10), "DD-MM-YYYY").format("jYYYY/jMM/jDD"))
                                                }
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Typography style={{fontSize: "14.5px", color: "#646464"}}>
                                            {item.news_Summary}
                                        </Typography>
                                    </Grid>
                                    <Grid style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                                        <Typography
                                            className={classes.multiArrow}
                                        >
                                            ادامه خبر
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }

                </Grid>
            </Grid>


        </Grid>
    )
}
