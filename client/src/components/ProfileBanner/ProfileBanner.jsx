import React from 'react';
import { Link } from 'react-router-dom'

import './ProfileBanner.css'

function ProfileBanner(props) {

    const { currentUser, oneUserPost } = props

    return (
        <>
            <div className='user-details-container'>
                <div className='profile-username'>{currentUser?.username}</div>
                <div className='profile-banner-container'>
                    <img className='profile-banner' src={currentUser?.img_url} alt=""/>
                    <div className='number-box'>
                        <div className='number'>{oneUserPost?.length}</div>
                        <div>Posts</div>
                    </div>
                    <div className='number-box'>
                        <div className='number'>-</div>
                        <div>Followers</div>
                    </div>
                    <div className='number-box'>
                        <div className='number'>-</div>
                        <div>Following</div>
                    </div>
                </div>
                <div className='profile-content'>
                    <p className='user-name'>{currentUser?.full_name}</p>
                    <div>{currentUser?.location}</div>
                    <div>{currentUser?.bio}</div>
                </div>
                <Link to='/profile/edit'><button className='edit-profile-button'>Edit Profile</button></Link>
            </div>
        </>
    );
};

export default ProfileBanner;