import React from 'react';
import { Box, Text } from 'grommet';
import PropTypes from 'prop-types';

import DropMenu from 'components/DropMenu';
import CompanyDrop from './components/CompanyDrop';
import ImageView from 'components/ImageView';

const getOrganisationAvatar = () => {
  return (
    <ImageView
      src="https://s.clipartkey.com/mpngs/s/120-1208070_how-to-draw-batmans-face-draw-batman-face.png"
      size="27px"
      rounded
    />
  );
};

const UserDropMenu = ({ isCollapsed }) => {
  return (
    <DropMenu
      icon={getOrganisationAvatar()}
      className="Aditya"
      isCollapsed={isCollapsed}
      label={
        <Box pad={{ horizontal: "xxsmall" }}>
          <Text>Batman</Text>
          <Text size="xsmall">Gotham</Text>
        </Box>
      }
      dropProps={{ style: { borderRadius: "0px 6px 0px 0px" } }}
      dropAlign={{ bottom: "bottom", left: "right" }}
      renderItems={() => <CompanyDrop />}
    />
  );
};

UserDropMenu.propTypes = {
  isCollapsed: PropTypes.bool,
};

export default UserDropMenu;
