import React, {useState, useEffect, useContext, useCallback} from 'react';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import {fetchPost} from "../../config/Utils";
import Apis from "../../constants/Api";
import {NewsContext} from "../../contexts/NewsContext";
import "../../hadi/style.css"
import {Link} from "react-router-dom";
import {convertToPersian} from "../../hadi/functions";
import NewsBox from "./NewsBox";
import moment from "jalali-moment";
import MobileNewsList from "./MobileNewsList";
import MobileArticlesList from "../MobileArticles/MobileArticlesList";



const NewsList = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    const [activeClass, setActiveClass] = useState(1);
    const [fixed, setFixed] = useState(false);

    const {
        setTeacher1, toDate, setData, data, setCheck,
        selectedTeacher, setItems, items, setIds, ids,
        state, fromDate, check, item
    } = useContext(NewsContext);



    const handlePage = page => setCurrent(page);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.pageYOffset + window.innerHeight - 110 === 1047 || window.pageYOffset + window.innerHeight - 110 > 1047) {
                setFixed(true)
            }
            if (window.pageYOffset + window.innerHeight - 110 < 1000) {
                setFixed(false)
            }
        })
    }, [])



    useEffect(() => {
        let body = {
            "news_ID": 0
        }
        fetchPost(Apis.GetAllNews + "?approveEnum=approve",body).then(({responseJSON, status}) => {
            setData(responseJSON.data)
            setItems(responseJSON.data)
        })
    },[setData, setItems]);



    const handleMostVisited = useCallback(() => {
        fetchPost(Apis.GetAllNewsWithSorting + "?sortTypeEnum=Mostvisited").then(({responseJSON, status}) => {
            setData(responseJSON.data)
        });
        setActiveClass(1)
    },[setData]);

    const handleNewest = useCallback(() => {
        fetchPost(Apis.GetAllNewsWithSorting + "?sortTypeEnum=Newest").then(({responseJSON, status}) => {
            setData(responseJSON.data)
        });
        setActiveClass(3)
    },[setData]);



    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    const isMobile = width < 960;


    return (
        <>
            {
                !isMobile ?
                    <Grid
                        container
                        item
                        justify="center"
                        className={classes.ArticlesContainer}
                    >
                        <Grid
                            item
                            className={classes.ArticlesContainerRight}
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
                                    <Typography className={classes.ArticleHeaderText}>تازه های خبری</Typography>
                                </Grid>
                                {
                                    items.map((item, index) => (
                                        <Link
                                            style={{color: "inherit"}}
                                            to={{
                                                pathname: `NewsDetail/${item.news_ID}/${item.news_title}`,
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
                                                        <Typography style={{color: "rgb(120,120,120)", fontSize: "14px", fontWeight: 700}}
                                                        >
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
                                        </Link>
                                    ))
                                }

                            </Grid>
                            <Grid style={{height: "100%", marginTop: 21}} container className={classes.NewsContainer}>
                                <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                                    <Typography className={classes.ArticleHeaderText}>اخبار موسسات و آموزشگاه ها</Typography>
                                </Grid>
                                {
                                    items.map((item, index) => (
                                        <Link
                                            style={{color: "inherit"}}
                                            to={{
                                                pathname: `NewsDetail/${item.news_ID}/${item.news_title}`,
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
                                                        <Typography style={{color: "rgb(190,190,190)", fontSize: "12px"}}
                                                        >
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
                                        </Link>
                                    ))
                                }

                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            className={classes.ArticlesContainerLeft}
                            xl={8} lg={8} md={8} sm={12} xs={12}
                        >
                            <Grid item className={classes.headBar}>
                                <Grid className={classes.sortIcon}/>
                                <Grid>مرتب سازی براساس:</Grid>
                                <Grid
                                    item
                                    onClick={handleMostVisited}
                                >
                                    <Typography
                                        className={
                                            activeClass === 1 ?
                                                classes.activeFilterHeaderLeft :
                                                classes.leftHeaderText
                                        }
                                    >
                                        پربازدیدترین
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    onClick={handleNewest}
                                >
                                    <Typography
                                        className={
                                            activeClass === 3 ?
                                                classes.activeFilterHeaderLeft :
                                                classes.leftHeaderText
                                        }
                                    >
                                        جدیدترین
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                style={{minHeight: "2708px"}}
                                item
                                className={classes.NewsContainer}
                                direction="column"
                            >
                                <NewsBox
                                    data={data}
                                />
                            </Grid>
                            <Grid className={`${classes.NewsContainer} ${classes.yellowBoxArticleList}`}/>
                            {/*<Grid className={classes.headBar}>*/}
                            {/*    <PaginateArticle*/}
                            {/*        itemsCount={20}*/}
                            {/*        pageSize={4}*/}
                            {/*        onPageChange={handlePage}*/}
                            {/*        current={current}*/}
                            {/*        setCurrent={setCurrent}*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                        </Grid>
                    </Grid> :
                    <MobileNewsList
                        handleMostVisited={handleMostVisited}
                        handleNewest={handleNewest}
                    />
            }
        </>
    )}


export default NewsList
