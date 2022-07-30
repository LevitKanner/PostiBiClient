import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "../api/PostApi";
import {PulseLoader} from "react-spinners";
import PostCard from "../components/PostCard";

const Explore = () => {
    const {data, isLoading, error, isError} = useQuery(['getAllPosts'], getAllPosts);
    const posts = data?.data?.payload;
    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <PulseLoader loading={isLoading} size={14} color="#42b3f5" speedMultiplier={0.8}/>
            </div>
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