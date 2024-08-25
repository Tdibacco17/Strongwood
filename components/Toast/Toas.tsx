'use client'
import React, { useEffect } from 'react';
import styles from './Toast.module.scss';

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // El toast desaparecerá después de 3 segundos

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            {message}
        </div>
    );
};

export default Toast;
