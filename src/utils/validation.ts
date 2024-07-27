import { useState } from 'react';

export interface ValidationErrors {
    [key: string]: {
        dirty: boolean;
        error: boolean;
        message: string;
    };
}

export const validateField = (name: string, value: string, form: any) => {
    switch (name) {
        case 'username':
            if (value.trim() === '') {
                return {
                    dirty: true,
                    error: true,
                    message: 'Username is required',
                };
            }
            return {
                dirty: true,
                error: false,
                message: '',
            };

        case 'phone_number':
            if (value.trim() === '') {
                return {
                    dirty: true,
                    error: true,
                    message: 'Phone Number is required',
                };
            }
            return {
                dirty: true,
                error: false,
                message: '',
            };


        case 'first_name':
            if (value.trim() === '') {
                return {
                    dirty: true,
                    error: true,
                    message: 'First name is required',
                };
            }
            return {
                dirty: true,
                error: false,
                message: '',
            };

        case 'last_name':
                if (value.trim() === '') {
                    return {
                        dirty: true,
                        error: true,
                        message: 'Last Name is required',
                    };
                }
                return {
                    dirty: true,
                    error: false,
                    message: '',
                };

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return {
                    dirty: true,
                    error: true,
                    message: 'Invalid email address',
                };
            }
            return {
                dirty: true,
                error: false,
                message: '',
            };
        case 'password':
            if (value.length < 6) {
                return {
                    dirty: true,
                    error: true,
                    message: 'Password must be at least 6 characters long',
                };
            }
            return {
                dirty: true,
                error: false,
                message: '',
            };
        case 'password2':
            if (value !== form.password) {
                return {
                    dirty: true,
                    error: true,
                    message: 'Passwords do not match',
                };
            }
            return {
                dirty: true,
                error: false,
                message: '',
            };
        default:
            return {
                dirty: false,
                error: false,
                message: '',
            };
    }
};

export const useFormValidator = (form: any) => {
    const [errors, setErrors] = useState<ValidationErrors>({});

    const validateForm = ({ form, errors, field }: { form: any, errors: ValidationErrors, field?: string }) => {
        const nextErrors = { ...errors };

        if (field) {
            const fieldError = validateField(field, form[field], form);
            nextErrors[field] = fieldError;
        } else {
            Object.keys(form).forEach((key) => {
                const fieldError = validateField(key, form[key], form);
                nextErrors[key] = fieldError;
            });
        }

        setErrors(nextErrors);

        return !Object.values(nextErrors).some((error) => error.error);
    };

    const onBlurField = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const fieldError = validateField(name, value, form);
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: fieldError,
        }));
    };

    return { errors, validateForm, onBlurField };
};
