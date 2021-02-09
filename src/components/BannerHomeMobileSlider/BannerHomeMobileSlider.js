import React,{useState,useEffect} from 'react'
import { Grid } from '@material-ui/core';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import SwiperId from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import './bannerHome.css'
import banner1 from '../../assets/images/Banner/banner1.jpg'
import banner2 from '../../assets/images/Banner/banner2.jpg'
import banner3 from '../../assets/images/Banner/banner3.jpg'
import banner4 from '../../assets/images/Banner/banner4.jpg'

SwiperCore.use([Pagination, Autoplay]);

export default function BannerMobileSliderHome() {

    const [BannerContainerHeight, setBannerContainerHeight] = useState(0)
    const [BannerContainerWidth, setBannerContainerWidth] = useState(0)
    useEffect(() => {
        let BannerContainer = document.querySelector('#BannerContainer')
        setBannerContainerHeight(BannerContainer.offsetHeight)
        setBannerContainerWidth(BannerContainer.offsetWidth)
    }, [])
    const params = {
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    }
    return (
        <Grid container style={{ padding: "10px 25px",position:"relative"}} id="BannerContainer">
           <Grid container style={{height:BannerContainerWidth/2}}>
           <SwiperId {...params}
                containerClass="swiper-container-bannerHome"
                wrapperClass="swiper-wrap-bannerHome  ">
                <div style={{height:"100%"}} >
                    <img src={banner1} style={{ width: "100%", height:"100%",borderRadius:7 }} alt="" />
                </div>
                <div style={{height:"100%"}}>
                    <img src={banner2} style={{ width: "100%", height:"100%",borderRadius:7 }} alt="" />
                </div>
                <div style={{height:"100%"}}>
                    <img src={banner3} style={{ width: "100%", height:"100%",borderRadius:7 }} alt="" />
                </div>
                <div style={{height:"100%"}}>
                    <img src={banner4} style={{ width: "100%", height:"100%",borderRadius:7 }} alt="" />
                </div>
            </SwiperId>
           </Grid>
        </Grid>
    )
}
