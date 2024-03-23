import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Image } from 'grommet';

const StyledImage = styled(Image)`
  border-radius: ${props =>
    props.rounded === true ? '100%' : typeof props.rounded === 'string' ? props.rounded : '0%'};
  -webkit-border-radius: ${props =>
    props.rounded === true ? '100%' : typeof props.rounded === 'string' ? props.rounded : '0%'};
  -moz-border-radius: ${props =>
    props.rounded === true ? '100%' : typeof props.rounded === 'string' ? props.rounded : '0%'};
`;

const ImageView = ({ src, size, rounded }) => {
  return (
    <Box
      align="center"
      justify="center"
      round={rounded === true ? '100%' : typeof rounded === 'string' ? rounded : null}
      width={size}
      height={size}
    >
      {src && <StyledImage src={src} width={size} height={size} fit="contain" rounded={rounded} />}
    </Box>
  );
};

ImageView.defaultProps = {
  size: 'medium',
};

ImageView.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'any CSS size']),
  rounded: PropTypes.string,
};

export default ImageView;
