import React from "react";

export const Tile = (props) => {
  const object = props.object;
  const values = Object.values(object);

  let first = true;

  return (
    <div className="tile-container">
      {values.map((value)=>{
          if(first){
            first = false;
            return <p className='tile-title' key={values.indexOf(value)}>{value}</p>
          }
          else{
            return <p className='tile' key={values.indexOf(value)}>{value}</p>
          }
      })}
    </div>
  );
};
