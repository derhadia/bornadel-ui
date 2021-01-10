import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import './provision.css';
import styles from '../jss/provision';
import { fetchPost } from '../../config/Utils';
import Api from '../../constants/Api';


const ProvisionComponent = () => {
    const classes = styles();
    const [state, setState] = useState({ provisionStudents: [], provisionTeachers: [], provisionAcademies: [] });

    useEffect(() => {
        getAllProvision();
    }, []);

    const getAllProvision = () => {
        let command = {
            provision: "ALL"
        }
        fetchPost(Api.GetAllProvision, command).then(response => {
            if (response.success) {
                let res = response.responseJSON.data;
                let students = res.filter(item => item.provision_Type == 1);
                let teachers = res.filter(item => item.provision_Type == 2);
                let academies = res.filter(item => item.provision_Type == 3);

                setState(prevState => ({ ...prevState, provisionStudents: students }));
                setState(prevState => ({ ...prevState, provisionTeachers: teachers }));
                setState(prevState => ({ ...prevState, provisionAcademies: academies }));
            }
        });
    };

    return (
        <>
            <Grid container  className="site-rule">

                <Grid item md={12} sm={12} className={classes.center} style={{width:"100%"}}>
                    <h2>قوانین و مقررات سایت </h2><br />
                </Grid>

                <Grid item md={12} className="center" style={{width:"100%"}}>
                    <div className="Rectangle-15"></div>
                </Grid>

                <Grid item md={12} className={classes.center}>
                    <span >
                        توسعه اینترنت روش‌های خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز تعداد بیشتری از مردم را
                        به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می‏‌کند. امروز دیگر افراد این روش خرید را بیشتر منطبق بر شرایط
                        زندگی مدرن می‏‏‏‌بینند. ویژگی‏‏‏‌ها و طبیعت خرید اینترنتی با روحیات و نیازهای رو به رشد ما هماهنگ‏‏‌تر شده است. همه سخت در
                        حال تلاش برای پیشرفت‏‏‌های شخصی و جمعی خود هستیم.
                </span>
                </Grid>
                {
                    state.provisionStudents.length > 0 ?
                        <Grid item md={12} className="mt-5">
                            <Grid container className={classes.center}>

                                <Grid item md={12} className={classes.center}>
                                    <div className="title-role center">
                                        <label>قوانین و مقررات سایت برای دانشجو</label>
                                    </div>
                                </Grid>


                                <Grid item md={12} className="center mb-5">
                                    <div className="card-role">
                                        <Grid container className="direction-col">
                                            <Grid item md={10} className="flex-item-left">
                                                <Grid container>
                                                    {
                                                        state.provisionStudents.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <Grid item md={12} className="pr-2 pl-2" style={{textAlign:"justify"}}>
                                                                        <p>{item.provision_Description}</p>
                                                                    </Grid>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Grid> 
                                            </Grid>

                                            <Grid item md={2}  className="flex-item-right">
                                                <div className="pic"></div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>
                        : ''}
                {
                    state.provisionTeachers.length > 0 ?

                        <Grid item md={12} className="mt-5">
                            <Grid container className={classes.center}>

                                <Grid item md={12} className={classes.center}>
                                    <div className="title-role center">
                                        <label>قوانین و مقررات سایت برای مدرس</label>
                                    </div>
                                </Grid>


                                <Grid item md={12} className="center mb-5">
                                    <div className="card-role">
                                        <Grid container className="direction-col">
                                            <Grid item md={10} className="flex-item-left">
                                                <Grid container>
                                                    {
                                                        state.provisionTeachers.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <Grid item md={12}>
                                                                        <p>{item.provision_Description}</p>
                                                                    </Grid>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </Grid>

                                            <Grid item md={2}  className="flex-item-right">
                                                <div className="pic"></div>
                                            </Grid>

                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        : ''}
                {
                    state.provisionAcademies.length > 0 ?

                        <Grid item md={12} className="mt-5">
                            <Grid container className={classes.center}>

                                <Grid item md={12} className={classes.center}>
                                    <div className="title-role center">
                                        <label>قوانین و مقررات سایت برای آموزشگاه</label>
                                    </div>
                                </Grid>


                                <Grid item md={12} className="center mb-5">
                                    <div className="card-role">
                                        <Grid container className="direction-col">
                                            <Grid item md={10} className="flex-item-left">
                                                <Grid container>
                                                    {
                                                        state.provisionAcademies.map((item, index) => {
                                                            return (
                                                                <>
                                                                    <Grid item md={12}>
                                                                        <p>{item.provision_Description}</p>
                                                                    </Grid>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </Grid>

                                            <Grid item md={2}  className="flex-item-right">
                                                <div className="pic"></div>
                                            </Grid>

                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        : ''
                }
            </Grid>
        </>
    )
}

export default ProvisionComponent;