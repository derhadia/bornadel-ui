import React, {useState} from 'react';
import {Button, Divider, Grid} from "@material-ui/core";
import useStyle from "../../hadi";
import MapContact from "./mapComponent/MapContact";
import {fetchPost} from "../../config/Utils";
import Api from "../../constants/Api";
import toastr from "toastr"


const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tell, setTell] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const [err, setErr] = useState("")

    const classes = useStyle();

    const handleName = event => setName(event.target.value);

    const handleEmail = event => setEmail(event.target.value);

    const handleSubject = event => setSubject(event.target.value);

    const handleTell = event => {
        let reg = /^[0-9\b]+$/;
        let val = event.target.value;
        if (reg.test(val) || val === "") {
            setTell(val)
        }
    };

    const handleMsg = event => setMsg(event.target.value);

    const handleSubmit = event => {
        let regX = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        let errMsg;
        event.preventDefault();
        const body = {
            "contactUs_ID": 0,
            "contactUs_Name": name,
            "contactUs_Subject": subject,
            "contactUs_Email": email,
            "contactUs_Mobile": tell,
            "contactUs_Description": msg,
            "contactUs_ArchiveDate": "",
            "contactUs_ArchiveAspNetUsers_Ref": 0
        }

        if (!subject || subject === "") {
            errMsg = <span style={{color: "red", fontSize: "14px"}}>موضوع را وارد کنید</span>
            toastr.error("موضوع را وارد کنید")
        }
        if (!name) {
            errMsg = <span style={{color: "red", fontSize: "14px"}}>نام و نام خانوادگی خود را وارد کنید</span>
            toastr.error("نام و نام خانوادگی خود را وارد کنید")
        }
        if (email.length > 0 && !regX.test(email)) {
            errMsg = <span style={{color: "red", fontSize: "14px"}}>ادرس پست الکترونیکی خود را به صورت صحیح وارد کنید</span>
            toastr.error("ادرس پست الکترونیکی خود را به صورت صحیح وارد کنید")
        }
        if (tell.length > 0 && tell.length < 11) {
            errMsg = <span style={{color: "red", fontSize: "14px"}}>شماره تلفن خود را به صورت صحیح وارد کنید</span>
            toastr.error("شماره تلفن خود را به صورت صحیح وارد کنید")
        }
        setErr(errMsg)
        if (!errMsg){
            fetchPost(Api.SendDataContact, body).then(res => {
                if (res.data !== null) {
                    toastr.success(res.responseJSON.message)
                    setEmail("")
                    setTell("")
                    setName("")
                    setMsg("")
                    setSubject("")
                }
            })
        }
    };

    return (
        <Grid container className={classes.ArticlesContainer}>
            <Grid
                className={classes.NewsContainer}
                container
                direction="row"
                style={{flexDirection: "row", alignItems: "flex-start"}}
            >
                <Grid item style={{marginBottom: 110}} xl={6} lg={6} md={6} sm={12} xs={12} >
                    <h3 className={classes.txtHeadContact}>
                        اطلاعات برنادل
                    </h3>
                    <h4 className={classes.txtTitleContact}>دفتر مرکزی</h4>
                    <p style={{fontSize: 21.5}}>استان تهران، اتوبان نواب ، میدان جمهوری</p>
                </Grid>
                <Grid style={{marginBottom: 110}} item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <MapContact />
                </Grid>
                <Grid style={{width: "90%", margin: "0 auto"}}>
                    <Divider />
                </Grid>
                <br/>
                <Grid className={classes.addressContact}>
                    <span className={classes.locationIcon}>اتوبان نواب، بین کلهر و آزادی، جنب یوسفیان، پلاک 653، واحد5</span>
                    <Grid style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                        <span className={classes.tellContactIcon}>۰۲۱ ۶۶ ۵۶ ۹۵ ۶۶</span>
                        <span className={classes.emailContactIcon}>bornadeal@gmail.com</span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                className={classes.NewsContainer}
                container
                direction="row"
                style={{flexDirection: "row", alignItems: "flex-start", marginTop: "36px"}}
            >
                <Grid style={{width: "100%"}}>
                    <h3 className={classes.txtHeadContact}>
                        تماس با برنادل
                    </h3>
                    <Grid container>
                        <form onSubmit={handleSubmit} className={classes.formContact}>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <label
                                    className={classes.labelContact}
                                    htmlFor="موضوع"
                                >
                                    موضوع
                                </label>
                                <input
                                    className={classes.inputContact}
                                    value={subject}
                                    onChange={handleSubject}
                                    type="text"
                                    name="موضوع"
                                    maxLength="500"
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <label
                                    className={classes.labelContact}
                                    htmlFor="نام نام خانوادگی"
                                >
                                    نام نام خانوادگی
                                </label>
                                <input
                                    className={classes.inputContact}
                                    type="text"
                                    name="نام نام خانوادگی"
                                    value={name}
                                    onChange={handleName}
                                    maxLength="100"
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <label
                                    className={classes.labelContact}
                                    htmlFor="ایمیل"
                                >
                                    ایمیل
                                </label>
                                <input
                                    className={classes.inputContact}
                                    value={email}
                                    onChange={handleEmail}
                                    type="text"
                                    name="ایمیل"
                                    maxLength="100"
                                />
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                                <label className={classes.labelContact} htmlFor="شماره تماس">شماره تماس</label>
                                <input
                                    className={classes.inputContact}
                                    value={tell}
                                    onChange={handleTell}
                                    type="text"
                                    name="شماره تماس"
                                    maxLength="11"
                                />
                            </Grid>
                            <Grid item xl={12} md={12} lg={12} xs={12} sm={12}>
                                <label className={classes.labelContact} htmlFor="متن پیام">متن پیام</label>
                                <textarea
                                    className={classes.textareaContact}
                                    value={msg}
                                    onChange={handleMsg}
                                    name="متن پیام"
                                    rows={10}
                                    maxLength="1000"
                                />
                            </Grid>
                            <Grid style={{textAlign: "right", width: "98%"}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.btnContact}
                                >
                                    ثبت
                                </Button>
                            </Grid>

                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ContactUs;
