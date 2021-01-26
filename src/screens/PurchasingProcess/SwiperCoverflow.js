import React, {useState} from 'react';
import Slider from "react-slick";
import {Grid, Typography} from "@material-ui/core";
import useStyle from "../../hadi";
import {Link} from "react-router-dom";


const names = [{name: "اکبر نیازی", id: 1}, {name: "محمد رستمی", id: 1}, {name: "جابر محمدی", id: 1}, {name: "لیلا قاسمی", id: 1},]

const SwiperCoverflow = () => {
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

    const [slideIndex, setSlideIndex] = useState(0)

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
        <div className="coverflowParent">
            {/*<div className="cover">*/}
            {/*    <div className="underCover">*/}
            {/*        <div className="boxTop">*/}
            {/*            <div className="rect"/>*/}
            {/*            <div className="redRect"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Slider {...setting}>
                {
                    names.map((item, index) => (
                        <div key={index} className={index === slideIndex ? "slide activeSlide" : "slide"}>
                            <Grid className={`${classes.coursesComponentDetailItem} slideCover`}>
                                <Grid style={{border: "1px solid #ccc", borderRadius: 12}}>
                                    <Grid className={classes.coursesComponentContainer} component={Link} to={"/"}>
                                        <Grid className={classes.coursesRect}>
                                            <Grid>
                                                <Typography className={classes.coursesText}>آموزش PHP</Typography>
                                            </Grid>
                                            <Grid className={classes.circleinRectContainer}>
                                                {/*<Grid className={classes.circleinRect}>*/}
                                                {/*</Grid>*/}
                                            </Grid>
                                            <Grid className={classes.cirRect}>
                                                {/*<img src={require("./images/nature-1.jpg")} alt=""/>*/}
                                            </Grid>
                                            {/*<Grid className={classes.coursesIcon}>*/}

                                            {/*</Grid>*/}
                                        </Grid>
                                        <Grid className={classes.CoursesDetail}>
                                            <Grid item className={classes.Coursesteacher}><Typography className={classes.CoursesteacherText}>مدرس :{item.name}</Typography></Grid>
                                            <Grid item className={classes.CoursesTitle}>فیزیک</Grid>
                                            <Grid item className={classes.CoursesDateStart}><Typography component="span" className={classes.CoursesDateStartText1}>زمان شروع : <Typography component="span" className={classes.FarsiNumber}>1399/10/24</Typography></Typography></Grid>
                                            <Grid item container justify="center" alignItems="center" className={classes.CoursesPrice}>
                                                <Typography className={classes.CoursesPriceText}>
                                                    <Typography className={classes.FarsiNumber1}>
                                                        16000000
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </div>

                    ))
                }
            </Slider>
        </div>
    );
};

export default SwiperCoverflow;
