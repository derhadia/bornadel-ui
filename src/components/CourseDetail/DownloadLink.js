import { Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { CourseDetailContext } from '../../contexts/CourseDetailContext'
import useStyles from '../../styles'

export default function DownloadLink() {
    const classes=useStyles()
    let{downloadLink}=useContext(CourseDetailContext)
    return (
        <Grid container style={{minHeight:100}}>
            {downloadLink && downloadLink.map((item, index) => {
                    return (
                        <Grid container key={index}>
                            <Grid  className={classes.doclomaText}>{item.classSubjectDoc_DocumentName}</Grid>
                            <a href={item.classSubjectDoc_Link} target="_blank" download className={classes.downloadLink}> دانلود</a>
                        </Grid>
                    )
                })
                }
        </Grid>
    )
}
