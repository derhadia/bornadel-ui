import { makeStyles } from '@material-ui/core/styles';
import Icons from '../../assets/images/iconfinal.svg';


const styles = makeStyles((theme) => ({
    //===================================Sidebar====================================

    SideBarProfile: {
        border: "1px solid #d0d0d0",
        borderRight: "none",
        borderLeft: "none",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-481px -422px",
        },

    },
    SideBarProfileActive: {
        border: "1px solid #d0d0d0",
        borderRight: "none",
        borderLeft: "none",
        color: "#c88f23 !important",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-539px -422px",
        },

    },
    SideBarHistory: {

        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-597px -422px",
        },
    },
    SideBarHistoryActive: {
        color: "#c88f23 !important",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-656px -422px",
        },
    },
    SideBarQuestion: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-714px -422px",
        },
    },
    SideBarQuestionActive: {
        color: "#c88f23 !important",
        "&::before": {
            content: `''`,
            width: 20,
            height: 20,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-773px -422px",
        },
    },
    SideBarTicket: {
        "&::before": {
            content: `''`,
            width: 20,
            height: 22,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-831px -422px",
        },
    },
    SideBarTicketActive: {
        color: "#c88f23 !important",
        "&::before": {
            content: `''`,
            width: 20,
            height: 22,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 2,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            // backgroundSize: 800,
            backgroundPosition: "-890px -422px",
        },
    },
    
    //==================================AppBar=================================================
    StudentAppBar: {
        height: 30,
        backgroundColor: "#d2d2d2",
    },
    StudentScoreContainer: {
        padding: "0 3px",
        marginLeft: 10,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 4,
        marginBottom: 4
    },
    StudentAppBarICONContainer: {
        flex: 1,
        paddingRight: 20
    },
    StudentAppBarICON1: {
        cursor: "pointer",
        marginRight: 10,
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
            backgroundPosition: "-186px -422px",
        },
    },
    StudentAppBarICON2: {
        cursor: "pointer",
        marginRight: 5,
        "&::before": {
            content: `''`,
            width: 25,
            height: 25,
            display: "inline-block",
            position: "relative",
            border: "none",
            top: 6,
            marginRight: 7,
            backgroundImage: `url(${Icons})`,
            backgroundPosition: "-149px -422px",
            backgroundSize: 1200
        },
    },
    StudentAppBarICON3: {
        cursor: "pointer",
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
            backgroundPosition: "-67px -422px",
        },
    },
    ProfileIcon:{
        backgroundSize:1300,
        backgroundImage:`url(${Icons})`,
        backgroundPosition:"-438px -1074px",
        width:30,
        height:30,
    },
    HistoryIcon:{
        backgroundSize:1300,
        backgroundImage:`url(${Icons})`,
        backgroundPosition:"-546px -1074px",
        width:30,
        height:30,
    },
    QuestionIcon:{
        backgroundSize:1300,
        backgroundImage:`url(${Icons})`,
        backgroundPosition:"-871px -1074px",
        width:30,
        height:30, 
    },
    TicketIcon:{
        backgroundSize:1300,
        backgroundImage:`url(${Icons})`,
        backgroundPosition:"-980px -1074px",
        width:30,
        height:30,
    },
    ArrowIcon:{
        fontSize:30,
    }
 
}));
export default styles;