import React, {useState} from 'react';
import TextField from "../components/TextField";
import TextAreaField from "../components/TextAreaField";
import {createPost} from "../api/PostApi";
import {useMutation} from "@tanstack/react-query";

const CreatePostView = (props) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");
    const {mutate: create, data, error, isError, isLoading} = useMutation(createPost);

    const handleCreatePost = (e) => {
        e.preventDefault()
        create({title, content})
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="px-6 py-10 rounded-md shadow-md mt-6 border">
                <form className="flex flex-col space-y-4" onSubmit={handleCreatePost}>
                    <TextField label="Title" onChange={e => setTitle(e.target.value)}/>
                    <TextAreaField label="Content" onChange={e => setContent(e.target.value)}/>
                    <button className="primaryButton" type="submit"> Create Post </button>
                </form>
            </div>
        </div>
    )
};

export default CreatePostView;