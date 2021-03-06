import React from 'react';
// import pacific from '/pacificdunes.jpg'
// import harbour from '/harbour.jpeg'
// import innisbrook from '/innisbrook.jpg'
// import kiawah from '/kiawah.png'
// import pga from '/pga.jpg'
// import pinehurst from '/pinehurst.jpg'
// import scottsdale from '/scottsdale.jpg'
// import torrey from '/torrey.jpg'

export const Schedule = (): JSX.Element => {

  const schedule = [
    {
      course: "Pacific Dunes",
      blue: "6,078",
      white: "5,672",
      red: "5,158",
      yellow: "5,089",
      holes: "Back Nine",
      round: "Preliminary",
      image: '/images/pacificdunes.jpg' 
    },
    {
      course: "Harbour Town Golf Links",
      blue: "6,663",
      white: "6,245",
      red: "5,889",
      yellow: "4,999",
      holes: "Front Nine",
      round: "1",
      image: '/images/harbour.jpeg'
    },
    {
      course: "Innisbrook",
      blue: "6,563",
      white: "6,063",
      red: "5,447",
      yellow: "4,838",
      holes: "Back Nine",
      round: "2",
      image: '/images/innisbrook.jpg'
    },
    {
      course: "TPC Scottsdale",
      blue: "6,612",
      white: "6,271",
      red: "5,958",
      yellow: "5,402",
      holes: "Back Nine",
      round: "3",
      image: '/images/scottsdale.jpg'
    },
    {
      course: "Pinehurst #2",
      blue: "6,907",
      white: "6,358",
      red: "5,792",
      yellow: "4,938",
      holes: "Front Nine",
      round: "4",
      image: '/images/pinehurst.jpg'
    },
    {
      course: "PGA National",
      blue: "6,735",
      white: "6,381",
      red: "6,001",
      yellow: "5,158",
      holes: "Back Nine",
      round: "Quarter-Finals",
      image: '/images/pga.jpg'
    },
    {
      course: "Torrey Pines",
      blue: "7,028",
      white: "6,631",
      red: "6,128",
      yellow: "5,398",
      holes: "Back Nine",
      round: "Semi-Finals",
      image: '/images/torrey.jpg'
    },
    {
      course: "Kiawah Ocean Course",
      blue: "6,813",
      white: "6,463",
      red: "6,157",
      yellow: "5,312",
      holes: "Back Nine",
      round: "Championship",
      image: '/images/kiawah.png'
    }
  ]

  const scheduleData = schedule.map(event => {
    return (
    <div key={event.course} className="max-w-sm rounded overflow-hidden shadow-lg w-2/3 m-4 bg-lightCyan">
    <img className="object-contain" src={process.env.PUBLIC_URL + event.image} alt="teamPhoto"/>
    <div className="px-6 py-4">
      <div className="font-bold mb-2 text-darkBlue md:text-xl">{event.course}</div>
      <p className="text-darkBlue text-base"><strong>Round:</strong> {event.round}</p>
      <p className="text-darkBlue text-base"><strong>Holes:</strong> {event.holes}</p>
      <p className="text-darkBlue text-base"><strong>Blue:</strong> {event.blue}</p>
      <p className="text-darkBlue text-base"><strong>White:</strong> {event.white}</p>
      <p className="text-darkBlue text-base"><strong>Red:</strong> {event.red}</p>
      <p className="text-darkBlue text-base"><strong>Yellow:</strong> {event.yellow}</p>
    </div>
    </div>
    )
  })

  return (
    <div className="flex flex-col flex-wrap content-center bg-babyPowder md:flex-row md:justify-center">
      {scheduleData}
    </div>
  );
}