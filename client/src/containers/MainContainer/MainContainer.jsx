import React from 'react';
import { Switch, Route, useParams } from "react-router-dom"
import Feed from '../../screens/Feed/Feed';
import { getAllPostsComments } from '../../services/comments';

function MainContainer(props) {

    const { id } = useParams

    const fetchPostComments = async () => {
        const commentsData = await getAllPostsComments(id)
    }

    return (
        <Switch>
            <Route path='/feed'>
                <Feed/>
            </Route>
        </Switch>
    );
}

export default MainContainer;