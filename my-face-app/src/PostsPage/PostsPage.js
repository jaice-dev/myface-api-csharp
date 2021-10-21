import React, {useEffect, useState} from "react";
import "./PostsPage.scss"
import { getPosts } from "../apiRepo/postsRepo";

const PostsPage = () => {
    const [postsData, setPostsData] = useState(null);

    //TODO make api call in component or app and pass down as prop

    useEffect(() => {
        getPosts()
            .then(response => setPostsData(response))
            .catch(() => setPostsData(null))
    }, [])

    return (
        <div className={"posts-page"}>
            <h1 className={"page-title"}>My Face Posts</h1>
            <section>
                {
                    postsData !== null
                        ?
                        postsData.items.map((post, index) => {
                            return (
                                <IndividualPost post={post} />
                            )
                        })
                        :
                        "there is no data"
                }
            </section>
        </div>
    )

}

const IndividualPost = (props) => {
    return(
        <div className={"list-of-posts"}>
            <User userInfo={props.post} />
        </div>
    )
}

const User = (props) =>
    <div className={"post-user"}>
        <div className={"post-user-info"}>
            <p className={"display-name"}>{props.userInfo.postedBy.displayName}</p>
            <p className={"post-time"}>{props.userInfo.postedAt}</p>
        </div>
    </div>
    // props.userInfo
    // Display name
    // Time posted.
    // Image.




export default PostsPage