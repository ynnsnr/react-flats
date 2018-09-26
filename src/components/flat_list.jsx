import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {
        props.flats.map((flat, index) =>
          <Flat flat={flat} index={index} key={index} selected={flat.name === props.selectedFlat.name} selectFlat={props.selectFlat} />
          )
      }
    </div>
    );
};

export default FlatList;
