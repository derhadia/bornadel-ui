import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import TreeItem from "@material-ui/lab/TreeItem";
import useStyles from "../../../hadi/index";
import "../../../hadi/style.css"
import CheckBox from "../../CheckBox";

const TreeLevel = ({items, setIds, ids}) => {
    const classes = useStyles();

    const handleCheck = (active, id) => {
        if (!active) {
            setIds([...ids, id])
        } else {
            setIds(ids.filter((sr) => {
                return sr !== id;
            }))
        }
    }


    return (
        <Grid item className={classes.groupFilter}>
            <Grid item className={classes.groupFilterHeader} ><Typography className={classes.groupFilterHeaderText}>دسته بندی</Typography></Grid>
            <TreeView
                className={classes.root}
                defaultExpanded={["1"]}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronLeftIcon />}
            >
                {
                    items && items.length > 0 ? items.map((item, index) => {
                            if (item.educationSubject_EducationSubject_Ref == null) {
                                return (
                                    <TreeItem
                                        key={index}
                                        classes={{label: classes.treelabel, selected: classes.treeselected}}
                                        nodeId={`${item.educationSubject_ID}`}
                                        label={
                                            <label className={classes.checkboxArticle} htmlFor="item">
                                                <CheckBox
                                                    id={item.educationSubject_ID}
                                                    name={item.educationSubject_Name}
                                                    setItem={handleCheck}
                                                />
                                            </label>
                                        }
                                    >
                                        {
                                            items.map((second, index) => {
                                                    if (second.educationSubject_EducationSubject_Ref === item.educationSubject_ID) {
                                                        return (
                                                            <TreeItem
                                                                classes={{
                                                                    label: classes.treelabel,
                                                                    selected: classes.treeselected
                                                                }}
                                                                key={index}
                                                                nodeId={`${second.educationSubject_ID}`}
                                                                label={
                                                                    <label className={classes.checkboxArticle} htmlFor="second">
                                                                       <CheckBox
                                                                            id={second.educationSubject_ID}
                                                                            name={second.educationSubject_Name}
                                                                            setItem={handleCheck}
                                                                        />
                                                                    </label>
                                                                }
                                                            >
                                                                {
                                                                    items.map((third, index) => {
                                                                            if (third.educationSubject_EducationSubject_Ref === second.educationSubject_ID) {
                                                                                return (
                                                                                    <TreeItem
                                                                                        classes={{
                                                                                            label: classes.treelabel,
                                                                                            selected: classes.treeselected
                                                                                        }}
                                                                                        key={index}
                                                                                        nodeId={`${third.educationSubject_ID}`}
                                                                                        label={
                                                                                            <label className={classes.checkboxArticle} htmlFor="third">
                                                                                            <CheckBox
                                                                                                    id={third.educationSubject_ID}
                                                                                                    name={third.educationSubject_Name}
                                                                                                    setItem={handleCheck}
                                                                                                />
                                                                                            </label>
                                                                                        }>

                                                                                    </TreeItem>
                                                                                )
                                                                            }
                                                                        }
                                                                    )}
                                                            </TreeItem>
                                                        )
                                                    }
                                                }
                                            )}
                                    </TreeItem>
                                )
                            }
                        }
                    ) : null}
            </TreeView>
        </Grid>
    );
};

export default TreeLevel;
