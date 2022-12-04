import cx from 'classnames';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import Typography from 'components/UI/Typography';
import Section from 'components/UI/Section';
import Graph from 'assets/home/Graph';
import Coin from 'assets/home/Coin';
import Liquidity from 'assets/home/Liquidity';

interface GridItemProps {
  Icon?: React.FC;
  subHeader: string;
  name: string;
  paragraph: string;
  src?:string;
  width?: number;
}

const GridItem = ({ Icon, subHeader, name, paragraph, src, width }: GridItemProps) => {
  return (
    <Box className="flex flex-col space-y-3 items-center">
      <img src={src} width={width}/>
      <Typography variant="h5" className="text-center uppercase">
        {subHeader}
      </Typography>
      <Typography variant="h3" className="text-center uppercase">
        {name}
      </Typography>
      <Typography variant="p" className="text-center">
        {paragraph}
      </Typography>
    </Box>
  );
};

const Benefits = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Box className={cx('grid gap-12 md:grid-cols-3 md:px-10')}>
        <GridItem
          subHeader={t('benefits.0.subHeader')}
          name={t('benefits.0.name')}
          paragraph={t('benefits.0.paragraph')}
          src='png/first.png'
          width={89}
        />
        <GridItem
          subHeader={t('benefits.1.subHeader')}
          name={t('benefits.1.name')}
          paragraph={t('benefits.1.paragraph')}
          src='png/second.png'
          width={78}
        />
        <GridItem
          subHeader={t('benefits.2.subHeader')}
          name={t('benefits.2.name')}
          paragraph={t('benefits.2.paragraph')}
          src='png/third.png'
          width={97}
        />
      </Box>
    </Section>
  );
};

export default Benefits;
