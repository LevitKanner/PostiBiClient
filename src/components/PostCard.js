import React from 'react';
import {Link} from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";
import {useIsMine} from "../utils/hooks/useIsMine";
import {useMutation} from "@tanstack/react-query";
import {deletePost} from "../api/PostApi";

const PostCard = ({post}) => {
    const isMine = useIsMine(post);
    const {mutate} = useMutation(() => deletePost(post.id))

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            mutate()
        }
    }

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="block h-36 p-4 rounded-md shadow relative">
            <span
                className="block text-start font-sm text-gray-800 text-xs font-medium leading-1 first-letter:uppercase">
                <span className="text-gray-600 font-light px-0.5">By:</span>
                <Link to={`/users/${post.user.id}`}>{post.user.username}</Link>
            </span>

                <Link to={`/posts/${post.id}`}>
                    <span className="block text-start font-bold text-lg text-slate-700 mt-2"> {post.title}</span>
                    <span className="block text-slate-600 text-sm py-1.5"> {post.content}</span>
                    <span
                        className="block text-end text-gray-600 font-light px-0.5 lowercase text-xs mt-2">{post.createdAt}</span>
                </Link>
                {isMine && <button className="absolute -top-2.5 -right-2.5 h-6 w-6 rounded-full" onClick={handleDelete}>
                    <AiFillDelete className="text-red-700 h-6 w-6"/>
                </button>}
            </div>
        </div>
    )
};

export default PostCard;

