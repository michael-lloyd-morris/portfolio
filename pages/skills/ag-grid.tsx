import Page from "@/components/Page";
import ChessVariants from "@/components/ChessVariants";
import { useState, useEffect, FormEvent } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function Home() {
  let variant = "bullet";

  const progressCellRenderer = (params:any) => {
    if (params.value >= 0) {
      return <span className="goodProgress">{params.value}</span>
    } else {
      return <span className="badProgress">{params.value * -1}</span>
    }
  };

  const [columnDefs] = useState([
    { headerName: 'Username', field: 'username' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Rating', field: 'rating' },
    { headerName: 'Progress', field: 'progress', cellRenderer: progressCellRenderer },
  ]);

  const [rowData, setRowData] = useState([]);

  const apiRoot = "https://lichess.org/api/player/top/20";

  const fetchPlayers = () => {
    fetch(`${apiRoot}/${variant}`)
      .then((response) => response.json())
      .then((data) => {
        setRowData(data.users.map((user:any) => {
          user.rating = user.perfs[variant].rating;
          user.progress = user.perfs[variant].progress;
          return user;
        }));
      });
  }

  useEffect(fetchPlayers, []);

  const handleChange = (event: FormEvent) => {
    if (event.target instanceof HTMLSelectElement) {
      variant = event.target.value;
      fetchPlayers();
    }
  }

  return (
    <Page title="Skills - AgGrid">
      <h1>AG Grid Demonstration</h1>
      <section>
        <p>Many websites deal with large datasets, and I&apos;ve found one of the best tools for working with those datasets is AG Grid. I have experience with the Enterprise version, but for these demonstrations the free community edition will be used. The data is from <a href="https://lichess.org">LiChess</a> and each list is the top 20 players for each variant of the game.</p>
      </section>
      <ChessVariants handleChange={handleChange} />
      <div
        className="ag-theme-alpine"
        style={{ height: 600, width: 800 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </Page>
  )
}
