import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import useStyle from "../../hadi";
import PurchaseSuccessMobile from "./PurchaseSuccessMobile";

const SuccessfulPurchase = () => {
    const classes = useStyle();
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    const isMobile = width < 960;

    return (
        <Grid container className={classes.ArticlesContainer}>
            <Grid
                className={classes.NewsContainer}
                style={{width: "100%", display: "flex", minHeight: "unset"}}
            >
                <p className={classes.successMsg}>پرداخت شما با موفقیت انجام شد . کدپیگیری : 56854</p>
            </Grid>
            <Grid style={{width: "100%", textAlign: "center", display: "flex"}}>
                <Grid className={classes.titleSuccess}>
                    دوره های ثبت نام شده
                </Grid>
            </Grid>

            {
                !isMobile ?
                    <>
                        <Grid
                            className={classes.NewsContainer}
                            style={{
                                width: "100%",
                                display: "flex",
                                minHeight: "183px",
                                flexDirection: "row",
                                marginBottom: 38
                            }}
                        >
                            <Grid style={{display: "flex"}} item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{justifyContent: "center", color: "#282828", fontSize: 22, display: "flex", alignItems: "center"}} item xl={6} lg={6} md={6}>
                                    Corel Draw X9
                                </Grid>
                                <Grid item xl={6} lg={6} md={6}>
                                    <Grid style={{top: "unset", backgroundColor: "cadetblue"}} className={classes.circleinRect2} />
                                </Grid>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{display: "flex", height: 35}}>
                                    <Grid className={classes.vectorIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        طراحی وکتور
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.teachSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        مدرس : امیرعباس میرعماد
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.timeSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        زمان شروع : 24/07/1399
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.hourSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        15:00  الی  16:30
                                    </Grid>
                                </Grid>

                                <Grid style={{display: "flex", alignItems: "flex-start"}}>
                                    <Grid className={classes.calenderSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242", display: "flex", flexWrap: "wrap"}} item xl={8} lg={8} md={8}>
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
                        <Grid
                            className={classes.NewsContainer}
                            style={{
                                width: "100%",
                                display: "flex",
                                minHeight: "183px",
                                flexDirection: "row",
                                marginBottom: 38
                            }}
                        >
                            <Grid style={{display: "flex"}} item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{justifyContent: "center", color: "#282828", fontSize: 22, display: "flex", alignItems: "center"}} item xl={6} lg={6} md={6}>
                                    Corel Draw X9
                                </Grid>
                                <Grid item xl={6} lg={6} md={6}>
                                    <Grid style={{top: "unset", backgroundColor: "cadetblue"}} className={classes.circleinRect2} />
                                </Grid>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{display: "flex", height: 35}}>
                                    <Grid className={classes.vectorIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        طراحی وکتور
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.teachSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        مدرس : امیرعباس میرعماد
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.timeSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        زمان شروع : 24/07/1399
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.hourSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        15:00  الی  16:30
                                    </Grid>
                                </Grid>

                                <Grid style={{display: "flex", alignItems: "flex-start"}}>
                                    <Grid className={classes.calenderSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242", display: "flex", flexWrap: "wrap"}} item xl={8} lg={8} md={8}>
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
                        <Grid
                            className={classes.NewsContainer}
                            style={{
                                width: "100%",
                                display: "flex",
                                minHeight: "183px",
                                flexDirection: "row",
                            }}
                        >
                            <Grid style={{display: "flex"}} item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{justifyContent: "center", color: "#282828", fontSize: 22, display: "flex", alignItems: "center"}} item xl={6} lg={6} md={6}>
                                    Corel Draw X9
                                </Grid>
                                <Grid item xl={6} lg={6} md={6}>
                                    <Grid style={{top: "unset", backgroundColor: "cadetblue"}} className={classes.circleinRect2} />
                                </Grid>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{display: "flex", height: 35}}>
                                    <Grid className={classes.vectorIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        طراحی وکتور
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.teachSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        مدرس : امیرعباس میرعماد
                                    </Grid>
                                </Grid>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.timeSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        زمان شروع : 24/07/1399
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Grid style={{display: "flex", alignItems: "center"}}>
                                    <Grid className={classes.hourSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                        15:00  الی  16:30
                                    </Grid>
                                </Grid>

                                <Grid style={{display: "flex", alignItems: "flex-start"}}>
                                    <Grid className={classes.calenderSuccessIcon} item xl={2} lg={2} md={2}/>
                                    <Grid style={{fontSize: 17, color: "#424242", display: "flex", flexWrap: "wrap"}} item xl={8} lg={8} md={8}>
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
                    </> :
                    <>
                        <PurchaseSuccessMobile />
                        <PurchaseSuccessMobile />
                        <PurchaseSuccessMobile />
                    </>
            }
        </Grid>
    )
}

export default SuccessfulPurchase;
