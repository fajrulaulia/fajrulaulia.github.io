import React from 'react';

interface FAButtonProps {
    onClick: () => void;
    title: string;
    color: 'danger' | 'success' | 'information' | 'default';
    size?: 'small' | 'medium' | 'large';
}

const FAButton = ({ onClick, title, color, size }: FAButtonProps) => {
    let buttonStyle = '';
    let buttonSize = '';

    switch (color) {
        case 'danger':
            buttonStyle = 'bg-red-600 hover:bg-red-700';
            break;
        case 'success':
            buttonStyle = 'bg-green-600 hover:bg-green-700';
            break;
        case 'information':
            buttonStyle = 'bg-blue-600 hover:bg-blue-700';
            break;
        default:
            buttonStyle = 'bg-indigo-600 hover:bg-indigo-700';
            break;
    }

    switch (size) {
        case 'small':
            buttonSize = 'px-3 py-2 text-sm';
            break;
        case 'large':
            buttonSize = 'px-7 py-4 text-lg';
            break;
        default:
            buttonSize = 'px-5 py-3 text-base';
            break;
    }

    return (
        <React.Fragment>
            <button
                id="FAButton"
                className={`rounded-md ${buttonSize} text-white font-medium ${buttonStyle}`}
                onClick={onClick}
            >
                {title}
            </button>
        </React.Fragment>
    );
};


export default FAButton;
