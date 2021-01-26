import React from 'react';
import {Grid} from "@material-ui/core";
import useStyle from "../../hadi";

const PurchaseSuccessMobile = () => {
    const classes = useStyle();
    return (
        <Grid
            className={classes.NewsContainer}
            style={{
                width: "100%",
                display: "flex",
                marginBottom: 38,
                minHeight: "unset"
            }}
        >
            <Grid style={{width: "100%", display: "flex"}}>
                <Grid item sm={8} xs={8}>
                    <Grid style={{fontSize: 17, color: "#282828", display: "flex", alignItems: "center"}} className={classes.vectorIcon}>طراحی وکتور</Grid>
                    <Grid className={classes.teachSuccessIcon}>مدرس : امیرعباس میرعماد</Grid>
                    <Grid className={classes.timeSuccessIcon}>زمان شروع : 24/07/1399</Grid>
                    <Grid className={classes.hourSuccessIcon}>15:00  الی  16:30</Grid>
                </Grid>
                <Grid item sm={4} xs={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Grid className={classes.titleSuccessPurchase} item xl={6} lg={6} md={6}>
                        Corel Draw X9
                    </Grid>
                    <Grid item xl={6} lg={6} md={6}>
                        <Grid style={{top: "unset", backgroundColor: "cadetblue"}} className={classes.circleinRect2} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{display: "flex", width: "100%", alignItems: "center", flexWrap: "wrap"}}>
                <Grid style={{fontSize: 15, color: "#424242", marginLeft: 10}} className={classes.calenderSuccessIcon} md={4}>شنبه</Grid>
                <Grid style={{fontSize: 15, color: "#424242", marginLeft: 10}} md={4}>یکشنبه</Grid>
                <Grid style={{fontSize: 15, color: "#424242", marginLeft: 10}} md={4}>دوشنبه</Grid>
                <Grid style={{fontSize: 15, color: "#424242", marginLeft: 10}} md={4}>سه شنبه</Grid>
                <Grid style={{fontSize: 15, color: "#424242", marginLeft: 10}} md={4}>چهارشنبه</Grid>
                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>پنجشنبه</Grid>
            </Grid>
        </Grid>
    );
};

export default PurchaseSuccessMobile;
