import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "../api/PostApi";
import PostCard from "../components/PostCard";
import {LoaderView} from "../components/LoaderView";

const Explore = () => {
    const {data, isLoading, error, isError} = useQuery(['getAllPosts'], getAllPosts);
    const posts = data?.data?.payload;
    if (isLoading) {
        return (
            <LoaderView/>
        );
    }

    return (
        <div className="min-h-screen">
            <div className="flex flex-wrap">
                {posts && posts.map(post => <PostCard key={post.id} post={post}/>)}
            </div>

        </div>
    )
};

export default Explore;