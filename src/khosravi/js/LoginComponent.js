import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Grid } from '@material-ui/core'
import Form from 'react-bootstrap/Form';
import '../../../node_modules/animate.css/animate.min.css';
import styles from '../jss';
import './login.css'
import { fetchGet, fetchPost } from '../../config/Utils';
import Api from '../../constants/Api';
import toastr from 'toastr';
import { SetToken } from './core/axiosHelper';


const LoginComponent = (props) => {

    const [state, setState] = useState({
        mobileOrEmail: '',
        password: '',
        confirmCode: '',
        userType: "Student",
        captcha: '',
        question: '',
        answer: 0
    });
    const [loginCard, setLoginCard] = useState("login");
    const classes = styles();

    const userRoles = {
        "Student": 1,
        "Teacher": 2,
        "Academy": 3
    };

    useEffect(() => {
        getCaptcha();
    }, []);

    const loginUser = (e) => {
        e.preventDefault();
        if (parseInt(state.captcha) === state.answer) {
            fetchPost(`${Api.Login}?mobileOrEmail=${state.mobileOrEmail}&pass=${state.password}&Captcha=${parseInt(state.captcha)}`, null).then(response => {
                if (response.success) {
                    let res = response.responseJSON;
                    if (res.access_token) {
                        localStorage.setItem("token", res.access_token);
                        let userInfo = {
                            username : res.userName,
                            userType : res.userType,
                            userId : res.userId
                        };
                        localStorage.setItem("userInfo" , JSON.stringify(userInfo));

                        res.userType == 1 ? window.location.href = '/student':
                        window.location.href = '/AcademyPanel';
                        // setLoginCard("roleUser");
                    } else {
                        toastr.error(res.message);
                        setState(prevState => ({ ...prevState, captcha: '' }));
                        getCaptcha(); 
                    }
                }
            })
        } else {
            toastr.error("جواب صحیح نمی باشد");
            setState(prevState => ({ ...prevState, captcha: '' }));
            getCaptcha();
        }
    }
    const forgetPassword = (e) => {
        setLoginCard("forgetpassword");
        setState(prevState => ({ ...prevState, mobileOrEmail: '' }));
        e.preventDefault();
    }
    const returnLogin = (e) => {
        setLoginCard("login");
        e.preventDefault();
    }

    const resetPassword = (e) => {
        e.preventDefault();
        fetchPost(`${Api.ForgetPassword}?MobileOrEmail=${state.mobileOrEmail}`, null).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                if (res.isSuccess) {
                    toastr.success(res.data);
                    setLoginCard("login");
                } else {
                    toastr.error(!res.message ? "خطا در برقراری ارتباط با سرور" : res.message);
                }
            }

        })
    }
    const securityCode = (e) => {
        e.preventDefault();
        fetchPost(`${Api.ConfirmMobileOrEmail}?mobileOrEmail=${state.mobileOrEmail}&ConfirmCode=${state.confirmCode}`, null).then(response => {
            if (response.responseJSON.userType !== 0) {
                setLoginCard("roleUser")
            }

        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    const handleRadio = (e) => {
        const { value } = e.target;
        setState(prevState => ({ ...prevState, userType: value }));
    }
    const getCaptcha = () => {

        fetchGet(`${Api.GetCaptcha}`).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                setState(prevState => ({
                    ...prevState, question: ` = ${Object.keys(res.data)[0]}`,
                    answer: res.data[Object.keys(res.data)[0]]
                }))
            }
        });
    }

    const userRoleRegister = (e) => {
        e.preventDefault();
        fetchPost(`${Api.SetUserRole}?userRolesEnum=${state.userType}`, null, true).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                if (res.isSuccess) {
                    if(localStorage.getItem("userInfo")){
                        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
                        userInfo.userType = userRoles[state.userType];
                        localStorage.setItem("userInfo" , JSON.stringify(userInfo));
                    }
                    window.location.href = '/AcademyPanel';
                } else {
                    toastr.error(res.message);
                }
            }
        });
    }

    const register = () => {
        props.history.push("/register");
    }

    return (
        <>
            {
                loginCard === "login" ?
                    <div className="login-card animate__animated animate__fadeIn">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-login">
                            <div className="login-title">ورود</div>
                            <Form onSubmit={loginUser}>
                                <Form.Group className="mb-0" >
                                    <Form.Label>نام کاربری :</Form.Label>
                                    <Form.Control type="text" name="mobileOrEmail"
                                        placeholder="شماره موبایل یا پست الکترونیک خود را وارد کنید"
                                        value={state.mobileOrEmail} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-0">
                                    <Form.Label>کلمه عبور :</Form.Label>
                                    <Form.Control type="password" placeholder="کلمه عبور" name="password"
                                        value={state.password} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="pr-2 mb-1" >
                                    <Form.Check label="مرا به خاطر بسپار" type="checkbox" />
                                </Form.Group>
                                <Form.Group className="mb-1" >
                                    <Grid container spacing={1} className="m-0 rtl">
                                        <Grid item md={6} className="p-0">
                                            <Form.Label>جواب تصویر امنیتی :</Form.Label>
                                            <Form.Control type="text" style={{ width: "134px" }} name="captcha" value={state.captcha} onChange={handleChange} />
                                        </Grid>
                                        <Grid item md={6} className="p-0">
                                            <Grid item md={12} className={`${classes.questionCaptcha} d-flex justify-content-center`}>
                                                {state.question}
                                            </Grid>

                                            {/* <Form.Control type="text" disabled style={{ width: "134px", backgroundColor: "#c7c7c7" }}  
                                            value={state.question}/> */}
                                        </Grid>
                                    </Grid>
                                </Form.Group>
                                <div className="center">
                                    <Button type="submit" className="center shadow-none">
                                        ورود
                                        </Button>
                                </div>
                                <div className="d-flex justify-content-between mt-1">
                                    <span onClick={forgetPassword} style={{ cursor: "pointer", color: "#3dbffc", borderBottom: "1px solid", fontSize: "13.5px" }}>  رمز خود را فراموش کرده ام</span>
                                    <span onClick={register} style={{ cursor: "pointer", color: "#3dbffc", borderBottom: "1px solid", fontSize: "13.5px" }}> ثبت نام</span>
                                </div>
                            </Form>
                        </div>

                    </div>
                    :
                    ""
            }
            {
                loginCard === "forgetpassword" ?
                    <div className="enter-username-card animate__animated animate__fadeIn">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-enter-username">
                            <Form onSubmit={resetPassword}>
                                <Form.Group className="mb-0" >
                                    <Form.Control type="text" value={state.mobileOrEmail}
                                        name="mobileOrEmail" onChange={handleChange}
                                        placeholder="شماره موبایل یا پست الکترونیک خود را وارد کنید" />
                                </Form.Group>

                                <div className="center mt-4">
                                    <Button type="submit" className="center shadow-none">
                                        ارسال کلمه عبور جدید
                                        </Button>
                                </div>
                            </Form>
                            <div className="d-flex justify-content-end mt-2">
                                <span onClick={returnLogin} style={{ cursor: "pointer", color: "#3dbffc", borderBottom: "1px solid", fontSize: "13.5px" }}> بازگشت  </span>
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
            {
                loginCard === "securitycode" ?
                    <div className="security-card animate__animated animate__fadeIn">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-security">
                            <Form onSubmit={securityCode}>
                                <Form.Group className="mb-0" >
                                    <Form.Control type="text" name="confirmCode"
                                        value={state.confirmCode} onChange={handleChange}
                                        placeholder="کد تایید ارسال شده را وارد کنید " />
                                </Form.Group>

                                <div className="center mt-4">
                                    <Button type="submit" className="center shadow-none">
                                        ورود
                                        </Button>
                                </div>
                            </Form>
                            <div className="d-flex justify-content-between mt-2">
                                <span onClick={forgetPassword}>  <a style={{ textDecoration: "none", cursor: "pointer" }}>ارسال مجدد   </a><hr /></span>
                                <span onClick={register}> <a>تایمر </a></span>
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }
            {
                loginCard === "roleUser" ?
                    <div className="role-card animate__animated animate__fadeIn">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>

                        <div className="rectangle-role">
                            <div className="login-title mb-0"><span>با چه عنوانی ثبت نام می کنید ؟ </span></div>
                            <Form onSubmit={userRoleRegister}>
                                <Grid container spacing={1} className="mt-3 d-flext align-items-center">
                                    <Grid item md={5} className="d-flex justify-content-end ml-2">
                                        <div className={classes.knowledgeLogo}></div>
                                    </Grid>
                                    <Grid item md={6}>
                                    <Form.Check
                                            value="Student"
                                            onChange={handleRadio}
                                            type="radio"
                                            checked={state.userType == "Student"}
                                            label="دانش پذیر"
                                            name="role"
                                            id="1"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className="mt-3 d-flext align-items-center">
                                    <Grid item md={5} className="d-flex justify-content-end ml-2">
                                        <div className={classes.teacherLogo}></div>
                                    </Grid>
                                    <Grid item md={6}>
                                    <Form.Check
                                            value="Teacher"
                                            onChange={handleRadio}
                                            type="radio"
                                            checked={state.userType == "Teacher"}
                                            label="مدرس"
                                            name="role"
                                            id="2"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className="mt-3 d-flext align-items-center">
                                    <Grid item md={5} className="d-flex justify-content-end ml-2">
                                        <div className={classes.academicLogo}></div>
                                    </Grid>
                                    <Grid item md={6}>
                                    <Form.Check
                                            value="Academy"
                                            onChange={handleRadio}
                                            type="radio"
                                            checked={state.userType == "Academy"}
                                            label=" آموزشگاه"
                                            name="role"
                                            id="3"
                                        />
                                    </Grid>
                                </Grid>
                                <div className="center mt-4">
                                    <Button type="submit" className="center shadow-none">
                                        ورود
                                        </Button>
                                </div>
                            </Form>
                        </div>

                    </div>
                    :
                    ""
            }
            {/* {
                loginCard === "newpassword" ?
                    <div className="security-card animate__animated animate__fadeIn animate__delay-1s">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-security">
                            <Form >
                                <Form.Group className="mb-0" >
                                    <Form.Control type="text" name="confirmCode"
                                        value={state.confirmCode}
                                        placeholder="رمز جدید خود را وارد کنید" />
                                </Form.Group>

                                <Form.Group className="mb-0" >
                                    <Form.Control type="text" name="repeatConfirmCode"
                                        value={state.confirmCode} 
                                        placeholder="رمز عبور را مجدد وارد کنید     " />
                                </Form.Group>

                                <div className="center mt-4">
                                    <Button type="submit" className="center shadow-none">
                                        ورود
                                     </Button>
                                </div>
                            </Form>
                            
                        </div>
                    </div>
                    :
                    ""
            } */}
        </>
    )
}
export default LoginComponent;