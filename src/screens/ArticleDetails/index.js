import React, {useEffect, useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Draft from "./draft/Draft";
import Apis from "../../constants/Api";
import {fetchPost} from "../../config/Utils";
import {convertToPersian} from "../../hadi/functions"
import {green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

export default function ArticleDetail(props) {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    const data = props.location.state.data;
    const dataDetail = props.location.state.item;



    const img = Apis.SHOWIMAGE + (data ? data : dataDetail).article_PhotoLink;

    useEffect(() => {
        let body = {
            "teacher_ID_List": "",
            "educationSubject_ID": "",
            "date_From": "",
            "date_To": ""
        }
        fetchPost(Apis.Get_ArticleGetAllWithFilters + "?sortTypeEnum=1",body).then(({responseJSON, status}) => {
            setItems(responseJSON.data,'data')
        })
    },[])

    return (
        <Grid
            container
            justify="space-between"
            className={classes.ArticlesContainer}
        >
            <Grid xl={8} lg={8} md={8} sm={12} xs={12} className={classes.ArticlesContainerRight} container item >
                <Grid
                    item
                    container
                    className={classes.NewsContainer}
                    style={{height: "fit-content"}}
                >
                   <Grid item md={12} className={classes.boxDetailProf}>
                       <Grid style={{padding: "0 15px"}}>
                           <Typography component="h3" variant="h3">
                               {(data ? data : dataDetail).article_Title}
                           </Typography>
                       </Grid>
                       <Grid
                           item
                           className={classes.detailProf}
                           style={{
                               backgroundImage: `url(${img})`,
                               backgroundSize: "cover",
                               backgroundPosition: "center"
                           }}
                       >
                           <img
                               src={Apis.SHOWIMAGE + (data ? data : dataDetail).teacher_PhotoLink}
                               className={classes.circleinRect2}
                               alt=""
                           />
                       </Grid>
                       <Grid item>
                           <Typography component="h3" variant="h3">
                               {(data ? data : dataDetail).teacher_FullName}
                           </Typography>
                       </Grid>
                       <Grid className={classes.dateBox} item>
                           <Grid item className={classes.articleDate}>
                               <Typography className={classes.calendarIcon}>
                                   تاریخ انتشار : {convertToPersian((data ? data : dataDetail).article_DateTime)}
                               </Typography>
                           </Grid>
                           <Grid item className={`${classes.articleDate} ${classes.shareIconBig}`}/>
                       </Grid>
                       <Grid
                           className="description"
                           dangerouslySetInnerHTML={{__html: (data ? data : dataDetail).article_Des}}
                       />
                   </Grid>
                </Grid>
                <Grid item container className={classes.parentBoxComment}>
                    <Grid item md={2} className={classes.parentYellowCircle}>
                        <div className={classes.circleArticle}/>
                    </Grid>
                    <Grid item md={10} style={{width: "100%"}}>
                        <Draft />
                        <Grid md={4} item className="comment">
                            {/*<input className={classes.formControl} placeholder="نام و نام خانوادگی" type="text"/>*/}
                            {/*<input className={classes.formControl} placeholder="ایمیل" type="text"/>*/}
                            <ThemeProvider theme={theme}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.btnSendComment}
                                    style={{outline: "none", fontFamily: "yekan"}}
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
                    <Grid
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
                                    ویتالیک اگر 16 درصد از اتر ها را داشته باشد و فرضاً به شبکه حمله کنه بیشترین ضرر رو خودش میکنه
                                    ویتالیک اگر 16 درصد از اتر ها را داشته باشد و فرضاً به شبکه حمله کنه بیشترین ضرر رو خودش میکنه
                                    ویتالیک اگر 16 درصد از اتر ها را داشته باشد و فرضاً به شبکه حمله کنه بیشترین ضرر رو خودش میکنه
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="space-between">
                            <Grid item md={3} style={{display: "flex", alignItems: "center"}}>
                                <Typography className={`${classes.typoComment} ${classes.thumbUp}`}>25</Typography>
                                <span className={classes.lineSpan}/>
                                <Typography className={`${classes.typoComment} ${classes.thumbDown}`}>25</Typography>
                            </Grid>
                            <Grid item md={3} className={classes.viewAllComment}>
                                <Typography className={`${classes.typoComment} ${classes.arrowDownIcon}`}>مشاهده همه دیدگاه ها</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
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
                <Grid style={{height: "100%"}} container className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>آخرین مطالب</Typography>
                    </Grid>
                    {
                        items.map((item, index) => (
                            <Link
                                style={{color: "inherit"}}
                                to={{
                                    pathname: `ArticleDetail/${item.article_ID}`,
                                    state: {item}
                                }}
                                key={index}
                            >
                                <Grid container>
                                    <Grid>
                                        <Typography component="h3" variant="h3">
                                            {item.article_Title}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        className={classes.detailNews}
                                    >
                                        <Grid item style={{display: "flex", alignItems: "center"}}>
                                            <img className={classes.tinyCircle} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                            <Typography className={classes.userStyle} >{item.teacher_FullName}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{color: "rgb(190,190,190)", fontSize: "12px"}}>{convertToPersian((item.article_DateTime).substr(0,10))}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Typography style={{fontSize: "14.5px", color: "#646464"}}>
                                            {item.article_Summary}
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
                            </Link>
                        ))
                    }

                </Grid>
            </Grid>


        </Grid>
    )
}
