import React from 'react';
import { Box, DropButton } from 'grommet';
// import Avatar from 'granite-admin/core/components/Avatar'
import MenuButton from 'components/MenuButton';
import PropType from 'prop-types';

const DropMenu = ({ hoverIndicatorOptions, label, icon, renderItems, isCollapsed, dropAlign, ...rest }) => {
  return (
    <Box>
      <DropButton
        dropAlign={dropAlign || { top: 'bottom', right: 'right' }}
        dropContent={renderItems()}
        elevation="medium"
        {...rest}
      >
        <MenuButton isCollapsed={isCollapsed} label={label} hoverIndicatorOptions={hoverIndicatorOptions} icon={icon} />
      </DropButton>
    </Box>
  );
};

DropMenu.defaultProps = {
  isCollapsed: true,
  profile: {},
  renderItems: null,
};

DropMenu.propTypes = {
  isCollapsed: PropType.bool,
  profile: PropType.object,
  renderItems: PropType.func,
  dropAlign: PropType.object,
};

export default DropMenu;
