import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getPost} from "../api/PostApi";

const PostView = (props) => {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useQuery(['getPost'], () => getPost(id))
    console.log(id)

    return <p> post {JSON.stringify(data?.data?.payload)} </p>
}


export default PostView;