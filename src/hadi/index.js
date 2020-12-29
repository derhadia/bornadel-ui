import { makeStyles } from '@material-ui/core/styles';
import Icons from '../assets/images/icon.svg'

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
        alignItems: "center"
    },
    circleinRect2: {
        width: 102,
        height: 102,
        borderRadius: "50%",
        margin: "0 auto",
        position: "relative",
        top: 261,
        overflow: "hidden",
        display: "block"
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
        justifyContent: "center"
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
            width: "100%"
        }
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
        width: "27px",
        height: "27px",
        display: "inline-block",
        borderRadius: "50px"
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
        width: "80%",
        height: "100%",
        "&:hover": {
            backgroundColor: "#2ec88c !important"
        }
    },
    filterButtonContainer: {
        minWidth: "235px",
        maxWidth: 287,
        width: "100%",
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
        justifyContent: "center"
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
        flex: 1
    },
    ArticlesContainerLeft: {
        paddingLeft: 25,
        // width: window.innerWidth - 300
        flex: 4

    },
    treeLableText: {
        fontSize: 14
    },
    checkboxArticle: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end"
    },

    // style for mobile size

    headFilterMobile: {
        borderTop: "2px solid #e8e8e8",
        borderBottom: "2px solid #e8e8e8",
        width: "100%",
        padding: "10px"
    },
    btnFilterMobile: {
        backgroundColor: "#646464",
        height: "40px",
        color: "#fff"
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
        color: "white"
    },
    parentYellowCircle: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
    parentBoxComment: {
        marginTop: "37px",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexWrap: "nowrap"
        }
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
    }

}))

export default useStyle
