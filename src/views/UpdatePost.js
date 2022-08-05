import React, {useEffect, useState} from 'react';
import TextField from "../components/TextField";
import TextAreaField from "../components/TextAreaField";
import {PulseLoader} from "react-spinners";
import Modal from "../components/Modal";
import {Navigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getPost, updatePost} from "../api/PostApi";
import {useMutation} from "@tanstack/react-query";
import {useIsMine} from "../utils/hooks/useIsMine";

const UpdatePost = () => {
    const {id} = useParams()
    const {data, isLoading, error, isError} = useQuery(['post', id], () => getPost(id))
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const {mutate, data: updateRes, isLoading: updating} = useMutation(() => updatePost({title, content}, id))

    const isMine = useIsMine(data?.data?.payload)

    useEffect(() => {
        setTitle(data?.data?.payload.title)
        setContent(data?.data?.payload.content)

    }, [data?.data?.payload.content, data?.data?.payload.title])

    const handleUpdate = (e) => {
        e.preventDefault();
        mutate();
    }

    if (isLoading) {
        return <PulseLoader loading={true} size={24} color="#059ff2"/>
    }

    if(!isMine) {
       return <Navigate to="/notfound"/>
    }


    return (
        <div className="max-w-xl mx-auto">
            <div className="px-6 py-10 rounded-md shadow-md mt-6 border">
                <form className="flex flex-col space-y-4" onSubmit={handleUpdate}>
                    <TextField label="Title" onChange={e => setTitle(e.target.value)}
                               value={title}/>
                    <TextAreaField label="Content" onChange={e => setContent(e.target.value)}
                                   value={content}/>
                    <button className="primaryButton" type="submit" disabled={isLoading}>
                        {!isLoading && "Update Post"}
                        <PulseLoader loading={updating} size={12} color="#fff"/>
                    </button>
                </form>
            </div>
            {updateRes && <Modal modalType={'success'}/>}
        </div>
    )
};

export default UpdatePost;