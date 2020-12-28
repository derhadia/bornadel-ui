import React, {useState} from 'react';
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
                                                {/*<input*/}
                                                {/*    onClick={() => handleCheck(item.educationSubject_ID)}*/}
                                                {/*    type="checkbox"*/}
                                                {/*    name={item.educationSubject_Name}*/}
                                                {/*    checked={check[item.educationSubject_Name]}*/}
                                                {/*    onChange={handleChange}*/}
                                                {/*/>*/}
                                                {/*<span className="checkmark" />*/}
                                                <CheckBox
                                                    id={item.educationSubject_ID}
                                                    name={item.educationSubject_Name}
                                                    setItem={handleCheck}
                                                />
                                            </label>
                                            // <FormControlLabel
                                            //     onClick={() => handleCheck(item.educationSubject_ID)}
                                            //     value={item.educationSubject_ID}
                                            //     control={<Checkbox color="primary"/>}
                                            //     label={<Typography
                                            //         className={classes.treeLableText}>{item.educationSubject_Name}</Typography>}
                                            //
                                            // />
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
                                                                    // <FormControlLabel
                                                                    //     onClick={() => handleCheck(second.educationSubject_ID)}
                                                                    //     value={second.educationSubject_ID}
                                                                    //     control={<Checkbox color="primary"/>}
                                                                    //     label={<Typography className={classes.treeLableText}>{second.educationSubject_Name}</Typography>}
                                                                    // />
                                                                    <label className={classes.checkboxArticle} htmlFor="second">
                                                                        {/*<input*/}
                                                                        {/*    onClick={() => handleCheck(second.educationSubject_ID)}*/}
                                                                        {/*    type="checkbox"*/}
                                                                        {/*    name={second.educationSubject_Name}*/}
                                                                        {/*    checked={check[second.educationSubject_Name]}*/}
                                                                        {/*    onChange={handleChange}*/}
                                                                        {/*/>*/}
                                                                        {/*<span className="checkmark" />*/}
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
                                                                                            // <FormControlLabel
                                                                                            //     onClick={() => handleCheck(third.educationSubject_ID)}
                                                                                            //     value={third.educationSubject_ID}
                                                                                            //     control={<Checkbox
                                                                                            //         color="primary"/>}
                                                                                            //     label={<Typography
                                                                                            //         className={classes.treeLableText}>{third.educationSubject_Name}</Typography>}
                                                                                            // />
                                                                                            <label className={classes.checkboxArticle} htmlFor="third">
                                                                                                {/*<input*/}
                                                                                                {/*    onClick={() => handleCheck(third.educationSubject_ID)}*/}
                                                                                                {/*    type="checkbox"*/}
                                                                                                {/*    name={third.educationSubject_Name}*/}
                                                                                                {/*    checked={check[third.educationSubject_Name]}*/}
                                                                                                {/*    onChange={handleChange}*/}
                                                                                                {/*/>*/}
                                                                                                {/*<span className="checkmark" />*/}
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
