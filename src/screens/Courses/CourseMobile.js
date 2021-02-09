import React, {useState} from 'react';
import useStyle from "../../hadi";
import clsx from "clsx";
import DrawerFilter from "../MobileArticles/DrawerFilter";
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SortPopup from "../../components/SortPopup/SortPopup";
import Typography from "@material-ui/core/Typography";
import ArticleBox from "../Articels/articleBox/ArticleBox";
import Drawer from "@material-ui/core/Drawer";
import CoursesComponent from "../../components/CoursesComponent/CoursesComponent";
import Apis from "../../constants/Api";
import DrawerCourseFilter from "./DrawerCourseFilter";

const CourseMobile = ({coursesData, filter}) => {
    const [state, setState] = useState({
        drawer: false,
    });
    const [open, setOpen] = useState(false);
    const [course] = useState(true);
    const classes = useStyle();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const toggleDrawer = (anchor, open) => (event) => {
        filter()
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const renderFiltering = (anchor) => (
        <div
            style={{backgroundColor: "#f0f0f0", height: "fit-content"}}
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerCourseFilter
                toggleDrawer={toggleDrawer}
                anchor={anchor}
                setState={setState}
            />
        </div>
    );

    return (
        <Grid container style={{backgroundColor: "#fafafa"}}>
            <Grid className={classes.headFilterMobile}>
                <Button
                    className={`${classes.btnFilterMobile} ${classes.filteringIcon}`}
                    onClick={toggleDrawer("right", true)}
                >
                    جستجوی پیشرفته
                </Button>
                <Button
                    className={`${classes.btnFilterMobile} ${classes.sortingIcon}`}
                    onClick={handleClickOpen}
                >
                    مرتب سازی
                </Button>
                <SortPopup
                    course={course}
                    open={open}
                    onClose={handleClose}
                    // handleNewest={handleNewest}
                    // handleMostVisited={handleMostVisited}
                />
            </Grid>
            <Grid className={classes.routeFilter}>
                <Typography className={classes.arrowLeftIcon}>لیست کلاسها</Typography>
                <Typography className={classes.arrowLeftIcon}>کامپیوتر</Typography>
                <Typography className={classes.arrowLeftIcon}>برنامه نویسی</Typography>
                <Typography>آموزش PHP</Typography>
            </Grid>
            <Grid item container className={classes.coursesComponentDetail}>
                {
                    coursesData.map(data => (
                        <Grid item alignItems="center" className={classes.coursesComponentDetailItem}>
                            <CoursesComponent
                                data={data}
                                id={data.classRoom_ID}
                                teacherName={data.teacher_Name + ' ' + data.teacher_LastName}
                                title={data.classRoom_Subject} date={data.classRoom_DateTime}
                                photoIconLink={Apis.SHOWIMAGE + data.educationSubject_IconeLink}
                                price={data.classRoom_Price}
                                LastPrice={data.last_Price}
                                Discoun={data.classRoom_Discount}
                                minWidth={180}
                                maxWidth={180}
                                dir="rtl"
                                deadLine={data.active}
                                teacherLink={Apis.SHOWIMAGE + data.teacher_PhotoLink}
                                educationSubject={data.educationSubject_Name}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {renderFiltering("right")}
            </Drawer>
        </Grid>
    );
};

export default CourseMobile;