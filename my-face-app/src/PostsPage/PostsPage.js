import React, {useEffect, useState} from "react";
import "./PostsPage.scss"

const PostsPage = () => {
    const [postsData, setPostsData] = useState(null);

    //TODO make api call in component or app and pass down as prop

    useEffect(() => {
        fetch("https://localhost:5001/posts")
            .then(response => response.json())
            .then(json => setPostsData(json))
            .catch(error => console.log("Oh no, it went wrong", error))
            .finally(() => console.log("Request finished."))
    }, [])

    return (
        <div className={"posts-page"}>
            <h1 className={"page-title"}>My Face Posts</h1>
            <section>
            </section>
        </div>
    )

}

export default PostsPage