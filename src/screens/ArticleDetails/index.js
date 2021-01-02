import React, {useContext, useEffect, useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Draft from "./draft/Draft";
import Apis from "../../constants/Api";
import {fetchPost} from "../../config/Utils";

//
// const MyBlock = (props) => {
//     return (
//         <div style={{
//             padding: 10,
//             backgroundColor: "#ebebeb"
//         }}>
//             My Block content is:
//             {props.children}
//         </div>
//     )
// }


export default function ArticleDetail(props) {
    const classes = useStyles();
    const [items, setItems] = useState([])


    const data = props.location.state.data;
    const dataDetail = props.location.state.item;

    console.log(dataDetail,'detail')
    console.log(data,'data')

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
            className={classes.ArticlesNews}
        >
            <Grid style={{padding: "0 15px"}} container item md={7}>
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
                                   تاریخ انتشار : {(data ? data : dataDetail).article_DateTime}
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
                <Grid item container style={{marginTop: "37px", alignItems: "center"}}>
                    <Grid item md={2} style={{display: "flex", justifyContent: "center"}}>
                        <div className={classes.circleArticle}/>
                    </Grid>
                    <Grid item md={10}>
                        <Draft />
                        <Grid md={4} item >
                            <input className={classes.formControl} placeholder="نام و نام خانوادگی" type="text"/>
                            <input className={classes.formControl} placeholder="ایمیل" type="text"/>
                            <Button className={classes.btnSendComment}>
                                ارسال دیدگاه
                            </Button>
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
                <Grid container style={{alignItems: "flex-start"}} className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography
                            className={classes.ArticleHeaderText}
                        >
                            ممکن است علاقه مند باشید
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} style={{padding: "0 10px"}}>
                            <div className={classes.yellowBox}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid>
                                <Typography component="h3" variant="h3">
                                    <Link style={{color: "inherit"}} to="/articleDetail">موج سوم کرونا چه تأثیری میتواند بر کشور داشته باشد؟ </Link>
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                className={classes.detailNews}
                            >
                                <Grid item style={{display: "flex", alignItems: "center"}}>
                                    <span className={classes.tinyCircle}/>
                                    <Typography className={classes.userStyle} >مصطفی کاظمی</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color: "#dcdcdc", fontSize: "12px"}}>یکشنبه 26/6/1397</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Typography style={{fontSize: "14.5px", color: "#646464"}}>
                                    دور از انتظار نیست که جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن دور از انتظار نیست که
                                    جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن
                                </Typography>
                            </Grid>
                            <Grid style={{display: "flex", justifyContent: "flex-end"}}>
                                <Typography
                                    className={classes.multiArrow}
                                >
                                    ادامه خبر
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider style={{width :"100%", margin: "10px 0"}} variant="middle" />
                    <Grid container>
                        <Grid item xs={2} style={{padding: "0 10px"}}>
                            <div className={classes.yellowBox}/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid>
                                <Typography>
                                    <Link style={{color: "inherit"}} to="/articleDetail">موج سوم کرونا چه تأثیری میتواند بر کشور داشته باشد؟ </Link>
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                direction="row"
                                className={classes.detailNews}
                            >
                                <Grid item style={{display: "flex", alignItems: "center"}}>
                                    <span className={classes.tinyCircle}/>
                                    <Typography className={classes.userStyle} >مصطفی کاظمی</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{color: "#dcdcdc", fontSize: "12px"}}>یکشنبه 26/6/1397</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                                </Grid>
                            </Grid>
                            <Grid>
                                <Typography style={{fontSize: "14.5px", color: "#646464"}}>
                                    دور از انتظار نیست که جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن دور از انتظار نیست که
                                    جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن
                                </Typography>
                            </Grid>
                            <Grid style={{display: "flex", justifyContent: "flex-end"}}>
                                <Typography
                                    className={classes.multiArrow}
                                >
                                    ادامه خبر
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                style={{alignContent: "space-between", padding: "0 15px"}}
                container
                justify="flex-end"
                item
                md={5}
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
                <Grid style={{height: "1576px"}} container className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>آخرین مطالب</Typography>
                    </Grid>
                    {
                        items.map((item, index) => (
                            <Grid key={index} container>
                                <Grid>
                                    <Typography component="h3" variant="h3">
                                        <Link
                                            style={{color: "inherit"}}
                                            to={{
                                                pathname: `ArticleDetail/${item.article_ID}`,
                                                state: {item}
                                            }}
                                        >
                                            {item.article_Title}
                                        </Link>
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
                                        <Typography style={{color: "#dcdcdc", fontSize: "12px"}}>{item.article_DateTime}</Typography>
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
                        ))
                    }

                </Grid>
            </Grid>


        </Grid>
    )
}
