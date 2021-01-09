import { Grid, Hidden } from '@material-ui/core'
import React from 'react'
import Homedesk from './Homedesk'
import HomeMobile from './HomeMobile'

export default function Index() {
    return (
        <Grid container>
            <Hidden smDown>
                <Homedesk />
            </Hidden>
            <Hidden mdUp>
                <HomeMobile />
            </Hidden>

        </Grid>
    )
}
