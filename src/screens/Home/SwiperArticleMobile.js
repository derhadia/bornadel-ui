import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import Apis from "../../constants/Api";
import Grid from "@material-ui/core/Grid";
import useStyle from "../../hadi";
import {Link} from "react-router-dom";

const SwiperArticleMobile = ({articles}) => {

    const [slideIndex, setSlideIndex] = useState(0);

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setSlideIndex(next)
    };
    return (
        <Slider {...settings}>
            {
                articles.map((item, index) => (
                    <Link
                        to={{
                        pathname: item.article_ID ? `ArticleDetail/${item.article_ID}` : `NewsDetail/${item.news_ID}`,
                        state: {item}
                        }}
                        key={index}
                    >
                        <Grid style={{width: "100%"}} container justify="center" className={classes.articleSlideMobile}>
                            <Grid style={{position: "relative"}}>
                                <img className={classes.imgSlideMobile} src={Apis.SHOWIMAGE + (item.article_PhotoLink || item.news_PhotoLink)} alt=""/>
                                <img className={classes.circleImgSlideMobile} src={Apis.SHOWIMAGE + (item.teacher_PhotoLink || item.news_PhotoLink)} alt=""/>
                            </Grid>
                            <Grid style={{fontSize: 14, fontWeight: "bold", textAlign: "center", color: "#1d1d1d"}}>{item.article_Title || item.news_Title}</Grid>
                            <hr style={{width: 218, borderTop: "1px solid #c59428"}}/>
                            <Grid style={{display: "flex", flexDirection: "column"}}>
                                <Grid style={{fontSize: 10.5, color: "#737373"}}>
                                    {item.article_Summary || item.news_Summary}
                                </Grid>
                                <Grid style={{fontSize: 10.5, color: "#737373", textAlign: "center"}}>
                                    {"<<<"} ادامه مطلب
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>

                ))
            }
        </Slider>
    );
};

export default SwiperArticleMobile;