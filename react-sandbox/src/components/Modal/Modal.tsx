import React, { FC } from 'react';
import './Modal.css'

interface ModalProps {
    children: React.ReactNode;
    modalActive: boolean;
    handleModal: () => void;
}

export const Modal:FC<ModalProps> = ({children, modalActive, handleModal}) => {
    return (
        <div className={modalActive ? 'Modal active' : 'Modal'} onClick={handleModal}>
            <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};