import './App.css';
import AppLayout from "./layouts/AppLayout";
import {Route, Routes} from "react-router-dom";
import Explore from "./views/Explore";
import Timeline from "./components/Timeline";
import PostsView from "./views/PostsView";
import PostView from "./views/PostView";
import CreatePostView from "./views/CreatePostView";
import NotFound from "./views/NotFound";
import React from "react";
import Protected from "./views/Protected";
import UserProfile from "./views/UserProfile";
import UpdatePost from "./views/UpdatePost";

const App = () => {
    return (
        <Routes>
            <Route element={<Protected/>}>
                <Route path="/" element={<AppLayout/>}>
                    <Route path="explore" element={<Explore/>}/>
                    <Route path="posts" element={<Timeline/>}>
                        <Route index element={<PostsView/>}/>
                        <Route path=":id" element={<PostView/>}/>
                        <Route path="create" element={<CreatePostView/>}/>
                        <Route path="update/:id" element={<UpdatePost/>}/>
                    </Route>
                    <Route path="users/:id" element={<UserProfile/>}/>
                    <Route index element={<PostsView/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
