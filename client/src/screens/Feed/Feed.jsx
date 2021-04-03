import React, { useState, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../../components/Post/Post"
import { getAllPosts } from "../../services/posts";

function Feed (props) {
    const { allPosts, setAllPosts } = props;
    const [allFeedPosts, setAllFeedPosts] = useState([])
    const [toggleFetch, setToggleFetch] = useState(false)
    const size = 10

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
        <>
            <InfiniteScroll
                dataLength={allFeedPosts.length}
                next={triggerToggleFetch}
                hasMore={true}
                inverse={true}
                loader={<h4>Loading...</h4>}
                pullDownToRefresh={true}
                refreshFunction={triggerToggleFetch}
                endMessage={
                    <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
                }
                height='90vh'
            >
                {allFeedPosts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </InfiniteScroll>
        </>
    );
}

export default Feed;

