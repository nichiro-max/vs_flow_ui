"use client"
import React from 'react'
import { useModal } from '../_context/ModalContext';
import AddNewFlowForm from './Forms/AddNewFlowForm';
import ListContainer from './ListContainer';

const Editor = () => {

    //TODO : use real data to make list
    const items = ['document submission 📃','equipment setup ⚙️','training schedule 👟','requirement gathering ✍️',]

    const renderItem = (item: string) => <span className='flex flex-row items-center justify-between'>
        <p className='text-xs'>{item}</p><button className='inline-block text-xs text-black bg-neutral-200 p-2 rounded'>use 👉</button></span>;

    const loadingComponent = <div className='text-white'>Loading items...</div>;

    const { openModal, setContent, setHeading } = useModal();
    const handleAddNewFlowModal = () => {
        setHeading("new flowtie ✨")
        setContent(<AddNewFlowForm />)
        openModal()
    }

    const handleAddFromTemplateModal = () => {
        setHeading("templates 📑")
        setContent(<ListContainer items={items} renderItem={renderItem} loadingComponent/>)
        openModal()
    }

    return (
        <div className='flex-1 flex items-center justify-center gap-2'>
            <p className='inline text-white text-sm'>choose one from the</p>
            <button onClick={handleAddFromTemplateModal} className='inline-block text-xs text-white bg-neutral-950 p-2 rounded'>templates 📑</button>
            <p className='inline text-white text-sm'>or add</p>
            <button onClick={handleAddNewFlowModal} className='inline-block text-xs text-white bg-neutral-950 p-2 rounded'>new flowtie ➕</button>
        </div>
    )
}

export default Editor