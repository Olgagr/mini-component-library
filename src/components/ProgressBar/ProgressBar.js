/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--outerBorderRadius": "6px",
    "--wrapperPadding": "4px",
    "--innerBorderRadius": "4px",
    "--progressHeight": "24px",
  },
  medium: {
    "--progressHeight": "12px",
    "--outerBorderRadius": "4px",
    "--innerBorderRadius": "4px",
  },
  small: {
    "--progressHeight": "8px",
    "--outerBorderRadius": "4px",
    "--innerBorderRadius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const sizes = SIZES[size];

  return (
    <WrapperBase style={sizes}>
      <WrapperProgressBar style={sizes}>
        <Progress
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={value}
          style={{
            ...sizes,
            "--width": `${value}%`,
          }}
        >
          <VisuallyHidden>{value} %</VisuallyHidden>
        </Progress>
      </WrapperProgressBar>
    </WrapperBase>
  );
};

const WrapperBase = styled.div`
  padding: var(--wrapperPadding);
  overflow: hidden;
  border-radius: var(--outerBorderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const WrapperProgressBar = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: var(--innerBorderRadius);
`;

const Progress = styled.div`
  height: var(--progressHeight);
  width: var(--width);
  background: ${COLORS.primary};
`;

export default ProgressBar;
