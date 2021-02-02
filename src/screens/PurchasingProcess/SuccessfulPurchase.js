import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import useStyle from "../../hadi";
import PurchaseSuccessMobile from "./PurchaseSuccessMobile";
import {convertToPersian} from "../../hadi/functions";
import Apis from "../../constants/Api"

const SuccessfulPurchase = () => {
    const classes = useStyle();
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

    const isMobile = width < 960;

    return (
        <Grid container className={classes.ArticlesContainer}>
            <Grid
                className={classes.NewsContainer}
                style={{width: "100%", display: "flex", minHeight: "unset"}}
            >
                <p style={{fontFamily: "IRANSansNUMNumber"}} className={classes.successMsg}>پرداخت شما با موفقیت انجام شد . کدپیگیری : {convertToPersian("56854")}</p>
            </Grid>
            <Grid style={{width: "100%", textAlign: "center", display: "flex"}}>
                <Grid className={classes.titleSuccess}>
                    دوره های ثبت نام شده
                </Grid>
            </Grid>

            {
                !isMobile ?
                    <>
                        {
                            oldItems.map((item, index) => (
                                <Grid
                                    className={classes.SuccessContainer}
                                    key={index}
                                    style={{
                                        minHeight: "183px",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Grid style={{display: "flex"}} item xl={4} lg={4} md={4} sm={12} xs={12}>
                                        <Grid className={classes.eduName} item xl={6} lg={6} md={6}>
                                            {item.educationSubject_Name}
                                        </Grid>
                                        <Grid item xl={6} lg={6} md={6}>
                                            <Grid style={{top: "unset"}} className={classes.circleinRect2}>
                                                <img style={{width: "100%", height: "100%"}} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                        <Grid style={{display: "flex", height: 35}}>
                                            <Grid className={classes.vectorIcon} item xl={2} lg={2} md={2}/>
                                            <Grid style={{fontSize: 17, color: "#424242", fontWeight: "bold"}} item xl={8} lg={8} md={8}>
                                                {item.classRoom_Subject}
                                            </Grid>
                                        </Grid>
                                        <Grid style={{display: "flex", alignItems: "center"}}>
                                            <Grid className={classes.teachSuccessIcon} item xl={2} lg={2} md={2}/>
                                            <Grid style={{fontSize: 15, color: "#424242"}} item xl={8} lg={8} md={8}>
                                                مدرس : {item.teacher_FullName}
                                            </Grid>
                                        </Grid>
                                        <Grid style={{display: "flex", alignItems: "center"}}>
                                            <Grid className={classes.timeSuccessIcon} item xl={2} lg={2} md={2}/>
                                            <Grid style={{fontSize: 15, color: "#424242", fontFamily: "IRANSansNUMNumber"}} item xl={8} lg={8} md={8}>
                                                زمان شروع : {convertToPersian(item.classRoom_DateTime)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                        <Grid style={{display: "flex", alignItems: "center"}}>
                                            <Grid className={classes.hourSuccessIcon} item xl={2} lg={2} md={2}/>
                                            <Grid style={{fontSize: 15, color: "#424242", fontFamily: "IRANSansNUMNumber"}} item xl={8} lg={8} md={8}>
                                                {convertToPersian(item.classRoom_StartTime)}  الی {convertToPersian(item.classRoom_EndTime)}
                                            </Grid>
                                        </Grid>

                                        <Grid style={{display: "flex", alignItems: "flex-start"}}>
                                            <Grid className={classes.calenderSuccessIcon} item xl={2} lg={2} md={2}/>
                                            <Grid className={classes.dailyDesktop} item xl={8} lg={8} md={8}>
                                                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>شنبه</Grid>
                                                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>یکشنبه</Grid>
                                                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>دوشنبه</Grid>
                                                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>سه شنبه</Grid>
                                                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>چهارشنبه</Grid>
                                                <Grid style={{fontSize: 15, color: "#424242"}} md={4}>پنجشنبه</Grid>
                                            </Grid>
                                        </Grid>


                                    </Grid>
                                </Grid>
                            ))
                        }


                    </> :
                    <>
                        <PurchaseSuccessMobile oldItems={oldItems} apis={Apis} />
                    </>
            }
        </Grid>
    )
}

export default SuccessfulPurchase;
