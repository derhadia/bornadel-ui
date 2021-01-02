import React, {useContext} from 'react';
import {DateInput} from 'react-hichestan-datetimepicker';
import {ArticlesContext} from "../../../contexts/ArticlesContext";
import "../../../hadi/style.css"

const DatePicker = () => {

    const {state, handleChangeDate, handleChangeFrom, item} = useContext(ArticlesContext)

    console.log(item.fromDateFormatted,'from')


    return (
        <>
            <DateInput
                value={item.fromDate}
                defaultValue={undefined}
                name={'fromDate'}
                onChange={handleChangeFrom}
                style={{textAlign: 'right'}}
                placeholder="از تاریخ" />
            <br/>
            <DateInput
                value={state.toDate}
                defaultValue={undefined}
                name={'toDate'}
                onChange={handleChangeDate}
                style={{textAlign: 'right'}}
                placeholder=" تا تاریخ" />
        </>
    );

}

export default DatePicker;
