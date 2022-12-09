import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePost = () => {

    const [value, setValue] = React.useState("");
    console.log(value)
    return (
        <div className="write-post">
            <div className="content">
                <input type="text" placeholder="Title" />
                <div className="editor-container">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
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
                    <input style={{display: "none"}} type="file" name="file" id="file-id" />
                    <label className="upload-image" htmlFor="file-id">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="art" id="art-id" />
                        <label htmlFor="art-id">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="science" id="science-id" />
                        <label htmlFor="science-id">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="technology" id="technology-id" />
                        <label htmlFor="technology-id">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="cinema" id="cinema-id" />
                        <label htmlFor="cinema-id">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="design" id="design-id" />
                        <label htmlFor="design-id">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" id="food-id" />
                        <label htmlFor="food-id">Food</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WritePost;
