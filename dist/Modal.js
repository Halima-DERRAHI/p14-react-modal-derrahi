import React, { useEffect } from 'react';
import './modal.css';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Modal = ({
  icon,
  message,
  buttonText,
  onClose,
  onButtonClick,
  buttonColor,
  className
}) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Enter') {
        onButtonClick();
      }
    };
    const handleTabKeyPress = event => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const buttonElement = document.querySelector('.modalButton');
        buttonElement.focus();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleTabKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keydown', handleTabKeyPress);
    };
  }, [onButtonClick, onClose]);
  return /*#__PURE__*/_jsx("div", {
    className: "modalOverlay",
    children: /*#__PURE__*/_jsxs("div", {
      className: className || 'modal',
      tabIndex: -1,
      children: [/*#__PURE__*/_jsx("div", {
        className: "modalHeader",
        children: /*#__PURE__*/_jsx("span", {
          className: "closeBtn",
          onClick: onClose,
          children: "\xD7"
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "modalBody",
        children: [/*#__PURE__*/_jsx("span", {
          children: message
        }), icon && /*#__PURE__*/_jsx("img", {
          src: icon,
          alt: "Icon",
          className: "closeIcon"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "modalFooter",
        children: /*#__PURE__*/_jsx("button", {
          className: "modalButton",
          onClick: onButtonClick,
          style: {
            backgroundColor: buttonColor
          },
          autoFocus: true,
          children: buttonText
        })
      })]
    })
  });
};
export default Modal;