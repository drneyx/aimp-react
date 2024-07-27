import React, { ChangeEvent, ReactNode } from 'react';
// import './InputCom.css'; // Assuming custom CSS if needed

interface InputComProps {
    label?: string;
    type: string;
    name: string;
    placeholder?: string;
    children?: ReactNode;
    inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    inputClasses?: string;
    labelClasses?: string;
}

const InputCom: React.FC<InputComProps> = ({
    label,
    type,
    name,
    placeholder,
    children,
    inputHandler,
    value,
    inputClasses = '',
    labelClasses = 'text-muted',
}) => {
    return (
        <div className="input-com w-100 h-100">
            {label && (
                <label className={`form-label text-uppercase ${labelClasses}`} htmlFor={name}>
                    {label}
                </label>
            )}
            <div className="input-wrapper form-group border w-100 h-100 overflow-hidden position-relative">
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={inputHandler}
                    className={`form-control ${inputClasses}`}
                    type={type}
                    id={name}
                />
                {children}
            </div>
        </div>
    );
};

export default InputCom;
