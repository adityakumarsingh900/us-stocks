import React from "react";
import { Anchor, Box, Button, Text } from "grommet";

import Avatar from "components/Avatar";
import Divider from "components/Divider";

const getUserAvatar = (name, image, size) => {
  if (Boolean(name) === false) return;

  return (
    <Box flex="grow">
      <Avatar
        src={image ? image : null}
        width={size}
        height={size}
        round="full"
      >
        <Text color="white" size="small">
          {!image && name.charAt(0).toUpperCase()}
        </Text>
      </Avatar>
    </Box>
  );
};

const CompanyDrop = () => {
  const signOut = () => {
    alert("signOut");
  };

  return (
    <Box
      pad={{ top: "xsmall", bottom: "medium" }}
      width="medium"
      background="background-contrast.dark"
      flex={{ shrink: 0 }}
    >
      <Box align="center" gap="xsmall">
        {getUserAvatar(
          "Batman",
          "https://www.vhv.rs/dpng/d/52-527377_batman-face-cartoon-png-transparent-png.png",
          "xxsmall"
        )}
        <Text>Batman</Text>
      </Box>

      <Box margin={{ vertical: "xsmall" }}>
        <Divider
          color="none"
          style={{ width: "auto", minWidth: "auto" }}
          margin={{ horizontal: "small" }}
          background={{ color: "border", opacity: "medium" }}
        />
      </Box>
      <Box align="center" gap="small">
        <Button
          size="xsmall"
          label="Logout"
          onClick={signOut}
          primary
          color="text"
        />
        <Box direction="row" gap="medium">
          <Anchor
            as="span"
            size="small"
            color="info"
            label="Terms and Conditions"
          />
          <Anchor as="span" size="small" color="info" label="Privacy Policy" />
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyDrop;
