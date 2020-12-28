import React, {useState, useEffect} from 'react';
import {Grid, Typography} from "@material-ui/core";
import useStyles from "../../hadi";
import Button from "@material-ui/core/Button";
import ArticleBox from "./articleBox/ArticleBox";
import TeacherFilter from "../../components/Filters/TeacherFilter";
import DateArticle from "./dateArticle/DateArticle";
import TreeCheckbox from "../../components/Filters/TreeCheckbox/TreeCheckbox";
import PaginateArticle from "../../components/Pagination/PaginateArticle";
import MobileArticlesList from "../MobileArticles/MobileArticlesList";


const handleBtnStyle = {
    backgroundColor: "#2fc98e",
    width: "159px",
    height: "29px",
    color: "white"
}



const ArticlesList = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);

    const handlePage = page => {
        setCurrent(page)
    };

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
                        style={{marginTop: "25px", padding: "0"}}
                        item
                        justify="center"
                        className={classes.ArticlesNews}
                    >
                        <Grid item xs={3} className={classes.ArticleContainerBox}>
                            <TreeCheckbox />
                            <TeacherFilter />
                            <Grid item className={classes.groupFilter}>
                                <Grid item className={classes.groupFilterHeader} >
                                    <Typography className={classes.groupFilterHeaderText}>تاریخ مقاله</Typography>
                                </Grid>
                                <DateArticle />
                            </Grid>
                            <Grid container justify="center">
                                <Button style={handleBtnStyle}>اعمال فیلتر</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} container direction="column" style={{padding: "0 10px"}}>
                            <Grid item className={classes.headBar}>
                                <Grid className={classes.sortIcon}/>
                                <Grid>مرتب سازی براساس:</Grid>
                                <Button className={classes.btnHeadBar}>پربازدیدترین</Button>
                                <Button>جدیدترین</Button>
                            </Grid>
                            <Grid
                                container
                                style={{minHeight: "911px"}}
                                item className={classes.NewsContainer}
                                direction="column"
                            >
                                <ArticleBox />
                                <ArticleBox />
                                <ArticleBox />
                                <ArticleBox />
                            </Grid>
                            <Grid className={`${classes.NewsContainer} ${classes.yellowBoxArticleList}`}/>
                            <Grid className={classes.headBar}>
                                <PaginateArticle
                                    itemsCount={20}
                                    pageSize={4}
                                    onPageChange={handlePage}
                                    current={current}
                                    setCurrent={setCurrent}
                                />
                            </Grid>
                        </Grid>
                    </Grid> :
                    <MobileArticlesList />
            }
        </>
    );
};

export default ArticlesList;