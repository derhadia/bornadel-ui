import React, {useContext} from "react";
// import {DatePicker,} from "react-advance-jalaali-datepicker";
import {ArticlesContext} from "../../../contexts/ArticlesContext";

const DatePickerT = () => {
    const {setToDate, setFromDate} = useContext(ArticlesContext)
    const change = (unix, fromDate) => {
        console.log(unix); // returns timestamp of the selected value, for example.
        setFromDate(fromDate)
    }

    const handleChangeToDate = (pop,toDate) => {
        setToDate(toDate)
    }

    const DatePickerInput = (props) => {
        return <input className="popo" {...props} />;
    }

    return (
        <div className="datePicker">
            {/* <DatePicker
                inputComponent={DatePickerInput}
                placeholder="از تاریخ"
                format="jYYYY/jMM/jDD"
                onChange={change}
                id="datePicker"
                preSelected=""
            />
            <DatePicker
                inputComponent={DatePickerInput}
                placeholder="تا تاریخ"
                format="jYYYY/jMM/jDD"
                onChange={handleChangeToDate}
                id="datePicker"
                preSelected=""
            /> */}
        </div>
    );

}


export default DatePickerT
