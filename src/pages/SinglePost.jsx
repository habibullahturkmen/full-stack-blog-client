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
    const navigate = useNavigate();

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

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }

    return (
        <div className="single-post">
            <div className="content">
                <img src={`../upload/${post?.img}`} alt="Post"/>
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="avatar"/>}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write/?edit=${2}`} state={post}>
                                <img
                                    src={Edit}
                                    alt="edit"
                                />
                            </Link>
                            <img
                                src={Delete}
                                alt="delete"
                                onClick={handleDelete}
                            />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
            </div>
            <Menu category={post.cat} />
        </div>
    );
}

export default SinglePost;
