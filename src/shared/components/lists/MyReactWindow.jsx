import React from "react";
import { FixedSizeList as List } from "react-window"

export const MyReactWindow = ({renderRow, listLength, onItemsRendered}) => {

   const Row = ({ index, style }) => {
    return (
      <div style={style}>
        {renderRow(index)}
      </div>
    );
  }


  return (
      <List 
        height={window.innerHeight}
        itemCount={listLength}
        itemSize={100}
        onItemsRendered={onItemsRendered}>
        {Row} 
      </List>
  )
}