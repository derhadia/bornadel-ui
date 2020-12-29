import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import '../../../node_modules/animate.css/animate.min.css'
import styles from '../jss';
import './login.css';
import './register.css';
import { fetchPost } from '../../config/Utils';
import Api from '../../constants/Api';
import toastr from 'toastr';


const RegisterComponent = (props) => {
    const classes = styles();
    const [registerCard, setRegisterCard] = useState("register");
    const [state, setState] =
        useState({
            mobileOrEmail: '', password: '',
            repeatPassword: '', captcha: '', confirmCode: '', userType: "Student"
        })

    const registerUser = (e) => {
        e.preventDefault();
        const command = {
            mobileOrEmail: state.mobileOrEmail,
            password: state.password,
            repeatPassword: state.repeatPassword,
            captcha: ''
        }
        fetchPost(Api.RegisterUser, command).then(response => {
            let res = response.responseJSON;
            if (response.success) {
                if (res.isSuccess) {
                    setRegisterCard("securityCode");
                    toastr.success(res.data);
                } else {
                    toastr.error(res.message);
                }
            }
        });

    }
    const securityCodeFunc = (e) => {
        e.preventDefault();
        fetchPost(`${Api.ConfirmMobileOrEmail}?mobileOrEmail=${state.mobileOrEmail}&ConfirmCode=${state.confirmCode}`, null).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                if (res.access_token) {
                    toastr.success("عملیات با موفقیت انجام شد");
                    localStorage.setItem("token", res.access_token);
                    res.userType ? props.history.push('/AcademyPanel') : setRegisterCard("roleUser");
                } else {
                    toastr.error(res.message);
                }
            }

        })
    }

    const loginPage = () => {
        props.history.push("/login")
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    const handleRadio = (e) => {
        const value = e.target.value;
        setState(prevState => ({ ...prevState, userType: value }));

    }

    const userRoleRegister = (e) => {
        e.preventDefault();
        fetchPost(`${Api.SetUserRole}?userRolesEnum=${state.userType}`, null, true).then(response => {
            if (response.success) {
                let res = response.responseJSON;
                if (res.isSuccess) {
                    props.history.push('/AcademyPanel');
                } else {
                    toastr.error(!res.message ? "خطا در برقراری ارتباط با سرور" : res.message);
                }
            }
        });
    }
    return (
        <>
            {
                registerCard === "register" ?
                    <div className="register-card animate__animated animate__fadeIn animate__delay-1s">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-register">
                            <div className="login-title mb-0"><span>ثبت نام</span></div>
                            <Form onSubmit={registerUser}>
                                <Form.Group className="mb-0" >
                                    <Form.Label>نام کاربری :</Form.Label>
                                    <Form.Control className="mb-0" type="text"
                                        name="mobileOrEmail"
                                        placeholder="شماره موبایل یا پست الکترونیک خود را وارد کنید"
                                        value={state.mobileOrEmail} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-0">
                                    <Form.Label>کلمه عبور :</Form.Label>
                                    <Form.Control type="password" name="password"
                                        value={state.password} placeholder="کلمه عبور" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-0">
                                    <Form.Control type="password" name="repeatPassword"
                                        placeholder="تکرار کلمه عبور "
                                        value={state.repeatPassword} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-1" >
                                    <Grid container spacing={1} className="m-0">
                                        <Grid item md={6} className="p-0">
                                            <Form.Control type="text" style={{ width: "135px" }} />
                                        </Grid>
                                        <Grid item md={6} className="p-0">
                                            <Form.Control type="text" style={{ width: "135px", backgroundColor: "#c7c7c7" }} />
                                        </Grid>
                                    </Grid>
                                </Form.Group>
                                <div className="center">
                                    <Button type="submit" className="center shadow-none">
                                        ثبت نام
                                   </Button>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <span style={{ fontSize: "13.5px" }} >   قبلا ثبت نام کرده ام،<span onClick={loginPage} style={{ cursor: "pointer", color: "#3dbffc", borderBottom: "1px solid" }} >ورود</span> </span>
                                </div>
                            </Form>
                        </div>

                    </div>
                    :
                    ""
            }

            {
                registerCard === "securityCode" ?
                    <div className="security-card animate__animated animate__fadeIn animate__delay-1s">
                        <Grid item md={12} className="d-flex justify-content-center align-items-center">
                            <div className={classes.bornaLogo}></div>
                        </Grid>
                        <div className="rectangle-security">
                            <Form onSubmit={securityCodeFunc}>
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
                        </div>

                    </div>
                    :
                    ""
            }
            {
                registerCard === "roleUser" ?
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

        </>

    )
}
export default RegisterComponent;