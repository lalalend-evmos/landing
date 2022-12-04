import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useTranslation } from 'react-i18next';

import NavLink from './NavLink';
import NavSubMenu from './NavSubMenu';
import LangMenu from './LangMenu';
import Typography from 'components/UI/Typography';
import Moon from 'assets/home/Moon';
import Sun from 'assets/home/Sun';

import styles from './styles.module.scss';

interface NavbarProps {
  active?: 'Home' | 'GitHub' | 'Documentation' | 'Learn';
}

export default function Navbar(props: NavbarProps) {
  const { active } = props;

  const [theme, setTheme] = useState('dark');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { t } = useTranslation('common');

  const updateTheme = useCallback((theme) => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setTheme(theme);
  }, []);

  useEffect(() => {
    updateTheme(localStorage.theme || theme);
  }, [updateTheme, theme]);

  const handleClick = useCallback(
    (event) => setAnchorEl(event.currentTarget),
    []
  );

  const handleClose = useCallback(() => setAnchorEl(null), []);

  const handleLight = useCallback(() => {
    updateTheme('light');
    localStorage.theme = 'light';
  }, [updateTheme]);

  const handleDark = useCallback(() => {
    updateTheme('dark');
    localStorage.theme = 'dark';
  }, [updateTheme]);

  const links = [
    { name: t('home'), to: '/' },
    {
      name: t('Docs'),
        to: 'https://ouldbelkacemnael.gitbook.io/product-docs/',
    }
  ];

  return (
    <nav
      className={cx(
        'flex bg-white-dark top-0 sm:px-5 w-full text-white z-50 dark:bg-black',
        styles.navbar
      )}
    >
      <Box className="max-w-md mx-auto w-full flex flex-row items-center p-5 relative 2xl:max-w-6xl xl:max-w-6xl lg:max-w-4xl sm:max-w-xl sm:p-6">
        
        
        <Link href="/">
          <a className="flex items-center text-white flex-grow cursor-pointer hover:no-underline">
            <img src="/png/lalalend.png" alt="logo" width={200}/>
            <span className="ml-5 text-xl font-extrabold text-black dark:text-white font-mono">
              
            </span>
          </a>
        </Link>


        <Box className="flex flex-row visible items-center absolute right-10 lg:invisible">


          {theme === 'dark' ? (
            <Moon onClick={handleLight} className="cursor-pointer mr-3" />
          ) : (
            <Sun onClick={handleDark} className="cursor-pointer mr-3" />
          )}

          <LangMenu />

          <IconButton onClick={handleClick} className="ml-2">
            <MenuIcon className="dark:text-white text-black" />
          </IconButton>

        </Box>


        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{ paper: 'dark:bg-cod-gray' }}
        >

          <MenuItem onClick={handleClose}>
            <a href="http://localhost:3001">
              <Typography variant="p">{t('launchApp')}</Typography>
            </a>
          </MenuItem>
          
          {links.map((link) => {
            return (
              <MenuItem onClick={handleClose} key={link.name}>
                <NavLink
                  name={link.name}
                  to={link.to || ''}
                  active={link.name === active}
                >
                  <Typography variant="p" component="span">
                    {link.name}
                  </Typography>
                </NavLink>
              </MenuItem>
            );
          })}
        </Menu>
        <Box className="invisible space-x-10 flex flex-row items-center lg:visible">
          <Box className="space-x-10 hidden sm:flex">
            {links.map((link) => {
              
              return (
                <NavLink
                  to={link.to || ''}
                  name={link.name}
                  active={link.name === active}
                  key={link.name}
                />
              );
            })}
          </Box>

          
          <LangMenu />
          <Button
            href="http://localhost:3001"
            variant="contained"
            color="primary"
          >
            {t('launchApp')}
          </Button>
        </Box>
      </Box>
    </nav>
  );
}
