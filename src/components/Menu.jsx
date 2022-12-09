import React from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Navbar = ({category}) => {

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/posts/?cat=${category}`);
                setPosts(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    },[category]);

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {
                posts.map(post => (
                    <div className="post" key={post.id}>
                        <img src={post.img} alt="post"/>
                        <h2>{post.title}</h2>
                        <button>Read More</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Navbar;
