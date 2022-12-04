import { FC } from 'react';
import cx from 'classnames';
import Box, { BoxProps } from '@material-ui/core/Box';

import styles from './styles.module.scss';

interface TypographyProps extends BoxProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CLASSES = {
  h1: 'text-4xl text-white font-normal',
  h2: 'text-3xl text-white',
  h3: 'text-2xl text-white',
  h4: 'text-xl text-white',
  h5: 'text text-white',
  h6: 'text-sm text-white',
  p: 'text text-white font-mono'
};

const Typography: FC<TypographyProps> = (props) => {
  const { children, variant, component, className, ...otherProps } = props;

  return (
    <Box
      component={component || variant}
      className={cx(CLASSES[variant], className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default Typography;
