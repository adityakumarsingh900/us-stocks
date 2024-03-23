// lib imports
import React, { useState } from 'react';
import {
  Box,
  Image,
  Button,
  ResponsiveContext,
  Nav,
} from "grommet";
import { useHistory } from "react-router-dom";

import {
  Projects,
  StatusInfoSmall,
  FormNext,
  FormPrevious,
  Home,
} from "grommet-icons";

import Notification from 'components/Notification';
import UserDropMenu from 'components/UserDropMenu';

// application imports
import logoImage from 'assets/logo.png';

const width = '256px';

const SidebarButton = ({ icon, label, ...rest }) => (
  <Box pad="small" fill="horizontal">
    <Button
      gap="medium"
      alignSelf="start"
      plain
      icon={icon}
      label={label}
      {...rest}
    />
  </Box>
);

const Sidebar = () => {
  const [hover, setHover] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  let history = useHistory();

  const goto = (url) => history.push(url);

  return (
    <ResponsiveContext.Consumer>
      {size => {
        const isCollapsed = ((size === 'small') || collapsed);

        return (
          <Box
            width={isCollapsed && !hover ? "58px" : width}
            style={{
              minWidth: isCollapsed && !hover ? "58px" : width,
              position: "relative",
              transition: "0.5s",
            }}
            elevation="small"
            background="black"
          >
            <SidebarButton
              icon={isCollapsed ? <FormNext /> : <FormPrevious />}
              label={<Image src={logoImage} alt="Company Logo" width="120px" />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Box
              flex
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Nav
                gap="small"
                flex
                overflow={{ vertical: "auto", horizontal: "hidden" }}
              >
                <SidebarButton
                  icon={<Home />}
                  label="Dashboard"
                  onClick={() => goto("/")}
                />
                <SidebarButton
                  icon={<StatusInfoSmall />}
                  label="Stocks"
                  onClick={() => goto("/dummy")}
                />
                <SidebarButton
                  icon={<Projects />}
                  label="Mutual Funds"
                  onClick={() => goto("/dummy")}
                />
              </Nav>
              <Notification isCollapsed={isCollapsed && !hover} />
              <UserDropMenu isCollapsed={isCollapsed && !hover} />
            </Box>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};

export default Sidebar;
