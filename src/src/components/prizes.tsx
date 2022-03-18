import React from 'react';

export const Prizes = (): JSX.Element => {

  const winners = [
    {
      round: "Round 1",
      closest: "N/A",
      skins: ["Seth & Souhail - 2", "Drew & Lyndsie - 1"],
    },
    {
      round: "Round 2",
      closest: "",
      skins: [],   
    },
    {
      round: "Round 3",
      closest: "",
      skins: [],
    },
    {
      round: "Round 4",
      closest: "",
      skins: [],
    },
  ]

  const winnerData = winners.map(event => {

    const skinsData = event.skins.map(skin => {
      return (
        <div>
          <p className="pl-4 pb-2">{skin}</p>
        </div>
      )
    })

    return (
    <div key={event.round} className="rounded overflow-hidden shadow-lg w-11/12 m-4 bg-lightCyan md:w-1/2">
      <div className="p-2 font-bold mb-2 text-darkBlue md:text-xl">{event.round}</div>
      <p className="pl-2 text-darkBlue text-base"><strong>Closest to the Pin:</strong> {event.closest}</p>
      <p className="pl-2 pb-2 text-darkBlue text-base"><strong>Skins:</strong></p>
      {skinsData}
    </div>
    )
  })

  return (
    <div className="flex flex-col items-center bg-babyPowder h-screen w-screen">
      {winnerData}
    </div>
  );
}