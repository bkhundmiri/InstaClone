import React from 'react';

import './ModalLogout.css'

function ModalLogout(props) {

    const { currentUser, setLogoutOpen, handleLogout } = props
    return (
        <div className='modal-logout-container' onClick={(e) => setLogoutOpen(false)}>
            <div className='modal-logout' onClick={(e) => e.stopPropagation()}>
                <div className='delete-prompt'>
                    <div>Log out of {currentUser.username}?</div>
                </div>
                <div className='modal-button delete-modal-delete-button' onClick={() => {
                    handleLogout()
                    setLogoutOpen(false)
                }}>Log Out</div>
                <div className='modal-button modal-cancel' onClick={() => {
                    setLogoutOpen(false)
                }}>Cancel</div>
            </div>
        </div>
    );
}

export default ModalLogout;