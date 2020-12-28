import { makeStyles } from "@material-ui/core";
import Icons from '../../assets/images/iconfinal.svg';


const styles = makeStyles((theme) => ({

    knowledgeLogo: {
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "242px -29px;",
        backgroundSize: '850px',
        height: '30px',
        width: '30px'
    },
    teacherLogo: {
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "158px -29px",
        backgroundSize: '850px',
        height: '30px',
        width: '30px'
    },
    academicLogo:{
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "202px -29px",
        backgroundSize: '850px',
        height: '30px',
        width: '30px'
    },
    bornaLogo:{
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-595px  -340px",
        width: 110,
        height: 64,
        backgroundSize:'950px'
    }

}));

export default styles;