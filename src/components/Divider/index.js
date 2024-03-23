import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import styled, { css, withTheme } from 'styled-components';

const HorizantalDivider = styled(Box)`
  display: block;
  clear: both;
  width: 100%;
  min-width: 100%;
  height: ${props => props.theme.global.edgeSize[props.size]};
  ${'' /* margin-top: ${props => props.theme.global.edgeSize.small}; */}
  ${'' /* margin-bottom: ${props => props.theme.global.edgeSize.small}; */}
    background: ${props => props.theme.global.colors[props.color]};
`;
const VerticalDivider = styled(Box)`
  position: relative;
  display: inline-block;
  width: ${props => props.theme.global.edgeSize[props.size]};
  height: 0.9em;
  ${'' /* margin-left: ${props => props.theme.global.edgeSize.small}; */}
  ${'' /* margin-right: ${props => props.theme.global.edgeSize.small}; */}
  background: ${props => props.theme.global.colors[props.color]};

  ${props =>
    props.type === 'vertical' &&
    css`
      align-self: ${props => (props.align ? props.align : 'center')};
    `}
`;

const Divider = ({ type, ...rest }) => {
  return type === 'vertical' ? <VerticalDivider type={type} {...rest} /> : <HorizantalDivider type={type} {...rest} />;
};

Divider.defaultProps = {
  type: 'horizontal',
  color: 'border',
  size: 'hair',
};

Divider.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.string,
};

export default withTheme(Divider);
