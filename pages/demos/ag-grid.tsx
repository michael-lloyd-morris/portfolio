import Page from "@/components/Page";
import ChessVariants from "@/components/chess/ChessVariants";
import { useState, useEffect, useMemo, useRef, FormEvent } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  ColDef,
  ColGroupDef,
  FirstDataRenderedEvent,
  Grid,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import ChessPlayerDetailCellRenderer from "@/components/chess/ChessPlayerDetailCellRenderer";
import ChessProgressCellRenderer from "@/components/chess/ChessProgressCellRenderer";



export default function Home() {
  const gridRef = useRef<AgGridReact<any>>(null);

  let variant = "bullet";

  const [columnDefs] = useState([
    { headerName: 'Username', field: 'username', cellRenderer: 'agGroupCellRenderer' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Rating', field: 'rating' },
    { headerName: 'Progress', field: 'progress', cellRenderer: ChessProgressCellRenderer },
  ]);

  const [rowData, setRowData] = useState([]);

  const fetchPlayers = () => {
    fetch(`https://lichess.org/api/player/top/20/${variant}`)
      .then((response) => response.json())
      .then((data) => {
        setRowData(data.users.map((user:any) => {
          user.rating = user.perfs[variant].rating;
          user.progress = user.perfs[variant].progress;
          return user;
        }));
      });
  }

  useEffect(fetchPlayers, [variant]);

  const handleChange = (event: FormEvent) => {
    if (event.target instanceof HTMLSelectElement) {
      variant = event.target.value;
      fetchPlayers();
    }
  }

  return (
    <Page title="Demos - AgGrid">
        <aside className="agGrid">
          <img src={"/img/logos/ag-grid.svg"} className="topicLogo" alt="AgGrid Logo" />
          <h3>Licensing</h3>
          <p>This demonstration page is using the Enterprise version of AgGrid without a license key, so if you check the console you will see multiple error messages about this. I checked with AgGrid&apos;s customer service and secured a written ok for the use of the library on this page - the license key is only required for production sites.</p>
        </aside>
      <h1>AG Grid Demonstration</h1>
      <section>
        <p>Many websites deal with large datasets, and I&apos;ve found one of the best tools for working with those datasets is AG Grid. I have experience with the Enterprise version, but for these demonstrations the free community edition will be used. The data is from <a href="https://lichess.org">LiChess</a> and each list is the top 20 players for each variant of the game. Rows can be expanded to show the real name and country of those players who&apos;ve chosen to provide that information.  This particular page is not responsive.</p>
      </section>
      <ChessVariants handleChange={handleChange} />
      <div
        className="ag-theme-alpine"
        style={{ height: 600, width: 800 }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          masterDetail={true}
          detailCellRenderer={ChessPlayerDetailCellRenderer}
          detailRowAutoHeight={true}
        ></AgGridReact>
      </div>
    </Page>
  )
}
