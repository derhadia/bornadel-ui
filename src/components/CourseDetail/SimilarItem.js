import React, { useEffect, useState, useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import Apis from '../../constants/Api'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import CoursesComponent from '../../components/CoursesComponent/CoursesComponent'
//davad یس
export default function SimilarItem() {
    let { similarItem } = useContext(CourseDetailContext)
    const classes = useStyles();
    const [sliderWidth, setSliderWidth] = useState(0)
    const count = window.innerWidth > 1220 ? 6 : window.innerWidth > 1030 ? 5 : 4
    const [trs, setTrs] = useState(0)
    const a = similarItem[0] ? Math.floor(similarItem[0].length / count) : 0
    const b = similarItem[0] ? similarItem[0].length % count : 0
    const [x, setX] = useState(1)
    useEffect(() => {
        let SliderContainer = document.getElementById('SliderContainer')
        setSliderWidth(SliderContainer.offsetWidth);
    }, [])


    let ChangeTRS = (condition) => {
        if (condition === 1) {
            if(x===0)setX(1)
            setX(prev => x > a ? setX(a) : setX(prev + 1))
            if (similarItem[0].length - trs < count + 1) {
                return
            }
            if (x === a) {
                if (b !== 0) {
                    setTrs(prev => setTrs(prev + b))
                    return
                }
            } else {
                setTrs((prev) => setTrs(prev + count))
            }
            console.log(x);
        }
        if (condition === -1) {
            setX(prev => x < 1 ? setX(1) : setX(prev - 1))
            if (trs < count) {
                setTrs(0)
                return
            }
            setTrs((prev) => setTrs(prev - count))
        }
    }
    return (
        <Grid container className={classes.SimilarItemContainer}>
            <Grid container>
                <Typography className={classes.SimilarItemHeader}>موارد مشابه</Typography>
            </Grid>
            <Grid container style={{ width: "100%" }} id="SliderContainer" >
                <Grid container item style={{ overflow: "hidden" }}>
                    <Grid item container className={classes.ReceneViewSlider} wrap="nowrap"
                        style={{ transform: `translateX(${trs * (Math.ceil(sliderWidth / count))}px)`, transition: "all 2s" }}>
                        {
                             similarItem && similarItem.length > 0 ? similarItem[0].map((data, index) => {
                                return (
                                    <Grid container item justify="center" key={index} className={classes.sliderItem}
                                        style={{ minWidth: Math.ceil(Math.ceil(sliderWidth) / count) }} >
                                        <CoursesComponent
                                            data={data}
                                            id={data.classRoom_ID}
                                            teacherName={data.teacher_Name + ' ' + data.teacher_LastName}
                                            title={data.classRoom_Subject}
                                            date={data.classRoom_DateTime}
                                            photoIconLink={Apis.SHOWIMAGE + data.educationSubject_IconeLink}
                                            price={data.classRoom_Price}
                                            LastPrice={data.last_Price}
                                            Discoun={data.classRoom_Discount}
                                            maxWidth={166} 
                                            dir="rtl"
                                            deadLine={data.active}
                                            teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                            educationSubject={data.educationSubject_Name} />
                                    </Grid>
                                )
                            })
                                : null
                        }
                    </Grid>
                    <Grid item className={classes.NextArrowCourseDetail} onClick={() => ChangeTRS(-1)}></Grid>
                    <Grid item className={classes.PrevArrowCourseDetail} onClick={() => ChangeTRS(1)}></Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}
