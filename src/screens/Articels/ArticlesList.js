import React, {useState, useEffect, useContext, useCallback} from 'react';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import Button from "@material-ui/core/Button";
import ArticleBox from "./articleBox/ArticleBox";
import ArticleTeacherFilter from "../../components/Filters/ArtcileTeacherFilter";
import MobileArticlesList from "../MobileArticles/MobileArticlesList";
import {fetchPost} from "../../config/Utils";
import Apis from "../../constants/Api";
import {ArticlesContext} from "../../contexts/ArticlesContext";
import TreeLevel from "../../components/Filters/TreeCheckbox/TreeLevel";
import DatePicker from "./DatePicker/DatePicker";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import "../../hadi/style.css"
import animateScrollTo from "animated-scroll-to";


const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});


const ArticlesList = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    const [activeClass, setActiveClass] = useState(1);
    const [fixed, setFixed] = useState(false);

    const {
        setTeacher1, toDate, setData, data, setCheck,
        selectedTeacher, setItems, items, setIds, ids,
        state, fromDate, check, item
    } = useContext(ArticlesContext);



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


        let Options = {
            speed: 100,
            maxDuration: 3000,
            minDuration: 2000,

        }
        animateScrollTo(0, Options);
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
                            {/*<ControlledTreeView items={items}/>*/}
                            <TreeLevel
                                items={items}
                                setIds={setIds}
                                ids={ids}
                                setCheck={setCheck}
                                check={check}
                            />
                            {/*<TreeCheckbox items={items} />*/}
                            <ArticleTeacherFilter />
                            <Grid item style={{height: "unset"}} className={classes.groupFilter}>
                                <Grid item className={classes.groupFilterHeader} >
                                    <Typography className={classes.groupFilterHeaderText}>تاریخ مقاله</Typography>
                                </Grid>
                                <DatePicker />
                            </Grid>
                            <Grid
                                container
                                item
                                justify="center"
                                className={classes.filterButtonContainer}
                                style={{ position: fixed ? "static" : "sticky", top: "auto", bottom: 15 }}
                            >
                                <ThemeProvider theme={theme}>
                                    <Button
                                        className={classes.filterButton}
                                        variant="contained"
                                        color="primary"
                                        onClick={handleFiltering}
                                        style={{outline: "none", fontFamily: "yekan"}}
                                    >
                                        اعمال فیلتر
                                    </Button>
                                </ThemeProvider>
                            </Grid>
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
                    <MobileArticlesList
                        handleFiltering={handleFiltering}
                        handleMostVisited={handleMostVisited}
                        handleNewest={handleNewest}
                    />
            }
        </>
    )}


export default ArticlesList
