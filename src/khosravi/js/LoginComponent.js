import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Grid } from '@material-ui/core'
import Form from 'react-bootstrap/Form';
import '../../../node_modules/animate.css/animate.min.css';
import styles from '../jss';
import './login.css'


const LoginComponent = (props) => {

    const [loginCard, setLoginCard] = useState("login");
    const classes = styles();

    const loginUser = (e) => {
        e.preventDefault();
        console.log(loginCard);
    }
    const forgetPassword = (e) => {
        setLoginCard("forgetpassword");
        e.preventDefault();
    }
    const resetPassword = (e) => {
        setLoginCard("securitycode");
        e.preventDefault();
    }
    const securityCode = (e) => {
        e.preventDefault();
        console.log("OK");
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
                            <div className="login-title"><span>ورود</span></div>
                            <Form onSubmit={loginUser}>
                                <Form.Group className="mb-0" >
                                    <Form.Label>نام کاربری :</Form.Label>
                                    <Form.Control type="email" placeholder="شماره موبایل یا پست الکترونیک خود را وارد کنید" />
                                </Form.Group>

                                <Form.Group className="mb-0">
                                    <Form.Label>کلمه عبور :</Form.Label>
                                    <Form.Control type="password" placeholder="کلمه عبور" />
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
                                <div className="d-flex justify-content-between mt-2">
                                    <span onClick={forgetPassword}>  <a style={{ textDecoration: "none", cursor: "pointer" }}>رمز خود را فراموش کرده ام </a><hr /></span>
                                    <span onClick={register}> <a style={{ textDecoration: "none", cursor: "pointer" }}>ثبت نام</a><hr /></span>
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
                                    <Form.Control type="text" placeholder="شماره موبایل یا پست الکترونیک خود را وارد کنید" />
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
                                    <Form.Control type="password" placeholder="کد 5 رقمی را وارد کنید" />
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
        </>
    )
}
export default LoginComponent;