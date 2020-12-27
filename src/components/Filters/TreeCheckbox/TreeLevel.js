import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import TreeItem from "@material-ui/lab/TreeItem";
import useStyles from "../../../hadi/index";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TreeLevel = ({items, setIds, ids}) => {
    const classes = useStyles();

    const handleCheck = id => {
        setIds(ids.concat(id))
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
                                        classes={{ label: classes.treelabel, selected: classes.treeselected }}
                                        nodeId={`${item.educationSubject_ID}`}
                                        label={

                                            <FormControlLabel
                                                onClick={() => handleCheck(item.educationSubject_ID)}
                                                value={item.educationSubject_ID}
                                                control={<Checkbox color="primary"/>}
                                                label={item.educationSubject_Name}
                                            />
                                        }
                                    >
                                        {
                                            items.map((second, index) => {
                                                    if (second.educationSubject_EducationSubject_Ref === item.educationSubject_ID) {
                                                        return (
                                                            <TreeItem
                                                                classes={{ label: classes.treelabel, selected: classes.treeselected }}
                                                                key={index}
                                                                nodeId={`${second.educationSubject_ID}`}
                                                                label={
                                                                      <FormControlLabel
                                                                          onClick={() => handleCheck(second.educationSubject_ID)}
                                                                          value={second.educationSubject_ID}
                                                                          control={<Checkbox color="primary"/>}
                                                                          label={second.educationSubject_Name}
                                                                      />
                                                                }
                                                            >
                                                                {
                                                                    items.map((third, index) => {
                                                                            if (third.educationSubject_EducationSubject_Ref === second.educationSubject_ID) {
                                                                                return (
                                                                                    <TreeItem
                                                                                        classes={{ label: classes.treelabel, selected: classes.treeselected }}
                                                                                        key={index}
                                                                                        nodeId={`${third.educationSubject_ID}`}
                                                                                        label={
                                                                                              <FormControlLabel
                                                                                                  onClick={() => handleCheck(third.educationSubject_ID)}
                                                                                                  value={third.educationSubject_ID}
                                                                                                  control={<Checkbox color="primary"/>}
                                                                                                  label={third.educationSubject_Name}
                                                                                              />
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
