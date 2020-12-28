import React, { useContext } from 'react'
import useStyles from '../../../styles'
import { Grid, Typography } from '@material-ui/core'
import CheckBox from '../../CheckBox';
import {ArticlesContext} from "../../../contexts/ArticlesContext";
export default function TeacherFilter() {
    const classes = useStyles()
    let { teacher2, filteTeacher, setFilterTeacher, selectTH } = useContext(ArticlesContext)

    return (
        <Grid item className={classes.teacherFilter}>
            <Typography className={classes.teacherFilterTitle}>تهیه کننده</Typography>
            <Grid item container wrap="nowrap" className={classes.inputGrid2}>
                <Grid item className={classes.searchiconFilter}>
                </Grid>
                <input type="text" placeholder="جستجو تهیه کننده ..." className={classes.searchInputteacherFilter}
                       onChange={(e) => {
                           var val = e.target.value.replace('\\', '\\\\')
                           var regex = new RegExp(val, 'i')
                           setFilterTeacher(teacher2.filter((ft) => {
                               return regex.test(ft)
                           }))
                       }}
                />
            </Grid>
            <Grid container item direction="column" className={`${classes.teacherFilterBox} CustomScroll`}>
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
