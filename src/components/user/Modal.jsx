import { useState } from "react";
import { jsPDF } from 'jspdf';

import modalStyle from "./user.module.css";

export default function Modal({ onClose, children }) {
    return (
        <div className={modalStyle.modalCustom}>
            <div className={modalStyle.modalCustomContent}>
                <span className={modalStyle.close} onClick={onClose}>
                    &times;
                </span>

                <div className={modalStyle.content}>
                {children}
                </div>

            </div>
        </div>
    );
};