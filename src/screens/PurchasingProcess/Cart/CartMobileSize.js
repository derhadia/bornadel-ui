import React from 'react';
import {Button, Grid} from "@material-ui/core";
import useStyle from "../../../hadi";
import Apis from "../../../constants/Api";
import {convertToPersian, separate} from "../../../hadi/functions";
import {Link} from "react-router-dom";
import SwiperCoverflow from "../SwiperCoverflow";

const CartMobileSize = ({state, discount, price, removeItem, similarItem}) => {
    const classes = useStyle();

    const calculatePrice = price - discount

    return (
        <Grid
            container
            justify="space-between"
            className={classes.ArticlesContainer}
        >
            <Grid className={classes.cartBtnMobileTop}>
                <Button className={classes.btnMobileTop}>
                    سبد خرید
                    <span className={classes.cartIcon}/>
                </Button>
            </Grid>
            <Grid container className={classes.parentCartMobile}>
                {
                    state.map((item, index) => (
                        <Grid key={index} className={classes.itemCartMobile}>
                                <Grid item sm={3} xs={3} className={classes.rightSideCartMobile}>
                                    <Grid className={classes.subjectMobileCart} item xl={6} lg={6} md={6}>
                                        {item.classRoom_Subject}
                                    </Grid>
                                    <Grid item xs={6} sm={6} style={{display: "flex", justifyContent: "center", maxWidth: "100%"}}>
                                        <Grid style={{top: "unset"}} className={classes.circleinRect2}>
                                            <img style={{width: "100%", height: "100%"}} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={9} xs={9} style={{marginBottom: 20}}>
                                    <Grid style={{display: "flex", height: 35}}>
                                        <Grid className={classes.vectorIcon} item xs={2} sm={2}/>
                                        <Grid style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} item xs={10} sm={10}>
                                            <Grid item className={classes.eduSubjectMobile} sm={7} xs={7}>
                                                {item.educationSubject_Name}
                                            </Grid>
                                            <Grid onClick={() => removeItem(item.classRoom_ID)} item sm={5} xs={5} className={classes.deleteCartMobile}>
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
                                        <Grid style={{color: "#282828", fontSize: 14, fontWeight: "bold", marginLeft: 20}}>
                                            {convertToPersian(separate(item.classRoom_Price.toString()))} تومان
                                        </Grid>
                                        <Grid style={{color: "#ff4242", fontSize: 9.5, fontWeight: "bold"}}>
                                            تخفیف {convertToPersian(separate(item.classRoom_Discount))} تومان
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
                    <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>{calculatePrice ? convertToPersian(separate(calculatePrice.toString())) : ""}</Grid>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "space-between", width: "100%", margin: "10px 0"}}>
                    <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>تخفیف کالا ها</Grid>
                    <Grid style={{color: "#ff4242", fontSize: 13.5, fontWeight: "bold"}}>{discount ? convertToPersian(separate(discount.toString())) : "۰"} تومان</Grid>
                </Grid>
            </Grid>
            <Grid className={classes.btnFixedMobile}>
                <Link to="/SuccessfulPurchase" className={classes.btnCartMobile}>ادامه فرایند خرید</Link>
                <Grid style={{display: "flex", width: "100%", marginBottom: 10, flexDirection: "column", alignItems: "flex-end"}}>
                    <Grid style={{color: "#4c4c4c", fontSize: 13.5, fontWeight: "bold"}}>جمع سبد خرید</Grid>
                    <Grid style={{color: "#4c4c4c", fontSize: 13.5, fontWeight: "bold"}}>{price ? convertToPersian(separate(price.toString())) : ""} تومان</Grid>
                </Grid>
            </Grid>
            <Grid className={classes.offersFailed}>
                پیشنهادات ویژه
            </Grid>
            <Grid className="SwiperCoverflow" container>
                <SwiperCoverflow similarItem={similarItem} />
            </Grid>
        </Grid>
    );
};

export default CartMobileSize;
