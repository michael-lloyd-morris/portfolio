import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { DateTime } from 'luxon';
import ChessPlayerBrief from './interfaces/ChessPlayerBrief';
import { IRowNode } from 'ag-grid-enterprise'
import { useQuery } from '@tanstack/react-query';

const ChessPlayerDetailCellRenderer = ({data:rowData}:IRowNode<ChessPlayerBrief>) => {
  /*
   * We aren't using the row grouping feature that can cause this to be undefined,
   * but to keep Typescript happy let's check it anyway.
   */
  if (typeof(rowData) === "undefined") {
    throw new Error("No row data available.");
  }

  const [userId, setUserId] = useState(rowData.id);

  const {isLoading, data} = useQuery(["liChessUser", userId], () => 
    fetch(`https://lichess.org/api/user/${userId}`)
    .then(response => response.json())
  );

  if (isLoading) return <div>Loading...</div>

  if (data.profile)
    return (
      <div className="detail">
        <h3><a href={data.url}>
          {data.profile.firstName}&nbsp;
          {data.profile.lastName}&nbsp;
        </a>
        {data.profile.country && <ReactCountryFlag countryCode={data.profile.country} svg />}
        </h3>
        <dl>
          {data.profile.fideRating != "" &&
            <><dt>FIDE rating</dt><dd>{data.profile.fideRating}</dd></>
          }
          <dt>Member since:</dt><dd>{DateTime.fromMillis(data.createdAt).toLocaleString()}</dd>
          <dt>Last Online:</dt><dd>{DateTime.fromMillis(data.seenAt).toRelative()}</dd>
        </dl>
      </div>
    );
  else
    return (
      <div className="detail">
        <h3>{data.username}</h3>
        <span>There is no public profile information for this player.</span>
        <dl>

          <dt>Member since:</dt><dd>{DateTime.fromMillis(data.createdAt).toLocaleString()}</dd>
          <dt>Last Online:</dt><dd>{DateTime.fromMillis(data.seenAt).toRelative()}</dd>
        </dl>
      </div>
    );
}

export default ChessPlayerDetailCellRenderer;