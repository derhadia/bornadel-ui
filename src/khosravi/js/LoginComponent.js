import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Grid } from '@material-ui/core'
import Form from 'react-bootstrap/Form';
import '../../../node_modules/animate.css/animate.min.css';
import styles from '../jss';
import './login.css'
import { fetchPost } from '../../config/Utils';
import Api from '../../constants/Api';
import toastr from 'toastr';


const LoginComponent = (props) => {

    const [state, setState] = useState({
        mobileOrEmail: '',
        password: '',
        confirmCode: '',
        userType: "Student"
    });
    const [loginCard, setLoginCard] = useState("login");
    const classes = styles();

    const loginUser = (e) => {
        e.preventDefault();

        fetchPost(`${Api.Login}?mobileOrEmail=${state.mobileOrEmail}&pass=${state.password}`, null).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                if(res.access_token){
                    localStorage.setItem("token", res.access_token);
                    res.userType ? props.history.push('/AcademyPanel') : setLoginCard("roleUser");
                }else{
                    toastr.error(res.message);
                }
                

            }

        })
    }
    const forgetPassword = (e) => {
        setLoginCard("forgetpassword");
        setState(prevState => ({ ...prevState, mobileOrEmail: '' }));
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
                }else{
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

    const userRoleRegister = () => {

        fetchPost(`${Api.SetUserRole}?userRolesEnum=${state.userType}`, null).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                if (res.isSuccess) {
                    props.history.push('/AcademyPanel');
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
                    <div className="login-card animate__animated animate__fadeIn animate__delay-1s">
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
                                    <Grid container spacing={1} className="m-0">
                                        <Grid item md={6} className="p-0">
                                            <Form.Control type="password" style={{ width: "134px" }} />
                                        </Grid>
                                        <Grid item md={6} className="p-0">
                                            <Form.Control type="password" style={{ width: "134px", backgroundColor: "#c7c7c7" }} />
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
                        </div>
                    </div>
                    :
                    ""
            }
            {
                loginCard === "securitycode" ?
                    <div className="security-card animate__animated animate__fadeIn animate__delay-1s">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-security">
                            <Form onSubmit={securityCode}>
                                <Form.Group className="mb-0" >
                                    <Form.Control type="password" name="confirmCode"
                                        value={state.confirmCode} onChange={handleChange}
                                        placeholder="کد 5 رقمی را وارد کنید" />
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
                    <div className="role-card animate__animated animate__fadeIn animate__delay-1s">
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