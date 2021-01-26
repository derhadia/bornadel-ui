import React, {useEffect, useState} from 'react';
import "swiper/swiper.min.css";
import {Grid} from "@material-ui/core";
import useStyle from "../../hadi";
import SliderDesktop from "./SliderDesktopSize";
import SwiperCoverflow from "./SwiperCoverflow";
import {fetchPost} from "../../config/Utils";
import Apis from "../../constants/Api";

const PurchaseFailed = () => {
    const classes = useStyle();

    const [width, setWidth] = useState(window.innerWidth);
    const [similarItem, setSimilarItem] = useState([])
    useEffect(() => {
        fetchPost(Apis.Get_GetSimilarClassRooms + "?ClassRoomId=1").then(({ responseJSON, status }) => {
            if (status === 200) {
                setSimilarItem([responseJSON.data])
            }
        })
    },[])

    const handleWindowSize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize)
        return () => window.removeEventListener("resize", handleWindowSize)
    },[]);

    const isMobile = width < 900;

    return (
        <Grid container className={classes.ArticlesContainer}>
            <Grid
                className={classes.NewsContainer}
                style={{width: "100%", display: "flex", minHeight: "unset"}}
            >
                <p className={classes.errorMsg}>متاسفانه پرداخت شما ناموفق بود . شماره سفارش DKC156798</p>
            </Grid>
            {
                !isMobile ?
                    <SliderDesktop similarItem={similarItem} /> :
                    <>
                        <Grid className={classes.offersFailed}>
                            پیشنهادات ویژه
                        </Grid>
                        <Grid className="SwiperCoverflow" container>
                            <SwiperCoverflow />
                        </Grid>
                    </>
            }

        </Grid>
    )
}

export default PurchaseFailed;
