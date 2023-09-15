import React,{ useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    return (
        <div className="auth">

            <Login />
            <Register />

        </div>

    );
};

const Login = () => {

    const [_, setCookies] = useCookies(["access_token"]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //defining a useCookies hook      //name of cookie(access_token)

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        try{

            const response = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });

            //setCookies to token from user 
            setCookies("access_token", response.data.token);
            //getting userID 
            window.localStorage.setItem("userID", response.data.userID);
            //navigate to home page whener user logs in
            navigate("/form");

        } catch(err) {
            console.error(err);
        }
    }
    return (
        <Form 
            //passing values in form
            username={username} 
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"
            onSubmit={onSubmit}
        />
    );
};

const Register = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const onSubmit = async (event) => {
        //this prevent page from refreshing on submit
        event.preventDefault();

        try{
            //syntax: await axios.post(url , object);
            await axios.post("http://localhost:3001/auth/register", {
                //object for the body for the request
                username,
                password,
            });
            alert("Registration Completed! Now Log in.");
        } catch(err) {
            //this is basically console.log instead it will show in red
            console.error(err);
        }

    };

    return (
        <Form 
            //passing value in props
            username={username} 
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Register"
            onSubmit={onSubmit}
        />
    );
};

//component form
const Form = ({username,setUsername, password, setPassword,label,
onSubmit}) => {
    return (
     <div className="auth-container">

            <form onSubmit={onSubmit}>

                <h2> {label} </h2>
                <div className="form-group">
                    <label className="username" htmlFor="username"> Username: </label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                 <div className="form-group">
                    <label className="pasword" 
                    htmlFor="password"> Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>

                <button type="submit" className="btn"> {label} </button>

            </form>

        </div>
    );
}