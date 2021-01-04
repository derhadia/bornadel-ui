import React,{useState} from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import useStyle from "../../hadi";
import Divider from '@material-ui/core/Divider';



export default function SortPopup(props) {
    const classes = useStyle();
    const { onClose, open, handleMostVisited, handleNewest } = props;
    const [value, setValue] = useState("most");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClose = () => {
        onClose();
    };

    const handleMost = () => {
        if (handleMostVisited) {
            handleMostVisited()
            onClose()
        }
    }

    const handleNew = () => {
        if (handleNewest) {
            handleNewest()
            onClose()
        }
    }




    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
            className={classes.dialogSort}
        >
            <List>
                <FormControl component="fieldset">
                    <FormLabel
                        style={{
                            color: "#ff0925",
                            fontSize: "15.5px",
                            fontWeight: "bold"
                        }}
                        component="legend"
                    >
                        مرتب سازی بر اساس :
                    </FormLabel>
                    <Divider style={{margin: "10px 0"}} variant="inset" component="li" />
                    <RadioGroup aria-label="sort" name="sort" value={value} onChange={handleChange}>
                        <FormControlLabel
                            style={{fontSize: "13.5px", color: "#464646", fontWeight: "bold"}}
                            value="most"
                            control={<Radio />}
                            label="پربازدید ترین"
                            onClick={handleMost}
                        />
                        <Divider style={{margin: "10px 0"}} variant="inset" component="li" />
                        <FormControlLabel
                            style={{fontSize: "13.5px", color: "#464646", fontWeight: "bold"}}
                            value="new"
                            control={<Radio />}
                            label="جدید ترین"
                            onClick={handleNew}
                        />
                    </RadioGroup>
                </FormControl>
            </List>
        </Dialog>
    );
}

SortPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

