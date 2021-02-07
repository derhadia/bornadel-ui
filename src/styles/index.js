import { makeStyles } from '@material-ui/core/styles';
import Icons from '../assets/images/iconfinal.svg'
import BGcircleMenu from '../assets/images/bluebackmotion.png'

const useStyles = makeStyles((theme) => ({
    // -----------------------------------------------------------------------------------------
    //                                      header Style
    // -----------------------------------------------------------------------------------------
    header: {
        width: "100%",
        height: 108,
        position: "fixed",
        backgroundColor: "#ffffff",
        zIndex: 99,
    },
    HeaderMobileSize: {
        width: "100%",
        height: 108,
        backgroundColor: "#ffffff",
        zIndex: 99,
    },
    headerTop: {
        height: 48,
        paddingTop: 6,
        backgroundColor: "#fff",
        zIndex: 15
    },
    Insideheader: {
        maxWidth: "1676px",
        margin: "auto",
        // padding: 12,
        paddingTop: 7
    },
    headerInsideNavbar: {
        maxWidth: "1676px",
        marginTop: 5,
        position: "relative",
    },
    badgeCart: {
        backgroundColor: "#ff0000",
        lineHeight: 16,
        fontSize: 15.5,
        height: 16,
        width: 16,
        borderRadius: "50%",
        color: "white",
        position: "absolute",
        bottom: 20,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 2,
        fontFamily: "IRANSansNUMNumber"
    },
    badgeCartMobile: {
        backgroundColor: "#ff0000",
        lineHeight: 16,
        fontSize: 15.5,
        height: 16,
        width: 16,
        borderRadius: "50%",
        color: "white",
        position: "absolute",
        top: 15,
        right: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 2,
    },
    Bornadellogo: {
        width: 42,
        height: 42,
        marginRight: 13,
        cursor: "pointer",
        marginLeft: 14,
        backgroundSize: 1200,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-43px -39px"
    },
    MobileBornadellogoContainer: {
        borderBottom: "1px solid #c59428",
        marginLeft: 18,
        marginRight: 22

    },
    MobileBornadellogo: {
        width: 112,
        height: 42,
        marginRight: 13,
        cursor: "pointer",
        marginLeft: 14,
        backgroundSize: 1200,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-905px -441px"
    },
    MobileBornadellogo2: {
        width: 75,
        height: 42,
        marginRight: 13,
        marginBottom: 10,
        cursor: "pointer",
        backgroundSize: 1200,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-905px -441px"
    },
    searchBox: {
        wifth: 465,
        maxWidth: 465,
        position: "relative",
    },
    searchicon: {
        width: 30,
        height: 39,
        borderRadius: 6,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        display: "flex",
        zIndex: 6,
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 1,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-354px -53px",
        "&::after": {
            content: `''`,
            width: 1,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            marginLeft: -6,
            backgroundPosition: "-730px -61px",
            backgroundColor: "#d9d8da"

        }

    },
    verticalLine: {
        width: 1,
        height: 13,
        backgroundColor: "#d9d8da"
    },
    searchResult: {
        paddingTop: 40,
        backgroundColor: "#fff",
        borderRadius: 6,
        width: "100%",
        minHeight: "100px",
        boxShadow: "0 3px 12px 0 rgba(0,0,0,.2)",
        position: "absolute",
        zIndex: 5
    },
    searchResultContainer: {
        padding: "10px 20px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#fafafa"
        }
    },
    lineINsearchResult: {
        display: "inline-block",
        width: "97%",
        height: 1,
        position: "absolute",
        top: 40,
        right: 7,
        backgroundColor: "#dedede",
        margin: "auto"
    },
    searchResultText: {
        fontSize: 13,
        color: "#474747",
        fontWeight: 700,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "217px 57px",
        }
    },
    searchRecordName: {
        fontSize: 13,
        color: "#07a1b4",
        fontWeight: 500
    },
    searchRecordName2: {
        display: "inline-block",
        fontSize: 13,
        width: 300,
        color: "#07a1b4",
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        position: "relative",
        top: 10,
    },
    searchResultText1: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-260px -335px",
        }
    },
    searchResultText2: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-356px -335px",
        }
    },
    searchResultText3: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-453px -335px",
        }
    },
    searchResultText4: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-549px -335px",
        }
    },
    searchResultText5: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-646px -335px",
        }
    },
    searchResultText6: {
        fontSize: 13,
        color: "#000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundSize: 1600,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-741px -335px",
        }
    },
    CloseIconContainer: {
        position: "absolute",
        zIndex: 6,
        right: 10,
        top: 8,
        cursor: "pointer"
    },
    CloseIcon: {
        color: "#fff",
        backgroundColor: "#bcbcbc !important",
        borderRadius: "50%",
        width: "17px",
        height: "17px"
    },
    inputGrid: {
        flex: "1",
        zIndex: 6
    },
    searchInput: {
        height: 39,
        width: "100%",
        fontFamily: "Yekan",
        paddingLeft: 10,
        borderRadius: 6,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: "none",
        position: "relative",
        right: 1,
        alignContent: "center",
        paddingBottom: "5px",
        "&:focus": {
            outline: "none"
        },
        "&::placeholder": {
            fontSize: 12,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
            paddingLeft: 0
        },
        "&::MsInputPlaceholder": {
            fontSize: 12,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
        },
    },
    headerTopLeft: {
        paddingRight: 3,
        paddingTop: 10
    },
    loginButton: {
        width: 107,
        height: 33,
        padding: 0,
        marginRight: "5px",
    },
    loginIcon: {
        width: 25,
        height: 25,
        borderRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 1,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-284px -58px",
    },
    verticalLineLogin: {
        width: 1,
        height: 15,
        backgroundColor: "#eaeaea"
    },
    loginText1: {
        marginRight: 6,
        fontSize: 12,
        color: "#707070",
    },
    loginText2: {
        marginLeft: 6,
        paddingRight: 5,
        fontSize: 12,
        color: "#707070",
    },
    profileBtn: {
        width: 60,
        height: 33,
        padding: 0,
        marginLeft: 5
    },
    profileIcon: {
        backgroundSize: 950,
        width:35,
        height:35,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-494px -324px"
    },
    basketIconBtn: {
        padding: 0,
        minWidth: 0,
        width: 33,
        height: 33,
        borderRadius: 4,
        marginRight: 14,
        borderRadius: "4px",
        backgroundColor: "#c59428",
        border: "1px solid #eaeaea",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1100,
        backgroundPosition: "-102px -40px",
        "&:hover": {
            border: "solid 1px #eaeaea",
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1100,
            backgroundPosition: "-160px -40px",
        },
    },

    headerMenu: {
        fontSize: 14,
        fontWeight: 500
    },

    headerNavbar: {
        height: 44,
        boxShadow: "0 7px 8px 0 rgba(0,0,0,.04)",
        position: "absolute",
        backgroundColor: "#fff",
        bottom: 0,
        zIndex: 2
    },
    redUnderLuneMenu: {
        height: 1,
        backgroundColor: "#c59428",
        position: "absolute",
        bottom: 0,
        transform: "scale(0)"
    },
    classList: {
        cursor: "default",
        marginRight: 10,
        position: "relative",
        marginLeft: 14,
        paddingRight: 25,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 1000,
            backgroundPosition: "-730px -61px",

        },
        "&:after": {
            content: `''`,
            position: "relative",
            display: "inline-block",
            width: 1,
            height: 16,
            backgroundColor: "#d8d9db",
            top: 5,
            left: 26

        },
    },
    provision: {
        cursor: "pointer",
        padding: "0 15px",
        color:"#000000",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-655px -61px",


        }
    },
    articles: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1000,
            backgroundPosition: "-99px -204px",
        }
    },
    news: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1000,
            backgroundPosition: "-37px -204px",
        }
    },
    commonQuestion: {
        cursor: "pointer",
        padding: "0 15px",
        color :"#000000",
        "&::before": {
            content: `''`,
            width: 21,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-581px -61px",
        }
    },
    AboutUs: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-507px -61px",
        }
    },
    contactUs: {
        cursor: "pointer",
        padding: "0 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-433px -61px",
        }
    },

    blackBackgroundOnWindow: {
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "#00000038",
        position: "absolute"
    },
    //mobile Header---------------------------------
    HeaderMobileSize: {
        backgroundColor: "#fafafa",
        padding: "15px 25px"
    },
    DrawerInsideContainer: {
        minWidth: 280,
        maxWidth: 285,
        // padding: "20px 0px",
        overflow: "scroll",
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "red",
            width: "6px",
        },
        "&::-webkit-scrollbar": {
            display: "none",
            position: "absolute",
            backgroundColor: "transparent"
        }

    },
    MobilearrowMenuItem: {
        width: 20,
        height: 20,
        display: "inline-block",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 900,
        backgroundPosition: "-139px -143px",
    },
    MobilearrowDownMenuItem: {
        width: 20,
        height: 20,
        transform: "rotate(90deg)",
        marginLeft: "auto",
        display: "inline-block",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 900,
        backgroundPosition: "-139px -143px",
    },
    MobilearrowUpMenuItem: {
        width: 20,
        height: 20,
        transform: "rotate(270deg)",
        marginLeft: "auto",
        display: "inline-block",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 900,
        backgroundPosition: "-135px -143px",
    },
    backgroundCollapse: {
        backgroundColor: "#f0f0f1",
        width: "100%",
        padding: "5px 20px 5px 15px"
    },
    MobileMenuItemText: {
        fontSize: 13,
        fontWeight: 500,
        color: "#81858b",
        padding: "10px 0",
        textDecoration: "none",
    },
    MobileMenuItemText2: {
        fontSize: 13,
        fontWeight: 500,
        color: "#81858b",
        textDecoration: "none",
    },
    MobileMenuItem: {
        fontSize: 13,
        color: "#81858b",
        padding: "0px 21px 5px 10px",
        cursor: "pointer",
        textDecoration: "none",
    },
    MobilethirdLayercontainer: {
        display: "flex",
        fleWrap: "wrap",
        padding: "10px 10px",
        cursor: "pointer",
        color: "#000",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",

        }
    },
    horizantalLine: {
        height: 1,
        backgroundColor: "#ccc",
        margin: "10px 0"
    },
    MobilebasketIconBtn: {
        padding: 0,
        minWidth: 0,
        width: 33,
        height: 33,
        borderRadius: 4,
        backgroundColor: "transparent",
        border: "none",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1100,
        backgroundPosition: "-1002px -411px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        fontFamily: "IRANSansNUMNumber"
    },
    MobileLoginBtn: {
        padding: 0,
        minWidth: 0,
        width: 30,
        height: 33,
        borderRadius: 4,
        backgroundColor: "transparent",
        border: "none",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1100,
        backgroundPosition: "-953px -411px",
    },
    MobileVerticalLine: {
        width: 1,
        height: 20,
        backgroundColor: "#aaa",
        position: "relative",
        top: 5
    },
    MobileHeaderMenu: {
        fontSize: 14,
        fontWeight: 500,
        // marginBottom: 20
    },
    MobileclassList: {
        cursor: "default",
        marginRight: 10,
        position: "relative",
        marginLeft: 14,
        paddingTop: 14,
        paddingBottom: 14,
        paddingRight: 10,
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 1000,
            backgroundPosition: "-730px -61px",

        },

    },
    Mobileprovision: {
        cursor: "pointer",
        padding: "14px 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-655px -61px",


        }
    },
    Mobilearticles: {
        cursor: "pointer",
        padding: "14px 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1000,
            backgroundPosition: "-99px -204px",
        }
    },
    Mobilenews: {
        cursor: "pointer",
        padding: "14px 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 6,
            backgroundImage: `url(${Icons})`,
            backgroundSize: 1000,
            backgroundPosition: "-37px -204px",
        }
    },
    MobilecommonQuestion: {
        cursor: "pointer",
        padding: "14px 15px",
        "&::before": {
            content: `''`,
            width: 21,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-581px -61px",
        }
    },
    MobileAboutUs: {
        cursor: "pointer",
        padding: "14px 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-507px -61px",
        }
    },
    MobilecontactUs: {
        cursor: "pointer",
        padding: "14px 15px",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 0,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-433px -61px",
        }
    },


    //    -------------------------------------Menu-------------------------------------------
    MenuContainer: {
        marginTop: 44,
        marginLeft: 14,
        zIndex: 1,
    },
    leftMenuGrid: {
        backgroundColor: "#fff"
    },
    rightMenuGrid: {
        backgroundColor: "#fff",
        boxShadow: "2px 1px 6px #0000000d",
        width: 200,
        zIndex: 3,
    },
    MenuItem: {
        fontSize: 13,
        padding: "11px 8px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "10px 8px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    MenuItemText: {
        fontSize: 13,
        fontWeight: 500,
        textDecoration: "none",
        color: "#000"
    },
    MenuItem1: {
        padding: "11px 8px",
        cursor: "pointer",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "10px 8px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    MenuItem2: {
        padding: "11px 8px",
        cursor: "pointer",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "10px 8px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    MenuItemLogo: {
        width: 20,
        height: 20,
        display: "inline-block",
        marginRight: 7,
        border: "none",
    },
    arrowMenuItem: {
        width: 20,
        height: 20,
        marginLeft: "auto",
        display: "inline-block",
        backgroundImage: `url(${Icons})`,
        backgroundSize: 900,
        backgroundPosition: "-139px -143px",
    },
    SecondLayer: {
        width: 200,
        backgroundColor: "#fff",
        boxShadow: "2px 1px 6px #0000000d",
        zIndex: 2,
        padding: "5px 8px",
        maxHeight: 500,
        minHeight: 376,
        overflowY: "scroll",
        position: "absolute",
        left: 214,
        // "&::-webkit-scrollbar-thumb": {
        //     backgroundColor: "red",
        //     width: "13px",
        // },
        "&::-webkit-scrollbar": {
            display: "none",
            position: "absolute",
            backgroundColor: "blue"
        }
    },
    SecondLayercontainer: {
        padding: "10px 4px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",
            padding: "9px 4px",
            borderTop: " 1px solid #f0f0f1",
            borderBottom: "1px solid #f0f0f1",
        }
    },
    thirdLayer: {
        maxWidth: window.innerWidth - 440,
        position: "absolute",
        padding: "10px 15px",
        left: 414,
        backgroundColor: "#fff",
        boxShadow: "2px 1px 6px #00000040",
        maxHeight: 550,
    },
    thirdLayercontainer: {
        maxWidth: 120,
        display: "flex",
        fleWrap: "wrap",
        padding: "10px 10px",
        cursor: "pointer",
        color: "#000",
        textDecoration: "none",
        "&:hover": {
            color: "#ef394e",
            background: "#f9f9f9",

        }
    },

    // -----------------------------------------------------------------------------------------
    //                                      main Style
    // -----------------------------------------------------------------------------------------
    main: {
        '@media (min-width: 800px)': {
            paddingTop: 108,
        },
        width: "100%",
        backgroundColor: "#f5f5f5"
    },
    Insidermain: {
        // maxWidth: "1366px",
        margin: "auto",
    },
    


    //=====================================home page==================================================
    banneImages: {
        paddingTop: 20,
        maxWidth: "1366px",

    },
    ImagesIntopHome: {
        paddingLeft: 10
    },
    homeMobileContainer:{
        backgroundColor:"#fafafa"
    },
    bannerTopMobile:{
        marginBottom:15
    },
    homeMobileHeader:{
        backgroundColor:"#fff",
        padding:"5px",
        fontSize:13,
        color:"#999999"
    },
    SearchMobileContainer:{
        padding:"10px"
    },
    BannerContainer: {
        paddingRight: 10,
        paddingLeft: 15,
        // width: window.innerWidth > 1676 ? 1376 : `calc(${window.innerWidth}px - 300px)`,
        height: window.innerHeight - 180
    },
    homeMobileImageBox:{
        padding:"10px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 152
    },
    threeImageBox:{
        padding:"10px 15px"
    },
    imageRectBoxMobile:{
        backgroundColor:"#f00",
        borderRadius:10
    },
    education1: {
        position: "relative",
    },
    education2: {
        position: "relative",
    },
    education3: {
        position: "relative",
    },
    educationImage1: {
        borderRadius: 5,
        position: "relative",
        width: "100%",
        height: "100%"
    },
    educationImage2: {
        borderRadius: 5,
        position: "relative",
        width: "100%",
        height: "100%"
    },
    educationImage3: {
        borderRadius: 5,
        position: "relative",
        width: "100%",
        height: "100%"
    },
    educationButton1: {
        width: window.innerWidth > 1285 ? 80 : window.innerWidth < 1286 && window.innerWidth > 1100 ? 70 : 65,
        height: window.innerWidth > 1285 ? 27 : window.innerWidth < 1286 && window.innerWidth > 1100 ? 22 : 17,
        borderRadius: 6,
        backgroundColor: "#0665B8",
        position: "absolute",
        top: "60%",
        left: "10%",
    },
    educationButton2: {
        width: window.innerWidth > 1285 ? 80 : window.innerWidth < 1286 && window.innerWidth > 1100 ? 70 : 65,
        height: window.innerWidth > 1285 ? 27 : window.innerWidth < 1286 && window.innerWidth > 1100 ? 22 : 17,
        borderRadius: 6,
        backgroundColor: "#281B7D",
        position: "absolute",
        top: "60%",
        right: "10%",


    },
    educationButton3: {
        width: window.innerWidth > 1285 ? 80 : window.innerWidth < 1286 && window.innerWidth > 1100 ? 70 : 65,
        height: window.innerWidth > 1285 ? 27 : window.innerWidth < 1286 && window.innerWidth > 1100 ? 22 : 17,
        borderRadius: 6,
        backgroundColor: "#6E3109",
        position: "absolute",
        top: "60%",
        left: "10%",
        backgroundImage: `url(${Icons})`,
    },
    educationButtonMobile1: {
        borderRadius: 6,
        backgroundColor: "#0665b8",
        top: "84%",
        position: "absolute",
        backgroundImage: `url(${Icons})`,
    },
    educationButtonMobile2: {
        borderRadius: 6,
        backgroundColor: "#281b7d",
        position: "absolute",
        top: "84%",
        backgroundImage: `url(${Icons})`,
    },
    educationButtonMobile3:{
        borderRadius: 6,
        top: "84%",
        backgroundColor: "#6e3109",
        position: "absolute",
        backgroundImage: `url(${Icons})`,
    },
    educationButtonIcon1: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "80px -680px",
        position: "absolute",
        right: 10
    },
    educationButtonIcon2: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "80px -680px",
        position: "absolute",
        right: 10
    },
    educationButtonIcon3: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "80px -680px",
        position: "absolute",
        right: 10
    },
    educationButtonMobileIcon: {
        display: "inline-block",
        width: 10,
        height: 15,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 725,
        backgroundPosition: "-646px -78px",
        position: "absolute",
        right: 10
    },
    SignInText: {
        fontSize: window.innerWidth > 1023 ? "0.6rem" :
            window.innerWidth > 1124 ? "0.7rem" : window.innerWidth > 1200 ? "0.8rem" : "0.5rem",

        fontFamily: "IRANSans",
        color: "#fff",
        fontFamily: "IRANSans",
        color: "#fff",
    },
    homeUnderBanner: {
        height: 194,
        backgroundColor: "#f5f5f5"
    },
    homeUnderBannerContainer: {
        width: 402
    },
    homeUnderBannerRight: {
        width: 56,
        height: 56,
        marginRight: 20
    },
    homeUnderBannerLeft: {
        width: 56,
        height: 56,
        marginLeft: 20
    },
    HUBannerRightTop: {
        width: 56,
        height: 56,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 690,
        backgroundPosition: "-375px 184px",
    },
    HUBannerLeftTop: {
        width: 56,
        height: 56,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 690,
        backgroundPosition: "-375px 184px",
    },
    HUBContainerText: {
        alignItems: "center",
        fontSize: 18,
        color: "#313237"
    },
    HUBannerRightbottom: {
        marginTop: 15,
        borderRadius: 11,
        border: "1px solid #c59428",
    },
    HUBannerLefttbottom: {
        marginTop: 15,
        borderRadius: 11,
        border: "1px solid #c59428",
    },
    HUBannerbottomText: {
        fontSize: 14,
        color: "#313237",
    },
    circleMenu: {
        height: 634,
        width: window.innerWidth,
        position: "relative",
        zIndex: 1,
        maxWidth: "1366px",
        backgroundImage: `url(${BGcircleMenu})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    usersStatisticContainer: {
        width: "100%",
        display: "flex",
        height: 315,
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        justifyContent: "center"
    },
    usersStatistiTitleContainer: {

    },
    usersStatistiTitle: {
        textAlign: "center",
        marginTop: 38,
        width: 592,
        borderBottom: "1px solid  #9f9f9f",
        fontSize: 17,
        color: "#333539",
    },
    usersStatisticIcons: {
        width: "100%",
        height: 40,
        margin: "40px 0 15px 0"
    },
    InsideusersStatisticIcons: {
        width: 592,
        height: 40,
        padding: "0 20px",
    },
    statisticIcon1: {
        width: 40,
        height: 40,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-976px -41px",
    },
    statisticIcon2: {
        width: 40,
        height: 40,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-915px -41px",
    },
    statisticIcon3: {
        width: 40,
        height: 40,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-855px -41px",
    },
    statisticIcon4: {
        width: 40,
        height: 40,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-800px -41px",
    },
    usersStatisticBottomText: {
        width: 592,
        height: 40,
        padding: "0 17px",
        margin: "auto"
    },
    usersStatistiText1: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
        paddingLeft: 3,
    },
    usersStatistiText2: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
    },
    usersStatistiText3: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
        paddingRight: 10
    },
    usersStatistiText4: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#0d0d0d",
        paddingRight: 8,

    },
    BestAcademyConyainer: {
        width: "100%",
        marginTop: 10,
        padding: "10px 15px",
        backgroundColor: "#f5f5f5",
        paddingRight: 40,
        paddingLeft: 45,
    },
    BestAcademy: {
        height: 350,
        backgroundColor: "#fff",
        maxWidth: "1282px",
        margin: "auto",
        borderRadius: 10,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)"

    },
    BestAcademyTitleContainer: {
        display: "flex",
        justifyContent: "center",
        marginLeft: window.innerWidth > 1020 && window.innerWidth < 1120 ? 25 : window.innerWidth > 1119 && window.innerWidth < 1300 ? 35 : window.innerWidth > 1300 ? 70 : 40,
    },
    BestAcademyTitle: {
        fontSize: 18,
        color: "#0d0d0d",
        padding: "0 15px",
        border: "2px dashed #c59428"
    },
    BestAcademySliderContainer: {
        paddingRight: 40,
    },
    BannerUnderBestAcademyContainer: {
        paddingTop: 10,
        paddingRight: 40,
        paddingLeft: 45,
        paddingBottom: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        overflow: "hidden",
        maxWidth: "1366px",
    },
    BannerUnderBestAcademyImage: {
        width: "100%",
        height: "100%",
        borderRadius: 5,

    },
    BannerUnderBestAcademy: {
        backgroundColor: "#707070",
        width: "100%",
        height: "370px",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.8)",
    },
    homeCursesComponent: {
        height: 475,
        paddingTop: 10,
        paddingBottom: 15,
        maxWidth: "1282px",
    },
    CursesComponentContainer: {
        // minWidth: 700,
        height: 445,
        backgroundColor: "#ffff",
        paddingRight: 12,
        paddingLeft: 14,
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        maxWidth: window.innerWidth - 320

    },
    HeaderCursesComponentContainer: {
        height: 46,
        width: "100%",
        margin: 0,
        paddingTop: 12,
        marginBottom: 25,
        borderBottom: "2px solid #cccccc"
    },
    HeaderCursesComponentContainer2: {
        height: 46,
        width: "100%",
        margin: "0 20px",
        paddingTop: 12,
        marginBottom: 15,
        borderBottom: "2px solid #cccccc"
    },
    HeaderCursesComponentText: {
        width: 155,
        padding: "0 17px 0 8px",
        fontSize: 17,
        color: "##0d0d0d",
        borderBottom: "2px solid #c59428"
    },
    ReceneViewSlider: {
        height: 330,

    },
    sliderItem: {
        // margin: "0 20px",
        // minWidth: 230
        // position:"absolute"
    },
    PrevArrow: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "-1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        right: 0,
        top: 170,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-267px -212px"

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
    NextArrow: {
        width: 30,
        height: 50,
        backgroundColor: "#fff",
        boxShadow: "1.5px 0 4px 0 rgba(0,0,0,.15)",
        position: "absolute",
        left: 0,
        top: 170,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        cursor: "pointer",
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-319px -212px"
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
    aloneCursesComponentContainer: {
        display: "flex",
        justifyContent: "flex-end",

    },
    aloneCursesComponent: {
        height: 445,
        minWidth: 200,
        backgroundColor: "#ffff",
        position: "relative",
        borderRadius: 8,
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        maxWidth: 200

    },
    HeaderCursesComponentText2: {
        width: 102,
        fontSize: 17,
        color: "#0d0d0d",
    },
    coursesComponentContainer: {
        minWidth: 166,
        paddingTop: 1,
        backgroundColor: "#fff !important",
        borderTop: "none",
        textDecoration: "none",
        borderRadius: 6,
        height: 323,
        "&:hover": {
            boxShadow: "0 0 6px 1px #c3c3c3",
            borderBottom: "none"
        }
    },
    CoursesRect: {
        height: 103,
        width: "100%",
        borderRadius: 6,
        position: "relative",
        zIndex: 2
    },
    CoursesContainer: {
        display: "flex",
        justifyContent: "center"
    },
    circleinRectContainer: {
        width: 85,
        height: 85,
        borderRadius: "50%",
        margin: "auto",
        position: "relative",
        top: -4,
        clipPath: "Polygon(0% 0%,100% 0%,100% 50% ,0% 50%)"
    },
    circleinRect: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "relative",
    },

    circleinRect2: {
        width: 72,
        height: 72,
        backgroundColor: "#d7d7d7",
        borderRadius: "50%",
        margin: "auto",
        position: "relative",
        bottom: 81,
        overflow: "hidden"
    },
    coursesIconCicle: {
        width: "100%",
        height: "100%",
    },
    coursesIcon: {
        width: 30,
        height: 30,
        position: "relative",
        margin: "auto",
        bottom: 210
    },
    coursesIconRect: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    },
    coursesText: {
        textAlign: "center !important",
        marginTop: 37,
        // fontFamily: "Swiss721BT",
        fontWeight: 900,
        fontSize: 14,
        color: "#000000ab"
    },
    CoursesDetail: {
        paddingTop: 40,
        border: "1px solid #d7d7d7",
        borderTop: "none",
        position: "relative",
        bottom: 4,
        height: "70%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        "&:hover": {
            // borderBottom:"none"
        }
    },
    CoursesteacherText: {
        fontSize: 13,
        color: "#383b40",
        marginTop: 5,
    },
    CoursesTitle: {
        fontFamily: "IRANSansNUMNumber",
        fontSize: 15,
        margin: "10px 0",
        color: "#383b40",
        width: 138,
        height: 26,
        borderRadius: 5,
        backgroundColor: "#f2f2f2",
        textAlign: "center",
    },
    Coursesteacher: {
        margin: "auto",
        marginTop: 0,
        marginBottom: 0
    },
    CoursesDateStartText1: {
        fontSize: 13,
        color: "#383b40",
    },
    CoursesDateStartText2: {
        fontSize: 15,
        color: "#fff",
        backgroundColor: "#ff0029",
        width: "100%",
        textAlign: "center",
        height: 43,
        lineHeight: "37px",
        marginTop: 10,
        marginBottom: 10,
    },
    DiscounText: {
        fontSize: 11,
        color: "#8f8f8f",
        textDecoration: "line-through",
    },
    DiscounRect: {
        marginLeft: 5,
        width: 29,
        height: 14,
        borderTopLeftRadius: 7,
        backgroundColor: "#ff0029",
        position: "relative",
        bottom: 2,
        textAlign: "center",
        lineHeight: "19px"
    },
    CoursesDiscount: {
        marginBottom: 10

    },
    DiscounRectText: {
        textAlign: "center",
        lineHeight: "10px",
        color: "#ffffff"
    },
    CoursesDateStart: {
        marginBottom: 7,
    },
    CoursesPrice: {
        marginBottom: 5

    },
    aloneCursesComponentMain: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 34
    },
    ArticleNewsContainer: {
        height: "75%"
    },
    ArticlesNews: {
        padding: "0px 40px 40px 45px",
        backgroundColor: "#f5f5f5",
        maxWidth: "1366px"
    },
    ArticleContainerBox: {
        paddingRight: 15,

    },
    ArticleContainer: {
        minHeight: 313,
        borderRadius: 8,
        padding: 13,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)"
    },
    ArticleHeader: {
        height: 40,
        borderBottom: "1px solid #cccccc",
        marginBottom: 18,
    },
    ArticleHeaderText: {
        fontSize: 19,
        fontWeight: 500,
        color: "#0d0d0d",
        fontFamily: "IRANSans",
        borderBottom: "1px solid #c59428"
    },
    ArticleHeaderText2: {
        fontSize: 14,
        fontWeight: 500,
        color: "#006daa",
        fontFamily: "IRANSans",
        alignSelf: "center", cursor: "pointer",
    },
    articleNewsArrow: {
        display: "inline-block",
        width: 5,
        height: 20,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1200,
        backgroundPosition: "-971px -128px",
        position: "relative",
        top: 5,
        left: 2
    },
    ArticleREctPhotoContainer: {
        width: 124,
        height: 124,
        backgroundColor: "#c1c1c1",
        borderRadius: 5,
        marginRight: 0,
        overflow: "hidden"

    },
    ArticleREctPhoto: {
        width: 124,
        height: 124,
        backgroundColor: "#c1c1c1",
        borderRadius: 5,
        marginRight: 26,
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.2)"
        },
        transition: "transform 0.2s linear"
    },
    ArticleTitle: {
        fontFamily: "IRANSans",
        fontSize: 14,
        color: "#0d0d0d",
        paddingTop: 25
    },
    ArticleLeft: {
        maxWidth: "78%",
        flex: 1,
        overflow: "hidden",
        paddingLeft: 25,
        cursor: "pointer"
    },
    ArticleTextField: {
        fontSize: 11,
        color: "#767676",
    },
    ArticleMain: {
        position: "relative"
    },
    ArticleRCirclePhoto: {
        display: "inline-block",
        width: 42,
        height: 42,
        borderRadius: "50%",
        position: "absolute",
        left: 100,
        top: 18,
        overflow: "hidden"
    },
    ReadMore: {
        cursor: "pointer"
    },
    threeArrow: {
        display: "inline-block",
        width: 13,
        height: 13,
        position: "relative",
        top: 3,
        backgroundImage: `url(${Icons})`,
        // backgroundSize: 750,
        backgroundPosition: "-382px -230px",
    },
    NewsContainer: {
        minHeight: 313,
        borderRadius: 8,
        padding: 13,
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)"


    },
    NewsREctPhoto: {
        width: 65,
        height: 65,
        backgroundColor: "#c1c1c1",
        borderRadius: 5,
        marginRight: 0,
        cursor: "pointer",
        "&:hover": {
            transform: "scale(1.2)"
        },
        transition: "transform 0.2s linear"
    },
    NewsTitle: {
        fontSize: 11,
    },
    academyPartMobile: {
        display: "flex",
        justifyContent: "center",
        padding: "0 15px",
        margin: "20px 0"
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
    titleAcademyMobile: {
        width: 109,
        height: 21,
        margin: "37px 5px 18px 3px",
        padding: "5px 12px 5px 14px",
        borderRadius: "10.1px",
        backgroundColor: "#c59428",
        color: "white",
        display: "flex",
        alignItems: "center"
    },
    // ======================================Courses page=======================================

    CoursesContainer: {
        padding: "25px 30px 35px 30px ",
        backgroundColor: "#f5f5f5",
        // maxWidth: 1366
    },
    groupFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: 200,
        borderRadius: 8,
        padding: "12px 10px",
        maxHeight: 200,
        backgroundColor: "#fff",
        marginBottom: 15,
        padding: "10px 10px",
        border: "1px solid #dedede"

    },
    groupFilterHeaderText: {
        fontWeight: 700,
        fontSize: 14
    },
    groupFilterHeader: {
        fontSize: 12,
        cplor: "#424750",
        borderBottom: "1px solid #dcdcdc"
    },
    groupFilterItem: {
        fontSize: 12,
        cplor: " #424750",
    },
    treelabel: {
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#fff !important"
        },
        "&:focus": {
            backgroundColor: "#fff  !important",
            fontSize: 20
        }
    },
    treelableText: {
        textDecoration: "none",
        color: "#000",
        fontSize: 13
    },
    treeselected: {
        backgroundColor: "#fff  !important",
        "& div div": {
            backgroundColor: "#fff !important"
        }
    },
    levelFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 270,
        borderRadius: 8,
        padding: "10px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
        border: "1px solid #dedede"

    },
    levelFilterContainer: {
        padding: "5px 10px",
        height: 220,
        overflow: "auto",
        // border: "1px solid #c6c6c6",
        borderRadius: 5,
    },
    levelFilterContainerRow: {
        height: 18
    },
    levelFilterTitle: {
        color: "#424750",
        fontSize: 14,
        fontWeight: 700,
        borderBottom: "1px solid #dedede"
    },
    levelFilterText: {
        color: "#424750 !important",
        fontSize: "13px",
    },
    FormControllContainer: {
        height: 25,
        cursor: "pointer",
        marginBottom: 5
    },
    FormControllText: {
        fontSize: 13
    },
    checkBoxFormControl: {
        padding: 10
    },
    levelFilterItemText: {
        fontFamily: "Swiss721BT",
        fontSize: 10,
        fontWeight: "bold",
        color: "#424750",
    },
    teacherFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 350,
        borderRadius: 8,
        padding: "10px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
        overflow: "hidden",
        border: "1px solid #dedede"


    },
    teacherFilterTitle: {
        fontSize: 14,
        fontWeight: 700,
        color: "#424750"
    },
    searchInputteacherFilter: {
        height: 35,
        width: "90%",
        borderRadius: 4,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        border: "1px solid #2fc98e",
        borderLeft: "none",
        position: "relative",
        right: 1,
        alignContent: "center",
        paddingBottom: "5px",
        "&:focus": {
            outline: "none"
        },
        "&::placeholder": {
            fontSize: 12,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
            paddingLeft: 4
        },
        "&::MsInputPlaceholder": {
            fontSize: 11,
            fontFamily: "Yekan",
            color: "#707070",
            textAlign: "left",
        },

    },
    searchiconFilter: {
        width: 25,
        height: 35,
        borderRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        border: "1px solid #2fc98e",
        borderRight: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginRight: 1,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1422,
        backgroundPosition: "-365px -57px",
    },
    teacherFilterBox: {
        minHeight: 280,
        maxHeight: 280,
        padding: "3px 10px",
        marginTop: 7,
        // border: "1px solid #d8d8d8",
        borderRadius: 5,
        overflowY: "scroll",
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#424750",
            width: "13px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#fff",
        }
    },
    startHoursFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 80,
        borderRadius: 8,
        padding: "5px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
        border: "1px solid #dedede"
    },
    startHoursFilterBox: {
        borderRadius: 5,
        // border: "1px solid #d8d8d8",
        padding: "5px 0px"
    },
    startHoursFilterTitle: {
        height: 24,
        fontSize: 14,
        width: "100%",
        borderBottom: "1px solid #dedede",
        fontWeight: 700,
        color: "#424750"
    },
    startHoursFilterSearch: {
        width: 54,
        height: 20,
        borderRadius: 4,
        fontSize: 12,
        fontFamily: "IRANSansNUMNumber",
        textAlign: "center",
        border: "1px solid #2fc98e",
        "&:focus": {
            outline: "none"
        },

    },
    startHoursFilterText: {
        padding: "0 3px",
        fontSize: 13,
        color: "#424750",

    },
    CheckBox: {
        width: 19,
        height: 18,
        position: "relative",
        marginRight: "10px"
    },
    CHhidden: {
        visibility: "hidden",
        // position:"absolute",
        zIndex: 2
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
    AcademyFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 350,
        borderRadius: 4,
        padding: "12px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
        border: "1px solid #dedede",
        borderRadius: 8,

    },
    AcademyFilterTitle: {
        fontSize: 14,
        fontWeight: 700,
        color: "#424750"
    },
    AcademyFilterBpx: {
        minHeight: 215,
        maxHeight: 230,
        marginTop: 15,
        padding: "5px 3px",
        // border: "1px solid #d8d8d8",
        borderRadius: 5,
        overflowY: "scroll",
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#424750",
            width: "13px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#fff",
        }
    },
    priceFilter: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 120,
        borderRadius: 8,
        padding: "5px 10px",
        backgroundColor: "#fff",
        marginBottom: 15,
        border: "1px solid #dedede"
    },
    priceFilterHead: {
        fontWeight: 700,
        borderBottom: "1px solid #dedede",
        fontSize: 14
    },
    priceFilterBox: {
        height: 80,
        // border: "1px solid #d8d8d8",
    },
    priceFilterSearch: {
        display: "inline-block",
        width: 64,
        fontSize: 12,
        fontFamily: "IRANSansNUMNumber",
        height: 20,
        borderRadius: 4,
        textAlign: "center",
        border: "1px solid #2fc98e",
        "&:focus": {
            outline: "none"
        }
    },
    swich1: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 39,
        borderRadius: 8,
        padding: "0px 10px",
        backgroundColor: "#fff",
        marginBottom: 5,
        border: "1px solid #dedede",
        paddingRight: window.innerWidth > 1366 && window.innerWidth < 1401 ? "11%" :
            window.innerWidth > 1400 && window.innerWidth < 1451 ? "16%" : window.innerWidth > 1450 && window.innerWidth < 1501 ? "18%" :
                window.innerWidth > 1500 && window.innerWidth < 1700 ? "20%" : window.innerWidth > 1160 && window.innerWidth < 1500 ? "10%" : window.innerWidth < 1161 ? "5%" : "25%",

    },
    thumbReadyClasses: {
        width: 15,
        height: 15,
        marginLeft: 2,
        marginTop: 2,
    },
    swich2: {
        minWidth: "100%",
        maxWidth: "100%",
        height: 39,
        borderRadius: 8,
        padding: "0px 10px",
        backgroundColor: "#fff",
        marginBottom: 5,
        paddingRight: window.innerWidth > 1366 && window.innerWidth < 1401 ? "11%" :
            window.innerWidth > 1400 && window.innerWidth < 1451 ? "16%" : window.innerWidth > 1450 && window.innerWidth < 1501 ? "18%" :
                window.innerWidth > 1500 && window.innerWidth < 1700 ? "20%" : window.innerWidth > 1160 && window.innerWidth < 1500 ? "10%" : window.innerWidth < 1161 ? "5%" : "25%",
        border: "1px solid #dedede"

    },
    switchText: {
        color: " #424750",
        fontSize: 14,
        fontWeight: 700
    },
    filterButtunContainer: {
        // minWidth: "235px",
        // maxWidth: "235px",
        height: 29,
        borderRadius: 4,
        marginTop: 20,
        position: "sticky",
        zIndex: 2,
        // left:"3%"

    },
    filterButtun: {
        width: "90%",
        height: "35px",
        fontSize: 15
    },
    CoursesContainerRight: {
        flex: 1
    },
    CoursesContainerLeft: {
        paddingLeft: 25,
        // width: window.innerWidth - 300
        flex: 4

    },
    CoursesContainerLeftHeader: {
        height: 31,
        backgroundColor: "#fff",

    },
    coursesComponentDetail: {
        paddingTop: 15
    },
    coursesComponentDetailItem: {
        paddingBottom: 15,
        minWidth: window.innerWidth > 1680 ? 200 : window.innerWidth > 1360 ? 180 : window.innerWidth > 1265 && window.innerWidth < 1361 ? 180 :
            window.innerWidth > 1100 && window.innerWidth < 1266 ? 166 : window.innerWidth > 1022 && window.innerWidth < 1101 ? 166 : 166
    },
    leftheaderIcon: {
        width: 27,
        height: '100%',
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-55px -289px",
        backgroundSize: "1157px"

    },
    leftheaderTitle: {
        fontSize: 14,
        color: "#424750",
        marginLeft: 10
    },
    leftheaderText: {
        width: 80,
        cursor: "pointer",
        fontSize: 14,
        color: "#424750",
        marginLeft: 12,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        "&:hover": {
            backgroundColor: "#ebf7f2"
        }
    },
    activeFilterHeaderLeft: {
        width: 75,
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
        userSelect: "none"
    },
    nothingMessage: {
        fontSize: 25,
        marginTop: 50
    },

    // ======================================CoursesDetail page=======================================

    CourseDetailContainer: {
        backgroundColor: "#f5f5f5",
        padding: "28px 25px",
        maxWidth: 1366,
    },
    CourseDetailBox: {
        backgroundColor: "#fff",
        padding: "22px 27px 40px 27px",
        border: "solid 1px #dadada",
        borderRadius: 6,
    },
    CourseDetailElements: {
        minHeight: 280,
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
    },
    CourseDetailText: {
        fontSize: 22,
        color: "#00000"
    },
    TabDatas: {

    },
    coursePartDetailMobile: {
      [theme.breakpoints.down("sm")]: {
          width: "100%",
          margin: "0 auto"
      }
    },
    CourseDetailTextcontainer: {
      [theme.breakpoints.down("sm")]: {
          order: 1,
          justifyContent: "center"
      }
    },
    teacherImageTabs: {
        width: 120,
        height: 140,
        borderRadius: 6,
        margin: "20px 0",
        marginRight: 28,
        [theme.breakpoints.down("sm")]: {
            margin: 0
        }
    },
    teacherImageTabsItem: {
        width: "100%",
        height: "100%",
        borderRadius: 6
    },
    teacherTabContainer: {
        padding: "0 79px",
      [theme.breakpoints.down("sm")]: {
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 30
      }
    },
    teacherNameTabs: {
        fontSize: 19,
        textAlign: "center",
        marginBottom: 30
    },
    teacherScoreTabs: {
        fontSize: 19,
        backgroundColor: "#00134c",
        color: "#fff",
        borderRadius: 20,
        minWidth: 100,
        textAlign: "center",
        fontFamily: "IRANSansNUMNumber"
    },
    diplomaTitle: {
        backgroundColor: "#3d3d3d",
        fontSize: 21,
        color: "#fff",
        minWidth: 140,
        borderRadius: 30,
        textAlign: "center",
        margin: "42px 25px 25px 67px"

    },
    doclomaTitle: {
        backgroundColor: "#3d3d3d",
        fontSize: 21,
        color: "#fff",
        minWidth: 140,
        borderRadius: 30,
        textAlign: "center",
        marginBottom: 20,
        [theme.breakpoints.down("sm")]: {
            margin: "20px 0",
            fontSize: 18
        }
    },
    teacherEvidence: {
        padding: "20px 79px",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center"
        }
    },
    doplomaText: {
        marginLeft: "67px",
        fontSize: 19,
        marginBottom: 20
    },
    doclomaText: {
        marginLeft: "67px",
        fontSize: 19,
        marginBottom: 60
    },
    downloadLink: {
        color: "#fff",
        backgroundColor: "#2fc98d",
        borderRadius: 15,
        fontSize: 19,
        height: 30,
        minWidth: 90,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20
    },
    academyDisable: {
        color: "#ddd"
    },
    academyManagerName: {
        fontSize: 18,
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    academyManagementTab: {
        padding: "15px 79px",
        [theme.breakpoints.down("sm")]: {
            padding: "15px 0",
            textAlign: "center"
        }
    },
    academyManagerNameText: {
        fontSize: 19,
        color: '#00134c',
        paddingLeft: 5
    },
    MarginTop: {
        paddingTop: 25
    },
    questionContainer: {
        padding: "20px 30px"
    },
    commentContainer: {
        padding: "20px 30px"
    },
    userImageQues: {
        width: 91,
        height: 91,
        borderRadius: "100%",
        backgroundColor: "#0f0",
        border: "1px solid #00134c",
        marginRight: 20
    },
    userImageQues2: {
        width: 60,
        height: 60,
        borderRadius: "100%",
        backgroundColor: "#0f0",
        border: "1px solid #00134c"
    },
    imageProfile:{
        width:"100%"
    },
    typingRect: {
        flex: 1
    },
    typingFieldBox: {
        resize: "none",
        border: "1px solid #dcdcdc",
        height: 150,
        width: "100%",
        padding: "10px 15px",
        outline: "none",
        "&::placeholder": {
            fontFamily: "IRANSansNUMNumber",
            color: "#aaa"
        },
        "&:focus": {
            outline: 'none'
        },
    },

    inputGridQuestions: {
        border: "1px solid #dcdcdc",
        borderRadius: 5,
        padding: "5px 10px",
        marginLeft: 20,
        "&::placeholder": {
            fontFamily: "IRANSansNUMNumber",
            color: "#aaa"
        },
        "&:focus": {
            outline: 'none'
        },
    },
    sendQuestion: {

    },
    sendQuestions: {
        height: 40,
        fontSize: 20,
        marginLeft: 20,
        "&:hover": {
            backgroundColor: "#2fc98d !important"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 14
        }
    },
    questions: {
        marginTop: 70
    },
    comments: {
        marginTop: 70
    },
    answer: {
        marginTop: 40
    },
    typingClass:{
        marginTop:30
    },
    questionsTextContainer: {
        maxWidth: "70%",
        border: "1px solid #dcdcdc",
        padding: 15,
        display: "flex",
        backgroundColor: "#fff",
        borderRadius: 7,
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%"
        }
    },
    commentTextContainer: {
        maxWidth: "70%",
        border: "1px solid #dcdcdc",
        padding: 15,
        display: "flex",
        backgroundColor: "#fff",

    },
    answerTextContainer: {
        maxWidth: "70%",
        border: "1px solid #dcdcdc",
        padding: 15,
        display: "flex",
        backgroundColor: "#fffcdf",
        borderRadius: 7,
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%"
        }
    },
    questionWriter: {
        color: "#03126d"
    },
    questionsTextRect: {
        flex: 1,
        paddingLeft: 15,
        fontSize: 16
    },
    questionDate: {
        color: '#b0b0b0',
        fontSize: 16,
        marginTop: 30,
        fontFamily: "IRANSansNUMNumber",
    },
    CourseDetailClassTitle: {
        backgroundColor: "#2f6c81",
        color: "#ffff",
        padding: "0 14px",
        borderTopRightRadius: 15,
        width: 75,
        height: 33,
        fontSize: 19,
        textAlign: "center"
    },
    CourseDetailClassName4: {
        fontSize: 16,
        color: "#787878"

    },
    CourseDetailClassNameTitle: {
        fontSize: 16,
        color: "#000"
    },
    CourseDetailClassNameTitle1: {
        fontSize: 16,
        color: "#787878"
    },
    CourseDetailClassNameTitle6: {
        fontSize: 16,
        color: "#000",
        paddingLeft: 15,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
    },
    CourseDetailClassNameContainer: {
        marginLeft: "15px",
        marginBottom: 10
    },
    CourseDetailClassNameContainer1: {
        marginTop: 15,
        marginBottom: 0
    },
    CourseDetailClassNameContainer2: {
        marginBottom: 10,
        marginLeft: 20,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0
        }
    },
    CourseDetailClassNameContainer3: {
        marginBottom: 10,
    },
    classPadding: {
        padding: "0 20px 0 0"
    },
    classBorderBottom: {
        borderBottom: "1px solid #b4b4b4",
        justifyContent: "space-between"
    },
    CourseDetailClassName: {
        fontSize: 12,
        color: "#787878",
        padding: "0 3px",
    },
    CourseDetailClassNameNUM: {
        fontFamily: "IRANSansNUMNumber",
        paddingLeft: 3,
        fontSize: 16,
        color: "#787878"
    },
    CourseDetailteacherNameContainer: {
        marginTop: 20,
        flexWrap: "nowrap"
    },
    CourseDetailteacherNameContainer8: {
        marginTop: 20,
        flexWrap: "nowrap",
        fontFamily: "IRANSansNUMNumber",
        borderBottom: "1px solid #b4b4b4",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    CourseDetailteacherNameContainer9: {
        marginTop: 20,
        flexWrap: "nowrap",
        marginRight: 15
    },
    CourseDetailteacherNameContainer5: {
        paddingLeft: 20,
        marginTop: "20px",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }

    },
    teacherDetail: {
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
          flexDirection: "column"
      }
    },
    CourseDetailClassSUMhousrs: {
        marginTop: 20
    },
    CourseDetailteacherNameContainer2: {
        marginTop: 0,
        marginBottom: 10,
        display: "flex",
        flexWrap: "wrap",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    CourseDetailteacherNameTitle: {
        fontSize: 16,
        color: "#000"
    },
    CourseDetailteacherNameTitle7: {
        fontSize: 16,
        color: "#000",
        minWidth: 109
    },
    CourseDetailteacherName: {
        fontSize: 16,
        color: "#787878"
    },
    CourseDetailteacherNameNUM1: {
        fontFamily: "IRANSansNUMNumber",
        paddingLeft: 3,
        fontSize: 16,
        color: "#c59428"
    },
    CourseDetailteacherNameNUM2: {
        fontFamily: "IRANSansNUMNumber",
        paddingLeft: 3,
        fontSize: 16,
        color: "#000"
    },
    CourseDetailteacherFiveCourse: {
        color: "#0a7f51",
        cursor: "pointer",
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
    },
    verticalLine: {
        maxWidth: 1,
        height: 210,
        backgroundColor: "#b4b4b4",
        alignSelf: "center",
        marginRight: 20,
        marginLeft: 28
    },
    CourseDetailAcademyNameContainer: {
        marginTop: 15,
    },
    CourseDetailAcademyNameContainer3: {
        marginTop: 20,
        marginRight: 15
    },
    AcademyBoxContainer: {
        marginTop: 20,

    },
    CourseDetailAcademyTitle: {
        backgroundColor: "#2f6c81",
        color: "#ffff",
        padding: "0 14px",
        borderTopRightRadius: 15,
        width: 95,
        height: 33,
        fontSize: 19,
        textAlign: "center"
    },
    CourseDetailَAcademyImage: {
        display: "inline-block",
        width: 93,
        height: 93,
        border: "1px solid #dadada",
        borderRadius: 8,
    },
    CourseDetailAcademyImageContainer: {
        marginTop: 10,
        marginRight: 15
    },
    CourseLogoANDregisterBox: {
        // width: 230,
        position: "relative",
        height: 295,
        borderRadius: 7,
        backgroundColor: "#f2f2f2",
    },
    CourseLogoANDregisterButton: {
        textAlign: "center",
        width: "100%",
        height: 29,
        marginTop: 10,
        "&:hover": {
            backgroundColor: "#2fc98e !important"
        }
    },
    linkBtnHover: {
        width: "100%"
    },
    CourseLogoANDregisterCircle: {
        display: "inline-block",
        width: 138,
        height: 138,
        backgroundColor: "#b4b4b4",
        borderRadius: "50%",
        margin: "auto",
        marginTop: 0,
    },
    CourseLogoANDregisterTitle: {
        fontSize: 20,
        fontFamily: "Swiss721BT",
        color: "#3d3d3d",
        fontWeight: "bold",
        fontStretch: "condensed",
        margin: "auto",
        marginBottom: 13,
    },
    teacherIcon: {
        width: 20,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-204px -251px",
    },
    CourseLogoANDregisterLogo: {
        display: "inline-block",
        width: 30,
        height: 30,
        margin: "auto",
        marginBottom: 0,
    },
    CourseLogoANDregisterShareLogo: {
        width: 20,
        height: 20,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-204px -251px",
        position: "absolute",
        right: 5
    },
    CourseLogoANDregisterBellLogo: {
        width: 20,
        height: 20,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-257px -251px",
        position: "absolute",
        right: 5,
        top: 27
    },
    teacherANDAcademyDetail: {
        // height: 125,
        backgroundColor: "#fff",
        marginTop: 20,
    },
    CourseDetailteacherDetail: {
        width: 130,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "673px 391px",
        },

        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    CourseDetailAcademyDetail: {
        width: 140,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "744px 391px",
        },
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    CourseDetailِDownloadDetail: {
        width: 150,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "818px 391px",
        },
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    ExtraWidth: {
        height: 35,
        backgroundColor: "#fafafa",
        border: "1px solid #dfdfdf",
        display: "flex",
        flex: 1,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    ExtraWidthComment: {
        height: 35,
        backgroundColor: "#fafafa",
        border: "1px solid #dfdfdf",
        display: "flex",
    },
    ActiveTeacher: {
        width: 130,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "304px 391px",
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    ActiveAcademy: {
        width: 140,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "375px 391px",
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    ActiveDownload: {
        width: 150,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "456px 391px",
        },
        backgroundColor: "#fff",
        border: "none",
        MozuserSelect: "none",
        userSelect: "none",
        borderTop: "1px solid #2fc98e",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    CourseDetailQuestion: {
        width: 130,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "520px 391px",
        },
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    CourseDetailComent: {
        width: 130,
        height: 35,
        backgroundColor: "#fafafa",
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid #dfdfdf",
        borderRight: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "597px 391px",
        },

        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    ActiveQuestion: {
        width: 130,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "153px 391px",
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    ActiveComent: {
        width: 130,
        height: 35,
        fontSize: 16,
        textAlign: "center",
        cursor: "pointer",
        borderLeft: "1px solid #dfdfdf",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "227px 391px",
        },
        backgroundColor: "#fff",
        border: "none",
        borderTop: "1px solid #2fc98e",
        MozuserSelect: "none",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            fontSize: 11
        }
    },
    SimilarItemContainer: {
        backgroundColor: "#fff",
        padding: 22,
        marginTop: 20,
        borderRadius: 6,
        border: "solid 1px #dadada",
        paddingBottom: 40,
        position: "relative",
    },
    SimilarItemHeader: {
        fontSize: 20,
        marginBottom: 25,
        width: "100%",
        borderBottom: "1px solid #d7d7d7",
    },
    CourseDetailImageUnderSimilar: {
        backgroundColor: "#f06eaa",
        borderRadius: 8,
        marginTop: 20,
    },

    typoComment: {
        color: "#dcdcdc",
        fontSize: "13px",
        [theme.breakpoints.only("md")]: {
            fontSize: 12
        }
    },
    lineSpan: {
        borderLeft: "1px solid #dcdcdc",
        height: "20px",
        marginTop: "10px"
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
        fontFamily: "IRANSansNUMNumber",
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
        fontFamily: "IRANSansNUMNumber",
    },





    // -----------------------------------------------------------------------------------------
    //                                      footer Style
    // -----------------------------------------------------------------------------------------
    footer: {
        width: "100%",
        backgroundColor: "#f5f5f5"
    },

    Insidefooter: {
        maxWidth: 1450,
        margin: "auto",
        height: 479,
        backgroundColor: "#f5f5f5"
    },
    footerTop: {
        height: 81,
        borderBottom: "1px solid #c2c2c2"
    },
    footerTopLeft: {
        paddingRight: 112
    },
    footerTopRightText: {
        marginLeft: 54,
        fontSize: 17,
        color: "#4b4b4b"
    },
    footerTopLeftTopText: {
        fontSize: 12,
        color: "#006eab",
        marginBottom: 4
    },
    footerTopLeftBottom: {
        width: 192
    },
    AparatIcon: {
        display: "inline-block",
        width: 19,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-719px -115px",
    },
    LinkdinIcon: {
        display: "inline-block",
        width: 19,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-663px -115px",
    },
    TelegramIcon: {
        display: "inline-block",
        width: 19,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-819px -115px",
    },
    InstagramIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1064,
        backgroundPosition: "-766px -115px",
    },
    footerMain: {
        height: 245,
        borderBottom: "1px solid #c2c2c2"
    },
    footerMainList: {
        // minWidth: 195
    },
    footerMainListItem: {
        listStyle: "none",
        paddingLeft: 45,
        paddingRight: 20,
        marginTop: 41,
        lineHeight: "27px",
        fontSize: 17,
        color: "#006eab"
    },
    oneArrow: {
        display: "inline-block",
        width: 13,
        height: 13,
        position: "relative",
        top: 3,
        backgroundImage: `url(${Icons})`,
        // backgroundSize: 900,
        backgroundPosition: "269px -158px",
    },
    footerMainBigImage: {
        width: "100%",
        height: 158,
        flex: 1,
        marginRight: 30,
        backgroundColor: "#8c8888",
        paddingLeft: 10,
        borderRadius: 10
    },
    FooterBigImageText: {
        fontSize: 14,
        lineHeight: "18px",
        color: "#fff",
    },
    footerMainSmallImageContainer: {
        display: "flex",
        justifyContent: "flex-end"
    },
    footerMainSmallImage: {
        width: 158,
        height: 158,
        marginRight: 40,
        display: "inline-block",
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    namad: {
        width: 158,
        height: 158,
        borderRadius: 8
    },

    footerMainSmallImageRight: {
        width: 158,
        height: 158,
        display: "inline-block",
        marginRight: 20,
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    resaneDigital: {
        width: 158,
        height: 158,
        borderRadius: 8

    },
    footerBottom: {
        borderBottom: "1px solid #c2c2c2"
    },
    footerBottomRight: {
        paddingTop: 14,
        paddingLeft: 44,
    },
    footerBottomRightInsider: {
        width: 510
    },
    NavigationIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-518px -107px",
    },
    AddressText: {
        fontSize: 14,
        color: "#5f5f5f",
    },
    FarsiNumber: {
        display: "inline-block",
        fontFamily: "IRANSansNUMNumber",
        fontSize: 14

    },
    FarsiNumber1: {
        display: "inline-block",
        fontFamily: "IRANSansNUMNumber",
        fontWeight: 700,
        fontSize: 17

    },
    CoursesPriceText: {
        fontWeight: 100,
        color: "#000",
        fontSize: 17
    },
    FarsiNumberFooterText: {
        fontSize: 14,
        color: "#5f5f5f",
        fontFamily: "IRANSansNUMNumber",

    },
    footerBottomRightPhone: {
        width: 200
    },
    footerBottomRightMail: {
        marginLeft: 72
    },
    emalText: {
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 14,
        color: "#5f5f5f"
    },
    PhoneIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-570px -105px",
    },
    MailIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-464px -105px",
    },
    footerBottomLeft: {
        paddingRight: 40,
    },
    footerBottomLeftRect: {
        marginLeft: 5,
        display: "inline-block",
        width: 109,
        height: 31,
        borderRadius: 5,
        backgroundColor: "black",
        cursor: "pointer",
    },
    FooterImage: {
        width: 109,
        height: 31,
        borderRadius: 8,

    },
    //mobile footer---------------------------
    Mobilefooter: {
        width: "100%",
        backgroundColor: "#ebebeb",
        borderTop: "1px solid #c2c2c2"
    },
    MobilefooterBottomLeftRect: {
        marginLeft: 5,
        display: "inline-block",
        width: window.innerWidth < 355 ? 80 : 109,
        height: 31,
        borderRadius: 5,
        backgroundColor: "black",
        cursor: "pointer",
    },
    MobileFooterImage: {
        width: window.innerWidth < 355 ? 80 : 109,
        height: 31,
        borderRadius: 8,
    },
    MobilefooterBottomLeft: {
        padding: "10px 0",
        borderBottom: "1px solid #c2c2c2"

    },
    MobilefooterSocial: {
        padding: "10px 0",
        borderBottom: "1px solid #c2c2c2"
    },
    MobilefooterTopLeftBottom: {
        maxWidth: 400
    },
    MobilefooterTopRight: {
        padding: "10px 0",
        borderBottom: "1px solid #c2c2c2"
    },
    MobilefooterTopRightText: {
        fontSize: 16,
        color: "#4b4b4b",
        textAlign: "center"

    },
    MobileBigImageContainer: {
        padding: "10px 15px",
        borderBottom: "1px solid #c2c2c2"
    },
    MobilefooterMainBigImage: {
        width: "100%",
        flex: 1,
        backgroundColor: "#8c8888",
        paddingLeft: 10,
        borderRadius: 10
    },
    MobileTagFooter: {
        backgroundColor: "#006daa",
        borderRadius: 5,
        color: "#fff",
        fontSize: 11,
        height: 25,
        maxWidth: 110,
        minWidth: 80,
        textAlign: "center"
    },
    MobileTagFooterContainer: {
        padding: 5,
        textAlign: "center"

    },
    MobilefooterBottomRightInsider: {
        width: "100%"
    },
    MobileAddressText: {
        fontSize: 12,
        color: "#5f5f5f",
        // flex: 1
    },
    MobilefooterBottomRight: {
        padding: 5,
        borderBottom: "1px solid #c2c2c2"

    },
    MobileFarsiNumberFooterText: {
        fontSize: 12,
        color: "#5f5f5f",
        fontFamily: "IRANSansNUMNumber",
    },
    MobileemalText: {
        fontFamily: "TimesNewRomanPSMT",
        fontSize: 12,
        color: "#5f5f5f"
    },
    MobileNavigationIcon: {
        display: "inline-block",
        width: 20,
        height: 19,
        marginRight: 3,
        marginTop: 1,
        backgroundImage: `url(${Icons})`,
        backgroundSize: 1000,
        backgroundPosition: "-518px -105px",
    },
    MobilefooterMainSmallImage: {
        width: 120,
        height: 120,
        display: "inline-block",
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    MobilefooterMainSmallImageRight: {
        width: 120,
        height: 120,
        marginRight: 15,
        display: "inline-block",
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    Mobilenamad: {
        width: 120,
        height: 120,
        borderRadius: 8
    },
    MobileresaneDigital: {
        width: 120,
        height: 120,
        borderRadius: 8
    },
    MobileSmalImageContainer: {
        padding: 10
    },
    menuDropdown:{
        top:'53px !important',
        right:'30px !important',
        zIndex:10000
    }

}));
export default useStyles



