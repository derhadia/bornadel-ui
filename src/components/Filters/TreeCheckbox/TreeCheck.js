import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function ControlledTreeView({items}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
        >
            {
                items.map((item, index) => (
                    <TreeItem
                        key={index}
                        nodeId={item.educationSubject_ID}
                        label={item.educationSubject_EducationSubject_Ref === null ? item.educationSubject_Name : null}
                    >
                        <TreeItem
                            nodeId={item.educationSubject_EducationSubject_Ref !== null && item.educationSubject_ID}
                            label={item.educationSubject_EducationSubject_Ref !== null ? item.educationSubject_Name : null}
                        />
                    </TreeItem>
                ))
            }

            {/*<TreeItem nodeId="5" label="Documents">*/}
            {/*    <TreeItem nodeId="6" label="Material-UI">*/}
            {/*        <TreeItem nodeId="7" label="src">*/}
            {/*            <TreeItem nodeId="8" label="index.js" />*/}
            {/*            <TreeItem nodeId="9" label="tree-view.js" />*/}
            {/*        </TreeItem>*/}
            {/*    </TreeItem>*/}
            {/*</TreeItem>*/}
        </TreeView>
    );
}
