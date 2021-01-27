import React from 'react';
import {Grid} from "@material-ui/core";
import useStyle from "../../hadi";

const PurchaseSuccessMobile = ({oldItems, apis}) => {
    const classes = useStyle();
    return (
        <>
            {
                oldItems.map((item, index) => (
                    <Grid
                        key={index}
                        className={classes.SuccessContainer}
                    >
                        <Grid style={{width: "100%", display: "flex"}}>
                            <Grid item sm={8} xs={8}>
                                <Grid className={classes.vectorIconMobile}>{item.classRoom_Subject}</Grid>
                                <Grid className={classes.teachSuccessIcon}>مدرس : {item.teacher_FullName}</Grid>
                                <Grid className={classes.timeSuccessIcon}>زمان شروع : {item.classRoom_DateTime}</Grid>
                                <Grid className={classes.hourSuccessIcon}>{item.classRoom_StartTime}  الی {item.classRoom_EndTime}</Grid>
                            </Grid>
                            <Grid item sm={4} xs={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <Grid className={classes.titleSuccessPurchase} item xl={6} lg={6} md={6}>
                                    {item.educationSubject_Name}
                                </Grid>
                                <Grid item xl={6} lg={6} md={6}>
                                    <Grid style={{top: "unset"}} className={classes.circleinRect2}>
                                        <img style={{width: "100%", height: "100%"}} src={apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.dailyMobile}>
                            <Grid style={{fontSize: 13, color: "#424242"}} className={classes.calenderSuccessIcon} md={4}>شنبه</Grid>
                            <Grid className={classes.dailyPartMobile} md={4}>یکشنبه</Grid>
                            <Grid className={classes.dailyPartMobile} md={4}>دوشنبه</Grid>
                            <Grid className={classes.dailyPartMobile} md={4}>سه شنبه</Grid>
                            <Grid className={classes.dailyPartMobile} md={4}>چهارشنبه</Grid>
                            <Grid className={classes.dailyPartMobile} style={{marginLeft: "unset"}} md={4}>پنجشنبه</Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </>

    );
};

export default PurchaseSuccessMobile;
