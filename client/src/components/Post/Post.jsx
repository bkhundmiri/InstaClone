import React from 'react';

function Post(props) {
    const { post } = props
    // console.log(post);
    
    return (
        <div>
            <div>
                {post.user ? <div>{post.user.username}</div> : null}
            </div>
            
            <img src={post.img_url} alt=""/>
            
            <div>
                <div>{post.content}</div>
                {post.comments.length ? <div>{post.comments[0].content}</div> : null}
            </div>
        </div>
    ) 
}

export default Post;