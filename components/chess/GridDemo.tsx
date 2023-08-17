import { useState, useRef, Key } from 'react';
import { useQuery } from "@tanstack/react-query"
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {Picker, Item} from '@adobe/react-spectrum'
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

  const [variant, setVariant] = useState<Key>("bullet");

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

  return <>
    <Picker 
      label="Select a Variant"
      selectedKey={variant}
      onSelectionChange={(select) => setVariant(select)}
    >
      <Item key="bullet">Bullet</Item>
      <Item key="blitz">Blitz</Item>
      <Item key="rapid">Rapid</Item>
      <Item key="classical">Classical</Item>
      <Item key="ultraBullet">Ultra-Bullet</Item>
      <Item key="chess960">Chess 960 (a.k.a. Fischer Random)</Item>
      <Item key="crazyhouse">Crazyhouse (a.k.a. Bughouse)</Item>
      <Item key="antichess">Anti-chess</Item>
      <Item key="atomic">Atomic</Item>
      <Item key="horde">Horde (a.k.a. Dusany&apos;s Chess)</Item>
      <Item key="kingOfTheHill">King of the Hill</Item>
      <Item key="racingKings">Racing Kings</Item>
      <Item key="threeCheck">Three Check</Item>
    </Picker>
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
