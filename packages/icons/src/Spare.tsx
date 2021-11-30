import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import SpareIcon from './images/sparelite.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SpareIcon} viewBox="0 0 150 58" {...props} />;
}
