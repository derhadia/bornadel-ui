import React, {useContext} from 'react';
import useStyles from "../../styles";
import {ArticlesContext} from "../../contexts/ArticlesContext";
import {Grid, Typography} from "@material-ui/core";
import CheckBox from "../../components/CheckBox";

const TeacherFilterMobile = () => {
    const classes = useStyles()
    let { teacher2, filteTeacher, setFilterTeacher, selectTH } = useContext(ArticlesContext)

    return (
        <>
            <Typography style={{fontSize: 17, color: "#323232"}} className={classes.teacherFilterTitle}>مدرس</Typography>
            <Grid item container wrap="nowrap" className={classes.inputGrid2}>
                <Grid item className={classes.searchiconFilter}>
                </Grid>
                <input
                    type="text"
                    placeholder="جستجو مدرس ..."
                    style={{width: "100%", marginBottom: 9}}
                    className={classes.searchInputteacherFilter}
                    onChange={(e) => {
                    const val = e.target.value.replace('\\', '\\\\');
                    const regex = new RegExp(val, 'i');
                    setFilterTeacher(teacher2.filter((ft) => {
                        return regex.test(ft)
                        }))
                    }}
                />
            </Grid>
            <Grid item className={classes.teacherFilter} style={{height: "unset"}}>
                <Grid
                    container
                    item
                    direction="column"
                    className={`${classes.teacherFilterBox} CustomScroll`}
                    style={{maxHeight: "unset"}}
                >
                    {filteTeacher && filteTeacher.length > 0 ? filteTeacher.map((data, index) => {
                        return (
                            <Grid key={index} item container className={classes.FormControllContainer} >
                                <CheckBox id={data[0]} name={data[1]} setItem={selectTH} />
                            </Grid>
                        )
                    }) : null}
                </Grid>
            </Grid>
        </>

    )
};

export default TeacherFilterMobile;