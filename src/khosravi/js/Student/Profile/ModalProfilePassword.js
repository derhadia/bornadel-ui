
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Grid } from '@material-ui/core'
import Form from 'react-bootstrap/Form'
import ProfileService from './ProfileService'
import './modal.css'
import toastr from 'toastr';


const ModalResetPassword = () => {
  const [state, setState] = useState({
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const changePassword = () => {
    // let command = {
    //   currentPassword :state.currentPassword,
    //   newPassword: state.newPassword,
    //   repeatNewPassword : state.repeatNewPassword
    // }
    let command = `CurrentPassword=${state.currentPassword}&NewPassword=${state.newPassword}&RepeatNewPassword=${state.repeatNewPassword}`;

    if (state.currentPassword == "" || state.newPassword == "" || state.repeatNewPassword == "") {
      toastr.error("همه مقادیر را وارد کنید");
    }
    else if (state.newPassword !== state.repeatNewPassword) {
      toastr.error("مقدار کلمه عبور و تکرار آن یکسان نیست");
    }

    ProfileService.changePassword(command, (response) => {
      console.log(response);
      if (response.isSuccess) {
        toastr.success("تغییر رمز عبور با موفقیت انجام شد");
        window.location.href = '/login';
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
      }
       else {
        toastr.error(response.message);
      }

    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <Button style={{ backgroundColor: "#33d599", height: "auto" }} onClick={handleShow}>
        تغییر رمز عبور
        </Button>


      <Modal show={show} onHide={handleClose}>

        <Grid container>
          <Grid item md={12} sm={12} className="close-modal">
            <Modal.Header closeButton>
              <Modal.Title> </Modal.Title>
            </Modal.Header>
          </Grid>

          <Grid item md={12} sm={12} className="center">
            <Modal.Header >
              <Modal.Title> <Button style={{ backgroundColor: "#cccccc", width:"141px", height: "27px", borderRadius:"5px" , color: "#000000", fontSize:"17.5px" ,padding: "0px 24px 0px" }}>تغییر رمز عبور</Button></Modal.Title>
            </Modal.Header>
          </Grid>
        </Grid>


        <Modal.Body>
          <Form >
            <Form.Group style={{ borderBottom: "1px solid #33d698" }} className="pb-3">
              <Form.Control type="password" name="currentPassword"
                value={state.currentPassword} placeholder="رمز قبلی را وارد کنید"

                style={{ border: "1px solid #33d698" }} onChange={handleChange} />
            </Form.Group>

            <Form.Group >
              <Form.Control type="password" name="newPassword" value={state.newPassword}

                placeholder="رمز جدید را وارد کنید" onChange={handleChange} />
            </Form.Group>

            <Form.Group >
              <Form.Control type="password" name="repeatNewPassword" value={state.repeatNewPassword}

                placeholder="رمز جدید را مجدد وارد کنید" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>


        <Modal.Footer>
          <label onClick={changePassword} className="confirm-btn pt-1 pb-1 pr-2 pl-2">
            تایید
            </label>
          <label onClick={handleClose} className="cancel-btn">
            انصراف
            </label>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalResetPassword;