import React, {useState} from 'react';
import TextField from "../components/TextField";
import {Link} from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({username, password})
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="rounded-lg shadow-lg border bg-white p-6 md:w-2/3 lg:w-2/5">
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <TextField label="Username" onChange={e => setUsername(e.target.value)}/>
                    <TextField label="Password" type="password" onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="primaryButton"> Login</button>
                    <p className="text-sm self-end text-slate-500">Don't have an account yet?
                        <Link to="/register" className="text-sky-600 ml-2">Register</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;