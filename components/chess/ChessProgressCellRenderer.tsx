import React from 'react';

const ChessProgressCellRenderer = (params:any) => {
  if (params.value >= 0) {
    return <span className="goodProgress">{params.value}</span>
  } else {
    return <span className="badProgress">{params.value * -1}</span>
  }
};

export default ChessProgressCellRenderer;