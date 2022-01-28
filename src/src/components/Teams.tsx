import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IStandings } from '../tools/interfaces';

export const Teams = (): JSX.Element => {

  const [standings, setStandings] = useState<IStandings[]>([])

  useEffect(() =>  {
    axios
    .get<IStandings[]>("/standings", {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => {
      console.log(response.data)
      setStandings(response.data);
    })
    .catch(ex => {
      const error =
      ex.response.status === 404
        ? "Resource not found"
        : "An unexpected error has occurred";
        console.log(error)
    });
}, [])

  const teamData = standings.map(team => {
    return (
    <div key={team.team_name} className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-4 bg-lightCyan">
    <img className="object-contain" src={process.env.PUBLIC_URL + `/images/${team.photo}`} alt="teamPhoto"/>
    <div className="px-6 py-4">
      <div className="font-bold mb-2 text-darkBlue md:text-xl">{team.team_name}</div>
      <p className="text-darkBlue text-base">
        Handicap: {team.handicap}
      </p>
    </div>
    </div>
    )
  })


  return (
    <div className="flex flex-wrap justify-center bg-babyPowder">
      {teamData}
    </div>
  );
}