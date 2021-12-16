import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderWidth": "1px",
    "--iconSize": 15,
    "--inputFontSize": 14 / 16 + "rem",
    "--inputHeight": 24 + "px",
  },
  large: {
    "--borderWidth": "2px",
    "--iconSize": 20,
    "--inputFontSize": 18 / 16 + "rem",
    "--inputHeight": 36 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const currentSize = SIZES[size];

  return (
    <Wrapper>
      <IconWrapper id={icon} size={currentSize["--iconSize"]} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        placeholder={placeholder}
        style={{
          ...currentSize,
          "--iconSize": currentSize["--iconSize"] + "px",
          "--inputWidth": width + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: inline-block;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto 0;
`;

const Input = styled.input`
  width: var(--inputWidth);
  height: var(--inputHeight);
  padding-left: calc(var(--iconSize) + 10px);
  font: 700 var(--inputFontSize) / 1.2 Roboto;
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: currentColor;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
