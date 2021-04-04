import React from 'react';
import { Link } from 'react-router-dom'
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';

import './Profile.css'

function Profile(props) {
    const { oneUserPost, currentUser } = props

    return currentUser ? ( 
        <>
            <ProfileBanner
                currentUser={currentUser}
                oneUserPost={oneUserPost}
            />
            <div className='profile-posts-container'>
            {oneUserPost.map((post) => (
                <div className='post-img-container' key={post.id}>
                    <Link to={`/posts/${post.id}/details`}><img className='profile-post-img' src={post.img_url} alt=""/></Link>
                </div>
            ))}
            </div>
        </>
    ) : <div>Loading.....</div>
}

export default Profile;