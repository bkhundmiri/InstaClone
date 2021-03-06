import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../../layouts/Layout";
import Feed from "../../screens/Feed/Feed";
import Profile from "../../screens/Profile/Profile"
import ProfileEdit from "../../screens/ProfileEdit/ProfileEdit"
import CreatePost from "../../screens/CreatePost/CreatePost";
import PostEdit from "../../screens/PostEdit/PostEdit";
import PostDetails from "../../screens/PostDetail/PostDetail"

import { getAllPosts, getUserPosts } from "../../services/posts";

function MainContainer(props) {
    const [allPosts, setAllPosts] = useState([]);
    const [oneUserPost, setOneUserPost] = useState([]);

    const { currentUser, setCurrentUser, handleLogout } = props;
    
    useEffect(() => {
        const fetchOneUserPosts = async () => {
            const oneUserPostData = await getUserPosts(currentUser?.id); 
            setOneUserPost(oneUserPostData);
        } 
        fetchOneUserPosts();
    }, [allPosts, currentUser?.id]);

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

                <Route path='/profile/edit'>
                    <ProfileEdit
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                    />
                </Route>

                <Route path='/profile'>
                    <Profile 
                        currentUser={currentUser}
                        oneUserPost={oneUserPost}
                        setOneUserPost={setOneUserPost}
                        handleLogout={handleLogout}
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
