import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ITeam, INewEntryClick} from '../tools/interfaces'
import { useForm } from "react-hook-form";


export const NewEntry = (props:INewEntryClick): JSX.Element => {

  const [teams, setTeams] = useState<ITeam[]>([])
  const [mailerState, setMailerState] = useState({
    email: "",
    message: "",
  });

  type Inputs = {
    team: string,
    time: string
  }

  useEffect(() =>  {
      axios
      .get<ITeam[]>("http://localhost:5000/teams", {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(response => {
        console.log(response.data)
        setTeams(response.data);
      })
      .catch(ex => {
        const error =
        ex.response.status === 404
          ? "Resource not found"
          : "An unexpected error has occurred";
          console.log(error)
      });
  }, [])

  const { handleSubmit, register} = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
      let result = teams.filter(obj => {
        return obj.players === data.team
      })
      let email = `pjconnolly12@gmail.com`;
      let message = `This email is to confirm that ${data.team} have a tee time on ${props.entry_date.slice(0,10)} at ${data.time}`;
      axios
        .post("http://localhost:5000/calendar", {
          team: data.team,
          time: data.time,
          entry_date: props.entry_date.slice(0,10)
          })
        .then(function(response: Inputs | any) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
        submitEmail(email, message)
        props.toggleOff(false)
  }

  const times = ['9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

  const timeOptions = times.map(time => {
    return (
    <option key={time} value={time}>{time}</option>)
  })

  const teamOptions = teams.map(team=> {
    return (
      <option key={team.team_id} value={team.players}>{team.players}</option>
    )
  })

  const closeWindow = () => {
    props.toggleOff(false)
  }

  const submitEmail = async (email: string, message: string) => {
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({email: email, message: message }),
    })
      .then((res) => res.json())
  };

  return (
    <div className={"flex p-2 w-3/4 justify-center text-xs fixed inset-0 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-babyBlue rounded md:w-1/2 " + (props.toggle ? "flex" : "hidden")}>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col m-6 p-4 md:w-1/3 lg:p-8">
      <label className='block text-sm font-medium text-darkBlue mt-4 text-lg'>Day: {props.entry_date.slice(5,10)}</label>
      <label className="block text-sm font-medium text-darkBlue mt-4">Team:</label>
      <select {...register("team")} className="rounded mt-1 p-1" placeholder='Select your Team' >
      <option>Select your Team</option>
        {teamOptions}
      </select>
      <label className="block text-sm font-medium text-darkBlue mt-4">Time:</label>
      <select {...register("time")} className="rounded mt-1 p-1" placeholder='Select a Time'>
      <option>Select a Time</option>
        {timeOptions}
      </select>
      <input className="mt-8 rounded bg-babyPowder text-darkBlue font-semibold cursor-pointer text-lg" type="submit" />
    </form>
    <button className="fixed top-2 right-2 text-primary font-extrabold text-lg" onClick={() => closeWindow()}>X</button>
    </div>
  );
}