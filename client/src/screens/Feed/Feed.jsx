import React, { useState, useEffect} from "react";
import Post from "../../components/Post/Post"
import { getAllPosts } from "../../services/posts";

import './Feed.css'

function Feed (props) {
    const [allFeedPosts, setAllFeedPosts] = useState([])

    useEffect(() => {
        const fetchAllFeedPosts = async () => {
            const allPostsData = await getAllPosts();
            setAllFeedPosts(allPostsData)
        };
        fetchAllFeedPosts()
    }, [])

    return (
        <div className='feed-container'>
            <div className='posts-container'>
                {allFeedPosts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Feed;

