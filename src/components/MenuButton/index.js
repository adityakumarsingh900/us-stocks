import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Box, Button, Collapsible, Text } from 'grommet';
import { FormDown } from 'grommet-icons/icons/FormDown';
import { FormNext } from 'grommet-icons/icons/FormNext';
import { Share } from 'grommet-icons';
import styled, { withTheme } from 'styled-components';

// Core Imports
import Tooltip from 'components/Tooltip';

const TooltipWrapper = ({ children, isCollapsed, content }) => {
  if (isCollapsed) return <Tooltip content={content}>{children}</Tooltip>;
  else return children;
};

const StyledSpan = styled.span`
  svg {
    fill: ${({ isActive, theme }) =>
      isActive
        ? theme.global.colors['sidebar-svg-active'] + `!important`
        : theme.global.colors['sidebar-svg'] + `!important`};
  }
`;

const StyledText = styled(Text)`
  color: ${({ isActive, hoverIndicator, theme }) =>
    isActive ? theme.global.colors['sidebar-label-active'] : theme.global.colors['sidebar-label']};
  font-weight: ${({ theme }) =>
    theme.global.colors['sidebar-label-bold'] ? theme.global.colors['sidebar-label-bold'] : null};
`;

const StyledBox = styled(Box)`
  &:hover svg {
    fill: ${({ isActive, theme }) => theme.global.colors['sidebar-svg-hover'] + `!important`};
  }
  &:hover span {
    color: ${({ isActive, theme }) => theme.global.colors['sidebar-label-hover'] + `!important`};
  }
`;

const MenuButton = ({
  children,
  label,
  id,
  icon,
  level,
  isActive,
  activeColor,
  isExpandable,
  isExpanded: defaultIsExpanded,
  hoverIndicatorOptions,
  onClick,
  isCollapsed,
  textColor,
  sideMenuItem,
  pathname,
  openInNewTab,
  theme,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onClick(!isExpanded);
  };

  return (
    <>
      <StyledBox
        direction="row"
        align="center"
        justify="between"
        background={isActive ? activeColor : null}
        margin={{ vertical: isCollapsed ? 'xsmall' : '0' }}
      >
        <Button
          onClick={handleClick}
          as="div"
          fill
          hoverIndicator={isActive ? false : hoverIndicatorOptions ? hoverIndicatorOptions : true}
          {...rest}
        >
          <TooltipWrapper content={label} isCollapsed={isCollapsed}>
            <Box direction="column" justify="between">
              <Box
                pad={{
                  vertical: 'small',
                  horizontal: 'medium',
                }}
                direction="row"
                justify={isCollapsed ? 'center' : 'between'}
                style={{
                  marginLeft: !isCollapsed ? `${16 * level}px` : '0px',
                }}
              >
                <Button
                  plain
                  as="div"
                  style={{ display: 'flex' }}
                  icon={
                    icon && typeof icon === 'string' ? (
                      <StyledSpan
                        theme={theme}
                        isActive={isActive}
                        style={{ display: 'flex' }}
                        dangerouslySetInnerHTML={{ __html: icon }}
                      />
                    ) : (
                      icon
                    )
                  }
                  label={
                    isCollapsed ? (
                      ''
                    ) : (
                      <StyledText theme={theme} isActive={isActive} color={textColor}>
                        {label}
                      </StyledText>
                    )
                  }
                />
                {!isCollapsed && isExpandable && (
                  <Box alignSelf="end">{isExpanded ? <FormDown size="20px" /> : <FormNext size="20px" />}</Box>
                )}
                {sideMenuItem === true && !isExpandable && !isCollapsed && (
                  <Box
                    pad={{ bottom: '2px', top: 'xsmall', horizontal: 'xsmall' }}
                    alignSelf="end"
                    round="xsmall"
                    border={{ color: 'brand', size: '1px' }}
                    onClick={e => {
                      openInNewTab({ label, pathname: `/${pathname}` });
                    }}
                  >
                    <Share color="brand" size="12px" />
                  </Box>
                )}
              </Box>
            </Box>
          </TooltipWrapper>
        </Button>
      </StyledBox>
      <Collapsible open={isExpanded}>{children}</Collapsible>
    </>
  );
};

MenuButton.defaultProps = {
  icon: null,
  isActive: false,
  activeColor: 'brand',
  isCollapsed: false,
  isExpandable: false,
  isExpanded: false,
  level: 0,
  onClick: () => {},
  textColor: 'text',
};

MenuButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]),
  isActive: PropTypes.bool,
  activeColor: PropTypes.string,
  isCollapsed: PropTypes.bool,
  isExpandable: PropTypes.bool,
  isExpanded: PropTypes.bool,
  level: PropTypes.number || PropTypes.string,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
};

export default withTheme(MenuButton);
