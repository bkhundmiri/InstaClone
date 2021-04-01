import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";


import Layout from "../../layouts/Layout";
import Feed from "../../screens/Feed/Feed";
import Post from "../../components/Post/Post"


import { getAllPostsComments } from "../../services/comments";
import { getAllPosts, getUserPosts } from "../../services/posts";
import { getAllUsers } from "../../services/users";

import InfiniteScroll from 'react-infinite-scroll-component';
import CreatePost from "../../screens/CreatePost/CreatePost";


function MainContainer(props) {
  // const [allUsers, setAllUsers] = useState([])
    const [allPosts, setAllPosts] = useState([]);
    const [oneUserPost, setOneUserPost] = useState([]);

    const [toggleNext, setToggleNext] = useState(true);

    const { currentUser } = props;
    const { id } = useParams;

    // console.log(currentUser);

  // useEffect(() => {
  //     const fetchAllUsers = async () => {
  //         const allUserData = await getAllUsers()
  //         setAllUsers(allUserData)
  //     }
  //     fetchAllUsers()
  // }, [])

    // useEffect(() => {
        const fetchAllPosts = async () => {
            const allPostsData = await getAllPosts();
            setAllPosts(allPostsData)
        };
        // fetchAllPosts()
    // }, [])

    useEffect(() => {
        const fetchOneUserPosts = async () => {
        const oneUserPostData = await getUserPosts();
        setOneUserPost(oneUserPostData);
        };
        fetchOneUserPosts();
    }, []);

    // console.log(allPosts);

    const fetchPostComments = async () => {
        const commentsData = await getAllPostsComments(id);
    };

    return (
        <Layout
        currentUser={currentUser}
        >
            <Switch>
                <Route path='/posts/new'>
                    <CreatePost 
                        setAllPosts={setAllPosts}
                    />
                </Route>
                <Route path='/feed'>
                    <Feed 
                        fetchAllPosts={fetchAllPosts} 
                        allPosts={allPosts}
                    />
                </Route>
            </Switch>
        </Layout>
    );
}

export default MainContainer;
