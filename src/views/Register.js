import TextField from "../components/TextField";
import {Link} from "react-router-dom";
import {useState} from "react";

const Register = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({firstName, lastName, username, email, password, confirmPassword})
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="rounded-lg shadow-lg border bg-white p-6 md:w-2/3 lg:w-2/5">
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <TextField label="First Name" onChange={e => setFirstName(e.target.value)} required/>
                    <TextField label="Last Name" onChange={e => setLastName(e.target.value)} required/>
                    <TextField label="Username" onChange={e => setUsername(e.target.value)} required/>
                    <TextField label="Email" type='email' onChange={e => setEmail(e.target.value)} required/>
                    <TextField label="Password" type="password" onChange={e => setPassword(e.target.value)} required/>
                    <TextField label="Confirm Password" type="password"
                               onChange={e => setConfirmPassword(e.target.value)} required/>
                    <button type="submit" className="primaryButton"> Register</button>
                    <p className="text-sm self-end text-slate-500">Already have an account?
                        <Link to="/login" className="text-sky-600 ml-2">Login</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Register;