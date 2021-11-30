import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Spare } from '@sparelite/icons';

const StyledSpare = styled(Spare)`
  margin-top: 5px;
  width: 120px;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledSpare />
    </Box>
  );
}
