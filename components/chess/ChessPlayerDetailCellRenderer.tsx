import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

const PlayerDetail = (data:any) => {
  console.log(data);
  return <h2>Hello world</h2>
}

const ChessPlayerDetailCellRenderer = ({data}:any) => {
  const userid = data.id;
  const [playerData, setPlayerData] = useState<any>({
    profile: {
      firstName: "",
      lastName: "",

    }
  });

  console.log(playerData);

  const fetchPlayer = () => {
    fetch(`https://lichess.org/api/user/${userid}`)
      .then((response) => response.json())
      .then((data) => {
        setPlayerData(data);
      });
  }
  
  useEffect(fetchPlayer, [userid]);
  
  if (playerData.profile) 
    return (
      <div className="detail">
        <h3>
          {playerData.profile.firstName}&nbsp; 
          {playerData.profile.lastName}&nbsp;
          <ReactCountryFlag countryCode={playerData.profile.country} svg />
        </h3>
      </div>
    );
  else
    return (
      <div>There is no public profile information for this player.</div>
    );
}



export default ChessPlayerDetailCellRenderer;