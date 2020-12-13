import React, { useContext, useEffect } from 'react'
import { Fade, Grid, Typography } from '@material-ui/core'
import useStyles from '../../styles'
import { MasteLayoutContext } from '../../contexts/MasteLayoutContext'
import FirstLevel from './FirstLevel'
import SecondLevel from './SecondLevel'
import ThirdLevel from './ThirdLevel'

export default function Menu() {
    const classes = useStyles();
    let { showMenu, setShowMenu, HandleShow, HandleExit, firstlayout, SecondLayer, filterSecondmenu, allmenu,
        filterThirdmenu, SecondLevelShow, setSecondLevelShow, ThirdLevelShow, setThirdLevelShow
        , ThirdLayer, secondHeight, setSecondHeight } = useContext(MasteLayoutContext)
    return (
        <Grid container item className={classes.MenuContainer}>
            <FirstLevel />
            <SecondLevel />
            <ThirdLevel />
        </Grid>
    )
}
