import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import {DateInput} from 'react-hichestan-datetimepicker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {ArticlesContext} from "../../../contexts/ArticlesContext";
import moment from "jalali-moment";

const theme = createMuiTheme({
    direction: "rtl",
    fontFamily: "Yekan"
});


const DatePicker = () => {
    const {fromDate, toDate, handleFromDate, handleToDate} = useContext(ArticlesContext)
    console.log(JSON.stringify(fromDate),'to')
    const date = moment(fromDate, 'YYYY-MM-DD').locale('fa').format('jYYYY/jMM/jDD');
    console.log(JSON.stringify(date,'from'))

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="از تاریخ:"
                        onChange={handleFromDate}
                        value={fromDate}
                        style={{width: '100%'}}
                        InputProps={{
                            inputComponent: DateInput,
                            inputProps: {},
                        }}
                    />
                    <br/>
                    <TextField
                        id="standard-name"
                        label="تا تاریخ:"
                        onChange={handleToDate}
                        value={toDate}
                        style={{width: '100%'}}
                        InputProps={{
                            inputComponent: DateInput,
                            inputProps: {},
                        }}
                    />
                </form>
            </div>
        </MuiThemeProvider>
    )
}

export default DatePicker;
