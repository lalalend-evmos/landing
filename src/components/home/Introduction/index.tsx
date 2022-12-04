import { FC } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'next-i18next';

import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';

import styles from './styles.module.scss';

const GradientText: FC = ({ children }) => {
  return <span className={styles.textGr}>{children}</span>;
};

const GradientText2: FC = ({ children }) => {
  return <span className={styles.textGr2}>{children}</span>;
};
const GradientText3: FC = ({ children }) => {
  return <span className={styles.textGr3}>{children}</span>;
};


const Introduction = () => {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <Section className="mb-20 md:mb-0 pt-3 sm:pt-3 md:pt-3 lg:pt-3 xl:pt-3">
      <Box className="flex flex-col items-center pt-5 px-5 md:items-center">
        <Typography variant="h1" className="mb-6 md:m-1 md:text-center">
          <GradientText>UNLOCK</GradientText> <GradientText2> POWER </GradientText2> OF <GradientText3> LENDING </GradientText3>
    
        </Typography>
        <Typography variant="p" className="mb-8 md:m-1">
          {t('siteDescription')}
        </Typography>
        <Box className="flex flex-col w-full md:flex-row md:w-max md:mt-4">
          <Button
            className="h-16 mb-4 md:mb-0 md:h-10"
            variant="contained"
            color="primary"
            classes={{ label: 'text-lg md:text-sm' }}
            href="http://localhost:3001/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {tc('launchApp')}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stieglitz border-stieglitz md:mx-3 h-16 md:h-10 md:pb-3 hover:white transition duration-200"
            classes={{ label: 'text-lg md:text-sm' }}
            href="https://ouldbelkacemnael.gitbook.io/product-docs/"
          >
            {tc('documentation')}
          </Button>
        </Box>
      </Box>
    </Section>
  );
};

export default Introduction;
