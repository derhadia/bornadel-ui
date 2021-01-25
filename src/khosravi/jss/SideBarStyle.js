import { makeStyles } from '@material-ui/core/styles';
import Icons from '../../assets/images/iconfinal.svg';

const styles = makeStyles((theme) => ({
    //===================================Sidebar====================================
    SideBarContainer: {
        maxWidth: "220px",
        minWidth: "180px",
        height: "100%",
        paddingTop: 25,
        borderRight: "1px solid #d0d0d0",
        borderLeft: "1px solid #d0d0d0"
    },
    SideBarProfile: {
        fontSize: 13,
        color: "#4b4b4b",
        padding: "10px 15px",
        userSelect: "none",
    },
    SidebarMenu: {
        fontSize: 13,
        color: "#4b4b4b",
        padding: "10px 15px",
        cursor: "pointer",
        borderBottom: "1px solid #d0d0d0",
        userSelect: "none",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#d8d8d8"
        },
    }
    
}));
export default styles;