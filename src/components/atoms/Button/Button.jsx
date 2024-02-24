import React, { useState } from 'react';
import { colors } from '../../../globalStyle/variabls.js'; // Assuming it's a JavaScript file
import './Button.css'; // Assuming it contains styles for the button

const getButtonColors = (buttonType) => {
  switch (buttonType) {
    case 'primary':
      return {
        bgColor: colors.blue400,
        color: colors.white,
        hoverBgColor: colors.blue500,
        hoverColor: colors.white,
      };
    case 'ghost':
      return {
        bgColor: colors.white,
        color: colors.gray600,
        hoverBgColor: colors.white,
        hoverColor: colors.gray900Opacity87,
      };
    case 'danger':
      return {
        bgColor: colors.red400,
        color: colors.white,
        hoverBgColor: colors.red500,
        hoverColor: colors.white,
      };
    case 'icon':
      return {
        bgColor: 'transparent',
        color: colors.gray600,
        hoverBgColor: colors.black12Opacity,
        hoverColor: colors.gray900Opacity87,
      };
    default:
      return {
        bgColor: colors.blue400,
        color: colors.white,
        hoverBgColor: colors.blue500,
        hoverColor: colors.white,
      };
  }
};

const Button = ({ text, icon, buttonType }) => {
  const { bgColor, color, hoverBgColor, hoverColor } = getButtonColors(buttonType);

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    borderRadius: "56px",
    backgroundColor: bgColor,
    color: color,
    fontSize: "16px",
    cursor: "pointer",
    outline: "none",
    border: "none",
    padding: "12px 16px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (isHovered) {
    buttonStyle.backgroundColor = hoverBgColor;
    buttonStyle.color = hoverColor;
  }

  return (
    <button
      style={buttonType === 'icon' ? iconStyle : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon ? <span style={iconStyle}>{icon}</span> : ''}
      <span>{text}</span>
    </button>
  );
};

export default Button;
