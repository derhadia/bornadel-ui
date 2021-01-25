import React from 'react';
import {Button, Grid} from "@material-ui/core";
import useStyle from "../../../hadi";
import Apis from "../../../constants/Api";
import {convertToPersian} from "../../../hadi/functions";
import {Link} from "react-router-dom";

const CartMobileSize = ({state, discount, price, removeItem}) => {
    const classes = useStyle();


    return (
        <Grid
            container
            justify="space-between"
            className={classes.ArticlesContainer}
        >
            <Grid style={{display: "flex", justifyContent: "center", alignItems: "center", height: 23, marginBottom: 48}}>
                <Button style={{width: 125, height: 40, backgroundColor: "#555555", color: "white", borderRadius: 11.5, display: "flex", alignItems: "center"}}>
                    سبد خرید
                    <span className={classes.cartIcon}/>
                </Button>
            </Grid>
            <Grid container style={{padding: "18px 19px 35px 19px", backgroundColor: "white", borderRadius: 14}}>
                {
                    state.map((item, index) => (
                        <Grid key={index} style={{display: "flex", width: "100%", borderBottom: "2px solid #ccc", marginBottom: "20"}}>
                                <Grid item sm={4} xs={4} style={{marginBottom: 20}}>
                                    <Grid style={{maxWidth: "100%", justifyContent: "center", color: "#282828", fontSize: 12, display: "flex", alignItems: "center"}} item xl={6} lg={6} md={6}>
                                        {item.classRoom_Subject}
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <Grid style={{top: "unset"}} className={classes.circleinRect2}>
                                            <img style={{width: "100%", height: "100%"}} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={8} xs={8} style={{marginBottom: 20}}>
                                    <Grid style={{display: "flex", height: 35}}>
                                        <Grid className={classes.vectorIcon} item xs={2} sm={2}/>
                                        <Grid style={{fontSize: 12, color: "#424242", display: "flex", justifyContent: "space-between", alignItems: "center"}} item xs={10} sm={10}>
                                            <Grid item style={{fontSize: 12, color: "#424242", display: "flex", justifyContent: "space-between", alignItems: "center"}} sm={7} xs={7}>
                                                {item.educationSubject_Name}
                                            </Grid>
                                            <Grid onClick={() => removeItem(item.classRoom_ID)} item sm={5} xs={5} style={{display: "flex", alignItems: "center", color: "#1dc3f1"}}>
                                                حذف
                                                <span className={classes.trashIconBlue}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid style={{display: "flex", alignItems: "center"}}>
                                        <Grid className={classes.teachSuccessIcon} item xs={2} sm={2}/>
                                        <Grid style={{fontSize: 13, color: "#424242"}} item xs={10} sm={10}>
                                            مدرس : {item.teacher_FullName}
                                        </Grid>
                                    </Grid>
                                    <Grid style={{display: "flex", alignItems: "center"}}>
                                        <Grid className={classes.timeSuccessIcon} item xs={2} sm={2} />
                                        <Grid style={{fontSize: 13, color: "#424242"}} item xs={10} sm={10} >
                                            زمان شروع : {convertToPersian(item.classRoom_DateTime)}
                                        </Grid>
                                    </Grid>
                                    <Grid style={{display: "flex", alignItems: "center"}}>
                                        <Grid className={classes.priceIcon} item xs={2} sm={2} />
                                        <Grid style={{color: "#282828", fontSize: 18, fontWeight: "bold", marginLeft: 20}}>
                                            {convertToPersian(item.classRoom_Price.toString())} تومان
                                        </Grid>
                                        <Grid style={{color: "#ff4242", fontSize: 13.5, fontWeight: "bold"}}>
                                            تخفیف {item.classRoom_Discount} تومان
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                    ))
                }

            </Grid>
            <Grid container style={{padding: "18px 19px 35px 19px", backgroundColor: "white", borderRadius: 14, marginTop: 37}}>
                <Grid style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>قیمت دوره ها ({state ? convertToPersian(state.length.toString()) : "۰"})</Grid>
                    <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>{price ? convertToPersian(price.toString()) : ""}</Grid>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "space-between", width: "100%", margin: "10px 0"}}>
                    <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>تخفیف کالا ها</Grid>
                    <Grid style={{color: "#ff4242", fontSize: 13.5, fontWeight: "bold"}}>{discount ? convertToPersian(discount.toString()) : "۰"} تومان</Grid>
                </Grid>
            </Grid>
            <Grid style={{position: "fixed", marginRight: 20, bottom: 0, backgroundColor: "white", width: "100%", display: "flex", right: 0, alignItems: "center"}}>
                <Link to="/SuccessfulPurchase" style={{backgroundColor: "#ff2626", color: "white", width: "40%", borderRadius: 8, fontSize: 17, height: 50, textAlign: "center", lineHeight: "50px", right: 0}}>ادامه فرایند خرید</Link>
                <Grid style={{display: "flex", width: "100%", marginBottom: 10, flexDirection: "column", alignItems: "center"}}>
                    <Grid style={{color: "#4c4c4c", fontSize: 13.5, fontWeight: "bold"}}>جمع سبد خرید</Grid>
                    <Grid style={{color: "#4c4c4c", fontSize: 13.5, fontWeight: "bold"}}>{price ? convertToPersian(price.toString()) : ""} تومان</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CartMobileSize;
