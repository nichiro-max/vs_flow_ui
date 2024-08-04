"use client"
import React from 'react'
import { useModal } from '../_context/ModalContext';
import AddNewFlowForm from './Forms/AddNewFlowForm';

const SidePanel = () => {

    const { openModal, setContent, setHeading } = useModal();
    const handleModalOpen = () => {
        setHeading("new flowtie")
        setContent(<AddNewFlowForm/>)
        openModal()
    }

    return (
        <div className='w-80 border-l-[1px] border-neutral-600'>
            <nav className='min-h-12 border-b-[1px] border-neutral-600 flex items-center p-2'>
                <button onClick={handleModalOpen} className='text-xs text-white bg-neutral-950 p-2 rounded'>new flowtie ➕</button>
            </nav>
        </div>
    )
}

export default SidePanel