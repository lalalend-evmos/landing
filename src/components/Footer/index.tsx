import { FC } from 'react';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaReadme,
  FaBlog,
} from 'react-icons/fa';

import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';

const FooterLink: FC<{
  href: string;
  rel: string;
  target: string;
  name?: string;
  Icon?: FC<{ className: string }>;
  imgSrc?: string;
}> = (props) => {
  const { name, children, Icon, imgSrc, href, target, rel } = props;
  const anchorProps = { href, target, rel };
  return (
    <li className="mb-2 flex items-center space-x-2">
      {Icon ? <Icon className="dark:text-white text-black w-5 h-5" /> : null}
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={name}
          className="h-5 w-5 dark:invert dark:brightness-0 filter"
        />
      ) : null}
      <Typography variant="p" component="a" {...anchorProps}>
        {name ? name : children}
      </Typography>
    </li>
  );
};

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <Section className="p-0 m-0">
      <Box className="flex flex-col m-auto sm:flex-row">
        <div className="flex flex-col mb-6 sm:mr-20">
          <img
            src="/svg/logo.svg"
            alt="logo"
            className="w-10 h-10 my-2 mr-7 sm:mb-4"
          />
          <Typography variant="p" className="copyright">
            {t('copyright')}
          </Typography>
        </div>
        <Box className="flex flex-row">
          <Box className="flex flex-col mr-7 w-1/2 sm:mr-20">
            <Typography variant="h4" className="mb-2">
              {t('community')}
            </Typography>
            <ul>
              <FooterLink
                name={t('discord')}
                href="https://discord.gg/dopex"
                target="_blank"
                rel="noopener noreferrer"
                Icon={FaDiscord}
              />
              <FooterLink
                name={t('twitter')}
                href="https://twitter.com/dopex_io"
                target="_blank"
                rel="noopener noreferrer"
                Icon={FaTwitter}
              />
              <FooterLink
                href="https://defipulse.com/"
                target="_blank"
                rel="noopener noreferrer"
                imgSrc="/svg/defi_pulse.svg"
              >
                DefiPulse
              </FooterLink>
              <FooterLink
                href="https://blog.dopex.io/"
                target="_blank"
                rel="noopener noreferrer"
                Icon={FaBlog}
              >
                {t('blog')}
              </FooterLink>
            </ul>
          </Box>
          <Box className="flex flex-col">
            <Typography variant="h4" className="mb-2">
              {t('developers')}
            </Typography>
            <ul>
              <FooterLink
                name={t('github')}
                href="https://github.com/dopex-io"
                target="_blank"
                rel="noopener noreferrer"
                Icon={FaGithub}
              />
              <FooterLink
                name={t('documentation')}
                href="https://docs.dopex.io/"
                target="_blank"
                rel="noopener noreferrer"
                Icon={FaReadme}
              />
            </ul>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Footer;
