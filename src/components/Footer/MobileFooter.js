import React from 'react'
import useStyles from '../../styles'
import Bazar from '../../assets/images/Footer/Bazar.jpg'
import googlePlay from '../../assets/images/Footer/googlePlay.jpg'
import IOSType from '../../assets/images/Footer/IOSType.jpg'
import Namad from '../../assets/images/Footer/Namad.jpg'
import resaneDigital from '../../assets/images/Footer/resaneDigital.jpg'
import { Grid, Hidden, Typography, Button } from '@material-ui/core'

export default function MobileFooter() {
    const classes = useStyles();

    return (
        <Grid container className={classes.Mobilefooter}>
            <Grid item container justify="center" alignItems="center" className={classes.MobilefooterBottomLeft}>
                <Grid item className={classes.MobilefooterBottomLeftRect}>
                    <img src={IOSType} className={classes.MobileFooterImage} />
                </Grid>
                <Grid item className={classes.MobilefooterBottomLeftRect}>
                    <img src={googlePlay} className={classes.MobileFooterImage} />
                </Grid>
                <Grid item className={classes.MobilefooterBottomLeftRect}>
                    <img src={Bazar} className={classes.MobileFooterImage} />
                </Grid>
            </Grid>
            <Grid item container direction="column" justify="center" className={classes.MobilefooterSocial}>
                <Grid item container justify="center" className={classes.MobilefooterTopLeft}>
                    <Typography className={classes.footerTopLeftTopText}>برنادل را در شبکه های اجتماعی دنبال کنید</Typography>
                </Grid>
                <Grid item container justify="center">
                    <Grid item container justify="center" className={classes.MobilefooterTopLeftBottom}>
                        <Grid container justify="center" item xs={3}><span className={classes.AparatIcon}></span></Grid>
                        <Grid container justify="center" item xs={3}><span className={classes.LinkdinIcon}></span></Grid>
                        <Grid container justify="center" item xs={3}><span className={classes.TelegramIcon}></span></Grid>
                        <Grid container justify="center" item xs={3}><span className={classes.InstagramIcon}></span></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center" className={classes.MobilefooterTopRight}>
                <Typography className={classes.MobilefooterTopRightText}>هفت روز هفته 24 ساعت شبانه روز پاسخگوی شما هستیم</Typography>
            </Grid>
            <Grid item container className={classes.MobileBigImageContainer}>
                <Grid item className={classes.MobilefooterMainBigImage}  >
                    <p className={classes.FooterBigImageText}>
                        سایت برنادل برای شما طراحی شده است.
                </p>
                    <p className={classes.FooterBigImageText}>
                        آیا دانش وفنونی آموخته اید که می توانید آن را در اختیار دیگران قرار دهیدو کسب درآمد کنید؟
                </p>
                    <p className={classes.FooterBigImageText}>
                        آیا نیاز به آموزش دارید ونمی دانید از چه منبعی آن را به دست آورید؟
                </p>
                    <p className={classes.FooterBigImageText}>
                        شما می توانید بهترین فرآیند آموزش آنلاین را در برنادل پیدا کنید.
                </p>
                </Grid>
                <Grid container>
                    <Grid container justify="center" item xs={4} className={classes.MobileTagFooterContainer} >
                        <Grid container justify="center" alignItems="center" item className={classes.MobileTagFooter} ><span className={classes.oneArrow}></span> مقاله ها</Grid>
                    </Grid>
                    <Grid container justify="center" item xs={4} className={classes.MobileTagFooterContainer} >
                        <Grid container justify="center" alignItems="center" item className={classes.MobileTagFooter} ><span className={classes.oneArrow}></span> اخبار سایت</Grid>
                    </Grid>
                    <Grid container justify="center" item xs={4} className={classes.MobileTagFooterContainer} >
                        <Grid container justify="center" alignItems="center" item className={classes.MobileTagFooter} ><span className={classes.oneArrow}></span> قوانین سایت</Grid>
                    </Grid>
                    <Grid container justify="center" item xs={4} className={classes.MobileTagFooterContainer} >
                        <Grid container justify="center" alignItems="center" item className={classes.MobileTagFooter} ><span className={classes.oneArrow}></span> ابزارهای کمک درسی</Grid>
                    </Grid>
                    <Grid container justify="center" item xs={4} className={classes.MobileTagFooterContainer} >
                        <Grid container justify="center" alignItems="center" item className={classes.MobileTagFooter} ><span className={classes.oneArrow}></span> تماس با ما </Grid>
                    </Grid>
                    <Grid container justify="center" item xs={4} className={classes.MobileTagFooterContainer} >
                        <Grid container justify="center" alignItems="center" item className={classes.MobileTagFooter} ><span className={classes.oneArrow}></span> درباره ما</Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center" className={classes.MobilefooterBottomRight}>
                <Grid item container justify="center" alignItems="center" className={classes.MobilefooterBottomRightInsider}>
                    <Grid item container justify="center" alignItems="flex-start" wrap="nowrap" >
                        <span className={classes.MobileNavigationIcon}></span>
                        <Typography className={classes.MobileAddressText}>اتوبان نواب ، بین کلهر و آزادی ، جنب یوسفیان ، پلاک
                                <Typography component="span" className={classes.MobileAddressText} style={{ display: "inline-block", fontFamily: "IRANSansNUMNumber" }}>653</Typography>
                                 ، واحد <Typography component="span" className={classes.MobileAddressText} style={{ display: "inline-block", fontFamily: "IRANSansNUMNumber" }}>5</Typography></Typography>
                    </Grid>
                    <Grid item container justify="center" >
                        <Grid item container xs={5} justify="flex-end" className={classes.footerBottomRightPhone}>
                            <span className={classes.PhoneIcon}></span>
                            <Typography className={classes.MobileFarsiNumberFooterText}>66 95 56 66 021</Typography>

                        </Grid>
                        <Grid item container xs={7} className={classes.MobilefooterBottomRightMail}>
                            <span className={classes.MailIcon}></span>
                            <Typography className={classes.emalText}>bornadel@gmail.com</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" className={classes.MobileSmalImageContainer}>
                <div className={classes.MobilefooterMainSmallImageRight} >
                    <img src={resaneDigital} className={classes.MobileresaneDigital} />
                </div>
                <div className={classes.MobilefooterMainSmallImage}>
                    <img src={Namad} className={classes.Mobilenamad} />
                </div>
            </Grid>
        </Grid>
    )
}
