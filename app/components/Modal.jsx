'use client'
import { useRef, useEffect, useState } from "react"


const Modal = ({ children, isOpen, onClose, closeOnBackdropClick, ...props }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    function handleClose() {
        if (onClose) {
            onClose();
        }

        setIsModalOpen(false)
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            handleClose();
        }
    }

    useEffect(() => {
        setIsModalOpen(isOpen)
    }, [isOpen])

    useEffect(() => {
        if (!modalRef.current) return;

        if (isModalOpen) {
            modalRef.current.showModal()
        } else {
            modalRef.current.close()
            if (onClose) onClose()
        }
    }, [isModalOpen])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen])

    useEffect(() => {
        if (!closeOnBackdropClick) return;

        function closeOnBackdropClick(e) {
            // Этот вариант работает
            if (!modalRef.current || !modalRef.current.contains(e.target)) return;
            handleClose();
        }

        window.addEventListener('click', closeOnBackdropClick)

        return () => {
            window.removeEventListener('click', closeOnBackdropClick)
        }
    }, [])

    return (
        <dialog
            className="backdrop:bg-green/[50%] bg-transparent overflow-hidden"
            {...props}
            ref={modalRef}
            onKeyDown={handleKeydown}
        >
            <div className="overflow-scroll relative w-screen h-screen flex items-center justify-center">
                {children}
                <span
                    className="absolute top-16 right-16 text-3xl text-gray z-[100000] cursor-pointer"
                    aria-label="Закрыть модальное окно"
                    onClick={() => handleClose()}
                >
                    X
                </span>
            </div>
        </dialog>
    )
}

export { Modal }