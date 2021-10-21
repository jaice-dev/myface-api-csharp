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
                        "there is data"
                        :
                        "there is no data"
                }
            </section>
        </div>
    )

}

export default PostsPage