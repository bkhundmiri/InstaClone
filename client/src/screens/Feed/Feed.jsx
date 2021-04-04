import React, { useState, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../../components/Post/Post"
import { getAllPosts } from "../../services/posts";

import './Feed.css'

function Feed (props) {
    const [allFeedPosts, setAllFeedPosts] = useState([])
    const [toggleFetch, setToggleFetch] = useState(false)

    useEffect(() => {
        const fetchAllFeedPosts = async () => {
            const allPostsData = await getAllPosts();
            setAllFeedPosts(allPostsData)
        };
        fetchAllFeedPosts()
    }, [toggleFetch])

    const triggerToggleFetch = () => {
        setToggleFetch((curr) => !curr)
    }

    return (
        <div className='feed-container'>
            {allFeedPosts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

export default Feed;

