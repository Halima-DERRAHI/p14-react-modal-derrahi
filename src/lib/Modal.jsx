import React, { useEffect } from 'react';
import './modal.css';

const Modal = ({ icon, message, buttonText, onClose, onButtonClick, buttonColor, className }) => {
  
    useEffect(() => {
        
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'Enter') {
                onButtonClick();
            }
        };

        const handleTabKeyPress = (event) => {
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

    return (
        <div className="modalOverlay">
            <div className={className || 'modal'} tabIndex={-1}>
                <div className="modalHeader">
                    <span className="closeBtn" onClick={onClose}>&times;</span>
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