import React, {useEffect, useState} from "react";
import "./PostsPage.scss"
import { getPosts } from "../apiRepo/postsRepo";
import Emoji from "../Emoji/Emoji";
import moment from "moment"
import {deletePost} from "../apiRepo/postsRepo";

const PostsPage = () => {
    const [postsData, setPostsData] = useState(null);

    //TODO make api call in component or app and pass down as prop

    useEffect(() => {
        getPosts()
            .then(response => setPostsData(response.items))
            .catch(() => setPostsData(null))
    }, [])

    const IndividualPost = (props) => {
        return(
            <li className={"list-of-posts"}>
                <User userInfo={props.post} />

                <div className={"post-message"}>
                    <p className={"post-message"}>{props.post.message}</p>
                    <img className={"post-image"} src={props.post.imageUrl} alt={"post picture"} />
                </div>

                <div className={"post-data-container"}>
                    <div className="post-data">
                        <p className={"post-likes"}><Emoji symbol="👍" label="thumbs-up"/> {props.post.likes.length}</p>
                        <p className={"post-dislikes"}><Emoji symbol="👎" label="thumbs-down"/> {props.post.dislikes.length}</p>
                    </div>
                    <DeleteButton post={props.post}/>
                </div>
            </li>
        )
    }

    const User = (props) =>
        <div className={"post-user"}>
            <div className={"post-user-info"}>
                <p className={"display-name"}>{props.userInfo.postedBy.displayName}</p>
                <p className={"post-time"}>{moment(props.userInfo.postedAt).format('LLL')}</p>
            </div>
            <img className={"profile-picture"} src={props.userInfo.postedBy.profileImageUrl} alt="Profile picture"/>
        </div>

    const DeleteButton = (props) =>
        <button className={"delete-button"} onClick={() => handleDelete(props.post.id)}>Delete</button>

    const handleDelete = (id) => {
        deletePost(id);
        const newPostslist = postsData.filter(post => post.id !== id)
        setPostsData(newPostslist);
    }


    return (
        <div className={"posts-page"}>
            <h1 className={"page-title"}>My Face Posts</h1>
            <article className={"posts-article"}>
                <ul className={"pageContent"}>
                    {
                        postsData !== null
                            ?
                            postsData.map((post, index) => {
                                return (
                                    <IndividualPost post={post} />
                                )
                            })
                            :
                            "there is no data"
                    }
                </ul>
            </article>
        </div>
    )
}

export default PostsPage