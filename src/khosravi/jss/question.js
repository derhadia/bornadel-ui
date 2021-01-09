import {makeStyles} from '@material-ui/core';



const styles = makeStyles( (theme) =>(
    {

        center :{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        siteRole :{
            '& h2':{
                color: "#c38f20",
                fontSize: "26px",
                marginTop: "52px"
            },        
        },
        rectangle15: {
            width: "132px",
            height: "1px",
            margin: "31px 420px 35px 418px",
            backgroundColor: "#a8a8a8",
          } ,
          accordionSummary :{
            borderRadius: "7px !important" ,
            boxShadow:" 0 0 20.2px 7.8px rgba(0, 0, 0, 0.07) !important",
          }
       

    }
)
)
export default styles;