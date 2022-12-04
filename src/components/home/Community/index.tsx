import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import CtaBanner from 'components/UI/CtaBanner';

const Community = () => {
  return (
    <CtaBanner
      title="Join The Community"
      paragraph="Learn more about Dopex and when moon 🚀"
      rightElement={
        <Box className="flex flex-col my-4 w-full justify-center md:flex-row md:items-right md:w-1/3">
          <Button
            href="https://discord.gg/dopex"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            className="bg-white text-primary md:mr-4 md:pr-14 dark:border-transparent hover:bg-gray-200 h-16 mb-3 md:mb-0 md:h-10 md:w-36 justify-start border-primary"
            classes={{ label: 'text-lg md:text-sm' }}
          >
            Discord
          </Button>
          <Button
            href="https://twitter.com/dopex_io"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            className="bg-white text-primary md:mr-4 md:pr-14 dark:border-transparent hover:bg-gray-200 h-16 mb-3 md:mb-0 md:h-10 md:w-36 justify-start border-primary"
            classes={{ label: 'text-lg md:text-sm' }}
          >
            Twitter
          </Button>
        </Box>
      }
    />
  );
};

export default Community;
