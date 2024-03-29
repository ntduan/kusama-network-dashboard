import React from 'react';
import clsx from 'clsx';

import { BaseComponentProps } from '../types';

const Spinner: React.FC<React.PropsWithChildren<BaseComponentProps>> = ({
  component: Component = 'div',
  className,
  ...other
}) => {
  return <Component className={clsx('spinner', className)} {...other} />;
};

export default Spinner;
