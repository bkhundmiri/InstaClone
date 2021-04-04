import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";


import Layout from "../../layouts/Layout";
import Feed from "../../screens/Feed/Feed";
import Profile from "../../screens/Profile/Profile"
import CreatePost from "../../screens/CreatePost/CreatePost";
import PostDetails from "../../screens/PostDetail/PostDetail"


import { getAllPosts, getUserPosts } from "../../services/posts";
import PostEdit from "../../screens/PostEdit/PostEdit";


function MainContainer(props) {
  // const [allUsers, setAllUsers] = useState([])
    const [allPosts, setAllPosts] = useState([]);
    const [oneUserPost, setOneUserPost] = useState([]);

    const { currentUser } = props;
    const { id } = currentUser

    // const [userId, setUserId] = useState()

  // useEffect(() => {
  //     const fetchAllUsers = async () => {
  //         const allUserData = await getAllUsers()
  //         setAllUsers(allUserData)
  //     }
  //     fetchAllUsers()
  // }, [])
    
    useEffect(() => {
        const fetchOneUserPosts = async () => {
            const oneUserPostData = await getUserPosts(id); 
            setOneUserPost(oneUserPostData);
        } 
        fetchOneUserPosts();
    }, [allPosts, id]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const allPostsData = await getAllPosts();
            setAllPosts(allPostsData)
        };
        fetchAllPosts()
    }, [])



    return (
        <Layout
            currentUser={currentUser}
        >
            <Switch>
                <Route path='/posts/:id/details'>
                    <PostDetails
                        currentUser={currentUser}
                        setAllPosts={setAllPosts}
                    />
                </Route>
                <Route path='/posts/:id/edit'>
                    <PostEdit
                        // currentUser={currentUser}
                        allPosts={allPosts}
                        setAllPosts={setAllPosts}
                    />
                </Route>
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
                    <Feed />
                </Route>
            </Switch>
        </Layout>
    );
}

export default MainContainer;
