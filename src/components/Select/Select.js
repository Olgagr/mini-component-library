import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <IconWrapper>
        <Icon id="chevron-down" strokeWidth="2" size="24"></Icon>
      </IconWrapper>
    </SelectWrapper>
  );
};

export const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  padding: 10px 52px 10px 16px;
  font-family: Roboto;
  font-size: 1rem;
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-12px);
  pointer-events: none;
`;

export default Select;
