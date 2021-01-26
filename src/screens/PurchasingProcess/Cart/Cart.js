import React, {useEffect, useState} from 'react';
import {Button, Divider, Grid} from "@material-ui/core";
import useStyle from "../../../hadi";
import {fetchPost} from "../../../config/Utils";
import Apis from "../../../constants/Api";
import SliderDesktop from "../SliderDesktopSize";
import CartMobileSize from "./CartMobileSize";
import {convertToPersian} from "../../../hadi/functions";
import {Link} from "react-router-dom";


const Cart = () => {
    const classes = useStyle();
    const [similarItem, setSimilarItem] = useState([]);
    let [price, setPrice] = useState(null);
    let [discount, setDiscount] = useState(null)


    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        fetchPost(Apis.Get_GetSimilarClassRooms + "?ClassRoomId=7").then(({ responseJSON, status }) => {
            if (status === 200) {
                setSimilarItem([responseJSON.data])
            }
        })
    },[]);

    const data = JSON.parse(localStorage.getItem("itemsArray"))


    const removeItem = id => {
        let json = JSON.parse(localStorage["itemsArray"]);
        for (let i = 0; i < json.length; i++)
            if (json[i].classRoom_ID === id) json.splice(i,1);
        localStorage["itemsArray"] = JSON.stringify(json);
        window.location.reload(false)
    }

    useEffect(() => {
        if (data) {
            let json = JSON.parse(localStorage["itemsArray"]);
            for (let i = 0; i < json.length; i++)
                if (json[i].classRoom_Price){
                    setPrice(price += json[i].classRoom_Price)
                }
            for (let i = 0; i < json.length; i++)
            if (json[i].classRoom_Discount){
                setDiscount(discount += json[i].classRoom_Discount)
            }
        }
    },[])







    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    const isMobile = width < 960;




    return (
        <>
            {
                !isMobile ?
                    <>
                        <Grid
                            container
                            justify="space-between"
                            className={classes.ArticlesContainer}
                        >
                            <Grid
                                xl={9}
                                lg={9}
                                md={9}
                                sm={12}
                                xs={12}
                                className={classes.ArticlesContainerRight}
                                container
                                item
                            >
                                <Grid  style={{backgroundColor: "white", padding: "23px 41px", flexDirection: "column", borderRadius: 14, width: "100%"}}>

                                    {
                                        !data ? "" : data.map((item, index) => (
                                            <Grid
                                                container
                                                key={index}
                                            >
                                                <Grid style={{display: "flex", alignItems: "center", width: "100%"}}>
                                                    <Grid item xl={3} lg={3} md={3} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                                                        <Grid style={{maxWidth: "100%", justifyContent: "center", color: "#282828", fontSize: 22, display: "flex", alignItems: "center"}} item xl={6} lg={6} md={6}>
                                                            {item.classRoom_Subject}
                                                        </Grid>
                                                        <Grid item xl={6} lg={6} md={6}>
                                                            <Grid style={{top: "unset"}} className={classes.circleinRect2}>
                                                                <img style={{width: "100%", height: "100%"}} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} md={6}>
                                                        <Grid style={{display: "flex", height: 35}}>
                                                            <Grid className={classes.vectorIcon} item xl={2} lg={2} md={2}/>
                                                            <Grid style={{fontSize: 17, color: "#424242"}} item xl={8} lg={8} md={8}>
                                                                {item.educationSubject_Name}
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
                                                            <Grid style={{fontSize: 15, color: "#424242"}} item xl={8} lg={8} md={8}>
                                                                زمان شروع : {convertToPersian(item.classRoom_DateTime)}
                                                            </Grid>
                                                        </Grid>
                                                        <Grid style={{display: "flex", alignItems: "center"}}>
                                                            <Grid className={classes.trashIcon} item xl={2} lg={2} md={2} />
                                                            <Grid onClick={() => removeItem(item.classRoom_ID)} style={{fontSize: 15, color: "#424242"}} item xl={8} lg={8} md={8}>
                                                               حذف
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "70%"}} item xl={3} lg={3} md={3}>
                                                        <Grid style={{color: "#ff4242", fontSize: 13.5, fontWeight: "bold"}}>
                                                            تخفیف {item.classRoom_Discount} تومان
                                                        </Grid>
                                                        <Grid style={{color: "#282828", fontSize: 18, fontWeight: "bold"}}>
                                                            {convertToPersian(item.classRoom_Price.toString())} تومان
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Divider  />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                            <Grid
                                style={{alignContent: "flex-start"}}
                                container
                                justify="flex-end"
                                item
                                className={classes.ArticlesContainerLeft}
                                md={3}
                                sm={12}
                                xs={12}
                                lg={3}
                                xl={3}
                            >
                                <Grid container style={{padding: "18px 19px 35px 19px", backgroundColor: "white", borderRadius: 14}}>
                                    <Grid style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                        <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>قیمت دوره ها ({data ? convertToPersian(data.length.toString()) : "۰"})</Grid>
                                        <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>{price ? convertToPersian(price.toString()) : ""}</Grid>
                                    </Grid>
                                    <Grid style={{display: "flex", justifyContent: "space-between", width: "100%", margin: "10px 0"}}>
                                        <Grid style={{color: "#8d8f91", fontSize: 13.5, fontWeight: "bold"}}>تخفیف کالا ها</Grid>
                                        <Grid style={{color: "#ff4242", fontSize: 13.5, fontWeight: "bold"}}>{discount ? convertToPersian(discount.toString()) : "۰"} تومان</Grid>
                                    </Grid>
                                    <hr style={{width: "100%", color: "#dbdbdb", margin: "10px 0", borderColor: "#dbdbdb"}}/>
                                    <Grid style={{display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 10}}>
                                        <Grid style={{color: "#4c4c4c", fontSize: 13.5, fontWeight: "bold"}}>جمع سبد خرید</Grid>
                                        <Grid style={{color: "#4c4c4c", fontSize: 13.5, fontWeight: "bold"}}>{price ? convertToPersian(price.toString()) : ""} تومان</Grid>
                                    </Grid>
                                    <Link to="/SuccessfulPurchase" style={{backgroundColor: "#ff2626", color: "white",textAlign: "center", width: "100%", borderRadius: 8, fontSize: 17}}>ادامه فرایند خرید</Link>
                                </Grid>
                                <Grid style={{fontSize: 12.5, color: "#8d8f91", fontWeight: "bold", marginTop: 15}}>
                                    دوره های موجود در سبد شما ثبت و رزرو نشده اند
                                    برای ثبت سفارش مراحل بعد را تکمیل کنید.
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="space-between"
                            className={classes.ArticlesContainer}
                        >
                            <SliderDesktop similarItem={similarItem}/>
                        </Grid>
                    </> :
                    <CartMobileSize
                        state={data}
                        price={price}
                        discount={discount}
                        removeItem={removeItem}
                    />
            }
        </>


    )
}

export default Cart;
