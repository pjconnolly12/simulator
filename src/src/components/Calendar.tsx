import React, { useState } from 'react';
import { January } from './months/January';
import { February } from './months/February';
import { March } from './months/March';
import { April } from './months/April';
import { May } from './months/May';


export const LeagueCalendar = (): JSX.Element => {

  const [month, setMonth] = useState<string>("May")

  const changeMonthRight = () => {
    if (month === "January"){
      setMonth("February")
    } else if (month === "February") {
      setMonth("March")
    } else if (month === "March") {
      setMonth("April")
    } else if (month === "April") {
      setMonth("May")
    }
  }

  const changeMonthLeft = () => {
    if (month === "March"){
      setMonth("February")
    } else if (month === "February") {
      setMonth("January")
    } else if (month === "April") {
      setMonth("March")
    } else if (month === "May") {
      setMonth("April")
    }
  }

  let showMonth;
  if(month === "January"){
    showMonth = <January />
  } else if (month === "February"){
    showMonth = <February />
  } else if (month === "March"){
    showMonth = <March />
  } else if (month === "April") {
    showMonth = <April />
  } else {
    showMonth = <May />
  }

  return (
    <div className="bg-babyPowder">
      {/* Add month header here so you can swap between months with button clicks */}
      <div className="flex justify-center">
        <div onClick={() => {changeMonthLeft()}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2 mr-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
        </div>
      <h1 className="static text-xl font-bold mt-2 text-darkBlue">{month}</h1>
      <div onClick={() => {changeMonthRight()}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2 ml-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
    <div>
      {showMonth}
      </div>
    </div>
  );
}