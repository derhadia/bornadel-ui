import React, {useContext, useState} from 'react';
import {Grid} from "@material-ui/core";
import useStyle from "../../hadi";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ArticleBox from "../Articels/articleBox/ArticleBox";
import DrawerFilter from "./DrawerFilter";
import {ArticlesContext} from "../../contexts/ArticlesContext";
import SortPopup from "../../components/SortPopup/SortPopup";



const MobileArticlesList = ({handleFiltering, handleMostVisited, handleNewest}) => {
    const [state, setState] = useState({
        drawer: false,
    });
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    const {
         data, items, setIds, ids
    } = useContext(ArticlesContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const toggleDrawer = (anchor, open) => (event) => {
        handleFiltering()
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const renderFiltering = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerFilter
                toggleDrawer={toggleDrawer}
                anchor={anchor}
                ids={ids}
                setIds={setIds}
                items={items}
                handleFiltering={handleFiltering}
                setState={setState}
            />
        </div>
    );

    return (
        <Grid container style={{backgroundColor: "#fafafa"}}>
            <Grid className={classes.headFilterMobile}>
                <Button
                    className={`${classes.btnFilterMobile} ${classes.filteringIcon}`}
                    onClick={toggleDrawer("right", true)}
                >
                    جستجوی پیشرفته
                </Button>
                <Button
                    className={`${classes.btnFilterMobile} ${classes.sortingIcon}`}
                    onClick={handleClickOpen}
                >
                    مرتب سازی
                </Button>
                <SortPopup
                    open={open}
                    onClose={handleClose}
                    handleNewest={handleNewest}
                    handleMostVisited={handleMostVisited}
                />
            </Grid>
            <Grid className={classes.routeFilter}>
                <Typography className={classes.arrowLeftIcon}>لیست کلاسها</Typography>
                <Typography className={classes.arrowLeftIcon}>کامپیوتر</Typography>
                <Typography className={classes.arrowLeftIcon}>برنامه نویسی</Typography>
                <Typography>آموزش PHP</Typography>
            </Grid>
            <Grid>
                <ArticleBox
                    data={data}
                />
            </Grid>
            <Grid style={{padding: "10px", width: "100%"}}>
                <div className={classes.redBoxArticle}/>
            </Grid>
            <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {renderFiltering("right")}
            </Drawer>
        </Grid>
    );
};

export default MobileArticlesList;
