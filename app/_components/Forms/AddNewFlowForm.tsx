import React, { useState } from 'react'

function AddNewFlowForm() {
    //TODO : Build an appContext and add flowName to the appContext as currentFlowName

    const [flowName, setFlowName] = useState<string>("")
    const [flowDescription, setFlowDescription] = useState<string>("")

    return (
        <>
            <form className='flex flex-col gap-2 w-80 p-5'>
                <input className='text-xs px-2 py-3 text-white rounded-md outline-none bg-neutral-900' type="text" onChange={(e) => setFlowName(e.target.value)} name='flowName' value={flowName} placeholder='name your flowtie 📛' />
                <input className='text-xs px-2 py-3 text-white rounded-md outline-none bg-neutral-900' type="text" onChange={(e) => setFlowDescription(e.target.value)} name='flowDescription' value={flowDescription} placeholder='describe your flowtie (in short 🤏)' />
                <div className='flex flex-row gap-2'>
                    <button onClick={(e) => e.preventDefault()} className='flex-1 bg-neutral-200 text-black text-xs p-2 rounded-md'>use it now 👇</button>
                    <button onClick={(e) => e.preventDefault()} className='flex-1 border-[1px] border-neutral-700 text-white text-xs p-2 rounded-md'>save for later 🔖</button>
                </div>
            </form>
        </>
    )
}

export default AddNewFlowForm