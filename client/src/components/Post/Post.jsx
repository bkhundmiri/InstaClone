import React from 'react';

function Post(props) {
    const { post } = props
    // console.log(post);
    return (
        <div>
            <div>
                <div>{post.user.username}</div>
            </div>
            <img src={post.pictures[0].img_url} alt=""/>
            <div>
                <div>{post.content}</div>
                <div>{post.comments[0].content}</div>
            </div>
        </div>
    );
}

export default Post;