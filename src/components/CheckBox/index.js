import React, { useContext, useEffect, useState } from 'react'
import useStyles from '../../styles'
import { Grid } from '@material-ui/core'


export default function Checkbox({ id, name,setItem }) {
    const classes = useStyles()
    const [active, setActive] = useState(false)
   
    return (
        <Grid
            container
            alignItems="center"
            onClick={() => {setActive(!active); setItem(active,id)}}
            item
        >
            <Grid item className={classes.CheckBox}>
                <span className={active ? classes.ActivecheckboxSpan : classes.checkboxSpan} ></span>
            </Grid>
            <span className={classes.FormControllText}>{name}</span>
        </Grid>
    )
}
