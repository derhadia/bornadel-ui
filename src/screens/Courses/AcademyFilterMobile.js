import React, {useContext} from 'react';
import useStyles from "../../styles";
import {CoursesContext} from "../../contexts/CoursesContext";
import {Grid, Typography} from "@material-ui/core";
import CheckBox from "../../components/CheckBox";

const AcademyFilterMobile = ({typeMobile}) => {
    const classes = useStyles()
    let { academy, filteAcademy, setFilterAcademy, selectAC} = useContext(CoursesContext)


    return (
        <>
            <Typography className={classes.AcademyFilterTitle}>آموزشگاه</Typography>
            <Grid item container wrap="nowrap" className={classes.inputGrid2}>
                <Grid item className={classes.searchiconFilter}>
                </Grid>
                <input
                    type="text"
                    style={{width: "100%", marginBottom: 9}}
                    placeholder="جستجو آموزشگاه ..."
                    className={classes.searchInputteacherFilter}
                    onChange={(e) => {
                        const val = e.target.value.replace('\\', '\\\\');
                        const regex = new RegExp(val, 'i');
                        setFilterAcademy(academy.filter((ft) => {
                           return regex.test(ft.academy_Name)
                       }))

                    }}

                />
            </Grid>
            <Grid item className={classes.AcademyFilter}>
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.AcademyFilterBpx}
                >
                    {filteAcademy && filteAcademy.length > 0 ? filteAcademy.map((data, index) => {
                        return (
                            <Grid key={index} item container className={classes.FormControllContainer} >
                                <CheckBox checked={filteAcademy&&filteAcademy.includes(data.academy_ID)}  id={data.academy_ID} name={data.academy_Name} setItem={selectAC} />
                            </Grid>
                        )
                    }) : null}
                </Grid>
            </Grid>
        </>
    )
};

export default AcademyFilterMobile;