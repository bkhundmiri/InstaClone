import React from 'react'

export default function Modal(props) {
    const { open, setOpen, handleDelete } = props;
    return (
        <div className='modal-container' onClick={(e) => setOpen(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <p>Are you sure?</p>
                <button onClick={() => setOpen(false)}>no</button>
                <button onClick={() => {
                    handleDelete(open)
                    setOpen(false)
                }}>yes</button>
            </div>
        </div>
    )
}
