import React, { useState, useContext } from 'react'
import useStyles from '../../../styles'
import { Grid, Typography } from '@material-ui/core'
import CheckBox from '../../CheckBox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CoursesContext } from '../../../contexts/CoursesContext'

export default function AcademyFilter() {
    const classes = useStyles()
    let { academy, filteAcademy, setFilterAcademy, selectAC} = useContext(CoursesContext)


    return (
        <Grid item className={classes.AcademyFilter}>
            <Typography className={classes.AcademyFilterTitle}>آموزشگاه</Typography>
            <Grid item container wrap="nowrap" className={classes.inputGrid2}>
                <Grid item className={classes.searchiconFilter}>
                </Grid>
                <input type="text" placeholder="جستجو آموزشگاه ..." className={classes.searchInputteacherFilter}
                    onChange={(e) => {
                        var val = e.target.value.replace('\\', '\\\\')
                        var regex = new RegExp(val, 'i')
                        setFilterAcademy(academy.filter((ft) => {
                            return regex.test(ft.academy_Name)
                        }))

                    }}

                />
            </Grid>
            <Grid item container direction="column" className={classes.AcademyFilterBpx}>
                {filteAcademy && filteAcademy.length > 0 ? filteAcademy.map((data, index) => {
                    return (
                        <Grid key={index} item container className={classes.FormControllContainer} >
                            <CheckBox id={data.academy_ID} name={data.academy_Name} setItem={selectAC} />
                        </Grid>
                    )
                }) : null}
            </Grid>
        </Grid>
    )
}
