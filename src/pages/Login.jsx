import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/authContext";

const Login = () => {

    const [inputs, setInputs] = React.useState({
        username: "",
        password: "",
    });
    const [error, setError] = React.useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (event) => {
        setInputs(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input
                    required type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    required type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Login
                </button>
                {error && <p>{error}</p>}
                <span>Don't have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    );
}

export default Login;
