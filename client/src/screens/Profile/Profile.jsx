import React from 'react';
import { Link } from 'react-router-dom'

function Profile(props) {
    const { oneUserPost, currentUser } = props

    return currentUser ? ( 
        <div>
            <div>
                <div>{currentUser.username}</div>
                <Link to='/profile/edit'>Edit Profile</Link>
            </div>
            {oneUserPost.map((post, index) => (
                <div key={index}>
                    <Link to={`/posts/${post.id}/details`}><img src={post.img_url} alt=""/></Link>
                </div>
            ))}
        </div>
    ) : <div>Loading.....</div>
}

export default Profile;