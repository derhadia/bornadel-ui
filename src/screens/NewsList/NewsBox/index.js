import React, {memo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import useStyles from "../../../hadi";
import Apis from "../../../constants/Api";
import {convertToPersian} from "../../../hadi/functions";
import moment from "jalali-moment"


const NewsBox = memo(({data}) => {
    const classes = useStyles();

    return (
        <>
            {
                data ? data.map((item, index) => (
                    <Link
                        style={{color: "inherit", width: "100%"}}
                        to={{
                            pathname: `/NewsDetail/${item.news_ID}`,
                            state: {item}
                        }}
                        key={index}
                    >
                        <Grid container className={classes.boxNewsMobile}>

                            <Grid item xs={2}>
                                <img src={Apis.SHOWIMAGE + item.news_PhotoLink} alt="" className={classes.yellowBox}/>
                            </Grid>
                            <Grid item xs={10} className={classes.contentNewsMobile}>
                                <Grid>
                                    <Typography component="h3" variant="h3">

                                        {item.news_Title}

                                    </Typography>
                                </Grid>
                                <Grid container direction="row" style={{padding: "0 5px"}} className={classes.detailNews}>
                                    <Grid item style={{display: "flex", alignItems: "center"}}>
                                        <Typography className={classes.userStyle} >{item.fullName}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            style={{color: "rgb(190, 190 ,190)", fontSize: "12px"}}
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
                                    <Typography style={{fontSize: "14px", color: "#646464"}}>
                                        {item.news_Summary}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Divider style={{width :"100%", margin: "10px 0"}} variant="middle" />
                        </Grid>
                    </Link>
                )) : ""
            }
        </>

    );
});

export default NewsBox
