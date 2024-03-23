import React from 'react';
import styled, { keyframes, withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import loader from 'components/Animations/loader';

const loadingAnimation = keyframes`${loader}`;

const StyledDiv = styled.div`
  width: ${props => (props.size ? props.size : '40px')};
  height: ${props => (props.size ? props.size : '40px')};
  background-color: ${props => props.theme.global.colors[props.color ? props.color : 'brand']};
  animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;

const Loader = ({ color, size, ...rest }) => {
  return <StyledDiv color={color} size={size} />;
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default withTheme(Loader);
