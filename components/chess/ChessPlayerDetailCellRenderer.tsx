import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { DateTime } from 'luxon';
import ChessPlayerDetail from './interfaces/ChessPlayerDetail';
import ChessPlayerBrief from './interfaces/ChessPlayerBrief';
import { IRowNode } from 'ag-grid-enterprise'

const ChessPlayerDetailCellRenderer = ({data}:IRowNode<ChessPlayerBrief>) => {
  /*
   * We aren't using the row grouping feature that can cause this to be undefined,
   * but to keep Typescript happy let's check it anyway.
   */
  if (typeof(data) === "undefined") {
    throw new Error("No row data available.");
  }

  const [playerData, setPlayerData] = useState<ChessPlayerDetail>({
    id:"",
    createdAt:0,
    seenAt:0
  });

  const fetchPlayer = () => {
    fetch(`https://lichess.org/api/user/${data.id}`)
      .then(response => response.json())
      .then(data => setPlayerData(data));
  }

  useEffect(fetchPlayer, [data.id]);

  if (playerData.profile)
    return (
      <div className="detail">
        <h3><a href={playerData.url}>
          {playerData.profile.firstName}&nbsp;
          {playerData.profile.lastName}&nbsp;
        </a>
        {playerData.profile.country && <ReactCountryFlag countryCode={playerData.profile.country} svg />}
        </h3>
        <dl>
          {playerData.profile.fideRating != "" &&
            <><dt>FIDE rating</dt><dd>{playerData.profile.fideRating}</dd></>
          }
          <dt>Member since:</dt><dd>{DateTime.fromMillis(playerData.createdAt).toLocaleString()}</dd>
          <dt>Last Online:</dt><dd>{DateTime.fromMillis(playerData.seenAt).toRelative()}</dd>
        </dl>
      </div>
    );
  else
    return (
      <div className="detail">
        <h3>{playerData.username}</h3>
        <span>There is no public profile information for this player.</span>
        <dl>

          <dt>Member since:</dt><dd>{DateTime.fromMillis(playerData.createdAt).toLocaleString()}</dd>
          <dt>Last Online:</dt><dd>{DateTime.fromMillis(playerData.seenAt).toRelative()}</dd>
        </dl>
      </div>
    );
}

export default ChessPlayerDetailCellRenderer;