import TextField from "../components/TextField";
import {Link} from "react-router-dom";
import {useState} from "react";
import {PulseLoader} from "react-spinners";
import {useMutation} from "@tanstack/react-query";
import {register} from "../api/Auth";
import Modal from "../components/Modal";

const Register = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {mutate: signUp, isError, error, isLoading, data} = useMutation(register);

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp({firstName, lastName, username, email, password, confirmPassword})
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="rounded-lg shadow-lg border bg-white p-6 md:w-2/3 lg:w-2/5">

                {isError && error?.response?.data.map((e, i) => <span key={i} className="error"> {e}</span>)}

                <form className="flex flex-col space-y-4 mt-1.5" onSubmit={handleSubmit}>
                    <TextField label="First Name" onChange={e => setFirstName(e.target.value)} required/>
                    <TextField label="Last Name" onChange={e => setLastName(e.target.value)} required/>
                    <TextField label="Username" onChange={e => setUsername(e.target.value)} required/>
                    <TextField label="Email" type='email' onChange={e => setEmail(e.target.value)} required/>
                    <TextField label="Password" type="password" onChange={e => setPassword(e.target.value)} required/>
                    <TextField label="Confirm Password" type="password"
                               onChange={e => setConfirmPassword(e.target.value)} required/>
                    <button type="submit" className="primaryButton" disabled={isLoading}>
                        {!isLoading && "Register"}
                        <PulseLoader loading={isLoading} size={12} color="#fff"/>
                    </button>
                    <p className="text-sm self-end text-slate-500">Already have an account?
                        <Link to="/login" className="text-sky-600 ml-2">Login</Link></p>
                </form>
                {data && <Modal modalType={'success'}/>}
            </div>
        </div>
    )
}
export default Register;