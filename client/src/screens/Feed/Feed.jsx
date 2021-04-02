import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../../components/Post/Post"
import { getAllPosts } from "../../services/posts";

function Feed (props) {
    const { allPosts, setAllPosts } = props;
    const size = 10

    const fetchAllInfinitePosts = async () => {
        const allPostsData = await getAllPosts;
        setAllPosts(allPostsData)
    };

    return (
        <>
            <InfiniteScroll
                dataLength={size}
                next={fetchAllInfinitePosts}
                hasMore={true}
                inverse={true}
                loader={<h4>Loading...</h4>}
                pullDownToRefresh={true}
                refreshFunction={fetchAllInfinitePosts}
                endMessage={
                    <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
                }
                height='90vh'
            >
                {allPosts.map((post, index) => (
                    <Post post={post} />
                ))}
            </InfiniteScroll>
        </>
    );
}

export default Feed;

