import React from "react";
import styled from "styled-components";

const SelectStyled = styled.div`
  .form-control {
    padding: 1.3em;
    display: flex;
    border: none;
    width: 100%;
    color: gray;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  }
`;

function Select({
  options,
  name,
  title,
  value,
  handleChangeRegion,
  placeholder,
}) {
  return (
    <SelectStyled>
      <div className="form-group">
        {/* <label htmlFor={name}> {title} </label> */}
        <select
          id={name}
          name={name}
          onChange={handleChangeRegion}
          className="form-control"
          defaultValue={placeholder}
        >
          <option key="3" value={placeholder} disabled>
            {placeholder}
          </option>
          {options.map((option) => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </SelectStyled>
  );
}

export default Select;
