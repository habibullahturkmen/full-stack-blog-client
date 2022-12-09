import React from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [posts, setPosts] = React.useState([]);

    const category = useLocation().search;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/posts${category}`);
                setPosts(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    },[category]);

    return (
        <div className="home">
          <div className="posts">
              {
                  posts.map(post => (
                      <div className="post" key={post.id}>
                          <div className="img">
                              <img src={post.img} alt="Post"/>
                          </div>
                          <div className="content">
                              <Link className="link" to={`/post/${post.id}`}>
                                  <h1>{post.title}</h1>
                              </Link>
                              <p>{post.desc}</p>
                              <button>Read More</button>
                          </div>
                      </div>
                  ))
              }
          </div>
        </div>
    );
}

export default Home;
