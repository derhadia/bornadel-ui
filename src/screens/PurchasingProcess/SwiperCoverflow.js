import React, {useContext, useState} from 'react';
import Slider from "react-slick";
import {Grid, Typography} from "@material-ui/core";
import useStyle from "../../hadi";
import {Link} from "react-router-dom";
import {convertToPersian, separate} from "../../hadi/functions";
import Apis from "../../constants/Api"
import {CourseDetailContext} from "../../contexts/CourseDetailContext";



const SwiperCoverflow = ({similarItem}) => {
    const classes = useStyle();
    let { setCourseDetailData } = useContext(CourseDetailContext)

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
            <Slider {...setting}>
                {
                    similarItem && similarItem.length > 0 ? similarItem[0].map((item, index) => (
                        <Link onClick={() => setCourseDetailData(item)} to={index === slideIndex ?`/CourseDetail/${item.classRoom_ID}/${item.classRoom_Subject}` : "/Cart"} key={index} className={index === slideIndex ? "slide activeSlide" : "slide"}>
                            <Grid className={`${classes.coursesComponentDetailItem} slideCover`}>
                                <Grid style={{border: ".5px solid #ccc", borderRadius: 12, borderTop: "unset", height: 240}}>
                                    {/*<Grid className={classes.coursesComponentContainer}>*/}
                                        <Grid className={classes.coursesRect}>
                                            <Grid>
                                                <img style={{width: 20, height: 23}} src={Apis.SHOWIMAGE + item.educationSubject_IconeLink} alt=""/>
                                                <Typography style={{fontSize: 13}} className={classes.coursesText}>{item.educationSubject_Name}</Typography>
                                            </Grid>
                                            <Grid className={classes.circleinRectContainer}/>
                                            <Grid className={classes.cirRect}>
                                                <img style={{width: "100%", height: "100%", borderRadius: "50%"}} src={Apis.SHOWIMAGE + item.teacher_PhotoLink} alt=""/>
                                            </Grid>
                                        </Grid>
                                        <Grid className={classes.CoursesDetail}>
                                            <Grid item className={classes.Coursesteacher}>
                                                <Typography className={classes.CoursesteacherText}>مدرس :{item.teacher_Name + " " + item.teacher_LastName}</Typography>
                                            </Grid>
                                            <Grid item className={classes.CoursesTitle}>{item.classRoom_Subject}</Grid>
                                            <Grid item className={classes.CoursesDateStart}>
                                                <Typography component="span" className={classes.CoursesDateStartText1}>
                                                    زمان شروع :
                                                    <Typography component="span" style={{fontSize: 10.5, fontFamily: "IRANSansNUMNumber"}} className={classes.FarsiNumber}>
                                                        {convertToPersian(item.classRoom_DateTime)}
                                                    </Typography>
                                                </Typography>
                                            </Grid>
                                            <Grid item container justify="center" alignItems="center" className={classes.CoursesDiscount} style={item.classRoom_Discount === 0 ? {display: "none"} : {display: "flex"}}>
                                                <span className={classes.DiscountRect}>
                                                    <Typography style={{fontFamily: "IRANSansNUMNumber"}} className={`${classes.DiscountRectText} ${classes.FarsiNumber}`}>%{convertToPersian(separate(item.classRoom_Discount.toString()))}</Typography>
                                                </span>
                                                <Typography style={{fontFamily: "IRANSansNUMNumber"}} className={`${classes.DiscountText} ${classes.FarsiNumber}`}>{convertToPersian(separate(item.classRoom_Price))} تومان</Typography>
                                            </Grid>
                                            <Grid item container justify="center" alignItems="center" className={classes.CoursesPrice}>
                                                <div className={classes.CoursesPriceText}>
                                                    <div style={{fontFamily: "IRANSansNUMNumber", display: "flex", flexDirection: "row-reverse", width: 75, justifyContent: "space-around"}} className={classes.FarsiNumber1}>
                                                        <span> {convertToPersian(separate(item.last_Price))} </span><span> تومان </span>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    {/*</Grid>*/}
                                </Grid>

                            </Grid>
                        </Link>

                    )) : null
                }
            </Slider>
        </div>
    );
};

export default SwiperCoverflow;
