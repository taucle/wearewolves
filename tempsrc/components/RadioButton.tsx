import React from 'react';

import './styles/RadioButton.css';

interface Props {
    id: string;
    name: string;
    value: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatMessage: React.FC<Props> = (
    {id, name, value, label, onChange}
) => {
    return (
        <>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="radio-input"
            />
            <label
                className="radio-label"
                htmlFor={id}
            >
                {label}
            </label>
        </>
    );
};

export default ChatMessage;