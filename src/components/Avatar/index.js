import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Image } from 'grommet';

const ROUND_MAP = {
  full: '100%',
};

const StyledImage = styled(Image)`
  border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -webkit-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
  -moz-border-radius: ${props => ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round]};
`;

const Avatar = ({ children, src, size, width, height, ...rest }) => {
  return (
    <Box
      align={Boolean(src) === false ? 'center' : null}
      background="comp-1"
      justify="center"
      round={rest.round}
      width={width || size}
      height={height || size}
    >
      {src && <StyledImage src={src} {...rest} fit="cover" />}
      {children}
    </Box>
  );
};

Avatar.defaultProps = {
  size: 'medium',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'any CSS size']),
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Avatar;
