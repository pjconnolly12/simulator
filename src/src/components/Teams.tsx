import React from 'react';
import photo from '../images/insertPhoto.jpg';
import dustinGeo from '../images/dustin-geo.jpg';
import sethSouhail from '../images/seth-souhail.jpg';
import joeBen from '../images/joe-ben.jpg';
import seanAlex from '../images/sean-alex.jpg';
import ericJay from '../images/ericJay.jpg';
import drewLynds from '../images/drewLynds.jpg';

export const Teams = (): JSX.Element => {

  const teams = [{
    name: "Pat and Beavis",
    score: 0,
    photo: photo
  },{
    name: "Dustin and Geo",
    score: 5.6,
    photo: dustinGeo
  },{
    name: "Drew and Lyndsie",
    score: 0,
    photo: drewLynds
  },{
    name: "Sean and Alex",
    score: 7.3,
    photo: seanAlex
  },{
    name: "Seth and Souhail",
    score: 5.6,
    photo: sethSouhail
  },{
    name: "Ben and Joe",
    score: 5.6,
    photo: joeBen
  },{
    name: "Eric and Rourke",
    score: 3.9,
    photo: ericJay
  },{
    name: "JL3 and Ryan",
    score: 10.7,
    photo: photo
  },{
    name: "JayD and Brendan",
    score: 0,
    photo: photo
  }]

  const teamData = teams.map(team => {
    return (
    <div key={team.name} className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-4 bg-lightCyan">
    <img className="object-contain" src={team.photo} alt="teamPhoto"/>
    <div className="px-6 py-4">
      <div className="font-bold mb-2 text-darkBlue md:text-xl">{team.name}</div>
      <p className="text-darkBlue text-base">
        Handicap: {team.score}
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