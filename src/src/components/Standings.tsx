import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IStandings } from '../tools/interfaces';

export const Standings = (): JSX.Element => {

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

  const createStandings = standings
    .sort((a, b) => a.average > b.average ? 1 : -1  )
    .map(row => {
    return(
      <tr className="bg-babyPowder">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {row.team_name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.average}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.round1}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.round2}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.round3}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.round4}</div>
      </td>
    </tr>
    )
  })


  return (
    <div>
      <div className="flex flex-col h-screen">
  <div className="py-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-babyBlue sm:rounded-lg">
        <table className="min-w-full divide-y divide-babyBlue">
          <thead className="bg-babyBlue">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-darkBlue uppercase tracking-wider">
                Team
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-darkBlue uppercase tracking-wider">
                Average
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-darkBlue uppercase tracking-wider">
                RD1
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-darkBlue uppercase tracking-wider">
                RD2
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-darkBlue uppercase tracking-wider">
                RD3
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-darkBlue uppercase tracking-wider">
                RD4
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-babyBlue">
            {createStandings}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}