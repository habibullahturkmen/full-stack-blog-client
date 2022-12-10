import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import moment from "moment/moment";

const WritePost = () => {

    const state = useLocation().state;
    const [title, setTitle] = React.useState(state?.title || "");
    const [description, setDescription] = React.useState(state?.desc || "");
    const [file, setFile] = React.useState(null);
    const [category, setCategory] = React.useState(state?.cat || "");

    const navigate = useNavigate();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const response = await axios.post("/upload", formData);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const imgUrl = await upload();

        try {
            state
                ? await axios.put(`/posts/${state.id}`, {
                    title: title,
                    desc: description,
                    cat: category,
                    img: file ? imgUrl : "",
                })
                : await axios.post("/posts/", {
                    title: title,
                    desc: description,
                    cat: category,
                    img: file ? imgUrl : "",
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="write-post">
            <div className="content">
                <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <div className="editor-container">
                    <ReactQuill className="editor" theme="snow" value={description} onChange={setDescription} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input
                        style={{display: "none"}}
                        type="file"
                        name="file"
                        id="file-id"
                        onChange={(event) => setFile(event.target.files[0])}
                    />
                    <label className="upload-image" htmlFor="file-id">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={category === "art"}
                            name="cat"
                            value="art"
                            id="art-id"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <label htmlFor="art-id">Art</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={category === "science"}
                            name="cat"
                            value="science"
                            id="science-id"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <label htmlFor="science-id">Science</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={category === "technology"}
                            name="cat"
                            value="technology"
                            id="technology-id"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <label htmlFor="technology-id">Technology</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={category === "cinema"}
                            name="cat"
                            value="cinema"
                            id="cinema-id"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <label htmlFor="cinema-id">Cinema</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={category === "design"}
                            name="cat"
                            value="design"
                            id="design-id"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <label htmlFor="design-id">Design</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            checked={category === "food"}
                            name="cat"
                            value="food"
                            id="food-id"
                            onChange={(event) => setCategory(event.target.value)}
                        />
                        <label htmlFor="food-id">Food</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WritePost;
