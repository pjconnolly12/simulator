import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ICalendar } from '../../tools/interfaces';
import { NewEntry } from '../NewEvent';

export const March = (): JSX.Element => {

  const [dates, setDates] = useState<ICalendar[]>([])
  const [toggleEntryView, setToggleEntryView] = useState(false)
  const [entryDate, setEntryDate] = useState<string>("")

  useEffect(() =>  {
      axios
      .get<ICalendar[]>("/calendar/march", {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => {
        console.log(response.data)
        setDates(response.data);
      })
      .catch(ex => {
        const error =
        ex.response.status === 404
          ? "Resource not found"
          : "An unexpected error has occurred";
          console.log(error)
      });
  }, [])

  const selectDate = async (date:string) => {
    setToggleEntryView(true)
    setEntryDate(date)
  }

  const buttonClick = {
    toggleOff: setToggleEntryView,
    toggle: toggleEntryView,
    entry_date: entryDate
  }


  const createCalendar = dates.map(day => {

    let events;

    if (day.matches.length > 0){
      events = day.matches.map(event => {
        return (
          <div className="pt-1 pl-1 text-xs md:text-base">{event}</div>
        )
      })
    }

    return (
      <div className="w-1/3 text-left m-2 h-32 border-2 border-darkBlue md:w-48">
        <div className="pt-1 pl-1 border-b-2 border-darkBlue bg-darkBlue font-semibold text-babyBlue">{day.day_of_month}</div>
        <div className="pt-1 pl-1 text-xs md:text-base">{day.restrictions}</div>
        {events}
      </div>
    ) 
  })

  return (
      <div className="flex flex-wrap justify-center md:justify-start md:ml-6">
      <NewEntry {...buttonClick}/>
      {createCalendar}
      </div>
  );
}