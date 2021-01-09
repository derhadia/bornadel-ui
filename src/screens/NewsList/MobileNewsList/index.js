import React, {useContext, useState} from 'react';
import {Grid} from "@material-ui/core";
import useStyle from "../../../hadi";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {NewsContext} from "../../../contexts/NewsContext";
import SortPopup from "../../../components/SortPopup/SortPopup";
import NewsBox from "../NewsBox";
import {Link} from "react-router-dom";
import {convertToPersian} from "../../../hadi/functions";
import moment from "jalali-moment";



const MobileNewsList = ({handleMostVisited, handleNewest}) => {

    const [open, setOpen] = useState(false);
    const classes = useStyle();

    const {
        data, items, setIds, ids
    } = useContext(NewsContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Grid container style={{backgroundColor: "#fafafa"}}>
            <Grid className={classes.headFilterMobile}>
                <Button
                    className={`${classes.btnFilterMobile} ${classes.sortingIcon}`}
                    onClick={handleClickOpen}
                >
                    مرتب سازی
                </Button>
                <SortPopup
                    open={open}
                    onClose={handleClose}
                    handleNewest={handleNewest}
                    handleMostVisited={handleMostVisited}
                />
            </Grid>
            <Grid className={classes.routeFilter}>
                <Typography className={classes.arrowLeftIcon}>لیست کلاسها</Typography>
                <Typography className={classes.arrowLeftIcon}>کامپیوتر</Typography>
                <Typography className={classes.arrowLeftIcon}>برنامه نویسی</Typography>
                <Typography>آموزش PHP</Typography>
            </Grid>
            <Grid>
                <NewsBox
                    data={data}
                />
            </Grid>
            <Grid style={{padding: "10px", width: "100%"}}>
                <div className={classes.redBoxArticle}/>
            </Grid>
            <Grid container justify="center" style={{margin: 10}}>
                <div className="newsNew">تازه های خبر</div>
                <Grid style={{height: "100%"}} container className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>تازه های خبری</Typography>
                    </Grid>
                    {
                        data.map((item, index) => (
                            <Link
                                style={{color: "inherit"}}
                                to={{
                                    pathname: `ArticleDetail/${item.news_ID}`,
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
                <div className="newsNew">اخبار موسسات و آموزشگاه ها</div>
                <Grid style={{height: "100%", marginTop: 21}} container className={classes.NewsContainer}>
                    <Grid style={{borderBottom: "1px solid #b9b9b9", width: "100%"}}>
                        <Typography className={classes.ArticleHeaderText}>اخبار موسسات و آموزشگاه ها</Typography>
                    </Grid>
                    {
                        data.map((item, index) => (
                            <Link
                                style={{color: "inherit"}}
                                to={{
                                    pathname: `ArticleDetail/${item.news_ID}`,
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
        </Grid>
    );
};

export default MobileNewsList;
