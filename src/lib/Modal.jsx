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

const Modal = ({ icon, message, buttonText, onClose, onButtonClick, buttonColor, className }) => {
  
    useEffect(() => {
        
        const handleKeyPress = (event) => {
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

    return (
        <div className="modalOverlay">
            <div className={className || 'modal'} tabIndex={-1}>
                <div className="modalHeader">
                    <span className="closeBtn" onClick={onClose} tabIndex={0}>&times;</span>
                </div>
                <div className="modalBody">
                    <span>{message}</span>
                    {icon && <img src={icon} alt="Icon" className="closeIcon" />}
                </div>
                <div className="modalFooter">
                    <button
                        className="modalButton"
                        onClick={onButtonClick}
                        style={{ backgroundColor: buttonColor }}
                        autoFocus
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;