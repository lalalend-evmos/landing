import Box from '@material-ui/core/Box';

import Typography from 'components/UI/Typography';

interface SaleDistributionItemProps {
  heading: string;
  value: string;
}

const SaleDistributionItem = ({
  heading,
  value,
}: SaleDistributionItemProps) => {
  return (
    <Box className="md:w-32">
      <span className="font-mono font-bold text-sm text-stieglitz dark:text-wave-blue">
        {heading}
      </span>
      <Typography variant="h4">{value}</Typography>
    </Box>
  );
};

export default SaleDistributionItem;
