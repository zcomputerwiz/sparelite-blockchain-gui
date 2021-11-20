import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Flax } from '@flaxlight/icons';

const StyledFlax = styled(Flax)`
  margin-top: 5px;
  width: 120px;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledFlax />
    </Box>
  );
}
