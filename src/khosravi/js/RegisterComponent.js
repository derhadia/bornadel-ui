import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import '../../../node_modules/animate.css/animate.min.css'
import styles from '../jss';
import './login.css';
import './register.css';



const RegisterComponent = (props) => {
    const classes = styles();
    const [registerCard, setRegisterCard] = useState("register")

    const registerUser = (e) => {
        e.preventDefault();
        setRegisterCard("securityCode")
    }
    const securityCode = (e) => {
        e.preventDefault();
        setRegisterCard("roleUser")
    }

    const loginPage = () => {
        props.history.push("/login")
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
                                    <Form.Control className="mb-0" type="text" placeholder="شماره موبایل یا پست الکترونیک خود را وارد کنید" />
                                </Form.Group>

                                <Form.Group className="mb-0">
                                    <Form.Label>کلمه عبور :</Form.Label>
                                    <Form.Control type="text" placeholder="کلمه عبور" />
                                </Form.Group>
                                <Form.Group className="mb-0">
                                    <Form.Control type="text" placeholder="تکرار کلمه عبور " />
                                </Form.Group>
                                <Form.Group className="mb-1" >
                                    <Grid container spacing={1} className="m-0">
                                        <Grid item md={6} className="p-0">
                                            <Form.Control type="password" style={{ width: "135px" }} />
                                        </Grid>
                                        <Grid item md={6} className="p-0">
                                            <Form.Control type="password" style={{ width: "135px", backgroundColor: "#c7c7c7" }} />
                                        </Grid>
                                    </Grid>
                                </Form.Group>
                                <div className="center">
                                    <Button type="submit" className="center shadow-none">
                                        ثبت نام
                            </Button>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <span >   قبلا ثبت نام کرده ام،<span onClick={loginPage} style={{ cursor: "pointer", color: "#3dbffc", borderBottom: "1px solid" }} >ورود</span> </span>
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
                            <Form>
                                <Grid container spacing={1} className="mt-3 d-flext align-items-center">
                                    <Grid item md={5} className="d-flex justify-content-end ml-2">
                                        <div className={classes.knowledgeLogo}></div>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Form.Check
                                            value={0}
                                            // checked={selectedOption === 'iranian'}
                                            // onChange={this.handleNationalityChange}
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
                                            value={1}
                                            // checked={selectedOption === 'iranian'}
                                            // onChange={this.handleNationalityChange}
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
                                            value={2}
                                            // checked={gender === "0"}
                                            // onChange={this.handeleGenderChange}
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

        </>

    )
}
export default RegisterComponent;