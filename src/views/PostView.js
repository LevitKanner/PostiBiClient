import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import {deletePost, getPost} from "../api/PostApi";
import {LoaderView} from "../components/LoaderView";
import {useIsMine} from "../utils/hooks/useIsMine";

const PostView = () => {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useQuery(['getPost'], () => getPost(id))
    const isMine = useIsMine(data?.data?.payload)
    const {mutate} = useMutation(() => deletePost(id))

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            mutate()
        }
    }

    if (isLoading) {
        return <LoaderView/>
    }

    return (
        <section className="max-w-2xl mx-auto">

            <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
                post Image
            </div>
            <Link to={`/users/${data.data.payload.user.id}`} className="flex mt-3 items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs bg-gray-100"> profile </div>
                <div className="ml-3 flex flex-col space-y-1">
                    <p className="text-xs"> {data.data.payload.user?.username}</p>
                    <p className="text-xs"> {data.data.payload.user?.email}</p>
                </div>
            </Link>
            <h2 className="text-center uppercase font-bold text-lg"> {data.data.payload.title}</h2>
            <article className="my-3 font-normal text-slate-600">
                {data.data.payload.content}
            </article>
            {isMine && <div className="w-full flex flex-col sm:flex-row sm:space-x-4">
                <Link to={`/posts/update/${id}`} className="w-full sm:w-1/2 bg-yellow-600 text-white p-1.5 text-center rounded-md"> Update </Link>
                <button className="w-full sm:w-1/2 bg-red-600 text-white p-1.5 rounded-md" onClick={handleDelete}> Delete </button>
            </div>}
        </section>
    )
}


export default PostView;