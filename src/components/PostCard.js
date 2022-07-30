import React from 'react';
import {Link} from "react-router-dom";

const PostCard = ({post}) => (
    <Link to={`/posts/${post.id}`} className="p-4">
        <span className="block p-4 rounded-md shadow w-96">
            <span className="block text-start font-sm text-gray-800 text-xs font-medium leading-1 first-letter:uppercase">
                <span className="text-gray-600 font-light px-0.5">By:</span>
                {post.user.username}</span>

            <span className="block text-start font-bold text-lg text-slate-700 mt-2"> {post.title}</span>
            <span className="block text-slate-600 text-sm py-1.5"> {post.content}</span>
            <span className="block text-end text-gray-600 font-light px-0.5 lowercase text-xs mt-2">{post.createdAt}</span>


        </span>

    </Link>
);

export default PostCard;

