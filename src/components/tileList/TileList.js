import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const list = props.list;

  return (
    <div>
      {list.map((item, index)=>{
        return <Tile object={item} key={index} />;
      })}    
    </div>
  );
};
