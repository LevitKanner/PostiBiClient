import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getPost} from "../api/PostApi";
import {LoaderView} from "../components/LoaderView";

const PostView = () => {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useQuery(['getPost'], () => getPost(id))

    if (isLoading) {
        return <LoaderView/>
    }

    return (
        <section className="max-w-2xl mx-auto">

            <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
                post Image
            </div>
            <div className="flex mt-3 items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs bg-gray-100"> profile </div>
                <div className="ml-3 flex flex-col space-y-1">
                    <p className="text-xs"> {data.data.payload.user?.username}</p>
                    <p className="text-xs"> {data.data.payload.user?.email}</p>
                </div>
            </div>
            <h2 className="text-center uppercase font-bold text-lg"> {data.data.payload.title}</h2>
            <article className="mt-3 font-normal text-slate-600">
                {data.data.payload.content}
            </article>
        </section>
    )
}


export default PostView;