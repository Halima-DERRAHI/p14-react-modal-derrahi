import React, { useEffect } from 'react';
import './modal.css';

/**
 * Reusable modal component.
 * @param {object} props - The properties of the modal.
 * @param {string} props.icon - Image for the icon.
 * @param {string} props.message - Message displayed in the modal.
 * @param {string} props.buttonText - Text for the action button.
 * @param {Function} props.onClose - Callback to close the modal.
 * @param {Function} props.onButtonClick - Callback for button action.
 * @param {string} [props.buttonColor] - Background color for the action button.
 * @param {string} [props.className] - CSS class to customize the modal.
 * @returns {JSX.Element} Modal component.
 */
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
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
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
          tabIndex: 0,
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