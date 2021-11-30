import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Renameme } from '@renamemelite/icons';

const StyledRenameme = styled(Renameme)`
  margin-top: 5px;
  width: 120px;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledRenameme />
    </Box>
  );
}
