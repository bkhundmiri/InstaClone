import React from 'react';

import './ModalDelete.css'

function ModalDelete(props) {

    const { open, setOpen, setDeleteOpen, handleDelete } = props;

    return (
        <div className='modal-delete-container' onClick={(e) => setOpen(false)}>
            <div className='modal-delete' onClick={(e) => e.stopPropagation()}>
                <div className='delete-prompt'>
                    <div>Are you sure you want to delete this post?</div>
                    <div>This action cannot be undone.</div>
                </div>
                <div className='modal-button delete-modal-delete-button' onClick={() => {
                    handleDelete(open)
                    setDeleteOpen(false)
                }}>Delete</div>
                <div className='modal-button modal-cancel' onClick={() => {
                    setDeleteOpen(false)
                    setOpen(false)
                }}>Cancel</div>
            </div>
        </div>
    );
}

export default ModalDelete;