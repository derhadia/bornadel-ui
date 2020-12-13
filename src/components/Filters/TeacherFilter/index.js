import React, { useState, useContext, useEffect } from 'react'
import useStyles from '../../../styles'
import { Grid, Typography } from '@material-ui/core'
import CheckBox from '../../CheckBox';
import { CoursesContext } from '../../../contexts/CoursesContext'
export default function TeacherFilter() {
    const classes = useStyles()
    let { teacher2, filteTeacher, setFilterTeacher, selectTH } = useContext(CoursesContext)

    return (
        <Grid item className={classes.teacherFilter}>
            <Typography className={classes.teacherFilterTitle}>استاد</Typography>
            <Grid item container wrap="nowrap" className={classes.inputGrid2}>
                <Grid item className={classes.searchiconFilter}>
                </Grid>
                <input type="text" placeholder="جستجو استاد ..." className={classes.searchInputteacherFilter}
                    onChange={(e) => {
                        var val = e.target.value.replace('\\', '\\\\')
                        var regex = new RegExp(val, 'i')
                        setFilterTeacher(teacher2.filter((ft) => {
                            return regex.test(ft)
                        }))
                    }}
                />
            </Grid>
            <Grid item direction="column" className={`${classes.teacherFilterBox} CustomScroll`}>
                {filteTeacher && filteTeacher.length > 0 ? filteTeacher.map((data, index) => {
                    return (
                        <Grid key={index} item container className={classes.FormControllContainer} >
                            <CheckBox id={data[0]} name={data[1]} setItem={selectTH} />
                        </Grid>
                    )
                }) : null}
            </Grid>
        </Grid>
    )
}
