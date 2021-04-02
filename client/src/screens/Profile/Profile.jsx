import React from 'react';

function Profile(props) {
    const { oneUserPost, currentUser } = props
    console.log(oneUserPost);

    return currentUser ? ( 
        <div>
            <div>
                <div>{currentUser.username}</div>
            </div>
            {oneUserPost.map((post) => (
                <div>{post.img_url}</div>
            ))}
        </div>
    ) : null
}

export default Profile;