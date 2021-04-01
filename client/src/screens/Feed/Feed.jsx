import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../../components/Post/Post"

function Feed (props) {
    const { allPosts, fetchAllPosts } = props;
    const size = 10

    return (
        <>
            <InfiniteScroll
                dataLength={size}
                next={fetchAllPosts}
                hasMore={true}
                loader={<h4>Loading...</h4>}
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

