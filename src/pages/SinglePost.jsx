import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import {Link} from "react-router-dom";

const SinglePost = () => {
    return (
        <div className="single-post">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Post"/>
                <div className="user">
                    <img src="https://avatars.githubusercontent.com/u/11511274?v=4" alt="avatar"/>
                    <div className="info">
                        <span>Habib</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write/?edit=${2}`}>
                            <img src={Edit} alt="edit"/>
                        </Link>
                        <img src={Delete} alt="delete"/>
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <p>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi cum ducimus eveniet exercitationem explicabo illum, iste numquam odit officiis quaerat quis reprehenderit rerum soluta tempora vero voluptate! Odit, vel.<br/><br/></span><span>Ab, cumque cupiditate, enim harum hic id, nulla placeat porro quia rem similique suscipit. At earum eum mollitia praesentium. Ad aliquam autem blanditiis laborum minima nostrum odit, temporibus voluptas voluptate.<br/><br/></span><span>Aliquam cupiditate natus nihil reiciendis veritatis. Accusantium aliquam aliquid aperiam autem corporis doloribus, ex incidunt ipsum, iste itaque laboriosam maxime mollitia nam nihil obcaecati provident sed sit, veniam vitae voluptas?<br/><br/></span><span>Enim ex fugit iste minus, pariatur quibusdam! Asperiores autem blanditiis, consequuntur dolores dolorum, eum eveniet ex facere fugit laudantium nisi non officiis omnis perferendis possimus quam unde, vel voluptas voluptatum!<br/><br/></span><span>At dolorum itaque minima necessitatibus placeat quia sed unde. Dignissimos ducimus incidunt iusto quaerat rerum. Adipisci culpa deserunt ducimus maxime minus molestias officia officiis quibusdam, sunt tempora! Architecto, qui sapiente. At dolorum itaque minima necessitatibus placeat quia sed unde. Dignissimos ducimus incidunt iusto quaerat rerum. Adipisci culpa deserunt ducimus maxime minus molestias officia officiis quibusdam, sunt tempora! Architecto, qui sapiente.<br/><br/></span>
                    </p>
                </p>
            </div>
            <div className="menu">m</div>
        </div>
    );
}

export default SinglePost;
