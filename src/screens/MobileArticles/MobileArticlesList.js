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



const MobileArticlesList = ({handleFiltering}) => {
    const [state, setState] = useState({
        drawer: false,
    });
    const classes = useStyle();

    const {
         data, items, setIds, ids
    } = useContext(ArticlesContext);

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
            <Grid style={{justifyContent: "space-around", display: "flex"}} className={classes.headFilterMobile}>
                <Grid className={classes.boxArticleMobile}/>
                <Grid className={classes.boxArticleMobile}/>
                <Grid className={classes.boxArticleMobile}/>
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
