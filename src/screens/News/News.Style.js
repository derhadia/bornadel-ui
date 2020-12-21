import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    padding: 35,
    flexWrap: "nowrap",
    "& .right": {
      display: "flex",
      flexDirection: "column",
      marginRight: 30,
      "& .box":{
          height:150,
          width:"100%",
          marginBottom:10,
          backgroundColor:"#ffff00"
      }
    },
    "& .left": {
      flexDirection: "column",
      "& .box":{
        height:230,
        width:"100%",
        margin:"10px 0",
        backgroundColor:"#ffff00"
    },
    "& .pagination":{
        backgroundColor:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        margin:"5px 0",
        borderRadius:5
    }
    },
    "& .content": {
        padding: "0 20px",
        margin: "10px 0",
        backgroundColor: "#fff",
        borderRadius:5,
        "& .caption":{
            borderBottom: "1px solid #b9b9b9",
        }
      },
  },
  filter: {
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  card: {
    padding: "20px 0",
    borderBottom: "1px solid #b9b9b9",
    "&:last-child":{
        border:"none"
    },
    flexWrap:"nowrap",
    "& .left": {
      "& .subTitle": {
        display: "flex",
        justifyContent: "flex-start",
        margin: "10px 0",
        "& img": {
          width: 25,
          borderRadius: "50%",
          marginRight: 10,
        },
        "& h6": {
          marginLeft: 10,
        },
      },
      "& .body": {
        display: "flex",
        "& img": {
          width: 72,
          height: 72,
          borderRadius: 7,
          margin: "0 10px 0",
        },
      },
      "& .footer": {
        display: "flex",
        justifyContent: "flex-end",
      },
    },
    "& .right": {
      margin: "0 20px 0 0",
      "& img": {
        width: 128,
        height: 128,
        borderRadius: 7,
      },
    },
  },
}));
export default styles;
