import Box from '@material-ui/core/Box';
import cx from 'classnames';

import TextLink from 'components/UI/TextLink';
import Typography from 'components/UI/Typography';

interface GridItemProps {
  Icon: any;
  heading: string;
  paragraph: string;
  linkTitle?: string;
  link?: string;
  className?: string;
}

const GridItem = ({
  Icon,
  heading,
  paragraph,
  linkTitle,
  link,
  className,
}: GridItemProps) => {
  return (
    <Box className={cx('flex flex-col items-start mb-12', className)}>
      <Box className="mb-5 flex flex-row">
        <Box className="mr-4 h-7 w-8">
          <Icon />
        </Box>
        <Typography variant="h4">{heading}</Typography>
      </Box>
      <Typography variant="p" className="mb-3 text-left">
        {paragraph}
      </Typography>
      {link ? (
        <TextLink href={link} target="_blank" rel="noreferrer noopener">
          {linkTitle}
        </TextLink>
      ) : null}
    </Box>
  );
};

export default GridItem;
