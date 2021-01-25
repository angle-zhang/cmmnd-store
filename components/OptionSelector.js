import React, {Component} from 'react';

const OptionSelector = (props) => {
    return (
      <select
        className="Product__option"
        name={props.option.name}
        key={props.option.name}
        onChange={props.handleOptionChange}
      >
        {props.option.values.map((value) => {
          return (
            <option value={value} key={`${props.option.name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    );
}

export default OptionSelector;
