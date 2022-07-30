import React, {useEffect, useState} from 'react';
import TextField from "../components/TextField";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {login} from "../api/Auth";
import {PulseLoader} from "react-spinners";
import {useAuthContext} from "../context/AuthProvider";
import {useMutation} from "@tanstack/react-query";

const Login = () => {
    const {setAuth} = useAuthContext();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState('')
    const {mutate: signIn, data, isLoading, error} = useMutation(login);

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn({username, password})
        setPassword('')
    }

    useEffect(() => {
        if (data) {
            const {tokens, user: authUser} = data?.data?.payload;
            localStorage.setItem("access", tokens.accessToken)
            localStorage.setItem("refresh", tokens.refreshToken)
            localStorage.setItem("user", JSON.stringify(authUser));
            setAuth({authUser, tokens});
            navigate(from, {replace: true})
        }
        if (error) {
            setLoginError(error.response?.data?.message)
        }
    }, [data, error])


    useEffect(() => {
        setLoginError('')
    }, [username, password])

    return (
        <section className="flex items-center justify-center h-screen">
            <div className="rounded-lg shadow-lg border bg-white p-6 md:w-2/3 lg:w-2/5">
                {loginError && <span className="error">{loginError}</span>}

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <TextField label="Username" onChange={e => setUsername(e.target.value)} value={username}
                               autoComplete="off"/>
                    <TextField label="Password" type="password" onChange={e => setPassword(e.target.value)}
                               value={password}/>
                    <button type="submit" className="primaryButton" disabled={isLoading}>
                        {!isLoading && "Login"}
                        <PulseLoader loading={isLoading} size={12} color="#fff"/>
                    </button>
                    <p className="text-sm self-end text-slate-500">Don't have an account yet?
                        <Link to="/register" className="text-sky-600 ml-2">Register</Link></p>
                </form>
            </div>
        </section>
    );
}

export default Login;