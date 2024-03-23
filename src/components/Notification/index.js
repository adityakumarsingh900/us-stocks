// Lib Imports
import React from 'react';
import { Avatar, Box, Text } from 'grommet';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { User, Chat } from "grommet-icons";

// Core Imports
import DropMenu from 'components/DropMenu';

import notifications from './data.js';

const StyledText = styled(Text)`
  a {
    color: #0e84ad;
    text-decoration: underline;
  }
  a:hover {
    color: #fbab31;
  }
`;

const Notification = ({ isCollapsed }) => {

  return (
    <DropMenu
      icon={
          <Chat size="20px" />
      }
      isCollapsed={isCollapsed}
      label={<Text>Notifications</Text>}
      dropProps={{ style: { borderRadius: "6px" } }}
      dropAlign={{ bottom: "bottom", left: "right" }}
      renderItems={() => <NotificationStack notifications={notifications} />}
    />
  );
};

const NotificationStack = ({
  notifications,
}) => {

  return (
    <Box width="medium-l" height="medium-l" overflow={{ vertical: "auto" }}>
      <Box
        flex={{ shrink: 0 }}
        background="background-contrast.dark"
        pad="medium"
        justify="center"
        width="100%"
      >
        <Text color="white">Notifications</Text>
      </Box>
      <Box flex={{ grow: 1 }} background="dark-1">
        {notifications.map((notification, index) => (
          <Box
            key={index}
            direction="row-responsive"
            align="center"
            justify="between"
            pad={{ vertical: "small", left: "small", right: "medium" }}
            hoverIndicator
          >
            <Box direction="row" gap="small" align="center">
              {getUserAvatar(notification.logo)}
              <Box width="medium">
                <StyledText
                  weight="bold"
                  dangerouslySetInnerHTML={{ __html: notification.text }}
                />
                <Text color="status-disabled">
                    <Text>{notification.desc}</Text>
                </Text>
              </Box>
            </Box>
            {!notification.status && (
              <Box
                flex={{ shrink: 0 }}
                round="full"
                background="secondary"
                height="8px"
                width="8px"
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const getUserAvatar = (logo) => {
  return (
    <Box flex="grow">
      <Avatar src={logo} background="brand-light" round="full">
        <User />
      </Avatar>
    </Box>
  );
};

Notification.propTypes = {
  isCollapsed: PropTypes.bool,
};

export default Notification;
