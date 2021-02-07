import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import './profile.css';
import Button from 'react-bootstrap/Button';
import ProfileService from './ProfileService';
import ModalProfilePassword from './ModalProfilePassword';
import toastr from 'toastr';
import { DateInput } from 'react-hichestan-datetimepicker';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styles from '../../../jss/StudentStyle';
import { Grid, Hidden } from '@material-ui/core';
import '../student.css';
import { useHistory } from 'react-router-dom';

const ProfileComponent = () => {

    const [state, setState] = useState({
        name: "",
        lastName: "",
        nationalCode: "",
        birthDate: "",
        certificateNo: "",
        mobile: "",
        email: "",
        bankAccount: "",
        phone: "",
        address: "",
        studentId: 0,
        userRefId: 0
    })

    const classes = styles();
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    useEffect(() => {
        let userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            console.log(userInfo.userId);
            setState(prevState => ({ ...prevState, studentId: userInfo.userId }));
        } else {
            window.location.href = '/login';
        }
    }, []);

    useEffect(() => {
        if (state.studentId > 0) {
            getPerson();
        }
    }, [state.studentId])

    const getPerson = () => {
        let command = {
            student_ID: state.studentId
        }
        ProfileService.getProfile(command, response => {
            if (response.success) {
                console.log(response);
                let res = response.data[0];
                setState(prevState => ({
                    ...prevState,
                    name: res.student_Name,
                    lastName: res.student_LastName,
                    birthDate: res.student_BirthDate,
                    bankAccount: res.student_BankAccount,
                    email: res.student_Email,
                    userRefId: res.student_AspNetUsers_Ref,
                    mobile: res.student_Mobile,
                    phone: res.student_Phone,
                    nationalCode: res.student_NationalCode,
                    certificateNo: res.student_CertificateNo,
                    address: res.student_Address
                }))
            }
        })
    }

    const editProfile = () => {
        let command = {
            student_ID: state.studentId,
            student_AspNetUsers_Ref: state.userRefId,
            student_Name: state.name,
            student_LastName: state.lastName,
            student_NationalCode: state.nationalCode,
            student_Mobile: state.mobile,
            student_Phone: state.mobile,
            student_Address: state.address,
            student_Email: state.email,
            student_BankAccount: state.bankAccount,
            student_BirthDate: state.birthDate,
            student_CertificateNo: state.certificateNo
        };
        ProfileService.updateProfile(command, (response) => {
            if (response.success) {
                toastr.success("پروفایل با موفقیت ویرایش شد");
            }
        });
    }

    const changeState = () =>{
        history.push('/student');
    }

    const handleCheckNmber = (event) =>{
        const regex = /^\d+$/;
        if(!regex.test(event.key)){
            event.preventDefault();
            return false;
        }
        return true;
    }

    return (
        <>
            <Hidden mdUp>
                <Grid item sm={12} xs={12} className="header-menu d-flex align-items-center mt-3">
                    <Grid item sm={6} xs={8} className="d-flex justify-content-center align-items-center">
                        <Grid item sm={6} xs={8} className="d-flex align-items-center"
                        onClick={changeState}>
                            <ArrowRightAltIcon className={`${classes.ArrowIcon} ml-2 mt-2`} />
                            <span className={classes.ProfileIcon}></span>
                            <span className="mr-2">پروفایل</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>

            <Row className="profile-style p-3" >
                <Col lg={12} md={12} className="btn-profile-style pt-3 pr-4 mb-4">
                    <Button className="color-style ml-5" onClick={editProfile} type="submit">ویرایش پروفایل</Button>
                    <ModalProfilePassword className="color-style mr-5"></ModalProfilePassword>
                </Col>


                <Col md={12} lg={12} className="p-0">
                    <Form >
                        <Row>
                            <Col md={4} lg={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        نام
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={state.name}
                                            onChange={handleChange}
                                           
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        نام خانوادگی
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={state.lastName}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} className=" p-0">
                                        کد ملی
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="text"
                                            name="nationalCode"
                                            value={state.nationalCode}
                                            onChange={handleChange}
                                            onKeyDown={handleCheckNmber}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        تاریخ تولد
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <DateInput
                                            value={state.birthDate}
                                            defaultValue={undefined}
                                            name='birthDate'
                                            onChange={handleChange}
                                            style={{ textAlign: 'right' }}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        شمار شناسنامه
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="number"
                                            name="certificateNo"
                                            value={state.certificateNo}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        موبایل
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="number"
                                            name="mobile"
                                            value={state.mobile}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        ایمیل
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={state.email}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        شماره کارت بانکی
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="number"
                                            name="bankAccount"
                                            value={state.bankAccount}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={4} md={4} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={3} md={3} xs={12} className="p-0">
                                        تلفن ثابت
                                    </Form.Label>
                                    <Col lg={9} md={9} xs={12} className="p-0">
                                        <Form.Control
                                            type="number"
                                            name="phone"
                                            value={state.phone}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>


                            <Col lg={12} md={12} xs={12} className="p-0">
                                <Form.Group as={Row}>
                                    <Form.Label column lg={1} md={1} xs={12} className="p-0">
                                        آدرس
                                    </Form.Label>
                                    <Col lg={11} md={11} xs={12} className="p-0">
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={state.address}
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Form>
                </Col>

            </Row>
        </>
    )
}
export default ProfileComponent;
