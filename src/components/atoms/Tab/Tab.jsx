import React, { useState } from 'react';
import { colors } from '../../../globalStyle/variabls.js';

const styles = {
  tab: {
    color: colors.gray900Opacity60,
    fontSize: '16px',
    padding: '10px',
    backgroundColor: 'transparent',
    borderBottom: `2px solid ${colors.black12Opacity}`,
    cursor: 'pointer',
  },
  selected: {
    color: colors.blue400,
    borderBottom: `2px solid ${colors.blue400}`,
  },
  hover: {
    color: colors.gray900Opacity87,
  },
};

const Tab = ({ displayValue, selected, value, tabIndex, handleTabClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tabStyle = {
    ...styles.tab,
    ...(selected ? styles.selected : null),
    ...(isHovered && !selected ? styles.hover : null),
  };

  return (
    <span
      tab-index={tabIndex}
      tab-value={value}
      style={tabStyle}
      onClick={handleTabClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayValue?.toUpperCase()}
    </span>
  );
};

export default Tab;
