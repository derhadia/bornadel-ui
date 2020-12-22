import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import useStyles from "../../../hadi";


const ArticleBox = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.boxNewsMobile}>
            <Grid item xs={2}>
                <div className={classes.yellowBox}/>
            </Grid>
            <Grid item xs={10} className={classes.contentNewsMobile}>
                <Grid>
                    <Typography component="h3" variant="h3">
                        <Link style={{color: "inherit"}} to="/articleDetail">موج سوم کرونا چه تأثیری میتواند بر کشور داشته باشد؟ </Link>
                    </Typography>
                </Grid>
                <Grid container direction="row" style={{padding: "0 5px"}} className={classes.detailNews}>
                    <Grid item style={{display: "flex", alignItems: "center"}}>
                        <span className={classes.tinyCircle}/>
                        <Typography className={classes.userStyle} >مصطفی کاظمی</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: "#dcdcdc", fontSize: "12px"}}>14ساعت قبل</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.shareIcon}>اشتراک گذاری </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography style={{fontSize: "12px", color: "#646464"}}>
                        دور از انتظار نیست که جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن دور از انتظار نیست که
                        جو بایدن در انتخا  دور از انتظار نیست که جو بایدن در انتخاب دور از انتظار نیست که جو بایدن
                    </Typography>
                </Grid>
            </Grid>
            <Divider style={{width :"100%", margin: "10px 0"}} variant="middle" />
        </Grid>
    );
};

export default ArticleBox