import React from 'react';

function Post(props) {
    const { post } = props
    console.log(post);
    
    return (
        <div>
            { post ? <div>
                
                <div>{post.user.username}</div>

            </div>
            
            {post.pictures.length ? <img src={post.pictures[0].img_url} alt=""/> : null}
            
            <div>
                <div>{post.content}</div>
                {post.comments.length ? <div>{post.comments[0].content}</div> : null}
            </div>}
        </div>
    )
}

export default Post;