import React, { CSSProperties } from "react";
import { FixedSizeList as List } from "react-window"



export const MyReactWindow = ({renderRow, listLength, onItemsRendered} : {renderRow: (index: number) => JSX.Element, listLength: number, onItemsRendered: any}) => {

   const Row = ({ index, style } : { index: number, style: CSSProperties}) => {
    return (
      <div style={style}>
        {renderRow(index)}
      </div>
    );
  }


  return (
      <List 
        height={window.innerHeight}
        width={1100}
        itemCount={listLength}
        itemSize={100}
        onItemsRendered={onItemsRendered}>
        {Row} 
      </List>
  )
}