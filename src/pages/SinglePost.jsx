import React, {useContext} from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment/moment";
import {AuthContext} from "../context/authContext";

const SinglePost = () => {

    const [post, setPost] = React.useState({});
    const pathArray = useLocation().pathname.split("/");
    const postId = pathArray[pathArray.length - 1];
    const { currentUser } = useContext(AuthContext);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/posts/${postId}`);
                setPost(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    },[postId]);

    return (
        <div className="single-post">
            <div className="content">
                <img src={post?.img} alt="Post"/>
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="avatar"/>}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write/?edit=${2}`}>
                                <img
                                    src={Edit}
                                    alt="edit"
                                />
                            </Link>
                            <img
                                src={Delete}
                                alt="delete"
                            />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
            </div>
            <Menu />
        </div>
    );
}

export default SinglePost;
