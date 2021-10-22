import React from "react";
import './CreatePost.scss'

const CreatePost = () => {
    return (
        <div className="post-form-container">
            <form method="post" action="/posts/create">
                <fieldset>
                    <legend>Create a New Post</legend>
                    <label htmlFor="userId">User Id</label><br/>
                    <input type="number" id="userId" name="userId" alt="user id input box"/><br/>

                    <label htmlFor="Message">Input Message</label><br/>
                    <textarea id="Message" type="text" name="Message"></textarea><br/>

                    <label htmlFor="ImageUrl">Input Image</label><br/>
                    <input id="ImageUrl-image" type="text" name="ImageUrl"/><br/>

                    <input type="submit"/>
                </fieldset>
            </form>
        </div>
    )
}

export default CreatePost