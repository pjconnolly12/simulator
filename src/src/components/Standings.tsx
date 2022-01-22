import React from 'react';

export const Standings = (): JSX.Element => {

  const teams = [
    {
      name: "Pat & Beav",
      rd1: 46,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 46,
    },
    {
      name: "Seth & Souhail",
      rd1: 0,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 0,
    },
    {
      name: "Sean & Alex",
      rd1: 0,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 0,
    },
    {
      name: "Ben & Joe",
      rd1: 39,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 39,
    },
    {
      name: "Drew & Lyndsie",
      rd1: 36,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 36,
    },
    {
      name: "Eric & Rourke",
      rd1: 0,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 0,
    },
    {
      name: "Dustin & Geo",
      rd1: 40,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 40,
    },
    {
      name: "JL3 & Ryan",
      rd1: 41,
      rd2: 0,
      rd3: 0,
      rd4: 0,
      total: 41,
    },
    {
    name: "JayD & B",
    rd1: 41,
    rd2: 0,
    rd3: 0,
    rd4: 0,
    total: 41,
  },
  ]

  const createStandings = teams
    .sort((a, b) => a.total > b.total ? 1 : -1  )
    .map(row => {
    return(
      <tr className="bg-babyPowder">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {row.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.total}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.rd1}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.rd2}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.rd3}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{row.rd4}</div>
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