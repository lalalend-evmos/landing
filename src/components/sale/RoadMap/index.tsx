import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';

const Block = ({ heading }: { heading: string }) => {
  return (
    <Box className="flex md:h-10 text-center bg-white dark:bg-cod-gray py-2 sm:px-7 px-4 mx-2 mb-4 h-32 rounded-lg justify-center items-center">
      <Typography variant="h5" className="uppercase" component="span">
        {heading}
      </Typography>
    </Box>
  );
};

const RoadMap = () => {
  const { t } = useTranslation('sale');

  const ROADMAP_DATA = [0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
    return { heading: t(`roadMap.list.${index}`) };
  });

  return (
    <Section>
      <Box className="flex flex-col justify-center items-center">
        <Typography variant="h5" className="mb-2 uppercase">
          {t('roadMap.subHeader')}
        </Typography>
        <Typography variant="h2" className="mb-2 uppercase">
          {t('roadMap.header')}
        </Typography>
        <Typography
          variant="p"
          className="mb-6 text-stieglitz dark:text-stieglitz md:w-2/3 lg:w-1/2 text-center"
        >
          {t('roadMap.paragraph')}
        </Typography>
        <Box className="flex-wrap justify-center hidden md:flex">
          {ROADMAP_DATA.map((data) => {
            return <Block key={data.heading} {...data} />;
          })}
        </Box>
        <Box className="flex flex-row md:hidden">
          <Box className="flex flex-col w-1/2">
            {ROADMAP_DATA.map((data, index) => {
              if (index <= 4) {
                return <Block key={data.heading} {...data} />;
              } else {
                return <Box key={data.heading} />;
              }
            })}
          </Box>
          <Box className="flex flex-col w-1/2 mt-16">
            {ROADMAP_DATA.map((data, index) => {
              if (index > 4) {
                return <Block key={data.heading} {...data} />;
              } else {
                return <Box key={data.heading} />;
              }
            })}
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default RoadMap;
