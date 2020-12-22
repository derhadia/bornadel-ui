import React, { useContext } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import useStyles from '../../styles'
import { CoursesContext } from '../../contexts/CoursesContext'
import animateScrollTo from 'animated-scroll-to';

export default function MyPagination() {
    const classes = useStyles()
    let { coursesData, itemPerPage, setPage } = useContext(CoursesContext)

    return (
        <>
            { coursesData && coursesData.length > 0 ?
                <div className={classes.root}>
                    <Pagination
                        count={Math.ceil(coursesData.length / itemPerPage)}
                        variant="outlined"
                        color="primary"
                        shape="rounded"
                        size='small'
                        onChange={(e, value) => {
                            setPage(value)
                            let Options = {
                                speed: 100,
                                maxDuration: 3000,
                                minDuration: 2000,
                            }
                            animateScrollTo(0, Options);
                        }}
                    />
                </div>
                : null
            }
        </>
    )
}
