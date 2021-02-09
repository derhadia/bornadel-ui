import { makeStyles } from '@material-ui/core/styles';
import Icons from '../assets/images/icon.svg';
import IconsLogo from "../assets/images/iconfinal.svg"

const useStyle = makeStyles((theme) => ({
    headBar: {
        width: "100%",
        minHeight: "unset",
        display: "flex",
        alignItems: "center",
        fontSize: "11.5px",
        flexDirection: "row",
        marginTop: "unset",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 15,
    },
    ArticlesNews: {
        padding: "0",
            backgroundColor: "#f5f5f5",
            maxWidth: "1366px"
    },
    btnHeadBar: {
        margin: "0 14px 0 20px",
        padding: "3px 5px 4px",
        color: "white",
        lineHeight: "1.75",
        fontSize: "11.5px"
    },
    NewsContainer: {
        minHeight: 313,
        borderRadius: 8,
        padding: 13,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: "unset !important"
        }
    },
    articleSlideMobile: {
        width: 261,
        // margin: "18px 18px 34px 2px",
        padding: "6px 15px 14px 15px",
        borderRadius: 9,
        // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.41)",
        backgroundColor: "#ffffff",
        height: "fit-content"
    },
    imgSlideMobile: {
        width: 52,
        height: 52,
        borderRadius: 5,
        position: "relative"
    },
    circleImgSlideMobile: {
        width: 26,
        height: 26,
        margin: "14px 1px 22px 53px",
        border: "solid 2px #ffffff",
        borderRadius: "50%",
        position: "absolute",
        left: "-19px",
        top: 0
    },
    SuccessContainer: {
        borderRadius: 8,
        padding: 13,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: "unset !important"
        },
        width: "100%",
        display: "flex",
        marginBottom: 38,
        minHeight: "unset"
    },
    circleinRect2: {
        width: 102,
        height: 102,
        borderRadius: "50%",
        margin: "0 auto",
        position: "relative",
        top: 261,
        overflow: "hidden",
        display: "block",
        [theme.breakpoints.down("md")]: {
            top: 356
        },
        [theme.breakpoints.down("xs")]: {
            width: 80,
            height: 80
        }
    },
    cirRect: {
        width: 58,
        height: 58,
        margin: "0 5px 4px",
        borderRadius: "50%",
        position: "absolute",
        top: 53,
    },
    coursesIconCicle: {
        width: "100%",
        height: "100%",
    },
    ArticleContainerBox: {
        padding: "0 10px",
    },
    groupFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "unset",
        borderRadius: 8,
        height: 350,
        backgroundColor: "#fff",
        marginBottom: 15,
        padding: "10px 10px",
        border: "1px solid #dedede",
        overflow: "scroll !important"
    },
    groupFilterHeaderText: {
        fontWeight: 700,
        fontSize:13
    },
    detailProf: {
        width: "100%",
        height: 313,
        margin: "17px 0 69px",
        borderRadius: 9,
        backgroundColor: "#bbbbbb",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            margin: "17px 0 175px"
        }
    },
    boxDetail: {
        width: "100%",
        height: 142,
        marginBottom: "19px",
        borderRadius: 9,
        backgroundColor: "#ffff00"
    },
    parentSideBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    dateBox: {
        width: 550,
        backgroundColor: "#2ec88c",
        height: 45,
        margin: "15px 0 51px",
        padding: "4px 10px 4px 5px",
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            order: 1
        },
    },
    articleDate: {
        display: "flex",
        alignItems: "center"
    },
    circleArticle: {
        backgroundColor: "#ffff00",
        width: 90,
        height: 90,
        borderRadius: 50
    },
    ArticleHeader: {
        height: 40,
        borderBottom: "1px solid #cccccc",
        marginBottom: 18,
    },
    cirTinyArticle: {
        width: 40,
        height: 40,
        backgroundColor: "#ffff00",
        borderRadius: 50
    },
    redBoxArticle: {
        height: 234,
        margin: "18px 0",
        borderRadius: 5,
        border: "solid 1px #dcdcdc",
        backgroundColor:" #ed1c24",
    },
    ArticleHeaderText: {
        display: "inline-block",
        fontSize: 19,
        fontWeight: 500,
        color: "#0d0d0d",
        fontFamily: "IRANSans",
        borderBottom: "2px solid #2fc98d"
    },
    formControl: {
        width: 187,
        height: 25,
        margin: "5px 0 5px 0",
        padding: "6px 8px 8px 3px",
        borderRadius: "5px",
        border: "solid 1px #dcdcdc",
        backgroundColor: "#ffffff",
        outline: "none"
    },
    boxDetailProf: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    detailNews: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
        [theme.breakpoints.only("md")]: {
            width: "100%"
        },
        [theme.breakpoints.only("xs")]: {
            width: "100%"
        }
    },
    yellowBox: {
        width: "100%",
        height: "auto",
        margin: "32px 0",
        borderRadius: "4px",
        [theme.breakpoints.down("md")]: {
            margin: "unset"
        }
    },
    typoComment: {
        color: "#dcdcdc",
        fontSize: "13px",
        [theme.breakpoints.only("md")]: {
            fontSize: 12
        }
    },
    tinyCircle: {
        width: 40,
        height: 40,
        display: "inline-block",
        borderRadius: "50px",
        marginRight: 5
    },
    lineSpan: {
        borderLeft: "1px solid #dcdcdc",
        height: "20px",
        marginTop: "10px"
    },
    yellowBoxArticleList: {
        backgroundColor: "#ffff00",
        boxShadow: "unset",
        margin: "20px 0"
    },
    monthStyle: {
        width: "30px",
        height: "20px",
        backgroundColor: "#e5e5e5",
        borderRadius: "2px",
        borderLeft: "1px solid #c8c8c8",
        borderRight: "1px solid #c8c8c8",
        borderTop: "unset",
        borderBottom: "unset",
        outline: "none"
    },
    yearStyle: {
        width: "48px",
        height: "20px",
        backgroundColor: "#e5e5e5",
        borderRadius: "2px",
        border: "unset",
        outline: "none"
    },
    dayStyle: {
        width: "30px",
        height: "20px",
        backgroundColor: "#e5e5e5",
        borderRadius: "2px",
        border: "unset",
        outline: "none"
    },
    dateStyle: {
        margin: "9px 0 0",
        padding: "9px 29px 10px 31px",
        border: "1px solid #2fc98e",
        borderRadius: "5px"
    },
    boxDate: {
        display: "flex",
        width: "100%",
        alignItems: "center"
    },
    userStyle: {
        color: "#00023c",
        fontSize: "12px",
        marginRight: "8px"
    },
    btnSendComment: {
        backgroundColor: "#2ec88c",
        color: "#fff",
        width: "80px",
        height: "22px",
        fontSize: "12px",
        marginTop: 18,
        outline: "none",
        "&:hover": {
            backgroundColor: "#2ec88c !important"
        }
    },
    viewAllComment: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    filterButton: {
        backgroundColor: "#2ec88c",
        color: "#fff",
        width: "90%",
        height: "100%",
        "&:hover": {
            backgroundColor: "#2ec88c !important"
        }
    },
    filterButtonContainer: {
        height: 35,
        borderRadius: 4,
        marginTop: 20,
        position:"fixed",
    },
    activeFilterHeaderLeft: {
        width: 68,
        cursor: "pointer",
        height: 20,
        backgroundColor: "#2fc98e",
        borderRadius: 4,
        marginLeft: 12,
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "#2fc98e !important"
        }

    },
    leftHeaderText: {
        width: 73,
        cursor: "pointer",
        fontSize: 13,
        color: "#424750",
        marginLeft: 12,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "#ebf7f2"
        }
    },

    ArticlesContainer: {
        padding: "25px 30px 35px 30px ",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    ArticlesContainerRight: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    ArticlesContainerLeft: {
        // paddingLeft: 25,
        // width: window.innerWidth - 300
        flex: 4,
        [theme.breakpoints.up("md")]: {
            paddingLeft: 25
        }
    },
    treeLableText: {
        fontSize: 14
    },
    checkboxArticle: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end"
    },
    successMsg: {
        fontSize: 24,
        color: "#018d04",
        [theme.breakpoints.down("sm")]: {
            fontSize: 16
        }
    },
    titleSuccess: {
        fontSize: 22,
        color: "#555555",
        marginTop: 62,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            margin: "40px auto",
            backgroundColor: "#555555",
            color: "white",
            borderRadius: "25px",
            fontSize: 13.5,
            width: "fitContent",
            padding: "0 7px"
        }
    },
    eduName: {
        justifyContent: "center",
        color: "#282828",
        fontSize: 21,
        display: "flex",
        alignItems: "center",
        fontWeight: 900
    },
    errorMsg: {
        fontSize: 24,
        color: "#ff0000",
        [theme.breakpoints.down("sm")]: {
            fontSize: 13.5
        }
    },

    coursesComponentDetailItem: {
        // width: 152,
        margin: "0 auto",
        padding: "5px 7px 5px",
        borderRadius: 10,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.41)",
        backgroundColor: "#ffffff",
        height: 250,
        [theme.breakpoints.down("sm")]: {
            margin: "31px auto",
            height: "unset"
        }
   },
    coursesComponentContainer: {
        padding: "0 0 12px",
    },
    coursesRect: {
        // width: 138,
        height: 82,
        margin: "0 0 36px",
        // padding: "6px 34px 40px 33px",
        borderRadius: 12,
        border: "solid 1px #c59428",
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    DiscountText: {
        fontSize: 11,
        color: "#8f8f8f",
        textDecoration: "line-through",
    },
    DiscountRectText: {
        textAlign: "center",
        lineHeight: "10px",
        color: "#ffffff"
    },
    levelCourseMobile: {
        width: "100%",
        display: "flex",
        backgroundColor: "white",
        border: "1px solid #b4b4b4",
        borderRadius: 5,
        padding: "18px 20px",
        flexDirection: "column"
    },
    CheckBox: {
        width: 19,
        height: 18,
        position: "relative",
        marginRight: "10px"
    },
    checkboxSpan: {
        cursor: "pointer",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        borderRadius: 4,
        background: "#fff",
        border: "1px solid #d8d8d8",

    },
    ActivecheckboxSpan: {
        cursor: "pointer",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        borderRadius: 4,
        border: "1px solid #d8d8d8",
        backgroundColor: "#00bfd6",
        "&::before": {
            content: `''`,
            position: "absolute",
            left: 2,
            top: 2,
            color: "#fff",
            fontSize: 11,
            width: 12,
            height: 7,
            border: "2px solid #fff",
            borderLeft: "none",
            borderTop: "none",
            transform: "rotate(45deg)"
        }
    },
    DiscountRect: {
        marginLeft: 5,
        width: 23,
        height: 14,
        borderTopLeftRadius: 7,
        backgroundColor: "#ff0029",
        position: "relative",
        bottom: 2,
        textAlign: "center",
        lineHeight: "19px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    desCartBox: {
        fontSize: 12.5,
        color: "#8d8f91",
        fontWeight: "bold",
        marginTop: 15
    },
    addToCart: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10
    },
    hrCart: {
        width: "100%",
        color: "#dbdbdb",
        margin: "10px 0",
        borderColor: "#dbdbdb"
    },
    cartPayment: {
        padding: "18px 19px 35px 19px",
        backgroundColor: "white",
        borderRadius: 14
    },
    cartDiscount: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%"
    },
    discountCourses: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        margin: "10px 0"
    },
    btnCartBox: {
        backgroundColor: "#ff2626",
        color: "white",
        textAlign: "center",
        width: "100%",
        borderRadius: 8,
        fontSize: 17,
        fontWeight: "bold",
        "&:hover": {
            color: "white"
        }
    },
    rightSideCartMobile: {
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    eduSubjectMobile: {
        fontSize: 14,
        color: "#424242",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold"
    },
    deleteCartMobile: {
        display: "flex",
        alignItems: "center",
        color: "#1dc3f1",
        fontSize: 14.5
    },
    subjectMobileCart: {
        maxWidth: "100%",
        justifyContent: "center",
        color: "#282828",
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        fontWeight: "bold"
    },
    parentCartMobile: {
        padding: "18px 15px 35px 15px",
        backgroundColor: "white",
        borderRadius: 14
    },
    btnCartMobile: {
        backgroundColor: "#ff2626",
        color: "white",
        width: "40%",
        borderRadius: 8,
        fontSize: 17,
        height: 50,
        textAlign: "center",
        lineHeight: "50px",
        right: 0,
        "&:hover": {
            color: "white"
        }
    },
    itemCartMobile: {
        display: "flex",
        width: "100%",
        borderBottom: "2px solid #ccc",
        marginBottom: "20"
    },
    btnMobileTop: {
        fontSize: 13.5,
        fontWeight: "bold",
        width: 125,
        height: 40,
        backgroundColor: "#555555",
        color: "white",
        borderRadius: 11.5,
        display: "flex",
        alignItems: "center"
    },
    cartBtnMobileTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 23,
        marginBottom: 48
    },
    CoursesDetail: {
        // border: "1px solid #d7d7d7",
        borderTop: "none",
        position: "relative",
        height: "48%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    coursesText: {
        textAlign: "center !important",
        // marginTop: 37,
        // fontFamily: "Swiss721BT",
        fontWeight: 900,
        fontSize: 15.5,
        color: "#000000ab"
    },
    cartBox: {
        color: "#8d8f91",
        fontSize: 13.5,
        fontWeight: "bold"
    },
    subjectCart: {
        maxWidth: "100%",
        justifyContent: "center",
        color: "#282828",
        fontSize: 17.5,
        display: "flex",
        alignItems: "center",
        fontWeight: 900
    },
    cart: {
        backgroundColor: "white",
        padding: "23px 41px",
        flexDirection: "column",
        borderRadius: 14,
        width: "100%"
    },
    circleinRectContainer: {
        width: 63,
        height: 62,
        margin: "0 3px 4px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "absolute",
        top: 50,
        border: "1px solid #c59428",
        clipPath: "Polygon(0% 0%,100% 0%,100% 50% ,0% 50%)",
    },
    circleinRect: {
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        borderRadius: "50%",
        position: "relative",
    },
    coursesIcon: {
        width: 30,
        height: 30,
        position: "relative",
        margin: "auto",
        bottom: 210
    },
    Coursesteacher: {
      margin: "0 auto"
    },
    CoursesTitle: {
        fontFamily: "IRANSansNUMNumber",
        fontSize: 10,
        margin: "10px 0",
        color: "#383b40",
        height: 26,
        borderRadius: 5,
        textAlign: "center",
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            margin: 0
        }
    },
    CoursesDateStart: {
        marginBottom: 7,
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            marginBottom: 0
        }
    },
    CoursesDateStartText1: {
        fontSize: 10.5,
        color: "#383b40",
    },
    // CoursesPrice: {
    //     marginBottom: 5,
    //     [theme.breakpoints.down("xs")]: {
    //         marginBottom: 0
    //     }
    // },
    CoursesPriceText: {
        fontWeight: 100,
        color: "#000",
        fontSize: 17
    },
    FarsiNumber1: {
        display: "inline-block",
        fontFamily: "IRANSansNUMNumber",
        fontWeight: "bold",
        fontSize: 11.5
    },
    CoursesteacherText: {
      textAlign: "center !important",
        color: "#424750",
        fontSize: 10
    },
    NextArrowCourseDetail: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        left: 0,
        top: 210,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-319px -212px"
    },
    PrevArrowCourseDetail: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "-1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        right: 0,
        top: 210,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-267px -212px"

    },
    // style for mobile size

    headFilterMobile: {
        borderTop: "2px solid #e8e8e8",
        borderBottom: "2px solid #e8e8e8",
        width: "100%",
        padding: "10px",
        display: "flex"
    },
    btnFilterMobile: {
        backgroundColor: "#646464",
        height: "40px",
        marginRight: 10,
        color: "#fff",
        "&:focus": {
            outline: "none"
        },
        "&:hover": {
            backgroundColor: "#646464 !important"
        }
    },
    routeFilter: {
        backgroundColor: "#f0f0f0",
        height: 24,
        width: "100%",
        marginTop: "20px",
        display: "flex",
        padding: "2px 10px 2px",
        alignItems: "center"
    },
    boxNewsMobile: {
        [theme.breakpoints.down("md")]: {
            padding: 10
        }
    },
    contentNewsMobile: {
        paddingLeft: 20
    },
    boxArticleMobile: {
        backgroundColor: "#000",
        width: 87,
        height: 25,
        borderRadius: 8
    },
    list: {
        width: "100%",
    },
    fullList: {
        width: 'auto',
    },
    handleBtnFilter: {
        width: "100%",
        backgroundColor: "#fe243d",
        color: "white",
        position: "fixed",
        bottom: 1,
    },
    fixRectCard: {
        height: 85,
        display: "block",
        margin: "0 auto",
        backgroundColor: "white",
        position: "absolute",
        top: 45,
        width: 63,
    },
    parentYellowCircle: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    parentBoxComment: {
        marginTop: "37px",
        [theme.breakpoints.down("xs")]: {
            flexWrap: "nowrap"
        }
    },
    boxDetailMobileSize: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    closeDrawer: {
        width: 20,
        height: 20,
        backgroundColor: "#ccc",
        borderRadius: 50,
        color: "#1a1a1a",
        position: "fixed",
        top: 13,
        right: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        fontFamily: "monospace",
        fontWeight: 500
    },
    dialogSort: {
        width: "100%",
        height: 145
    },
    titleSuccessPurchase: {
        color: "#282828",
        fontSize: 16,
        display: "flex",
        fontWeight: "bold",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: 14
        }
    },
    offersFailed: {
        width: 110,
        height: 21,
        margin: "48px auto 18px",
        textAlign: "center",
        borderRadius: 10.2,
        border: "solid 1px #c59428",
        fontSize: 12,
        lineHeight: "21px"
},
    btnFixedMobile: {
        position: "fixed",
        marginRight: 20,
        bottom: 0,
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        right: 0,
        alignItems: "center",
        zIndex: "99999",
        left: 0,
        padding: "0 30px"
    },

    // icons

    sortIcon: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 21,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-69px -357px",
        }
    },
    shareIcon: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 24,
            height: 23,
            display: "inline-block",
            position: "relative",
            border: "none",
            marginRight: 6,
            top: 2,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-289px -358px",
        },
        color: "rgb(190, 190, 190)",
        fontSize: "12px",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            padding: "unset"
        }
    },
    arrowIconPaginate: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 21,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-797px -580px",
        },
        color: "white"
    },
    multiArrow: {
        cursor: "pointer",
        padding: "0 15px",
        "&::after": {
            content: `''`,
            width: 20,
            height: 21,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-380px -233px",
        },
        display: "flex",
        alignItems: "center",
        fontSize: "15px"
    },
    calendarIcon: {
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 41,
            height: 35,
            marginRight: 25,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-428px -572px",
        },
        fontSize: "14.5px",
        color: "#fff",
        display: "flex",
        alignItems: "center"
    },
    shareIconBig: {
        cursor: "pointer",
        "&::before": {
            content: `''`,
            width: 40,
            height: 40,
            display: "inline-block",
            position: "relative",
            border: "none",
            marginRight: 6,
            top: 2,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-252px -570px",
        },
        color: "#dcdcdc",
        fontSize: "12px",
        display: "flex"
    },
    arrowDownIcon: {
        cursor: "pointer",
        padding: "0 15px",
        "&::after": {
            content: `''`,
            top: 10,
            marginLeft: 5,
            width: 30,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-522px -565px",
        },
    },
    thumbUp: {
        cursor: "pointer",
        padding: "0 10px",
        "&::before": {
            content: `''`,
            top: 4,
            width: 30,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-704px -565px",
        },
    },
    thumbDown: {
        cursor: "pointer",
        padding: "0 10px",
        "&::before": {
            content: `''`,
            top: 10,
            marginLeft: 5,
            width: 30,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-615px -565px",
        },
    },
    filteringIcon: {
        cursor: "pointer",
        padding: "0 15px",
        "&::after": {
            content: `''`,
            width: 56,
            height: 32,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-167px -572px",
        },
    },
    sortingIcon: {
        cursor: "pointer",
        padding: "0 15px",
        "&::after": {
            content: `''`,
            width: 56,
            height: 32,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-75px -572px",
        },
    },
    arrowLeftIcon: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        "&::after": {
            content: `''`,
            width: 20,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-569px -487px",
        },
    },
    bornadelLogo: {
        width: 112,
        height: 42,
        cursor: "pointer",
        backgroundSize: 1200,
        backgroundImage: `url(${IconsLogo})`,
        backgroundPosition: "-905px -441px",
        margin: "55px 13px 70px 14px"
    },
    aboutUs: {
        fontSize: 20,
        padding: "0 19px",
        textAlign: "justify",
        marginBottom: 40,
        width: "100%"
    },
    imgAbout: {
        width: 328,
        height: 218,
        backgroundColor: "#ccc",
        margin: "0 0 0 40px",
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    txtHeadContact: {
        fontSize: 25.5,
        color: "#3b3b3b",
        borderBottom: "2px solid #2fc98e",
        display: "inline-block",
        paddingBottom: 7
    },
    txtTitleContact: {
        fontSize: 25.5,
        color: "#3b3b3b",
        paddingTop: 30
    },
    addressContact: {
        margin: "0 auto",
        width: 421,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    locationIcon: {
        fontSize: 17,
        color: "#5f5f5f",
        display: "flex",
        alignItems: "center",
        "&::before" : {
            content: `''`,
            width: 20,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-729px -148px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 10.5,
            width: "100%"
        }
    },
    tellContactIcon: {
        fontSize: 17,
        color: "#5f5f5f",
        display: "flex",
        alignItems: "center",
        direction: "rtl",
        "&::after" : {
            content: `''`,
            width: 20,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-802px -150px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 10.5,
        }
    },
    emailContactIcon: {
        fontSize: 17,
        color: "#5f5f5f",
        display: "flex",
        alignItems: "center",
        "&::before" : {
            content: `''`,
            width: 20,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-655px -150px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 10.5,
        }
    },
    vectorIcon: {
        "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-372px -653px",
        }
    },
    SimilarItemHeaderFailed: {
        fontSize: 23.5,
        marginBottom: 25,
        width: "100%",
        borderBottom: "1px solid #d7d7d7",
    },
    vectorIconMobile: {
        fontSize: 14,
        color: "#282828",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-372px -653px",
        }
    },
    dailyMobile: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexWrap: "wrap"
    },
    dailyDesktop: {
        fontSize: 17,
        color: "#424242",
        display: "flex",
        flexWrap: "wrap"
    },
    dailyPartMobile: {
        fontSize: 13,
        color: "#424242",
        marginLeft: 10
    },
    teachSuccessIcon: {
        fontSize: 17,
        color: "#282828",
        display: "flex",
        alignItems: "center",
        "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-449px -653px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
            color: "#424242"
        }
    },
    timeSuccessIcon: {
        fontSize: 17,
        color: "#282828",
        display: "flex",
        alignItems: "center",
        "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-526px -653px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
            color: "#424242",
            margin: "8px 0"
        }
    },
    priceIcon: {
        fontSize: 17,
        color: "#282828",
        display: "flex",
        alignItems: "center",
       "&::before": {
           content: `''`,
           width: 34,
           height: 35,
           display: "inline-block",
           position: "relative",
           border: "none",
           backgroundImage: `url(${Icons})`,
           backgroundPosition: "-1177px -410px"
       } ,
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
            color: "#424242",
            // margin: "8px 0"
        }
    },
    hourSuccessIcon: {
        fontSize: 17,
        color: "#282828",
        display: "flex",
        alignItems: "center",
        "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-526px -653px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
            color: "#424242"
        }
    },
    calenderSuccessIcon: {
        fontSize: 17,
        color: "#282828",
        display: "flex",
        alignItems: "center",
        "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-603px -653px",
        }
    },
        trashIcon: {
            "&::before": {
            content: `''`,
            width: 34,
            height: 35,
            display: "inline-block",
            position: "relative",
            border: "none",
            backgroundImage: `url(${IconsLogo})`,
            backgroundPosition: "-372px -653px",
        }
    },
    inputContact: {
        border: "1px solid #898989",
        outline: "none",
        borderRadius: 8,
        width: "96%",
        height: 56,
        fontSize: 14,
    },
    cartIcon: {
        width: 34,
        height: 34,
        cursor: "pointer",
        backgroundSize: 1200,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-115px -40px"
    },
    trashIconBlue: {
        width: 34,
        height: 34,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-293px -654px",
    },
    formContact: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap"
    },
    textareaContact: {
        border: "1px solid #898989",
        outline: "none",
        borderRadius: 8,
        width: "98%"
    },
    labelContact: {
        color: "#3b3b3b",
        fontSize: 19.5
    },
    btnContact: {
        "&:hover": {
            backgroundColor: "#2fc98e !important"
        },
        height: 35,
        float: "right",
        fontSize: 31
    },
    areaMsg: {
        width: "100%",
        border: "none",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        outline: "none"
    }

}))

export default useStyle
