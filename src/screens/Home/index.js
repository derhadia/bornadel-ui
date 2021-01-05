import { Grid, Hidden } from '@material-ui/core'
import React from 'react'
import Homedesk from './Homedesk'
export default function Index() {
    return (
        <Grid container>
            <Hidden smDown>
                <Homedesk/>
            </Hidden>
            
        </Grid>
    )
}
