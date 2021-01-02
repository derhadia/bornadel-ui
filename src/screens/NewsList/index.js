import React, {useState, useEffect, useContext, useCallback} from 'react';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import ArticleBox from "../Articels/articleBox/ArticleBox";
import {fetchPost} from "../../config/Utils";
import Apis from "../../constants/Api";
import {NewsContext} from "../../contexts/NewsContext";
import "../../hadi/style.css"
import {Link} from "react-router-dom";
import {convertToPersian} from "../../hadi/functions";



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
            "teacher_ID_List": "",
            "educationSubject_ID": "",
            "date_From": "",
            "date_To": ""
        }
        fetchPost(Apis.Get_ArticleGetAllWithFilters + `?sortTypeEnum=${1}`,body).then(({responseJSON, status}) => {
            setData(responseJSON.data)
        })
    },[setData]);



    const handleMostVisited = useCallback(() => {
        let body = {
            "teacher_ID_List": "",
            "educationSubject_ID": "",
            "date_From": "",
            "date_To": ""
        }
        fetchPost(Apis.Get_ArticleGetAllWithFilters + `?sortTypeEnum=${1}`,body).then(({responseJSON, status}) => {
            setData(responseJSON.data)
        });
        setActiveClass(1)
    },[setData]);

    const handleNewest = useCallback(() => {
        let body = {
            "teacher_ID_List": "",
            "educationSubject_ID": "",
            "date_From": "",
            "date_To": ""
        }
        fetchPost(Apis.Get_ArticleGetAllWithFilters + `?sortTypeEnum=${3}`,body).then(({responseJSON, status}) => {
            setData(responseJSON.data)
        });
        setActiveClass(3)
    },[setData]);



    const handleFiltering = useCallback(() => {
        let body = {
            "teacher_ID_List": selectedTeacher ? selectedTeacher.toString().replaceAll(",", ";") : "",
            "educationSubject_ID": ids ? [...ids].toString().replaceAll(",", ";") : "",
            "date_From": item.fromDateFormatted ? item.fromDateFormatted : "",
            "date_To": state.toDateFormatted ? state.toDateFormatted : ""
        }
        fetchPost(Apis.Get_ArticleGetAllWithFilters + `?sortTypeEnum=${activeClass}`,body)
            .then(({responseJSON, status}) => {
                setData(responseJSON.data)
            });
    },[activeClass, ids, item.fromDateFormatted, selectedTeacher, setData, state.toDateFormatted])

    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    useEffect(() => {
        let body = {
            "record_ID":0,
            "record_Name":"",
            "record_Type":0
        }
        fetchPost(Apis.Get_GetAllInClassRoomList, body)
            .then(({responseJSON, status}) => setItems(responseJSON.data))
    },[setItems])

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
                        <Grid item className={classes.ArticlesContainerRight}>

                        </Grid>
                        <Grid item container direction="column" className={classes.ArticlesContainerLeft}>
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
                                style={{minHeight: "911px"}}
                                item className={classes.NewsContainer}
                                direction="column"
                            >
                                <ArticleBox
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
                    ""
            }
        </>
    )}


export default NewsList
