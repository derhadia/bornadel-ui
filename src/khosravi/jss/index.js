import { makeStyles } from "@material-ui/core";
import Icons from '../../assets/images/iconfinal.svg';


const styles = makeStyles((theme) => ({

    knowledgeLogo: {
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "815px -392px",
        backgroundSize: '850px',
        height: '30px',
        width: '30px'
    },
    teacherLogo: {
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "738px -392px",
        backgroundSize: '850px',
        height: '30px',
        width: '30px'
    },
    academicLogo: {
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "775px -396px",
        backgroundSize: '850px',
        height: '30px',
        width: '30px'
    },
    bornaLogo: {
        backgroundImage: `url(${Icons})`,
        backgroundPosition: "-595px  -340px",
        width: 110,
        height: 64,
        backgroundSize: '950px'
    },
    questionCaptcha: {
        fontFamily: 'Rage',
        fontSize: '48px'
    },
    

}));

export default styles;