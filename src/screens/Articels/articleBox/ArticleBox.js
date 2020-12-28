import React, {memo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import useStyles from "../../../hadi";
import Apis from "../../../constants/Api";
import {convertToPersian} from "../../../hadi/functions";


const ArticleBox = memo(({data}) => {
    const classes = useStyles();

    return (
        <>
            {
                data ? data.map((item, index) => (
                    <Link
                        style={{color: "inherit"}}
                        to={{
                            pathname: `ArticleDetail/${item.article_ID}`,
                            state: {item}
                        }}
                        key={index}
                    >
                        <Grid container className={classes.boxNewsMobile}>

                                <Grid item xs={2}>
                                    <img src={Apis.SHOWIMAGE + item.article_PhotoLink} alt="" className={classes.yellowBox}/>
                                </Grid>
                                <Grid item xs={10} className={classes.contentNewsMobile}>
                                    <Grid>
                                        <Typography component="h3" variant="h3">

                                                {item.article_Title}

                                        </Typography>
                                    </Grid>
                                    <Grid container direction="row" style={{padding: "0 5px"}} className={classes.detailNews}>
                                        <Grid item style={{display: "flex", alignItems: "center"}}>
                                            <img className={classes.tinyCircle} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                            <Typography className={classes.userStyle} >{item.teacher_FullName}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{color: "rgb(190, 190 ,190)", fontSize: "12px"}}>{convertToPersian(item.article_DateTime)}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                        <Typography style={{fontSize: "14px", color: "#646464"}}>
                                            {item.article_Summary}
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

export default ArticleBox
