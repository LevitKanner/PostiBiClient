import React, {useState} from 'react';
import TextField from "../components/TextField";
import TextAreaField from "../components/TextAreaField";
import {createPost} from "../api/PostApi";
import {useMutation} from "@tanstack/react-query";
import {PulseLoader} from "react-spinners";
import Modal from "../components/Modal";

const CreatePostView = (props) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");
    const user = JSON.parse(localStorage.getItem("user"))
    const {mutate: create, data, error, isError, isLoading} = useMutation(() => createPost( {title, content}, user.id));

    const handleCreatePost = (e) => {
        e.preventDefault()
        create()
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="px-6 py-10 rounded-md shadow-md mt-6 border">
                <form className="flex flex-col space-y-4" onSubmit={handleCreatePost}>
                    <TextField label="Title" onChange={e => setTitle(e.target.value)} value={title} required/>
                    <TextAreaField label="Content" onChange={e => setContent(e.target.value)} value={content}/>
                    <button className="primaryButton" type="submit" disabled={isLoading}>
                        {!isLoading && "Post"}
                        <PulseLoader loading={isLoading} size={12} color="#fff"/>
                    </button>
                </form>
            </div>
            {data && <Modal modalType={'success'}/> }
        </div>
    )
};

export default CreatePostView;