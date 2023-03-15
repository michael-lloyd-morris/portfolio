import ChessVariants from "@/components/chess/ChessVariants";
import { useState, useRef, FormEvent } from 'react';
import { useQuery } from "@tanstack/react-query"
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import ChessPlayerDetailCellRenderer from "@/components/chess/ChessPlayerDetailCellRenderer";
import ChessProgressCellRenderer from "@/components/chess/ChessProgressCellRenderer";
import Leaderboard from "@/components/chess/interfaces/Leaderboard";

export default function GridDemo() {
  const gridRef = useRef<AgGridReact<Leaderboard>>(null);

  const [columnDefs] = useState([
    { headerName: 'Username', field: 'username', cellRenderer: 'agGroupCellRenderer' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Rating', field: 'rating' },
    { headerName: 'Progress', field: 'progress', cellRenderer: ChessProgressCellRenderer },
  ]);

  const [variant, setVariant] = useState("bullet");

  const {isLoading, data} = useQuery(["liChessTop20", variant], () => 
    fetch(`https://lichess.org/api/player/top/20/${variant}`).then((response) => response.json())
  );

  if (isLoading) return <div>Loading...</div>

  if (data) {
    data.users.map((user:any) => {
      user.rating = user.perfs[variant].rating;
      user.progress = user.perfs[variant].progress;
      return user;
    });
  }

  const handleChange = (event: FormEvent) => {
    if (event.target instanceof HTMLSelectElement) {
      setVariant(event.target.value);
    }
  }

  return <>
      <ChessVariants handleChange={handleChange} />
      <div
        className="ag-theme-alpine"
        style={{ height: 600, width: 800 }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={data.users}
          columnDefs={columnDefs}
          masterDetail={true}
          detailCellRenderer={ChessPlayerDetailCellRenderer}
          detailRowAutoHeight={true}
        ></AgGridReact>
      </div>
    </>
}
