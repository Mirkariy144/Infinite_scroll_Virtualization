import React from "react";
import { FixedSizeList as List } from "react-window"
import { renderRow } from "../../../entities/api/index"


export const MyReactWindow = ({postsList, listLength, onItemsRendered}) => {

   const Row = ({ index, style }) => {
    return (
      <div style={style}>
        {renderRow({index, postsList})}
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