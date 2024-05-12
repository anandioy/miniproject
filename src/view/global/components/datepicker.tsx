import React from "react";
import { useState } from 'react'; 
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';

interface DatePickerProps {
    selected: Date | null; 
    onChange: (date: Date | null) => void; 
    minDate: Date; 
    maxDate: Date;
}

export default function Datepicker({selected, onChange, minDate, maxDate}:DatePickerProps): JSX.Element {
    const today = new Date();

    const handleDateChange = (date: Date | null) => {
        if (date !== null) {
            onChange(date);
        }
    }

    return (
        <DateTimePicker 
            onChange={handleDateChange} 
            value={selected}
            format="dd/MM/yyyy"
            minDate={minDate}
            maxDate={maxDate}
        />
    )
}