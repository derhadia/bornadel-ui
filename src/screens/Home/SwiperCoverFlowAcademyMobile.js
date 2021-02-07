import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import Slider from "react-slick";
import {fetchPost} from "../../config/Utils";
import Apis from "../../constants/Api";
import useStyle from "../../hadi";
import {Link} from "react-router-dom";

const SwiperCoverFlowAcademyMobile = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [bestAcademy, setBestAcademy] = useState([]);

    const classes = useStyle();

    const NextArrow = ({onClick}) => {
        return (
            <Grid item className={`${classes.NextArrowCourseDetail} arrow next`} onClick={onClick}/>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <Grid item className={`${classes.PrevArrowCourseDetail} arrow prev`} onClick={onClick}/>
        )
    }


    useEffect(() => {
        fetchPost(Apis.GET_GetAllHomeTop).then(({ responseJSON, status }) => {
            setBestAcademy(responseJSON.data);
        })
    },[])


    const setting = {
        // infinite: true,
        // lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setSlideIndex(next)
    }

    return (
        <div className="coverflowParent coverflowAcademy" style={{height: 240}}>
            <Slider {...setting}>
                {
                    bestAcademy.map((item, index) => (
                        <Link key={index} className={index === slideIndex ? "slide slideHome activeSlide" : "slideHome slide"}>
                            <Grid className="slideCover slideBorder">
                                <img style={{width: "100%"}} src={Apis.SHOWIMAGE + item.academy_PhotoLink} alt=""/>
                                <Typography className="BestAcademyText">{item.academy_Name}</Typography>
                            </Grid>
                        </Link>

                    ))
                }
            </Slider>
        </div>
    );
};

export default SwiperCoverFlowAcademyMobile;