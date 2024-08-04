"use client"
// components/Modal.tsx

import { useModal } from '../_context/ModalContext';

const Modal: React.FC = () => {
    const { isOpen, closeModal, content,heading } = useModal();

    if (!isOpen) return null;

    return (
        <div className='fixed top-0 left-0 bg-black/40 h-full w-full flex items-center justify-center'>
            <div className='relative w-96 h-96 bg-black rounded-xl flex flex-col'>
                <nav className='h-max px-3 py-2 border-b-[1px] border-neutral-700 flex justify-between items-center'>
                    <p className='text-white text-xs'>{heading}</p>
                    <button onClick={closeModal} className='p-2 border-[1px] border-neutral-700 rounded-md text-white text-xs'>close</button>
                </nav>
                <div className='flex-1 h-full flex items-center justify-center text-white'>
                    {content}
                </div>
            </div>
        </div>
    )

};

export default Modal;
