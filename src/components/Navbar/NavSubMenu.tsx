import { useState, useCallback } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import NavLink from './NavLink';
import Typography from 'components/UI/Typography';

type LinkType = {
  name: string;
  to?: string;
  subLinks?: LinkType[];
};

const NavSubMenu = ({
  menuName,
  links,
  active,
}: {
  menuName: string;
  links: LinkType[];
  active: string;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event) => setAnchorEl(event.currentTarget),
    []
  );

  const handleClose = useCallback(() => setAnchorEl(null), []);

  return (
    <>
      <Typography
        variant="p"
        onClick={handleClick}
        className="cursor-pointer dark:hover:text-white hover:text-primary"
      >
        {menuName}
      </Typography>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: 'dark:bg-cod-gray' }}
      >
        {links.map((link) => {
          return (
            <MenuItem onClick={handleClose} key={link.name}>
              <NavLink
                to={link.to || ''}
                name={link.name}
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
    </>
  );
};

export default NavSubMenu;
