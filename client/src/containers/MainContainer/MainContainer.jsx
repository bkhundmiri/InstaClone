import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";


import Layout from "../../layouts/Layout";
import Feed from "../../screens/Feed/Feed";
import Profile from "../../screens/Profile/Profile"
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

    console.log(currentUser);

  // useEffect(() => {
  //     const fetchAllUsers = async () => {
  //         const allUserData = await getAllUsers()
  //         setAllUsers(allUserData)
  //     }
  //     fetchAllUsers()
  // }, [])

    useEffect(() => {
        const fetchAllPosts = async () => {
            const allPostsData = await getAllPosts();
            setAllPosts(allPostsData)
        };
        fetchAllPosts()
    }, [])
    console.log(allPosts);

    useEffect(() => {
        const fetchOneUserPosts = async () => {
            const oneUserPostData = await getUserPosts(currentUser.id);
            setOneUserPost(oneUserPostData);
        } 
        fetchOneUserPosts();
    }, []);
    console.log(oneUserPost);


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
                        currentUser={currentUser}
                        setAllPosts={setAllPosts}
                    />
                </Route>
                <Route path='/profile'>
                    <Profile 
                        currentUser={currentUser}
                        oneUserPost={oneUserPost}
                        setOneUserPost={setOneUserPost}
                    />
                </Route>
                <Route path='/feed'>
                    <Feed 
                        allPosts={allPosts}
                        setAllPosts={setAllPosts}
                    />
                </Route>
            </Switch>
        </Layout>
    );
}

export default MainContainer;
