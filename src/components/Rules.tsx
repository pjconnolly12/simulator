import React from 'react';

export const Rules = (): JSX.Element => {


  return (
    <div className="ml-4 mt-2 bg-babyPowder h-full lg:h-screen">
      <h1 className="font-bold text-2xl mb-4 flex flex-col items-center">League Rules</h1>
      <div className="flex flex-wrap flex-col items-center h-2/3 md:flex-row md:justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-4 bg-lightCyan p-2 w-11/12 lg:h-full">
  <h2 className="font-bold text-xl mb-4 text-center">Format</h2>
  <ul className="list-disc list-inside pl-2">
    <li>Scramble Format</li>
    <li>9 Hole Rounds</li>
    <li>1 Preliminary Round</li>
      <ul className="list-square list-inside ml-6">
        <li>This round will be used to determine your team's handicap (No Sandbagging!)</li>
      </ul>
    <li>4 League Rounds</li>
      <ul className="list-square list-inside ml-6">
        <li>These will be played between Jan-Mar</li>
      </ul>
    <li>League standings will be based on Net score</li>
      <ul className="list-square list-inside ml-6">
        <li>Handicaps will adjust after each round</li>
      </ul>
  </ul>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-4 bg-lightCyan p-2 w-11/12 lg:h-full">
  <h2 className="font-bold text-xl mb-4 text-center">Playoffs</h2>
  <ul className="list-disc list-inside pl-2">
    <li>8 Teams will make the playoffs</li>
    <li>Teams will be seeded based on league standings</li>
    <li>Match Play format between 2 teams (still playing as a scramble)</li>
    <li>Quarterfinals matchups will take place in first few weeks of April</li>
    <li>Semi Finals and Finals will be played during the championship cookout</li>
  </ul>
</div>
<div className="max-w-sm rounded overflow-hidden shadow-lg w-1/3 m-4 bg-lightCyan p-2 w-11/12 h-full">
  <h2 className="font-bold text-xl mb-4 text-center">Payments</h2>
  <ul className="list-disc list-inside pl-2">
            <li>$20 Entry Fee</li>
            <li>$10 per round per person</li>
            <li>This money will go towards weekly and end of year prizes</li>
              <ul className="list-square list-inside ml-6">
                  <li>You can pay per round or $40 upfront</li>
              </ul>
            <li>Payouts:</li>
              <ul className="list-square list-inside ml-6">
                <li>Skins - If your team scores the lowest net score on a hole then you will win a skin</li>
                  <ul className="list-disc list-inside ml-6">
                    <li>$5 per hole, carries over for holes not won by an individual team</li>
                    <li>Essentially biridies and eagles can win you money!</li>
                  </ul>
                <li>Closest to the pin - one hole per round will be designated - $20</li>
                <li>End of year prizes - TBD (based on # of teams)</li>
              </ul>
          </ul>
</div>
</div>
    </div>
  );
}