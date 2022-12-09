import React from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [inputs, setInputs] = React.useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = React.useState(null);

    const navigate = useNavigate();

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
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input
                    required
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                />
                <input
                    required
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    required
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                >
                    Register
                </button>
                {error && <p>{error}</p>}
                <span>Have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
}

export default Register;
